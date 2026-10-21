var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
class Notification {
  static {
    __name(this, "Notification");
  }
  handle;
  constructor(handle) {
    this.handle = handle;
  }
  hide() {
    RemoveNotification(this.handle);
  }
}
export {
  Notification
};
