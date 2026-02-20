import { WeaponHash } from "../hashes/WeaponHash";
import { WeaponComponentHash } from "./WeaponComponentHash";
/**
 * Mapping of WeaponHash -> WeaponComponentHashes
 * refer: https://wiki.rage.mp/index.php?title=Weapons_Components
 *
 */
export declare const WeaponComponentHashesByWeaponHash: Map<WeaponHash, WeaponComponentHash[]>;
