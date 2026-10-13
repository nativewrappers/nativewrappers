var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
class PointF {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
  static {
    __name(this, "PointF");
  }
  static empty() {
    return new PointF(0, 0, 0);
  }
}
export {
  PointF
};
