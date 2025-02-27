[@nativewrappers/fivem](../../README.md) / [fivem](../README.md) / WeaponHudStats

# Interface: WeaponHudStats

Defined in: [src/fivem/weapon/WeaponHudStats.ts:19](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/weapon/WeaponHudStats.ts#L19)

WeaponHudStats
refer1: https://github.com/citizenfx/fivem/blob/master/code/client/clrcore/External/Game.cs#L900
refer2: https://docs.fivem.net/natives/?_0xD92C739EE34C9EBA
// members should be aligned to 8 bytes by default but it's best to use alignas here, just to be sure
struct WeaponHudStatsData
{
	alignas(8) uint8_t hudDamage; // 0x0000
	alignas(8) uint8_t hudSpeed; // 0x0008
	alignas(8) uint8_t hudCapacity; // 0x0010
	alignas(8) uint8_t hudAccuracy; // 0x0018
	alignas(8) uint8_t hudRange; // 0x0020
};

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="hudaccuracy"></a> `hudAccuracy` | `number` | [src/fivem/weapon/WeaponHudStats.ts:23](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/weapon/WeaponHudStats.ts#L23) |
| <a id="hudcapacity"></a> `hudCapacity` | `number` | [src/fivem/weapon/WeaponHudStats.ts:22](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/weapon/WeaponHudStats.ts#L22) |
| <a id="huddamage"></a> `hudDamage` | `number` | [src/fivem/weapon/WeaponHudStats.ts:20](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/weapon/WeaponHudStats.ts#L20) |
| <a id="hudrange"></a> `hudRange` | `number` | [src/fivem/weapon/WeaponHudStats.ts:24](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/weapon/WeaponHudStats.ts#L24) |
| <a id="hudspeed"></a> `hudSpeed` | `number` | [src/fivem/weapon/WeaponHudStats.ts:21](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/weapon/WeaponHudStats.ts#L21) |
