import { Vector3 } from "../common/utils";
export declare class BaseEntity {
    private handle;
    constructor(entHandle: number);
    /**
      * Replaces the current handle for the entity used on, this hsould be used sparringly, mainly
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
    /**
     * @returns the network for the specified entity, this doesn't check if the entity is networked, you should use {@link BaseEntity.IsNetworked}
     */
    get NetworkId(): number;
    /**
     * @returns `true` if the current entity is networked, false otherwise
     */
    get IsNetworked(): boolean;
    /**
     * @returns Returns true if the entity handle is not 0 and exists in the game engine
     */
    get Exists(): boolean;
    /**
     * @returns The entitys current handle.
     */
    get Handle(): number;
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
     * You should (almost) always try to load the collisions before setting the entitys position if going a long distance.
     * @param pos sets the position for the current ped
     */
    set Position(pos: Vector3);
}
