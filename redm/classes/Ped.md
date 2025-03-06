[@nativewrappers/fivem](../../README.md) / [redm](../README.md) / Ped

# Class: Ped

Defined in: redm/entities/Ped.d.ts:8

## Extends

- `BaseEntity`

## Constructors

### new Ped()

```ts
new Ped(handle): Ped
```

Defined in: redm/entities/Ped.d.ts:10

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `handle` | `number` |

#### Returns

[`Ped`](Ped.md)

#### Overrides

```ts
BaseEntity.constructor
```

## Accessors

### Accuracy

#### Get Signature

```ts
get Accuracy(): number
```

Defined in: redm/entities/Ped.d.ts:42

##### Returns

`number`

#### Set Signature

```ts
set Accuracy(accuracy): void
```

Defined in: redm/entities/Ped.d.ts:43

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `accuracy` | `number` |

##### Returns

`void`

***

### Attributes

#### Get Signature

```ts
get Attributes(): Attributes
```

Defined in: redm/entities/Ped.d.ts:36

##### Returns

[`Attributes`](Attributes.md)

the [Attributes](Attributes.md) for the current ped

***

### CanBeKnockedOffVehicle

#### Get Signature

```ts
get CanBeKnockedOffVehicle(): boolean
```

Defined in: redm/entities/Ped.d.ts:44

##### Returns

`boolean`

***

### CanBeTargeted

#### Set Signature

```ts
set CanBeTargeted(toggle): void
```

Defined in: redm/entities/Ped.d.ts:93

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `toggle` | `boolean` |

##### Returns

`void`

***

### CrouchMovement

#### Get Signature

```ts
get CrouchMovement(): boolean
```

Defined in: redm/entities/Ped.d.ts:84

##### Returns

`boolean`

***

### CurrentVehicle

#### Get Signature

```ts
get CurrentVehicle(): null | Vehicle
```

Defined in: redm/entities/Ped.d.ts:158

##### Returns

`null` \| [`Vehicle`](Vehicle.md)

***

### DamageCleanliness

#### Get Signature

```ts
get DamageCleanliness(): eDamageCleanliness
```

Defined in: redm/entities/Ped.d.ts:90

##### Returns

[`eDamageCleanliness`](../enumerations/eDamageCleanliness.md)

#### Set Signature

```ts
set DamageCleanliness(cleanliness): void
```

Defined in: redm/entities/Ped.d.ts:91

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `cleanliness` | [`eDamageCleanliness`](../enumerations/eDamageCleanliness.md) |

##### Returns

`void`

***

### DefenseModifier

#### Set Signature

```ts
set DefenseModifier(amount): void
```

Defined in: redm/entities/Ped.d.ts:92

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `amount` | `number` |

##### Returns

`void`

***

### Exists

#### Get Signature

```ts
get Exists(): boolean
```

Defined in: redm/entities/BaseEntity.d.ts:37

##### Returns

`boolean`

Returns true if the entity handle is not 0 and exists in the game engine

#### Inherited from

```ts
BaseEntity.Exists
```

***

### Handle

#### Get Signature

```ts
get Handle(): number
```

Defined in: redm/entities/BaseEntity.d.ts:41

##### Returns

`number`

The entitys current handle.

#### Inherited from

```ts
BaseEntity.Handle
```

***

### Heading

#### Get Signature

```ts
get Heading(): number
```

Defined in: redm/entities/BaseEntity.d.ts:53

##### Returns

`number`

the heading of the current BaseEntity

#### Set Signature

```ts
set Heading(heading): void
```

Defined in: redm/entities/BaseEntity.d.ts:57

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `heading` | `number` | sets the entitys heading to the specified heading, this can be in the range of 0..360 |

##### Returns

`void`

#### Inherited from

```ts
BaseEntity.Heading
```

***

### Health

#### Get Signature

```ts
get Health(): number
```

Defined in: redm/entities/BaseEntity.d.ts:49

##### Returns

`number`

the amount of health the current BaseEntity has

#### Set Signature

```ts
set Health(amount): void
```

Defined in: redm/entities/BaseEntity.d.ts:45

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `amount` | `number` | the health to set the health to, setting to `0` will kill the entity, if using on a [Ped](Ped.md) you should check the MaxHealth before setting. |

