var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { Event } from "./Events";
class ResourceWrapper {
  static {
    __name(this, "ResourceWrapper");
  }
  #on_resource_start = /* @__PURE__ */ new Map();
  #on_resource_stop = /* @__PURE__ */ new Map();
  #add_or_init(resource_fn_map, resource_name, fn) {
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
  add_to_resource_start(resource_name, fn) {
    this.#add_or_init(this.#on_resource_start, resource_name, fn);
  }
  /**
   * Adds a function to get called whenever a resource is stopped
   * @param resource_name The resource name to add to the stop listener.
   * @param fn The function to call
   */
  add_to_resource_stop(resource_name, fn) {
    this.#add_or_init(this.#on_resource_stop, resource_name, fn);
  }
  #call_for_resource(resource_fn_map, resource_name) {
    const functions = resource_fn_map.get(resource_name);
    if (functions) {
      for (const fn of functions) {
        fn();
      }
    }
  }
  @Event("onResourceStart")
  on_resource_start(resource_name) {
    this.#call_for_resource(this.#on_resource_start, resource_name);
  }
  @Event("onResourceStop")
  on_resource_stop(resource_name) {
    this.#call_for_resource(this.#on_resource_stop, resource_name);
  }
}
if (!globalThis.RESOURCE_WRAPPER) {
  globalThis.RESOURCE_WRAPPER = new ResourceWrapper();
}
const RESOURCE_WRAPPER = globalThis.RESOURCE_WRAPPER;
const onResourceStart = /* @__PURE__ */ __name((resource, originalMethod) => {
  if (GetResourceState(resource) === "started") {
    setImmediate(() => originalMethod.call());
  }
  RESOURCE_WRAPPER.add_to_resource_start(resource, originalMethod);
}, "onResourceStart");
function OnResourceStart(resource = GetCurrentResourceName()) {
  return /* @__PURE__ */ __name(function actualDecorator(originalMethod, context) {
    if (context.private) {
      throw new Error("OnResourceStart does not work on private types, please mark the field as public");
    }
    if (context.static) {
      onResourceStart(resource, originalMethod);
    } else {
      context.addInitializer(function() {
        onResourceStart(resource, originalMethod.bind(this));
      });
    }
  }, "actualDecorator");
}
__name(OnResourceStart, "OnResourceStart");
function OnResourceStop(resource = GetCurrentResourceName()) {
  return /* @__PURE__ */ __name(function actualDecorator(originalMethod, context) {
    if (context.private) {
      throw new Error("OnResourceStop does not work on private types, please mark the field as public");
    }
    if (context.static) {
      RESOURCE_WRAPPER.add_to_resource_stop(resource, originalMethod);
    } else {
      context.addInitializer(function() {
        RESOURCE_WRAPPER.add_to_resource_stop(resource, originalMethod.bind(this));
      });
    }
  }, "actualDecorator");
}
__name(OnResourceStop, "OnResourceStop");
export {
  OnResourceStart,
  OnResourceStop
};
