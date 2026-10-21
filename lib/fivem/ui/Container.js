var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { Size } from "../utils/Size";
import { Screen } from "./Screen";
class Container {
  static {
    __name(this, "Container");
  }
  pos;
  size;
  color;
  items = [];
  constructor(pos, size, color) {
    this.pos = pos;
    this.size = size;
    this.color = color;
  }
  addItem(items) {
    if (!Array.isArray(items)) {
      items = [items];
    }
    this.items.push(...items);
  }
  draw(offset, resolution) {
    resolution = resolution || new Size(Screen.ScaledWidth, Screen.Height);
    offset = offset || new Size();
    const w = this.size.width / resolution.width;
    const h = this.size.height / resolution.height;
    const x = (this.pos.X + offset.width) / resolution.width + w * 0.5;
    const y = (this.pos.Y + offset.height) / resolution.height + h * 0.5;
    DrawRect(x, y, w, h, this.color.r, this.color.g, this.color.b, this.color.a);
    for (const item of this.items) {
      item.draw(new Size(this.pos.X + offset.width, this.pos.Y + offset.height), resolution);
    }
  }
}
export {
  Container
};
