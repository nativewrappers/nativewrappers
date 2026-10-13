var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { ClassTypes } from "../common/utils/ClassTypes";
import { BaseEntity } from "./BaseEntity";
import { Vehicle } from "./Vehicle";
class Ped extends BaseEntity {
  static {
    __name(this, "Ped");
  }
  type = ClassTypes.Ped;
  constructor(handle) {
    super(handle);
  }
  /**
   * Get an interable list of peds currently on the server
   * @returns Iterable list of Peds.
   */
  static *AllPeds() {
    for (const pedId of GetAllPeds()) {
      yield new Ped(pedId);
    }
  }
  static fromNetworkId(netId) {
    const ent = NetworkGetEntityFromNetworkId(netId);
    if (ent === 0) return null;
    return new Ped(ent);
  }
  static fromStateBagName(stateBagName) {
    const handle = GetEntityFromStateBagName(stateBagName);
    if (handle === 0) return null;
    return new Ped(handle);
  }
  static fromSource(source) {
    return new Ped(GetPlayerPed(source));
  }
  get Armour() {
    return GetPedArmour(this.handle);
  }
  get CauseOfDeath() {
    return GetPedCauseOfDeath(this.handle);
  }
  get DesiredHeading() {
    return GetPedDesiredHeading(this.handle);
  }
  get MaxHealth() {
    return GetPedMaxHealth(this.handle);
  }
  get TaskCommand() {
    return GetPedScriptTaskCommand(this.handle);
  }
  get TaskStage() {
    return GetPedScriptTaskStage(this.handle);
  }
  get LastSourceOfDamage() {
    return GetPedSourceOfDamage(this.handle);
  }
  get DeathCause() {
    return GetPedCauseOfDeath(this.handle);
  }
  get Weapon() {
    return GetSelectedPedWeapon(this.handle);
  }
  /**
   * @returns the current vehicle the ped is in, or null if it doesn't exist
   */
  get CurrentVehicle() {
    const vehicle = GetVehiclePedIsIn(this.handle, false);
    if (vehicle === 0) return null;
    return new Vehicle(vehicle);
  }
  get LastVehicle() {
    const vehicle = GetVehiclePedIsIn(this.handle, false);
    if (vehicle === 0) return null;
    return new Vehicle(GetVehiclePedIsIn(this.handle, true));
  }
  get IsPlayer() {
    return IsPedAPlayer(this.handle);
  }
  getSpecificTaskType(index) {
    return GetPedSpecificTaskType(this.handle, index);
  }
}
export {
  Ped
};
