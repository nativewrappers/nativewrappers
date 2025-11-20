type KvpSchema = Record<string, string | number | object>;
type KvpObject<T> = T extends `${infer Prefix}.${infer Rest}` ? Rest extends `${string}.${string}` ? never : Prefix : never;
type ValidJsonKey<Schema> = {
    [K in keyof Schema]: K extends string ? `${K}.${string}` : never;
}[keyof Schema];
export declare class Kvp<Schema extends KvpSchema> {
    /**
     * Returns the value associated with a key as a number.
     */
    getNumber<K extends string & keyof Schema>(key: K): number;
    /**
     * Returns the value associated with a key as a float.
     */
    getFloat<K extends string & keyof Schema>(key: K): number;
    /**
     * Returns the value associated with a key as a string.
     */
    getString<K extends string & keyof Schema>(key: K): string | null;
    /**
     * Returns the value associated with a key as a parsed JSON string.
     */
    getJson<K extends string, O = KvpObject<K>>(key: K extends ValidJsonKey<O> ? K : never): (O extends string ? Schema[O] : null) | null;
    /**
     * Sets the value associated with a key as a number.
     * @param async set the value using an async operation.
     */
    setNumber<K extends string & keyof Schema>(key: K, value: number, async?: boolean): void;
    /**
     * Sets the value associated with a key as a float.
     * @param async set the value using an async operation.
     */
    setFloat<K extends string & keyof Schema>(key: K, value: number, async?: boolean): void;
    /**
     * Sets the value associated with a key as a string.
     * @param async set the value using an async operation.
     */
    setString<K extends string & keyof Schema>(key: K, value: string, async?: boolean): void;
    /**
     * Sets the value associated with a key as a JSON string.
     * @param async set the value using an async operation.
     */
    setJson<K extends string, O = KvpObject<K>>(key: K extends ValidJsonKey<O> ? K : never, value: O extends string ? Schema[O] : never, async?: boolean): void;
    /**
     * Sets the value associated with a key as a JSON string.
     * @param async set the value using an async operation.
     */
    set<K extends string, O = KvpObject<K>>(key: K extends keyof Schema ? K : O extends string ? K : never, value: K extends keyof Schema ? Schema[K] : O extends string ? Schema[O] : never, async?: boolean): void;
    /**
     * Deletes the specified value for key.
     * @param async remove the value using an async operation
     */
    delete(key: string, async?: boolean): void;
    /**
     * Commits pending asynchronous operations to disk, ensuring data consistency.
     *
     * Should be called after calling set methods using the async flag.
     */
    flush(): void;
    getAllKeys(prefix: string): (keyof Schema)[];
    /**
     * Returns an array of keys which match or contain the given keys.
     */
    getKeys<K extends (string & keyof Schema) | string[]>(prefix: K): (keyof Schema)[];
    /**
     * Get all values from keys in an array as the specified type.
     */
    getValuesAsType<K extends (string & keyof Schema) | (string & keyof Schema)[]>(prefix: K, type: any): (string | number | Schema[string] | null)[];
}
export {};
