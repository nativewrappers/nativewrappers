import { ClassTypes } from "../../common/utils/ClassTypes";
import { BaseEntity } from "./BaseEntity";
export declare class Prop extends BaseEntity {
    static exists(prop: Prop): boolean;
    static fromHandle(handle: number): Prop | null;
    static fromNetworkId(networkId: number): Prop | null;
    protected type: ClassTypes;
    constructor(handle: number);
    exists(): boolean;
    placeOnGround(): void;
}
