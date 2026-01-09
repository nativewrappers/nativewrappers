var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { Vehicle } from "../entities/Vehicle";
import { _N } from "../utils/Native";
async function createDraftVehicle(model, spawnPos, heading, isNetwork = false, bScriptHostVeh = true, bDontAutoCreateDraftAnimals = true, draftAnimalPopGroup = 0, p9 = true) {
  if (!model.IsPed || !model.request(1e3)) {
    return null;
  }
  const draftVehHandle = _N(
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
    Citizen.resultAsInteger()
  );
  if (draftVehHandle !== 0) {
    model.markAsNoLongerNeeded();
    return new Vehicle(draftVehHandle);
  }
  return null;
}
__name(createDraftVehicle, "createDraftVehicle");
export {
  createDraftVehicle
};
