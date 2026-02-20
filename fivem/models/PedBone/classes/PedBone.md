[@nativewrappers/fivem](../../../../README.md) / [fivem/models/PedBone](../README.md) / PedBone

# Class: PedBone

Defined in: lib/fivem/models/PedBone.d.ts:4

## Extends

- [`BaseEntityBone`](../../BaseEntityBone/classes/BaseEntityBone.md)

## Constructors

### Constructor

```ts
new PedBone(owner, boneId): PedBone;
```

Defined in: lib/fivem/models/PedBone.d.ts:5

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `owner` | [`Ped`](../../Ped/classes/Ped.md) |
| `boneId` | [`Bone`](../../../enums/Bone/enumerations/Bone.md) |

#### Returns

`PedBone`

#### Overrides

[`BaseEntityBone`](../../BaseEntityBone/classes/BaseEntityBone.md).[`constructor`](../../BaseEntityBone/classes/BaseEntityBone.md#constructor)

## Properties

| Property | Modifier | Type | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="index"></a> `index` | `readonly` | `number` | [`BaseEntityBone`](../../BaseEntityBone/classes/BaseEntityBone.md).[`index`](../../BaseEntityBone/classes/BaseEntityBone.md#index) | lib/fivem/models/BaseEntityBone.d.ts:10 |
| <a id="owner"></a> `owner` | `readonly` | [`BaseEntity`](../../BaseEntity/classes/BaseEntity.md) | [`BaseEntityBone`](../../BaseEntityBone/classes/BaseEntityBone.md).[`owner`](../../BaseEntityBone/classes/BaseEntityBone.md#owner) | lib/fivem/models/BaseEntityBone.d.ts:9 |

## Accessors

### Index

#### Get Signature

```ts
get Index(): number;
```

Defined in: lib/fivem/models/BaseEntityBone.d.ts:4

##### Returns

`number`

#### Inherited from

[`BaseEntityBone`](../../BaseEntityBone/classes/BaseEntityBone.md).[`Index`](../../BaseEntityBone/classes/BaseEntityBone.md#index-1)

***

### IsValid

#### Get Signature

```ts
get IsValid(): boolean;
```

Defined in: lib/fivem/models/PedBone.d.ts:6

##### Returns

`boolean`

#### Overrides

[`BaseEntityBone`](../../BaseEntityBone/classes/BaseEntityBone.md).[`IsValid`](../../BaseEntityBone/classes/BaseEntityBone.md#isvalid)

***

### Owner

#### Get Signature

```ts
get Owner(): BaseEntity;
```

Defined in: lib/fivem/models/BaseEntityBone.d.ts:5

##### Returns

[`BaseEntity`](../../BaseEntity/classes/BaseEntity.md)

#### Inherited from

[`BaseEntityBone`](../../BaseEntityBone/classes/BaseEntityBone.md).[`Owner`](../../BaseEntityBone/classes/BaseEntityBone.md#owner-1)

***

### Position

#### Get Signature

```ts
get Position(): Vector3;
```

Defined in: lib/fivem/models/BaseEntityBone.d.ts:6

##### Returns

`Vector3`

#### Inherited from

[`BaseEntityBone`](../../BaseEntityBone/classes/BaseEntityBone.md).[`Position`](../../BaseEntityBone/classes/BaseEntityBone.md#position)

***

### Rotation

#### Get Signature

```ts
get Rotation(): Vector3;
```

Defined in: lib/fivem/models/BaseEntityBone.d.ts:7

##### Returns

`Vector3`

#### Inherited from

[`BaseEntityBone`](../../BaseEntityBone/classes/BaseEntityBone.md).[`Rotation`](../../BaseEntityBone/classes/BaseEntityBone.md#rotation)
