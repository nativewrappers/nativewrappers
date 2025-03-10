import type { RawKeys } from "./enums/RawKeys";
import type { RawControls } from "./RawControls";

export type KeymapFunction = () => void;

declare function RegisterRawKeymap(
  keymapName: string,
  onKeyUp: KeymapFunction | undefined,
  onKeyDown: KeymapFunction | undefined,
  rawKey: RawKeys,
  canBeDisabled: boolean,
): void;
declare function RemapRawKeymap(keymapName: string, rawKey: RawKeys): void;

// Calls with the const function syntax (i.e. functionName = (): any => are usable across resource bounds

/**
 * A builder for RawKeymap, you should call {@link finish} to actually register the raw keymap
 * This should be usable across resource bounds, so you can create the keymap
 * and pass the object to a manager to handle rebinding the maps with calls.
 */
export class RawKeymap {
  #keymapName: string;
  #rawKey: RawKeys;
  #canBeDisabled: boolean;
  #onKeyUp: KeymapFunction | null = null;
  #onKeyDown: KeymapFunction | null = null;

  /**
   * @param keymapName the name of the keymap to register to, this should be unique across all resources.
   * @param rawKey the key to bind to initially, this can be rebound with {@link setRawKey}
   * @param canBeDisabled if the key can be disabled with {@link RawControls.DisableKeyThisFrame}
   */
  constructor(keymapName: string, rawKey: RawKeys, canBeDisabled: boolean) {
    this.#keymapName = keymapName;
    this.#rawKey = rawKey;
    this.#canBeDisabled = canBeDisabled;
  }

  getKeymapName = (): string => {
    return this.#keymapName;
  };

  /**
   * Gets the current raw keymap
   */
  getRawKeymap = (): RawKeys => {
    return this.#rawKey;
  };

  /**
   * Sets the function to be used onKeyUp
   */
  setOnKeyUp = (fn: KeymapFunction) => {
    this.#onKeyUp = fn;
  };

  /**
   * Sets the function to be used on onKeyDown
   */
  setOnKeyDown = (fn: KeymapFunction) => {
    this.#onKeyDown = fn;
  };

  /**
   * Remaps the current {@link RawKeymap}'s raw key to {@link key}
   */
  setRawKey = (key: RawKeys) => {
    this.#rawKey = key;
    RemapRawKeymap(this.#keymapName, key);
  };

  /**
   * Sets the function to be used on onKeyUp, if you need to use this across
   * resource bounds you should use {@link setOnKeyUp}
   */
  set OnKeyUp(fn: KeymapFunction) {
    this.#onKeyUp = fn;
  }

  /**
   * Sets the function to be used on onKeyDown, if you need to use this across
   * resource bounds you should use {@link setOnKeyDown}
   */
  set OnKeyDown(fn: KeymapFunction) {
    this.#onKeyDown = fn;
  }

  /**
   * Changes the {@link RawKeymap} to use the {@link key} for its keymap
   */
  set RawKey(key: RawKeys) {
    this.setRawKey(key);
  }

  get KeymapName(): string {
    return this.#keymapName;
  }

  finish() {
    // @ts-ignore
    RegisterRawKeymap(this.#keymapName, this.#onKeyUp, this.#onKeyDown, this.#rawKey, this.#canBeDisabled);
  }
}
