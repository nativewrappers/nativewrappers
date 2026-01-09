import { VehicleWheelIndex } from "../enums/Vehicle";
import type { Vehicle } from "./Vehicle";
import { VehicleWheel } from "./VehicleWheel";
export declare class VehicleWheelCollection {
    private _owner;
    private readonly _vehicleWheels;
    constructor(owner: Vehicle);
    getWheel(index: VehicleWheelIndex): VehicleWheel | undefined;
    getAllWheels(): (VehicleWheel | null | undefined)[];
    burstAllWheels(): void;
    fixAllWheels(): void;
    hasWheel(wheel: VehicleWheelIndex): boolean;
}
