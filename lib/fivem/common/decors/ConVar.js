var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { ErrorType, GlobalData } from "../GlobalData";
var ConVarType = /* @__PURE__ */ ((ConVarType2) => {
  ConVarType2[ConVarType2["String"] = 0] = "String";
  ConVarType2[ConVarType2["Integer"] = 1] = "Integer";
  ConVarType2[ConVarType2["Float"] = 2] = "Float";
  ConVarType2[ConVarType2["Boolean"] = 3] = "Boolean";
  return ConVarType2;
})(ConVarType || {});
const getConvarFunction = /* @__PURE__ */ __name((con_var_type) => {
  switch (con_var_type) {
    case 0 /* String */:
      return GetConvar;
    case 1 /* Integer */:
      return GetConvarInt;
    case 2 /* Float */:
      return GetConvarFloat;
    case 3 /* Boolean */:
      return GetConvarBool;
    // needed so typescript wont complain about "unreachable code" for the error below
    default:
  }
  throw new Error(`Got conVarType: ${con_var_type} but it was not a valid ConVar type, please refer to "ConVarType"`);
}, "getConvarFunction");
function ConVar(name, convarType, deserialize) {
  return /* @__PURE__ */ __name(function actualDecorator(_initialValue, context, ..._args) {
    if (context.private) {
      throw new Error("ConVar does not work on private types, please mark the field as public");
    }
    context.addInitializer(function() {
      const t = this;
      const defaultValue = Reflect.get(t, context.name);
      const conVarFunction = getConvarFunction(convarType);
      const defaultType = typeof defaultValue;
      if (defaultType !== "number" && defaultType !== "boolean" && defaultType !== "string") {
        if (defaultType === "function") {
          const error = new Error(
            `${name} has a type of function, which isn't allowed for a ConVar. If you need to know when the data changes you can define a pass a deserializer.`
          );
          GlobalData.OnError(ErrorType.ConVar, error, { name });
          return;
        }
        if (!deserialize) {
          const error = new Error(
            `${name} has a type of ${defaultType} which isn't allowed unless you define a deserializer.`
          );
          GlobalData.OnError(ErrorType.ConVar, error, { name });
          return;
        }
      }
      const getConvarValue = /* @__PURE__ */ __name(() => {
        const value = conVarFunction(name, defaultValue);
        try {
          const returnData = deserialize ? deserialize(value) : value;
          return returnData;
        } catch (e) {
          GlobalData.OnError(ErrorType.ConVar, e, { name: `${name}:DeserializeFn` });
          throw e;
        }
      }, "getConvarValue");
      Reflect.set(t, context.name, getConvarValue());
      AddConvarChangeListener(name, () => {
        Reflect.set(t, context.name, getConvarValue());
      });
    });
  }, "actualDecorator");
}
__name(ConVar, "ConVar");
export {
  ConVar,
  ConVarType
};
