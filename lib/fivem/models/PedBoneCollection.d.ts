import { BaseEntityBoneCollection } from "./BaseEntityBoneCollection";
import type { Ped } from "./Ped";
import { PedBone } from "./PedBone";
export declare class PedBoneCollection extends BaseEntityBoneCollection {
    constructor(owner: Ped);
    get Core(): PedBone;
    get LastDamaged(): PedBone;
    clearLastDamaged(): void;
    getBone(bone: number): PedBone;
    getBone(bone: string): PedBone;
}
