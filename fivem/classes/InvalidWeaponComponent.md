[@nativewrappers/fivem](../../README.md) / [fivem](../README.md) / InvalidWeaponComponent

# Class: InvalidWeaponComponent

Defined in: fivem/weaponComponent/InvalidWeaponComponent.d.ts:5

## Extends

- `WeaponComponent`

## Constructors

### new InvalidWeaponComponent()

```ts
new InvalidWeaponComponent(): InvalidWeaponComponent
```

Defined in: fivem/weaponComponent/InvalidWeaponComponent.d.ts:6

#### Returns

[`InvalidWeaponComponent`](InvalidWeaponComponent.md)

#### Overrides

```ts
WeaponComponent.constructor
```

## Properties

| Property | Modifier | Type | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="componenthash"></a> `componentHash` | `readonly` | [`WeaponComponentHash`](../enumerations/WeaponComponentHash.md) | `WeaponComponent.componentHash` | fivem/weaponComponent/WeaponComponent.d.ts:14 |
| <a id="owner"></a> `owner` | `readonly` | [`Ped`](Ped.md) | `WeaponComponent.owner` | fivem/weaponComponent/WeaponComponent.d.ts:12 |
| <a id="weapon"></a> `weapon` | `readonly` | [`Weapon`](Weapon.md) | `WeaponComponent.weapon` | fivem/weaponComponent/WeaponComponent.d.ts:13 |

## Accessors

### Active

#### Get Signature

```ts
get Active(): boolean
```

Defined in: fivem/weaponComponent/InvalidWeaponComponent.d.ts:7

check ped has weapon component

##### Returns

`boolean`

#### Set Signature

```ts
set Active(value): void
```

Defined in: fivem/weaponComponent/InvalidWeaponComponent.d.ts:8

check ped has weapon component

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

##### Returns

`void`

#### Overrides

```ts
WeaponComponent.Active
```

***

### AttachmentPoint

#### Get Signature

```ts
get AttachmentPoint(): ComponentAttachmentPoint
```

Defined in: fivem/weaponComponent/WeaponComponent.d.ts:58

get component attachment point

##### Returns

[`ComponentAttachmentPoint`](../enumerations/ComponentAttachmentPoint.md)

#### Inherited from

```ts
WeaponComponent.AttachmentPoint
```

***

### ComponentHash

#### Get Signature

```ts
get ComponentHash(): WeaponComponentHash
```

Defined in: fivem/weaponComponent/WeaponComponent.d.ts:27

get component hash

##### Returns

[`WeaponComponentHash`](../enumerations/WeaponComponentHash.md)

#### Inherited from

```ts
WeaponComponent.ComponentHash
```

***

### DisplayName

#### Get Signature

```ts
get DisplayName(): string
```

Defined in: fivem/weaponComponent/InvalidWeaponComponent.d.ts:9

get component display name / label

##### Returns

`string`

#### Overrides

```ts
WeaponComponent.DisplayName
```

***

### HudStats

#### Get Signature

```ts
get HudStats(): WeaponComponentHudStats
```

Defined in: fivem/weaponComponent/WeaponComponent.d.ts:64

get component hud stats

##### Returns

[`WeaponComponentHudStats`](../interfaces/WeaponComponentHudStats.md)

#### Inherited from

```ts
WeaponComponent.HudStats
```

***

### IsInvalid

#### Get Signature

```ts
get IsInvalid(): boolean
```

Defined in: fivem/weaponComponent/WeaponComponent.d.ts:21

Check WeaponComponent is invalid or not

##### Returns

`boolean`

#### Inherited from

```ts
WeaponComponent.IsInvalid
```

***

### LocalizedName

#### Get Signature

```ts
get LocalizedName(): string
```

Defined in: fivem/weaponComponent/InvalidWeaponComponent.d.ts:10

get component localized name

##### Returns

`string`

#### Overrides

```ts
WeaponComponent.LocalizedName
```

## Methods

### getAttachmentPoint()

```ts
static getAttachmentPoint(hash, componentHash): ComponentAttachmentPoint
```

Defined in: fivem/weaponComponent/InvalidWeaponComponent.d.ts:11

get component attachment point by WeaponHash and WeaponComponentHash

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `hash` | [`WeaponHash`](../enumerations/WeaponHash.md) | - |
| `componentHash` | [`WeaponComponentHash`](../enumerations/WeaponComponentHash.md) |  |

#### Returns

[`ComponentAttachmentPoint`](../enumerations/ComponentAttachmentPoint.md)

#### Overrides

```ts
WeaponComponent.getAttachmentPoint
```

***

### getComponentDisplayNameFromHash()

```ts
static getComponentDisplayNameFromHash(hash, componentHash): string
```

Defined in: fivem/weaponComponent/WeaponComponent.d.ts:72

get component display name / label by hash

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `hash` | [`WeaponHash`](../enumerations/WeaponHash.md) |  |
| `componentHash` | [`WeaponComponentHash`](../enumerations/WeaponComponentHash.md) |  |

#### Returns

`string`

#### Inherited from

```ts
WeaponComponent.getComponentDisplayNameFromHash
```
