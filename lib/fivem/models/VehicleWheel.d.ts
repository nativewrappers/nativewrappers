import type { Vehicle } from "./Vehicle";
export declare class VehicleWheel {
    private _owner;
    private _index;
    constructor(owner: Vehicle, index: number);
    get Index(): number;
    set Index(index: number);
    get Vehicle(): Vehicle;
    burst(): void;
    fix(): void;
}
