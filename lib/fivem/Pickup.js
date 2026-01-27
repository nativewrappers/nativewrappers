var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { Vector3 } from "./common/utils/Vector";
class Pickup {
  static {
    __name(this, "Pickup");
  }
  handle;
  constructor(handle) {
    this.handle = handle;
  }
  /**
   * @returns `true` if the current entity is networked, false otherwise
   */
  get IsNetworked() {
    return NetworkGetEntityIsNetworked(this.handle);
  }
  get Position() {
    return Vector3.fromArray(GetPickupCoords(this.handle));
  }
  get IsCollected() {
    return HasPickupBeenCollected(this.handle);
  }
  delete() {
    RemovePickup(this.handle);
  }
  exists() {
    return DoesPickupExist(this.handle);
  }
}
export {
  Pickup
};
