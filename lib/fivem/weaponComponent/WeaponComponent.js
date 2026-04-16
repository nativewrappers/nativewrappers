var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { ComponentAttachmentPoint } from "./ComponentAttachmentPoint";
import { Game } from "../Game";
import { ComponentDisplayNameByHash } from "./ComponentDisplayNameByHash";
import { WeaponComponentHashesByWeaponHash } from "./WeaponComponentHashesByWeaponHash";
import { ComponentAttachmentPointByHash } from "./ComponentAttachmentPointByHash";
import { WeaponComponentHudStats } from "./WeaponComponentHudStats";
import { WeaponComponentHash } from "./WeaponComponentHash";
class WeaponComponent {
  static {
    __name(this, "WeaponComponent");
  }
  owner;
  weapon;
  componentHash;
  constructor(owner, weapon, componentHash) {
    this.owner = owner;
    this.weapon = weapon;
    this.componentHash = componentHash;
  }
  /**
   * Check WeaponComponent is invalid or not
   *
   * @constructor
   */
  get IsInvalid() {
    return this.componentHash === WeaponComponentHash.Invalid;
  }
  /**
   * get component hash
   *
   * @constructor
   */
  get ComponentHash() {
    return this.componentHash;
  }
  /**
   * check ped has weapon component
   *
   * @constructor
   */
  get Active() {
    return HasPedGotWeaponComponent(this.owner.Handle, this.weapon.Hash, this.componentHash);
  }
  /**
   * give weapon component to ped
   *
   * @param value
   * @constructor
   */
  set Active(value) {
    if (value) {
      GiveWeaponComponentToPed(this.owner.Handle, this.weapon.Hash, this.componentHash);
    } else {
      RemoveWeaponComponentFromPed(this.owner.Handle, this.weapon.Hash, this.componentHash);
    }
  }
  /**
   * get component display name / label
   *
   * @constructor
   */
  get DisplayName() {
    return WeaponComponent.getComponentDisplayNameFromHash(this.weapon.Hash, this.componentHash);
  }
  /**
   * get component localized name
   *
   * @constructor
   */
  get LocalizedName() {
    return Game.getGXTEntry(this.DisplayName);
  }
  /**
   * get component attachment point
   *
   * @constructor
   */
  get AttachmentPoint() {
    return WeaponComponent.getAttachmentPoint(this.weapon.Hash, this.componentHash);
  }
  /**
   * get component hud stats
   *
   * @constructor
   */
  get HudStats() {
    return WeaponComponentHudStats.get(this.componentHash);
  }
  /**
   * get component display name / label by hash
   *
   * @param hash
   * @param componentHash
   * @constructor
   */
  static getComponentDisplayNameFromHash(hash, componentHash) {
    if (!hash) {
      return "WCT_INVALID";
    }
    return ComponentDisplayNameByHash.get(componentHash) ?? "WCT_INVALID";
  }
  /**
   * get component attachment point by WeaponHash and WeaponComponentHash
   *
   * @param weaponHash
   * @param componentHash
   * @constructor
   */
  static getAttachmentPoint(weaponHash, componentHash) {
    const componentHashes = WeaponComponentHashesByWeaponHash.get(weaponHash);
    if (!componentHashes) {
      return ComponentAttachmentPoint.Invalid;
    }
    if (componentHashes.every((x) => x !== componentHash)) {
      return ComponentAttachmentPoint.Invalid;
    }
    return ComponentAttachmentPointByHash.get(componentHash) ?? ComponentAttachmentPoint.Invalid;
  }
}
export {
  WeaponComponent
};
