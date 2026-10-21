import type { WeaponHash } from "../hashes/WeaponHash";
/**
 * weapon asset
 *
 */
export declare class WeaponAsset {
    private readonly hash;
    constructor(hash: WeaponHash);
    /**
     * get weapon hash
     *
     * @constructor
     */
    get Hash(): WeaponHash;
    /**
     * check weapon is valid
     *
     * @constructor
     */
    get IsValid(): boolean;
    /**
     * check weapon assets is loaded
     *
     * @constructor
     */
    get IsLoaded(): boolean;
    /**
     * request weapon asset
     *
     */
    request(): void;
    /**
     * request weapon asset async
     *
     * @param timeout
     */
    requestAsync(timeout: number): Promise<boolean>;
    /**
     * unload weapon asset
     *
     */
    dismiss(): void;
    /**
     * get weapon display name / label
     *
     * @constructor
     */
    get DisplayName(): string;
    /**
     * get weapon localized name
     *
     * @constructor
     */
    get LocalizedName(): string;
}
