import type { Vector3 } from "@common/utils/Vector";
import { Vehicle } from "redm/entities/Vehicle";
import type { Model } from "redm/Model";
import { _N } from "redm/utils/Native";

/**
 * Creates a vehicle at the specified {@param spawnPos}, you don't need to request the model before this.
 */
export async function createDraftVehicle(
  model: Model,
  spawnPos: Vector3,
  heading: number,
  isNetwork = false,
  bScriptHostVeh = true,
  bDontAutoCreateDraftAnimals = true,
  draftAnimalPopGroup = 0,
  p9 = true,
): Promise<Vehicle | null> {
  if (!model.IsPed || !model.request(1000)) {
    return null;
  }

  const draftVehHandle = _N<number>(
    "0x214651FB1DFEBA89",
    model.Hash,
    spawnPos.x,
    spawnPos.y,
    spawnPos.z,
    heading,
    isNetwork,
    bScriptHostVeh,
    bDontAutoCreateDraftAnimals,
    draftAnimalPopGroup,
    p9,
    Citizen.resultAsInteger(),
  );
  if (draftVehHandle !== 0) {
    model.markAsNoLongerNeeded();
    return new Vehicle(draftVehHandle);
  }

  // Veh handle was 0, we have no veh :(
  return null;
}
