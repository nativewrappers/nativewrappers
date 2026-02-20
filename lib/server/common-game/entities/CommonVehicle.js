var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { ClassTypes } from "../../common/utils/ClassTypes";
import { CommonBaseEntity } from "./CommonBaseEntity";
import { CommonEntityBoneCollection } from "./CommonEntityBoneCollection";
class CommonVehicle extends CommonBaseEntity {
  static {
    __name(this, "CommonVehicle");
  }
  static fromHandle(handle) {
    if (handle === 0 || !DoesEntityExist(handle)) {
      return null;
    }
    return new this(handle);
  }
  static fromNetworkId(networkId) {
    if (!NetworkDoesEntityExistWithNetworkId(networkId)) {
      return null;
    }
    return new this(NetworkGetEntityFromNetworkId(networkId));
  }
  type = ClassTypes.Vehicle;
  bones;
  constructor(handle) {
    super(handle);
  }
  get Bones() {
    if (!this.bones) {
      this.bones = new CommonEntityBoneCollection(this);
    }
    return this.bones;
  }
}
export {
  CommonVehicle
};
