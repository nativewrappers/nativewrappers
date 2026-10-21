var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { Color } from "../common/utils/Color";
import { BaseEntity } from "./BaseEntity";
import { ClassTypes } from "../common/utils/ClassTypes";
class Vehicle extends BaseEntity {
  static {
    __name(this, "Vehicle");
  }
  type = ClassTypes.Vehicle;
  constructor(handle) {
    super(handle);
  }
  /**
   * Get an interable list of vehicles currently on the server
   * @returns Iterable list of Vehicles.
   */
  static *AllVehicles() {
    for (const veh of GetAllVehicles()) {
      yield new Vehicle(veh);
    }
  }
  static fromNetworkId(networkId) {
    const ent = NetworkGetEntityFromNetworkId(networkId);
    if (ent === 0) return null;
    return new Vehicle(ent);
  }
  static fromStateBagName(stateBageName) {
    const ent = GetEntityFromStateBagName(stateBageName);
    if (ent === 0) return null;
    return new Vehicle(ent);
  }
  get IsEngineRunning() {
    return GetIsVehicleEngineRunning(this.handle);
  }
  get IsPrimaryColourCustom() {
    return GetIsVehiclePrimaryColourCustom(this.handle);
  }
  get IsSecondaryColourCustom() {
    return GetIsVehicleSecondaryColourCustom(this.handle);
  }
  get BodyHealth() {
    return GetVehicleBodyHealth(this.handle);
  }
  get VehicleColours() {
    return GetVehicleColours(this.handle);
  }
  get CustomPrimaryColour() {
    return Color.fromArray(GetVehicleCustomPrimaryColour(this.handle));
  }
  get CustomSecondaryColour() {
    return Color.fromArray(GetVehicleCustomSecondaryColour(this.handle));
  }
  get DashboardColour() {
    return GetVehicleDashboardColour(this.handle);
  }
  get DirtLevel() {
    return GetVehicleDirtLevel(this.handle);
  }
  get LockStatus() {
    return GetVehicleDoorLockStatus(this.handle);
  }
  getDoorStatus(doorIndex) {
    return GetVehicleDoorStatus(this.handle, doorIndex);
  }
  get DoorsLockedForPlayer() {
    return GetVehicleDoorsLockedForPlayer(this.handle);
  }
  get EngineHealth() {
    return GetVehicleEngineHealth(this.handle);
  }
  get ExtraColours() {
    return GetVehicleExtraColours(this.handle);
  }
  get FlightNozzlePosition() {
    return GetVehicleFlightNozzlePosition(this.handle);
  }
  get Handbrake() {
    return GetVehicleHandbrake(this.handle);
  }
  get HeadlightsColour() {
    return GetVehicleHeadlightsColour(this.handle);
  }
  get HomingLockonState() {
    return GetVehicleHomingLockonState(this.handle);
  }
  get InteriorColour() {
    return GetVehicleInteriorColour(this.handle);
  }
  get LightsState() {
    const [_, lightsOn, highbeansOn] = GetVehicleLightsState(this.handle);
    return [lightsOn, highbeansOn];
  }
  get Livery() {
    return GetVehicleLivery(this.handle);
  }
  get LockOnTarget() {
    return new Vehicle(GetVehicleLockOnTarget(this.handle));
  }
  get Plate() {
    return GetVehicleNumberPlateText(this.handle);
  }
  get PlateTrimmed() {
    return this.Plate.trim();
  }
  get PlateIndex() {
    return GetVehicleNumberPlateTextIndex(this.handle);
  }
  get PetrolTankHealth() {
    return GetVehiclePetrolTankHealth(this.handle);
  }
  get RadioStation() {
    return GetVehicleRadioStationIndex(this.handle);
  }
  get RoofLivery() {
    return GetVehicleRoofLivery(this.handle);
  }
  get SteeringAngle() {
    return GetVehicleSteeringAngle(this.handle);
  }
  get VehicleType() {
    return GetVehicleType(this.handle);
  }
  get TyreSmokeColour() {
    return Color.fromArray(GetVehicleTyreSmokeColor(this.handle));
  }
  get WheelType() {
    return GetVehicleWheelType(this.handle);
  }
  get WindowTint() {
    return GetVehicleWindowTint(this.handle);
  }
  get HasBeenOwnedByPlayer() {
    return HasVehicleBeenOwnedByPlayer(this.handle);
  }
  get IsEngineStarting() {
    return IsVehicleEngineStarting(this.handle);
  }
  get IsSirenOn() {
    return IsVehicleSirenOn(this.handle);
  }
  get MaxHealth() {
    return GetEntityMaxHealth(this.handle);
  }
  get ScriptTaskCommand() {
    return GetPedScriptTaskCommand(this.handle);
  }
  get ScriptTaskStage() {
    return GetPedScriptTaskStage(this.handle);
  }
  get MainRotorHealth() {
    return GetHeliMainRotorHealth(this.handle);
  }
  get TailRotorHealth() {
    return GetHeliTailRotorHealth(this.handle);
  }
  /**
   * This might supposed to be TrainEngineHealth?
   */
  get TrainCarriageEngine() {
    return GetTrainCarriageEngine(this.handle);
  }
  get TrainCarriageIndex() {
    return GetTrainCarriageIndex(this.handle);
  }
  isTyreBurst(wheelId, completely) {
    return IsVehicleTyreBurst(this.handle, wheelId, completely);
  }
  isExtraTurnedOn(extraId) {
    return IsVehicleExtraTurnedOn(this.handle, extraId);
  }
  getPedInSeat(seatIndex) {
    return GetPedInVehicleSeat(this.handle, seatIndex);
  }
  getLastPedInSeat(seatIndex) {
    return GetLastPedInVehicleSeat(this.handle, seatIndex);
  }
}
export {
  Vehicle
};
