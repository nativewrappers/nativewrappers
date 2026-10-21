var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { Color } from "../../../../common/utils/Color";
import { Rectangle } from "../../../../ui/Rectangle";
import { Point } from "../../../../utils/Point";
import { Size } from "../../../../utils/Size";
import { Menu } from "../../Menu";
import { AbstractUIMenuPanel } from "./AbstractUIMenuPanel";
class UIMenuStatisticsPanel extends AbstractUIMenuPanel {
  static {
    __name(this, "UIMenuStatisticsPanel");
  }
  background;
  _divider = true;
  _items = [];
  constructor(item, divider = true) {
    super();
    this.background = new Rectangle(new Point(), new Size(431, 47), new Color(0, 0, 0, 170));
    if (item) {
      this.addItem(item);
    }
    this.Divider = divider;
  }
  get Divider() {
    return this._divider;
  }
  set Divider(value) {
    this._divider = value || false;
  }
  get Items() {
    return this._items;
  }
  set Items(value) {
    this._items = value;
  }
  addItem(item) {
    const items = Array.isArray(item) ? item : [item];
    this._items.push(...items);
  }
  removeItem(itemOrIndex) {
    if (typeof itemOrIndex === "number") {
      this._items = this._items.filter((i, index) => index !== itemOrIndex);
    } else {
      this._items = this._items.filter((i) => i.id !== itemOrIndex.id);
    }
  }
  setVerticalPosition(y) {
    super.setVerticalPosition(y);
    this._items.forEach(async (item, index) => {
      const itemCountOffset = 40 * (index + 1);
      const yOffset = y + itemCountOffset - 22;
      item.backgroundBar.pos.Y = yOffset;
      item.activeBar.pos.Y = yOffset;
      item.text.pos.Y = yOffset - 12;
      if (this._divider) {
        item.divider.forEach(async (divider) => {
          divider.pos.Y = yOffset;
        });
      }
    });
  }
  draw() {
    if (this.enabled) {
      super.draw();
      const x = this.parentItem?.offset.X ?? 0 + (this.ParentMenu?.WidthOffset ?? 0) / 2;
      this._items.forEach(async (item, index) => {
        const itemCountOffset = 40 * (index + 1);
        item.backgroundBar.pos.X = x + 200;
        item.activeBar.pos.X = x + 200;
        item.text.pos.X = x + 13;
        item.backgroundBar.draw(void 0, Menu.screenResolution);
        item.activeBar.draw(void 0, Menu.screenResolution);
        item.text.draw(void 0, Menu.screenResolution);
        if (this._divider) {
          item.divider.forEach(async (divider, index2) => {
            const dividerWidthOffset = (index2 + 1) * 40;
            divider.pos.X = x + dividerWidthOffset + 200;
            this.background.size.height = itemCountOffset + 47 - 39;
            divider.draw(void 0, Menu.screenResolution);
          });
        }
      });
    }
  }
}
export {
  UIMenuStatisticsPanel
};
