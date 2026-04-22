import { CommonPedBone } from "../../common-game/entities/CommonPedBone";
import { CommonPedBoneCollection } from "../../common-game/entities/CommonPedBoneCollection";
import type { PedBone } from "../../enums/PedBones";
export declare class PedBoneCollection extends CommonPedBoneCollection {
    getBoneFromId(boneId: PedBone): CommonPedBone;
}
