[@nativewrappers/fivem](../../../../README.md) / [fivem/weapon/Weapon](../README.md) / Weapon

# Class: Weapon

Defined in: lib/fivem/weapon/Weapon.d.ts:15

ped weapon

## Constructors

### Constructor

```ts
new Weapon(owner, hash): Weapon;
```

Defined in: lib/fivem/weapon/Weapon.d.ts:19

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `owner` | [`Ped`](../../../models/Ped/classes/Ped.md) |
| `hash` | [`WeaponHash`](../../../hashes/WeaponHash/enumerations/WeaponHash.md) |

#### Returns

`Weapon`

## Accessors

### Ammo

#### Get Signature

```ts
get Ammo(): number;
```

Defined in: lib/fivem/weapon/Weapon.d.ts:92

get weapon ammo count

##### Returns

`number`

#### Set Signature

```ts
set Ammo(count): void;
```

Defined in: lib/fivem/weapon/Weapon.d.ts:99

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
get AmmoType(): AmmoType;
```

Defined in: lib/fivem/weapon/Weapon.d.ts:86

get weapon ammo type

##### Returns

[`AmmoType`](../../../hashes/WeaponHash/enumerations/AmmoType.md)

***

### CanUseOnParachute

#### Get Signature

```ts
get CanUseOnParachute(): boolean;
```

Defined in: lib/fivem/weapon/Weapon.d.ts:137

check weapon can use on parachute

##### Returns

`boolean`

***

### Components

#### Get Signature

```ts
get Components(): WeaponComponentCollection;
```

Defined in: lib/fivem/weapon/Weapon.d.ts:25

weapon components

##### Returns

[`WeaponComponentCollection`](../../../weaponComponent/WeaponComponentCollection/classes/WeaponComponentCollection.md)

***

### DefaultClipSize

#### Get Signature

```ts
get DefaultClipSize(): number;
```

Defined in: lib/fivem/weapon/Weapon.d.ts:117

get weapon default clip size

##### Returns

`number`

***

### DisplayName

#### Get Signature

```ts
get DisplayName(): string;
```

Defined in: lib/fivem/weapon/Weapon.d.ts:49

get weapon display name / label

##### Returns

`string`

***

### Group

#### Get Signature

```ts
get Group(): WeaponGroup;
```

Defined in: lib/fivem/weapon/Weapon.d.ts:80

get weapon group

##### Returns

[`WeaponGroup`](../../WeaponGroup/enumerations/WeaponGroup.md)

***

### Hash

#### Get Signature

```ts
get Hash(): WeaponHash;
```

Defined in: lib/fivem/weapon/Weapon.d.ts:31

weapon hash

##### Returns

[`WeaponHash`](../../../hashes/WeaponHash/enumerations/WeaponHash.md)

***

### HudStats

#### Get Signature

```ts
get HudStats(): 
  | undefined
  | WeaponHudStats;
```

Defined in: lib/fivem/weapon/Weapon.d.ts:156

get weapon hud stats

##### Returns

  \| `undefined`
  \| [`WeaponHudStats`](../../WeaponHudStats/interfaces/WeaponHudStats.md)

***

### InfiniteAmmo

#### Set Signature

```ts
set InfiniteAmmo(toggle): void;
```

Defined in: lib/fivem/weapon/Weapon.d.ts:124

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
set InfiniteAmmoClip(toggle): void;
```

Defined in: lib/fivem/weapon/Weapon.d.ts:131

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
get IsMk2(): boolean;
```

Defined in: lib/fivem/weapon/Weapon.d.ts:143

Check weapon is Mk2 or not

##### Returns

`boolean`

***

### IsPresent

#### Get Signature

```ts
get IsPresent(): boolean;
```

Defined in: lib/fivem/weapon/Weapon.d.ts:43

Check if the ped has the current weapon.

##### Returns

`boolean`

***

### IsUnarmed

#### Get Signature

```ts
get IsUnarmed(): boolean;
```

Defined in: lib/fivem/weapon/Weapon.d.ts:37

check ped is unarmed or not

##### Returns

`boolean`

***

### LocalizedName

#### Get Signature

```ts
get LocalizedName(): string;
```

Defined in: lib/fivem/weapon/Weapon.d.ts:55

get weapon localized name

##### Returns

`string`

***

### MaxAmmo

#### Get Signature

```ts
get MaxAmmo(): number;
```

Defined in: lib/fivem/weapon/Weapon.d.ts:105

get weapon max ammo

##### Returns

`number`

***

### MaxAmmoInClip

#### Get Signature

```ts
get MaxAmmoInClip(): number;
```

Defined in: lib/fivem/weapon/Weapon.d.ts:111

get weapon max ammo in clip

##### Returns

`number`

***

### Model

#### Get Signature

```ts
get Model(): Model;
```

Defined in: lib/fivem/weapon/Weapon.d.ts:61

get weapon model

##### Returns

[`Model`](../../../Model/classes/Model.md)

***

### Tint

#### Get Signature

```ts
get Tint(): WeaponTint;
```

Defined in: lib/fivem/weapon/Weapon.d.ts:67

get weapon tint

##### Returns

[`WeaponTint`](../../WeaponTint/enumerations/WeaponTint.md)

#### Set Signature

```ts
set Tint(tint): void;
```

Defined in: lib/fivem/weapon/Weapon.d.ts:74

set weapon tint

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `tint` | [`WeaponTint`](../../WeaponTint/enumerations/WeaponTint.md) |  |

##### Returns

`void`

## Methods

### setLivery()

```ts
setLivery(liveryId, colorId): void;
```

Defined in: lib/fivem/weapon/Weapon.d.ts:150

set weapon livery, only work for Mk2 weapon

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `liveryId` | [`WeaponLivery`](../../WeaponLivery/enumerations/WeaponLivery.md) |  |
| `colorId` | [`WeaponLiveryColor`](../../WeaponLiveryColor/enumerations/WeaponLiveryColor.md) |  |

#### Returns

`void`

***

### getDisplayNameFromHash()

```ts
static getDisplayNameFromHash(hash): string;
```

Defined in: lib/fivem/weapon/Weapon.d.ts:162

get weapon display name / label by hash

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `hash` | [`WeaponHash`](../../../hashes/WeaponHash/enumerations/WeaponHash.md) |  |

#### Returns

`string`

***

### getWeaponComponentHashes()

```ts
static getWeaponComponentHashes(hash): WeaponComponentHash[];
```

Defined in: lib/fivem/weapon/Weapon.d.ts:168

get component hashes belongs to weapon

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `hash` | [`WeaponHash`](../../../hashes/WeaponHash/enumerations/WeaponHash.md) |  |

#### Returns

[`WeaponComponentHash`](../../../weaponComponent/WeaponComponentHash/enumerations/WeaponComponentHash.md)[]
