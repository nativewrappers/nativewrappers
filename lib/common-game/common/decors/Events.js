var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { ErrorType, GlobalData } from "../GlobalData";
const DisablePrettyPrint = /* @__PURE__ */ __name(() => GlobalData.EnablePrettyPrint = false, "DisablePrettyPrint");
const AsyncFunction = (async () => {
}).constructor;
function OnEvent(eventName) {
  return /* @__PURE__ */ __name(function actualDecorator(originalMethod, context) {
    if (context.private) {
      throw new Error("Event does not work on private methods, please mark the method as public");
    }
    context.addInitializer(function() {
      on(eventName, async (...args) => {
        try {
          return await originalMethod.call(this, ...args);
        } catch (e) {
          GlobalData.OnError(ErrorType.Event, e);
          REMOVE_EVENT_LOG: {
            if (!GlobalData.EnablePrettyPrint) return;
            console.error("------- EVENT ERROR --------");
            console.error(`Call to ${eventName} errored`);
            console.error(`Data: ${JSON.stringify(args)}`);
            globalThis.printError("event", e);
            console.error("------- END EVENT ERROR --------");
          }
        }
      });
    });
  }, "actualDecorator");
}
__name(OnEvent, "OnEvent");
const Event = OnEvent;
function OnNetEvent(eventName, remoteOnly = true) {
  return /* @__PURE__ */ __name(function actualDecorator(originalMethod, context) {
    if (context.private) {
      throw new Error("NetEvent does not work on private methods, please mark the method as public");
    }
    context.addInitializer(function() {
      const _t = this;
      onNet(eventName, async (...args) => {
        const src = source;
        if (_t.__permissionMap) {
          const permissions = _t.__permissionMap.get(context.name);
          if (permissions) {
            let hasPermission = false;
            for (const perm of permissions) {
              if (IsPlayerAceAllowed(src, perm)) {
                hasPermission = true;
                break;
              }
            }
            if (!hasPermission) {
              emit("@nativewrappers:no_permission", { eventName, method: context.name });
              return;
            }
          }
        }
        try {
          $CLIENT: {
            if (GlobalData.IS_CLIENT && remoteOnly && source !== 65535) {
              return;
            }
          }
          return await originalMethod.call(this, ...args);
        } catch (e) {
          GlobalData.OnError(ErrorType.NetEvent, e);
          REMOVE_NET_EVENT_LOG: {
            if (!GlobalData.EnablePrettyPrint) return;
            console.error("------- NET EVENT ERROR --------");
            console.error(`Call to ${eventName} errored`);
            console.error(`Caller: ${src}`);
            console.error(`Data: ${JSON.stringify(args)}`);
            globalThis.printError("net event", e);
            console.error("------- END NET EVENT ERROR --------");
          }
        }
      });
    });
  }, "actualDecorator");
}
__name(OnNetEvent, "OnNetEvent");
const NetEvent = OnNetEvent;
function OnNuiEvent(eventName, dontErrorWhenCbIsntInvoked = false) {
  return /* @__PURE__ */ __name(function actualDecorator(originalMethod, context) {
    if (context.private) {
      throw new Error("NuiEvent does not work on private methods, please mark the method as public");
    }
    context.addInitializer(function() {
      RegisterNuiCallback(eventName, async (data, cb) => {
        let wasInvoked = false;
        const cbWrapper = /* @__PURE__ */ __name((args) => {
          wasInvoked = true;
          cb(args);
        }, "cbWrapper");
        let retData;
        try {
          retData = await originalMethod.call(this, data, cbWrapper);
        } catch (e) {
          GlobalData.OnError(ErrorType.Nui, e);
          return;
        }
        if (!wasInvoked && !retData) {
          if (dontErrorWhenCbIsntInvoked) return;
          throw new Error(
            `Error in NuiEvent ${eventName} '@NuiEvent' expects you to return data in your callback, or to return from the function call`
          );
        }
        if (!wasInvoked) {
          cb(retData);
        }
      });
    });
  }, "actualDecorator");
}
__name(OnNuiEvent, "OnNuiEvent");
const NuiEvent = OnNuiEvent;
export {
  DisablePrettyPrint,
  Event,
  NetEvent,
  NuiEvent,
  OnEvent,
  OnNetEvent,
  OnNuiEvent
};
