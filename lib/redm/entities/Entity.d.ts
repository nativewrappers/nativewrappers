import type { Vector3 } from "../common/utils/Vector";
import { type BoneIndex, EntityType, ForceType } from "../enums/Entity";
import type { Throwable } from "../types/Throwable";
import { BaseEntity } from "./BaseEntity";
import type { CommonBaseEntityBoneCollection } from "../common-game/entities/CommonBaseEntityBoneCollection";
import { ClassTypes } from "../common/utils/ClassTypes";
export declare class Entity extends BaseEntity {
    protected type: ClassTypes;
    protected bones?: CommonBaseEntityBoneCollection | undefined;
    constructor(handle: number);
    addTrackingTrails(): void;
    get EntityType(): EntityType;
    /**
     * @param direction - the direction to apply the force towards
     * @param offset - the offset to apply the force to
     * @param forceType - the force type to apply
     * @param boneIndex - the boneIndex to apply the force to, or 0
     * @param isDirectional - whether the direction is relational?
     * @param ignoreUpVec - ?
     * @param isForceRel - whether to multiply the force by the object mass & acceleration
     */
    applyForce(direction: Vector3, offset: Vector3, forceType?: ForceType, boneIndex?: BoneIndex, isDirectional?: boolean, ignoreUpVec?: boolean, isForceRel?: boolean): void;
    /**
     * @param direction - the direction to apply the force towards
     * @param forceType - the force type to use
     * @param isDirectional - whether the direction is local?
     * @param isForceRel - whether to multiply the force by the object mass & acceleration
     */
    applyForceToCenter(direction: Vector3, forceType?: ForceType, isDirectional?: boolean, isForceRel?: boolean): void;
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
    attachTo(tgtEntity: Entity, pos: Vector3, rot: Vector3, boneIndex?: BoneIndex, enableCollision?: boolean, useSoftPinning?: boolean, vertexIndex?: number, fixedRot?: boolean): Throwable<void>;
}
