import { EntityBone } from "./";
import type { BaseEntity } from "./BaseEntity";
export declare class EntityBoneCollection {
    protected readonly owner: BaseEntity;
    constructor(owner: BaseEntity);
    hasBone(name: string): boolean;
    getBone(boneIndex?: number, boneName?: string): EntityBone;
    get Core(): EntityBone;
}
