[@nativewrappers/fivem](../../README.md) / [fivem](../README.md) / EntityBoneCollection

# Class: EntityBoneCollection

Defined in: fivem/models/EntityBoneCollection.d.ts:3

## Extended by

- [`PedBoneCollection`](PedBoneCollection.md)

## Constructors

### new EntityBoneCollection()

```ts
new EntityBoneCollection(owner): EntityBoneCollection
```

Defined in: fivem/models/EntityBoneCollection.d.ts:5

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `owner` | [`BaseEntity`](BaseEntity.md) |

#### Returns

[`EntityBoneCollection`](EntityBoneCollection.md)

## Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="owner-1"></a> `owner` | `readonly` | [`BaseEntity`](BaseEntity.md) | fivem/models/EntityBoneCollection.d.ts:4 |

## Accessors

### Core

#### Get Signature

```ts
get Core(): EntityBone
```

Defined in: fivem/models/EntityBoneCollection.d.ts:8

##### Returns

[`EntityBone`](EntityBone.md)

## Methods

### getBone()

```ts
getBone(boneIndex?, boneName?): EntityBone
```

Defined in: fivem/models/EntityBoneCollection.d.ts:7

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `boneIndex`? | `number` |
| `boneName`? | `string` |

#### Returns

[`EntityBone`](EntityBone.md)

***

### hasBone()

```ts
hasBone(name): boolean
```

Defined in: fivem/models/EntityBoneCollection.d.ts:6

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |

#### Returns

`boolean`
