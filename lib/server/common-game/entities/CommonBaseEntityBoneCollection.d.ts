import type { CommonBaseEntityBone } from "./CommonBaseEntityBone";
import type { IHandle } from "./IHandle";
export declare abstract class CommonBaseEntityBoneCollection {
    protected readonly owner: IHandle;
    constructor(owner: IHandle);
    hasBone(name: string): boolean;
    abstract getBone(boneIndex?: number, boneName?: string): CommonBaseEntityBone;
    abstract getBoneFromName(boneName: string): CommonBaseEntityBone;
    abstract get Core(): CommonBaseEntityBone;
}
