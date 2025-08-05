import type { CommonBaseEntity } from "./CommonBaseEntity";
import type { CommonBaseEntityBone } from "./CommonBaseEntityBone";

export abstract class CommonBaseEntityBoneCollection {
  protected readonly owner: CommonBaseEntity;

  constructor(owner: CommonBaseEntity) {
    this.owner = owner;
  }

  public hasBone(name: string): boolean {
    return GetEntityBoneIndexByName(this.owner.Handle, name) !== -1;
  }

  public abstract getBone(boneIndex?: number, boneName?: string): CommonBaseEntityBone;

  public abstract get Core(): CommonBaseEntityBone;
}
