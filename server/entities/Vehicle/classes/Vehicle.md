[@nativewrappers/fivem](../../../../README.md) / [server/entities/Vehicle](../README.md) / Vehicle

# Class: Vehicle

Defined in: lib/server/entities/Vehicle.d.ts:7

## Extends

- [`BaseEntity`](../../BaseEntity/classes/BaseEntity.md)

## Constructors

### Constructor

```ts
new Vehicle(handle): Vehicle;
```

Defined in: lib/server/entities/Vehicle.d.ts:9

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `handle` | `number` |

#### Returns

`Vehicle`

#### Overrides

[`BaseEntity`](../../BaseEntity/classes/BaseEntity.md).[`constructor`](../../BaseEntity/classes/BaseEntity.md#constructor)

## Properties

| Property | Modifier | Type | Overrides | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ | ------ |
| <a id="handle"></a> `handle` | `protected` | `number` | - | [`BaseEntity`](../../BaseEntity/classes/BaseEntity.md).[`handle`](../../BaseEntity/classes/BaseEntity.md#handle) | lib/server/entities/BaseEntity.d.ts:8 |
| <a id="type"></a> `type` | `protected` | `ClassTypes` | [`BaseEntity`](../../BaseEntity/classes/BaseEntity.md).[`type`](../../BaseEntity/classes/BaseEntity.md#type) | - | lib/server/entities/Vehicle.d.ts:8 |

## Accessors

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

### BodyHealth

#### Get Signature

```ts
get BodyHealth(): number;
```

Defined in: lib/server/entities/Vehicle.d.ts:20

##### Returns

`number`

***

### CustomPrimaryColour

#### Get Signature

```ts
get CustomPrimaryColour(): Color;
```

Defined in: lib/server/entities/Vehicle.d.ts:22

##### Returns

`Color`

***

### CustomSecondaryColour

#### Get Signature

```ts
get CustomSecondaryColour(): Color;
```

Defined in: lib/server/entities/Vehicle.d.ts:23

##### Returns

`Color`

***

### DashboardColour

#### Get Signature

```ts
get DashboardColour(): number;
```

Defined in: lib/server/entities/Vehicle.d.ts:24

##### Returns

`number`

***

### DirtLevel

#### Get Signature

```ts
get DirtLevel(): number;
```

Defined in: lib/server/entities/Vehicle.d.ts:25

##### Returns

`number`

***

### DoorsLockedForPlayer

#### Get Signature

```ts
get DoorsLockedForPlayer(): number;
```

Defined in: lib/server/entities/Vehicle.d.ts:28

##### Returns

`number`

***

### EngineHealth

#### Get Signature

```ts
get EngineHealth(): number;
```

Defined in: lib/server/entities/Vehicle.d.ts:29

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

### ExtraColours

#### Get Signature

```ts
get ExtraColours(): [number, number];
```

Defined in: lib/server/entities/Vehicle.d.ts:30

##### Returns

\[`number`, `number`\]

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

### FlightNozzlePosition

#### Get Signature

```ts
get FlightNozzlePosition(): number;
```

Defined in: lib/server/entities/Vehicle.d.ts:31

##### Returns

`number`

***

### Handbrake

#### Get Signature

```ts
get Handbrake(): boolean;
```

Defined in: lib/server/entities/Vehicle.d.ts:32

##### Returns

`boolean`

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

### HasBeenOwnedByPlayer

#### Get Signature

```ts
get HasBeenOwnedByPlayer(): boolean;
```

Defined in: lib/server/entities/Vehicle.d.ts:50

##### Returns

`boolean`

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

### HeadlightsColour

#### Get Signature

```ts
get HeadlightsColour(): number;
```

Defined in: lib/server/entities/Vehicle.d.ts:33

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

#### Inherited from

[`BaseEntity`](../../BaseEntity/classes/BaseEntity.md).[`Health`](../../BaseEntity/classes/BaseEntity.md#health)

***

### HomingLockonState

#### Get Signature

```ts
get HomingLockonState(): number;
```

Defined in: lib/server/entities/Vehicle.d.ts:34

##### Returns

`number`

***

### InteriorColour

#### Get Signature

```ts
get InteriorColour(): number;
```

Defined in: lib/server/entities/Vehicle.d.ts:35

##### Returns

`number`

***

### IsEngineRunning

#### Get Signature

```ts
get IsEngineRunning(): boolean;
```

Defined in: lib/server/entities/Vehicle.d.ts:17

##### Returns

`boolean`

***

### IsEngineStarting

#### Get Signature

```ts
get IsEngineStarting(): boolean;
```

Defined in: lib/server/entities/Vehicle.d.ts:51

##### Returns

`boolean`

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

### IsPrimaryColourCustom

#### Get Signature

```ts
get IsPrimaryColourCustom(): boolean;
```

Defined in: lib/server/entities/Vehicle.d.ts:18

##### Returns

`boolean`

***

### IsSecondaryColourCustom

#### Get Signature

```ts
get IsSecondaryColourCustom(): boolean;
```

Defined in: lib/server/entities/Vehicle.d.ts:19

##### Returns

`boolean`

***

### IsSirenOn

#### Get Signature

```ts
get IsSirenOn(): boolean;
```

Defined in: lib/server/entities/Vehicle.d.ts:52

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

### LightsState

#### Get Signature

```ts
get LightsState(): [boolean, boolean];
```

Defined in: lib/server/entities/Vehicle.d.ts:36

##### Returns

\[`boolean`, `boolean`\]

***

### Livery

#### Get Signature

```ts
get Livery(): number;
```

Defined in: lib/server/entities/Vehicle.d.ts:37

##### Returns

`number`

***

### LockOnTarget

#### Get Signature

```ts
get LockOnTarget(): Vehicle;
```

Defined in: lib/server/entities/Vehicle.d.ts:38

##### Returns

`Vehicle`

***

### LockStatus

#### Get Signature

```ts
get LockStatus(): VehicleLockStatus;
```

Defined in: lib/server/entities/Vehicle.d.ts:26

##### Returns

[`VehicleLockStatus`](../../../enum/VehicleLockStatus/enumerations/VehicleLockStatus.md)

***

### MainRotorHealth

#### Get Signature

```ts
get MainRotorHealth(): number;
```

Defined in: lib/server/entities/Vehicle.d.ts:56

##### Returns

`number`

***

### MaxHealth

#### Get Signature

```ts
get MaxHealth(): number;
```

Defined in: lib/server/entities/Vehicle.d.ts:53

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

### PetrolTankHealth

#### Get Signature

```ts
get PetrolTankHealth(): number;
```

Defined in: lib/server/entities/Vehicle.d.ts:42

##### Returns

`number`

***

### Plate

#### Get Signature

```ts
get Plate(): string;
```

Defined in: lib/server/entities/Vehicle.d.ts:39

##### Returns

`string`

***

### PlateIndex

#### Get Signature

```ts
get PlateIndex(): number;
```

Defined in: lib/server/entities/Vehicle.d.ts:41

##### Returns

`number`

***

### PlateTrimmed

#### Get Signature

```ts
get PlateTrimmed(): string;
```

Defined in: lib/server/entities/Vehicle.d.ts:40

##### Returns

`string`

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

### RadioStation

#### Get Signature

```ts
get RadioStation(): number;
```

Defined in: lib/server/entities/Vehicle.d.ts:43

##### Returns

`number`

***

### RoofLivery

#### Get Signature

```ts
get RoofLivery(): number;
```

Defined in: lib/server/entities/Vehicle.d.ts:44

##### Returns

`number`

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

### ScriptTaskCommand

#### Get Signature

```ts
get ScriptTaskCommand(): number;
```

Defined in: lib/server/entities/Vehicle.d.ts:54

##### Returns

`number`

***

### ScriptTaskStage

#### Get Signature

```ts
get ScriptTaskStage(): number;
```

Defined in: lib/server/entities/Vehicle.d.ts:55

##### Returns

`number`

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

### SteeringAngle

#### Get Signature

```ts
get SteeringAngle(): number;
```

Defined in: lib/server/entities/Vehicle.d.ts:45

##### Returns

`number`

***

### TailRotorHealth

#### Get Signature

```ts
get TailRotorHealth(): number;
```

Defined in: lib/server/entities/Vehicle.d.ts:57

##### Returns

`number`

***

### TrainCarriageEngine

#### Get Signature

```ts
get TrainCarriageEngine(): number;
```

Defined in: lib/server/entities/Vehicle.d.ts:61

This might supposed to be TrainEngineHealth?

##### Returns

`number`

***

### TrainCarriageIndex

#### Get Signature

```ts
get TrainCarriageIndex(): number;
```

Defined in: lib/server/entities/Vehicle.d.ts:62

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

### TyreSmokeColour

#### Get Signature

```ts
get TyreSmokeColour(): Color;
```

Defined in: lib/server/entities/Vehicle.d.ts:47

##### Returns

`Color`

***

### VehicleColours

#### Get Signature

```ts
get VehicleColours(): [number, number];
```

Defined in: lib/server/entities/Vehicle.d.ts:21

##### Returns

\[`number`, `number`\]

***

### VehicleType

#### Get Signature

```ts
get VehicleType(): VehicleType;
```

Defined in: lib/server/entities/Vehicle.d.ts:46

##### Returns

[`VehicleType`](../../../enum/VehicleType/enumerations/VehicleType.md)

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

### WheelType

#### Get Signature

```ts
get WheelType(): number;
```

Defined in: lib/server/entities/Vehicle.d.ts:48

##### Returns

`number`

***

### WindowTint

#### Get Signature

```ts
get WindowTint(): number;
```

Defined in: lib/server/entities/Vehicle.d.ts:49

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

### getDoorStatus()

```ts
getDoorStatus(doorIndex): number;
```

Defined in: lib/server/entities/Vehicle.d.ts:27

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `doorIndex` | `number` |

#### Returns

`number`

***

### getLastPedInSeat()

```ts
getLastPedInSeat(seatIndex): number;
```

Defined in: lib/server/entities/Vehicle.d.ts:66

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `seatIndex` | `number` |

#### Returns

`number`

***

### getPedInSeat()

```ts
getPedInSeat(seatIndex): number;
```

Defined in: lib/server/entities/Vehicle.d.ts:65

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `seatIndex` | `number` |

#### Returns

`number`

***

### isExtraTurnedOn()

```ts
isExtraTurnedOn(extraId): boolean;
```

Defined in: lib/server/entities/Vehicle.d.ts:64

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `extraId` | `number` |

#### Returns

`boolean`

***

### isTyreBurst()

```ts
isTyreBurst(wheelId, completely): boolean;
```

Defined in: lib/server/entities/Vehicle.d.ts:63

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `wheelId` | `number` |
| `completely` | `boolean` |

#### Returns

`boolean`

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

### AllVehicles()

```ts
static AllVehicles(): IterableIterator<Vehicle>;
```

Defined in: lib/server/entities/Vehicle.d.ts:14

Get an interable list of vehicles currently on the server

#### Returns

`IterableIterator`\<`Vehicle`\>

Iterable list of Vehicles.

***

### fromNetworkId()

```ts
static fromNetworkId(networkId): null | Vehicle;
```

Defined in: lib/server/entities/Vehicle.d.ts:15

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `networkId` | `number` |

#### Returns

`null` \| `Vehicle`

#### Overrides

[`BaseEntity`](../../BaseEntity/classes/BaseEntity.md).[`fromNetworkId`](../../BaseEntity/classes/BaseEntity.md#fromnetworkid)

***

### fromStateBagName()

```ts
static fromStateBagName(stateBageName): null | Vehicle;
```

Defined in: lib/server/entities/Vehicle.d.ts:16

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `stateBageName` | `string` |

#### Returns

`null` \| `Vehicle`

#### Overrides

[`BaseEntity`](../../BaseEntity/classes/BaseEntity.md).[`fromStateBagName`](../../BaseEntity/classes/BaseEntity.md#fromstatebagname)
