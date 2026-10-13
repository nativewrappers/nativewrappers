var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
class Kvp {
  static {
    __name(this, "Kvp");
  }
  /**
   * Returns the value associated with a key as a number.
   */
  getNumber(key) {
    return GetResourceKvpInt(key);
  }
  /**
   * Returns the value associated with a key as a float.
   */
  getFloat(key) {
    return GetResourceKvpFloat(key);
  }
  /**
   * Returns the value associated with a key as a string.
   */
  getString(key) {
    return GetResourceKvpString(key);
  }
  /**
   * Returns the value associated with a key as a parsed JSON string.
   */
  getJson(key) {
    const str = GetResourceKvpString(key);
    return str ? JSON.parse(str) : null;
  }
  /**
   * Sets the value associated with a key as a number.
   * @param async set the value using an async operation.
   */
  setNumber(key, value, async = false) {
    return async ? SetResourceKvpIntNoSync(key, value) : SetResourceKvpInt(key, value);
  }
  /**
   * Sets the value associated with a key as a float.
   * @param async set the value using an async operation.
   */
  setFloat(key, value, async = false) {
    return async ? SetResourceKvpFloatNoSync(key, value) : SetResourceKvpFloat(key, value);
  }
  /**
   * Sets the value associated with a key as a string.
   * @param async set the value using an async operation.
   */
  setString(key, value, async = false) {
    return async ? SetResourceKvpNoSync(key, value) : SetResourceKvp(key, value);
  }
  /**
   * Sets the value associated with a key as a JSON string.
   * @param async set the value using an async operation.
   */
  setJson(key, value, async = false) {
    const str = JSON.stringify(value);
    return async ? SetResourceKvpNoSync(key, str) : SetResourceKvp(key, str);
  }
  /**
   * Sets the value associated with a key as a JSON string.
   * @param async set the value using an async operation.
   */
  set(key, value, async = false) {
    switch (typeof value) {
      case "function":
      case "symbol":
        throw new Error(`Failed to set Kvp for invalid type '${typeof value}'`);
      case "undefined":
        return this.delete(key, async);
      case "object":
        return this.setJson(key, value, async);
      case "boolean":
        value = value ? 1 : 0;
      case "number":
        return Number.isInteger(value) ? this.setNumber(key, value, async) : this.setFloat(key, value, async);
      default:
        value = String(value);
        return this.setString(key, value, async);
    }
  }
  /**
   * Deletes the specified value for key.
   * @param async remove the value using an async operation
   */
  delete(key, async = false) {
    return async ? DeleteResourceKvpNoSync(key) : DeleteResourceKvp(key);
  }
  /**
   * Commits pending asynchronous operations to disk, ensuring data consistency.
   *
   * Should be called after calling set methods using the async flag.
   */
  flush() {
    FlushResourceKvp();
  }
  getAllKeys(prefix) {
    const keys = [];
    const handle = StartFindKvp(prefix);
    if (handle === -1) return keys;
    let key;
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
  getKeys(prefix) {
    return typeof prefix === "string" ? this.getAllKeys(prefix) : prefix.flatMap((key) => this.getAllKeys(key));
  }
  /**
   * Get all values from keys in an array as the specified type.
   */
  getValuesAsType(prefix, type) {
    const values = this.getKeys(prefix);
    return values.map((key) => {
      switch (type) {
        case "number":
          return this.getNumber(key);
        case "float":
          return this.getFloat(key);
        case "string":
          return this.getString(key);
        default:
          return this.getJson(key);
      }
    });
  }
}
export {
  Kvp
};
