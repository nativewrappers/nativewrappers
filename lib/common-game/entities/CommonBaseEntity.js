var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { Vector3 } from "../common/utils/Vector";
import cfx from "../cfx/cfx";
import { CommonModel } from "../CommonModel";
import { GlobalData } from "../common/GlobalData";
import { IHandle } from "./IHandle";
class CommonBaseEntity extends IHandle {
  static {
    __name(this, "CommonBaseEntity");
  }
  stateBagCookies = [];
  netId = null;
  constructor(handle) {
    super(handle);
  }
  /**
    * Replaces the current handle for the entity used on, this should be used sparringly, mainly
    * in situations where you're going to reuse an entity over and over and don't want to make a
    * new entity every time.
    *
    *  **WARNING**: This does no checks, if you provide it an invalid entity it will use it
    *
    * ```ts
    * const REUSABLE_ENTITY = new Entity(entityHandle);
    *
    * onNet("entityHandler", (entNetId: number) => {
    *  // if no net entity we should ignore
    *  if (!NetworkDoesEntityExistWithNetworkId(entNetId)) return;
    *
    *  // Reuse our entity so we don't have to initialize a new one
    *  REUSABLE_ENTITY.replaceHandle(NetworkGetEntityFromNetworkId(entNetId));
    *  // Do something with REUSABLE_ENTITY entity
    * })
    ```
    */
  replaceHandle(newHandle) {
    this.handle = newHandle;
  }
  /*
   * @returns `true` if the entity exists, `false` otherwise.
   */
  get Exists() {
    return DoesEntityExist(this.handle);
  }
  /*
   * @returns the handle of the specified entity
   */
  get Handle() {
    return this.handle;
  }
  /**
   * This will return a warning if the the entity is not networked, you should always use {@link IsNetworked} prior to calling thisl
   * @returns the network for the specified entity
   */
  get NetworkId() {
    return NetworkGetNetworkIdFromEntity(this.handle);
  }
  /**
   * @returns `true` if the current entity is networked, false otherwise
   */
  get IsNetworked() {
    return NetworkGetEntityIsNetworked(this.handle);
  }
  set IsNetworked(networked) {
    if (networked) {
      NetworkRegisterEntityAsNetworked(this.handle);
    } else {
      if (GlobalData.IS_REDM) {
        Citizen.invokeNative("0xE31A04513237DC89", this.handle);
      } else {
        NetworkUnregisterNetworkedEntity(this.handle);
      }
    }
  }
  get State() {
    return cfx.Entity(this.handle).state;
  }
  AddStateBagChangeHandler(keyFilter, handler) {
    const stateBagName = this.IsNetworked ? `entity:${this.NetworkId}` : `localEntity:${this.handle}`;
    const cookie = AddStateBagChangeHandler(keyFilter, stateBagName, handler);
    this.stateBagCookies.push(cookie);
    return cookie;
  }
  /**
   * A short hand function for AddStateBagChangeHandler, this gets automatically cleaned up on entity deletion.
   * @param keyFilter the key to filter for or null
   * @param handler the function to handle the change
   * @returns a cookie to be used in RemoveStateBagChangeHandler
   */
  listenForStateChange(keyFilter, handler) {
    return this.AddStateBagChangeHandler(keyFilter, handler);
  }
  removeStateListener(tgtCookie) {
    this.stateBagCookies = this.stateBagCookies.filter((cookie) => {
      const isCookie = cookie === tgtCookie;
      if (isCookie) RemoveStateBagChangeHandler(cookie);
      return isCookie;
    });
  }
  get Owner() {
    return NetworkGetEntityOwner(this.handle);
  }
  get Speed() {
    return GetEntitySpeed(this.handle);
  }
  getSpeedVector(isRelative = false) {
    return Vector3.fromArray(GetEntitySpeedVector(this.handle, isRelative));
  }
  get ForwardVector() {
    return Vector3.fromArray(GetEntityForwardVector(this.handle));
  }
  get Matrix() {
    return Vector3.fromArrays(GetEntityMatrix(this.handle));
  }
  get MaxHealth() {
    return GetEntityMaxHealth(this.handle);
  }
  set MaxHealth(amount) {
    SetEntityMaxHealth(this.handle, amount);
  }
  set IsDead(value) {
    if (value) {
      SetEntityHealth(this.handle, 0);
    } else {
      SetEntityHealth(this.handle, 200);
    }
  }
  /**
   * @returns Returns true if the entity is dead
   */
  get IsDead() {
    return IsEntityDead(this.handle);
  }
  get IsAlive() {
    return !IsEntityDead(this.handle);
  }
  get Model() {
    return new CommonModel(GetEntityModel(this.handle));
  }
  /**
   * Returns if the entity is set as a mission entity and will not be cleaned up by the engine
   */
  get IsMissionEntity() {
    return IsEntityAMissionEntity(this.handle);
  }
  /**
   * Sets if the entity is a mission entity and will not be cleaned up by the engine
   */
  set IsMissionEntity(value) {
    if (value) {
      SetEntityAsMissionEntity(this.handle, false, false);
    } else {
      SetEntityAsNoLongerNeeded(this.handle);
    }
  }
  set PositionNoOffset(position) {
    SetEntityCoordsNoOffset(this.handle, position.x, position.y, position.z, true, true, true);
  }
  get Rotation() {
    return Vector3.fromArray(GetEntityRotation(this.handle, 2));
  }
  set Rotation(rotation) {
    SetEntityRotation(this.handle, rotation.x, rotation.y, rotation.z, 2, true);
  }
  set Quaternion(quaternion) {
    SetEntityQuaternion(this.handle, quaternion.x, quaternion.y, quaternion.z, quaternion.w);
  }
  get IsPositionFrozen() {
    return IsEntityPositionFrozen(this.handle);
  }
  set IsPositionFrozen(value) {
    FreezeEntityPosition(this.handle, value);
  }
  get Velocity() {
    return Vector3.fromArray(GetEntityVelocity(this.handle));
  }
  set Velocity(velocity) {
    SetEntityVelocity(this.handle, velocity.x, velocity.y, velocity.z);
  }
  get IsVisible() {
    return IsEntityVisible(this.handle);
  }
  /**
   * @param amount the health to set the health to, setting to `0` will kill the entity, if using on a {@link Ped} you should check the MaxHealth before setting.
   */
  set Health(amount) {
    SetEntityHealth(this.handle, amount, 0);
  }
  /**
   * @returns the amount of health the current {@link BaseEntity} has
   */
  get Health() {
    return GetEntityHealth(this.handle);
  }
  /**
   * @returns the heading of the current {@link BaseEntity}
   */
  get Heading() {
    return GetEntityHeading(this.handle);
  }
  /**
   * @param heading sets the entitys heading to the specified heading, this can be in the range of 0..360
   */
  set Heading(heading) {
    SetEntityHeading(this.handle, heading);
  }
  /**
   * @returns the position of the current Entity
   */
  get Position() {
    return Vector3.fromArray(GetEntityCoords(this.handle, true, true));
  }
  /**
   * You should always try to load the collisions before setting the entitys position if going a long distance.
   * @param pos sets the position for the current ped
   */
  set Position(pos) {
    SetEntityCoords(this.handle, pos.x, pos.y, pos.z, false, false, false, false);
  }
  delete() {
    this.IsMissionEntity = true;
    DeleteEntity(this.handle);
    for (const cookie of this.stateBagCookies) {
      RemoveStateBagChangeHandler(cookie);
    }
  }
  /*
   * Attaches an entity to another entity via a bone
   * @example
   * ```typescript
   * const ply = Game.PlayerPed;
   * const bag = await World.createProp(new Model('ba_prop_battle_bag_01b'), ply.Position, true, true, true);
   * bag.attachToBone(
   *     ply.Bones.getBone(64113),
   *     new Vector3(0.12, -0.25, 0.0),
   *     new Vector3(105.0, 50.0, 190.0)
   * )
   * ```
   */
  attachToBone(entityBone, position, rotation, collisions = false, unk9 = true, useSoftPinning = true, rotationOrder = 1) {
    if (this.handle === entityBone.Owner.Handle) {
      throw new Error("You cannot attach an entity to the same entity this will result in a crash!");
    }
    AttachEntityToEntity(
      this.handle,
      entityBone.Owner.Handle,
      entityBone.Index,
      position.x,
      position.y,
      position.z,
      rotation.x,
      rotation.y,
      rotation.z,
      unk9,
      useSoftPinning,
      collisions,
      IsEntityAPed(entityBone.Owner.Handle),
      rotationOrder,
      true
    );
  }
}
export {
  CommonBaseEntity
};
