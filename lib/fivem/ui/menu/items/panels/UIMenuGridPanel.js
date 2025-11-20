var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { Control } from "../../../../enums/Control";
import { Game } from "../../../../Game";
import { Sprite } from "../../../../ui/Sprite";
import { Text } from "../../../../ui/Text";
import { Point } from "../../../../utils/Point";
import { Size } from "../../../../utils/Size";
import { Menu } from "../../Menu";
import { AbstractUIMenuPanel } from "./AbstractUIMenuPanel";
import { Delay } from "../../../../common/utils/Delay";
class UIMenuGridPanel extends AbstractUIMenuPanel {
  static {
    __name(this, "UIMenuGridPanel");
  }
  background;
  _isCircleLocked = false;
  _pressed = false;
  _lockXAxis = false;
  _lockYAxis = false;
  _topText;
  _leftText;
  _rightText;
  _bottomText;
  _lastCirclePosition;
  _grid;
  _circle;
  _setCirclePosition;
  constructor(topText, leftText, rightText, bottomText, circlePosition) {
    super();
    this._setCirclePosition = circlePosition || new Point(0.5, 0.5);
    this.background = new Sprite("commonmenu", "gradient_bgd", new Point(), new Size(431, 275));
    this._grid = new Sprite("pause_menu_pages_char_mom_dad", "nose_grid", new Point(), new Size(200, 200));
    this._circle = new Sprite("mpinventory", "in_world_circle", new Point(), new Size(20, 20));
    this.TopText = topText ?? "";
    this.LeftText = leftText ?? "";
    this.RightText = rightText ?? "";
    this.BottomText = bottomText ?? "";
    this._lastCirclePosition = this._setCirclePosition;
  }
  get TopText() {
    return this._topText ? this._topText.caption : "";
  }
  set TopText(value) {
    this._setText("_topText", value);
  }
  get LeftText() {
    return this._leftText ? this._leftText.caption : "";
  }
  set LeftText(value) {
    this._setText("_leftText", value);
  }
  get RightText() {
    return this._rightText ? this._rightText.caption : "";
  }
  set RightText(value) {
    this._setText("_rightText", value);
  }
  get BottomText() {
    return this._bottomText ? this._bottomText.caption : "";
  }
  set BottomText(value) {
    this._setText("_bottomText", value);
  }
  get CirclePosition() {
    return new Point(
      Math.round(
        (this._circle.pos.X - (this._grid.pos.X + 20) + this._circle.size.width / 2) / (this._grid.size.width - 40) * 100
      ) / 100,
      Math.round(
        (this._circle.pos.Y - (this._grid.pos.Y + 20) + this._circle.size.height / 2) / (this._grid.size.height - 40) * 100
      ) / 100
    );
  }
  set CirclePosition(position) {
    this.CirclePositionX = position.X;
    this.CirclePositionY = position.Y;
  }
  set CirclePositionX(x) {
    if (this._isCircleLocked && this._lockXAxis) {
      return;
    }
    x = x >= 0 && x <= 1 ? x : 0;
    this._setCirclePosition.X = x;
    this._circle.pos.X = this._grid.pos.X + 20 + (this._grid.size.width - 40) * x - this._circle.size.width / 2;
  }
  set CirclePositionY(y) {
    if (this._isCircleLocked && this._lockYAxis) {
      return;
    }
    y = y >= 0 && y <= 1 ? y : 0;
    this._setCirclePosition.Y = y;
    this._circle.pos.Y = this._grid.pos.Y + 20 + (this._grid.size.height - 40) * y - this._circle.size.height / 2;
  }
  get LockXAxis() {
    return this._lockXAxis;
  }
  set LockXAxis(value) {
    this._lockXAxis = value;
    if (value) {
      if (this._lockYAxis) {
        this._lockYAxis = false;
      }
      this.CirclePositionX = 0.5;
    }
  }
  get LockYAxis() {
    return this._lockYAxis;
  }
  set LockYAxis(value) {
    this._lockYAxis = value;
    if (value) {
      if (this._lockXAxis) {
        this._lockXAxis = false;
      }
      this.CirclePositionY = 0.5;
    }
  }
  updateParentItem() {
    const last = this._lastCirclePosition;
    const current = this.CirclePosition;
    if (!last || last.X !== current.X || last.Y !== current.Y) {
      this._lastCirclePosition = current;
      if (this.ParentMenu && this.parentItem) {
        this.ParentMenu.panelActivated.emit(this.parentItem, this, current);
        this.parentItem.panelActivated.emit(this, current);
      }
    }
  }
  setVerticalPosition(y) {
    super.setVerticalPosition(y);
    this._grid.pos.Y = y + 37.5;
    if (this._topText) {
      this._topText.pos.Y = y + 5;
    }
    if (this._leftText) {
      this._leftText.pos.Y = y + 120;
    }
    if (this._rightText) {
      this._rightText.pos.Y = y + 120;
    }
    if (this._bottomText) {
      this._bottomText.pos.Y = y + 240;
    }
  }
  draw() {
    if (this.enabled) {
      super.draw();
      const x = this.parentItem?.offset.X ?? 0 + (this.ParentMenu?.WidthOffset ?? 0) / 2;
      this._grid.pos.X = x + 115.5;
      if (!this._isCircleLocked) {
        this.CirclePosition = this._setCirclePosition;
        this._isCircleLocked = true;
      }
      this._grid.draw(Menu.screenResolution);
      this._circle.draw(Menu.screenResolution);
      if (this._topText) {
        this._topText.pos.X = x + 215.5;
        this._topText.draw(void 0, Menu.screenResolution);
      }
      if (this._leftText) {
        this._leftText.pos.X = x + 57.75;
        this._leftText.draw(void 0, Menu.screenResolution);
      }
      if (this._rightText) {
        this._rightText.pos.X = x + 373.25;
        this._rightText.draw(void 0, Menu.screenResolution);
      }
      if (this._bottomText) {
        this._bottomText.pos.X = x + 215.5;
        this._bottomText.draw(void 0, Menu.screenResolution);
      }
      this._processControls();
    }
  }
  _setText(name, value) {
    if (value && value.trim() !== "") {
      if (!this[name]) {
        this[name] = new Text(value, new Point(), 0.35, Color.White, Font.ChaletLondon, Alignment.Centered);
      } else {
        this[name].caption = value;
      }
    } else if (this[name]) {
      delete this[name];
    }
  }
  _processControls() {
    if (!this._pressed && Game.isDisabledControlJustPressed(0, Control.Attack) && this.ParentMenu?.isMouseInBounds(this._grid.pos, this._grid.size)) {
      this._pressed = true;
      (async () => {
        const drawOffset = this.ParentMenu?.DrawOffset ?? new Point(0, 0);
        while (Game.isDisabledControlPressed(0, Control.Attack)) {
          await Delay(0);
          let cX = (GetControlNormal(0, Control.CursorX) - drawOffset.X) * Menu.screenWidth;
          let cY = (GetControlNormal(0, Control.CursorY) - drawOffset.Y) * Menu.screenHeight;
          cX -= this._circle.size.width / 2;
          cY -= this._circle.size.height / 2;
          this._circle.pos.X = cX > this._grid.pos.X + 10 + this._grid.size.width - (this._lockXAxis ? 120 : 40) ? this._grid.pos.X + 10 + this._grid.size.width - (this._lockXAxis ? 120 : 40) : cX < this._grid.pos.X + (this._lockXAxis ? 100 : 20) - this._circle.size.width / 2 ? this._grid.pos.X + (this._lockXAxis ? 100 : 20) - this._circle.size.width / 2 : cX;
          this._circle.pos.Y = cY > this._grid.pos.Y + 10 + this._grid.size.height - (this._lockYAxis ? 120 : 40) ? this._grid.pos.Y + 10 + this._grid.size.height - (this._lockYAxis ? 120 : 40) : cY < this._grid.pos.Y + (this._lockYAxis ? 100 : 20) - this._circle.size.height / 2 ? this._grid.pos.Y + (this._lockYAxis ? 100 : 20) - this._circle.size.height / 2 : cY;
        }
        this.updateParentItem();
        this._pressed = false;
      })();
      const interval = setInterval(async () => {
        if (Game.isDisabledControlPressed(0, Control.Attack)) {
          this.updateParentItem();
        } else {
          clearInterval(interval);
        }
      }, 75);
    }
  }
}
export {
  UIMenuGridPanel
};
