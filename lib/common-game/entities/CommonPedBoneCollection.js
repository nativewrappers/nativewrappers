var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { CommonBaseEntityBoneCollection } from "./CommonBaseEntityBoneCollection";
import { CommonPedBone } from "./CommonPedBone";
class CommonPedBoneCollection extends CommonBaseEntityBoneCollection {
  static {
    __name(this, "CommonPedBoneCollection");
  }
  constructor(owner) {
    super(owner);
  }
  get Core() {
    return new CommonPedBone(this.owner, -1);
  }
  get LastDamaged() {
    const [, outBone] = GetPedLastDamageBone(this.owner.Handle, 0);
    return CommonPedBone[outBone];
  }
  clearLastDamaged() {
    ClearPedLastDamageBone(this.owner.Handle);
  }
  getBoneFromId(boneId) {
    return new CommonPedBone(this.owner, GetPedBoneIndex(this.owner.Handle, boneId));
  }
  getBoneFromName(boneName) {
    return new CommonPedBone(this.owner, GetEntityBoneIndexByName(this.owner.Handle, boneName));
  }
  getBone(bone) {
    return new CommonPedBone(
      this.owner,
      typeof bone === "number" ? bone : GetEntityBoneIndexByName(this.owner.Handle, bone ?? "")
    );
  }
}
export {
  CommonPedBoneCollection
};
