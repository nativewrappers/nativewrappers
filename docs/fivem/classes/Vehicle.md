[@nativewrappers/fivem](../../README.md) / [fivem](../README.md) / Vehicle

# Class: Vehicle

## Extends

- [`BaseEntity`](BaseEntity.md)

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

[`BaseEntity`](BaseEntity.md).[`constructor`](BaseEntity.md#constructors)

#### Defined in

[src/fivem/models/Vehicle.ts:57](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Vehicle.ts#L57)

## Properties

| Property | Modifier | Type | Default value | Overrides | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ | ------ | ------ |
| `bones` | `protected` | `undefined` \| [`EntityBoneCollection`](EntityBoneCollection.md) | `undefined` | - | [`BaseEntity`](BaseEntity.md).`bones` | [src/fivem/models/BaseEntity.ts:23](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/BaseEntity.ts#L23) |
| `handle` | `protected` | `number` | `undefined` | - | [`BaseEntity`](BaseEntity.md).`handle` | [src/fivem/models/BaseEntity.ts:22](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/BaseEntity.ts#L22) |
| `netId` | `protected` | `null` \| `number` | `null` | - | [`BaseEntity`](BaseEntity.md).`netId` | [src/fivem/models/BaseEntity.ts:25](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/BaseEntity.ts#L25) |
| `stateBagCookies` | `protected` | `number`[] | `[]` | - | [`BaseEntity`](BaseEntity.md).`stateBagCookies` | [src/fivem/models/BaseEntity.ts:24](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/BaseEntity.ts#L24) |
| `type` | `protected` | `ClassTypes` | `ClassTypes.Vehicle` | [`BaseEntity`](BaseEntity.md).`type` | - | [src/fivem/models/Vehicle.ts:55](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Vehicle.ts#L55) |

## Accessors

### Acceleration

```ts
get Acceleration(): number
```

#### Returns

`number`

#### Defined in

[src/fivem/models/Vehicle.ts:185](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Vehicle.ts#L185)

***

### AlarmTimeLeft

```ts
get AlarmTimeLeft(): number
```

```ts
set AlarmTimeLeft(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

#### Returns

`number`

#### Defined in

[src/fivem/models/Vehicle.ts:237](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Vehicle.ts#L237)

***

### AreBrakeLightsOn

```ts
set AreBrakeLightsOn(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

#### Defined in

[src/fivem/models/Vehicle.ts:365](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Vehicle.ts#L365)

***

### AreHighBeamsOn

```ts
get AreHighBeamsOn(): boolean
```

```ts
set AreHighBeamsOn(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

#### Returns

`boolean`

#### Defined in

[src/fivem/models/Vehicle.ts:308](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Vehicle.ts#L308)

***

### AreLightsOn

```ts
get AreLightsOn(): boolean
```

```ts
set AreLightsOn(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

#### Returns

`boolean`

#### Defined in

[src/fivem/models/Vehicle.ts:300](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Vehicle.ts#L300)

***

### AttachedBlip

```ts
get AttachedBlip(): null | Blip
```

#### Returns

`null` \| [`Blip`](Blip.md)

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`AttachedBlip`](BaseEntity.md#attachedblip)

#### Defined in

[src/fivem/models/BaseEntity.ts:438](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/BaseEntity.ts#L438)

***

### BodyHealth

```ts
get BodyHealth(): number
```

```ts
set BodyHealth(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

#### Returns

`number`

#### Defined in

[src/fivem/models/Vehicle.ts:85](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Vehicle.ts#L85)

***

### Bones

```ts
get Bones(): EntityBoneCollection
```

#### Returns

[`EntityBoneCollection`](EntityBoneCollection.md)

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`Bones`](BaseEntity.md#bones)

#### Defined in

[src/fivem/models/BaseEntity.ts:431](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/BaseEntity.ts#L431)

***

### CanBeVisiblyDamaged

```ts
set CanBeVisiblyDamaged(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

#### Defined in

[src/fivem/models/Vehicle.ts:373](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Vehicle.ts#L373)

***

### CanBreak

```ts
set CanBreak(toggle): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `toggle` | `boolean` |

#### Defined in

[src/fivem/models/Vehicle.ts:381](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Vehicle.ts#L381)

***

### CanDeformWheels

```ts
set CanDeformWheels(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

#### Defined in

[src/fivem/models/Vehicle.ts:671](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Vehicle.ts#L671)

***

### CanEngineDegrade

```ts
set CanEngineDegrade(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

#### Defined in

[src/fivem/models/Vehicle.ts:425](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Vehicle.ts#L425)

***

### CanTiresBurst

```ts
get CanTiresBurst(): boolean
```

```ts
set CanTiresBurst(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

#### Returns

`boolean`

#### Defined in

[src/fivem/models/Vehicle.ts:659](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Vehicle.ts#L659)

***

### CanWheelsBreak

```ts
set CanWheelsBreak(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

#### Defined in

[src/fivem/models/Vehicle.ts:667](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Vehicle.ts#L667)

***

### ClassDisplayName

```ts
get ClassDisplayName(): string
```

#### Returns

`string`

#### Defined in

[src/fivem/models/Vehicle.ts:69](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Vehicle.ts#L69)

***

### ClassType

```ts
get ClassType(): VehicleClass
```

#### Returns

[`VehicleClass`](../enumerations/VehicleClass.md)

#### Defined in

[src/fivem/models/Vehicle.ts:81](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Vehicle.ts#L81)

***

### CurrentGear

```ts
get CurrentGear(): number
```

#### Returns

`number`

#### Defined in

[src/fivem/models/Vehicle.ts:205](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Vehicle.ts#L205)

***

### CurrentRPM

```ts
get CurrentRPM(): number
```

```ts
set CurrentRPM(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

#### Returns

`number`

#### Defined in

[src/fivem/models/Vehicle.ts:189](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Vehicle.ts#L189)

***

### DirtLevel

```ts
get DirtLevel(): number
```

```ts
set DirtLevel(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

#### Returns

`number`

#### Defined in

[src/fivem/models/Vehicle.ts:635](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Vehicle.ts#L635)

***

### DisplayName

```ts
get DisplayName(): string
```

#### Returns

`string`

#### Defined in

[src/fivem/models/Vehicle.ts:65](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Vehicle.ts#L65)

***

### Doors

```ts
get Doors(): VehicleDoorCollection
```

#### Returns

[`VehicleDoorCollection`](VehicleDoorCollection.md)

#### Defined in

[src/fivem/models/Vehicle.ts:579](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Vehicle.ts#L579)

***

### Driver

```ts
get Driver(): Ped
```

#### Returns

[`Ped`](Ped.md)

#### Defined in

[src/fivem/models/Vehicle.ts:516](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Vehicle.ts#L516)

***

### DropsMoneyOnExplosion

```ts
set DropsMoneyOnExplosion(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

#### Defined in

[src/fivem/models/Vehicle.ts:280](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Vehicle.ts#L280)

***

### EngineHealth

```ts
get EngineHealth(): number
```

```ts
set EngineHealth(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

#### Returns

`number`

#### Defined in

[src/fivem/models/Vehicle.ts:93](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Vehicle.ts#L93)

***

### EnginePowerMultiplier

```ts
set EnginePowerMultiplier(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

#### Defined in

[src/fivem/models/Vehicle.ts:429](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Vehicle.ts#L429)

***

### EngineTorqueMultiplier

```ts
set EngineTorqueMultiplier(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

#### Defined in

[src/fivem/models/Vehicle.ts:433](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Vehicle.ts#L433)

***

### EstimatedMaxSpeed

```ts
get EstimatedMaxSpeed(): number
```

#### Returns

`number`

#### Defined in

[src/fivem/models/Vehicle.ts:181](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Vehicle.ts#L181)

***

### ForwardVector

```ts
get ForwardVector(): Vector3
```

#### Returns

[`Vector3`](Vector3.md)

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`ForwardVector`](BaseEntity.md#forwardvector)

#### Defined in

[src/fivem/models/BaseEntity.ts:128](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/BaseEntity.ts#L128)

***

### FuelLevel

```ts
get FuelLevel(): number
```

```ts
set FuelLevel(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

#### Returns

`number`

#### Defined in

[src/fivem/models/Vehicle.ts:109](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Vehicle.ts#L109)

***

### Ghosted

```ts
get Ghosted(): boolean
```

```ts
set Ghosted(isGhosted): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `isGhosted` | `boolean` |

#### Returns

`boolean`

#### Defined in

[src/fivem/models/Vehicle.ts:522](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Vehicle.ts#L522)

***

### GhostedForGhostPlayers

```ts
set GhostedForGhostPlayers(isGhostedForGhostPlayers): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `isGhostedForGhostPlayers` | `boolean` |

#### Defined in

[src/fivem/models/Vehicle.ts:527](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Vehicle.ts#L527)

***

### Gravity

```ts
get Gravity(): number
```

```ts
set Gravity(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

#### Returns

`number`

#### Defined in

[src/fivem/models/Vehicle.ts:125](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Vehicle.ts#L125)

***

### Handle

```ts
get Handle(): number
```

#### Returns

`number`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`Handle`](BaseEntity.md#handle)

#### Defined in

[src/fivem/models/BaseEntity.ts:35](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/BaseEntity.ts#L35)

***

### HasBombBay

```ts
get HasBombBay(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/fivem/models/Vehicle.ts:675](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Vehicle.ts#L675)

***

### HasCollided

```ts
get HasCollided(): boolean
```

#### Returns

`boolean`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`HasCollided`](BaseEntity.md#hascollided)

#### Defined in

[src/fivem/models/BaseEntity.ts:411](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/BaseEntity.ts#L411)

***

### HasGravity

```ts
set HasGravity(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`HasGravity`](BaseEntity.md#hasgravity)

#### Defined in

[src/fivem/models/BaseEntity.ts:314](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/BaseEntity.ts#L314)

***

### HasMutedSirens

```ts
set HasMutedSirens(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

#### Defined in

[src/fivem/models/Vehicle.ts:257](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Vehicle.ts#L257)

***

### HasRoof

```ts
get HasRoof(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/fivem/models/Vehicle.ts:401](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Vehicle.ts#L401)

***

### Heading

```ts
get Heading(): number
```

```ts
set Heading(heading): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `heading` | `number` |

#### Returns

`number`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`Heading`](BaseEntity.md#heading)

#### Defined in

[src/fivem/models/BaseEntity.ts:282](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/BaseEntity.ts#L282)

***

### Health

```ts
get Health(): number
```

```ts
set Health(amount): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `amount` | `number` |

#### Returns

`number`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`Health`](BaseEntity.md#health)

#### Defined in

[src/fivem/models/BaseEntity.ts:157](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/BaseEntity.ts#L157)

***

### HeightAboveGround

```ts
get HeightAboveGround(): number
```

#### Returns

`number`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`HeightAboveGround`](BaseEntity.md#heightaboveground)

#### Defined in

[src/fivem/models/BaseEntity.ts:318](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/BaseEntity.ts#L318)

***

### HighGear

```ts
get HighGear(): number
```

```ts
set HighGear(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

#### Returns

`number`

#### Defined in

[src/fivem/models/Vehicle.ts:197](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Vehicle.ts#L197)

***

### IsAlarmSet

```ts
get IsAlarmSet(): boolean
```

```ts
set IsAlarmSet(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

#### Returns

`boolean`

#### Defined in

[src/fivem/models/Vehicle.ts:225](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Vehicle.ts#L225)

***

### IsAlarmSounding

```ts
get IsAlarmSounding(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/fivem/models/Vehicle.ts:233](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Vehicle.ts#L233)

***

### IsAlive

```ts
get IsAlive(): boolean
```

#### Returns

`boolean`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`IsAlive`](BaseEntity.md#isalive)

#### Defined in

[src/fivem/models/BaseEntity.ts:185](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/BaseEntity.ts#L185)

***

### IsAxlesStrong

```ts
set IsAxlesStrong(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

#### Defined in

[src/fivem/models/Vehicle.ts:421](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Vehicle.ts#L421)

***

### IsBurnoutForced

```ts
set IsBurnoutForced(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

#### Defined in

[src/fivem/models/Vehicle.ts:508](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Vehicle.ts#L508)

***

### IsCollisionEnabled

```ts
get IsCollisionEnabled(): boolean
```

```ts
set IsCollisionEnabled(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

#### Returns

`boolean`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`IsCollisionEnabled`](BaseEntity.md#iscollisionenabled)

#### Defined in

[src/fivem/models/BaseEntity.ts:419](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/BaseEntity.ts#L419)

***

### IsConvertible

```ts
get IsConvertible(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/fivem/models/Vehicle.ts:504](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Vehicle.ts#L504)

***

### IsDamaged

```ts
get IsDamaged(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/fivem/models/Vehicle.ts:385](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Vehicle.ts#L385)

***

### IsDead

```ts
get IsDead(): boolean
```

```ts
set IsDead(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

#### Returns

`boolean`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`IsDead`](BaseEntity.md#isdead)

#### Defined in

[src/fivem/models/BaseEntity.ts:181](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/BaseEntity.ts#L181)

***

### IsDriveable

```ts
get IsDriveable(): boolean
```

```ts
set IsDriveable(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

#### Returns

`boolean`

#### Defined in

[src/fivem/models/Vehicle.ts:389](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Vehicle.ts#L389)

***

### IsEngineOnFire

```ts
get IsEngineOnFire(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/fivem/models/Vehicle.ts:397](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Vehicle.ts#L397)

***

### IsEngineRunning

```ts
get IsEngineRunning(): boolean
```

```ts
set IsEngineRunning(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

#### Returns

`boolean`

#### Defined in

[src/fivem/models/Vehicle.ts:133](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Vehicle.ts#L133)

***

### IsEngineStarting

```ts
get IsEngineStarting(): boolean
```

```ts
set IsEngineStarting(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

#### Returns

`boolean`

#### Defined in

[src/fivem/models/Vehicle.ts:141](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Vehicle.ts#L141)

***

### IsFrontBumperBrokenOff

```ts
get IsFrontBumperBrokenOff(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/fivem/models/Vehicle.ts:417](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Vehicle.ts#L417)

***

### IsHandbrakeForcedOn

```ts
get IsHandbrakeForcedOn(): boolean
```

```ts
set IsHandbrakeForcedOn(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

#### Returns

`boolean`

#### Defined in

[src/fivem/models/Vehicle.ts:357](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Vehicle.ts#L357)

***

### IsInAir

```ts
get IsInAir(): boolean
```

#### Returns

`boolean`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`IsInAir`](BaseEntity.md#isinair)

#### Defined in

[src/fivem/models/BaseEntity.ts:358](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/BaseEntity.ts#L358)

***

### IsInBurnout

```ts
get IsInBurnout(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/fivem/models/Vehicle.ts:512](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Vehicle.ts#L512)

***

### IsInGhostCollision

```ts
get IsInGhostCollision(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/fivem/models/Vehicle.ts:540](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Vehicle.ts#L540)

***

### IsInteriorLightOn

```ts
get IsInteriorLightOn(): boolean
```

```ts
set IsInteriorLightOn(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

#### Returns

`boolean`

#### Defined in

[src/fivem/models/Vehicle.ts:316](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Vehicle.ts#L316)

***

### IsInvincible

```ts
set IsInvincible(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`IsInvincible`](BaseEntity.md#isinvincible)

#### Defined in

[src/fivem/models/BaseEntity.ts:388](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/BaseEntity.ts#L388)

***

### IsInWater

```ts
get IsInWater(): boolean
```

#### Returns

`boolean`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`IsInWater`](BaseEntity.md#isinwater)

#### Defined in

[src/fivem/models/BaseEntity.ts:362](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/BaseEntity.ts#L362)

***

### IsLeftHeadLightBroken

```ts
get IsLeftHeadLightBroken(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/fivem/models/Vehicle.ts:405](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Vehicle.ts#L405)

***

### IsLeftIndicatorLightOn

```ts
get IsLeftIndicatorLightOn(): boolean
```

```ts
set IsLeftIndicatorLightOn(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

#### Returns

`boolean`

#### Defined in

[src/fivem/models/Vehicle.ts:340](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Vehicle.ts#L340)

***

### IsMissionEntity

```ts
get IsMissionEntity(): boolean
```

Returns if the entity is set as a mission entity and will not be cleaned up by the engine

```ts
set IsMissionEntity(value): void
```

Sets if the entity is a mission entity and will not be cleaned up by the engine

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

#### Returns

`boolean`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`IsMissionEntity`](BaseEntity.md#ismissionentity)

#### Defined in

[src/fivem/models/BaseEntity.ts:210](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/BaseEntity.ts#L210)

***

### IsNetworkConcealed

```ts
get IsNetworkConcealed(): boolean
```

```ts
set IsNetworkConcealed(concealed): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `concealed` | `boolean` |

#### Returns

`boolean`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`IsNetworkConcealed`](BaseEntity.md#isnetworkconcealed)

#### Defined in

[src/fivem/models/BaseEntity.ts:61](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/BaseEntity.ts#L61)

***

### IsNetworked

```ts
get IsNetworked(): boolean
```

```ts
set IsNetworked(networked): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `networked` | `boolean` |

#### Returns

`boolean`

if the entity is a networked entity or local entity

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`IsNetworked`](BaseEntity.md#isnetworked)

#### Defined in

[src/fivem/models/BaseEntity.ts:42](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/BaseEntity.ts#L42)

***

### IsOccluded

```ts
get IsOccluded(): boolean
```

#### Returns

`boolean`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`IsOccluded`](BaseEntity.md#isoccluded)

#### Defined in

[src/fivem/models/BaseEntity.ts:342](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/BaseEntity.ts#L342)

***

### IsOnAllWheels

```ts
get IsOnAllWheels(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/fivem/models/Vehicle.ts:484](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Vehicle.ts#L484)

***

### IsOnFire

```ts
get IsOnFire(): boolean
```

#### Returns

`boolean`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`IsOnFire`](BaseEntity.md#isonfire)

#### Defined in

[src/fivem/models/BaseEntity.ts:384](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/BaseEntity.ts#L384)

***

### IsOnlyDamagedByPlayer

```ts
set IsOnlyDamagedByPlayer(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`IsOnlyDamagedByPlayer`](BaseEntity.md#isonlydamagedbyplayer)

#### Defined in

[src/fivem/models/BaseEntity.ts:392](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/BaseEntity.ts#L392)

***

### IsOnScreen

```ts
get IsOnScreen(): boolean
```

#### Returns

`boolean`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`IsOnScreen`](BaseEntity.md#isonscreen)

#### Defined in

[src/fivem/models/BaseEntity.ts:346](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/BaseEntity.ts#L346)

***

### IsPersistent

```ts
get IsPersistent(): boolean
```

#### Deprecated

use [[IsMissionEntity]] instead as its more obvious as what it does

```ts
set IsPersistent(value): void
```

#### Deprecated

use [[IsMissionEntity]] instead as its more obvious as what it does

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

#### Returns

`boolean`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`IsPersistent`](BaseEntity.md#ispersistent)

#### Defined in

[src/fivem/models/BaseEntity.ts:369](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/BaseEntity.ts#L369)

***

### IsPositionFrozen

```ts
get IsPositionFrozen(): boolean
```

```ts
set IsPositionFrozen(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

#### Returns

`boolean`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`IsPositionFrozen`](BaseEntity.md#ispositionfrozen)

#### Defined in

[src/fivem/models/BaseEntity.ts:290](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/BaseEntity.ts#L290)

***

### IsRadioEnabled

```ts
get IsRadioEnabled(): boolean
```

```ts
set IsRadioEnabled(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

#### Returns

`boolean`

#### Defined in

[src/fivem/models/Vehicle.ts:152](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Vehicle.ts#L152)

***

### IsRearBumperBrokenOff

```ts
get IsRearBumperBrokenOff(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/fivem/models/Vehicle.ts:413](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Vehicle.ts#L413)

***

### IsRecordingCollisions

```ts
set IsRecordingCollisions(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`IsRecordingCollisions`](BaseEntity.md#isrecordingcollisions)

#### Defined in

[src/fivem/models/BaseEntity.ts:427](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/BaseEntity.ts#L427)

***

### IsRightHeadLightBroken

```ts
get IsRightHeadLightBroken(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/fivem/models/Vehicle.ts:409](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Vehicle.ts#L409)

***

### IsRightIndicatorLightOn

```ts
get IsRightIndicatorLightOn(): boolean
```

```ts
set IsRightIndicatorLightOn(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

#### Returns

`boolean`

#### Defined in

[src/fivem/models/Vehicle.ts:349](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Vehicle.ts#L349)

***

### IsSearchLightOn

```ts
get IsSearchLightOn(): boolean
```

```ts
set IsSearchLightOn(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

#### Returns

`boolean`

#### Defined in

[src/fivem/models/Vehicle.ts:324](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Vehicle.ts#L324)

***

### IsSirenActive

```ts
get IsSirenActive(): boolean
```

```ts
set IsSirenActive(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

#### Returns

`boolean`

#### Defined in

[src/fivem/models/Vehicle.ts:249](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Vehicle.ts#L249)

***

### IsStolen

```ts
get IsStolen(): boolean
```

```ts
set IsStolen(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

#### Returns

`boolean`

#### Defined in

[src/fivem/models/Vehicle.ts:496](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Vehicle.ts#L496)

***

### IsStopped

```ts
get IsStopped(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/fivem/models/Vehicle.ts:488](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Vehicle.ts#L488)

***

### IsStoppedAtTrafficLights

```ts
get IsStoppedAtTrafficLights(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/fivem/models/Vehicle.ts:492](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Vehicle.ts#L492)

***

### IsTaxiLightOn

```ts
get IsTaxiLightOn(): boolean
```

```ts
set IsTaxiLightOn(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

#### Returns

`boolean`

#### Defined in

[src/fivem/models/Vehicle.ts:332](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Vehicle.ts#L332)

***

### IsUpright

```ts
get IsUpright(): boolean
```

#### Returns

`boolean`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`IsUpright`](BaseEntity.md#isupright)

#### Defined in

[src/fivem/models/BaseEntity.ts:350](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/BaseEntity.ts#L350)

***

### IsUpsideDown

```ts
get IsUpsideDown(): boolean
```

#### Returns

`boolean`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`IsUpsideDown`](BaseEntity.md#isupsidedown)

#### Defined in

[src/fivem/models/BaseEntity.ts:354](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/BaseEntity.ts#L354)

***

### IsVisible

```ts
get IsVisible(): boolean
```

```ts
set IsVisible(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

#### Returns

`boolean`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`IsVisible`](BaseEntity.md#isvisible)

#### Defined in

[src/fivem/models/BaseEntity.ts:334](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/BaseEntity.ts#L334)

***

### IsWanted

```ts
get IsWanted(): boolean
```

```ts
set IsWanted(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

#### Returns

`boolean`

#### Defined in

[src/fivem/models/Vehicle.ts:268](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Vehicle.ts#L268)

***

### LandingGearState

```ts
get LandingGearState(): VehicleLandingGearState
```

```ts
set LandingGearState(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | [`VehicleLandingGearState`](../enumerations/VehicleLandingGearState.md) |

#### Returns

[`VehicleLandingGearState`](../enumerations/VehicleLandingGearState.md)

#### Defined in

[src/fivem/models/Vehicle.ts:437](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Vehicle.ts#L437)

***

### LightsMultiplier

```ts
set LightsMultiplier(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

#### Defined in

[src/fivem/models/Vehicle.ts:369](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Vehicle.ts#L369)

***

### LockStatus

```ts
get LockStatus(): VehicleLockStatus
```

```ts
set LockStatus(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | [`VehicleLockStatus`](../enumerations/VehicleLockStatus.md) |

#### Returns

[`VehicleLockStatus`](../enumerations/VehicleLockStatus.md)

#### Defined in

[src/fivem/models/Vehicle.ts:468](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Vehicle.ts#L468)

***

### LodDistance

```ts
get LodDistance(): number
```

```ts
set LodDistance(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

#### Returns

`number`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`LodDistance`](BaseEntity.md#loddistance)

#### Defined in

[src/fivem/models/BaseEntity.ts:326](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/BaseEntity.ts#L326)

***

### MaterialCollidingWith

```ts
get MaterialCollidingWith(): MaterialHash
```

#### Returns

[`MaterialHash`](../enumerations/MaterialHash.md)

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`MaterialCollidingWith`](BaseEntity.md#materialcollidingwith)

#### Defined in

[src/fivem/models/BaseEntity.ts:415](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/BaseEntity.ts#L415)

***

### Matrix

```ts
get Matrix(): Vector3[]
```

```ts
set Matrix(vectors): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `vectors` | [`Vector3`](Vector3.md)[] |

#### Returns

[`Vector3`](Vector3.md)[]

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`Matrix`](BaseEntity.md#matrix)

#### Defined in

[src/fivem/models/BaseEntity.ts:132](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/BaseEntity.ts#L132)

***

### MaxBraking

```ts
get MaxBraking(): number
```

#### Returns

`number`

#### Defined in

[src/fivem/models/Vehicle.ts:476](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Vehicle.ts#L476)

***

### MaxHealth

```ts
get MaxHealth(): number
```

```ts
set MaxHealth(amount): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `amount` | `number` |

#### Returns

`number`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`MaxHealth`](BaseEntity.md#maxhealth)

#### Defined in

[src/fivem/models/BaseEntity.ts:165](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/BaseEntity.ts#L165)

***

### MaxSpeed

```ts
set MaxSpeed(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`MaxSpeed`](BaseEntity.md#maxspeed)

#### Defined in

[src/fivem/models/BaseEntity.ts:310](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/BaseEntity.ts#L310)

***

### MaxTraction

```ts
get MaxTraction(): number
```

#### Returns

`number`

#### Defined in

[src/fivem/models/Vehicle.ts:480](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Vehicle.ts#L480)

***

### Model

```ts
get Model(): Model
```

#### Returns

[`Model`](Model.md)

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`Model`](BaseEntity.md#model)

#### Defined in

[src/fivem/models/BaseEntity.ts:203](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/BaseEntity.ts#L203)

***

### Mods

```ts
get Mods(): VehicleModCollection
```

#### Returns

[`VehicleModCollection`](VehicleModCollection.md)

#### Defined in

[src/fivem/models/Vehicle.ts:586](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Vehicle.ts#L586)

***

### NeedsToBeHotwired

```ts
get NeedsToBeHotwired(): boolean
```

```ts
set NeedsToBeHotwired(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

#### Returns

`boolean`

#### Defined in

[src/fivem/models/Vehicle.ts:292](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Vehicle.ts#L292)

***

### NetworkId

```ts
get NetworkId(): number
```

#### Returns

`number`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`NetworkId`](BaseEntity.md#networkid)

#### Defined in

[src/fivem/models/BaseEntity.ts:54](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/BaseEntity.ts#L54)

***

### NumberPlate

```ts
get NumberPlate(): string
```

```ts
set NumberPlate(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `string` |

#### Returns

`string`

#### Defined in

[src/fivem/models/Vehicle.ts:73](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Vehicle.ts#L73)

***

### Occupants

```ts
get Occupants(): Ped[]
```

#### Returns

[`Ped`](Ped.md)[]

#### Defined in

[src/fivem/models/Vehicle.ts:549](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Vehicle.ts#L549)

***

### OilLevel

```ts
get OilLevel(): number
```

```ts
set OilLevel(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

#### Returns

`number`

#### Defined in

[src/fivem/models/Vehicle.ts:117](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Vehicle.ts#L117)

***

### Opacity

```ts
get Opacity(): number
```

```ts
set Opacity(value): void
```

Sets how transparent an entity is, if you want to reset the alpha level use [[resetOpacity]] instead;

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

#### Returns

`number`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`Opacity`](BaseEntity.md#opacity)

#### Defined in

[src/fivem/models/BaseEntity.ts:396](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/BaseEntity.ts#L396)

***

### Owner

```ts
get Owner(): number
```

#### Returns

`number`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`Owner`](BaseEntity.md#owner)

#### Defined in

[src/fivem/models/BaseEntity.ts:112](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/BaseEntity.ts#L112)

***

### PassengerCapacity

```ts
get PassengerCapacity(): number
```

#### Returns

`number`

#### Defined in

[src/fivem/models/Vehicle.ts:734](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Vehicle.ts#L734)

***

### PassengerCount

```ts
get PassengerCount(): number
```

#### Returns

`number`

#### Defined in

[src/fivem/models/Vehicle.ts:738](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Vehicle.ts#L738)

***

### Passengers

```ts
get Passengers(): Ped[]
```

#### Returns

[`Ped`](Ped.md)[]

#### Defined in

[src/fivem/models/Vehicle.ts:559](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Vehicle.ts#L559)

***

### PetrolTankHealth

```ts
get PetrolTankHealth(): number
```

```ts
set PetrolTankHealth(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

#### Returns

`number`

#### Defined in

[src/fivem/models/Vehicle.ts:101](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Vehicle.ts#L101)

***

### Position

```ts
get Position(): Vector3
```

```ts
set Position(position): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `position` | [`Vector3`](Vector3.md) |

#### Returns

[`Vector3`](Vector3.md)

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`Position`](BaseEntity.md#position)

#### Defined in

[src/fivem/models/BaseEntity.ts:225](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/BaseEntity.ts#L225)

***

### PositionNoOffset

```ts
set PositionNoOffset(position): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `position` | [`Vector3`](Vector3.md) |

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`PositionNoOffset`](BaseEntity.md#positionnooffset)

#### Defined in

[src/fivem/models/BaseEntity.ts:242](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/BaseEntity.ts#L242)

***

### PreviouslyOwnedByPlayer

```ts
get PreviouslyOwnedByPlayer(): boolean
```

```ts
set PreviouslyOwnedByPlayer(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

#### Returns

`boolean`

#### Defined in

[src/fivem/models/Vehicle.ts:284](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Vehicle.ts#L284)

***

### ProvidesCover

```ts
set ProvidesCover(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

#### Defined in

[src/fivem/models/Vehicle.ts:276](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Vehicle.ts#L276)

***

### Quaternion

```ts
get Quaternion(): Quaternion
```

```ts
set Quaternion(quaternion): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `quaternion` | [`Quaternion`](Quaternion.md) |

#### Returns

[`Quaternion`](Quaternion.md)

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`Quaternion`](BaseEntity.md#quaternion)

#### Defined in

[src/fivem/models/BaseEntity.ts:262](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/BaseEntity.ts#L262)

***

### RadioStation

```ts
set RadioStation(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | [`RadioStation`](../enumerations/RadioStation.md) |

#### Defined in

[src/fivem/models/Vehicle.ts:163](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Vehicle.ts#L163)

***

### RespotTimer

```ts
set RespotTimer(time): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `time` | `number` |

#### Defined in

[src/fivem/models/Vehicle.ts:742](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Vehicle.ts#L742)

***

### RoofState

```ts
get RoofState(): VehicleRoofState
```

```ts
set RoofState(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | [`VehicleRoofState`](../enumerations/VehicleRoofState.md) |

#### Returns

[`VehicleRoofState`](../enumerations/VehicleRoofState.md)

#### Defined in

[src/fivem/models/Vehicle.ts:445](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Vehicle.ts#L445)

***

### Rotation

```ts
get Rotation(): Vector3
```

```ts
set Rotation(rotation): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `rotation` | [`Vector3`](Vector3.md) |

#### Returns

[`Vector3`](Vector3.md)

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`Rotation`](BaseEntity.md#rotation)

#### Defined in

[src/fivem/models/BaseEntity.ts:254](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/BaseEntity.ts#L254)

***

### RotationVelocity

```ts
get RotationVelocity(): Vector3
```

#### Returns

[`Vector3`](Vector3.md)

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`RotationVelocity`](BaseEntity.md#rotationvelocity)

#### Defined in

[src/fivem/models/BaseEntity.ts:306](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/BaseEntity.ts#L306)

***

### Speed

```ts
set Speed(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

#### Overrides

[`BaseEntity`](BaseEntity.md).[`Speed`](BaseEntity.md#speed)

#### Defined in

[src/fivem/models/Vehicle.ts:168](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Vehicle.ts#L168)

***

### State

```ts
get State(): StateBagInterface
```

#### Returns

`StateBagInterface`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`State`](BaseEntity.md#state)

#### Defined in

[src/fivem/models/BaseEntity.ts:69](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/BaseEntity.ts#L69)

***

### SteeringAngle

```ts
get SteeringAngle(): number
```

```ts
set SteeringAngle(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

#### Returns

`number`

#### Defined in

[src/fivem/models/Vehicle.ts:209](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Vehicle.ts#L209)

***

### SteeringScale

```ts
get SteeringScale(): number
```

```ts
set SteeringScale(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

#### Returns

`number`

#### Defined in

[src/fivem/models/Vehicle.ts:217](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Vehicle.ts#L217)

***

### Strong

```ts
set Strong(toggle): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `toggle` | `boolean` |

#### Defined in

[src/fivem/models/Vehicle.ts:377](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Vehicle.ts#L377)

***

### SubmersionLevel

```ts
get SubmersionLevel(): number
```

#### Returns

`number`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`SubmersionLevel`](BaseEntity.md#submersionlevel)

#### Defined in

[src/fivem/models/BaseEntity.ts:322](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/BaseEntity.ts#L322)

***

### TowedVehicle

```ts
get TowedVehicle(): Vehicle
```

#### Returns

[`Vehicle`](Vehicle.md)

#### Defined in

[src/fivem/models/Vehicle.ts:703](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Vehicle.ts#L703)

***

### TowingCraneRaisedAmount

```ts
set TowingCraneRaisedAmount(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

#### Defined in

[src/fivem/models/Vehicle.ts:699](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Vehicle.ts#L699)

***

### Velocity

```ts
get Velocity(): Vector3
```

```ts
set Velocity(velocity): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `velocity` | [`Vector3`](Vector3.md) |

#### Returns

[`Vector3`](Vector3.md)

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`Velocity`](BaseEntity.md#velocity)

#### Defined in

[src/fivem/models/BaseEntity.ts:298](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/BaseEntity.ts#L298)

***

### Wheels

```ts
get Wheels(): VehicleWheelCollection
```

#### Returns

[`VehicleWheelCollection`](VehicleWheelCollection.md)

#### Defined in

[src/fivem/models/Vehicle.ts:593](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Vehicle.ts#L593)

***

### WheelSpeed

```ts
get WheelSpeed(): number
```

#### Returns

`number`

#### Defined in

[src/fivem/models/Vehicle.ts:177](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Vehicle.ts#L177)

***

### Windows

```ts
get Windows(): VehicleWindowCollection
```

#### Returns

[`VehicleWindowCollection`](VehicleWindowCollection.md)

#### Defined in

[src/fivem/models/Vehicle.ts:600](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Vehicle.ts#L600)

***

### GhostAlpha

```ts
set static GhostAlpha(alpha): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `alpha` | `number` |

#### Defined in

[src/fivem/models/Vehicle.ts:536](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Vehicle.ts#L536)

## Methods

### AddStateBagChangeHandler()

```ts
AddStateBagChangeHandler(keyFilter, handler): number
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `keyFilter` | `null` \| `string` |
| `handler` | `StateBagChangeHandler` |

#### Returns

`number`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`AddStateBagChangeHandler`](BaseEntity.md#addstatebagchangehandler)

#### Defined in

[src/fivem/models/BaseEntity.ts:73](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/BaseEntity.ts#L73)

***

### applyForce()

```ts
applyForce(
   direction, 
   rotation, 
   forceType): void
```

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `direction` | [`Vector3`](Vector3.md) | `undefined` |
| `rotation` | [`Vector3`](Vector3.md) | `undefined` |
| `forceType` | [`ForceType`](../enumerations/ForceType.md) | `ForceType.MaxForceRot2` |

#### Returns

`void`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`applyForce`](BaseEntity.md#applyforce)

#### Defined in

[src/fivem/models/BaseEntity.ts:698](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/BaseEntity.ts#L698)

***

### applyForceRelative()

```ts
applyForceRelative(
   direction, 
   rotation, 
   forceType): void
```

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `direction` | [`Vector3`](Vector3.md) | `undefined` |
| `rotation` | [`Vector3`](Vector3.md) | `undefined` |
| `forceType` | [`ForceType`](../enumerations/ForceType.md) | `ForceType.MaxForceRot2` |

#### Returns

`void`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`applyForceRelative`](BaseEntity.md#applyforcerelative)

#### Defined in

[src/fivem/models/BaseEntity.ts:721](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/BaseEntity.ts#L721)

***

### attachBlip()

```ts
attachBlip(): Blip
```

#### Returns

[`Blip`](Blip.md)

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`attachBlip`](BaseEntity.md#attachblip)

#### Defined in

[src/fivem/models/BaseEntity.ts:448](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/BaseEntity.ts#L448)

***

### attachTo()

```ts
attachTo(
   entity, 
   position, 
   rotation, 
   collisions, 
   unk9, 
   useSoftPinning, 
   rotationOrder): void
```

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `entity` | [`BaseEntity`](BaseEntity.md) | `undefined` |
| `position` | [`Vector3`](Vector3.md) | `undefined` |
| `rotation` | [`Vector3`](Vector3.md) | `undefined` |
| `collisions` | `boolean` | `false` |
| `unk9` | `boolean` | `true` |
| `useSoftPinning` | `boolean` | `true` |
| `rotationOrder` | `number` | `1` |

#### Returns

`void`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`attachTo`](BaseEntity.md#attachto)

#### Defined in

[src/fivem/models/BaseEntity.ts:603](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/BaseEntity.ts#L603)

***

### attachToBone()

```ts
attachToBone(
   entityBone, 
   position, 
   rotation, 
   collisions, 
   unk9, 
   useSoftPinning, 
   rotationOrder): void
```

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `entityBone` | [`EntityBone`](EntityBone.md) | `undefined` |
| `position` | [`Vector3`](Vector3.md) | `undefined` |
| `rotation` | [`Vector3`](Vector3.md) | `undefined` |
| `collisions` | `boolean` | `false` |
| `unk9` | `boolean` | `true` |
| `useSoftPinning` | `boolean` | `true` |
| `rotationOrder` | `number` | `1` |

#### Returns

`void`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`attachToBone`](BaseEntity.md#attachtobone)

#### Defined in

[src/fivem/models/BaseEntity.ts:649](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/BaseEntity.ts#L649)

***

### clearLastWeaponDamage()

```ts
clearLastWeaponDamage(): void
```

#### Returns

`void`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`clearLastWeaponDamage`](BaseEntity.md#clearlastweapondamage)

#### Defined in

[src/fivem/models/BaseEntity.ts:480](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/BaseEntity.ts#L480)

***

### closeBombBay()

```ts
closeBombBay(): void
```

#### Returns

`void`

#### Defined in

[src/fivem/models/Vehicle.ts:687](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Vehicle.ts#L687)

***

### deform()

```ts
deform(
   position, 
   damageAmount, 
   radius): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `position` | [`Vector3`](Vector3.md) |
| `damageAmount` | `number` |
| `radius` | `number` |

#### Returns

`void`

#### Defined in

[src/fivem/models/Vehicle.ts:722](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Vehicle.ts#L722)

***

### delete()

```ts
delete(): void
```

#### Returns

`void`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`delete`](BaseEntity.md#delete)

#### Defined in

[src/fivem/models/BaseEntity.ts:762](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/BaseEntity.ts#L762)

***

### detach()

```ts
detach(): void
```

#### Returns

`void`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`detach`](BaseEntity.md#detach)

#### Defined in

[src/fivem/models/BaseEntity.ts:682](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/BaseEntity.ts#L682)

***

### detachFromTowTruck()

```ts
detachFromTowTruck(): void
```

#### Returns

`void`

#### Defined in

[src/fivem/models/Vehicle.ts:711](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Vehicle.ts#L711)

***

### detachTowedVehicle()

```ts
detachTowedVehicle(): void
```

#### Returns

`void`

#### Defined in

[src/fivem/models/Vehicle.ts:715](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Vehicle.ts#L715)

***

### exists()

```ts
exists(): boolean
```

#### Returns

`boolean`

#### Overrides

[`BaseEntity`](BaseEntity.md).[`exists`](BaseEntity.md#exists)

#### Defined in

[src/fivem/models/Vehicle.ts:61](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Vehicle.ts#L61)

***

### explode()

```ts
explode(): void
```

#### Returns

`void`

#### Defined in

[src/fivem/models/Vehicle.ts:651](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Vehicle.ts#L651)

***

### explodeNetworked()

```ts
explodeNetworked(): void
```

#### Returns

`void`

#### Defined in

[src/fivem/models/Vehicle.ts:655](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Vehicle.ts#L655)

***

### extraExists()

```ts
extraExists(extra): boolean
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `extra` | `number` |

#### Returns

`boolean`

#### Defined in

[src/fivem/models/Vehicle.ts:607](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Vehicle.ts#L607)

***

### getEntityAttachedTo()

```ts
getEntityAttachedTo(): BaseEntity
```

#### Returns

[`BaseEntity`](BaseEntity.md)

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`getEntityAttachedTo`](BaseEntity.md#getentityattachedto)

#### Defined in

[src/fivem/models/BaseEntity.ts:694](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/BaseEntity.ts#L694)

***

### getHandlingFloat()

```ts
getHandlingFloat(fieldName): number
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `fieldName` | `string` |

#### Returns

`number`

#### Defined in

[src/fivem/models/Vehicle.ts:746](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Vehicle.ts#L746)

***

### getHandlingInt()

```ts
getHandlingInt(fieldName): number
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `fieldName` | `string` |

#### Returns

`number`

#### Defined in

[src/fivem/models/Vehicle.ts:754](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Vehicle.ts#L754)

***

### getHandlingVector()

```ts
getHandlingVector(fieldName): Vector3
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `fieldName` | `string` |

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/fivem/models/Vehicle.ts:767](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Vehicle.ts#L767)

***

### getOffsetInRelativeCoords()

```ts
getOffsetInRelativeCoords(worldCoords): Vector3
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `worldCoords` | [`Vector3`](Vector3.md) |

#### Returns

[`Vector3`](Vector3.md)

the offset position from the entity in world coords

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`getOffsetInRelativeCoords`](BaseEntity.md#getoffsetinrelativecoords)

#### Defined in

[src/fivem/models/BaseEntity.ts:550](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/BaseEntity.ts#L550)

***

### getOffsetInWorldCoords()

```ts
getOffsetInWorldCoords(offset): Vector3
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `offset` | [`Vector3`](Vector3.md) |

#### Returns

[`Vector3`](Vector3.md)

the offset position from the entity in relative coords

#### Example

```typescript
const ply = Game.PlayerPed;
const plyPos = ply.Position;
const bag = await World.createProp(new Model('ba_prop_battle_bag_01b'), plyPos, true, true, true);
bag.attachToBone(
    ply.Bones.getBone(64113),
    new Vector3(0.12, -0.25, 0.0),
    new Vector3(105.0, 50.0, 190.0)
)
const offset = bag.getRelativePositionOffset(plyPos);
```

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`getOffsetInWorldCoords`](BaseEntity.md#getoffsetinworldcoords)

#### Defined in

[src/fivem/models/BaseEntity.ts:578](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/BaseEntity.ts#L578)

***

### ~~getOffsetPosition()~~

```ts
getOffsetPosition(offset): Vector3
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `offset` | [`Vector3`](Vector3.md) |

#### Returns

[`Vector3`](Vector3.md)

#### Deprecated

use [[getOffsetInWorldCoords]]

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`getOffsetPosition`](BaseEntity.md#getoffsetposition)

#### Defined in

[src/fivem/models/BaseEntity.ts:599](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/BaseEntity.ts#L599)

***

### getPedOnSeat()

```ts
getPedOnSeat(seat): Ped
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `seat` | [`VehicleSeat`](../enumerations/VehicleSeat.md) |

#### Returns

[`Ped`](Ped.md)

#### Defined in

[src/fivem/models/Vehicle.ts:623](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Vehicle.ts#L623)

***

### ~~getPositionOffset()~~

```ts
getPositionOffset(worldCoords): Vector3
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `worldCoords` | [`Vector3`](Vector3.md) |

#### Returns

[`Vector3`](Vector3.md)

#### Deprecated

use [[getOffsetInRelativeCoords]] instead

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`getPositionOffset`](BaseEntity.md#getpositionoffset)

#### Defined in

[src/fivem/models/BaseEntity.ts:592](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/BaseEntity.ts#L592)

***

### getSpeedVector()

```ts
getSpeedVector(isRelative): Vector3
```

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `isRelative` | `boolean` | `false` |

#### Returns

[`Vector3`](Vector3.md)

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`getSpeedVector`](BaseEntity.md#getspeedvector)

#### Defined in

[src/fivem/models/BaseEntity.ts:124](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/BaseEntity.ts#L124)

***

### hasBeenDamagedBy()

```ts
hasBeenDamagedBy(entity): boolean
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `entity` | [`BaseEntity`](BaseEntity.md) |

#### Returns

`boolean`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`hasBeenDamagedBy`](BaseEntity.md#hasbeendamagedby)

#### Defined in

[src/fivem/models/BaseEntity.ts:464](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/BaseEntity.ts#L464)

***

### hasBeenDamagedByAnyMeleeWeapon()

```ts
hasBeenDamagedByAnyMeleeWeapon(): boolean
```

#### Returns

`boolean`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`hasBeenDamagedByAnyMeleeWeapon`](BaseEntity.md#hasbeendamagedbyanymeleeweapon)

#### Defined in

[src/fivem/models/BaseEntity.ts:476](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/BaseEntity.ts#L476)

***

### hasBeenDamagedByAnyWeapon()

```ts
hasBeenDamagedByAnyWeapon(): boolean
```

#### Returns

`boolean`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`hasBeenDamagedByAnyWeapon`](BaseEntity.md#hasbeendamagedbyanyweapon)

#### Defined in

[src/fivem/models/BaseEntity.ts:472](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/BaseEntity.ts#L472)

***

### hasBeenDamagedByWeapon()

```ts
hasBeenDamagedByWeapon(weapon): boolean
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `weapon` | [`WeaponHash`](../enumerations/WeaponHash.md) |

#### Returns

`boolean`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`hasBeenDamagedByWeapon`](BaseEntity.md#hasbeendamagedbyweapon)

#### Defined in

[src/fivem/models/BaseEntity.ts:468](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/BaseEntity.ts#L468)

***

### hasClearLosToEntity()

```ts
hasClearLosToEntity(entity, traceType): boolean
```

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `entity` | [`BaseEntity`](BaseEntity.md) | `undefined` |
| `traceType` | `number` | `17` |

#### Returns

`boolean`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`hasClearLosToEntity`](BaseEntity.md#hasclearlostoentity)

#### Defined in

[src/fivem/models/BaseEntity.ts:456](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/BaseEntity.ts#L456)

***

### hasClearLosToEntityInFront()

```ts
hasClearLosToEntityInFront(entity): boolean
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `entity` | [`BaseEntity`](BaseEntity.md) |

#### Returns

`boolean`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`hasClearLosToEntityInFront`](BaseEntity.md#hasclearlostoentityinfront)

#### Defined in

[src/fivem/models/BaseEntity.ts:460](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/BaseEntity.ts#L460)

***

### ~~isAlive()~~

```ts
isAlive(): boolean
```

#### Returns

`boolean`

#### Deprecated

use [[IsAlive]] instead

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`isAlive`](BaseEntity.md#isalive-1)

#### Defined in

[src/fivem/models/BaseEntity.ts:199](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/BaseEntity.ts#L199)

***

### isAttached()

```ts
isAttached(): boolean
```

#### Returns

`boolean`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`isAttached`](BaseEntity.md#isattached)

#### Defined in

[src/fivem/models/BaseEntity.ts:686](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/BaseEntity.ts#L686)

***

### isAttachedTo()

```ts
isAttachedTo(entity): boolean
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `entity` | [`BaseEntity`](BaseEntity.md) |

#### Returns

`boolean`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`isAttachedTo`](BaseEntity.md#isattachedto)

#### Defined in

[src/fivem/models/BaseEntity.ts:690](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/BaseEntity.ts#L690)

***

### ~~isDead()~~

```ts
isDead(): boolean
```

#### Returns

`boolean`

#### Deprecated

use [[IsDead]] instead

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`isDead`](BaseEntity.md#isdead-1)

#### Defined in

[src/fivem/models/BaseEntity.ts:192](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/BaseEntity.ts#L192)

***

### isExtraOn()

```ts
isExtraOn(extra): boolean
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `extra` | `number` |

#### Returns

`boolean`

#### Defined in

[src/fivem/models/Vehicle.ts:611](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Vehicle.ts#L611)

***

### isInAngledArea()

```ts
isInAngledArea(
   origin, 
   edge, 
   angle): boolean
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `origin` | [`Vector3`](Vector3.md) |
| `edge` | [`Vector3`](Vector3.md) |
| `angle` | `number` |

#### Returns

`boolean`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`isInAngledArea`](BaseEntity.md#isinangledarea)

#### Defined in

[src/fivem/models/BaseEntity.ts:499](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/BaseEntity.ts#L499)

***

### isInArea()

```ts
isInArea(minBounds, maxBounds): boolean
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `minBounds` | [`Vector3`](Vector3.md) |
| `maxBounds` | [`Vector3`](Vector3.md) |

#### Returns

`boolean`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`isInArea`](BaseEntity.md#isinarea)

#### Defined in

[src/fivem/models/BaseEntity.ts:484](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/BaseEntity.ts#L484)

***

### isInRangeOf()

```ts
isInRangeOf(position, range): boolean
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `position` | [`Vector3`](Vector3.md) |
| `range` | `number` |

#### Returns

`boolean`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`isInRangeOf`](BaseEntity.md#isinrangeof)

#### Defined in

[src/fivem/models/BaseEntity.ts:519](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/BaseEntity.ts#L519)

***

### isNearEntity()

```ts
isNearEntity(entity, bounds): boolean
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `entity` | [`BaseEntity`](BaseEntity.md) |
| `bounds` | [`Vector3`](Vector3.md) |

#### Returns

`boolean`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`isNearEntity`](BaseEntity.md#isnearentity)

#### Defined in

[src/fivem/models/BaseEntity.ts:525](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/BaseEntity.ts#L525)

***

### isSeatFree()

```ts
isSeatFree(seat): boolean
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `seat` | [`VehicleSeat`](../enumerations/VehicleSeat.md) |

#### Returns

`boolean`

#### Defined in

[src/fivem/models/Vehicle.ts:627](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Vehicle.ts#L627)

***

### isTouching()

```ts
isTouching(entity): boolean
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `entity` | [`BaseEntity`](BaseEntity.md) |

#### Returns

`boolean`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`isTouching`](BaseEntity.md#istouching)

#### Defined in

[src/fivem/models/BaseEntity.ts:538](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/BaseEntity.ts#L538)

***

### isTouchingModel()

```ts
isTouchingModel(model): boolean
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `model` | [`Model`](Model.md) |

#### Returns

`boolean`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`isTouchingModel`](BaseEntity.md#istouchingmodel)

#### Defined in

[src/fivem/models/BaseEntity.ts:542](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/BaseEntity.ts#L542)

***

### listenForStateChange()

```ts
listenForStateChange(keyFilter, handler): number
```

A short hand function for AddStateBagChangeHandler, this gets automatically cleaned up on entity deletion.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `keyFilter` | `null` \| `string` | the key to filter for or null |
| `handler` | `StateBagChangeHandler` | the function to handle the change |

#### Returns

`number`

a cookie to be used in RemoveStateBagChangeHandler

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`listenForStateChange`](BaseEntity.md#listenforstatechange)

#### Defined in

[src/fivem/models/BaseEntity.ts:97](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/BaseEntity.ts#L97)

***

### ~~markAsNoLongerNeeded()~~

```ts
markAsNoLongerNeeded(): void
```

#### Returns

`void`

#### Deprecated

use [[IsMissionEntity]] setter as false instead.

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`markAsNoLongerNeeded`](BaseEntity.md#markasnolongerneeded)

#### Defined in

[src/fivem/models/BaseEntity.ts:773](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/BaseEntity.ts#L773)

***

### openBombBay()

```ts
openBombBay(): void
```

#### Returns

`void`

#### Defined in

[src/fivem/models/Vehicle.ts:681](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Vehicle.ts#L681)

***

### placeOnGround()

```ts
placeOnGround(): void
```

#### Returns

`void`

#### Defined in

[src/fivem/models/Vehicle.ts:643](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Vehicle.ts#L643)

***

### ~~removeAllParticleEffects()~~

```ts
removeAllParticleEffects(): void
```

#### Returns

`void`

#### Deprecated

use [[removePtfxEffects]]

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`removeAllParticleEffects`](BaseEntity.md#removeallparticleeffects)

#### Defined in

[src/fivem/models/BaseEntity.ts:754](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/BaseEntity.ts#L754)

***

### removePtfxEffects()

```ts
removePtfxEffects(): void
```

Removes all particle effects from the entity

#### Returns

`void`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`removePtfxEffects`](BaseEntity.md#removeptfxeffects)

#### Defined in

[src/fivem/models/BaseEntity.ts:747](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/BaseEntity.ts#L747)

***

### removeStateListener()

```ts
removeStateListener(tgtCookie): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `tgtCookie` | `number` |

#### Returns

`void`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`removeStateListener`](BaseEntity.md#removestatelistener)

#### Defined in

[src/fivem/models/BaseEntity.ts:104](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/BaseEntity.ts#L104)

***

### repair()

```ts
repair(): void
```

#### Returns

`void`

#### Defined in

[src/fivem/models/Vehicle.ts:647](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Vehicle.ts#L647)

***

### resetOpacity()

```ts
resetOpacity(): void
```

#### Returns

`void`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`resetOpacity`](BaseEntity.md#resetopacity)

#### Defined in

[src/fivem/models/BaseEntity.ts:407](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/BaseEntity.ts#L407)

***

### setHandlingFloat()

```ts
setHandlingFloat(fieldName, value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `fieldName` | `string` |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/fivem/models/Vehicle.ts:750](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Vehicle.ts#L750)

***

### setHandlingInt()

```ts
setHandlingInt(fieldName, value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `fieldName` | `string` |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/fivem/models/Vehicle.ts:758](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Vehicle.ts#L758)

***

### setHeliYawPitchRollMult()

```ts
setHeliYawPitchRollMult(mult): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `mult` | `number` |

#### Returns

`void`

#### Defined in

[src/fivem/models/Vehicle.ts:693](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Vehicle.ts#L693)

***

### setNoCollision()

```ts
setNoCollision(entity, toggle): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `entity` | [`BaseEntity`](BaseEntity.md) |
| `toggle` | `boolean` |

#### Returns

`void`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`setNoCollision`](BaseEntity.md#setnocollision)

#### Defined in

[src/fivem/models/BaseEntity.ts:452](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/BaseEntity.ts#L452)

***

### soundHorn()

```ts
soundHorn(duration, mode): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `duration` | `number` |
| `mode` | `number` |

#### Returns

`void`

#### Defined in

[src/fivem/models/Vehicle.ts:261](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Vehicle.ts#L261)

***

### startAlarm()

```ts
startAlarm(): void
```

#### Returns

`void`

#### Defined in

[src/fivem/models/Vehicle.ts:245](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Vehicle.ts#L245)

***

### toggleExtra()

```ts
toggleExtra(extra, toggle): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `extra` | `number` |
| `toggle` | `boolean` |

#### Returns

`void`

#### Defined in

[src/fivem/models/Vehicle.ts:617](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Vehicle.ts#L617)

***

### towVehicle()

```ts
towVehicle(vehicle, rear): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `vehicle` | [`Vehicle`](Vehicle.md) |
| `rear` | `boolean` |

#### Returns

`void`

#### Defined in

[src/fivem/models/Vehicle.ts:707](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Vehicle.ts#L707)

***

### wash()

```ts
wash(): void
```

#### Returns

`void`

#### Defined in

[src/fivem/models/Vehicle.ts:631](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Vehicle.ts#L631)

***

### exists()

```ts
static exists(vehicle): boolean
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `vehicle` | [`Vehicle`](Vehicle.md) |

#### Returns

`boolean`

#### Defined in

[src/fivem/models/Vehicle.ts:35](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Vehicle.ts#L35)

***

### fromHandle()

```ts
static fromHandle(handle): null | Vehicle
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `handle` | `number` |

#### Returns

`null` \| [`Vehicle`](Vehicle.md)

#### Defined in

[src/fivem/models/Vehicle.ts:39](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Vehicle.ts#L39)

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

[`BaseEntity`](BaseEntity.md).[`fromNetworkId`](BaseEntity.md#fromnetworkid)

#### Defined in

[src/fivem/models/Vehicle.ts:44](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Vehicle.ts#L44)

***

### fromStateBagName()

```ts
static fromStateBagName(stateBagName): null | BaseEntity
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `stateBagName` | `string` |

#### Returns

`null` \| [`BaseEntity`](BaseEntity.md)

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`fromStateBagName`](BaseEntity.md#fromstatebagname)

#### Defined in

[src/fivem/models/BaseEntity.ts:16](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/BaseEntity.ts#L16)

***

### getClassDisplayName()

```ts
static getClassDisplayName(vehicleClass): string
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `vehicleClass` | [`VehicleClass`](../enumerations/VehicleClass.md) |

#### Returns

`string`

#### Defined in

[src/fivem/models/Vehicle.ts:31](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Vehicle.ts#L31)

***

### getModelClass()

```ts
static getModelClass(vehicleModel): VehicleClass
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `vehicleModel` | [`Model`](Model.md) |

#### Returns

[`VehicleClass`](../enumerations/VehicleClass.md)

#### Defined in

[src/fivem/models/Vehicle.ts:27](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Vehicle.ts#L27)

***

### getModelDisplayName()

```ts
static getModelDisplayName(vehicleModel): string
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `vehicleModel` | [`Model`](Model.md) |

#### Returns

`string`

#### Defined in

[src/fivem/models/Vehicle.ts:23](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Vehicle.ts#L23)

***

### resetGhostAlpha()

```ts
static resetGhostAlpha(): void
```

#### Returns

`void`

#### Defined in

[src/fivem/models/Vehicle.ts:545](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Vehicle.ts#L545)
