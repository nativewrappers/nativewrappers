[@nativewrappers/fivem](../../README.md) / [fivem](../README.md) / PedBone

# Class: PedBone

## Extends

- [`EntityBone`](EntityBone.md)

## Constructors

### new PedBone()

```ts
new PedBone(owner, boneId): PedBone
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `owner` | [`Ped`](Ped.md) |
| `boneId` | [`Bone`](../enumerations/Bone.md) |

#### Returns

[`PedBone`](PedBone.md)

#### Overrides

[`EntityBone`](EntityBone.md).[`constructor`](EntityBone.md#constructors)

#### Defined in

[src/fivem/models/PedBone.ts:5](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/PedBone.ts#L5)

## Properties

| Property | Modifier | Type | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| `index` | `readonly` | `number` | [`EntityBone`](EntityBone.md).`index` | [src/fivem/models/EntityBone.ts:30](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/EntityBone.ts#L30) |
| `owner` | `readonly` | [`BaseEntity`](BaseEntity.md) | [`EntityBone`](EntityBone.md).`owner` | [src/fivem/models/EntityBone.ts:29](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/EntityBone.ts#L29) |

## Accessors

### Index

```ts
get Index(): number
```

#### Returns

`number`

#### Inherited from

[`EntityBone`](EntityBone.md).[`Index`](EntityBone.md#index)

#### Defined in

[src/fivem/models/EntityBone.ts:5](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/EntityBone.ts#L5)

***

### IsValid

```ts
get IsValid(): boolean
```

#### Returns

`boolean`

#### Overrides

[`EntityBone`](EntityBone.md).[`IsValid`](EntityBone.md#isvalid)

#### Defined in

[src/fivem/models/PedBone.ts:9](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/PedBone.ts#L9)

***

### Owner

```ts
get Owner(): BaseEntity
```

#### Returns

[`BaseEntity`](BaseEntity.md)

#### Inherited from

[`EntityBone`](EntityBone.md).[`Owner`](EntityBone.md#owner)

#### Defined in

[src/fivem/models/EntityBone.ts:9](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/EntityBone.ts#L9)

***

### Position

```ts
get Position(): Vector3
```

#### Returns

[`Vector3`](Vector3.md)

#### Inherited from

[`EntityBone`](EntityBone.md).[`Position`](EntityBone.md#position)

#### Defined in

[src/fivem/models/EntityBone.ts:13](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/EntityBone.ts#L13)

***

### Rotation

```ts
get Rotation(): Vector3
```

#### Returns

[`Vector3`](Vector3.md)

#### Inherited from

[`EntityBone`](EntityBone.md).[`Rotation`](EntityBone.md#rotation)

#### Defined in

[src/fivem/models/EntityBone.ts:19](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/EntityBone.ts#L19)
