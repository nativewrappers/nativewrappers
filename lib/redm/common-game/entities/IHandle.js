var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
class IHandle {
  static {
    __name(this, "IHandle");
  }
  handle;
  constructor(handle) {
    this.handle = handle;
  }
  exists() {
    return DoesEntityExist(this.handle);
  }
  get Handle() {
    return this.handle;
  }
}
export {
  IHandle
};
