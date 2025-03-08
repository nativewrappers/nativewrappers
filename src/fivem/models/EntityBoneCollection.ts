import type { BaseEntity } from "./BaseEntity";
import { EntityBone } from "./EntityBone";

export class EntityBoneCollection {
  protected readonly owner: BaseEntity;

  constructor(owner: BaseEntity) {
    this.owner = owner;
  }

  public hasBone(name: string): boolean {
    return GetEntityBoneIndexByName(this.owner.Handle, name) !== -1;
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
