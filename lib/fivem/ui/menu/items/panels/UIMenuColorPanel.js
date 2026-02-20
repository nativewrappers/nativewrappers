var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { Color } from "../../../../common/utils/Color";
import { Alignment } from "../../../../enums/Alignment";
import { Control } from "../../../../enums/Control";
import { Font } from "../../../../enums/Font";
import { Game } from "../../../../Game";
import { Rectangle } from "../../../../ui/Rectangle";
import { Sprite } from "../../../../ui/Sprite";
import { Text } from "../../../../ui/Text";
import { Point } from "../../../../utils/Point";
import { Size } from "../../../../utils/Size";
import { Menu } from "../../Menu";
import { AbstractUIMenuPanel } from "./AbstractUIMenuPanel";
class UIMenuColorPanel extends AbstractUIMenuPanel {
  static {
    __name(this, "UIMenuColorPanel");
  }
  background;
  _title = "";
  _text;
  _colors = [];
  _bar = [];
  _lastColor = Color.Transparent;
  _leftArrow;
  _rightArrow;
  _selectedRectangle;
  // Pagination
  _min = 0;
  _max = 8;
  _total = 9;
  _index = 0;
  constructor(title, colors) {
    super();
    this.background = new Sprite("commonmenu", "gradient_bgd", new Point(), new Size(431, 112));
    this._leftArrow = new Sprite("commonmenu", "arrowleft", new Point(), new Size(30, 30));
    this._rightArrow = new Sprite("commonmenu", "arrowright", new Point(), new Size(30, 30));
    this._selectedRectangle = new Rectangle(new Point(), new Size(44.5, 8), Color.White);
    this._text = new Text("", new Point(), 0.35, Color.White, Font.ChaletLondon, Alignment.Centered);
    this.Title = title;
    this.Colors = colors;
  }
  get Title() {
    return this._title;
  }
  set Title(value) {
    this._title = value ? value.trim() : "";
    this._updateText();
  }
  get Colors() {
    return this._colors;
  }
  set Colors(value) {
    if (!value) {
      value = [];
    }
    this._colors = value;
    this._bar = [];
    const colorRectangles = value.slice(0, this._total).map((color) => {
      return new Rectangle(new Point(0, 0), new Size(44.5, 44.5), color);
    });
    this._bar.push(...colorRectangles);
    this._refreshIndex();
    this._updateSelection(true);
  }
  get Color() {
    return this._colors[this.Index];
  }
  set Color(value) {
    const index = this._colors.findIndex((c) => {
      return c.a === value.a && c.r === value.r && c.g === value.g && c.b === value.b;
    });
    if (index !== -1) {
      this.Index = index;
    }
  }
  get Index() {
    return this._index % this._colors.length;
  }
  set Index(value) {
    value = 1e6 - 1e6 % this._colors.length + value;
    if (this.Index === value % this._colors.length) {
      return;
    }
    this._index = value;
    const currentSelection = this.Index;
    if (currentSelection > this._max) {
      this._min = currentSelection - this._total + 1;
      this._max = currentSelection;
    } else if (currentSelection < this._min) {
      this._min = currentSelection;
      this._max = currentSelection + this._total - 1;
    }
    this._updateSelection();
  }
  updateParentItem() {
    const last = this._lastColor;
    const current = this.Color;
    if (!last || last.a !== current.a || last.r !== current.r || last.g !== current.g || last.b !== current.b) {
      this._lastColor = current;
      if (this.ParentMenu) this.ParentMenu.panelActivated.emit(this.parentItem, this, this.Index, current);
      if (this.parentItem) this.parentItem.panelActivated.emit(this, this.Index, current);
    }
  }
  setVerticalPosition(y) {
    super.setVerticalPosition(y);
    this._selectedRectangle.pos.Y = y + 47;
    this._leftArrow.pos.Y = y + 15;
    this._rightArrow.pos.Y = y + 15;
    this._text.pos.Y = y + 15;
    this._bar.forEach(async (colorRect) => {
      colorRect.pos.Y = y + 55;
    });
  }
  draw() {
    if (this.enabled) {
      super.draw();
      const x = (this.parentItem ? this.parentItem.offset.X : 0) + (this.ParentMenu ? this.ParentMenu.WidthOffset / 2 : 0);
      this._selectedRectangle.pos.X = x + 15 + 44.5 * (this.Index - this._min);
      this._leftArrow.pos.X = x + 7.5;
      this._rightArrow.pos.X = x + 393.5;
      this._text.pos.X = x + 215.5;
      this._leftArrow.draw(Menu.screenResolution);
      this._rightArrow.draw(Menu.screenResolution);
      this._text.draw(void 0, Menu.screenResolution);
      this._selectedRectangle.draw(void 0, Menu.screenResolution);
      this._bar.forEach(async (colorRect, index) => {
        colorRect.pos.X = x + 15 + 44.5 * index;
        colorRect.draw(void 0, Menu.screenResolution);
      });
      this._processControls();
    }
  }
  _refreshIndex() {
    if (!this._colors.length) {
      this._index = 1e3;
    } else {
      this._index = 1e3 - 1e3 % this._colors.length;
    }
    this._max = this._total - 1;
    this._min = 0;
  }
  _updateSelection(preventUpdate = false) {
    if (!preventUpdate) {
      this.updateParentItem();
    }
    this._bar.forEach(async (colorRect, index) => {
      colorRect.color = this._colors[this._min + index];
    });
    this._updateText();
  }
  _updateText() {
    this._text.caption = `${this._title} [${this.Index + 1 || 0} / ${this._colors.length}]`;
  }
  _goLeft() {
    if (this._colors.length > this._total) {
      if (this.Index <= this._min) {
        if (this.Index === 0) {
          this._min = this._colors.length - this._total;
          this._max = this._colors.length - 1;
          this._index = 1e3 - 1e3 % this._colors.length;
          this._index += this._colors.length - 1;
        } else {
          this._min--;
          this._max--;
          this._index--;
        }
      } else {
        this._index--;
      }
    } else {
      this._index--;
    }
    this._updateSelection();
  }
  _goRight() {
    if (this._colors.length > this._total) {
      if (this.Index >= this._max) {
        if (this.Index === this._colors.length - 1) {
          this._min = 0;
          this._max = this._total - 1;
          this._index = 1e3 - 1e3 % this._colors.length;
        } else {
          this._min++;
          this._max++;
          this._index++;
        }
      } else {
        this._index++;
      }
    } else {
      this._index++;
    }
    this._updateSelection();
  }
  _processControls() {
    if (Game.isDisabledControlJustPressed(0, Control.Attack)) {
      if (this.ParentMenu) {
        if (this.ParentMenu.isMouseInBounds(this._leftArrow.pos, this._leftArrow.size)) {
          this._goLeft();
        } else if (this.ParentMenu.isMouseInBounds(this._rightArrow.pos, this._rightArrow.size)) {
          this._goRight();
        }
        this._bar.forEach(async (colorRect, index) => {
          if (this.ParentMenu?.isMouseInBounds(colorRect.pos, colorRect.size)) {
            this.Index = this._min + index;
          }
        });
      }
    }
  }
}
export {
  UIMenuColorPanel
};
