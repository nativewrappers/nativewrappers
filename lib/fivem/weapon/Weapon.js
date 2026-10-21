var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { enumValues } from "../common/utils/enumValues";
import { Game } from "../Game";
import { WeaponHash } from "../hashes/WeaponHash";
import { Model } from "../Model";
import { WeaponComponentCollection } from "../weaponComponent/WeaponComponentCollection";
import { WeaponComponentHashesByWeaponHash } from "../weaponComponent/WeaponComponentHashesByWeaponHash";
import { Mk2WeaponHash } from "./Mk2WeaponHash";
import { WeaponDisplayNameByHash } from "./WeaponDisplayNameByHash";
import { WeaponHudStats } from "./WeaponHudStats";
class Weapon {
  static {
    __name(this, "Weapon");
  }
  owner;
  components;
  hash;
  constructor(owner, hash) {
    this.owner = owner;
    this.hash = hash;
    this.components = new WeaponComponentCollection(this.owner, this);
  }
  /**
   * weapon components
   *
   * @constructor
   */
  get Components() {
    return this.components;
  }
  /**
   * weapon hash
   *
   * @constructor
   */
  get Hash() {
    return this.hash;
  }
  /**
   * check ped is unarmed or not
   *
   * @constructor
   */
  get IsUnarmed() {
    return this.hash === WeaponHash.Unarmed;
  }
  /**
   * Check if the ped has the current weapon.
   *
   * @constructor
   */
  get IsPresent() {
    if (this.IsUnarmed) {
      return true;
    }
    return HasPedGotWeapon(this.owner.Handle, this.hash, false);
  }
  /**
   * get weapon display name / label
   *
   * @constructor
   */
  get DisplayName() {
    return Weapon.getDisplayNameFromHash(this.hash) ?? "WCT_INVALID";
  }
  /**
   * get weapon localized name
   *
   * @constructor
   */
  get LocalizedName() {
    return Game.getGXTEntry(this.DisplayName);
  }
  /**
   * get weapon model
   *
   * @constructor
   */
  get Model() {
    return new Model(GetWeapontypeModel(this.hash));
  }
  /**
   * get weapon tint
   *
   * @constructor
   */
  get Tint() {
    return GetPedWeaponTintIndex(this.owner.Handle, this.hash);
  }
  /**
   * set weapon tint
   *
   * @param tint
   * @constructor
   */
  set Tint(tint) {
    SetPedWeaponTintIndex(this.owner.Handle, this.hash, tint);
  }
  /**
   * get weapon group
   *
   * @constructor
   */
  get Group() {
    return GetWeapontypeGroup(this.hash);
  }
  /**
   * get weapon ammo type
   *
   * @constructor
   */
  get AmmoType() {
    return GetPedAmmoTypeFromWeapon(this.owner.Handle, this.hash);
  }
  /**
   * get weapon ammo count
   *
   * @constructor
   */
  get Ammo() {
    if (this.IsUnarmed) {
      return 1;
    }
    if (!this.IsPresent) {
      return GetPedAmmoByType(this.owner.Handle, this.AmmoType);
    }
    return GetAmmoInPedWeapon(this.owner.Handle, this.hash);
  }
  /**
   * set weapon ammo count
   *
   * @param count
   * @constructor
   */
  set Ammo(count) {
    if (this.IsUnarmed) {
      return;
    }
    if (this.IsPresent) {
      SetPedAmmo(this.owner.Handle, this.hash, count);
    } else {
      GiveWeaponToPed(this.owner.Handle, this.hash, count, false, true);
    }
  }
  /**
   * get weapon max ammo
   *
   * @constructor
   */
  get MaxAmmo() {
    if (this.IsUnarmed) {
      return 1;
    }
    const amount = Citizen.invokeNative(
      "0xDC16122C7A20C933",
      this.owner.Handle,
      this.hash,
      Citizen.pointerValueInt(),
      Citizen.resultAsInteger()
    );
    return amount;
  }
  /**
   * get weapon max ammo in clip
   *
   * @constructor
   */
  get MaxAmmoInClip() {
    if (this.IsUnarmed) {
      return 1;
    }
    if (!this.IsPresent) {
      return 0;
    }
    return GetMaxAmmoInClip(this.owner.Handle, this.hash, true);
  }
  /**
   * get weapon default clip size
   *
   * @constructor
   */
  get DefaultClipSize() {
    return GetWeaponClipSize(this.hash);
  }
  /**
   * toggle weapon infinite ammo
   *
   * @param toggle
   * @constructor
   */
  set InfiniteAmmo(toggle) {
    if (this.IsUnarmed) {
      return;
    }
    SetPedInfiniteAmmo(this.owner.Handle, toggle, this.hash);
  }
  /**
   * toggle ped infinite ammo clip on all weapons
   *
   * @param toggle
   * @constructor
   */
  set InfiniteAmmoClip(toggle) {
    SetPedInfiniteAmmoClip(this.owner.Handle, toggle);
  }
  /**
   * check weapon can use on parachute
   *
   * @constructor
   */
  get CanUseOnParachute() {
    return CanUseWeaponOnParachute(this.hash);
  }
  /**
   * Check weapon is Mk2 or not
   *
   * @constructor
   */
  get IsMk2() {
    return Array.from(enumValues(Mk2WeaponHash)).some((x) => x === this.hash);
  }
  /**
   * set weapon livery, only work for Mk2 weapon
   *
   * @param liveryId
   * @param colorId
   */
  setLivery(liveryId, colorId) {
    if (!this.IsMk2) {
      console.log(`[ERROR]${this.setLivery.name} failed. Reason: non-Mk2 weapon`);
      return;
    }
    const component = this.Components.getMk2CamoComponent(liveryId);
    if (component.IsInvalid) {
      console.log(`[ERROR]${this.setLivery.name} failed. Reason: invalid liveryId/Component`);
      return;
    }
    component.Active = true;
    SetPedWeaponLiveryColor(this.owner.Handle, this.hash, component.ComponentHash, colorId);
  }
  /**
   * get weapon hud stats
   *
   * @constructor
   */
  get HudStats() {
    return WeaponHudStats.get(this.hash);
  }
  /**
   * get weapon display name / label by hash
   *
   * @param hash
   */
  static getDisplayNameFromHash(hash) {
    if (!hash) {
      return "WT_INVALID";
    }
    return WeaponDisplayNameByHash.get(hash) ?? "WCT_INVALID";
  }
  /**
   * get component hashes belongs to weapon
   *
   * @param hash
   */
  static getWeaponComponentHashes(hash) {
    const hashes = WeaponComponentHashesByWeaponHash.get(hash);
    if (!hashes) {
      return [];
    }
    return [...hashes];
  }
}
export {
  Weapon
};
