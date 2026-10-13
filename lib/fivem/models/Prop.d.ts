import { ClassTypes } from "../common/utils/ClassTypes";
import { BaseEntity } from "./BaseEntity";
import type { Entity } from "./Entity";
import { EntityBoneCollection } from "./EntityBoneCollection";
export declare class Prop extends BaseEntity {
    static exists(prop: Prop): boolean;
    static fromHandle(handle: number): Prop | null;
    static fromNetworkId(networkId: number): Prop | null;
    protected type: ClassTypes;
    protected bones?: EntityBoneCollection | undefined;
    constructor(handle: number);
    exists(): boolean;
    placeOnGround(): void;
    getEntityAttachedTo(): Entity;
    get Bones(): EntityBoneCollection;
}
