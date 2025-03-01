[@nativewrappers/fivem](../../README.md) / [fivem](../README.md) / Prop

# Class: Prop

Defined in: fivem/models/Prop.d.ts:3

## Extends

- [`BaseEntity`](BaseEntity.md)

## Constructors

### new Prop()

```ts
new Prop(handle): Prop
```

Defined in: fivem/models/Prop.d.ts:8

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `handle` | `number` |

#### Returns

[`Prop`](Prop.md)

#### Overrides

[`BaseEntity`](BaseEntity.md).[`constructor`](BaseEntity.md#constructors)

## Properties

| Property | Modifier | Type | Overrides | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ | ------ |
| <a id="bones"></a> `bones` | `protected` | `undefined` \| [`EntityBoneCollection`](EntityBoneCollection.md) | - | [`BaseEntity`](BaseEntity.md).[`bones`](BaseEntity.md#bones) | fivem/models/BaseEntity.d.ts:14 |
| <a id="handle-1"></a> `handle` | `protected` | `number` | - | [`BaseEntity`](BaseEntity.md).[`handle`](BaseEntity.md#handle-1) | fivem/models/BaseEntity.d.ts:13 |
| <a id="netid"></a> `netId` | `protected` | `null` \| `number` | - | [`BaseEntity`](BaseEntity.md).[`netId`](BaseEntity.md#netid) | fivem/models/BaseEntity.d.ts:16 |
| <a id="statebagcookies"></a> `stateBagCookies` | `protected` | `number`[] | - | [`BaseEntity`](BaseEntity.md).[`stateBagCookies`](BaseEntity.md#statebagcookies) | fivem/models/BaseEntity.d.ts:15 |
| <a id="type"></a> `type` | `protected` | `ClassTypes` | [`BaseEntity`](BaseEntity.md).[`type`](BaseEntity.md#type) | - | fivem/models/Prop.d.ts:7 |

## Accessors

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

### Bones

#### Get Signature

```ts
get Bones(): EntityBoneCollection
```

Defined in: fivem/models/BaseEntity.d.ts:118

##### Returns

[`EntityBoneCollection`](EntityBoneCollection.md)

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`Bones`](BaseEntity.md#bones-1)

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

Defined in: fivem/models/BaseEntity.d.ts:44

##### Returns

`number`

#### Set Signature

```ts
set Health(amount): void
```

Defined in: fivem/models/BaseEntity.d.ts:45

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `amount` | `number` |

##### Returns

`void`

#### Inherited from

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

### MaxHealth

#### Get Signature

```ts
get MaxHealth(): number
```

Defined in: fivem/models/BaseEntity.d.ts:46

##### Returns

`number`

#### Set Signature

```ts
set MaxHealth(amount): void
```

Defined in: fivem/models/BaseEntity.d.ts:47

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `amount` | `number` |

##### Returns

`void`

#### Inherited from

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

### clearLastWeaponDamage()

```ts
clearLastWeaponDamage(): void
```

Defined in: fivem/models/BaseEntity.d.ts:128

#### Returns

`void`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`clearLastWeaponDamage`](BaseEntity.md#clearlastweapondamage)

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

Defined in: fivem/models/Prop.d.ts:9

#### Returns

`boolean`

#### Overrides

[`BaseEntity`](BaseEntity.md).[`exists`](BaseEntity.md#exists)

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

Defined in: fivem/models/BaseEntity.d.ts:127

#### Returns

`boolean`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`hasBeenDamagedByAnyMeleeWeapon`](BaseEntity.md#hasbeendamagedbyanymeleeweapon)

***

### hasBeenDamagedByAnyWeapon()

```ts
hasBeenDamagedByAnyWeapon(): boolean
```

Defined in: fivem/models/BaseEntity.d.ts:126

#### Returns

`boolean`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`hasBeenDamagedByAnyWeapon`](BaseEntity.md#hasbeendamagedbyanyweapon)

***

### hasBeenDamagedByWeapon()

```ts
hasBeenDamagedByWeapon(weapon): boolean
```

Defined in: fivem/models/BaseEntity.d.ts:125

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `weapon` | [`WeaponHash`](../enumerations/WeaponHash.md) |

#### Returns

`boolean`

#### Inherited from

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

### placeOnGround()

```ts
placeOnGround(): void
```

Defined in: fivem/models/Prop.d.ts:10

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

### exists()

```ts
static exists(prop): boolean
```

Defined in: fivem/models/Prop.d.ts:4

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `prop` | [`Prop`](Prop.md) |

#### Returns

`boolean`

***

### fromHandle()

```ts
static fromHandle(handle): null | Prop
```

Defined in: fivem/models/Prop.d.ts:5

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `handle` | `number` |

#### Returns

`null` \| [`Prop`](Prop.md)

***

### fromNetworkId()

```ts
static fromNetworkId(networkId): null | Prop
```

Defined in: fivem/models/Prop.d.ts:6

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `networkId` | `number` |

#### Returns

`null` \| [`Prop`](Prop.md)

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
