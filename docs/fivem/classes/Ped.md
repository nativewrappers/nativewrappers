[@nativewrappers/fivem](../../README.md) / [fivem](../README.md) / Ped

# Class: Ped

Defined in: [src/fivem/models/Ped.ts:18](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L18)

## Extends

- [`BaseEntity`](BaseEntity.md)

## Constructors

### new Ped()

```ts
new Ped(handle): Ped
```

Defined in: [src/fivem/models/Ped.ts:81](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L81)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `handle` | `number` |

#### Returns

[`Ped`](Ped.md)

#### Overrides

[`BaseEntity`](BaseEntity.md).[`constructor`](BaseEntity.md#constructors)

## Properties

| Property | Modifier | Type | Default value | Overrides | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ | ------ | ------ |
| <a id="bones"></a> `bones` | `protected` | `undefined` \| [`EntityBoneCollection`](EntityBoneCollection.md) | `undefined` | - | [`BaseEntity`](BaseEntity.md).[`bones`](BaseEntity.md#bones) | [src/fivem/models/BaseEntity.ts:23](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/BaseEntity.ts#L23) |
| <a id="handle-1"></a> `handle` | `protected` | `number` | `undefined` | - | [`BaseEntity`](BaseEntity.md).[`handle`](BaseEntity.md#handle-1) | [src/fivem/models/BaseEntity.ts:22](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/BaseEntity.ts#L22) |
| <a id="netid"></a> `netId` | `protected` | `null` \| `number` | `null` | - | [`BaseEntity`](BaseEntity.md).[`netId`](BaseEntity.md#netid) | [src/fivem/models/BaseEntity.ts:25](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/BaseEntity.ts#L25) |
| <a id="statebagcookies"></a> `stateBagCookies` | `protected` | `number`[] | `[]` | - | [`BaseEntity`](BaseEntity.md).[`stateBagCookies`](BaseEntity.md#statebagcookies) | [src/fivem/models/BaseEntity.ts:24](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/BaseEntity.ts#L24) |
| <a id="type"></a> `type` | `protected` | `ClassTypes` | `ClassTypes.Ped` | [`BaseEntity`](BaseEntity.md).[`type`](BaseEntity.md#type) | - | [src/fivem/models/Ped.ts:35](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L35) |

## Accessors

### Accuracy

#### Get Signature

```ts
get Accuracy(): number
```

Defined in: [src/fivem/models/Ped.ts:110](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L110)

##### Returns

`number`

#### Set Signature

```ts
set Accuracy(accuracy): void
```

Defined in: [src/fivem/models/Ped.ts:114](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L114)

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

Defined in: [src/fivem/models/Ped.ts:101](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L101)

##### Returns

`number`

#### Set Signature

```ts
set Armor(amount): void
```

Defined in: [src/fivem/models/Ped.ts:105](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L105)

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

Defined in: [src/fivem/models/BaseEntity.ts:438](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/BaseEntity.ts#L438)

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

Defined in: [src/fivem/models/Ped.ts:495](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L495)

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

Defined in: [src/fivem/models/Ped.ts:629](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L629)

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

Defined in: [src/fivem/models/Ped.ts:673](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L673)

##### Returns

`boolean`

#### Set Signature

```ts
set CanRagdoll(value): void
```

Defined in: [src/fivem/models/Ped.ts:677](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L677)

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

Defined in: [src/fivem/models/Ped.ts:179](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L179)

##### Returns

`null` \| [`Vehicle`](Vehicle.md)

***

### DeathCause

#### Get Signature

```ts
get DeathCause(): number
```

Defined in: [src/fivem/models/Ped.ts:488](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L488)

##### Returns

`number`

***

### DrivingSpeed

#### Set Signature

```ts
set DrivingSpeed(value): void
```

Defined in: [src/fivem/models/Ped.ts:464](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L464)

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

Defined in: [src/fivem/models/Ped.ts:468](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L468)

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

Defined in: [src/fivem/models/Ped.ts:460](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L460)

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

Defined in: [src/fivem/models/Ped.ts:456](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L456)

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

Defined in: [src/fivem/models/BaseEntity.ts:128](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/BaseEntity.ts#L128)

##### Returns

[`Vector3`](Vector3.md)

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`ForwardVector`](BaseEntity.md#forwardvector)

***

### Gender

#### Get Signature

```ts
get Gender(): Gender
```

Defined in: [src/fivem/models/Ped.ts:97](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L97)

##### Returns

[`Gender`](../enumerations/Gender.md)

***

### Handle

#### Get Signature

```ts
get Handle(): number
```

Defined in: [src/fivem/models/BaseEntity.ts:35](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/BaseEntity.ts#L35)

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

Defined in: [src/fivem/models/BaseEntity.ts:411](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/BaseEntity.ts#L411)

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

Defined in: [src/fivem/models/BaseEntity.ts:314](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/BaseEntity.ts#L314)

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

Defined in: [src/fivem/models/BaseEntity.ts:282](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/BaseEntity.ts#L282)

##### Returns

`number`

#### Set Signature

```ts
set Heading(heading): void
```

Defined in: [src/fivem/models/BaseEntity.ts:286](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/BaseEntity.ts#L286)

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

Defined in: [src/fivem/models/Ped.ts:119](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L119)

##### Returns

`number`

#### Set Signature

```ts
set Health(amount): void
```

Defined in: [src/fivem/models/Ped.ts:123](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L123)

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

Defined in: [src/fivem/models/BaseEntity.ts:318](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/BaseEntity.ts#L318)

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

Defined in: [src/fivem/models/Ped.ts:416](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L416)

##### Returns

`boolean`

***

### IsAimingFromCover

#### Get Signature

```ts
get IsAimingFromCover(): boolean
```

Defined in: [src/fivem/models/Ped.ts:444](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L444)

##### Returns

`boolean`

***

### IsAlive

#### Get Signature

```ts
get IsAlive(): boolean
```

Defined in: [src/fivem/models/BaseEntity.ts:185](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/BaseEntity.ts#L185)

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

Defined in: [src/fivem/models/Ped.ts:400](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L400)

##### Returns

`boolean`

***

### IsAmbientSpeechPlaying

#### Get Signature

```ts
get IsAmbientSpeechPlaying(): boolean
```

Defined in: [src/fivem/models/Ped.ts:388](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L388)

##### Returns

`boolean`

***

### IsAnySpeechPlaying

#### Get Signature

```ts
get IsAnySpeechPlaying(): boolean
```

Defined in: [src/fivem/models/Ped.ts:396](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L396)

##### Returns

`boolean`

***

### IsBeingJacked

#### Get Signature

```ts
get IsBeingJacked(): boolean
```

Defined in: [src/fivem/models/Ped.ts:356](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L356)

##### Returns

`boolean`

***

### IsBeingStealthKilled

#### Get Signature

```ts
get IsBeingStealthKilled(): boolean
```

Defined in: [src/fivem/models/Ped.ts:436](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L436)

##### Returns

`boolean`

***

### IsBeingStunned

#### Get Signature

```ts
get IsBeingStunned(): boolean
```

Defined in: [src/fivem/models/Ped.ts:432](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L432)

##### Returns

`boolean`

***

### IsClimbing

#### Get Signature

```ts
get IsClimbing(): boolean
```

Defined in: [src/fivem/models/Ped.ts:264](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L264)

##### Returns

`boolean`

***

### IsCollisionEnabled

#### Get Signature

```ts
get IsCollisionEnabled(): boolean
```

Defined in: [src/fivem/models/BaseEntity.ts:419](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/BaseEntity.ts#L419)

##### Returns

`boolean`

#### Set Signature

```ts
set IsCollisionEnabled(value): void
```

Defined in: [src/fivem/models/BaseEntity.ts:423](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/BaseEntity.ts#L423)

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

Defined in: [src/fivem/models/Ped.ts:222](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L222)

##### Returns

`boolean`

***

### IsDead

#### Get Signature

```ts
get IsDead(): boolean
```

Defined in: [src/fivem/models/BaseEntity.ts:181](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/BaseEntity.ts#L181)

##### Returns

`boolean`

#### Set Signature

```ts
set IsDead(value): void
```

Defined in: [src/fivem/models/BaseEntity.ts:173](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/BaseEntity.ts#L173)

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

Defined in: [src/fivem/models/Ped.ts:292](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L292)

##### Returns

`boolean`

***

### IsDoingDriveby

#### Get Signature

```ts
get IsDoingDriveby(): boolean
```

Defined in: [src/fivem/models/Ped.ts:424](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L424)

##### Returns

`boolean`

***

### IsDrunk

#### Set Signature

```ts
set IsDrunk(isDrunk): void
```

Defined in: [src/fivem/models/Ped.ts:472](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L472)

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

Defined in: [src/fivem/models/Ped.ts:256](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L256)

##### Returns

`boolean`

#### Set Signature

```ts
set IsDucking(value): void
```

Defined in: [src/fivem/models/Ped.ts:252](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L252)

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

Defined in: [src/fivem/models/Ped.ts:210](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L210)

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

Defined in: [src/fivem/models/Ped.ts:272](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L272)

##### Returns

`boolean`

***

### IsFleeing

#### Get Signature

```ts
get IsFleeing(): boolean
```

Defined in: [src/fivem/models/Ped.ts:372](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L372)

##### Returns

`boolean`

***

### IsGettingIntoAVehicle

#### Get Signature

```ts
get IsGettingIntoAVehicle(): boolean
```

Defined in: [src/fivem/models/Ped.ts:360](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L360)

##### Returns

`boolean`

***

### IsGettingUp

#### Get Signature

```ts
get IsGettingUp(): boolean
```

Defined in: [src/fivem/models/Ped.ts:260](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L260)

##### Returns

`boolean`

***

### IsGoingIntoCover

#### Get Signature

```ts
get IsGoingIntoCover(): boolean
```

Defined in: [src/fivem/models/Ped.ts:428](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L428)

##### Returns

`boolean`

***

### IsHuman

#### Get Signature

```ts
get IsHuman(): boolean
```

Defined in: [src/fivem/models/Ped.ts:206](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L206)

##### Returns

`boolean`

***

### IsIdle

#### Get Signature

```ts
get IsIdle(): boolean
```

Defined in: [src/fivem/models/Ped.ts:234](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L234)

##### Returns

`boolean`

***

### IsInAir

#### Get Signature

```ts
get IsInAir(): boolean
```

Defined in: [src/fivem/models/BaseEntity.ts:358](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/BaseEntity.ts#L358)

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

Defined in: [src/fivem/models/Ped.ts:344](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L344)

##### Returns

`boolean`

***

### IsInCombat

#### Get Signature

```ts
get IsInCombat(): boolean
```

Defined in: [src/fivem/models/Ped.ts:376](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L376)

##### Returns

`boolean`

***

### IsInCoverFacingLeft

#### Get Signature

```ts
get IsInCoverFacingLeft(): boolean
```

Defined in: [src/fivem/models/Ped.ts:452](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L452)

##### Returns

`boolean`

***

### IsInFlyingVehicle

#### Get Signature

```ts
get IsInFlyingVehicle(): boolean
```

Defined in: [src/fivem/models/Ped.ts:340](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L340)

##### Returns

`boolean`

***

### IsInGroup

#### Get Signature

```ts
get IsInGroup(): boolean
```

Defined in: [src/fivem/models/Ped.ts:568](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L568)

##### Returns

`boolean`

***

### IsInHeli

#### Get Signature

```ts
get IsInHeli(): boolean
```

Defined in: [src/fivem/models/Ped.ts:332](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L332)

##### Returns

`boolean`

***

### IsInjured

#### Get Signature

```ts
get IsInjured(): boolean
```

Defined in: [src/fivem/models/Ped.ts:368](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L368)

##### Returns

`boolean`

***

### IsInMeleeCombat

#### Get Signature

```ts
get IsInMeleeCombat(): boolean
```

Defined in: [src/fivem/models/Ped.ts:380](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L380)

##### Returns

`boolean`

***

### IsInParachuteFreeFall

#### Get Signature

```ts
get IsInParachuteFreeFall(): boolean
```

Defined in: [src/fivem/models/Ped.ts:296](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L296)

##### Returns

`boolean`

***

### IsInPlane

#### Get Signature

```ts
get IsInPlane(): boolean
```

Defined in: [src/fivem/models/Ped.ts:336](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L336)

##### Returns

`boolean`

***

### IsInPoliceVehicle

#### Get Signature

```ts
get IsInPoliceVehicle(): boolean
```

Defined in: [src/fivem/models/Ped.ts:348](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L348)

##### Returns

`boolean`

***

### IsInStealthMode

#### Get Signature

```ts
get IsInStealthMode(): boolean
```

Defined in: [src/fivem/models/Ped.ts:384](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L384)

##### Returns

`boolean`

***

### IsInSub

#### Get Signature

```ts
get IsInSub(): boolean
```

Defined in: [src/fivem/models/Ped.ts:320](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L320)

##### Returns

`boolean`

***

### IsInTaxi

#### Get Signature

```ts
get IsInTaxi(): boolean
```

Defined in: [src/fivem/models/Ped.ts:324](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L324)

##### Returns

`boolean`

***

### IsInTrain

#### Get Signature

```ts
get IsInTrain(): boolean
```

Defined in: [src/fivem/models/Ped.ts:328](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L328)

##### Returns

`boolean`

***

### IsInvincible

#### Set Signature

```ts
set IsInvincible(value): void
```

Defined in: [src/fivem/models/BaseEntity.ts:388](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/BaseEntity.ts#L388)

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

Defined in: [src/fivem/models/BaseEntity.ts:362](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/BaseEntity.ts#L362)

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

Defined in: [src/fivem/models/Ped.ts:352](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L352)

##### Returns

`boolean`

***

### IsJumping

#### Get Signature

```ts
get IsJumping(): boolean
```

Defined in: [src/fivem/models/Ped.ts:268](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L268)

##### Returns

`boolean`

***

### IsJumpingOutOfVehicle

#### Get Signature

```ts
get IsJumpingOutOfVehicle(): boolean
```

Defined in: [src/fivem/models/Ped.ts:194](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L194)

##### Returns

`boolean`

***

### IsMissionEntity

#### Get Signature

```ts
get IsMissionEntity(): boolean
```

Defined in: [src/fivem/models/BaseEntity.ts:210](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/BaseEntity.ts#L210)

Returns if the entity is set as a mission entity and will not be cleaned up by the engine

##### Returns

`boolean`

#### Set Signature

```ts
set IsMissionEntity(value): void
```

Defined in: [src/fivem/models/BaseEntity.ts:217](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/BaseEntity.ts#L217)

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

Defined in: [src/fivem/models/BaseEntity.ts:61](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/BaseEntity.ts#L61)

##### Returns

`boolean`

#### Set Signature

```ts
set IsNetworkConcealed(concealed): void
```

Defined in: [src/fivem/models/BaseEntity.ts:65](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/BaseEntity.ts#L65)

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

Defined in: [src/fivem/models/BaseEntity.ts:42](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/BaseEntity.ts#L42)

##### Returns

`boolean`

if the entity is a networked entity or local entity

#### Set Signature

```ts
set IsNetworked(networked): void
```

Defined in: [src/fivem/models/BaseEntity.ts:46](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/BaseEntity.ts#L46)

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

Defined in: [src/fivem/models/BaseEntity.ts:342](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/BaseEntity.ts#L342)

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

Defined in: [src/fivem/models/Ped.ts:312](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L312)

##### Returns

`boolean`

***

### IsOnFire

#### Get Signature

```ts
get IsOnFire(): boolean
```

Defined in: [src/fivem/models/BaseEntity.ts:384](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/BaseEntity.ts#L384)

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

Defined in: [src/fivem/models/Ped.ts:316](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L316)

##### Returns

`boolean`

***

### IsOnlyDamagedByPlayer

#### Set Signature

```ts
set IsOnlyDamagedByPlayer(value): void
```

Defined in: [src/fivem/models/BaseEntity.ts:392](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/BaseEntity.ts#L392)

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

Defined in: [src/fivem/models/BaseEntity.ts:346](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/BaseEntity.ts#L346)

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

Defined in: [src/fivem/models/Ped.ts:404](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L404)

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

Defined in: [src/fivem/models/Ped.ts:440](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L440)

##### Returns

`boolean`

***

### IsPersistent

#### Get Signature

```ts
get IsPersistent(): boolean
```

Defined in: [src/fivem/models/BaseEntity.ts:369](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/BaseEntity.ts#L369)

##### Deprecated

use [[IsMissionEntity]] instead as its more obvious as what it does

##### Returns

`boolean`

#### Set Signature

```ts
set IsPersistent(value): void
```

Defined in: [src/fivem/models/BaseEntity.ts:376](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/BaseEntity.ts#L376)

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

Defined in: [src/fivem/models/Ped.ts:408](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L408)

##### Returns

`boolean`

***

### IsPlayer

#### Get Signature

```ts
get IsPlayer(): boolean
```

Defined in: [src/fivem/models/Ped.ts:218](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L218)

##### Returns

`boolean`

***

### IsPositionFrozen

#### Get Signature

```ts
get IsPositionFrozen(): boolean
```

Defined in: [src/fivem/models/BaseEntity.ts:290](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/BaseEntity.ts#L290)

##### Returns

`boolean`

#### Set Signature

```ts
set IsPositionFrozen(value): void
```

Defined in: [src/fivem/models/BaseEntity.ts:294](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/BaseEntity.ts#L294)

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

Defined in: [src/fivem/models/Ped.ts:214](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L214)

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

Defined in: [src/fivem/models/Ped.ts:248](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L248)

##### Returns

`boolean`

***

### IsRagdoll

#### Get Signature

```ts
get IsRagdoll(): boolean
```

Defined in: [src/fivem/models/Ped.ts:230](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L230)

##### Returns

`boolean`

***

### IsRecordingCollisions

#### Set Signature

```ts
set IsRecordingCollisions(value): void
```

Defined in: [src/fivem/models/BaseEntity.ts:427](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/BaseEntity.ts#L427)

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

Defined in: [src/fivem/models/Ped.ts:420](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L420)

##### Returns

`boolean`

***

### IsRunning

#### Get Signature

```ts
get IsRunning(): boolean
```

Defined in: [src/fivem/models/Ped.ts:284](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L284)

##### Returns

`boolean`

***

### IsScriptedSpeechPlaying

#### Get Signature

```ts
get IsScriptedSpeechPlaying(): boolean
```

Defined in: [src/fivem/models/Ped.ts:392](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L392)

##### Returns

`boolean`

***

### IsShooting

#### Get Signature

```ts
get IsShooting(): boolean
```

Defined in: [src/fivem/models/Ped.ts:412](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L412)

##### Returns

`boolean`

***

### IsSprinting

#### Get Signature

```ts
get IsSprinting(): boolean
```

Defined in: [src/fivem/models/Ped.ts:288](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L288)

##### Returns

`boolean`

***

### IsStopped

#### Get Signature

```ts
get IsStopped(): boolean
```

Defined in: [src/fivem/models/Ped.ts:276](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L276)

##### Returns

`boolean`

***

### IsSwimming

#### Get Signature

```ts
get IsSwimming(): boolean
```

Defined in: [src/fivem/models/Ped.ts:300](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L300)

##### Returns

`boolean`

***

### IsSwimmingUnderWater

#### Get Signature

```ts
get IsSwimmingUnderWater(): boolean
```

Defined in: [src/fivem/models/Ped.ts:304](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L304)

##### Returns

`boolean`

***

### IsTryingToEnterALockedVehicle

#### Get Signature

```ts
get IsTryingToEnterALockedVehicle(): boolean
```

Defined in: [src/fivem/models/Ped.ts:364](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L364)

##### Returns

`boolean`

***

### IsUpright

#### Get Signature

```ts
get IsUpright(): boolean
```

Defined in: [src/fivem/models/BaseEntity.ts:350](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/BaseEntity.ts#L350)

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

Defined in: [src/fivem/models/BaseEntity.ts:354](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/BaseEntity.ts#L354)

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

Defined in: [src/fivem/models/Ped.ts:308](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L308)

##### Returns

`boolean`

***

### IsVisible

#### Get Signature

```ts
get IsVisible(): boolean
```

Defined in: [src/fivem/models/BaseEntity.ts:334](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/BaseEntity.ts#L334)

##### Returns

`boolean`

#### Set Signature

```ts
set IsVisible(value): void
```

Defined in: [src/fivem/models/BaseEntity.ts:338](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/BaseEntity.ts#L338)

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

Defined in: [src/fivem/models/Ped.ts:280](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L280)

##### Returns

`boolean`

***

### IsWearingHelmet

#### Get Signature

```ts
get IsWearingHelmet(): boolean
```

Defined in: [src/fivem/models/Ped.ts:226](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L226)

##### Returns

`boolean`

***

### LastVehicle

#### Get Signature

```ts
get LastVehicle(): null | Vehicle
```

Defined in: [src/fivem/models/Ped.ts:184](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L184)

##### Returns

`null` \| [`Vehicle`](Vehicle.md)

***

### LodDistance

#### Get Signature

```ts
get LodDistance(): number
```

Defined in: [src/fivem/models/BaseEntity.ts:326](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/BaseEntity.ts#L326)

##### Returns

`number`

#### Set Signature

```ts
set LodDistance(value): void
```

Defined in: [src/fivem/models/BaseEntity.ts:330](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/BaseEntity.ts#L330)

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

Defined in: [src/fivem/models/BaseEntity.ts:415](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/BaseEntity.ts#L415)

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

Defined in: [src/fivem/models/BaseEntity.ts:132](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/BaseEntity.ts#L132)

##### Returns

[`Vector3`](Vector3.md)[]

#### Set Signature

```ts
set Matrix(vectors): void
```

Defined in: [src/fivem/models/BaseEntity.ts:136](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/BaseEntity.ts#L136)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `vectors` | [`Vector3`](Vector3.md)[] |

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

Defined in: [src/fivem/models/Ped.ts:202](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L202)

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

Defined in: [src/fivem/models/Ped.ts:127](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L127)

##### Returns

`number`

#### Set Signature

```ts
set MaxHealth(amount): void
```

Defined in: [src/fivem/models/Ped.ts:131](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L131)

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

Defined in: [src/fivem/models/BaseEntity.ts:310](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/BaseEntity.ts#L310)

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

Defined in: [src/fivem/models/BaseEntity.ts:203](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/BaseEntity.ts#L203)

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

Defined in: [src/fivem/models/Ped.ts:89](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L89)

##### Returns

`number`

#### Set Signature

```ts
set Money(amount): void
```

Defined in: [src/fivem/models/Ped.ts:93](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L93)

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

Defined in: [src/fivem/models/Ped.ts:476](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L476)

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

Defined in: [src/fivem/models/BaseEntity.ts:54](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/BaseEntity.ts#L54)

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

Defined in: [src/fivem/models/Ped.ts:572](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L572)

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

Defined in: [src/fivem/models/BaseEntity.ts:396](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/BaseEntity.ts#L396)

##### Returns

`number`

#### Set Signature

```ts
set Opacity(value): void
```

Defined in: [src/fivem/models/BaseEntity.ts:403](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/BaseEntity.ts#L403)

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

Defined in: [src/fivem/models/BaseEntity.ts:112](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/BaseEntity.ts#L112)

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

Defined in: [src/fivem/models/Ped.ts:85](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L85)

##### Returns

[`Player`](Player.md)

***

### Position

#### Get Signature

```ts
get Position(): Vector3
```

Defined in: [src/fivem/models/BaseEntity.ts:225](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/BaseEntity.ts#L225)

##### Returns

[`Vector3`](Vector3.md)

#### Set Signature

```ts
set Position(position): void
```

Defined in: [src/fivem/models/BaseEntity.ts:229](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/BaseEntity.ts#L229)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `position` | [`Vector3`](Vector3.md) |

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

Defined in: [src/fivem/models/BaseEntity.ts:242](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/BaseEntity.ts#L242)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `position` | [`Vector3`](Vector3.md) |

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

Defined in: [src/fivem/models/BaseEntity.ts:262](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/BaseEntity.ts#L262)

##### Returns

[`Quaternion`](Quaternion.md)

#### Set Signature

```ts
set Quaternion(quaternion): void
```

Defined in: [src/fivem/models/BaseEntity.ts:272](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/BaseEntity.ts#L272)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `quaternion` | [`Quaternion`](Quaternion.md) |

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

Defined in: [src/fivem/models/BaseEntity.ts:254](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/BaseEntity.ts#L254)

##### Returns

[`Vector3`](Vector3.md)

#### Set Signature

```ts
set Rotation(rotation): void
```

Defined in: [src/fivem/models/BaseEntity.ts:258](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/BaseEntity.ts#L258)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `rotation` | [`Vector3`](Vector3.md) |

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

Defined in: [src/fivem/models/BaseEntity.ts:306](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/BaseEntity.ts#L306)

##### Returns

[`Vector3`](Vector3.md)

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`RotationVelocity`](BaseEntity.md#rotationvelocity)

***

### SeatIndex

#### Get Signature

```ts
get SeatIndex(): VehicleSeat
```

Defined in: [src/fivem/models/Ped.ts:164](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L164)

##### Returns

[`VehicleSeat`](../enumerations/VehicleSeat.md)

***

### ShootRate

#### Set Signature

```ts
set ShootRate(value): void
```

Defined in: [src/fivem/models/Ped.ts:151](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L151)

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

Defined in: [src/fivem/models/BaseEntity.ts:120](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/BaseEntity.ts#L120)

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

Defined in: [src/fivem/models/BaseEntity.ts:69](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/BaseEntity.ts#L69)

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

Defined in: [src/fivem/models/Ped.ts:198](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L198)

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

Defined in: [src/fivem/models/BaseEntity.ts:322](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/BaseEntity.ts#L322)

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

Defined in: [src/fivem/models/Ped.ts:135](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L135)

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

Defined in: [src/fivem/models/Ped.ts:480](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L480)

##### Returns

[`Tasks`](Tasks.md)

***

### TaskSequenceProgress

#### Get Signature

```ts
get TaskSequenceProgress(): number
```

Defined in: [src/fivem/models/Ped.ts:491](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L491)

##### Returns

`number`

***

### VehicleTryingToEnter

#### Get Signature

```ts
get VehicleTryingToEnter(): null | Vehicle
```

Defined in: [src/fivem/models/Ped.ts:189](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L189)

##### Returns

`null` \| [`Vehicle`](Vehicle.md)

***

### Velocity

#### Get Signature

```ts
get Velocity(): Vector3
```

Defined in: [src/fivem/models/BaseEntity.ts:298](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/BaseEntity.ts#L298)

##### Returns

[`Vector3`](Vector3.md)

#### Set Signature

```ts
set Velocity(velocity): void
```

Defined in: [src/fivem/models/BaseEntity.ts:302](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/BaseEntity.ts#L302)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `velocity` | [`Vector3`](Vector3.md) |

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

Defined in: [src/fivem/models/Ped.ts:147](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L147)

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

Defined in: [src/fivem/models/Ped.ts:156](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L156)

##### Returns

`boolean`

***

### WasKilledByTakedown

#### Get Signature

```ts
get WasKilledByTakedown(): boolean
```

Defined in: [src/fivem/models/Ped.ts:160](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L160)

##### Returns

`boolean`

***

### Weapons

#### Get Signature

```ts
get Weapons(): WeaponCollection
```

Defined in: [src/fivem/models/Ped.ts:642](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L642)

Ped Weapons

##### Returns

`WeaponCollection`

***

### WetnessHeight

#### Set Signature

```ts
set WetnessHeight(value): void
```

Defined in: [src/fivem/models/Ped.ts:139](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L139)

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

Defined in: [src/fivem/models/BaseEntity.ts:73](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/BaseEntity.ts#L73)

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
applyDamage(damageAmount, armorFirst): void
```

Defined in: [src/fivem/models/Ped.ts:609](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L609)

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `damageAmount` | `number` | `undefined` |
| `armorFirst` | `boolean` | `true` |

#### Returns

`void`

***

### applyForce()

```ts
applyForce(
   direction, 
   rotation, 
   forceType): void
```

Defined in: [src/fivem/models/BaseEntity.ts:698](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/BaseEntity.ts#L698)

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

***

### applyForceRelative()

```ts
applyForceRelative(
   direction, 
   rotation, 
   forceType): void
```

Defined in: [src/fivem/models/BaseEntity.ts:721](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/BaseEntity.ts#L721)

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

***

### attachBlip()

```ts
attachBlip(): Blip
```

Defined in: [src/fivem/models/BaseEntity.ts:448](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/BaseEntity.ts#L448)

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
   collisions, 
   unk9, 
   useSoftPinning, 
   rotationOrder): void
```

Defined in: [src/fivem/models/BaseEntity.ts:603](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/BaseEntity.ts#L603)

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

Defined in: [src/fivem/models/BaseEntity.ts:649](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/BaseEntity.ts#L649)

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

***

### cancelRagdoll()

```ts
cancelRagdoll(): void
```

Defined in: [src/fivem/models/Ped.ts:697](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L697)

#### Returns

`void`

***

### clearAllProps()

```ts
clearAllProps(): void
```

Defined in: [src/fivem/models/Ped.ts:810](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L810)

#### Returns

`void`

***

### clearBloodDamage()

```ts
clearBloodDamage(): void
```

Defined in: [src/fivem/models/Ped.ts:562](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L562)

#### Returns

`void`

***

### clearLastWeaponDamage()

```ts
clearLastWeaponDamage(): void
```

Defined in: [src/fivem/models/Ped.ts:625](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L625)

#### Returns

`void`

#### Overrides

[`BaseEntity`](BaseEntity.md).[`clearLastWeaponDamage`](BaseEntity.md#clearlastweapondamage)

***

### clearProp()

```ts
clearProp(propId): void
```

Defined in: [src/fivem/models/Ped.ts:806](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L806)

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

Defined in: [src/fivem/models/Ped.ts:735](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L735)

#### Returns

[`Ped`](Ped.md)

***

### delete()

```ts
delete(): void
```

Defined in: [src/fivem/models/BaseEntity.ts:762](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/BaseEntity.ts#L762)

#### Returns

`void`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`delete`](BaseEntity.md#delete)

***

### detach()

```ts
detach(): void
```

Defined in: [src/fivem/models/BaseEntity.ts:682](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/BaseEntity.ts#L682)

#### Returns

`void`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`detach`](BaseEntity.md#detach)

***

### exists()

```ts
exists(): boolean
```

Defined in: [src/fivem/models/Ped.ts:739](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L739)

#### Returns

`boolean`

#### Overrides

[`BaseEntity`](BaseEntity.md).[`exists`](BaseEntity.md#exists)

***

### finalizeHeadBlend()

```ts
finalizeHeadBlend(): void
```

Defined in: [src/fivem/models/Ped.ts:1031](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L1031)

#### Returns

`void`

***

### getConfigFlag()

```ts
getConfigFlag(flagId): boolean
```

Defined in: [src/fivem/models/Ped.ts:722](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L722)

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

Defined in: [src/fivem/models/Ped.ts:770](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L770)

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

Defined in: [src/fivem/models/BaseEntity.ts:694](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/BaseEntity.ts#L694)

#### Returns

[`BaseEntity`](BaseEntity.md)

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`getEntityAttachedTo`](BaseEntity.md#getentityattachedto)

***

### getEyeColor()

```ts
getEyeColor(): number
```

Defined in: [src/fivem/models/Ped.ts:858](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L858)

#### Returns

`number`

***

### getHairColor()

```ts
getHairColor(): number
```

Defined in: [src/fivem/models/Ped.ts:870](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L870)

#### Returns

`number`

***

### getHairHighlightColor()

```ts
getHairHighlightColor(): number
```

Defined in: [src/fivem/models/Ped.ts:878](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L878)

#### Returns

`number`

***

### getHeadBlend()

```ts
getHeadBlend(): 
  | void
  | [number, number, number, number, number, number, number, number, number, boolean]
```

Defined in: [src/fivem/models/Ped.ts:975](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L975)

#### Returns

  \| `void`
  \| \[`number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`, `boolean`\]

***

### getHeadOverlay()

```ts
getHeadOverlay(overlayId): void | [number, number, number, number, number]
```

Defined in: [src/fivem/models/Ped.ts:895](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L895)

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

Defined in: [src/fivem/models/Ped.ts:882](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L882)

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

Defined in: [src/fivem/models/Ped.ts:926](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L926)

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

Defined in: [src/fivem/models/Ped.ts:886](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L886)

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

Defined in: [src/fivem/models/Ped.ts:527](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L527)

#### Returns

[`Ped`](Ped.md)

***

### getJackTarget()

```ts
getJackTarget(): Ped
```

Defined in: [src/fivem/models/Ped.ts:531](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L531)

#### Returns

[`Ped`](Ped.md)

***

### getKiller()

```ts
getKiller(): null | BaseEntity
```

Defined in: [src/fivem/models/Ped.ts:539](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L539)

#### Returns

`null` \| [`BaseEntity`](BaseEntity.md)

***

### getLastWeaponImpactPosition()

```ts
getLastWeaponImpactPosition(): Vector3
```

Defined in: [src/fivem/models/Ped.ts:667](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L667)

#### Returns

[`Vector3`](Vector3.md)

***

### getMeleeTarget()

```ts
getMeleeTarget(): Ped
```

Defined in: [src/fivem/models/Ped.ts:535](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L535)

#### Returns

[`Ped`](Ped.md)

***

### getNumberOfDrawableVariations()

```ts
getNumberOfDrawableVariations(componentId): number
```

Defined in: [src/fivem/models/Ped.ts:774](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L774)

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

Defined in: [src/fivem/models/Ped.ts:835](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L835)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `propId` | `number` |

#### Returns

`number`

***

### getNumberOfPropTextureVariations()

```ts
getNumberOfPropTextureVariations(propId, drawableId): number
```

Defined in: [src/fivem/models/Ped.ts:839](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L839)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `propId` | `number` |
| `drawableId` | `number` |

#### Returns

`number`

***

### getNumberTextureVariations()

```ts
getNumberTextureVariations(componentId, drawableId): number
```

Defined in: [src/fivem/models/Ped.ts:782](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L782)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `componentId` | `number` |
| `drawableId` | `number` |

#### Returns

`number`

***

### getOffsetInRelativeCoords()

```ts
getOffsetInRelativeCoords(worldCoords): Vector3
```

Defined in: [src/fivem/models/BaseEntity.ts:550](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/BaseEntity.ts#L550)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `worldCoords` | [`Vector3`](Vector3.md) |

#### Returns

[`Vector3`](Vector3.md)

the offset position from the entity in world coords

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`getOffsetInRelativeCoords`](BaseEntity.md#getoffsetinrelativecoords)

***

### getOffsetInWorldCoords()

```ts
getOffsetInWorldCoords(offset): Vector3
```

Defined in: [src/fivem/models/BaseEntity.ts:578](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/BaseEntity.ts#L578)

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

***

### ~~getOffsetPosition()~~

```ts
getOffsetPosition(offset): Vector3
```

Defined in: [src/fivem/models/BaseEntity.ts:599](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/BaseEntity.ts#L599)

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

***

### ~~getPositionOffset()~~

```ts
getPositionOffset(worldCoords): Vector3
```

Defined in: [src/fivem/models/BaseEntity.ts:592](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/BaseEntity.ts#L592)

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

***

### getPropIndex()

```ts
getPropIndex(propId): number
```

Defined in: [src/fivem/models/Ped.ts:831](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L831)

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

Defined in: [src/fivem/models/Ped.ts:846](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L846)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `propId` | `number` |

#### Returns

`number`

***

### getSpeedVector()

```ts
getSpeedVector(isRelative): Vector3
```

Defined in: [src/fivem/models/BaseEntity.ts:124](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/BaseEntity.ts#L124)

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `isRelative` | `boolean` | `false` |

#### Returns

[`Vector3`](Vector3.md)

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`getSpeedVector`](BaseEntity.md#getspeedvector)

***

### getTextureVariation()

```ts
getTextureVariation(componentId): number
```

Defined in: [src/fivem/models/Ped.ts:778](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L778)

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

Defined in: [src/fivem/models/Ped.ts:701](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L701)

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
   ammoCount, 
   isHidden, 
   equipNow): void
```

Defined in: [src/fivem/models/Ped.ts:650](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L650)

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `weapon` | [`WeaponHash`](../enumerations/WeaponHash.md) | `undefined` |
| `ammoCount` | `number` | `999` |
| `isHidden` | `boolean` | `false` |
| `equipNow` | `boolean` | `true` |

#### Returns

`void`

***

### hasBeenDamagedBy()

```ts
hasBeenDamagedBy(entity): boolean
```

Defined in: [src/fivem/models/BaseEntity.ts:464](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/BaseEntity.ts#L464)

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

Defined in: [src/fivem/models/Ped.ts:621](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L621)

#### Returns

`boolean`

#### Overrides

[`BaseEntity`](BaseEntity.md).[`hasBeenDamagedByAnyMeleeWeapon`](BaseEntity.md#hasbeendamagedbyanymeleeweapon)

***

### hasBeenDamagedByAnyWeapon()

```ts
hasBeenDamagedByAnyWeapon(): boolean
```

Defined in: [src/fivem/models/Ped.ts:617](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L617)

#### Returns

`boolean`

#### Overrides

[`BaseEntity`](BaseEntity.md).[`hasBeenDamagedByAnyWeapon`](BaseEntity.md#hasbeendamagedbyanyweapon)

***

### hasBeenDamagedByWeapon()

```ts
hasBeenDamagedByWeapon(weapon): boolean
```

Defined in: [src/fivem/models/Ped.ts:613](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L613)

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
hasClearLosToEntity(entity, traceType): boolean
```

Defined in: [src/fivem/models/BaseEntity.ts:456](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/BaseEntity.ts#L456)

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `entity` | [`BaseEntity`](BaseEntity.md) | `undefined` |
| `traceType` | `number` | `17` |

#### Returns

`boolean`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`hasClearLosToEntity`](BaseEntity.md#hasclearlostoentity)

***

### hasClearLosToEntityInFront()

```ts
hasClearLosToEntityInFront(entity): boolean
```

Defined in: [src/fivem/models/BaseEntity.ts:460](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/BaseEntity.ts#L460)

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

Defined in: [src/fivem/models/Ped.ts:1035](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L1035)

#### Returns

`boolean`

***

### ~~isAlive()~~

```ts
isAlive(): boolean
```

Defined in: [src/fivem/models/BaseEntity.ts:199](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/BaseEntity.ts#L199)

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

Defined in: [src/fivem/models/BaseEntity.ts:686](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/BaseEntity.ts#L686)

#### Returns

`boolean`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`isAttached`](BaseEntity.md#isattached)

***

### isAttachedTo()

```ts
isAttachedTo(entity): boolean
```

Defined in: [src/fivem/models/BaseEntity.ts:690](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/BaseEntity.ts#L690)

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

Defined in: [src/fivem/models/BaseEntity.ts:192](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/BaseEntity.ts#L192)

#### Returns

`boolean`

#### Deprecated

use [[IsDead]] instead

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`isDead`](BaseEntity.md#isdead-3)

***

### isFacingPed()

```ts
isFacingPed(ped, angle): boolean
```

Defined in: [src/fivem/models/Ped.ts:743](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L743)

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `ped` | [`Ped`](Ped.md) | `undefined` |
| `angle` | `number` | `25.0` |

#### Returns

`boolean`

***

### isHeadtracking()

```ts
isHeadtracking(entity): boolean
```

Defined in: [src/fivem/models/Ped.ts:519](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L519)

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

Defined in: [src/fivem/models/BaseEntity.ts:499](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/BaseEntity.ts#L499)

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

***

### isInAnyVehicle()

```ts
isInAnyVehicle(): boolean
```

Defined in: [src/fivem/models/Ped.ts:499](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L499)

#### Returns

`boolean`

***

### isInArea()

```ts
isInArea(minBounds, maxBounds): boolean
```

Defined in: [src/fivem/models/BaseEntity.ts:484](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/BaseEntity.ts#L484)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `minBounds` | [`Vector3`](Vector3.md) |
| `maxBounds` | [`Vector3`](Vector3.md) |

#### Returns

`boolean`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`isInArea`](BaseEntity.md#isinarea)

***

### isInCombatAgainst()

```ts
isInCombatAgainst(target): boolean
```

Defined in: [src/fivem/models/Ped.ts:523](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L523)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `target` | [`Ped`](Ped.md) |

#### Returns

`boolean`

***

### isInCover()

```ts
isInCover(expectUseWeapon): boolean
```

Defined in: [src/fivem/models/Ped.ts:448](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L448)

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `expectUseWeapon` | `boolean` | `false` |

#### Returns

`boolean`

***

### isInRangeOf()

```ts
isInRangeOf(position, range): boolean
```

Defined in: [src/fivem/models/BaseEntity.ts:519](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/BaseEntity.ts#L519)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `position` | [`Vector3`](Vector3.md) |
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

Defined in: [src/fivem/models/Ped.ts:503](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L503)

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

Defined in: [src/fivem/models/BaseEntity.ts:525](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/BaseEntity.ts#L525)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `entity` | [`BaseEntity`](BaseEntity.md) |
| `bounds` | [`Vector3`](Vector3.md) |

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

Defined in: [src/fivem/models/Ped.ts:823](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L823)

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

Defined in: [src/fivem/models/Ped.ts:507](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L507)

#### Returns

`boolean`

***

### isSittingInVehicle()

```ts
isSittingInVehicle(vehicle): boolean
```

Defined in: [src/fivem/models/Ped.ts:511](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L511)

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

Defined in: [src/fivem/models/BaseEntity.ts:538](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/BaseEntity.ts#L538)

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

Defined in: [src/fivem/models/BaseEntity.ts:542](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/BaseEntity.ts#L542)

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

Defined in: [src/fivem/models/Ped.ts:543](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L543)

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

Defined in: [src/fivem/models/Ped.ts:814](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L814)

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

Defined in: [src/fivem/models/Ped.ts:576](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L576)

#### Returns

`void`

***

### listenForStateChange()

```ts
listenForStateChange(keyFilter, handler): number
```

Defined in: [src/fivem/models/BaseEntity.ts:97](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/BaseEntity.ts#L97)

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

Defined in: [src/fivem/models/BaseEntity.ts:773](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/BaseEntity.ts#L773)

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

Defined in: [src/fivem/models/Ped.ts:718](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L718)

#### Returns

`void`

***

### playAmbientSpeed()

```ts
playAmbientSpeed(
   speechName, 
   voiceName, 
   modifier): void
```

Defined in: [src/fivem/models/Ped.ts:580](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L580)

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `speechName` | `string` | `undefined` |
| `voiceName` | `string` | `""` |
| `modifier` | [`SpeechModifier`](../enumerations/SpeechModifier.md) | `SpeechModifier.Standard` |

#### Returns

`void`

***

### ragdoll()

```ts
ragdoll(duration, ragdollType): void
```

Defined in: [src/fivem/models/Ped.ts:681](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L681)

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `duration` | `number` | `-1` |
| `ragdollType` | [`RagdollType`](../enumerations/RagdollType.md) | `RagdollType.Normal` |

#### Returns

`void`

***

### ~~removeAllParticleEffects()~~

```ts
removeAllParticleEffects(): void
```

Defined in: [src/fivem/models/BaseEntity.ts:754](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/BaseEntity.ts#L754)

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

Defined in: [src/fivem/models/Ped.ts:663](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L663)

#### Returns

`void`

***

### removeHelmet()

```ts
removeHelmet(instantly): void
```

Defined in: [src/fivem/models/Ped.ts:714](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L714)

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

Defined in: [src/fivem/models/BaseEntity.ts:747](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/BaseEntity.ts#L747)

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

Defined in: [src/fivem/models/BaseEntity.ts:104](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/BaseEntity.ts#L104)

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

Defined in: [src/fivem/models/Ped.ts:659](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L659)

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

Defined in: [src/fivem/models/Ped.ts:730](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L730)

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

Defined in: [src/fivem/models/BaseEntity.ts:407](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/BaseEntity.ts#L407)

#### Returns

`void`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`resetOpacity`](BaseEntity.md#resetopacity)

***

### resetVisibleDamage()

```ts
resetVisibleDamage(): void
```

Defined in: [src/fivem/models/Ped.ts:558](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L558)

#### Returns

`void`

***

### resurrect()

```ts
resurrect(): void
```

Defined in: [src/fivem/models/Ped.ts:547](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L547)

#### Returns

`void`

***

### setComponentVariation()

```ts
setComponentVariation(
   componentId, 
   drawableId, 
   textureId, 
   paletteId): void
```

Defined in: [src/fivem/models/Ped.ts:747](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L747)

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `componentId` | `number` | `undefined` |
| `drawableId` | `number` | `undefined` |
| `textureId` | `number` | `undefined` |
| `paletteId` | `number` | `0` |

#### Returns

`void`

***

### setConfigFlag()

```ts
setConfigFlag(flagId, value): void
```

Defined in: [src/fivem/models/Ped.ts:726](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L726)

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

Defined in: [src/fivem/models/Ped.ts:766](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L766)

#### Returns

`void`

***

### setEyeColor()

```ts
setEyeColor(color): void
```

Defined in: [src/fivem/models/Ped.ts:854](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L854)

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

Defined in: [src/fivem/models/Ped.ts:866](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L866)

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

Defined in: [src/fivem/models/Ped.ts:862](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L862)

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

Defined in: [src/fivem/models/Ped.ts:874](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L874)

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
   isParent): void
```

Defined in: [src/fivem/models/Ped.ts:948](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L948)

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

***

### setHeadOverlay()

```ts
setHeadOverlay(
   overlayId, 
   index, 
   opacity): void
```

Defined in: [src/fivem/models/Ped.ts:918](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L918)

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

Defined in: [src/fivem/models/Ped.ts:938](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L938)

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

Defined in: [src/fivem/models/Ped.ts:930](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L930)

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

Defined in: [src/fivem/models/Ped.ts:890](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L890)

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

Defined in: [src/fivem/models/Ped.ts:850](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L850)

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

Defined in: [src/fivem/models/Ped.ts:515](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L515)

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

Defined in: [src/fivem/models/BaseEntity.ts:452](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/BaseEntity.ts#L452)

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
   attach): void
```

Defined in: [src/fivem/models/Ped.ts:797](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L797)

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `propId` | `number` | `undefined` |
| `drawableId` | `number` | `undefined` |
| `textureId` | `number` | `undefined` |
| `attach` | `boolean` | `true` |

#### Returns

`void`

***

### setRandomComponentVariation()

```ts
setRandomComponentVariation(): void
```

Defined in: [src/fivem/models/Ped.ts:762](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L762)

#### Returns

`void`

***

### setRandomProps()

```ts
setRandomProps(): void
```

Defined in: [src/fivem/models/Ped.ts:793](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L793)

#### Returns

`void`

***

### exists()

```ts
static exists(ped): boolean
```

Defined in: [src/fivem/models/Ped.ts:19](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L19)

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

Defined in: [src/fivem/models/Ped.ts:23](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L23)

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

Defined in: [src/fivem/models/Ped.ts:27](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/Ped.ts#L27)

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

Defined in: [src/fivem/models/BaseEntity.ts:16](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/models/BaseEntity.ts#L16)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `stateBagName` | `string` |

#### Returns

`null` \| [`BaseEntity`](BaseEntity.md)

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`fromStateBagName`](BaseEntity.md#fromstatebagname)
