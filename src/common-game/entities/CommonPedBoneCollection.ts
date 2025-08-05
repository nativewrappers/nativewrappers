import { CommonBaseEntityBoneCollection } from "./CommonBaseEntityBoneCollection";
import type { CommonPed } from "./CommonPed";
import { CommonPedBone } from "./CommonPedBone";

export class CommonPedBoneCollection extends CommonBaseEntityBoneCollection {
  constructor(owner: CommonPed) {
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

  public getBone(boneIndex?: number, boneName?: string): CommonPedBone {
    return new CommonPedBone(
      this.owner as CommonPed,
      boneIndex ? boneIndex : GetEntityBoneIndexByName(this.owner.Handle, boneName ?? ""),
    );
  }
}
