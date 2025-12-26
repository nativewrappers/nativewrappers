var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var ConVarType = /* @__PURE__ */ ((ConVarType2) => {
  ConVarType2[ConVarType2["String"] = 0] = "String";
  ConVarType2[ConVarType2["Integer"] = 1] = "Integer";
  ConVarType2[ConVarType2["Float"] = 2] = "Float";
  ConVarType2[ConVarType2["Boolean"] = 3] = "Boolean";
  return ConVarType2;
})(ConVarType || {});
const get_convar_fn = /* @__PURE__ */ __name((con_var_type) => {
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
  throw new Error("Got invalid ConVarType");
}, "get_convar_fn");
function ConVar(name, is_floating_point, deserialize) {
  return /* @__PURE__ */ __name(function actualDecorator(_initialValue, context, ..._args) {
    if (context.private) {
      throw new Error("ConVar does not work on private types, please mark the field as public");
    }
    context.addInitializer(function() {
      const t = this;
      const default_value = Reflect.get(t, context.name);
      const default_type = typeof default_value;
      let con_var_type = null;
      if (default_type === "number") {
        if (is_floating_point || !Number.isInteger(default_value)) {
          con_var_type = 2 /* Float */;
        } else {
          con_var_type = 1 /* Integer */;
        }
      } else if (default_type === "boolean") {
        con_var_type = 3 /* Boolean */;
      } else if (default_type === "string") {
        con_var_type = 0 /* String */;
      }
      if (!deserialize && con_var_type === null) {
        throw new Error(
          `Failed to determine what to use to deserialize '${name}' was for var had type '${default_type}' which can't be deserialized without providing your own deserialize function.`
        );
      }
      if (con_var_type === null) {
        con_var_type = 0 /* String */;
      }
      const con_var_fn = get_convar_fn(con_var_type);
      const get_convar_value = /* @__PURE__ */ __name(() => {
        const data = con_var_fn(name, default_value);
        return deserialize ? deserialize(data) : data;
      }, "get_convar_value");
      Reflect.set(t, context.name, get_convar_value());
      AddConvarChangeListener(name, () => {
        Reflect.set(t, context.name, get_convar_value());
      });
    });
  }, "actualDecorator");
}
__name(ConVar, "ConVar");
export {
  ConVar,
  ConVarType
};
