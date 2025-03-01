[@nativewrappers/fivem](../../README.md) / [fivem](../README.md) / Ped

# Class: Ped

Defined in: fivem/models/Ped.d.ts:9

## Extends

- [`BaseEntity`](BaseEntity.md)

## Constructors

### new Ped()

```ts
new Ped(handle): Ped
```

Defined in: fivem/models/Ped.d.ts:18

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `handle` | `number` |

#### Returns

[`Ped`](Ped.md)

#### Overrides

[`BaseEntity`](BaseEntity.md).[`constructor`](BaseEntity.md#constructors)

## Properties

| Property | Modifier | Type | Overrides | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ | ------ |
| <a id="bones"></a> `bones` | `protected` | `undefined` \| [`EntityBoneCollection`](EntityBoneCollection.md) | - | [`BaseEntity`](BaseEntity.md).[`bones`](BaseEntity.md#bones) | fivem/models/BaseEntity.d.ts:14 |
| <a id="handle-1"></a> `handle` | `protected` | `number` | - | [`BaseEntity`](BaseEntity.md).[`handle`](BaseEntity.md#handle-1) | fivem/models/BaseEntity.d.ts:13 |
| <a id="netid"></a> `netId` | `protected` | `null` \| `number` | - | [`BaseEntity`](BaseEntity.md).[`netId`](BaseEntity.md#netid) | fivem/models/BaseEntity.d.ts:16 |
| <a id="statebagcookies"></a> `stateBagCookies` | `protected` | `number`[] | - | [`BaseEntity`](BaseEntity.md).[`stateBagCookies`](BaseEntity.md#statebagcookies) | fivem/models/BaseEntity.d.ts:15 |
| <a id="type"></a> `type` | `protected` | `ClassTypes` | [`BaseEntity`](BaseEntity.md).[`type`](BaseEntity.md#type) | - | fivem/models/Ped.d.ts:13 |

## Accessors

### Accuracy

#### Get Signature

```ts
get Accuracy(): number
```

Defined in: fivem/models/Ped.d.ts:25

##### Returns

`number`

#### Set Signature

```ts
set Accuracy(accuracy): void
```

Defined in: fivem/models/Ped.d.ts:26

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `accuracy` | `number` |

##### Returns

`void`

***

### Armor

#### Get Signature

```ts
get Armor(): number
```

Defined in: fivem/models/Ped.d.ts:23

##### Returns

`number`

#### Set Signature

```ts
set Armor(amount): void
```

Defined in: fivem/models/Ped.d.ts:24

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `amount` | `number` |

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

### BlockPermanentEvents

#### Set Signature

```ts
set BlockPermanentEvents(block): void
```

Defined in: fivem/models/Ped.d.ts:113

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `block` | `boolean` |

##### Returns

`void`

***

### Bones

#### Get Signature

```ts
get Bones(): PedBoneCollection
```

Defined in: fivem/models/Ped.d.ts:138

##### Returns

[`PedBoneCollection`](PedBoneCollection.md)

#### Overrides

[`BaseEntity`](BaseEntity.md).[`Bones`](BaseEntity.md#bones-1)

***

### CanRagdoll

#### Get Signature

```ts
get CanRagdoll(): boolean
```

Defined in: fivem/models/Ped.d.ts:149

##### Returns

`boolean`

#### Set Signature

```ts
set CanRagdoll(value): void
```

Defined in: fivem/models/Ped.d.ts:150

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

##### Returns

`void`

***

### CurrentVehicle

#### Get Signature

```ts
get CurrentVehicle(): null | Vehicle
```

Defined in: fivem/models/Ped.d.ts:38

##### Returns

`null` \| [`Vehicle`](Vehicle.md)

***

### DeathCause

#### Get Signature

```ts
get DeathCause(): number
```

Defined in: fivem/models/Ped.d.ts:111

##### Returns

`number`

***

### DrivingSpeed

#### Set Signature

```ts
set DrivingSpeed(value): void
```

Defined in: fivem/models/Ped.d.ts:106

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

##### Returns

`void`

***

### DrivingStyle

#### Set Signature

```ts
set DrivingStyle(style): void
```

Defined in: fivem/models/Ped.d.ts:107

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `style` | [`DrivingStyle`](../enumerations/DrivingStyle.md) |

##### Returns

`void`

***

### DropsWeaponsOnDeath

#### Set Signature

```ts
set DropsWeaponsOnDeath(value): void
```

Defined in: fivem/models/Ped.d.ts:105

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

##### Returns

`void`

***

### FiringPattern

#### Set Signature

```ts
set FiringPattern(value): void
```

Defined in: fivem/models/Ped.d.ts:104

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | [`FiringPattern`](../enumerations/FiringPattern.md) |

##### Returns

`void`

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

### Gender

#### Get Signature

```ts
get Gender(): Gender
```

Defined in: fivem/models/Ped.d.ts:22

##### Returns

[`Gender`](../enumerations/Gender.md)

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

Defined in: fivem/models/Ped.d.ts:27

##### Returns

`number`

#### Set Signature

```ts
set Health(amount): void
```

Defined in: fivem/models/Ped.d.ts:28

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `amount` | `number` |

##### Returns

`void`

#### Overrides

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

### IsAiming

#### Get Signature

```ts
get IsAiming(): boolean
```

Defined in: fivem/models/Ped.d.ts:94

##### Returns

`boolean`

***

### IsAimingFromCover

#### Get Signature

```ts
get IsAimingFromCover(): boolean
```

Defined in: fivem/models/Ped.d.ts:101

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

### IsAmbientSpeechEnabled

#### Get Signature

```ts
get IsAmbientSpeechEnabled(): boolean
```

Defined in: fivem/models/Ped.d.ts:90

##### Returns

`boolean`

***

### IsAmbientSpeechPlaying

#### Get Signature

```ts
get IsAmbientSpeechPlaying(): boolean
```

Defined in: fivem/models/Ped.d.ts:87

##### Returns

`boolean`

***

### IsAnySpeechPlaying

#### Get Signature

```ts
get IsAnySpeechPlaying(): boolean
```

Defined in: fivem/models/Ped.d.ts:89

##### Returns

`boolean`

***

### IsBeingJacked

#### Get Signature

```ts
get IsBeingJacked(): boolean
```

Defined in: fivem/models/Ped.d.ts:79

##### Returns

`boolean`

***

### IsBeingStealthKilled

#### Get Signature

```ts
get IsBeingStealthKilled(): boolean
```

Defined in: fivem/models/Ped.d.ts:99

##### Returns

`boolean`

***

### IsBeingStunned

#### Get Signature

```ts
get IsBeingStunned(): boolean
```

Defined in: fivem/models/Ped.d.ts:98

##### Returns

`boolean`

***

### IsClimbing

#### Get Signature

```ts
get IsClimbing(): boolean
```

Defined in: fivem/models/Ped.d.ts:56

##### Returns

`boolean`

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

### IsCuffed

#### Get Signature

```ts
get IsCuffed(): boolean
```

Defined in: fivem/models/Ped.d.ts:48

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

### IsDiving

#### Get Signature

```ts
get IsDiving(): boolean
```

Defined in: fivem/models/Ped.d.ts:63

##### Returns

`boolean`

***

### IsDoingDriveby

#### Get Signature

```ts
get IsDoingDriveby(): boolean
```

Defined in: fivem/models/Ped.d.ts:96

##### Returns

`boolean`

***

### IsDrunk

#### Set Signature

```ts
set IsDrunk(isDrunk): void
```

Defined in: fivem/models/Ped.d.ts:108

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `isDrunk` | `boolean` |

##### Returns

`void`

***

### IsDucking

#### Get Signature

```ts
get IsDucking(): boolean
```

Defined in: fivem/models/Ped.d.ts:54

##### Returns

`boolean`

#### Set Signature

```ts
set IsDucking(value): void
```

Defined in: fivem/models/Ped.d.ts:53

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

##### Returns

`void`

***

### IsEnemy

#### Set Signature

```ts
set IsEnemy(value): void
```

Defined in: fivem/models/Ped.d.ts:45

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

##### Returns

`void`

***

### IsFalling

#### Get Signature

```ts
get IsFalling(): boolean
```

Defined in: fivem/models/Ped.d.ts:58

##### Returns

`boolean`

***

### IsFleeing

#### Get Signature

```ts
get IsFleeing(): boolean
```

Defined in: fivem/models/Ped.d.ts:83

##### Returns

`boolean`

***

### IsGettingIntoAVehicle

#### Get Signature

```ts
get IsGettingIntoAVehicle(): boolean
```

Defined in: fivem/models/Ped.d.ts:80

##### Returns

`boolean`

***

### IsGettingUp

#### Get Signature

```ts
get IsGettingUp(): boolean
```

Defined in: fivem/models/Ped.d.ts:55

##### Returns

`boolean`

***

### IsGoingIntoCover

#### Get Signature

```ts
get IsGoingIntoCover(): boolean
```

Defined in: fivem/models/Ped.d.ts:97

##### Returns

`boolean`

***

### IsHuman

#### Get Signature

```ts
get IsHuman(): boolean
```

Defined in: fivem/models/Ped.d.ts:44

##### Returns

`boolean`

***

### IsIdle

#### Get Signature

```ts
get IsIdle(): boolean
```

Defined in: fivem/models/Ped.d.ts:51

##### Returns

`boolean`

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

### IsInBoat

#### Get Signature

```ts
get IsInBoat(): boolean
```

Defined in: fivem/models/Ped.d.ts:76

##### Returns

`boolean`

***

### IsInCombat

#### Get Signature

```ts
get IsInCombat(): boolean
```

Defined in: fivem/models/Ped.d.ts:84

##### Returns

`boolean`

***

### IsInCoverFacingLeft

#### Get Signature

```ts
get IsInCoverFacingLeft(): boolean
```

Defined in: fivem/models/Ped.d.ts:103

##### Returns

`boolean`

***

### IsInFlyingVehicle

#### Get Signature

```ts
get IsInFlyingVehicle(): boolean
```

Defined in: fivem/models/Ped.d.ts:75

##### Returns

`boolean`

***

### IsInGroup

#### Get Signature

```ts
get IsInGroup(): boolean
```

Defined in: fivem/models/Ped.d.ts:129

##### Returns

`boolean`

***

### IsInHeli

#### Get Signature

```ts
get IsInHeli(): boolean
```

Defined in: fivem/models/Ped.d.ts:73

##### Returns

`boolean`

***

### IsInjured

#### Get Signature

```ts
get IsInjured(): boolean
```

Defined in: fivem/models/Ped.d.ts:82

##### Returns

`boolean`

***

### IsInMeleeCombat

#### Get Signature

```ts
get IsInMeleeCombat(): boolean
```

Defined in: fivem/models/Ped.d.ts:85

##### Returns

`boolean`

***

### IsInParachuteFreeFall

#### Get Signature

```ts
get IsInParachuteFreeFall(): boolean
```

Defined in: fivem/models/Ped.d.ts:64

##### Returns

`boolean`

***

### IsInPlane

#### Get Signature

```ts
get IsInPlane(): boolean
```

Defined in: fivem/models/Ped.d.ts:74

##### Returns

`boolean`

***

### IsInPoliceVehicle

#### Get Signature

```ts
get IsInPoliceVehicle(): boolean
```

Defined in: fivem/models/Ped.d.ts:77

##### Returns

`boolean`

***

### IsInStealthMode

#### Get Signature

```ts
get IsInStealthMode(): boolean
```

Defined in: fivem/models/Ped.d.ts:86

##### Returns

`boolean`

***

### IsInSub

#### Get Signature

```ts
get IsInSub(): boolean
```

Defined in: fivem/models/Ped.d.ts:70

##### Returns

`boolean`

***

### IsInTaxi

#### Get Signature

```ts
get IsInTaxi(): boolean
```

Defined in: fivem/models/Ped.d.ts:71

##### Returns

`boolean`

***

### IsInTrain

#### Get Signature

```ts
get IsInTrain(): boolean
```

Defined in: fivem/models/Ped.d.ts:72

##### Returns

`boolean`

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

### IsJacking

#### Get Signature

```ts
get IsJacking(): boolean
```

Defined in: fivem/models/Ped.d.ts:78

##### Returns

`boolean`

***

### IsJumping

#### Get Signature

```ts
get IsJumping(): boolean
```

Defined in: fivem/models/Ped.d.ts:57

##### Returns

`boolean`

***

### IsJumpingOutOfVehicle

#### Get Signature

```ts
get IsJumpingOutOfVehicle(): boolean
```

Defined in: fivem/models/Ped.d.ts:41

##### Returns

`boolean`

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

### IsOnBike

#### Get Signature

```ts
get IsOnBike(): boolean
```

Defined in: fivem/models/Ped.d.ts:68

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

### IsOnFoot

#### Get Signature

```ts
get IsOnFoot(): boolean
```

Defined in: fivem/models/Ped.d.ts:69

##### Returns

`boolean`

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

### IsPainAudioEnabled

#### Set Signature

```ts
set IsPainAudioEnabled(value): void
```

Defined in: fivem/models/Ped.d.ts:91

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

##### Returns

`void`

***

### IsPerformingStealthKill

#### Get Signature

```ts
get IsPerformingStealthKill(): boolean
```

Defined in: fivem/models/Ped.d.ts:100

##### Returns

`boolean`

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

### IsPlantingBomb

#### Get Signature

```ts
get IsPlantingBomb(): boolean
```

Defined in: fivem/models/Ped.d.ts:92

##### Returns

`boolean`

***

### IsPlayer

#### Get Signature

```ts
get IsPlayer(): boolean
```

Defined in: fivem/models/Ped.d.ts:47

##### Returns

`boolean`

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

### IsPriorityTargetForEnemies

#### Set Signature

```ts
set IsPriorityTargetForEnemies(value): void
```

Defined in: fivem/models/Ped.d.ts:46

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

##### Returns

`void`

***

### IsProne

#### Get Signature

```ts
get IsProne(): boolean
```

Defined in: fivem/models/Ped.d.ts:52

##### Returns

`boolean`

***

### IsRagdoll

#### Get Signature

```ts
get IsRagdoll(): boolean
```

Defined in: fivem/models/Ped.d.ts:50

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

### IsReloading

#### Get Signature

```ts
get IsReloading(): boolean
```

Defined in: fivem/models/Ped.d.ts:95

##### Returns

`boolean`

***

### IsRunning

#### Get Signature

```ts
get IsRunning(): boolean
```

Defined in: fivem/models/Ped.d.ts:61

##### Returns

`boolean`

***

### IsScriptedSpeechPlaying

#### Get Signature

```ts
get IsScriptedSpeechPlaying(): boolean
```

Defined in: fivem/models/Ped.d.ts:88

##### Returns

`boolean`

***

### IsShooting

#### Get Signature

```ts
get IsShooting(): boolean
```

Defined in: fivem/models/Ped.d.ts:93

##### Returns

`boolean`

***

### IsSprinting

#### Get Signature

```ts
get IsSprinting(): boolean
```

Defined in: fivem/models/Ped.d.ts:62

##### Returns

`boolean`

***

### IsStopped

#### Get Signature

```ts
get IsStopped(): boolean
```

Defined in: fivem/models/Ped.d.ts:59

##### Returns

`boolean`

***

### IsSwimming

#### Get Signature

```ts
get IsSwimming(): boolean
```

Defined in: fivem/models/Ped.d.ts:65

##### Returns

`boolean`

***

### IsSwimmingUnderWater

#### Get Signature

```ts
get IsSwimmingUnderWater(): boolean
```

Defined in: fivem/models/Ped.d.ts:66

##### Returns

`boolean`

***

### IsTryingToEnterALockedVehicle

#### Get Signature

```ts
get IsTryingToEnterALockedVehicle(): boolean
```

Defined in: fivem/models/Ped.d.ts:81

##### Returns

`boolean`

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

### IsVaulting

#### Get Signature

```ts
get IsVaulting(): boolean
```

Defined in: fivem/models/Ped.d.ts:67

##### Returns

`boolean`

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

### IsWalking

#### Get Signature

```ts
get IsWalking(): boolean
```

Defined in: fivem/models/Ped.d.ts:60

##### Returns

`boolean`

***

### IsWearingHelmet

#### Get Signature

```ts
get IsWearingHelmet(): boolean
```

Defined in: fivem/models/Ped.d.ts:49

##### Returns

`boolean`

***

### LastVehicle

#### Get Signature

```ts
get LastVehicle(): null | Vehicle
```

Defined in: fivem/models/Ped.d.ts:39

##### Returns

`null` \| [`Vehicle`](Vehicle.md)

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

### MaxDrivingSpeed

#### Set Signature

```ts
set MaxDrivingSpeed(value): void
```

Defined in: fivem/models/Ped.d.ts:43

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

##### Returns

`void`

***

### MaxHealth

#### Get Signature

```ts
get MaxHealth(): number
```

Defined in: fivem/models/Ped.d.ts:29

##### Returns

`number`

#### Set Signature

```ts
set MaxHealth(amount): void
```

Defined in: fivem/models/Ped.d.ts:30

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `amount` | `number` |

##### Returns

`void`

#### Overrides

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

### Money

#### Get Signature

```ts
get Money(): number
```

Defined in: fivem/models/Ped.d.ts:20

##### Returns

`number`

#### Set Signature

```ts
set Money(amount): void
```

Defined in: fivem/models/Ped.d.ts:21

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `amount` | `number` |

##### Returns

`void`

***

### MotionBlur

#### Set Signature

```ts
set MotionBlur(value): void
```

Defined in: fivem/models/Ped.d.ts:109

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

### NeverLeavesGroup

#### Set Signature

```ts
set NeverLeavesGroup(value): void
```

Defined in: fivem/models/Ped.d.ts:130

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

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

### Player

#### Get Signature

```ts
get Player(): Player
```

Defined in: fivem/models/Ped.d.ts:19

##### Returns

[`Player`](Player.md)

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

### SeatIndex

#### Get Signature

```ts
get SeatIndex(): VehicleSeat
```

Defined in: fivem/models/Ped.d.ts:37

##### Returns

[`VehicleSeat`](../enumerations/VehicleSeat.md)

***

### ShootRate

#### Set Signature

```ts
set ShootRate(value): void
```

Defined in: fivem/models/Ped.d.ts:34

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

##### Returns

`void`

***

### Speed

#### Get Signature

```ts
get Speed(): number
```

Defined in: fivem/models/BaseEntity.d.ts:39

##### Returns

`number`

#### Inherited from

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

### StaysInVehicleWhenJacked

#### Set Signature

```ts
set StaysInVehicleWhenJacked(value): void
```

Defined in: fivem/models/Ped.d.ts:42

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

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

### Sweat

#### Set Signature

```ts
set Sweat(value): void
```

Defined in: fivem/models/Ped.d.ts:31

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

##### Returns

`void`

***

### Task

#### Get Signature

```ts
get Task(): Tasks
```

Defined in: fivem/models/Ped.d.ts:110

##### Returns

[`Tasks`](Tasks.md)

***

### TaskSequenceProgress

#### Get Signature

```ts
get TaskSequenceProgress(): number
```

Defined in: fivem/models/Ped.d.ts:112

##### Returns

`number`

***

### VehicleTryingToEnter

#### Get Signature

```ts
get VehicleTryingToEnter(): null | Vehicle
```

Defined in: fivem/models/Ped.d.ts:40

##### Returns

`null` \| [`Vehicle`](Vehicle.md)

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

### Voice

#### Set Signature

```ts
set Voice(value): void
```

Defined in: fivem/models/Ped.d.ts:33

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `string` |

##### Returns

`void`

***

### WasKilledByStealth

#### Get Signature

```ts
get WasKilledByStealth(): boolean
```

Defined in: fivem/models/Ped.d.ts:35

##### Returns

`boolean`

***

### WasKilledByTakedown

#### Get Signature

```ts
get WasKilledByTakedown(): boolean
```

Defined in: fivem/models/Ped.d.ts:36

##### Returns

`boolean`

***

### Weapons

#### Get Signature

```ts
get Weapons(): WeaponCollection
```

Defined in: fivem/models/Ped.d.ts:144

Ped Weapons

##### Returns

`WeaponCollection`

***

### WetnessHeight

#### Set Signature

```ts
set WetnessHeight(value): void
```

Defined in: fivem/models/Ped.d.ts:32

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

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

### applyDamage()

```ts
applyDamage(damageAmount, armorFirst?): void
```

Defined in: fivem/models/Ped.d.ts:133

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `damageAmount` | `number` |
| `armorFirst`? | `boolean` |

#### Returns

`void`

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

### cancelRagdoll()

```ts
cancelRagdoll(): void
```

Defined in: fivem/models/Ped.d.ts:152

#### Returns

`void`

***

### clearAllProps()

```ts
clearAllProps(): void
```

Defined in: fivem/models/Ped.d.ts:172

#### Returns

`void`

***

### clearBloodDamage()

```ts
clearBloodDamage(): void
```

Defined in: fivem/models/Ped.d.ts:128

#### Returns

`void`

***

### clearLastWeaponDamage()

```ts
clearLastWeaponDamage(): void
```

Defined in: fivem/models/Ped.d.ts:137

#### Returns

`void`

#### Overrides

[`BaseEntity`](BaseEntity.md).[`clearLastWeaponDamage`](BaseEntity.md#clearlastweapondamage)

***

### clearProp()

```ts
clearProp(propId): void
```

Defined in: fivem/models/Ped.d.ts:171

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `propId` | `number` |

#### Returns

`void`

***

### clone()

```ts
clone(): Ped
```

Defined in: fivem/models/Ped.d.ts:159

#### Returns

[`Ped`](Ped.md)

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

### exists()

```ts
exists(): boolean
```

Defined in: fivem/models/Ped.d.ts:160

#### Returns

`boolean`

#### Overrides

[`BaseEntity`](BaseEntity.md).[`exists`](BaseEntity.md#exists)

***

### finalizeHeadBlend()

```ts
finalizeHeadBlend(): void
```

Defined in: fivem/models/Ped.d.ts:208

#### Returns

`void`

***

### getConfigFlag()

```ts
getConfigFlag(flagId): boolean
```

Defined in: fivem/models/Ped.d.ts:156

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `flagId` | `number` |

#### Returns

`boolean`

***

### getDrawableVariation()

```ts
getDrawableVariation(componentId): number
```

Defined in: fivem/models/Ped.d.ts:165

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `componentId` | `number` |

#### Returns

`number`

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

### getEyeColor()

```ts
getEyeColor(): number
```

Defined in: fivem/models/Ped.d.ts:181

#### Returns

`number`

***

### getHairColor()

```ts
getHairColor(): number
```

Defined in: fivem/models/Ped.d.ts:184

#### Returns

`number`

***

### getHairHighlightColor()

```ts
getHairHighlightColor(): number
```

Defined in: fivem/models/Ped.d.ts:186

#### Returns

`number`

***

### getHeadBlend()

```ts
getHeadBlend(): 
  | void
  | [number, number, number, number, number, number, number, number, number, boolean]
```

Defined in: fivem/models/Ped.d.ts:196

#### Returns

  \| `void`
  \| \[`number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`, `boolean`\]

***

### getHeadOverlay()

```ts
getHeadOverlay(overlayId): void | [number, number, number, number, number]
```

Defined in: fivem/models/Ped.d.ts:190

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `overlayId` | `number` |

#### Returns

`void` \| \[`number`, `number`, `number`, `number`, `number`\]

***

### getHeadOverlayNum()

```ts
getHeadOverlayNum(overlayId): number
```

Defined in: fivem/models/Ped.d.ts:187

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `overlayId` | `number` |

#### Returns

`number`

***

### getHeadOverlayOpacity()

```ts
getHeadOverlayOpacity(overlayId): number
```

Defined in: fivem/models/Ped.d.ts:192

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `overlayId` | `number` |

#### Returns

`number`

***

### getHeadOverlayValue()

```ts
getHeadOverlayValue(overlayId): number
```

Defined in: fivem/models/Ped.d.ts:188

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `overlayId` | `number` |

#### Returns

`number`

***

### getJacker()

```ts
getJacker(): Ped
```

Defined in: fivem/models/Ped.d.ts:121

#### Returns

[`Ped`](Ped.md)

***

### getJackTarget()

```ts
getJackTarget(): Ped
```

Defined in: fivem/models/Ped.d.ts:122

#### Returns

[`Ped`](Ped.md)

***

### getKiller()

```ts
getKiller(): null | BaseEntity
```

Defined in: fivem/models/Ped.d.ts:124

#### Returns

`null` \| [`BaseEntity`](BaseEntity.md)

***

### getLastWeaponImpactPosition()

```ts
getLastWeaponImpactPosition(): Vector3
```

Defined in: fivem/models/Ped.d.ts:148

#### Returns

`Vector3`

***

### getMeleeTarget()

```ts
getMeleeTarget(): Ped
```

Defined in: fivem/models/Ped.d.ts:123

#### Returns

[`Ped`](Ped.md)

***

### getNumberOfDrawableVariations()

```ts
getNumberOfDrawableVariations(componentId): number
```

Defined in: fivem/models/Ped.d.ts:166

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `componentId` | `number` |

#### Returns

`number`

***

### getNumberOfPropDrawableVariations()

```ts
getNumberOfPropDrawableVariations(propId): number
```

Defined in: fivem/models/Ped.d.ts:176

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `propId` | `number` |

#### Returns

`number`

***

### getNumberOfPropTextureVariations()

```ts
getNumberOfPropTextureVariations(propId, drawableId?): number
```

Defined in: fivem/models/Ped.d.ts:177

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `propId` | `number` |
| `drawableId`? | `number` |

#### Returns

`number`

***

### getNumberTextureVariations()

```ts
getNumberTextureVariations(componentId, drawableId?): number
```

Defined in: fivem/models/Ped.d.ts:168

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `componentId` | `number` |
| `drawableId`? | `number` |

#### Returns

`number`

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

### getPropIndex()

```ts
getPropIndex(propId): number
```

Defined in: fivem/models/Ped.d.ts:175

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `propId` | `number` |

#### Returns

`number`

***

### getPropTextureIndex()

```ts
getPropTextureIndex(propId): number
```

Defined in: fivem/models/Ped.d.ts:178

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `propId` | `number` |

#### Returns

`number`

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

### getTextureVariation()

```ts
getTextureVariation(componentId): number
```

Defined in: fivem/models/Ped.d.ts:167

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `componentId` | `number` |

#### Returns

`number`

***

### giveHelmet()

```ts
giveHelmet(
   canBeRemovedByPed, 
   helmetType, 
   textureIndex): void
```

Defined in: fivem/models/Ped.d.ts:153

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `canBeRemovedByPed` | `boolean` |
| `helmetType` | [`HelmetType`](../enumerations/HelmetType.md) |
| `textureIndex` | `number` |

#### Returns

`void`

***

### giveWeapon()

```ts
giveWeapon(
   weapon, 
   ammoCount?, 
   isHidden?, 
   equipNow?): void
```

Defined in: fivem/models/Ped.d.ts:145

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `weapon` | [`WeaponHash`](../enumerations/WeaponHash.md) |
| `ammoCount`? | `number` |
| `isHidden`? | `boolean` |
| `equipNow`? | `boolean` |

#### Returns

`void`

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

Defined in: fivem/models/Ped.d.ts:136

#### Returns

`boolean`

#### Overrides

[`BaseEntity`](BaseEntity.md).[`hasBeenDamagedByAnyMeleeWeapon`](BaseEntity.md#hasbeendamagedbyanymeleeweapon)

***

### hasBeenDamagedByAnyWeapon()

```ts
hasBeenDamagedByAnyWeapon(): boolean
```

Defined in: fivem/models/Ped.d.ts:135

#### Returns

`boolean`

#### Overrides

[`BaseEntity`](BaseEntity.md).[`hasBeenDamagedByAnyWeapon`](BaseEntity.md#hasbeendamagedbyanyweapon)

***

### hasBeenDamagedByWeapon()

```ts
hasBeenDamagedByWeapon(weapon): boolean
```

Defined in: fivem/models/Ped.d.ts:134

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `weapon` | [`WeaponHash`](../enumerations/WeaponHash.md) |

#### Returns

`boolean`

#### Overrides

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

### hasHeadBlendFinished()

```ts
hasHeadBlendFinished(): boolean
```

Defined in: fivem/models/Ped.d.ts:209

#### Returns

`boolean`

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

### isFacingPed()

```ts
isFacingPed(ped, angle?): boolean
```

Defined in: fivem/models/Ped.d.ts:161

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `ped` | [`Ped`](Ped.md) |
| `angle`? | `number` |

#### Returns

`boolean`

***

### isHeadtracking()

```ts
isHeadtracking(entity): boolean
```

Defined in: fivem/models/Ped.d.ts:119

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `entity` | [`BaseEntity`](BaseEntity.md) |

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

### isInAnyVehicle()

```ts
isInAnyVehicle(): boolean
```

Defined in: fivem/models/Ped.d.ts:114

#### Returns

`boolean`

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

### isInCombatAgainst()

```ts
isInCombatAgainst(target): boolean
```

Defined in: fivem/models/Ped.d.ts:120

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `target` | [`Ped`](Ped.md) |

#### Returns

`boolean`

***

### isInCover()

```ts
isInCover(expectUseWeapon?): boolean
```

Defined in: fivem/models/Ped.d.ts:102

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `expectUseWeapon`? | `boolean` |

#### Returns

`boolean`

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

### isInVehicle()

```ts
isInVehicle(vehicle): boolean
```

Defined in: fivem/models/Ped.d.ts:115

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `vehicle` | [`Vehicle`](Vehicle.md) |

#### Returns

`boolean`

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

### isPropValid()

```ts
isPropValid(
   propId, 
   drawableId, 
   textureId): boolean
```

Defined in: fivem/models/Ped.d.ts:174

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `propId` | `number` |
| `drawableId` | `number` |
| `textureId` | `number` |

#### Returns

`boolean`

***

### isSittingInAnyVehicle()

```ts
isSittingInAnyVehicle(): boolean
```

Defined in: fivem/models/Ped.d.ts:116

#### Returns

`boolean`

***

### isSittingInVehicle()

```ts
isSittingInVehicle(vehicle): boolean
```

Defined in: fivem/models/Ped.d.ts:117

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `vehicle` | [`Vehicle`](Vehicle.md) |

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

### kill()

```ts
kill(): void
```

Defined in: fivem/models/Ped.d.ts:125

#### Returns

`void`

***

### knockPropOff()

```ts
knockPropOff(
   p1, 
   p2, 
   p3, 
   p4): void
```

Defined in: fivem/models/Ped.d.ts:173

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `p1` | `boolean` |
| `p2` | `boolean` |
| `p3` | `boolean` |
| `p4` | `boolean` |

#### Returns

`void`

***

### leaveGroup()

```ts
leaveGroup(): void
```

Defined in: fivem/models/Ped.d.ts:131

#### Returns

`void`

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

### openParachute()

```ts
openParachute(): void
```

Defined in: fivem/models/Ped.d.ts:155

#### Returns

`void`

***

### playAmbientSpeed()

```ts
playAmbientSpeed(
   speechName, 
   voiceName?, 
   modifier?): void
```

Defined in: fivem/models/Ped.d.ts:132

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `speechName` | `string` |
| `voiceName`? | `string` |
| `modifier`? | [`SpeechModifier`](../enumerations/SpeechModifier.md) |

#### Returns

`void`

***

### ragdoll()

```ts
ragdoll(duration?, ragdollType?): void
```

Defined in: fivem/models/Ped.d.ts:151

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `duration`? | `number` |
| `ragdollType`? | [`RagdollType`](../enumerations/RagdollType.md) |

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

### removeAllWeapons()

```ts
removeAllWeapons(): void
```

Defined in: fivem/models/Ped.d.ts:147

#### Returns

`void`

***

### removeHelmet()

```ts
removeHelmet(instantly): void
```

Defined in: fivem/models/Ped.d.ts:154

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `instantly` | `boolean` |

#### Returns

`void`

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

### removeWeapon()

```ts
removeWeapon(weapon): void
```

Defined in: fivem/models/Ped.d.ts:146

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `weapon` | [`WeaponHash`](../enumerations/WeaponHash.md) |

#### Returns

`void`

***

### resetConfigFlag()

```ts
resetConfigFlag(flagId): void
```

Defined in: fivem/models/Ped.d.ts:158

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `flagId` | `number` |

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

### resetVisibleDamage()

```ts
resetVisibleDamage(): void
```

Defined in: fivem/models/Ped.d.ts:127

#### Returns

`void`

***

### resurrect()

```ts
resurrect(): void
```

Defined in: fivem/models/Ped.d.ts:126

#### Returns

`void`

***

### setComponentVariation()

```ts
setComponentVariation(
   componentId, 
   drawableId, 
   textureId, 
   paletteId?): void
```

Defined in: fivem/models/Ped.d.ts:162

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `componentId` | `number` |
| `drawableId` | `number` |
| `textureId` | `number` |
| `paletteId`? | `number` |

#### Returns

`void`

***

### setConfigFlag()

```ts
setConfigFlag(flagId, value): void
```

Defined in: fivem/models/Ped.d.ts:157

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `flagId` | `number` |
| `value` | `boolean` |

#### Returns

`void`

***

### setDefaultComponentVariation()

```ts
setDefaultComponentVariation(): void
```

Defined in: fivem/models/Ped.d.ts:164

#### Returns

`void`

***

### setEyeColor()

```ts
setEyeColor(color): void
```

Defined in: fivem/models/Ped.d.ts:180

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `color` | `number` |

#### Returns

`void`

***

### setHairColor()

```ts
setHairColor(color): void
```

Defined in: fivem/models/Ped.d.ts:183

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `color` | `number` |

#### Returns

`void`

***

### setHairColors()

```ts
setHairColors(primary, highlight): void
```

Defined in: fivem/models/Ped.d.ts:182

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `primary` | `number` |
| `highlight` | `number` |

#### Returns

`void`

***

### setHairHighlightColor()

```ts
setHairHighlightColor(color): void
```

Defined in: fivem/models/Ped.d.ts:185

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `color` | `number` |

#### Returns

`void`

***

### setHeadBlend()

```ts
setHeadBlend(
   shapeFirstID, 
   shapeSecondID, 
   shapeThirdID, 
   skinFirstID, 
   skinSecondID, 
   skinThirdID, 
   shapeMix, 
   skinMix, 
   thirdMix, 
   isParent?): void
```

Defined in: fivem/models/Ped.d.ts:195

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `shapeFirstID` | `number` |
| `shapeSecondID` | `number` |
| `shapeThirdID` | `number` |
| `skinFirstID` | `number` |
| `skinSecondID` | `number` |
| `skinThirdID` | `number` |
| `shapeMix` | `number` |
| `skinMix` | `number` |
| `thirdMix` | `number` |
| `isParent`? | `boolean` |

#### Returns

`void`

***

### setHeadOverlay()

```ts
setHeadOverlay(
   overlayId, 
   index, 
   opacity): void
```

Defined in: fivem/models/Ped.d.ts:191

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `overlayId` | `number` |
| `index` | `number` |
| `opacity` | `number` |

#### Returns

`void`

***

### setHeadOverlayColor()

```ts
setHeadOverlayColor(overlayId, color): void
```

Defined in: fivem/models/Ped.d.ts:194

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `overlayId` | `number` |
| `color` | `number` |

#### Returns

`void`

***

### setHeadOverlayOpacity()

```ts
setHeadOverlayOpacity(overlayId, opacity): void
```

Defined in: fivem/models/Ped.d.ts:193

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `overlayId` | `number` |
| `opacity` | `number` |

#### Returns

`void`

***

### setHeadOverlayValue()

```ts
setHeadOverlayValue(overlayId, value): void
```

Defined in: fivem/models/Ped.d.ts:189

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `overlayId` | `number` |
| `value` | `number` |

#### Returns

`void`

***

### setHelmetPropIndex()

```ts
setHelmetPropIndex(propIndex): void
```

Defined in: fivem/models/Ped.d.ts:179

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `propIndex` | `number` |

#### Returns

`void`

***

### setIntoVehicle()

```ts
setIntoVehicle(vehicle, seat): void
```

Defined in: fivem/models/Ped.d.ts:118

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `vehicle` | [`Vehicle`](Vehicle.md) |
| `seat` | [`VehicleSeat`](../enumerations/VehicleSeat.md) |

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

### setPropIndex()

```ts
setPropIndex(
   propId, 
   drawableId, 
   textureId, 
   attach?): void
```

Defined in: fivem/models/Ped.d.ts:170

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `propId` | `number` |
| `drawableId` | `number` |
| `textureId` | `number` |
| `attach`? | `boolean` |

#### Returns

`void`

***

### setRandomComponentVariation()

```ts
setRandomComponentVariation(): void
```

Defined in: fivem/models/Ped.d.ts:163

#### Returns

`void`

***

### setRandomProps()

```ts
setRandomProps(): void
```

Defined in: fivem/models/Ped.d.ts:169

#### Returns

`void`

***

### exists()

```ts
static exists(ped): boolean
```

Defined in: fivem/models/Ped.d.ts:10

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `ped` | [`Ped`](Ped.md) |

#### Returns

`boolean`

***

### fromHandle()

```ts
static fromHandle(handle): null | Ped
```

Defined in: fivem/models/Ped.d.ts:11

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `handle` | `number` |

#### Returns

`null` \| [`Ped`](Ped.md)

***

### fromNetworkId()

```ts
static fromNetworkId(networkId): null | Ped
```

Defined in: fivem/models/Ped.d.ts:12

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `networkId` | `number` |

#### Returns

`null` \| [`Ped`](Ped.md)

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
