[@nativewrappers/fivem](../../../../README.md) / [server/entities/Ped](../README.md) / Ped

# Class: Ped

Defined in: lib/server/entities/Ped.d.ts:5

## Extends

- [`BaseEntity`](../../BaseEntity/classes/BaseEntity.md)

## Constructors

### Constructor

```ts
new Ped(handle): Ped;
```

Defined in: lib/server/entities/Ped.d.ts:7

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `handle` | `number` |

#### Returns

`Ped`

#### Overrides

[`BaseEntity`](../../BaseEntity/classes/BaseEntity.md).[`constructor`](../../BaseEntity/classes/BaseEntity.md#constructor)

## Properties

| Property | Modifier | Type | Overrides | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ | ------ |
| <a id="handle"></a> `handle` | `protected` | `number` | - | [`BaseEntity`](../../BaseEntity/classes/BaseEntity.md).[`handle`](../../BaseEntity/classes/BaseEntity.md#handle) | lib/server/entities/BaseEntity.d.ts:8 |
| <a id="type"></a> `type` | `protected` | `ClassTypes` | [`BaseEntity`](../../BaseEntity/classes/BaseEntity.md).[`type`](../../BaseEntity/classes/BaseEntity.md#type) | - | lib/server/entities/Ped.d.ts:6 |

## Accessors

### Armour

#### Get Signature

```ts
get Armour(): number;
```

Defined in: lib/server/entities/Ped.d.ts:16

##### Returns

`number`

***

### AttachedTo

#### Get Signature

```ts
get AttachedTo(): null | BaseEntity;
```

Defined in: lib/server/entities/BaseEntity.d.ts:23

##### Returns

`null` \| [`BaseEntity`](../../BaseEntity/classes/BaseEntity.md)

the entity that the calling entity is attached to, or null if
there is none

#### Inherited from

[`BaseEntity`](../../BaseEntity/classes/BaseEntity.md).[`AttachedTo`](../../BaseEntity/classes/BaseEntity.md#attachedto)

***

### CauseOfDeath

#### Get Signature

```ts
get CauseOfDeath(): number;
```

Defined in: lib/server/entities/Ped.d.ts:17

##### Returns

`number`

***

### CurrentVehicle

#### Get Signature

```ts
get CurrentVehicle(): null | Vehicle;
```

Defined in: lib/server/entities/Ped.d.ts:28

##### Returns

`null` \| [`Vehicle`](../../Vehicle/classes/Vehicle.md)

the current vehicle the ped is in, or null if it doesn't exist

***

### DeathCause

#### Get Signature

```ts
get DeathCause(): number;
```

Defined in: lib/server/entities/Ped.d.ts:23

##### Returns

`number`

***

### DesiredHeading

#### Get Signature

```ts
get DesiredHeading(): number;
```

Defined in: lib/server/entities/Ped.d.ts:18

##### Returns

`number`

***

### Exists

#### Get Signature

```ts
get Exists(): boolean;
```

Defined in: lib/server/entities/BaseEntity.d.ts:18

##### Returns

`boolean`

#### Inherited from

[`BaseEntity`](../../BaseEntity/classes/BaseEntity.md).[`Exists`](../../BaseEntity/classes/BaseEntity.md#exists)

***

### FirstOwner

#### Get Signature

```ts
get FirstOwner(): number;
```

Defined in: lib/server/entities/BaseEntity.d.ts:17

##### Returns

`number`

#### Inherited from

[`BaseEntity`](../../BaseEntity/classes/BaseEntity.md).[`FirstOwner`](../../BaseEntity/classes/BaseEntity.md#firstowner)

***

### Handle

#### Get Signature

```ts
get Handle(): number;
```

Defined in: lib/server/entities/BaseEntity.d.ts:15

##### Returns

`number`

#### Inherited from

[`BaseEntity`](../../BaseEntity/classes/BaseEntity.md).[`Handle`](../../BaseEntity/classes/BaseEntity.md#handle-1)

***

### Heading

#### Get Signature

```ts
get Heading(): number;
```

Defined in: lib/server/entities/BaseEntity.d.ts:29

##### Returns

`number`

#### Inherited from

[`BaseEntity`](../../BaseEntity/classes/BaseEntity.md).[`Heading`](../../BaseEntity/classes/BaseEntity.md#heading)

***

### Health

#### Get Signature

```ts
get Health(): number;
```

Defined in: lib/server/entities/BaseEntity.d.ts:31

##### Returns

`number`

#### Inherited from

[`BaseEntity`](../../BaseEntity/classes/BaseEntity.md).[`Health`](../../BaseEntity/classes/BaseEntity.md#health)

***

### IsNoLongerNeeded

#### Get Signature

```ts
get IsNoLongerNeeded(): boolean;
```

Defined in: lib/server/entities/BaseEntity.d.ts:50

##### Returns

`boolean`

#### Inherited from

[`BaseEntity`](../../BaseEntity/classes/BaseEntity.md).[`IsNoLongerNeeded`](../../BaseEntity/classes/BaseEntity.md#isnolongerneeded)

***

### IsPlayer

#### Get Signature

```ts
get IsPlayer(): boolean;
```

Defined in: lib/server/entities/Ped.d.ts:30

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

#### Inherited from

[`BaseEntity`](../../BaseEntity/classes/BaseEntity.md).[`IsVisible`](../../BaseEntity/classes/BaseEntity.md#isvisible)

***

### LastSourceOfDamage

#### Get Signature

```ts
get LastSourceOfDamage(): number;
```

Defined in: lib/server/entities/Ped.d.ts:22

##### Returns

`number`

***

### LastVehicle

#### Get Signature

```ts
get LastVehicle(): null | Vehicle;
```

Defined in: lib/server/entities/Ped.d.ts:29

##### Returns

`null` \| [`Vehicle`](../../Vehicle/classes/Vehicle.md)

***

### MaxHealth

#### Get Signature

```ts
get MaxHealth(): number;
```

Defined in: lib/server/entities/Ped.d.ts:19

##### Returns

`number`

#### Overrides

[`BaseEntity`](../../BaseEntity/classes/BaseEntity.md).[`MaxHealth`](../../BaseEntity/classes/BaseEntity.md#maxhealth)

***

### Model

#### Get Signature

```ts
get Model(): number;
```

Defined in: lib/server/entities/BaseEntity.d.ts:33

##### Returns

`number`

#### Inherited from

[`BaseEntity`](../../BaseEntity/classes/BaseEntity.md).[`Model`](../../BaseEntity/classes/BaseEntity.md#model)

***

### NetworkId

#### Get Signature

```ts
get NetworkId(): number;
```

Defined in: lib/server/entities/BaseEntity.d.ts:49

##### Returns

`number`

#### Inherited from

[`BaseEntity`](../../BaseEntity/classes/BaseEntity.md).[`NetworkId`](../../BaseEntity/classes/BaseEntity.md#networkid)

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

#### Inherited from

[`BaseEntity`](../../BaseEntity/classes/BaseEntity.md).[`OrphanMode`](../../BaseEntity/classes/BaseEntity.md#orphanmode)

***

### Owner

#### Get Signature

```ts
get Owner(): number;
```

Defined in: lib/server/entities/BaseEntity.d.ts:16

##### Returns

`number`

#### Inherited from

[`BaseEntity`](../../BaseEntity/classes/BaseEntity.md).[`Owner`](../../BaseEntity/classes/BaseEntity.md#owner)

***

### PopulationType

#### Get Signature

```ts
get PopulationType(): PopulationType;
```

Defined in: lib/server/entities/BaseEntity.d.ts:34

##### Returns

[`PopulationType`](../../../enum/PopulationType/enumerations/PopulationType.md)

#### Inherited from

[`BaseEntity`](../../BaseEntity/classes/BaseEntity.md).[`PopulationType`](../../BaseEntity/classes/BaseEntity.md#populationtype)

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

#### Inherited from

[`BaseEntity`](../../BaseEntity/classes/BaseEntity.md).[`Position`](../../BaseEntity/classes/BaseEntity.md#position)

***

### PositionAndHeading

#### Get Signature

```ts
get PositionAndHeading(): Vector4;
```

Defined in: lib/server/entities/BaseEntity.d.ts:30

##### Returns

`Vector4`

#### Inherited from

[`BaseEntity`](../../BaseEntity/classes/BaseEntity.md).[`PositionAndHeading`](../../BaseEntity/classes/BaseEntity.md#positionandheading)

***

### Rotation

#### Get Signature

```ts
get Rotation(): Vector3;
```

Defined in: lib/server/entities/BaseEntity.d.ts:35

##### Returns

`Vector3`

#### Inherited from

[`BaseEntity`](../../BaseEntity/classes/BaseEntity.md).[`Rotation`](../../BaseEntity/classes/BaseEntity.md#rotation)

***

### RotationVelocity

#### Get Signature

```ts
get RotationVelocity(): Vector3;
```

Defined in: lib/server/entities/BaseEntity.d.ts:36

##### Returns

`Vector3`

#### Inherited from

[`BaseEntity`](../../BaseEntity/classes/BaseEntity.md).[`RotationVelocity`](../../BaseEntity/classes/BaseEntity.md#rotationvelocity)

***

### RoutingBucket

#### Get Signature

```ts
get RoutingBucket(): number;
```

Defined in: lib/server/entities/BaseEntity.d.ts:37

##### Returns

`number`

#### Inherited from

[`BaseEntity`](../../BaseEntity/classes/BaseEntity.md).[`RoutingBucket`](../../BaseEntity/classes/BaseEntity.md#routingbucket)

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

#### Inherited from

[`BaseEntity`](../../BaseEntity/classes/BaseEntity.md).[`Script`](../../BaseEntity/classes/BaseEntity.md#script)

***

### Speed

#### Get Signature

```ts
get Speed(): number;
```

Defined in: lib/server/entities/BaseEntity.d.ts:42

##### Returns

`number`

#### Inherited from

[`BaseEntity`](../../BaseEntity/classes/BaseEntity.md).[`Speed`](../../BaseEntity/classes/BaseEntity.md#speed)

***

### State

#### Get Signature

```ts
get State(): StateBagInterface;
```

Defined in: lib/server/entities/BaseEntity.d.ts:14

##### Returns

[`StateBagInterface`](../../../../redm/definitions/Citizen/interfaces/StateBagInterface.md)

#### Inherited from

[`BaseEntity`](../../BaseEntity/classes/BaseEntity.md).[`State`](../../BaseEntity/classes/BaseEntity.md#state)

***

### TaskCommand

#### Get Signature

```ts
get TaskCommand(): number;
```

Defined in: lib/server/entities/Ped.d.ts:20

##### Returns

`number`

***

### TaskStage

#### Get Signature

```ts
get TaskStage(): number;
```

Defined in: lib/server/entities/Ped.d.ts:21

##### Returns

`number`

***

### Type

#### Get Signature

```ts
get Type(): eEntityType;
```

Defined in: lib/server/entities/BaseEntity.d.ts:43

##### Returns

[`eEntityType`](../../../enum/eEntityType/enumerations/eEntityType.md)

#### Inherited from

[`BaseEntity`](../../BaseEntity/classes/BaseEntity.md).[`Type`](../../BaseEntity/classes/BaseEntity.md#type-1)

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

#### Inherited from

[`BaseEntity`](../../BaseEntity/classes/BaseEntity.md).[`Velocity`](../../BaseEntity/classes/BaseEntity.md#velocity)

***

### Weapon

#### Get Signature

```ts
get Weapon(): number;
```

Defined in: lib/server/entities/Ped.d.ts:24

##### Returns

`number`

## Methods

### delete()

```ts
delete(): void;
```

Defined in: lib/server/entities/BaseEntity.d.ts:53

#### Returns

`void`

#### Inherited from

[`BaseEntity`](../../BaseEntity/classes/BaseEntity.md).[`delete`](../../BaseEntity/classes/BaseEntity.md#delete)

***

### getSpecificTaskType()

```ts
getSpecificTaskType(index): number;
```

Defined in: lib/server/entities/Ped.d.ts:31

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `index` | `number` |

#### Returns

`number`

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

#### Inherited from

[`BaseEntity`](../../BaseEntity/classes/BaseEntity.md).[`replaceHandle`](../../BaseEntity/classes/BaseEntity.md#replacehandle)

***

### AllPeds()

```ts
static AllPeds(): IterableIterator<Ped>;
```

Defined in: lib/server/entities/Ped.d.ts:12

Get an interable list of peds currently on the server

#### Returns

`IterableIterator`\<`Ped`\>

Iterable list of Peds.

***

### fromNetworkId()

```ts
static fromNetworkId(netId): null | Ped;
```

Defined in: lib/server/entities/Ped.d.ts:13

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `netId` | `number` |

#### Returns

`null` \| `Ped`

#### Overrides

[`BaseEntity`](../../BaseEntity/classes/BaseEntity.md).[`fromNetworkId`](../../BaseEntity/classes/BaseEntity.md#fromnetworkid)

***

### fromSource()

```ts
static fromSource(source): Ped;
```

Defined in: lib/server/entities/Ped.d.ts:15

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `source` | `number` |

#### Returns

`Ped`

***

### fromStateBagName()

```ts
static fromStateBagName(stateBagName): null | Ped;
```

Defined in: lib/server/entities/Ped.d.ts:14

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `stateBagName` | `string` |

#### Returns

`null` \| `Ped`

#### Overrides

[`BaseEntity`](../../BaseEntity/classes/BaseEntity.md).[`fromStateBagName`](../../BaseEntity/classes/BaseEntity.md#fromstatebagname)
