import { ComponentAttachmentPoint } from "./ComponentAttachmentPoint";
import { WeaponComponentHudStats } from "./WeaponComponentHudStats";
import type { WeaponHash } from "../hashes/WeaponHash";
import type { Ped } from "../models/Ped";
import type { Weapon } from "../weapon/Weapon";
import { WeaponComponentHash } from "./WeaponComponentHash";
/**
 * ped weapon component on weapon
 *
 */
export declare class WeaponComponent {
    protected readonly owner: Ped;
    protected readonly weapon: Weapon;
    protected readonly componentHash: WeaponComponentHash;
    constructor(owner: Ped, weapon: Weapon, componentHash: WeaponComponentHash);
    /**
     * Check WeaponComponent is invalid or not
     *
     * @constructor
     */
    get IsInvalid(): boolean;
    /**
     * get component hash
     *
     * @constructor
     */
    get ComponentHash(): WeaponComponentHash;
    /**
     * check ped has weapon component
     *
     * @constructor
     */
    get Active(): boolean;
    /**
     * give weapon component to ped
     *
     * @param value
     * @constructor
     */
    set Active(value: boolean);
    /**
     * get component display name / label
     *
     * @constructor
     */
    get DisplayName(): string;
    /**
     * get component localized name
     *
     * @constructor
     */
    get LocalizedName(): string;
    /**
     * get component attachment point
     *
     * @constructor
     */
    get AttachmentPoint(): ComponentAttachmentPoint;
    /**
     * get component hud stats
     *
     * @constructor
     */
    get HudStats(): WeaponComponentHudStats;
    /**
     * get component display name / label by hash
     *
     * @param hash
     * @param componentHash
     * @constructor
     */
    static getComponentDisplayNameFromHash(hash: WeaponHash, componentHash: WeaponComponentHash): string;
    /**
     * get component attachment point by WeaponHash and WeaponComponentHash
     *
     * @param weaponHash
     * @param componentHash
     * @constructor
     */
    static getAttachmentPoint(weaponHash: WeaponHash, componentHash: WeaponComponentHash): ComponentAttachmentPoint;
}
