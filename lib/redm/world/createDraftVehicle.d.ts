import type { Vector3 } from "../common/utils/Vector";
import { Vehicle } from "../entities/Vehicle";
import type { Model } from "../Model";
/**
 * Creates a vehicle at the specified {@param spawnPos}, you don't need to request the model before this.
 */
export declare function createDraftVehicle(model: Model, spawnPos: Vector3, heading: number, isNetwork?: boolean, bScriptHostVeh?: boolean, bDontAutoCreateDraftAnimals?: boolean, draftAnimalPopGroup?: number, p9?: boolean): Promise<Vehicle | null>;
