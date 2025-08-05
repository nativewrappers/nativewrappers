import type { ClassTypes } from "@common/utils/ClassTypes";
import { Quaternion } from "@common/utils/Quaternion";
import { Vector3 } from "@common/utils/Vector";
import type { CommonBaseEntityBoneCollection } from "./CommonBaseEntityBoneCollection";
import type { StateBagChangeHandler } from "common-game/cfx/StateBagChangeHandler";
import cfx from "common-game/cfx/cfx";
import { CommonModel } from "common-game/CommonModel";
import { GlobalData } from "@common/GlobalData";


export abstract class CommonBaseEntity {
  protected handle: number;
  protected stateBagCookies: number[] = [];
  protected netId: number | null = null;
  protected abstract type: ClassTypes;
  protected abstract bones?: CommonBaseEntityBoneCollection;

  constructor(handle: number) {
    this.handle = handle;
    if (this.IsNetworked) {
      this.netId = this.NetworkId;
    }
  }

  public get Handle(): number {
    return this.handle;
  }

  /**
   * @returns if the entity is a networked entity or local entity
   */
  public get IsNetworked(): boolean {
    return NetworkGetEntityIsNetworked(this.handle);
  }

  public set IsNetworked(networked: boolean) {
    if (networked) {
      NetworkRegisterEntityAsNetworked(this.handle);
    } else {
      if (GlobalData.GameName === "redm") {
        Citizen.invokeNative("0xE31A04513237DC89", this.handle)
      } else {
        // @ts-ignore: proper name on fivem
        NetworkUnregisterNetworkedEntity(this.handle);
      }
    }
  }

  public get NetworkId(): number {
    if (this.netId) {
      return this.netId;
    }
    return NetworkGetNetworkIdFromEntity(this.handle);
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

  public get Health(): number {
    return GetEntityHealth(this.handle);
  }

  public set Health(amount: number) {
    SetEntityHealth(this.handle, amount);
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

  public get IsDead(): boolean {
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

  public get Position(): Vector3 {
    return Vector3.fromArray(GetEntityCoords(this.handle, false));
  }

  public set Position(position: Vector3) {
    SetEntityCoords(this.handle, position.x, position.y, position.z, false, false, false, true);
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

  public get Heading(): number {
    return GetEntityHeading(this.handle);
  }

  public set Heading(heading: number) {
    SetEntityHeading(this.handle, heading);
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

  public exists(): boolean {
    return DoesEntityExist(this.handle);
  }

  public delete(): void {
    this.IsMissionEntity = true;
    DeleteEntity(this.handle);
    for (const cookie of this.stateBagCookies) {
      RemoveStateBagChangeHandler(cookie);
    }
  }
  
}
