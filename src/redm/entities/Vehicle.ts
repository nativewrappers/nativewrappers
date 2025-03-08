import type { VehicleSeat } from "redm/enums/VehicleSeat";
import { _N } from "redm/utils/Native";
import { BaseEntity } from "./BaseEntity";

export class Vehicle extends BaseEntity {
  constructor(handle: number) {
    super(handle);
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
