[@nativewrappers/fivem](../../../../README.md) / [fivem/models/Vehicle](../README.md) / Vehicle

# Class: Vehicle

Defined in: lib/fivem/models/Vehicle.d.ts:14

## Extends

- [`BaseEntity`](../../BaseEntity/classes/BaseEntity.md)

## Constructors

### Constructor

```ts
new Vehicle(handle): Vehicle;
```

Defined in: lib/fivem/models/Vehicle.d.ts:27

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
| <a id="bones"></a> `bones?` | `protected` | [`EntityBoneCollection`](../../EntityBoneCollection/classes/EntityBoneCollection.md) | [`BaseEntity`](../../BaseEntity/classes/BaseEntity.md).[`bones`](../../BaseEntity/classes/BaseEntity.md#bones) | - | lib/fivem/models/Vehicle.d.ts:26 |
| <a id="handle"></a> `handle` | `protected` | `number` | - | [`BaseEntity`](../../BaseEntity/classes/BaseEntity.md).[`handle`](../../BaseEntity/classes/BaseEntity.md#handle) | lib/fivem/models/BaseEntity.d.ts:13 |
| <a id="netid"></a> `netId` | `protected` | `null` \| `number` | - | [`BaseEntity`](../../BaseEntity/classes/BaseEntity.md).[`netId`](../../BaseEntity/classes/BaseEntity.md#netid) | lib/fivem/models/BaseEntity.d.ts:15 |
| <a id="statebagcookies"></a> `stateBagCookies` | `protected` | `number`[] | - | [`BaseEntity`](../../BaseEntity/classes/BaseEntity.md).[`stateBagCookies`](../../BaseEntity/classes/BaseEntity.md#statebagcookies) | lib/fivem/models/BaseEntity.d.ts:14 |
| <a id="type"></a> `type` | `protected` | `ClassTypes` | [`BaseEntity`](../../BaseEntity/classes/BaseEntity.md).[`type`](../../BaseEntity/classes/BaseEntity.md#type) | - | lib/fivem/models/Vehicle.d.ts:25 |

## Accessors

### Acceleration

#### Get Signature

```ts
get Acceleration(): number;
```

Defined in: lib/fivem/models/Vehicle.d.ts:57

##### Returns

`number`

***

### AlarmTimeLeft

#### Get Signature

```ts
get AlarmTimeLeft(): number;
```

Defined in: lib/fivem/models/Vehicle.d.ts:70

##### Returns

`number`

#### Set Signature

```ts
set AlarmTimeLeft(value): void;
```

Defined in: lib/fivem/models/Vehicle.d.ts:71

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
set AreBrakeLightsOn(value): void;
```

Defined in: lib/fivem/models/Vehicle.d.ts:101

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
get AreHighBeamsOn(): boolean;
```

Defined in: lib/fivem/models/Vehicle.d.ts:87

##### Returns

`boolean`

#### Set Signature

```ts
set AreHighBeamsOn(value): void;
```

Defined in: lib/fivem/models/Vehicle.d.ts:88

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
get AreLightsOn(): boolean;
```

Defined in: lib/fivem/models/Vehicle.d.ts:85

##### Returns

`boolean`

#### Set Signature

```ts
set AreLightsOn(value): void;
```

Defined in: lib/fivem/models/Vehicle.d.ts:86

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
get AttachedBlip(): null | Blip;
```

Defined in: lib/fivem/models/BaseEntity.d.ts:119

##### Returns

`null` \| [`Blip`](../../../Blip/classes/Blip.md)

#### Inherited from

[`BaseEntity`](../../BaseEntity/classes/BaseEntity.md).[`AttachedBlip`](../../BaseEntity/classes/BaseEntity.md#attachedblip)

***

### BodyHealth

#### Get Signature

```ts
get BodyHealth(): number;
```

Defined in: lib/fivem/models/Vehicle.d.ts:35

##### Returns

`number`

#### Set Signature

```ts
set BodyHealth(value): void;
```

Defined in: lib/fivem/models/Vehicle.d.ts:36

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
get Bones(): EntityBoneCollection;
```

Defined in: lib/fivem/models/Vehicle.d.ts:28

##### Returns

[`EntityBoneCollection`](../../EntityBoneCollection/classes/EntityBoneCollection.md)

#### Overrides

[`BaseEntity`](../../BaseEntity/classes/BaseEntity.md).[`Bones`](../../BaseEntity/classes/BaseEntity.md#bones-1)

***

### CanBeVisiblyDamaged

#### Set Signature

```ts
set CanBeVisiblyDamaged(value): void;
```

Defined in: lib/fivem/models/Vehicle.d.ts:103

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
set CanBreak(toggle): void;
```

Defined in: lib/fivem/models/Vehicle.d.ts:105

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
set CanDeformWheels(value): void;
```

Defined in: lib/fivem/models/Vehicle.d.ts:163

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
set CanEngineDegrade(value): void;
```

Defined in: lib/fivem/models/Vehicle.d.ts:116

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
get CanTiresBurst(): boolean;
```

Defined in: lib/fivem/models/Vehicle.d.ts:160

##### Returns

`boolean`

#### Set Signature

```ts
set CanTiresBurst(value): void;
```

Defined in: lib/fivem/models/Vehicle.d.ts:161

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
set CanWheelsBreak(value): void;
```

Defined in: lib/fivem/models/Vehicle.d.ts:162

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
get ClassDisplayName(): string;
```

Defined in: lib/fivem/models/Vehicle.d.ts:31

##### Returns

`string`

***

### ClassType

#### Get Signature

```ts
get ClassType(): VehicleClass;
```

Defined in: lib/fivem/models/Vehicle.d.ts:34

##### Returns

[`VehicleClass`](../../../enums/Vehicle/enumerations/VehicleClass.md)

***

### CurrentGear

#### Get Signature

```ts
get CurrentGear(): number;
```

Defined in: lib/fivem/models/Vehicle.d.ts:62

##### Returns

`number`

***

### CurrentRPM

#### Get Signature

```ts
get CurrentRPM(): number;
```

Defined in: lib/fivem/models/Vehicle.d.ts:58

##### Returns

`number`

#### Set Signature

```ts
set CurrentRPM(value): void;
```

Defined in: lib/fivem/models/Vehicle.d.ts:59

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
get DirtLevel(): number;
```

Defined in: lib/fivem/models/Vehicle.d.ts:154

##### Returns

`number`

#### Set Signature

```ts
set DirtLevel(value): void;
```

Defined in: lib/fivem/models/Vehicle.d.ts:155

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
get DisplayName(): string;
```

Defined in: lib/fivem/models/Vehicle.d.ts:30

##### Returns

`string`

***

### Doors

#### Get Signature

```ts
get Doors(): VehicleDoorCollection;
```

Defined in: lib/fivem/models/Vehicle.d.ts:144

##### Returns

[`VehicleDoorCollection`](../../VehicleDoorCollection/classes/VehicleDoorCollection.md)

***

### Driver

#### Get Signature

```ts
get Driver(): null | Ped;
```

Defined in: lib/fivem/models/Vehicle.d.ts:135

##### Returns

`null` \| [`Ped`](../../Ped/classes/Ped.md)

***

### DropsMoneyOnExplosion

#### Set Signature

```ts
set DropsMoneyOnExplosion(value): void;
```

Defined in: lib/fivem/models/Vehicle.d.ts:80

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
get EngineHealth(): number;
```

Defined in: lib/fivem/models/Vehicle.d.ts:37

##### Returns

`number`

#### Set Signature

```ts
set EngineHealth(value): void;
```

Defined in: lib/fivem/models/Vehicle.d.ts:38

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
set EnginePowerMultiplier(value): void;
```

Defined in: lib/fivem/models/Vehicle.d.ts:117

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
set EngineTorqueMultiplier(value): void;
```

Defined in: lib/fivem/models/Vehicle.d.ts:118

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
get EstimatedMaxSpeed(): number;
```

Defined in: lib/fivem/models/Vehicle.d.ts:56

##### Returns

`number`

***

### ForwardVector

#### Get Signature

```ts
get ForwardVector(): Vector3;
```

Defined in: lib/fivem/models/BaseEntity.d.ts:41

##### Returns

`Vector3`

#### Inherited from

[`BaseEntity`](../../BaseEntity/classes/BaseEntity.md).[`ForwardVector`](../../BaseEntity/classes/BaseEntity.md#forwardvector)

***

### FuelLevel

#### Get Signature

```ts
get FuelLevel(): number;
```

Defined in: lib/fivem/models/Vehicle.d.ts:41

##### Returns

`number`

#### Set Signature

```ts
set FuelLevel(value): void;
```

Defined in: lib/fivem/models/Vehicle.d.ts:42

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
get Ghosted(): boolean;
```

Defined in: lib/fivem/models/Vehicle.d.ts:136

##### Returns

`boolean`

#### Set Signature

```ts
set Ghosted(isGhosted): void;
```

Defined in: lib/fivem/models/Vehicle.d.ts:138

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
set GhostedForGhostPlayers(isGhostedForGhostPlayers): void;
```

Defined in: lib/fivem/models/Vehicle.d.ts:137

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
get Gravity(): number;
```

Defined in: lib/fivem/models/Vehicle.d.ts:45

##### Returns

`number`

#### Set Signature

```ts
set Gravity(value): void;
```

Defined in: lib/fivem/models/Vehicle.d.ts:46

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
get Handle(): number;
```

Defined in: lib/fivem/models/BaseEntity.d.ts:19

##### Returns

`number`

#### Inherited from

[`BaseEntity`](../../BaseEntity/classes/BaseEntity.md).[`Handle`](../../BaseEntity/classes/BaseEntity.md#handle-1)

***

### HasBombBay

#### Get Signature

```ts
get HasBombBay(): boolean;
```

Defined in: lib/fivem/models/Vehicle.d.ts:164

##### Returns

`boolean`

***

### HasCollided

#### Get Signature

```ts
get HasCollided(): boolean;
```

Defined in: lib/fivem/models/BaseEntity.d.ts:113

##### Returns

`boolean`

#### Inherited from

[`BaseEntity`](../../BaseEntity/classes/BaseEntity.md).[`HasCollided`](../../BaseEntity/classes/BaseEntity.md#hascollided)

***

### HasGravity

#### Set Signature

```ts
set HasGravity(value): void;
```

Defined in: lib/fivem/models/BaseEntity.d.ts:83

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

##### Returns

`void`

#### Inherited from

[`BaseEntity`](../../BaseEntity/classes/BaseEntity.md).[`HasGravity`](../../BaseEntity/classes/BaseEntity.md#hasgravity)

***

### HasMutedSirens

#### Set Signature

```ts
set HasMutedSirens(value): void;
```

Defined in: lib/fivem/models/Vehicle.d.ts:75

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
get HasRoof(): boolean;
```

Defined in: lib/fivem/models/Vehicle.d.ts:110

##### Returns

`boolean`

***

### Heading

#### Get Signature

```ts
get Heading(): number;
```

Defined in: lib/fivem/models/BaseEntity.d.ts:75

##### Returns

`number`

#### Set Signature

```ts
set Heading(heading): void;
```

Defined in: lib/fivem/models/BaseEntity.d.ts:76

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `heading` | `number` |

##### Returns

`void`

#### Inherited from

[`BaseEntity`](../../BaseEntity/classes/BaseEntity.md).[`Heading`](../../BaseEntity/classes/BaseEntity.md#heading)

***

### Health

#### Get Signature

```ts
get Health(): number;
```

Defined in: lib/fivem/models/BaseEntity.d.ts:44

##### Returns

`number`

#### Set Signature

```ts
set Health(amount): void;
```

Defined in: lib/fivem/models/BaseEntity.d.ts:45

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `amount` | `number` |

##### Returns

`void`

#### Inherited from

[`BaseEntity`](../../BaseEntity/classes/BaseEntity.md).[`Health`](../../BaseEntity/classes/BaseEntity.md#health)

***

### HeightAboveGround

#### Get Signature

```ts
get HeightAboveGround(): number;
```

Defined in: lib/fivem/models/BaseEntity.d.ts:84

##### Returns

`number`

#### Inherited from

[`BaseEntity`](../../BaseEntity/classes/BaseEntity.md).[`HeightAboveGround`](../../BaseEntity/classes/BaseEntity.md#heightaboveground)

***

### HighGear

#### Get Signature

```ts
get HighGear(): number;
```

Defined in: lib/fivem/models/Vehicle.d.ts:60

##### Returns

`number`

#### Set Signature

```ts
set HighGear(value): void;
```

Defined in: lib/fivem/models/Vehicle.d.ts:61

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

##### Returns

`void`

***

### Interior

#### Get Signature

```ts
get Interior(): number;
```

Defined in: lib/fivem/models/BaseEntity.d.ts:190

##### Returns

`number`

the current interior id that the entity is in, or 0 if they're outside

#### Inherited from

[`BaseEntity`](../../BaseEntity/classes/BaseEntity.md).[`Interior`](../../BaseEntity/classes/BaseEntity.md#interior)

***

### IsAlarmSet

#### Get Signature

```ts
get IsAlarmSet(): boolean;
```

Defined in: lib/fivem/models/Vehicle.d.ts:67

##### Returns

`boolean`

#### Set Signature

```ts
set IsAlarmSet(value): void;
```

Defined in: lib/fivem/models/Vehicle.d.ts:68

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
get IsAlarmSounding(): boolean;
```

Defined in: lib/fivem/models/Vehicle.d.ts:69

##### Returns

`boolean`

***

### IsAlive

#### Get Signature

```ts
get IsAlive(): boolean;
```

Defined in: lib/fivem/models/BaseEntity.d.ts:50

##### Returns

`boolean`

#### Inherited from

[`BaseEntity`](../../BaseEntity/classes/BaseEntity.md).[`IsAlive`](../../BaseEntity/classes/BaseEntity.md#isalive)

***

### IsAxlesStrong

#### Set Signature

```ts
set IsAxlesStrong(value): void;
```

Defined in: lib/fivem/models/Vehicle.d.ts:115

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
set IsBurnoutForced(value): void;
```

Defined in: lib/fivem/models/Vehicle.d.ts:133

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
get IsCollisionEnabled(): boolean;
```

Defined in: lib/fivem/models/BaseEntity.d.ts:115

##### Returns

`boolean`

#### Set Signature

```ts
set IsCollisionEnabled(value): void;
```

Defined in: lib/fivem/models/BaseEntity.d.ts:116

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

##### Returns

`void`

#### Inherited from

[`BaseEntity`](../../BaseEntity/classes/BaseEntity.md).[`IsCollisionEnabled`](../../BaseEntity/classes/BaseEntity.md#iscollisionenabled)

***

### IsConvertible

#### Get Signature

```ts
get IsConvertible(): boolean;
```

Defined in: lib/fivem/models/Vehicle.d.ts:132

##### Returns

`boolean`

***

### IsDamaged

#### Get Signature

```ts
get IsDamaged(): boolean;
```

Defined in: lib/fivem/models/Vehicle.d.ts:106

##### Returns

`boolean`

***

### IsDead

#### Get Signature

```ts
get IsDead(): boolean;
```

Defined in: lib/fivem/models/BaseEntity.d.ts:49

##### Returns

`boolean`

#### Set Signature

```ts
set IsDead(value): void;
```

Defined in: lib/fivem/models/BaseEntity.d.ts:48

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

##### Returns

`void`

#### Inherited from

[`BaseEntity`](../../BaseEntity/classes/BaseEntity.md).[`IsDead`](../../BaseEntity/classes/BaseEntity.md#isdead)

***

### IsDriveable

#### Get Signature

```ts
get IsDriveable(): boolean;
```

Defined in: lib/fivem/models/Vehicle.d.ts:107

##### Returns

`boolean`

#### Set Signature

```ts
set IsDriveable(value): void;
```

Defined in: lib/fivem/models/Vehicle.d.ts:108

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
get IsEngineOnFire(): boolean;
```

Defined in: lib/fivem/models/Vehicle.d.ts:109

##### Returns

`boolean`

***

### IsEngineRunning

#### Get Signature

```ts
get IsEngineRunning(): boolean;
```

Defined in: lib/fivem/models/Vehicle.d.ts:47

##### Returns

`boolean`

#### Set Signature

```ts
set IsEngineRunning(value): void;
```

Defined in: lib/fivem/models/Vehicle.d.ts:48

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
get IsEngineStarting(): boolean;
```

Defined in: lib/fivem/models/Vehicle.d.ts:49

##### Returns

`boolean`

#### Set Signature

```ts
set IsEngineStarting(value): void;
```

Defined in: lib/fivem/models/Vehicle.d.ts:50

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
get IsFrontBumperBrokenOff(): boolean;
```

Defined in: lib/fivem/models/Vehicle.d.ts:114

##### Returns

`boolean`

***

### IsHandbrakeForcedOn

#### Get Signature

```ts
get IsHandbrakeForcedOn(): boolean;
```

Defined in: lib/fivem/models/Vehicle.d.ts:99

##### Returns

`boolean`

#### Set Signature

```ts
set IsHandbrakeForcedOn(value): void;
```

Defined in: lib/fivem/models/Vehicle.d.ts:100

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
get IsInAir(): boolean;
```

Defined in: lib/fivem/models/BaseEntity.d.ts:94

##### Returns

`boolean`

#### Inherited from

[`BaseEntity`](../../BaseEntity/classes/BaseEntity.md).[`IsInAir`](../../BaseEntity/classes/BaseEntity.md#isinair)

***

### IsInBurnout

#### Get Signature

```ts
get IsInBurnout(): boolean;
```

Defined in: lib/fivem/models/Vehicle.d.ts:134

##### Returns

`boolean`

***

### IsInGhostCollision

#### Get Signature

```ts
get IsInGhostCollision(): boolean;
```

Defined in: lib/fivem/models/Vehicle.d.ts:140

##### Returns

`boolean`

***

### IsInteriorLightOn

#### Get Signature

```ts
get IsInteriorLightOn(): boolean;
```

Defined in: lib/fivem/models/Vehicle.d.ts:89

##### Returns

`boolean`

#### Set Signature

```ts
set IsInteriorLightOn(value): void;
```

Defined in: lib/fivem/models/Vehicle.d.ts:90

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
set IsInvincible(value): void;
```

Defined in: lib/fivem/models/BaseEntity.d.ts:105

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

##### Returns

`void`

#### Inherited from

[`BaseEntity`](../../BaseEntity/classes/BaseEntity.md).[`IsInvincible`](../../BaseEntity/classes/BaseEntity.md#isinvincible)

***

### IsInWater

#### Get Signature

```ts
get IsInWater(): boolean;
```

Defined in: lib/fivem/models/BaseEntity.d.ts:95

##### Returns

`boolean`

#### Inherited from

[`BaseEntity`](../../BaseEntity/classes/BaseEntity.md).[`IsInWater`](../../BaseEntity/classes/BaseEntity.md#isinwater)

***

### IsLeftHeadLightBroken

#### Get Signature

```ts
get IsLeftHeadLightBroken(): boolean;
```

Defined in: lib/fivem/models/Vehicle.d.ts:111

##### Returns

`boolean`

***

### IsLeftIndicatorLightOn

#### Get Signature

```ts
get IsLeftIndicatorLightOn(): boolean;
```

Defined in: lib/fivem/models/Vehicle.d.ts:95

##### Returns

`boolean`

#### Set Signature

```ts
set IsLeftIndicatorLightOn(value): void;
```

Defined in: lib/fivem/models/Vehicle.d.ts:96

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
get IsMissionEntity(): boolean;
```

Defined in: lib/fivem/models/BaseEntity.d.ts:63

Returns if the entity is set as a mission entity and will not be cleaned up by the engine

##### Returns

`boolean`

#### Set Signature

```ts
set IsMissionEntity(value): void;
```

Defined in: lib/fivem/models/BaseEntity.d.ts:67

Sets if the entity is a mission entity and will not be cleaned up by the engine

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

##### Returns

`void`

#### Inherited from

[`BaseEntity`](../../BaseEntity/classes/BaseEntity.md).[`IsMissionEntity`](../../BaseEntity/classes/BaseEntity.md#ismissionentity)

***

### IsNetworkConcealed

#### Get Signature

```ts
get IsNetworkConcealed(): boolean;
```

Defined in: lib/fivem/models/BaseEntity.d.ts:26

##### Returns

`boolean`

#### Set Signature

```ts
set IsNetworkConcealed(concealed): void;
```

Defined in: lib/fivem/models/BaseEntity.d.ts:27

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `concealed` | `boolean` |

##### Returns

`void`

#### Inherited from

[`BaseEntity`](../../BaseEntity/classes/BaseEntity.md).[`IsNetworkConcealed`](../../BaseEntity/classes/BaseEntity.md#isnetworkconcealed)

***

### IsNetworked

#### Get Signature

```ts
get IsNetworked(): boolean;
```

Defined in: lib/fivem/models/BaseEntity.d.ts:23

##### Returns

`boolean`

if the entity is a networked entity or local entity

#### Set Signature

```ts
set IsNetworked(networked): void;
```

Defined in: lib/fivem/models/BaseEntity.d.ts:24

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `networked` | `boolean` |

##### Returns

`void`

#### Inherited from

[`BaseEntity`](../../BaseEntity/classes/BaseEntity.md).[`IsNetworked`](../../BaseEntity/classes/BaseEntity.md#isnetworked)

***

### IsOccluded

#### Get Signature

```ts
get IsOccluded(): boolean;
```

Defined in: lib/fivem/models/BaseEntity.d.ts:90

##### Returns

`boolean`

#### Inherited from

[`BaseEntity`](../../BaseEntity/classes/BaseEntity.md).[`IsOccluded`](../../BaseEntity/classes/BaseEntity.md#isoccluded)

***

### IsOnAllWheels

#### Get Signature

```ts
get IsOnAllWheels(): boolean;
```

Defined in: lib/fivem/models/Vehicle.d.ts:127

##### Returns

`boolean`

***

### IsOnFire

#### Get Signature

```ts
get IsOnFire(): boolean;
```

Defined in: lib/fivem/models/BaseEntity.d.ts:104

##### Returns

`boolean`

#### Inherited from

[`BaseEntity`](../../BaseEntity/classes/BaseEntity.md).[`IsOnFire`](../../BaseEntity/classes/BaseEntity.md#isonfire)

***

### IsOnlyDamagedByPlayer

#### Set Signature

```ts
set IsOnlyDamagedByPlayer(value): void;
```

Defined in: lib/fivem/models/BaseEntity.d.ts:106

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

##### Returns

`void`

#### Inherited from

[`BaseEntity`](../../BaseEntity/classes/BaseEntity.md).[`IsOnlyDamagedByPlayer`](../../BaseEntity/classes/BaseEntity.md#isonlydamagedbyplayer)

***

### IsOnScreen

#### Get Signature

```ts
get IsOnScreen(): boolean;
```

Defined in: lib/fivem/models/BaseEntity.d.ts:91

##### Returns

`boolean`

#### Inherited from

[`BaseEntity`](../../BaseEntity/classes/BaseEntity.md).[`IsOnScreen`](../../BaseEntity/classes/BaseEntity.md#isonscreen)

***

### IsPersistent

#### Get Signature

```ts
get IsPersistent(): boolean;
```

Defined in: lib/fivem/models/BaseEntity.d.ts:99

##### Deprecated

use [[IsMissionEntity]] instead as its more obvious as what it does

##### Returns

`boolean`

#### Set Signature

```ts
set IsPersistent(value): void;
```

Defined in: lib/fivem/models/BaseEntity.d.ts:103

##### Deprecated

use [[IsMissionEntity]] instead as its more obvious as what it does

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

##### Returns

`void`

#### Inherited from

[`BaseEntity`](../../BaseEntity/classes/BaseEntity.md).[`IsPersistent`](../../BaseEntity/classes/BaseEntity.md#ispersistent)

***

### IsPositionFrozen

#### Get Signature

```ts
get IsPositionFrozen(): boolean;
```

Defined in: lib/fivem/models/BaseEntity.d.ts:77

##### Returns

`boolean`

#### Set Signature

```ts
set IsPositionFrozen(value): void;
```

Defined in: lib/fivem/models/BaseEntity.d.ts:78

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

##### Returns

`void`

#### Inherited from

[`BaseEntity`](../../BaseEntity/classes/BaseEntity.md).[`IsPositionFrozen`](../../BaseEntity/classes/BaseEntity.md#ispositionfrozen)

***

### IsRadioEnabled

#### Get Signature

```ts
get IsRadioEnabled(): boolean;
```

Defined in: lib/fivem/models/Vehicle.d.ts:51

##### Returns

`boolean`

#### Set Signature

```ts
set IsRadioEnabled(value): void;
```

Defined in: lib/fivem/models/Vehicle.d.ts:52

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
get IsRearBumperBrokenOff(): boolean;
```

Defined in: lib/fivem/models/Vehicle.d.ts:113

##### Returns

`boolean`

***

### IsRecordingCollisions

#### Set Signature

```ts
set IsRecordingCollisions(value): void;
```

Defined in: lib/fivem/models/BaseEntity.d.ts:117

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

##### Returns

`void`

#### Inherited from

[`BaseEntity`](../../BaseEntity/classes/BaseEntity.md).[`IsRecordingCollisions`](../../BaseEntity/classes/BaseEntity.md#isrecordingcollisions)

***

### IsRightHeadLightBroken

#### Get Signature

```ts
get IsRightHeadLightBroken(): boolean;
```

Defined in: lib/fivem/models/Vehicle.d.ts:112

##### Returns

`boolean`

***

### IsRightIndicatorLightOn

#### Get Signature

```ts
get IsRightIndicatorLightOn(): boolean;
```

Defined in: lib/fivem/models/Vehicle.d.ts:97

##### Returns

`boolean`

#### Set Signature

```ts
set IsRightIndicatorLightOn(value): void;
```

Defined in: lib/fivem/models/Vehicle.d.ts:98

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
get IsSearchLightOn(): boolean;
```

Defined in: lib/fivem/models/Vehicle.d.ts:91

##### Returns

`boolean`

#### Set Signature

```ts
set IsSearchLightOn(value): void;
```

Defined in: lib/fivem/models/Vehicle.d.ts:92

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
get IsSirenActive(): boolean;
```

Defined in: lib/fivem/models/Vehicle.d.ts:73

##### Returns

`boolean`

#### Set Signature

```ts
set IsSirenActive(value): void;
```

Defined in: lib/fivem/models/Vehicle.d.ts:74

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
get IsStolen(): boolean;
```

Defined in: lib/fivem/models/Vehicle.d.ts:130

##### Returns

`boolean`

#### Set Signature

```ts
set IsStolen(value): void;
```

Defined in: lib/fivem/models/Vehicle.d.ts:131

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
get IsStopped(): boolean;
```

Defined in: lib/fivem/models/Vehicle.d.ts:128

##### Returns

`boolean`

***

### IsStoppedAtTrafficLights

#### Get Signature

```ts
get IsStoppedAtTrafficLights(): boolean;
```

Defined in: lib/fivem/models/Vehicle.d.ts:129

##### Returns

`boolean`

***

### IsTaxiLightOn

#### Get Signature

```ts
get IsTaxiLightOn(): boolean;
```

Defined in: lib/fivem/models/Vehicle.d.ts:93

##### Returns

`boolean`

#### Set Signature

```ts
set IsTaxiLightOn(value): void;
```

Defined in: lib/fivem/models/Vehicle.d.ts:94

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
get IsUpright(): boolean;
```

Defined in: lib/fivem/models/BaseEntity.d.ts:92

##### Returns

`boolean`

#### Inherited from

[`BaseEntity`](../../BaseEntity/classes/BaseEntity.md).[`IsUpright`](../../BaseEntity/classes/BaseEntity.md#isupright)

***

### IsUpsideDown

#### Get Signature

```ts
get IsUpsideDown(): boolean;
```

Defined in: lib/fivem/models/BaseEntity.d.ts:93

##### Returns

`boolean`

#### Inherited from

[`BaseEntity`](../../BaseEntity/classes/BaseEntity.md).[`IsUpsideDown`](../../BaseEntity/classes/BaseEntity.md#isupsidedown)

***

### IsVisible

#### Get Signature

```ts
get IsVisible(): boolean;
```

Defined in: lib/fivem/models/BaseEntity.d.ts:88

##### Returns

`boolean`

#### Set Signature

```ts
set IsVisible(value): void;
```

Defined in: lib/fivem/models/BaseEntity.d.ts:89

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

##### Returns

`void`

#### Inherited from

[`BaseEntity`](../../BaseEntity/classes/BaseEntity.md).[`IsVisible`](../../BaseEntity/classes/BaseEntity.md#isvisible)

***

### IsWanted

#### Get Signature

```ts
get IsWanted(): boolean;
```

Defined in: lib/fivem/models/Vehicle.d.ts:77

##### Returns

`boolean`

#### Set Signature

```ts
set IsWanted(value): void;
```

Defined in: lib/fivem/models/Vehicle.d.ts:78

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
get LandingGearState(): VehicleLandingGearState;
```

Defined in: lib/fivem/models/Vehicle.d.ts:119

##### Returns

[`VehicleLandingGearState`](../../../enums/Vehicle/enumerations/VehicleLandingGearState.md)

#### Set Signature

```ts
set LandingGearState(value): void;
```

Defined in: lib/fivem/models/Vehicle.d.ts:120

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | [`VehicleLandingGearState`](../../../enums/Vehicle/enumerations/VehicleLandingGearState.md) |

##### Returns

`void`

***

### LightsMultiplier

#### Set Signature

```ts
set LightsMultiplier(value): void;
```

Defined in: lib/fivem/models/Vehicle.d.ts:102

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
get LockStatus(): VehicleLockStatus;
```

Defined in: lib/fivem/models/Vehicle.d.ts:123

##### Returns

[`VehicleLockStatus`](../../../enums/Vehicle/enumerations/VehicleLockStatus.md)

#### Set Signature

```ts
set LockStatus(value): void;
```

Defined in: lib/fivem/models/Vehicle.d.ts:124

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | [`VehicleLockStatus`](../../../enums/Vehicle/enumerations/VehicleLockStatus.md) |

##### Returns

`void`

***

### LodDistance

#### Get Signature

```ts
get LodDistance(): number;
```

Defined in: lib/fivem/models/BaseEntity.d.ts:86

##### Returns

`number`

#### Set Signature

```ts
set LodDistance(value): void;
```

Defined in: lib/fivem/models/BaseEntity.d.ts:87

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

##### Returns

`void`

#### Inherited from

[`BaseEntity`](../../BaseEntity/classes/BaseEntity.md).[`LodDistance`](../../BaseEntity/classes/BaseEntity.md#loddistance)

***

### MaterialCollidingWith

#### Get Signature

```ts
get MaterialCollidingWith(): MaterialHash;
```

Defined in: lib/fivem/models/BaseEntity.d.ts:114

##### Returns

[`MaterialHash`](../../../hashes/MaterialHash/enumerations/MaterialHash.md)

#### Inherited from

[`BaseEntity`](../../BaseEntity/classes/BaseEntity.md).[`MaterialCollidingWith`](../../BaseEntity/classes/BaseEntity.md#materialcollidingwith)

***

### Matrix

#### Get Signature

```ts
get Matrix(): Vector3[];
```

Defined in: lib/fivem/models/BaseEntity.d.ts:42

##### Returns

`Vector3`[]

#### Set Signature

```ts
set Matrix(vectors): void;
```

Defined in: lib/fivem/models/BaseEntity.d.ts:43

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `vectors` | `Vector3`[] |

##### Returns

`void`

#### Inherited from

[`BaseEntity`](../../BaseEntity/classes/BaseEntity.md).[`Matrix`](../../BaseEntity/classes/BaseEntity.md#matrix)

***

### MaxBraking

#### Get Signature

```ts
get MaxBraking(): number;
```

Defined in: lib/fivem/models/Vehicle.d.ts:125

##### Returns

`number`

***

### MaxHealth

#### Get Signature

```ts
get MaxHealth(): number;
```

Defined in: lib/fivem/models/BaseEntity.d.ts:46

##### Returns

`number`

#### Set Signature

```ts
set MaxHealth(amount): void;
```

Defined in: lib/fivem/models/BaseEntity.d.ts:47

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `amount` | `number` |

##### Returns

`void`

#### Inherited from

[`BaseEntity`](../../BaseEntity/classes/BaseEntity.md).[`MaxHealth`](../../BaseEntity/classes/BaseEntity.md#maxhealth)

***

### MaxSpeed

#### Set Signature

```ts
set MaxSpeed(value): void;
```

Defined in: lib/fivem/models/BaseEntity.d.ts:82

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

##### Returns

`void`

#### Inherited from

[`BaseEntity`](../../BaseEntity/classes/BaseEntity.md).[`MaxSpeed`](../../BaseEntity/classes/BaseEntity.md#maxspeed)

***

### MaxTraction

#### Get Signature

```ts
get MaxTraction(): number;
```

Defined in: lib/fivem/models/Vehicle.d.ts:126

##### Returns

`number`

***

### Model

#### Get Signature

```ts
get Model(): Model;
```

Defined in: lib/fivem/models/BaseEntity.d.ts:59

##### Returns

[`Model`](../../../Model/classes/Model.md)

#### Inherited from

[`BaseEntity`](../../BaseEntity/classes/BaseEntity.md).[`Model`](../../BaseEntity/classes/BaseEntity.md#model)

***

### Mods

#### Get Signature

```ts
get Mods(): VehicleModCollection;
```

Defined in: lib/fivem/models/Vehicle.d.ts:145

##### Returns

[`VehicleModCollection`](../../VehicleModCollection/classes/VehicleModCollection.md)

***

### NeedsToBeHotwired

#### Get Signature

```ts
get NeedsToBeHotwired(): boolean;
```

Defined in: lib/fivem/models/Vehicle.d.ts:83

##### Returns

`boolean`

#### Set Signature

```ts
set NeedsToBeHotwired(value): void;
```

Defined in: lib/fivem/models/Vehicle.d.ts:84

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
get NetworkId(): number;
```

Defined in: lib/fivem/models/BaseEntity.d.ts:25

##### Returns

`number`

#### Inherited from

[`BaseEntity`](../../BaseEntity/classes/BaseEntity.md).[`NetworkId`](../../BaseEntity/classes/BaseEntity.md#networkid)

***

### NumberPlate

#### Get Signature

```ts
get NumberPlate(): string;
```

Defined in: lib/fivem/models/Vehicle.d.ts:32

##### Returns

`string`

#### Set Signature

```ts
set NumberPlate(value): void;
```

Defined in: lib/fivem/models/Vehicle.d.ts:33

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
get Occupants(): (null | Ped)[];
```

Defined in: lib/fivem/models/Vehicle.d.ts:142

##### Returns

(`null` \| [`Ped`](../../Ped/classes/Ped.md))[]

***

### OilLevel

#### Get Signature

```ts
get OilLevel(): number;
```

Defined in: lib/fivem/models/Vehicle.d.ts:43

##### Returns

`number`

#### Set Signature

```ts
set OilLevel(value): void;
```

Defined in: lib/fivem/models/Vehicle.d.ts:44

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
get Opacity(): number;
```

Defined in: lib/fivem/models/BaseEntity.d.ts:107

##### Returns

`number`

#### Set Signature

```ts
set Opacity(value): void;
```

Defined in: lib/fivem/models/BaseEntity.d.ts:111

Sets how transparent an entity is, if you want to reset the alpha level use [[resetOpacity]] instead;

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

##### Returns

`void`

#### Inherited from

[`BaseEntity`](../../BaseEntity/classes/BaseEntity.md).[`Opacity`](../../BaseEntity/classes/BaseEntity.md#opacity)

***

### Owner

#### Get Signature

```ts
get Owner(): number;
```

Defined in: lib/fivem/models/BaseEntity.d.ts:38

##### Returns

`number`

#### Inherited from

[`BaseEntity`](../../BaseEntity/classes/BaseEntity.md).[`Owner`](../../BaseEntity/classes/BaseEntity.md#owner)

***

### PassengerCapacity

#### Get Signature

```ts
get PassengerCapacity(): number;
```

Defined in: lib/fivem/models/Vehicle.d.ts:174

##### Returns

`number`

***

### PassengerCount

#### Get Signature

```ts
get PassengerCount(): number;
```

Defined in: lib/fivem/models/Vehicle.d.ts:175

##### Returns

`number`

***

### Passengers

#### Get Signature

```ts
get Passengers(): (null | Ped)[];
```

Defined in: lib/fivem/models/Vehicle.d.ts:143

##### Returns

(`null` \| [`Ped`](../../Ped/classes/Ped.md))[]

***

### PetrolTankHealth

#### Get Signature

```ts
get PetrolTankHealth(): number;
```

Defined in: lib/fivem/models/Vehicle.d.ts:39

##### Returns

`number`

#### Set Signature

```ts
set PetrolTankHealth(value): void;
```

Defined in: lib/fivem/models/Vehicle.d.ts:40

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
get Position(): Vector3;
```

Defined in: lib/fivem/models/BaseEntity.d.ts:68

##### Returns

`Vector3`

#### Set Signature

```ts
set Position(position): void;
```

Defined in: lib/fivem/models/BaseEntity.d.ts:69

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `position` | `Vector3` |

##### Returns

`void`

#### Inherited from

[`BaseEntity`](../../BaseEntity/classes/BaseEntity.md).[`Position`](../../BaseEntity/classes/BaseEntity.md#position)

***

### PositionNoOffset

#### Set Signature

```ts
set PositionNoOffset(position): void;
```

Defined in: lib/fivem/models/BaseEntity.d.ts:70

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `position` | `Vector3` |

##### Returns

`void`

#### Inherited from

[`BaseEntity`](../../BaseEntity/classes/BaseEntity.md).[`PositionNoOffset`](../../BaseEntity/classes/BaseEntity.md#positionnooffset)

***

### PreviouslyOwnedByPlayer

#### Get Signature

```ts
get PreviouslyOwnedByPlayer(): boolean;
```

Defined in: lib/fivem/models/Vehicle.d.ts:81

##### Returns

`boolean`

#### Set Signature

```ts
set PreviouslyOwnedByPlayer(value): void;
```

Defined in: lib/fivem/models/Vehicle.d.ts:82

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
set ProvidesCover(value): void;
```

Defined in: lib/fivem/models/Vehicle.d.ts:79

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
get Quaternion(): Quaternion;
```

Defined in: lib/fivem/models/BaseEntity.d.ts:73

##### Returns

`Quaternion`

#### Set Signature

```ts
set Quaternion(quaternion): void;
```

Defined in: lib/fivem/models/BaseEntity.d.ts:74

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `quaternion` | `Quaternion` |

##### Returns

`void`

#### Inherited from

[`BaseEntity`](../../BaseEntity/classes/BaseEntity.md).[`Quaternion`](../../BaseEntity/classes/BaseEntity.md#quaternion)

***

### RadioStation

#### Set Signature

```ts
set RadioStation(value): void;
```

Defined in: lib/fivem/models/Vehicle.d.ts:53

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | [`RadioStation`](../../../enums/RadioStation/enumerations/RadioStation.md) |

##### Returns

`void`

***

### RespotTimer

#### Set Signature

```ts
set RespotTimer(time): void;
```

Defined in: lib/fivem/models/Vehicle.d.ts:176

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
get RoofState(): VehicleRoofState;
```

Defined in: lib/fivem/models/Vehicle.d.ts:121

##### Returns

[`VehicleRoofState`](../../../enums/Vehicle/enumerations/VehicleRoofState.md)

#### Set Signature

```ts
set RoofState(value): void;
```

Defined in: lib/fivem/models/Vehicle.d.ts:122

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | [`VehicleRoofState`](../../../enums/Vehicle/enumerations/VehicleRoofState.md) |

##### Returns

`void`

***

### RoomKey

#### Get Signature

```ts
get RoomKey(): number;
```

Defined in: lib/fivem/models/BaseEntity.d.ts:194

##### Returns

`number`

the room key hash that the entity is in, or 0 if they're outside

#### Inherited from

[`BaseEntity`](../../BaseEntity/classes/BaseEntity.md).[`RoomKey`](../../BaseEntity/classes/BaseEntity.md#roomkey)

***

### Rotation

#### Get Signature

```ts
get Rotation(): Vector3;
```

Defined in: lib/fivem/models/BaseEntity.d.ts:71

##### Returns

`Vector3`

#### Set Signature

```ts
set Rotation(rotation): void;
```

Defined in: lib/fivem/models/BaseEntity.d.ts:72

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `rotation` | `Vector3` |

##### Returns

`void`

#### Inherited from

[`BaseEntity`](../../BaseEntity/classes/BaseEntity.md).[`Rotation`](../../BaseEntity/classes/BaseEntity.md#rotation)

***

### RotationVelocity

#### Get Signature

```ts
get RotationVelocity(): Vector3;
```

Defined in: lib/fivem/models/BaseEntity.d.ts:81

##### Returns

`Vector3`

#### Inherited from

[`BaseEntity`](../../BaseEntity/classes/BaseEntity.md).[`RotationVelocity`](../../BaseEntity/classes/BaseEntity.md#rotationvelocity)

***

### Speed

#### Set Signature

```ts
set Speed(value): void;
```

Defined in: lib/fivem/models/Vehicle.d.ts:54

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

##### Returns

`void`

#### Overrides

[`BaseEntity`](../../BaseEntity/classes/BaseEntity.md).[`Speed`](../../BaseEntity/classes/BaseEntity.md#speed)

***

### State

#### Get Signature

```ts
get State(): StateBagInterface;
```

Defined in: lib/fivem/models/BaseEntity.d.ts:28

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

Defined in: lib/fivem/models/Vehicle.d.ts:63

##### Returns

`number`

#### Set Signature

```ts
set SteeringAngle(value): void;
```

Defined in: lib/fivem/models/Vehicle.d.ts:64

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
get SteeringScale(): number;
```

Defined in: lib/fivem/models/Vehicle.d.ts:65

##### Returns

`number`

#### Set Signature

```ts
set SteeringScale(value): void;
```

Defined in: lib/fivem/models/Vehicle.d.ts:66

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
set Strong(toggle): void;
```

Defined in: lib/fivem/models/Vehicle.d.ts:104

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
get SubmersionLevel(): number;
```

Defined in: lib/fivem/models/BaseEntity.d.ts:85

##### Returns

`number`

#### Inherited from

[`BaseEntity`](../../BaseEntity/classes/BaseEntity.md).[`SubmersionLevel`](../../BaseEntity/classes/BaseEntity.md#submersionlevel)

***

### TowedVehicle

#### Get Signature

```ts
get TowedVehicle(): Vehicle;
```

Defined in: lib/fivem/models/Vehicle.d.ts:169

##### Returns

`Vehicle`

***

### TowingCraneRaisedAmount

#### Set Signature

```ts
set TowingCraneRaisedAmount(value): void;
```

Defined in: lib/fivem/models/Vehicle.d.ts:168

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
get Velocity(): Vector3;
```

Defined in: lib/fivem/models/BaseEntity.d.ts:79

##### Returns

`Vector3`

#### Set Signature

```ts
set Velocity(velocity): void;
```

Defined in: lib/fivem/models/BaseEntity.d.ts:80

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `velocity` | `Vector3` |

##### Returns

`void`

#### Inherited from

[`BaseEntity`](../../BaseEntity/classes/BaseEntity.md).[`Velocity`](../../BaseEntity/classes/BaseEntity.md#velocity)

***

### Wheels

#### Get Signature

```ts
get Wheels(): VehicleWheelCollection;
```

Defined in: lib/fivem/models/Vehicle.d.ts:146

##### Returns

[`VehicleWheelCollection`](../../VehicleWheelCollection/classes/VehicleWheelCollection.md)

***

### WheelSpeed

#### Get Signature

```ts
get WheelSpeed(): number;
```

Defined in: lib/fivem/models/Vehicle.d.ts:55

##### Returns

`number`

***

### Windows

#### Get Signature

```ts
get Windows(): VehicleWindowCollection;
```

Defined in: lib/fivem/models/Vehicle.d.ts:147

##### Returns

[`VehicleWindowCollection`](../../VehicleWindowCollection/classes/VehicleWindowCollection.md)

***

### GhostAlpha

#### Set Signature

```ts
set static GhostAlpha(alpha): void;
```

Defined in: lib/fivem/models/Vehicle.d.ts:139

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `alpha` | `number` |

##### Returns

`void`

## Methods

### AddStateBagChangeHandler()

```ts
AddStateBagChangeHandler(keyFilter, handler): number;
```

Defined in: lib/fivem/models/BaseEntity.d.ts:29

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `keyFilter` | `null` \| `string` |
| `handler` | [`StateBagChangeHandler`](../../../cfx/StateBagChangeHandler/type-aliases/StateBagChangeHandler.md) |

#### Returns

`number`

#### Inherited from

[`BaseEntity`](../../BaseEntity/classes/BaseEntity.md).[`AddStateBagChangeHandler`](../../BaseEntity/classes/BaseEntity.md#addstatebagchangehandler)

***

### applyForce()

```ts
applyForce(
   direction, 
   rotation, 
   forceType?): void;
```

Defined in: lib/fivem/models/BaseEntity.d.ts:171

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `direction` | `Vector3` |
| `rotation` | `Vector3` |
| `forceType?` | [`ForceType`](../../../enums/ForceType/enumerations/ForceType.md) |

#### Returns

`void`

#### Inherited from

[`BaseEntity`](../../BaseEntity/classes/BaseEntity.md).[`applyForce`](../../BaseEntity/classes/BaseEntity.md#applyforce)

***

### applyForceRelative()

```ts
applyForceRelative(
   direction, 
   rotation, 
   forceType?): void;
```

Defined in: lib/fivem/models/BaseEntity.d.ts:172

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `direction` | `Vector3` |
| `rotation` | `Vector3` |
| `forceType?` | [`ForceType`](../../../enums/ForceType/enumerations/ForceType.md) |

#### Returns

`void`

#### Inherited from

[`BaseEntity`](../../BaseEntity/classes/BaseEntity.md).[`applyForceRelative`](../../BaseEntity/classes/BaseEntity.md#applyforcerelative)

***

### attachBlip()

```ts
attachBlip(): Blip;
```

Defined in: lib/fivem/models/BaseEntity.d.ts:120

#### Returns

[`Blip`](../../../Blip/classes/Blip.md)

#### Inherited from

[`BaseEntity`](../../BaseEntity/classes/BaseEntity.md).[`attachBlip`](../../BaseEntity/classes/BaseEntity.md#attachblip)

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
   rotationOrder?): void;
```

Defined in: lib/fivem/models/BaseEntity.d.ts:165

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `entity` | [`BaseEntity`](../../BaseEntity/classes/BaseEntity.md) |
| `position` | `Vector3` |
| `rotation` | `Vector3` |
| `collisions?` | `boolean` |
| `unk9?` | `boolean` |
| `useSoftPinning?` | `boolean` |
| `rotationOrder?` | `number` |

#### Returns

`void`

#### Inherited from

[`BaseEntity`](../../BaseEntity/classes/BaseEntity.md).[`attachTo`](../../BaseEntity/classes/BaseEntity.md#attachto)

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
   rotationOrder?): void;
```

Defined in: lib/fivem/models/BaseEntity.d.ts:166

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `entityBone` | [`BaseEntityBone`](../../BaseEntityBone/classes/BaseEntityBone.md) |
| `position` | `Vector3` |
| `rotation` | `Vector3` |
| `collisions?` | `boolean` |
| `unk9?` | `boolean` |
| `useSoftPinning?` | `boolean` |
| `rotationOrder?` | `number` |

#### Returns

`void`

#### Inherited from

[`BaseEntity`](../../BaseEntity/classes/BaseEntity.md).[`attachToBone`](../../BaseEntity/classes/BaseEntity.md#attachtobone)

***

### clearInterior()

```ts
clearInterior(): void;
```

Defined in: lib/fivem/models/BaseEntity.d.ts:195

#### Returns

`void`

#### Inherited from

[`BaseEntity`](../../BaseEntity/classes/BaseEntity.md).[`clearInterior`](../../BaseEntity/classes/BaseEntity.md#clearinterior)

***

### clearLastWeaponDamage()

```ts
clearLastWeaponDamage(): void;
```

Defined in: lib/fivem/models/BaseEntity.d.ts:128

#### Returns

`void`

#### Inherited from

[`BaseEntity`](../../BaseEntity/classes/BaseEntity.md).[`clearLastWeaponDamage`](../../BaseEntity/classes/BaseEntity.md#clearlastweapondamage)

***

### closeBombBay()

```ts
closeBombBay(): void;
```

Defined in: lib/fivem/models/Vehicle.d.ts:166

#### Returns

`void`

***

### deform()

```ts
deform(
   position, 
   damageAmount, 
   radius): void;
```

Defined in: lib/fivem/models/Vehicle.d.ts:173

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
delete(): void;
```

Defined in: lib/fivem/models/BaseEntity.d.ts:182

#### Returns

`void`

#### Inherited from

[`BaseEntity`](../../BaseEntity/classes/BaseEntity.md).[`delete`](../../BaseEntity/classes/BaseEntity.md#delete)

***

### detach()

```ts
detach(): void;
```

Defined in: lib/fivem/models/BaseEntity.d.ts:167

#### Returns

`void`

#### Inherited from

[`BaseEntity`](../../BaseEntity/classes/BaseEntity.md).[`detach`](../../BaseEntity/classes/BaseEntity.md#detach)

***

### detachFromTowTruck()

```ts
detachFromTowTruck(): void;
```

Defined in: lib/fivem/models/Vehicle.d.ts:171

#### Returns

`void`

***

### detachTowedVehicle()

```ts
detachTowedVehicle(): void;
```

Defined in: lib/fivem/models/Vehicle.d.ts:172

#### Returns

`void`

***

### exists()

```ts
exists(): boolean;
```

Defined in: lib/fivem/models/Vehicle.d.ts:29

#### Returns

`boolean`

#### Overrides

[`BaseEntity`](../../BaseEntity/classes/BaseEntity.md).[`exists`](../../BaseEntity/classes/BaseEntity.md#exists)

***

### explode()

```ts
explode(): void;
```

Defined in: lib/fivem/models/Vehicle.d.ts:158

#### Returns

`void`

***

### explodeNetworked()

```ts
explodeNetworked(): void;
```

Defined in: lib/fivem/models/Vehicle.d.ts:159

#### Returns

`void`

***

### extraExists()

```ts
extraExists(extra): boolean;
```

Defined in: lib/fivem/models/Vehicle.d.ts:148

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `extra` | `number` |

#### Returns

`boolean`

***

### forceRoom()

```ts
forceRoom(interiorId, roomKey): void;
```

Defined in: lib/fivem/models/BaseEntity.d.ts:196

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `interiorId` | `number` |
| `roomKey` | `number` |

#### Returns

`void`

#### Inherited from

[`BaseEntity`](../../BaseEntity/classes/BaseEntity.md).[`forceRoom`](../../BaseEntity/classes/BaseEntity.md#forceroom)

***

### getEntityAttachedTo()

```ts
getEntityAttachedTo(): Entity;
```

Defined in: lib/fivem/models/Vehicle.d.ts:182

#### Returns

[`Entity`](../../Entity/type-aliases/Entity.md)

#### Overrides

[`BaseEntity`](../../BaseEntity/classes/BaseEntity.md).[`getEntityAttachedTo`](../../BaseEntity/classes/BaseEntity.md#getentityattachedto)

***

### getHandlingFloat()

```ts
getHandlingFloat(fieldName): number;
```

Defined in: lib/fivem/models/Vehicle.d.ts:177

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `fieldName` | `string` |

#### Returns

`number`

***

### getHandlingInt()

```ts
getHandlingInt(fieldName): number;
```

Defined in: lib/fivem/models/Vehicle.d.ts:179

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `fieldName` | `string` |

#### Returns

`number`

***

### getHandlingVector()

```ts
getHandlingVector(fieldName): Vector3;
```

Defined in: lib/fivem/models/Vehicle.d.ts:181

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `fieldName` | `string` |

#### Returns

`Vector3`

***

### getOffsetInRelativeCoords()

```ts
getOffsetInRelativeCoords(worldCoords): Vector3;
```

Defined in: lib/fivem/models/BaseEntity.d.ts:139

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `worldCoords` | `Vector3` |

#### Returns

`Vector3`

the offset position from the entity in world coords

#### Inherited from

[`BaseEntity`](../../BaseEntity/classes/BaseEntity.md).[`getOffsetInRelativeCoords`](../../BaseEntity/classes/BaseEntity.md#getoffsetinrelativecoords)

***

### getOffsetInWorldCoords()

```ts
getOffsetInWorldCoords(offset): Vector3;
```

Defined in: lib/fivem/models/BaseEntity.d.ts:156

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

[`BaseEntity`](../../BaseEntity/classes/BaseEntity.md).[`getOffsetInWorldCoords`](../../BaseEntity/classes/BaseEntity.md#getoffsetinworldcoords)

***

### ~~getOffsetPosition()~~

```ts
getOffsetPosition(offset): Vector3;
```

Defined in: lib/fivem/models/BaseEntity.d.ts:164

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `offset` | `Vector3` |

#### Returns

`Vector3`

#### Deprecated

use [[getOffsetInWorldCoords]]

#### Inherited from

[`BaseEntity`](../../BaseEntity/classes/BaseEntity.md).[`getOffsetPosition`](../../BaseEntity/classes/BaseEntity.md#getoffsetposition)

***

### getPedOnSeat()

```ts
getPedOnSeat(seat): null | Ped;
```

Defined in: lib/fivem/models/Vehicle.d.ts:151

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `seat` | [`VehicleSeat`](../../../enums/Vehicle/enumerations/VehicleSeat.md) |

#### Returns

`null` \| [`Ped`](../../Ped/classes/Ped.md)

***

### ~~getPositionOffset()~~

```ts
getPositionOffset(worldCoords): Vector3;
```

Defined in: lib/fivem/models/BaseEntity.d.ts:160

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `worldCoords` | `Vector3` |

#### Returns

`Vector3`

#### Deprecated

use [[getOffsetInRelativeCoords]] instead

#### Inherited from

[`BaseEntity`](../../BaseEntity/classes/BaseEntity.md).[`getPositionOffset`](../../BaseEntity/classes/BaseEntity.md#getpositionoffset)

***

### getSpeedVector()

```ts
getSpeedVector(isRelative?): Vector3;
```

Defined in: lib/fivem/models/BaseEntity.d.ts:40

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `isRelative?` | `boolean` |

#### Returns

`Vector3`

#### Inherited from

[`BaseEntity`](../../BaseEntity/classes/BaseEntity.md).[`getSpeedVector`](../../BaseEntity/classes/BaseEntity.md#getspeedvector)

***

### hasBeenDamagedBy()

```ts
hasBeenDamagedBy(entity): boolean;
```

Defined in: lib/fivem/models/BaseEntity.d.ts:124

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `entity` | [`BaseEntity`](../../BaseEntity/classes/BaseEntity.md) |

#### Returns

`boolean`

#### Inherited from

[`BaseEntity`](../../BaseEntity/classes/BaseEntity.md).[`hasBeenDamagedBy`](../../BaseEntity/classes/BaseEntity.md#hasbeendamagedby)

***

### hasBeenDamagedByAnyMeleeWeapon()

```ts
hasBeenDamagedByAnyMeleeWeapon(): boolean;
```

Defined in: lib/fivem/models/BaseEntity.d.ts:127

#### Returns

`boolean`

#### Inherited from

[`BaseEntity`](../../BaseEntity/classes/BaseEntity.md).[`hasBeenDamagedByAnyMeleeWeapon`](../../BaseEntity/classes/BaseEntity.md#hasbeendamagedbyanymeleeweapon)

***

### hasBeenDamagedByAnyWeapon()

```ts
hasBeenDamagedByAnyWeapon(): boolean;
```

Defined in: lib/fivem/models/BaseEntity.d.ts:126

#### Returns

`boolean`

#### Inherited from

[`BaseEntity`](../../BaseEntity/classes/BaseEntity.md).[`hasBeenDamagedByAnyWeapon`](../../BaseEntity/classes/BaseEntity.md#hasbeendamagedbyanyweapon)

***

### hasBeenDamagedByWeapon()

```ts
hasBeenDamagedByWeapon(weapon): boolean;
```

Defined in: lib/fivem/models/BaseEntity.d.ts:125

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `weapon` | [`WeaponHash`](../../../hashes/WeaponHash/enumerations/WeaponHash.md) |

#### Returns

`boolean`

#### Inherited from

[`BaseEntity`](../../BaseEntity/classes/BaseEntity.md).[`hasBeenDamagedByWeapon`](../../BaseEntity/classes/BaseEntity.md#hasbeendamagedbyweapon)

***

### hasClearLosToEntity()

```ts
hasClearLosToEntity(entity, traceType?): boolean;
```

Defined in: lib/fivem/models/BaseEntity.d.ts:122

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `entity` | [`BaseEntity`](../../BaseEntity/classes/BaseEntity.md) |
| `traceType?` | `number` |

#### Returns

`boolean`

#### Inherited from

[`BaseEntity`](../../BaseEntity/classes/BaseEntity.md).[`hasClearLosToEntity`](../../BaseEntity/classes/BaseEntity.md#hasclearlostoentity)

***

### hasClearLosToEntityInFront()

```ts
hasClearLosToEntityInFront(entity): boolean;
```

Defined in: lib/fivem/models/BaseEntity.d.ts:123

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `entity` | [`BaseEntity`](../../BaseEntity/classes/BaseEntity.md) |

#### Returns

`boolean`

#### Inherited from

[`BaseEntity`](../../BaseEntity/classes/BaseEntity.md).[`hasClearLosToEntityInFront`](../../BaseEntity/classes/BaseEntity.md#hasclearlostoentityinfront)

***

### ~~isAlive()~~

```ts
isAlive(): boolean;
```

Defined in: lib/fivem/models/BaseEntity.d.ts:58

#### Returns

`boolean`

#### Deprecated

use [[IsAlive]] instead

#### Inherited from

[`BaseEntity`](../../BaseEntity/classes/BaseEntity.md).[`isAlive`](../../BaseEntity/classes/BaseEntity.md#isalive-1)

***

### isAttached()

```ts
isAttached(): boolean;
```

Defined in: lib/fivem/models/BaseEntity.d.ts:168

#### Returns

`boolean`

#### Inherited from

[`BaseEntity`](../../BaseEntity/classes/BaseEntity.md).[`isAttached`](../../BaseEntity/classes/BaseEntity.md#isattached)

***

### isAttachedTo()

```ts
isAttachedTo(entity): boolean;
```

Defined in: lib/fivem/models/BaseEntity.d.ts:169

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `entity` | [`BaseEntity`](../../BaseEntity/classes/BaseEntity.md) |

#### Returns

`boolean`

#### Inherited from

[`BaseEntity`](../../BaseEntity/classes/BaseEntity.md).[`isAttachedTo`](../../BaseEntity/classes/BaseEntity.md#isattachedto)

***

### ~~isDead()~~

```ts
isDead(): boolean;
```

Defined in: lib/fivem/models/BaseEntity.d.ts:54

#### Returns

`boolean`

#### Deprecated

use [[IsDead]] instead

#### Inherited from

[`BaseEntity`](../../BaseEntity/classes/BaseEntity.md).[`isDead`](../../BaseEntity/classes/BaseEntity.md#isdead-1)

***

### isExtraOn()

```ts
isExtraOn(extra): boolean;
```

Defined in: lib/fivem/models/Vehicle.d.ts:149

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
   angle): boolean;
```

Defined in: lib/fivem/models/BaseEntity.d.ts:130

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `origin` | `Vector3` |
| `edge` | `Vector3` |
| `angle` | `number` |

#### Returns

`boolean`

#### Inherited from

[`BaseEntity`](../../BaseEntity/classes/BaseEntity.md).[`isInAngledArea`](../../BaseEntity/classes/BaseEntity.md#isinangledarea)

***

### isInArea()

```ts
isInArea(minBounds, maxBounds): boolean;
```

Defined in: lib/fivem/models/BaseEntity.d.ts:129

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `minBounds` | `Vector3` |
| `maxBounds` | `Vector3` |

#### Returns

`boolean`

#### Inherited from

[`BaseEntity`](../../BaseEntity/classes/BaseEntity.md).[`isInArea`](../../BaseEntity/classes/BaseEntity.md#isinarea)

***

### isInRangeOf()

```ts
isInRangeOf(position, range): boolean;
```

Defined in: lib/fivem/models/BaseEntity.d.ts:131

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `position` | `Vector3` |
| `range` | `number` |

#### Returns

`boolean`

#### Inherited from

[`BaseEntity`](../../BaseEntity/classes/BaseEntity.md).[`isInRangeOf`](../../BaseEntity/classes/BaseEntity.md#isinrangeof)

***

### isNearEntity()

```ts
isNearEntity(entity, bounds): boolean;
```

Defined in: lib/fivem/models/BaseEntity.d.ts:132

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `entity` | [`BaseEntity`](../../BaseEntity/classes/BaseEntity.md) |
| `bounds` | `Vector3` |

#### Returns

`boolean`

#### Inherited from

[`BaseEntity`](../../BaseEntity/classes/BaseEntity.md).[`isNearEntity`](../../BaseEntity/classes/BaseEntity.md#isnearentity)

***

### isSeatFree()

```ts
isSeatFree(seat): boolean;
```

Defined in: lib/fivem/models/Vehicle.d.ts:152

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `seat` | [`VehicleSeat`](../../../enums/Vehicle/enumerations/VehicleSeat.md) |

#### Returns

`boolean`

***

### isTouching()

```ts
isTouching(entity): boolean;
```

Defined in: lib/fivem/models/BaseEntity.d.ts:133

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `entity` | [`BaseEntity`](../../BaseEntity/classes/BaseEntity.md) |

#### Returns

`boolean`

#### Inherited from

[`BaseEntity`](../../BaseEntity/classes/BaseEntity.md).[`isTouching`](../../BaseEntity/classes/BaseEntity.md#istouching)

***

### isTouchingModel()

```ts
isTouchingModel(model): boolean;
```

Defined in: lib/fivem/models/BaseEntity.d.ts:134

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `model` | [`Model`](../../../Model/classes/Model.md) |

#### Returns

`boolean`

#### Inherited from

[`BaseEntity`](../../BaseEntity/classes/BaseEntity.md).[`isTouchingModel`](../../BaseEntity/classes/BaseEntity.md#istouchingmodel)

***

### listenForStateChange()

```ts
listenForStateChange(keyFilter, handler): number;
```

Defined in: lib/fivem/models/BaseEntity.d.ts:36

A short hand function for AddStateBagChangeHandler, this gets automatically cleaned up on entity deletion.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `keyFilter` | `null` \| `string` | the key to filter for or null |
| `handler` | [`StateBagChangeHandler`](../../../cfx/StateBagChangeHandler/type-aliases/StateBagChangeHandler.md) | the function to handle the change |

#### Returns

`number`

a cookie to be used in RemoveStateBagChangeHandler

#### Inherited from

[`BaseEntity`](../../BaseEntity/classes/BaseEntity.md).[`listenForStateChange`](../../BaseEntity/classes/BaseEntity.md#listenforstatechange)

***

### ~~markAsNoLongerNeeded()~~

```ts
markAsNoLongerNeeded(): void;
```

Defined in: lib/fivem/models/BaseEntity.d.ts:186

#### Returns

`void`

#### Deprecated

use [[IsMissionEntity]] setter as false instead.

#### Inherited from

[`BaseEntity`](../../BaseEntity/classes/BaseEntity.md).[`markAsNoLongerNeeded`](../../BaseEntity/classes/BaseEntity.md#markasnolongerneeded)

***

### openBombBay()

```ts
openBombBay(): void;
```

Defined in: lib/fivem/models/Vehicle.d.ts:165

#### Returns

`void`

***

### placeOnGround()

```ts
placeOnGround(): void;
```

Defined in: lib/fivem/models/Vehicle.d.ts:156

#### Returns

`void`

***

### ~~removeAllParticleEffects()~~

```ts
removeAllParticleEffects(): void;
```

Defined in: lib/fivem/models/BaseEntity.d.ts:180

#### Returns

`void`

#### Deprecated

use [[removePtfxEffects]]

#### Inherited from

[`BaseEntity`](../../BaseEntity/classes/BaseEntity.md).[`removeAllParticleEffects`](../../BaseEntity/classes/BaseEntity.md#removeallparticleeffects)

***

### removePtfxEffects()

```ts
removePtfxEffects(): void;
```

Defined in: lib/fivem/models/BaseEntity.d.ts:176

Removes all particle effects from the entity

#### Returns

`void`

#### Inherited from

[`BaseEntity`](../../BaseEntity/classes/BaseEntity.md).[`removePtfxEffects`](../../BaseEntity/classes/BaseEntity.md#removeptfxeffects)

***

### removeStateListener()

```ts
removeStateListener(tgtCookie): void;
```

Defined in: lib/fivem/models/BaseEntity.d.ts:37

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `tgtCookie` | `number` |

#### Returns

`void`

#### Inherited from

[`BaseEntity`](../../BaseEntity/classes/BaseEntity.md).[`removeStateListener`](../../BaseEntity/classes/BaseEntity.md#removestatelistener)

***

### repair()

```ts
repair(): void;
```

Defined in: lib/fivem/models/Vehicle.d.ts:157

#### Returns

`void`

***

### resetOpacity()

```ts
resetOpacity(): void;
```

Defined in: lib/fivem/models/BaseEntity.d.ts:112

#### Returns

`void`

#### Inherited from

[`BaseEntity`](../../BaseEntity/classes/BaseEntity.md).[`resetOpacity`](../../BaseEntity/classes/BaseEntity.md#resetopacity)

***

### setHandlingFloat()

```ts
setHandlingFloat(fieldName, value): void;
```

Defined in: lib/fivem/models/Vehicle.d.ts:178

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
setHandlingInt(fieldName, value): void;
```

Defined in: lib/fivem/models/Vehicle.d.ts:180

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
setHeliYawPitchRollMult(mult): void;
```

Defined in: lib/fivem/models/Vehicle.d.ts:167

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `mult` | `number` |

#### Returns

`void`

***

### setNoCollision()

```ts
setNoCollision(entity, toggle): void;
```

Defined in: lib/fivem/models/BaseEntity.d.ts:121

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `entity` | [`BaseEntity`](../../BaseEntity/classes/BaseEntity.md) |
| `toggle` | `boolean` |

#### Returns

`void`

#### Inherited from

[`BaseEntity`](../../BaseEntity/classes/BaseEntity.md).[`setNoCollision`](../../BaseEntity/classes/BaseEntity.md#setnocollision)

***

### soundHorn()

```ts
soundHorn(duration, mode?): void;
```

Defined in: lib/fivem/models/Vehicle.d.ts:76

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `duration` | `number` |
| `mode?` | `number` |

#### Returns

`void`

***

### startAlarm()

```ts
startAlarm(): void;
```

Defined in: lib/fivem/models/Vehicle.d.ts:72

#### Returns

`void`

***

### toggleExtra()

```ts
toggleExtra(extra, toggle): void;
```

Defined in: lib/fivem/models/Vehicle.d.ts:150

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
towVehicle(vehicle, rear): void;
```

Defined in: lib/fivem/models/Vehicle.d.ts:170

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `vehicle` | `Vehicle` |
| `rear` | `boolean` |

#### Returns

`void`

***

### wash()

```ts
wash(): void;
```

Defined in: lib/fivem/models/Vehicle.d.ts:153

#### Returns

`void`

***

### exists()

```ts
static exists(vehicle): boolean;
```

Defined in: lib/fivem/models/Vehicle.d.ts:18

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `vehicle` | `Vehicle` |

#### Returns

`boolean`

***

### fromHandle()

```ts
static fromHandle(handle): null | Vehicle;
```

Defined in: lib/fivem/models/Vehicle.d.ts:19

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `handle` | `number` |

#### Returns

`null` \| `Vehicle`

***

### fromNetworkId()

```ts
static fromNetworkId(networkId): null | Vehicle;
```

Defined in: lib/fivem/models/Vehicle.d.ts:20

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `networkId` | `number` |

#### Returns

`null` \| `Vehicle`

***

### getClassDisplayName()

```ts
static getClassDisplayName(vehicleClass): string;
```

Defined in: lib/fivem/models/Vehicle.d.ts:17

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `vehicleClass` | [`VehicleClass`](../../../enums/Vehicle/enumerations/VehicleClass.md) |

#### Returns

`string`

***

### getModelClass()

```ts
static getModelClass(vehicleModel): VehicleClass;
```

Defined in: lib/fivem/models/Vehicle.d.ts:16

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `vehicleModel` | [`Model`](../../../Model/classes/Model.md) |

#### Returns

[`VehicleClass`](../../../enums/Vehicle/enumerations/VehicleClass.md)

***

### getModelDisplayName()

```ts
static getModelDisplayName(vehicleModel): string;
```

Defined in: lib/fivem/models/Vehicle.d.ts:15

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `vehicleModel` | [`Model`](../../../Model/classes/Model.md) |

#### Returns

`string`

***

### resetGhostAlpha()

```ts
static resetGhostAlpha(): void;
```

Defined in: lib/fivem/models/Vehicle.d.ts:141

#### Returns

`void`
