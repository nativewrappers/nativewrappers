[@nativewrappers/fivem](../../README.md) / [server](../README.md) / Entity

# Class: Entity

Defined in: [src/server/entities/Entity.ts:3](https://github.com/nativewrappers/nativewrappers/blob/427b5ee59afa6efb7a0db0f5ab134f700c75b61b/src/server/entities/Entity.ts#L3)

## Extends

- `BaseEntity`

## Constructors

### new Entity()

```ts
new Entity(handle): Entity
```

Defined in: [src/server/entities/Entity.ts:4](https://github.com/nativewrappers/nativewrappers/blob/427b5ee59afa6efb7a0db0f5ab134f700c75b61b/src/server/entities/Entity.ts#L4)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `handle` | `number` |

#### Returns

[`Entity`](Entity.md)

#### Overrides

```ts
BaseEntity.constructor
```

## Properties

| Property | Modifier | Type | Default value | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ | ------ |
| <a id="handle-1"></a> `handle` | `protected` | `number` | `undefined` | `BaseEntity.handle` | [src/server/entities/BaseEntity.ts:11](https://github.com/nativewrappers/nativewrappers/blob/427b5ee59afa6efb7a0db0f5ab134f700c75b61b/src/server/entities/BaseEntity.ts#L11) |
| <a id="type"></a> `type` | `protected` | `ClassTypes` | `ClassTypes.Entity` | `BaseEntity.type` | [src/server/entities/BaseEntity.ts:10](https://github.com/nativewrappers/nativewrappers/blob/427b5ee59afa6efb7a0db0f5ab134f700c75b61b/src/server/entities/BaseEntity.ts#L10) |

## Accessors

### AttachedTo

#### Get Signature

```ts
get AttachedTo(): null | BaseEntity
```

Defined in: [src/server/entities/BaseEntity.ts:72](https://github.com/nativewrappers/nativewrappers/blob/427b5ee59afa6efb7a0db0f5ab134f700c75b61b/src/server/entities/BaseEntity.ts#L72)

##### Returns

`null` \| `BaseEntity`

the entity that the calling entity is attached to, or null if
there is none

#### Inherited from

```ts
BaseEntity.AttachedTo
```

***

### Exists

#### Get Signature

```ts
get Exists(): boolean
```

Defined in: [src/server/entities/BaseEntity.ts:64](https://github.com/nativewrappers/nativewrappers/blob/427b5ee59afa6efb7a0db0f5ab134f700c75b61b/src/server/entities/BaseEntity.ts#L64)

##### Returns

`boolean`

#### Inherited from

```ts
BaseEntity.Exists
```

***

### FirstOwner

#### Get Signature

```ts
get FirstOwner(): number
```

Defined in: [src/server/entities/BaseEntity.ts:60](https://github.com/nativewrappers/nativewrappers/blob/427b5ee59afa6efb7a0db0f5ab134f700c75b61b/src/server/entities/BaseEntity.ts#L60)

##### Returns

`number`

#### Inherited from

```ts
BaseEntity.FirstOwner
```

***

### Handle

#### Get Signature

```ts
get Handle(): number
```

Defined in: [src/server/entities/BaseEntity.ts:52](https://github.com/nativewrappers/nativewrappers/blob/427b5ee59afa6efb7a0db0f5ab134f700c75b61b/src/server/entities/BaseEntity.ts#L52)

##### Returns

`number`

#### Inherited from

```ts
BaseEntity.Handle
```

***

### Heading

#### Get Signature

```ts
get Heading(): number
```

Defined in: [src/server/entities/BaseEntity.ts:82](https://github.com/nativewrappers/nativewrappers/blob/427b5ee59afa6efb7a0db0f5ab134f700c75b61b/src/server/entities/BaseEntity.ts#L82)

##### Returns

`number`

#### Inherited from

```ts
BaseEntity.Heading
```

***

### Health

#### Get Signature

```ts
get Health(): number
```

Defined in: [src/server/entities/BaseEntity.ts:93](https://github.com/nativewrappers/nativewrappers/blob/427b5ee59afa6efb7a0db0f5ab134f700c75b61b/src/server/entities/BaseEntity.ts#L93)

##### Returns

`number`

#### Inherited from

```ts
BaseEntity.Health
```

***

### IsNoLongerNeeded

#### Get Signature

```ts
get IsNoLongerNeeded(): boolean
```

Defined in: [src/server/entities/BaseEntity.ts:151](https://github.com/nativewrappers/nativewrappers/blob/427b5ee59afa6efb7a0db0f5ab134f700c75b61b/src/server/entities/BaseEntity.ts#L151)

##### Returns

`boolean`

#### Inherited from

```ts
BaseEntity.IsNoLongerNeeded
```

***

### IsVisible

#### Get Signature

```ts
get IsVisible(): boolean
```

Defined in: [src/server/entities/BaseEntity.ts:143](https://github.com/nativewrappers/nativewrappers/blob/427b5ee59afa6efb7a0db0f5ab134f700c75b61b/src/server/entities/BaseEntity.ts#L143)

##### Returns

`boolean`

#### Inherited from

```ts
BaseEntity.IsVisible
```

***

### MaxHealth

#### Get Signature

```ts
get MaxHealth(): number
```

Defined in: [src/server/entities/BaseEntity.ts:97](https://github.com/nativewrappers/nativewrappers/blob/427b5ee59afa6efb7a0db0f5ab134f700c75b61b/src/server/entities/BaseEntity.ts#L97)

##### Returns

`number`

#### Inherited from

```ts
BaseEntity.MaxHealth
```

***

### Model

#### Get Signature

```ts
get Model(): number
```

Defined in: [src/server/entities/BaseEntity.ts:101](https://github.com/nativewrappers/nativewrappers/blob/427b5ee59afa6efb7a0db0f5ab134f700c75b61b/src/server/entities/BaseEntity.ts#L101)

##### Returns

`number`

#### Inherited from

```ts
BaseEntity.Model
```

***

### NetworkId

#### Get Signature

```ts
get NetworkId(): number
```

Defined in: [src/server/entities/BaseEntity.ts:147](https://github.com/nativewrappers/nativewrappers/blob/427b5ee59afa6efb7a0db0f5ab134f700c75b61b/src/server/entities/BaseEntity.ts#L147)

##### Returns

`number`

#### Inherited from

```ts
BaseEntity.NetworkId
```

***

### Owner

#### Get Signature

```ts
get Owner(): number
```

Defined in: [src/server/entities/BaseEntity.ts:56](https://github.com/nativewrappers/nativewrappers/blob/427b5ee59afa6efb7a0db0f5ab134f700c75b61b/src/server/entities/BaseEntity.ts#L56)

##### Returns

`number`

#### Inherited from

```ts
BaseEntity.Owner
```

***

### PopulationType

#### Get Signature

```ts
get PopulationType(): PopulationType
```

Defined in: [src/server/entities/BaseEntity.ts:105](https://github.com/nativewrappers/nativewrappers/blob/427b5ee59afa6efb7a0db0f5ab134f700c75b61b/src/server/entities/BaseEntity.ts#L105)

##### Returns

`PopulationType`

#### Inherited from

```ts
BaseEntity.PopulationType
```

***

### Position

#### Get Signature

```ts
get Position(): Vector3
```

Defined in: [src/server/entities/BaseEntity.ts:78](https://github.com/nativewrappers/nativewrappers/blob/427b5ee59afa6efb7a0db0f5ab134f700c75b61b/src/server/entities/BaseEntity.ts#L78)

##### Returns

[`Vector3`](../../fivem/classes/Vector3.md)

#### Inherited from

```ts
BaseEntity.Position
```

***

### PositionAndHeading

#### Get Signature

```ts
get PositionAndHeading(): Vector4
```

Defined in: [src/server/entities/BaseEntity.ts:86](https://github.com/nativewrappers/nativewrappers/blob/427b5ee59afa6efb7a0db0f5ab134f700c75b61b/src/server/entities/BaseEntity.ts#L86)

##### Returns

[`Vector4`](../../fivem/classes/Vector4.md)

#### Inherited from

```ts
BaseEntity.PositionAndHeading
```

***

### Rotation

#### Get Signature

```ts
get Rotation(): Vector3
```

Defined in: [src/server/entities/BaseEntity.ts:109](https://github.com/nativewrappers/nativewrappers/blob/427b5ee59afa6efb7a0db0f5ab134f700c75b61b/src/server/entities/BaseEntity.ts#L109)

##### Returns

[`Vector3`](../../fivem/classes/Vector3.md)

#### Inherited from

```ts
BaseEntity.Rotation
```

***

### RotationVelocity

#### Get Signature

```ts
get RotationVelocity(): Vector3
```

Defined in: [src/server/entities/BaseEntity.ts:113](https://github.com/nativewrappers/nativewrappers/blob/427b5ee59afa6efb7a0db0f5ab134f700c75b61b/src/server/entities/BaseEntity.ts#L113)

##### Returns

[`Vector3`](../../fivem/classes/Vector3.md)

#### Inherited from

```ts
BaseEntity.RotationVelocity
```

***

### RoutingBucket

#### Get Signature

```ts
get RoutingBucket(): number
```

Defined in: [src/server/entities/BaseEntity.ts:117](https://github.com/nativewrappers/nativewrappers/blob/427b5ee59afa6efb7a0db0f5ab134f700c75b61b/src/server/entities/BaseEntity.ts#L117)

##### Returns

`number`

#### Inherited from

```ts
BaseEntity.RoutingBucket
```

***

### Script

#### Get Signature

```ts
get Script(): string
```

Defined in: [src/server/entities/BaseEntity.ts:124](https://github.com/nativewrappers/nativewrappers/blob/427b5ee59afa6efb7a0db0f5ab134f700c75b61b/src/server/entities/BaseEntity.ts#L124)

##### Returns

`string`

The script that made the entity

#### Inherited from

```ts
BaseEntity.Script
```

***

### Speed

#### Get Signature

```ts
get Speed(): number
```

Defined in: [src/server/entities/BaseEntity.ts:128](https://github.com/nativewrappers/nativewrappers/blob/427b5ee59afa6efb7a0db0f5ab134f700c75b61b/src/server/entities/BaseEntity.ts#L128)

##### Returns

`number`

#### Inherited from

```ts
BaseEntity.Speed
```

***

### State

#### Get Signature

```ts
get State(): StateBagInterface
```

Defined in: [src/server/entities/BaseEntity.ts:48](https://github.com/nativewrappers/nativewrappers/blob/427b5ee59afa6efb7a0db0f5ab134f700c75b61b/src/server/entities/BaseEntity.ts#L48)

##### Returns

`StateBagInterface`

#### Inherited from

```ts
BaseEntity.State
```

***

### Type

#### Get Signature

```ts
get Type(): eEntityType
```

Defined in: [src/server/entities/BaseEntity.ts:132](https://github.com/nativewrappers/nativewrappers/blob/427b5ee59afa6efb7a0db0f5ab134f700c75b61b/src/server/entities/BaseEntity.ts#L132)

##### Returns

`eEntityType`

#### Inherited from

```ts
BaseEntity.Type
```

***

### Velocity

#### Get Signature

```ts
get Velocity(): Vector3
```

Defined in: [src/server/entities/BaseEntity.ts:139](https://github.com/nativewrappers/nativewrappers/blob/427b5ee59afa6efb7a0db0f5ab134f700c75b61b/src/server/entities/BaseEntity.ts#L139)

##### Returns

[`Vector3`](../../fivem/classes/Vector3.md)

the entitys velocity, if the entity is a ped it will return Vector3(0, 0, 0)

#### Inherited from

```ts
BaseEntity.Velocity
```

## Methods

### delete()

```ts
delete(): void
```

Defined in: [src/server/entities/BaseEntity.ts:155](https://github.com/nativewrappers/nativewrappers/blob/427b5ee59afa6efb7a0db0f5ab134f700c75b61b/src/server/entities/BaseEntity.ts#L155)

#### Returns

`void`

#### Inherited from

```ts
BaseEntity.delete
```

***

### replaceHandle()

```ts
replaceHandle(newHandle): void
```

Defined in: [src/server/entities/BaseEntity.ts:32](https://github.com/nativewrappers/nativewrappers/blob/427b5ee59afa6efb7a0db0f5ab134f700c75b61b/src/server/entities/BaseEntity.ts#L32)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `newHandle` | `number` |

#### Returns

`void`

#### Inherited from

```ts
BaseEntity.replaceHandle
```

***

### fromHandle()

```ts
static fromHandle(handle): Entity
```

Defined in: [src/server/entities/Entity.ts:11](https://github.com/nativewrappers/nativewrappers/blob/427b5ee59afa6efb7a0db0f5ab134f700c75b61b/src/server/entities/Entity.ts#L11)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `handle` | `number` |

#### Returns

[`Entity`](Entity.md)

***

### fromNetworkId()

```ts
static fromNetworkId(netId): Entity
```

Defined in: [src/server/entities/Entity.ts:7](https://github.com/nativewrappers/nativewrappers/blob/427b5ee59afa6efb7a0db0f5ab134f700c75b61b/src/server/entities/Entity.ts#L7)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `netId` | `number` |

#### Returns

[`Entity`](Entity.md)

#### Overrides

```ts
BaseEntity.fromNetworkId
```

***

### fromStateBagName()

```ts
static fromStateBagName(stateBagName): null | BaseEntity
```

Defined in: [src/server/entities/BaseEntity.ts:42](https://github.com/nativewrappers/nativewrappers/blob/427b5ee59afa6efb7a0db0f5ab134f700c75b61b/src/server/entities/BaseEntity.ts#L42)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `stateBagName` | `string` |

#### Returns

`null` \| `BaseEntity`

#### Inherited from

```ts
BaseEntity.fromStateBagName
```
