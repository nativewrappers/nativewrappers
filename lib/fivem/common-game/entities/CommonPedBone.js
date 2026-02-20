var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { CommonBaseEntityBone } from "./CommonBaseEntityBone";
class CommonPedBone extends CommonBaseEntityBone {
  static {
    __name(this, "CommonPedBone");
  }
  constructor(owner, boneIndex) {
    super(owner, boneIndex);
  }
  get IsValid() {
    return this.Owner.exists() && this.Index !== -1;
  }
}
export {
  CommonPedBone
};
