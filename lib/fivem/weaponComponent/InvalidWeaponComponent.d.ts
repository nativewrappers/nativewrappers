import { WeaponComponent } from "./WeaponComponent";
import { WeaponComponentHash } from "./WeaponComponentHash";
import type { WeaponHash } from "../hashes";
import { ComponentAttachmentPoint } from "./ComponentAttachmentPoint";
export declare class InvalidWeaponComponent extends WeaponComponent {
    constructor();
    get Active(): boolean;
    set Active(value: boolean);
    get DisplayName(): string;
    get LocalizedName(): string;
    static getAttachmentPoint(hash: WeaponHash, componentHash: WeaponComponentHash): ComponentAttachmentPoint;
}
