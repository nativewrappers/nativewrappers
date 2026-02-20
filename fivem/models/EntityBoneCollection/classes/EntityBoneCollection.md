[@nativewrappers/fivem](../../../../README.md) / [fivem/models/EntityBoneCollection](../README.md) / EntityBoneCollection

# Class: EntityBoneCollection

Defined in: lib/fivem/models/EntityBoneCollection.d.ts:4

## Extends

- [`BaseEntityBoneCollection`](../../BaseEntityBoneCollection/classes/BaseEntityBoneCollection.md)

## Constructors

### Constructor

```ts
new EntityBoneCollection(owner): EntityBoneCollection;
```

Defined in: lib/fivem/models/EntityBoneCollection.d.ts:5

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `owner` | [`BaseEntity`](../../BaseEntity/classes/BaseEntity.md) |

#### Returns

`EntityBoneCollection`

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
get Core(): EntityBone;
```

Defined in: lib/fivem/models/EntityBoneCollection.d.ts:7

##### Returns

[`EntityBone`](../../EntityBone/classes/EntityBone.md)

#### Overrides

[`BaseEntityBoneCollection`](../../BaseEntityBoneCollection/classes/BaseEntityBoneCollection.md).[`Core`](../../BaseEntityBoneCollection/classes/BaseEntityBoneCollection.md#core)

## Methods

### getBone()

```ts
getBone(boneIndex?, boneName?): EntityBone;
```

Defined in: lib/fivem/models/EntityBoneCollection.d.ts:6

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `boneIndex?` | `number` |
| `boneName?` | `string` |

#### Returns

[`EntityBone`](../../EntityBone/classes/EntityBone.md)

#### Overrides

[`BaseEntityBoneCollection`](../../BaseEntityBoneCollection/classes/BaseEntityBoneCollection.md).[`getBone`](../../BaseEntityBoneCollection/classes/BaseEntityBoneCollection.md#getbone)

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
