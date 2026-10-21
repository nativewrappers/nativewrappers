import type { BaseEntity } from "./BaseEntity";
import { BaseEntityBoneCollection } from "./BaseEntityBoneCollection";
import { EntityBone } from "./EntityBone";
export declare class EntityBoneCollection extends BaseEntityBoneCollection {
    constructor(owner: BaseEntity);
    getBone(boneIndex?: number, boneName?: string): EntityBone;
    get Core(): EntityBone;
}
