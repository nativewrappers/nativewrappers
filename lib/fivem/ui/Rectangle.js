var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { Point } from "../utils/Point";
import { Size } from "../utils/Size";
import { Screen } from "./Screen";
class Rectangle {
  static {
    __name(this, "Rectangle");
  }
  pos;
  size;
  color;
  constructor(pos, size, color) {
    this.pos = pos;
    this.size = size;
    this.color = color;
  }
  draw(arg1, arg2, color, resolution) {
    resolution = color === void 0 ? arg2 : resolution;
    resolution = resolution || new Size(Screen.ScaledWidth, Screen.Height);
    if (color === void 0) {
      if (arg1 && arg1 instanceof Size) {
        arg1 = new Point(this.pos.X + arg1.width, this.pos.Y + arg1.height);
      } else {
        arg1 = this.pos;
      }
      arg2 = this.size;
    } else {
      if (!arg1) {
        arg1 = this.pos;
      } else {
        arg1 = arg1;
      }
      arg2 = arg2 || this.size;
    }
    color = color || this.color;
    const w = arg2.width / resolution.width;
    const h = arg2.height / resolution.height;
    const x = arg1.X / resolution.width + w * 0.5;
    const y = arg1.Y / resolution.height + h * 0.5;
    DrawRect(x, y, w, h, color.r, color.g, color.b, color.a);
  }
}
export {
  Rectangle
};
