[@nativewrappers/fivem](../../README.md) / [server](../README.md) / Vehicle

# Class: Vehicle

Defined in: server/entities/Vehicle.d.ts:7

## Extends

- `BaseEntity`

## Constructors

### new Vehicle()

```ts
new Vehicle(handle): Vehicle
```

Defined in: server/entities/Vehicle.d.ts:9

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `handle` | `number` |

#### Returns

[`Vehicle`](Vehicle.md)

#### Overrides

```ts
BaseEntity.constructor
```

## Properties

| Property | Modifier | Type | Overrides | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ | ------ |
| <a id="handle-1"></a> `handle` | `protected` | `number` | - | `BaseEntity.handle` | server/entities/BaseEntity.d.ts:9 |
| <a id="type"></a> `type` | `protected` | `ClassTypes` | `BaseEntity.type` | - | server/entities/Vehicle.d.ts:8 |

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

### BodyHealth

#### Get Signature

```ts
get BodyHealth(): number
```

Defined in: server/entities/Vehicle.d.ts:20

##### Returns

`number`

***

### CustomPrimaryColour

#### Get Signature

```ts
get CustomPrimaryColour(): Color
```

Defined in: server/entities/Vehicle.d.ts:22

##### Returns

`Color`

***

### CustomSecondaryColour

#### Get Signature

```ts
get CustomSecondaryColour(): Color
```

Defined in: server/entities/Vehicle.d.ts:23

##### Returns

`Color`

***

### DashboardColour

#### Get Signature

```ts
get DashboardColour(): number
```

Defined in: server/entities/Vehicle.d.ts:24

##### Returns

`number`

***

### DirtLevel

#### Get Signature

```ts
get DirtLevel(): number
```

Defined in: server/entities/Vehicle.d.ts:25

##### Returns

`number`

***

### DoorsLockedForPlayer

#### Get Signature

```ts
get DoorsLockedForPlayer(): number
```

Defined in: server/entities/Vehicle.d.ts:28

##### Returns

`number`

***

### EngineHealth

#### Get Signature

```ts
get EngineHealth(): number
```

Defined in: server/entities/Vehicle.d.ts:29

##### Returns

`number`

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

### ExtraColours

#### Get Signature

```ts
get ExtraColours(): [number, number]
```

Defined in: server/entities/Vehicle.d.ts:30

##### Returns

\[`number`, `number`\]

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

### FlightNozzlePosition

#### Get Signature

```ts
get FlightNozzlePosition(): number
```

Defined in: server/entities/Vehicle.d.ts:31

##### Returns

`number`

***

### Handbrake

#### Get Signature

```ts
get Handbrake(): boolean
```

Defined in: server/entities/Vehicle.d.ts:32

##### Returns

`boolean`

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

### HasBeenOwnedByPlayer

#### Get Signature

```ts
get HasBeenOwnedByPlayer(): boolean
```

Defined in: server/entities/Vehicle.d.ts:50

##### Returns

`boolean`

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

### HeadlightsColour

#### Get Signature

```ts
get HeadlightsColour(): number
```

Defined in: server/entities/Vehicle.d.ts:33

##### Returns

`number`

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

### HomingLockonState

#### Get Signature

```ts
get HomingLockonState(): number
```

Defined in: server/entities/Vehicle.d.ts:34

##### Returns

`number`

***

### InteriorColour

#### Get Signature

```ts
get InteriorColour(): number
```

Defined in: server/entities/Vehicle.d.ts:35

##### Returns

`number`

***

### IsEngineRunning

#### Get Signature

```ts
get IsEngineRunning(): boolean
```

Defined in: server/entities/Vehicle.d.ts:17

##### Returns

`boolean`

***

### IsEngineStarting

#### Get Signature

```ts
get IsEngineStarting(): boolean
```

Defined in: server/entities/Vehicle.d.ts:51

##### Returns

`boolean`

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

### IsPrimaryColourCustom

#### Get Signature

```ts
get IsPrimaryColourCustom(): boolean
```

Defined in: server/entities/Vehicle.d.ts:18

##### Returns

`boolean`

***

### IsSecondaryColourCustom

#### Get Signature

```ts
get IsSecondaryColourCustom(): boolean
```

Defined in: server/entities/Vehicle.d.ts:19

##### Returns

`boolean`

***

### IsSirenOn

#### Get Signature

```ts
get IsSirenOn(): boolean
```

Defined in: server/entities/Vehicle.d.ts:52

##### Returns

`boolean`

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

### LightsState

#### Get Signature

```ts
get LightsState(): [boolean, boolean]
```

Defined in: server/entities/Vehicle.d.ts:36

##### Returns

\[`boolean`, `boolean`\]

***

### Livery

#### Get Signature

```ts
get Livery(): number
```

Defined in: server/entities/Vehicle.d.ts:37

##### Returns

`number`

***

### LockOnTarget

#### Get Signature

```ts
get LockOnTarget(): Vehicle
```

Defined in: server/entities/Vehicle.d.ts:38

##### Returns

[`Vehicle`](Vehicle.md)

***

### LockStatus

#### Get Signature

```ts
get LockStatus(): VehicleLockStatus
```

Defined in: server/entities/Vehicle.d.ts:26

##### Returns

[`VehicleLockStatus`](../enumerations/VehicleLockStatus.md)

***

### MainRotorHealth

#### Get Signature

```ts
get MainRotorHealth(): number
```

