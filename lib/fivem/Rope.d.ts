import { Vector3 } from "./common/utils/Vector";
import type { BaseEntity } from "./models/BaseEntity";
/**
 * Class to manage invisible ropes between entities.
 */
export declare class Rope {
    /**
     * Id of rope entity.
     */
    private readonly handle;
    /**
     * Create a rope object based on an existing rope in the world.
     *
     * @param handle entity Id of rope.
     */
    constructor(handle: number);
    get Handle(): number;
    /**
     * Get the length of the rope.
     *
     * @returns The rope length.
     */
    get Length(): number;
    /**
     * Sets the length of the rope.
     *
     * @param length Desired new length of rope.
     */
    set Length(length: number);
    /**
     * Get the number of vertices on the rope.
     *
     * @returns Returns the number of vertices.
     */
    get VertexCount(): number;
    /**
     * Resets the length of the rope to it's length upon object creation or a length of 1.
     *
     * @param reset Whether to reset the length to it's original length or 1.
     */
    resetLength(reset: boolean): void;
    /**
     * Activates world physics on the rope object.
     */
    activatePhysics(): void;
    /**
     * Attach the rope to an entity.
     *
     * @param entity Entity to attach the rope to.
     * @param position Location where the rope is to be attached.
     */
    attachEntity(entity: BaseEntity, position: Vector3): void;
    /**
     * Attach the rope between two entities at given locations on the entities.
     *
     * @param entityOne The first entity to attach to.
     * @param positionOne Where on the first entity to attach the rope to.
     * @param entityTwo The second entity to attach to.
     * @param positionTwo Where on the second entity to attach the rope to.
     * @param length The desired length of the rope between the two entities.
     */
    attachEntities(entityOne: BaseEntity, positionOne: Vector3, entityTwo: BaseEntity, positionTwo: Vector3, length: number): void;
    /**
     * Detach the rope from an entity.
     *
     * @param entity Entity to detach the rope from.
     */
    detachEntity(entity: BaseEntity): void;
    /**
     * Pin a vertex of the rope to a certain location.
     *
     * @param vertex Vertex to pin.
     * @param position Location to pin the vertex to.
     */
    pinVertex(vertex: number, position: Vector3): void;
    /**
     * Unpin a specified vertex from it's current pinned location (if any).
     *
     * @param vertex Vertex to unpin.
     */
    unpinVertex(vertex: number): void;
    /**
     * Return the world location of a specified vertex on the rope.
     *
     * @param vertex Vertex to get location from.
     * @returns The vector location of the vertex.
     */
    getVertexCoord(vertex: number): Vector3;
    /**
     * Delete the rope from the world. This does not delete the rope object.
     */
    delete(): void;
    /**
     * Check if the rope still exists in the world based on it's handle.
     *
     * @returns Whether the rope exists or not.
     */
    exists(): boolean;
}
