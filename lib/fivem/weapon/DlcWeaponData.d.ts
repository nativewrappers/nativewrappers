import type { WeaponHash } from "../hashes/WeaponHash";
/**
 * DlcWeaponData
 * refer1: https://github.com/citizenfx/fivem/blob/master/code/client/clrcore/External/DlcWeaponStructs.cs#L10
 * refer2: https://docs.fivem.net/natives/?_0xBF0FD6E56C964FCB
 *
 * int emptyCheck; //use DLC1::_IS_DLC_DATA_EMPTY on this
 * int padding1;
 * int weaponHash;
 * int padding2;
 * int unk;
 * int padding3;
 * int weaponCost;
 * int padding4;
 * int ammoCost;
 * int padding5;
 * int ammoType;
 * int padding6;
 * int defaultClipSize;
 * int padding7;
 * char nameLabel[64];
 * char descLabel[64];
 * char desc2Label[64]; // usually "the" + name
 * char upperCaseNameLabel[64];
 *
 */
export interface DlcWeaponData {
    validCheck: number;
    weaponHash: number;
    unk: number;
    weaponCost: number;
    ammoCost: number;
    ammoType: number;
    defaultClipSize: number;
    name: string;
    desc: string;
    simpleDesc: string;
    upperCaseName: string;
}
/**
 * DlcWeaponData - Mapping of WeaponHash -> DlcWeaponData
 */
export declare const DlcWeaponData: Map<WeaponHash, DlcWeaponData>;
