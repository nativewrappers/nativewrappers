import { Vector3 } from "../../common/utils/Vector";
import { IHandle } from "./IHandle";
export declare abstract class CommonBaseEntityBone extends IHandle {
    protected readonly owner: IHandle;
    constructor(owner: IHandle, boneInfo: number | string);
    exists(): boolean;
    get Index(): number;
    get Owner(): IHandle;
    get Position(): Vector3;
    get IsValid(): boolean;
}
