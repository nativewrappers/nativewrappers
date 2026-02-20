[@nativewrappers/fivem](../../../../README.md) / [fivem/weapon/DlcWeaponData](../README.md) / DlcWeaponData

# Interface: DlcWeaponData

Defined in: lib/fivem/weapon/DlcWeaponData.d.ts:27

DlcWeaponData
refer1: https://github.com/citizenfx/fivem/blob/master/code/client/clrcore/External/DlcWeaponStructs.cs#L10
refer2: https://docs.fivem.net/natives/?_0xBF0FD6E56C964FCB

int emptyCheck; //use DLC1::_IS_DLC_DATA_EMPTY on this
int padding1;
int weaponHash;
int padding2;
int unk;
int padding3;
int weaponCost;
int padding4;
int ammoCost;
int padding5;
int ammoType;
int padding6;
int defaultClipSize;
int padding7;
char nameLabel[64];
char descLabel[64];
char desc2Label[64]; // usually "the" + name
char upperCaseNameLabel[64];

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="ammocost"></a> `ammoCost` | `number` | lib/fivem/weapon/DlcWeaponData.d.ts:32 |
| <a id="ammotype"></a> `ammoType` | `number` | lib/fivem/weapon/DlcWeaponData.d.ts:33 |
| <a id="defaultclipsize"></a> `defaultClipSize` | `number` | lib/fivem/weapon/DlcWeaponData.d.ts:34 |
| <a id="desc"></a> `desc` | `string` | lib/fivem/weapon/DlcWeaponData.d.ts:36 |
| <a id="name"></a> `name` | `string` | lib/fivem/weapon/DlcWeaponData.d.ts:35 |
| <a id="simpledesc"></a> `simpleDesc` | `string` | lib/fivem/weapon/DlcWeaponData.d.ts:37 |
| <a id="unk"></a> `unk` | `number` | lib/fivem/weapon/DlcWeaponData.d.ts:30 |
| <a id="uppercasename"></a> `upperCaseName` | `string` | lib/fivem/weapon/DlcWeaponData.d.ts:38 |
| <a id="validcheck"></a> `validCheck` | `number` | lib/fivem/weapon/DlcWeaponData.d.ts:28 |
| <a id="weaponcost"></a> `weaponCost` | `number` | lib/fivem/weapon/DlcWeaponData.d.ts:31 |
| <a id="weaponhash"></a> `weaponHash` | `number` | lib/fivem/weapon/DlcWeaponData.d.ts:29 |
