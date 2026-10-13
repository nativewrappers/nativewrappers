var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { Vector3 } from "../../common/utils/Vector";
import { IHandle } from "./IHandle";
class CommonBaseEntityBone extends IHandle {
  static {
    __name(this, "CommonBaseEntityBone");
  }
  owner;
  constructor(owner, boneInfo) {
    super(typeof boneInfo === "number" ? boneInfo : GetEntityBoneIndexByName(owner.Handle, boneInfo));
    this.owner = owner;
  }
  // overwrite the `IHandle` exists function call
  exists() {
    return this.handle !== -1;
  }
  get Index() {
    return this.handle;
  }
  get Owner() {
    return this.owner;
  }
  get Position() {
    return Vector3.fromArray(GetWorldPositionOfEntityBone(this.owner.Handle, this.handle));
  }
  // public get Rotation(): Vector3 {
  //   return Vector3.fromArray(GetEntityBoneRotation(this.owner.Handle, this.index));
  // }
  get IsValid() {
    return this.owner.exists() && this.handle !== -1;
  }
}
export {
  CommonBaseEntityBone
};
