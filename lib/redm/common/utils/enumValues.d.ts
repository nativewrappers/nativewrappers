/**
 * EnumValues - iterate over enum values
 * Just copy&paste from https://github.com/microsoft/TypeScript/issues/4753#issuecomment-694557208
 *
 * @param enumObj
 */
export declare function enumValues<T extends string>(enumObj: {
    [key: string]: T;
}): IterableIterator<T>;
export declare function enumValues<T extends string | number>(enumObj: {
    [key: string]: T;
}): IterableIterator<Exclude<T, string>>;
