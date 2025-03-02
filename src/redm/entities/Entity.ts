import { type BoneIndex, EntityType, ForceType } from "../enums/Entity";
import type { Throwable } from "../types/Throwable";
import { type Vector3, _N } from "../utils";
import { BaseEntity } from "./BaseEntity";

export class Entity extends BaseEntity {
  // NOTE: There is nothing stopping you from using creating an invalid entity, you should do your own due-diligence
  constructor(handle: number) {
    super(handle);
  }

  addTrackingTrails(): void {
    // _ADD_ENTITY_TRACKING_TRAILS
    _N<void>("0x1AD922AB5038DEF3", this.Handle);
  }

  get EntityType(): EntityType {
    return GetEntityType(this.Handle);
  }

  /**
   * @param direction - the direction to apply the force towards
   * @param offset - the offset to apply the force to
   * @param forceType - the force type to apply
   * @param boneIndex - the boneIndex to apply the force to, or 0
   * @param isDirectional - whether the direction is relational?
   * @param ignoreUpVec - ?
   * @param isForceRel - whether to multiply the force by the object mass & acceleration
   */
  applyForce(
    direction: Vector3,
    offset: Vector3,
    forceType = ForceType.MinForce,
    boneIndex: BoneIndex = 0,
    isDirectional = false,
    ignoreUpVec = true,
    isForceRel = true,
  ): void {
    const d = direction;
    const o = offset;
    ApplyForceToEntity(
      this.Handle,
      forceType,
      d.x,
      d.y,
      d.z,
      o.x,
      o.y,
      o.z,
      boneIndex,
      isDirectional,
      ignoreUpVec,
      isForceRel,
      false,
      true,
    );
  }

  /**
   * @param direction - the direction to apply the force towards
   * @param forceType - the force type to use
   * @param isDirectional - whether the direction is local?
   * @param isForceRel - whether to multiply the force by the object mass & acceleration
   */
  applyForceToCenter(
    direction: Vector3,
    forceType = ForceType.MinForce,
    isDirectional = false,
    isForceRel = true,
  ): void {
    const d = direction;
    ApplyForceToEntityCenterOfMass(this.Handle, forceType, d.x, d.y, d.z, false, isDirectional, isForceRel, false);
  }

  /**
   * @param tgtEntity - the entity to attach to the {@Entity}
   * @param pos - the position offset
   * @param rot - the rotation to apply to the entity
   * @param boneIndex - the bone to attach the entity to, or 0 for the center of the entity
   * @param enableCollision - whether the entity should have collision enabled
   * @param useSoftPinning - when false the entity will not detach from the {@Entity}
   * @param vertexIndex -  ?
   * @param fixedRot - ?
   * @throws Error if tgtEntity and {@Entity} are the same entity
   */
  attachTo(
    tgtEntity: Entity,
    pos: Vector3,
    rot: Vector3,
    boneIndex: BoneIndex = 0,
    enableCollision = true,
    useSoftPinning = false,
    vertexIndex = 0,
    fixedRot = true,
  ): Throwable<void> {
    if (tgtEntity.Handle === this.Handle) {
      throw new Error("tgtEntity had the same handle as the current entity, attaching an entity to itself will crash");
    }
    const p = pos;
    const r = rot;
    AttachEntityToEntity(
      tgtEntity.Handle,
      this.Handle,
      boneIndex,
      p.x,
      p.y,
      p.z,
      r.x,
      r.y,
      r.z,
      false as unknown as number,
      useSoftPinning as unknown as number,
      enableCollision as unknown as number,
      (this.EntityType === EntityType.Ped) as unknown as number,
      vertexIndex,
      fixedRot as unknown as number,
      false as unknown as number,
      false as unknown as number,
    );
  }
}
