import type { VehicleToggleModType } from "../enums/Vehicle";
import type { Vehicle } from "./Vehicle";
export declare class VehicleToggleMod {
    private _owner;
    private _modType;
    constructor(owner: Vehicle, modType: VehicleToggleModType);
    get ModType(): VehicleToggleModType;
    set ModType(modType: VehicleToggleModType);
    get IsInstalled(): boolean;
    set IsInstalled(value: boolean);
    get LocalizedModTypeName(): string;
    get Vehicle(): Vehicle;
    remove(): void;
}
