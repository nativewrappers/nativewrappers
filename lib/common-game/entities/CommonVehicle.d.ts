import { ClassTypes } from "../common/utils/ClassTypes";
import { CommonBaseEntity } from "./CommonBaseEntity";
import { CommonEntityBoneCollection } from "./CommonEntityBoneCollection";
export declare class CommonVehicle extends CommonBaseEntity {
    static fromHandle(handle: number): CommonVehicle | null;
    static fromNetworkId(networkId: number): CommonVehicle | null;
    protected type: ClassTypes;
    protected bones?: CommonEntityBoneCollection;
    constructor(handle: number);
    get Bones(): CommonEntityBoneCollection;
}
