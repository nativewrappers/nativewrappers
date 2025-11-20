var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { getStringFromUInt8Array } from "../common/utils/getStringFromUInt8Array";
import { getUInt32FromUint8Array } from "../common/utils/getUInt32FromUint8Array";
const DlcWeaponData = /* @__PURE__ */ new Map();
function initializeOnce() {
  let isInitialized = false;
  return () => {
    if (isInitialized || GetGameName() !== "fivem") {
      return;
    }
    const intLength = 4;
    const strLength = 64;
    const weaponCount = GetNumDlcWeapons();
    for (let i = 0; i < weaponCount; i++) {
      const buffer = new Uint8Array(14 * intLength + 4 * strLength);
      Citizen.invokeNative("0x79923CD21BECE14E", i, buffer, Citizen.returnResultAnyway());
      const dlcWeaponData = {
        validCheck: getUInt32FromUint8Array(buffer, 0 * intLength, 1 * intLength),
        weaponHash: getUInt32FromUint8Array(buffer, 2 * intLength, 3 * intLength),
        unk: getUInt32FromUint8Array(buffer, 4 * intLength, 5 * intLength),
        weaponCost: getUInt32FromUint8Array(buffer, 6 * intLength, 7 * intLength),
        ammoCost: getUInt32FromUint8Array(buffer, 8 * intLength, 9 * intLength),
        ammoType: getUInt32FromUint8Array(buffer, 10 * intLength, 11 * intLength),
        defaultClipSize: getUInt32FromUint8Array(buffer, 12 * intLength, 13 * intLength),
        name: getStringFromUInt8Array(buffer, 14 * intLength, 14 * intLength + strLength),
        desc: getStringFromUInt8Array(buffer, 14 * intLength + strLength, 14 * intLength + 2 * strLength),
        simpleDesc: getStringFromUInt8Array(buffer, 14 * intLength + 2 * strLength, 14 * intLength + 3 * strLength),
        upperCaseName: getStringFromUInt8Array(buffer, 14 * intLength + 3 * strLength, 14 * intLength + 4 * strLength)
      };
      DlcWeaponData.set(dlcWeaponData.weaponHash, dlcWeaponData);
    }
    isInitialized = true;
  };
}
__name(initializeOnce, "initializeOnce");
initializeOnce()();
export {
  DlcWeaponData
};
