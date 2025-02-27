[@nativewrappers/fivem](../../README.md) / [fivem](../README.md) / DlcWeaponComponentData

# Interface: DlcWeaponComponentData

Defined in: [src/fivem/weaponComponent/DlcWeaponComponentData.ts:28](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/weaponComponent/DlcWeaponComponentData.ts#L28)

DlcWeaponComponentData
refer1: https://github.com/citizenfx/fivem/blob/master/code/client/clrcore/External/DlcWeaponStructs.cs#L130
refer2: https://docs.fivem.net/natives/?_0x6CF598A2957C2BF8
p0 seems to be the weapon index
p1 seems to be the weapon component index
struct DlcComponentData{
int attachBone;
int padding1;
int bActiveByDefault;
int padding2;
int unk;
int padding3;
int componentHash;
int padding4;
int unk2;
int padding5;
int componentCost;
int padding6;
char nameLabel[64];
char descLabel[64];
};

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="attachbone"></a> `attachBone` | `number` | [src/fivem/weaponComponent/DlcWeaponComponentData.ts:29](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/weaponComponent/DlcWeaponComponentData.ts#L29) |
| <a id="bactivebydefault"></a> `bActiveByDefault` | `number` | [src/fivem/weaponComponent/DlcWeaponComponentData.ts:30](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/weaponComponent/DlcWeaponComponentData.ts#L30) |
| <a id="componentcost"></a> `componentCost` | `number` | [src/fivem/weaponComponent/DlcWeaponComponentData.ts:34](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/weaponComponent/DlcWeaponComponentData.ts#L34) |
| <a id="componenthash"></a> `componentHash` | `number` | [src/fivem/weaponComponent/DlcWeaponComponentData.ts:32](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/weaponComponent/DlcWeaponComponentData.ts#L32) |
| <a id="desc"></a> `desc` | `string` | [src/fivem/weaponComponent/DlcWeaponComponentData.ts:36](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/weaponComponent/DlcWeaponComponentData.ts#L36) |
| <a id="name"></a> `name` | `string` | [src/fivem/weaponComponent/DlcWeaponComponentData.ts:35](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/weaponComponent/DlcWeaponComponentData.ts#L35) |
| <a id="unk"></a> `unk` | `number` | [src/fivem/weaponComponent/DlcWeaponComponentData.ts:31](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/weaponComponent/DlcWeaponComponentData.ts#L31) |
| <a id="unk2"></a> `unk2` | `number` | [src/fivem/weaponComponent/DlcWeaponComponentData.ts:33](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/weaponComponent/DlcWeaponComponentData.ts#L33) |
