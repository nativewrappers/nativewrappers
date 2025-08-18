export enum ConVarType {
  String,
  Integer,
  Float,
  Boolean,
}

type ConVarFunction = (convarName: string, defaultValue: any) => any;

const get_convar_fn = (con_var_type: ConVarType): ConVarFunction => {
  switch (con_var_type) {
    case ConVarType.String:
      return GetConvar;
    case ConVarType.Integer:
      return GetConvarInt;
    case ConVarType.Float:
      return GetConvarFloat;
    case ConVarType.Boolean:
      return GetConvarBool;
    // needed so typescript wont complain about "unreachable code" for the error below
    default:
  }

  // never guess people wont manage to hit this
  throw new Error("Got invalid ConVarType");
};

type DeserializeFn<T> = (data: T) => unknown;

/**
 * Gets the specified `ConVar`s value, this will bind to the param.
 * @param name the convar name
 * @param is_floating_point if the convar is floating point, this should be explicitly set to true if your convar will be a float
 */
export function ConVar<T>(name: string, is_floating_point?: boolean, deserialize?: DeserializeFn<T>) {
  // the implementation shows that this will be _initialValue, but it doesn't
  // seem to actually be???
  return function actualDecorator(_initialValue: any, context: ClassFieldDecoratorContext, ..._args: any[]) {
    if (context.private) {
      throw new Error("ConVar does not work on private types, please mark the field as public");
    }
    context.addInitializer(function () {
      const t = this as any;

      const default_value = Reflect.get(t, context.name);
      const default_type = typeof default_value;
      let con_var_type: ConVarType | null = null;
      if (default_type === "number") {
        if (is_floating_point || !Number.isInteger(default_value)) {
          con_var_type = ConVarType.Float;
        } else {
          con_var_type = ConVarType.Integer;
        }
      } else if (default_type === "boolean") {
        con_var_type = ConVarType.Boolean;
      } else if (default_type === "string") {
        con_var_type = ConVarType.String;
      }

      // if we're not set that means our default value was not valid, and likely
      // undefined (which we should just get rid of) or an object, and the
      // caller should send a deserialize function to work with.
      if (!deserialize && con_var_type === null) {
        throw new Error(
          `Failed to determine what to use to deserialize '${name}' was for var had type '${default_type}' which can't be deserialized without providing your own deserialize function.`,
        );
      }

      // if we got past our previous check then we're going to take the data as
      // a string and pass it to the deserialize function
      if (con_var_type === null) {
        con_var_type = ConVarType.String;
      }

      const con_var_fn = get_convar_fn(con_var_type!);

      // nice and easy wrapper
      const get_convar_value = (): unknown => {
        const data = con_var_fn(name, default_value);
        return deserialize ? deserialize(data) : data;
      };

      Reflect.set(t, context.name, get_convar_value());
      AddConvarChangeListener(name, () => {
        Reflect.set(t, context.name, get_convar_value());
      });
    });
  };
}
