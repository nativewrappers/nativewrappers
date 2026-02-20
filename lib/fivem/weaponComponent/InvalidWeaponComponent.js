var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { WeaponComponent } from "./WeaponComponent";
import { WeaponComponentHash } from "./WeaponComponentHash";
import { ComponentAttachmentPoint } from "./ComponentAttachmentPoint";
import { Game } from "../Game";
class InvalidWeaponComponent extends WeaponComponent {
  static {
    __name(this, "InvalidWeaponComponent");
  }
  constructor() {
    super(null, null, WeaponComponentHash.Invalid);
  }
  get Active() {
    return false;
  }
  set Active(value) {
  }
  get DisplayName() {
    return "WCT_INVALID";
  }
  get LocalizedName() {
    return Game.getGXTEntry(this.DisplayName);
  }
  static getAttachmentPoint(hash, componentHash) {
    return ComponentAttachmentPoint.Invalid;
  }
}
export {
  InvalidWeaponComponent
};
