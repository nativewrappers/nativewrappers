import { Ped } from "redm/entities/Ped";
import { Pickup } from "redm/entities/Pickup";
import { Prop } from "redm/entities/Prop";
import { Vehicle } from "redm/entities/Vehicle";

const constructorMap = {
  CObject: Prop,
  CPed: Ped,
  CVehicle: Vehicle,
  CPickup: Pickup,
  CNetObject: Prop,
};

type PoolTypeMap = {
  [K in keyof typeof constructorMap]: InstanceType<(typeof constructorMap)[K]>;
};

export function getGamePool<T extends keyof typeof constructorMap>(type: T, networkOnly = false): PoolTypeMap[T][] {
  const pool = GetGamePool(type) as number[];
  const entityConstructor = constructorMap[type];
  let poolMap = pool.map((v) => {
    const p = new entityConstructor(v);
    if (networkOnly && !p.IsNetworked) {
      return null;
    }
    return p;
  });
  // only run the filter if we're network only, otherwise this is a waste
  if (networkOnly) {
    poolMap = poolMap.filter((v) => v !== null);
  }
  return poolMap as PoolTypeMap[T][];
}
