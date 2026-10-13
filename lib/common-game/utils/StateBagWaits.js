var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { Delay } from "../common/utils/Delay";
async function WaitForEntityFromStateBagToExist(stateBag, timeoutInMs = 5e3) {
  const timeout = GetGameTimer() + timeoutInMs;
  let ent = GetEntityFromStateBagName(stateBag);
  while (ent === 0) {
    if (timeout < GetGameTimer()) break;
    ent = GetEntityFromStateBagName(stateBag);
    await Delay(150);
  }
  return ent !== 0 ? ent : void 0;
}
__name(WaitForEntityFromStateBagToExist, "WaitForEntityFromStateBagToExist");
async function WaitForPlayerFromStateBagToExist(stateBag, timeoutInMs = 5e3) {
  const timeout = GetGameTimer() + timeoutInMs;
  let ply = GetPlayerFromStateBagName(stateBag);
  while (ply === 0) {
    if (timeout < GetGameTimer()) break;
    ply = GetPlayerFromStateBagName(stateBag);
    await Delay(150);
  }
  return ply !== 0 ? ply : void 0;
}
__name(WaitForPlayerFromStateBagToExist, "WaitForPlayerFromStateBagToExist");
export {
  WaitForEntityFromStateBagToExist,
  WaitForPlayerFromStateBagToExist
};
