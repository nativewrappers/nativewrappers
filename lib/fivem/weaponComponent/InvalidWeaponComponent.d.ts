import { WeaponComponent } from "./WeaponComponent";
import { WeaponComponentHash } from "./WeaponComponentHash";
import { ComponentAttachmentPoint } from "./ComponentAttachmentPoint";
import type { WeaponHash } from "../hashes/WeaponHash";
export declare class InvalidWeaponComponent extends WeaponComponent {
    constructor();
    get Active(): boolean;
    set Active(value: boolean);
    get DisplayName(): string;
    get LocalizedName(): string;
    static getAttachmentPoint(hash: WeaponHash, componentHash: WeaponComponentHash): ComponentAttachmentPoint;
}
