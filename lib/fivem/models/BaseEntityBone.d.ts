import { Vector3 } from "../common/utils/Vector";
import type { BaseEntity } from "./BaseEntity";
export declare abstract class BaseEntityBone {
    get Index(): number;
    get Owner(): BaseEntity;
    get Position(): Vector3;
    get Rotation(): Vector3;
    get IsValid(): boolean;
    protected readonly owner: BaseEntity;
    protected readonly index: number;
    constructor(owner: BaseEntity, boneIndex?: number, boneName?: string);
}
