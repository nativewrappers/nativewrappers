[@nativewrappers/fivem](../../../../README.md) / [redm/entities/Ped](../README.md) / Ped

# Class: Ped

Defined in: lib/redm/entities/Ped.d.ts:15

## Extends

- [`BaseEntity`](../../BaseEntity/classes/BaseEntity.md)

## Constructors

### Constructor

```ts
new Ped(handle): Ped;
```

Defined in: lib/redm/entities/Ped.d.ts:31

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `handle` | `number` |

#### Returns

`Ped`

#### Overrides

[`BaseEntity`](../../BaseEntity/classes/BaseEntity.md).[`constructor`](../../BaseEntity/classes/BaseEntity.md#constructor)

## Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="bones"></a> `bones?` | `protected` | [`PedBoneCollection`](../../bones/PedBoneCollection/classes/PedBoneCollection.md) | lib/redm/entities/Ped.d.ts:17 |
| <a id="type"></a> `type` | `protected` | `ClassTypes` | lib/redm/entities/Ped.d.ts:16 |

## Accessors

### Accuracy

#### Get Signature

```ts
get Accuracy(): number;
```

Defined in: lib/redm/entities/Ped.d.ts:70

##### Returns

`number`

#### Set Signature

```ts
set Accuracy(accuracy): void;
```

Defined in: lib/redm/entities/Ped.d.ts:71

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `accuracy` | `number` |

##### Returns

`void`

***

### AnimalOwner

#### Get Signature

```ts
get AnimalOwner(): null | Ped;
```

Defined in: lib/redm/entities/Ped.d.ts:92

returns the owner of the current animal

##### Returns

`null` \| `Ped`

***

### Attributes

#### Get Signature

```ts
get Attributes(): Attributes;
```

Defined in: lib/redm/entities/Ped.d.ts:64

##### Returns

[`Attributes`](../../../Attribute/classes/Attributes.md)

the [Attributes](../../../Attribute/classes/Attributes.md) for the current ped

***

### Bones

#### Get Signature

```ts
get Bones(): PedBoneCollection;
```

Defined in: lib/redm/entities/Ped.d.ts:52

##### Returns

[`PedBoneCollection`](../../bones/PedBoneCollection/classes/PedBoneCollection.md)

***

### CanBeKnockedOffVehicle

#### Get Signature

```ts
get CanBeKnockedOffVehicle(): boolean;
```

Defined in: lib/redm/entities/Ped.d.ts:72

##### Returns

`boolean`

***

### CanBeTargeted

#### Set Signature

```ts
set CanBeTargeted(toggle): void;
```

Defined in: lib/redm/entities/Ped.d.ts:125

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
get CrouchMovement(): boolean;
```

Defined in: lib/redm/entities/Ped.d.ts:116

##### Returns

`boolean`

***

### CurrentVehicle

#### Get Signature

```ts
get CurrentVehicle(): null | Vehicle;
```

Defined in: lib/redm/entities/Ped.d.ts:190

##### Returns

`null` \| [`Vehicle`](../../Vehicle/classes/Vehicle.md)

***

### CurrentWeapon

#### Get Signature

```ts
get CurrentWeapon(): WeaponModel;
```

Defined in: lib/redm/entities/Ped.d.ts:214

##### Returns

[`WeaponModel`](../../../models/WeaponModel/classes/WeaponModel.md)

***

### DamageCleanliness

#### Get Signature

```ts
get DamageCleanliness(): eDamageCleanliness;
```

Defined in: lib/redm/entities/Ped.d.ts:122

##### Returns

[`eDamageCleanliness`](../../../enums/Ped/enumerations/eDamageCleanliness.md)

#### Set Signature

```ts
set DamageCleanliness(cleanliness): void;
```

Defined in: lib/redm/entities/Ped.d.ts:123

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `cleanliness` | [`eDamageCleanliness`](../../../enums/Ped/enumerations/eDamageCleanliness.md) |

##### Returns

`void`

***

### DefenseModifier

#### Set Signature

```ts
set DefenseModifier(amount): void;
```

Defined in: lib/redm/entities/Ped.d.ts:124

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `amount` | `number` |

##### Returns

`void`

***

### HasPistol

#### Get Signature

```ts
get HasPistol(): boolean;
```

Defined in: lib/redm/entities/Ped.d.ts:212

##### Returns

`boolean`

***

### HasRepeater

#### Get Signature

```ts
get HasRepeater(): boolean;
```

Defined in: lib/redm/entities/Ped.d.ts:213

##### Returns

`boolean`

***

### HearingRange

#### Set Signature

```ts
set HearingRange(value): void;
```

Defined in: lib/redm/entities/Ped.d.ts:110

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
get InVehicle(): boolean;
```

Defined in: lib/redm/entities/Ped.d.ts:65

##### Returns

`boolean`

***

### IsBeingJacked

#### Get Signature

```ts
get IsBeingJacked(): boolean;
```

Defined in: lib/redm/entities/Ped.d.ts:114

##### Returns

`boolean`

***

### IsClimbing

#### Get Signature

```ts
get IsClimbing(): boolean;
```

Defined in: lib/redm/entities/Ped.d.ts:104

##### Returns

`boolean`

***

### IsClimbingLadder

#### Get Signature

```ts
get IsClimbingLadder(): boolean;
```

Defined in: lib/redm/entities/Ped.d.ts:105

##### Returns

`boolean`

***

### IsDamaged

#### Get Signature

```ts
get IsDamaged(): boolean;
```

Defined in: lib/redm/entities/Ped.d.ts:120

returns true if [DamageCleanliness](#damagecleanliness) was ever lower than [eDamageCleanliness.Good](../../../enums/Ped/enumerations/eDamageCleanliness.md#good)

##### Returns

`boolean`

#### Set Signature

```ts
set IsDamaged(damaged): void;
```

Defined in: lib/redm/entities/Ped.d.ts:121

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
get IsDiving(): boolean;
```

Defined in: lib/redm/entities/Ped.d.ts:107

##### Returns

`boolean`

***

### IsFalling

#### Get Signature

```ts
get IsFalling(): boolean;
```

Defined in: lib/redm/entities/Ped.d.ts:101

##### Returns

`boolean`

***

### IsFatallyInjured

#### Get Signature

```ts
get IsFatallyInjured(): boolean;
```

Defined in: lib/redm/entities/Ped.d.ts:67

##### Returns

`boolean`

***

### IsHuman

#### Get Signature

```ts
get IsHuman(): boolean;
```

Defined in: lib/redm/entities/Ped.d.ts:74

##### Returns

`boolean`

***

### IsInAnyBoat

#### Get Signature

```ts
get IsInAnyBoat(): boolean;
```

Defined in: lib/redm/entities/Ped.d.ts:97

##### Returns

`boolean`

***

### IsInAnyHeli

#### Get Signature

```ts
get IsInAnyHeli(): boolean;
```

Defined in: lib/redm/entities/Ped.d.ts:98

##### Returns

`boolean`

***

### IsInAnyPlane

#### Get Signature

```ts
get IsInAnyPlane(): boolean;
```

Defined in: lib/redm/entities/Ped.d.ts:99

##### Returns

`boolean`

***

### IsInCombatRoll

#### Get Signature

```ts
get IsInCombatRoll(): boolean;
```

Defined in: lib/redm/entities/Ped.d.ts:115

##### Returns

`boolean`

***

### IsInFlyingVehicle

#### Get Signature

```ts
get IsInFlyingVehicle(): boolean;
```

Defined in: lib/redm/entities/Ped.d.ts:100

##### Returns

`boolean`

***

### IsInjured

#### Get Signature

```ts
get IsInjured(): boolean;
```

Defined in: lib/redm/entities/Ped.d.ts:66

##### Returns

`boolean`

***

### IsInteractingWithAnimal

#### Get Signature

```ts
get IsInteractingWithAnimal(): boolean;
```

Defined in: lib/redm/entities/Ped.d.ts:94

##### Returns

`boolean`

***

### IsJacking

#### Get Signature

```ts
get IsJacking(): boolean;
```

Defined in: lib/redm/entities/Ped.d.ts:112

##### Returns

`boolean`

***

### IsJumping

#### Get Signature

```ts
get IsJumping(): boolean;
```

Defined in: lib/redm/entities/Ped.d.ts:103

##### Returns

`boolean`

***

### IsMale

#### Get Signature

```ts
get IsMale(): boolean;
```

Defined in: lib/redm/entities/Ped.d.ts:73

##### Returns

`boolean`

***

### IsOnTopOfVehicle

#### Get Signature

```ts
get IsOnTopOfVehicle(): boolean;
```

Defined in: lib/redm/entities/Ped.d.ts:75

##### Returns

`boolean`

***

### IsOpeningADoor

#### Get Signature

```ts
get IsOpeningADoor(): boolean;
```

Defined in: lib/redm/entities/Ped.d.ts:108

##### Returns

`boolean`

***

### IsPlantingBomb

#### Get Signature

```ts
get IsPlantingBomb(): boolean;
```

Defined in: lib/redm/entities/Ped.d.ts:96

##### Returns

`boolean`

***

### IsPlayer

#### Get Signature

```ts
get IsPlayer(): boolean;
```

Defined in: lib/redm/entities/Ped.d.ts:68

##### Returns

`boolean`

***

### IsShooting

#### Get Signature

```ts
get IsShooting(): boolean;
```

Defined in: lib/redm/entities/Ped.d.ts:69

##### Returns

`boolean`

***

### IsSittingInAnyVehicle

#### Get Signature

```ts
get IsSittingInAnyVehicle(): boolean;
```

Defined in: lib/redm/entities/Ped.d.ts:95

##### Returns

`boolean`

***

### IsSliding

#### Get Signature

```ts
get IsSliding(): boolean;
```

Defined in: lib/redm/entities/Ped.d.ts:102

##### Returns

`boolean`

***

### IsStealthed

#### Get Signature

```ts
get IsStealthed(): boolean;
```

Defined in: lib/redm/entities/Ped.d.ts:111

##### Returns

`boolean`

***

### IsStunned

#### Get Signature

```ts
get IsStunned(): boolean;
```

Defined in: lib/redm/entities/Ped.d.ts:113

##### Returns

`boolean`

***

### IsVaulting

#### Get Signature

```ts
get IsVaulting(): boolean;
```

Defined in: lib/redm/entities/Ped.d.ts:106

##### Returns

`boolean`

***

### LastMount

#### Get Signature

```ts
get LastMount(): null | Ped;
```

Defined in: lib/redm/entities/Ped.d.ts:80

##### Returns

`null` \| `Ped`

the last mount that this ped was on, or null if it doesn't exist

***

### LeadingHorse

#### Get Signature

```ts
get LeadingHorse(): null | Ped;
```

Defined in: lib/redm/entities/Ped.d.ts:88

returns the horse that this ped is leading

##### Returns

`null` \| `Ped`

***

### MaxHealth

#### Get Signature

```ts
get MaxHealth(): number;
```

Defined in: lib/redm/entities/Ped.d.ts:60

##### Returns

`number`

the maximum health of the ped

#### Set Signature

```ts
set MaxHealth(amount): void;
```

Defined in: lib/redm/entities/Ped.d.ts:56

While this increases the peds max health, if used on a player it wont increase the max core value on the hud

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `amount` | `number` |

##### Returns

`void`

***

### MaxStamina

#### Get Signature

```ts
get MaxStamina(): number;
```

Defined in: lib/redm/entities/Ped.d.ts:197

##### Returns

`number`

***

### Mount

#### Get Signature

```ts
get Mount(): null | Ped;
```

Defined in: lib/redm/entities/Ped.d.ts:84

##### Returns

`null` \| `Ped`

the the current mount that the ped is on, or null if there isn't one

***

### MountedEntity

#### Get Signature

```ts
get MountedEntity(): null | BaseEntity;
```

Defined in: lib/redm/entities/Ped.d.ts:36

##### Returns

`null` \| [`BaseEntity`](../../BaseEntity/classes/BaseEntity.md)

the current horse or vehicle the ped is on, or null if they're not on either

***

### OwnsAnimal

#### Set Signature

```ts
set OwnsAnimal(animal): void;
```

Defined in: lib/redm/entities/Ped.d.ts:133

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `animal` | `Ped` |

##### Returns

`void`

***

### Player

#### Get Signature

```ts
get Player(): null | Player;
```

Defined in: lib/redm/entities/Ped.d.ts:32

##### Returns

`null` \| [`Player`](../../Player/classes/Player.md)

***

### SeeingRange

#### Set Signature

```ts
set SeeingRange(value): void;
```

Defined in: lib/redm/entities/Ped.d.ts:109

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

##### Returns

`void`

***

### Stamina

#### Get Signature

```ts
get Stamina(): number;
```

Defined in: lib/redm/entities/Ped.d.ts:201

Returns the amount of stamina the ped has

##### Returns

`number`

***

### StaminaNormalized

#### Get Signature

```ts
get StaminaNormalized(): number;
```

Defined in: lib/redm/entities/Ped.d.ts:205

returns the normalized stamina for the player, taking into account their unlocked stamina

##### Returns

`number`

***

### TamingState

#### Get Signature

```ts
get TamingState(): TamingState;
```

Defined in: lib/redm/entities/Ped.d.ts:93

##### Returns

[`TamingState`](../../../enums/Ped/enumerations/TamingState.md)

***

### Tasks

#### Get Signature

```ts
get Tasks(): Tasks;
```

Defined in: lib/redm/entities/Ped.d.ts:51

##### Returns

[`Tasks`](../../../Task/classes/Tasks.md)

***

### Vehicle

#### Get Signature

```ts
get Vehicle(): null | Vehicle;
```

Defined in: lib/redm/entities/Ped.d.ts:76

##### Returns

`null` \| [`Vehicle`](../../Vehicle/classes/Vehicle.md)

## Methods

### addAmmo()

```ts
addAmmo(
   weapon, 
   amount, 
   addReason?): void;
```

Defined in: lib/redm/entities/Ped.d.ts:208

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `weapon` | [`WeaponModel`](../../../models/WeaponModel/classes/WeaponModel.md) |
| `amount` | `number` |
| `addReason?` | [`ItemAddReason`](../../../inventory/InventoryTypes/enumerations/ItemAddReason.md) |

#### Returns

`void`

***

### addArmour()

```ts
addArmour(amount): void;
```

Defined in: lib/redm/entities/Ped.d.ts:182

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
   pedKiller?): void;
```

Defined in: lib/redm/entities/Ped.d.ts:183

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `damageAmount` | `number` |
| `boneId?` | `number` |
| `pedKiller?` | `null` \| `Ped` |

#### Returns

`void`

***

### applyDamagePack()

```ts
applyDamagePack(
   damagePack, 
   damage, 
   mult): void;
```

Defined in: lib/redm/entities/Ped.d.ts:189

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
canBeTargetedByPlayer(player, toggle): void;
```

Defined in: lib/redm/entities/Ped.d.ts:131

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `player` | [`Player`](../../Player/classes/Player.md) |
| `toggle` | `boolean` |

#### Returns

`void`

***

### changeStamina()

```ts
changeStamina(amount): void;
```

Defined in: lib/redm/entities/Ped.d.ts:196

Adds or removes the ped stamina, depending on of the amount is positive or negative.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `amount` | `number` | the amount of stamina to add/remove |

#### Returns

`void`

***

### clearLastBoneDamage()

```ts
clearLastBoneDamage(): void;
```

Defined in: lib/redm/entities/Ped.d.ts:132

#### Returns

`void`

***

### clearLastDamage()

```ts
clearLastDamage(): void;
```

Defined in: lib/redm/entities/Ped.d.ts:209

#### Returns

`void`

***

### clone()

```ts
clone(
   network, 
   bScriptHostPed, 
   copyHeadBlend): Ped;
```

Defined in: lib/redm/entities/Ped.d.ts:173

creates a clone of the ped

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `network` | `boolean` | if the ped should be a networked entity |
| `bScriptHostPed` | `boolean` | whether to register the ped as pinned to the script host in the R* network model. |
| `copyHeadBlend` | `boolean` | whether to copy the peds head blend |

#### Returns

`Ped`

the cloned ped

***

### cloneTo()

```ts
cloneTo(targetPed): void;
```

Defined in: lib/redm/entities/Ped.d.ts:178

clones the ped onto the target ped

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `targetPed` | `Ped` | the ped to clone onto |

#### Returns

`void`

***

### damage()

```ts
damage(
   amount, 
   boneId?, 
   killer?): void;
```

Defined in: lib/redm/entities/Ped.d.ts:156

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `amount` | `number` |
| `boneId?` | `number` |
| `killer?` | `Ped` |

#### Returns

`void`

***

### delete()

```ts
delete(): void;
```

Defined in: lib/redm/entities/Ped.d.ts:165

Removes the specified ped if its not a player entity

#### Returns

`void`

***

### disableAmmoForWeapon()

```ts
disableAmmoForWeapon(weapon, ammo): void;
```

Defined in: lib/redm/entities/Ped.d.ts:211

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `weapon` | [`WeaponModel`](../../../models/WeaponModel/classes/WeaponModel.md) |
| `ammo` | [`AmmoModel`](../../../models/AmmoModel/classes/AmmoModel.md) |

#### Returns

`void`

***

### disableAmmoType()

```ts
disableAmmoType(ammo): void;
```

Defined in: lib/redm/entities/Ped.d.ts:210

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `ammo` | [`AmmoModel`](../../../models/AmmoModel/classes/AmmoModel.md) |

#### Returns

`void`

***

### getJacker()

```ts
getJacker(): Ped;
```

Defined in: lib/redm/entities/Ped.d.ts:129

returns the ped who jacked this ped

#### Returns

`Ped`

***

### giveHashCommand()

```ts
giveHashCommand(commandHash, activationDuration): void;
```

Defined in: lib/redm/entities/Ped.d.ts:191

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `commandHash` | `number` |
| `activationDuration` | `number` |

#### Returns

`void`

***

### giveWeapon()

```ts
giveWeapon(
   weapon, 
   ammoCount, 
   forceInHand?, 
   forceInHolster?, 
   attachPoint?, 
   allowMultipleCopies?, 
   p7?, 
   p8?, 
   addReason?, 
   ignoreUnlocks?, 
   permanentDegradation?, 
p12?): Promise<boolean>;
```

Defined in: lib/redm/entities/Ped.d.ts:215

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `weapon` | [`WeaponModel`](../../../models/WeaponModel/classes/WeaponModel.md) |
| `ammoCount` | `number` |
| `forceInHand?` | `boolean` |
| `forceInHolster?` | `boolean` |
| `attachPoint?` | [`WeaponAttachPoints`](../../../enums/WeaponAttachPoints/enumerations/WeaponAttachPoints.md) |
| `allowMultipleCopies?` | `boolean` |
| `p7?` | `number` |
| `p8?` | `number` |
| `addReason?` | [`ItemAddReason`](../../../inventory/InventoryTypes/enumerations/ItemAddReason.md) |
| `ignoreUnlocks?` | `boolean` |
| `permanentDegradation?` | `number` |
| `p12?` | `boolean` |

#### Returns

`Promise`\<`boolean`\>

***

### holsterWeapon()

```ts
holsterWeapon(): void;
```

Defined in: lib/redm/entities/Ped.d.ts:217

#### Returns

`void`

***

### isHoldingWeapon()

```ts
isHoldingWeapon(weapon): boolean;
```

Defined in: lib/redm/entities/Ped.d.ts:219

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `weapon` | [`WeaponModel`](../../../models/WeaponModel/classes/WeaponModel.md) |

#### Returns

`boolean`

***

### isHolsterStateChanging()

```ts
isHolsterStateChanging(): boolean;
```

Defined in: lib/redm/entities/Ped.d.ts:220

#### Returns

`boolean`

***

### isInteractionPossible()

```ts
isInteractionPossible(animal): boolean;
```

Defined in: lib/redm/entities/Ped.d.ts:134

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `animal` | `Ped` |

#### Returns

`boolean`

***

### isOnVehicle()

```ts
isOnVehicle(vehicle): boolean;
```

Defined in: lib/redm/entities/Ped.d.ts:135

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `vehicle` | [`Vehicle`](../../Vehicle/classes/Vehicle.md) |

#### Returns

`boolean`

***

### isSittingInVehicle()

```ts
isSittingInVehicle(vehicle): boolean;
```

Defined in: lib/redm/entities/Ped.d.ts:136

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `vehicle` | [`Vehicle`](../../Vehicle/classes/Vehicle.md) |

#### Returns

`boolean`

***

### killPed()

```ts
killPed(killer?): void;
```

Defined in: lib/redm/entities/Ped.d.ts:155

kills the ped and optionally sets the killer

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `killer?` | [`BaseEntity`](../../BaseEntity/classes/BaseEntity.md) | the entity that killed the ped |

#### Returns

`void`

***

### removeFromMount()

```ts
removeFromMount(): void;
```

Defined in: lib/redm/entities/Ped.d.ts:144

#### Returns

`void`

***

### resetStamina()

```ts
resetStamina(): void;
```

Defined in: lib/redm/entities/Ped.d.ts:206

#### Returns

`void`

***

### setCanBeKnockedOffVehicle()

```ts
setCanBeKnockedOffVehicle(state): void;
```

Defined in: lib/redm/entities/Ped.d.ts:161

this returns a different type then the getter so we can't use set, maybe ts will fix soon (tm)

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `state` | [`KnockOffVehicle`](../../../enums/Ped/enumerations/KnockOffVehicle.md) | how hard it will be to knock a ped off their vehicle |

#### Returns

`void`

***

### setCrouchMovement()

```ts
setCrouchMovement(state, immediately?): void;
```

Defined in: lib/redm/entities/Ped.d.ts:130

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `state` | `boolean` |
| `immediately?` | `boolean` |

#### Returns

`void`

***

### setCurrentWeapon()

```ts
setCurrentWeapon(
   weapon, 
   equipNow?, 
   attachPoint?, 
   p4?, 
   p5?): void;
```

Defined in: lib/redm/entities/Ped.d.ts:216

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `weapon` | [`WeaponModel`](../../../models/WeaponModel/classes/WeaponModel.md) |
| `equipNow?` | `boolean` |
| `attachPoint?` | [`WeaponAttachPoints`](../../../enums/WeaponAttachPoints/enumerations/WeaponAttachPoints.md) |
| `p4?` | `boolean` |
| `p5?` | `boolean` |

#### Returns

`void`

***

### setIntoVehicle()

```ts
setIntoVehicle(vehicle, seatIndex): void;
```

Defined in: lib/redm/entities/Ped.d.ts:150

Sets the ped into the specified vehicle

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `vehicle` | [`Vehicle`](../../Vehicle/classes/Vehicle.md) | the vehicle to put the ped into |
| `seatIndex` | [`VehicleSeat`](../../../enums/VehicleSeat/enumerations/VehicleSeat.md) | the seat index to put the ped into |

#### Returns

`void`

***

### setOntoMount()

```ts
setOntoMount(targetPed, seatIndex): void;
```

Defined in: lib/redm/entities/Ped.d.ts:143

puts the ped onto the specified mount

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `targetPed` | `Ped` | the horse to put the ped on |
| `seatIndex` | [`VehicleSeat`](../../../enums/VehicleSeat/enumerations/VehicleSeat.md) | the seat index to put the ped on |

#### Returns

`void`

***

### setOwnsAnimal()

```ts
setOwnsAnimal(ped, p2?): void;
```

Defined in: lib/redm/entities/Ped.d.ts:207

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `ped` | `Ped` |
| `p2?` | `number` |

#### Returns

`void`

***

### setWeaponOnBack()

```ts
setWeaponOnBack(disableAnim?): void;
```

Defined in: lib/redm/entities/Ped.d.ts:218

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `disableAnim?` | `boolean` |

#### Returns

`void`

***

### warpOutOfVehicle()

```ts
warpOutOfVehicle(): void;
```

Defined in: lib/redm/entities/Ped.d.ts:137

#### Returns

`void`

***

### blockScenariosInArea()

```ts
static blockScenariosInArea(
   vec1, 
   vec2, 
   blockingFlags): number;
```

Defined in: lib/redm/entities/Ped.d.ts:45

Blocks scenarios inbetween the specified vectors

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `vec1` | `Vector3` |  |
| `vec2` | `Vector3` |  |
| `blockingFlags` | `number` | you can find blocking flags [here](https://github.com/Halen84/RDR3-Native-Flags-And-Enums/blob/main/ADD_SCENARIO_BLOCKING_AREA/README.md) |

#### Returns

`number`

the scenarioId that can be used in [removeScenarioBlock](#removescenarioblock) to unblock

#### Todo

Move to Game

***

### fromHandle()

```ts
static fromHandle(handle): null | Ped;
```

Defined in: lib/redm/entities/Ped.d.ts:24

Gets the entity from the handle given, if the entity doesn't exist it will return
null.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `handle` | `number` |

#### Returns

`null` \| `Ped`

***

### fromNetworkId()

```ts
static fromNetworkId(netId): null | Ped;
```

Defined in: lib/redm/entities/Ped.d.ts:29

Gets the ped from the current network id, this doesn't check that
the entity is actually a ped

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `netId` | `number` |

#### Returns

`null` \| `Ped`

***

### fromStateBagName()

```ts
static fromStateBagName(bagName): null | Ped;
```

Defined in: lib/redm/entities/Ped.d.ts:30

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `bagName` | `string` |

#### Returns

`null` \| `Ped`

***

### removeScenarioBlock()

```ts
static removeScenarioBlock(scenarioId): void;
```

Defined in: lib/redm/entities/Ped.d.ts:50

Removes the blocking of scenarios in the specified area

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `scenarioId` | `number` | the number returned from [blockScenariosInArea](#blockscenariosinarea) |

#### Returns

`void`
