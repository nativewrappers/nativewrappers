var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { Quaternion } from "../common/utils/Quaternion";
import { Vector3 } from "../common/utils/Vector";
import { Model } from "../Model";
import cfx, {} from "../cfx";
import { ForceType } from "../enums/ForceType";
import { Blip } from "../Blip";
class BaseEntity {
  static {
    __name(this, "BaseEntity");
  }
  handle;
  stateBagCookies = [];
  netId = null;
  constructor(handle) {
    this.handle = handle;
    if (this.IsNetworked) {
      this.netId = this.NetworkId;
    }
  }
  get Handle() {
    return this.handle;
  }
  /**
   * @returns if the entity is a networked entity or local entity
   */
  get IsNetworked() {
    return NetworkGetEntityIsNetworked(this.handle);
  }
  set IsNetworked(networked) {
    if (networked) {
      NetworkRegisterEntityAsNetworked(this.handle);
    } else {
      NetworkUnregisterNetworkedEntity(this.handle);
    }
  }
  get NetworkId() {
    if (this.netId) {
      return this.netId;
    }
    return NetworkGetNetworkIdFromEntity(this.handle);
  }
  get IsNetworkConcealed() {
    return NetworkIsEntityConcealed(this.handle);
  }
  set IsNetworkConcealed(concealed) {
    NetworkConcealEntity(this.handle, concealed);
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
  // public isPlayerOwner(player: Player): boolean {
  //     return this.Owner === player.Handle;
  // }
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
  set Matrix(vectors) {
    if (vectors.length !== 4) throw Error(`Expected 4 Vectors, got ${vectors.length}`);
    const [forward, right, up, pos] = vectors;
    SetEntityMatrix(
      this.handle,
      forward.x,
      forward.y,
      forward.z,
      right.x,
      right.y,
      right.z,
      up.x,
      up.y,
      up.z,
      pos.x,
      pos.y,
      pos.z
    );
  }
  get Health() {
    return GetEntityHealth(this.handle);
  }
  set Health(amount) {
    SetEntityHealth(this.handle, amount);
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
  get IsDead() {
    return IsEntityDead(this.handle);
  }
  get IsAlive() {
    return !IsEntityDead(this.handle);
  }
  /**
   * @deprecated use [[IsDead]] instead
   */
  isDead() {
    return IsEntityDead(this.handle);
  }
  /**
   * @deprecated use [[IsAlive]] instead
   */
  isAlive() {
    return !this.isDead();
  }
  get Model() {
    return new Model(GetEntityModel(this.handle));
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
  get Position() {
    return Vector3.fromArray(GetEntityCoords(this.handle, false));
  }
  set Position(position) {
    SetEntityCoords(this.handle, position.x, position.y, position.z, false, false, false, true);
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
  get Quaternion() {
    const quaternion = GetEntityQuaternion(this.handle);
    return new Quaternion(quaternion[0], quaternion[1], quaternion[2], quaternion[3]);
  }
  set Quaternion(quaternion) {
    SetEntityQuaternion(this.handle, quaternion.x, quaternion.y, quaternion.z, quaternion.w);
  }
  get Heading() {
    return GetEntityHeading(this.handle);
  }
  set Heading(heading) {
    SetEntityHeading(this.handle, heading);
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
  get RotationVelocity() {
    return Vector3.fromArray(GetEntityRotationVelocity(this.handle));
  }
  set MaxSpeed(value) {
    SetEntityMaxSpeed(this.handle, value);
  }
  set HasGravity(value) {
    SetEntityHasGravity(this.handle, value);
  }
  get HeightAboveGround() {
    return GetEntityHeightAboveGround(this.handle);
  }
  get SubmersionLevel() {
    return GetEntitySubmergedLevel(this.handle);
  }
  get LodDistance() {
    return GetEntityLodDist(this.handle);
  }
  set LodDistance(value) {
    SetEntityLodDist(this.handle, value);
  }
  get IsVisible() {
    return IsEntityVisible(this.handle);
  }
  set IsVisible(value) {
    SetEntityVisible(this.handle, value, false);
  }
  get IsOccluded() {
    return IsEntityOccluded(this.handle);
  }
  get IsOnScreen() {
    return IsEntityOnScreen(this.handle);
  }
  get IsUpright() {
    return IsEntityUpright(this.handle, 0);
  }
  get IsUpsideDown() {
    return IsEntityUpsidedown(this.handle);
  }
  get IsInAir() {
    return IsEntityInAir(this.handle);
  }
  get IsInWater() {
    return IsEntityInWater(this.handle);
  }
  /**
   * @deprecated use [[IsMissionEntity]] instead as its more obvious as what it does
   */
  get IsPersistent() {
    return IsEntityAMissionEntity(this.handle);
  }
  /**
   * @deprecated use [[IsMissionEntity]] instead as its more obvious as what it does
   */
  set IsPersistent(value) {
    if (value) {
      SetEntityAsMissionEntity(this.handle, true, false);
    } else {
      SetEntityAsNoLongerNeeded(this.handle);
    }
  }
  get IsOnFire() {
    return IsEntityOnFire(this.handle);
  }
  set IsInvincible(value) {
    SetEntityInvincible(this.handle, value);
  }
  set IsOnlyDamagedByPlayer(value) {
    SetEntityOnlyDamagedByPlayer(this.handle, value);
  }
  get Opacity() {
    return GetEntityAlpha(this.handle);
  }
  /**
   * Sets how transparent an entity is, if you want to reset the alpha level use [[resetOpacity]] instead;
   */
  set Opacity(value) {
    SetEntityAlpha(this.handle, value, false);
  }
  resetOpacity() {
    ResetEntityAlpha(this.handle);
  }
  get HasCollided() {
    return HasEntityCollidedWithAnything(this.handle);
  }
  get MaterialCollidingWith() {
    return GetLastMaterialHitByEntity(this.handle);
  }
  get IsCollisionEnabled() {
    return !GetEntityCollisonDisabled(this.handle);
  }
  set IsCollisionEnabled(value) {
    SetEntityCollision(this.handle, value, false);
  }
  set IsRecordingCollisions(value) {
    SetEntityRecordsCollisions(this.handle, value);
  }
  get AttachedBlip() {
    const handle = GetBlipFromEntity(this.handle);
    if (DoesBlipExist(handle)) {
      return new Blip(handle);
    }
    return null;
  }
  attachBlip() {
    return new Blip(AddBlipForEntity(this.handle));
  }
  setNoCollision(entity, toggle) {
    SetEntityNoCollisionEntity(this.handle, entity.Handle, toggle);
  }
  hasClearLosToEntity(entity, traceType = 17) {
    return HasEntityClearLosToEntity(this.handle, entity.Handle, traceType);
  }
  hasClearLosToEntityInFront(entity) {
    return HasEntityClearLosToEntityInFront(this.handle, entity.Handle);
  }
  hasBeenDamagedBy(entity) {
    return HasEntityBeenDamagedByEntity(this.handle, entity.Handle, true);
  }
  hasBeenDamagedByWeapon(weapon) {
    return HasEntityBeenDamagedByWeapon(this.handle, Number(weapon), 0);
  }
  hasBeenDamagedByAnyWeapon() {
    return HasEntityBeenDamagedByWeapon(this.handle, 0, 2);
  }
  hasBeenDamagedByAnyMeleeWeapon() {
    return HasEntityBeenDamagedByWeapon(this.handle, 0, 1);
  }
  clearLastWeaponDamage() {
    ClearEntityLastWeaponDamage(this.handle);
  }
  isInArea(minBounds, maxBounds) {
    return IsEntityInArea(
      this.handle,
      minBounds.x,
      minBounds.y,
      minBounds.z,
      maxBounds.x,
      maxBounds.y,
      maxBounds.z,
      false,
      false,
      0
    );
  }
  isInAngledArea(origin, edge, angle) {
    return IsEntityInAngledArea(
      this.handle,
      origin.x,
      origin.y,
      origin.z,
      edge.x,
      edge.y,
      edge.z,
      angle,
      false,
      true,
      0
    );
  }
  isInRangeOf(position, range) {
    const v = Vector3.subtract(this.Position, position);
    return v.dotProduct(v) < range * range;
  }
  isNearEntity(entity, bounds) {
    return IsEntityAtEntity(this.handle, entity.Handle, bounds.x, bounds.y, bounds.z, false, true, 0);
  }
  isTouching(entity) {
    return IsEntityTouchingEntity(this.handle, entity.Handle);
  }
  isTouchingModel(model) {
    return IsEntityTouchingModel(this.handle, model.Hash);
  }
  /**
   * @param offset: the amount to offset from the entity
   * @returns the offset position from the entity in world coords
   */
  getOffsetInRelativeCoords(worldCoords) {
    return Vector3.fromArray(
      GetOffsetFromEntityGivenWorldCoords(this.handle, worldCoords.x, worldCoords.y, worldCoords.z)
    );
  }
  // TODO: Better example
  /**
   * @example
   * ```typescript
   * const ply = Game.PlayerPed;
   * const plyPos = ply.Position;
   * const bag = await World.createProp(new Model('ba_prop_battle_bag_01b'), plyPos, true, true, true);
   * bag.attachToBone(
   *     ply.Bones.getBone(64113),
   *     new Vector3(0.12, -0.25, 0.0),
   *     new Vector3(105.0, 50.0, 190.0)
   * )
   * const offset = bag.getRelativePositionOffset(plyPos);
   * ```
   * @param worldCoords: the offset given the world coords
   * @returns the offset position from the entity in relative coords
   */
  getOffsetInWorldCoords(offset) {
    return Vector3.fromArray(GetOffsetFromEntityInWorldCoords(this.handle, offset.x, offset.y, offset.z));
  }
  /**
   * @deprecated use [[getOffsetInRelativeCoords]] instead
   */
  getPositionOffset(worldCoords) {
    return this.getOffsetInRelativeCoords(worldCoords);
  }
  /**
   * @deprecated use [[getOffsetInWorldCoords]]
   */
  getOffsetPosition(offset) {
    return this.getOffsetInWorldCoords(offset);
  }
  attachTo(entity, position, rotation, collisions = false, unk9 = true, useSoftPinning = true, rotationOrder = 1) {
    if (this.handle === entity.Handle) {
      throw new Error("You cannot attach an entity to the same entity this will result in a crash!");
    }
    AttachEntityToEntity(
      this.handle,
      entity.Handle,
      -1,
      position.x,
      position.y,
      position.z,
      rotation.x,
      rotation.y,
      rotation.z,
      unk9,
      useSoftPinning,
      collisions,
      IsEntityAPed(entity.Handle),
      rotationOrder,
      true
    );
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
  detach() {
    DetachEntity(this.handle, true, true);
  }
  isAttached() {
    return IsEntityAttached(this.handle);
  }
  isAttachedTo(entity) {
    return IsEntityAttachedToEntity(this.handle, entity.Handle);
  }
  applyForce(direction, rotation, forceType = ForceType.MaxForceRot2) {
    ApplyForceToEntity(
      this.handle,
      Number(forceType),
      direction.x,
      direction.y,
      direction.z,
      rotation.x,
      rotation.y,
      rotation.z,
      0,
      false,
      true,
      true,
      false,
      true
    );
  }
  applyForceRelative(direction, rotation, forceType = ForceType.MaxForceRot2) {
    ApplyForceToEntity(
      this.handle,
      Number(forceType),
      direction.x,
      direction.y,
      direction.z,
      rotation.x,
      rotation.y,
      rotation.z,
      0,
      true,
      true,
      true,
      false,
      true
    );
  }
  /**
   * Removes all particle effects from the entity
   */
  removePtfxEffects() {
    RemoveParticleFxFromEntity(this.handle);
  }
  /**
   * @deprecated use [[removePtfxEffects]]
   */
  removeAllParticleEffects() {
    this.removePtfxEffects();
  }
  exists() {
    return DoesEntityExist(this.handle);
  }
  delete() {
    this.IsMissionEntity = true;
    DeleteEntity(this.handle);
    for (const cookie of this.stateBagCookies) {
      RemoveStateBagChangeHandler(cookie);
    }
  }
  /**
   * @deprecated use [[IsMissionEntity]] setter as false instead.
   */
  markAsNoLongerNeeded() {
    SetEntityAsNoLongerNeeded(this.Handle);
  }
  /**
   * @returns the current interior id that the entity is in, or 0 if they're outside
   */
  get Interior() {
    return GetInteriorFromEntity(this.handle);
  }
  /**
   * @returns the room key hash that the entity is in, or 0 if they're outside
   */
  get RoomKey() {
    return GetRoomKeyFromEntity(this.handle);
  }
  clearInterior() {
    ClearInteriorForEntity(this.handle);
  }
  forceRoom(interiorId, roomKey) {
    ForceRoomForEntity(this.handle, interiorId, roomKey);
  }
}
export {
  BaseEntity
};
