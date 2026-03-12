import type { ClassTypes } from "../common/utils/ClassTypes";
import { Quaternion } from "../common/utils/Quaternion";
import { Vector3 } from "../common/utils/Vector";
import { Model } from "../Model";
import { type StateBagChangeHandler } from "../cfx";
import { ForceType } from "../enums/ForceType";
import type { MaterialHash } from "../hashes/MaterialHash";
import type { WeaponHash } from "../hashes/WeaponHash";
import { Blip } from "../Blip";
import type { BaseEntityBone } from "./BaseEntityBone";
import type { BaseEntityBoneCollection } from "./BaseEntityBoneCollection";
export declare abstract class BaseEntity {
    protected handle: number;
    protected stateBagCookies: number[];
    protected netId: number | null;
    protected abstract type: ClassTypes;
    protected abstract bones?: BaseEntityBoneCollection;
    constructor(handle: number);
    get Handle(): number;
    /**
     * @returns if the entity is a networked entity or local entity
     */
    get IsNetworked(): boolean;
    set IsNetworked(networked: boolean);
    get NetworkId(): number;
    get IsNetworkConcealed(): boolean;
    set IsNetworkConcealed(concealed: boolean);
    get State(): StateBagInterface;
    AddStateBagChangeHandler(keyFilter: string | null, handler: StateBagChangeHandler): number;
    /**
     * A short hand function for AddStateBagChangeHandler, this gets automatically cleaned up on entity deletion.
     * @param keyFilter the key to filter for or null
     * @param handler the function to handle the change
     * @returns a cookie to be used in RemoveStateBagChangeHandler
     */
    listenForStateChange(keyFilter: string | null, handler: StateBagChangeHandler): number;
    removeStateListener(tgtCookie: number): void;
    get Owner(): number;
    get Speed(): number;
    getSpeedVector(isRelative?: boolean): Vector3;
    get ForwardVector(): Vector3;
    get Matrix(): Vector3[];
    set Matrix(vectors: Vector3[]);
    get Health(): number;
    set Health(amount: number);
    get MaxHealth(): number;
    set MaxHealth(amount: number);
    set IsDead(value: boolean);
    get IsDead(): boolean;
    get IsAlive(): boolean;
    /**
     * @deprecated use [[IsDead]] instead
     */
    isDead(): boolean;
    /**
     * @deprecated use [[IsAlive]] instead
     */
    isAlive(): boolean;
    get Model(): Model;
    /**
     * Returns if the entity is set as a mission entity and will not be cleaned up by the engine
     */
    get IsMissionEntity(): boolean;
    /**
     * Sets if the entity is a mission entity and will not be cleaned up by the engine
     */
    set IsMissionEntity(value: boolean);
    get Position(): Vector3;
    set Position(position: Vector3);
    set PositionNoOffset(position: Vector3);
    get Rotation(): Vector3;
    set Rotation(rotation: Vector3);
    get Quaternion(): Quaternion;
    set Quaternion(quaternion: Quaternion);
    get Heading(): number;
    set Heading(heading: number);
    get IsPositionFrozen(): boolean;
    set IsPositionFrozen(value: boolean);
    get Velocity(): Vector3;
    set Velocity(velocity: Vector3);
    get RotationVelocity(): Vector3;
    set MaxSpeed(value: number);
    set HasGravity(value: boolean);
    get HeightAboveGround(): number;
    get SubmersionLevel(): number;
    get LodDistance(): number;
    set LodDistance(value: number);
    get IsVisible(): boolean;
    set IsVisible(value: boolean);
    get IsOccluded(): boolean;
    get IsOnScreen(): boolean;
    get IsUpright(): boolean;
    get IsUpsideDown(): boolean;
    get IsInAir(): boolean;
    get IsInWater(): boolean;
    /**
     * @deprecated use [[IsMissionEntity]] instead as its more obvious as what it does
     */
    get IsPersistent(): boolean;
    /**
     * @deprecated use [[IsMissionEntity]] instead as its more obvious as what it does
     */
    set IsPersistent(value: boolean);
    get IsOnFire(): boolean;
    set IsInvincible(value: boolean);
    set IsOnlyDamagedByPlayer(value: boolean);
    get Opacity(): number;
    /**
     * Sets how transparent an entity is, if you want to reset the alpha level use [[resetOpacity]] instead;
     */
    set Opacity(value: number);
    resetOpacity(): void;
    get HasCollided(): boolean;
    get MaterialCollidingWith(): MaterialHash;
    get IsCollisionEnabled(): boolean;
    set IsCollisionEnabled(value: boolean);
    set IsRecordingCollisions(value: boolean);
    abstract get Bones(): BaseEntityBoneCollection;
    get AttachedBlip(): Blip | null;
    attachBlip(): Blip;
    setNoCollision(entity: BaseEntity, toggle: boolean): void;
    hasClearLosToEntity(entity: BaseEntity, traceType?: number): boolean;
    hasClearLosToEntityInFront(entity: BaseEntity): boolean;
    hasBeenDamagedBy(entity: BaseEntity): boolean;
    hasBeenDamagedByWeapon(weapon: WeaponHash): boolean;
    hasBeenDamagedByAnyWeapon(): boolean;
    hasBeenDamagedByAnyMeleeWeapon(): boolean;
    clearLastWeaponDamage(): void;
    isInArea(minBounds: Vector3, maxBounds: Vector3): boolean;
    isInAngledArea(origin: Vector3, edge: Vector3, angle: number): boolean;
    isInRangeOf(position: Vector3, range: number): boolean;
    isNearEntity(entity: BaseEntity, bounds: Vector3): boolean;
    isTouching(entity: BaseEntity): boolean;
    isTouchingModel(model: Model): boolean;
    /**
     * @param offset: the amount to offset from the entity
     * @returns the offset position from the entity in world coords
     */
    getOffsetInRelativeCoords(worldCoords: Vector3): Vector3;
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
    getOffsetInWorldCoords(offset: Vector3): Vector3;
    /**
     * @deprecated use [[getOffsetInRelativeCoords]] instead
     */
    getPositionOffset(worldCoords: Vector3): Vector3;
    /**
     * @deprecated use [[getOffsetInWorldCoords]]
     */
    getOffsetPosition(offset: Vector3): Vector3;
    attachTo(entity: BaseEntity, position: Vector3, rotation: Vector3, collisions?: boolean, unk9?: boolean, useSoftPinning?: boolean, rotationOrder?: number): void;
    attachToBone(entityBone: BaseEntityBone, position: Vector3, rotation: Vector3, collisions?: boolean, unk9?: boolean, useSoftPinning?: boolean, rotationOrder?: number): void;
    detach(): void;
    isAttached(): boolean;
    isAttachedTo(entity: BaseEntity): boolean;
    abstract getEntityAttachedTo(): BaseEntity | null;
    applyForce(direction: Vector3, rotation: Vector3, forceType?: ForceType): void;
    applyForceRelative(direction: Vector3, rotation: Vector3, forceType?: ForceType): void;
    /**
     * Removes all particle effects from the entity
     */
    removePtfxEffects(): void;
    /**
     * @deprecated use [[removePtfxEffects]]
     */
    removeAllParticleEffects(): void;
    exists(): boolean;
    delete(): void;
    /**
     * @deprecated use [[IsMissionEntity]] setter as false instead.
     */
    markAsNoLongerNeeded(): void;
    /**
     * @returns the current interior id that the entity is in, or 0 if they're outside
     */
    get Interior(): number;
    /**
     * @returns the room key hash that the entity is in, or 0 if they're outside
     */
    get RoomKey(): number;
    clearInterior(): void;
    forceRoom(interiorId: number, roomKey: number): void;
}
