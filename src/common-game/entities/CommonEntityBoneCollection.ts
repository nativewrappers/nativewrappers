import type { CommonBaseEntity } from "./CommonBaseEntity";
import type { CommonBaseEntityBone } from "./CommonBaseEntityBone";
import { CommonBaseEntityBoneCollection } from "./CommonBaseEntityBoneCollection";
import { CommonEntityBone } from "./CommonEntityBone";
import type { IHandle } from "./IHandle";

export class CommonEntityBoneCollection extends CommonBaseEntityBoneCollection {
  constructor(owner: IHandle) {
    super(owner);
  }

  public getBoneFromName(boneName: string): CommonBaseEntityBone {
    return new CommonEntityBone(this.owner, GetEntityBoneIndexByName(this.owner.Handle, boneName));
  }

  public getBoneFromIndex(boneIndex: number): CommonBaseEntityBone {
    return new CommonEntityBone(this.owner, boneIndex);
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