Defined in: server/entities/Vehicle.d.ts:56

##### Returns

`number`

***

### MaxHealth

#### Get Signature

```ts
get MaxHealth(): number
```

Defined in: server/entities/Vehicle.d.ts:53

##### Returns

`number`

#### Overrides

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

### PetrolTankHealth

#### Get Signature

```ts
get PetrolTankHealth(): number
```

Defined in: server/entities/Vehicle.d.ts:42

##### Returns

`number`

***

### Plate

#### Get Signature

```ts
get Plate(): string
```

Defined in: server/entities/Vehicle.d.ts:39

##### Returns

`string`

***

### PlateIndex

#### Get Signature

```ts
get PlateIndex(): number
```

Defined in: server/entities/Vehicle.d.ts:41

##### Returns

`number`

***

### PlateTrimmed

#### Get Signature

```ts
get PlateTrimmed(): string
```

Defined in: server/entities/Vehicle.d.ts:40

##### Returns

`string`

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

### RadioStation

#### Get Signature

```ts
get RadioStation(): number
```

Defined in: server/entities/Vehicle.d.ts:43

##### Returns

`number`

***

### RoofLivery

#### Get Signature

```ts
get RoofLivery(): number
```

Defined in: server/entities/Vehicle.d.ts:44

##### Returns

`number`

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

### ScriptTaskCommand

#### Get Signature

```ts
get ScriptTaskCommand(): number
```

Defined in: server/entities/Vehicle.d.ts:54

##### Returns

`number`

***

### ScriptTaskStage

#### Get Signature

```ts
get ScriptTaskStage(): number
```

Defined in: server/entities/Vehicle.d.ts:55

##### Returns

`number`

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

### SteeringAngle

#### Get Signature

```ts
get SteeringAngle(): number
```

Defined in: server/entities/Vehicle.d.ts:45

##### Returns

`number`

***

### TailRotorHealth

#### Get Signature

```ts
get TailRotorHealth(): number
```

Defined in: server/entities/Vehicle.d.ts:57

##### Returns

`number`

***

### TrainCarriageEngine

#### Get Signature

```ts
get TrainCarriageEngine(): number
```

Defined in: server/entities/Vehicle.d.ts:61

This might supposed to be TrainEngineHealth?

##### Returns

`number`

***

### TrainCarriageIndex

#### Get Signature

```ts
get TrainCarriageIndex(): number
```

Defined in: server/entities/Vehicle.d.ts:62

##### Returns

`number`

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

### TyreSmokeColour

#### Get Signature

```ts
get TyreSmokeColour(): Color
```

Defined in: server/entities/Vehicle.d.ts:47

##### Returns

`Color`

***

### VehicleColours

#### Get Signature

```ts
get VehicleColours(): [number, number]
```

Defined in: server/entities/Vehicle.d.ts:21

##### Returns

\[`number`, `number`\]

***

### VehicleType

#### Get Signature

```ts
get VehicleType(): VehicleType
```

Defined in: server/entities/Vehicle.d.ts:46

##### Returns

[`VehicleType`](../enumerations/VehicleType.md)

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

***

### WheelType

#### Get Signature

```ts
get WheelType(): number
```

Defined in: server/entities/Vehicle.d.ts:48

##### Returns

`number`

***

### WindowTint

#### Get Signature

```ts
get WindowTint(): number
```

Defined in: server/entities/Vehicle.d.ts:49

##### Returns

`number`

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

### getDoorStatus()

```ts
getDoorStatus(doorIndex): number
```

Defined in: server/entities/Vehicle.d.ts:27

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `doorIndex` | `number` |

#### Returns

`number`

***

### getLastPedInSeat()

```ts
getLastPedInSeat(seatIndex): number
```

Defined in: server/entities/Vehicle.d.ts:66

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `seatIndex` | `number` |

#### Returns

`number`

***

### getPedInSeat()

```ts
getPedInSeat(seatIndex): number
```

Defined in: server/entities/Vehicle.d.ts:65

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `seatIndex` | `number` |

#### Returns

`number`

***

### isExtraTurnedOn()

```ts
isExtraTurnedOn(extraId): boolean
```

Defined in: server/entities/Vehicle.d.ts:64

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `extraId` | `number` |

#### Returns

`boolean`

***

### isTyreBurst()

```ts
isTyreBurst(wheelId, completely): boolean
```

Defined in: server/entities/Vehicle.d.ts:63

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

### AllVehicles()

```ts
static AllVehicles(): IterableIterator<Vehicle>
```

Defined in: server/entities/Vehicle.d.ts:14

Get an interable list of vehicles currently on the server

#### Returns

`IterableIterator`\<[`Vehicle`](Vehicle.md)\>

Iterable list of Vehicles.

***

### fromNetworkId()

```ts
static fromNetworkId(networkId): null | Vehicle
```

Defined in: server/entities/Vehicle.d.ts:15

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `networkId` | `number` |

#### Returns

`null` \| [`Vehicle`](Vehicle.md)

#### Overrides

```ts
BaseEntity.fromNetworkId
```

***

### fromStateBagName()

```ts
static fromStateBagName(stateBageName): null | Vehicle
```

Defined in: server/entities/Vehicle.d.ts:16

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `stateBageName` | `string` |

#### Returns

`null` \| [`Vehicle`](Vehicle.md)

#### Overrides

```ts
BaseEntity.fromStateBagName
```
