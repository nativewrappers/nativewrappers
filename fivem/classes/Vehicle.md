[@nativewrappers/fivem](../../README.md) / [fivem](../README.md) / Vehicle

# Class: Vehicle

Defined in: fivem/models/Vehicle.d.ts:7

## Extends

- [`BaseEntity`](BaseEntity.md)

## Constructors

### new Vehicle()

```ts
new Vehicle(handle): Vehicle
```

Defined in: fivem/models/Vehicle.d.ts:19

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `handle` | `number` |

#### Returns

[`Vehicle`](Vehicle.md)

#### Overrides

[`BaseEntity`](BaseEntity.md).[`constructor`](BaseEntity.md#constructors)

## Properties

| Property | Modifier | Type | Overrides | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ | ------ |
| <a id="bones"></a> `bones` | `protected` | `undefined` \| [`EntityBoneCollection`](EntityBoneCollection.md) | - | [`BaseEntity`](BaseEntity.md).[`bones`](BaseEntity.md#bones) | fivem/models/BaseEntity.d.ts:14 |
| <a id="handle-1"></a> `handle` | `protected` | `number` | - | [`BaseEntity`](BaseEntity.md).[`handle`](BaseEntity.md#handle-1) | fivem/models/BaseEntity.d.ts:13 |
| <a id="netid"></a> `netId` | `protected` | `null` \| `number` | - | [`BaseEntity`](BaseEntity.md).[`netId`](BaseEntity.md#netid) | fivem/models/BaseEntity.d.ts:16 |
| <a id="statebagcookies"></a> `stateBagCookies` | `protected` | `number`[] | - | [`BaseEntity`](BaseEntity.md).[`stateBagCookies`](BaseEntity.md#statebagcookies) | fivem/models/BaseEntity.d.ts:15 |
| <a id="type"></a> `type` | `protected` | `ClassTypes` | [`BaseEntity`](BaseEntity.md).[`type`](BaseEntity.md#type) | - | fivem/models/Vehicle.d.ts:18 |

## Accessors

### Acceleration

#### Get Signature

```ts
get Acceleration(): number
```

Defined in: fivem/models/Vehicle.d.ts:48

##### Returns

`number`

***

### AlarmTimeLeft

#### Get Signature

```ts
get AlarmTimeLeft(): number
```

Defined in: fivem/models/Vehicle.d.ts:61

##### Returns

`number`

#### Set Signature

```ts
set AlarmTimeLeft(value): void
```

Defined in: fivem/models/Vehicle.d.ts:62

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

##### Returns

`void`

***

### AreBrakeLightsOn

#### Set Signature

```ts
set AreBrakeLightsOn(value): void
```

Defined in: fivem/models/Vehicle.d.ts:92

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

##### Returns

`void`

***

### AreHighBeamsOn

#### Get Signature

```ts
get AreHighBeamsOn(): boolean
```

Defined in: fivem/models/Vehicle.d.ts:78

##### Returns

`boolean`

#### Set Signature

```ts
set AreHighBeamsOn(value): void
```

Defined in: fivem/models/Vehicle.d.ts:79

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

##### Returns

`void`

***

### AreLightsOn

#### Get Signature

```ts
get AreLightsOn(): boolean
```

Defined in: fivem/models/Vehicle.d.ts:76

##### Returns

`boolean`

#### Set Signature

```ts
set AreLightsOn(value): void
```

Defined in: fivem/models/Vehicle.d.ts:77

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

##### Returns

`void`

***

### AttachedBlip

#### Get Signature

```ts
get AttachedBlip(): null | Blip
```

Defined in: fivem/models/BaseEntity.d.ts:119

##### Returns

`null` \| [`Blip`](Blip.md)

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`AttachedBlip`](BaseEntity.md#attachedblip)

***

### BodyHealth

#### Get Signature

```ts
get BodyHealth(): number
```

Defined in: fivem/models/Vehicle.d.ts:26

##### Returns

`number`

#### Set Signature

```ts
set BodyHealth(value): void
```

Defined in: fivem/models/Vehicle.d.ts:27

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

##### Returns

`void`

***

### Bones

#### Get Signature

```ts
get Bones(): EntityBoneCollection
```

Defined in: fivem/models/BaseEntity.d.ts:118

##### Returns

[`EntityBoneCollection`](EntityBoneCollection.md)

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`Bones`](BaseEntity.md#bones-1)

***

### CanBeVisiblyDamaged

#### Set Signature

```ts
set CanBeVisiblyDamaged(value): void
```

Defined in: fivem/models/Vehicle.d.ts:94

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

##### Returns

`void`

***

### CanBreak

#### Set Signature

```ts
set CanBreak(toggle): void
```

Defined in: fivem/models/Vehicle.d.ts:96

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `toggle` | `boolean` |

##### Returns

`void`

***

### CanDeformWheels

#### Set Signature

```ts
set CanDeformWheels(value): void
```

Defined in: fivem/models/Vehicle.d.ts:154

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

##### Returns

`void`

***

### CanEngineDegrade

#### Set Signature

```ts
set CanEngineDegrade(value): void
```

Defined in: fivem/models/Vehicle.d.ts:107

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

##### Returns

`void`

***

### CanTiresBurst

#### Get Signature

```ts
get CanTiresBurst(): boolean
```

Defined in: fivem/models/Vehicle.d.ts:151

##### Returns

`boolean`

#### Set Signature

```ts
set CanTiresBurst(value): void
```

Defined in: fivem/models/Vehicle.d.ts:152

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

##### Returns

`void`

***

### CanWheelsBreak

#### Set Signature

```ts
set CanWheelsBreak(value): void
```

Defined in: fivem/models/Vehicle.d.ts:153

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

##### Returns

`void`

***

### ClassDisplayName

#### Get Signature

```ts
get ClassDisplayName(): string
```

Defined in: fivem/models/Vehicle.d.ts:22

##### Returns

`string`

***

### ClassType

#### Get Signature

```ts
get ClassType(): VehicleClass
```

Defined in: fivem/models/Vehicle.d.ts:25

##### Returns

[`VehicleClass`](../enumerations/VehicleClass.md)

***

### CurrentGear

#### Get Signature

```ts
get CurrentGear(): number
```

Defined in: fivem/models/Vehicle.d.ts:53

##### Returns

`number`

***

### CurrentRPM

#### Get Signature

```ts
get CurrentRPM(): number
```

Defined in: fivem/models/Vehicle.d.ts:49

##### Returns

`number`

#### Set Signature

```ts
set CurrentRPM(value): void
```

Defined in: fivem/models/Vehicle.d.ts:50

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

##### Returns

`void`

***

### DirtLevel

#### Get Signature

```ts
get DirtLevel(): number
```

Defined in: fivem/models/Vehicle.d.ts:145

##### Returns

`number`

#### Set Signature

```ts
set DirtLevel(value): void
```

Defined in: fivem/models/Vehicle.d.ts:146

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

##### Returns

`void`

***

### DisplayName

#### Get Signature

```ts
get DisplayName(): string
```

Defined in: fivem/models/Vehicle.d.ts:21

##### Returns

`string`

***

### Doors

#### Get Signature

```ts
get Doors(): VehicleDoorCollection
```

Defined in: fivem/models/Vehicle.d.ts:135

##### Returns

[`VehicleDoorCollection`](VehicleDoorCollection.md)

***

### Driver

#### Get Signature

```ts
get Driver(): Ped
```

Defined in: fivem/models/Vehicle.d.ts:126

##### Returns

[`Ped`](Ped.md)

***

### DropsMoneyOnExplosion

#### Set Signature

```ts
set DropsMoneyOnExplosion(value): void
```

Defined in: fivem/models/Vehicle.d.ts:71

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

##### Returns

`void`

***

### EngineHealth

#### Get Signature

```ts
get EngineHealth(): number
```

Defined in: fivem/models/Vehicle.d.ts:28

##### Returns

`number`

#### Set Signature

```ts
set EngineHealth(value): void
```

Defined in: fivem/models/Vehicle.d.ts:29

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

##### Returns

`void`

***

### EnginePowerMultiplier

#### Set Signature

```ts
set EnginePowerMultiplier(value): void
```

Defined in: fivem/models/Vehicle.d.ts:108

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

##### Returns

`void`

***

### EngineTorqueMultiplier

#### Set Signature

```ts
set EngineTorqueMultiplier(value): void
```

Defined in: fivem/models/Vehicle.d.ts:109

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

##### Returns

`void`

***

### EstimatedMaxSpeed

#### Get Signature

```ts
get EstimatedMaxSpeed(): number
```

Defined in: fivem/models/Vehicle.d.ts:47

##### Returns

`number`

***

### ForwardVector

#### Get Signature

```ts
get ForwardVector(): Vector3
```

Defined in: fivem/models/BaseEntity.d.ts:41

##### Returns

`Vector3`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`ForwardVector`](BaseEntity.md#forwardvector)

***

### FuelLevel

#### Get Signature

```ts
get FuelLevel(): number
```

Defined in: fivem/models/Vehicle.d.ts:32

##### Returns

`number`

#### Set Signature

```ts
set FuelLevel(value): void
```

Defined in: fivem/models/Vehicle.d.ts:33

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

##### Returns

`void`

***

### Ghosted

#### Get Signature

```ts
get Ghosted(): boolean
```

Defined in: fivem/models/Vehicle.d.ts:127

##### Returns

`boolean`

#### Set Signature

```ts
set Ghosted(isGhosted): void
```

Defined in: fivem/models/Vehicle.d.ts:129

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `isGhosted` | `boolean` |

##### Returns

`void`

***

### GhostedForGhostPlayers

#### Set Signature

```ts
set GhostedForGhostPlayers(isGhostedForGhostPlayers): void
```

Defined in: fivem/models/Vehicle.d.ts:128

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `isGhostedForGhostPlayers` | `boolean` |

##### Returns

`void`

***

### Gravity

#### Get Signature

```ts
get Gravity(): number
```

Defined in: fivem/models/Vehicle.d.ts:36

##### Returns

`number`

#### Set Signature

```ts
set Gravity(value): void
```

Defined in: fivem/models/Vehicle.d.ts:37

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

##### Returns

`void`

***

### Handle

#### Get Signature

```ts
get Handle(): number
```

Defined in: fivem/models/BaseEntity.d.ts:19

##### Returns

`number`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`Handle`](BaseEntity.md#handle-2)

***

### HasBombBay

#### Get Signature

```ts
get HasBombBay(): boolean
```

Defined in: fivem/models/Vehicle.d.ts:155

##### Returns

`boolean`

***

### HasCollided

#### Get Signature

```ts
get HasCollided(): boolean
```

Defined in: fivem/models/BaseEntity.d.ts:113

##### Returns

`boolean`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`HasCollided`](BaseEntity.md#hascollided)

***

### HasGravity

#### Set Signature

```ts
set HasGravity(value): void
```

Defined in: fivem/models/BaseEntity.d.ts:83

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

##### Returns

`void`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`HasGravity`](BaseEntity.md#hasgravity)

***

### HasMutedSirens

#### Set Signature

```ts
set HasMutedSirens(value): void
```

Defined in: fivem/models/Vehicle.d.ts:66

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

##### Returns

`void`

***

### HasRoof

#### Get Signature

```ts
get HasRoof(): boolean
```

Defined in: fivem/models/Vehicle.d.ts:101

##### Returns

`boolean`

***

### Heading

#### Get Signature

```ts
get Heading(): number
```

Defined in: fivem/models/BaseEntity.d.ts:75

##### Returns

`number`

#### Set Signature

```ts
set Heading(heading): void
```

Defined in: fivem/models/BaseEntity.d.ts:76

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `heading` | `number` |

##### Returns

`void`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`Heading`](BaseEntity.md#heading)

***

### Health

#### Get Signature

```ts
get Health(): number
```

Defined in: fivem/models/BaseEntity.d.ts:44

##### Returns

`number`

#### Set Signature

```ts
set Health(amount): void
```

Defined in: fivem/models/BaseEntity.d.ts:45

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `amount` | `number` |

##### Returns

`void`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`Health`](BaseEntity.md#health)

***

### HeightAboveGround

#### Get Signature

```ts
get HeightAboveGround(): number
```

Defined in: fivem/models/BaseEntity.d.ts:84

##### Returns

`number`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`HeightAboveGround`](BaseEntity.md#heightaboveground)

***

### HighGear

#### Get Signature

```ts
get HighGear(): number
```

Defined in: fivem/models/Vehicle.d.ts:51

##### Returns

`number`

#### Set Signature

```ts
set HighGear(value): void
```

Defined in: fivem/models/Vehicle.d.ts:52

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

##### Returns

`void`

***

### IsAlarmSet

#### Get Signature

```ts
get IsAlarmSet(): boolean
```

Defined in: fivem/models/Vehicle.d.ts:58

##### Returns

`boolean`

#### Set Signature

```ts
set IsAlarmSet(value): void
```

Defined in: fivem/models/Vehicle.d.ts:59

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

##### Returns

`void`

***

### IsAlarmSounding

#### Get Signature

```ts
get IsAlarmSounding(): boolean
```

Defined in: fivem/models/Vehicle.d.ts:60

##### Returns

`boolean`

***

### IsAlive

#### Get Signature

```ts
get IsAlive(): boolean
```

Defined in: fivem/models/BaseEntity.d.ts:50

##### Returns

`boolean`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`IsAlive`](BaseEntity.md#isalive)

***

### IsAxlesStrong

#### Set Signature

```ts
set IsAxlesStrong(value): void
```

Defined in: fivem/models/Vehicle.d.ts:106

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

##### Returns

`void`

***

### IsBurnoutForced

#### Set Signature

```ts
set IsBurnoutForced(value): void
```

Defined in: fivem/models/Vehicle.d.ts:124

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

##### Returns

`void`

***

### IsCollisionEnabled

#### Get Signature

```ts
get IsCollisionEnabled(): boolean
```

Defined in: fivem/models/BaseEntity.d.ts:115

##### Returns

`boolean`

#### Set Signature

```ts
set IsCollisionEnabled(value): void
```

Defined in: fivem/models/BaseEntity.d.ts:116

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

##### Returns

`void`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`IsCollisionEnabled`](BaseEntity.md#iscollisionenabled)

***

### IsConvertible

#### Get Signature

```ts
get IsConvertible(): boolean
```

Defined in: fivem/models/Vehicle.d.ts:123

##### Returns

`boolean`

***

### IsDamaged

#### Get Signature

```ts
get IsDamaged(): boolean
```

Defined in: fivem/models/Vehicle.d.ts:97

##### Returns

`boolean`

***

### IsDead

#### Get Signature

```ts
get IsDead(): boolean
```

Defined in: fivem/models/BaseEntity.d.ts:49

##### Returns

`boolean`

#### Set Signature

```ts
set IsDead(value): void
```

Defined in: fivem/models/BaseEntity.d.ts:48

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

##### Returns

`void`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`IsDead`](BaseEntity.md#isdead)

***

### IsDriveable

#### Get Signature

```ts
get IsDriveable(): boolean
```

Defined in: fivem/models/Vehicle.d.ts:98

##### Returns

`boolean`

#### Set Signature

```ts
set IsDriveable(value): void
```

Defined in: fivem/models/Vehicle.d.ts:99

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

##### Returns

`void`

***

### IsEngineOnFire

#### Get Signature

```ts
get IsEngineOnFire(): boolean
```

Defined in: fivem/models/Vehicle.d.ts:100

##### Returns

`boolean`

***

### IsEngineRunning

#### Get Signature

```ts
get IsEngineRunning(): boolean
```

Defined in: fivem/models/Vehicle.d.ts:38

##### Returns

`boolean`

#### Set Signature

```ts
set IsEngineRunning(value): void
```

Defined in: fivem/models/Vehicle.d.ts:39

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

##### Returns

`void`

***

### IsEngineStarting

#### Get Signature

```ts
get IsEngineStarting(): boolean
```

Defined in: fivem/models/Vehicle.d.ts:40

##### Returns

`boolean`

#### Set Signature

```ts
set IsEngineStarting(value): void
```

Defined in: fivem/models/Vehicle.d.ts:41

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

##### Returns

`void`

***

### IsFrontBumperBrokenOff

#### Get Signature

```ts
get IsFrontBumperBrokenOff(): boolean
```

Defined in: fivem/models/Vehicle.d.ts:105

##### Returns

`boolean`

***

### IsHandbrakeForcedOn

#### Get Signature

```ts
get IsHandbrakeForcedOn(): boolean
```

Defined in: fivem/models/Vehicle.d.ts:90

##### Returns

`boolean`

#### Set Signature

```ts
set IsHandbrakeForcedOn(value): void
```

Defined in: fivem/models/Vehicle.d.ts:91

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

##### Returns

`void`

***

### IsInAir

#### Get Signature

```ts
get IsInAir(): boolean
```

Defined in: fivem/models/BaseEntity.d.ts:94

##### Returns

`boolean`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`IsInAir`](BaseEntity.md#isinair)

***

### IsInBurnout

#### Get Signature

```ts
get IsInBurnout(): boolean
```

Defined in: fivem/models/Vehicle.d.ts:125

##### Returns

`boolean`

***

### IsInGhostCollision

#### Get Signature

```ts
get IsInGhostCollision(): boolean
```

Defined in: fivem/models/Vehicle.d.ts:131

##### Returns

`boolean`

***

### IsInteriorLightOn

#### Get Signature

```ts
get IsInteriorLightOn(): boolean
```

Defined in: fivem/models/Vehicle.d.ts:80

##### Returns

`boolean`

#### Set Signature

```ts
set IsInteriorLightOn(value): void
```

Defined in: fivem/models/Vehicle.d.ts:81

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

##### Returns

`void`

***

### IsInvincible

#### Set Signature

```ts
set IsInvincible(value): void
```

Defined in: fivem/models/BaseEntity.d.ts:105

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

##### Returns

`void`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`IsInvincible`](BaseEntity.md#isinvincible)

***

### IsInWater

#### Get Signature

```ts
get IsInWater(): boolean
```

Defined in: fivem/models/BaseEntity.d.ts:95

##### Returns

`boolean`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`IsInWater`](BaseEntity.md#isinwater)

***

### IsLeftHeadLightBroken

#### Get Signature

```ts
get IsLeftHeadLightBroken(): boolean
```

Defined in: fivem/models/Vehicle.d.ts:102

##### Returns

`boolean`

***

### IsLeftIndicatorLightOn

#### Get Signature

```ts
get IsLeftIndicatorLightOn(): boolean
```

Defined in: fivem/models/Vehicle.d.ts:86

##### Returns

`boolean`

#### Set Signature

```ts
set IsLeftIndicatorLightOn(value): void
```

Defined in: fivem/models/Vehicle.d.ts:87

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

##### Returns

`void`

***

### IsMissionEntity

#### Get Signature

```ts
get IsMissionEntity(): boolean
```

Defined in: fivem/models/BaseEntity.d.ts:63

Returns if the entity is set as a mission entity and will not be cleaned up by the engine

##### Returns

`boolean`

#### Set Signature

```ts
set IsMissionEntity(value): void
```

Defined in: fivem/models/BaseEntity.d.ts:67

Sets if the entity is a mission entity and will not be cleaned up by the engine

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

##### Returns

`void`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`IsMissionEntity`](BaseEntity.md#ismissionentity)

***

### IsNetworkConcealed

#### Get Signature

```ts
get IsNetworkConcealed(): boolean
```

Defined in: fivem/models/BaseEntity.d.ts:26

##### Returns

`boolean`

#### Set Signature

```ts
set IsNetworkConcealed(concealed): void
```

Defined in: fivem/models/BaseEntity.d.ts:27

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `concealed` | `boolean` |

##### Returns

`void`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`IsNetworkConcealed`](BaseEntity.md#isnetworkconcealed)

***

### IsNetworked

#### Get Signature

```ts
get IsNetworked(): boolean
```

Defined in: fivem/models/BaseEntity.d.ts:23

##### Returns

`boolean`

if the entity is a networked entity or local entity

#### Set Signature

```ts
set IsNetworked(networked): void
```

Defined in: fivem/models/BaseEntity.d.ts:24

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `networked` | `boolean` |

##### Returns

`void`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`IsNetworked`](BaseEntity.md#isnetworked)

***

### IsOccluded

#### Get Signature

```ts
get IsOccluded(): boolean
```

Defined in: fivem/models/BaseEntity.d.ts:90

##### Returns

`boolean`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`IsOccluded`](BaseEntity.md#isoccluded)

***

### IsOnAllWheels

#### Get Signature

```ts
get IsOnAllWheels(): boolean
```

Defined in: fivem/models/Vehicle.d.ts:118

##### Returns

`boolean`

***

### IsOnFire

#### Get Signature

```ts
get IsOnFire(): boolean
```

Defined in: fivem/models/BaseEntity.d.ts:104

##### Returns

`boolean`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`IsOnFire`](BaseEntity.md#isonfire)

***

### IsOnlyDamagedByPlayer

#### Set Signature

```ts
set IsOnlyDamagedByPlayer(value): void
```

Defined in: fivem/models/BaseEntity.d.ts:106

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

##### Returns

`void`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`IsOnlyDamagedByPlayer`](BaseEntity.md#isonlydamagedbyplayer)

***

### IsOnScreen

#### Get Signature

```ts
get IsOnScreen(): boolean
```

Defined in: fivem/models/BaseEntity.d.ts:91

##### Returns

`boolean`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`IsOnScreen`](BaseEntity.md#isonscreen)

***

### IsPersistent

#### Get Signature

```ts
get IsPersistent(): boolean
```

Defined in: fivem/models/BaseEntity.d.ts:99

##### Deprecated

use [[IsMissionEntity]] instead as its more obvious as what it does

##### Returns

`boolean`

#### Set Signature

```ts
set IsPersistent(value): void
```

Defined in: fivem/models/BaseEntity.d.ts:103

##### Deprecated

use [[IsMissionEntity]] instead as its more obvious as what it does

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

##### Returns

`void`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`IsPersistent`](BaseEntity.md#ispersistent)

***

### IsPositionFrozen

#### Get Signature

```ts
get IsPositionFrozen(): boolean
```

Defined in: fivem/models/BaseEntity.d.ts:77

##### Returns

`boolean`

#### Set Signature

```ts
set IsPositionFrozen(value): void
```

Defined in: fivem/models/BaseEntity.d.ts:78

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

##### Returns

`void`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`IsPositionFrozen`](BaseEntity.md#ispositionfrozen)

***

### IsRadioEnabled

#### Get Signature

```ts
get IsRadioEnabled(): boolean
```

Defined in: fivem/models/Vehicle.d.ts:42

##### Returns

`boolean`

#### Set Signature

```ts
set IsRadioEnabled(value): void
```

Defined in: fivem/models/Vehicle.d.ts:43

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

##### Returns

`void`

***

### IsRearBumperBrokenOff

#### Get Signature

```ts
get IsRearBumperBrokenOff(): boolean
```

Defined in: fivem/models/Vehicle.d.ts:104

##### Returns

`boolean`

***

### IsRecordingCollisions

#### Set Signature

```ts
set IsRecordingCollisions(value): void
```

Defined in: fivem/models/BaseEntity.d.ts:117

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

##### Returns

`void`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`IsRecordingCollisions`](BaseEntity.md#isrecordingcollisions)

***

### IsRightHeadLightBroken

#### Get Signature

```ts
get IsRightHeadLightBroken(): boolean
```

Defined in: fivem/models/Vehicle.d.ts:103

##### Returns

`boolean`

***

### IsRightIndicatorLightOn

#### Get Signature

```ts
get IsRightIndicatorLightOn(): boolean
```

Defined in: fivem/models/Vehicle.d.ts:88

##### Returns

`boolean`

#### Set Signature

```ts
set IsRightIndicatorLightOn(value): void
```

Defined in: fivem/models/Vehicle.d.ts:89

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

##### Returns

`void`

***

### IsSearchLightOn

#### Get Signature

```ts
get IsSearchLightOn(): boolean
```

Defined in: fivem/models/Vehicle.d.ts:82

##### Returns

`boolean`

#### Set Signature

```ts
set IsSearchLightOn(value): void
```

Defined in: fivem/models/Vehicle.d.ts:83

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

##### Returns

`void`

***

### IsSirenActive

#### Get Signature

```ts
get IsSirenActive(): boolean
```

Defined in: fivem/models/Vehicle.d.ts:64

##### Returns

`boolean`

#### Set Signature

```ts
set IsSirenActive(value): void
```

Defined in: fivem/models/Vehicle.d.ts:65

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

##### Returns

`void`

***

### IsStolen

#### Get Signature

```ts
get IsStolen(): boolean
```

Defined in: fivem/models/Vehicle.d.ts:121

##### Returns

`boolean`

#### Set Signature

```ts
set IsStolen(value): void
```

Defined in: fivem/models/Vehicle.d.ts:122

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

##### Returns

`void`

***

### IsStopped

#### Get Signature

```ts
get IsStopped(): boolean
```

Defined in: fivem/models/Vehicle.d.ts:119

##### Returns

`boolean`

***

### IsStoppedAtTrafficLights

#### Get Signature

```ts
get IsStoppedAtTrafficLights(): boolean
```

Defined in: fivem/models/Vehicle.d.ts:120

##### Returns

`boolean`

***

### IsTaxiLightOn

#### Get Signature

```ts
get IsTaxiLightOn(): boolean
```

Defined in: fivem/models/Vehicle.d.ts:84

##### Returns

`boolean`

#### Set Signature

```ts
set IsTaxiLightOn(value): void
```

Defined in: fivem/models/Vehicle.d.ts:85

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

##### Returns

`void`

***

### IsUpright

#### Get Signature

```ts
get IsUpright(): boolean
```

Defined in: fivem/models/BaseEntity.d.ts:92

##### Returns

`boolean`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`IsUpright`](BaseEntity.md#isupright)

***

### IsUpsideDown

#### Get Signature

```ts
get IsUpsideDown(): boolean
```

Defined in: fivem/models/BaseEntity.d.ts:93

##### Returns

`boolean`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`IsUpsideDown`](BaseEntity.md#isupsidedown)

***

### IsVisible

#### Get Signature

```ts
get IsVisible(): boolean
```

Defined in: fivem/models/BaseEntity.d.ts:88

##### Returns

`boolean`

#### Set Signature

```ts
set IsVisible(value): void
```

Defined in: fivem/models/BaseEntity.d.ts:89

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

##### Returns

`void`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`IsVisible`](BaseEntity.md#isvisible)

***

### IsWanted

#### Get Signature

```ts
get IsWanted(): boolean
```

Defined in: fivem/models/Vehicle.d.ts:68

##### Returns

`boolean`

#### Set Signature

```ts
set IsWanted(value): void
```

Defined in: fivem/models/Vehicle.d.ts:69

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

##### Returns

`void`

***

### LandingGearState

#### Get Signature

```ts
get LandingGearState(): VehicleLandingGearState
```

Defined in: fivem/models/Vehicle.d.ts:110

##### Returns

[`VehicleLandingGearState`](../enumerations/VehicleLandingGearState.md)

#### Set Signature

```ts
set LandingGearState(value): void
```

Defined in: fivem/models/Vehicle.d.ts:111

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | [`VehicleLandingGearState`](../enumerations/VehicleLandingGearState.md) |

##### Returns

`void`

***

### LightsMultiplier

#### Set Signature

```ts
set LightsMultiplier(value): void
```

Defined in: fivem/models/Vehicle.d.ts:93

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

##### Returns

`void`

***

### LockStatus

#### Get Signature

```ts
get LockStatus(): VehicleLockStatus
```

Defined in: fivem/models/Vehicle.d.ts:114

##### Returns

[`VehicleLockStatus`](../enumerations/VehicleLockStatus.md)

#### Set Signature

```ts
set LockStatus(value): void
```

Defined in: fivem/models/Vehicle.d.ts:115

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | [`VehicleLockStatus`](../enumerations/VehicleLockStatus.md) |

##### Returns

`void`

***

### LodDistance

#### Get Signature

```ts
get LodDistance(): number
```

Defined in: fivem/models/BaseEntity.d.ts:86

##### Returns

`number`

#### Set Signature

```ts
set LodDistance(value): void
```

Defined in: fivem/models/BaseEntity.d.ts:87

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

##### Returns

`void`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`LodDistance`](BaseEntity.md#loddistance)

***

### MaterialCollidingWith

#### Get Signature

```ts
get MaterialCollidingWith(): MaterialHash
```

Defined in: fivem/models/BaseEntity.d.ts:114

##### Returns

[`MaterialHash`](../enumerations/MaterialHash.md)

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`MaterialCollidingWith`](BaseEntity.md#materialcollidingwith)

***

### Matrix

#### Get Signature

```ts
get Matrix(): Vector3[]
```

Defined in: fivem/models/BaseEntity.d.ts:42

##### Returns

`Vector3`[]

#### Set Signature

```ts
set Matrix(vectors): void
```

Defined in: fivem/models/BaseEntity.d.ts:43

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `vectors` | `Vector3`[] |

##### Returns

`void`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`Matrix`](BaseEntity.md#matrix)

***

### MaxBraking

#### Get Signature

```ts
get MaxBraking(): number
```

Defined in: fivem/models/Vehicle.d.ts:116

##### Returns

`number`

***

### MaxHealth

#### Get Signature

```ts
get MaxHealth(): number
```

Defined in: fivem/models/BaseEntity.d.ts:46

##### Returns

`number`

#### Set Signature

```ts
set MaxHealth(amount): void
```

Defined in: fivem/models/BaseEntity.d.ts:47

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `amount` | `number` |

##### Returns

`void`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`MaxHealth`](BaseEntity.md#maxhealth)

***

### MaxSpeed

#### Set Signature

```ts
set MaxSpeed(value): void
```

Defined in: fivem/models/BaseEntity.d.ts:82

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

##### Returns

`void`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`MaxSpeed`](BaseEntity.md#maxspeed)

***

### MaxTraction

#### Get Signature

```ts
get MaxTraction(): number
```

Defined in: fivem/models/Vehicle.d.ts:117

##### Returns

`number`

***

### Model

#### Get Signature

```ts
get Model(): Model
```

Defined in: fivem/models/BaseEntity.d.ts:59

##### Returns

[`Model`](Model.md)

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`Model`](BaseEntity.md#model)

***

### Mods

#### Get Signature

```ts
get Mods(): VehicleModCollection
```

Defined in: fivem/models/Vehicle.d.ts:136

##### Returns

[`VehicleModCollection`](VehicleModCollection.md)

***

### NeedsToBeHotwired

#### Get Signature

```ts
get NeedsToBeHotwired(): boolean
```

Defined in: fivem/models/Vehicle.d.ts:74

##### Returns

`boolean`

#### Set Signature

```ts
set NeedsToBeHotwired(value): void
```

Defined in: fivem/models/Vehicle.d.ts:75

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

##### Returns

`void`

***

### NetworkId

#### Get Signature

```ts
get NetworkId(): number
```

Defined in: fivem/models/BaseEntity.d.ts:25

##### Returns

`number`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`NetworkId`](BaseEntity.md#networkid)

***

### NumberPlate

#### Get Signature

```ts
get NumberPlate(): string
```

Defined in: fivem/models/Vehicle.d.ts:23

##### Returns

`string`

#### Set Signature

```ts
set NumberPlate(value): void
```

Defined in: fivem/models/Vehicle.d.ts:24

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `string` |

##### Returns

`void`

***

### Occupants

#### Get Signature

```ts
get Occupants(): Ped[]
```

Defined in: fivem/models/Vehicle.d.ts:133

##### Returns

[`Ped`](Ped.md)[]

***

### OilLevel

#### Get Signature

```ts
get OilLevel(): number
```

Defined in: fivem/models/Vehicle.d.ts:34

##### Returns

`number`

#### Set Signature

```ts
set OilLevel(value): void
```

Defined in: fivem/models/Vehicle.d.ts:35

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

##### Returns

`void`

***

### Opacity

#### Get Signature

```ts
get Opacity(): number
```

Defined in: fivem/models/BaseEntity.d.ts:107

##### Returns

`number`

#### Set Signature

```ts
set Opacity(value): void
```

Defined in: fivem/models/BaseEntity.d.ts:111

Sets how transparent an entity is, if you want to reset the alpha level use [[resetOpacity]] instead;

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

##### Returns

`void`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`Opacity`](BaseEntity.md#opacity)

***

### Owner

#### Get Signature

```ts
get Owner(): number
```

Defined in: fivem/models/BaseEntity.d.ts:38

##### Returns

`number`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`Owner`](BaseEntity.md#owner)

***

### PassengerCapacity

#### Get Signature

```ts
get PassengerCapacity(): number
```

Defined in: fivem/models/Vehicle.d.ts:165

##### Returns

`number`

***

### PassengerCount

#### Get Signature

```ts
get PassengerCount(): number
```

Defined in: fivem/models/Vehicle.d.ts:166

##### Returns

`number`

***

### Passengers

#### Get Signature

```ts
get Passengers(): Ped[]
```

Defined in: fivem/models/Vehicle.d.ts:134

##### Returns

[`Ped`](Ped.md)[]

***

### PetrolTankHealth

#### Get Signature

```ts
get PetrolTankHealth(): number
```

Defined in: fivem/models/Vehicle.d.ts:30

##### Returns

`number`

#### Set Signature

```ts
set PetrolTankHealth(value): void
```

Defined in: fivem/models/Vehicle.d.ts:31

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

##### Returns

`void`

***

### Position

#### Get Signature

```ts
get Position(): Vector3
```

Defined in: fivem/models/BaseEntity.d.ts:68

##### Returns

`Vector3`

#### Set Signature

```ts
set Position(position): void
```

Defined in: fivem/models/BaseEntity.d.ts:69

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `position` | `Vector3` |

##### Returns

`void`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`Position`](BaseEntity.md#position)

***

### PositionNoOffset

#### Set Signature

```ts
set PositionNoOffset(position): void
```

Defined in: fivem/models/BaseEntity.d.ts:70

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `position` | `Vector3` |

##### Returns

`void`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`PositionNoOffset`](BaseEntity.md#positionnooffset)

***

### PreviouslyOwnedByPlayer

#### Get Signature

```ts
get PreviouslyOwnedByPlayer(): boolean
```

Defined in: fivem/models/Vehicle.d.ts:72

##### Returns

`boolean`

#### Set Signature

```ts
set PreviouslyOwnedByPlayer(value): void
```

Defined in: fivem/models/Vehicle.d.ts:73

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

##### Returns

`void`

***

### ProvidesCover

#### Set Signature

```ts
set ProvidesCover(value): void
```

Defined in: fivem/models/Vehicle.d.ts:70

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

##### Returns

`void`

***

### Quaternion

#### Get Signature

```ts
get Quaternion(): Quaternion
```

Defined in: fivem/models/BaseEntity.d.ts:73

##### Returns

`Quaternion`

#### Set Signature

```ts
set Quaternion(quaternion): void
```

Defined in: fivem/models/BaseEntity.d.ts:74

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `quaternion` | `Quaternion` |

##### Returns

`void`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`Quaternion`](BaseEntity.md#quaternion)

***

### RadioStation

#### Set Signature

```ts
set RadioStation(value): void
```

Defined in: fivem/models/Vehicle.d.ts:44

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | [`RadioStation`](../enumerations/RadioStation.md) |

##### Returns

`void`

***

### RespotTimer

#### Set Signature

```ts
set RespotTimer(time): void
```

Defined in: fivem/models/Vehicle.d.ts:167

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `time` | `number` |

##### Returns

`void`

***

### RoofState

#### Get Signature

```ts
get RoofState(): VehicleRoofState
```

Defined in: fivem/models/Vehicle.d.ts:112

##### Returns

[`VehicleRoofState`](../enumerations/VehicleRoofState.md)

#### Set Signature

```ts
set RoofState(value): void
```

Defined in: fivem/models/Vehicle.d.ts:113

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | [`VehicleRoofState`](../enumerations/VehicleRoofState.md) |

##### Returns

`void`

***

### Rotation

#### Get Signature

```ts
get Rotation(): Vector3
```

Defined in: fivem/models/BaseEntity.d.ts:71

##### Returns

`Vector3`

#### Set Signature

```ts
set Rotation(rotation): void
```

Defined in: fivem/models/BaseEntity.d.ts:72

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `rotation` | `Vector3` |

##### Returns

`void`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`Rotation`](BaseEntity.md#rotation)

***

### RotationVelocity

#### Get Signature

```ts
get RotationVelocity(): Vector3
```

Defined in: fivem/models/BaseEntity.d.ts:81

##### Returns

`Vector3`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`RotationVelocity`](BaseEntity.md#rotationvelocity)

***

### Speed

#### Set Signature

```ts
set Speed(value): void
```

Defined in: fivem/models/Vehicle.d.ts:45

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

##### Returns

`void`

#### Overrides

[`BaseEntity`](BaseEntity.md).[`Speed`](BaseEntity.md#speed)

***

### State

#### Get Signature

```ts
get State(): StateBagInterface
```

Defined in: fivem/models/BaseEntity.d.ts:28

##### Returns

`StateBagInterface`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`State`](BaseEntity.md#state)

***

### SteeringAngle

#### Get Signature

```ts
get SteeringAngle(): number
```

Defined in: fivem/models/Vehicle.d.ts:54

##### Returns

`number`

#### Set Signature

```ts
set SteeringAngle(value): void
```

Defined in: fivem/models/Vehicle.d.ts:55

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

##### Returns

`void`

***

### SteeringScale

#### Get Signature

```ts
get SteeringScale(): number
```

Defined in: fivem/models/Vehicle.d.ts:56

##### Returns

`number`

#### Set Signature

```ts
set SteeringScale(value): void
```

Defined in: fivem/models/Vehicle.d.ts:57

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

##### Returns

`void`

***

### Strong

#### Set Signature

```ts
set Strong(toggle): void
```

Defined in: fivem/models/Vehicle.d.ts:95

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `toggle` | `boolean` |

##### Returns

`void`

***

### SubmersionLevel

#### Get Signature

```ts
get SubmersionLevel(): number
```

Defined in: fivem/models/BaseEntity.d.ts:85

##### Returns

`number`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`SubmersionLevel`](BaseEntity.md#submersionlevel)

***

### TowedVehicle

#### Get Signature

```ts
get TowedVehicle(): Vehicle
```

Defined in: fivem/models/Vehicle.d.ts:160

##### Returns

[`Vehicle`](Vehicle.md)

***

### TowingCraneRaisedAmount

#### Set Signature

```ts
set TowingCraneRaisedAmount(value): void
```

Defined in: fivem/models/Vehicle.d.ts:159

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

##### Returns

`void`

***

### Velocity

#### Get Signature

```ts
get Velocity(): Vector3
```

Defined in: fivem/models/BaseEntity.d.ts:79

##### Returns

`Vector3`

#### Set Signature

```ts
set Velocity(velocity): void
```

Defined in: fivem/models/BaseEntity.d.ts:80

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `velocity` | `Vector3` |

##### Returns

`void`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`Velocity`](BaseEntity.md#velocity)

***

### Wheels

#### Get Signature

```ts
get Wheels(): VehicleWheelCollection
```

Defined in: fivem/models/Vehicle.d.ts:137

##### Returns

[`VehicleWheelCollection`](VehicleWheelCollection.md)

***

### WheelSpeed

#### Get Signature

```ts
get WheelSpeed(): number
```

Defined in: fivem/models/Vehicle.d.ts:46

##### Returns

`number`

***

### Windows

#### Get Signature

```ts
get Windows(): VehicleWindowCollection
```

Defined in: fivem/models/Vehicle.d.ts:138

##### Returns

[`VehicleWindowCollection`](VehicleWindowCollection.md)

***

### GhostAlpha

#### Set Signature

```ts
set static GhostAlpha(alpha): void
```

Defined in: fivem/models/Vehicle.d.ts:130

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `alpha` | `number` |

##### Returns

`void`

## Methods

### AddStateBagChangeHandler()

```ts
AddStateBagChangeHandler(keyFilter, handler): number
```

Defined in: fivem/models/BaseEntity.d.ts:29

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `keyFilter` | `null` \| `string` |
| `handler` | `StateBagChangeHandler` |

#### Returns

`number`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`AddStateBagChangeHandler`](BaseEntity.md#addstatebagchangehandler)

***

### applyForce()

```ts
applyForce(
   direction, 
   rotation, 
   forceType?): void
```

Defined in: fivem/models/BaseEntity.d.ts:171

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `direction` | `Vector3` |
| `rotation` | `Vector3` |
| `forceType`? | [`ForceType`](../enumerations/ForceType.md) |

#### Returns

`void`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`applyForce`](BaseEntity.md#applyforce)

***

### applyForceRelative()

```ts
applyForceRelative(
   direction, 
   rotation, 
   forceType?): void
```

Defined in: fivem/models/BaseEntity.d.ts:172

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `direction` | `Vector3` |
| `rotation` | `Vector3` |
| `forceType`? | [`ForceType`](../enumerations/ForceType.md) |

#### Returns

`void`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`applyForceRelative`](BaseEntity.md#applyforcerelative)

***

### attachBlip()

```ts
attachBlip(): Blip
```

Defined in: fivem/models/BaseEntity.d.ts:120

#### Returns

[`Blip`](Blip.md)

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`attachBlip`](BaseEntity.md#attachblip)

***

### attachTo()

```ts
attachTo(
   entity, 
   position, 
   rotation, 
   collisions?, 
   unk9?, 
   useSoftPinning?, 
   rotationOrder?): void
```

Defined in: fivem/models/BaseEntity.d.ts:165

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `entity` | [`BaseEntity`](BaseEntity.md) |
| `position` | `Vector3` |
| `rotation` | `Vector3` |
| `collisions`? | `boolean` |
| `unk9`? | `boolean` |
| `useSoftPinning`? | `boolean` |
| `rotationOrder`? | `number` |

#### Returns

`void`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`attachTo`](BaseEntity.md#attachto)

***

### attachToBone()

```ts
attachToBone(
   entityBone, 
   position, 
   rotation, 
   collisions?, 
   unk9?, 
   useSoftPinning?, 
   rotationOrder?): void
```

Defined in: fivem/models/BaseEntity.d.ts:166

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `entityBone` | [`EntityBone`](EntityBone.md) |
| `position` | `Vector3` |
| `rotation` | `Vector3` |
| `collisions`? | `boolean` |
| `unk9`? | `boolean` |
| `useSoftPinning`? | `boolean` |
| `rotationOrder`? | `number` |

#### Returns

`void`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`attachToBone`](BaseEntity.md#attachtobone)

***

### clearLastWeaponDamage()

```ts
clearLastWeaponDamage(): void
```

Defined in: fivem/models/BaseEntity.d.ts:128

#### Returns

`void`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`clearLastWeaponDamage`](BaseEntity.md#clearlastweapondamage)

***

### closeBombBay()

```ts
closeBombBay(): void
```

Defined in: fivem/models/Vehicle.d.ts:157

#### Returns

`void`

***

### deform()

```ts
deform(
   position, 
   damageAmount, 
   radius): void
```

Defined in: fivem/models/Vehicle.d.ts:164

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `position` | `Vector3` |
| `damageAmount` | `number` |
| `radius` | `number` |

#### Returns

`void`

***

### delete()

```ts
delete(): void
```

Defined in: fivem/models/BaseEntity.d.ts:182

#### Returns

`void`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`delete`](BaseEntity.md#delete)

***

### detach()

```ts
detach(): void
```

Defined in: fivem/models/BaseEntity.d.ts:167

#### Returns

`void`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`detach`](BaseEntity.md#detach)

***

### detachFromTowTruck()

```ts
detachFromTowTruck(): void
```

Defined in: fivem/models/Vehicle.d.ts:162

#### Returns

`void`

***

### detachTowedVehicle()

```ts
detachTowedVehicle(): void
```

Defined in: fivem/models/Vehicle.d.ts:163

#### Returns

`void`

***

### exists()

```ts
exists(): boolean
```

Defined in: fivem/models/Vehicle.d.ts:20

#### Returns

`boolean`

#### Overrides

[`BaseEntity`](BaseEntity.md).[`exists`](BaseEntity.md#exists)

***

### explode()

```ts
explode(): void
```

Defined in: fivem/models/Vehicle.d.ts:149

#### Returns

`void`

***

### explodeNetworked()

```ts
explodeNetworked(): void
```

Defined in: fivem/models/Vehicle.d.ts:150

#### Returns

`void`

***

### extraExists()

```ts
extraExists(extra): boolean
```

Defined in: fivem/models/Vehicle.d.ts:139

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `extra` | `number` |

#### Returns

`boolean`

***

### getEntityAttachedTo()

```ts
getEntityAttachedTo(): BaseEntity
```

Defined in: fivem/models/BaseEntity.d.ts:170

#### Returns

[`BaseEntity`](BaseEntity.md)

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`getEntityAttachedTo`](BaseEntity.md#getentityattachedto)

***

### getHandlingFloat()

```ts
getHandlingFloat(fieldName): number
```

Defined in: fivem/models/Vehicle.d.ts:168

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `fieldName` | `string` |

#### Returns

`number`

***

### getHandlingInt()

```ts
getHandlingInt(fieldName): number
```

Defined in: fivem/models/Vehicle.d.ts:170

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `fieldName` | `string` |

#### Returns

`number`

***

### getHandlingVector()

```ts
getHandlingVector(fieldName): Vector3
```

Defined in: fivem/models/Vehicle.d.ts:172

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `fieldName` | `string` |

#### Returns

`Vector3`

***

### getOffsetInRelativeCoords()

```ts
getOffsetInRelativeCoords(worldCoords): Vector3
```

Defined in: fivem/models/BaseEntity.d.ts:139

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `worldCoords` | `Vector3` |

#### Returns

`Vector3`

the offset position from the entity in world coords

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`getOffsetInRelativeCoords`](BaseEntity.md#getoffsetinrelativecoords)

***

### getOffsetInWorldCoords()

```ts
getOffsetInWorldCoords(offset): Vector3
```

Defined in: fivem/models/BaseEntity.d.ts:156

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `offset` | `Vector3` |

#### Returns

`Vector3`

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

***

### ~~getOffsetPosition()~~

```ts
getOffsetPosition(offset): Vector3
```

Defined in: fivem/models/BaseEntity.d.ts:164

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `offset` | `Vector3` |

#### Returns

`Vector3`

#### Deprecated

use [[getOffsetInWorldCoords]]

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`getOffsetPosition`](BaseEntity.md#getoffsetposition)

***

### getPedOnSeat()

```ts
getPedOnSeat(seat): Ped
```

Defined in: fivem/models/Vehicle.d.ts:142

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `seat` | [`VehicleSeat`](../enumerations/VehicleSeat.md) |

#### Returns

[`Ped`](Ped.md)

***

### ~~getPositionOffset()~~

```ts
getPositionOffset(worldCoords): Vector3
```

Defined in: fivem/models/BaseEntity.d.ts:160

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `worldCoords` | `Vector3` |

#### Returns

`Vector3`

#### Deprecated

use [[getOffsetInRelativeCoords]] instead

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`getPositionOffset`](BaseEntity.md#getpositionoffset)

***

### getSpeedVector()

```ts
getSpeedVector(isRelative?): Vector3
```

Defined in: fivem/models/BaseEntity.d.ts:40

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `isRelative`? | `boolean` |

#### Returns

`Vector3`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`getSpeedVector`](BaseEntity.md#getspeedvector)

***

### hasBeenDamagedBy()

```ts
hasBeenDamagedBy(entity): boolean
```

Defined in: fivem/models/BaseEntity.d.ts:124

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `entity` | [`BaseEntity`](BaseEntity.md) |

#### Returns

`boolean`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`hasBeenDamagedBy`](BaseEntity.md#hasbeendamagedby)

***

### hasBeenDamagedByAnyMeleeWeapon()

```ts
hasBeenDamagedByAnyMeleeWeapon(): boolean
```

Defined in: fivem/models/BaseEntity.d.ts:127

#### Returns

`boolean`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`hasBeenDamagedByAnyMeleeWeapon`](BaseEntity.md#hasbeendamagedbyanymeleeweapon)

***

### hasBeenDamagedByAnyWeapon()

```ts
hasBeenDamagedByAnyWeapon(): boolean
```

Defined in: fivem/models/BaseEntity.d.ts:126

#### Returns

`boolean`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`hasBeenDamagedByAnyWeapon`](BaseEntity.md#hasbeendamagedbyanyweapon)

***

### hasBeenDamagedByWeapon()

```ts
hasBeenDamagedByWeapon(weapon): boolean
```

Defined in: fivem/models/BaseEntity.d.ts:125

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `weapon` | [`WeaponHash`](../enumerations/WeaponHash.md) |

#### Returns

`boolean`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`hasBeenDamagedByWeapon`](BaseEntity.md#hasbeendamagedbyweapon)

***

### hasClearLosToEntity()

```ts
hasClearLosToEntity(entity, traceType?): boolean
```

Defined in: fivem/models/BaseEntity.d.ts:122

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `entity` | [`BaseEntity`](BaseEntity.md) |
| `traceType`? | `number` |

#### Returns

`boolean`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`hasClearLosToEntity`](BaseEntity.md#hasclearlostoentity)

***

### hasClearLosToEntityInFront()

```ts
hasClearLosToEntityInFront(entity): boolean
```

Defined in: fivem/models/BaseEntity.d.ts:123

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `entity` | [`BaseEntity`](BaseEntity.md) |

#### Returns

`boolean`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`hasClearLosToEntityInFront`](BaseEntity.md#hasclearlostoentityinfront)

***

### ~~isAlive()~~

```ts
isAlive(): boolean
```

Defined in: fivem/models/BaseEntity.d.ts:58

#### Returns

`boolean`

#### Deprecated

use [[IsAlive]] instead

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`isAlive`](BaseEntity.md#isalive-2)

***

### isAttached()

```ts
isAttached(): boolean
```

Defined in: fivem/models/BaseEntity.d.ts:168

#### Returns

`boolean`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`isAttached`](BaseEntity.md#isattached)

***

### isAttachedTo()

```ts
isAttachedTo(entity): boolean
```

Defined in: fivem/models/BaseEntity.d.ts:169

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `entity` | [`BaseEntity`](BaseEntity.md) |

#### Returns

`boolean`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`isAttachedTo`](BaseEntity.md#isattachedto)

***

### ~~isDead()~~

```ts
isDead(): boolean
```

Defined in: fivem/models/BaseEntity.d.ts:54

#### Returns

`boolean`

#### Deprecated

use [[IsDead]] instead

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`isDead`](BaseEntity.md#isdead-3)

***

### isExtraOn()

```ts
isExtraOn(extra): boolean
```

Defined in: fivem/models/Vehicle.d.ts:140

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `extra` | `number` |

#### Returns

`boolean`

***

### isInAngledArea()

```ts
isInAngledArea(
   origin, 
   edge, 
   angle): boolean
```

Defined in: fivem/models/BaseEntity.d.ts:130

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `origin` | `Vector3` |
| `edge` | `Vector3` |
| `angle` | `number` |

#### Returns

`boolean`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`isInAngledArea`](BaseEntity.md#isinangledarea)

***

### isInArea()

```ts
isInArea(minBounds, maxBounds): boolean
```

Defined in: fivem/models/BaseEntity.d.ts:129

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `minBounds` | `Vector3` |
| `maxBounds` | `Vector3` |

#### Returns

`boolean`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`isInArea`](BaseEntity.md#isinarea)

***

### isInRangeOf()

```ts
isInRangeOf(position, range): boolean
```

Defined in: fivem/models/BaseEntity.d.ts:131

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `position` | `Vector3` |
| `range` | `number` |

#### Returns

`boolean`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`isInRangeOf`](BaseEntity.md#isinrangeof)

***

### isNearEntity()

```ts
isNearEntity(entity, bounds): boolean
```

Defined in: fivem/models/BaseEntity.d.ts:132

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `entity` | [`BaseEntity`](BaseEntity.md) |
| `bounds` | `Vector3` |

#### Returns

`boolean`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`isNearEntity`](BaseEntity.md#isnearentity)

***

### isSeatFree()

```ts
isSeatFree(seat): boolean
```

Defined in: fivem/models/Vehicle.d.ts:143

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `seat` | [`VehicleSeat`](../enumerations/VehicleSeat.md) |

#### Returns

`boolean`

***

### isTouching()

```ts
isTouching(entity): boolean
```

Defined in: fivem/models/BaseEntity.d.ts:133

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `entity` | [`BaseEntity`](BaseEntity.md) |

#### Returns

`boolean`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`isTouching`](BaseEntity.md#istouching)

***

### isTouchingModel()

```ts
isTouchingModel(model): boolean
```

Defined in: fivem/models/BaseEntity.d.ts:134

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `model` | [`Model`](Model.md) |

#### Returns

`boolean`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`isTouchingModel`](BaseEntity.md#istouchingmodel)

***

### listenForStateChange()

```ts
listenForStateChange(keyFilter, handler): number
```

Defined in: fivem/models/BaseEntity.d.ts:36

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

***

### ~~markAsNoLongerNeeded()~~

```ts
markAsNoLongerNeeded(): void
```

Defined in: fivem/models/BaseEntity.d.ts:186

#### Returns

`void`

#### Deprecated

use [[IsMissionEntity]] setter as false instead.

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`markAsNoLongerNeeded`](BaseEntity.md#markasnolongerneeded)

***

### openBombBay()

```ts
openBombBay(): void
```

Defined in: fivem/models/Vehicle.d.ts:156

#### Returns

`void`

***

### placeOnGround()

```ts
placeOnGround(): void
```

Defined in: fivem/models/Vehicle.d.ts:147

#### Returns

`void`

***

### ~~removeAllParticleEffects()~~

```ts
removeAllParticleEffects(): void
```

Defined in: fivem/models/BaseEntity.d.ts:180

#### Returns

`void`

#### Deprecated

use [[removePtfxEffects]]

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`removeAllParticleEffects`](BaseEntity.md#removeallparticleeffects)

***

### removePtfxEffects()

```ts
removePtfxEffects(): void
```

Defined in: fivem/models/BaseEntity.d.ts:176

Removes all particle effects from the entity

#### Returns

`void`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`removePtfxEffects`](BaseEntity.md#removeptfxeffects)

***

### removeStateListener()

```ts
removeStateListener(tgtCookie): void
```

Defined in: fivem/models/BaseEntity.d.ts:37

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `tgtCookie` | `number` |

#### Returns

`void`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`removeStateListener`](BaseEntity.md#removestatelistener)

***

### repair()

```ts
repair(): void
```

Defined in: fivem/models/Vehicle.d.ts:148

#### Returns

`void`

***

### resetOpacity()

```ts
resetOpacity(): void
```

Defined in: fivem/models/BaseEntity.d.ts:112

#### Returns

`void`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`resetOpacity`](BaseEntity.md#resetopacity)

***

### setHandlingFloat()

```ts
setHandlingFloat(fieldName, value): void
```

Defined in: fivem/models/Vehicle.d.ts:169

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `fieldName` | `string` |
| `value` | `number` |

#### Returns

`void`

***

### setHandlingInt()

```ts
setHandlingInt(fieldName, value): void
```

Defined in: fivem/models/Vehicle.d.ts:171

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `fieldName` | `string` |
| `value` | `number` |

#### Returns

`void`

***

### setHeliYawPitchRollMult()

```ts
setHeliYawPitchRollMult(mult): void
```

Defined in: fivem/models/Vehicle.d.ts:158

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `mult` | `number` |

#### Returns

`void`

***

### setNoCollision()

```ts
setNoCollision(entity, toggle): void
```

Defined in: fivem/models/BaseEntity.d.ts:121

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `entity` | [`BaseEntity`](BaseEntity.md) |
| `toggle` | `boolean` |

#### Returns

`void`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`setNoCollision`](BaseEntity.md#setnocollision)

***

### soundHorn()

```ts
soundHorn(duration, mode?): void
```

Defined in: fivem/models/Vehicle.d.ts:67

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `duration` | `number` |
| `mode`? | `number` |

#### Returns

`void`

***

### startAlarm()

```ts
startAlarm(): void
```

Defined in: fivem/models/Vehicle.d.ts:63

#### Returns

`void`

***

### toggleExtra()

```ts
toggleExtra(extra, toggle): void
```

Defined in: fivem/models/Vehicle.d.ts:141

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `extra` | `number` |
| `toggle` | `boolean` |

#### Returns

`void`

***

### towVehicle()

```ts
towVehicle(vehicle, rear): void
```

Defined in: fivem/models/Vehicle.d.ts:161

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `vehicle` | [`Vehicle`](Vehicle.md) |
| `rear` | `boolean` |

#### Returns

`void`

***

### wash()

```ts
wash(): void
```

Defined in: fivem/models/Vehicle.d.ts:144

#### Returns

`void`

***

### exists()

```ts
static exists(vehicle): boolean
```

Defined in: fivem/models/Vehicle.d.ts:11

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `vehicle` | [`Vehicle`](Vehicle.md) |

#### Returns

`boolean`

***

### fromHandle()

```ts
static fromHandle(handle): null | Vehicle
```

Defined in: fivem/models/Vehicle.d.ts:12

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `handle` | `number` |

#### Returns

`null` \| [`Vehicle`](Vehicle.md)

***

### fromNetworkId()

```ts
static fromNetworkId(networkId): null | Vehicle
```

Defined in: fivem/models/Vehicle.d.ts:13

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `networkId` | `number` |

#### Returns

`null` \| [`Vehicle`](Vehicle.md)

#### Overrides

[`BaseEntity`](BaseEntity.md).[`fromNetworkId`](BaseEntity.md#fromnetworkid)

***

### fromStateBagName()

```ts
static fromStateBagName(stateBagName): null | BaseEntity
```

Defined in: fivem/models/BaseEntity.d.ts:12

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `stateBagName` | `string` |

#### Returns

`null` \| [`BaseEntity`](BaseEntity.md)

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`fromStateBagName`](BaseEntity.md#fromstatebagname)

***

### getClassDisplayName()

```ts
static getClassDisplayName(vehicleClass): string
```

Defined in: fivem/models/Vehicle.d.ts:10

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `vehicleClass` | [`VehicleClass`](../enumerations/VehicleClass.md) |

#### Returns

`string`

***

### getModelClass()

```ts
static getModelClass(vehicleModel): VehicleClass
```

Defined in: fivem/models/Vehicle.d.ts:9

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `vehicleModel` | [`Model`](Model.md) |

#### Returns

[`VehicleClass`](../enumerations/VehicleClass.md)

***

### getModelDisplayName()

```ts
static getModelDisplayName(vehicleModel): string
```

Defined in: fivem/models/Vehicle.d.ts:8

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `vehicleModel` | [`Model`](Model.md) |

#### Returns

`string`

***

### resetGhostAlpha()

```ts
static resetGhostAlpha(): void
```

Defined in: fivem/models/Vehicle.d.ts:132

#### Returns

`void`
