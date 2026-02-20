var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { BaseEntityBone } from "./BaseEntityBone";
class EntityBone extends BaseEntityBone {
  static {
    __name(this, "EntityBone");
  }
  constructor(owner, boneIndex, boneName) {
    super(owner, boneIndex, boneName);
  }
}
export {
  EntityBone
};
