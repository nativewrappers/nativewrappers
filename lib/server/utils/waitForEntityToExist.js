var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { Delay } from "../common/utils/Delay";
async function waitForEntityToExist(netId, timeoutMs = 1e3) {
  const startTime = GetGameTimer();
  const timeout = startTime + timeoutMs;
  while (GetGameTimer() < timeout) {
    const entity = NetworkGetEntityFromNetworkId(netId);
    if (entity !== 0) {
      return entity;
    }
    await Delay(0);
  }
  return null;
}
__name(waitForEntityToExist, "waitForEntityToExist");
export {
  waitForEntityToExist
};
