[@nativewrappers/fivem](../../README.md) / [server](../README.md) / Entity

# Class: Entity

Defined in: [src/server/entities/Entity.ts:3](https://github.com/nativewrappers/fivem/blob/712f0bf92fff25cfcad1f759429c48668c195b4a/src/server/entities/Entity.ts#L3)

## Extends

- `BaseEntity`

## Constructors

### new Entity()

```ts
new Entity(handle): Entity
```

Defined in: [src/server/entities/Entity.ts:4](https://github.com/nativewrappers/fivem/blob/712f0bf92fff25cfcad1f759429c48668c195b4a/src/server/entities/Entity.ts#L4)

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
| <a id="handle-1"></a> `handle` | `protected` | `number` | `undefined` | `BaseEntity.handle` | [src/server/entities/BaseEntity.ts:11](https://github.com/nativewrappers/fivem/blob/712f0bf92fff25cfcad1f759429c48668c195b4a/src/server/entities/BaseEntity.ts#L11) |
| <a id="type"></a> `type` | `protected` | `ClassTypes` | `ClassTypes.Entity` | `BaseEntity.type` | [src/server/entities/BaseEntity.ts:10](https://github.com/nativewrappers/fivem/blob/712f0bf92fff25cfcad1f759429c48668c195b4a/src/server/entities/BaseEntity.ts#L10) |

## Accessors

### AttachedTo

#### Get Signature

```ts
get AttachedTo(): null | BaseEntity
```

Defined in: [src/server/entities/BaseEntity.ts:49](https://github.com/nativewrappers/fivem/blob/712f0bf92fff25cfcad1f759429c48668c195b4a/src/server/entities/BaseEntity.ts#L49)

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

Defined in: [src/server/entities/BaseEntity.ts:41](https://github.com/nativewrappers/fivem/blob/712f0bf92fff25cfcad1f759429c48668c195b4a/src/server/entities/BaseEntity.ts#L41)

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

Defined in: [src/server/entities/BaseEntity.ts:37](https://github.com/nativewrappers/fivem/blob/712f0bf92fff25cfcad1f759429c48668c195b4a/src/server/entities/BaseEntity.ts#L37)

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

Defined in: [src/server/entities/BaseEntity.ts:29](https://github.com/nativewrappers/fivem/blob/712f0bf92fff25cfcad1f759429c48668c195b4a/src/server/entities/BaseEntity.ts#L29)

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

Defined in: [src/server/entities/BaseEntity.ts:59](https://github.com/nativewrappers/fivem/blob/712f0bf92fff25cfcad1f759429c48668c195b4a/src/server/entities/BaseEntity.ts#L59)

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

Defined in: [src/server/entities/BaseEntity.ts:70](https://github.com/nativewrappers/fivem/blob/712f0bf92fff25cfcad1f759429c48668c195b4a/src/server/entities/BaseEntity.ts#L70)

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

Defined in: [src/server/entities/BaseEntity.ts:128](https://github.com/nativewrappers/fivem/blob/712f0bf92fff25cfcad1f759429c48668c195b4a/src/server/entities/BaseEntity.ts#L128)

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

Defined in: [src/server/entities/BaseEntity.ts:120](https://github.com/nativewrappers/fivem/blob/712f0bf92fff25cfcad1f759429c48668c195b4a/src/server/entities/BaseEntity.ts#L120)

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

Defined in: [src/server/entities/BaseEntity.ts:74](https://github.com/nativewrappers/fivem/blob/712f0bf92fff25cfcad1f759429c48668c195b4a/src/server/entities/BaseEntity.ts#L74)

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

Defined in: [src/server/entities/BaseEntity.ts:78](https://github.com/nativewrappers/fivem/blob/712f0bf92fff25cfcad1f759429c48668c195b4a/src/server/entities/BaseEntity.ts#L78)

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

Defined in: [src/server/entities/BaseEntity.ts:124](https://github.com/nativewrappers/fivem/blob/712f0bf92fff25cfcad1f759429c48668c195b4a/src/server/entities/BaseEntity.ts#L124)

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

Defined in: [src/server/entities/BaseEntity.ts:33](https://github.com/nativewrappers/fivem/blob/712f0bf92fff25cfcad1f759429c48668c195b4a/src/server/entities/BaseEntity.ts#L33)

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

Defined in: [src/server/entities/BaseEntity.ts:82](https://github.com/nativewrappers/fivem/blob/712f0bf92fff25cfcad1f759429c48668c195b4a/src/server/entities/BaseEntity.ts#L82)

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

Defined in: [src/server/entities/BaseEntity.ts:55](https://github.com/nativewrappers/fivem/blob/712f0bf92fff25cfcad1f759429c48668c195b4a/src/server/entities/BaseEntity.ts#L55)

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

Defined in: [src/server/entities/BaseEntity.ts:63](https://github.com/nativewrappers/fivem/blob/712f0bf92fff25cfcad1f759429c48668c195b4a/src/server/entities/BaseEntity.ts#L63)

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

Defined in: [src/server/entities/BaseEntity.ts:86](https://github.com/nativewrappers/fivem/blob/712f0bf92fff25cfcad1f759429c48668c195b4a/src/server/entities/BaseEntity.ts#L86)

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

Defined in: [src/server/entities/BaseEntity.ts:90](https://github.com/nativewrappers/fivem/blob/712f0bf92fff25cfcad1f759429c48668c195b4a/src/server/entities/BaseEntity.ts#L90)

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

Defined in: [src/server/entities/BaseEntity.ts:94](https://github.com/nativewrappers/fivem/blob/712f0bf92fff25cfcad1f759429c48668c195b4a/src/server/entities/BaseEntity.ts#L94)

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

Defined in: [src/server/entities/BaseEntity.ts:101](https://github.com/nativewrappers/fivem/blob/712f0bf92fff25cfcad1f759429c48668c195b4a/src/server/entities/BaseEntity.ts#L101)

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

Defined in: [src/server/entities/BaseEntity.ts:105](https://github.com/nativewrappers/fivem/blob/712f0bf92fff25cfcad1f759429c48668c195b4a/src/server/entities/BaseEntity.ts#L105)

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

Defined in: [src/server/entities/BaseEntity.ts:25](https://github.com/nativewrappers/fivem/blob/712f0bf92fff25cfcad1f759429c48668c195b4a/src/server/entities/BaseEntity.ts#L25)

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

Defined in: [src/server/entities/BaseEntity.ts:109](https://github.com/nativewrappers/fivem/blob/712f0bf92fff25cfcad1f759429c48668c195b4a/src/server/entities/BaseEntity.ts#L109)

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

Defined in: [src/server/entities/BaseEntity.ts:116](https://github.com/nativewrappers/fivem/blob/712f0bf92fff25cfcad1f759429c48668c195b4a/src/server/entities/BaseEntity.ts#L116)

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

Defined in: [src/server/entities/BaseEntity.ts:132](https://github.com/nativewrappers/fivem/blob/712f0bf92fff25cfcad1f759429c48668c195b4a/src/server/entities/BaseEntity.ts#L132)

#### Returns

`void`

#### Inherited from

```ts
BaseEntity.delete
```

***

### fromHandle()

```ts
static fromHandle(handle): Entity
```

Defined in: [src/server/entities/Entity.ts:11](https://github.com/nativewrappers/fivem/blob/712f0bf92fff25cfcad1f759429c48668c195b4a/src/server/entities/Entity.ts#L11)

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

Defined in: [src/server/entities/Entity.ts:7](https://github.com/nativewrappers/fivem/blob/712f0bf92fff25cfcad1f759429c48668c195b4a/src/server/entities/Entity.ts#L7)

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

Defined in: [src/server/entities/BaseEntity.ts:19](https://github.com/nativewrappers/fivem/blob/712f0bf92fff25cfcad1f759429c48668c195b4a/src/server/entities/BaseEntity.ts#L19)

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
