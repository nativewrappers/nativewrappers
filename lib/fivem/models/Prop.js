var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { ClassTypes } from "../common/utils/ClassTypes";
import { GetEntityClassFromId } from "../utils/GetEntityFromEntityIds";
import { BaseEntity } from "./BaseEntity";
import { EntityBoneCollection } from "./EntityBoneCollection";
class Prop extends BaseEntity {
  static {
    __name(this, "Prop");
  }
  static exists(prop) {
    return typeof prop !== "undefined" && prop.exists();
  }
  static fromHandle(handle) {
    return new Prop(handle);
  }
  static fromNetworkId(networkId) {
    if (!NetworkDoesEntityExistWithNetworkId(networkId)) {
      return null;
    }
    return new Prop(NetworkGetEntityFromNetworkId(networkId));
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
    return GetEntityClassFromId(this.handle);
  }
  get Bones() {
    if (!this.bones) {
      this.bones = new EntityBoneCollection(this);
    }
    return this.bones;
  }
}
export {
  Prop
};
