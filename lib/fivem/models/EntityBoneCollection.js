var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { BaseEntityBoneCollection } from "./BaseEntityBoneCollection";
import { EntityBone } from "./EntityBone";
class EntityBoneCollection extends BaseEntityBoneCollection {
  static {
    __name(this, "EntityBoneCollection");
  }
  constructor(owner) {
    super(owner);
  }
  getBone(boneIndex, boneName) {
    return new EntityBone(
      this.owner,
      boneIndex ? boneIndex : GetEntityBoneIndexByName(this.owner.Handle, boneName ?? "")
    );
  }
  get Core() {
    return new EntityBone(this.owner, -1);
  }
}
export {
  EntityBoneCollection
};
