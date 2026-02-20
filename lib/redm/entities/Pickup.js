var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
class Pickup {
  static {
    __name(this, "Pickup");
  }
  handle;
  constructor(handle) {
    this.handle = handle;
  }
  get Handle() {
    return this.handle;
  }
  get IsNetworked() {
    return false;
  }
}
export {
  Pickup
};
