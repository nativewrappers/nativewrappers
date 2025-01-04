[@nativewrappers/fivem](../../README.md) / [fivem](../README.md) / EntityBoneCollection

# Class: EntityBoneCollection

## Extended by

- [`PedBoneCollection`](PedBoneCollection.md)

## Constructors

### new EntityBoneCollection()

```ts
new EntityBoneCollection(owner): EntityBoneCollection
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `owner` | [`BaseEntity`](BaseEntity.md) |

#### Returns

[`EntityBoneCollection`](EntityBoneCollection.md)

#### Defined in

[src/fivem/models/EntityBoneCollection.ts:7](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/EntityBoneCollection.ts#L7)

## Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| `owner` | `readonly` | [`BaseEntity`](BaseEntity.md) | [src/fivem/models/EntityBoneCollection.ts:5](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/EntityBoneCollection.ts#L5) |

## Accessors

### Core

```ts
get Core(): EntityBone
```

#### Returns

[`EntityBone`](EntityBone.md)

#### Defined in

[src/fivem/models/EntityBoneCollection.ts:24](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/EntityBoneCollection.ts#L24)

## Methods

### getBone()

```ts
getBone(boneIndex?, boneName?): EntityBone
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `boneIndex`? | `number` |
| `boneName`? | `string` |

#### Returns

[`EntityBone`](EntityBone.md)

#### Defined in

[src/fivem/models/EntityBoneCollection.ts:15](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/EntityBoneCollection.ts#L15)

***

### hasBone()

```ts
hasBone(name): boolean
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |

#### Returns

`boolean`

#### Defined in

[src/fivem/models/EntityBoneCollection.ts:11](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/EntityBoneCollection.ts#L11)
