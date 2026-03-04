var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import cfx from "../cfx";
import { ClassTypes } from "../common/utils/ClassTypes";
import { Vector3, Vector4 } from "../common/utils/Vector";
class BaseEntity {
  constructor(handle) {
    this.handle = handle;
  }
  static {
    __name(this, "BaseEntity");
  }
  type = ClassTypes.Entity;
  // Replaces the current handle for the entity used on, this hsould be used sparringly, mainly
  // in situations where you're going to reuse an entity over and over and don't want to make a
  // new entity every time.
  //
  // **WARNING**: This does no checks, if you provide it an invalid entity it will use it
  //
  // ```ts
  // const REUSABLE_ENTITY = new Entity(entityHandle);
  //
  // onNet("entityHandler", (entNetId: number) => {
  //  // if no net entity we should ignore
  //  const entId = NetworkGetEntityFromNetworkId(entNetId);
  //  if (entId === 0) return;
  //
  //  // Reuse our entity so we don't have to initialize a new one
  //  REUSABLE_ENTITY.replaceHandle(entId);
  //  // Do something with REUSABLE_ENTITY entity
  // })
  // ```
  replaceHandle(newHandle) {
    this.handle = newHandle;
  }
  static fromNetworkId(networkId) {
    const ent = NetworkGetEntityFromNetworkId(networkId);
    if (ent === 0) return null;
    return new BaseEntity(ent);
  }
  static fromStateBagName(stateBagName) {
    const ent = GetEntityFromStateBagName(stateBagName);
    if (ent === 0) return null;
    return new BaseEntity(ent);
  }
  get State() {
    return cfx.Entity(this.handle).state;
  }
  get Handle() {
    return this.handle;
  }
  get Owner() {
    return NetworkGetEntityOwner(this.handle);
  }
  get FirstOwner() {
    return NetworkGetFirstEntityOwner(this.handle);
  }
  get Exists() {
    return this.handle !== 0 && DoesEntityExist(this.handle);
  }
  /**
   * @returns the entity that the calling entity is attached to, or null if
   * there is none
   */
  get AttachedTo() {
    const ent = GetEntityAttachedTo(this.handle);
    if (ent === 0) return null;
    return new BaseEntity(ent);
  }
  get Position() {
    return Vector3.fromArray(GetEntityCoords(this.handle));
  }
  /**
   * This is an RPC native, meaning that it can fail to work.
   */
  set Position(pos) {
    SetEntityCoords(this.handle, pos.x, pos.y, pos.z, false, false, false, false);
  }
  get Heading() {
    return GetEntityHeading(this.handle);
  }
  get PositionAndHeading() {
    return Vector4.fromArray([...GetEntityCoords(this.handle), GetEntityHeading(this.handle)]);
  }
  get Health() {
    return GetEntityHealth(this.handle);
  }
  get MaxHealth() {
    return GetEntityMaxHealth(this.handle);
  }
  get Model() {
    return GetEntityModel(this.handle);
  }
  get PopulationType() {
    return GetEntityPopulationType(this.handle);
  }
  get Rotation() {
    return Vector3.fromArray(GetEntityRotation(this.handle));
  }
  get RotationVelocity() {
    return Vector3.fromArray(GetEntityRotationVelocity(this.handle));
  }
  get RoutingBucket() {
    return GetEntityRoutingBucket(this.handle);
  }
  /**
   * @returns The script that made the entity
   */
  get Script() {
    return GetEntityScript(this.handle);
  }
  get Speed() {
    return GetEntitySpeed(this.handle);
  }
  get Type() {
    return GetEntityType(this.handle);
  }
  /**
   * @returns the entitys velocity, if the entity is a ped it will return Vector3(0, 0, 0)
   */
  get Velocity() {
    return Vector3.fromArray(GetEntityVelocity(this.handle));
  }
  get IsVisible() {
    return IsEntityVisible(this.handle);
  }
  get NetworkId() {
    return NetworkGetNetworkIdFromEntity(this.handle);
  }
  get IsNoLongerNeeded() {
    return HasEntityBeenMarkedAsNoLongerNeeded(this.handle);
  }
  get OrphanMode() {
    return GetEntityOrphanMode(this.Handle);
  }
  set OrphanMode(orphanMode) {
    SetEntityOrphanMode(this.Handle, orphanMode);
  }
  delete() {
    if (this.Exists) {
      DeleteEntity(this.handle);
    }
  }
}
export {
  BaseEntity
};
