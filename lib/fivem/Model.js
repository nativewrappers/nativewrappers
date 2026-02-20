var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { Delay } from "./common/utils/Delay";
import { Vector3 } from "./common/utils/Vector";
import { VehicleHash } from "./hashes/VehicleHash";
class Model {
  static {
    __name(this, "Model");
  }
  /**
   * Hash of this model.
   */
  hash;
  requestedModel = false;
  /**
   * Creates a model object based on the hash key or model string.
   *
   * @param hash A number or string of the model's hash. Example: "mp_m_freemode_01"
   */
  constructor(hash) {
    if (typeof hash === "string") {
      this.hash = GetHashKey(hash);
    } else {
      this.hash = hash;
    }
  }
  [Symbol.dispose]() {
    if (this.requestedModel) {
      this.markAsNoLongerNeeded();
    }
  }
  /**
   * Gets the hash of the model.
   *
   * @returns The hash key.
   */
  get Hash() {
    return this.hash;
  }
  /**
   * Gets if the model is valid or not.
   *
   * @returns Whether this model is valid.
   */
  get IsValid() {
    return IsModelValid(this.hash);
  }
  /**
   * Gets if the model is in cd image or not.
   *
   * @returns Whether this model is in cd image.
   */
  get IsInCdImage() {
    return IsModelInCdimage(this.hash);
  }
  /**
   * Gets if the model is loaded or not.
   *
   * @returns Whether this model is loaded.
   */
  get IsLoaded() {
    return HasModelLoaded(this.hash);
  }
  /**
   * Gets if the model collision is loaded or not.
   *
   * @returns Whether this model collision is loaded.
   */
  get IsCollisionLoaded() {
    return HasCollisionForModelLoaded(this.hash);
  }
  /**
   * Gets if the model is a bicycle or not.
   *
   * @returns Whether this model is a bicycle.
   */
  get IsBicycle() {
    return IsThisModelABicycle(this.hash);
  }
  /**
   * Gets if the model is a motorbike or not.
   *
   * @returns Whether this model is a motorbike.
   */
  get IsBike() {
    return IsThisModelABike(this.hash);
  }
  /**
   * Gets if the model is a boat or not.
   *
   * @returns Whether this model is a boat.
   */
  get IsBoat() {
    return IsThisModelABoat(this.hash);
  }
  /**
   * Gets if the model is a car or not.
   *
   * @returns Whether this model is a car.
   */
  get IsCar() {
    return IsThisModelACar(this.hash);
  }
  /**
   * Gets if the model is a cargobob or not.
   *
   * @returns Whether this model is a cargobob.
   */
  get IsCargobob() {
    return this.hash === VehicleHash.Cargobob || this.hash === VehicleHash.Cargobob2 || this.hash === VehicleHash.Cargobob3 || this.hash === VehicleHash.Cargobob4;
  }
  /**
   * Gets if the model is a helicopter or not.
   *
   * @returns Whether this model is a helicopter.
   */
  get IsHelicopter() {
    return IsThisModelAHeli(this.hash);
  }
  /**
   * Gets if the model is a Ped or not.
   *
   * @returns Whether this model is a Ped.
   */
  get IsPed() {
    return IsModelAPed(this.hash);
  }
  /**
   * Gets if the model is a plane or not.
   *
   * @returns Whether this model is a plane.
   */
  get IsPlane() {
    return IsThisModelAPlane(this.hash);
  }
  /**
   * Gets if the model is a prop or not.
   *
   * @returns Whether this model is a prop.
   */
  get IsProp() {
    return this.IsValid && !this.IsPed && !this.IsVehicle && !IsWeaponValid(this.hash);
  }
  /**
   * Gets if the model is a quadbike or not.
   *
   * @returns Whether this model is a quadbike.
   */
  get IsQuadbike() {
    return IsThisModelAQuadbike(this.hash);
  }
  /**
   * Gets if the model is a train or not.
   *
   * @returns Whether this model is a train.
   */
  get IsTrain() {
    return IsThisModelATrain(this.hash);
  }
  /**
   * Gets if the model is a Vehicle or not.
   *
   * @returns Whether this model is a Vehicle.
   */
  get IsVehicle() {
    return IsModelAVehicle(this.hash);
  }
  /**
   * Gets the model dimensions.
   *
   * @returns This model min & max dimensions.
   */
  get Dimensions() {
    const [minArray, maxArray] = GetModelDimensions(this.hash);
    const min = Vector3.fromArray(minArray);
    const max = Vector3.fromArray(maxArray);
    return { min, max };
  }
  /**
   * Request and load the model with a specified timeout. Default timeout is 1000 (recommended).
   * This function will not automatically set the model as no longer needed when
   * done.
   *
   * @param timeoutMs Maximum allowed time for model to load.
   */
  async request(timeoutMs = 1e3) {
    if (!this.IsInCdImage && !this.IsValid && !IsWeaponValid(this.hash)) {
      return false;
    }
    if (this.IsLoaded) {
      return true;
    }
    RequestModel(this.hash);
    const timeout = GetGameTimer() + timeoutMs;
    while (!this.IsLoaded && GetGameTimer() < timeout) {
      await Delay(0);
    }
    this.requestedModel = true;
    return this.IsLoaded;
  }
  /**
   * Sets the model as no longer needed allowing the game engine to free memory.
   */
  markAsNoLongerNeeded() {
    SetModelAsNoLongerNeeded(this.hash);
  }
}
export {
  Model
};
