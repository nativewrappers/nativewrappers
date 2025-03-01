[@nativewrappers/fivem](../../README.md) / [fivem](../README.md) / EntityBone

# Class: EntityBone

Defined in: fivem/models/EntityBone.d.ts:3

## Extended by

- [`PedBone`](PedBone.md)

## Constructors

### new EntityBone()

```ts
new EntityBone(
   owner, 
   boneIndex?, 
   boneName?): EntityBone
```

Defined in: fivem/models/EntityBone.d.ts:11

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `owner` | [`BaseEntity`](BaseEntity.md) |
| `boneIndex`? | `number` |
| `boneName`? | `string` |

#### Returns

[`EntityBone`](EntityBone.md)

## Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="index"></a> `index` | `readonly` | `number` | fivem/models/EntityBone.d.ts:10 |
| <a id="owner-1"></a> `owner` | `readonly` | [`BaseEntity`](BaseEntity.md) | fivem/models/EntityBone.d.ts:9 |

## Accessors

### Index

#### Get Signature

```ts
get Index(): number
```

Defined in: fivem/models/EntityBone.d.ts:4

##### Returns

`number`

***

### IsValid

#### Get Signature

```ts
get IsValid(): boolean
```

Defined in: fivem/models/EntityBone.d.ts:8

##### Returns

`boolean`

***

### Owner

#### Get Signature

```ts
get Owner(): BaseEntity
```

Defined in: fivem/models/EntityBone.d.ts:5

##### Returns

[`BaseEntity`](BaseEntity.md)

***

### Position

#### Get Signature

```ts
get Position(): Vector3
```

Defined in: fivem/models/EntityBone.d.ts:6

##### Returns

`Vector3`

***

### Rotation

#### Get Signature

```ts
get Rotation(): Vector3
```

Defined in: fivem/models/EntityBone.d.ts:7

##### Returns

`Vector3`
