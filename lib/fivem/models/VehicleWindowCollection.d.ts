import { VehicleWindowIndex } from "../enums/Vehicle";
import type { Vehicle } from "./Vehicle";
import { VehicleWindow } from "./VehicleWindow";
export declare class VehicleWindowCollection {
    private _owner;
    private readonly _vehicleWindows;
    constructor(owner: Vehicle);
    getWindow(index: VehicleWindowIndex): VehicleWindow;
    getAllWindows(): (VehicleWindow | null)[];
    get AreAllWindowsIntact(): boolean;
    rollDownAllWindows(): void;
    rollUpAllWindows(): void;
    hasWindow(window: VehicleWindowIndex): boolean;
}
