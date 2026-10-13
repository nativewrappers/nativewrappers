/**
 * The convar type that will be used for the specified decor
 */
export declare enum ConVarType {
    String = 0,
    Integer = 1,
    Float = 2,
    Boolean = 3
}
export type DeserializeFn<T extends ConVarType> = (data: InferType<T>) => any;
type InferType<T extends ConVarType> = T extends ConVarType.String ? string : T extends ConVarType.Integer ? number : T extends ConVarType.Float ? number : T extends ConVarType.Boolean ? boolean : never;
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
export declare function ConVar<T extends ConVarType>(name: string, convarType: T, deserialize?: DeserializeFn<T>): (_initialValue: any, context: ClassFieldDecoratorContext, ..._args: any[]) => void;
export {};
