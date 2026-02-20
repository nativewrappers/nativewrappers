var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { Vector3 } from "./common/utils/Vector";
class Rope {
  static {
    __name(this, "Rope");
  }
  /**
   * Id of rope entity.
   */
  handle;
  /**
   * Create a rope object based on an existing rope in the world.
   *
   * @param handle entity Id of rope.
   */
  constructor(handle) {
    this.handle = handle;
  }
  get Handle() {
    return this.handle;
  }
  /**
   * Get the length of the rope.
   *
   * @returns The rope length.
   */
  get Length() {
    return GetRopeLength(this.handle);
  }
  /**
   * Sets the length of the rope.
   *
   * @param length Desired new length of rope.
   */
  set Length(length) {
    RopeForceLength(this.handle, length);
  }
  /**
   * Get the number of vertices on the rope.
   *
   * @returns Returns the number of vertices.
   */
  get VertexCount() {
    return GetRopeVertexCount(this.handle);
  }
  /**
   * Resets the length of the rope to it's length upon object creation or a length of 1.
   *
   * @param reset Whether to reset the length to it's original length or 1.
   */
  resetLength(reset) {
    RopeResetLength(this.handle, reset ? 1 : this.Length);
  }
  /**
   * Activates world physics on the rope object.
   */
  activatePhysics() {
    ActivatePhysics(this.handle);
  }
  /**
   * Attach the rope to an entity.
   *
   * @param entity Entity to attach the rope to.
   * @param position Location where the rope is to be attached.
   */
  attachEntity(entity, position) {
    AttachRopeToEntity(this.handle, entity.Handle, position.x, position.y, position.z, false);
  }
  /**
   * Attach the rope between two entities at given locations on the entities.
   *
   * @param entityOne The first entity to attach to.
   * @param positionOne Where on the first entity to attach the rope to.
   * @param entityTwo The second entity to attach to.
   * @param positionTwo Where on the second entity to attach the rope to.
   * @param length The desired length of the rope between the two entities.
   */
  attachEntities(entityOne, positionOne, entityTwo, positionTwo, length) {
    AttachEntitiesToRope(
      this.handle,
      entityOne.Handle,
      entityTwo.Handle,
      positionOne.x,
      positionOne.y,
      positionOne.z,
      positionTwo.x,
      positionTwo.y,
      positionTwo.z,
      length,
      false,
      false,
      "",
      ""
    );
  }
  /**
   * Detach the rope from an entity.
   *
   * @param entity Entity to detach the rope from.
   */
  detachEntity(entity) {
    DetachRopeFromEntity(this.handle, entity.Handle);
  }
  /**
   * Pin a vertex of the rope to a certain location.
   *
   * @param vertex Vertex to pin.
   * @param position Location to pin the vertex to.
   */
  pinVertex(vertex, position) {
    PinRopeVertex(this.handle, vertex, position.x, position.y, position.z);
  }
  /**
   * Unpin a specified vertex from it's current pinned location (if any).
   *
   * @param vertex Vertex to unpin.
   */
  unpinVertex(vertex) {
    UnpinRopeVertex(this.handle, vertex);
  }
  /**
   * Return the world location of a specified vertex on the rope.
   *
   * @param vertex Vertex to get location from.
   * @returns The vector location of the vertex.
   */
  getVertexCoord(vertex) {
    return Vector3.fromArray(GetRopeVertexCoord(this.handle, vertex));
  }
  /**
   * Delete the rope from the world. This does not delete the rope object.
   */
  delete() {
    DeleteRope(this.handle);
  }
  /**
   * Check if the rope still exists in the world based on it's handle.
   *
   * @returns Whether the rope exists or not.
   */
  exists() {
    const [exists] = DoesRopeExist(this.handle);
    return exists;
  }
}
export {
  Rope
};
