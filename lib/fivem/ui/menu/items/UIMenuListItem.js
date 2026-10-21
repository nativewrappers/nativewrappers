var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { Color } from "../../../common/utils/Color";
import { Alignment } from "../../../enums/Alignment";
import { Font } from "../../../enums/Font";
import { Sprite } from "../../../ui/Sprite";
import { Text } from "../../../ui/Text";
import { LiteEvent } from "../../../utils/LiteEvent";
import { Point } from "../../../utils/Point";
import { Size } from "../../../utils/Size";
import { _String } from "../../../utils/String";
import { Menu } from "../Menu";
import { UIMenuItem } from "./UIMenuItem";
class UIMenuListItem extends UIMenuItem {
  static {
    __name(this, "UIMenuListItem");
  }
  listChanged = new LiteEvent();
  listSelected = new LiteEvent();
  supportsRightBadge = false;
  supportsRightLabel = false;
  _itemText;
  _leftArrow;
  _rightArrow;
  _index = 0;
  _arrowOnlyOnSelected = false;
  _items = [];
  _textWidth = 0;
  constructor(text, items, startIndex = 0, description, arrowOnlyOnSelected = true) {
    super(text, description);
    this._leftArrow = new Sprite("commonmenu", "arrowleft", new Point(), new Size(30, 30));
    this._rightArrow = new Sprite("commonmenu", "arrowright", new Point(), new Size(30, 30));
    this._itemText = new Text("", new Point(), 0.35, Color.White, Font.ChaletLondon, Alignment.Right);
    this.ArrowOnlyOnSelected = arrowOnlyOnSelected;
    this.Items = items;
    this.Index = startIndex;
  }
  get Items() {
    return this._items;
  }
  set Items(value) {
    if (!value) {
      throw new Error("Items can't be null");
    }
    this._items = value;
  }
  get SelectedItem() {
    return this.Items[this.Index];
  }
  set SelectedItem(value) {
    const index = this.Items.findIndex((i) => i.id === value.id);
    if (index >= 0) {
      this.Index = index;
    }
  }
  get SelectedValue() {
    const item = this.SelectedItem;
    return item ? item.value : null;
  }
  get Index() {
    return this._index % this.Items.length;
  }
  set Index(value) {
    if (!this._items.length) {
      return;
    }
    value = value < 0 ? this._items.length - 1 : value > this._items.length - 1 ? 0 : value;
    this._index = value;
    this._textWidth = 0;
  }
  get ArrowOnlyOnSelected() {
    return this._arrowOnlyOnSelected;
  }
  set ArrowOnlyOnSelected(value) {
    this._arrowOnlyOnSelected = value;
  }
  get IsMouseInBoundsOfLeftArrow() {
    return this.parent ? this.parent.isMouseInBounds(this._leftArrow.pos, this._leftArrow.size) : false;
  }
  get IsMouseInBoundsOfRightArrow() {
    return this.parent ? this.parent.isMouseInBounds(this._rightArrow.pos, this._rightArrow.size) : false;
  }
  setVerticalPosition(y) {
    const yOffset = y + this.offset.Y + 147;
    this._leftArrow.pos.Y = yOffset;
    this._rightArrow.pos.Y = yOffset;
    this._itemText.pos.Y = yOffset;
    super.setVerticalPosition(y);
  }
  draw() {
    super.draw();
    if (this._textWidth === void 0) {
      const caption = this._getSelectedItemCaption();
      this._itemText.caption = caption;
      this._textWidth = _String.measureString(caption, this._itemText.font, this._itemText.scale, Menu.screenWidth);
    }
    this._rightArrow.pos.X = this.offset.X + (this.parent ? this.parent.WidthOffset : 0) + 400;
    this._itemText.pos.X = this._rightArrow.pos.X + 5;
    this._itemText.color = this.enabled ? this.selected ? this.HighlightedForeColor : this.ForeColor : new Color(163, 159, 148);
    if (this._arrowOnlyOnSelected && !this.selected) {
      this._itemText.pos.X += this._rightArrow.size.width / 2;
    } else {
      this._leftArrow.color = this._itemText.color;
      this._rightArrow.color = this._itemText.color;
      this._leftArrow.pos.X = this._itemText.pos.X - this._textWidth - this._leftArrow.size.width + 5;
      this._leftArrow.draw(Menu.screenResolution);
      this._rightArrow.draw(Menu.screenResolution);
    }
    this._itemText.draw(void 0, Menu.screenResolution);
  }
  _getSelectedItemCaption() {
    const item = this.SelectedItem;
    return item ? item.name : "";
  }
}
export {
  UIMenuListItem
};
