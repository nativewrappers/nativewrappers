import type { Vehicle } from "./Vehicle";
import type { VehicleWindowIndex } from "../enums";
export declare class VehicleWindow {
    private _owner;
    private _index;
    constructor(owner: Vehicle, index: VehicleWindowIndex);
    get Index(): VehicleWindowIndex;
    set Index(index: VehicleWindowIndex);
    get IsIntact(): boolean;
    get Vehicle(): Vehicle;
    repair(): void;
    smash(): void;
    rollUp(): void;
    rollDown(): void;
    remove(): void;
}
