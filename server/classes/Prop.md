[@nativewrappers/fivem](../../README.md) / [server](../README.md) / Prop

# Class: Prop

Defined in: server/entities/Prop.d.ts:3

## Extends

- `BaseEntity`

## Constructors

### new Prop()

```ts
new Prop(handle): Prop
```

Defined in: server/entities/Prop.d.ts:5

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `handle` | `number` |

#### Returns

[`Prop`](Prop.md)

#### Overrides

```ts
BaseEntity.constructor
```

## Properties

| Property | Modifier | Type | Overrides | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ | ------ |
| <a id="handle-1"></a> `handle` | `protected` | `number` | - | `BaseEntity.handle` | server/entities/BaseEntity.d.ts:9 |
| <a id="type"></a> `type` | `protected` | `ClassTypes` | `BaseEntity.type` | - | server/entities/Prop.d.ts:4 |

## Accessors

### AttachedTo

#### Get Signature

```ts
get AttachedTo(): null | BaseEntity
```

Defined in: server/entities/BaseEntity.d.ts:24

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

Defined in: server/entities/BaseEntity.d.ts:19

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

Defined in: server/entities/BaseEntity.d.ts:18

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

Defined in: server/entities/BaseEntity.d.ts:16

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

Defined in: server/entities/BaseEntity.d.ts:26

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

Defined in: server/entities/BaseEntity.d.ts:28

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

Defined in: server/entities/BaseEntity.d.ts:47

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

Defined in: server/entities/BaseEntity.d.ts:45

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

Defined in: server/entities/BaseEntity.d.ts:29

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

Defined in: server/entities/BaseEntity.d.ts:30

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

Defined in: server/entities/BaseEntity.d.ts:46

##### Returns

`number`

#### Inherited from

```ts
BaseEntity.NetworkId
```

***

### OrphanMode

#### Get Signature

```ts
get OrphanMode(): OrphanMode
```

Defined in: server/entities/BaseEntity.d.ts:48

##### Returns

[`OrphanMode`](../enumerations/OrphanMode.md)

#### Set Signature

```ts
set OrphanMode(orphanMode): void
```

Defined in: server/entities/BaseEntity.d.ts:49

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `orphanMode` | [`OrphanMode`](../enumerations/OrphanMode.md) |

##### Returns

`void`

#### Inherited from

```ts
BaseEntity.OrphanMode
```

***

### Owner

#### Get Signature

```ts
get Owner(): number
```

Defined in: server/entities/BaseEntity.d.ts:17

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

Defined in: server/entities/BaseEntity.d.ts:31

##### Returns

[`PopulationType`](../enumerations/PopulationType.md)

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

Defined in: server/entities/BaseEntity.d.ts:25

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

Defined in: server/entities/BaseEntity.d.ts:27

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

Defined in: server/entities/BaseEntity.d.ts:32

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

Defined in: server/entities/BaseEntity.d.ts:33

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

Defined in: server/entities/BaseEntity.d.ts:34

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

Defined in: server/entities/BaseEntity.d.ts:38

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

Defined in: server/entities/BaseEntity.d.ts:39

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

Defined in: server/entities/BaseEntity.d.ts:15

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

Defined in: server/entities/BaseEntity.d.ts:40

##### Returns

[`eEntityType`](../enumerations/eEntityType.md)

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

Defined in: server/entities/BaseEntity.d.ts:44

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

Defined in: server/entities/BaseEntity.d.ts:50

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

Defined in: server/entities/BaseEntity.d.ts:12

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

### AllProps()

```ts
static AllProps(): IterableIterator<Prop>
```

Defined in: server/entities/Prop.d.ts:10

Get an interable list of props currently on the server

#### Returns

`IterableIterator`\<[`Prop`](Prop.md)\>

Iterable list of Props.

***

### fromHandle()

```ts
static fromHandle(handle): Prop
```

Defined in: server/entities/Prop.d.ts:13

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `handle` | `number` |

#### Returns

[`Prop`](Prop.md)

***

### fromNetworkId()

```ts
static fromNetworkId(networkId): null | Prop
```

Defined in: server/entities/Prop.d.ts:11

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `networkId` | `number` |

#### Returns

`null` \| [`Prop`](Prop.md)

#### Overrides

```ts
BaseEntity.fromNetworkId
```

***

### fromStateBagName()

```ts
static fromStateBagName(stateBagName): null | Prop
```

Defined in: server/entities/Prop.d.ts:12

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `stateBagName` | `string` |

#### Returns

`null` \| [`Prop`](Prop.md)

#### Overrides

```ts
BaseEntity.fromStateBagName
```
