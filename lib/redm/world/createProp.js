var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { Prop } from "../entities/Prop";
async function createProp(model, spawnPos, heading, isNetwork = false, bScriptHostProp = true, dynamic = true, p7 = true, p8 = true) {
  if (!model.IsProp || !model.request(1e3)) {
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
    p8
  );
  if (propHandle !== 0) {
    model.markAsNoLongerNeeded();
    return new Prop(propHandle);
  }
  return null;
}
__name(createProp, "createProp");
export {
  createProp
};
