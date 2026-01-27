import type { ClassTypes } from "../../common/utils/ClassTypes";
import type { Quaternion } from "../../common/utils/Quaternion";
import { Vector3 } from "../../common/utils/Vector";
import type { CommonBaseEntityBoneCollection } from "./CommonBaseEntityBoneCollection";
import type { StateBagChangeHandler } from "../cfx/StateBagChangeHandler";
import { CommonModel } from "../CommonModel";
import type { CommonBaseEntityBone } from "./CommonBaseEntityBone";
import { IHandle } from "./IHandle";
export declare abstract class CommonBaseEntity extends IHandle {
    protected stateBagCookies: number[];
    protected netId: number | null;
    protected abstract type: ClassTypes;
    protected abstract bones?: CommonBaseEntityBoneCollection;
    constructor(handle: number);
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
    replaceHandle(newHandle: number): void;
    get Exists(): boolean;
    get Handle(): number;
    /**
     * This will return a warning if the the entity is not networked, you should always use {@link IsNetworked} prior to calling thisl
     * @returns the network for the specified entity
     */
    get NetworkId(): number;
    /**
     * @returns `true` if the current entity is networked, false otherwise
     */
    get IsNetworked(): boolean;
    set IsNetworked(networked: boolean);
    get State(): StateBagInterface;
    AddStateBagChangeHandler(keyFilter: string | null, handler: StateBagChangeHandler<unknown>): number;
    /**
     * A short hand function for AddStateBagChangeHandler, this gets automatically cleaned up on entity deletion.
     * @param keyFilter the key to filter for or null
     * @param handler the function to handle the change
     * @returns a cookie to be used in RemoveStateBagChangeHandler
     */
    listenForStateChange(keyFilter: string | null, handler: StateBagChangeHandler<unknown>): number;
    removeStateListener(tgtCookie: number): void;
    get Owner(): number;
    get Speed(): number;
    getSpeedVector(isRelative?: boolean): Vector3;
    get ForwardVector(): Vector3;
    get Matrix(): Vector3[];
    get MaxHealth(): number;
    set MaxHealth(amount: number);
    set IsDead(value: boolean);
    /**
     * @returns Returns true if the entity is dead
     */
    get IsDead(): boolean;
    get IsAlive(): boolean;
    get Model(): CommonModel;
    /**
     * Returns if the entity is set as a mission entity and will not be cleaned up by the engine
     */
    get IsMissionEntity(): boolean;
    /**
     * Sets if the entity is a mission entity and will not be cleaned up by the engine
     */
    set IsMissionEntity(value: boolean);
    set PositionNoOffset(position: Vector3);
    get Rotation(): Vector3;
    set Rotation(rotation: Vector3);
    set Quaternion(quaternion: Quaternion);
    get IsPositionFrozen(): boolean;
    set IsPositionFrozen(value: boolean);
    get Velocity(): Vector3;
    set Velocity(velocity: Vector3);
    get IsVisible(): boolean;
    /**
     * @param amount the health to set the health to, setting to `0` will kill the entity, if using on a {@link Ped} you should check the MaxHealth before setting.
     */
    set Health(amount: number);
    /**
     * @returns the amount of health the current {@link BaseEntity} has
     */
    get Health(): number;
    /**
     * @returns the heading of the current {@link BaseEntity}
     */
    get Heading(): number;
    /**
     * @param heading sets the entitys heading to the specified heading, this can be in the range of 0..360
     */
    set Heading(heading: number);
    /**
     * @returns the position of the current Entity
     */
    get Position(): Vector3;
    /**
     * You should always try to load the collisions before setting the entitys position if going a long distance.
     * @param pos sets the position for the current ped
     */
    set Position(pos: Vector3);
    delete(): void;
    attachToBone(entityBone: CommonBaseEntityBone, position: Vector3, rotation: Vector3, collisions?: boolean, unk9?: boolean, useSoftPinning?: boolean, rotationOrder?: number): void;
}
