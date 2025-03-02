import { ShapeTestStatus } from "./enums/RaycastEnums";
import { Game } from "./Game";
import type { MaterialHash } from "./hashes";
import type { Ped, Prop, Vehicle } from "./models";
import { Delay, Vector3 } from "./utils";

/**
 * Class that represents the result of a raycast.
 */
abstract class RaycastResult {
  /**
   * Return the entity that was hit.
   */
  public get HitEntity(): Ped | Vehicle | Prop | null {
    return this.entityHandleArg;
  }

  /**
   * Get the position of the entity that was hit.
   */
  public get HitPosition(): Vector3 {
    return this.hitPositionArg;
  }

  /**
   * Return the vector perpendicular to the tangent plane.
   */
  public get SurfaceNormal(): Vector3 {
    return this.surfaceNormalArg;
  }

  /**
   * Whether we hit anything.
   */
  public get DidHit(): boolean {
    return this.hitSomethingArg;
  }

  /**
   * Whether the entity hit exists.
   */
  public get DidHitEntity(): boolean {
    return this.entityHandleArg !== null && this.entityHandleArg.Handle !== 0;
  }

  /**
   * Material type that was hit.
   */
  public get Material(): MaterialHash {
    return this.materialArg;
  }

  /**
   * Raycast result's handle.
   */
  public get Result(): number {
    return this.result;
  }

  /**
   * @returns if the shape test handle was already discarded
   */
  public get WasDiscarded(): boolean {
    return this.result === ShapeTestStatus.Discarded;
  }

  /**
   * NOTE: These will not be updated unless polled by `resolve` or the shape
   * test is synchronous
   * @returns if the raycast has been marked as ready by the engine
   */
  public get HasResolved(): boolean {
    return this.result === ShapeTestStatus.Ready;
  }

  protected applyShapeTestResults() {
    const [result, hit, endCoords, surfaceNormal, materialHash, entityHit] = GetShapeTestResultIncludingMaterial(
      this.handle,
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

  private handle: number;
  private hitPositionArg: Vector3;
  private hitSomethingArg: boolean;
  private entityHandleArg: Ped | Vehicle | Prop | null;
  private surfaceNormalArg: Vector3;
  private materialArg: MaterialHash;
  private result: ShapeTestStatus;

  /**
   * Create a RaycastResult object that gets the results from a StartShapeTestRay()
   *
   * @param handle The handle returned from StartShapeTestRay()
   */
  constructor(handle: number) {
    this.handle = handle;
    this.hitPositionArg = new Vector3(0, 0, 0);
    this.hitSomethingArg = false;
    this.entityHandleArg = null;
    this.surfaceNormalArg = new Vector3(0, 0, 0);
    this.materialArg = 0;
    this.result = ShapeTestStatus.NotReady;
  }
}

export class SynchronousRaycastResult extends RaycastResult {
  constructor(handle: number) {
    super(handle);
    // if we're using a synchronous call then we want to instantly update our
    // data, if its invalid then the caller can deal with it.
    this.applyShapeTestResults();
  }
}

export class AsynchronousRaycastResult extends RaycastResult {
  /**
   * waits until the shape test handle is valid and then sets the expected
   * values on the RaycastResult
   */
  public async resolve(timeoutInMs = 1000) {
    const timeout = GetGameTimer() + timeoutInMs;
    // this has to be polled every frame or the engien will mark the field shape
    // test handle as discarded
    while (!this.HasResolved && !this.WasDiscarded) {
      this.applyShapeTestResults();
      if (timeout < GetGameTimer()) break;
      await Delay(0);
    }
  }
}
