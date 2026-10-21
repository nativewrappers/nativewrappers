import type { RawKeys } from "./enums/RawKeys";
export type KeymapFunction = () => void;
/**
 * A builder for RawKeymap, you should call {@link finish} to actually register the raw keymap
 * This should be usable across resource bounds, so you can create the keymap
 * and pass the object to a manager to handle rebinding the maps with calls.
 */
export declare class RawKeymap {
    #private;
    /**
     * @param keymapName the name of the keymap to register to, this should be unique across all resources.
     * @param rawKey the key to bind to initially, this can be rebound with {@link setRawKey}
     * @param canBeDisabled if the key can be disabled with {@link RawControls.DisableKeyThisFrame}
     */
    constructor(keymapName: string, rawKey: RawKeys, canBeDisabled: boolean);
    getKeymapName: () => string;
    /**
     * Gets the current raw keymap
     */
    getRawKeymap: () => RawKeys;
    /**
     * Sets the function to be used onKeyUp
     */
    setOnKeyUp: (fn: KeymapFunction) => void;
    /**
     * Sets the function to be used on onKeyDown
     */
    setOnKeyDown: (fn: KeymapFunction) => void;
    /**
     * Remaps the current {@link RawKeymap}'s raw key to {@link key}
     */
    setRawKey: (key: RawKeys) => void;
    /**
     * Sets the function to be used on onKeyUp, if you need to use this across
     * resource bounds you should use {@link setOnKeyUp}
     */
    set OnKeyUp(fn: KeymapFunction);
    /**
     * Sets the function to be used on onKeyDown, if you need to use this across
     * resource bounds you should use {@link setOnKeyDown}
     */
    set OnKeyDown(fn: KeymapFunction);
    /**
     * Changes the {@link RawKeymap} to use the {@link key} for its keymap
     */
    set RawKey(key: RawKeys);
    get KeymapName(): string;
    finish(): void;
}
