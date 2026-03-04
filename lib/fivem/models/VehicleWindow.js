var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
class VehicleWindow {
  static {
    __name(this, "VehicleWindow");
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
  get IsIntact() {
    return IsVehicleWindowIntact(this._owner.Handle, this.Index);
  }
  get Vehicle() {
    return this._owner;
  }
  repair() {
    FixVehicleWindow(this._owner.Handle, this.Index);
  }
  smash() {
    SmashVehicleWindow(this._owner.Handle, this.Index);
  }
  rollUp() {
    RollUpWindow(this._owner.Handle, this.Index);
  }
  rollDown() {
    RollDownWindow(this._owner.Handle, this.Index);
  }
  remove() {
    RemoveVehicleWindow(this._owner.Handle, this.Index);
  }
}
export {
  VehicleWindow
};
