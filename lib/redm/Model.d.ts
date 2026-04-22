import type { Dimensions } from "./interfaces/Dimensions";
/**
 * Class to create and manage entity models.
 */
export declare class Model implements Disposable {
    /**
     * Hash of this model.
     */
    protected hash: number;
    protected requestCount: number;
    /**
     * Returns the amount of times this model has been requested from the client, useful for finding situations where the client fails to release the ref
     */
    get RequestCount(): number;
    /**
     * Creates a model object based on the hash key or model string.
     *
     * @param hash A number or string of the model's hash. Example: "mp_m_freemode_01"
     */
    constructor(hash: number | string);
    [Symbol.dispose](): void;
    /**
     * Gets the hash of the model.
     *
     * @returns The hash key.
     */
    get Hash(): number;
    /**
     * Gets if the model is valid or not.
     *
     * @returns Whether this model is valid.
     */
    get IsValid(): boolean;
    /**
     * Gets if the model is in cd image or not.
     *
     * @returns Whether this model is in cd image.
     */
    get IsInCdImage(): boolean;
    /**
     * Gets if the model is loaded or not.
     *
     * @returns Whether this model is loaded.
     */
    get IsLoaded(): boolean;
    /**
     * Gets if the model collision is loaded or not.
     *
     * @returns Whether this model collision is loaded.
     */
    get IsCollisionLoaded(): boolean;
    /**
     * Gets if the model is a boat or not.
     *
     * @returns Whether this model is a boat.
     */
    get IsBoat(): boolean;
    /**
     * Gets if the model is a Ped or not.
     *
     * @returns Whether this model is a Ped.
     */
    get IsPed(): boolean;
    /**
     * Gets if the model is a prop or not.
     *
     * @returns Whether this model is a prop.
     */
    get IsProp(): boolean;
    /**
     * Gets if the model is a train or not.
     *
     * @returns Whether this model is a train.
     */
    get IsTrain(): boolean;
    /**
     * Gets if the model is a Vehicle or not.
     *
     * @returns Whether this model is a Vehicle.
     */
    get IsVehicle(): boolean;
    get IsWeapon(): boolean;
    /**
     * Gets the model dimensions.
     *
     * @returns This model min & max dimensions.
     */
    get Dimensions(): Dimensions;
    requestModel(): void;
    /**
     * Request and load the model with a specified timeout. Default timeout is 1000 (recommended).
     * This function will not automatically set the model as no longer needed when
     * done.
     *
     * @param timeoutMs Maximum allowed time for model to load.
     */
    request(timeoutMs?: number): Promise<boolean>;
    /**
     * Sets the model as no longer needed allowing the game engine to free memory.
     */
    markAsNoLongerNeeded(): void;
}
