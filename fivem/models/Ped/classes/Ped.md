[@nativewrappers/fivem](../../../../README.md) / [fivem/models/Ped](../README.md) / Ped

# Class: Ped

Defined in: lib/fivem/models/Ped.d.ts:18

## Extends

- [`BaseEntity`](../../BaseEntity/classes/BaseEntity.md)

## Constructors

### Constructor

```ts
new Ped(handle): Ped;
```

Defined in: lib/fivem/models/Ped.d.ts:27

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
| <a id="bones"></a> `bones?` | `protected` | [`PedBoneCollection`](../../PedBoneCollection/classes/PedBoneCollection.md) | [`BaseEntity`](../../BaseEntity/classes/BaseEntity.md).[`bones`](../../BaseEntity/classes/BaseEntity.md#bones) | - | lib/fivem/models/Ped.d.ts:23 |
| <a id="handle"></a> `handle` | `protected` | `number` | - | [`BaseEntity`](../../BaseEntity/classes/BaseEntity.md).[`handle`](../../BaseEntity/classes/BaseEntity.md#handle) | lib/fivem/models/BaseEntity.d.ts:13 |
| <a id="netid"></a> `netId` | `protected` | `null` \| `number` | - | [`BaseEntity`](../../BaseEntity/classes/BaseEntity.md).[`netId`](../../BaseEntity/classes/BaseEntity.md#netid) | lib/fivem/models/BaseEntity.d.ts:15 |
| <a id="statebagcookies"></a> `stateBagCookies` | `protected` | `number`[] | - | [`BaseEntity`](../../BaseEntity/classes/BaseEntity.md).[`stateBagCookies`](../../BaseEntity/classes/BaseEntity.md#statebagcookies) | lib/fivem/models/BaseEntity.d.ts:14 |
| <a id="type"></a> `type` | `protected` | `ClassTypes` | [`BaseEntity`](../../BaseEntity/classes/BaseEntity.md).[`type`](../../BaseEntity/classes/BaseEntity.md#type) | - | lib/fivem/models/Ped.d.ts:22 |

## Accessors

### Accuracy

#### Get Signature

```ts
get Accuracy(): number;
```

Defined in: lib/fivem/models/Ped.d.ts:34

##### Returns

`number`

#### Set Signature

```ts
set Accuracy(accuracy): void;
```

Defined in: lib/fivem/models/Ped.d.ts:35

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
get Armor(): number;
```

Defined in: lib/fivem/models/Ped.d.ts:32

##### Returns

`number`

#### Set Signature

```ts
set Armor(amount): void;
```

Defined in: lib/fivem/models/Ped.d.ts:33

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
get AttachedBlip(): null | Blip;
```

Defined in: lib/fivem/models/BaseEntity.d.ts:119

##### Returns

`null` \| [`Blip`](../../../Blip/classes/Blip.md)

#### Inherited from

[`BaseEntity`](../../BaseEntity/classes/BaseEntity.md).[`AttachedBlip`](../../BaseEntity/classes/BaseEntity.md#attachedblip)

***

### BlockPermanentEvents

#### Set Signature

```ts
set BlockPermanentEvents(block): void;
```

Defined in: lib/fivem/models/Ped.d.ts:122

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
get Bones(): PedBoneCollection;
```

Defined in: lib/fivem/models/Ped.d.ts:147

##### Returns

[`PedBoneCollection`](../../PedBoneCollection/classes/PedBoneCollection.md)

#### Overrides

[`BaseEntity`](../../BaseEntity/classes/BaseEntity.md).[`Bones`](../../BaseEntity/classes/BaseEntity.md#bones-1)

***

### CanRagdoll

#### Get Signature

```ts
get CanRagdoll(): boolean;
```

Defined in: lib/fivem/models/Ped.d.ts:158

##### Returns

`boolean`

#### Set Signature

```ts
set CanRagdoll(value): void;
```

Defined in: lib/fivem/models/Ped.d.ts:159

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
get CurrentVehicle(): null | Vehicle;
```

Defined in: lib/fivem/models/Ped.d.ts:47

##### Returns

`null` \| [`Vehicle`](../../Vehicle/classes/Vehicle.md)

***

### DeathCause

#### Get Signature

```ts
get DeathCause(): number;
```

Defined in: lib/fivem/models/Ped.d.ts:120

##### Returns

`number`

***

### DrivingSpeed

#### Set Signature

```ts
set DrivingSpeed(value): void;
```

Defined in: lib/fivem/models/Ped.d.ts:115

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
set DrivingStyle(style): void;
```

Defined in: lib/fivem/models/Ped.d.ts:116

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `style` | [`DrivingStyle`](../../../enums/Driving/enumerations/DrivingStyle.md) |

##### Returns

`void`

***

### DropsWeaponsOnDeath

#### Set Signature

```ts
set DropsWeaponsOnDeath(value): void;
```

Defined in: lib/fivem/models/Ped.d.ts:114

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
set FiringPattern(value): void;
```

Defined in: lib/fivem/models/Ped.d.ts:113

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | [`FiringPattern`](../../../enums/FiringPattern/enumerations/FiringPattern.md) |

##### Returns

`void`

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

### Gender

#### Get Signature

```ts
get Gender(): Gender;
```

Defined in: lib/fivem/models/Ped.d.ts:31

##### Returns

[`Gender`](../../../enums/Gender/enumerations/Gender.md)

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

Defined in: lib/fivem/models/Ped.d.ts:36

##### Returns

`number`

#### Set Signature

```ts
set Health(amount): void;
```

Defined in: lib/fivem/models/Ped.d.ts:37

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `amount` | `number` |

##### Returns

`void`

#### Overrides

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

### IsAiming

#### Get Signature

```ts
get IsAiming(): boolean;
```

Defined in: lib/fivem/models/Ped.d.ts:103

##### Returns

`boolean`

***

### IsAimingFromCover

#### Get Signature

```ts
get IsAimingFromCover(): boolean;
```

Defined in: lib/fivem/models/Ped.d.ts:110

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

### IsAmbientSpeechEnabled

#### Get Signature

```ts
get IsAmbientSpeechEnabled(): boolean;
```

Defined in: lib/fivem/models/Ped.d.ts:99

##### Returns

`boolean`

***

### IsAmbientSpeechPlaying

#### Get Signature

```ts
get IsAmbientSpeechPlaying(): boolean;
```

Defined in: lib/fivem/models/Ped.d.ts:96

##### Returns

`boolean`

***

### IsAnySpeechPlaying

#### Get Signature

```ts
get IsAnySpeechPlaying(): boolean;
```

Defined in: lib/fivem/models/Ped.d.ts:98

##### Returns

`boolean`

***

### IsBeingJacked

#### Get Signature

```ts
get IsBeingJacked(): boolean;
```

Defined in: lib/fivem/models/Ped.d.ts:88

##### Returns

`boolean`

***

### IsBeingStealthKilled

#### Get Signature

```ts
get IsBeingStealthKilled(): boolean;
```

Defined in: lib/fivem/models/Ped.d.ts:108

##### Returns

`boolean`

***

### IsBeingStunned

#### Get Signature

```ts
get IsBeingStunned(): boolean;
```

Defined in: lib/fivem/models/Ped.d.ts:107

##### Returns

`boolean`

***

### IsClimbing

#### Get Signature

```ts
get IsClimbing(): boolean;
```

Defined in: lib/fivem/models/Ped.d.ts:65

##### Returns

`boolean`

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

### IsCuffed

#### Get Signature

```ts
get IsCuffed(): boolean;
```

Defined in: lib/fivem/models/Ped.d.ts:57

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

### IsDiving

#### Get Signature

```ts
get IsDiving(): boolean;
```

Defined in: lib/fivem/models/Ped.d.ts:72

##### Returns

`boolean`

***

### IsDoingDriveby

#### Get Signature

```ts
get IsDoingDriveby(): boolean;
```

Defined in: lib/fivem/models/Ped.d.ts:105

##### Returns

`boolean`

***

### IsDrunk

#### Set Signature

```ts
set IsDrunk(isDrunk): void;
```

Defined in: lib/fivem/models/Ped.d.ts:117

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
get IsDucking(): boolean;
```

Defined in: lib/fivem/models/Ped.d.ts:63

##### Returns

`boolean`

#### Set Signature

```ts
set IsDucking(value): void;
```

Defined in: lib/fivem/models/Ped.d.ts:62

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
set IsEnemy(value): void;
```

Defined in: lib/fivem/models/Ped.d.ts:54

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
get IsFalling(): boolean;
```

Defined in: lib/fivem/models/Ped.d.ts:67

##### Returns

`boolean`

***

### IsFleeing

#### Get Signature

```ts
get IsFleeing(): boolean;
```

Defined in: lib/fivem/models/Ped.d.ts:92

##### Returns

`boolean`

***

### IsGettingIntoAVehicle

#### Get Signature

```ts
get IsGettingIntoAVehicle(): boolean;
```

Defined in: lib/fivem/models/Ped.d.ts:89

##### Returns

`boolean`

***

### IsGettingUp

#### Get Signature

```ts
get IsGettingUp(): boolean;
```

Defined in: lib/fivem/models/Ped.d.ts:64

##### Returns

`boolean`

***

### IsGoingIntoCover

#### Get Signature

```ts
get IsGoingIntoCover(): boolean;
```

Defined in: lib/fivem/models/Ped.d.ts:106

##### Returns

`boolean`

***

### IsHuman

#### Get Signature

```ts
get IsHuman(): boolean;
```

Defined in: lib/fivem/models/Ped.d.ts:53

##### Returns

`boolean`

***

### IsIdle

#### Get Signature

```ts
get IsIdle(): boolean;
```

Defined in: lib/fivem/models/Ped.d.ts:60

##### Returns

`boolean`

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

### IsInBoat

#### Get Signature

```ts
get IsInBoat(): boolean;
```

Defined in: lib/fivem/models/Ped.d.ts:85

##### Returns

`boolean`

***

### IsInCombat

#### Get Signature

```ts
get IsInCombat(): boolean;
```

Defined in: lib/fivem/models/Ped.d.ts:93

##### Returns

`boolean`

***

### IsInCoverFacingLeft

#### Get Signature

```ts
get IsInCoverFacingLeft(): boolean;
```

Defined in: lib/fivem/models/Ped.d.ts:112

##### Returns

`boolean`

***

### IsInFlyingVehicle

#### Get Signature

```ts
get IsInFlyingVehicle(): boolean;
```

Defined in: lib/fivem/models/Ped.d.ts:84

##### Returns

`boolean`

***

### IsInGroup

#### Get Signature

```ts
get IsInGroup(): boolean;
```

Defined in: lib/fivem/models/Ped.d.ts:138

##### Returns

`boolean`

***

### IsInHeli

#### Get Signature

```ts
get IsInHeli(): boolean;
```

Defined in: lib/fivem/models/Ped.d.ts:82

##### Returns

`boolean`

***

### IsInjured

#### Get Signature

```ts
get IsInjured(): boolean;
```

Defined in: lib/fivem/models/Ped.d.ts:91

##### Returns

`boolean`

***

### IsInMeleeCombat

#### Get Signature

```ts
get IsInMeleeCombat(): boolean;
```

Defined in: lib/fivem/models/Ped.d.ts:94

##### Returns

`boolean`

***

### IsInParachuteFreeFall

#### Get Signature

```ts
get IsInParachuteFreeFall(): boolean;
```

Defined in: lib/fivem/models/Ped.d.ts:73

##### Returns

`boolean`

***

### IsInPlane

#### Get Signature

```ts
get IsInPlane(): boolean;
```

Defined in: lib/fivem/models/Ped.d.ts:83

##### Returns

`boolean`

***

### IsInPoliceVehicle

#### Get Signature

```ts
get IsInPoliceVehicle(): boolean;
```

Defined in: lib/fivem/models/Ped.d.ts:86

##### Returns

`boolean`

***

### IsInStealthMode

#### Get Signature

```ts
get IsInStealthMode(): boolean;
```

Defined in: lib/fivem/models/Ped.d.ts:95

##### Returns

`boolean`

***

### IsInSub

#### Get Signature

```ts
get IsInSub(): boolean;
```

Defined in: lib/fivem/models/Ped.d.ts:79

##### Returns

`boolean`

***

### IsInTaxi

#### Get Signature

```ts
get IsInTaxi(): boolean;
```

Defined in: lib/fivem/models/Ped.d.ts:80

##### Returns

`boolean`

***

### IsInTrain

#### Get Signature

```ts
get IsInTrain(): boolean;
```

Defined in: lib/fivem/models/Ped.d.ts:81

##### Returns

`boolean`

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

### IsJacking

#### Get Signature

```ts
get IsJacking(): boolean;
```

Defined in: lib/fivem/models/Ped.d.ts:87

##### Returns

`boolean`

***

### IsJumping

#### Get Signature

```ts
get IsJumping(): boolean;
```

Defined in: lib/fivem/models/Ped.d.ts:66

##### Returns

`boolean`

***

### IsJumpingOutOfVehicle

#### Get Signature

```ts
get IsJumpingOutOfVehicle(): boolean;
```

Defined in: lib/fivem/models/Ped.d.ts:50

##### Returns

`boolean`

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

### IsOnBike

#### Get Signature

```ts
get IsOnBike(): boolean;
```

Defined in: lib/fivem/models/Ped.d.ts:77

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

### IsOnFoot

#### Get Signature

```ts
get IsOnFoot(): boolean;
```

Defined in: lib/fivem/models/Ped.d.ts:78

##### Returns

`boolean`

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

### IsPainAudioEnabled

#### Set Signature

```ts
set IsPainAudioEnabled(value): void;
```

Defined in: lib/fivem/models/Ped.d.ts:100

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
get IsPerformingStealthKill(): boolean;
```

Defined in: lib/fivem/models/Ped.d.ts:109

##### Returns

`boolean`

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

### IsPlantingBomb

#### Get Signature

```ts
get IsPlantingBomb(): boolean;
```

Defined in: lib/fivem/models/Ped.d.ts:101

##### Returns

`boolean`

***

### IsPlayer

#### Get Signature

```ts
get IsPlayer(): boolean;
```

Defined in: lib/fivem/models/Ped.d.ts:56

##### Returns

`boolean`

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

### IsPriorityTargetForEnemies

#### Set Signature

```ts
set IsPriorityTargetForEnemies(value): void;
```

Defined in: lib/fivem/models/Ped.d.ts:55

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
get IsProne(): boolean;
```

Defined in: lib/fivem/models/Ped.d.ts:61

##### Returns

`boolean`

***

### IsRagdoll

#### Get Signature

```ts
get IsRagdoll(): boolean;
```

Defined in: lib/fivem/models/Ped.d.ts:59

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

### IsReloading

#### Get Signature

```ts
get IsReloading(): boolean;
```

Defined in: lib/fivem/models/Ped.d.ts:104

##### Returns

`boolean`

***

### IsRunning

#### Get Signature

```ts
get IsRunning(): boolean;
```

Defined in: lib/fivem/models/Ped.d.ts:70

##### Returns

`boolean`

***

### IsScriptedSpeechPlaying

#### Get Signature

```ts
get IsScriptedSpeechPlaying(): boolean;
```

Defined in: lib/fivem/models/Ped.d.ts:97

##### Returns

`boolean`

***

### IsShooting

#### Get Signature

```ts
get IsShooting(): boolean;
```

Defined in: lib/fivem/models/Ped.d.ts:102

##### Returns

`boolean`

***

### IsSprinting

#### Get Signature

```ts
get IsSprinting(): boolean;
```

Defined in: lib/fivem/models/Ped.d.ts:71

##### Returns

`boolean`

***

### IsStopped

#### Get Signature

```ts
get IsStopped(): boolean;
```

Defined in: lib/fivem/models/Ped.d.ts:68

##### Returns

`boolean`

***

### IsSwimming

#### Get Signature

```ts
get IsSwimming(): boolean;
```

Defined in: lib/fivem/models/Ped.d.ts:74

##### Returns

`boolean`

***

### IsSwimmingUnderWater

#### Get Signature

```ts
get IsSwimmingUnderWater(): boolean;
```

Defined in: lib/fivem/models/Ped.d.ts:75

##### Returns

`boolean`

***

### IsTryingToEnterALockedVehicle

#### Get Signature

```ts
get IsTryingToEnterALockedVehicle(): boolean;
```

Defined in: lib/fivem/models/Ped.d.ts:90

##### Returns

`boolean`

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

### IsVaulting

#### Get Signature

```ts
get IsVaulting(): boolean;
```

Defined in: lib/fivem/models/Ped.d.ts:76

##### Returns

`boolean`

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

### IsWalking

#### Get Signature

```ts
get IsWalking(): boolean;
```

Defined in: lib/fivem/models/Ped.d.ts:69

##### Returns

`boolean`

***

### IsWearingHelmet

#### Get Signature

```ts
get IsWearingHelmet(): boolean;
```

Defined in: lib/fivem/models/Ped.d.ts:58

##### Returns

`boolean`

***

### LastVehicle

#### Get Signature

```ts
get LastVehicle(): null | Vehicle;
```

Defined in: lib/fivem/models/Ped.d.ts:48

##### Returns

`null` \| [`Vehicle`](../../Vehicle/classes/Vehicle.md)

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

### MaxDrivingSpeed

#### Set Signature

```ts
set MaxDrivingSpeed(value): void;
```

Defined in: lib/fivem/models/Ped.d.ts:52

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
get MaxHealth(): number;
```

Defined in: lib/fivem/models/Ped.d.ts:38

##### Returns

`number`

#### Set Signature

```ts
set MaxHealth(amount): void;
```

Defined in: lib/fivem/models/Ped.d.ts:39

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `amount` | `number` |

##### Returns

`void`

#### Overrides

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

### Money

#### Get Signature

```ts
get Money(): number;
```

Defined in: lib/fivem/models/Ped.d.ts:29

##### Returns

`number`

#### Set Signature

```ts
set Money(amount): void;
```

Defined in: lib/fivem/models/Ped.d.ts:30

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
set MotionBlur(value): void;
```

Defined in: lib/fivem/models/Ped.d.ts:118

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

### NeverLeavesGroup

#### Set Signature

```ts
set NeverLeavesGroup(value): void;
```

Defined in: lib/fivem/models/Ped.d.ts:139

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

### Player

#### Get Signature

```ts
get Player(): null | Player;
```

Defined in: lib/fivem/models/Ped.d.ts:28

##### Returns

`null` \| [`Player`](../../Player/classes/Player.md)

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

### SeatIndex

#### Get Signature

```ts
get SeatIndex(): VehicleSeat;
```

Defined in: lib/fivem/models/Ped.d.ts:46

##### Returns

[`VehicleSeat`](../../../enums/Vehicle/enumerations/VehicleSeat.md)

***

### ShootRate

#### Set Signature

```ts
set ShootRate(value): void;
```

Defined in: lib/fivem/models/Ped.d.ts:43

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
get Speed(): number;
```

Defined in: lib/fivem/models/BaseEntity.d.ts:39

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

Defined in: lib/fivem/models/BaseEntity.d.ts:28

##### Returns

[`StateBagInterface`](../../../../redm/definitions/Citizen/interfaces/StateBagInterface.md)

#### Inherited from

[`BaseEntity`](../../BaseEntity/classes/BaseEntity.md).[`State`](../../BaseEntity/classes/BaseEntity.md#state)

***

### StaysInVehicleWhenJacked

#### Set Signature

```ts
set StaysInVehicleWhenJacked(value): void;
```

Defined in: lib/fivem/models/Ped.d.ts:51

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
get SubmersionLevel(): number;
```

Defined in: lib/fivem/models/BaseEntity.d.ts:85

##### Returns

`number`

#### Inherited from

[`BaseEntity`](../../BaseEntity/classes/BaseEntity.md).[`SubmersionLevel`](../../BaseEntity/classes/BaseEntity.md#submersionlevel)

***

### Sweat

#### Set Signature

```ts
set Sweat(value): void;
```

Defined in: lib/fivem/models/Ped.d.ts:40

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
get Task(): Tasks;
```

Defined in: lib/fivem/models/Ped.d.ts:119

##### Returns

[`Tasks`](../../../Tasks/classes/Tasks.md)

***

### TaskSequenceProgress

#### Get Signature

```ts
get TaskSequenceProgress(): number;
```

Defined in: lib/fivem/models/Ped.d.ts:121

##### Returns

`number`

***

### VehicleTryingToEnter

#### Get Signature

```ts
get VehicleTryingToEnter(): null | Vehicle;
```

Defined in: lib/fivem/models/Ped.d.ts:49

##### Returns

`null` \| [`Vehicle`](../../Vehicle/classes/Vehicle.md)

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

### Voice

#### Set Signature

```ts
set Voice(value): void;
```

Defined in: lib/fivem/models/Ped.d.ts:42

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
get WasKilledByStealth(): boolean;
```

Defined in: lib/fivem/models/Ped.d.ts:44

##### Returns

`boolean`

***

### WasKilledByTakedown

#### Get Signature

```ts
get WasKilledByTakedown(): boolean;
```

Defined in: lib/fivem/models/Ped.d.ts:45

##### Returns

`boolean`

***

### Weapons

#### Get Signature

```ts
get Weapons(): WeaponCollection;
```

Defined in: lib/fivem/models/Ped.d.ts:153

Ped Weapons

##### Returns

[`WeaponCollection`](../../../weapon/WeaponCollection/classes/WeaponCollection.md)

***

### WetnessHeight

#### Set Signature

```ts
set WetnessHeight(value): void;
```

Defined in: lib/fivem/models/Ped.d.ts:41

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

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

### applyDamage()

```ts
applyDamage(damageAmount, armorFirst?): void;
```

Defined in: lib/fivem/models/Ped.d.ts:142

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `damageAmount` | `number` |
| `armorFirst?` | `boolean` |

#### Returns

`void`

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

### cancelRagdoll()

```ts
cancelRagdoll(): void;
```

Defined in: lib/fivem/models/Ped.d.ts:161

#### Returns

`void`

***

### clearAllProps()

```ts
clearAllProps(): void;
```

Defined in: lib/fivem/models/Ped.d.ts:181

#### Returns

`void`

***

### clearBloodDamage()

```ts
clearBloodDamage(): void;
```

Defined in: lib/fivem/models/Ped.d.ts:137

#### Returns

`void`

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

Defined in: lib/fivem/models/Ped.d.ts:146

#### Returns

`void`

#### Overrides

[`BaseEntity`](../../BaseEntity/classes/BaseEntity.md).[`clearLastWeaponDamage`](../../BaseEntity/classes/BaseEntity.md#clearlastweapondamage)

***

### clearProp()

```ts
clearProp(propId): void;
```

Defined in: lib/fivem/models/Ped.d.ts:180

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `propId` | `number` |

#### Returns

`void`

***

### clone()

```ts
clone(): Ped;
```

Defined in: lib/fivem/models/Ped.d.ts:168

#### Returns

`Ped`

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

### exists()

```ts
exists(): boolean;
```

Defined in: lib/fivem/models/Ped.d.ts:169

#### Returns

`boolean`

#### Overrides

[`BaseEntity`](../../BaseEntity/classes/BaseEntity.md).[`exists`](../../BaseEntity/classes/BaseEntity.md#exists)

***

### finalizeHeadBlend()

```ts
finalizeHeadBlend(): void;
```

Defined in: lib/fivem/models/Ped.d.ts:206

#### Returns

`void`

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

### getConfigFlag()

```ts
getConfigFlag(flagId): boolean;
```

Defined in: lib/fivem/models/Ped.d.ts:165

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `flagId` | `number` |

#### Returns

`boolean`

***

### getDrawableVariation()

```ts
getDrawableVariation(componentId): number;
```

Defined in: lib/fivem/models/Ped.d.ts:174

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `componentId` | `number` |

#### Returns

`number`

***

### getEntityAttachedTo()

```ts
getEntityAttachedTo(): Entity;
```

Defined in: lib/fivem/models/Ped.d.ts:208

#### Returns

[`Entity`](../../Entity/type-aliases/Entity.md)

#### Overrides

[`BaseEntity`](../../BaseEntity/classes/BaseEntity.md).[`getEntityAttachedTo`](../../BaseEntity/classes/BaseEntity.md#getentityattachedto)

***

### getEyeColor()

```ts
getEyeColor(): number;
```

Defined in: lib/fivem/models/Ped.d.ts:190

#### Returns

`number`

***

### getHairColor()

```ts
getHairColor(): number;
```

Defined in: lib/fivem/models/Ped.d.ts:193

#### Returns

`number`

***

### getHairHighlightColor()

```ts
getHairHighlightColor(): number;
```

Defined in: lib/fivem/models/Ped.d.ts:195

#### Returns

`number`

***

### getHeadBlend()

```ts
getHeadBlend(): 
  | null
  | [number, number, number, number, number, number, number, number, number, boolean];
```

Defined in: lib/fivem/models/Ped.d.ts:205

#### Returns

  \| `null`
  \| \[`number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`, `boolean`\]

***

### getHeadOverlay()

```ts
getHeadOverlay(overlayId): null | [number, number, number, number, number];
```

Defined in: lib/fivem/models/Ped.d.ts:199

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `overlayId` | `number` |

#### Returns

`null` \| \[`number`, `number`, `number`, `number`, `number`\]

***

### getHeadOverlayNum()

```ts
getHeadOverlayNum(overlayId): number;
```

Defined in: lib/fivem/models/Ped.d.ts:196

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `overlayId` | `number` |

#### Returns

`number`

***

### getHeadOverlayOpacity()

```ts
getHeadOverlayOpacity(overlayId): number;
```

Defined in: lib/fivem/models/Ped.d.ts:201

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `overlayId` | `number` |

#### Returns

`number`

***

### getHeadOverlayValue()

```ts
getHeadOverlayValue(overlayId): number;
```

Defined in: lib/fivem/models/Ped.d.ts:197

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `overlayId` | `number` |

#### Returns

`number`

***

### getJacker()

```ts
getJacker(): Ped;
```

Defined in: lib/fivem/models/Ped.d.ts:130

#### Returns

`Ped`

***

### getJackTarget()

```ts
getJackTarget(): Ped;
```

Defined in: lib/fivem/models/Ped.d.ts:131

#### Returns

`Ped`

***

### getKiller()

```ts
getKiller(): Entity;
```

Defined in: lib/fivem/models/Ped.d.ts:133

#### Returns

[`Entity`](../../Entity/type-aliases/Entity.md)

***

### getLastWeaponImpactPosition()

```ts
getLastWeaponImpactPosition(): Vector3;
```

Defined in: lib/fivem/models/Ped.d.ts:157

#### Returns

`Vector3`

***

### getMeleeTarget()

```ts
getMeleeTarget(): Ped;
```

Defined in: lib/fivem/models/Ped.d.ts:132

#### Returns

`Ped`

***

### getNumberOfDrawableVariations()

```ts
getNumberOfDrawableVariations(componentId): number;
```

Defined in: lib/fivem/models/Ped.d.ts:175

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `componentId` | `number` |

#### Returns

`number`

***

### getNumberOfPropDrawableVariations()

```ts
getNumberOfPropDrawableVariations(propId): number;
```

Defined in: lib/fivem/models/Ped.d.ts:185

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `propId` | `number` |

#### Returns

`number`

***

### getNumberOfPropTextureVariations()

```ts
getNumberOfPropTextureVariations(propId, drawableId?): number;
```

Defined in: lib/fivem/models/Ped.d.ts:186

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `propId` | `number` |
| `drawableId?` | `number` |

#### Returns

`number`

***

### getNumberTextureVariations()

```ts
getNumberTextureVariations(componentId, drawableId?): number;
```

Defined in: lib/fivem/models/Ped.d.ts:177

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `componentId` | `number` |
| `drawableId?` | `number` |

#### Returns

`number`

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

### getPropIndex()

```ts
getPropIndex(propId): number;
```

Defined in: lib/fivem/models/Ped.d.ts:184

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `propId` | `number` |

#### Returns

`number`

***

### getPropTextureIndex()

```ts
getPropTextureIndex(propId): number;
```

Defined in: lib/fivem/models/Ped.d.ts:187

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `propId` | `number` |

#### Returns

`number`

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

### getTextureVariation()

```ts
getTextureVariation(componentId): number;
```

Defined in: lib/fivem/models/Ped.d.ts:176

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
   textureIndex): void;
```

Defined in: lib/fivem/models/Ped.d.ts:162

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `canBeRemovedByPed` | `boolean` |
| `helmetType` | [`HelmetType`](../../../enums/HelmetType/enumerations/HelmetType.md) |
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
   equipNow?): void;
```

Defined in: lib/fivem/models/Ped.d.ts:154

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `weapon` | [`WeaponHash`](../../../hashes/WeaponHash/enumerations/WeaponHash.md) |
| `ammoCount?` | `number` |
| `isHidden?` | `boolean` |
| `equipNow?` | `boolean` |

#### Returns

`void`

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

Defined in: lib/fivem/models/Ped.d.ts:145

#### Returns

`boolean`

#### Overrides

[`BaseEntity`](../../BaseEntity/classes/BaseEntity.md).[`hasBeenDamagedByAnyMeleeWeapon`](../../BaseEntity/classes/BaseEntity.md#hasbeendamagedbyanymeleeweapon)

***

### hasBeenDamagedByAnyWeapon()

```ts
hasBeenDamagedByAnyWeapon(): boolean;
```

Defined in: lib/fivem/models/Ped.d.ts:144

#### Returns

`boolean`

#### Overrides

[`BaseEntity`](../../BaseEntity/classes/BaseEntity.md).[`hasBeenDamagedByAnyWeapon`](../../BaseEntity/classes/BaseEntity.md#hasbeendamagedbyanyweapon)

***

### hasBeenDamagedByWeapon()

```ts
hasBeenDamagedByWeapon(weapon): boolean;
```

Defined in: lib/fivem/models/Ped.d.ts:143

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `weapon` | [`WeaponHash`](../../../hashes/WeaponHash/enumerations/WeaponHash.md) |

#### Returns

`boolean`

#### Overrides

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

### hasHeadBlendFinished()

```ts
hasHeadBlendFinished(): boolean;
```

Defined in: lib/fivem/models/Ped.d.ts:207

#### Returns

`boolean`

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

### isFacingPed()

```ts
isFacingPed(ped, angle?): boolean;
```

Defined in: lib/fivem/models/Ped.d.ts:170

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `ped` | `Ped` |
| `angle?` | `number` |

#### Returns

`boolean`

***

### isHeadtracking()

```ts
isHeadtracking(entity): boolean;
```

Defined in: lib/fivem/models/Ped.d.ts:128

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `entity` | [`BaseEntity`](../../BaseEntity/classes/BaseEntity.md) |

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

### isInAnyVehicle()

```ts
isInAnyVehicle(): boolean;
```

Defined in: lib/fivem/models/Ped.d.ts:123

#### Returns

`boolean`

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

### isInCombatAgainst()

```ts
isInCombatAgainst(target): boolean;
```

Defined in: lib/fivem/models/Ped.d.ts:129

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `target` | `Ped` |

#### Returns

`boolean`

***

### isInCover()

```ts
isInCover(expectUseWeapon?): boolean;
```

Defined in: lib/fivem/models/Ped.d.ts:111

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `expectUseWeapon?` | `boolean` |

#### Returns

`boolean`

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

### isInVehicle()

```ts
isInVehicle(vehicle): boolean;
```

Defined in: lib/fivem/models/Ped.d.ts:124

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `vehicle` | [`Vehicle`](../../Vehicle/classes/Vehicle.md) |

#### Returns

`boolean`

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

### isPropValid()

```ts
isPropValid(
   propId, 
   drawableId, 
   textureId): boolean;
```

Defined in: lib/fivem/models/Ped.d.ts:183

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
isSittingInAnyVehicle(): boolean;
```

Defined in: lib/fivem/models/Ped.d.ts:125

#### Returns

`boolean`

***

### isSittingInVehicle()

```ts
isSittingInVehicle(vehicle): boolean;
```

Defined in: lib/fivem/models/Ped.d.ts:126

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `vehicle` | [`Vehicle`](../../Vehicle/classes/Vehicle.md) |

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

### kill()

```ts
kill(): void;
```

Defined in: lib/fivem/models/Ped.d.ts:134

#### Returns

`void`

***

### knockPropOff()

```ts
knockPropOff(
   p1, 
   p2, 
   p3, 
   p4): void;
```

Defined in: lib/fivem/models/Ped.d.ts:182

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
leaveGroup(): void;
```

Defined in: lib/fivem/models/Ped.d.ts:140

#### Returns

`void`

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

### openParachute()

```ts
openParachute(): void;
```

Defined in: lib/fivem/models/Ped.d.ts:164

#### Returns

`void`

***

### playAmbientSpeed()

```ts
playAmbientSpeed(
   speechName, 
   voiceName?, 
   modifier?): void;
```

Defined in: lib/fivem/models/Ped.d.ts:141

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `speechName` | `string` |
| `voiceName?` | `string` |
| `modifier?` | [`SpeechModifier`](../../../enums/SpeechModifier/enumerations/SpeechModifier.md) |

#### Returns

`void`

***

### ragdoll()

```ts
ragdoll(duration?, ragdollType?): void;
```

Defined in: lib/fivem/models/Ped.d.ts:160

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `duration?` | `number` |
| `ragdollType?` | [`RagdollType`](../../../enums/RagdollType/enumerations/RagdollType.md) |

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

### removeAllWeapons()

```ts
removeAllWeapons(): void;
```

Defined in: lib/fivem/models/Ped.d.ts:156

#### Returns

`void`

***

### removeHelmet()

```ts
removeHelmet(instantly): void;
```

Defined in: lib/fivem/models/Ped.d.ts:163

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `instantly` | `boolean` |

#### Returns

`void`

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

### removeWeapon()

```ts
removeWeapon(weapon): void;
```

Defined in: lib/fivem/models/Ped.d.ts:155

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `weapon` | [`WeaponHash`](../../../hashes/WeaponHash/enumerations/WeaponHash.md) |

#### Returns

`void`

***

### resetConfigFlag()

```ts
resetConfigFlag(flagId): void;
```

Defined in: lib/fivem/models/Ped.d.ts:167

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `flagId` | `number` |

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

### resetVisibleDamage()

```ts
resetVisibleDamage(): void;
```

Defined in: lib/fivem/models/Ped.d.ts:136

#### Returns

`void`

***

### resurrect()

```ts
resurrect(): void;
```

Defined in: lib/fivem/models/Ped.d.ts:135

#### Returns

`void`

***

### setComponentVariation()

```ts
setComponentVariation(
   componentId, 
   drawableId, 
   textureId, 
   paletteId?): void;
```

Defined in: lib/fivem/models/Ped.d.ts:171

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `componentId` | `number` |
| `drawableId` | `number` |
| `textureId` | `number` |
| `paletteId?` | `number` |

#### Returns

`void`

***

### setConfigFlag()

```ts
setConfigFlag(flagId, value): void;
```

Defined in: lib/fivem/models/Ped.d.ts:166

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
setDefaultComponentVariation(): void;
```

Defined in: lib/fivem/models/Ped.d.ts:173

#### Returns

`void`

***

### setEyeColor()

```ts
setEyeColor(color): void;
```

Defined in: lib/fivem/models/Ped.d.ts:189

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `color` | `number` |

#### Returns

`void`

***

### setHairColor()

```ts
setHairColor(color): void;
```

Defined in: lib/fivem/models/Ped.d.ts:192

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `color` | `number` |

#### Returns

`void`

***

### setHairColors()

```ts
setHairColors(primary, highlight): void;
```

Defined in: lib/fivem/models/Ped.d.ts:191

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
setHairHighlightColor(color): void;
```

Defined in: lib/fivem/models/Ped.d.ts:194

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
   isParent?): void;
```

Defined in: lib/fivem/models/Ped.d.ts:204

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
| `isParent?` | `boolean` |

#### Returns

`void`

***

### setHeadOverlay()

```ts
setHeadOverlay(
   overlayId, 
   index, 
   opacity): void;
```

Defined in: lib/fivem/models/Ped.d.ts:200

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
setHeadOverlayColor(overlayId, color): void;
```

Defined in: lib/fivem/models/Ped.d.ts:203

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
setHeadOverlayOpacity(overlayId, opacity): void;
```

Defined in: lib/fivem/models/Ped.d.ts:202

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
setHeadOverlayValue(overlayId, value): void;
```

Defined in: lib/fivem/models/Ped.d.ts:198

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
setHelmetPropIndex(propIndex): void;
```

Defined in: lib/fivem/models/Ped.d.ts:188

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `propIndex` | `number` |

#### Returns

`void`

***

### setIntoVehicle()

```ts
setIntoVehicle(vehicle, seat): void;
```

Defined in: lib/fivem/models/Ped.d.ts:127

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `vehicle` | [`Vehicle`](../../Vehicle/classes/Vehicle.md) |
| `seat` | [`VehicleSeat`](../../../enums/Vehicle/enumerations/VehicleSeat.md) |

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

### setPropIndex()

```ts
setPropIndex(
   propId, 
   drawableId, 
   textureId, 
   attach?): void;
```

Defined in: lib/fivem/models/Ped.d.ts:179

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `propId` | `number` |
| `drawableId` | `number` |
| `textureId` | `number` |
| `attach?` | `boolean` |

#### Returns

`void`

***

### setRandomComponentVariation()

```ts
setRandomComponentVariation(): void;
```

Defined in: lib/fivem/models/Ped.d.ts:172

#### Returns

`void`

***

### setRandomProps()

```ts
setRandomProps(): void;
```

Defined in: lib/fivem/models/Ped.d.ts:178

#### Returns

`void`

***

### exists()

```ts
static exists(ped): boolean;
```

Defined in: lib/fivem/models/Ped.d.ts:19

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `ped` | `Ped` |

#### Returns

`boolean`

***

### fromHandle()

```ts
static fromHandle(handle): null | Ped;
```

Defined in: lib/fivem/models/Ped.d.ts:20

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `handle` | `number` |

#### Returns

`null` \| `Ped`

***

### fromNetworkId()

```ts
static fromNetworkId(networkId): null | Ped;
```

Defined in: lib/fivem/models/Ped.d.ts:21

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `networkId` | `number` |

#### Returns

`null` \| `Ped`
