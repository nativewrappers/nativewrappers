import type { CommonBaseEntity } from "./CommonBaseEntity";
import { CommonBaseEntityBone } from "./CommonBaseEntityBone";
import type { IHandle } from "./IHandle";

export class CommonEntityBone extends CommonBaseEntityBone {
  constructor(owner: IHandle, boneIndexOrBoneName: number | string) {
    super(owner, boneIndexOrBoneName);
  }
}
