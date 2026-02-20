var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { Sprite } from "../../../../ui/Sprite";
import { Crypto } from "../../../../utils/Crypto";
import { Menu } from "../../Menu";
class AbstractUIMenuPanel {
  static {
    __name(this, "AbstractUIMenuPanel");
  }
  id = Crypto.uuidv4();
  parentItem;
  enabled = true;
  background;
  get ParentMenu() {
    return this.parentItem ? this.parentItem.parent : void 0;
  }
  get ParentItem() {
    return this.parentItem;
  }
  set ParentItem(value) {
    this.parentItem = value;
  }
  get Enabled() {
    return this.enabled;
  }
  set Enabled(value) {
    this.enabled = value;
  }
  get Height() {
    return this.background ? this.background.size.height : 0;
  }
  setVerticalPosition(y) {
    if (this.background) this.background.pos.Y = y;
  }
  draw() {
    if (this.background) {
      this.background.size.width = 431 + (this.ParentMenu ? this.ParentMenu.WidthOffset : 0);
      this.background.pos.X = this.parentItem ? this.parentItem.offset.X : 0;
      if (this.background instanceof Sprite) {
        this.background.draw(Menu.screenResolution);
      } else {
        this.background.draw(void 0, Menu.screenResolution);
      }
    }
  }
}
export {
  AbstractUIMenuPanel
};
