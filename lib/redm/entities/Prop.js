var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { CommonBaseEntityBoneCollection } from "../common-game/entities/CommonBaseEntityBoneCollection";
import { ClassTypes } from "../common/utils/ClassTypes";
import { BaseEntity } from "./BaseEntity";
import { CommonEntityBoneCollection } from "../common-game/entities/CommonEntityBoneCollection";
class Prop extends BaseEntity {
  static {
    __name(this, "Prop");
  }
  type = ClassTypes.Prop;
  bones;
  get Bones() {
    this.bones = this.bones ?? new CommonEntityBoneCollection(this);
    return this.bones;
  }
}
export {
  Prop
};
