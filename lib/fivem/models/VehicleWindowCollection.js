var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { VehicleWindowIndex } from "../enums/Vehicle";
import { VehicleWindow } from "./VehicleWindow";
class VehicleWindowCollection {
  static {
    __name(this, "VehicleWindowCollection");
  }
  _owner;
  _vehicleWindows = /* @__PURE__ */ new Map();
  constructor(owner) {
    this._owner = owner;
  }
  getWindow(index) {
    const window = this._vehicleWindows.get(index);
    if (!window) {
      const vehicleWindow = new VehicleWindow(this._owner, index);
      this._vehicleWindows.set(index, vehicleWindow);
      return vehicleWindow;
    }
    return window;
  }
  getAllWindows() {
    return Object.keys(VehicleWindowIndex).filter((key) => !isNaN(Number(key))).map((key) => {
      const index = Number(key);
      if (this.hasWindow(index)) {
        return this.getWindow(index);
      }
      return null;
    }).filter((w) => w);
  }
  get AreAllWindowsIntact() {
    return AreAllVehicleWindowsIntact(this._owner.Handle);
  }
  rollDownAllWindows() {
    this.getAllWindows().forEach((window) => {
      window?.rollDown();
    });
  }
  rollUpAllWindows() {
    this.getAllWindows().forEach((window) => {
      window?.rollUp();
    });
  }
  hasWindow(window) {
    switch (window) {
      case VehicleWindowIndex.FrontLeftWindow:
        return this._owner.Bones.hasBone("window_lf");
      case VehicleWindowIndex.FrontRightWindow:
        return this._owner.Bones.hasBone("window_rf");
      case VehicleWindowIndex.BackLeftWindow:
        return this._owner.Bones.hasBone("window_lr");
      case VehicleWindowIndex.BackRightWindow:
        return this._owner.Bones.hasBone("window_rr");
      default:
        return false;
    }
  }
}
export {
  VehicleWindowCollection
};
