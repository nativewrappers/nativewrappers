import type { BaseEntity } from "./BaseEntity";
import { BaseEntityBoneCollection } from "./BaseEntityBoneCollection";
import { EntityBone } from "./EntityBone";

export class EntityBoneCollection extends BaseEntityBoneCollection {
  constructor(owner: BaseEntity) {
    super(owner);
  }

  public getBone(boneIndex?: number, boneName?: string): EntityBone {
    return new EntityBone(
      this.owner,
      boneIndex ? boneIndex : GetEntityBoneIndexByName(this.owner.Handle, boneName ?? ""),
    );
  }

  public get Core(): EntityBone {
    return new EntityBone(this.owner, -1);
  }
}
