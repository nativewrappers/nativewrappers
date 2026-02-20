var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { ErrorType, GlobalData } from "../GlobalData";
function OnTick(contextName) {
  return /* @__PURE__ */ __name(function actualDecorator(originalMethod, context) {
    if (context.private) {
      throw new Error("SetTick does not work on private types, please mark the field as public");
    }
    context.addInitializer(function() {
      setTick(async () => {
        try {
          await originalMethod.call(this);
        } catch (e) {
          GlobalData.OnError(ErrorType.Tick, e, contextName ? { name: contextName } : {});
        }
      });
    });
  }, "actualDecorator");
}
__name(OnTick, "OnTick");
const SetTick = OnTick;
function OnInit(contextName) {
  return /* @__PURE__ */ __name(function actualDecorator(originalMethod, context) {
    if (context.private) {
      throw new Error("SetTick does not work on private types, please mark the field as public");
    }
    context.addInitializer(function() {
      setImmediate(async () => {
        try {
          await originalMethod.call(this);
        } catch (e) {
          GlobalData.OnError(ErrorType.Tick, e, contextName ? { name: contextName } : {});
        }
      });
    });
  }, "actualDecorator");
}
__name(OnInit, "OnInit");
const SetImmediate = OnInit;
export {
  OnInit,
  OnTick,
  SetImmediate,
  SetTick
};
