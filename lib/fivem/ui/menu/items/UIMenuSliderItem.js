var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { Color } from "../../../common/utils/Color";
import { BadgeStyle } from "../../../enums/BadgeStyle";
import { Rectangle } from "../../../ui/Rectangle";
import { Sprite } from "../../../ui/Sprite";
import { LiteEvent } from "../../../utils/LiteEvent";
import { Point } from "../../../utils/Point";
import { Size } from "../../../utils/Size";
import { Menu } from "../Menu";
import { UIMenuItem } from "./UIMenuItem";
class UIMenuSliderItem extends UIMenuItem {
  static {
    __name(this, "UIMenuSliderItem");
  }
  sliderChanged = new LiteEvent();
  sliderSelected = new LiteEvent();
  supportsRightBadge = false;
  supportsRightLabel = false;
  _index = 0;
  _items = [];
  _showDivider = true;
  _arrowOnlyOnSelected = false;
  _leftSliderBadge = BadgeStyle.None;
  _rightSliderBadge = BadgeStyle.None;
  _background;
  _slider;
  _divider;
  _leftArrow;
  _rightArrow;
  _leftSliderBadgeSprite;
  _rightSliderBadgeSprite;
  constructor(text, items, startIndex = 0, description, showDivider = false, arrowOnlyOnSelected = false) {
    super(text, description);
    this._background = new Rectangle(new Point(), new Size(150, 9), new Color(4, 32, 57));
    this._slider = new Rectangle(new Point(), new Size(75, 9), new Color(57, 116, 200));
    this._divider = new Rectangle(new Point(), new Size(2.5, 20), Color.WhiteSmoke);
    this._leftArrow = new Sprite("commonmenutu", "arrowleft", new Point(), new Size(15, 15));
    this._rightArrow = new Sprite("commonmenutu", "arrowright", new Point(), new Size(15, 15));
    this._leftSliderBadgeSprite = new Sprite("", "");
    this._rightSliderBadgeSprite = new Sprite("", "");
    this.ArrowOnlyOnSelected = arrowOnlyOnSelected;
    this.ShowDivider = showDivider;
    this.Items = items;
    this.Index = startIndex;
  }
  get Index() {
    return this._index % this._items.length;
  }
  set Index(value) {
    this._index = 1e8 - 1e8 % this._items.length + value;
  }
  get Item() {
    return this._items[this.Index];
  }
  get Items() {
    return this._items;
  }
  set Items(value) {
    this._items = value || [];
  }
  get ShowDivider() {
    return this._showDivider;
  }
  set ShowDivider(value) {
    this._showDivider = value;
  }
  get ArrowOnlyOnSelected() {
    return this._arrowOnlyOnSelected;
  }
  set ArrowOnlyOnSelected(value) {
    this._arrowOnlyOnSelected = value;
  }
  get BackgroundColor() {
    return this._background.color;
  }
  set BackgroundColor(value) {
    this._background.color = value || new Color(4, 32, 57);
  }
  get SliderColor() {
    return this._slider.color;
  }
  set SliderColor(value) {
    this._slider.color = value || new Color(57, 116, 200);
  }
  get DividerColor() {
    return this._divider.color;
  }
  set DividerColor(value) {
    this._divider.color = value || Color.WhiteSmoke;
  }
  get LeftSliderBadge() {
    return this._leftSliderBadge;
  }
  set LeftSliderBadge(value) {
    value = Number(value);
    this._leftSliderBadge = value;
    this._leftSliderBadgeSprite.TextureDict = UIMenuItem.badgeToTextureDict(value);
    this._leftSliderBadgeSprite.size = UIMenuItem.getBadgeSize(value);
  }
  get RightSliderBadge() {
    return this._rightSliderBadge;
  }
  set RightSliderBadge(value) {
    value = Number(value);
    this._rightSliderBadge = value;
    this._rightSliderBadgeSprite.TextureDict = UIMenuItem.badgeToTextureDict(value);
    this._rightSliderBadgeSprite.size = UIMenuItem.getBadgeSize(value);
  }
  get IsMouseInBoundsOfLeftArrow() {
    return this.parent ? this.parent.isMouseInBounds(this._leftArrow.pos, this._leftArrow.size) : false;
  }
  get IsMouseInBoundsOfRightArrow() {
    return this.parent ? this.parent.isMouseInBounds(this._rightArrow.pos, this._rightArrow.size) : false;
  }
  indexToItem(index) {
    return this._items[index];
  }
  setVerticalPosition(y) {
    const yOffset = y + this.offset.Y;
    this._background.pos.Y = yOffset + 158.5;
    this._slider.pos.Y = yOffset + 158.5;
    this._divider.pos.Y = yOffset + 153;
    this._leftArrow.pos.Y = yOffset + 155.5;
    this._rightArrow.pos.Y = yOffset + 155.5;
    this._leftSliderBadgeSprite.pos.Y = yOffset + 142 + UIMenuItem.getBadgeSpriteHeightOffset(this._leftSliderBadgeSprite);
    this._rightSliderBadgeSprite.pos.Y = yOffset + 142 + UIMenuItem.getBadgeSpriteHeightOffset(this._rightSliderBadgeSprite);
    super.setVerticalPosition(y);
  }
  draw() {
    super.draw();
    const showArrows = !this._arrowOnlyOnSelected || this.selected;
    const x = this.offset.X + (this.parent ? this.parent.WidthOffset : 0);
    this._background.pos.X = 431 + x - this._background.size.width;
    if (showArrows) {
      this._background.pos.X -= this._rightArrow.size.width / 2;
      this._leftSliderBadgeSprite.pos.X = -this._leftArrow.size.width / 2;
    } else {
      this._leftSliderBadgeSprite.pos.X = 0;
    }
    if (this._rightSliderBadge !== BadgeStyle.None) {
      const widthOffset = UIMenuItem.getBadgeSpriteWidthOffset(this._rightSliderBadgeSprite);
      this._background.pos.X -= 40;
      this._rightSliderBadgeSprite.pos.X = 431 + x;
      this._rightSliderBadgeSprite.pos.X -= this._rightSliderBadgeSprite.size.width + widthOffset;
      this._rightSliderBadgeSprite.textureName = this.badgeToTextureName(this._rightSliderBadge);
      this._rightSliderBadgeSprite.color = this.badgeToColor(this._rightSliderBadge);
      this._rightSliderBadgeSprite.draw(Menu.screenResolution);
    } else {
      this._background.pos.X -= this._rightArrow.size.width / 2;
    }
    if (this._leftSliderBadge !== BadgeStyle.None) {
      const widthOffset = UIMenuItem.getBadgeSpriteWidthOffset(this._leftSliderBadgeSprite);
      this._leftSliderBadgeSprite.pos.X -= this._leftSliderBadgeSprite.size.width + widthOffset;
      this._leftSliderBadgeSprite.pos.X += this._background.pos.X;
      this._leftSliderBadgeSprite.textureName = this.badgeToTextureName(this._leftSliderBadge);
      this._leftSliderBadgeSprite.color = this.badgeToColor(this._leftSliderBadge);
      this._leftSliderBadgeSprite.draw(Menu.screenResolution);
    }
    const sliderXOffset = (this._background.size.width - this._slider.size.width) / (this._items.length - 1) * this.Index;
    this._slider.pos.X = this._background.pos.X + sliderXOffset;
    this._leftArrow.color = this.enabled ? this.selected ? Color.Black : Color.WhiteSmoke : new Color(163, 159, 148);
    this._rightArrow.color = this._leftArrow.color;
    this._background.draw(void 0, Menu.screenResolution);
    this._slider.draw(void 0, Menu.screenResolution);
    if (showArrows) {
      this._leftArrow.pos.X = this._background.pos.X - 15;
      this._rightArrow.pos.X = this._background.pos.X + this._background.size.width;
      this._leftArrow.draw(Menu.screenResolution);
      this._rightArrow.draw(Menu.screenResolution);
    }
    if (this._showDivider) {
      this._divider.pos.X = this._background.pos.X + this._background.size.width / 2;
      this._divider.draw(void 0, Menu.screenResolution);
    }
  }
}
export {
  UIMenuSliderItem
};
