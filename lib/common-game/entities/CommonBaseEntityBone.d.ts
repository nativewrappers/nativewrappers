import { Vector3 } from "../common/utils/Vector";
import type { IHandle } from "./IHandle";
export declare abstract class CommonBaseEntityBone {
    protected readonly owner: IHandle;
    protected readonly index: number;
    constructor(owner: IHandle, boneIndex?: number, boneName?: string);
    get Index(): number;
    get Owner(): IHandle;
    get Position(): Vector3;
    get IsValid(): boolean;
}
