var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { ClassTypes } from "../common/utils/ClassTypes";
import { Vector3 } from "../common/utils/Vector";
import { GameConstants } from "../GameConstants";
import {
  VehicleRoofState,
  VehicleSeat
} from "../enums/Vehicle";
import { GetEntityClassFromId } from "../utils/GetEntityFromEntityIds";
import { BaseEntity } from "./BaseEntity";
import { EntityBoneCollection } from "./EntityBoneCollection";
import { Ped } from "./Ped";
import { VehicleDoorCollection } from "./VehicleDoorCollection";
import { VehicleModCollection } from "./VehicleModCollection";
import { VehicleWheelCollection } from "./VehicleWheelCollection";
import { VehicleWindowCollection } from "./VehicleWindowCollection";
class Vehicle extends BaseEntity {
  static {
    __name(this, "Vehicle");
  }
  static getModelDisplayName(vehicleModel) {
    return GetDisplayNameFromVehicleModel(vehicleModel.Hash);
  }
  static getModelClass(vehicleModel) {
    return GetVehicleClassFromName(vehicleModel.Hash);
  }
  static getClassDisplayName(vehicleClass) {
    return `VEH_CLASS_${vehicleClass}`;
  }
  static exists(vehicle) {
    return typeof vehicle !== "undefined" && vehicle.exists();
  }
  static fromHandle(handle) {
    if (handle === 0 || !DoesEntityExist(handle)) {
      return null;
    }
    return new Vehicle(handle);
  }
  static fromNetworkId(networkId) {
    if (!NetworkDoesEntityExistWithNetworkId(networkId)) {
      return null;
    }
    return new Vehicle(NetworkGetEntityFromNetworkId(networkId));
  }
  _doors;
  _mods;
  _wheels;
  _windows;
  type = ClassTypes.Vehicle;
  bones;
  constructor(handle) {
    super(handle);
  }
  get Bones() {
    if (!this.bones) {
      this.bones = new EntityBoneCollection(this);
    }
    return this.bones;
  }
  exists() {
    return super.exists() && GetEntityType(this.handle) === 2;
  }
  get DisplayName() {
    return Vehicle.getModelDisplayName(this.Model);
  }
  get ClassDisplayName() {
    return Vehicle.getClassDisplayName(this.ClassType);
  }
  get NumberPlate() {
    return GetVehicleNumberPlateText(this.handle);
  }
  set NumberPlate(value) {
    SetVehicleNumberPlateText(this.handle, value.substring(0, 8));
  }
  get ClassType() {
    return GetVehicleClass(this.handle);
  }
  get BodyHealth() {
    return GetVehicleBodyHealth(this.handle);
  }
  set BodyHealth(value) {
    SetVehicleBodyHealth(this.handle, value);
  }
  get EngineHealth() {
    return GetVehicleEngineHealth(this.handle);
  }
  set EngineHealth(value) {
    SetVehicleEngineHealth(this.handle, value);
  }
  get PetrolTankHealth() {
    return GetVehiclePetrolTankHealth(this.handle);
  }
  set PetrolTankHealth(value) {
    SetVehiclePetrolTankHealth(this.handle, value);
  }
  get FuelLevel() {
    return GetVehicleFuelLevel(this.handle);
  }
  set FuelLevel(value) {
    SetVehicleFuelLevel(this.handle, value);
  }
  get OilLevel() {
    return GetVehicleOilLevel(this.handle);
  }
  set OilLevel(value) {
    SetVehicleOilLevel(this.handle, value);
  }
  get Gravity() {
    return GetVehicleGravityAmount(this.handle);
  }
  set Gravity(value) {
    SetVehicleGravityAmount(this.handle, value);
  }
  get IsEngineRunning() {
    return GetIsVehicleEngineRunning(this.handle);
  }
  set IsEngineRunning(value) {
    SetVehicleEngineOn(this.handle, value, true, true);
  }
  get IsEngineStarting() {
    return IsVehicleEngineStarting(this.handle);
  }
  set IsEngineStarting(value) {
    if ((this.IsEngineStarting || this.IsEngineRunning) && value) {
      return;
    }
    SetVehicleEngineOn(this.handle, value, !value, true);
  }
  get IsRadioEnabled() {
    if (GameConstants.Player.Character.isInVehicle(this)) {
      return IsPlayerVehicleRadioEnabled();
    }
    return false;
  }
  set IsRadioEnabled(value) {
    SetVehicleRadioEnabled(this.handle, value);
  }
  set RadioStation(value) {
    this.IsRadioEnabled = true;
    SetVehRadioStation(this.handle, value);
  }
  set Speed(value) {
    if (this.Model.IsTrain) {
      SetTrainSpeed(this.handle, value);
      SetTrainCruiseSpeed(this.handle, value);
    } else {
      SetVehicleForwardSpeed(this.handle, value);
    }
  }
  get WheelSpeed() {
    return GetVehicleDashboardSpeed(this.handle);
  }
  get EstimatedMaxSpeed() {
    return GetVehicleEstimatedMaxSpeed(this.handle);
  }
  get Acceleration() {
    return GetVehicleCurrentAcceleration(this.handle);
  }
  get CurrentRPM() {
    return GetVehicleCurrentRpm(this.handle);
  }
  set CurrentRPM(value) {
    SetVehicleCurrentRpm(this.handle, value);
  }
  get HighGear() {
    return GetVehicleHighGear(this.handle);
  }
  set HighGear(value) {
    SetVehicleHighGear(this.handle, value);
  }
  get CurrentGear() {
    return GetVehicleCurrentGear(this.handle);
  }
  get SteeringAngle() {
    return GetVehicleSteeringAngle(this.handle);
  }
  set SteeringAngle(value) {
    SetVehicleSteeringAngle(this.handle, value);
  }
  get SteeringScale() {
    return GetVehicleSteeringScale(this.handle);
  }
  set SteeringScale(value) {
    SetVehicleSteeringScale(this.handle, value);
  }
  get IsAlarmSet() {
    return IsVehicleAlarmSet(this.handle);
  }
  set IsAlarmSet(value) {
    SetVehicleAlarm(this.handle, value);
  }
  get IsAlarmSounding() {
    return IsVehicleAlarmActivated(this.handle);
  }
  get AlarmTimeLeft() {
    return GetVehicleAlarmTimeLeft(this.handle);
  }
  set AlarmTimeLeft(value) {
    SetVehicleAlarmTimeLeft(this.handle, value);
  }
  startAlarm() {
    StartVehicleAlarm(this.handle);
  }
  get IsSirenActive() {
    return IsVehicleSirenOn(this.handle);
  }
  set IsSirenActive(value) {
    SetVehicleSiren(this.handle, value);
  }
  set HasMutedSirens(value) {
    SetVehicleHasMutedSirens(this.handle, value);
  }
  soundHorn(duration, mode = GetHashKey("HELDDOWN")) {
    StartVehicleHorn(this.handle, duration, mode, false);
  }
  get IsWanted() {
    return IsVehicleWanted(this.handle);
  }
  set IsWanted(value) {
    SetVehicleIsWanted(this.handle, value);
  }
  set ProvidesCover(value) {
    SetVehicleProvidesCover(this.handle, value);
  }
  set DropsMoneyOnExplosion(value) {
    SetVehicleCreatesMoneyPickupsWhenExploded(this.handle, value);
  }
  get PreviouslyOwnedByPlayer() {
    return IsVehiclePreviouslyOwnedByPlayer(this.handle);
  }
  set PreviouslyOwnedByPlayer(value) {
    SetVehicleHasBeenOwnedByPlayer(this.handle, value);
  }
  get NeedsToBeHotwired() {
    return IsVehicleNeedsToBeHotwired(this.handle);
  }
  set NeedsToBeHotwired(value) {
    SetVehicleNeedsToBeHotwired(this.handle, value);
  }
  get AreLightsOn() {
    return GetVehicleLightsState(this.handle)[0];
  }
  set AreLightsOn(value) {
    SetVehicleLights(this.handle, value ? 3 : 4);
  }
  get AreHighBeamsOn() {
    return GetVehicleLightsState(this.handle)[1];
  }
  set AreHighBeamsOn(value) {
    SetVehicleFullbeam(this.handle, value);
  }
  get IsInteriorLightOn() {
    return IsVehicleInteriorLightOn(this.handle);
  }
  set IsInteriorLightOn(value) {
    SetVehicleInteriorlight(this.handle, value);
  }
  get IsSearchLightOn() {
    return IsVehicleSearchlightOn(this.handle);
  }
  set IsSearchLightOn(value) {
    SetVehicleSearchlight(this.handle, value, false);
  }
  get IsTaxiLightOn() {
    return IsTaxiLightOn(this.handle);
  }
  set IsTaxiLightOn(value) {
    SetTaxiLights(this.handle, value);
  }
  get IsLeftIndicatorLightOn() {
    const val = GetVehicleIndicatorLights(this.handle);
    return val === 1 || val === 3;
  }
  set IsLeftIndicatorLightOn(value) {
    SetVehicleIndicatorLights(this.handle, 1, value);
  }
  get IsRightIndicatorLightOn() {
    return GetVehicleIndicatorLights(this.handle) >= 2;
  }
  set IsRightIndicatorLightOn(value) {
    SetVehicleIndicatorLights(this.handle, 0, value);
  }
  get IsHandbrakeForcedOn() {
    return GetVehicleHandbrake(this.handle);
  }
  set IsHandbrakeForcedOn(value) {
    SetVehicleHandbrake(this.handle, value);
  }
  set AreBrakeLightsOn(value) {
    SetVehicleBrakeLights(this.handle, value);
  }
  set LightsMultiplier(value) {
    SetVehicleLightMultiplier(this.handle, value);
  }
  set CanBeVisiblyDamaged(value) {
    SetVehicleCanBeVisiblyDamaged(this.handle, value);
  }
  set Strong(toggle) {
    SetVehicleStrong(this.handle, toggle);
  }
  set CanBreak(toggle) {
    SetVehicleCanBreak(this.handle, toggle);
  }
  get IsDamaged() {
    return IsVehicleDamaged(this.handle);
  }
  get IsDriveable() {
    return IsVehicleDriveable(this.handle, false);
  }
  set IsDriveable(value) {
    SetVehicleUndriveable(this.handle, !value);
  }
  get IsEngineOnFire() {
    return IsVehicleEngineOnFire(this.handle);
  }
  get HasRoof() {
    return DoesVehicleHaveRoof(this.handle);
  }
  get IsLeftHeadLightBroken() {
    return GetIsLeftVehicleHeadlightDamaged(this.handle);
  }
  get IsRightHeadLightBroken() {
    return GetIsRightVehicleHeadlightDamaged(this.handle);
  }
  get IsRearBumperBrokenOff() {
    return IsVehicleBumperBrokenOff(this.handle, false);
  }
  get IsFrontBumperBrokenOff() {
    return IsVehicleBumperBrokenOff(this.handle, true);
  }
  set IsAxlesStrong(value) {
    SetVehicleHasStrongAxles(this.handle, value);
  }
  set CanEngineDegrade(value) {
    SetVehicleEngineCanDegrade(this.handle, value);
  }
  set EnginePowerMultiplier(value) {
    SetVehicleEnginePowerMultiplier(this.handle, value);
  }
  set EngineTorqueMultiplier(value) {
    SetVehicleEngineTorqueMultiplier(this.handle, value);
  }
  get LandingGearState() {
    return GetLandingGearState(this.handle);
  }
  set LandingGearState(value) {
    SetVehicleLandingGear(this.handle, value);
  }
  get RoofState() {
    return GetConvertibleRoofState(this.handle);
  }
  set RoofState(value) {
    switch (value) {
      case VehicleRoofState.Closed:
        RaiseConvertibleRoof(this.handle, true);
        RaiseConvertibleRoof(this.handle, false);
        break;
      case VehicleRoofState.Closing:
        RaiseConvertibleRoof(this.handle, false);
        break;
      case VehicleRoofState.Opened:
        LowerConvertibleRoof(this.handle, true);
        LowerConvertibleRoof(this.handle, false);
        break;
      case VehicleRoofState.Opening:
        LowerConvertibleRoof(this.handle, false);
        break;
    }
  }
  get LockStatus() {
    return GetVehicleDoorLockStatus(this.handle);
  }
  set LockStatus(value) {
    SetVehicleDoorsLocked(this.handle, value);
  }
  get MaxBraking() {
    return GetVehicleMaxBraking(this.handle);
  }
  get MaxTraction() {
    return GetVehicleMaxTraction(this.handle);
  }
  get IsOnAllWheels() {
    return IsVehicleOnAllWheels(this.handle);
  }
  get IsStopped() {
    return IsVehicleStopped(this.handle);
  }
  get IsStoppedAtTrafficLights() {
    return IsVehicleStoppedAtTrafficLights(this.handle);
  }
  get IsStolen() {
    return IsVehicleStolen(this.handle);
  }
  set IsStolen(value) {
    SetVehicleIsStolen(this.handle, value);
  }
  get IsConvertible() {
    return IsVehicleAConvertible(this.handle, false);
  }
  set IsBurnoutForced(value) {
    SetVehicleBurnout(this.handle, value);
  }
  get IsInBurnout() {
    return IsVehicleInBurnout(this.handle);
  }
  get Driver() {
    return this.getPedOnSeat(VehicleSeat.Driver);
  }
  // while ghosted use entity index, it doesn't look like you can ghost
  // anything but players and vehicles
  get Ghosted() {
    return IsEntityGhostedToLocalPlayer(this.handle);
  }
  set GhostedForGhostPlayers(isGhostedForGhostPlayers) {
    NetworkSetEntityGhostedWithOwner(this.handle, isGhostedForGhostPlayers);
  }
  set Ghosted(isGhosted) {
    SetNetworkVehicleAsGhost(this.Handle, isGhosted);
  }
  static set GhostAlpha(alpha) {
    SetGhostedEntityAlpha(alpha);
  }
  get IsInGhostCollision() {
    return N_0x7ef7649b64d7ff10(this.handle);
  }
  static resetGhostAlpha() {
    ResetGhostedEntityAlpha();
  }
  get Occupants() {
    const driver = this.Driver;
    if (driver === null) {
      return this.Passengers;
    }
    return [driver, ...this.Passengers];
  }
  get Passengers() {
    const passengerCount = this.PassengerCount;
    if (passengerCount === 0) {
      return [];
    }
    const result = [];
    for (let i = 0; i < this.PassengerCapacity; i++) {
      if (!this.isSeatFree(i)) {
        result.push(this.getPedOnSeat(i));
        if (result.length === passengerCount) {
          break;
        }
      }
    }
    return result;
  }
  get Doors() {
    if (!this._doors) {
      this._doors = new VehicleDoorCollection(this);
    }
    return this._doors;
  }
  get Mods() {
    if (!this._mods) {
      this._mods = new VehicleModCollection(this);
    }
    return this._mods;
  }
  get Wheels() {
    if (!this._wheels) {
      this._wheels = new VehicleWheelCollection(this);
    }
    return this._wheels;
  }
  get Windows() {
    if (!this._windows) {
      this._windows = new VehicleWindowCollection(this);
    }
    return this._windows;
  }
  extraExists(extra) {
    return DoesExtraExist(this.handle, extra);
  }
  isExtraOn(extra) {
    return this.extraExists(extra) ? IsVehicleExtraTurnedOn(this.handle, extra) : false;
  }
  toggleExtra(extra, toggle) {
    if (this.extraExists(extra)) {
      SetVehicleExtra(this.handle, extra, !toggle);
    }
  }
  getPedOnSeat(seat) {
    return Ped.fromHandle(GetPedInVehicleSeat(this.handle, seat));
  }
  isSeatFree(seat) {
    return IsVehicleSeatFree(this.handle, seat);
  }
  wash() {
    this.DirtLevel = 0;
  }
  get DirtLevel() {
    return GetVehicleDirtLevel(this.handle);
  }
  set DirtLevel(value) {
    SetVehicleDirtLevel(this.handle, value);
  }
  placeOnGround() {
    SetVehicleOnGroundProperly(this.handle);
  }
  repair() {
    SetVehicleFixed(this.handle);
  }
  explode() {
    ExplodeVehicle(this.handle, true, false);
  }
  explodeNetworked() {
    NetworkExplodeVehicle(this.handle, true, false, false);
  }
  get CanTiresBurst() {
    return GetVehicleTyresCanBurst(this.handle);
  }
  set CanTiresBurst(value) {
    SetVehicleTyresCanBurst(this.handle, value);
  }
  set CanWheelsBreak(value) {
    SetVehicleWheelsCanBreak(this.handle, value);
  }
  set CanDeformWheels(value) {
    SetVehicleCanDeformWheels(this.handle, value);
  }
  get HasBombBay() {
    return this.Bones ? this.Bones.hasBone("door_hatch_1") && this.Bones.hasBone("door_hatch_r") : false;
  }
  openBombBay() {
    if (this.HasBombBay) {
      OpenBombBayDoors(this.handle);
    }
  }
  closeBombBay() {
    if (this.HasBombBay) {
      CloseBombBayDoors(this.handle);
    }
  }
  setHeliYawPitchRollMult(mult) {
    if (this.Model.IsHelicopter && mult >= 0 && mult <= 1) {
      SetHelicopterRollPitchYawMult(this.handle, mult);
    }
  }
  set TowingCraneRaisedAmount(value) {
    SetTowTruckCraneHeight(this.handle, value);
  }
  get TowedVehicle() {
    return new Vehicle(GetEntityAttachedToTowTruck(this.handle));
  }
  towVehicle(vehicle, rear) {
    AttachVehicleToTowTruck(this.handle, vehicle.Handle, rear, 0, 0, 0);
  }
  detachFromTowTruck() {
    DetachVehicleFromAnyTowTruck(this.handle);
  }
  detachTowedVehicle() {
    const vehicle = this.TowedVehicle;
    if (Vehicle.exists(this.TowedVehicle)) {
      DetachVehicleFromTowTruck(this.handle, vehicle.Handle);
    }
  }
  deform(position, damageAmount, radius) {
    SetVehicleDamage(this.handle, position.x, position.y, position.z, damageAmount, radius, false);
  }
  get PassengerCapacity() {
    return GetVehicleMaxNumberOfPassengers(this.handle);
  }
  get PassengerCount() {
    return GetVehicleNumberOfPassengers(this.handle);
  }
  set RespotTimer(time) {
    SetNetworkVehicleRespotTimer(this.NetworkId, time);
  }
  getHandlingFloat(fieldName) {
    return GetVehicleHandlingFloat(this.handle, "CHandlingData", fieldName);
  }
  setHandlingFloat(fieldName, value) {
    SetVehicleHandlingFloat(this.handle, "CHandlingData", fieldName, value);
  }
  getHandlingInt(fieldName) {
    return GetVehicleHandlingInt(this.handle, "CHandlingData", fieldName);
  }
  setHandlingInt(fieldName, value) {
    SetVehicleHandlingInt(this.handle, "CHandlingData", fieldName, Math.ceil(value));
  }
  getHandlingVector(fieldName) {
    return Vector3.fromArray(GetVehicleHandlingVector(this.handle, "CHandlingData", fieldName));
  }
  getEntityAttachedTo() {
    return GetEntityClassFromId(this.handle);
  }
}
export {
  Vehicle
};
