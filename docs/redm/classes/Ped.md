[@nativewrappers/fivem](../../README.md) / [redm](../README.md) / Ped

# Class: Ped

Defined in: [src/redm/entities/Ped.ts:9](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/redm/entities/Ped.ts#L9)

## Extends

- `BaseEntity`

## Constructors

### new Ped()

```ts
new Ped(handle): Ped
```

Defined in: [src/redm/entities/Ped.ts:12](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/redm/entities/Ped.ts#L12)

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

Defined in: [src/redm/entities/Ped.ts:92](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/redm/entities/Ped.ts#L92)

##### Returns

`number`

#### Set Signature

```ts
set Accuracy(accuracy): void
```

Defined in: [src/redm/entities/Ped.ts:96](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/redm/entities/Ped.ts#L96)

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

Defined in: [src/redm/entities/Ped.ts:66](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/redm/entities/Ped.ts#L66)

##### Returns

[`Attributes`](Attributes.md)

the [Attributes](Attributes.md) for the current ped

***

### CanBeKnockedOffVehicle

#### Get Signature

```ts
get CanBeKnockedOffVehicle(): boolean
```

Defined in: [src/redm/entities/Ped.ts:100](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/redm/entities/Ped.ts#L100)

##### Returns

`boolean`

***

### CanBeTargeted

#### Set Signature

```ts
set CanBeTargeted(toggle): void
```

Defined in: [src/redm/entities/Ped.ts:319](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/redm/entities/Ped.ts#L319)

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

Defined in: [src/redm/entities/Ped.ts:279](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/redm/entities/Ped.ts#L279)

##### Returns

`boolean`

***

### CurrentVehicle

#### Get Signature

```ts
get CurrentVehicle(): null | Vehicle
```

Defined in: [src/redm/entities/Ped.ts:488](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/redm/entities/Ped.ts#L488)

##### Returns

`null` \| [`Vehicle`](Vehicle.md)

***

### DamageCleanliness

#### Get Signature

```ts
get DamageCleanliness(): eDamageCleanliness
```

Defined in: [src/redm/entities/Ped.ts:303](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/redm/entities/Ped.ts#L303)

##### Returns

[`eDamageCleanliness`](../enumerations/eDamageCleanliness.md)

#### Set Signature

```ts
set DamageCleanliness(cleanliness): void
```

Defined in: [src/redm/entities/Ped.ts:311](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/redm/entities/Ped.ts#L311)

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

Defined in: [src/redm/entities/Ped.ts:315](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/redm/entities/Ped.ts#L315)

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

Defined in: [src/redm/entities/BaseEntity.ts:52](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/redm/entities/BaseEntity.ts#L52)

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

Defined in: [src/redm/entities/BaseEntity.ts:59](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/redm/entities/BaseEntity.ts#L59)

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

Defined in: [src/redm/entities/BaseEntity.ts:80](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/redm/entities/BaseEntity.ts#L80)

##### Returns

`number`

the heading of the current BaseEntity

#### Set Signature

```ts
set Heading(heading): void
```

Defined in: [src/redm/entities/BaseEntity.ts:87](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/redm/entities/BaseEntity.ts#L87)

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

Defined in: [src/redm/entities/BaseEntity.ts:73](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/redm/entities/BaseEntity.ts#L73)

##### Returns

`number`

the amount of health the current BaseEntity has

#### Set Signature

```ts
set Health(amount): void
```

Defined in: [src/redm/entities/BaseEntity.ts:66](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/redm/entities/BaseEntity.ts#L66)

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

Defined in: [src/redm/entities/Ped.ts:251](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/redm/entities/Ped.ts#L251)

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

Defined in: [src/redm/entities/Ped.ts:72](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/redm/entities/Ped.ts#L72)

##### Returns

`boolean`

***

### IsBeingJacked

#### Get Signature

```ts
get IsBeingJacked(): boolean
```

Defined in: [src/redm/entities/Ped.ts:267](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/redm/entities/Ped.ts#L267)

##### Returns

`boolean`

***

### IsClimbing

#### Get Signature

```ts
get IsClimbing(): boolean
```

Defined in: [src/redm/entities/Ped.ts:222](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/redm/entities/Ped.ts#L222)

##### Returns

`boolean`

***

### IsClimbingLadder

#### Get Signature

```ts
get IsClimbingLadder(): boolean
```

Defined in: [src/redm/entities/Ped.ts:226](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/redm/entities/Ped.ts#L226)

##### Returns

`boolean`

***

### IsDamaged

#### Get Signature

```ts
get IsDamaged(): boolean
```

Defined in: [src/redm/entities/Ped.ts:290](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/redm/entities/Ped.ts#L290)

returns true if [DamageCleanliness](Ped.md#damagecleanliness) was ever lower than [eDamageCleanliness.Good](../enumerations/eDamageCleanliness.md#good)

##### Returns

`boolean`

#### Set Signature

```ts
set IsDamaged(damaged): void
```

Defined in: [src/redm/entities/Ped.ts:298](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/redm/entities/Ped.ts#L298)

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

Defined in: [src/redm/entities/Ped.ts:239](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/redm/entities/Ped.ts#L239)

##### Returns

`boolean`

***

### IsFalling

#### Get Signature

```ts
get IsFalling(): boolean
```

Defined in: [src/redm/entities/Ped.ts:205](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/redm/entities/Ped.ts#L205)

##### Returns

`boolean`

***

### IsFatallyInjured

#### Get Signature

```ts
get IsFatallyInjured(): boolean
```

Defined in: [src/redm/entities/Ped.ts:80](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/redm/entities/Ped.ts#L80)

##### Returns

`boolean`

***

### IsHuman

#### Get Signature

```ts
get IsHuman(): boolean
```

Defined in: [src/redm/entities/Ped.ts:108](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/redm/entities/Ped.ts#L108)

##### Returns

`boolean`

***

### IsInAnyBoat

#### Get Signature

```ts
get IsInAnyBoat(): boolean
```

Defined in: [src/redm/entities/Ped.ts:189](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/redm/entities/Ped.ts#L189)

##### Returns

`boolean`

***

### IsInAnyHeli

#### Get Signature

```ts
get IsInAnyHeli(): boolean
```

Defined in: [src/redm/entities/Ped.ts:193](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/redm/entities/Ped.ts#L193)

##### Returns

`boolean`

***

### IsInAnyPlane

#### Get Signature

```ts
get IsInAnyPlane(): boolean
```

Defined in: [src/redm/entities/Ped.ts:197](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/redm/entities/Ped.ts#L197)

##### Returns

`boolean`

***

### IsInCombatRoll

#### Get Signature

```ts
get IsInCombatRoll(): boolean
```

Defined in: [src/redm/entities/Ped.ts:271](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/redm/entities/Ped.ts#L271)

##### Returns

`boolean`

***

### IsInFlyingVehicle

#### Get Signature

```ts
get IsInFlyingVehicle(): boolean
```

Defined in: [src/redm/entities/Ped.ts:201](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/redm/entities/Ped.ts#L201)

##### Returns

`boolean`

***

### IsInjured

#### Get Signature

```ts
get IsInjured(): boolean
```

Defined in: [src/redm/entities/Ped.ts:76](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/redm/entities/Ped.ts#L76)

##### Returns

`boolean`

***

### IsInteractingWithAnimal

#### Get Signature

```ts
get IsInteractingWithAnimal(): boolean
```

Defined in: [src/redm/entities/Ped.ts:172](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/redm/entities/Ped.ts#L172)

##### Returns

`boolean`

***

### IsJacking

#### Get Signature

```ts
get IsJacking(): boolean
```

Defined in: [src/redm/entities/Ped.ts:259](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/redm/entities/Ped.ts#L259)

##### Returns

`boolean`

***

### IsJumping

#### Get Signature

```ts
get IsJumping(): boolean
```

Defined in: [src/redm/entities/Ped.ts:218](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/redm/entities/Ped.ts#L218)

##### Returns

`boolean`

***

### IsMale

#### Get Signature

```ts
get IsMale(): boolean
```

Defined in: [src/redm/entities/Ped.ts:104](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/redm/entities/Ped.ts#L104)

##### Returns

`boolean`

***

### IsNetworked

#### Get Signature

```ts
get IsNetworked(): boolean
```

Defined in: [src/redm/entities/BaseEntity.ts:45](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/redm/entities/BaseEntity.ts#L45)

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

Defined in: [src/redm/entities/Ped.ts:112](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/redm/entities/Ped.ts#L112)

##### Returns

`boolean`

***

### IsOpeningADoor

#### Get Signature

```ts
get IsOpeningADoor(): boolean
```

Defined in: [src/redm/entities/Ped.ts:243](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/redm/entities/Ped.ts#L243)

##### Returns

`boolean`

***

### IsPlantingBomb

#### Get Signature

```ts
get IsPlantingBomb(): boolean
```

Defined in: [src/redm/entities/Ped.ts:185](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/redm/entities/Ped.ts#L185)

##### Returns

`boolean`

***

### IsPlayer

#### Get Signature

```ts
get IsPlayer(): boolean
```

Defined in: [src/redm/entities/Ped.ts:84](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/redm/entities/Ped.ts#L84)

##### Returns

`boolean`

***

### IsShooting

#### Get Signature

```ts
get IsShooting(): boolean
```

Defined in: [src/redm/entities/Ped.ts:88](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/redm/entities/Ped.ts#L88)

##### Returns

`boolean`

***

### IsSittingInAnyVehicle

#### Get Signature

```ts
get IsSittingInAnyVehicle(): boolean
```

Defined in: [src/redm/entities/Ped.ts:181](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/redm/entities/Ped.ts#L181)

##### Returns

`boolean`

***

### IsSliding

#### Get Signature

```ts
get IsSliding(): boolean
```

Defined in: [src/redm/entities/Ped.ts:209](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/redm/entities/Ped.ts#L209)

##### Returns

`boolean`

***

### IsStealthed

#### Get Signature

```ts
get IsStealthed(): boolean
```

Defined in: [src/redm/entities/Ped.ts:255](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/redm/entities/Ped.ts#L255)

##### Returns

`boolean`

***

### IsStunned

#### Get Signature

```ts
get IsStunned(): boolean
```

Defined in: [src/redm/entities/Ped.ts:263](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/redm/entities/Ped.ts#L263)

##### Returns

`boolean`

***

### IsVaulting

#### Get Signature

```ts
get IsVaulting(): boolean
```

Defined in: [src/redm/entities/Ped.ts:235](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/redm/entities/Ped.ts#L235)

##### Returns

`boolean`

***

### LeadingHorse

#### Get Signature

```ts
get LeadingHorse(): null | Ped
```

Defined in: [src/redm/entities/Ped.ts:140](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/redm/entities/Ped.ts#L140)

returns the horse that this ped is leading

##### Returns

`null` \| [`Ped`](Ped.md)

***

### MaxHealth

#### Get Signature

```ts
get MaxHealth(): number
```

Defined in: [src/redm/entities/Ped.ts:59](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/redm/entities/Ped.ts#L59)

##### Returns

`number`

the maximum health of the ped

#### Set Signature

```ts
set MaxHealth(amount): void
```

Defined in: [src/redm/entities/Ped.ts:52](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/redm/entities/Ped.ts#L52)

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

Defined in: [src/redm/entities/Ped.ts:127](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/redm/entities/Ped.ts#L127)

##### Returns

`null` \| [`Ped`](Ped.md)

the last mount that this ped was on, or null if it doesn't exist

***

### NetworkId

#### Get Signature

```ts
get NetworkId(): number
```

Defined in: [src/redm/entities/BaseEntity.ts:38](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/redm/entities/BaseEntity.ts#L38)

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

Defined in: [src/redm/entities/Ped.ts:153](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/redm/entities/Ped.ts#L153)

returns the owner of the current animal

##### Returns

`null` \| [`Ped`](Ped.md)

***

### OwnsAnimal

#### Set Signature

```ts
set OwnsAnimal(animal): void
```

Defined in: [src/redm/entities/Ped.ts:347](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/redm/entities/Ped.ts#L347)

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

Defined in: [src/redm/entities/BaseEntity.ts:94](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/redm/entities/BaseEntity.ts#L94)

##### Returns

[`Vector3`](../../fivem/classes/Vector3.md)

the position of the current Entity

#### Set Signature

```ts
set Position(pos): void
```

Defined in: [src/redm/entities/BaseEntity.ts:102](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/redm/entities/BaseEntity.ts#L102)

You should (almost) always try to load the collisions before setting the entitys position if going a long distance.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `pos` | [`Vector3`](../../fivem/classes/Vector3.md) | sets the position for the current ped |

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

Defined in: [src/redm/entities/Ped.ts:247](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/redm/entities/Ped.ts#L247)

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

Defined in: [src/redm/entities/Ped.ts:163](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/redm/entities/Ped.ts#L163)

##### Returns

[`TamingState`](../enumerations/TamingState.md)

***

### Vehicle

#### Get Signature

```ts
get Vehicle(): null | Vehicle
```

Defined in: [src/redm/entities/Ped.ts:116](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/redm/entities/Ped.ts#L116)

##### Returns

`null` \| [`Vehicle`](Vehicle.md)

## Methods

### addArmour()

```ts
addArmour(amount): void
```

Defined in: [src/redm/entities/Ped.ts:461](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/redm/entities/Ped.ts#L461)

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

Defined in: [src/redm/entities/Ped.ts:465](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/redm/entities/Ped.ts#L465)

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `damageAmount` | `number` | `undefined` |
| `boneId` | `number` | `0` |
| `pedKiller` | `null` \| [`Ped`](Ped.md) | `null` |

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

Defined in: [src/redm/entities/Ped.ts:484](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/redm/entities/Ped.ts#L484)

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

Defined in: [src/redm/entities/Ped.ts:339](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/redm/entities/Ped.ts#L339)

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

Defined in: [src/redm/entities/Ped.ts:343](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/redm/entities/Ped.ts#L343)

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

Defined in: [src/redm/entities/Ped.ts:440](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/redm/entities/Ped.ts#L440)

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

Defined in: [src/redm/entities/Ped.ts:454](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/redm/entities/Ped.ts#L454)

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

Defined in: [src/redm/entities/Ped.ts:407](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/redm/entities/Ped.ts#L407)

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

Defined in: [src/redm/entities/Ped.ts:428](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/redm/entities/Ped.ts#L428)

Removes the specified ped if its not a player entity

#### Returns

`void`

***

### getJacker()

```ts
getJacker(): Ped
```

Defined in: [src/redm/entities/Ped.ts:330](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/redm/entities/Ped.ts#L330)

returns the ped who jacked this ped

#### Returns

[`Ped`](Ped.md)

***

### isInteractionPossible()

```ts
isInteractionPossible(animal): boolean
```

Defined in: [src/redm/entities/Ped.ts:352](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/redm/entities/Ped.ts#L352)

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

Defined in: [src/redm/entities/Ped.ts:362](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/redm/entities/Ped.ts#L362)

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

Defined in: [src/redm/entities/Ped.ts:366](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/redm/entities/Ped.ts#L366)

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

Defined in: [src/redm/entities/Ped.ts:403](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/redm/entities/Ped.ts#L403)

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

Defined in: [src/redm/entities/Ped.ts:385](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/redm/entities/Ped.ts#L385)

#### Returns

`void`

***

### replaceHandle()

```ts
replaceHandle(newHandle): void
```

Defined in: [src/redm/entities/BaseEntity.ts:31](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/redm/entities/BaseEntity.ts#L31)

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

Defined in: [src/redm/entities/Ped.ts:421](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/redm/entities/Ped.ts#L421)

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

Defined in: [src/redm/entities/Ped.ts:334](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/redm/entities/Ped.ts#L334)

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

Defined in: [src/redm/entities/Ped.ts:395](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/redm/entities/Ped.ts#L395)

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

Defined in: [src/redm/entities/Ped.ts:380](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/redm/entities/Ped.ts#L380)

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

Defined in: [src/redm/entities/Ped.ts:370](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/redm/entities/Ped.ts#L370)

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

Defined in: [src/redm/entities/Ped.ts:24](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/redm/entities/Ped.ts#L24)

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

Defined in: [src/redm/entities/Ped.ts:45](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/redm/entities/Ped.ts#L45)

Removes the blocking of scenarios in the specified area

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `scenarioId` | `number` | the number returned from [blockScenariosInArea](Ped.md#blockscenariosinarea) |

#### Returns

`void`
