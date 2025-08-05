import type { BaseEntity } from "./BaseEntity";
import type { BaseEntityBone } from "./BaseEntityBone";

export abstract class BaseEntityBoneCollection {
  protected readonly owner: BaseEntity;

  constructor(owner: BaseEntity) {
    this.owner = owner;
  }

  public hasBone(name: string): boolean {
    return GetEntityBoneIndexByName(this.owner.Handle, name) !== -1;
  }

  public abstract getBone(boneIndex?: number, boneName?: string): BaseEntityBone;

  public abstract get Core(): BaseEntityBone;
}
