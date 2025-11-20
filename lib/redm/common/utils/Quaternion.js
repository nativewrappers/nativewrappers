var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { Vector3 } from "./Vector";
class Quaternion {
  static {
    __name(this, "Quaternion");
  }
  x;
  y;
  z;
  w;
  constructor(valueXOrVector, yOrW, z, w) {
    if (valueXOrVector instanceof Vector3) {
      this.x = valueXOrVector.x;
      this.y = valueXOrVector.y;
      this.z = valueXOrVector.z;
      this.w = yOrW ?? 0;
    } else if (yOrW === void 0) {
      this.x = valueXOrVector;
      this.y = valueXOrVector;
      this.z = valueXOrVector;
      this.w = valueXOrVector;
    } else {
      this.x = valueXOrVector;
      this.y = yOrW;
      this.z = z ?? 0;
      this.w = w ?? 0;
    }
  }
}
export {
  Quaternion
};
