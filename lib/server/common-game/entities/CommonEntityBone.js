var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { CommonBaseEntityBone } from "./CommonBaseEntityBone";
class CommonEntityBone extends CommonBaseEntityBone {
  static {
    __name(this, "CommonEntityBone");
  }
  constructor(owner, boneIndexOrBoneName) {
    super(owner, boneIndexOrBoneName);
  }
}
export {
  CommonEntityBone
};
