import { Vector3 } from "@common/utils/Vector";
import type { BaseEntity } from "./BaseEntity";

export abstract class BaseEntityBone {
  public get Index(): number {
    return this.index;
  }

  public get Owner(): BaseEntity {
    return this.owner;
  }

  public get Position(): Vector3 {
    return Vector3.fromArray(GetWorldPositionOfEntityBone(this.owner.Handle, this.index));
  }

  public get Rotation(): Vector3 {
    return Vector3.fromArray(GetEntityBoneRotation(this.owner.Handle, this.index));
  }

  public get IsValid(): boolean {
    return this.owner.exists() && this.index !== -1;
  }

  protected readonly owner: BaseEntity;
  protected readonly index: number;

  constructor(owner: BaseEntity, boneIndex?: number, boneName?: string) {
    this.owner = owner;
    this.index = boneIndex ? boneIndex : GetEntityBoneIndexByName(this.owner.Handle, boneName ?? "");
  }
}
