import { CommonBaseEntityBoneCollection } from "./CommonBaseEntityBoneCollection";
import type { CommonPed } from "./CommonPed";
import { CommonPedBone } from "./CommonPedBone";
import type { IHandle } from "./IHandle";

export class CommonPedBoneCollection extends CommonBaseEntityBoneCollection {
  constructor(owner: IHandle) {
    super(owner);
  }

  public get Core(): CommonPedBone {
    return new CommonPedBone(this.owner as CommonPed, -1);
  }

  public get LastDamaged(): CommonPedBone {
    const [, outBone] = GetPedLastDamageBone(this.owner.Handle, 0);
    return (CommonPedBone as never)[outBone];
  }

  public clearLastDamaged(): void {
    ClearPedLastDamageBone(this.owner.Handle);
  }

  public getBoneFromId(boneId: number): CommonPedBone {
    return new CommonPedBone(this.owner, GetPedBoneIndex(this.owner.Handle, boneId));
  }

  public getBoneFromName(boneName: string): CommonPedBone {
    return new CommonPedBone(this.owner, GetEntityBoneIndexByName(this.owner.Handle, boneName));
  }

  public getBone(boneIndex: number): CommonPedBone;
  public getBone(boneName: string): CommonPedBone;
  public getBone(bone: number | string): CommonPedBone {
    return new CommonPedBone(
      this.owner,
      typeof bone === "number" ? bone : GetEntityBoneIndexByName(this.owner.Handle, bone ?? ""),
    );
  }
}
