[@nativewrappers/fivem](../../README.md) / [fivem](../README.md) / EntityBoneCollection

# Class: EntityBoneCollection

Defined in: [src/fivem/models/EntityBoneCollection.ts:4](https://github.com/nativewrappers/nativewrappers/blob/3a5a8937f4f56e42414bc65083bf196262ee500c/src/fivem/models/EntityBoneCollection.ts#L4)

## Extended by

- [`PedBoneCollection`](PedBoneCollection.md)

## Constructors

### new EntityBoneCollection()

```ts
new EntityBoneCollection(owner): EntityBoneCollection
```

Defined in: [src/fivem/models/EntityBoneCollection.ts:7](https://github.com/nativewrappers/nativewrappers/blob/3a5a8937f4f56e42414bc65083bf196262ee500c/src/fivem/models/EntityBoneCollection.ts#L7)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `owner` | [`BaseEntity`](BaseEntity.md) |

#### Returns

[`EntityBoneCollection`](EntityBoneCollection.md)

## Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="owner-1"></a> `owner` | `readonly` | [`BaseEntity`](BaseEntity.md) | [src/fivem/models/EntityBoneCollection.ts:5](https://github.com/nativewrappers/nativewrappers/blob/3a5a8937f4f56e42414bc65083bf196262ee500c/src/fivem/models/EntityBoneCollection.ts#L5) |

## Accessors

### Core

#### Get Signature

```ts
get Core(): EntityBone
```

Defined in: [src/fivem/models/EntityBoneCollection.ts:24](https://github.com/nativewrappers/nativewrappers/blob/3a5a8937f4f56e42414bc65083bf196262ee500c/src/fivem/models/EntityBoneCollection.ts#L24)

##### Returns

[`EntityBone`](EntityBone.md)

## Methods

### getBone()

```ts
getBone(boneIndex?, boneName?): EntityBone
```

Defined in: [src/fivem/models/EntityBoneCollection.ts:15](https://github.com/nativewrappers/nativewrappers/blob/3a5a8937f4f56e42414bc65083bf196262ee500c/src/fivem/models/EntityBoneCollection.ts#L15)

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

Defined in: [src/fivem/models/EntityBoneCollection.ts:11](https://github.com/nativewrappers/nativewrappers/blob/3a5a8937f4f56e42414bc65083bf196262ee500c/src/fivem/models/EntityBoneCollection.ts#L11)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |

#### Returns

`boolean`
