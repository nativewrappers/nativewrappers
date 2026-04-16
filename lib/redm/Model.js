var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { Delay } from "./common/utils/Delay";
import { Vector3 } from "./common/utils/Vector";
class Model {
  static {
    __name(this, "Model");
  }
  /**
   * Hash of this model.
   */
  hash;
  requestCount = 0;
  /**
   * Returns the amount of times this model has been requested from the client, useful for finding situations where the client fails to release the ref
   */
  get RequestCount() {
    return this.requestCount;
  }
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
    if (this.requestCount > 0) {
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
    if (this.IsWeapon) {
      return Citizen.invokeNative("0xFF07CF465F48B830", this.hash);
    }
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
   * Gets if the model is a boat or not.
   *
   * @returns Whether this model is a boat.
   */
  get IsBoat() {
    return IsThisModelABoat(this.hash);
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
   * Gets if the model is a prop or not.
   *
   * @returns Whether this model is a prop.
   */
  get IsProp() {
    return this.IsValid && !this.IsPed && !this.IsVehicle && !this.IsWeapon;
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
  get IsWeapon() {
    return IsWeaponValid(this.hash);
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
  // TODO: Metaped stuff too at some point
  requestModel() {
    RequestModel(this.hash, false);
    this.requestCount++;
  }
  /**
   * Request and load the model with a specified timeout. Default timeout is 1000 (recommended).
   * This function will not automatically set the model as no longer needed when
   * done.
   *
   * @param timeoutMs Maximum allowed time for model to load.
   */
  async request(timeoutMs = 1e3) {
    if (!this.IsInCdImage && !this.IsValid && !this.IsWeapon) {
      return false;
    }
    if (this.IsLoaded) {
      return true;
    }
    this.requestModel();
    const timeout = GetGameTimer() + timeoutMs;
    while (!this.IsLoaded && GetGameTimer() < timeout) {
      await Delay(0);
    }
    if (!this.IsLoaded) {
      this.markAsNoLongerNeeded();
    }
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
