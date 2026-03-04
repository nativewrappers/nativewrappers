[@nativewrappers/fivem](../../../../README.md) / [fivem/models/PedBoneCollection](../README.md) / PedBoneCollection

# Class: PedBoneCollection

Defined in: lib/fivem/models/PedBoneCollection.d.ts:4

## Extends

- [`BaseEntityBoneCollection`](../../BaseEntityBoneCollection/classes/BaseEntityBoneCollection.md)

## Constructors

### Constructor

```ts
new PedBoneCollection(owner): PedBoneCollection;
```

Defined in: lib/fivem/models/PedBoneCollection.d.ts:5

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `owner` | [`Ped`](../../Ped/classes/Ped.md) |

#### Returns

`PedBoneCollection`

#### Overrides

[`BaseEntityBoneCollection`](../../BaseEntityBoneCollection/classes/BaseEntityBoneCollection.md).[`constructor`](../../BaseEntityBoneCollection/classes/BaseEntityBoneCollection.md#constructor)

## Properties

| Property | Modifier | Type | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="owner"></a> `owner` | `readonly` | [`BaseEntity`](../../BaseEntity/classes/BaseEntity.md) | [`BaseEntityBoneCollection`](../../BaseEntityBoneCollection/classes/BaseEntityBoneCollection.md).[`owner`](../../BaseEntityBoneCollection/classes/BaseEntityBoneCollection.md#owner) | lib/fivem/models/BaseEntityBoneCollection.d.ts:4 |

## Accessors

### Core

#### Get Signature

```ts
get Core(): PedBone;
```

Defined in: lib/fivem/models/PedBoneCollection.d.ts:6

##### Returns

[`PedBone`](../../PedBone/classes/PedBone.md)

#### Overrides

[`BaseEntityBoneCollection`](../../BaseEntityBoneCollection/classes/BaseEntityBoneCollection.md).[`Core`](../../BaseEntityBoneCollection/classes/BaseEntityBoneCollection.md#core)

***

### LastDamaged

#### Get Signature

```ts
get LastDamaged(): PedBone;
```

Defined in: lib/fivem/models/PedBoneCollection.d.ts:7

##### Returns

[`PedBone`](../../PedBone/classes/PedBone.md)

## Methods

### clearLastDamaged()

```ts
clearLastDamaged(): void;
```

Defined in: lib/fivem/models/PedBoneCollection.d.ts:8

#### Returns

`void`

***

### getBone()

#### Call Signature

```ts
getBone(bone): PedBone;
```

Defined in: lib/fivem/models/PedBoneCollection.d.ts:9

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `bone` | `number` |

##### Returns

[`PedBone`](../../PedBone/classes/PedBone.md)

##### Overrides

[`BaseEntityBoneCollection`](../../BaseEntityBoneCollection/classes/BaseEntityBoneCollection.md).[`getBone`](../../BaseEntityBoneCollection/classes/BaseEntityBoneCollection.md#getbone)

#### Call Signature

```ts
getBone(bone): PedBone;
```

Defined in: lib/fivem/models/PedBoneCollection.d.ts:10

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `bone` | `string` |

##### Returns

[`PedBone`](../../PedBone/classes/PedBone.md)

##### Overrides

```ts
BaseEntityBoneCollection.getBone
```

***

### hasBone()

```ts
hasBone(name): boolean;
```

Defined in: lib/fivem/models/BaseEntityBoneCollection.d.ts:6

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |

#### Returns

`boolean`

#### Inherited from

[`BaseEntityBoneCollection`](../../BaseEntityBoneCollection/classes/BaseEntityBoneCollection.md).[`hasBone`](../../BaseEntityBoneCollection/classes/BaseEntityBoneCollection.md#hasbone)
