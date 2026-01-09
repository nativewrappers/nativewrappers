import { ClassTypes } from "../common/utils/ClassTypes";
import { BaseEntity } from "./BaseEntity";
import { CommonEntityBoneCollection } from "../common-game/entities/CommonEntityBoneCollection";
export declare class Prop extends BaseEntity {
    protected type: ClassTypes;
    protected bones?: CommonEntityBoneCollection | undefined;
    get Bones(): CommonEntityBoneCollection;
}
