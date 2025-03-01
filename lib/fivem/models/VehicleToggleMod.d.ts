import type { Vehicle } from "./Vehicle";
import type { VehicleToggleModType } from "../enums";
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
