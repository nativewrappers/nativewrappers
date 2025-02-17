[@nativewrappers/fivem](../../README.md) / [fivem](../README.md) / PedBone

# Class: PedBone

Defined in: [src/fivem/models/PedBone.ts:4](https://github.com/nativewrappers/nativewrappers/blob/c6ab47d1014f341bb58fccc9d519ceb48157a741/src/fivem/models/PedBone.ts#L4)

## Extends

- [`EntityBone`](EntityBone.md)

## Constructors

### new PedBone()

```ts
new PedBone(owner, boneId): PedBone
```

Defined in: [src/fivem/models/PedBone.ts:5](https://github.com/nativewrappers/nativewrappers/blob/c6ab47d1014f341bb58fccc9d519ceb48157a741/src/fivem/models/PedBone.ts#L5)

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
| <a id="index"></a> `index` | `readonly` | `number` | [`EntityBone`](EntityBone.md).[`index`](EntityBone.md#index) | [src/fivem/models/EntityBone.ts:30](https://github.com/nativewrappers/nativewrappers/blob/c6ab47d1014f341bb58fccc9d519ceb48157a741/src/fivem/models/EntityBone.ts#L30) |
| <a id="owner-1"></a> `owner` | `readonly` | [`BaseEntity`](BaseEntity.md) | [`EntityBone`](EntityBone.md).[`owner`](EntityBone.md#owner-1) | [src/fivem/models/EntityBone.ts:29](https://github.com/nativewrappers/nativewrappers/blob/c6ab47d1014f341bb58fccc9d519ceb48157a741/src/fivem/models/EntityBone.ts#L29) |

## Accessors

### Index

#### Get Signature

```ts
get Index(): number
```

Defined in: [src/fivem/models/EntityBone.ts:5](https://github.com/nativewrappers/nativewrappers/blob/c6ab47d1014f341bb58fccc9d519ceb48157a741/src/fivem/models/EntityBone.ts#L5)

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

Defined in: [src/fivem/models/PedBone.ts:9](https://github.com/nativewrappers/nativewrappers/blob/c6ab47d1014f341bb58fccc9d519ceb48157a741/src/fivem/models/PedBone.ts#L9)

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

Defined in: [src/fivem/models/EntityBone.ts:9](https://github.com/nativewrappers/nativewrappers/blob/c6ab47d1014f341bb58fccc9d519ceb48157a741/src/fivem/models/EntityBone.ts#L9)

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

Defined in: [src/fivem/models/EntityBone.ts:13](https://github.com/nativewrappers/nativewrappers/blob/c6ab47d1014f341bb58fccc9d519ceb48157a741/src/fivem/models/EntityBone.ts#L13)

##### Returns

[`Vector3`](Vector3.md)

#### Inherited from

[`EntityBone`](EntityBone.md).[`Position`](EntityBone.md#position)

***

### Rotation

#### Get Signature

```ts
get Rotation(): Vector3
```

Defined in: [src/fivem/models/EntityBone.ts:19](https://github.com/nativewrappers/nativewrappers/blob/c6ab47d1014f341bb58fccc9d519ceb48157a741/src/fivem/models/EntityBone.ts#L19)

##### Returns

[`Vector3`](Vector3.md)

#### Inherited from

[`EntityBone`](EntityBone.md).[`Rotation`](EntityBone.md#rotation)
