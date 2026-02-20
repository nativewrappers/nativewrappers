var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { BufferedClass } from "../BufferedClass";
class RDRInventoryGUID extends BufferedClass {
  static {
    __name(this, "RDRInventoryGUID");
  }
  constructor() {
    super(104);
  }
  get Unk1() {
    return this.view.getUint32(8 * 0 /* Unk1 */);
  }
  get Unk2() {
    return this.view.getUint32(8 * 1 /* Unk2 */);
  }
  get ItemCategory() {
    return this.view.getUint32(8 * 2 /* InventoryCategory */);
  }
  get Unk3() {
    return this.view.getUint32(8 * 3 /* Unk3 */);
  }
  get ItemHash() {
    return this.view.getUint32(8 * 4 /* ItemHash */);
  }
  get Unk4() {
    return this.view.getUint32(8 * 5 /* Unk4 */);
  }
  get Unk5() {
    return this.view.getUint32(8 * 6 /* Unk5 */);
  }
  get Unk6() {
    return this.view.getUint32(8 * 7 /* Unk6 */);
  }
  get Unk7() {
    return this.view.getUint32(8 * 8 /* Unk7 */);
  }
  get Unk8() {
    return this.view.getUint32(8 * 9 /* Unk8 */);
  }
  get CatalogueType() {
    return this.view.getUint32(8 * 10 /* CatalogueType */);
  }
  get Quantity() {
    return this.view.getUint32(8 * 11 /* Quantity */);
  }
  get Unk9() {
    return this.view.getUint32(8 * 12 /* Unk9 */);
  }
}
export {
  RDRInventoryGUID
};
