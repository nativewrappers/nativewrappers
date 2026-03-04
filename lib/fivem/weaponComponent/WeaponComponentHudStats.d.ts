import { WeaponComponentHash } from "./WeaponComponentHash";
/***
 * WeaponComponentHudStats
 * refer: https://github.com/citizenfx/fivem/blob/master/code/client/clrcore/External/Game.cs#L976
 *    [StructLayout(LayoutKind.Explicit, Size = 0x28)]
 *    [SecuritySafeCritical]
 *    internal struct UnsafeWeaponComponentHudStats
 *    {
 * 			[FieldOffset(0x00)] private int hudDamage;
 * 			[FieldOffset(0x08)] private int hudSpeed;
 * 			[FieldOffset(0x10)] private int hudCapacity;
 * 			[FieldOffset(0x18)] private int hudAccuracy;
 * 			[FieldOffset(0x20)] private int hudRange;
 *
 */
export interface WeaponComponentHudStats {
    hudDamage: number;
    hudSpeed: number;
    hudCapacity: number;
    hudAccuracy: number;
    hudRange: number;
}
/**
 * Mapping of WeaponComponentHash -> WeaponComponentHudStats
 *
 */
export declare const WeaponComponentHudStats: Map<WeaponComponentHash, WeaponComponentHudStats>;
