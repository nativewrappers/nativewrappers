import { Vector3 } from "./common/utils/Vector";
import type { MaterialHash } from "./hashes/MaterialHash";
import type { Ped } from "./models/Ped";
import type { Prop } from "./models/Prop";
import type { Vehicle } from "./models/Vehicle";
/**
 * Class that represents the result of a raycast.
 */
declare abstract class RaycastResult {
    /**
     * Return the entity that was hit.
     */
    get HitEntity(): Ped | Vehicle | Prop | null;
    /**
     * Get the position of the entity that was hit.
     */
    get HitPosition(): Vector3;
    /**
     * Return the vector perpendicular to the tangent plane.
     */
    get SurfaceNormal(): Vector3;
    /**
     * Whether we hit anything.
     */
    get DidHit(): boolean;
    /**
     * Whether the entity hit exists.
     */
    get DidHitEntity(): boolean;
    /**
     * Material type that was hit.
     */
    get Material(): MaterialHash;
    /**
     * Raycast result's handle.
     */
    get Result(): number;
    /**
     * @returns if the shape test handle was already discarded
     */
    get WasDiscarded(): boolean;
    /**
     * NOTE: These will not be updated unless polled by `resolve` or the shape
     * test is synchronous
     * @returns if the raycast has been marked as ready by the engine
     */
    get HasResolved(): boolean;
    protected applyShapeTestResults(): void;
    private handle;
    private hitPositionArg;
    private hitSomethingArg;
    private entityHandleArg;
    private surfaceNormalArg;
    private materialArg;
    private result;
    /**
     * Create a RaycastResult object that gets the results from a StartShapeTestRay()
     *
     * @param handle The handle returned from StartShapeTestRay()
     */
    constructor(handle: number);
}
export declare class SynchronousRaycastResult extends RaycastResult {
    constructor(handle: number);
}
export declare class AsynchronousRaycastResult extends RaycastResult {
    /**
     * waits until the shape test handle is valid and then sets the expected
     * values on the RaycastResult
     */
    resolve(timeoutInMs?: number): Promise<void>;
}
export {};
