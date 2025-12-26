var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { Ped } from "../entities/Ped";
async function createPed(model, spawnPos, heading, isNetwork = false, bScriptHostPed = true, p7 = true, p8 = true) {
  if (!model.IsPed || !model.request(1e3)) {
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
    p8
  );
  if (pedHandle !== 0) {
    model.markAsNoLongerNeeded();
    return new Ped(pedHandle);
  }
  return null;
}
__name(createPed, "createPed");
export {
  createPed
};
