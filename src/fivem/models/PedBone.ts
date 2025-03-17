import type { Bone } from "fivem/enums/Bone";
import { BaseEntityBone } from "./BaseEntityBone";
import type { Ped } from "./Ped";

export class PedBone extends BaseEntityBone {
  constructor(owner: Ped, boneId: Bone) {
    super(owner, GetPedBoneIndex(owner.Handle, Number(boneId)));
  }

  public get IsValid(): boolean {
    return this.Owner.exists() && this.Index !== -1;
  }
}
