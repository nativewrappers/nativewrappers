var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { Vector3 } from "./common/utils/Vector";
import { ShapeTestStatus } from "./enums/RaycastEnums";
import { Game } from "./Game";
import { Delay } from "./common/utils/Delay";
class RaycastResult {
  static {
    __name(this, "RaycastResult");
  }
  /**
   * Return the entity that was hit.
   */
  get HitEntity() {
    return this.entityHandleArg;
  }
  /**
   * Get the position of the entity that was hit.
   */
  get HitPosition() {
    return this.hitPositionArg;
  }
  /**
   * Return the vector perpendicular to the tangent plane.
   */
  get SurfaceNormal() {
    return this.surfaceNormalArg;
  }
  /**
   * Whether we hit anything.
   */
  get DidHit() {
    return this.hitSomethingArg;
  }
  /**
   * Whether the entity hit exists.
   */
  get DidHitEntity() {
    return this.entityHandleArg !== null && this.entityHandleArg.Handle !== 0;
  }
  /**
   * Material type that was hit.
   */
  get Material() {
    return this.materialArg;
  }
  /**
   * Raycast result's handle.
   */
  get Result() {
    return this.result;
  }
  /**
   * @returns if the shape test handle was already discarded
   */
  get WasDiscarded() {
    return this.result === ShapeTestStatus.Discarded;
  }
  /**
   * NOTE: These will not be updated unless polled by `resolve` or the shape
   * test is synchronous
   * @returns if the raycast has been marked as ready by the engine
   */
  get HasResolved() {
    return this.result === ShapeTestStatus.Ready;
  }
  applyShapeTestResults() {
    const [result, hit, endCoords, surfaceNormal, materialHash, entityHit] = GetShapeTestResultIncludingMaterial(
      this.handle
    );
    this.result = result;
    if (!this.HasResolved || this.WasDiscarded) return;
    this.hitSomethingArg = hit;
    this.hitPositionArg = Vector3.fromArray(endCoords);
    this.surfaceNormalArg = Vector3.fromArray(surfaceNormal);
    this.materialArg = materialHash;
    if (entityHit !== 0) {
      this.entityHandleArg = Game.entityFromHandle(entityHit);
    }
  }
  handle;
  hitPositionArg;
  hitSomethingArg;
  entityHandleArg;
  surfaceNormalArg;
  materialArg;
  result;
  /**
   * Create a RaycastResult object that gets the results from a StartShapeTestRay()
   *
   * @param handle The handle returned from StartShapeTestRay()
   */
  constructor(handle) {
    this.handle = handle;
    this.hitPositionArg = new Vector3(0, 0, 0);
    this.hitSomethingArg = false;
    this.entityHandleArg = null;
    this.surfaceNormalArg = new Vector3(0, 0, 0);
    this.materialArg = 0;
    this.result = ShapeTestStatus.NotReady;
  }
}
class SynchronousRaycastResult extends RaycastResult {
  static {
    __name(this, "SynchronousRaycastResult");
  }
  constructor(handle) {
    super(handle);
    this.applyShapeTestResults();
  }
}
class AsynchronousRaycastResult extends RaycastResult {
  static {
    __name(this, "AsynchronousRaycastResult");
  }
  /**
   * waits until the shape test handle is valid and then sets the expected
   * values on the RaycastResult
   */
  async resolve(timeoutInMs = 1e3) {
    const timeout = GetGameTimer() + timeoutInMs;
    while (!this.HasResolved && !this.WasDiscarded) {
      this.applyShapeTestResults();
      if (timeout < GetGameTimer()) break;
      await Delay(0);
    }
  }
}
export {
  AsynchronousRaycastResult,
  SynchronousRaycastResult
};
