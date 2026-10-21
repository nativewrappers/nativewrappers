import type { WeaponComponentHash } from "./WeaponComponentHash";
import { WeaponComponent } from "./WeaponComponent";
import type { Ped } from "../models/Ped";
import type { Weapon } from "../weapon/Weapon";
/**
 * ped weapon components on weapon
 *
 */
export declare class WeaponComponentCollection implements Iterable<WeaponComponent> {
    private readonly owner;
    private readonly weapon;
    private readonly components;
    private readonly invalidComponent;
    constructor(owner: Ped, weapon: Weapon);
    [Symbol.iterator](): Iterator<WeaponComponent>;
    /**
     * get component
     *
     * @param componentHash
     */
    get(componentHash: WeaponComponentHash): WeaponComponent;
    /**
     * get current weapon component count
     *
     * @constructor
     */
    get Count(): number;
    /**
     * get clip component
     *
     * @param index - index of component
     */
    getClipComponent(index: number): WeaponComponent;
    /**
     * get clip variation count
     *
     * @constructor
     */
    get ClipVariationsCount(): number;
    /**
     * get scope component
     *
     * @param index - index of component
     */
    getScopeComponent(index: number): WeaponComponent;
    /**
     * get scope variation count
     *
     * @constructor
     */
    get ScopeVariationsCount(): number;
    /**
     * get suppressor component
     *
     */
    getSuppressorComponent(): WeaponComponent;
    /**
     * get flash light component
     *
     */
    getFlashLightComponent(): WeaponComponent;
    /**
     * get luxury finish component
     *
     */
    getLuxuryFinishComponent(): WeaponComponent;
    /**
     * get Mk2 camo component
     *
     * @param index - index of component
     */
    getMk2CamoComponent(index: number): WeaponComponent;
    /**
     * get Mk2 barrel component
     *
     * @param index - index of component
     */
    getMk2BarrelComponent(index: number): WeaponComponent;
    /**
     * Create component object and add to collection
     *
     * @param hash
     * @private
     */
    private createAndAddComponent;
    /**
     * get all WeaponComponentHash belongs to weapon
     *
     * @constructor
     * @private
     */
    private get AllWeaponComponentHashes();
    /**
     * get components belongs to attachmentPoints
     *
     * @param attachmentPoints
     * @private
     */
    private getComponentHashesByAttachmentPoints;
    /**
     * get component by index and attachmentPoints
     *
     * @param index - component index
     * @param attachmentPoints -  attachmentPoints to search
     * @private
     */
    private getAnyComponentByAttachmentPoints;
}
