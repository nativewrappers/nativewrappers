var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { Pickup } from "../Pickup";
import { BaseEntity, Ped, Prop, Vehicle } from "../models";
const constructorMap = {
  CObject: Prop,
  CPed: Ped,
  CVehicle: Vehicle,
  CPickup: Pickup,
  CNetObject: Prop
};
function getGamePool(type, networkOnly = false) {
  const pool = GetGamePool(type);
  const entityConstructor = constructorMap[type];
  let poolMap = pool.map((v) => {
    const p = new entityConstructor(v);
    if (networkOnly && !p.IsNetworked) {
      return null;
    }
    return p;
  });
  if (networkOnly) {
    poolMap = poolMap.filter((v) => v !== null);
  }
  return poolMap;
}
__name(getGamePool, "getGamePool");
export {
  getGamePool
};
