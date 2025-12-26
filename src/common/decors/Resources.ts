import { Event } from "./Events";

type GlobalThis = { RESOURCE_WRAPPER?: ResourceWrapper };

type ResourceName = string;

type ResourceOrGlobal = ResourceName | "global";

type FunctionCall = (resource_name?: string) => void;

type ResourceFunctionMap = Map<ResourceName, Array<FunctionCall>>;

class ResourceWrapper {
  #on_resource_start: ResourceFunctionMap = new Map();
  #on_resource_stop: ResourceFunctionMap = new Map();

  // used for global resource/start/stops, callers have to define their listener
  // as "global"
  #global_on_resource_start: FunctionCall[] = [];
  #global_on_resource_stop: FunctionCall[] = [];

  #add_or_init(resource_fn_map: ResourceFunctionMap, resource_name: ResourceName, fn: FunctionCall) {
    const fn_array = resource_fn_map.get(resource_name);
    if (fn_array) {
      fn_array.push(fn);
    } else {
      resource_fn_map.set(resource_name, [fn]);
    }
  }

  /**
   * Adds a function to get called whenever a resource is started, if the current
   * {@link resource_name} is started then it will immediately call the function.
   * @param resource_name The resource name to add to the start listener.
   * @param fn The function to call
   */
  add_to_resource_start(resource_name: ResourceOrGlobal, fn: FunctionCall) {
    if (resource_name === "global") {
      this.#global_on_resource_start.push(fn);
    } else {
      // if the current resource is started we should instantly call the function.
      if (GetResourceState(resource_name) === "started") {
        setImmediate(() => fn(resource_name));
      }
      this.#add_or_init(this.#on_resource_start, resource_name, fn);
    }
  }

  /**
   * Adds a function to get called whenever a resource is stopped
   * @param resource_name The resource name to add to the stop listener.
   * @param fn The function to call
   */
  add_to_resource_stop(resource_name: ResourceOrGlobal, fn: FunctionCall) {
    if (resource_name === "global") {
      this.#global_on_resource_stop.push(fn);
    } else {
      this.#add_or_init(this.#on_resource_stop, resource_name, fn);
    }
  }

  #call_for_resource(resource_fn_map: ResourceFunctionMap, global_array: FunctionCall[], resource_name: ResourceName) {
    const functions = resource_fn_map.get(resource_name);
    if (functions) {
      for (const fn of functions) {
        try {
          fn(resource_name);
        } catch (e) {}
      }
    }

    for (const fn of global_array) {
      try {
        fn(resource_name);
      } catch (e) {}
    }
  }

  @Event("onResourceStart")
  private on_resource_start(resource_name: ResourceName) {
    this.#call_for_resource(this.#on_resource_start, this.#global_on_resource_start, resource_name);
  }

  @Event("onResourceStop")
  private on_resource_stop(resource_name: ResourceName) {
    this.#call_for_resource(this.#on_resource_stop, this.#global_on_resource_stop, resource_name);
  }
}

/*
 * Makes sure the resource wrapper is initialized before calling
 */
export const EnsureResourceWrapperInit = () => {
  // hacky way so we don't double initialize this across common/fivem/redm
  if (!(globalThis as GlobalThis).RESOURCE_WRAPPER) {
    (globalThis as GlobalThis).RESOURCE_WRAPPER = new ResourceWrapper();
  }
};

/*
 * Gets the global resource wrapper
 * NOTE: There is NO guarantee about the stability of this API, this is mainly
 * provided out of convience, when using this you should make sure that *all* of
 * your nativewrappers are up to date.
 */
export const GetResourceWrapper = (): ResourceWrapper => {
  EnsureResourceWrapperInit();
  return (globalThis as GlobalThis).RESOURCE_WRAPPER!;
};

EnsureResourceWrapperInit();

const RESOURCE_WRAPPER = (globalThis as GlobalThis).RESOURCE_WRAPPER!;

/**
 * Called whenever the specified resource is started, this will be called once on once on resource start if the resource is started.
 * NOTE: If you want to listen to *all* resource start/stop events you should send
 * {@link resource} as "global"
 */
export function OnResourceStart(resource: ResourceOrGlobal = GetCurrentResourceName()) {
  return function actualDecorator(originalMethod: any, context: ClassMethodDecoratorContext) {
    if (context.private) {
      throw new Error("OnResourceStart does not work on private types, please mark the field as public");
    }
    if (context.static) {
      RESOURCE_WRAPPER.add_to_resource_start(resource, originalMethod);
    } else {
      context.addInitializer(function () {
        RESOURCE_WRAPPER.add_to_resource_start(resource, originalMethod.bind(this));
      });
    }
  };
}

/**
 * Called whenever the specified resource is stopped.
 * NOTE: If you want to listen to *all* resource start/stop events you should send
 * {@link resource} as "global"
 */
export function OnResourceStop(resource: ResourceOrGlobal = GetCurrentResourceName()) {
  return function actualDecorator(originalMethod: any, context: ClassMethodDecoratorContext) {
    if (context.private) {
      throw new Error("OnResourceStop does not work on private types, please mark the field as public");
    }
    if (context.static) {
      RESOURCE_WRAPPER.add_to_resource_stop(resource, originalMethod);
    } else {
      context.addInitializer(function () {
        RESOURCE_WRAPPER.add_to_resource_stop(resource, originalMethod.bind(this));
      });
    }
  };
}
