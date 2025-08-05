import type { CommonBaseEntity } from "./CommonBaseEntity";
import { CommonBaseEntityBone } from "./CommonBaseEntityBone";

export class CommonEntityBone extends CommonBaseEntityBone {
  constructor(owner: CommonBaseEntity, boneIndex?: number, boneName?: string) {
    super(owner, boneIndex, boneName);
  }
}
