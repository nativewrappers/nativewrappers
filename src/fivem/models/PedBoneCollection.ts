import { EntityBoneCollection } from "./EntityBoneCollection";
import type { Ped } from "./Ped";
import { PedBone } from "./PedBone";

export class PedBoneCollection extends EntityBoneCollection {
  constructor(owner: Ped) {
    super(owner);
  }

  public get Core(): PedBone {
    return new PedBone(this.owner as Ped, -1);
  }

  public get LastDamaged(): PedBone {
    const [, outBone] = GetPedLastDamageBone(this.owner.Handle, 0);
    return (PedBone as never)[outBone];
  }

  public clearLastDamaged(): void {
    ClearPedLastDamageBone(this.owner.Handle);
  }

  public getBone(boneIndex?: number, boneName?: string): PedBone {
    return new PedBone(
      this.owner as Ped,
      boneIndex ? boneIndex : GetEntityBoneIndexByName(this.owner.Handle, boneName ?? ""),
    );
  }
}
