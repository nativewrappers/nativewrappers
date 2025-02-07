[@nativewrappers/fivem](../../README.md) / [server](../README.md) / Vehicle

# Class: Vehicle

Defined in: [src/server/entities/Vehicle.ts:8](https://github.com/nativewrappers/nativewrappers/blob/427b5ee59afa6efb7a0db0f5ab134f700c75b61b/src/server/entities/Vehicle.ts#L8)

## Extends

- `BaseEntity`

## Constructors

### new Vehicle()

```ts
new Vehicle(handle): Vehicle
```

Defined in: [src/server/entities/Vehicle.ts:10](https://github.com/nativewrappers/nativewrappers/blob/427b5ee59afa6efb7a0db0f5ab134f700c75b61b/src/server/entities/Vehicle.ts#L10)

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

| Property | Modifier | Type | Default value | Overrides | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ | ------ | ------ |
| <a id="handle-1"></a> `handle` | `protected` | `number` | `undefined` | - | `BaseEntity.handle` | [src/server/entities/BaseEntity.ts:11](https://github.com/nativewrappers/nativewrappers/blob/427b5ee59afa6efb7a0db0f5ab134f700c75b61b/src/server/entities/BaseEntity.ts#L11) |
| <a id="type"></a> `type` | `protected` | `ClassTypes` | `ClassTypes.Vehicle` | `BaseEntity.type` | - | [src/server/entities/Vehicle.ts:9](https://github.com/nativewrappers/nativewrappers/blob/427b5ee59afa6efb7a0db0f5ab134f700c75b61b/src/server/entities/Vehicle.ts#L9) |

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

### BodyHealth

#### Get Signature

```ts
get BodyHealth(): number
```

Defined in: [src/server/entities/Vehicle.ts:48](https://github.com/nativewrappers/nativewrappers/blob/427b5ee59afa6efb7a0db0f5ab134f700c75b61b/src/server/entities/Vehicle.ts#L48)

##### Returns

`number`

***

### CustomPrimaryColour

#### Get Signature

```ts
get CustomPrimaryColour(): Color
```

Defined in: [src/server/entities/Vehicle.ts:56](https://github.com/nativewrappers/nativewrappers/blob/427b5ee59afa6efb7a0db0f5ab134f700c75b61b/src/server/entities/Vehicle.ts#L56)

##### Returns

[`Color`](../../fivem/classes/Color.md)

***

### CustomSecondaryColour

#### Get Signature

```ts
get CustomSecondaryColour(): Color
```

Defined in: [src/server/entities/Vehicle.ts:60](https://github.com/nativewrappers/nativewrappers/blob/427b5ee59afa6efb7a0db0f5ab134f700c75b61b/src/server/entities/Vehicle.ts#L60)

##### Returns

[`Color`](../../fivem/classes/Color.md)

***

### DashboardColour

#### Get Signature

```ts
get DashboardColour(): number
```

Defined in: [src/server/entities/Vehicle.ts:64](https://github.com/nativewrappers/nativewrappers/blob/427b5ee59afa6efb7a0db0f5ab134f700c75b61b/src/server/entities/Vehicle.ts#L64)

##### Returns

`number`

***

### DirtLevel

#### Get Signature

```ts
get DirtLevel(): number
```

Defined in: [src/server/entities/Vehicle.ts:68](https://github.com/nativewrappers/nativewrappers/blob/427b5ee59afa6efb7a0db0f5ab134f700c75b61b/src/server/entities/Vehicle.ts#L68)

##### Returns

`number`

***

### DoorsLockedForPlayer

#### Get Signature

```ts
get DoorsLockedForPlayer(): number
```

Defined in: [src/server/entities/Vehicle.ts:80](https://github.com/nativewrappers/nativewrappers/blob/427b5ee59afa6efb7a0db0f5ab134f700c75b61b/src/server/entities/Vehicle.ts#L80)

##### Returns

`number`

***

### DoorStatus

#### Get Signature

```ts
get DoorStatus(): number
```

Defined in: [src/server/entities/Vehicle.ts:76](https://github.com/nativewrappers/nativewrappers/blob/427b5ee59afa6efb7a0db0f5ab134f700c75b61b/src/server/entities/Vehicle.ts#L76)

##### Returns

`number`

***

### EngineHealth

#### Get Signature

```ts
get EngineHealth(): number
```

Defined in: [src/server/entities/Vehicle.ts:84](https://github.com/nativewrappers/nativewrappers/blob/427b5ee59afa6efb7a0db0f5ab134f700c75b61b/src/server/entities/Vehicle.ts#L84)

##### Returns

`number`

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

### ExtraColours

#### Get Signature

```ts
get ExtraColours(): [number, number]
```

Defined in: [src/server/entities/Vehicle.ts:88](https://github.com/nativewrappers/nativewrappers/blob/427b5ee59afa6efb7a0db0f5ab134f700c75b61b/src/server/entities/Vehicle.ts#L88)

##### Returns

\[`number`, `number`\]

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

### FlightNozzlePosition

#### Get Signature

```ts
get FlightNozzlePosition(): number
```

Defined in: [src/server/entities/Vehicle.ts:92](https://github.com/nativewrappers/nativewrappers/blob/427b5ee59afa6efb7a0db0f5ab134f700c75b61b/src/server/entities/Vehicle.ts#L92)

##### Returns

`number`

***

### Handbrake

#### Get Signature

```ts
get Handbrake(): boolean
```

Defined in: [src/server/entities/Vehicle.ts:96](https://github.com/nativewrappers/nativewrappers/blob/427b5ee59afa6efb7a0db0f5ab134f700c75b61b/src/server/entities/Vehicle.ts#L96)

##### Returns

`boolean`

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

### HasBeenOwnedByPlayer

#### Get Signature

```ts
get HasBeenOwnedByPlayer(): boolean
```

Defined in: [src/server/entities/Vehicle.ts:169](https://github.com/nativewrappers/nativewrappers/blob/427b5ee59afa6efb7a0db0f5ab134f700c75b61b/src/server/entities/Vehicle.ts#L169)

##### Returns

`boolean`

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

### HeadlightsColour

#### Get Signature

```ts
get HeadlightsColour(): number
```

Defined in: [src/server/entities/Vehicle.ts:100](https://github.com/nativewrappers/nativewrappers/blob/427b5ee59afa6efb7a0db0f5ab134f700c75b61b/src/server/entities/Vehicle.ts#L100)

##### Returns

`number`

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

### HomingLockonState

#### Get Signature

```ts
get HomingLockonState(): number
```

Defined in: [src/server/entities/Vehicle.ts:104](https://github.com/nativewrappers/nativewrappers/blob/427b5ee59afa6efb7a0db0f5ab134f700c75b61b/src/server/entities/Vehicle.ts#L104)

##### Returns

`number`

***

### InteriorColour

#### Get Signature

```ts
get InteriorColour(): number
```

Defined in: [src/server/entities/Vehicle.ts:108](https://github.com/nativewrappers/nativewrappers/blob/427b5ee59afa6efb7a0db0f5ab134f700c75b61b/src/server/entities/Vehicle.ts#L108)

##### Returns

`number`

***

### IsEngineRunning

#### Get Signature

```ts
get IsEngineRunning(): boolean
```

Defined in: [src/server/entities/Vehicle.ts:36](https://github.com/nativewrappers/nativewrappers/blob/427b5ee59afa6efb7a0db0f5ab134f700c75b61b/src/server/entities/Vehicle.ts#L36)

##### Returns

`boolean`

***

### IsEngineStarting

#### Get Signature

```ts
get IsEngineStarting(): boolean
```

Defined in: [src/server/entities/Vehicle.ts:173](https://github.com/nativewrappers/nativewrappers/blob/427b5ee59afa6efb7a0db0f5ab134f700c75b61b/src/server/entities/Vehicle.ts#L173)

##### Returns

`boolean`

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

### IsPrimaryColourCustom

#### Get Signature

```ts
get IsPrimaryColourCustom(): boolean
```

Defined in: [src/server/entities/Vehicle.ts:40](https://github.com/nativewrappers/nativewrappers/blob/427b5ee59afa6efb7a0db0f5ab134f700c75b61b/src/server/entities/Vehicle.ts#L40)

##### Returns

`boolean`

***

### IsSecondaryColourCustom

#### Get Signature

```ts
get IsSecondaryColourCustom(): boolean
```

Defined in: [src/server/entities/Vehicle.ts:44](https://github.com/nativewrappers/nativewrappers/blob/427b5ee59afa6efb7a0db0f5ab134f700c75b61b/src/server/entities/Vehicle.ts#L44)

##### Returns

`boolean`

***

### IsSirenOn

#### Get Signature

```ts
get IsSirenOn(): boolean
```

Defined in: [src/server/entities/Vehicle.ts:177](https://github.com/nativewrappers/nativewrappers/blob/427b5ee59afa6efb7a0db0f5ab134f700c75b61b/src/server/entities/Vehicle.ts#L177)

##### Returns

`boolean`

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

### LightsState

#### Get Signature

```ts
get LightsState(): [boolean, boolean]
```

Defined in: [src/server/entities/Vehicle.ts:112](https://github.com/nativewrappers/nativewrappers/blob/427b5ee59afa6efb7a0db0f5ab134f700c75b61b/src/server/entities/Vehicle.ts#L112)

##### Returns

\[`boolean`, `boolean`\]

***

### Livery

#### Get Signature

```ts
get Livery(): number
```

Defined in: [src/server/entities/Vehicle.ts:117](https://github.com/nativewrappers/nativewrappers/blob/427b5ee59afa6efb7a0db0f5ab134f700c75b61b/src/server/entities/Vehicle.ts#L117)

##### Returns

`number`

***

### LockOnTarget

#### Get Signature

```ts
get LockOnTarget(): Vehicle
```

Defined in: [src/server/entities/Vehicle.ts:121](https://github.com/nativewrappers/nativewrappers/blob/427b5ee59afa6efb7a0db0f5ab134f700c75b61b/src/server/entities/Vehicle.ts#L121)

##### Returns

[`Vehicle`](Vehicle.md)

***

### LockStatus

#### Get Signature

```ts
get LockStatus(): VehicleLockStatus
```

Defined in: [src/server/entities/Vehicle.ts:72](https://github.com/nativewrappers/nativewrappers/blob/427b5ee59afa6efb7a0db0f5ab134f700c75b61b/src/server/entities/Vehicle.ts#L72)

##### Returns

`VehicleLockStatus`

***

### MainRotorHealth

#### Get Signature

```ts
get MainRotorHealth(): number
```

Defined in: [src/server/entities/Vehicle.ts:193](https://github.com/nativewrappers/nativewrappers/blob/427b5ee59afa6efb7a0db0f5ab134f700c75b61b/src/server/entities/Vehicle.ts#L193)

##### Returns

`number`

***

### MaxHealth

#### Get Signature

```ts
get MaxHealth(): number
```

Defined in: [src/server/entities/Vehicle.ts:181](https://github.com/nativewrappers/nativewrappers/blob/427b5ee59afa6efb7a0db0f5ab134f700c75b61b/src/server/entities/Vehicle.ts#L181)

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

### PetrolTankHealth

#### Get Signature

```ts
get PetrolTankHealth(): number
```

Defined in: [src/server/entities/Vehicle.ts:137](https://github.com/nativewrappers/nativewrappers/blob/427b5ee59afa6efb7a0db0f5ab134f700c75b61b/src/server/entities/Vehicle.ts#L137)

##### Returns

`number`

***

### Plate

#### Get Signature

```ts
get Plate(): string
```

Defined in: [src/server/entities/Vehicle.ts:125](https://github.com/nativewrappers/nativewrappers/blob/427b5ee59afa6efb7a0db0f5ab134f700c75b61b/src/server/entities/Vehicle.ts#L125)

##### Returns

`string`

***

### PlateIndex

#### Get Signature

```ts
get PlateIndex(): number
```

Defined in: [src/server/entities/Vehicle.ts:133](https://github.com/nativewrappers/nativewrappers/blob/427b5ee59afa6efb7a0db0f5ab134f700c75b61b/src/server/entities/Vehicle.ts#L133)

##### Returns

`number`

***

### PlateTrimmed

#### Get Signature

```ts
get PlateTrimmed(): string
```

Defined in: [src/server/entities/Vehicle.ts:129](https://github.com/nativewrappers/nativewrappers/blob/427b5ee59afa6efb7a0db0f5ab134f700c75b61b/src/server/entities/Vehicle.ts#L129)

##### Returns

`string`

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

### RadioStation

#### Get Signature

```ts
get RadioStation(): number
```

Defined in: [src/server/entities/Vehicle.ts:141](https://github.com/nativewrappers/nativewrappers/blob/427b5ee59afa6efb7a0db0f5ab134f700c75b61b/src/server/entities/Vehicle.ts#L141)

##### Returns

`number`

***

### RoofLivery

#### Get Signature

```ts
get RoofLivery(): number
```

Defined in: [src/server/entities/Vehicle.ts:145](https://github.com/nativewrappers/nativewrappers/blob/427b5ee59afa6efb7a0db0f5ab134f700c75b61b/src/server/entities/Vehicle.ts#L145)

##### Returns

`number`

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

### ScriptTaskCommand

#### Get Signature

```ts
get ScriptTaskCommand(): number
```

Defined in: [src/server/entities/Vehicle.ts:185](https://github.com/nativewrappers/nativewrappers/blob/427b5ee59afa6efb7a0db0f5ab134f700c75b61b/src/server/entities/Vehicle.ts#L185)

##### Returns

`number`

***

### ScriptTaskStage

#### Get Signature

```ts
get ScriptTaskStage(): number
```

Defined in: [src/server/entities/Vehicle.ts:189](https://github.com/nativewrappers/nativewrappers/blob/427b5ee59afa6efb7a0db0f5ab134f700c75b61b/src/server/entities/Vehicle.ts#L189)

##### Returns

`number`

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

### SteeringAngle

#### Get Signature

```ts
get SteeringAngle(): number
```

Defined in: [src/server/entities/Vehicle.ts:149](https://github.com/nativewrappers/nativewrappers/blob/427b5ee59afa6efb7a0db0f5ab134f700c75b61b/src/server/entities/Vehicle.ts#L149)

##### Returns

`number`

***

### TailRotorHealth

#### Get Signature

```ts
get TailRotorHealth(): number
```

Defined in: [src/server/entities/Vehicle.ts:197](https://github.com/nativewrappers/nativewrappers/blob/427b5ee59afa6efb7a0db0f5ab134f700c75b61b/src/server/entities/Vehicle.ts#L197)

##### Returns

`number`

***

### TrainCarriageEngine

#### Get Signature

```ts
get TrainCarriageEngine(): number
```

Defined in: [src/server/entities/Vehicle.ts:204](https://github.com/nativewrappers/nativewrappers/blob/427b5ee59afa6efb7a0db0f5ab134f700c75b61b/src/server/entities/Vehicle.ts#L204)

This might supposed to be TrainEngineHealth?

##### Returns

`number`

***

### TrainCarriageIndex

#### Get Signature

```ts
get TrainCarriageIndex(): number
```

Defined in: [src/server/entities/Vehicle.ts:208](https://github.com/nativewrappers/nativewrappers/blob/427b5ee59afa6efb7a0db0f5ab134f700c75b61b/src/server/entities/Vehicle.ts#L208)

##### Returns

`number`

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

### TyreSmokeColour

#### Get Signature

```ts
get TyreSmokeColour(): Color
```

Defined in: [src/server/entities/Vehicle.ts:157](https://github.com/nativewrappers/nativewrappers/blob/427b5ee59afa6efb7a0db0f5ab134f700c75b61b/src/server/entities/Vehicle.ts#L157)

##### Returns

[`Color`](../../fivem/classes/Color.md)

***

### VehicleColours

#### Get Signature

```ts
get VehicleColours(): [number, number]
```

Defined in: [src/server/entities/Vehicle.ts:52](https://github.com/nativewrappers/nativewrappers/blob/427b5ee59afa6efb7a0db0f5ab134f700c75b61b/src/server/entities/Vehicle.ts#L52)

##### Returns

\[`number`, `number`\]

***

### VehicleType

#### Get Signature

```ts
get VehicleType(): VehicleType
```

Defined in: [src/server/entities/Vehicle.ts:153](https://github.com/nativewrappers/nativewrappers/blob/427b5ee59afa6efb7a0db0f5ab134f700c75b61b/src/server/entities/Vehicle.ts#L153)

##### Returns

`VehicleType`

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

***

### WheelType

#### Get Signature

```ts
get WheelType(): number
```

Defined in: [src/server/entities/Vehicle.ts:161](https://github.com/nativewrappers/nativewrappers/blob/427b5ee59afa6efb7a0db0f5ab134f700c75b61b/src/server/entities/Vehicle.ts#L161)

##### Returns

`number`

***

### WindowTint

#### Get Signature

```ts
get WindowTint(): number
```

Defined in: [src/server/entities/Vehicle.ts:165](https://github.com/nativewrappers/nativewrappers/blob/427b5ee59afa6efb7a0db0f5ab134f700c75b61b/src/server/entities/Vehicle.ts#L165)

##### Returns

`number`

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

### getLastPedInSeat()

```ts
getLastPedInSeat(seatIndex): number
```

Defined in: [src/server/entities/Vehicle.ts:224](https://github.com/nativewrappers/nativewrappers/blob/427b5ee59afa6efb7a0db0f5ab134f700c75b61b/src/server/entities/Vehicle.ts#L224)

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

Defined in: [src/server/entities/Vehicle.ts:220](https://github.com/nativewrappers/nativewrappers/blob/427b5ee59afa6efb7a0db0f5ab134f700c75b61b/src/server/entities/Vehicle.ts#L220)

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

Defined in: [src/server/entities/Vehicle.ts:216](https://github.com/nativewrappers/nativewrappers/blob/427b5ee59afa6efb7a0db0f5ab134f700c75b61b/src/server/entities/Vehicle.ts#L216)

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

Defined in: [src/server/entities/Vehicle.ts:212](https://github.com/nativewrappers/nativewrappers/blob/427b5ee59afa6efb7a0db0f5ab134f700c75b61b/src/server/entities/Vehicle.ts#L212)

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

### AllVehicles()

```ts
static AllVehicles(): IterableIterator<Vehicle>
```

Defined in: [src/server/entities/Vehicle.ts:18](https://github.com/nativewrappers/nativewrappers/blob/427b5ee59afa6efb7a0db0f5ab134f700c75b61b/src/server/entities/Vehicle.ts#L18)

Get an interable list of vehicles currently on the server

#### Returns

`IterableIterator`\<[`Vehicle`](Vehicle.md)\>

Iterable list of Vehicles.

***

### fromNetworkId()

```ts
static fromNetworkId(networkId): null | Vehicle
```

Defined in: [src/server/entities/Vehicle.ts:24](https://github.com/nativewrappers/nativewrappers/blob/427b5ee59afa6efb7a0db0f5ab134f700c75b61b/src/server/entities/Vehicle.ts#L24)

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

Defined in: [src/server/entities/Vehicle.ts:30](https://github.com/nativewrappers/nativewrappers/blob/427b5ee59afa6efb7a0db0f5ab134f700c75b61b/src/server/entities/Vehicle.ts#L30)

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