##### Returns

`void`

#### Inherited from

```ts
BaseEntity.Health
```

***

### HearingRange

#### Set Signature

```ts
set HearingRange(value): void
```

Defined in: redm/entities/Ped.d.ts:78

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

##### Returns

`void`

***

### InVehicle

#### Get Signature

```ts
get InVehicle(): boolean
```

Defined in: redm/entities/Ped.d.ts:37

##### Returns

`boolean`

***

### IsBeingJacked

#### Get Signature

```ts
get IsBeingJacked(): boolean
```

Defined in: redm/entities/Ped.d.ts:82

##### Returns

`boolean`

***

### IsClimbing

#### Get Signature

```ts
get IsClimbing(): boolean
```

Defined in: redm/entities/Ped.d.ts:72

##### Returns

`boolean`

***

### IsClimbingLadder

#### Get Signature

```ts
get IsClimbingLadder(): boolean
```

Defined in: redm/entities/Ped.d.ts:73

##### Returns

`boolean`

***

### IsDamaged

#### Get Signature

```ts
get IsDamaged(): boolean
```

Defined in: redm/entities/Ped.d.ts:88

returns true if [DamageCleanliness](Ped.md#damagecleanliness) was ever lower than [eDamageCleanliness.Good](../enumerations/eDamageCleanliness.md#good)

##### Returns

`boolean`

#### Set Signature

```ts
set IsDamaged(damaged): void
```

Defined in: redm/entities/Ped.d.ts:89

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `damaged` | `boolean` |

##### Returns

`void`

***

### IsDiving

#### Get Signature

```ts
get IsDiving(): boolean
```

Defined in: redm/entities/Ped.d.ts:75

##### Returns

`boolean`

***

### IsFalling

#### Get Signature

```ts
get IsFalling(): boolean
```

Defined in: redm/entities/Ped.d.ts:69

##### Returns

`boolean`

***

### IsFatallyInjured

#### Get Signature

```ts
get IsFatallyInjured(): boolean
```

Defined in: redm/entities/Ped.d.ts:39

##### Returns

`boolean`

***

### IsHuman

#### Get Signature

```ts
get IsHuman(): boolean
```

Defined in: redm/entities/Ped.d.ts:46

##### Returns

`boolean`

***

### IsInAnyBoat

#### Get Signature

```ts
get IsInAnyBoat(): boolean
```

Defined in: redm/entities/Ped.d.ts:65

##### Returns

`boolean`

***

### IsInAnyHeli

#### Get Signature

```ts
get IsInAnyHeli(): boolean
```

Defined in: redm/entities/Ped.d.ts:66

##### Returns

`boolean`

***

### IsInAnyPlane

#### Get Signature

```ts
get IsInAnyPlane(): boolean
```

Defined in: redm/entities/Ped.d.ts:67

##### Returns

`boolean`

***

### IsInCombatRoll

#### Get Signature

```ts
get IsInCombatRoll(): boolean
```

Defined in: redm/entities/Ped.d.ts:83

##### Returns

`boolean`

***

### IsInFlyingVehicle

#### Get Signature

```ts
get IsInFlyingVehicle(): boolean
```

Defined in: redm/entities/Ped.d.ts:68

##### Returns

`boolean`

***

### IsInjured

#### Get Signature

```ts
get IsInjured(): boolean
```

Defined in: redm/entities/Ped.d.ts:38

##### Returns

`boolean`

***

### IsInteractingWithAnimal

#### Get Signature

```ts
get IsInteractingWithAnimal(): boolean
```

Defined in: redm/entities/Ped.d.ts:62

##### Returns

`boolean`

***

### IsJacking

#### Get Signature

```ts
get IsJacking(): boolean
```

Defined in: redm/entities/Ped.d.ts:80

##### Returns

`boolean`

***

### IsJumping

#### Get Signature

```ts
get IsJumping(): boolean
```

Defined in: redm/entities/Ped.d.ts:71

##### Returns

`boolean`

***

### IsMale

#### Get Signature

```ts
get IsMale(): boolean
```

Defined in: redm/entities/Ped.d.ts:45

##### Returns

`boolean`

***

### IsNetworked

#### Get Signature

```ts
get IsNetworked(): boolean
```

Defined in: redm/entities/BaseEntity.d.ts:33

##### Returns

`boolean`

`true` if the current entity is networked, false otherwise

#### Inherited from

```ts
BaseEntity.IsNetworked
```

***

### IsOnTopOfVehicle

#### Get Signature

```ts
get IsOnTopOfVehicle(): boolean
```

Defined in: redm/entities/Ped.d.ts:47

##### Returns

`boolean`

***

### IsOpeningADoor

#### Get Signature

```ts
get IsOpeningADoor(): boolean
```

Defined in: redm/entities/Ped.d.ts:76

##### Returns

`boolean`

***

### IsPlantingBomb

#### Get Signature

```ts
get IsPlantingBomb(): boolean
```

Defined in: redm/entities/Ped.d.ts:64

##### Returns

`boolean`

***

### IsPlayer

#### Get Signature

```ts
get IsPlayer(): boolean
```

Defined in: redm/entities/Ped.d.ts:40

##### Returns

`boolean`

***

### IsShooting

#### Get Signature

```ts
get IsShooting(): boolean
```

Defined in: redm/entities/Ped.d.ts:41

##### Returns

`boolean`

***

### IsSittingInAnyVehicle

#### Get Signature

```ts
get IsSittingInAnyVehicle(): boolean
```

Defined in: redm/entities/Ped.d.ts:63

##### Returns

`boolean`

***

### IsSliding

#### Get Signature

```ts
get IsSliding(): boolean
```

Defined in: redm/entities/Ped.d.ts:70

##### Returns

`boolean`

***

### IsStealthed

#### Get Signature

```ts
get IsStealthed(): boolean
```

Defined in: redm/entities/Ped.d.ts:79

##### Returns

`boolean`

***

### IsStunned

#### Get Signature

```ts
get IsStunned(): boolean
```

Defined in: redm/entities/Ped.d.ts:81

##### Returns

`boolean`

***

### IsVaulting

#### Get Signature

```ts
get IsVaulting(): boolean
```

Defined in: redm/entities/Ped.d.ts:74

##### Returns

`boolean`

***

### LeadingHorse

#### Get Signature

```ts
get LeadingHorse(): null | Ped
```

Defined in: redm/entities/Ped.d.ts:56

returns the horse that this ped is leading

##### Returns

`null` \| [`Ped`](Ped.md)

***

### MaxHealth

#### Get Signature

```ts
get MaxHealth(): number
```

Defined in: redm/entities/Ped.d.ts:32

##### Returns

`number`

the maximum health of the ped

#### Set Signature

```ts
set MaxHealth(amount): void
```

Defined in: redm/entities/Ped.d.ts:28

While this increases the peds max health, if used on a player it wont increase the max core value on the hud

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `amount` | `number` |

##### Returns

`void`

***

### Mount

#### Get Signature

```ts
get Mount(): null | Ped
```

Defined in: redm/entities/Ped.d.ts:52

##### Returns

`null` \| [`Ped`](Ped.md)

the last mount that this ped was on, or null if it doesn't exist

***

### NetworkId

#### Get Signature

```ts
get NetworkId(): number
```

Defined in: redm/entities/BaseEntity.d.ts:29

##### Returns

`number`

the network for the specified entity, this doesn't check if the entity is networked, you should use [BaseEntity.IsNetworked](Entity.md#isnetworked)

#### Inherited from

```ts
BaseEntity.NetworkId
```

***

### Owner

#### Get Signature

```ts
get Owner(): null | Ped
```

Defined in: redm/entities/Ped.d.ts:60

returns the owner of the current animal

##### Returns

`null` \| [`Ped`](Ped.md)

***

### OwnsAnimal

#### Set Signature

```ts
set OwnsAnimal(animal): void
```

Defined in: redm/entities/Ped.d.ts:101

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `animal` | [`Ped`](Ped.md) |

##### Returns

`void`

***

### Position

#### Get Signature

```ts
get Position(): Vector3
```

Defined in: redm/entities/BaseEntity.d.ts:61

##### Returns

`Vector3`

the position of the current Entity

#### Set Signature

```ts
set Position(pos): void
```

Defined in: redm/entities/BaseEntity.d.ts:66

You should (almost) always try to load the collisions before setting the entitys position if going a long distance.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `pos` | `Vector3` | sets the position for the current ped |

##### Returns

`void`

#### Inherited from

```ts
BaseEntity.Position
```

***

### SeeingRange

#### Set Signature

```ts
set SeeingRange(value): void
```

Defined in: redm/entities/Ped.d.ts:77

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

##### Returns

`void`

***

### TamingState

#### Get Signature

```ts
get TamingState(): TamingState
```

Defined in: redm/entities/Ped.d.ts:61

##### Returns

[`TamingState`](../enumerations/TamingState.md)

***

### Vehicle

#### Get Signature

```ts
get Vehicle(): null | Vehicle
```

Defined in: redm/entities/Ped.d.ts:48

##### Returns

`null` \| [`Vehicle`](Vehicle.md)

## Methods

### addArmour()

```ts
addArmour(amount): void
```

Defined in: redm/entities/Ped.d.ts:150

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `amount` | `number` | the amount of armour to add to the ped |

#### Returns

`void`

***

### applyDamage()

```ts
applyDamage(
   damageAmount, 
   boneId?, 
   pedKiller?): void
```

Defined in: redm/entities/Ped.d.ts:151

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `damageAmount` | `number` |
| `boneId`? | `number` |
| `pedKiller`? | `null` \| [`Ped`](Ped.md) |

#### Returns

`void`

***

### applyDamagePack()

```ts
applyDamagePack(
   damagePack, 
   damage, 
   mult): void
```

Defined in: redm/entities/Ped.d.ts:157

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `damagePack` | `string` | the damage decal to apply see [here](https://github.com/femga/rdr3_discoveries/blob/master/peds_customization/ped_decals.lua) for more documentation |
| `damage` | `number` | the damage to apply |
| `mult` | `number` | the multiplier? |

#### Returns

`void`

***

### canBeTargetedByPlayer()

```ts
canBeTargetedByPlayer(player, toggle): void
```

Defined in: redm/entities/Ped.d.ts:99

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `player` | [`Player`](Player.md) |
| `toggle` | `boolean` |

#### Returns

`void`

***

### clearLastBoneDamage()

```ts
clearLastBoneDamage(): void
```

Defined in: redm/entities/Ped.d.ts:100

#### Returns

`void`

***

### clone()

```ts
clone(
   network, 
   bScriptHostPed, 
   copyHeadBlend): Ped
```

Defined in: redm/entities/Ped.d.ts:141

creates a clone of the ped

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `network` | `boolean` | if the ped should be a networked entity |
| `bScriptHostPed` | `boolean` | whether to register the ped as pinned to the script host in the R* network model. |
| `copyHeadBlend` | `boolean` | whether to copy the peds head blend |

#### Returns

[`Ped`](Ped.md)

the cloned ped

***

### cloneTo()

```ts
cloneTo(targetPed): void
```

Defined in: redm/entities/Ped.d.ts:146

clones the ped onto the target ped

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `targetPed` | [`Ped`](Ped.md) | the ped to clone onto |

#### Returns

`void`

***

### damage()

```ts
damage(
   amount, 
   boneId?, 
   killer?): void
```

Defined in: redm/entities/Ped.d.ts:124

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `amount` | `number` |
| `boneId`? | `number` |
| `killer`? | [`Ped`](Ped.md) |

#### Returns

`void`

***

### delete()

```ts
delete(): void
```

Defined in: redm/entities/Ped.d.ts:133

Removes the specified ped if its not a player entity

#### Returns

`void`

***

### getJacker()

```ts
getJacker(): Ped
```

Defined in: redm/entities/Ped.d.ts:97

returns the ped who jacked this ped

#### Returns

[`Ped`](Ped.md)

***

### isInteractionPossible()

```ts
isInteractionPossible(animal): boolean
```

Defined in: redm/entities/Ped.d.ts:102

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `animal` | [`Ped`](Ped.md) |

#### Returns

`boolean`

***

### isOnVehicle()

```ts
isOnVehicle(vehicle): boolean
```

Defined in: redm/entities/Ped.d.ts:103

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `vehicle` | [`Vehicle`](Vehicle.md) |

#### Returns

`boolean`

***

### isSittingInVehicle()

```ts
isSittingInVehicle(vehicle): boolean
```

Defined in: redm/entities/Ped.d.ts:104

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `vehicle` | [`Vehicle`](Vehicle.md) |

#### Returns

`boolean`

***

### killPed()

```ts
killPed(killer?): void
```

Defined in: redm/entities/Ped.d.ts:123

kills the ped and optionally sets the killer

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `killer`? | `BaseEntity` | the entity that killed the ped |

#### Returns

`void`

***

### removeFromMount()

```ts
removeFromMount(): void
```

Defined in: redm/entities/Ped.d.ts:112

#### Returns

`void`

***

### replaceHandle()

```ts
replaceHandle(newHandle): void
```

Defined in: redm/entities/BaseEntity.d.ts:25

Replaces the current handle for the entity used on, this hsould be used sparringly, mainly
in situations where you're going to reuse an entity over and over and don't want to make a
new entity every time.

 **WARNING**: This does no checks, if you provide it an invalid entity it will use it

```ts
const REUSABLE_ENTITY = new Entity(entityHandle);

onNet("entityHandler", (entNetId: number) => {
 // if no net entity we should ignore
 if (!NetworkDoesEntityExistWithNetworkId(entNetId)) return;

 // Reuse our entity so we don't have to initialize a new one
 REUSABLE_ENTITY.replaceHandle(NetworkGetEntityFromNetworkId(entNetId));
 // Do something with REUSABLE_ENTITY entity
})
```

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

### setCanBeKnockedOffVehicle()

```ts
setCanBeKnockedOffVehicle(state): void
```

Defined in: redm/entities/Ped.d.ts:129

this returns a different type then the getter so we can't use set, maybe ts will fix soon (tm)

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `state` | [`KnockOffVehicle`](../enumerations/KnockOffVehicle.md) | how hard it will be to knock a ped off their vehicle |

#### Returns

`void`

***

### setCrouchMovement()

```ts
setCrouchMovement(state, immediately?): void
```

Defined in: redm/entities/Ped.d.ts:98

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `state` | `boolean` |
| `immediately`? | `boolean` |

#### Returns

`void`

***

### setIntoVehicle()

```ts
setIntoVehicle(vehicle, seatIndex): void
```

Defined in: redm/entities/Ped.d.ts:118

Sets the ped into the specified vehicle

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `vehicle` | [`Vehicle`](Vehicle.md) | the vehicle to put the ped into |
| `seatIndex` | [`VehicleSeat`](../enumerations/VehicleSeat.md) | the seat index to put the ped into |

#### Returns

`void`

***

### setOntoMount()

```ts
setOntoMount(targetPed, seatIndex): void
```

Defined in: redm/entities/Ped.d.ts:111

puts the ped onto the specified mount

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `targetPed` | [`Ped`](Ped.md) | the horse to put the ped on |
| `seatIndex` | [`VehicleSeat`](../enumerations/VehicleSeat.md) | the seat index to put the ped on |

#### Returns

`void`

***

### warpOutOfVehicle()

```ts
warpOutOfVehicle(): void
```

Defined in: redm/entities/Ped.d.ts:105

#### Returns

`void`

***

### blockScenariosInArea()

```ts
static blockScenariosInArea(
   vec1, 
   vec2, 
   blockingFlags): number
```

Defined in: redm/entities/Ped.d.ts:19

Blocks scenarios inbetween the specified vectors

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `vec1` | `Vector3` |  |
| `vec2` | `Vector3` |  |
| `blockingFlags` | `number` | you can find blocking flags [here](https://github.com/Halen84/RDR3-Native-Flags-And-Enums/blob/main/ADD_SCENARIO_BLOCKING_AREA/README.md) |

#### Returns

`number`

the scenarioId that can be used in [removeScenarioBlock](Ped.md#removescenarioblock) to unblock

#### Todo

Move to Game

***

### removeScenarioBlock()

```ts
static removeScenarioBlock(scenarioId): void
```

Defined in: redm/entities/Ped.d.ts:24

Removes the blocking of scenarios in the specified area

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `scenarioId` | `number` | the number returned from [blockScenariosInArea](Ped.md#blockscenariosinarea) |

#### Returns

`void`
