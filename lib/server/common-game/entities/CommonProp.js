var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { ClassTypes } from "../../common/utils/ClassTypes";
import { CommonBaseEntity } from "./CommonBaseEntity";
import { CommonEntityBoneCollection } from "./CommonEntityBoneCollection";
import { GetEntityClassFromHandle } from "./GetEntityClassIdFromHandle";
class CommonProp extends CommonBaseEntity {
  static {
    __name(this, "CommonProp");
  }
  static fromHandle(handle) {
    return new this(handle);
  }
  static fromNetworkId(networkId) {
    if (!NetworkDoesEntityExistWithNetworkId(networkId)) {
      return null;
    }
    return new this(NetworkGetEntityFromNetworkId(networkId));
  }
  type = ClassTypes.Prop;
  bones;
  constructor(handle) {
    super(handle);
  }
  exists() {
    return super.exists() && GetEntityType(this.handle) === 3;
  }
  placeOnGround() {
    PlaceObjectOnGroundProperly(this.handle);
  }
  getEntityAttachedTo() {
    return GetEntityClassFromHandle(this.handle);
  }
  get Bones() {
    if (!this.bones) {
      this.bones = new CommonEntityBoneCollection(this);
    }
    return this.bones;
  }
}
export {
  CommonProp
};
