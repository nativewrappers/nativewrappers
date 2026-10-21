import { Ped } from "../entities/Ped";
import { Pickup } from "../entities/Pickup";
import { Prop } from "../entities/Prop";
import { Vehicle } from "../entities/Vehicle";
declare const constructorMap: {
    CObject: typeof Prop;
    CPed: typeof Ped;
    CVehicle: typeof Vehicle;
    CPickup: typeof Pickup;
    CNetObject: typeof Prop;
};
type PoolTypeMap = {
    [K in keyof typeof constructorMap]: InstanceType<(typeof constructorMap)[K]>;
};
export declare function getGamePool<T extends keyof typeof constructorMap>(type: T, networkOnly?: boolean): PoolTypeMap[T][];
export {};
