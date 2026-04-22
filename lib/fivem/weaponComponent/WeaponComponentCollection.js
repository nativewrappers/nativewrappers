var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { WeaponComponent } from "./WeaponComponent";
import { InvalidWeaponComponent } from "./InvalidWeaponComponent";
import { WeaponComponentHashesByWeaponHash } from "./WeaponComponentHashesByWeaponHash";
import { ComponentAttachmentPoint } from "./ComponentAttachmentPoint";
import { ComponentAttachmentPointByHash } from "./ComponentAttachmentPointByHash";
class WeaponComponentCollection {
  static {
    __name(this, "WeaponComponentCollection");
  }
  owner;
  weapon;
  components = /* @__PURE__ */ new Map();
  invalidComponent = new InvalidWeaponComponent();
  constructor(owner, weapon) {
    this.owner = owner;
    this.weapon = weapon;
  }
  [Symbol.iterator]() {
    let pointer = 0;
    const components = Array.from(this.components.values());
    return {
      next() {
        if (pointer < components.length) {
          return { done: false, value: components[pointer++] };
        }
        return { done: true, value: null };
      }
    };
  }
  /**
   * get component
   *
   * @param componentHash
   */
  get(componentHash) {
    if (this.AllWeaponComponentHashes.some((x) => x === componentHash)) {
      let component = this.components.get(componentHash);
      if (!component) {
        component = this.createAndAddComponent(componentHash);
      }
      return component;
    }
    return this.invalidComponent;
  }
  /**
   * get current weapon component count
   *
   * @constructor
   */
  get Count() {
    return this.components.size;
  }
  /**
   * get clip component
   *
   * @param index - index of component
   */
  getClipComponent(index) {
    return this.getAnyComponentByAttachmentPoints(index, ComponentAttachmentPoint.Clip, ComponentAttachmentPoint.Clip2);
  }
  /**
   * get clip variation count
   *
   * @constructor
   */
  get ClipVariationsCount() {
    return this.getComponentHashesByAttachmentPoints(ComponentAttachmentPoint.Clip, ComponentAttachmentPoint.Clip2).length;
  }
  /**
   * get scope component
   *
   * @param index - index of component
   */
  getScopeComponent(index) {
    return this.getAnyComponentByAttachmentPoints(
      index,
      ComponentAttachmentPoint.Scope,
      ComponentAttachmentPoint.Scope2
    );
  }
  /**
   * get scope variation count
   *
   * @constructor
   */
  get ScopeVariationsCount() {
    return this.getComponentHashesByAttachmentPoints(ComponentAttachmentPoint.Scope, ComponentAttachmentPoint.Scope2).length;
  }
  /**
   * get suppressor component
   *
   */
  getSuppressorComponent() {
    return this.getAnyComponentByAttachmentPoints(
      void 0,
      ComponentAttachmentPoint.Supp,
      ComponentAttachmentPoint.Supp2
    );
  }
  /**
   * get flash light component
   *
   */
  getFlashLightComponent() {
    return this.getAnyComponentByAttachmentPoints(
      void 0,
      ComponentAttachmentPoint.FlashLaser,
      ComponentAttachmentPoint.FlashLaser2
    );
  }
  /**
   * get luxury finish component
   *
   */
  getLuxuryFinishComponent() {
    return this.getAnyComponentByAttachmentPoints(void 0, ComponentAttachmentPoint.GunRoot);
  }
  /**
   * get Mk2 camo component
   *
   * @param index - index of component
   */
  getMk2CamoComponent(index) {
    return this.getAnyComponentByAttachmentPoints(index, ComponentAttachmentPoint.GunRoot);
  }
  /**
   * get Mk2 barrel component
   *
   * @param index - index of component
   */
  getMk2BarrelComponent(index) {
    return this.getAnyComponentByAttachmentPoints(index, ComponentAttachmentPoint.Barrel);
  }
  /**
   * Create component object and add to collection
   *
   * @param hash
   * @private
   */
  createAndAddComponent(hash) {
    const uintHash = hash >>> 0;
    console.log("createAndAdd", hash, uintHash);
    console.log("about to create", this.owner, this.weapon, uintHash);
    const component = new WeaponComponent(this.owner, this.weapon, uintHash);
    this.components.set(uintHash, component);
    return component;
  }
  /**
   * get all WeaponComponentHash belongs to weapon
   *
   * @constructor
   * @private
   */
  get AllWeaponComponentHashes() {
    return WeaponComponentHashesByWeaponHash.get(this.weapon.Hash);
  }
  /**
   * get components belongs to attachmentPoints
   *
   * @param attachmentPoints
   * @private
   */
  getComponentHashesByAttachmentPoints(...attachmentPoints) {
    return this.AllWeaponComponentHashes.filter(
      (hash) => attachmentPoints.some((attachmentPoint) => ComponentAttachmentPointByHash.get(hash) === attachmentPoint)
    );
  }
  /**
   * get component by index and attachmentPoints
   *
   * @param index - component index
   * @param attachmentPoints -  attachmentPoints to search
   * @private
   */
  getAnyComponentByAttachmentPoints(index, ...attachmentPoints) {
    const hashes = this.getComponentHashesByAttachmentPoints(...attachmentPoints);
    if (index === void 0) {
      return this.get(hashes[0]) ?? this.invalidComponent;
    }
    return 0 <= index && index <= hashes.length - 1 ? this.get(hashes[index]) : this.invalidComponent;
  }
}
export {
  WeaponComponentCollection
};
