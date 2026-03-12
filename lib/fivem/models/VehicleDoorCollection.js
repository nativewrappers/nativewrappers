var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { VehicleDoorIndex } from "../enums/Vehicle";
import { VehicleDoor } from "./VehicleDoor";
class VehicleDoorCollection {
  static {
    __name(this, "VehicleDoorCollection");
  }
  _owner;
  _vehicleDoors = /* @__PURE__ */ new Map();
  constructor(owner) {
    this._owner = owner;
  }
  getDoors(index) {
    if (!this._vehicleDoors.has(index)) {
      this._vehicleDoors.set(index, new VehicleDoor(this._owner, index));
    }
    return this._vehicleDoors.get(index);
  }
  getAllDoors() {
    return Object.keys(VehicleDoorIndex).filter((key) => !isNaN(Number(key))).map((key) => {
      const index = Number(key);
      if (this.hasDoor(index)) {
        return this.getDoors(index);
      }
      return null;
    }).filter((d) => d);
  }
  openAllDoors(loose, instantly) {
    this.getAllDoors().forEach((door) => {
      door?.open(loose, instantly);
    });
  }
  closeAllDoors(instantly) {
    this.getAllDoors().forEach((door) => {
      door?.close(instantly);
    });
  }
  breakAllDoors(stayInTheWorld) {
    this.getAllDoors().forEach((door) => {
      door?.break(stayInTheWorld);
    });
  }
  hasDoor(index) {
    if (this._owner.Bones === void 0) return false;
    switch (index) {
      case VehicleDoorIndex.FrontLeftDoor:
        return this._owner.Bones.hasBone("door_dside_f");
      case VehicleDoorIndex.FrontRightDoor:
        return this._owner.Bones.hasBone("door_pside_f");
      case VehicleDoorIndex.BackLeftDoor:
        return this._owner.Bones.hasBone("door_dside_r");
      case VehicleDoorIndex.BackRightDoor:
        return this._owner.Bones.hasBone("door_pside_r");
      case VehicleDoorIndex.Hood:
        return this._owner.Bones.hasBone("bonnet");
      case VehicleDoorIndex.Trunk:
        return this._owner.Bones.hasBone("boot");
      default:
        return false;
    }
  }
}
export {
  VehicleDoorCollection
};
