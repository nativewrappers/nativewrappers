var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { BaseEntityBoneCollection } from "./BaseEntityBoneCollection";
import { PedBone } from "./PedBone";
class PedBoneCollection extends BaseEntityBoneCollection {
  static {
    __name(this, "PedBoneCollection");
  }
  constructor(owner) {
    super(owner);
  }
  get Core() {
    return new PedBone(this.owner, -1);
  }
  get LastDamaged() {
    const [, outBone] = GetPedLastDamageBone(this.owner.Handle, 0);
    return PedBone[outBone];
  }
  clearLastDamaged() {
    ClearPedLastDamageBone(this.owner.Handle);
  }
  getBone(bone) {
    return new PedBone(
      this.owner,
      typeof bone === "number" ? bone : GetEntityBoneIndexByName(this.owner.Handle, bone ?? "")
    );
  }
}
export {
  PedBoneCollection
};
