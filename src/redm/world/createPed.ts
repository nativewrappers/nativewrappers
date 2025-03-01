import type { Vector3 } from "@common/utils";
import { Ped } from "redm/entities";
import type { Model } from "redm/Model";

/**
 * Creates a ped at the specified {@param spawnPos}, you don't need to request the model before this.
 */
export async function createPed(
  model: Model,
  spawnPos: Vector3,
  heading: number,
  isNetwork = false,
  bScriptHostPed = true,
  p7 = true,
  p8 = true,
): Promise<Ped | null> {
  if (!model.IsPed || !model.request(1000)) {
    return null;
  }

  const pedHandle = CreatePed(
    model.Hash,
    spawnPos.x,
    spawnPos.y,
    spawnPos.z,
    heading,
    isNetwork,
    bScriptHostPed,
    p7,
    p8,
  );
  if (pedHandle !== 0) {
    model.markAsNoLongerNeeded();
    return new Ped(pedHandle);
  }

  // Ped handle was 0, we have no ped :(
  return null;
}
