import type { BaseEntity } from "./BaseEntity";
import type { BaseEntityBone } from "./BaseEntityBone";
export declare abstract class BaseEntityBoneCollection {
    protected readonly owner: BaseEntity;
    constructor(owner: BaseEntity);
    hasBone(name: string): boolean;
    abstract getBone(boneIndex?: number, boneName?: string): BaseEntityBone;
    abstract get Core(): BaseEntityBone;
}
