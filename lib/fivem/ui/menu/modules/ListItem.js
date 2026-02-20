var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { Crypto } from "../../../utils/Crypto";
class ListItem {
  static {
    __name(this, "ListItem");
  }
  id = Crypto.uuidv4();
  name;
  value;
  constructor(name, value = null) {
    this.name = name;
    this.value = value;
  }
}
export {
  ListItem
};
