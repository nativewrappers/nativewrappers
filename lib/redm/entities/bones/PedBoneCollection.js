var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { CommonPedBone } from "../../common-game/entities/CommonPedBone";
import { CommonPedBoneCollection } from "../../common-game/entities/CommonPedBoneCollection";
class PedBoneCollection extends CommonPedBoneCollection {
  static {
    __name(this, "PedBoneCollection");
  }
  getBoneFromId(boneId) {
    return new CommonPedBone(this.owner, GetPedBoneIndex(this.owner.Handle, boneId));
  }
}
export {
  PedBoneCollection
};
