export class Kvp {
  /**
   * Sets the resource key to the specified value this is a blocking operation, if you're doing large write operations you should use [[setKvpAsync]] instead.
   * @param key the key string
   * @param value the value to set the key to
   */
  public setKvp<T extends number | string>(key: string, value: T): void {
    if (typeof value === "string") return SetResourceKvp(key, value);
    if (Number.isInteger(value)) return SetResourceKvpInt(key, value);

    return SetResourceKvpFloat(key, value);
  }

  /**
   * Sets the resource key to the specified value, this doesn't immediately write to disk and needs [[flush]] called afterwards.
   * @param key the key string
   * @param value the value to set the key to
   */
  public setKvpAsync<T extends number | string>(key: string, value: T): void {
    if (typeof value === "string") return SetResourceKvpNoSync(key, value);
    if (Number.isInteger(value)) return SetResourceKvpIntNoSync(key, value);

    return SetResourceKvpFloatNoSync(key, value);
  }

  /**
   * Sets the specified key to the specified json value
   * This can error if given an invalid object
   * @param key the key string
   * @param value the value to set the key to
   */
  public setKvpJson(key: string, value: any): void {
    const stringified = JSON.stringify(value);
    this.setKvp(key, stringified);
  }

  /**
   * Gets the specified value for key
   * @param key the key of the value to get
   * @returns a string, or null if there is no value
   */
  public getKvpString(key: string): string | null {
    return GetResourceKvpString(key);
  }

  /**
   * Gets the specified value for key
   * @param key the key of the value to get
   * @returns the value stored, as a number, or 0 if there is no value
   */
  public getKvpNumber(key: string): number {
    return GetResourceKvpInt(key);
  }

  /**
   * Gets the specified value for key
   * @param key the key of the value to get
   * @returns the value stored as a float, or 0.0 if there is no value
   */
  public getKvpFloat(key: string): number {
    return GetResourceKvpFloat(key);
  }

  public getKvpJson<T>(key: string): T {
    const kvp = this.getKvpString(key);
    return JSON.parse(kvp || "{}");
  }

  /**
   * Deletes the specified value for key, this is a blocking operation, if you're deleting a bunch of keys you should use [[deleteAsync]]
   * @param key the key of the value to delete
   */
  public delete(key: string): void {
    DeleteResourceKvp(key);
  }

  /**
   * Deletes the specified resource keys value, this doesn't immediately write to disk and needs [[flush]] called afterwards.
   * @param key the key to delete
   */
  public deleteAsync(key: string): void {
    DeleteResourceKvpNoSync(key);
  }

  /**
   * Ensures that any previous async call is flushed to disk
   */
  public flush(): void {
    FlushResourceKvp();
  }

  private *handleKvp<T = number | string>(
    prefix: string,
    iterType: "string" | "number" | "float",
  ): IterableIterator<T> {
    const handle = StartFindKvp(prefix);
    if (handle === -1) return;
    let key;
    do {
      key = FindKvp(handle);
      if (iterType === "string") {
        yield GetResourceKvpString(key) as unknown as T;
      } else if (iterType === "number") {
        yield GetResourceKvpInt(key) as unknown as T;
      } else if (iterType === "float") {
        yield GetResourceKvpFloat(key) as unknown as T;
      }
    } while (key);

    EndFindKvp(handle);
  }

  /**
   * enumerates over any kvp prefixed with the prefix
   *
   * ```typescript
   * for (const value of Kvp.getKvpsAsString("native:")) {
   *		console.log(value);
   * }
   * ```
   *
   * @param prefix the prefix to search for
   */
  public getKvpsAsString(prefix: string): IterableIterator<string> {
    return this.handleKvp<string>(prefix, "string");
  }

  /**
   * enumerates over any kvp prefixed with the prefix
   *
   * ```typescript
   * for (const value of Kvp.getKvpsAsNumber("native:")) {
   *		console.log(value);
   * }
   * ```
   *
   * @param prefix the prefix to search for
   */
  public getKvpsAsNumber(prefix: string): IterableIterator<number> {
    return this.handleKvp<number>(prefix, "number");
  }

  /**
   * enumerates over any kvp prefixed with the prefix
   *
   * ```typescript
   * for (const value of Kvp.getKvpsAsFloat("native:")) {
   *		console.log(value);
   * }
   * ```
   *
   * @param prefix the prefix to search for
   */
  public getKvpsAsFloat(prefix: string): IterableIterator<number> {
    return this.handleKvp<number>(prefix, "float");
  }
}
