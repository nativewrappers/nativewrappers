import { Delay } from "@common/utils/Delay";
import { Vector3 } from "@common/utils/Vector";
import type { Dimensions } from "./interfaces/Dimension";

/*
 * Class to create and manage entity models.
 */
export class CommonModel implements Disposable {
  /**
   * Hash of this model.
   */
  protected hash: number;
  protected requestCount = 0;

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
  constructor(hash: number | string) {
    if (typeof hash === "string") {
      this.hash = GetHashKey(hash);
    } else {
      this.hash = hash;
    }
  }

  [Symbol.dispose](): void {
    if (this.requestCount > 0) {
      this.markAsNoLongerNeeded();
    }
  }

  /**
   * Gets the hash of the model.
   *
   * @returns The hash key.
   */
  public get Hash(): number {
    return this.hash;
  }

  /**
   * Gets if the model is valid or not.
   *
   * @returns Whether this model is valid.
   */
  public get IsValid(): boolean {
    return IsModelValid(this.hash);
  }

  /**
   * Gets if the model is in cd image or not.
   *
   * @returns Whether this model is in cd image.
   */
  public get IsInCdImage(): boolean {
    return IsModelInCdimage(this.hash);
  }

  /**
   * Gets if the model is loaded or not.
   *
   * @returns Whether this model is loaded.
   */
  public get IsLoaded(): boolean {
    if (this.IsWeapon) {
      // _HAS_WEAPON_ASSET_LOADED
      return Citizen.invokeNative("0xFF07CF465F48B830", this.hash);
    }
    return HasModelLoaded(this.hash);
  }

  /**
   * Gets if the model collision is loaded or not.
   *
   * @returns Whether this model collision is loaded.
   */
  public get IsCollisionLoaded(): boolean {
    return HasCollisionForModelLoaded(this.hash);
  }

  /**
   * Gets if the model is a boat or not.
   *
   * @returns Whether this model is a boat.
   */
  public get IsBoat(): boolean {
    return IsThisModelABoat(this.hash);
  }

  /**
   * Gets if the model is a Ped or not.
   *
   * @returns Whether this model is a Ped.
   */
  public get IsPed(): boolean {
    return IsModelAPed(this.hash);
  }

  /**
   * Gets if the model is a prop or not.
   *
   * @returns Whether this model is a prop.
   */
  public get IsProp(): boolean {
    return this.IsValid && !this.IsPed && !this.IsVehicle && !this.IsWeapon;
  }

  /**
   * Gets if the model is a train or not.
   *
   * @returns Whether this model is a train.
   */
  public get IsTrain(): boolean {
    return IsThisModelATrain(this.hash);
  }

  /**
   * Gets if the model is a Vehicle or not.
   *
   * @returns Whether this model is a Vehicle.
   */
  public get IsVehicle(): boolean {
    return IsModelAVehicle(this.hash);
  }

  public get IsWeapon(): boolean {
    return IsWeaponValid(this.hash);
  }

  /**
   * Gets the model dimensions.
   *
   * @returns This model min & max dimensions.
   */
  public get Dimensions(): Dimensions {
    const [minArray, maxArray] = GetModelDimensions(this.hash);
    const min = Vector3.fromArray(minArray);
    const max = Vector3.fromArray(maxArray);
    return { min, max };
  }

  // TODO: Metaped stuff too at some point
  public requestModel() {
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
  public async request(timeoutMs = 1000): Promise<boolean> {
    if (!this.IsInCdImage && !this.IsValid && !this.IsWeapon) {
      return false;
    }

    // pre-check so if its already loaded we don't add another ref
    if (this.IsLoaded) {
      return true;
    }

    this.requestModel();

    const timeout = GetGameTimer() + timeoutMs;
    while (!this.IsLoaded && GetGameTimer() < timeout) {
      await Delay(0);
    }

    // if we didn't load then remove the request, should correct our ref count too
    if (!this.IsLoaded) {
      this.markAsNoLongerNeeded();
    }

    return this.IsLoaded;
  }

  /**
   * Sets the model as no longer needed allowing the game engine to free memory.
   */
  public markAsNoLongerNeeded(): void {
    SetModelAsNoLongerNeeded(this.hash);
  }
}
