import type { VehicleDoorIndex } from "../enums/Vehicle";
import type { Vehicle } from "./Vehicle";
export declare class VehicleDoor {
    private _owner;
    private _index;
    constructor(owner: Vehicle, index: VehicleDoorIndex);
    get Index(): VehicleDoorIndex;
    set Index(index: VehicleDoorIndex);
    get AngleRatio(): number;
    set AngleRatio(value: number);
    set CanBeBroken(value: boolean);
    get IsOpen(): boolean;
    get IsFullyOpen(): boolean;
    get IsBroken(): boolean;
    get Vehicle(): Vehicle;
    open(loose?: boolean, instantly?: boolean): void;
    close(instantly?: boolean): void;
    break(stayInTheWorld?: boolean): void;
}
