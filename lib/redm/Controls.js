var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
class Controls {
  static {
    __name(this, "Controls");
  }
  static IsInputJustPressed(hash) {
    return IsControlJustPressed(0, hash);
  }
  static IsInputPressed(hash) {
    return IsControlPressed(0, hash);
  }
  static IsDisabledInputPressed(hash) {
    return IsDisabledControlPressed(0, hash);
  }
  static DisableControl(hash) {
    DisableControlAction(0, hash, false);
  }
}
export {
  Controls
};
