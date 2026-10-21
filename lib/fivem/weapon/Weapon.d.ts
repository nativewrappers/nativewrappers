import { WeaponHash, type AmmoType } from "../hashes/WeaponHash";
import { Model } from "../Model";
import type { Ped } from "../models/Ped";
import { WeaponComponentCollection } from "../weaponComponent/WeaponComponentCollection";
import type { WeaponComponentHash } from "../weaponComponent/WeaponComponentHash";
import type { WeaponGroup } from "./WeaponGroup";
import { WeaponHudStats } from "./WeaponHudStats";
import type { WeaponLivery } from "./WeaponLivery";
import type { WeaponLiveryColor } from "./WeaponLiveryColor";
import type { WeaponTint } from "./WeaponTint";
/**
 * ped weapon
 *
 */
export declare class Weapon {
    private readonly owner;
    private readonly components;
    private readonly hash;
    constructor(owner: Ped, hash: WeaponHash);
    /**
     * weapon components
     *
     * @constructor
     */
    get Components(): WeaponComponentCollection;
    /**
     * weapon hash
     *
     * @constructor
     */
    get Hash(): WeaponHash;
    /**
     * check ped is unarmed or not
     *
     * @constructor
     */
    get IsUnarmed(): boolean;
    /**
     * Check if the ped has the current weapon.
     *
     * @constructor
     */
    get IsPresent(): boolean;
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
    /**
     * get weapon model
     *
     * @constructor
     */
    get Model(): Model;
    /**
     * get weapon tint
     *
     * @constructor
     */
    get Tint(): WeaponTint;
    /**
     * set weapon tint
     *
     * @param tint
     * @constructor
     */
    set Tint(tint: WeaponTint);
    /**
     * get weapon group
     *
     * @constructor
     */
    get Group(): WeaponGroup;
    /**
     * get weapon ammo type
     *
     * @constructor
     */
    get AmmoType(): AmmoType;
    /**
     * get weapon ammo count
     *
     * @constructor
     */
    get Ammo(): number;
    /**
     * set weapon ammo count
     *
     * @param count
     * @constructor
     */
    set Ammo(count: number);
    /**
     * get weapon max ammo
     *
     * @constructor
     */
    get MaxAmmo(): number;
    /**
     * get weapon max ammo in clip
     *
     * @constructor
     */
    get MaxAmmoInClip(): number;
    /**
     * get weapon default clip size
     *
     * @constructor
     */
    get DefaultClipSize(): number;
    /**
     * toggle weapon infinite ammo
     *
     * @param toggle
     * @constructor
     */
    set InfiniteAmmo(toggle: boolean);
    /**
     * toggle ped infinite ammo clip on all weapons
     *
     * @param toggle
     * @constructor
     */
    set InfiniteAmmoClip(toggle: boolean);
    /**
     * check weapon can use on parachute
     *
     * @constructor
     */
    get CanUseOnParachute(): boolean;
    /**
     * Check weapon is Mk2 or not
     *
     * @constructor
     */
    get IsMk2(): boolean;
    /**
     * set weapon livery, only work for Mk2 weapon
     *
     * @param liveryId
     * @param colorId
     */
    setLivery(liveryId: WeaponLivery, colorId: WeaponLiveryColor): void;
    /**
     * get weapon hud stats
     *
     * @constructor
     */
    get HudStats(): WeaponHudStats | undefined;
    /**
     * get weapon display name / label by hash
     *
     * @param hash
     */
    static getDisplayNameFromHash(hash: WeaponHash): string;
    /**
     * get component hashes belongs to weapon
     *
     * @param hash
     */
    static getWeaponComponentHashes(hash: WeaponHash): WeaponComponentHash[];
}
