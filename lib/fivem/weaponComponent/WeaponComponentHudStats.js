var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { enumValues } from "../common/utils/enumValues";
import { getUInt32FromUint8Array } from "../common/utils/getUInt32FromUint8Array";
import { WeaponComponentHash } from "./WeaponComponentHash";
const WeaponComponentHudStats = /* @__PURE__ */ new Map();
function initializeOnce() {
  let isInitialized = false;
  return () => {
    if (isInitialized || GetGameName() !== "fivem") {
      return;
    }
    const intLength = 4;
    for (const hash of enumValues(WeaponComponentHash)) {
      const buffer = new Uint8Array(40);
      Citizen.invokeNative("0xB3CAF387AE12E9F8", hash, buffer, Citizen.returnResultAnyway());
      const weaponComponentHudStat = {
        hudDamage: getUInt32FromUint8Array(buffer, 0 * intLength, 1 * intLength),
        hudSpeed: getUInt32FromUint8Array(buffer, 2 * intLength, 3 * intLength),
        hudCapacity: getUInt32FromUint8Array(buffer, 4 * intLength, 5 * intLength),
        hudAccuracy: getUInt32FromUint8Array(buffer, 6 * intLength, 7 * intLength),
        hudRange: getUInt32FromUint8Array(buffer, 8 * intLength, 9 * intLength)
      };
      WeaponComponentHudStats.set(hash, weaponComponentHudStat);
    }
    isInitialized = true;
  };
}
__name(initializeOnce, "initializeOnce");
initializeOnce()();
export {
  WeaponComponentHudStats
};
