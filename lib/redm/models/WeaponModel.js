var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { Model } from "../Model";
class WeaponModel extends Model {
  static {
    __name(this, "WeaponModel");
  }
  requestModel() {
    Citizen.invokeNative("0x72D4CB5DB927009C", this.hash, 0, true);
    this.requestCount++;
  }
  markAsNoLongerNeeded() {
    Citizen.invokeNative("0xC3896D03E2852236", this.hash);
    this.requestCount--;
  }
  get DefaultAttachPoint() {
    return Citizen.invokeNative("0x65DC4AC5B96614CB", this.hash, Citizen.resultAsInteger());
  }
}
export {
  WeaponModel
};
