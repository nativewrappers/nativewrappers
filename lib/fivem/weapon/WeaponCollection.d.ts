import type { WeaponHash } from "../hashes/WeaponHash";
import type { Ped } from "../models/Ped";
import { Prop } from "../models/Prop";
import { Weapon } from "./Weapon";
/**
 * ped weapons
 *
 */
export declare class WeaponCollection implements Iterable<Weapon> {
    private readonly owner;
    private readonly weapons;
    constructor(owner: Ped);
    [Symbol.iterator](): Iterator<Weapon>;
    /**
     * get weapon by hash
     *
     * @param hash
     */
    get(hash: WeaponHash): Weapon | null;
    /**
     * get ped current weapon
     *
     * @constructor
     */
    get Current(): Weapon;
    /**
     * get ped current weapon object
     *
     * @constructor
     */
    get CurrentWeaponObject(): Prop | null;
    /**
     * get ped best weapon
     *
     * @constructor
     */
    get BestWeapon(): Weapon;
    /**
     * check ped has weapon
     *
     * @param hash
     */
    hasWeapon(hash: WeaponHash): boolean;
    /**
     * check weapon is valid
     *
     * @param hash
     */
    isWeaponValid(hash: WeaponHash): boolean;
    /**
     * give weapon to ped
     *
     * @param hash
     * @param ammoCount
     * @param equipNow
     * @param isAmmoLoaded
     */
    give(hash: WeaponHash, ammoCount: number, equipNow: boolean, isAmmoLoaded: boolean): Weapon;
    /**
     * set ped current weapon on hand
     *
     * @param weapon
     */
    select(weapon: Weapon | WeaponHash): boolean;
    /**
     * remove weapon from ped
     *
     * @param weapon
     */
    remove(weapon: Weapon | WeaponHash): void;
    /**
     * remove all weapons from ped
     *
     */
    removeAll(): void;
    /**
     * Drop ped current weapon?
     * todo: this native seems does not work as expected, need to investigate
     * refer1: https://docs.fivem.net/natives/?_0x6B7513D9966FBEC0
     * refer2: https://forum.cfx.re/t/release-weapondrop/49856/8
     *
     */
    drop(): void;
    /**
     * create weapon object and add to collection
     *
     * @param hash
     * @private
     */
    private createAndAddWeapon;
}
