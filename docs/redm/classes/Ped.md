[@nativewrappers/fivem](../../README.md) / [redm](../README.md) / Ped

# Class: Ped

## Extends

- `BaseEntity`

## Constructors

### new Ped()

```ts
new Ped(handle): Ped
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `handle` | `number` |

#### Returns

[`Ped`](Ped.md)

#### Overrides

`BaseEntity.constructor`

#### Defined in

[src/redm/entities/Ped.ts:14](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/redm/entities/Ped.ts#L14)

## Accessors

### Accuracy

```ts
get Accuracy(): number
```

```ts
set Accuracy(accuracy): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `accuracy` | `number` |

#### Returns

`number`

#### Defined in

[src/redm/entities/Ped.ts:102](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/redm/entities/Ped.ts#L102)

***

### Attributes

```ts
get Attributes(): Attributes
```

#### Returns

[`Attributes`](Attributes.md)

the [Attributes](Attributes.md) for the current ped

#### Defined in

[src/redm/entities/Ped.ts:68](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/redm/entities/Ped.ts#L68)

***

### CanBeKnockedOffVehicle

```ts
get CanBeKnockedOffVehicle(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/redm/entities/Ped.ts:110](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/redm/entities/Ped.ts#L110)

***

### CanBeTargeted

```ts
set CanBeTargeted(toggle): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `toggle` | `boolean` |

#### Defined in

[src/redm/entities/Ped.ts:324](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/redm/entities/Ped.ts#L324)

***

### CrouchMovement

```ts
get CrouchMovement(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/redm/entities/Ped.ts:285](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/redm/entities/Ped.ts#L285)

***

### DamageCleanliness

```ts
get DamageCleanliness(): eDamageCleanliness
```

```ts
set DamageCleanliness(cleanliness): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `cleanliness` | [`eDamageCleanliness`](../enumerations/eDamageCleanliness.md) |

#### Returns

[`eDamageCleanliness`](../enumerations/eDamageCleanliness.md)

#### Defined in

[src/redm/entities/Ped.ts:308](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/redm/entities/Ped.ts#L308)

***

### DefenseModifier

```ts
set DefenseModifier(amount): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `amount` | `number` |

#### Defined in

[src/redm/entities/Ped.ts:320](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/redm/entities/Ped.ts#L320)

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

[src/redm/entities/BaseEntity.ts:7](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/redm/entities/BaseEntity.ts#L7)

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

#### Defined in

[src/redm/entities/Ped.ts:90](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/redm/entities/Ped.ts#L90)

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

`BaseEntity.Health`

#### Defined in

[src/redm/entities/BaseEntity.ts:15](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/redm/entities/BaseEntity.ts#L15)

***

### HearingRange

```ts
set HearingRange(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

#### Defined in

[src/redm/entities/Ped.ts:257](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/redm/entities/Ped.ts#L257)

***

### InVehicle

```ts
get InVehicle(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/redm/entities/Ped.ts:74](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/redm/entities/Ped.ts#L74)

***

### IsBeingJacked

```ts
get IsBeingJacked(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/redm/entities/Ped.ts:273](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/redm/entities/Ped.ts#L273)

***

### IsClimbing

```ts
get IsClimbing(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/redm/entities/Ped.ts:228](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/redm/entities/Ped.ts#L228)

***

### IsClimbingLadder

```ts
get IsClimbingLadder(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/redm/entities/Ped.ts:232](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/redm/entities/Ped.ts#L232)

***

### IsDamaged

```ts
get IsDamaged(): boolean
```

returns true if [DamageCleanliness](Ped.md#damagecleanliness) was ever lower than [eDamageCleanliness.Good](../enumerations/eDamageCleanliness.md)

```ts
set IsDamaged(damaged): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `damaged` | `boolean` |

#### Returns

`boolean`

#### Defined in

[src/redm/entities/Ped.ts:296](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/redm/entities/Ped.ts#L296)

***

### IsDiving

```ts
get IsDiving(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/redm/entities/Ped.ts:245](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/redm/entities/Ped.ts#L245)

***

### IsFalling

```ts
get IsFalling(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/redm/entities/Ped.ts:211](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/redm/entities/Ped.ts#L211)

***

### IsFatallyInjured

```ts
get IsFatallyInjured(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/redm/entities/Ped.ts:82](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/redm/entities/Ped.ts#L82)

***

### IsHuman

```ts
get IsHuman(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/redm/entities/Ped.ts:118](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/redm/entities/Ped.ts#L118)

***

### IsInAnyBoat

```ts
get IsInAnyBoat(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/redm/entities/Ped.ts:195](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/redm/entities/Ped.ts#L195)

***

### IsInAnyHeli

```ts
get IsInAnyHeli(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/redm/entities/Ped.ts:199](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/redm/entities/Ped.ts#L199)

***

### IsInAnyPlane

```ts
get IsInAnyPlane(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/redm/entities/Ped.ts:203](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/redm/entities/Ped.ts#L203)

***

### IsInCombatRoll

```ts
get IsInCombatRoll(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/redm/entities/Ped.ts:277](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/redm/entities/Ped.ts#L277)

***

### IsInFlyingVehicle

```ts
get IsInFlyingVehicle(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/redm/entities/Ped.ts:207](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/redm/entities/Ped.ts#L207)

***

### IsInjured

```ts
get IsInjured(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/redm/entities/Ped.ts:78](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/redm/entities/Ped.ts#L78)

***

### IsInteractingWithAnimal

```ts
get IsInteractingWithAnimal(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/redm/entities/Ped.ts:178](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/redm/entities/Ped.ts#L178)

***

### IsJacking

```ts
get IsJacking(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/redm/entities/Ped.ts:265](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/redm/entities/Ped.ts#L265)

***

### IsJumping

```ts
get IsJumping(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/redm/entities/Ped.ts:224](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/redm/entities/Ped.ts#L224)

***

### IsMale

```ts
get IsMale(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/redm/entities/Ped.ts:114](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/redm/entities/Ped.ts#L114)

***

### IsOnTopOfVehicle

```ts
get IsOnTopOfVehicle(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/redm/entities/Ped.ts:122](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/redm/entities/Ped.ts#L122)

***

### IsOpeningADoor

```ts
get IsOpeningADoor(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/redm/entities/Ped.ts:249](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/redm/entities/Ped.ts#L249)

***

### IsPlantingBomb

```ts
get IsPlantingBomb(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/redm/entities/Ped.ts:191](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/redm/entities/Ped.ts#L191)

***

### IsPlayer

```ts
get IsPlayer(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/redm/entities/Ped.ts:86](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/redm/entities/Ped.ts#L86)

***

### IsShooting

```ts
get IsShooting(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/redm/entities/Ped.ts:98](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/redm/entities/Ped.ts#L98)

***

### IsSittingInAnyVehicle

```ts
get IsSittingInAnyVehicle(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/redm/entities/Ped.ts:187](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/redm/entities/Ped.ts#L187)

***

### IsSliding

```ts
get IsSliding(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/redm/entities/Ped.ts:215](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/redm/entities/Ped.ts#L215)

***

### IsStealthed

```ts
get IsStealthed(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/redm/entities/Ped.ts:261](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/redm/entities/Ped.ts#L261)

***

### IsStunned

```ts
get IsStunned(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/redm/entities/Ped.ts:269](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/redm/entities/Ped.ts#L269)

***

### IsVaulting

```ts
get IsVaulting(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/redm/entities/Ped.ts:241](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/redm/entities/Ped.ts#L241)

***

### LeadingHorse

```ts
get LeadingHorse(): OptionalPed
```

returns the horse that this ped is leading

#### Returns

[`OptionalPed`](../type-aliases/OptionalPed.md)

#### Defined in

[src/redm/entities/Ped.ts:146](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/redm/entities/Ped.ts#L146)

***

### MaxHealth

```ts
get MaxHealth(): number
```

```ts
set MaxHealth(amount): void
```

While this increases the peds max health, if used on a player it wont increase the max core value on the hud

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `amount` | `number` |

#### Returns

`number`

the maximum health of the ped

#### Defined in

[src/redm/entities/Ped.ts:61](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/redm/entities/Ped.ts#L61)

***

### Mount

```ts
get Mount(): OptionalPed
```

#### Returns

[`OptionalPed`](../type-aliases/OptionalPed.md)

the last mount that this ped was on, or null if it doesn't exist

#### Defined in

[src/redm/entities/Ped.ts:133](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/redm/entities/Ped.ts#L133)

***

### Owner

```ts
get Owner(): OptionalPed
```

returns the owner of the current animal

#### Returns

[`OptionalPed`](../type-aliases/OptionalPed.md)

#### Defined in

[src/redm/entities/Ped.ts:159](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/redm/entities/Ped.ts#L159)

***

### OwnsAnimal

```ts
set OwnsAnimal(animal): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `animal` | [`Ped`](Ped.md) |

#### Defined in

[src/redm/entities/Ped.ts:352](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/redm/entities/Ped.ts#L352)

***

### SeeingRange

```ts
set SeeingRange(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

#### Defined in

[src/redm/entities/Ped.ts:253](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/redm/entities/Ped.ts#L253)

***

### TamingState

```ts
get TamingState(): TamingState
```

#### Returns

[`TamingState`](../enumerations/TamingState.md)

#### Defined in

[src/redm/entities/Ped.ts:169](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/redm/entities/Ped.ts#L169)

***

### Vehicle

```ts
get Vehicle(): Vehicle
```

#### Returns

[`Vehicle`](Vehicle.md)

#### Defined in

[src/redm/entities/Ped.ts:126](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/redm/entities/Ped.ts#L126)

## Methods

### addArmour()

```ts
addArmour(amount): void
```

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `amount` | `number` | the amount of armour to add to the ped |

#### Returns

`void`

#### Defined in

[src/redm/entities/Ped.ts:480](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/redm/entities/Ped.ts#L480)

***

### applyDamage()

```ts
applyDamage(
   damageAmount, 
   boneId, 
   pedKiller): void
```

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `damageAmount` | `number` | `undefined` |
| `boneId` | `number` | `0` |
| `pedKiller` | [`OptionalPed`](../type-aliases/OptionalPed.md) | `null` |

#### Returns

`void`

#### Defined in

[src/redm/entities/Ped.ts:484](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/redm/entities/Ped.ts#L484)

***

### applyDamagePack()

```ts
applyDamagePack(
   damagePack, 
   damage, 
   mult): void
```

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `damagePack` | `string` | the damage decal to apply see [here](https://github.com/femga/rdr3_discoveries/blob/master/peds_customization/ped_decals.lua) for more documentation |
| `damage` | `number` | the damage to apply |
| `mult` | `number` | the multiplier? |

#### Returns

`void`

#### Defined in

[src/redm/entities/Ped.ts:503](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/redm/entities/Ped.ts#L503)

***

### canBeTargetedByPlayer()

```ts
canBeTargetedByPlayer(player, toggle): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `player` | [`Player`](Player.md) |
| `toggle` | `boolean` |

#### Returns

`void`

#### Defined in

[src/redm/entities/Ped.ts:344](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/redm/entities/Ped.ts#L344)

***

### clearLastBoneDamage()

```ts
clearLastBoneDamage(): void
```

#### Returns

`void`

#### Defined in

[src/redm/entities/Ped.ts:348](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/redm/entities/Ped.ts#L348)

***

### clone()

```ts
clone(
   network, 
   bScriptHostPed, 
   copyHeadBlend): Ped
```

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

#### Defined in

[src/redm/entities/Ped.ts:459](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/redm/entities/Ped.ts#L459)

***

### cloneTo()

```ts
cloneTo(targetPed): void
```

clones the ped onto the target ped

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `targetPed` | [`Ped`](Ped.md) | the ped to clone onto |

#### Returns

`void`

#### Defined in

[src/redm/entities/Ped.ts:473](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/redm/entities/Ped.ts#L473)

***

### damage()

```ts
damage(
   amount, 
   boneId, 
   killer?): void
```

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `amount` | `number` | `undefined` |
| `boneId` | `number` | `0` |
| `killer`? | [`Ped`](Ped.md) | `undefined` |

#### Returns

`void`

#### Defined in

[src/redm/entities/Ped.ts:426](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/redm/entities/Ped.ts#L426)

***

### delete()

```ts
delete(): void
```

Removes the specified ped if its not a player entity

#### Returns

`void`

#### Defined in

[src/redm/entities/Ped.ts:447](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/redm/entities/Ped.ts#L447)

***

### getJacker()

```ts
getJacker(): Ped
```

returns the ped who jacked this ped

#### Returns

[`Ped`](Ped.md)

#### Defined in

[src/redm/entities/Ped.ts:335](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/redm/entities/Ped.ts#L335)

***

### isInteractionPossible()

```ts
isInteractionPossible(animal): boolean
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `animal` | [`Ped`](Ped.md) |

#### Returns

`boolean`

#### Defined in

[src/redm/entities/Ped.ts:357](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/redm/entities/Ped.ts#L357)

***

### isOnVehicle()

```ts
isOnVehicle(vehicle): boolean
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `vehicle` | [`Vehicle`](Vehicle.md) |

#### Returns

`boolean`

#### Defined in

[src/redm/entities/Ped.ts:367](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/redm/entities/Ped.ts#L367)

***

### isSeatFree()

```ts
isSeatFree(seatIndex): boolean
```

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `seatIndex` | [`VehicleSeat`](../enumerations/VehicleSeat.md) | the seat index to check |

#### Returns

`boolean`

true of the specified seat is free on the mount

#### Defined in

[src/redm/entities/Ped.ts:400](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/redm/entities/Ped.ts#L400)

***

### isSittingInVehicle()

```ts
isSittingInVehicle(vehicle): boolean
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `vehicle` | [`Vehicle`](Vehicle.md) |

#### Returns

`boolean`

#### Defined in

[src/redm/entities/Ped.ts:371](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/redm/entities/Ped.ts#L371)

***

### killPed()

```ts
killPed(killer?): void
```

kills the ped and optionally sets the killer

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `killer`? | `BaseEntity` | the entity that killed the ped |

#### Returns

`void`

#### Defined in

[src/redm/entities/Ped.ts:422](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/redm/entities/Ped.ts#L422)

***

### removeFromMount()

```ts
removeFromMount(): void
```

#### Returns

`void`

#### Defined in

[src/redm/entities/Ped.ts:390](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/redm/entities/Ped.ts#L390)

***

### setCanBeKnockedOffVehicle()

```ts
setCanBeKnockedOffVehicle(state): void
```

this returns a different type then the getter so we can't use set, maybe ts will fix soon (tm)

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `state` | [`KnockOffVehicle`](../enumerations/KnockOffVehicle.md) | how hard it will be to knock a ped off their vehicle |

#### Returns

`void`

#### Defined in

[src/redm/entities/Ped.ts:440](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/redm/entities/Ped.ts#L440)

***

### setCrouchMovement()

```ts
setCrouchMovement(state, immediately): void
```

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `state` | `boolean` | `undefined` |
| `immediately` | `boolean` | `false` |

#### Returns

`void`

#### Defined in

[src/redm/entities/Ped.ts:339](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/redm/entities/Ped.ts#L339)

***

### setIntoVehicle()

```ts
setIntoVehicle(vehicle, seatIndex): void
```

Sets the ped into the specified vehicle

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `vehicle` | [`Vehicle`](Vehicle.md) | the vehicle to put the ped into |
| `seatIndex` | [`VehicleSeat`](../enumerations/VehicleSeat.md) | the seat index to put the ped into |

#### Returns

`void`

#### Defined in

[src/redm/entities/Ped.ts:414](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/redm/entities/Ped.ts#L414)

***

### setOntoMount()

```ts
setOntoMount(targetPed, seatIndex): void
```

puts the ped onto the specified mount

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `targetPed` | [`Ped`](Ped.md) | the horse to put the ped on |
| `seatIndex` | [`VehicleSeat`](../enumerations/VehicleSeat.md) | the seat index to put the ped on |

#### Returns

`void`

#### Defined in

[src/redm/entities/Ped.ts:385](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/redm/entities/Ped.ts#L385)

***

### warpOutOfVehicle()

```ts
warpOutOfVehicle(): void
```

#### Returns

`void`

#### Defined in

[src/redm/entities/Ped.ts:375](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/redm/entities/Ped.ts#L375)

***

### blockScenariosInArea()

```ts
static blockScenariosInArea(
   vec1, 
   vec2, 
   blockingFlags): number
```

Blocks scenarios inbetween the specified vectors

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `vec1` | [`Vector3`](../../fivem/classes/Vector3.md) |  |
| `vec2` | [`Vector3`](../../fivem/classes/Vector3.md) |  |
| `blockingFlags` | `number` | you can find blocking flags [here](https://github.com/Halen84/RDR3-Native-Flags-And-Enums/blob/main/ADD_SCENARIO_BLOCKING_AREA/README.md) |

#### Returns

`number`

the scenarioId that can be used in [removeScenarioBlock](Ped.md#removescenarioblock) to unblock

#### Todo

Move to Game

#### Defined in

[src/redm/entities/Ped.ts:26](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/redm/entities/Ped.ts#L26)

***

### removeScenarioBlock()

```ts
static removeScenarioBlock(scenarioId): void
```

Removes the blocking of scenarios in the specified area

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `scenarioId` | `number` | the number returned from [blockScenariosInArea](Ped.md#blockscenariosinarea) |

#### Returns

`void`

#### Defined in

[src/redm/entities/Ped.ts:47](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/redm/entities/Ped.ts#L47)
