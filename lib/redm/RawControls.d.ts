import type { RawKeys } from "./enums/RawKeys";
export declare class RawControls {
    /**
     * Disables the raw key this frame, making any calls return false even if they
     * are currently pressed/released.
     */
    static DisableKeyThisFrame(rawKey: RawKeys): void;
    /**
     * If the raw key is was just pressed down, will return false if disabled with {@link DisableKeyThisFrame}
     * and {@link canBeDisabled} is set to true
     */
    static WasJustPressed(rawKey: RawKeys, canBeDisabled?: boolean): boolean;
    /**
     * If the raw key is currently pressed down, will return false if disabled with {@link DisableKeyThisFrame}
     * and {@link canBeDisabled} is set to true
     */
    static IsKeyPressed(rawKey: RawKeys, canBeDisabled?: boolean): boolean;
    /**
     * If the raw key is in its up state, will return false if disabled with {@link DisableKeyThisFrame}
     * and {@link canBeDisabled} is set to true
     */
    static IsKeyReleased(rawKey: RawKeys, canBeDisabled?: boolean): boolean;
    /**
     * If the raw key is was just released, will return false if disabled with {@link DisableKeyThisFrame}
     * and {@link canBeDisabled} is set to true
     */
    static WasJustReleased(rawKey: RawKeys, canBeDisabled?: boolean): boolean;
}
