[@nativewrappers/fivem](../../README.md) / [fivem](../README.md) / Weapon

# Class: Weapon

ped weapon

## Constructors

### new Weapon()

```ts
new Weapon(owner, hash): Weapon
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `owner` | [`Ped`](Ped.md) |
| `hash` | [`WeaponHash`](../enumerations/WeaponHash.md) |

#### Returns

[`Weapon`](Weapon.md)

#### Defined in

[src/fivem/weapon/Weapon.ts:26](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/weapon/Weapon.ts#L26)

## Accessors

### Ammo

```ts
get Ammo(): number
```

get weapon ammo count

```ts
set Ammo(count): void
```

set weapon ammo count

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `count` | `number` |  |

#### Returns

`number`

#### Defined in

[src/fivem/weapon/Weapon.ts:141](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/weapon/Weapon.ts#L141)

***

### AmmoType

```ts
get AmmoType(): AmmoType
```

get weapon ammo type

#### Returns

[`AmmoType`](../enumerations/AmmoType.md)

#### Defined in

[src/fivem/weapon/Weapon.ts:132](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/weapon/Weapon.ts#L132)

***

### CanUseOnParachute

```ts
get CanUseOnParachute(): boolean
```

check weapon can use on parachute

#### Returns

`boolean`

#### Defined in

[src/fivem/weapon/Weapon.ts:250](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/weapon/Weapon.ts#L250)

***

### Components

```ts
get Components(): WeaponComponentCollection
```

weapon components

#### Returns

`WeaponComponentCollection`

#### Defined in

[src/fivem/weapon/Weapon.ts:37](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/weapon/Weapon.ts#L37)

***

### DefaultClipSize

```ts
get DefaultClipSize(): number
```

get weapon default clip size

#### Returns

`number`

#### Defined in

[src/fivem/weapon/Weapon.ts:217](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/weapon/Weapon.ts#L217)

***

### DisplayName

```ts
get DisplayName(): string
```

get weapon display name / label

#### Returns

`string`

#### Defined in

[src/fivem/weapon/Weapon.ts:77](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/weapon/Weapon.ts#L77)

***

### Group

```ts
get Group(): WeaponGroup
```

get weapon group

#### Returns

[`WeaponGroup`](../enumerations/WeaponGroup.md)

#### Defined in

[src/fivem/weapon/Weapon.ts:123](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/weapon/Weapon.ts#L123)

***

### Hash

```ts
get Hash(): WeaponHash
```

weapon hash

#### Returns

[`WeaponHash`](../enumerations/WeaponHash.md)

#### Defined in

[src/fivem/weapon/Weapon.ts:46](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/weapon/Weapon.ts#L46)

***

### HudStats

```ts
get HudStats(): undefined | WeaponHudStats
```

get weapon hud stats

#### Returns

`undefined` \| [`WeaponHudStats`](../interfaces/WeaponHudStats.md)

#### Defined in

[src/fivem/weapon/Weapon.ts:302](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/weapon/Weapon.ts#L302)

***

### InfiniteAmmo

```ts
set InfiniteAmmo(toggle): void
```

toggle weapon infinite ammo

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `toggle` | `boolean` |  |

#### Defined in

[src/fivem/weapon/Weapon.ts:227](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/weapon/Weapon.ts#L227)

***

### InfiniteAmmoClip

```ts
set InfiniteAmmoClip(toggle): void
```

toggle ped infinite ammo clip on all weapons

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `toggle` | `boolean` |  |

#### Defined in

[src/fivem/weapon/Weapon.ts:241](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/weapon/Weapon.ts#L241)

***

### IsMk2

```ts
get IsMk2(): boolean
```

Check weapon is Mk2 or not

#### Returns

`boolean`

#### Defined in

[src/fivem/weapon/Weapon.ts:259](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/weapon/Weapon.ts#L259)

***

### IsPresent

```ts
get IsPresent(): boolean
```

Check if the ped has the current weapon.

#### Returns

`boolean`

#### Defined in

[src/fivem/weapon/Weapon.ts:64](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/weapon/Weapon.ts#L64)

***

### IsUnarmed

```ts
get IsUnarmed(): boolean
```

check ped is unarmed or not

#### Returns

`boolean`

#### Defined in

[src/fivem/weapon/Weapon.ts:55](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/weapon/Weapon.ts#L55)

***

### LocalizedName

```ts
get LocalizedName(): string
```

get weapon localized name

#### Returns

`string`

#### Defined in

[src/fivem/weapon/Weapon.ts:86](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/weapon/Weapon.ts#L86)

***

### MaxAmmo

```ts
get MaxAmmo(): number
```

get weapon max ammo

#### Returns

`number`

#### Defined in

[src/fivem/weapon/Weapon.ts:176](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/weapon/Weapon.ts#L176)

***

### MaxAmmoInClip

```ts
get MaxAmmoInClip(): number
```

get weapon max ammo in clip

#### Returns

`number`

#### Defined in

[src/fivem/weapon/Weapon.ts:200](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/weapon/Weapon.ts#L200)

***

### Model

```ts
get Model(): Model
```

get weapon model

#### Returns

[`Model`](Model.md)

#### Defined in

[src/fivem/weapon/Weapon.ts:95](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/weapon/Weapon.ts#L95)

***

### Tint

```ts
get Tint(): WeaponTint
```

get weapon tint

```ts
set Tint(tint): void
```

set weapon tint

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `tint` | [`WeaponTint`](../enumerations/WeaponTint.md) |  |

#### Returns

[`WeaponTint`](../enumerations/WeaponTint.md)

#### Defined in

[src/fivem/weapon/Weapon.ts:104](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/weapon/Weapon.ts#L104)

## Methods

### setLivery()

```ts
setLivery(liveryId, colorId): void
```

set weapon livery, only work for Mk2 weapon

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `liveryId` | [`WeaponLivery`](../enumerations/WeaponLivery.md) |  |
| `colorId` | [`WeaponLiveryColor`](../enumerations/WeaponLiveryColor.md) |  |

#### Returns

`void`

#### Defined in

[src/fivem/weapon/Weapon.ts:271](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/weapon/Weapon.ts#L271)

***

### getDisplayNameFromHash()

```ts
static getDisplayNameFromHash(hash): string
```

get weapon display name / label by hash

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `hash` | [`WeaponHash`](../enumerations/WeaponHash.md) |  |

#### Returns

`string`

#### Defined in

[src/fivem/weapon/Weapon.ts:311](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/weapon/Weapon.ts#L311)

***

### getWeaponComponentHashes()

```ts
static getWeaponComponentHashes(hash): WeaponComponentHash[]
```

get component hashes belongs to weapon

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `hash` | [`WeaponHash`](../enumerations/WeaponHash.md) |  |

#### Returns

[`WeaponComponentHash`](../enumerations/WeaponComponentHash.md)[]

#### Defined in

[src/fivem/weapon/Weapon.ts:324](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/weapon/Weapon.ts#L324)
