var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { MenuControl } from "./MenuControl";
class MenuControls {
  static {
    __name(this, "MenuControls");
  }
  back = new MenuControl();
  select = new MenuControl();
  left = new MenuControl();
  right = new MenuControl();
  up = new MenuControl();
  down = new MenuControl();
}
export {
  MenuControls
};
