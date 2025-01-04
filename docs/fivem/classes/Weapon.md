[@nativewrappers/fivem](../../README.md) / [fivem](../README.md) / Weapon

# Class: Weapon

Defined in: [src/fivem/weapon/Weapon.ts:21](https://github.com/nativewrappers/fivem/blob/b9a4f02a0f902a29cccc3c350b3c8379abeb4a1b/src/fivem/weapon/Weapon.ts#L21)

ped weapon

## Constructors

### new Weapon()

```ts
new Weapon(owner, hash): Weapon
```

Defined in: [src/fivem/weapon/Weapon.ts:26](https://github.com/nativewrappers/fivem/blob/b9a4f02a0f902a29cccc3c350b3c8379abeb4a1b/src/fivem/weapon/Weapon.ts#L26)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `owner` | [`Ped`](Ped.md) |
| `hash` | [`WeaponHash`](../enumerations/WeaponHash.md) |

#### Returns

[`Weapon`](Weapon.md)

## Accessors

### Ammo

#### Get Signature

```ts
get Ammo(): number
```

Defined in: [src/fivem/weapon/Weapon.ts:141](https://github.com/nativewrappers/fivem/blob/b9a4f02a0f902a29cccc3c350b3c8379abeb4a1b/src/fivem/weapon/Weapon.ts#L141)

get weapon ammo count

##### Returns

`number`

#### Set Signature

```ts
set Ammo(count): void
```

Defined in: [src/fivem/weapon/Weapon.ts:159](https://github.com/nativewrappers/fivem/blob/b9a4f02a0f902a29cccc3c350b3c8379abeb4a1b/src/fivem/weapon/Weapon.ts#L159)

set weapon ammo count

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `count` | `number` |  |

##### Returns

`void`

***

### AmmoType

#### Get Signature

```ts
get AmmoType(): AmmoType
```

Defined in: [src/fivem/weapon/Weapon.ts:132](https://github.com/nativewrappers/fivem/blob/b9a4f02a0f902a29cccc3c350b3c8379abeb4a1b/src/fivem/weapon/Weapon.ts#L132)

get weapon ammo type

##### Returns

[`AmmoType`](../enumerations/AmmoType.md)

***

### CanUseOnParachute

#### Get Signature

```ts
get CanUseOnParachute(): boolean
```

Defined in: [src/fivem/weapon/Weapon.ts:250](https://github.com/nativewrappers/fivem/blob/b9a4f02a0f902a29cccc3c350b3c8379abeb4a1b/src/fivem/weapon/Weapon.ts#L250)

check weapon can use on parachute

##### Returns

`boolean`

***

### Components

#### Get Signature

```ts
get Components(): WeaponComponentCollection
```

Defined in: [src/fivem/weapon/Weapon.ts:37](https://github.com/nativewrappers/fivem/blob/b9a4f02a0f902a29cccc3c350b3c8379abeb4a1b/src/fivem/weapon/Weapon.ts#L37)

weapon components

##### Returns

`WeaponComponentCollection`

***

### DefaultClipSize

#### Get Signature

```ts
get DefaultClipSize(): number
```

Defined in: [src/fivem/weapon/Weapon.ts:217](https://github.com/nativewrappers/fivem/blob/b9a4f02a0f902a29cccc3c350b3c8379abeb4a1b/src/fivem/weapon/Weapon.ts#L217)

get weapon default clip size

##### Returns

`number`

***

### DisplayName

#### Get Signature

```ts
get DisplayName(): string
```

Defined in: [src/fivem/weapon/Weapon.ts:77](https://github.com/nativewrappers/fivem/blob/b9a4f02a0f902a29cccc3c350b3c8379abeb4a1b/src/fivem/weapon/Weapon.ts#L77)

get weapon display name / label

##### Returns

`string`

***

### Group

#### Get Signature

```ts
get Group(): WeaponGroup
```

Defined in: [src/fivem/weapon/Weapon.ts:123](https://github.com/nativewrappers/fivem/blob/b9a4f02a0f902a29cccc3c350b3c8379abeb4a1b/src/fivem/weapon/Weapon.ts#L123)

get weapon group

##### Returns

[`WeaponGroup`](../enumerations/WeaponGroup.md)

***

### Hash

#### Get Signature

```ts
get Hash(): WeaponHash
```

Defined in: [src/fivem/weapon/Weapon.ts:46](https://github.com/nativewrappers/fivem/blob/b9a4f02a0f902a29cccc3c350b3c8379abeb4a1b/src/fivem/weapon/Weapon.ts#L46)

weapon hash

##### Returns

[`WeaponHash`](../enumerations/WeaponHash.md)

***

### HudStats

#### Get Signature

```ts
get HudStats(): undefined | WeaponHudStats
```

Defined in: [src/fivem/weapon/Weapon.ts:302](https://github.com/nativewrappers/fivem/blob/b9a4f02a0f902a29cccc3c350b3c8379abeb4a1b/src/fivem/weapon/Weapon.ts#L302)

get weapon hud stats

##### Returns

`undefined` \| [`WeaponHudStats`](../interfaces/WeaponHudStats.md)

***

### InfiniteAmmo

#### Set Signature

```ts
set InfiniteAmmo(toggle): void
```

Defined in: [src/fivem/weapon/Weapon.ts:227](https://github.com/nativewrappers/fivem/blob/b9a4f02a0f902a29cccc3c350b3c8379abeb4a1b/src/fivem/weapon/Weapon.ts#L227)

toggle weapon infinite ammo

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `toggle` | `boolean` |  |

##### Returns

`void`

***

### InfiniteAmmoClip

#### Set Signature

```ts
set InfiniteAmmoClip(toggle): void
```

Defined in: [src/fivem/weapon/Weapon.ts:241](https://github.com/nativewrappers/fivem/blob/b9a4f02a0f902a29cccc3c350b3c8379abeb4a1b/src/fivem/weapon/Weapon.ts#L241)

toggle ped infinite ammo clip on all weapons

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `toggle` | `boolean` |  |

##### Returns

`void`

***

### IsMk2

#### Get Signature

```ts
get IsMk2(): boolean
```

Defined in: [src/fivem/weapon/Weapon.ts:259](https://github.com/nativewrappers/fivem/blob/b9a4f02a0f902a29cccc3c350b3c8379abeb4a1b/src/fivem/weapon/Weapon.ts#L259)

Check weapon is Mk2 or not

##### Returns

`boolean`

***

### IsPresent

#### Get Signature

```ts
get IsPresent(): boolean
```

Defined in: [src/fivem/weapon/Weapon.ts:64](https://github.com/nativewrappers/fivem/blob/b9a4f02a0f902a29cccc3c350b3c8379abeb4a1b/src/fivem/weapon/Weapon.ts#L64)

Check if the ped has the current weapon.

##### Returns

`boolean`

***

### IsUnarmed

#### Get Signature

```ts
get IsUnarmed(): boolean
```

Defined in: [src/fivem/weapon/Weapon.ts:55](https://github.com/nativewrappers/fivem/blob/b9a4f02a0f902a29cccc3c350b3c8379abeb4a1b/src/fivem/weapon/Weapon.ts#L55)

check ped is unarmed or not

##### Returns

`boolean`

***

### LocalizedName

#### Get Signature

```ts
get LocalizedName(): string
```

Defined in: [src/fivem/weapon/Weapon.ts:86](https://github.com/nativewrappers/fivem/blob/b9a4f02a0f902a29cccc3c350b3c8379abeb4a1b/src/fivem/weapon/Weapon.ts#L86)

get weapon localized name

##### Returns

`string`

***

### MaxAmmo

#### Get Signature

```ts
get MaxAmmo(): number
```

Defined in: [src/fivem/weapon/Weapon.ts:176](https://github.com/nativewrappers/fivem/blob/b9a4f02a0f902a29cccc3c350b3c8379abeb4a1b/src/fivem/weapon/Weapon.ts#L176)

get weapon max ammo

##### Returns

`number`

***

### MaxAmmoInClip

#### Get Signature

```ts
get MaxAmmoInClip(): number
```

Defined in: [src/fivem/weapon/Weapon.ts:200](https://github.com/nativewrappers/fivem/blob/b9a4f02a0f902a29cccc3c350b3c8379abeb4a1b/src/fivem/weapon/Weapon.ts#L200)

get weapon max ammo in clip

##### Returns

`number`

***

### Model

#### Get Signature

```ts
get Model(): Model
```

Defined in: [src/fivem/weapon/Weapon.ts:95](https://github.com/nativewrappers/fivem/blob/b9a4f02a0f902a29cccc3c350b3c8379abeb4a1b/src/fivem/weapon/Weapon.ts#L95)

get weapon model

##### Returns

[`Model`](Model.md)

***

### Tint

#### Get Signature

```ts
get Tint(): WeaponTint
```

Defined in: [src/fivem/weapon/Weapon.ts:104](https://github.com/nativewrappers/fivem/blob/b9a4f02a0f902a29cccc3c350b3c8379abeb4a1b/src/fivem/weapon/Weapon.ts#L104)

get weapon tint

##### Returns

[`WeaponTint`](../enumerations/WeaponTint.md)

#### Set Signature

```ts
set Tint(tint): void
```

Defined in: [src/fivem/weapon/Weapon.ts:114](https://github.com/nativewrappers/fivem/blob/b9a4f02a0f902a29cccc3c350b3c8379abeb4a1b/src/fivem/weapon/Weapon.ts#L114)

set weapon tint

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `tint` | [`WeaponTint`](../enumerations/WeaponTint.md) |  |

##### Returns

`void`

## Methods

### setLivery()

```ts
setLivery(liveryId, colorId): void
```

Defined in: [src/fivem/weapon/Weapon.ts:271](https://github.com/nativewrappers/fivem/blob/b9a4f02a0f902a29cccc3c350b3c8379abeb4a1b/src/fivem/weapon/Weapon.ts#L271)

set weapon livery, only work for Mk2 weapon

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `liveryId` | [`WeaponLivery`](../enumerations/WeaponLivery.md) |  |
| `colorId` | [`WeaponLiveryColor`](../enumerations/WeaponLiveryColor.md) |  |

#### Returns

`void`

***

### getDisplayNameFromHash()

```ts
static getDisplayNameFromHash(hash): string
```

Defined in: [src/fivem/weapon/Weapon.ts:311](https://github.com/nativewrappers/fivem/blob/b9a4f02a0f902a29cccc3c350b3c8379abeb4a1b/src/fivem/weapon/Weapon.ts#L311)

get weapon display name / label by hash

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `hash` | [`WeaponHash`](../enumerations/WeaponHash.md) |  |

#### Returns

`string`

***

### getWeaponComponentHashes()

```ts
static getWeaponComponentHashes(hash): WeaponComponentHash[]
```

Defined in: [src/fivem/weapon/Weapon.ts:324](https://github.com/nativewrappers/fivem/blob/b9a4f02a0f902a29cccc3c350b3c8379abeb4a1b/src/fivem/weapon/Weapon.ts#L324)

get component hashes belongs to weapon

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `hash` | [`WeaponHash`](../enumerations/WeaponHash.md) |  |

#### Returns

[`WeaponComponentHash`](../enumerations/WeaponComponentHash.md)[]
