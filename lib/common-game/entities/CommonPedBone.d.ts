import { CommonBaseEntityBone } from "./CommonBaseEntityBone";
import type { IHandle } from "./IHandle";
export declare class CommonPedBone extends CommonBaseEntityBone {
    constructor(owner: IHandle, boneIndex: number);
    get IsValid(): boolean;
}
