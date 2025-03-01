import { ClassTypes } from "../../common/utils/ClassTypes";
import type { VehicleLockStatus } from "../enum/VehicleLockStatus";
import type { VehicleType } from "../enum/VehicleType";
import type { Hash } from "../type/Hash";
import { Color } from "../utils";
import { BaseEntity } from "./BaseEntity";

export class Vehicle extends BaseEntity {
  protected type = ClassTypes.Vehicle;
  constructor(handle: number) {
    super(handle);
  }

  /**
   * Get an interable list of vehicles currently on the server
   * @returns Iterable list of Vehicles.
   */
  public static *AllVehicles(): IterableIterator<Vehicle> {
    for (const veh of GetAllVehicles() as unknown as number[]) {
      yield new Vehicle(veh);
    }
  }

  static fromNetworkId(networkId: number): Vehicle | null {
    const ent = NetworkGetEntityFromNetworkId(networkId);
    if (ent === 0) return null;
    return new Vehicle(ent);
  }

  static fromStateBagName(stateBageName: string): Vehicle | null {
    const ent = GetEntityFromStateBagName(stateBageName);
    if (ent === 0) return null;
    return new Vehicle(ent);
  }

  public get IsEngineRunning(): boolean {
    return GetIsVehicleEngineRunning(this.handle);
  }

  public get IsPrimaryColourCustom(): boolean {
    return GetIsVehiclePrimaryColourCustom(this.handle);
  }

  public get IsSecondaryColourCustom(): boolean {
    return GetIsVehicleSecondaryColourCustom(this.handle);
  }

  public get BodyHealth(): number {
    return GetVehicleBodyHealth(this.handle);
  }

  public get VehicleColours(): [number, number] {
    return GetVehicleColours(this.handle);
  }

  public get CustomPrimaryColour(): Color {
    return Color.fromArray(GetVehicleCustomPrimaryColour(this.handle));
  }

  public get CustomSecondaryColour(): Color {
    return Color.fromArray(GetVehicleCustomSecondaryColour(this.handle));
  }

  public get DashboardColour(): number {
    return GetVehicleDashboardColour(this.handle);
  }

  public get DirtLevel(): number {
    return GetVehicleDirtLevel(this.handle);
  }

  public get LockStatus(): VehicleLockStatus {
    return GetVehicleDoorLockStatus(this.handle);
  }

  public getDoorStatus(doorIndex: number): number {
    return GetVehicleDoorStatus(this.handle, doorIndex);
  }

  public get DoorsLockedForPlayer(): number {
    return GetVehicleDoorsLockedForPlayer(this.handle);
  }

  public get EngineHealth(): number {
    return GetVehicleEngineHealth(this.handle);
  }

  public get ExtraColours(): [number, number] {
    return GetVehicleExtraColours(this.handle);
  }

  public get FlightNozzlePosition(): number {
    return GetVehicleFlightNozzlePosition(this.handle);
  }

  public get Handbrake(): boolean {
    return GetVehicleHandbrake(this.handle);
  }

  public get HeadlightsColour(): number {
    return GetVehicleHeadlightsColour(this.handle);
  }

  public get HomingLockonState(): number {
    return GetVehicleHomingLockonState(this.handle);
  }

  public get InteriorColour(): number {
    return GetVehicleInteriorColour(this.handle);
  }

  public get LightsState(): [boolean, boolean] {
    const [_, lightsOn, highbeansOn] = GetVehicleLightsState(this.handle);
    return [lightsOn, highbeansOn];
  }

  public get Livery(): number {
    return GetVehicleLivery(this.handle);
  }

  public get LockOnTarget(): Vehicle {
    return new Vehicle(GetVehicleLockOnTarget(this.handle));
  }

  public get Plate(): string {
    return GetVehicleNumberPlateText(this.handle);
  }

  public get PlateTrimmed(): string {
    return this.Plate.trim();
  }

  public get PlateIndex(): number {
    return GetVehicleNumberPlateTextIndex(this.handle);
  }

  public get PetrolTankHealth(): number {
    return GetVehiclePetrolTankHealth(this.handle);
  }

  public get RadioStation(): number {
    return GetVehicleRadioStationIndex(this.handle);
  }

  public get RoofLivery(): number {
    return GetVehicleRoofLivery(this.handle);
  }

  public get SteeringAngle(): number {
    return GetVehicleSteeringAngle(this.handle);
  }

  public get VehicleType(): VehicleType {
    return GetVehicleType(this.handle) as VehicleType;
  }

  public get TyreSmokeColour(): Color {
    return Color.fromArray(GetVehicleTyreSmokeColor(this.handle));
  }

  public get WheelType(): number {
    return GetVehicleWheelType(this.handle);
  }

  public get WindowTint(): number {
    return GetVehicleWindowTint(this.handle);
  }

  public get HasBeenOwnedByPlayer(): boolean {
    return HasVehicleBeenOwnedByPlayer(this.handle);
  }

  public get IsEngineStarting(): boolean {
    return IsVehicleEngineStarting(this.handle);
  }

  public get IsSirenOn(): boolean {
    return IsVehicleSirenOn(this.handle);
  }

  public get MaxHealth(): number {
    return GetEntityMaxHealth(this.handle);
  }

  public get ScriptTaskCommand(): Hash {
    return GetPedScriptTaskCommand(this.handle);
  }

  public get ScriptTaskStage(): Hash {
    return GetPedScriptTaskStage(this.handle);
  }

  public get MainRotorHealth(): number {
    return GetHeliMainRotorHealth(this.handle);
  }

  public get TailRotorHealth(): number {
    return GetHeliTailRotorHealth(this.handle);
  }

  /**
   * This might supposed to be TrainEngineHealth?
   */
  public get TrainCarriageEngine(): number {
    return GetTrainCarriageEngine(this.handle);
  }

  public get TrainCarriageIndex(): number {
    return GetTrainCarriageIndex(this.handle);
  }

  public isTyreBurst(wheelId: number, completely: boolean): boolean {
    return IsVehicleTyreBurst(this.handle, wheelId, completely);
  }

  public isExtraTurnedOn(extraId: number): boolean {
    return IsVehicleExtraTurnedOn(this.handle, extraId);
  }

  public getPedInSeat(seatIndex: number): number {
    return GetPedInVehicleSeat(this.handle, seatIndex);
  }

  public getLastPedInSeat(seatIndex: number): number {
    return GetLastPedInVehicleSeat(this.handle, seatIndex);
  }
}
