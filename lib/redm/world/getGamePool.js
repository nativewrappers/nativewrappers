var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { Ped } from "../entities/Ped";
import { Pickup } from "../entities/Pickup";
import { Prop } from "../entities/Prop";
import { Vehicle } from "../entities/Vehicle";
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
