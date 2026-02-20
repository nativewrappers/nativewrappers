import { Color } from "../common/utils/Color";
import type { VehicleLockStatus } from "../enum/VehicleLockStatus";
import type { VehicleType } from "../enum/VehicleType";
import type { Hash } from "../type/Hash";
import { BaseEntity } from "./BaseEntity";
import { ClassTypes } from "../common/utils/ClassTypes";
export declare class Vehicle extends BaseEntity {
    protected type: ClassTypes;
    constructor(handle: number);
    /**
     * Get an interable list of vehicles currently on the server
     * @returns Iterable list of Vehicles.
     */
    static AllVehicles(): IterableIterator<Vehicle>;
    static fromNetworkId(networkId: number): Vehicle | null;
    static fromStateBagName(stateBageName: string): Vehicle | null;
    get IsEngineRunning(): boolean;
    get IsPrimaryColourCustom(): boolean;
    get IsSecondaryColourCustom(): boolean;
    get BodyHealth(): number;
    get VehicleColours(): [number, number];
    get CustomPrimaryColour(): Color;
    get CustomSecondaryColour(): Color;
    get DashboardColour(): number;
    get DirtLevel(): number;
    get LockStatus(): VehicleLockStatus;
    getDoorStatus(doorIndex: number): number;
    get DoorsLockedForPlayer(): number;
    get EngineHealth(): number;
    get ExtraColours(): [number, number];
    get FlightNozzlePosition(): number;
    get Handbrake(): boolean;
    get HeadlightsColour(): number;
    get HomingLockonState(): number;
    get InteriorColour(): number;
    get LightsState(): [boolean, boolean];
    get Livery(): number;
    get LockOnTarget(): Vehicle;
    get Plate(): string;
    get PlateTrimmed(): string;
    get PlateIndex(): number;
    get PetrolTankHealth(): number;
    get RadioStation(): number;
    get RoofLivery(): number;
    get SteeringAngle(): number;
    get VehicleType(): VehicleType;
    get TyreSmokeColour(): Color;
    get WheelType(): number;
    get WindowTint(): number;
    get HasBeenOwnedByPlayer(): boolean;
    get IsEngineStarting(): boolean;
    get IsSirenOn(): boolean;
    get MaxHealth(): number;
    get ScriptTaskCommand(): Hash;
    get ScriptTaskStage(): Hash;
    get MainRotorHealth(): number;
    get TailRotorHealth(): number;
    /**
     * This might supposed to be TrainEngineHealth?
     */
    get TrainCarriageEngine(): number;
    get TrainCarriageIndex(): number;
    isTyreBurst(wheelId: number, completely: boolean): boolean;
    isExtraTurnedOn(extraId: number): boolean;
    getPedInSeat(seatIndex: number): number;
    getLastPedInSeat(seatIndex: number): number;
}
