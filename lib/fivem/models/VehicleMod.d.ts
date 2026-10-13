import type { VehicleModType } from "../enums/Vehicle";
import type { Vehicle } from "./Vehicle";
export declare class VehicleMod {
    private _owner;
    private _modType;
    constructor(owner: Vehicle, modType: VehicleModType);
    get ModType(): VehicleModType;
    set ModType(modType: VehicleModType);
    get Index(): number;
    set Index(value: number);
    get Variation(): boolean;
    set Variation(value: boolean);
    get ModCount(): number;
    get Vehicle(): Vehicle;
    remove(): void;
}
