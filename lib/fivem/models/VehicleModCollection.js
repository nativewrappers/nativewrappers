var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { Color } from "../common/utils/Color";
import {
  VehicleModType,
  VehicleNeonLight
} from "../enums/Vehicle";
import { VehicleMod } from "./VehicleMod";
import { VehicleToggleMod } from "./VehicleToggleMod";
class VehicleModCollection {
  static {
    __name(this, "VehicleModCollection");
  }
  _owner;
  _vehicleMods = /* @__PURE__ */ new Map();
  _vehicleToggleMods = /* @__PURE__ */ new Map();
  constructor(owner) {
    this._owner = owner;
  }
  hasVehicleMod(type) {
    return GetNumVehicleMods(this._owner.Handle, type) > 0;
  }
  getMod(modType) {
    if (!this._vehicleMods.has(modType)) {
      this._vehicleMods.set(modType, new VehicleMod(this._owner, modType));
    }
    return this._vehicleMods.get(modType);
  }
  getToggleMod(modType) {
    if (!this._vehicleToggleMods.has(modType)) {
      this._vehicleToggleMods.set(modType, new VehicleToggleMod(this._owner, modType));
    }
    return this._vehicleToggleMods.get(modType);
  }
  getAllMods() {
    return Object.keys(VehicleModType).filter((key) => !isNaN(Number(key))).map((key) => {
      const index = Number(key);
      if (this.hasVehicleMod(index)) {
        return this.getMod(index);
      }
      return null;
    }).filter((m) => m);
  }
  get WheelType() {
    return GetVehicleWheelType(this._owner.Handle);
  }
  set WheelType(type) {
    SetVehicleWheelType(this._owner.Handle, type);
  }
  installModKit() {
    SetVehicleModKit(this._owner.Handle, 0);
  }
  // TODO: This should return always return a  number
  get Livery() {
    const modCount = this.getMod(VehicleModType.Livery)?.ModCount;
    if (modCount !== void 0 && modCount > 0) {
      return this.getMod(VehicleModType.Livery)?.Index;
    }
    return GetVehicleLivery(this._owner.Handle);
  }
  set Livery(value) {
    const mod = this.getMod(VehicleModType.Livery);
    if (mod !== void 0 && mod.ModCount > 0) {
      mod.Index = value;
    } else {
      SetVehicleLivery(this._owner.Handle, value);
    }
  }
  get LiveryCount() {
    const modCount = this.getMod(VehicleModType.Livery)?.ModCount;
    if (modCount !== void 0 && modCount > 0) {
      return modCount;
    }
    return GetVehicleLiveryCount(this._owner.Handle);
  }
  get WindowTint() {
    return GetVehicleWindowTint(this._owner.Handle);
  }
  set WindowTint(tint) {
    SetVehicleWindowTint(this._owner.Handle, tint);
  }
  get PrimaryColor() {
    return GetVehicleColours(this._owner.Handle)[0];
  }
  set PrimaryColor(color) {
    SetVehicleColours(this._owner.Handle, color, this.SecondaryColor);
  }
  get SecondaryColor() {
    return GetVehicleColours(this._owner.Handle)[1];
  }
  set SecondaryColor(color) {
    SetVehicleColours(this._owner.Handle, this.PrimaryColor, color);
  }
  get RimColor() {
    return GetVehicleExtraColours(this._owner.Handle)[1];
  }
  set RimColor(color) {
    SetVehicleExtraColours(this._owner.Handle, this.PearlescentColor, color);
  }
  get PearlescentColor() {
    return GetVehicleExtraColours(this._owner.Handle)[0];
  }
  set PearlescentColor(color) {
    SetVehicleExtraColours(this._owner.Handle, color, this.RimColor);
  }
  set TrimColor(color) {
    SetVehicleInteriorColour(this._owner.Handle, color);
  }
  set DashboardColor(color) {
    SetVehicleDashboardColour(this._owner.Handle, color);
  }
  setModColor1(paintType, color) {
    SetVehicleModColor_1(this._owner.Handle, paintType, color, 0);
  }
  setModColor2(paintType, color) {
    SetVehicleModColor_2(this._owner.Handle, paintType, color);
  }
  get ColorCombination() {
    return GetVehicleColourCombination(this._owner.Handle);
  }
  set ColorCombination(value) {
    SetVehicleColourCombination(this._owner.Handle, value);
  }
  get ColorCombinationCount() {
    return GetNumberOfVehicleColours(this._owner.Handle);
  }
  get TireSmokeColor() {
    const color = GetVehicleTyreSmokeColor(this._owner.Handle);
    return Color.fromRgb(color[0], color[1], color[2]);
  }
  set TireSmokeColor(color) {
    SetVehicleTyreSmokeColor(this._owner.Handle, color.r, color.g, color.b);
  }
  get NeonLightsColor() {
    const color = GetVehicleNeonLightsColour(this._owner.Handle);
    return Color.fromRgb(color[0], color[1], color[2]);
  }
  set NeonLightsColor(color) {
    SetVehicleNeonLightsColour(this._owner.Handle, color.r, color.g, color.b);
  }
  isNeonLightsOn(light) {
    return IsVehicleNeonLightEnabled(this._owner.Handle, light);
  }
  setNeonLightsOn(light, on) {
    SetVehicleNeonLightEnabled(this._owner.Handle, light, on);
  }
  areAllNeonLightsOn() {
    if (!this.HasAllNeonLights) {
      return false;
    }
    let on = true;
    Object.keys(VehicleNeonLight).filter((key) => !isNaN(Number(key))).forEach((key) => {
      if (!on) {
        return;
      }
      on = this.isNeonLightsOn(Number(key));
    });
    return on;
  }
  setAllNeonLightsOn(on) {
    Object.keys(VehicleNeonLight).filter((key) => !isNaN(Number(key))).forEach((key) => {
      this.setNeonLightsOn(Number(key), on);
    });
  }
  get HasAllNeonLights() {
    return Object.keys(VehicleNeonLight).filter((key) => !isNaN(Number(key))).findIndex((light) => !this.hasNeonLight(Number(light))) === -1;
  }
  hasNeonLight(light) {
    if (this._owner.Bones === void 0) return false;
    switch (light) {
      case VehicleNeonLight.Left:
        return this._owner.Bones.hasBone("neon_l");
      case VehicleNeonLight.Right:
        return this._owner.Bones.hasBone("neon_r");
      case VehicleNeonLight.Front:
        return this._owner.Bones.hasBone("neon_f");
      case VehicleNeonLight.Back:
        return this._owner.Bones.hasBone("neon_b");
      default:
        return false;
    }
  }
  get CustomPrimaryColor() {
    const color = GetVehicleCustomPrimaryColour(this._owner.Handle);
    return Color.fromRgb(color[0], color[1], color[2]);
  }
  set CustomPrimaryColor(color) {
    SetVehicleCustomPrimaryColour(this._owner.Handle, color.r, color.g, color.b);
  }
  get CustomSecondaryColor() {
    const color = GetVehicleCustomSecondaryColour(this._owner.Handle);
    return Color.fromRgb(color[0], color[1], color[2]);
  }
  set CustomSecondaryColor(color) {
    SetVehicleCustomSecondaryColour(this._owner.Handle, color.r, color.g, color.b);
  }
  get IsPrimaryColorCustom() {
    return GetIsVehiclePrimaryColourCustom(this._owner.Handle);
  }
  get IsSecondaryColorCustom() {
    return GetIsVehicleSecondaryColourCustom(this._owner.Handle);
  }
  clearCustomPrimaryColor() {
    ClearVehicleCustomPrimaryColour(this._owner.Handle);
  }
  clearCustomSecondaryColor() {
    ClearVehicleCustomSecondaryColour(this._owner.Handle);
  }
  get LicensePlateStyle() {
    return GetVehicleNumberPlateTextIndex(this._owner.Handle);
  }
  set LicensePlateStyle(style) {
    SetVehicleNumberPlateTextIndex(this._owner.Handle, style);
  }
  get LicensePlateType() {
    return GetVehiclePlateType(this._owner.Handle);
  }
  get LicensePlate() {
    return GetVehicleNumberPlateText(this._owner.Handle);
  }
  set LicensePlate(text) {
    SetVehicleNumberPlateText(this._owner.Handle, text);
  }
}
export {
  VehicleModCollection
};
