var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { Color } from "../../../../common/utils/Color";
import { Alignment } from "../../../../enums/Alignment";
import { Font } from "../../../../enums/Font";
import { Rectangle } from "../../../../ui/Rectangle";
import { Text } from "../../../../ui/Text";
import { Crypto } from "../../../../utils/Crypto";
import { Point } from "../../../../utils/Point";
import { Size } from "../../../../utils/Size";
class UIMenuStatisticsPanelItem {
  static {
    __name(this, "UIMenuStatisticsPanelItem");
  }
  id = Crypto.uuidv4();
  text;
  activeBar;
  backgroundBar;
  divider = [];
  constructor(name, percentage = 0) {
    this.text = new Text("", new Point(), 0.35, Color.White, Font.ChaletLondon, Alignment.Left);
    this.backgroundBar = new Rectangle(new Point(), new Size(200, 10), Color.fromArgb(100, 87, 87, 87));
    this.activeBar = new Rectangle(new Point(), new Size(0, 10), Color.White);
    for (let i = 1; i <= 4; i++) {
      this.divider.push(new Rectangle(new Point(), new Size(2, 10), Color.Black));
    }
    this.Name = name;
    this.Percentage = percentage;
  }
  get Name() {
    return this.text.caption;
  }
  set Name(value) {
    this.text.caption = value ? value.trim() : "";
  }
  get Percentage() {
    return this.activeBar.size.width / 200;
  }
  set Percentage(value) {
    value = value || 0;
    value = Math.round(value * 100) / 100;
    value = value < 0 ? 0 : value > 1 ? 1 : value;
    this.activeBar.size.width = value * 200;
  }
}
export {
  UIMenuStatisticsPanelItem
};
