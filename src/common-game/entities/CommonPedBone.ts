import { CommonBaseEntityBone } from "./CommonBaseEntityBone";
import type { CommonPed } from "./CommonPed";
import type { IHandle } from "./IHandle";

export class CommonPedBone extends CommonBaseEntityBone {
  constructor(owner: IHandle, boneIndex: number) {
    super(owner, boneIndex);
  }

  public get IsValid(): boolean {
    return this.Owner.exists() && this.Index !== -1;
  }
}
