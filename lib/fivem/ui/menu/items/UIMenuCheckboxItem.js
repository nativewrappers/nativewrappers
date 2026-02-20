var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { Color } from "../../../common/utils/Color";
import { CheckboxStyle } from "../../../enums/CheckboxStyle";
import { Sprite } from "../../../ui/Sprite";
import { LiteEvent } from "../../../utils/LiteEvent";
import { Point } from "../../../utils/Point";
import { Size } from "../../../utils/Size";
import { Menu } from "../Menu";
import { UIMenuItem } from "./UIMenuItem";
class UIMenuCheckboxItem extends UIMenuItem {
  static {
    __name(this, "UIMenuCheckboxItem");
  }
  checkboxChanged = new LiteEvent();
  supportsRightBadge = false;
  supportsRightLabel = false;
  _checked = false;
  _style = CheckboxStyle.Tick;
  _checkboxSprite;
  constructor(text, checked = false, description, style = CheckboxStyle.Tick) {
    super(text, description);
    this._checkboxSprite = new Sprite("commonmenu", "", new Point(410, 95), new Size(50, 50));
    this.Checked = checked;
    this.Style = style;
  }
  get Checked() {
    return this._checked;
  }
  set Checked(value) {
    this._checked = value || false;
  }
  get Style() {
    return this._style;
  }
  set Style(value) {
    this._style = Number(value);
  }
  setVerticalPosition(y) {
    super.setVerticalPosition(y);
    this._checkboxSprite.pos.Y = y + 138 + this.offset.Y;
  }
  draw() {
    super.draw();
    this._checkboxSprite.pos.X = 380 + this.offset.X + (this.parent ? this.parent.WidthOffset : 0);
    this._checkboxSprite.textureName = this._getSpriteName();
    this._checkboxSprite.color = this._getSpriteColor();
    this._checkboxSprite.draw(Menu.screenResolution);
  }
  _getSpriteName() {
    let name = "blank";
    if (this._checked) {
      switch (this._style) {
        case CheckboxStyle.Tick:
          name = "tick";
          break;
        case CheckboxStyle.Cross:
          name = "cross";
          break;
      }
    }
    return `shop_box_${name}${this.selected ? "b" : ""}`;
  }
  _getSpriteColor() {
    return this.enabled ? Color.White : Color.fromRgb(109, 109, 109);
  }
}
export {
  UIMenuCheckboxItem
};
