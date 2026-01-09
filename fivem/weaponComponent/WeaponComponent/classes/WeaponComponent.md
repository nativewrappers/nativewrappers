[@nativewrappers/fivem](../../../../README.md) / [fivem/weaponComponent/WeaponComponent](../README.md) / WeaponComponent

# Class: WeaponComponent

Defined in: lib/fivem/weaponComponent/WeaponComponent.d.ts:11

ped weapon component on weapon

## Extended by

- [`InvalidWeaponComponent`](../../InvalidWeaponComponent/classes/InvalidWeaponComponent.md)

## Constructors

### Constructor

```ts
new WeaponComponent(
   owner, 
   weapon, 
   componentHash): WeaponComponent;
```

Defined in: lib/fivem/weaponComponent/WeaponComponent.d.ts:15

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `owner` | [`Ped`](../../../models/Ped/classes/Ped.md) |
| `weapon` | [`Weapon`](../../../weapon/Weapon/classes/Weapon.md) |
| `componentHash` | [`WeaponComponentHash`](../../WeaponComponentHash/enumerations/WeaponComponentHash.md) |

#### Returns

`WeaponComponent`

## Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="componenthash"></a> `componentHash` | `readonly` | [`WeaponComponentHash`](../../WeaponComponentHash/enumerations/WeaponComponentHash.md) | lib/fivem/weaponComponent/WeaponComponent.d.ts:14 |
| <a id="owner"></a> `owner` | `readonly` | [`Ped`](../../../models/Ped/classes/Ped.md) | lib/fivem/weaponComponent/WeaponComponent.d.ts:12 |
| <a id="weapon"></a> `weapon` | `readonly` | [`Weapon`](../../../weapon/Weapon/classes/Weapon.md) | lib/fivem/weaponComponent/WeaponComponent.d.ts:13 |

## Accessors

### Active

#### Get Signature

```ts
get Active(): boolean;
```

Defined in: lib/fivem/weaponComponent/WeaponComponent.d.ts:33

check ped has weapon component

##### Returns

`boolean`

#### Set Signature

```ts
set Active(value): void;
```

Defined in: lib/fivem/weaponComponent/WeaponComponent.d.ts:40

give weapon component to ped

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `boolean` |  |

##### Returns

`void`

***

### AttachmentPoint

#### Get Signature

```ts
get AttachmentPoint(): ComponentAttachmentPoint;
```

Defined in: lib/fivem/weaponComponent/WeaponComponent.d.ts:58

get component attachment point

##### Returns

[`ComponentAttachmentPoint`](../../ComponentAttachmentPoint/enumerations/ComponentAttachmentPoint.md)

***

### ComponentHash

#### Get Signature

```ts
get ComponentHash(): WeaponComponentHash;
```

Defined in: lib/fivem/weaponComponent/WeaponComponent.d.ts:27

get component hash

##### Returns

[`WeaponComponentHash`](../../WeaponComponentHash/enumerations/WeaponComponentHash.md)

***

### DisplayName

#### Get Signature

```ts
get DisplayName(): string;
```

Defined in: lib/fivem/weaponComponent/WeaponComponent.d.ts:46

get component display name / label

##### Returns

`string`

***

### HudStats

#### Get Signature

```ts
get HudStats(): WeaponComponentHudStats;
```

Defined in: lib/fivem/weaponComponent/WeaponComponent.d.ts:64

get component hud stats

##### Returns

[`WeaponComponentHudStats`](../../WeaponComponentHudStats/interfaces/WeaponComponentHudStats.md)

***

### IsInvalid

#### Get Signature

```ts
get IsInvalid(): boolean;
```

Defined in: lib/fivem/weaponComponent/WeaponComponent.d.ts:21

Check WeaponComponent is invalid or not

##### Returns

`boolean`

***

### LocalizedName

#### Get Signature

```ts
get LocalizedName(): string;
```

Defined in: lib/fivem/weaponComponent/WeaponComponent.d.ts:52

get component localized name

##### Returns

`string`

## Methods

### getAttachmentPoint()

```ts
static getAttachmentPoint(weaponHash, componentHash): ComponentAttachmentPoint;
```

Defined in: lib/fivem/weaponComponent/WeaponComponent.d.ts:80

get component attachment point by WeaponHash and WeaponComponentHash

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `weaponHash` | [`WeaponHash`](../../../hashes/WeaponHash/enumerations/WeaponHash.md) |  |
| `componentHash` | [`WeaponComponentHash`](../../WeaponComponentHash/enumerations/WeaponComponentHash.md) |  |

#### Returns

[`ComponentAttachmentPoint`](../../ComponentAttachmentPoint/enumerations/ComponentAttachmentPoint.md)

***

### getComponentDisplayNameFromHash()

```ts
static getComponentDisplayNameFromHash(hash, componentHash): string;
```

Defined in: lib/fivem/weaponComponent/WeaponComponent.d.ts:72

get component display name / label by hash

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `hash` | [`WeaponHash`](../../../hashes/WeaponHash/enumerations/WeaponHash.md) |  |
| `componentHash` | [`WeaponComponentHash`](../../WeaponComponentHash/enumerations/WeaponComponentHash.md) |  |

#### Returns

`string`
