import { ClassTypes } from "../../common/utils/ClassTypes";
import { CommonBaseEntity } from "./CommonBaseEntity";
import { CommonEntityBoneCollection } from "./CommonEntityBoneCollection";
import type { CommonEntity } from "./CommonEntityType";
export declare class CommonProp extends CommonBaseEntity {
    static fromHandle(handle: number): CommonProp | null;
    static fromNetworkId(networkId: number): CommonProp | null;
    protected type: ClassTypes;
    protected bones?: CommonEntityBoneCollection | undefined;
    constructor(handle: number);
    exists(): boolean;
    placeOnGround(): void;
    getEntityAttachedTo(): CommonEntity;
    get Bones(): CommonEntityBoneCollection;
}
