var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
class MenuControl {
  static {
    __name(this, "MenuControl");
  }
  _enabled;
  constructor(enabled = true) {
    this._enabled = enabled;
  }
  get Enabled() {
    return this._enabled;
  }
  set Enabled(value) {
    this._enabled = value;
  }
}
export {
  MenuControl
};
