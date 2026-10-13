var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { Alignment } from "../../../enums/Alignment";
import { Menu } from "../Menu";
import { UIMenuItem } from "./UIMenuItem";
class UIMenuSeparatorItem extends UIMenuItem {
  static {
    __name(this, "UIMenuSeparatorItem");
  }
  supportsDescription = false;
  supportsPanels = false;
  supportsLeftBadge = false;
  supportsRightBadge = false;
  supportsRightLabel = false;
  constructor(text) {
    super(text ?? "");
    this.text.alignment = Alignment.Centered;
  }
  setVerticalPosition(y) {
    const yOffset = y + this.offset.Y;
    this.rectangle.pos.Y = yOffset + 144;
    this.text.pos.Y = yOffset + 147;
  }
  draw() {
    const width = 431 + (this.parent ? this.parent.WidthOffset : 0);
    this.rectangle.size.width = width;
    this.rectangle.pos.X = this.offset.X;
    this.rectangle.draw(void 0, Menu.screenResolution);
    if (this.text.caption !== "") {
      this.text.pos.X = this.offset.X + width / 2;
      this.text.draw(void 0, Menu.screenResolution);
    }
  }
}
export {
  UIMenuSeparatorItem
};
