type KvpSchema = Record<string, string | number | object>;

type KvpObject<T> = T extends `${infer Prefix}.${infer Rest}`
  ? Rest extends `${string}.${string}`
    ? never
    : Prefix
  : never;

type ValidJsonKey<Schema> = {
  [K in keyof Schema]: K extends string ? `${K}.${string}` : never;
}[keyof Schema];

export class Kvp<Schema extends KvpSchema> {
  /**
   * Returns the value associated with a key as a number.
   */
  public getNumber<K extends string & keyof Schema>(key: K): number {
    return GetResourceKvpInt(key);
  }

  /**
   * Returns the value associated with a key as a float.
   */
  public getFloat<K extends string & keyof Schema>(key: K): number {
    return GetResourceKvpFloat(key);
  }

  /**
   * Returns the value associated with a key as a string.
   */
  public getString<K extends string & keyof Schema>(key: K): string | null {
    return GetResourceKvpString(key);
  }

  /**
   * Returns the value associated with a key as a parsed JSON string.
   */
  public getJson<K extends string, O = KvpObject<K>>(
    key: K extends ValidJsonKey<O> ? K : never,
  ): O extends string ? Schema[O] : null {
    const str = GetResourceKvpString(key);
    return str ? JSON.parse(str) : null;
  }

  /**
   * Sets the value associated with a key as a number.
   * @param async set the value using an async operation.
   */
  public setNumber<K extends string & keyof Schema>(
    key: K,
    value: number,
    async = false,
  ): void {
    return async
      ? SetResourceKvpIntNoSync(key, value as number)
      : SetResourceKvpInt(key, value as number);
  }

  /**
   * Sets the value associated with a key as a float.
   * @param async set the value using an async operation.
   */
  public setFloat<K extends string & keyof Schema>(
    key: K,
    value: number,
    async = false,
  ): void {
    return async
      ? SetResourceKvpFloatNoSync(key, value)
      : SetResourceKvpFloat(key, value);
  }

  /**
   * Sets the value associated with a key as a string.
   * @param async set the value using an async operation.
   */
  public setString<K extends string & keyof Schema>(
    key: K,
    value: string,
    async = false,
  ): void {
    return async
      ? SetResourceKvpNoSync(key, value)
      : SetResourceKvp(key, value);
  }

  /**
   * Sets the value associated with a key as a JSON string.
   * @param async set the value using an async operation.
   */
  public setJson<K extends string, O = KvpObject<K>>(
    key: K extends ValidJsonKey<O> ? K : never,
    value: O extends string ? Schema[O] : never,
    async = false,
  ): void {
    const str = JSON.stringify(value);
    return async ? SetResourceKvpNoSync(key, str) : SetResourceKvp(key, str);
  }

  /**
   * Sets the value associated with a key as a JSON string.
   * @param async set the value using an async operation.
   */
  public set<K extends string, O = KvpObject<K>>(
    key: K extends keyof Schema ? K : O extends string ? K : never,
    value: K extends keyof Schema
      ? Schema[K]
      : O extends string
        ? Schema[O]
        : never,
    async = false,
  ): void {
    switch (typeof value) {
      case "function":
      case "symbol":
        throw new Error(`Failed to set Kvp for invalid type '${typeof value}'`);
      case "undefined":
        return this.delete(key, async);
      case "object":
        return this.setJson(key as any, value, async);
      case "boolean":
        (value as any) = value ? 1 : 0;
      case "number":
        return Number.isInteger(value)
          ? this.setNumber(key, value, async)
          : this.setFloat(key, value, async);
      default:
        (value as any) = String(value);
        return this.setString(key, value as string, async);
    }
  }

  /**
   * Deletes the specified value for key.
   * @param async remove the value using an async operation
   */
  public delete(key: string, async = false): void {
    return async ? DeleteResourceKvpNoSync(key) : DeleteResourceKvp(key);
  }

  /**
   * Commits pending asynchronous operations to disk, ensuring data consistency.
   *
   * Should be called after calling set methods using the async flag.
   */
  public flush(): void {
    FlushResourceKvp();
  }

  public getAllKeys(prefix: string) {
    const keys: (keyof Schema)[] = [];
    const handle = StartFindKvp(prefix);

    if (handle === -1) return keys;

    let key: string;

    do {
      key = FindKvp(handle);
      if (key) keys.push(key);
    } while (key);

    EndFindKvp(handle);

    return keys;
  }

  /**
   * Returns an array of keys which match or contain the given keys.
   */
  public getKeys<K extends (string & keyof Schema) | string[]>(prefix: K) {
    return typeof prefix === "string"
      ? this.getAllKeys(prefix)
      : prefix.flatMap((key) => this.getAllKeys(key));
  }

  /**
   * Get all values from keys in an array as the specified type.
   */
  public getValuesAsType<
    K extends (string & keyof Schema) | (string & keyof Schema)[],
  >(prefix: K, type: any) {
    const values = this.getKeys(prefix);

    return values.map((key) => {
      switch (type) {
        case "number":
          return this.getNumber(key as any);
        case "float":
          return this.getFloat(key as any);
        case "string":
          return this.getString(key as any);
        default:
          return this.getJson(key as any);
      }
    });
  }
}
