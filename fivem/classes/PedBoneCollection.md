[@nativewrappers/fivem](../../README.md) / [fivem](../README.md) / PedBoneCollection

# Class: PedBoneCollection

Defined in: fivem/models/PedBoneCollection.d.ts:2

## Extends

- [`EntityBoneCollection`](EntityBoneCollection.md)

## Constructors

### new PedBoneCollection()

```ts
new PedBoneCollection(owner): PedBoneCollection
```

Defined in: fivem/models/PedBoneCollection.d.ts:3

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `owner` | [`Ped`](Ped.md) |

#### Returns

[`PedBoneCollection`](PedBoneCollection.md)

#### Overrides

[`EntityBoneCollection`](EntityBoneCollection.md).[`constructor`](EntityBoneCollection.md#constructors)

## Properties

| Property | Modifier | Type | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="owner-1"></a> `owner` | `readonly` | [`BaseEntity`](BaseEntity.md) | [`EntityBoneCollection`](EntityBoneCollection.md).[`owner`](EntityBoneCollection.md#owner-1) | fivem/models/EntityBoneCollection.d.ts:4 |

## Accessors

### Core

#### Get Signature

```ts
get Core(): PedBone
```

Defined in: fivem/models/PedBoneCollection.d.ts:4

##### Returns

[`PedBone`](PedBone.md)

#### Overrides

[`EntityBoneCollection`](EntityBoneCollection.md).[`Core`](EntityBoneCollection.md#core)

***

### LastDamaged

#### Get Signature

```ts
get LastDamaged(): PedBone
```

Defined in: fivem/models/PedBoneCollection.d.ts:5

##### Returns

[`PedBone`](PedBone.md)

## Methods

### clearLastDamaged()

```ts
clearLastDamaged(): void
```

Defined in: fivem/models/PedBoneCollection.d.ts:6

#### Returns

`void`

***

### getBone()

```ts
getBone(boneIndex?, boneName?): PedBone
```

Defined in: fivem/models/PedBoneCollection.d.ts:7

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `boneIndex`? | `number` |
| `boneName`? | `string` |

#### Returns

[`PedBone`](PedBone.md)

#### Overrides

[`EntityBoneCollection`](EntityBoneCollection.md).[`getBone`](EntityBoneCollection.md#getbone)

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

#### Inherited from

[`EntityBoneCollection`](EntityBoneCollection.md).[`hasBone`](EntityBoneCollection.md#hasbone)
