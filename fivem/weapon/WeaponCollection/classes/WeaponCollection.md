[@nativewrappers/fivem](../../../../README.md) / [fivem/weapon/WeaponCollection](../README.md) / WeaponCollection

# Class: WeaponCollection

Defined in: lib/fivem/weapon/WeaponCollection.d.ts:9

ped weapons

## Implements

- `Iterable`\<[`Weapon`](../../Weapon/classes/Weapon.md)\>

## Constructors

### Constructor

```ts
new WeaponCollection(owner): WeaponCollection;
```

Defined in: lib/fivem/weapon/WeaponCollection.d.ts:12

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `owner` | [`Ped`](../../../models/Ped/classes/Ped.md) |

#### Returns

`WeaponCollection`

## Accessors

### BestWeapon

#### Get Signature

```ts
get BestWeapon(): Weapon;
```

Defined in: lib/fivem/weapon/WeaponCollection.d.ts:37

get ped best weapon

##### Returns

[`Weapon`](../../Weapon/classes/Weapon.md)

***

### Current

#### Get Signature

```ts
get Current(): Weapon;
```

Defined in: lib/fivem/weapon/WeaponCollection.d.ts:25

get ped current weapon

##### Returns

[`Weapon`](../../Weapon/classes/Weapon.md)

***

### CurrentWeaponObject

#### Get Signature

```ts
get CurrentWeaponObject(): null | Prop;
```

Defined in: lib/fivem/weapon/WeaponCollection.d.ts:31

get ped current weapon object

##### Returns

`null` \| [`Prop`](../../../models/Prop/classes/Prop.md)

## Methods

### \[iterator\]()

```ts
iterator: Iterator<Weapon>;
```

Defined in: lib/fivem/weapon/WeaponCollection.d.ts:13

#### Returns

`Iterator`\<[`Weapon`](../../Weapon/classes/Weapon.md)\>

#### Implementation of

```ts
Iterable.[iterator]
```

***

### drop()

```ts
drop(): void;
```

Defined in: lib/fivem/weapon/WeaponCollection.d.ts:83

Drop ped current weapon?
todo: this native seems does not work as expected, need to investigate
refer1: https://docs.fivem.net/natives/?_0x6B7513D9966FBEC0
refer2: https://forum.cfx.re/t/release-weapondrop/49856/8

#### Returns

`void`

***

### get()

```ts
get(hash): null | Weapon;
```

Defined in: lib/fivem/weapon/WeaponCollection.d.ts:19

get weapon by hash

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `hash` | [`WeaponHash`](../../../hashes/WeaponHash/enumerations/WeaponHash.md) |  |

#### Returns

`null` \| [`Weapon`](../../Weapon/classes/Weapon.md)

***

### give()

```ts
give(
   hash, 
   ammoCount, 
   equipNow, 
   isAmmoLoaded): Weapon;
```

Defined in: lib/fivem/weapon/WeaponCollection.d.ts:58

give weapon to ped

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `hash` | [`WeaponHash`](../../../hashes/WeaponHash/enumerations/WeaponHash.md) |  |
| `ammoCount` | `number` |  |
| `equipNow` | `boolean` |  |
| `isAmmoLoaded` | `boolean` |  |

#### Returns

[`Weapon`](../../Weapon/classes/Weapon.md)

***

### hasWeapon()

```ts
hasWeapon(hash): boolean;
```

Defined in: lib/fivem/weapon/WeaponCollection.d.ts:43

check ped has weapon

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `hash` | [`WeaponHash`](../../../hashes/WeaponHash/enumerations/WeaponHash.md) |  |

#### Returns

`boolean`

***

### isWeaponValid()

```ts
isWeaponValid(hash): boolean;
```

Defined in: lib/fivem/weapon/WeaponCollection.d.ts:49

check weapon is valid

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `hash` | [`WeaponHash`](../../../hashes/WeaponHash/enumerations/WeaponHash.md) |  |

#### Returns

`boolean`

***

### remove()

```ts
remove(weapon): void;
```

Defined in: lib/fivem/weapon/WeaponCollection.d.ts:70

remove weapon from ped

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `weapon` | \| [`WeaponHash`](../../../hashes/WeaponHash/enumerations/WeaponHash.md) \| [`Weapon`](../../Weapon/classes/Weapon.md) |  |

#### Returns

`void`

***

### removeAll()

```ts
removeAll(): void;
```

Defined in: lib/fivem/weapon/WeaponCollection.d.ts:75

remove all weapons from ped

#### Returns

`void`

***

### select()

```ts
select(weapon): boolean;
```

Defined in: lib/fivem/weapon/WeaponCollection.d.ts:64

set ped current weapon on hand

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `weapon` | \| [`WeaponHash`](../../../hashes/WeaponHash/enumerations/WeaponHash.md) \| [`Weapon`](../../Weapon/classes/Weapon.md) |  |

#### Returns

`boolean`
