import type { CommonBaseEntity } from "./CommonBaseEntity";
import type { CommonBaseEntityBone } from "./CommonBaseEntityBone";
import type { IHandle } from "./IHandle";

export abstract class CommonBaseEntityBoneCollection {
  protected readonly owner: IHandle;

  constructor(owner: IHandle) {
    this.owner = owner;
  }

  public hasBone(name: string): boolean {
    return GetEntityBoneIndexByName(this.owner.Handle, name) !== -1;
  }

  public abstract getBone(boneIndex?: number, boneName?: string): CommonBaseEntityBone;
  public abstract getBoneFromName(boneName: string): CommonBaseEntityBone;

  public abstract get Core(): CommonBaseEntityBone;
}
