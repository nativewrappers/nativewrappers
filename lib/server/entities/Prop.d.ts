import { ClassTypes } from "../common/utils/ClassTypes";
import { BaseEntity } from "./BaseEntity";
export declare class Prop extends BaseEntity {
    protected type: ClassTypes;
    constructor(handle: number);
    /**
     * Get an interable list of props currently on the server
     * @returns Iterable list of Props.
     */
    static AllProps(): IterableIterator<Prop>;
    static fromNetworkId(networkId: number): Prop | null;
    static fromStateBagName(stateBagName: string): Prop | null;
    static fromHandle(handle: number): Prop;
}
