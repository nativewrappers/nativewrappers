import { ErrorType, GlobalData } from "@common/GlobalData";

export enum ConVarType {
  String,
  Integer,
  Float,
  Boolean,
}

type ConVarFunction = (convarName: string, defaultValue: any) => any;

const getConvarFunction = (con_var_type: ConVarType): ConVarFunction => {
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

export type DeserializeFn = (data: unknown) => unknown;

/**
 * Gets the specified `ConVar`s value, this will bind to the parameter of the current class
 * updating it whenever the ConVar value changes.
 *
 * Whatever the initial data value is will be the default value
 *
 * @param name - the convar name that we will read from
 * @param convarType - the type of the convar
 * @param deserialize - when using a string we can use this to automatically convert the value to a different structure,
   this can also be used to know when a value gets changed, just make sure the value returns itself.
 * @example
 * ```typescript
 * type Vec3 = [number, number, number];
 * const deserializeToVec3Array = (data: string) => {
 *   // convert a semicolon separate listed into a vector 3 array
 *   const dataArray = data.split(";");
 *   if (dataArray.length !== 3) {
 *     throw new Error("ConVars data didn't have three numbers!");
 *   }
 * 
 *   return dataArray.map((v, i) => {
 *     const converted = parseFloat(v.trim());
 *     if (Number.isNaN(converted)) {
 *       throw new Error(`Value at index ${i} was not an actual float!`);
 *     }
 * 
 *     return converted;
 *   }) as Vec3;
 * };
 * class ConVar {
 *   \@ConVar("nativeWrappers", ConVarType.Boolean)
 *   private nativeWrappers = false; // false will be the default value
 * 
 *   \@ConVar("engineDamageModifier", ConVarType.Float)
 *   private engineDamageModifier = 1.0;
 * 
 *   // If we `setr spawnPos "155.23;154.44;25.88"` this will convert the string into
 *   // the specified type
 *   \@ConVar("spawnPos", ConVarType.String, deserializeToVec3Array)
 *   private vectorPos: Vec3 = [123.12, 123.22, 55];
 * }
 * ```
 */
export function ConVar(name: string, convarType: ConVarType, deserialize?: DeserializeFn) {
  return function actualDecorator(_initialValue: any, context: ClassFieldDecoratorContext, ..._args: any[]) {
    if (context.private) {
      throw new Error("ConVar does not work on private types, please mark the field as public");
    }
    context.addInitializer(function () {
      const t = this as any;
      const defaultValue = Reflect.get(t, context.name);
      const conVarFunction = getConvarFunction(convarType);

      const defaultType = typeof defaultValue;

      // only allow primitive types to be default
      if (defaultType !== "number" && defaultType !== "boolean" && defaultType !== "string") {
        // we should never allow a function to be used as the default value.
        if (defaultType === "function") {
          const error = new Error(`${name} has a type of function, which isn't allowed for a ConVar. If you need to know when the data changes you can define a pass a deserializer.`);

          GlobalData.OnError(ErrorType.ConVar, error, { name });
          return;
        }
        if (!deserialize) {
          const error = new Error(`${name} has a type of ${defaultType} which isn't allowed unless you define a deserializer.`);

          GlobalData.OnError(ErrorType.ConVar, error, { name });
          return;
        }
      }

      /**
      * Converts the current ConVar value to the deserialized type
      */
      const getConvarValue = (): unknown => {
        const value = conVarFunction(name, defaultValue);
        // since we can error here with a user defined functions we should always
        // catch it and at least hit our global error handler.
        try {
          const returnData = deserialize ? deserialize(value) : value;
          return returnData;
        } catch (e) {
          GlobalData.OnError(ErrorType.ConVar, e as Error, { name: `${name}:DeserializeFn` });
          // rethrow because we don't want whatevers calling this to be set to
          // an undefined value.
          throw e;
        }
      };

      Reflect.set(t, context.name, getConvarValue());
      AddConvarChangeListener(name, () => {
        Reflect.set(t, context.name, getConvarValue());
      });
    });
  };
}
