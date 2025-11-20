var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { Vector3 } from "../../common/utils/Vector";
class CommonBaseEntityBone {
  static {
    __name(this, "CommonBaseEntityBone");
  }
  owner;
  index;
  constructor(owner, boneIndex, boneName) {
    this.owner = owner;
    this.index = boneIndex ? boneIndex : GetEntityBoneIndexByName(this.owner.Handle, boneName ?? "");
  }
  get Index() {
    return this.index;
  }
  get Owner() {
    return this.owner;
  }
  get Position() {
    return Vector3.fromArray(GetWorldPositionOfEntityBone(this.owner.Handle, this.index));
  }
  // public get Rotation(): Vector3 {
  //   return Vector3.fromArray(GetEntityBoneRotation(this.owner.Handle, this.index));
  // }
  get IsValid() {
    return this.owner.exists() && this.index !== -1;
  }
}
export {
  CommonBaseEntityBone
};
