var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
class LiteEvent {
  static {
    __name(this, "LiteEvent");
  }
  handlers = [];
  on(handler) {
    this.handlers.push(handler);
  }
  off(handler) {
    this.handlers = this.handlers.filter((h) => h !== handler);
  }
  emit(...args) {
    this.handlers.slice(0).forEach((h) => {
      h(...args);
    });
  }
  expose() {
    return this;
  }
}
export {
  LiteEvent
};
