import { CommonBaseEntityBoneCollection } from "@common-game/entities/CommonBaseEntityBoneCollection";
import { ClassTypes } from "@common/utils/ClassTypes";
import { BaseEntity } from "./BaseEntity";
import { CommonEntityBoneCollection } from "@common-game/entities/CommonEntityBoneCollection";

export class Prop extends BaseEntity {
    protected type = ClassTypes.Prop;
    protected bones?: CommonEntityBoneCollection | undefined;

    get Bones(): CommonEntityBoneCollection {
      this.bones = this.bones ?? new CommonEntityBoneCollection(this);
      return this.bones;
    }
}
