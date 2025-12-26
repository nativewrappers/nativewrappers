export declare enum ConVarType {
    String = 0,
    Integer = 1,
    Float = 2,
    Boolean = 3
}
type DeserializeFn<T> = (data: T) => unknown;
/**
 * Gets the specified `ConVar`s value, this will bind to the param.
 * @param name the convar name
 * @param is_floating_point if the convar is floating point, this should be explicitly set to true if your convar will be a float
 */
export declare function ConVar<T>(name: string, is_floating_point?: boolean, deserialize?: DeserializeFn<T>): (_initialValue: any, context: ClassFieldDecoratorContext, ..._args: any[]) => void;
export {};
