var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { Vehicle } from "../entities/Vehicle";
async function createVehicle(model, spawnPos, heading, isNetwork = false, bScriptHostVeh = true, bDontAutoCreateDraftAnimals = true, p8 = true) {
  if (!model.IsPed || !model.request(1e3)) {
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
    p8
  );
  if (pedHandle !== 0) {
    model.markAsNoLongerNeeded();
    return new Vehicle(pedHandle);
  }
  return null;
}
__name(createVehicle, "createVehicle");
export {
  createVehicle
};
