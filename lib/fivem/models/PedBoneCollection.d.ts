import { EntityBoneCollection, type Ped, PedBone } from "./";
export declare class PedBoneCollection extends EntityBoneCollection {
    constructor(owner: Ped);
    get Core(): PedBone;
    get LastDamaged(): PedBone;
    clearLastDamaged(): void;
    getBone(boneIndex?: number, boneName?: string): PedBone;
}
