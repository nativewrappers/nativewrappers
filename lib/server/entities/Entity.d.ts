import { BaseEntity } from "./BaseEntity";
export declare class Entity extends BaseEntity {
    constructor(handle: number);
    static fromNetworkId(netId: number): Entity;
    static fromHandle(handle: number): Entity;
}
