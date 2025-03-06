[@nativewrappers/fivem](../../README.md) / [fivem](../README.md) / PedBone

# Class: PedBone

Defined in: fivem/models/PedBone.d.ts:3

## Extends

- [`EntityBone`](EntityBone.md)

## Constructors

### new PedBone()

```ts
new PedBone(owner, boneId): PedBone
```

Defined in: fivem/models/PedBone.d.ts:4

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `owner` | [`Ped`](Ped.md) |
| `boneId` | [`Bone`](../enumerations/Bone.md) |

#### Returns

[`PedBone`](PedBone.md)

#### Overrides

[`EntityBone`](EntityBone.md).[`constructor`](EntityBone.md#constructors)

## Properties

| Property | Modifier | Type | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="index"></a> `index` | `readonly` | `number` | [`EntityBone`](EntityBone.md).[`index`](EntityBone.md#index) | fivem/models/EntityBone.d.ts:10 |
| <a id="owner-1"></a> `owner` | `readonly` | [`BaseEntity`](BaseEntity.md) | [`EntityBone`](EntityBone.md).[`owner`](EntityBone.md#owner-1) | fivem/models/EntityBone.d.ts:9 |

## Accessors

### Index

#### Get Signature

```ts
get Index(): number
```

Defined in: fivem/models/EntityBone.d.ts:4

##### Returns

`number`

#### Inherited from

[`EntityBone`](EntityBone.md).[`Index`](EntityBone.md#index-1)

***

### IsValid

#### Get Signature

```ts
get IsValid(): boolean
```

Defined in: fivem/models/PedBone.d.ts:5

##### Returns

`boolean`

#### Overrides

[`EntityBone`](EntityBone.md).[`IsValid`](EntityBone.md#isvalid)

***

### Owner

#### Get Signature

```ts
get Owner(): BaseEntity
```

Defined in: fivem/models/EntityBone.d.ts:5

##### Returns

[`BaseEntity`](BaseEntity.md)

#### Inherited from

[`EntityBone`](EntityBone.md).[`Owner`](EntityBone.md#owner-2)

***

### Position

#### Get Signature

```ts
get Position(): Vector3
```

Defined in: fivem/models/EntityBone.d.ts:6

##### Returns

`Vector3`

#### Inherited from

[`EntityBone`](EntityBone.md).[`Position`](EntityBone.md#position)

***

### Rotation

#### Get Signature

```ts
get Rotation(): Vector3
```

Defined in: fivem/models/EntityBone.d.ts:7

##### Returns

`Vector3`

#### Inherited from

[`EntityBone`](EntityBone.md).[`Rotation`](EntityBone.md#rotation)
