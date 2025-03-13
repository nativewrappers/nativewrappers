import type { RawKeys } from "./enums/RawKeys";

// rdr3 doesn't have proper definitions
declare function IsRawKeyDown(rawKeyIndex: number): boolean;
declare function IsRawKeyPressed(rawKeyIndex: number): boolean;
declare function IsRawKeyReleased(rawKeyIndex: number): boolean;
declare function IsRawKeyUp(rawKeyIndex: number): boolean;

declare function IsDisabledRawKeyDown(rawKeyIndex: number): boolean;
declare function IsDisabledRawKeyPressed(rawKeyIndex: number): boolean;
declare function IsDisabledRawKeyReleased(rawKeyIndex: number): boolean;
declare function IsDisabledRawKeyUp(rawKeyIndex: number): boolean;

declare function DisableRawKeyThisFrame(rawKeyIndex: number): boolean;

export class RawControls {
  /**
   * Disables the raw key this frame, making any calls return false even if they
   * are currently pressed/released.
   */
  public static DisableKeyThisFrame(rawKey: RawKeys) {
    DisableRawKeyThisFrame(rawKey);
  }

  /**
   * If the raw key is was just pressed down, will return false if disabled with {@link DisableKeyThisFrame}
   * and {@link canBeDisabled} is set to true
   */
  public static WasJustPressed(rawKey: RawKeys, canBeDisabled = true) {
    return canBeDisabled ? IsRawKeyDown(rawKey) : IsDisabledRawKeyDown(rawKey);
  }

  /**
   * If the raw key is currently pressed down, will return false if disabled with {@link DisableKeyThisFrame}
   * and {@link canBeDisabled} is set to true
   */
  public static IsKeyPressed(rawKey: RawKeys, canBeDisabled = true) {
    return canBeDisabled ? IsRawKeyPressed(rawKey) : IsDisabledRawKeyPressed(rawKey);
  }

  /**
   * If the raw key is in its up state, will return false if disabled with {@link DisableKeyThisFrame}
   * and {@link canBeDisabled} is set to true
   */
  public static IsKeyReleased(rawKey: RawKeys, canBeDisabled = true): boolean {
    return canBeDisabled ? IsRawKeyReleased(rawKey) : IsDisabledRawKeyReleased(rawKey);
  }

  /**
   * If the raw key is was just released, will return false if disabled with {@link DisableKeyThisFrame}
   * and {@link canBeDisabled} is set to true
   */
  public static WasJustReleased(rawKey: RawKeys, canBeDisabled = true): boolean {
    return canBeDisabled ? IsRawKeyUp(rawKey) : IsDisabledRawKeyUp(rawKey);
  }
}
