[@nativewrappers/fivem](../../README.md) / [fivem](../README.md) / BaseEntity

# Class: BaseEntity

Defined in: [src/fivem/models/BaseEntity.ts:11](https://github.com/nativewrappers/nativewrappers/blob/11c6a49b7dbba5233f7fb8c63e2382099dcf6c28/src/fivem/models/BaseEntity.ts#L11)

## Extended by

- [`Ped`](Ped.md)
- [`Prop`](Prop.md)
- [`Vehicle`](Vehicle.md)

## Constructors

### new BaseEntity()

```ts
new BaseEntity(handle): BaseEntity
```

Defined in: [src/fivem/models/BaseEntity.ts:28](https://github.com/nativewrappers/nativewrappers/blob/11c6a49b7dbba5233f7fb8c63e2382099dcf6c28/src/fivem/models/BaseEntity.ts#L28)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `handle` | `number` |

#### Returns

[`BaseEntity`](BaseEntity.md)

## Properties

| Property | Modifier | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="bones"></a> `bones` | `protected` | `undefined` \| [`EntityBoneCollection`](EntityBoneCollection.md) | `undefined` | [src/fivem/models/BaseEntity.ts:23](https://github.com/nativewrappers/nativewrappers/blob/11c6a49b7dbba5233f7fb8c63e2382099dcf6c28/src/fivem/models/BaseEntity.ts#L23) |
| <a id="handle-1"></a> `handle` | `protected` | `number` | `undefined` | [src/fivem/models/BaseEntity.ts:22](https://github.com/nativewrappers/nativewrappers/blob/11c6a49b7dbba5233f7fb8c63e2382099dcf6c28/src/fivem/models/BaseEntity.ts#L22) |
| <a id="netid"></a> `netId` | `protected` | `null` \| `number` | `null` | [src/fivem/models/BaseEntity.ts:25](https://github.com/nativewrappers/nativewrappers/blob/11c6a49b7dbba5233f7fb8c63e2382099dcf6c28/src/fivem/models/BaseEntity.ts#L25) |
| <a id="statebagcookies"></a> `stateBagCookies` | `protected` | `number`[] | `[]` | [src/fivem/models/BaseEntity.ts:24](https://github.com/nativewrappers/nativewrappers/blob/11c6a49b7dbba5233f7fb8c63e2382099dcf6c28/src/fivem/models/BaseEntity.ts#L24) |
| <a id="type"></a> `type` | `protected` | `ClassTypes` | `ClassTypes.Entity` | [src/fivem/models/BaseEntity.ts:26](https://github.com/nativewrappers/nativewrappers/blob/11c6a49b7dbba5233f7fb8c63e2382099dcf6c28/src/fivem/models/BaseEntity.ts#L26) |

## Accessors

### AttachedBlip

#### Get Signature

```ts
get AttachedBlip(): null | Blip
```

Defined in: [src/fivem/models/BaseEntity.ts:438](https://github.com/nativewrappers/nativewrappers/blob/11c6a49b7dbba5233f7fb8c63e2382099dcf6c28/src/fivem/models/BaseEntity.ts#L438)

##### Returns

`null` \| [`Blip`](Blip.md)

***

### Bones

#### Get Signature

```ts
get Bones(): EntityBoneCollection
```

Defined in: [src/fivem/models/BaseEntity.ts:431](https://github.com/nativewrappers/nativewrappers/blob/11c6a49b7dbba5233f7fb8c63e2382099dcf6c28/src/fivem/models/BaseEntity.ts#L431)

##### Returns

[`EntityBoneCollection`](EntityBoneCollection.md)

***

### ForwardVector

#### Get Signature

```ts
get ForwardVector(): Vector3
```

Defined in: [src/fivem/models/BaseEntity.ts:128](https://github.com/nativewrappers/nativewrappers/blob/11c6a49b7dbba5233f7fb8c63e2382099dcf6c28/src/fivem/models/BaseEntity.ts#L128)

##### Returns

[`Vector3`](Vector3.md)

***

### Handle

#### Get Signature

```ts
get Handle(): number
```

Defined in: [src/fivem/models/BaseEntity.ts:35](https://github.com/nativewrappers/nativewrappers/blob/11c6a49b7dbba5233f7fb8c63e2382099dcf6c28/src/fivem/models/BaseEntity.ts#L35)

##### Returns

`number`

***

### HasCollided

#### Get Signature

```ts
get HasCollided(): boolean
```

Defined in: [src/fivem/models/BaseEntity.ts:411](https://github.com/nativewrappers/nativewrappers/blob/11c6a49b7dbba5233f7fb8c63e2382099dcf6c28/src/fivem/models/BaseEntity.ts#L411)

##### Returns

`boolean`

***

### HasGravity

#### Set Signature

```ts
set HasGravity(value): void
```

Defined in: [src/fivem/models/BaseEntity.ts:314](https://github.com/nativewrappers/nativewrappers/blob/11c6a49b7dbba5233f7fb8c63e2382099dcf6c28/src/fivem/models/BaseEntity.ts#L314)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

##### Returns

`void`

***

### Heading

#### Get Signature

```ts
get Heading(): number
```

Defined in: [src/fivem/models/BaseEntity.ts:282](https://github.com/nativewrappers/nativewrappers/blob/11c6a49b7dbba5233f7fb8c63e2382099dcf6c28/src/fivem/models/BaseEntity.ts#L282)

##### Returns

`number`

#### Set Signature

```ts
set Heading(heading): void
```

Defined in: [src/fivem/models/BaseEntity.ts:286](https://github.com/nativewrappers/nativewrappers/blob/11c6a49b7dbba5233f7fb8c63e2382099dcf6c28/src/fivem/models/BaseEntity.ts#L286)

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

Defined in: [src/fivem/models/BaseEntity.ts:157](https://github.com/nativewrappers/nativewrappers/blob/11c6a49b7dbba5233f7fb8c63e2382099dcf6c28/src/fivem/models/BaseEntity.ts#L157)

##### Returns

`number`

#### Set Signature

```ts
set Health(amount): void
```

Defined in: [src/fivem/models/BaseEntity.ts:161](https://github.com/nativewrappers/nativewrappers/blob/11c6a49b7dbba5233f7fb8c63e2382099dcf6c28/src/fivem/models/BaseEntity.ts#L161)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `amount` | `number` |

##### Returns

`void`

***

### HeightAboveGround

#### Get Signature

```ts
get HeightAboveGround(): number
```

Defined in: [src/fivem/models/BaseEntity.ts:318](https://github.com/nativewrappers/nativewrappers/blob/11c6a49b7dbba5233f7fb8c63e2382099dcf6c28/src/fivem/models/BaseEntity.ts#L318)

##### Returns

`number`

***

### IsAlive

#### Get Signature

```ts
get IsAlive(): boolean
```

Defined in: [src/fivem/models/BaseEntity.ts:185](https://github.com/nativewrappers/nativewrappers/blob/11c6a49b7dbba5233f7fb8c63e2382099dcf6c28/src/fivem/models/BaseEntity.ts#L185)

##### Returns

`boolean`

***

### IsCollisionEnabled

#### Get Signature

```ts
get IsCollisionEnabled(): boolean
```

Defined in: [src/fivem/models/BaseEntity.ts:419](https://github.com/nativewrappers/nativewrappers/blob/11c6a49b7dbba5233f7fb8c63e2382099dcf6c28/src/fivem/models/BaseEntity.ts#L419)

##### Returns

`boolean`

#### Set Signature

```ts
set IsCollisionEnabled(value): void
```

Defined in: [src/fivem/models/BaseEntity.ts:423](https://github.com/nativewrappers/nativewrappers/blob/11c6a49b7dbba5233f7fb8c63e2382099dcf6c28/src/fivem/models/BaseEntity.ts#L423)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

##### Returns

`void`

***

### IsDead

#### Get Signature

```ts
get IsDead(): boolean
```

Defined in: [src/fivem/models/BaseEntity.ts:181](https://github.com/nativewrappers/nativewrappers/blob/11c6a49b7dbba5233f7fb8c63e2382099dcf6c28/src/fivem/models/BaseEntity.ts#L181)

##### Returns

`boolean`

#### Set Signature

```ts
set IsDead(value): void
```

Defined in: [src/fivem/models/BaseEntity.ts:173](https://github.com/nativewrappers/nativewrappers/blob/11c6a49b7dbba5233f7fb8c63e2382099dcf6c28/src/fivem/models/BaseEntity.ts#L173)

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
get IsInAir(): boolean
```

Defined in: [src/fivem/models/BaseEntity.ts:358](https://github.com/nativewrappers/nativewrappers/blob/11c6a49b7dbba5233f7fb8c63e2382099dcf6c28/src/fivem/models/BaseEntity.ts#L358)

##### Returns

`boolean`

***

### IsInvincible

#### Set Signature

```ts
set IsInvincible(value): void
```

Defined in: [src/fivem/models/BaseEntity.ts:388](https://github.com/nativewrappers/nativewrappers/blob/11c6a49b7dbba5233f7fb8c63e2382099dcf6c28/src/fivem/models/BaseEntity.ts#L388)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

##### Returns

`void`

***

### IsInWater

#### Get Signature

```ts
get IsInWater(): boolean
```

Defined in: [src/fivem/models/BaseEntity.ts:362](https://github.com/nativewrappers/nativewrappers/blob/11c6a49b7dbba5233f7fb8c63e2382099dcf6c28/src/fivem/models/BaseEntity.ts#L362)

##### Returns

`boolean`

***

### IsMissionEntity

#### Get Signature

```ts
get IsMissionEntity(): boolean
```

Defined in: [src/fivem/models/BaseEntity.ts:210](https://github.com/nativewrappers/nativewrappers/blob/11c6a49b7dbba5233f7fb8c63e2382099dcf6c28/src/fivem/models/BaseEntity.ts#L210)

Returns if the entity is set as a mission entity and will not be cleaned up by the engine

##### Returns

`boolean`

#### Set Signature

```ts
set IsMissionEntity(value): void
```

Defined in: [src/fivem/models/BaseEntity.ts:217](https://github.com/nativewrappers/nativewrappers/blob/11c6a49b7dbba5233f7fb8c63e2382099dcf6c28/src/fivem/models/BaseEntity.ts#L217)

Sets if the entity is a mission entity and will not be cleaned up by the engine

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

##### Returns

`void`

***

### IsNetworkConcealed

#### Get Signature

```ts
get IsNetworkConcealed(): boolean
```

Defined in: [src/fivem/models/BaseEntity.ts:61](https://github.com/nativewrappers/nativewrappers/blob/11c6a49b7dbba5233f7fb8c63e2382099dcf6c28/src/fivem/models/BaseEntity.ts#L61)

##### Returns

`boolean`

#### Set Signature

```ts
set IsNetworkConcealed(concealed): void
```

Defined in: [src/fivem/models/BaseEntity.ts:65](https://github.com/nativewrappers/nativewrappers/blob/11c6a49b7dbba5233f7fb8c63e2382099dcf6c28/src/fivem/models/BaseEntity.ts#L65)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `concealed` | `boolean` |

##### Returns

`void`

***

### IsNetworked

#### Get Signature

```ts
get IsNetworked(): boolean
```

Defined in: [src/fivem/models/BaseEntity.ts:42](https://github.com/nativewrappers/nativewrappers/blob/11c6a49b7dbba5233f7fb8c63e2382099dcf6c28/src/fivem/models/BaseEntity.ts#L42)

##### Returns

`boolean`

if the entity is a networked entity or local entity

#### Set Signature

```ts
set IsNetworked(networked): void
```

Defined in: [src/fivem/models/BaseEntity.ts:46](https://github.com/nativewrappers/nativewrappers/blob/11c6a49b7dbba5233f7fb8c63e2382099dcf6c28/src/fivem/models/BaseEntity.ts#L46)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `networked` | `boolean` |

##### Returns

`void`

***

### IsOccluded

#### Get Signature

```ts
get IsOccluded(): boolean
```

Defined in: [src/fivem/models/BaseEntity.ts:342](https://github.com/nativewrappers/nativewrappers/blob/11c6a49b7dbba5233f7fb8c63e2382099dcf6c28/src/fivem/models/BaseEntity.ts#L342)

##### Returns

`boolean`

***

### IsOnFire

#### Get Signature

```ts
get IsOnFire(): boolean
```

Defined in: [src/fivem/models/BaseEntity.ts:384](https://github.com/nativewrappers/nativewrappers/blob/11c6a49b7dbba5233f7fb8c63e2382099dcf6c28/src/fivem/models/BaseEntity.ts#L384)

##### Returns

`boolean`

***

### IsOnlyDamagedByPlayer

#### Set Signature

```ts
set IsOnlyDamagedByPlayer(value): void
```

Defined in: [src/fivem/models/BaseEntity.ts:392](https://github.com/nativewrappers/nativewrappers/blob/11c6a49b7dbba5233f7fb8c63e2382099dcf6c28/src/fivem/models/BaseEntity.ts#L392)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

##### Returns

`void`

***

### IsOnScreen

#### Get Signature

```ts
get IsOnScreen(): boolean
```

Defined in: [src/fivem/models/BaseEntity.ts:346](https://github.com/nativewrappers/nativewrappers/blob/11c6a49b7dbba5233f7fb8c63e2382099dcf6c28/src/fivem/models/BaseEntity.ts#L346)

##### Returns

`boolean`

***

### IsPersistent

#### Get Signature

```ts
get IsPersistent(): boolean
```

Defined in: [src/fivem/models/BaseEntity.ts:369](https://github.com/nativewrappers/nativewrappers/blob/11c6a49b7dbba5233f7fb8c63e2382099dcf6c28/src/fivem/models/BaseEntity.ts#L369)

##### Deprecated

use [[IsMissionEntity]] instead as its more obvious as what it does

##### Returns

`boolean`

#### Set Signature

```ts
set IsPersistent(value): void
```

Defined in: [src/fivem/models/BaseEntity.ts:376](https://github.com/nativewrappers/nativewrappers/blob/11c6a49b7dbba5233f7fb8c63e2382099dcf6c28/src/fivem/models/BaseEntity.ts#L376)

##### Deprecated

use [[IsMissionEntity]] instead as its more obvious as what it does

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

##### Returns

`void`

***

### IsPositionFrozen

#### Get Signature

```ts
get IsPositionFrozen(): boolean
```

Defined in: [src/fivem/models/BaseEntity.ts:290](https://github.com/nativewrappers/nativewrappers/blob/11c6a49b7dbba5233f7fb8c63e2382099dcf6c28/src/fivem/models/BaseEntity.ts#L290)

##### Returns

`boolean`

#### Set Signature

```ts
set IsPositionFrozen(value): void
```

Defined in: [src/fivem/models/BaseEntity.ts:294](https://github.com/nativewrappers/nativewrappers/blob/11c6a49b7dbba5233f7fb8c63e2382099dcf6c28/src/fivem/models/BaseEntity.ts#L294)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

##### Returns

`void`

***

### IsRecordingCollisions

#### Set Signature

```ts
set IsRecordingCollisions(value): void
```

Defined in: [src/fivem/models/BaseEntity.ts:427](https://github.com/nativewrappers/nativewrappers/blob/11c6a49b7dbba5233f7fb8c63e2382099dcf6c28/src/fivem/models/BaseEntity.ts#L427)

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
get IsUpright(): boolean
```

Defined in: [src/fivem/models/BaseEntity.ts:350](https://github.com/nativewrappers/nativewrappers/blob/11c6a49b7dbba5233f7fb8c63e2382099dcf6c28/src/fivem/models/BaseEntity.ts#L350)

##### Returns

`boolean`

***

### IsUpsideDown

#### Get Signature

```ts
get IsUpsideDown(): boolean
```

Defined in: [src/fivem/models/BaseEntity.ts:354](https://github.com/nativewrappers/nativewrappers/blob/11c6a49b7dbba5233f7fb8c63e2382099dcf6c28/src/fivem/models/BaseEntity.ts#L354)

##### Returns

`boolean`

***

### IsVisible

#### Get Signature

```ts
get IsVisible(): boolean
```

Defined in: [src/fivem/models/BaseEntity.ts:334](https://github.com/nativewrappers/nativewrappers/blob/11c6a49b7dbba5233f7fb8c63e2382099dcf6c28/src/fivem/models/BaseEntity.ts#L334)

##### Returns

`boolean`

#### Set Signature

```ts
set IsVisible(value): void
```

Defined in: [src/fivem/models/BaseEntity.ts:338](https://github.com/nativewrappers/nativewrappers/blob/11c6a49b7dbba5233f7fb8c63e2382099dcf6c28/src/fivem/models/BaseEntity.ts#L338)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

##### Returns

`void`

***

### LodDistance

#### Get Signature

```ts
get LodDistance(): number
```

Defined in: [src/fivem/models/BaseEntity.ts:326](https://github.com/nativewrappers/nativewrappers/blob/11c6a49b7dbba5233f7fb8c63e2382099dcf6c28/src/fivem/models/BaseEntity.ts#L326)

##### Returns

`number`

#### Set Signature

```ts
set LodDistance(value): void
```

Defined in: [src/fivem/models/BaseEntity.ts:330](https://github.com/nativewrappers/nativewrappers/blob/11c6a49b7dbba5233f7fb8c63e2382099dcf6c28/src/fivem/models/BaseEntity.ts#L330)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

##### Returns

`void`

***

### MaterialCollidingWith

#### Get Signature

```ts
get MaterialCollidingWith(): MaterialHash
```

Defined in: [src/fivem/models/BaseEntity.ts:415](https://github.com/nativewrappers/nativewrappers/blob/11c6a49b7dbba5233f7fb8c63e2382099dcf6c28/src/fivem/models/BaseEntity.ts#L415)

##### Returns

[`MaterialHash`](../enumerations/MaterialHash.md)

***

### Matrix

#### Get Signature

```ts
get Matrix(): Vector3[]
```

Defined in: [src/fivem/models/BaseEntity.ts:132](https://github.com/nativewrappers/nativewrappers/blob/11c6a49b7dbba5233f7fb8c63e2382099dcf6c28/src/fivem/models/BaseEntity.ts#L132)

##### Returns

[`Vector3`](Vector3.md)[]

#### Set Signature

```ts
set Matrix(vectors): void
```

Defined in: [src/fivem/models/BaseEntity.ts:136](https://github.com/nativewrappers/nativewrappers/blob/11c6a49b7dbba5233f7fb8c63e2382099dcf6c28/src/fivem/models/BaseEntity.ts#L136)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `vectors` | [`Vector3`](Vector3.md)[] |

##### Returns

`void`

***

### MaxHealth

#### Get Signature

```ts
get MaxHealth(): number
```

Defined in: [src/fivem/models/BaseEntity.ts:165](https://github.com/nativewrappers/nativewrappers/blob/11c6a49b7dbba5233f7fb8c63e2382099dcf6c28/src/fivem/models/BaseEntity.ts#L165)

##### Returns

`number`

#### Set Signature

```ts
set MaxHealth(amount): void
```

Defined in: [src/fivem/models/BaseEntity.ts:169](https://github.com/nativewrappers/nativewrappers/blob/11c6a49b7dbba5233f7fb8c63e2382099dcf6c28/src/fivem/models/BaseEntity.ts#L169)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `amount` | `number` |

##### Returns

`void`

***

### MaxSpeed

#### Set Signature

```ts
set MaxSpeed(value): void
```

Defined in: [src/fivem/models/BaseEntity.ts:310](https://github.com/nativewrappers/nativewrappers/blob/11c6a49b7dbba5233f7fb8c63e2382099dcf6c28/src/fivem/models/BaseEntity.ts#L310)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

##### Returns

`void`

***

### Model

#### Get Signature

```ts
get Model(): Model
```

Defined in: [src/fivem/models/BaseEntity.ts:203](https://github.com/nativewrappers/nativewrappers/blob/11c6a49b7dbba5233f7fb8c63e2382099dcf6c28/src/fivem/models/BaseEntity.ts#L203)

##### Returns

[`Model`](Model.md)

***

### NetworkId

#### Get Signature

```ts
get NetworkId(): number
```

Defined in: [src/fivem/models/BaseEntity.ts:54](https://github.com/nativewrappers/nativewrappers/blob/11c6a49b7dbba5233f7fb8c63e2382099dcf6c28/src/fivem/models/BaseEntity.ts#L54)

##### Returns

`number`

***

### Opacity

#### Get Signature

```ts
get Opacity(): number
```

Defined in: [src/fivem/models/BaseEntity.ts:396](https://github.com/nativewrappers/nativewrappers/blob/11c6a49b7dbba5233f7fb8c63e2382099dcf6c28/src/fivem/models/BaseEntity.ts#L396)

##### Returns

`number`

#### Set Signature

```ts
set Opacity(value): void
```

Defined in: [src/fivem/models/BaseEntity.ts:403](https://github.com/nativewrappers/nativewrappers/blob/11c6a49b7dbba5233f7fb8c63e2382099dcf6c28/src/fivem/models/BaseEntity.ts#L403)

Sets how transparent an entity is, if you want to reset the alpha level use [[resetOpacity]] instead;

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

##### Returns

`void`

***

### Owner

#### Get Signature

```ts
get Owner(): number
```

Defined in: [src/fivem/models/BaseEntity.ts:112](https://github.com/nativewrappers/nativewrappers/blob/11c6a49b7dbba5233f7fb8c63e2382099dcf6c28/src/fivem/models/BaseEntity.ts#L112)

##### Returns

`number`

***

### Position

#### Get Signature

```ts
get Position(): Vector3
```

Defined in: [src/fivem/models/BaseEntity.ts:225](https://github.com/nativewrappers/nativewrappers/blob/11c6a49b7dbba5233f7fb8c63e2382099dcf6c28/src/fivem/models/BaseEntity.ts#L225)

##### Returns

[`Vector3`](Vector3.md)

#### Set Signature

```ts
set Position(position): void
```

Defined in: [src/fivem/models/BaseEntity.ts:229](https://github.com/nativewrappers/nativewrappers/blob/11c6a49b7dbba5233f7fb8c63e2382099dcf6c28/src/fivem/models/BaseEntity.ts#L229)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `position` | [`Vector3`](Vector3.md) |

##### Returns

`void`

***

### PositionNoOffset

#### Set Signature

```ts
set PositionNoOffset(position): void
```

Defined in: [src/fivem/models/BaseEntity.ts:242](https://github.com/nativewrappers/nativewrappers/blob/11c6a49b7dbba5233f7fb8c63e2382099dcf6c28/src/fivem/models/BaseEntity.ts#L242)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `position` | [`Vector3`](Vector3.md) |

##### Returns

`void`

***

### Quaternion

#### Get Signature

```ts
get Quaternion(): Quaternion
```

Defined in: [src/fivem/models/BaseEntity.ts:262](https://github.com/nativewrappers/nativewrappers/blob/11c6a49b7dbba5233f7fb8c63e2382099dcf6c28/src/fivem/models/BaseEntity.ts#L262)

##### Returns

[`Quaternion`](Quaternion.md)

#### Set Signature

```ts
set Quaternion(quaternion): void
```

Defined in: [src/fivem/models/BaseEntity.ts:272](https://github.com/nativewrappers/nativewrappers/blob/11c6a49b7dbba5233f7fb8c63e2382099dcf6c28/src/fivem/models/BaseEntity.ts#L272)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `quaternion` | [`Quaternion`](Quaternion.md) |

##### Returns

`void`

***

### Rotation

#### Get Signature

```ts
get Rotation(): Vector3
```

Defined in: [src/fivem/models/BaseEntity.ts:254](https://github.com/nativewrappers/nativewrappers/blob/11c6a49b7dbba5233f7fb8c63e2382099dcf6c28/src/fivem/models/BaseEntity.ts#L254)

##### Returns

[`Vector3`](Vector3.md)

#### Set Signature

```ts
set Rotation(rotation): void
```

Defined in: [src/fivem/models/BaseEntity.ts:258](https://github.com/nativewrappers/nativewrappers/blob/11c6a49b7dbba5233f7fb8c63e2382099dcf6c28/src/fivem/models/BaseEntity.ts#L258)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `rotation` | [`Vector3`](Vector3.md) |

##### Returns

`void`

***

### RotationVelocity

#### Get Signature

```ts
get RotationVelocity(): Vector3
```

Defined in: [src/fivem/models/BaseEntity.ts:306](https://github.com/nativewrappers/nativewrappers/blob/11c6a49b7dbba5233f7fb8c63e2382099dcf6c28/src/fivem/models/BaseEntity.ts#L306)

##### Returns

[`Vector3`](Vector3.md)

***

### Speed

#### Get Signature

```ts
get Speed(): number
```

Defined in: [src/fivem/models/BaseEntity.ts:120](https://github.com/nativewrappers/nativewrappers/blob/11c6a49b7dbba5233f7fb8c63e2382099dcf6c28/src/fivem/models/BaseEntity.ts#L120)

##### Returns

`number`

***

### State

#### Get Signature

```ts
get State(): StateBagInterface
```

Defined in: [src/fivem/models/BaseEntity.ts:69](https://github.com/nativewrappers/nativewrappers/blob/11c6a49b7dbba5233f7fb8c63e2382099dcf6c28/src/fivem/models/BaseEntity.ts#L69)

##### Returns

`StateBagInterface`

***

### SubmersionLevel

#### Get Signature

```ts
get SubmersionLevel(): number
```

Defined in: [src/fivem/models/BaseEntity.ts:322](https://github.com/nativewrappers/nativewrappers/blob/11c6a49b7dbba5233f7fb8c63e2382099dcf6c28/src/fivem/models/BaseEntity.ts#L322)

##### Returns

`number`

***

### Velocity

#### Get Signature

```ts
get Velocity(): Vector3
```

Defined in: [src/fivem/models/BaseEntity.ts:298](https://github.com/nativewrappers/nativewrappers/blob/11c6a49b7dbba5233f7fb8c63e2382099dcf6c28/src/fivem/models/BaseEntity.ts#L298)

##### Returns

[`Vector3`](Vector3.md)

#### Set Signature

```ts
set Velocity(velocity): void
```

Defined in: [src/fivem/models/BaseEntity.ts:302](https://github.com/nativewrappers/nativewrappers/blob/11c6a49b7dbba5233f7fb8c63e2382099dcf6c28/src/fivem/models/BaseEntity.ts#L302)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `velocity` | [`Vector3`](Vector3.md) |

##### Returns

`void`

## Methods

### AddStateBagChangeHandler()

```ts
AddStateBagChangeHandler(keyFilter, handler): number
```

Defined in: [src/fivem/models/BaseEntity.ts:73](https://github.com/nativewrappers/nativewrappers/blob/11c6a49b7dbba5233f7fb8c63e2382099dcf6c28/src/fivem/models/BaseEntity.ts#L73)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `keyFilter` | `null` \| `string` |
| `handler` | `StateBagChangeHandler` |

#### Returns

`number`

***

### applyForce()

```ts
applyForce(
   direction, 
   rotation, 
   forceType): void
```

Defined in: [src/fivem/models/BaseEntity.ts:698](https://github.com/nativewrappers/nativewrappers/blob/11c6a49b7dbba5233f7fb8c63e2382099dcf6c28/src/fivem/models/BaseEntity.ts#L698)

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `direction` | [`Vector3`](Vector3.md) | `undefined` |
| `rotation` | [`Vector3`](Vector3.md) | `undefined` |
| `forceType` | [`ForceType`](../enumerations/ForceType.md) | `ForceType.MaxForceRot2` |

#### Returns

`void`

***

### applyForceRelative()

```ts
applyForceRelative(
   direction, 
   rotation, 
   forceType): void
```

Defined in: [src/fivem/models/BaseEntity.ts:721](https://github.com/nativewrappers/nativewrappers/blob/11c6a49b7dbba5233f7fb8c63e2382099dcf6c28/src/fivem/models/BaseEntity.ts#L721)

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `direction` | [`Vector3`](Vector3.md) | `undefined` |
| `rotation` | [`Vector3`](Vector3.md) | `undefined` |
| `forceType` | [`ForceType`](../enumerations/ForceType.md) | `ForceType.MaxForceRot2` |

#### Returns

`void`

***

### attachBlip()

```ts
attachBlip(): Blip
```

Defined in: [src/fivem/models/BaseEntity.ts:448](https://github.com/nativewrappers/nativewrappers/blob/11c6a49b7dbba5233f7fb8c63e2382099dcf6c28/src/fivem/models/BaseEntity.ts#L448)

#### Returns

[`Blip`](Blip.md)

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

Defined in: [src/fivem/models/BaseEntity.ts:603](https://github.com/nativewrappers/nativewrappers/blob/11c6a49b7dbba5233f7fb8c63e2382099dcf6c28/src/fivem/models/BaseEntity.ts#L603)

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

Defined in: [src/fivem/models/BaseEntity.ts:649](https://github.com/nativewrappers/nativewrappers/blob/11c6a49b7dbba5233f7fb8c63e2382099dcf6c28/src/fivem/models/BaseEntity.ts#L649)

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

***

### clearLastWeaponDamage()

```ts
clearLastWeaponDamage(): void
```

Defined in: [src/fivem/models/BaseEntity.ts:480](https://github.com/nativewrappers/nativewrappers/blob/11c6a49b7dbba5233f7fb8c63e2382099dcf6c28/src/fivem/models/BaseEntity.ts#L480)

#### Returns

`void`

***

### delete()

```ts
delete(): void
```

Defined in: [src/fivem/models/BaseEntity.ts:762](https://github.com/nativewrappers/nativewrappers/blob/11c6a49b7dbba5233f7fb8c63e2382099dcf6c28/src/fivem/models/BaseEntity.ts#L762)

#### Returns

`void`

***

### detach()

```ts
detach(): void
```

Defined in: [src/fivem/models/BaseEntity.ts:682](https://github.com/nativewrappers/nativewrappers/blob/11c6a49b7dbba5233f7fb8c63e2382099dcf6c28/src/fivem/models/BaseEntity.ts#L682)

#### Returns

`void`

***

### exists()

```ts
exists(): boolean
```

Defined in: [src/fivem/models/BaseEntity.ts:758](https://github.com/nativewrappers/nativewrappers/blob/11c6a49b7dbba5233f7fb8c63e2382099dcf6c28/src/fivem/models/BaseEntity.ts#L758)

#### Returns

`boolean`

***

### getEntityAttachedTo()

```ts
getEntityAttachedTo(): BaseEntity
```

Defined in: [src/fivem/models/BaseEntity.ts:694](https://github.com/nativewrappers/nativewrappers/blob/11c6a49b7dbba5233f7fb8c63e2382099dcf6c28/src/fivem/models/BaseEntity.ts#L694)

#### Returns

[`BaseEntity`](BaseEntity.md)

***

### getOffsetInRelativeCoords()

```ts
getOffsetInRelativeCoords(worldCoords): Vector3
```

Defined in: [src/fivem/models/BaseEntity.ts:550](https://github.com/nativewrappers/nativewrappers/blob/11c6a49b7dbba5233f7fb8c63e2382099dcf6c28/src/fivem/models/BaseEntity.ts#L550)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `worldCoords` | [`Vector3`](Vector3.md) |

#### Returns

[`Vector3`](Vector3.md)

the offset position from the entity in world coords

***

### getOffsetInWorldCoords()

```ts
getOffsetInWorldCoords(offset): Vector3
```

Defined in: [src/fivem/models/BaseEntity.ts:578](https://github.com/nativewrappers/nativewrappers/blob/11c6a49b7dbba5233f7fb8c63e2382099dcf6c28/src/fivem/models/BaseEntity.ts#L578)

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

***

### ~~getOffsetPosition()~~

```ts
getOffsetPosition(offset): Vector3
```

Defined in: [src/fivem/models/BaseEntity.ts:599](https://github.com/nativewrappers/nativewrappers/blob/11c6a49b7dbba5233f7fb8c63e2382099dcf6c28/src/fivem/models/BaseEntity.ts#L599)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `offset` | [`Vector3`](Vector3.md) |

#### Returns

[`Vector3`](Vector3.md)

#### Deprecated

use [[getOffsetInWorldCoords]]

***

### ~~getPositionOffset()~~

```ts
getPositionOffset(worldCoords): Vector3
```

Defined in: [src/fivem/models/BaseEntity.ts:592](https://github.com/nativewrappers/nativewrappers/blob/11c6a49b7dbba5233f7fb8c63e2382099dcf6c28/src/fivem/models/BaseEntity.ts#L592)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `worldCoords` | [`Vector3`](Vector3.md) |

#### Returns

[`Vector3`](Vector3.md)

#### Deprecated

use [[getOffsetInRelativeCoords]] instead

***

### getSpeedVector()

```ts
getSpeedVector(isRelative): Vector3
```

Defined in: [src/fivem/models/BaseEntity.ts:124](https://github.com/nativewrappers/nativewrappers/blob/11c6a49b7dbba5233f7fb8c63e2382099dcf6c28/src/fivem/models/BaseEntity.ts#L124)

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `isRelative` | `boolean` | `false` |

#### Returns

[`Vector3`](Vector3.md)

***

### hasBeenDamagedBy()

```ts
hasBeenDamagedBy(entity): boolean
```

Defined in: [src/fivem/models/BaseEntity.ts:464](https://github.com/nativewrappers/nativewrappers/blob/11c6a49b7dbba5233f7fb8c63e2382099dcf6c28/src/fivem/models/BaseEntity.ts#L464)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `entity` | [`BaseEntity`](BaseEntity.md) |

#### Returns

`boolean`

***

### hasBeenDamagedByAnyMeleeWeapon()

```ts
hasBeenDamagedByAnyMeleeWeapon(): boolean
```

Defined in: [src/fivem/models/BaseEntity.ts:476](https://github.com/nativewrappers/nativewrappers/blob/11c6a49b7dbba5233f7fb8c63e2382099dcf6c28/src/fivem/models/BaseEntity.ts#L476)

#### Returns

`boolean`

***

### hasBeenDamagedByAnyWeapon()

```ts
hasBeenDamagedByAnyWeapon(): boolean
```

Defined in: [src/fivem/models/BaseEntity.ts:472](https://github.com/nativewrappers/nativewrappers/blob/11c6a49b7dbba5233f7fb8c63e2382099dcf6c28/src/fivem/models/BaseEntity.ts#L472)

#### Returns

`boolean`

***

### hasBeenDamagedByWeapon()

```ts
hasBeenDamagedByWeapon(weapon): boolean
```

Defined in: [src/fivem/models/BaseEntity.ts:468](https://github.com/nativewrappers/nativewrappers/blob/11c6a49b7dbba5233f7fb8c63e2382099dcf6c28/src/fivem/models/BaseEntity.ts#L468)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `weapon` | [`WeaponHash`](../enumerations/WeaponHash.md) |

#### Returns

`boolean`

***

### hasClearLosToEntity()

```ts
hasClearLosToEntity(entity, traceType): boolean
```

Defined in: [src/fivem/models/BaseEntity.ts:456](https://github.com/nativewrappers/nativewrappers/blob/11c6a49b7dbba5233f7fb8c63e2382099dcf6c28/src/fivem/models/BaseEntity.ts#L456)

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `entity` | [`BaseEntity`](BaseEntity.md) | `undefined` |
| `traceType` | `number` | `17` |

#### Returns

`boolean`

***

### hasClearLosToEntityInFront()

```ts
hasClearLosToEntityInFront(entity): boolean
```

Defined in: [src/fivem/models/BaseEntity.ts:460](https://github.com/nativewrappers/nativewrappers/blob/11c6a49b7dbba5233f7fb8c63e2382099dcf6c28/src/fivem/models/BaseEntity.ts#L460)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `entity` | [`BaseEntity`](BaseEntity.md) |

#### Returns

`boolean`

***

### ~~isAlive()~~

```ts
isAlive(): boolean
```

Defined in: [src/fivem/models/BaseEntity.ts:199](https://github.com/nativewrappers/nativewrappers/blob/11c6a49b7dbba5233f7fb8c63e2382099dcf6c28/src/fivem/models/BaseEntity.ts#L199)

#### Returns

`boolean`

#### Deprecated

use [[IsAlive]] instead

***

### isAttached()

```ts
isAttached(): boolean
```

Defined in: [src/fivem/models/BaseEntity.ts:686](https://github.com/nativewrappers/nativewrappers/blob/11c6a49b7dbba5233f7fb8c63e2382099dcf6c28/src/fivem/models/BaseEntity.ts#L686)

#### Returns

`boolean`

***

### isAttachedTo()

```ts
isAttachedTo(entity): boolean
```

Defined in: [src/fivem/models/BaseEntity.ts:690](https://github.com/nativewrappers/nativewrappers/blob/11c6a49b7dbba5233f7fb8c63e2382099dcf6c28/src/fivem/models/BaseEntity.ts#L690)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `entity` | [`BaseEntity`](BaseEntity.md) |

#### Returns

`boolean`

***

### ~~isDead()~~

```ts
isDead(): boolean
```

Defined in: [src/fivem/models/BaseEntity.ts:192](https://github.com/nativewrappers/nativewrappers/blob/11c6a49b7dbba5233f7fb8c63e2382099dcf6c28/src/fivem/models/BaseEntity.ts#L192)

#### Returns

`boolean`

#### Deprecated

use [[IsDead]] instead

***

### isInAngledArea()

```ts
isInAngledArea(
   origin, 
   edge, 
   angle): boolean
```

Defined in: [src/fivem/models/BaseEntity.ts:499](https://github.com/nativewrappers/nativewrappers/blob/11c6a49b7dbba5233f7fb8c63e2382099dcf6c28/src/fivem/models/BaseEntity.ts#L499)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `origin` | [`Vector3`](Vector3.md) |
| `edge` | [`Vector3`](Vector3.md) |
| `angle` | `number` |

#### Returns

`boolean`

***

### isInArea()

```ts
isInArea(minBounds, maxBounds): boolean
```

Defined in: [src/fivem/models/BaseEntity.ts:484](https://github.com/nativewrappers/nativewrappers/blob/11c6a49b7dbba5233f7fb8c63e2382099dcf6c28/src/fivem/models/BaseEntity.ts#L484)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `minBounds` | [`Vector3`](Vector3.md) |
| `maxBounds` | [`Vector3`](Vector3.md) |

#### Returns

`boolean`

***

### isInRangeOf()

```ts
isInRangeOf(position, range): boolean
```

Defined in: [src/fivem/models/BaseEntity.ts:519](https://github.com/nativewrappers/nativewrappers/blob/11c6a49b7dbba5233f7fb8c63e2382099dcf6c28/src/fivem/models/BaseEntity.ts#L519)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `position` | [`Vector3`](Vector3.md) |
| `range` | `number` |

#### Returns

`boolean`

***

### isNearEntity()

```ts
isNearEntity(entity, bounds): boolean
```

Defined in: [src/fivem/models/BaseEntity.ts:525](https://github.com/nativewrappers/nativewrappers/blob/11c6a49b7dbba5233f7fb8c63e2382099dcf6c28/src/fivem/models/BaseEntity.ts#L525)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `entity` | [`BaseEntity`](BaseEntity.md) |
| `bounds` | [`Vector3`](Vector3.md) |

#### Returns

`boolean`

***

### isTouching()

```ts
isTouching(entity): boolean
```

Defined in: [src/fivem/models/BaseEntity.ts:538](https://github.com/nativewrappers/nativewrappers/blob/11c6a49b7dbba5233f7fb8c63e2382099dcf6c28/src/fivem/models/BaseEntity.ts#L538)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `entity` | [`BaseEntity`](BaseEntity.md) |

#### Returns

`boolean`

***

### isTouchingModel()

```ts
isTouchingModel(model): boolean
```

Defined in: [src/fivem/models/BaseEntity.ts:542](https://github.com/nativewrappers/nativewrappers/blob/11c6a49b7dbba5233f7fb8c63e2382099dcf6c28/src/fivem/models/BaseEntity.ts#L542)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `model` | [`Model`](Model.md) |

#### Returns

`boolean`

***

### listenForStateChange()

```ts
listenForStateChange(keyFilter, handler): number
```

Defined in: [src/fivem/models/BaseEntity.ts:97](https://github.com/nativewrappers/nativewrappers/blob/11c6a49b7dbba5233f7fb8c63e2382099dcf6c28/src/fivem/models/BaseEntity.ts#L97)

A short hand function for AddStateBagChangeHandler, this gets automatically cleaned up on entity deletion.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `keyFilter` | `null` \| `string` | the key to filter for or null |
| `handler` | `StateBagChangeHandler` | the function to handle the change |

#### Returns

`number`

a cookie to be used in RemoveStateBagChangeHandler

***

### ~~markAsNoLongerNeeded()~~

```ts
markAsNoLongerNeeded(): void
```

Defined in: [src/fivem/models/BaseEntity.ts:773](https://github.com/nativewrappers/nativewrappers/blob/11c6a49b7dbba5233f7fb8c63e2382099dcf6c28/src/fivem/models/BaseEntity.ts#L773)

#### Returns

`void`

#### Deprecated

use [[IsMissionEntity]] setter as false instead.

***

### ~~removeAllParticleEffects()~~

```ts
removeAllParticleEffects(): void
```

Defined in: [src/fivem/models/BaseEntity.ts:754](https://github.com/nativewrappers/nativewrappers/blob/11c6a49b7dbba5233f7fb8c63e2382099dcf6c28/src/fivem/models/BaseEntity.ts#L754)

#### Returns

`void`

#### Deprecated

use [[removePtfxEffects]]

***

### removePtfxEffects()

```ts
removePtfxEffects(): void
```

Defined in: [src/fivem/models/BaseEntity.ts:747](https://github.com/nativewrappers/nativewrappers/blob/11c6a49b7dbba5233f7fb8c63e2382099dcf6c28/src/fivem/models/BaseEntity.ts#L747)

Removes all particle effects from the entity

#### Returns

`void`

***

### removeStateListener()

```ts
removeStateListener(tgtCookie): void
```

Defined in: [src/fivem/models/BaseEntity.ts:104](https://github.com/nativewrappers/nativewrappers/blob/11c6a49b7dbba5233f7fb8c63e2382099dcf6c28/src/fivem/models/BaseEntity.ts#L104)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `tgtCookie` | `number` |

#### Returns

`void`

***

### resetOpacity()

```ts
resetOpacity(): void
```

Defined in: [src/fivem/models/BaseEntity.ts:407](https://github.com/nativewrappers/nativewrappers/blob/11c6a49b7dbba5233f7fb8c63e2382099dcf6c28/src/fivem/models/BaseEntity.ts#L407)

#### Returns

`void`

***

### setNoCollision()

```ts
setNoCollision(entity, toggle): void
```

Defined in: [src/fivem/models/BaseEntity.ts:452](https://github.com/nativewrappers/nativewrappers/blob/11c6a49b7dbba5233f7fb8c63e2382099dcf6c28/src/fivem/models/BaseEntity.ts#L452)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `entity` | [`BaseEntity`](BaseEntity.md) |
| `toggle` | `boolean` |

#### Returns

`void`

***

### fromNetworkId()

```ts
static fromNetworkId(networkId): null | BaseEntity
```

Defined in: [src/fivem/models/BaseEntity.ts:12](https://github.com/nativewrappers/nativewrappers/blob/11c6a49b7dbba5233f7fb8c63e2382099dcf6c28/src/fivem/models/BaseEntity.ts#L12)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `networkId` | `number` |

#### Returns

`null` \| [`BaseEntity`](BaseEntity.md)

***

### fromStateBagName()

```ts
static fromStateBagName(stateBagName): null | BaseEntity
```

Defined in: [src/fivem/models/BaseEntity.ts:16](https://github.com/nativewrappers/nativewrappers/blob/11c6a49b7dbba5233f7fb8c63e2382099dcf6c28/src/fivem/models/BaseEntity.ts#L16)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `stateBagName` | `string` |

#### Returns

`null` \| [`BaseEntity`](BaseEntity.md)
