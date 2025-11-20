import { Vector3 } from "@common/utils/Vector";
import { IHandle } from "./IHandle";

export abstract class CommonBaseEntityBone extends IHandle {
  protected readonly owner: IHandle;

  constructor(owner: IHandle, boneInfo: number | string) {
    super(typeof boneInfo === "number" ? boneInfo : GetEntityBoneIndexByName(owner.Handle, boneInfo));
    this.owner = owner;
  }

  // overwrite the `IHandle` exists function call
  public override exists(): boolean {
    return this.handle !== -1;
  }

  public get Index(): number {
    return this.handle;
  }

  public get Owner(): IHandle {
    return this.owner;
  }

  public get Position(): Vector3 {
    return Vector3.fromArray(GetWorldPositionOfEntityBone(this.owner.Handle, this.handle));
  }

  // public get Rotation(): Vector3 {
  //   return Vector3.fromArray(GetEntityBoneRotation(this.owner.Handle, this.index));
  // }

  public get IsValid(): boolean {
    return this.owner.exists() && this.handle !== -1;
  }
}
