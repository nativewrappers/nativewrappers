import type { VehicleSeat } from "../enums/VehicleSeat";
import { ClassTypes } from "../common/utils/ClassTypes";
import { CommonVehicle } from "../common-game/entities/CommonVehicle";
export declare class Vehicle extends CommonVehicle {
    protected type: ClassTypes;
    constructor(handle: number);
    /**
     * Gets the entity from the handle given, if the entity doesn't exist it will return
     * null.
     */
    static fromHandle(handle: number): Vehicle | null;
    /**
     * Gets the ped from the current network id, this doesn't check that
     * the entity is actually a ped
     */
    static fromNetworkId(netId: number): Vehicle | null;
    static fromStateBagName(bagName: string): Vehicle | null;
    /**
     *
     * @param seatIndex the seat index to check
     * @returns true of the specified seat is free on the mount
     */
    isSeatFree(seatIndex: VehicleSeat): boolean;
}
