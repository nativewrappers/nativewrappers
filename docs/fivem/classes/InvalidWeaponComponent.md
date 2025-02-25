[@nativewrappers/fivem](../../README.md) / [fivem](../README.md) / InvalidWeaponComponent

# Class: InvalidWeaponComponent

Defined in: [src/fivem/weaponComponent/InvalidWeaponComponent.ts:7](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/weaponComponent/InvalidWeaponComponent.ts#L7)

## Extends

- `WeaponComponent`

## Constructors

### new InvalidWeaponComponent()

```ts
new InvalidWeaponComponent(): InvalidWeaponComponent
```

Defined in: [src/fivem/weaponComponent/InvalidWeaponComponent.ts:8](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/weaponComponent/InvalidWeaponComponent.ts#L8)

#### Returns

[`InvalidWeaponComponent`](InvalidWeaponComponent.md)

#### Overrides

```ts
WeaponComponent.constructor
```

## Properties

| Property | Modifier | Type | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="componenthash"></a> `componentHash` | `readonly` | [`WeaponComponentHash`](../enumerations/WeaponComponentHash.md) | `WeaponComponent.componentHash` | [src/fivem/weaponComponent/WeaponComponent.ts:19](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/weaponComponent/WeaponComponent.ts#L19) |
| <a id="owner"></a> `owner` | `readonly` | [`Ped`](Ped.md) | `WeaponComponent.owner` | [src/fivem/weaponComponent/WeaponComponent.ts:17](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/weaponComponent/WeaponComponent.ts#L17) |
| <a id="weapon"></a> `weapon` | `readonly` | [`Weapon`](Weapon.md) | `WeaponComponent.weapon` | [src/fivem/weaponComponent/WeaponComponent.ts:18](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/weaponComponent/WeaponComponent.ts#L18) |

## Accessors

### Active

#### Get Signature

```ts
get Active(): boolean
```

Defined in: [src/fivem/weaponComponent/InvalidWeaponComponent.ts:13](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/weaponComponent/InvalidWeaponComponent.ts#L13)

check ped has weapon component

##### Returns

`boolean`

#### Set Signature

```ts
set Active(value): void
```

Defined in: [src/fivem/weaponComponent/InvalidWeaponComponent.ts:18](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/weaponComponent/InvalidWeaponComponent.ts#L18)

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

Defined in: [src/fivem/weaponComponent/WeaponComponent.ts:110](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/weaponComponent/WeaponComponent.ts#L110)

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

Defined in: [src/fivem/weaponComponent/WeaponComponent.ts:45](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/weaponComponent/WeaponComponent.ts#L45)

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

Defined in: [src/fivem/weaponComponent/InvalidWeaponComponent.ts:20](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/weaponComponent/InvalidWeaponComponent.ts#L20)

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

Defined in: [src/fivem/weaponComponent/WeaponComponent.ts:122](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/weaponComponent/WeaponComponent.ts#L122)

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

Defined in: [src/fivem/weaponComponent/WeaponComponent.ts:36](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/weaponComponent/WeaponComponent.ts#L36)

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

Defined in: [src/fivem/weaponComponent/InvalidWeaponComponent.ts:24](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/weaponComponent/InvalidWeaponComponent.ts#L24)

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

Defined in: [src/fivem/weaponComponent/InvalidWeaponComponent.ts:28](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/weaponComponent/InvalidWeaponComponent.ts#L28)

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

Defined in: [src/fivem/weaponComponent/WeaponComponent.ts:134](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/weaponComponent/WeaponComponent.ts#L134)

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
