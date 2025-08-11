import type { CommonBaseEntity } from "./CommonBaseEntity";
import { CommonBaseEntityBone } from "./CommonBaseEntityBone";
import type { IHandle } from "./IHandle";

export class CommonEntityBone extends CommonBaseEntityBone {
  constructor(owner: IHandle, boneIndex?: number, boneName?: string) {
    super(owner, boneIndex, boneName);
  }
}
