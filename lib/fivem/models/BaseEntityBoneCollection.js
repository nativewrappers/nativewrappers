var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
class BaseEntityBoneCollection {
  static {
    __name(this, "BaseEntityBoneCollection");
  }
  owner;
  constructor(owner) {
    this.owner = owner;
  }
  hasBone(name) {
    return GetEntityBoneIndexByName(this.owner.Handle, name) !== -1;
  }
}
export {
  BaseEntityBoneCollection
};
