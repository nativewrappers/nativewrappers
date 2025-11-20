import { CommonPedBone } from "@common-game/entities/CommonPedBone";
import { CommonPedBoneCollection } from "@common-game/entities/CommonPedBoneCollection";
import type { PedBone } from "redm/enums/PedBones";

export class PedBoneCollection extends CommonPedBoneCollection {
  public getBoneFromId(boneId: PedBone): CommonPedBone {
    return new CommonPedBone(this.owner, GetPedBoneIndex(this.owner.Handle, boneId));
  }
}
