var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
class RawControls {
  static {
    __name(this, "RawControls");
  }
  /**
   * Disables the raw key this frame, making any calls return false even if they
   * are currently pressed/released.
   */
  static DisableKeyThisFrame(rawKey) {
    DisableRawKeyThisFrame(rawKey);
  }
  /**
   * If the raw key is was just pressed down, will return false if disabled with {@link DisableKeyThisFrame}
   * and {@link canBeDisabled} is set to true
   */
  static WasJustPressed(rawKey, canBeDisabled = true) {
    return canBeDisabled ? IsRawKeyDown(rawKey) : IsDisabledRawKeyDown(rawKey);
  }
  /**
   * If the raw key is currently pressed down, will return false if disabled with {@link DisableKeyThisFrame}
   * and {@link canBeDisabled} is set to true
   */
  static IsKeyPressed(rawKey, canBeDisabled = true) {
    return canBeDisabled ? IsRawKeyPressed(rawKey) : IsDisabledRawKeyPressed(rawKey);
  }
  /**
   * If the raw key is in its up state, will return false if disabled with {@link DisableKeyThisFrame}
   * and {@link canBeDisabled} is set to true
   */
  static IsKeyReleased(rawKey, canBeDisabled = true) {
    return canBeDisabled ? IsRawKeyReleased(rawKey) : IsDisabledRawKeyReleased(rawKey);
  }
  /**
   * If the raw key is was just released, will return false if disabled with {@link DisableKeyThisFrame}
   * and {@link canBeDisabled} is set to true
   */
  static WasJustReleased(rawKey, canBeDisabled = true) {
    return canBeDisabled ? IsRawKeyUp(rawKey) : IsDisabledRawKeyUp(rawKey);
  }
}
export {
  RawControls
};
