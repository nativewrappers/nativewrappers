import { Pickup } from "../Pickup";
import { Ped, Prop, Vehicle } from "../models";
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
