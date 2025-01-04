[@nativewrappers/fivem](../../README.md) / [server](../README.md) / Prop

# Class: Prop

## Extends

- `BaseEntity`

## Constructors

### new Prop()

```ts
new Prop(handle): Prop
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `handle` | `number` |

#### Returns

[`Prop`](Prop.md)

#### Overrides

`BaseEntity.constructor`

#### Defined in

[src/server/entities/Prop.ts:6](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/server/entities/Prop.ts#L6)

## Properties

| Property | Modifier | Type | Default value | Overrides | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ | ------ | ------ |
| `handle` | `protected` | `number` | `undefined` | - | `BaseEntity.handle` | [src/server/entities/BaseEntity.ts:11](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/server/entities/BaseEntity.ts#L11) |
| `type` | `protected` | `ClassTypes` | `ClassTypes.Prop` | `BaseEntity.type` | - | [src/server/entities/Prop.ts:5](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/server/entities/Prop.ts#L5) |

## Accessors

### AttachedTo

```ts
get AttachedTo(): null | BaseEntity
```

#### Returns

`null` \| `BaseEntity`

the entity that the calling entity is attached to, or null if
there is none

#### Inherited from

`BaseEntity.AttachedTo`

#### Defined in

[src/server/entities/BaseEntity.ts:49](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/server/entities/BaseEntity.ts#L49)

***

### Exists

```ts
get Exists(): boolean
```

#### Returns

`boolean`

#### Inherited from

`BaseEntity.Exists`

#### Defined in

[src/server/entities/BaseEntity.ts:41](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/server/entities/BaseEntity.ts#L41)

***

### FirstOwner

```ts
get FirstOwner(): number
```

#### Returns

`number`

#### Inherited from

`BaseEntity.FirstOwner`

#### Defined in

[src/server/entities/BaseEntity.ts:37](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/server/entities/BaseEntity.ts#L37)

***

### Handle

```ts
get Handle(): number
```

#### Returns

`number`

#### Inherited from

`BaseEntity.Handle`

#### Defined in

[src/server/entities/BaseEntity.ts:29](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/server/entities/BaseEntity.ts#L29)

***

### Heading

```ts
get Heading(): number
```

#### Returns

`number`

#### Inherited from

`BaseEntity.Heading`

#### Defined in

[src/server/entities/BaseEntity.ts:59](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/server/entities/BaseEntity.ts#L59)

***

### Health

```ts
get Health(): number
```

#### Returns

`number`

#### Inherited from

`BaseEntity.Health`

#### Defined in

[src/server/entities/BaseEntity.ts:70](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/server/entities/BaseEntity.ts#L70)

***

### IsNoLongerNeeded

```ts
get IsNoLongerNeeded(): boolean
```

#### Returns

`boolean`

#### Inherited from

`BaseEntity.IsNoLongerNeeded`

#### Defined in

[src/server/entities/BaseEntity.ts:128](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/server/entities/BaseEntity.ts#L128)

***

### IsVisible

```ts
get IsVisible(): boolean
```

#### Returns

`boolean`

#### Inherited from

`BaseEntity.IsVisible`

#### Defined in

[src/server/entities/BaseEntity.ts:120](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/server/entities/BaseEntity.ts#L120)

***

### MaxHealth

```ts
get MaxHealth(): number
```

#### Returns

`number`

#### Inherited from

`BaseEntity.MaxHealth`

#### Defined in

[src/server/entities/BaseEntity.ts:74](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/server/entities/BaseEntity.ts#L74)

***

### Model

```ts
get Model(): number
```

#### Returns

`number`

#### Inherited from

`BaseEntity.Model`

#### Defined in

[src/server/entities/BaseEntity.ts:78](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/server/entities/BaseEntity.ts#L78)

***

### NetworkId

```ts
get NetworkId(): number
```

#### Returns

`number`

#### Inherited from

`BaseEntity.NetworkId`

#### Defined in

[src/server/entities/BaseEntity.ts:124](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/server/entities/BaseEntity.ts#L124)

***

### Owner

```ts
get Owner(): number
```

#### Returns

`number`

#### Inherited from

`BaseEntity.Owner`

#### Defined in

[src/server/entities/BaseEntity.ts:33](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/server/entities/BaseEntity.ts#L33)

***

### PopulationType

```ts
get PopulationType(): PopulationType
```

#### Returns

`PopulationType`

#### Inherited from

`BaseEntity.PopulationType`

#### Defined in

[src/server/entities/BaseEntity.ts:82](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/server/entities/BaseEntity.ts#L82)

***

### Position

```ts
get Position(): Vector3
```

#### Returns

[`Vector3`](../../fivem/classes/Vector3.md)

#### Inherited from

`BaseEntity.Position`

#### Defined in

[src/server/entities/BaseEntity.ts:55](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/server/entities/BaseEntity.ts#L55)

***

### PositionAndHeading

```ts
get PositionAndHeading(): Vector4
```

#### Returns

[`Vector4`](../../fivem/classes/Vector4.md)

#### Inherited from

`BaseEntity.PositionAndHeading`

#### Defined in

[src/server/entities/BaseEntity.ts:63](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/server/entities/BaseEntity.ts#L63)

***

### Rotation

```ts
get Rotation(): Vector3
```

#### Returns

[`Vector3`](../../fivem/classes/Vector3.md)

#### Inherited from

`BaseEntity.Rotation`

#### Defined in

[src/server/entities/BaseEntity.ts:86](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/server/entities/BaseEntity.ts#L86)

***

### RotationVelocity

```ts
get RotationVelocity(): Vector3
```

#### Returns

[`Vector3`](../../fivem/classes/Vector3.md)

#### Inherited from

`BaseEntity.RotationVelocity`

#### Defined in

[src/server/entities/BaseEntity.ts:90](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/server/entities/BaseEntity.ts#L90)

***

### RoutingBucket

```ts
get RoutingBucket(): number
```

#### Returns

`number`

#### Inherited from

`BaseEntity.RoutingBucket`

#### Defined in

[src/server/entities/BaseEntity.ts:94](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/server/entities/BaseEntity.ts#L94)

***

### Script

```ts
get Script(): string
```

#### Returns

`string`

The script that made the entity

#### Inherited from

`BaseEntity.Script`

#### Defined in

[src/server/entities/BaseEntity.ts:101](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/server/entities/BaseEntity.ts#L101)

***

### Speed

```ts
get Speed(): number
```

#### Returns

`number`

#### Inherited from

`BaseEntity.Speed`

#### Defined in

[src/server/entities/BaseEntity.ts:105](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/server/entities/BaseEntity.ts#L105)

***

### State

```ts
get State(): StateBagInterface
```

#### Returns

`StateBagInterface`

#### Inherited from

`BaseEntity.State`

#### Defined in

[src/server/entities/BaseEntity.ts:25](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/server/entities/BaseEntity.ts#L25)

***

### Type

```ts
get Type(): eEntityType
```

#### Returns

`eEntityType`

#### Inherited from

`BaseEntity.Type`

#### Defined in

[src/server/entities/BaseEntity.ts:109](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/server/entities/BaseEntity.ts#L109)

***

### Velocity

```ts
get Velocity(): Vector3
```

#### Returns

[`Vector3`](../../fivem/classes/Vector3.md)

the entitys velocity, if the entity is a ped it will return Vector3(0, 0, 0)

#### Inherited from

`BaseEntity.Velocity`

#### Defined in

[src/server/entities/BaseEntity.ts:116](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/server/entities/BaseEntity.ts#L116)

## Methods

### delete()

```ts
delete(): void
```

#### Returns

`void`

#### Inherited from

`BaseEntity.delete`

#### Defined in

[src/server/entities/BaseEntity.ts:132](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/server/entities/BaseEntity.ts#L132)

***

### AllProps()

```ts
static AllProps(): IterableIterator<Prop, any, any>
```

Get an interable list of props currently on the server

#### Returns

`IterableIterator`\<[`Prop`](Prop.md), `any`, `any`\>

Iterable list of Props.

#### Defined in

[src/server/entities/Prop.ts:14](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/server/entities/Prop.ts#L14)

***

### fromHandle()

```ts
static fromHandle(handle): Prop
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `handle` | `number` |

#### Returns

[`Prop`](Prop.md)

#### Defined in

[src/server/entities/Prop.ts:32](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/server/entities/Prop.ts#L32)

***

### fromNetworkId()

```ts
static fromNetworkId(networkId): null | Prop
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `networkId` | `number` |

#### Returns

`null` \| [`Prop`](Prop.md)

#### Overrides

`BaseEntity.fromNetworkId`

#### Defined in

[src/server/entities/Prop.ts:20](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/server/entities/Prop.ts#L20)

***

### fromStateBagName()

```ts
static fromStateBagName(stateBagName): null | Prop
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `stateBagName` | `string` |

#### Returns

`null` \| [`Prop`](Prop.md)

#### Overrides

`BaseEntity.fromStateBagName`

#### Defined in

[src/server/entities/Prop.ts:26](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/server/entities/Prop.ts#L26)
