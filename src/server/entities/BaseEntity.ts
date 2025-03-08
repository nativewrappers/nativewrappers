import cfx from "../cfx";
import { ClassTypes } from "@common/utils/ClassTypes";
import type { eEntityType } from "../enum/eEntityType";
import type { PopulationType } from "../enum/PopulationType";
import type { Hash } from "../type/Hash";
import type { OrphanMode } from "server/enum/OrphanMode";
import { Vector3, Vector4 } from "@common/utils/Vector";

export class BaseEntity {
  protected type = ClassTypes.Entity;
  constructor(protected handle: number) {}

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
  replaceHandle(newHandle: number) {
    this.handle = newHandle;
  }

  static fromNetworkId(networkId: number): BaseEntity | null {
    const ent = NetworkGetEntityFromNetworkId(networkId);
    if (ent === 0) return null;
    return new BaseEntity(ent);
  }

  static fromStateBagName(stateBagName: string): BaseEntity | null {
    const ent = GetEntityFromStateBagName(stateBagName);
    if (ent === 0) return null;
    return new BaseEntity(ent);
  }

  public get State(): StateBagInterface {
    return cfx.Entity(this.handle).state;
  }

  public get Handle(): number {
    return this.handle;
  }

  public get Owner(): number {
    return NetworkGetEntityOwner(this.handle);
  }

  public get FirstOwner(): number {
    return NetworkGetFirstEntityOwner(this.handle);
  }

  public get Exists(): boolean {
    return this.handle !== 0 && DoesEntityExist(this.handle);
  }

  /**
   * @returns the entity that the calling entity is attached to, or null if
   * there is none
   */
  public get AttachedTo(): BaseEntity | null {
    const ent = GetEntityAttachedTo(this.handle);
    if (ent === 0) return null;
    return new BaseEntity(ent);
  }

  public get Position(): Vector3 {
    return Vector3.fromArray(GetEntityCoords(this.handle));
  }

  public get Heading(): number {
    return GetEntityHeading(this.handle);
  }

  public get PositionAndHeading(): Vector4 {
    return Vector4.fromArray([...GetEntityCoords(this.handle), GetEntityHeading(this.handle)]);
  }

  public get Health(): number {
    return GetEntityHealth(this.handle);
  }

  public get MaxHealth(): number {
    return GetEntityMaxHealth(this.handle);
  }

  public get Model(): Hash {
    return GetEntityModel(this.handle);
  }

  public get PopulationType(): PopulationType {
    return GetEntityPopulationType(this.handle);
  }

  public get Rotation(): Vector3 {
    return Vector3.fromArray(GetEntityRotation(this.handle));
  }

  public get RotationVelocity(): Vector3 {
    return Vector3.fromArray(GetEntityRotationVelocity(this.handle));
  }

  public get RoutingBucket(): number {
    return GetEntityRoutingBucket(this.handle);
  }

  /**
   * @returns The script that made the entity
   */
  public get Script(): string {
    return GetEntityScript(this.handle);
  }

  public get Speed(): number {
    return GetEntitySpeed(this.handle);
  }

  public get Type(): eEntityType {
    return GetEntityType(this.handle);
  }

  /**
   * @returns the entitys velocity, if the entity is a ped it will return Vector3(0, 0, 0)
   */
  public get Velocity(): Vector3 {
    return Vector3.fromArray(GetEntityVelocity(this.handle));
  }

  public get IsVisible(): boolean {
    return IsEntityVisible(this.handle);
  }

  public get NetworkId(): number {
    return NetworkGetNetworkIdFromEntity(this.handle);
  }

  public get IsNoLongerNeeded(): boolean {
    return HasEntityBeenMarkedAsNoLongerNeeded(this.handle);
  }

  public get OrphanMode() {
    return GetEntityOrphanMode(this.Handle);
  }

  public set OrphanMode(orphanMode: OrphanMode) {
    SetEntityOrphanMode(this.Handle, orphanMode);
  }

  public delete() {
    if (this.Exists) {
      DeleteEntity(this.handle);
    }
  }
}
