var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
class VehicleWheel {
  static {
    __name(this, "VehicleWheel");
  }
  _owner;
  _index;
  constructor(owner, index) {
    this._owner = owner;
    this._index = index;
  }
  get Index() {
    return this._index;
  }
  set Index(index) {
    this._index = index;
  }
  get Vehicle() {
    return this._owner;
  }
  burst() {
    SetVehicleTyreBurst(this._owner.Handle, this.Index, true, 1e3);
  }
  fix() {
    SetVehicleTyreFixed(this._owner.Handle, this.Index);
  }
}
export {
  VehicleWheel
};
