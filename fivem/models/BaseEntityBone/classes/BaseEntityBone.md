[@nativewrappers/fivem](../../../../README.md) / [fivem/models/BaseEntityBone](../README.md) / BaseEntityBone

# Abstract Class: BaseEntityBone

Defined in: lib/fivem/models/BaseEntityBone.d.ts:3

## Extended by

- [`EntityBone`](../../EntityBone/classes/EntityBone.md)
- [`PedBone`](../../PedBone/classes/PedBone.md)

## Constructors

### Constructor

```ts
new BaseEntityBone(
   owner, 
   boneIndex?, 
   boneName?): BaseEntityBone;
```

Defined in: lib/fivem/models/BaseEntityBone.d.ts:11

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `owner` | [`BaseEntity`](../../BaseEntity/classes/BaseEntity.md) |
| `boneIndex?` | `number` |
| `boneName?` | `string` |

#### Returns

`BaseEntityBone`

## Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="index"></a> `index` | `readonly` | `number` | lib/fivem/models/BaseEntityBone.d.ts:10 |
| <a id="owner"></a> `owner` | `readonly` | [`BaseEntity`](../../BaseEntity/classes/BaseEntity.md) | lib/fivem/models/BaseEntityBone.d.ts:9 |

## Accessors

### Index

#### Get Signature

```ts
get Index(): number;
```

Defined in: lib/fivem/models/BaseEntityBone.d.ts:4

##### Returns

`number`

***

### IsValid

#### Get Signature

```ts
get IsValid(): boolean;
```

Defined in: lib/fivem/models/BaseEntityBone.d.ts:8

##### Returns

`boolean`

***

### Owner

#### Get Signature

```ts
get Owner(): BaseEntity;
```

Defined in: lib/fivem/models/BaseEntityBone.d.ts:5

##### Returns

[`BaseEntity`](../../BaseEntity/classes/BaseEntity.md)

***

### Position

#### Get Signature

```ts
get Position(): Vector3;
```

Defined in: lib/fivem/models/BaseEntityBone.d.ts:6

##### Returns

`Vector3`

***

### Rotation

#### Get Signature

```ts
get Rotation(): Vector3;
```

Defined in: lib/fivem/models/BaseEntityBone.d.ts:7

##### Returns

`Vector3`
