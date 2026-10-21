[@nativewrappers/fivem](../../../../README.md) / [fivem/models/BaseEntityBoneCollection](../README.md) / BaseEntityBoneCollection

# Abstract Class: BaseEntityBoneCollection

Defined in: lib/fivem/models/BaseEntityBoneCollection.d.ts:3

## Extended by

- [`EntityBoneCollection`](../../EntityBoneCollection/classes/EntityBoneCollection.md)
- [`PedBoneCollection`](../../PedBoneCollection/classes/PedBoneCollection.md)

## Constructors

### Constructor

```ts
new BaseEntityBoneCollection(owner): BaseEntityBoneCollection;
```

Defined in: lib/fivem/models/BaseEntityBoneCollection.d.ts:5

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `owner` | [`BaseEntity`](../../BaseEntity/classes/BaseEntity.md) |

#### Returns

`BaseEntityBoneCollection`

## Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="owner"></a> `owner` | `readonly` | [`BaseEntity`](../../BaseEntity/classes/BaseEntity.md) | lib/fivem/models/BaseEntityBoneCollection.d.ts:4 |

## Accessors

### Core

#### Get Signature

```ts
get abstract Core(): BaseEntityBone;
```

Defined in: lib/fivem/models/BaseEntityBoneCollection.d.ts:8

##### Returns

[`BaseEntityBone`](../../BaseEntityBone/classes/BaseEntityBone.md)

## Methods

### getBone()

```ts
abstract getBone(boneIndex?, boneName?): BaseEntityBone;
```

Defined in: lib/fivem/models/BaseEntityBoneCollection.d.ts:7

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `boneIndex?` | `number` |
| `boneName?` | `string` |

#### Returns

[`BaseEntityBone`](../../BaseEntityBone/classes/BaseEntityBone.md)

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
