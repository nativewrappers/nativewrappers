import type { VehicleSeat } from "redm/enums";
import { BaseEntity } from "./BaseEntity";
export declare class Vehicle extends BaseEntity {
    constructor(handle: number);
    /**
     *
     * @param seatIndex the seat index to check
     * @returns true of the specified seat is free on the mount
     */
    isSeatFree(seatIndex: VehicleSeat): boolean;
}
