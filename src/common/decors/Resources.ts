import { Event } from "./Events";

type GlobalThis = { RESOURCE_WRAPPER?: ResourceWrapper };

type ResourceName = string;

type FunctionCall = () => void;

type ResourceFunctionMap = Map<ResourceName, Array<FunctionCall>>;

class ResourceWrapper {
  #on_resource_start: ResourceFunctionMap = new Map();
  #on_resource_stop: ResourceFunctionMap = new Map();

  #add_or_init(resource_fn_map: ResourceFunctionMap, resource_name: ResourceName, fn: FunctionCall) {
    const fn_array = resource_fn_map.get(resource_name);
    if (fn_array) {
      fn_array.push(fn);
    } else {
      resource_fn_map.set(resource_name, [fn]);
    }
  }

  /**
   * Adds a function to get called whenever a resource is started
   * @param resource_name The resource name to add to the start listener.
   * @param fn The function to call
   */
  add_to_resource_start(resource_name: ResourceName, fn: FunctionCall) {
    this.#add_or_init(this.#on_resource_start, resource_name, fn);
  }

  /**
   * Adds a function to get called whenever a resource is stopped
   * @param resource_name The resource name to add to the stop listener.
   * @param fn The function to call
   */
  add_to_resource_stop(resource_name: ResourceName, fn: FunctionCall) {
    this.#add_or_init(this.#on_resource_stop, resource_name, fn);
  }

  #call_for_resource(resource_fn_map: ResourceFunctionMap, resource_name: ResourceName) {
    const functions = resource_fn_map.get(resource_name);
    if (functions) {
      for (const fn of functions) {
        fn();
      }
    }
  }

  @Event("onResourceStart")
  on_resource_start(resource_name: ResourceName) {
    this.#call_for_resource(this.#on_resource_start, resource_name);
  }

  @Event("onResourceStop")
  on_resource_stop(resource_name: ResourceName) {
    this.#call_for_resource(this.#on_resource_stop, resource_name);
  }
}

// hacky way so we don't double initialize this across common/fivem/redm
if (!(globalThis as GlobalThis).RESOURCE_WRAPPER) {
  (globalThis as GlobalThis).RESOURCE_WRAPPER = new ResourceWrapper();
}

const RESOURCE_WRAPPER = (globalThis as GlobalThis).RESOURCE_WRAPPER!;

const onResourceStart = (resource: ResourceName, originalMethod: any) => {
  if (GetResourceState(resource) === "started") {
    setImmediate(() => originalMethod.call());
  }
  RESOURCE_WRAPPER.add_to_resource_start(resource, originalMethod);
};

/**
 * Called whenever the specified resource is started, this will be called once on once on resource start if the resource is started.
 */
export function OnResourceStart(resource = GetCurrentResourceName()) {
  return function actualDecorator(originalMethod: any, context: ClassMethodDecoratorContext) {
    if (context.private) {
      throw new Error("OnResourceStart does not work on private types, please mark the field as public");
    }
    if (context.static) {
      onResourceStart(resource, originalMethod);
    } else {
      context.addInitializer(function () {
        onResourceStart(resource, originalMethod.bind(this));
      });
    }
  };
}

/**
 * Called whenever the specified resource is stopped.
 */
export function OnResourceStop(resource = GetCurrentResourceName()) {
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
