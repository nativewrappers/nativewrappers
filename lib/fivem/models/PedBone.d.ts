import type { Bone } from "../enums/Bone";
import { BaseEntityBone } from "./BaseEntityBone";
import type { Ped } from "./Ped";
export declare class PedBone extends BaseEntityBone {
    constructor(owner: Ped, boneId: Bone);
    get IsValid(): boolean;
}
