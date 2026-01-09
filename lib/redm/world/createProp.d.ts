import type { Vector3 } from "../common/utils/Vector";
import { Prop } from "../entities/Prop";
import type { Model } from "../Model";
/**
 * Creates a ped at the specified {@param spawnPos}, you don't need to request the model before this.
 */
export declare function createProp(model: Model, spawnPos: Vector3, heading: number, isNetwork?: boolean, bScriptHostProp?: boolean, dynamic?: boolean, p7?: boolean, p8?: boolean): Promise<Prop | null>;
