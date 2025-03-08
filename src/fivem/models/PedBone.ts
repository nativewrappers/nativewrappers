import type { Bone } from "fivem/enums/Bone";
import { EntityBone } from "./EntityBone";
import { Ped } from "./Ped";

export class PedBone extends EntityBone {
  constructor(owner: Ped, boneId: Bone) {
    super(owner, GetPedBoneIndex(owner.Handle, Number(boneId)));
  }

  public get IsValid(): boolean {
    return Ped.exists(this.Owner as Ped) && this.Index !== -1;
  }
}
