import type { BaseEntity } from "./BaseEntity";
import { BaseEntityBone } from "./BaseEntityBone";

export class EntityBone extends BaseEntityBone {
  constructor(owner: BaseEntity, boneIndex?: number, boneName?: string) {
    super(owner, boneIndex, boneName);
  }
}
