import type { eAttributeCore, ePedAttribute, eHudStatusEffect } from "./enums/Attributes";
import type { Ped } from "./entities/Ped";
export declare class CoreAttribute {
    private handle;
    private attribute;
    constructor(ped: Ped, attribute: eAttributeCore);
    /**
     * This doesn't seem to actually do anything
     * @todo maybe remove unless theres a valid use case
     * @param amount
     * @param makeSound
     */
    enableOverpower(amount: number, makeSound?: boolean): void;
    get Overpowered(): boolean;
    /**
     * @returns the amount of overpower time left in seconds
     */
    get OverpoweredTimeLeft(): number;
    /**
     * Returns how full the core is
     */
    get CoreValue(): number;
    set CoreValue(amount: number);
}
export declare class PedAttribute {
    private handle;
    private attribute;
    constructor(ped: Ped, attribute: ePedAttribute);
    /**
     *
     * @param amount the amount of points to add to the attribute
     */
    addPoints(amount: number): void;
    /**
     * Disables the overpower state on this attribute, see {@link enableOverpower} on how to enable
     */
    disableOverpower(): void;
    /**
     *
     * @param amount the amount to overpower this attribute by
     * @param makeSound if activating the overpower should play sound
     */
    enableOverpower(amount: number, makeSound?: boolean): void;
    /**
     * Gets the amount of attribute points the ped has
     */
    get Points(): number;
    set Points(amount: number);
    get Rank(): number;
    set BaseRank(amount: number);
    get BaseRank(): number;
    set BonusRank(amount: number);
    get BonusRank(): number;
    get MaxRank(): number;
    get Overpowered(): boolean;
}
export declare class Attributes {
    private pedAttributes;
    private coreAttributes;
    constructor(ped: Ped);
    getCore(attribute: eAttributeCore): CoreAttribute;
    get(attribute: ePedAttribute): PedAttribute;
    set CoreIcon(status: eHudStatusEffect);
    set PeriodicIcon(status: eHudStatusEffect);
}
