[@nativewrappers/fivem](../../../../README.md) / [fivem/weaponComponent/WeaponComponentCollection](../README.md) / WeaponComponentCollection

# Class: WeaponComponentCollection

Defined in: lib/fivem/weaponComponent/WeaponComponentCollection.d.ts:9

ped weapon components on weapon

## Implements

- `Iterable`\<[`WeaponComponent`](../../WeaponComponent/classes/WeaponComponent.md)\>

## Constructors

### Constructor

```ts
new WeaponComponentCollection(owner, weapon): WeaponComponentCollection;
```

Defined in: lib/fivem/weaponComponent/WeaponComponentCollection.d.ts:14

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `owner` | [`Ped`](../../../models/Ped/classes/Ped.md) |
| `weapon` | [`Weapon`](../../../weapon/Weapon/classes/Weapon.md) |

#### Returns

`WeaponComponentCollection`

## Accessors

### ClipVariationsCount

#### Get Signature

```ts
get ClipVariationsCount(): number;
```

Defined in: lib/fivem/weaponComponent/WeaponComponentCollection.d.ts:39

get clip variation count

##### Returns

`number`

***

### Count

#### Get Signature

```ts
get Count(): number;
```

Defined in: lib/fivem/weaponComponent/WeaponComponentCollection.d.ts:27

get current weapon component count

##### Returns

`number`

***

### ScopeVariationsCount

#### Get Signature

```ts
get ScopeVariationsCount(): number;
```

Defined in: lib/fivem/weaponComponent/WeaponComponentCollection.d.ts:51

get scope variation count

##### Returns

`number`

## Methods

### \[iterator\]()

```ts
iterator: Iterator<WeaponComponent>;
```

Defined in: lib/fivem/weaponComponent/WeaponComponentCollection.d.ts:15

#### Returns

`Iterator`\<[`WeaponComponent`](../../WeaponComponent/classes/WeaponComponent.md)\>

#### Implementation of

```ts
Iterable.[iterator]
```

***

### get()

```ts
get(componentHash): WeaponComponent;
```

Defined in: lib/fivem/weaponComponent/WeaponComponentCollection.d.ts:21

get component

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `componentHash` | [`WeaponComponentHash`](../../WeaponComponentHash/enumerations/WeaponComponentHash.md) |  |

#### Returns

[`WeaponComponent`](../../WeaponComponent/classes/WeaponComponent.md)

***

### getClipComponent()

```ts
getClipComponent(index): WeaponComponent;
```

Defined in: lib/fivem/weaponComponent/WeaponComponentCollection.d.ts:33

get clip component

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `index` | `number` | index of component |

#### Returns

[`WeaponComponent`](../../WeaponComponent/classes/WeaponComponent.md)

***

### getFlashLightComponent()

```ts
getFlashLightComponent(): WeaponComponent;
```

Defined in: lib/fivem/weaponComponent/WeaponComponentCollection.d.ts:61

get flash light component

#### Returns

[`WeaponComponent`](../../WeaponComponent/classes/WeaponComponent.md)

***

### getLuxuryFinishComponent()

```ts
getLuxuryFinishComponent(): WeaponComponent;
```

Defined in: lib/fivem/weaponComponent/WeaponComponentCollection.d.ts:66

get luxury finish component

#### Returns

[`WeaponComponent`](../../WeaponComponent/classes/WeaponComponent.md)

***

### getMk2BarrelComponent()

```ts
getMk2BarrelComponent(index): WeaponComponent;
```

Defined in: lib/fivem/weaponComponent/WeaponComponentCollection.d.ts:78

get Mk2 barrel component

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `index` | `number` | index of component |

#### Returns

[`WeaponComponent`](../../WeaponComponent/classes/WeaponComponent.md)

***

### getMk2CamoComponent()

```ts
getMk2CamoComponent(index): WeaponComponent;
```

Defined in: lib/fivem/weaponComponent/WeaponComponentCollection.d.ts:72

get Mk2 camo component

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `index` | `number` | index of component |

#### Returns

[`WeaponComponent`](../../WeaponComponent/classes/WeaponComponent.md)

***

### getScopeComponent()

```ts
getScopeComponent(index): WeaponComponent;
```

Defined in: lib/fivem/weaponComponent/WeaponComponentCollection.d.ts:45

get scope component

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `index` | `number` | index of component |

#### Returns

[`WeaponComponent`](../../WeaponComponent/classes/WeaponComponent.md)

***

### getSuppressorComponent()

```ts
getSuppressorComponent(): WeaponComponent;
```

Defined in: lib/fivem/weaponComponent/WeaponComponentCollection.d.ts:56

get suppressor component

#### Returns

[`WeaponComponent`](../../WeaponComponent/classes/WeaponComponent.md)
