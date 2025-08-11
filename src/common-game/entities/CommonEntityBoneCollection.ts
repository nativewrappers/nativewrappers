import type { CommonBaseEntity } from "./CommonBaseEntity";
import { CommonBaseEntityBoneCollection } from "./CommonBaseEntityBoneCollection";
import { CommonEntityBone } from "./CommonEntityBone";
import type { IHandle } from "./IHandle";

export class CommonEntityBoneCollection extends CommonBaseEntityBoneCollection {
  constructor(owner: IHandle) {
    super(owner);
  }

  public getBone(boneIndex: number): CommonEntityBone;
  public getBone(boneName: string): CommonEntityBone;
  public getBone(bone: number | string): CommonEntityBone {
    return new CommonEntityBone(
      this.owner,
      typeof bone === "number" ? bone : GetEntityBoneIndexByName(this.owner.Handle, bone ?? ""),
    );
  }

  public get Core(): CommonEntityBone {
    return new CommonEntityBone(this.owner, -1);
  }
}
