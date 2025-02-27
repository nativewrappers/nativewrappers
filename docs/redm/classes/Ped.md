[@nativewrappers/fivem](../../README.md) / [redm](../README.md) / Ped

# Class: Ped

Defined in: [src/redm/entities/Ped.ts:11](https://github.com/nativewrappers/nativewrappers/blob/3a5a8937f4f56e42414bc65083bf196262ee500c/src/redm/entities/Ped.ts#L11)

## Extends

- `BaseEntity`

## Constructors

### new Ped()

```ts
new Ped(handle): Ped
```

Defined in: [src/redm/entities/Ped.ts:14](https://github.com/nativewrappers/nativewrappers/blob/3a5a8937f4f56e42414bc65083bf196262ee500c/src/redm/entities/Ped.ts#L14)

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

Defined in: [src/redm/entities/Ped.ts:102](https://github.com/nativewrappers/nativewrappers/blob/3a5a8937f4f56e42414bc65083bf196262ee500c/src/redm/entities/Ped.ts#L102)

##### Returns

`number`

#### Set Signature

```ts
set Accuracy(accuracy): void
```

Defined in: [src/redm/entities/Ped.ts:106](https://github.com/nativewrappers/nativewrappers/blob/3a5a8937f4f56e42414bc65083bf196262ee500c/src/redm/entities/Ped.ts#L106)

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

Defined in: [src/redm/entities/Ped.ts:68](https://github.com/nativewrappers/nativewrappers/blob/3a5a8937f4f56e42414bc65083bf196262ee500c/src/redm/entities/Ped.ts#L68)

##### Returns

[`Attributes`](Attributes.md)

the [Attributes](Attributes.md) for the current ped

***

### CanBeKnockedOffVehicle

#### Get Signature

```ts
get CanBeKnockedOffVehicle(): boolean
```

Defined in: [src/redm/entities/Ped.ts:110](https://github.com/nativewrappers/nativewrappers/blob/3a5a8937f4f56e42414bc65083bf196262ee500c/src/redm/entities/Ped.ts#L110)

##### Returns

`boolean`

***

### CanBeTargeted

#### Set Signature

```ts
set CanBeTargeted(toggle): void
```

Defined in: [src/redm/entities/Ped.ts:324](https://github.com/nativewrappers/nativewrappers/blob/3a5a8937f4f56e42414bc65083bf196262ee500c/src/redm/entities/Ped.ts#L324)

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

Defined in: [src/redm/entities/Ped.ts:285](https://github.com/nativewrappers/nativewrappers/blob/3a5a8937f4f56e42414bc65083bf196262ee500c/src/redm/entities/Ped.ts#L285)

##### Returns

`boolean`

***

### CurrentVehicle

#### Get Signature

```ts
get CurrentVehicle(): null | Vehicle
```

Defined in: [src/redm/entities/Ped.ts:507](https://github.com/nativewrappers/nativewrappers/blob/3a5a8937f4f56e42414bc65083bf196262ee500c/src/redm/entities/Ped.ts#L507)

##### Returns

`null` \| [`Vehicle`](Vehicle.md)

***

### DamageCleanliness

#### Get Signature

```ts
get DamageCleanliness(): eDamageCleanliness
```

Defined in: [src/redm/entities/Ped.ts:308](https://github.com/nativewrappers/nativewrappers/blob/3a5a8937f4f56e42414bc65083bf196262ee500c/src/redm/entities/Ped.ts#L308)

##### Returns

[`eDamageCleanliness`](../enumerations/eDamageCleanliness.md)

#### Set Signature

```ts
set DamageCleanliness(cleanliness): void
```

Defined in: [src/redm/entities/Ped.ts:316](https://github.com/nativewrappers/nativewrappers/blob/3a5a8937f4f56e42414bc65083bf196262ee500c/src/redm/entities/Ped.ts#L316)

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

Defined in: [src/redm/entities/Ped.ts:320](https://github.com/nativewrappers/nativewrappers/blob/3a5a8937f4f56e42414bc65083bf196262ee500c/src/redm/entities/Ped.ts#L320)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `amount` | `number` |

##### Returns

`void`

***

### Handle

#### Get Signature

```ts
get Handle(): number
```

Defined in: [src/redm/entities/BaseEntity.ts:31](https://github.com/nativewrappers/nativewrappers/blob/3a5a8937f4f56e42414bc65083bf196262ee500c/src/redm/entities/BaseEntity.ts#L31)

##### Returns

`number`

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

Defined in: [src/redm/entities/Ped.ts:90](https://github.com/nativewrappers/nativewrappers/blob/3a5a8937f4f56e42414bc65083bf196262ee500c/src/redm/entities/Ped.ts#L90)

##### Returns

`number`

#### Set Signature

```ts
set Heading(heading): void
```

Defined in: [src/redm/entities/Ped.ts:94](https://github.com/nativewrappers/nativewrappers/blob/3a5a8937f4f56e42414bc65083bf196262ee500c/src/redm/entities/Ped.ts#L94)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `heading` | `number` |

##### Returns

`void`

***

### Health

#### Get Signature

```ts
get Health(): number
```

Defined in: [src/redm/entities/BaseEntity.ts:39](https://github.com/nativewrappers/nativewrappers/blob/3a5a8937f4f56e42414bc65083bf196262ee500c/src/redm/entities/BaseEntity.ts#L39)

##### Returns

`number`

#### Set Signature

```ts
set Health(amount): void
```

Defined in: [src/redm/entities/BaseEntity.ts:35](https://github.com/nativewrappers/nativewrappers/blob/3a5a8937f4f56e42414bc65083bf196262ee500c/src/redm/entities/BaseEntity.ts#L35)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `amount` | `number` |

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

Defined in: [src/redm/entities/Ped.ts:257](https://github.com/nativewrappers/nativewrappers/blob/3a5a8937f4f56e42414bc65083bf196262ee500c/src/redm/entities/Ped.ts#L257)

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

Defined in: [src/redm/entities/Ped.ts:74](https://github.com/nativewrappers/nativewrappers/blob/3a5a8937f4f56e42414bc65083bf196262ee500c/src/redm/entities/Ped.ts#L74)

##### Returns

`boolean`

***

### IsBeingJacked

#### Get Signature

```ts
get IsBeingJacked(): boolean
```

Defined in: [src/redm/entities/Ped.ts:273](https://github.com/nativewrappers/nativewrappers/blob/3a5a8937f4f56e42414bc65083bf196262ee500c/src/redm/entities/Ped.ts#L273)

##### Returns

`boolean`

***

### IsClimbing

#### Get Signature

```ts
get IsClimbing(): boolean
```

Defined in: [src/redm/entities/Ped.ts:228](https://github.com/nativewrappers/nativewrappers/blob/3a5a8937f4f56e42414bc65083bf196262ee500c/src/redm/entities/Ped.ts#L228)

##### Returns

`boolean`

***

### IsClimbingLadder

#### Get Signature

```ts
get IsClimbingLadder(): boolean
```

Defined in: [src/redm/entities/Ped.ts:232](https://github.com/nativewrappers/nativewrappers/blob/3a5a8937f4f56e42414bc65083bf196262ee500c/src/redm/entities/Ped.ts#L232)

##### Returns

`boolean`

***

### IsDamaged

#### Get Signature

```ts
get IsDamaged(): boolean
```

Defined in: [src/redm/entities/Ped.ts:296](https://github.com/nativewrappers/nativewrappers/blob/3a5a8937f4f56e42414bc65083bf196262ee500c/src/redm/entities/Ped.ts#L296)

returns true if [DamageCleanliness](Ped.md#damagecleanliness) was ever lower than [eDamageCleanliness.Good](../enumerations/eDamageCleanliness.md#good)

##### Returns

`boolean`

#### Set Signature

```ts
set IsDamaged(damaged): void
```

Defined in: [src/redm/entities/Ped.ts:304](https://github.com/nativewrappers/nativewrappers/blob/3a5a8937f4f56e42414bc65083bf196262ee500c/src/redm/entities/Ped.ts#L304)

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

Defined in: [src/redm/entities/Ped.ts:245](https://github.com/nativewrappers/nativewrappers/blob/3a5a8937f4f56e42414bc65083bf196262ee500c/src/redm/entities/Ped.ts#L245)

##### Returns

`boolean`

***

### IsFalling

#### Get Signature

```ts
get IsFalling(): boolean
```

Defined in: [src/redm/entities/Ped.ts:211](https://github.com/nativewrappers/nativewrappers/blob/3a5a8937f4f56e42414bc65083bf196262ee500c/src/redm/entities/Ped.ts#L211)

##### Returns

`boolean`

***

### IsFatallyInjured

#### Get Signature

```ts
get IsFatallyInjured(): boolean
```

Defined in: [src/redm/entities/Ped.ts:82](https://github.com/nativewrappers/nativewrappers/blob/3a5a8937f4f56e42414bc65083bf196262ee500c/src/redm/entities/Ped.ts#L82)

##### Returns

`boolean`

***

### IsHuman

#### Get Signature

```ts
get IsHuman(): boolean
```

Defined in: [src/redm/entities/Ped.ts:118](https://github.com/nativewrappers/nativewrappers/blob/3a5a8937f4f56e42414bc65083bf196262ee500c/src/redm/entities/Ped.ts#L118)

##### Returns

`boolean`

***

### IsInAnyBoat

#### Get Signature

```ts
get IsInAnyBoat(): boolean
```

Defined in: [src/redm/entities/Ped.ts:195](https://github.com/nativewrappers/nativewrappers/blob/3a5a8937f4f56e42414bc65083bf196262ee500c/src/redm/entities/Ped.ts#L195)

##### Returns

`boolean`

***

### IsInAnyHeli

#### Get Signature

```ts
get IsInAnyHeli(): boolean
```

Defined in: [src/redm/entities/Ped.ts:199](https://github.com/nativewrappers/nativewrappers/blob/3a5a8937f4f56e42414bc65083bf196262ee500c/src/redm/entities/Ped.ts#L199)

##### Returns

`boolean`

***

### IsInAnyPlane

#### Get Signature

```ts
get IsInAnyPlane(): boolean
```

Defined in: [src/redm/entities/Ped.ts:203](https://github.com/nativewrappers/nativewrappers/blob/3a5a8937f4f56e42414bc65083bf196262ee500c/src/redm/entities/Ped.ts#L203)

##### Returns

`boolean`

***

### IsInCombatRoll

#### Get Signature

```ts
get IsInCombatRoll(): boolean
```

Defined in: [src/redm/entities/Ped.ts:277](https://github.com/nativewrappers/nativewrappers/blob/3a5a8937f4f56e42414bc65083bf196262ee500c/src/redm/entities/Ped.ts#L277)

##### Returns

`boolean`

***

### IsInFlyingVehicle

#### Get Signature

```ts
get IsInFlyingVehicle(): boolean
```

Defined in: [src/redm/entities/Ped.ts:207](https://github.com/nativewrappers/nativewrappers/blob/3a5a8937f4f56e42414bc65083bf196262ee500c/src/redm/entities/Ped.ts#L207)

##### Returns

`boolean`

***

### IsInjured

#### Get Signature

```ts
get IsInjured(): boolean
```

Defined in: [src/redm/entities/Ped.ts:78](https://github.com/nativewrappers/nativewrappers/blob/3a5a8937f4f56e42414bc65083bf196262ee500c/src/redm/entities/Ped.ts#L78)

##### Returns

`boolean`

***

### IsInteractingWithAnimal

#### Get Signature

```ts
get IsInteractingWithAnimal(): boolean
```

Defined in: [src/redm/entities/Ped.ts:178](https://github.com/nativewrappers/nativewrappers/blob/3a5a8937f4f56e42414bc65083bf196262ee500c/src/redm/entities/Ped.ts#L178)

##### Returns

`boolean`

***

### IsJacking

#### Get Signature

```ts
get IsJacking(): boolean
```

Defined in: [src/redm/entities/Ped.ts:265](https://github.com/nativewrappers/nativewrappers/blob/3a5a8937f4f56e42414bc65083bf196262ee500c/src/redm/entities/Ped.ts#L265)

##### Returns

`boolean`

***

### IsJumping

#### Get Signature

```ts
get IsJumping(): boolean
```

Defined in: [src/redm/entities/Ped.ts:224](https://github.com/nativewrappers/nativewrappers/blob/3a5a8937f4f56e42414bc65083bf196262ee500c/src/redm/entities/Ped.ts#L224)

##### Returns

`boolean`

***

### IsMale

#### Get Signature

```ts
get IsMale(): boolean
```

Defined in: [src/redm/entities/Ped.ts:114](https://github.com/nativewrappers/nativewrappers/blob/3a5a8937f4f56e42414bc65083bf196262ee500c/src/redm/entities/Ped.ts#L114)

##### Returns

`boolean`

***

### IsOnTopOfVehicle

#### Get Signature

```ts
get IsOnTopOfVehicle(): boolean
```

Defined in: [src/redm/entities/Ped.ts:122](https://github.com/nativewrappers/nativewrappers/blob/3a5a8937f4f56e42414bc65083bf196262ee500c/src/redm/entities/Ped.ts#L122)

##### Returns

`boolean`

***

### IsOpeningADoor

#### Get Signature

```ts
get IsOpeningADoor(): boolean
```

Defined in: [src/redm/entities/Ped.ts:249](https://github.com/nativewrappers/nativewrappers/blob/3a5a8937f4f56e42414bc65083bf196262ee500c/src/redm/entities/Ped.ts#L249)

##### Returns

`boolean`

***

### IsPlantingBomb

#### Get Signature

```ts
get IsPlantingBomb(): boolean
```

Defined in: [src/redm/entities/Ped.ts:191](https://github.com/nativewrappers/nativewrappers/blob/3a5a8937f4f56e42414bc65083bf196262ee500c/src/redm/entities/Ped.ts#L191)

##### Returns

`boolean`

***

### IsPlayer

#### Get Signature

```ts
get IsPlayer(): boolean
```

Defined in: [src/redm/entities/Ped.ts:86](https://github.com/nativewrappers/nativewrappers/blob/3a5a8937f4f56e42414bc65083bf196262ee500c/src/redm/entities/Ped.ts#L86)

##### Returns

`boolean`

***

### IsShooting

#### Get Signature

```ts
get IsShooting(): boolean
```

Defined in: [src/redm/entities/Ped.ts:98](https://github.com/nativewrappers/nativewrappers/blob/3a5a8937f4f56e42414bc65083bf196262ee500c/src/redm/entities/Ped.ts#L98)

##### Returns

`boolean`

***

### IsSittingInAnyVehicle

#### Get Signature

```ts
get IsSittingInAnyVehicle(): boolean
```

Defined in: [src/redm/entities/Ped.ts:187](https://github.com/nativewrappers/nativewrappers/blob/3a5a8937f4f56e42414bc65083bf196262ee500c/src/redm/entities/Ped.ts#L187)

##### Returns

`boolean`

***

### IsSliding

#### Get Signature

```ts
get IsSliding(): boolean
```

Defined in: [src/redm/entities/Ped.ts:215](https://github.com/nativewrappers/nativewrappers/blob/3a5a8937f4f56e42414bc65083bf196262ee500c/src/redm/entities/Ped.ts#L215)

##### Returns

`boolean`

***

### IsStealthed

#### Get Signature

```ts
get IsStealthed(): boolean
```

Defined in: [src/redm/entities/Ped.ts:261](https://github.com/nativewrappers/nativewrappers/blob/3a5a8937f4f56e42414bc65083bf196262ee500c/src/redm/entities/Ped.ts#L261)

##### Returns

`boolean`

***

### IsStunned

#### Get Signature

```ts
get IsStunned(): boolean
```

Defined in: [src/redm/entities/Ped.ts:269](https://github.com/nativewrappers/nativewrappers/blob/3a5a8937f4f56e42414bc65083bf196262ee500c/src/redm/entities/Ped.ts#L269)

##### Returns

`boolean`

***

### IsVaulting

#### Get Signature

```ts
get IsVaulting(): boolean
```

Defined in: [src/redm/entities/Ped.ts:241](https://github.com/nativewrappers/nativewrappers/blob/3a5a8937f4f56e42414bc65083bf196262ee500c/src/redm/entities/Ped.ts#L241)

##### Returns

`boolean`

***

### LeadingHorse

#### Get Signature

```ts
get LeadingHorse(): OptionalPed
```

Defined in: [src/redm/entities/Ped.ts:146](https://github.com/nativewrappers/nativewrappers/blob/3a5a8937f4f56e42414bc65083bf196262ee500c/src/redm/entities/Ped.ts#L146)

returns the horse that this ped is leading

##### Returns

[`OptionalPed`](../type-aliases/OptionalPed.md)

***

### MaxHealth

#### Get Signature

```ts
get MaxHealth(): number
```

Defined in: [src/redm/entities/Ped.ts:61](https://github.com/nativewrappers/nativewrappers/blob/3a5a8937f4f56e42414bc65083bf196262ee500c/src/redm/entities/Ped.ts#L61)

##### Returns

`number`

the maximum health of the ped

#### Set Signature

```ts
set MaxHealth(amount): void
```

Defined in: [src/redm/entities/Ped.ts:54](https://github.com/nativewrappers/nativewrappers/blob/3a5a8937f4f56e42414bc65083bf196262ee500c/src/redm/entities/Ped.ts#L54)

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
get Mount(): OptionalPed
```

Defined in: [src/redm/entities/Ped.ts:133](https://github.com/nativewrappers/nativewrappers/blob/3a5a8937f4f56e42414bc65083bf196262ee500c/src/redm/entities/Ped.ts#L133)

##### Returns

[`OptionalPed`](../type-aliases/OptionalPed.md)

the last mount that this ped was on, or null if it doesn't exist

***

### Owner

#### Get Signature

```ts
get Owner(): OptionalPed
```

Defined in: [src/redm/entities/Ped.ts:159](https://github.com/nativewrappers/nativewrappers/blob/3a5a8937f4f56e42414bc65083bf196262ee500c/src/redm/entities/Ped.ts#L159)

returns the owner of the current animal

##### Returns

[`OptionalPed`](../type-aliases/OptionalPed.md)

***

### OwnsAnimal

#### Set Signature

```ts
set OwnsAnimal(animal): void
```

Defined in: [src/redm/entities/Ped.ts:352](https://github.com/nativewrappers/nativewrappers/blob/3a5a8937f4f56e42414bc65083bf196262ee500c/src/redm/entities/Ped.ts#L352)

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

Defined in: [src/redm/entities/BaseEntity.ts:43](https://github.com/nativewrappers/nativewrappers/blob/3a5a8937f4f56e42414bc65083bf196262ee500c/src/redm/entities/BaseEntity.ts#L43)

##### Returns

[`Vector3`](../../fivem/classes/Vector3.md)

#### Set Signature

```ts
set Position(pos): void
```

Defined in: [src/redm/entities/BaseEntity.ts:47](https://github.com/nativewrappers/nativewrappers/blob/3a5a8937f4f56e42414bc65083bf196262ee500c/src/redm/entities/BaseEntity.ts#L47)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `pos` | [`Vector3`](../../fivem/classes/Vector3.md) |

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

Defined in: [src/redm/entities/Ped.ts:253](https://github.com/nativewrappers/nativewrappers/blob/3a5a8937f4f56e42414bc65083bf196262ee500c/src/redm/entities/Ped.ts#L253)

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

Defined in: [src/redm/entities/Ped.ts:169](https://github.com/nativewrappers/nativewrappers/blob/3a5a8937f4f56e42414bc65083bf196262ee500c/src/redm/entities/Ped.ts#L169)

##### Returns

[`TamingState`](../enumerations/TamingState.md)

***

### Vehicle

#### Get Signature

```ts
get Vehicle(): Vehicle
```

Defined in: [src/redm/entities/Ped.ts:126](https://github.com/nativewrappers/nativewrappers/blob/3a5a8937f4f56e42414bc65083bf196262ee500c/src/redm/entities/Ped.ts#L126)

##### Returns

[`Vehicle`](Vehicle.md)

## Methods

### addArmour()

```ts
addArmour(amount): void
```

Defined in: [src/redm/entities/Ped.ts:480](https://github.com/nativewrappers/nativewrappers/blob/3a5a8937f4f56e42414bc65083bf196262ee500c/src/redm/entities/Ped.ts#L480)

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
   boneId, 
   pedKiller): void
```

Defined in: [src/redm/entities/Ped.ts:484](https://github.com/nativewrappers/nativewrappers/blob/3a5a8937f4f56e42414bc65083bf196262ee500c/src/redm/entities/Ped.ts#L484)

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `damageAmount` | `number` | `undefined` |
| `boneId` | `number` | `0` |
| `pedKiller` | [`OptionalPed`](../type-aliases/OptionalPed.md) | `null` |

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

Defined in: [src/redm/entities/Ped.ts:503](https://github.com/nativewrappers/nativewrappers/blob/3a5a8937f4f56e42414bc65083bf196262ee500c/src/redm/entities/Ped.ts#L503)

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

Defined in: [src/redm/entities/Ped.ts:344](https://github.com/nativewrappers/nativewrappers/blob/3a5a8937f4f56e42414bc65083bf196262ee500c/src/redm/entities/Ped.ts#L344)

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

Defined in: [src/redm/entities/Ped.ts:348](https://github.com/nativewrappers/nativewrappers/blob/3a5a8937f4f56e42414bc65083bf196262ee500c/src/redm/entities/Ped.ts#L348)

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

Defined in: [src/redm/entities/Ped.ts:459](https://github.com/nativewrappers/nativewrappers/blob/3a5a8937f4f56e42414bc65083bf196262ee500c/src/redm/entities/Ped.ts#L459)

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

Defined in: [src/redm/entities/Ped.ts:473](https://github.com/nativewrappers/nativewrappers/blob/3a5a8937f4f56e42414bc65083bf196262ee500c/src/redm/entities/Ped.ts#L473)

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
   boneId, 
   killer?): void
```

Defined in: [src/redm/entities/Ped.ts:426](https://github.com/nativewrappers/nativewrappers/blob/3a5a8937f4f56e42414bc65083bf196262ee500c/src/redm/entities/Ped.ts#L426)

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `amount` | `number` | `undefined` |
| `boneId` | `number` | `0` |
| `killer`? | [`Ped`](Ped.md) | `undefined` |

#### Returns

`void`

***

### delete()

```ts
delete(): void
```

Defined in: [src/redm/entities/Ped.ts:447](https://github.com/nativewrappers/nativewrappers/blob/3a5a8937f4f56e42414bc65083bf196262ee500c/src/redm/entities/Ped.ts#L447)

Removes the specified ped if its not a player entity

#### Returns

`void`

***

### getJacker()

```ts
getJacker(): Ped
```

Defined in: [src/redm/entities/Ped.ts:335](https://github.com/nativewrappers/nativewrappers/blob/3a5a8937f4f56e42414bc65083bf196262ee500c/src/redm/entities/Ped.ts#L335)

returns the ped who jacked this ped

#### Returns

[`Ped`](Ped.md)

***

### isInteractionPossible()

```ts
isInteractionPossible(animal): boolean
```

Defined in: [src/redm/entities/Ped.ts:357](https://github.com/nativewrappers/nativewrappers/blob/3a5a8937f4f56e42414bc65083bf196262ee500c/src/redm/entities/Ped.ts#L357)

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

Defined in: [src/redm/entities/Ped.ts:367](https://github.com/nativewrappers/nativewrappers/blob/3a5a8937f4f56e42414bc65083bf196262ee500c/src/redm/entities/Ped.ts#L367)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `vehicle` | [`Vehicle`](Vehicle.md) |

#### Returns

`boolean`

***

### isSeatFree()

```ts
isSeatFree(seatIndex): boolean
```

Defined in: [src/redm/entities/Ped.ts:400](https://github.com/nativewrappers/nativewrappers/blob/3a5a8937f4f56e42414bc65083bf196262ee500c/src/redm/entities/Ped.ts#L400)

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `seatIndex` | [`VehicleSeat`](../enumerations/VehicleSeat.md) | the seat index to check |

#### Returns

`boolean`

true of the specified seat is free on the mount

***

### isSittingInVehicle()

```ts
isSittingInVehicle(vehicle): boolean
```

Defined in: [src/redm/entities/Ped.ts:371](https://github.com/nativewrappers/nativewrappers/blob/3a5a8937f4f56e42414bc65083bf196262ee500c/src/redm/entities/Ped.ts#L371)

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

Defined in: [src/redm/entities/Ped.ts:422](https://github.com/nativewrappers/nativewrappers/blob/3a5a8937f4f56e42414bc65083bf196262ee500c/src/redm/entities/Ped.ts#L422)

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

Defined in: [src/redm/entities/Ped.ts:390](https://github.com/nativewrappers/nativewrappers/blob/3a5a8937f4f56e42414bc65083bf196262ee500c/src/redm/entities/Ped.ts#L390)

#### Returns

`void`

***

### replaceHandle()

```ts
replaceHandle(newHandle): void
```

Defined in: [src/redm/entities/BaseEntity.ts:27](https://github.com/nativewrappers/nativewrappers/blob/3a5a8937f4f56e42414bc65083bf196262ee500c/src/redm/entities/BaseEntity.ts#L27)

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

Defined in: [src/redm/entities/Ped.ts:440](https://github.com/nativewrappers/nativewrappers/blob/3a5a8937f4f56e42414bc65083bf196262ee500c/src/redm/entities/Ped.ts#L440)

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
setCrouchMovement(state, immediately): void
```

Defined in: [src/redm/entities/Ped.ts:339](https://github.com/nativewrappers/nativewrappers/blob/3a5a8937f4f56e42414bc65083bf196262ee500c/src/redm/entities/Ped.ts#L339)

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `state` | `boolean` | `undefined` |
| `immediately` | `boolean` | `false` |

#### Returns

`void`

***

### setIntoVehicle()

```ts
setIntoVehicle(vehicle, seatIndex): void
```

Defined in: [src/redm/entities/Ped.ts:414](https://github.com/nativewrappers/nativewrappers/blob/3a5a8937f4f56e42414bc65083bf196262ee500c/src/redm/entities/Ped.ts#L414)

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

Defined in: [src/redm/entities/Ped.ts:385](https://github.com/nativewrappers/nativewrappers/blob/3a5a8937f4f56e42414bc65083bf196262ee500c/src/redm/entities/Ped.ts#L385)

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

Defined in: [src/redm/entities/Ped.ts:375](https://github.com/nativewrappers/nativewrappers/blob/3a5a8937f4f56e42414bc65083bf196262ee500c/src/redm/entities/Ped.ts#L375)

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

Defined in: [src/redm/entities/Ped.ts:26](https://github.com/nativewrappers/nativewrappers/blob/3a5a8937f4f56e42414bc65083bf196262ee500c/src/redm/entities/Ped.ts#L26)

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

***

### removeScenarioBlock()

```ts
static removeScenarioBlock(scenarioId): void
```

Defined in: [src/redm/entities/Ped.ts:47](https://github.com/nativewrappers/nativewrappers/blob/3a5a8937f4f56e42414bc65083bf196262ee500c/src/redm/entities/Ped.ts#L47)

Removes the blocking of scenarios in the specified area

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `scenarioId` | `number` | the number returned from [blockScenariosInArea](Ped.md#blockscenariosinarea) |

#### Returns

`void`
