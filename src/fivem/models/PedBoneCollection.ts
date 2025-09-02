import { BaseEntityBoneCollection } from "./BaseEntityBoneCollection";
import type { Ped } from "./Ped";
import { PedBone } from "./PedBone";

export class PedBoneCollection extends BaseEntityBoneCollection {
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

  public getBone(bone: number): PedBone;
  public getBone(bone: string): PedBone;
  public getBone(bone: string | number): PedBone {
    return new PedBone(
      this.owner as Ped,
      typeof bone === "number" ? bone : GetEntityBoneIndexByName(this.owner.Handle, bone ?? ""),
    );
  }
}
