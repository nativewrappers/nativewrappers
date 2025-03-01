import type { Vector3 } from "@common/utils";
import { Vehicle } from "redm/entities";
import type { Model } from "redm/Model";

/**
 * Creates a vehicle at the specified {@param spawnPos}, you don't need to request the model before this.
 */
export async function createVehicle(
  model: Model,
  spawnPos: Vector3,
  heading: number,
  isNetwork = false,
  bScriptHostVeh = true,
  bDontAutoCreateDraftAnimals = true,
  p8 = true,
): Promise<Vehicle | null> {
  if (!model.IsPed || !model.request(1000)) {
    return null;
  }

  const pedHandle = CreateVehicle(
    model.Hash,
    spawnPos.x,
    spawnPos.y,
    spawnPos.z,
    heading,
    isNetwork,
    bScriptHostVeh,
    bDontAutoCreateDraftAnimals,
    p8,
  );
  if (pedHandle !== 0) {
    model.markAsNoLongerNeeded();
    return new Vehicle(pedHandle);
  }

  // Ped handle was 0, we have no ped :(
  return null;
}
