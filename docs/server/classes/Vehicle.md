[@nativewrappers/fivem](../../README.md) / [server](../README.md) / Vehicle

# Class: Vehicle

## Extends

- `BaseEntity`

## Constructors

### new Vehicle()

```ts
new Vehicle(handle): Vehicle
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `handle` | `number` |

#### Returns

[`Vehicle`](Vehicle.md)

#### Overrides

`BaseEntity.constructor`

#### Defined in

[src/server/entities/Vehicle.ts:10](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/server/entities/Vehicle.ts#L10)

## Properties

| Property | Modifier | Type | Default value | Overrides | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ | ------ | ------ |
| `handle` | `protected` | `number` | `undefined` | - | `BaseEntity.handle` | [src/server/entities/BaseEntity.ts:11](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/server/entities/BaseEntity.ts#L11) |
| `type` | `protected` | `ClassTypes` | `ClassTypes.Vehicle` | `BaseEntity.type` | - | [src/server/entities/Vehicle.ts:9](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/server/entities/Vehicle.ts#L9) |

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

### BodyHealth

```ts
get BodyHealth(): number
```

#### Returns

`number`

#### Defined in

[src/server/entities/Vehicle.ts:48](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/server/entities/Vehicle.ts#L48)

***

### CustomPrimaryColour

```ts
get CustomPrimaryColour(): Color
```

#### Returns

[`Color`](../../fivem/classes/Color.md)

#### Defined in

[src/server/entities/Vehicle.ts:56](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/server/entities/Vehicle.ts#L56)

***

### CustomSecondaryColour

```ts
get CustomSecondaryColour(): Color
```

#### Returns

[`Color`](../../fivem/classes/Color.md)

#### Defined in

[src/server/entities/Vehicle.ts:60](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/server/entities/Vehicle.ts#L60)

***

### DashboardColour

```ts
get DashboardColour(): number
```

#### Returns

`number`

#### Defined in

[src/server/entities/Vehicle.ts:64](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/server/entities/Vehicle.ts#L64)

***

### DirtLevel

```ts
get DirtLevel(): number
```

#### Returns

`number`

#### Defined in

[src/server/entities/Vehicle.ts:68](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/server/entities/Vehicle.ts#L68)

***

### DoorsLockedForPlayer

```ts
get DoorsLockedForPlayer(): number
```

#### Returns

`number`

#### Defined in

[src/server/entities/Vehicle.ts:80](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/server/entities/Vehicle.ts#L80)

***

### DoorStatus

```ts
get DoorStatus(): number
```

#### Returns

`number`

#### Defined in

[src/server/entities/Vehicle.ts:76](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/server/entities/Vehicle.ts#L76)

***

### EngineHealth

```ts
get EngineHealth(): number
```

#### Returns

`number`

#### Defined in

[src/server/entities/Vehicle.ts:84](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/server/entities/Vehicle.ts#L84)

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

### ExtraColours

```ts
get ExtraColours(): [number, number]
```

#### Returns

[`number`, `number`]

#### Defined in

[src/server/entities/Vehicle.ts:88](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/server/entities/Vehicle.ts#L88)

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

### FlightNozzlePosition

```ts
get FlightNozzlePosition(): number
```

#### Returns

`number`

#### Defined in

[src/server/entities/Vehicle.ts:92](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/server/entities/Vehicle.ts#L92)

***

### Handbrake

```ts
get Handbrake(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/server/entities/Vehicle.ts:96](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/server/entities/Vehicle.ts#L96)

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

### HasBeenOwnedByPlayer

```ts
get HasBeenOwnedByPlayer(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/server/entities/Vehicle.ts:169](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/server/entities/Vehicle.ts#L169)

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

### HeadlightsColour

```ts
get HeadlightsColour(): number
```

#### Returns

`number`

#### Defined in

[src/server/entities/Vehicle.ts:100](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/server/entities/Vehicle.ts#L100)

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

### HomingLockonState

```ts
get HomingLockonState(): number
```

#### Returns

`number`

#### Defined in

[src/server/entities/Vehicle.ts:104](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/server/entities/Vehicle.ts#L104)

***

### InteriorColour

```ts
get InteriorColour(): number
```

#### Returns

`number`

#### Defined in

[src/server/entities/Vehicle.ts:108](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/server/entities/Vehicle.ts#L108)

***

### IsEngineRunning

```ts
get IsEngineRunning(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/server/entities/Vehicle.ts:36](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/server/entities/Vehicle.ts#L36)

***

### IsEngineStarting

```ts
get IsEngineStarting(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/server/entities/Vehicle.ts:173](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/server/entities/Vehicle.ts#L173)

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

### IsPrimaryColourCustom

```ts
get IsPrimaryColourCustom(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/server/entities/Vehicle.ts:40](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/server/entities/Vehicle.ts#L40)

***

### IsSecondaryColourCustom

```ts
get IsSecondaryColourCustom(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/server/entities/Vehicle.ts:44](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/server/entities/Vehicle.ts#L44)

***

### IsSirenOn

```ts
get IsSirenOn(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/server/entities/Vehicle.ts:177](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/server/entities/Vehicle.ts#L177)

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

### LightsState

```ts
get LightsState(): [boolean, boolean]
```

#### Returns

[`boolean`, `boolean`]

#### Defined in

[src/server/entities/Vehicle.ts:112](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/server/entities/Vehicle.ts#L112)

***

### Livery

```ts
get Livery(): number
```

#### Returns

`number`

#### Defined in

[src/server/entities/Vehicle.ts:117](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/server/entities/Vehicle.ts#L117)

***

### LockOnTarget

```ts
get LockOnTarget(): Vehicle
```

#### Returns

[`Vehicle`](Vehicle.md)

#### Defined in

[src/server/entities/Vehicle.ts:121](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/server/entities/Vehicle.ts#L121)

***

### LockStatus

```ts
get LockStatus(): VehicleLockStatus
```

#### Returns

`VehicleLockStatus`

#### Defined in

[src/server/entities/Vehicle.ts:72](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/server/entities/Vehicle.ts#L72)

***

### MainRotorHealth

```ts
get MainRotorHealth(): number
```

#### Returns

`number`

#### Defined in

[src/server/entities/Vehicle.ts:193](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/server/entities/Vehicle.ts#L193)

***

### MaxHealth

```ts
get MaxHealth(): number
```

#### Returns

`number`

#### Overrides

`BaseEntity.MaxHealth`

#### Defined in

[src/server/entities/Vehicle.ts:181](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/server/entities/Vehicle.ts#L181)

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

### PetrolTankHealth

```ts
get PetrolTankHealth(): number
```

#### Returns

`number`

#### Defined in

[src/server/entities/Vehicle.ts:137](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/server/entities/Vehicle.ts#L137)

***

### Plate

```ts
get Plate(): string
```

#### Returns

`string`

#### Defined in

[src/server/entities/Vehicle.ts:125](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/server/entities/Vehicle.ts#L125)

***

### PlateIndex

```ts
get PlateIndex(): number
```

#### Returns

`number`

#### Defined in

[src/server/entities/Vehicle.ts:133](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/server/entities/Vehicle.ts#L133)

***

### PlateTrimmed

```ts
get PlateTrimmed(): string
```

#### Returns

`string`

#### Defined in

[src/server/entities/Vehicle.ts:129](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/server/entities/Vehicle.ts#L129)

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

### RadioStation

```ts
get RadioStation(): number
```

#### Returns

`number`

#### Defined in

[src/server/entities/Vehicle.ts:141](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/server/entities/Vehicle.ts#L141)

***

### RoofLivery

```ts
get RoofLivery(): number
```

#### Returns

`number`

#### Defined in

[src/server/entities/Vehicle.ts:145](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/server/entities/Vehicle.ts#L145)

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

### ScriptTaskCommand

```ts
get ScriptTaskCommand(): number
```

#### Returns

`number`

#### Defined in

[src/server/entities/Vehicle.ts:185](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/server/entities/Vehicle.ts#L185)

***

### ScriptTaskStage

```ts
get ScriptTaskStage(): number
```

#### Returns

`number`

#### Defined in

[src/server/entities/Vehicle.ts:189](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/server/entities/Vehicle.ts#L189)

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

### SteeringAngle

```ts
get SteeringAngle(): number
```

#### Returns

`number`

#### Defined in

[src/server/entities/Vehicle.ts:149](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/server/entities/Vehicle.ts#L149)

***

### TailRotorHealth

```ts
get TailRotorHealth(): number
```

#### Returns

`number`

#### Defined in

[src/server/entities/Vehicle.ts:197](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/server/entities/Vehicle.ts#L197)

***

### TrainCarriageEngine

```ts
get TrainCarriageEngine(): number
```

This might supposed to be TrainEngineHealth?

#### Returns

`number`

#### Defined in

[src/server/entities/Vehicle.ts:204](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/server/entities/Vehicle.ts#L204)

***

### TrainCarriageIndex

```ts
get TrainCarriageIndex(): number
```

#### Returns

`number`

#### Defined in

[src/server/entities/Vehicle.ts:208](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/server/entities/Vehicle.ts#L208)

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

### TyreSmokeColour

```ts
get TyreSmokeColour(): Color
```

#### Returns

[`Color`](../../fivem/classes/Color.md)

#### Defined in

[src/server/entities/Vehicle.ts:157](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/server/entities/Vehicle.ts#L157)

***

### VehicleColours

```ts
get VehicleColours(): [number, number]
```

#### Returns

[`number`, `number`]

#### Defined in

[src/server/entities/Vehicle.ts:52](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/server/entities/Vehicle.ts#L52)

***

### VehicleType

```ts
get VehicleType(): VehicleType
```

#### Returns

`VehicleType`

#### Defined in

[src/server/entities/Vehicle.ts:153](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/server/entities/Vehicle.ts#L153)

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

***

### WheelType

```ts
get WheelType(): number
```

#### Returns

`number`

#### Defined in

[src/server/entities/Vehicle.ts:161](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/server/entities/Vehicle.ts#L161)

***

### WindowTint

```ts
get WindowTint(): number
```

#### Returns

`number`

#### Defined in

[src/server/entities/Vehicle.ts:165](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/server/entities/Vehicle.ts#L165)

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

### getLastPedInSeat()

```ts
getLastPedInSeat(seatIndex): number
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `seatIndex` | `number` |

#### Returns

`number`

#### Defined in

[src/server/entities/Vehicle.ts:224](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/server/entities/Vehicle.ts#L224)

***

### getPedInSeat()

```ts
getPedInSeat(seatIndex): number
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `seatIndex` | `number` |

#### Returns

`number`

#### Defined in

[src/server/entities/Vehicle.ts:220](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/server/entities/Vehicle.ts#L220)

***

### isExtraTurnedOn()

```ts
isExtraTurnedOn(extraId): boolean
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `extraId` | `number` |

#### Returns

`boolean`

#### Defined in

[src/server/entities/Vehicle.ts:216](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/server/entities/Vehicle.ts#L216)

***

### isTyreBurst()

```ts
isTyreBurst(wheelId, completely): boolean
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `wheelId` | `number` |
| `completely` | `boolean` |

#### Returns

`boolean`

#### Defined in

[src/server/entities/Vehicle.ts:212](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/server/entities/Vehicle.ts#L212)

***

### AllVehicles()

```ts
static AllVehicles(): IterableIterator<Vehicle, any, any>
```

Get an interable list of vehicles currently on the server

#### Returns

`IterableIterator`\<[`Vehicle`](Vehicle.md), `any`, `any`\>

Iterable list of Vehicles.

#### Defined in

[src/server/entities/Vehicle.ts:18](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/server/entities/Vehicle.ts#L18)

***

### fromNetworkId()

```ts
static fromNetworkId(networkId): null | Vehicle
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `networkId` | `number` |

#### Returns

`null` \| [`Vehicle`](Vehicle.md)

#### Overrides

`BaseEntity.fromNetworkId`

#### Defined in

[src/server/entities/Vehicle.ts:24](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/server/entities/Vehicle.ts#L24)

***

### fromStateBagName()

```ts
static fromStateBagName(stateBageName): null | Vehicle
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `stateBageName` | `string` |

#### Returns

`null` \| [`Vehicle`](Vehicle.md)

#### Overrides

`BaseEntity.fromStateBagName`

#### Defined in

[src/server/entities/Vehicle.ts:30](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/server/entities/Vehicle.ts#L30)
