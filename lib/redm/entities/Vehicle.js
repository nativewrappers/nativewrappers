var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { _N } from "../utils/Native";
import { BaseEntity } from "./BaseEntity";
import { ClassTypes } from "../common/utils/ClassTypes";
import { CommonEntityBoneCollection } from "../common-game/entities/CommonEntityBoneCollection";
import { CommonVehicle } from "../common-game/entities/CommonVehicle";
class Vehicle extends CommonVehicle {
  static {
    __name(this, "Vehicle");
  }
  type = ClassTypes.Vehicle;
  constructor(handle) {
    super(handle);
  }
  /**
   * Gets the entity from the handle given, if the entity doesn't exist it will return
   * null.
   */
  static fromHandle(handle) {
    if (handle === 0 || !DoesEntityExist(handle)) {
      return null;
    }
    return new Vehicle(handle);
  }
  /**
   * Gets the ped from the current network id, this doesn't check that
   * the entity is actually a ped
   */
  static fromNetworkId(netId) {
    if (netId === 0 || !NetworkDoesEntityExistWithNetworkId(netId)) {
      return null;
    }
    return new Vehicle(NetToPed(netId));
  }
  static fromStateBagName(bagName) {
    const ent = GetEntityFromStateBagName(bagName);
    if (ent === 0) {
      return null;
    }
    return new Vehicle(ent);
  }
  /**
   *
   * @param seatIndex the seat index to check
   * @returns true of the specified seat is free on the mount
   */
  isSeatFree(seatIndex) {
    return _N("0xAAB0FE202E9FC9F0", this.Handle, seatIndex, Citizen.resultAsInteger());
  }
}
export {
  Vehicle
};
