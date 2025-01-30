[@nativewrappers/fivem](../../README.md) / [fivem](../README.md) / PedBoneCollection

# Class: PedBoneCollection

Defined in: [src/fivem/models/PedBoneCollection.ts:3](https://github.com/nativewrappers/nativewrappers/blob/b3515708998f90e7d7096e3fffccb36c69d6b942/src/fivem/models/PedBoneCollection.ts#L3)

## Extends

- [`EntityBoneCollection`](EntityBoneCollection.md)

## Constructors

### new PedBoneCollection()

```ts
new PedBoneCollection(owner): PedBoneCollection
```

Defined in: [src/fivem/models/PedBoneCollection.ts:4](https://github.com/nativewrappers/nativewrappers/blob/b3515708998f90e7d7096e3fffccb36c69d6b942/src/fivem/models/PedBoneCollection.ts#L4)

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
| <a id="owner-1"></a> `owner` | `readonly` | [`BaseEntity`](BaseEntity.md) | [`EntityBoneCollection`](EntityBoneCollection.md).[`owner`](EntityBoneCollection.md#owner-1) | [src/fivem/models/EntityBoneCollection.ts:5](https://github.com/nativewrappers/nativewrappers/blob/b3515708998f90e7d7096e3fffccb36c69d6b942/src/fivem/models/EntityBoneCollection.ts#L5) |

## Accessors

### Core

#### Get Signature

```ts
get Core(): PedBone
```

Defined in: [src/fivem/models/PedBoneCollection.ts:8](https://github.com/nativewrappers/nativewrappers/blob/b3515708998f90e7d7096e3fffccb36c69d6b942/src/fivem/models/PedBoneCollection.ts#L8)

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

Defined in: [src/fivem/models/PedBoneCollection.ts:12](https://github.com/nativewrappers/nativewrappers/blob/b3515708998f90e7d7096e3fffccb36c69d6b942/src/fivem/models/PedBoneCollection.ts#L12)

##### Returns

[`PedBone`](PedBone.md)

## Methods

### clearLastDamaged()

```ts
clearLastDamaged(): void
```

Defined in: [src/fivem/models/PedBoneCollection.ts:17](https://github.com/nativewrappers/nativewrappers/blob/b3515708998f90e7d7096e3fffccb36c69d6b942/src/fivem/models/PedBoneCollection.ts#L17)

#### Returns

`void`

***

### getBone()

```ts
getBone(boneIndex?, boneName?): PedBone
```

Defined in: [src/fivem/models/PedBoneCollection.ts:21](https://github.com/nativewrappers/nativewrappers/blob/b3515708998f90e7d7096e3fffccb36c69d6b942/src/fivem/models/PedBoneCollection.ts#L21)

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

Defined in: [src/fivem/models/EntityBoneCollection.ts:11](https://github.com/nativewrappers/nativewrappers/blob/b3515708998f90e7d7096e3fffccb36c69d6b942/src/fivem/models/EntityBoneCollection.ts#L11)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |

#### Returns

`boolean`

#### Inherited from

[`EntityBoneCollection`](EntityBoneCollection.md).[`hasBone`](EntityBoneCollection.md#hasbone)
