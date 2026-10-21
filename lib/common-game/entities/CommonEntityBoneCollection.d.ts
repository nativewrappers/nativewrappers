import type { CommonBaseEntityBone } from "./CommonBaseEntityBone";
import { CommonBaseEntityBoneCollection } from "./CommonBaseEntityBoneCollection";
import { CommonEntityBone } from "./CommonEntityBone";
import type { IHandle } from "./IHandle";
export declare class CommonEntityBoneCollection extends CommonBaseEntityBoneCollection {
    constructor(owner: IHandle);
    getBoneFromName(boneName: string): CommonBaseEntityBone;
    getBoneFromIndex(boneIndex: number): CommonBaseEntityBone;
    getBone(boneIndex: number): CommonEntityBone;
    getBone(boneName: string): CommonEntityBone;
    get Core(): CommonEntityBone;
}
