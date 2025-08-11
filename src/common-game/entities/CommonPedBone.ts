import { CommonBaseEntityBone } from "./CommonBaseEntityBone";
import type { CommonPed } from "./CommonPed";
import type { IHandle } from "./IHandle";

export class CommonPedBone extends CommonBaseEntityBone {
  constructor(owner: IHandle, boneId: number) {
    super(owner, GetPedBoneIndex(owner.Handle, Number(boneId)));
  }

  public get IsValid(): boolean {
    return this.Owner.exists() && this.Index !== -1;
  }
}
