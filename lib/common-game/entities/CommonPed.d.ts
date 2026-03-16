import { CommonBaseEntity } from "./CommonBaseEntity";
import { CommonPlayer } from "./CommonPlayer";
import { ClassTypes } from "../common/utils/ClassTypes";
import { CommonPedBoneCollection } from "./CommonPedBoneCollection";
import { CommonTasks } from "../CommonTasks";
export declare class CommonPed extends CommonBaseEntity {
    private tasks;
    protected type: ClassTypes;
    protected bones?: CommonPedBoneCollection;
    static fromHandle(handle: number): CommonPed | null;
    static fromNetworkId(networkId: number): CommonPed | null;
    constructor(handle: number);
    get Player(): CommonPlayer | null;
    get Task(): CommonTasks;
    get Bones(): CommonPedBoneCollection;
}
