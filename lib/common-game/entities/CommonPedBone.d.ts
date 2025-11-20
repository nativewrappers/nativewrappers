import { CommonBaseEntityBone } from "./CommonBaseEntityBone";
import type { IHandle } from "./IHandle";
export declare class CommonPedBone extends CommonBaseEntityBone {
    constructor(owner: IHandle, boneId: number);
    get IsValid(): boolean;
}
