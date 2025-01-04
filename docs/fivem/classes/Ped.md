[@nativewrappers/fivem](../../README.md) / [fivem](../README.md) / Ped

# Class: Ped

## Extends

- [`BaseEntity`](BaseEntity.md)

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

[`BaseEntity`](BaseEntity.md).[`constructor`](BaseEntity.md#constructors)

#### Defined in

[src/fivem/models/Ped.ts:81](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L81)

## Properties

| Property | Modifier | Type | Default value | Overrides | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ | ------ | ------ |
| `bones` | `protected` | `undefined` \| [`EntityBoneCollection`](EntityBoneCollection.md) | `undefined` | - | [`BaseEntity`](BaseEntity.md).`bones` | [src/fivem/models/BaseEntity.ts:23](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/BaseEntity.ts#L23) |
| `handle` | `protected` | `number` | `undefined` | - | [`BaseEntity`](BaseEntity.md).`handle` | [src/fivem/models/BaseEntity.ts:22](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/BaseEntity.ts#L22) |
| `netId` | `protected` | `null` \| `number` | `null` | - | [`BaseEntity`](BaseEntity.md).`netId` | [src/fivem/models/BaseEntity.ts:25](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/BaseEntity.ts#L25) |
| `stateBagCookies` | `protected` | `number`[] | `[]` | - | [`BaseEntity`](BaseEntity.md).`stateBagCookies` | [src/fivem/models/BaseEntity.ts:24](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/BaseEntity.ts#L24) |
| `type` | `protected` | `ClassTypes` | `ClassTypes.Ped` | [`BaseEntity`](BaseEntity.md).`type` | - | [src/fivem/models/Ped.ts:35](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L35) |

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

[src/fivem/models/Ped.ts:110](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L110)

***

### Armor

```ts
get Armor(): number
```

```ts
set Armor(amount): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `amount` | `number` |

#### Returns

`number`

#### Defined in

[src/fivem/models/Ped.ts:101](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L101)

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

### BlockPermanentEvents

```ts
set BlockPermanentEvents(block): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `block` | `boolean` |

#### Defined in

[src/fivem/models/Ped.ts:495](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L495)

***

### Bones

```ts
get Bones(): PedBoneCollection
```

#### Returns

[`PedBoneCollection`](PedBoneCollection.md)

#### Overrides

[`BaseEntity`](BaseEntity.md).[`Bones`](BaseEntity.md#bones)

#### Defined in

[src/fivem/models/Ped.ts:629](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L629)

***

### CanRagdoll

```ts
get CanRagdoll(): boolean
```

```ts
set CanRagdoll(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

#### Returns

`boolean`

#### Defined in

[src/fivem/models/Ped.ts:673](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L673)

***

### CurrentVehicle

```ts
get CurrentVehicle(): null | Vehicle
```

#### Returns

`null` \| [`Vehicle`](Vehicle.md)

#### Defined in

[src/fivem/models/Ped.ts:179](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L179)

***

### DeathCause

```ts
get DeathCause(): number
```

#### Returns

`number`

#### Defined in

[src/fivem/models/Ped.ts:488](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L488)

***

### DrivingSpeed

```ts
set DrivingSpeed(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

#### Defined in

[src/fivem/models/Ped.ts:464](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L464)

***

### DrivingStyle

```ts
set DrivingStyle(style): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `style` | [`DrivingStyle`](../enumerations/DrivingStyle.md) |

#### Defined in

[src/fivem/models/Ped.ts:468](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L468)

***

### DropsWeaponsOnDeath

```ts
set DropsWeaponsOnDeath(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

#### Defined in

[src/fivem/models/Ped.ts:460](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L460)

***

### FiringPattern

```ts
set FiringPattern(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | [`FiringPattern`](../enumerations/FiringPattern.md) |

#### Defined in

[src/fivem/models/Ped.ts:456](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L456)

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

### Gender

```ts
get Gender(): Gender
```

#### Returns

[`Gender`](../enumerations/Gender.md)

#### Defined in

[src/fivem/models/Ped.ts:97](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L97)

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

#### Overrides

[`BaseEntity`](BaseEntity.md).[`Health`](BaseEntity.md#health)

#### Defined in

[src/fivem/models/Ped.ts:119](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L119)

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

### IsAiming

```ts
get IsAiming(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/fivem/models/Ped.ts:416](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L416)

***

### IsAimingFromCover

```ts
get IsAimingFromCover(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/fivem/models/Ped.ts:444](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L444)

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

### IsAmbientSpeechEnabled

```ts
get IsAmbientSpeechEnabled(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/fivem/models/Ped.ts:400](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L400)

***

### IsAmbientSpeechPlaying

```ts
get IsAmbientSpeechPlaying(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/fivem/models/Ped.ts:388](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L388)

***

### IsAnySpeechPlaying

```ts
get IsAnySpeechPlaying(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/fivem/models/Ped.ts:396](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L396)

***

### IsBeingJacked

```ts
get IsBeingJacked(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/fivem/models/Ped.ts:356](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L356)

***

### IsBeingStealthKilled

```ts
get IsBeingStealthKilled(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/fivem/models/Ped.ts:436](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L436)

***

### IsBeingStunned

```ts
get IsBeingStunned(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/fivem/models/Ped.ts:432](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L432)

***

### IsClimbing

```ts
get IsClimbing(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/fivem/models/Ped.ts:264](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L264)

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

### IsCuffed

```ts
get IsCuffed(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/fivem/models/Ped.ts:222](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L222)

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

### IsDiving

```ts
get IsDiving(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/fivem/models/Ped.ts:292](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L292)

***

### IsDoingDriveby

```ts
get IsDoingDriveby(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/fivem/models/Ped.ts:424](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L424)

***

### IsDrunk

```ts
set IsDrunk(isDrunk): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `isDrunk` | `boolean` |

#### Defined in

[src/fivem/models/Ped.ts:472](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L472)

***

### IsDucking

```ts
get IsDucking(): boolean
```

```ts
set IsDucking(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

#### Returns

`boolean`

#### Defined in

[src/fivem/models/Ped.ts:256](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L256)

***

### IsEnemy

```ts
set IsEnemy(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

#### Defined in

[src/fivem/models/Ped.ts:210](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L210)

***

### IsFalling

```ts
get IsFalling(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/fivem/models/Ped.ts:272](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L272)

***

### IsFleeing

```ts
get IsFleeing(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/fivem/models/Ped.ts:372](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L372)

***

### IsGettingIntoAVehicle

```ts
get IsGettingIntoAVehicle(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/fivem/models/Ped.ts:360](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L360)

***

### IsGettingUp

```ts
get IsGettingUp(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/fivem/models/Ped.ts:260](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L260)

***

### IsGoingIntoCover

```ts
get IsGoingIntoCover(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/fivem/models/Ped.ts:428](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L428)

***

### IsHuman

```ts
get IsHuman(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/fivem/models/Ped.ts:206](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L206)

***

### IsIdle

```ts
get IsIdle(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/fivem/models/Ped.ts:234](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L234)

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

### IsInBoat

```ts
get IsInBoat(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/fivem/models/Ped.ts:344](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L344)

***

### IsInCombat

```ts
get IsInCombat(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/fivem/models/Ped.ts:376](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L376)

***

### IsInCoverFacingLeft

```ts
get IsInCoverFacingLeft(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/fivem/models/Ped.ts:452](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L452)

***

### IsInFlyingVehicle

```ts
get IsInFlyingVehicle(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/fivem/models/Ped.ts:340](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L340)

***

### IsInGroup

```ts
get IsInGroup(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/fivem/models/Ped.ts:568](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L568)

***

### IsInHeli

```ts
get IsInHeli(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/fivem/models/Ped.ts:332](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L332)

***

### IsInjured

```ts
get IsInjured(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/fivem/models/Ped.ts:368](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L368)

***

### IsInMeleeCombat

```ts
get IsInMeleeCombat(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/fivem/models/Ped.ts:380](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L380)

***

### IsInParachuteFreeFall

```ts
get IsInParachuteFreeFall(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/fivem/models/Ped.ts:296](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L296)

***

### IsInPlane

```ts
get IsInPlane(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/fivem/models/Ped.ts:336](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L336)

***

### IsInPoliceVehicle

```ts
get IsInPoliceVehicle(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/fivem/models/Ped.ts:348](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L348)

***

### IsInStealthMode

```ts
get IsInStealthMode(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/fivem/models/Ped.ts:384](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L384)

***

### IsInSub

```ts
get IsInSub(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/fivem/models/Ped.ts:320](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L320)

***

### IsInTaxi

```ts
get IsInTaxi(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/fivem/models/Ped.ts:324](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L324)

***

### IsInTrain

```ts
get IsInTrain(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/fivem/models/Ped.ts:328](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L328)

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

### IsJacking

```ts
get IsJacking(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/fivem/models/Ped.ts:352](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L352)

***

### IsJumping

```ts
get IsJumping(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/fivem/models/Ped.ts:268](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L268)

***

### IsJumpingOutOfVehicle

```ts
get IsJumpingOutOfVehicle(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/fivem/models/Ped.ts:194](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L194)

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

### IsOnBike

```ts
get IsOnBike(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/fivem/models/Ped.ts:312](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L312)

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

### IsOnFoot

```ts
get IsOnFoot(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/fivem/models/Ped.ts:316](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L316)

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

### IsPainAudioEnabled

```ts
set IsPainAudioEnabled(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

#### Defined in

[src/fivem/models/Ped.ts:404](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L404)

***

### IsPerformingStealthKill

```ts
get IsPerformingStealthKill(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/fivem/models/Ped.ts:440](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L440)

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

### IsPlantingBomb

```ts
get IsPlantingBomb(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/fivem/models/Ped.ts:408](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L408)

***

### IsPlayer

```ts
get IsPlayer(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/fivem/models/Ped.ts:218](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L218)

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

### IsPriorityTargetForEnemies

```ts
set IsPriorityTargetForEnemies(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

#### Defined in

[src/fivem/models/Ped.ts:214](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L214)

***

### IsProne

```ts
get IsProne(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/fivem/models/Ped.ts:248](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L248)

***

### IsRagdoll

```ts
get IsRagdoll(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/fivem/models/Ped.ts:230](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L230)

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

### IsReloading

```ts
get IsReloading(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/fivem/models/Ped.ts:420](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L420)

***

### IsRunning

```ts
get IsRunning(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/fivem/models/Ped.ts:284](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L284)

***

### IsScriptedSpeechPlaying

```ts
get IsScriptedSpeechPlaying(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/fivem/models/Ped.ts:392](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L392)

***

### IsShooting

```ts
get IsShooting(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/fivem/models/Ped.ts:412](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L412)

***

### IsSprinting

```ts
get IsSprinting(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/fivem/models/Ped.ts:288](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L288)

***

### IsStopped

```ts
get IsStopped(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/fivem/models/Ped.ts:276](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L276)

***

### IsSwimming

```ts
get IsSwimming(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/fivem/models/Ped.ts:300](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L300)

***

### IsSwimmingUnderWater

```ts
get IsSwimmingUnderWater(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/fivem/models/Ped.ts:304](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L304)

***

### IsTryingToEnterALockedVehicle

```ts
get IsTryingToEnterALockedVehicle(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/fivem/models/Ped.ts:364](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L364)

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

### IsVaulting

```ts
get IsVaulting(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/fivem/models/Ped.ts:308](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L308)

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

### IsWalking

```ts
get IsWalking(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/fivem/models/Ped.ts:280](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L280)

***

### IsWearingHelmet

```ts
get IsWearingHelmet(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/fivem/models/Ped.ts:226](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L226)

***

### LastVehicle

```ts
get LastVehicle(): null | Vehicle
```

#### Returns

`null` \| [`Vehicle`](Vehicle.md)

#### Defined in

[src/fivem/models/Ped.ts:184](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L184)

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

### MaxDrivingSpeed

```ts
set MaxDrivingSpeed(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

#### Defined in

[src/fivem/models/Ped.ts:202](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L202)

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

#### Overrides

[`BaseEntity`](BaseEntity.md).[`MaxHealth`](BaseEntity.md#maxhealth)

#### Defined in

[src/fivem/models/Ped.ts:127](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L127)

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

### Money

```ts
get Money(): number
```

```ts
set Money(amount): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `amount` | `number` |

#### Returns

`number`

#### Defined in

[src/fivem/models/Ped.ts:89](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L89)

***

### MotionBlur

```ts
set MotionBlur(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

#### Defined in

[src/fivem/models/Ped.ts:476](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L476)

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

### NeverLeavesGroup

```ts
set NeverLeavesGroup(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

#### Defined in

[src/fivem/models/Ped.ts:572](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L572)

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

### Player

```ts
get Player(): Player
```

#### Returns

[`Player`](Player.md)

#### Defined in

[src/fivem/models/Ped.ts:85](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L85)

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

### SeatIndex

```ts
get SeatIndex(): VehicleSeat
```

#### Returns

[`VehicleSeat`](../enumerations/VehicleSeat.md)

#### Defined in

[src/fivem/models/Ped.ts:164](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L164)

***

### ShootRate

```ts
set ShootRate(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

#### Defined in

[src/fivem/models/Ped.ts:151](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L151)

***

### Speed

```ts
get Speed(): number
```

#### Returns

`number`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`Speed`](BaseEntity.md#speed)

#### Defined in

[src/fivem/models/BaseEntity.ts:120](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/BaseEntity.ts#L120)

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

### StaysInVehicleWhenJacked

```ts
set StaysInVehicleWhenJacked(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

#### Defined in

[src/fivem/models/Ped.ts:198](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L198)

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

### Sweat

```ts
set Sweat(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

#### Defined in

[src/fivem/models/Ped.ts:135](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L135)

***

### Task

```ts
get Task(): Tasks
```

#### Returns

[`Tasks`](Tasks.md)

#### Defined in

[src/fivem/models/Ped.ts:480](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L480)

***

### TaskSequenceProgress

```ts
get TaskSequenceProgress(): number
```

#### Returns

`number`

#### Defined in

[src/fivem/models/Ped.ts:491](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L491)

***

### VehicleTryingToEnter

```ts
get VehicleTryingToEnter(): null | Vehicle
```

#### Returns

`null` \| [`Vehicle`](Vehicle.md)

#### Defined in

[src/fivem/models/Ped.ts:189](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L189)

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

### Voice

```ts
set Voice(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `string` |

#### Defined in

[src/fivem/models/Ped.ts:147](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L147)

***

### WasKilledByStealth

```ts
get WasKilledByStealth(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/fivem/models/Ped.ts:156](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L156)

***

### WasKilledByTakedown

```ts
get WasKilledByTakedown(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/fivem/models/Ped.ts:160](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L160)

***

### Weapons

```ts
get Weapons(): WeaponCollection
```

Ped Weapons

#### Returns

`WeaponCollection`

#### Defined in

[src/fivem/models/Ped.ts:642](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L642)

***

### WetnessHeight

```ts
set WetnessHeight(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

#### Defined in

[src/fivem/models/Ped.ts:139](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L139)

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

### applyDamage()

```ts
applyDamage(damageAmount, armorFirst): void
```

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `damageAmount` | `number` | `undefined` |
| `armorFirst` | `boolean` | `true` |

#### Returns

`void`

#### Defined in

[src/fivem/models/Ped.ts:609](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L609)

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

### cancelRagdoll()

```ts
cancelRagdoll(): void
```

#### Returns

`void`

#### Defined in

[src/fivem/models/Ped.ts:697](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L697)

***

### clearAllProps()

```ts
clearAllProps(): void
```

#### Returns

`void`

#### Defined in

[src/fivem/models/Ped.ts:810](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L810)

***

### clearBloodDamage()

```ts
clearBloodDamage(): void
```

#### Returns

`void`

#### Defined in

[src/fivem/models/Ped.ts:562](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L562)

***

### clearLastWeaponDamage()

```ts
clearLastWeaponDamage(): void
```

#### Returns

`void`

#### Overrides

[`BaseEntity`](BaseEntity.md).[`clearLastWeaponDamage`](BaseEntity.md#clearlastweapondamage)

#### Defined in

[src/fivem/models/Ped.ts:625](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L625)

***

### clearProp()

```ts
clearProp(propId): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `propId` | `number` |

#### Returns

`void`

#### Defined in

[src/fivem/models/Ped.ts:806](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L806)

***

### clone()

```ts
clone(): Ped
```

#### Returns

[`Ped`](Ped.md)

#### Defined in

[src/fivem/models/Ped.ts:735](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L735)

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

### exists()

```ts
exists(): boolean
```

#### Returns

`boolean`

#### Overrides

[`BaseEntity`](BaseEntity.md).[`exists`](BaseEntity.md#exists)

#### Defined in

[src/fivem/models/Ped.ts:739](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L739)

***

### finalizeHeadBlend()

```ts
finalizeHeadBlend(): void
```

#### Returns

`void`

#### Defined in

[src/fivem/models/Ped.ts:1031](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L1031)

***

### getConfigFlag()

```ts
getConfigFlag(flagId): boolean
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `flagId` | `number` |

#### Returns

`boolean`

#### Defined in

[src/fivem/models/Ped.ts:722](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L722)

***

### getDrawableVariation()

```ts
getDrawableVariation(componentId): number
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `componentId` | `number` |

#### Returns

`number`

#### Defined in

[src/fivem/models/Ped.ts:770](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L770)

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

### getEyeColor()

```ts
getEyeColor(): number
```

#### Returns

`number`

#### Defined in

[src/fivem/models/Ped.ts:858](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L858)

***

### getHairColor()

```ts
getHairColor(): number
```

#### Returns

`number`

#### Defined in

[src/fivem/models/Ped.ts:870](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L870)

***

### getHairHighlightColor()

```ts
getHairHighlightColor(): number
```

#### Returns

`number`

#### Defined in

[src/fivem/models/Ped.ts:878](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L878)

***

### getHeadBlend()

```ts
getHeadBlend(): void | [number, number, number, number, number, number, number, number, number, boolean]
```

#### Returns

`void` \| [`number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`, `boolean`]

#### Defined in

[src/fivem/models/Ped.ts:975](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L975)

***

### getHeadOverlay()

```ts
getHeadOverlay(overlayId): void | [number, number, number, number, number]
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `overlayId` | `number` |

#### Returns

`void` \| [`number`, `number`, `number`, `number`, `number`]

#### Defined in

[src/fivem/models/Ped.ts:895](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L895)

***

### getHeadOverlayNum()

```ts
getHeadOverlayNum(overlayId): number
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `overlayId` | `number` |

#### Returns

`number`

#### Defined in

[src/fivem/models/Ped.ts:882](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L882)

***

### getHeadOverlayOpacity()

```ts
getHeadOverlayOpacity(overlayId): number
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `overlayId` | `number` |

#### Returns

`number`

#### Defined in

[src/fivem/models/Ped.ts:926](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L926)

***

### getHeadOverlayValue()

```ts
getHeadOverlayValue(overlayId): number
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `overlayId` | `number` |

#### Returns

`number`

#### Defined in

[src/fivem/models/Ped.ts:886](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L886)

***

### getJacker()

```ts
getJacker(): Ped
```

#### Returns

[`Ped`](Ped.md)

#### Defined in

[src/fivem/models/Ped.ts:527](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L527)

***

### getJackTarget()

```ts
getJackTarget(): Ped
```

#### Returns

[`Ped`](Ped.md)

#### Defined in

[src/fivem/models/Ped.ts:531](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L531)

***

### getKiller()

```ts
getKiller(): null | BaseEntity
```

#### Returns

`null` \| [`BaseEntity`](BaseEntity.md)

#### Defined in

[src/fivem/models/Ped.ts:539](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L539)

***

### getLastWeaponImpactPosition()

```ts
getLastWeaponImpactPosition(): Vector3
```

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/fivem/models/Ped.ts:667](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L667)

***

### getMeleeTarget()

```ts
getMeleeTarget(): Ped
```

#### Returns

[`Ped`](Ped.md)

#### Defined in

[src/fivem/models/Ped.ts:535](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L535)

***

### getNumberOfDrawableVariations()

```ts
getNumberOfDrawableVariations(componentId): number
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `componentId` | `number` |

#### Returns

`number`

#### Defined in

[src/fivem/models/Ped.ts:774](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L774)

***

### getNumberOfPropDrawableVariations()

```ts
getNumberOfPropDrawableVariations(propId): number
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `propId` | `number` |

#### Returns

`number`

#### Defined in

[src/fivem/models/Ped.ts:835](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L835)

***

### getNumberOfPropTextureVariations()

```ts
getNumberOfPropTextureVariations(propId, drawableId): number
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `propId` | `number` |
| `drawableId` | `number` |

#### Returns

`number`

#### Defined in

[src/fivem/models/Ped.ts:839](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L839)

***

### getNumberTextureVariations()

```ts
getNumberTextureVariations(componentId, drawableId): number
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `componentId` | `number` |
| `drawableId` | `number` |

#### Returns

`number`

#### Defined in

[src/fivem/models/Ped.ts:782](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L782)

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

### getPropIndex()

```ts
getPropIndex(propId): number
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `propId` | `number` |

#### Returns

`number`

#### Defined in

[src/fivem/models/Ped.ts:831](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L831)

***

### getPropTextureIndex()

```ts
getPropTextureIndex(propId): number
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `propId` | `number` |

#### Returns

`number`

#### Defined in

[src/fivem/models/Ped.ts:846](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L846)

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

### getTextureVariation()

```ts
getTextureVariation(componentId): number
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `componentId` | `number` |

#### Returns

`number`

#### Defined in

[src/fivem/models/Ped.ts:778](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L778)

***

### giveHelmet()

```ts
giveHelmet(
   canBeRemovedByPed, 
   helmetType, 
   textureIndex): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `canBeRemovedByPed` | `boolean` |
| `helmetType` | [`HelmetType`](../enumerations/HelmetType.md) |
| `textureIndex` | `number` |

#### Returns

`void`

#### Defined in

[src/fivem/models/Ped.ts:701](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L701)

***

### giveWeapon()

```ts
giveWeapon(
   weapon, 
   ammoCount, 
   isHidden, 
   equipNow): void
```

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `weapon` | [`WeaponHash`](../enumerations/WeaponHash.md) | `undefined` |
| `ammoCount` | `number` | `999` |
| `isHidden` | `boolean` | `false` |
| `equipNow` | `boolean` | `true` |

#### Returns

`void`

#### Defined in

[src/fivem/models/Ped.ts:650](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L650)

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

#### Overrides

[`BaseEntity`](BaseEntity.md).[`hasBeenDamagedByAnyMeleeWeapon`](BaseEntity.md#hasbeendamagedbyanymeleeweapon)

#### Defined in

[src/fivem/models/Ped.ts:621](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L621)

***

### hasBeenDamagedByAnyWeapon()

```ts
hasBeenDamagedByAnyWeapon(): boolean
```

#### Returns

`boolean`

#### Overrides

[`BaseEntity`](BaseEntity.md).[`hasBeenDamagedByAnyWeapon`](BaseEntity.md#hasbeendamagedbyanyweapon)

#### Defined in

[src/fivem/models/Ped.ts:617](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L617)

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

#### Overrides

[`BaseEntity`](BaseEntity.md).[`hasBeenDamagedByWeapon`](BaseEntity.md#hasbeendamagedbyweapon)

#### Defined in

[src/fivem/models/Ped.ts:613](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L613)

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

### hasHeadBlendFinished()

```ts
hasHeadBlendFinished(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/fivem/models/Ped.ts:1035](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L1035)

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

### isFacingPed()

```ts
isFacingPed(ped, angle): boolean
```

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `ped` | [`Ped`](Ped.md) | `undefined` |
| `angle` | `number` | `25.0` |

#### Returns

`boolean`

#### Defined in

[src/fivem/models/Ped.ts:743](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L743)

***

### isHeadtracking()

```ts
isHeadtracking(entity): boolean
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `entity` | [`BaseEntity`](BaseEntity.md) |

#### Returns

`boolean`

#### Defined in

[src/fivem/models/Ped.ts:519](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L519)

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

### isInAnyVehicle()

```ts
isInAnyVehicle(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/fivem/models/Ped.ts:499](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L499)

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

### isInCombatAgainst()

```ts
isInCombatAgainst(target): boolean
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `target` | [`Ped`](Ped.md) |

#### Returns

`boolean`

#### Defined in

[src/fivem/models/Ped.ts:523](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L523)

***

### isInCover()

```ts
isInCover(expectUseWeapon): boolean
```

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `expectUseWeapon` | `boolean` | `false` |

#### Returns

`boolean`

#### Defined in

[src/fivem/models/Ped.ts:448](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L448)

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

### isInVehicle()

```ts
isInVehicle(vehicle): boolean
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `vehicle` | [`Vehicle`](Vehicle.md) |

#### Returns

`boolean`

#### Defined in

[src/fivem/models/Ped.ts:503](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L503)

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

### isPropValid()

```ts
isPropValid(
   propId, 
   drawableId, 
   textureId): boolean
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `propId` | `number` |
| `drawableId` | `number` |
| `textureId` | `number` |

#### Returns

`boolean`

#### Defined in

[src/fivem/models/Ped.ts:823](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L823)

***

### isSittingInAnyVehicle()

```ts
isSittingInAnyVehicle(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/fivem/models/Ped.ts:507](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L507)

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

[src/fivem/models/Ped.ts:511](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L511)

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

### kill()

```ts
kill(): void
```

#### Returns

`void`

#### Defined in

[src/fivem/models/Ped.ts:543](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L543)

***

### knockPropOff()

```ts
knockPropOff(
   p1, 
   p2, 
   p3, 
   p4): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `p1` | `boolean` |
| `p2` | `boolean` |
| `p3` | `boolean` |
| `p4` | `boolean` |

#### Returns

`void`

#### Defined in

[src/fivem/models/Ped.ts:814](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L814)

***

### leaveGroup()

```ts
leaveGroup(): void
```

#### Returns

`void`

#### Defined in

[src/fivem/models/Ped.ts:576](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L576)

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

### openParachute()

```ts
openParachute(): void
```

#### Returns

`void`

#### Defined in

[src/fivem/models/Ped.ts:718](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L718)

***

### playAmbientSpeed()

```ts
playAmbientSpeed(
   speechName, 
   voiceName, 
   modifier): void
```

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `speechName` | `string` | `undefined` |
| `voiceName` | `string` | `""` |
| `modifier` | [`SpeechModifier`](../enumerations/SpeechModifier.md) | `SpeechModifier.Standard` |

#### Returns

`void`

#### Defined in

[src/fivem/models/Ped.ts:580](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L580)

***

### ragdoll()

```ts
ragdoll(duration, ragdollType): void
```

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `duration` | `number` | `-1` |
| `ragdollType` | [`RagdollType`](../enumerations/RagdollType.md) | `RagdollType.Normal` |

#### Returns

`void`

#### Defined in

[src/fivem/models/Ped.ts:681](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L681)

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

### removeAllWeapons()

```ts
removeAllWeapons(): void
```

#### Returns

`void`

#### Defined in

[src/fivem/models/Ped.ts:663](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L663)

***

### removeHelmet()

```ts
removeHelmet(instantly): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `instantly` | `boolean` |

#### Returns

`void`

#### Defined in

[src/fivem/models/Ped.ts:714](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L714)

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

### removeWeapon()

```ts
removeWeapon(weapon): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `weapon` | [`WeaponHash`](../enumerations/WeaponHash.md) |

#### Returns

`void`

#### Defined in

[src/fivem/models/Ped.ts:659](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L659)

***

### resetConfigFlag()

```ts
resetConfigFlag(flagId): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `flagId` | `number` |

#### Returns

`void`

#### Defined in

[src/fivem/models/Ped.ts:730](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L730)

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

### resetVisibleDamage()

```ts
resetVisibleDamage(): void
```

#### Returns

`void`

#### Defined in

[src/fivem/models/Ped.ts:558](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L558)

***

### resurrect()

```ts
resurrect(): void
```

#### Returns

`void`

#### Defined in

[src/fivem/models/Ped.ts:547](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L547)

***

### setComponentVariation()

```ts
setComponentVariation(
   componentId, 
   drawableId, 
   textureId, 
   paletteId): void
```

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `componentId` | `number` | `undefined` |
| `drawableId` | `number` | `undefined` |
| `textureId` | `number` | `undefined` |
| `paletteId` | `number` | `0` |

#### Returns

`void`

#### Defined in

[src/fivem/models/Ped.ts:747](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L747)

***

### setConfigFlag()

```ts
setConfigFlag(flagId, value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `flagId` | `number` |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

[src/fivem/models/Ped.ts:726](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L726)

***

### setDefaultComponentVariation()

```ts
setDefaultComponentVariation(): void
```

#### Returns

`void`

#### Defined in

[src/fivem/models/Ped.ts:766](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L766)

***

### setEyeColor()

```ts
setEyeColor(color): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `color` | `number` |

#### Returns

`void`

#### Defined in

[src/fivem/models/Ped.ts:854](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L854)

***

### setHairColor()

```ts
setHairColor(color): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `color` | `number` |

#### Returns

`void`

#### Defined in

[src/fivem/models/Ped.ts:866](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L866)

***

### setHairColors()

```ts
setHairColors(primary, highlight): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `primary` | `number` |
| `highlight` | `number` |

#### Returns

`void`

#### Defined in

[src/fivem/models/Ped.ts:862](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L862)

***

### setHairHighlightColor()

```ts
setHairHighlightColor(color): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `color` | `number` |

#### Returns

`void`

#### Defined in

[src/fivem/models/Ped.ts:874](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L874)

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
   isParent): void
```

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `shapeFirstID` | `number` | `undefined` |
| `shapeSecondID` | `number` | `undefined` |
| `shapeThirdID` | `number` | `undefined` |
| `skinFirstID` | `number` | `undefined` |
| `skinSecondID` | `number` | `undefined` |
| `skinThirdID` | `number` | `undefined` |
| `shapeMix` | `number` | `undefined` |
| `skinMix` | `number` | `undefined` |
| `thirdMix` | `number` | `undefined` |
| `isParent` | `boolean` | `false` |

#### Returns

`void`

#### Defined in

[src/fivem/models/Ped.ts:948](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L948)

***

### setHeadOverlay()

```ts
setHeadOverlay(
   overlayId, 
   index, 
   opacity): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `overlayId` | `number` |
| `index` | `number` |
| `opacity` | `number` |

#### Returns

`void`

#### Defined in

[src/fivem/models/Ped.ts:918](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L918)

***

### setHeadOverlayColor()

```ts
setHeadOverlayColor(overlayId, color): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `overlayId` | `number` |
| `color` | `number` |

#### Returns

`void`

#### Defined in

[src/fivem/models/Ped.ts:938](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L938)

***

### setHeadOverlayOpacity()

```ts
setHeadOverlayOpacity(overlayId, opacity): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `overlayId` | `number` |
| `opacity` | `number` |

#### Returns

`void`

#### Defined in

[src/fivem/models/Ped.ts:930](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L930)

***

### setHeadOverlayValue()

```ts
setHeadOverlayValue(overlayId, value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `overlayId` | `number` |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/fivem/models/Ped.ts:890](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L890)

***

### setHelmetPropIndex()

```ts
setHelmetPropIndex(propIndex): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `propIndex` | `number` |

#### Returns

`void`

#### Defined in

[src/fivem/models/Ped.ts:850](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L850)

***

### setIntoVehicle()

```ts
setIntoVehicle(vehicle, seat): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `vehicle` | [`Vehicle`](Vehicle.md) |
| `seat` | [`VehicleSeat`](../enumerations/VehicleSeat.md) |

#### Returns

`void`

#### Defined in

[src/fivem/models/Ped.ts:515](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L515)

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

### setPropIndex()

```ts
setPropIndex(
   propId, 
   drawableId, 
   textureId, 
   attach): void
```

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `propId` | `number` | `undefined` |
| `drawableId` | `number` | `undefined` |
| `textureId` | `number` | `undefined` |
| `attach` | `boolean` | `true` |

#### Returns

`void`

#### Defined in

[src/fivem/models/Ped.ts:797](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L797)

***

### setRandomComponentVariation()

```ts
setRandomComponentVariation(): void
```

#### Returns

`void`

#### Defined in

[src/fivem/models/Ped.ts:762](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L762)

***

### setRandomProps()

```ts
setRandomProps(): void
```

#### Returns

`void`

#### Defined in

[src/fivem/models/Ped.ts:793](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L793)

***

### exists()

```ts
static exists(ped): boolean
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `ped` | [`Ped`](Ped.md) |

#### Returns

`boolean`

#### Defined in

[src/fivem/models/Ped.ts:19](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L19)

***

### fromHandle()

```ts
static fromHandle(handle): null | Ped
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `handle` | `number` |

#### Returns

`null` \| [`Ped`](Ped.md)

#### Defined in

[src/fivem/models/Ped.ts:23](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L23)

***

### fromNetworkId()

```ts
static fromNetworkId(networkId): null | Ped
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `networkId` | `number` |

#### Returns

`null` \| [`Ped`](Ped.md)

#### Overrides

[`BaseEntity`](BaseEntity.md).[`fromNetworkId`](BaseEntity.md#fromnetworkid)

#### Defined in

[src/fivem/models/Ped.ts:27](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Ped.ts#L27)

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
