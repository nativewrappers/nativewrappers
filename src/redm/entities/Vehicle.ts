import type { VehicleSeat } from "redm/enums/VehicleSeat";
import { _N } from "redm/utils/Native";
import { BaseEntity } from "./BaseEntity";

export class Vehicle extends BaseEntity {
  constructor(handle: number) {
    super(handle);
  }

  /**
   * Gets the entity from the handle given, if the entity doesn't exist it will return
   * null.
   */
  static fromHandle(handle: number): Vehicle | null {
    if (handle === 0 || !DoesEntityExist(handle)) {
      return null;
    }
    return new Vehicle(handle);
  }

  /**
   * Gets the ped from the current network id, this doesn't check that
   * the entity is actually a ped
   */
  static fromNetworkId(netId: number): Vehicle | null {
    if (netId === 0 || !NetworkDoesEntityExistWithNetworkId(netId)) {
      return null;
    }
    return new Vehicle(NetToPed(netId));
  }

  static fromStateBagName(bagName: string): Vehicle | null {
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
  isSeatFree(seatIndex: VehicleSeat): boolean {
    return _N<boolean>("0xAAB0FE202E9FC9F0", this.Handle, seatIndex, Citizen.resultAsInteger());
  }
}
