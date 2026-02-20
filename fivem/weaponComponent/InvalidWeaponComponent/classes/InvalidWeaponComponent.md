[@nativewrappers/fivem](../../../../README.md) / [fivem/weaponComponent/InvalidWeaponComponent](../README.md) / InvalidWeaponComponent

# Class: InvalidWeaponComponent

Defined in: lib/fivem/weaponComponent/InvalidWeaponComponent.d.ts:5

ped weapon component on weapon

## Extends

- [`WeaponComponent`](../../WeaponComponent/classes/WeaponComponent.md)

## Constructors

### Constructor

```ts
new InvalidWeaponComponent(): InvalidWeaponComponent;
```

Defined in: lib/fivem/weaponComponent/InvalidWeaponComponent.d.ts:6

#### Returns

`InvalidWeaponComponent`

#### Overrides

[`WeaponComponent`](../../WeaponComponent/classes/WeaponComponent.md).[`constructor`](../../WeaponComponent/classes/WeaponComponent.md#constructor)

## Properties

| Property | Modifier | Type | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="componenthash"></a> `componentHash` | `readonly` | [`WeaponComponentHash`](../../WeaponComponentHash/enumerations/WeaponComponentHash.md) | [`WeaponComponent`](../../WeaponComponent/classes/WeaponComponent.md).[`componentHash`](../../WeaponComponent/classes/WeaponComponent.md#componenthash) | lib/fivem/weaponComponent/WeaponComponent.d.ts:14 |
| <a id="owner"></a> `owner` | `readonly` | [`Ped`](../../../models/Ped/classes/Ped.md) | [`WeaponComponent`](../../WeaponComponent/classes/WeaponComponent.md).[`owner`](../../WeaponComponent/classes/WeaponComponent.md#owner) | lib/fivem/weaponComponent/WeaponComponent.d.ts:12 |
| <a id="weapon"></a> `weapon` | `readonly` | [`Weapon`](../../../weapon/Weapon/classes/Weapon.md) | [`WeaponComponent`](../../WeaponComponent/classes/WeaponComponent.md).[`weapon`](../../WeaponComponent/classes/WeaponComponent.md#weapon) | lib/fivem/weaponComponent/WeaponComponent.d.ts:13 |

## Accessors

### Active

#### Get Signature

```ts
get Active(): boolean;
```

Defined in: lib/fivem/weaponComponent/InvalidWeaponComponent.d.ts:7

check ped has weapon component

##### Returns

`boolean`

#### Set Signature

```ts
set Active(value): void;
```

Defined in: lib/fivem/weaponComponent/InvalidWeaponComponent.d.ts:8

check ped has weapon component

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

##### Returns

`void`

#### Overrides

[`WeaponComponent`](../../WeaponComponent/classes/WeaponComponent.md).[`Active`](../../WeaponComponent/classes/WeaponComponent.md#active)

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

#### Inherited from

[`WeaponComponent`](../../WeaponComponent/classes/WeaponComponent.md).[`AttachmentPoint`](../../WeaponComponent/classes/WeaponComponent.md#attachmentpoint)

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

#### Inherited from

[`WeaponComponent`](../../WeaponComponent/classes/WeaponComponent.md).[`ComponentHash`](../../WeaponComponent/classes/WeaponComponent.md#componenthash-1)

***

### DisplayName

#### Get Signature

```ts
get DisplayName(): string;
```

Defined in: lib/fivem/weaponComponent/InvalidWeaponComponent.d.ts:9

get component display name / label

##### Returns

`string`

#### Overrides

[`WeaponComponent`](../../WeaponComponent/classes/WeaponComponent.md).[`DisplayName`](../../WeaponComponent/classes/WeaponComponent.md#displayname)

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

#### Inherited from

[`WeaponComponent`](../../WeaponComponent/classes/WeaponComponent.md).[`HudStats`](../../WeaponComponent/classes/WeaponComponent.md#hudstats)

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

#### Inherited from

[`WeaponComponent`](../../WeaponComponent/classes/WeaponComponent.md).[`IsInvalid`](../../WeaponComponent/classes/WeaponComponent.md#isinvalid)

***

### LocalizedName

#### Get Signature

```ts
get LocalizedName(): string;
```

Defined in: lib/fivem/weaponComponent/InvalidWeaponComponent.d.ts:10

get component localized name

##### Returns

`string`

#### Overrides

[`WeaponComponent`](../../WeaponComponent/classes/WeaponComponent.md).[`LocalizedName`](../../WeaponComponent/classes/WeaponComponent.md#localizedname)

## Methods

### getAttachmentPoint()

```ts
static getAttachmentPoint(hash, componentHash): ComponentAttachmentPoint;
```

Defined in: lib/fivem/weaponComponent/InvalidWeaponComponent.d.ts:11

get component attachment point by WeaponHash and WeaponComponentHash

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `hash` | [`WeaponHash`](../../../hashes/WeaponHash/enumerations/WeaponHash.md) | - |
| `componentHash` | [`WeaponComponentHash`](../../WeaponComponentHash/enumerations/WeaponComponentHash.md) |  |

#### Returns

[`ComponentAttachmentPoint`](../../ComponentAttachmentPoint/enumerations/ComponentAttachmentPoint.md)

#### Overrides

[`WeaponComponent`](../../WeaponComponent/classes/WeaponComponent.md).[`getAttachmentPoint`](../../WeaponComponent/classes/WeaponComponent.md#getattachmentpoint)

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

#### Inherited from

[`WeaponComponent`](../../WeaponComponent/classes/WeaponComponent.md).[`getComponentDisplayNameFromHash`](../../WeaponComponent/classes/WeaponComponent.md#getcomponentdisplaynamefromhash)
