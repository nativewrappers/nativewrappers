import type { BaseEntity } from "./BaseEntity";
import { BaseEntityBone } from "./BaseEntityBone";
export declare class EntityBone extends BaseEntityBone {
    constructor(owner: BaseEntity, boneIndex?: number, boneName?: string);
}
