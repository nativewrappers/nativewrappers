import { VehicleDoorIndex } from "../enums/Vehicle";
import type { Vehicle } from "./Vehicle";
import { VehicleDoor } from "./VehicleDoor";
export declare class VehicleDoorCollection {
    private _owner;
    private readonly _vehicleDoors;
    constructor(owner: Vehicle);
    getDoors(index: VehicleDoorIndex): VehicleDoor | undefined;
    getAllDoors(): (VehicleDoor | null | undefined)[];
    openAllDoors(loose?: boolean, instantly?: boolean): void;
    closeAllDoors(instantly?: boolean): void;
    breakAllDoors(stayInTheWorld?: boolean): void;
    hasDoor(index: VehicleDoorIndex): boolean;
}
