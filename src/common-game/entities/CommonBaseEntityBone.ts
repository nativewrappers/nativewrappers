import { Vector3 } from "@common/utils/Vector";
import type { CommonBaseEntity } from "./CommonBaseEntity";
import type { IHandle } from "./IHandle";

export abstract class CommonBaseEntityBone {
  protected readonly owner: IHandle;
  protected readonly index: number;

  constructor(owner: IHandle, boneIndex?: number, boneName?: string) {
    this.owner = owner;
    this.index = boneIndex ? boneIndex : GetEntityBoneIndexByName(this.owner.Handle, boneName ?? "");
  }
  public get Index(): number {
    return this.index;
  }

  public get Owner(): IHandle {
    return this.owner;
  }

  public get Position(): Vector3 {
    return Vector3.fromArray(GetWorldPositionOfEntityBone(this.owner.Handle, this.index));
  }

  // public get Rotation(): Vector3 {
  //   return Vector3.fromArray(GetEntityBoneRotation(this.owner.Handle, this.index));
  // }

  public get IsValid(): boolean {
    return this.owner.exists() && this.index !== -1;
  }
}
