[@nativewrappers/fivem](../../README.md) / [fivem](../README.md) / EntityBone

# Class: EntityBone

Defined in: [src/fivem/models/EntityBone.ts:4](https://github.com/nativewrappers/nativewrappers/blob/427b5ee59afa6efb7a0db0f5ab134f700c75b61b/src/fivem/models/EntityBone.ts#L4)

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

Defined in: [src/fivem/models/EntityBone.ts:32](https://github.com/nativewrappers/nativewrappers/blob/427b5ee59afa6efb7a0db0f5ab134f700c75b61b/src/fivem/models/EntityBone.ts#L32)

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
| <a id="index"></a> `index` | `readonly` | `number` | [src/fivem/models/EntityBone.ts:30](https://github.com/nativewrappers/nativewrappers/blob/427b5ee59afa6efb7a0db0f5ab134f700c75b61b/src/fivem/models/EntityBone.ts#L30) |
| <a id="owner-1"></a> `owner` | `readonly` | [`BaseEntity`](BaseEntity.md) | [src/fivem/models/EntityBone.ts:29](https://github.com/nativewrappers/nativewrappers/blob/427b5ee59afa6efb7a0db0f5ab134f700c75b61b/src/fivem/models/EntityBone.ts#L29) |

## Accessors

### Index

#### Get Signature

```ts
get Index(): number
```

Defined in: [src/fivem/models/EntityBone.ts:5](https://github.com/nativewrappers/nativewrappers/blob/427b5ee59afa6efb7a0db0f5ab134f700c75b61b/src/fivem/models/EntityBone.ts#L5)

##### Returns

`number`

***

### IsValid

#### Get Signature

```ts
get IsValid(): boolean
```

Defined in: [src/fivem/models/EntityBone.ts:25](https://github.com/nativewrappers/nativewrappers/blob/427b5ee59afa6efb7a0db0f5ab134f700c75b61b/src/fivem/models/EntityBone.ts#L25)

##### Returns

`boolean`

***

### Owner

#### Get Signature

```ts
get Owner(): BaseEntity
```

Defined in: [src/fivem/models/EntityBone.ts:9](https://github.com/nativewrappers/nativewrappers/blob/427b5ee59afa6efb7a0db0f5ab134f700c75b61b/src/fivem/models/EntityBone.ts#L9)

##### Returns

[`BaseEntity`](BaseEntity.md)

***

### Position

#### Get Signature

```ts
get Position(): Vector3
```

Defined in: [src/fivem/models/EntityBone.ts:13](https://github.com/nativewrappers/nativewrappers/blob/427b5ee59afa6efb7a0db0f5ab134f700c75b61b/src/fivem/models/EntityBone.ts#L13)

##### Returns

[`Vector3`](Vector3.md)

***

### Rotation

#### Get Signature

```ts
get Rotation(): Vector3
```

Defined in: [src/fivem/models/EntityBone.ts:19](https://github.com/nativewrappers/nativewrappers/blob/427b5ee59afa6efb7a0db0f5ab134f700c75b61b/src/fivem/models/EntityBone.ts#L19)

##### Returns

[`Vector3`](Vector3.md)
