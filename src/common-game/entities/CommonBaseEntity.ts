import type { ClassTypes } from "@common/utils/ClassTypes";
import type { Quaternion } from "@common/utils/Quaternion";
import { Vector3 } from "@common/utils/Vector";
import type { CommonBaseEntityBoneCollection } from "./CommonBaseEntityBoneCollection";
import type { StateBagChangeHandler } from "@common-game/cfx/StateBagChangeHandler";
import cfx from "@common-game/cfx/cfx";
import { CommonModel } from "@common-game/CommonModel";
import { GlobalData } from "@common/GlobalData";
import type { CommonBaseEntityBone } from "./CommonBaseEntityBone";
import { IHandle } from "./IHandle";


export abstract class CommonBaseEntity extends IHandle {
  protected stateBagCookies: number[] = [];
  protected netId: number | null = null;
  protected abstract type: ClassTypes;
  protected abstract bones?: CommonBaseEntityBoneCollection;

  constructor(handle: number) {
    super(handle)
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
  replaceHandle(newHandle: number) {
    this.handle = newHandle;
  }

  /*
  * @returns `true` if the entity exists, `false` otherwise.
  */
  get Exists(): boolean {
    return DoesEntityExist(this.handle);
  }
  

  /*
  * @returns the handle of the specified entity
  */
  public get Handle(): number {
    return this.handle;
  }

  /**
    * This will return a warning if the the entity is not networked, you should always use {@link IsNetworked} prior to calling thisl
   * @returns the network for the specified entity
   */
  get NetworkId(): number {
    return NetworkGetNetworkIdFromEntity(this.handle);
  }

  /**
   * @returns `true` if the current entity is networked, false otherwise
   */
  get IsNetworked(): boolean {
    return NetworkGetEntityIsNetworked(this.handle);
  }

  public set IsNetworked(networked: boolean) {
    if (networked) {
      NetworkRegisterEntityAsNetworked(this.handle);
    } else {
      if (GlobalData.IS_REDM) {
        Citizen.invokeNative("0xE31A04513237DC89", this.handle);
      } else {
        // @ts-ignore: proper name on fivem
        NetworkUnregisterNetworkedEntity(this.handle);
      }
    }
  }

  public get State(): StateBagInterface {
    return cfx.Entity(this.handle).state;
  }

  public AddStateBagChangeHandler(keyFilter: string | null, handler: StateBagChangeHandler<unknown>): number {
    const stateBagName = this.IsNetworked ? `entity:${this.NetworkId}` : `localEntity:${this.handle}`;
    const cookie = AddStateBagChangeHandler(keyFilter as any, stateBagName, handler);
    this.stateBagCookies.push(cookie);
    return cookie;
  }

  /**
   * A short hand function for AddStateBagChangeHandler, this gets automatically cleaned up on entity deletion.
   * @param keyFilter the key to filter for or null
   * @param handler the function to handle the change
   * @returns a cookie to be used in RemoveStateBagChangeHandler
   */
  public listenForStateChange(keyFilter: string | null, handler: StateBagChangeHandler<unknown>): number {
    return this.AddStateBagChangeHandler(keyFilter, handler);
  }

  public removeStateListener(tgtCookie: number): void {
    this.stateBagCookies = this.stateBagCookies.filter((cookie) => {
      const isCookie = cookie === tgtCookie;
      if (isCookie) RemoveStateBagChangeHandler(cookie);
      return isCookie;
    });
  }

  public get Owner(): number {
    return NetworkGetEntityOwner(this.handle);
  }

  public get Speed(): number {
    return GetEntitySpeed(this.handle);
  }

  public getSpeedVector(isRelative = false): Vector3 {
    return Vector3.fromArray(GetEntitySpeedVector(this.handle, isRelative));
  }

  public get ForwardVector(): Vector3 {
    return Vector3.fromArray(GetEntityForwardVector(this.handle));
  }

  public get Matrix(): Vector3[] {
    return Vector3.fromArrays(GetEntityMatrix(this.handle));
  }

  public get MaxHealth(): number {
    return GetEntityMaxHealth(this.handle);
  }

  public set MaxHealth(amount: number) {
    SetEntityMaxHealth(this.handle, amount);
  }

  public set IsDead(value: boolean) {
    if (value) {
      SetEntityHealth(this.handle, 0);
    } else {
      SetEntityHealth(this.handle, 200);
    }
  }

  /**
   * @returns Returns true if the entity is dead
   */
  get IsDead(): boolean {
    return IsEntityDead(this.handle);
  }

  public get IsAlive(): boolean {
    return !IsEntityDead(this.handle);
  }

  public get Model(): CommonModel {
    return new CommonModel(GetEntityModel(this.handle));
  }

  /**
   * Returns if the entity is set as a mission entity and will not be cleaned up by the engine
   */
  public get IsMissionEntity(): boolean {
    return IsEntityAMissionEntity(this.handle);
  }

  /**
   * Sets if the entity is a mission entity and will not be cleaned up by the engine
   */
  public set IsMissionEntity(value: boolean) {
    if (value) {
      SetEntityAsMissionEntity(this.handle, false, false);
    } else {
      SetEntityAsNoLongerNeeded(this.handle);
    }
  }

  public set PositionNoOffset(position: Vector3) {
    SetEntityCoordsNoOffset(this.handle, position.x, position.y, position.z, true, true, true);
  }

  public get Rotation(): Vector3 {
    return Vector3.fromArray(GetEntityRotation(this.handle, 2));
  }

  public set Rotation(rotation: Vector3) {
    SetEntityRotation(this.handle, rotation.x, rotation.y, rotation.z, 2, true);
  }

  public set Quaternion(quaternion: Quaternion) {
    SetEntityQuaternion(this.handle, quaternion.x, quaternion.y, quaternion.z, quaternion.w);
  }

  public get IsPositionFrozen(): boolean {
    return IsEntityPositionFrozen(this.handle);
  }

  public set IsPositionFrozen(value: boolean) {
    FreezeEntityPosition(this.handle, value);
  }

  public get Velocity(): Vector3 {
    return Vector3.fromArray(GetEntityVelocity(this.handle));
  }

  public set Velocity(velocity: Vector3) {
    SetEntityVelocity(this.handle, velocity.x, velocity.y, velocity.z);
  }

  public get IsVisible(): boolean {
    return IsEntityVisible(this.handle)
  }


  /**
   * @param amount the health to set the health to, setting to `0` will kill the entity, if using on a {@link Ped} you should check the MaxHealth before setting.
   */
  set Health(amount: number) {
    SetEntityHealth(this.handle, amount, 0);
  }

  /**
   * @returns the amount of health the current {@link BaseEntity} has
   */
  get Health(): number {
    return GetEntityHealth(this.handle);
  }

  /**
   * @returns the heading of the current {@link BaseEntity}
   */
  get Heading(): number {
    return GetEntityHeading(this.handle);
  }

  /**
   * @param heading sets the entitys heading to the specified heading, this can be in the range of 0..360
   */
  set Heading(heading: number) {
    SetEntityHeading(this.handle, heading);
  }

  /**
   * @returns the position of the current Entity
   */
  get Position(): Vector3 {
    return Vector3.fromArray(GetEntityCoords(this.handle, true, true));
  }

  /**
   * You should always try to load the collisions before setting the entitys position if going a long distance.
   * @param pos sets the position for the current ped
   */
  set Position(pos: Vector3) {
    SetEntityCoords(this.handle, pos.x, pos.y, pos.z, false, false, false, false);
  }
  

  public delete(): void {
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
  public attachToBone(
    entityBone: CommonBaseEntityBone,
    position: Vector3,
    rotation: Vector3,
    collisions = false,
    unk9 = true,
    useSoftPinning = true,
    rotationOrder = 1,
  ): void {
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
      true,
    );
  }
}
