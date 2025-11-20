var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
class RawKeymap {
  static {
    __name(this, "RawKeymap");
  }
  #keymapName;
  #rawKey;
  #canBeDisabled;
  #onKeyUp = null;
  #onKeyDown = null;
  /**
   * @param keymapName the name of the keymap to register to, this should be unique across all resources.
   * @param rawKey the key to bind to initially, this can be rebound with {@link setRawKey}
   * @param canBeDisabled if the key can be disabled with {@link RawControls.DisableKeyThisFrame}
   */
  constructor(keymapName, rawKey, canBeDisabled) {
    this.#keymapName = keymapName;
    this.#rawKey = rawKey;
    this.#canBeDisabled = canBeDisabled;
  }
  getKeymapName = /* @__PURE__ */ __name(() => {
    return this.#keymapName;
  }, "getKeymapName");
  /**
   * Gets the current raw keymap
   */
  getRawKeymap = /* @__PURE__ */ __name(() => {
    return this.#rawKey;
  }, "getRawKeymap");
  /**
   * Sets the function to be used onKeyUp
   */
  setOnKeyUp = /* @__PURE__ */ __name((fn) => {
    this.#onKeyUp = fn;
  }, "setOnKeyUp");
  /**
   * Sets the function to be used on onKeyDown
   */
  setOnKeyDown = /* @__PURE__ */ __name((fn) => {
    this.#onKeyDown = fn;
  }, "setOnKeyDown");
  /**
   * Remaps the current {@link RawKeymap}'s raw key to {@link key}
   */
  setRawKey = /* @__PURE__ */ __name((key) => {
    this.#rawKey = key;
    RemapRawKeymap(this.#keymapName, key);
  }, "setRawKey");
  /**
   * Sets the function to be used on onKeyUp, if you need to use this across
   * resource bounds you should use {@link setOnKeyUp}
   */
  set OnKeyUp(fn) {
    this.#onKeyUp = fn;
  }
  /**
   * Sets the function to be used on onKeyDown, if you need to use this across
   * resource bounds you should use {@link setOnKeyDown}
   */
  set OnKeyDown(fn) {
    this.#onKeyDown = fn;
  }
  /**
   * Changes the {@link RawKeymap} to use the {@link key} for its keymap
   */
  set RawKey(key) {
    this.setRawKey(key);
  }
  get KeymapName() {
    return this.#keymapName;
  }
  finish() {
    RegisterRawKeymap(this.#keymapName, this.#onKeyUp, this.#onKeyDown, this.#rawKey, this.#canBeDisabled);
  }
}
export {
  RawKeymap
};
