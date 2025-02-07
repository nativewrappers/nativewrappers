interface Schema {
  [key: string]: "string" | "number" | "float" | object;
}

export class Kvp<T extends Schema> {
  private schema: T;

  constructor(schema: T) {
    this.schema = { ...schema };

    for (const key in this.schema) {
      if (typeof this.schema[key] === "object")
        this.schema[key] = Object as any;
    }
  }

  /**
   * Returns the type associated with a schema key.
   */
  public getType(key: keyof T): "string" | "number" | "float" | "object" {
    return typeof this.schema[key] === "object" ? "object" : this.schema[key];
  }

  /**
   * Returns the value associated with a key as a number.
   */
  public getNumber(key: string) {
    return GetResourceKvpInt(key);
  }

  /**
   * Returns the value associated with a key as a float.
   */
  public getFloat(key: string) {
    return GetResourceKvpFloat(key);
  }

  /**
   * Returns the value associated with a key as a string.
   */
  public getString(key: string) {
    return GetResourceKvpString(key) as string | null;
  }

  /**
   * Returns the value associated with a key as a parsed JSON string.
   */
  public getJson<T>(key: string): T | null {
    const str = GetResourceKvpString(key as string);
    return str ? JSON.parse(str) : null;
  }

  /**
   * Sets the value associated with a key as a number.
   * @param async set the value using an async operation.
   */
  public setNumber(key: string, value: number, async = false): void {
    return async
      ? SetResourceKvpIntNoSync(key, value)
      : SetResourceKvpInt(key, value);
  }

  /**
   * Sets the value associated with a key as a float.
   * @param async set the value using an async operation.
   */
  public setFloat(key: string, value: number, async = false): void {
    return async
      ? SetResourceKvpFloatNoSync(key, value)
      : SetResourceKvpFloat(key, value);
  }

  /**
   * Sets the value associated with a key as a string.
   * @param async set the value using an async operation.
   */
  public setString(key: string, value: string, async = false): void {
    return async
      ? SetResourceKvpNoSync(key, value)
      : SetResourceKvp(key, value);
  }

  /**
   * Sets the value associated with a key as a JSON string.
   * @param async set the value using an async operation.
   */
  public setJson(key: string, value: object, async = false): void {
    const str = JSON.stringify(value);
    return async ? SetResourceKvpNoSync(key, str) : SetResourceKvp(key, str);
  }

  /**
   * Returns the value associated with a key, determining the type using the declared Kvp schema.
   */
  public get<K extends keyof T>(
    key: K,
  ): T[K] extends "number" | "float"
    ? number
    : T[K] extends object
      ? T[K] | null
      : string | null {
    const type = this.getType(key);

    switch (type) {
      case "number":
        return this.getNumber(key as string) as any;
      case "float":
        return this.getFloat(key as string) as any;
      case "object":
        return this.getJson(key as string) as any;
      default:
        return this.getString(key as string) as any;
    }
  }

  /**
   * Sets the value associated with a key as a value, using its type from the declared Kvp stricture.
   * @param async set the value using an async operation.
   */
  public set<K extends string>(
    key: K extends keyof T ? K : never,
    value: T[K] extends "number" | "float"
      ? number
      : T[K] extends object
        ? T[K] | null
        : string | null,
    async = false,
  ): void {
    const type = this.getType(key);
    const valueType = typeof value;

    if (valueType !== type && type !== "float" && valueType === "number")
      throw new Error(
        `Expected '${key as string}' to be type '${type}' but received '${valueType}'`,
      );

    switch (type) {
      case "number":
        return this.setNumber(key, value as number, async);
      case "float":
        return this.setFloat(key, value as number, async);
      case "object":
        return this.setJson(key, value as object, async);
      default:
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

  private getAllKeys(prefix: string) {
    const keys: string[] = [];
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
  public getKeys(prefix: string | string[]) {
    return typeof prefix === "string"
      ? this.getAllKeys(prefix)
      : prefix.flatMap((key) => this.getAllKeys(key));
  }

  /**
   * Get all values from keys in an array as the specified type.
   */
  public getValuesAsType(
    prefix: string[],
    type: "string" | "number" | "float" | "object",
  ) {
    const values = this.getKeys(prefix);

    return values.map((key) => {
      switch (type) {
        case "number":
          return this.getNumber(key);
        case "float":
          return this.getFloat(key);
        case "object":
          return this.getJson(key);
        default:
          return this.getString(key);
      }
    });
  }
}
