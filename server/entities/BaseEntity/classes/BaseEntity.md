[@nativewrappers/fivem](../../../../README.md) / [server/entities/BaseEntity](../README.md) / BaseEntity

# Class: BaseEntity

Defined in: lib/server/entities/BaseEntity.d.ts:7

## Extended by

- [`Entity`](../../Entity/classes/Entity.md)
- [`Ped`](../../Ped/classes/Ped.md)
- [`Prop`](../../Prop/classes/Prop.md)
- [`Vehicle`](../../Vehicle/classes/Vehicle.md)

## Constructors

### Constructor

```ts
new BaseEntity(handle): BaseEntity;
```

Defined in: lib/server/entities/BaseEntity.d.ts:10

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `handle` | `number` |

#### Returns

`BaseEntity`

## Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="handle"></a> `handle` | `protected` | `number` | lib/server/entities/BaseEntity.d.ts:8 |
| <a id="type"></a> `type` | `protected` | `ClassTypes` | lib/server/entities/BaseEntity.d.ts:9 |

## Accessors

### AttachedTo

#### Get Signature

```ts
get AttachedTo(): null | BaseEntity;
```

Defined in: lib/server/entities/BaseEntity.d.ts:23

##### Returns

`null` \| `BaseEntity`

the entity that the calling entity is attached to, or null if
there is none

***

### Exists

#### Get Signature

```ts
get Exists(): boolean;
```

Defined in: lib/server/entities/BaseEntity.d.ts:18

##### Returns

`boolean`

***

### FirstOwner

#### Get Signature

```ts
get FirstOwner(): number;
```

Defined in: lib/server/entities/BaseEntity.d.ts:17

##### Returns

`number`

***

### Handle

#### Get Signature

```ts
get Handle(): number;
```

Defined in: lib/server/entities/BaseEntity.d.ts:15

##### Returns

`number`

***

### Heading

#### Get Signature

```ts
get Heading(): number;
```

Defined in: lib/server/entities/BaseEntity.d.ts:29

##### Returns

`number`

***

### Health

#### Get Signature

```ts
get Health(): number;
```

Defined in: lib/server/entities/BaseEntity.d.ts:31

##### Returns

`number`

***

### IsNoLongerNeeded

#### Get Signature

```ts
get IsNoLongerNeeded(): boolean;
```

Defined in: lib/server/entities/BaseEntity.d.ts:50

##### Returns

`boolean`

***

### IsVisible

#### Get Signature

```ts
get IsVisible(): boolean;
```

Defined in: lib/server/entities/BaseEntity.d.ts:48

##### Returns

`boolean`

***

### MaxHealth

#### Get Signature

```ts
get MaxHealth(): number;
```

Defined in: lib/server/entities/BaseEntity.d.ts:32

##### Returns

`number`

***

### Model

#### Get Signature

```ts
get Model(): number;
```

Defined in: lib/server/entities/BaseEntity.d.ts:33

##### Returns

`number`

***

### NetworkId

#### Get Signature

```ts
get NetworkId(): number;
```

Defined in: lib/server/entities/BaseEntity.d.ts:49

##### Returns

`number`

***

### OrphanMode

#### Get Signature

```ts
get OrphanMode(): OrphanMode;
```

Defined in: lib/server/entities/BaseEntity.d.ts:51

##### Returns

[`OrphanMode`](../../../enum/OrphanMode/enumerations/OrphanMode.md)

#### Set Signature

```ts
set OrphanMode(orphanMode): void;
```

Defined in: lib/server/entities/BaseEntity.d.ts:52

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `orphanMode` | [`OrphanMode`](../../../enum/OrphanMode/enumerations/OrphanMode.md) |

##### Returns

`void`

***

### Owner

#### Get Signature

```ts
get Owner(): number;
```

Defined in: lib/server/entities/BaseEntity.d.ts:16

##### Returns

`number`

***

### PopulationType

#### Get Signature

```ts
get PopulationType(): PopulationType;
```

Defined in: lib/server/entities/BaseEntity.d.ts:34

##### Returns

[`PopulationType`](../../../enum/PopulationType/enumerations/PopulationType.md)

***

### Position

#### Get Signature

```ts
get Position(): Vector3;
```

Defined in: lib/server/entities/BaseEntity.d.ts:24

##### Returns

`Vector3`

#### Set Signature

```ts
set Position(pos): void;
```

Defined in: lib/server/entities/BaseEntity.d.ts:28

This is an RPC native, meaning that it can fail to work.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `pos` | `Vector3` |

##### Returns

`void`

***

### PositionAndHeading

#### Get Signature

```ts
get PositionAndHeading(): Vector4;
```

Defined in: lib/server/entities/BaseEntity.d.ts:30

##### Returns

`Vector4`

***

### Rotation

#### Get Signature

```ts
get Rotation(): Vector3;
```

Defined in: lib/server/entities/BaseEntity.d.ts:35

##### Returns

`Vector3`

***

### RotationVelocity

#### Get Signature

```ts
get RotationVelocity(): Vector3;
```

Defined in: lib/server/entities/BaseEntity.d.ts:36

##### Returns

`Vector3`

***

### RoutingBucket

#### Get Signature

```ts
get RoutingBucket(): number;
```

Defined in: lib/server/entities/BaseEntity.d.ts:37

##### Returns

`number`

***

### Script

#### Get Signature

```ts
get Script(): string;
```

Defined in: lib/server/entities/BaseEntity.d.ts:41

##### Returns

`string`

The script that made the entity

***

### Speed

#### Get Signature

```ts
get Speed(): number;
```

Defined in: lib/server/entities/BaseEntity.d.ts:42

##### Returns

`number`

***

### State

#### Get Signature

```ts
get State(): StateBagInterface;
```

Defined in: lib/server/entities/BaseEntity.d.ts:14

##### Returns

[`StateBagInterface`](../../../../redm/definitions/Citizen/interfaces/StateBagInterface.md)

***

### Type

#### Get Signature

```ts
get Type(): eEntityType;
```

Defined in: lib/server/entities/BaseEntity.d.ts:43

##### Returns

[`eEntityType`](../../../enum/eEntityType/enumerations/eEntityType.md)

***

### Velocity

#### Get Signature

```ts
get Velocity(): Vector3;
```

Defined in: lib/server/entities/BaseEntity.d.ts:47

##### Returns

`Vector3`

the entitys velocity, if the entity is a ped it will return Vector3(0, 0, 0)

## Methods

### delete()

```ts
delete(): void;
```

Defined in: lib/server/entities/BaseEntity.d.ts:53

#### Returns

`void`

***

### replaceHandle()

```ts
replaceHandle(newHandle): void;
```

Defined in: lib/server/entities/BaseEntity.d.ts:11

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `newHandle` | `number` |

#### Returns

`void`

***

### fromNetworkId()

```ts
static fromNetworkId(networkId): null | BaseEntity;
```

Defined in: lib/server/entities/BaseEntity.d.ts:12

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `networkId` | `number` |

#### Returns

`null` \| `BaseEntity`

***

### fromStateBagName()

```ts
static fromStateBagName(stateBagName): null | BaseEntity;
```

Defined in: lib/server/entities/BaseEntity.d.ts:13

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `stateBagName` | `string` |

#### Returns

`null` \| `BaseEntity`
