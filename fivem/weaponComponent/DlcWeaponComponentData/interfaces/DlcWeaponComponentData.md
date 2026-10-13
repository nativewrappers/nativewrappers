[@nativewrappers/fivem](../../../../README.md) / [fivem/weaponComponent/DlcWeaponComponentData](../README.md) / DlcWeaponComponentData

# Interface: DlcWeaponComponentData

Defined in: lib/fivem/weaponComponent/DlcWeaponComponentData.d.ts:26

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
| <a id="attachbone"></a> `attachBone` | `number` | lib/fivem/weaponComponent/DlcWeaponComponentData.d.ts:27 |
| <a id="bactivebydefault"></a> `bActiveByDefault` | `number` | lib/fivem/weaponComponent/DlcWeaponComponentData.d.ts:28 |
| <a id="componentcost"></a> `componentCost` | `number` | lib/fivem/weaponComponent/DlcWeaponComponentData.d.ts:32 |
| <a id="componenthash"></a> `componentHash` | `number` | lib/fivem/weaponComponent/DlcWeaponComponentData.d.ts:30 |
| <a id="desc"></a> `desc` | `string` | lib/fivem/weaponComponent/DlcWeaponComponentData.d.ts:34 |
| <a id="name"></a> `name` | `string` | lib/fivem/weaponComponent/DlcWeaponComponentData.d.ts:33 |
| <a id="unk"></a> `unk` | `number` | lib/fivem/weaponComponent/DlcWeaponComponentData.d.ts:29 |
| <a id="unk2"></a> `unk2` | `number` | lib/fivem/weaponComponent/DlcWeaponComponentData.d.ts:31 |
