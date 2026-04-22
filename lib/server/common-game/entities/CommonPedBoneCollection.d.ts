import { CommonBaseEntityBoneCollection } from "./CommonBaseEntityBoneCollection";
import { CommonPedBone } from "./CommonPedBone";
import type { IHandle } from "./IHandle";
export declare class CommonPedBoneCollection extends CommonBaseEntityBoneCollection {
    constructor(owner: IHandle);
    get Core(): CommonPedBone;
    get LastDamaged(): CommonPedBone;
    clearLastDamaged(): void;
    getBoneFromId(boneId: number): CommonPedBone;
    getBoneFromName(boneName: string): CommonPedBone;
    getBone(boneIndex: number): CommonPedBone;
    getBone(boneName: string): CommonPedBone;
}
