[@nativewrappers/fivem](../../README.md) / [server](../README.md) / Entity

# Class: Entity

Defined in: server/entities/Entity.d.ts:2

## Extends

- `BaseEntity`

## Constructors

### new Entity()

```ts
new Entity(handle): Entity
```

Defined in: server/entities/Entity.d.ts:3

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

| Property | Modifier | Type | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="handle-1"></a> `handle` | `protected` | `number` | `BaseEntity.handle` | server/entities/BaseEntity.d.ts:8 |
| <a id="type"></a> `type` | `protected` | `ClassTypes` | `BaseEntity.type` | server/entities/BaseEntity.d.ts:9 |

## Accessors

### AttachedTo

#### Get Signature

```ts
get AttachedTo(): null | BaseEntity
```

Defined in: server/entities/BaseEntity.d.ts:23

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

Defined in: server/entities/BaseEntity.d.ts:18

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

Defined in: server/entities/BaseEntity.d.ts:17

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

Defined in: server/entities/BaseEntity.d.ts:15

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

Defined in: server/entities/BaseEntity.d.ts:25

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

Defined in: server/entities/BaseEntity.d.ts:27

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

Defined in: server/entities/BaseEntity.d.ts:46

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

Defined in: server/entities/BaseEntity.d.ts:44

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

Defined in: server/entities/BaseEntity.d.ts:28

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

Defined in: server/entities/BaseEntity.d.ts:29

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

Defined in: server/entities/BaseEntity.d.ts:45

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

Defined in: server/entities/BaseEntity.d.ts:16

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

Defined in: server/entities/BaseEntity.d.ts:30

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

Defined in: server/entities/BaseEntity.d.ts:24

##### Returns

`Vector3`

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

Defined in: server/entities/BaseEntity.d.ts:26

##### Returns

`Vector4`

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

Defined in: server/entities/BaseEntity.d.ts:31

##### Returns

`Vector3`

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

Defined in: server/entities/BaseEntity.d.ts:32

##### Returns

`Vector3`

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

Defined in: server/entities/BaseEntity.d.ts:33

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

Defined in: server/entities/BaseEntity.d.ts:37

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

Defined in: server/entities/BaseEntity.d.ts:38

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

Defined in: server/entities/BaseEntity.d.ts:14

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

Defined in: server/entities/BaseEntity.d.ts:39

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

Defined in: server/entities/BaseEntity.d.ts:43

##### Returns

`Vector3`

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

Defined in: server/entities/BaseEntity.d.ts:47

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

Defined in: server/entities/BaseEntity.d.ts:11

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

Defined in: server/entities/Entity.d.ts:5

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

Defined in: server/entities/Entity.d.ts:4

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

Defined in: server/entities/BaseEntity.d.ts:13

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
