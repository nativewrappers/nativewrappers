var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { ErrorType, GlobalData } from "../GlobalData";
function SetTick() {
  return /* @__PURE__ */ __name(function actualDecorator(originalMethod, context) {
    if (context.private) {
      throw new Error("SetTick does not work on private types, please mark the field as public");
    }
    context.addInitializer(function() {
      setTick(async () => {
        try {
          await originalMethod.call(this);
        } catch (e) {
          GlobalData.OnError(ErrorType.Tick, e);
        }
      });
    });
  }, "actualDecorator");
}
__name(SetTick, "SetTick");
function SetImmediate() {
  return /* @__PURE__ */ __name(function actualDecorator(originalMethod, context) {
    if (context.private) {
      throw new Error("SetTick does not work on private types, please mark the field as public");
    }
    context.addInitializer(function() {
      setImmediate(async () => {
        try {
          await originalMethod.call(this);
        } catch (e) {
          GlobalData.OnError(ErrorType.Immediate, e);
        }
      });
    });
  }, "actualDecorator");
}
__name(SetImmediate, "SetImmediate");
export {
  SetImmediate,
  SetTick
};
