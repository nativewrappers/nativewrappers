var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
class Size {
  static {
    __name(this, "Size");
  }
  width;
  height;
  constructor(w = 0, h = 0) {
    this.width = w;
    this.height = h;
  }
}
export {
  Size
};
