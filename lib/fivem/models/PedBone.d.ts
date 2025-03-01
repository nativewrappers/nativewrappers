import type { Bone } from "../enums";
import { EntityBone, Ped } from "./";
export declare class PedBone extends EntityBone {
    constructor(owner: Ped, boneId: Bone);
    get IsValid(): boolean;
}
