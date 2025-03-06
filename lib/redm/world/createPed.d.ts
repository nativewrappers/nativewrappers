import type { Vector3 } from "../common/utils";
import { Ped } from "redm/entities";
import type { Model } from "redm/Model";
/**
 * Creates a ped at the specified {@param spawnPos}, you don't need to request the model before this.
 */
export declare function createPed(model: Model, spawnPos: Vector3, heading: number, isNetwork?: boolean, bScriptHostPed?: boolean, p7?: boolean, p8?: boolean): Promise<Ped | null>;
