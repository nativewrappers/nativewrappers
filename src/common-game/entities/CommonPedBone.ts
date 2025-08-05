import { CommonBaseEntityBone } from "./CommonBaseEntityBone";
import type { CommonPed } from "./CommonPed";

export class CommonPedBone extends CommonBaseEntityBone {
  constructor(owner: CommonPed, boneId: number) {
    super(owner, GetPedBoneIndex(owner.Handle, Number(boneId)));
  }

  public get IsValid(): boolean {
    return this.Owner.exists() && this.Index !== -1;
  }
}
