var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { Prop } from "../models/Prop";
import { Weapon } from "./Weapon";
class WeaponCollection {
  static {
    __name(this, "WeaponCollection");
  }
  owner;
  weapons = /* @__PURE__ */ new Map();
  constructor(owner) {
    this.owner = owner;
  }
  [Symbol.iterator]() {
    let pointer = 0;
    const weapons = Array.from(this.weapons.values());
    return {
      next() {
        if (pointer < weapons.length) {
          return { done: false, value: weapons[pointer++] };
        }
        return { done: true, value: null };
      }
    };
  }
  /**
   * get weapon by hash
   *
   * @param hash
   */
  get(hash) {
    let weapon = this.weapons.get(hash);
    if (!weapon) {
      if (!this.hasWeapon(hash)) {
        return null;
      }
      weapon = this.createAndAddWeapon(hash);
    }
    return weapon;
  }
  /**
   * get ped current weapon
   *
   * @constructor
   */
  get Current() {
    const [, hash] = GetCurrentPedWeapon(this.owner.Handle, true);
    if (this.weapons.has(hash)) {
      return this.weapons.get(hash);
    }
    return this.createAndAddWeapon(hash);
  }
  /**
   * get ped current weapon object
   *
   * @constructor
   */
  get CurrentWeaponObject() {
    if (this.Current.IsUnarmed) {
      return null;
    }
    return new Prop(GetCurrentPedWeaponEntityIndex(this.owner.Handle));
  }
  /**
   * get ped best weapon
   *
   * @constructor
   */
  get BestWeapon() {
    const hash = GetBestPedWeapon(this.owner.Handle, false);
    if (this.weapons.has(hash)) {
      return this.weapons.get(hash);
    }
    return this.createAndAddWeapon(hash);
  }
  /**
   * check ped has weapon
   *
   * @param hash
   */
  hasWeapon(hash) {
    return HasPedGotWeapon(this.owner.Handle, hash, false);
  }
  /**
   * check weapon is valid
   *
   * @param hash
   */
  isWeaponValid(hash) {
    return IsWeaponValid(hash);
  }
  /**
   * give weapon to ped
   *
   * @param hash
   * @param ammoCount
   * @param equipNow
   * @param isAmmoLoaded
   */
  give(hash, ammoCount, equipNow, isAmmoLoaded) {
    let weapon = this.weapons.get(hash);
    if (!weapon) {
      weapon = this.createAndAddWeapon(hash);
    }
    if (weapon.IsPresent) {
      this.select(weapon);
    } else {
      GiveWeaponToPed(this.owner.Handle, weapon.Hash, ammoCount, equipNow, isAmmoLoaded);
    }
    return weapon;
  }
  /**
   * set ped current weapon on hand
   *
   * @param weapon
   */
  select(weapon) {
    if (weapon instanceof Weapon) {
      if (!weapon.IsPresent) {
        return false;
      }
      SetCurrentPedWeapon(this.owner.Handle, weapon.Hash, true);
      return true;
    }
    if (!this.hasWeapon(weapon)) {
      return false;
    }
    SetCurrentPedWeapon(this.owner.Handle, weapon, true);
    return true;
  }
  /**
   * remove weapon from ped
   *
   * @param weapon
   */
  remove(weapon) {
    if (weapon instanceof Weapon) {
      if (this.weapons.has(weapon.Hash)) {
        this.weapons.delete(weapon.Hash);
      }
      this.remove(weapon.Hash);
    } else {
      RemoveWeaponFromPed(this.owner.Handle, weapon);
    }
  }
  /**
   * remove all weapons from ped
   *
   */
  removeAll() {
    RemoveAllPedWeapons(this.owner.Handle, true);
    this.weapons.clear();
  }
  /**
   * Drop ped current weapon?
   * todo: this native seems does not work as expected, need to investigate
   * refer1: https://docs.fivem.net/natives/?_0x6B7513D9966FBEC0
   * refer2: https://forum.cfx.re/t/release-weapondrop/49856/8
   *
   */
  drop() {
    SetPedDropsWeapon(this.owner.Handle);
  }
  /**
   * create weapon object and add to collection
   *
   * @param hash
   * @private
   */
  createAndAddWeapon(hash) {
    const uintHash = hash >>> 0;
    const weapon = new Weapon(this.owner, uintHash);
    this.weapons.set(uintHash, weapon);
    return weapon;
  }
}
export {
  WeaponCollection
};
