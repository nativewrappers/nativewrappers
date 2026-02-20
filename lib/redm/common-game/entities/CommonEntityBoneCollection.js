var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { CommonBaseEntityBoneCollection } from "./CommonBaseEntityBoneCollection";
import { CommonEntityBone } from "./CommonEntityBone";
class CommonEntityBoneCollection extends CommonBaseEntityBoneCollection {
  static {
    __name(this, "CommonEntityBoneCollection");
  }
  constructor(owner) {
    super(owner);
  }
  getBoneFromName(boneName) {
    return new CommonEntityBone(this.owner, GetEntityBoneIndexByName(this.owner.Handle, boneName));
  }
  getBoneFromIndex(boneIndex) {
    return new CommonEntityBone(this.owner, boneIndex);
  }
  getBone(bone) {
    return new CommonEntityBone(
      this.owner,
      typeof bone === "number" ? bone : GetEntityBoneIndexByName(this.owner.Handle, bone ?? "")
    );
  }
  get Core() {
    return new CommonEntityBone(this.owner, -1);
  }
}
export {
  CommonEntityBoneCollection
};
