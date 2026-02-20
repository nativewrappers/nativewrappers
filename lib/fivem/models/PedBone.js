var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { BaseEntityBone } from "./BaseEntityBone";
class PedBone extends BaseEntityBone {
  static {
    __name(this, "PedBone");
  }
  constructor(owner, boneId) {
    super(owner, GetPedBoneIndex(owner.Handle, Number(boneId)));
  }
  get IsValid() {
    return this.Owner.exists() && this.Index !== -1;
  }
}
export {
  PedBone
};
