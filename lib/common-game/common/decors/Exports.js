var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { ErrorType, GlobalData } from "../GlobalData";
const AsyncFunction = (async () => {
}).constructor;
function Exports(exportName) {
  return /* @__PURE__ */ __name(function actualDecorator(originalMethod, context) {
    if (context.private) {
      throw new Error("Exports does not work on private methods, please mark the method as public");
    }
    context.addInitializer(function() {
      let exportCb;
      if (originalMethod instanceof AsyncFunction) {
        exportCb = /* @__PURE__ */ __name(async (...args) => {
          try {
            return await originalMethod.call(this, ...args);
          } catch (err) {
            GlobalData.OnError(ErrorType.Export, err, { name: exportName });
            throw err;
          }
        }, "exportCb");
      } else {
        exportCb = /* @__PURE__ */ __name((...args) => {
          try {
            return originalMethod.call(this, ...args);
          } catch (err) {
            GlobalData.OnError(ErrorType.Export, err, { name: exportName });
            throw err;
          }
        }, "exportCb");
      }
      exports(exportName, exportCb);
    });
  }, "actualDecorator");
}
__name(Exports, "Exports");
export {
  Exports
};
