import type { Vector3 } from "@common/utils/Vector";
import { Prop } from "redm/entities/Prop";
import type { Model } from "redm/Model";

/**
 * Creates a ped at the specified {@param spawnPos}, you don't need to request the model before this.
 */
export async function createProp(
  model: Model,
  spawnPos: Vector3,
  heading: number,
  isNetwork = false,
  bScriptHostProp = true,
  dynamic = true,
  p7 = true,
  p8 = true,
): Promise<Prop | null> {
  if (!model.IsProp || !model.request(1000)) {
    return null;
  }

  const propHandle = CreateObject(
    model.Hash,
    spawnPos.x,
    spawnPos.y,
    spawnPos.z,
    isNetwork,
    bScriptHostProp,
    dynamic,
    p7,
    p8,
  );
  if (propHandle !== 0) {
    model.markAsNoLongerNeeded();
    return new Prop(propHandle);
  }

  // prop handle was 0, we have no prop :(
  return null;
}
