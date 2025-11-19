import { Pickup } from "fivem/Pickup";
import { BaseEntity, Ped, Prop, Vehicle } from "fivem/models";

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
