[@nativewrappers/fivem](../../../../README.md) / [fivem/models/BaseEntity](../README.md) / BaseEntity

# Abstract Class: BaseEntity

Defined in: lib/fivem/models/BaseEntity.d.ts:12

## Extended by

- [`Ped`](../../Ped/classes/Ped.md)
- [`Prop`](../../Prop/classes/Prop.md)
- [`Vehicle`](../../Vehicle/classes/Vehicle.md)

## Constructors

### Constructor

```ts
new BaseEntity(handle): BaseEntity;
```

Defined in: lib/fivem/models/BaseEntity.d.ts:18

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `handle` | `number` |

#### Returns

`BaseEntity`

## Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="bones"></a> `bones?` | `abstract` | [`BaseEntityBoneCollection`](../../BaseEntityBoneCollection/classes/BaseEntityBoneCollection.md) | lib/fivem/models/BaseEntity.d.ts:17 |
| <a id="handle"></a> `handle` | `protected` | `number` | lib/fivem/models/BaseEntity.d.ts:13 |
| <a id="netid"></a> `netId` | `protected` | `null` \| `number` | lib/fivem/models/BaseEntity.d.ts:15 |
| <a id="statebagcookies"></a> `stateBagCookies` | `protected` | `number`[] | lib/fivem/models/BaseEntity.d.ts:14 |
| <a id="type"></a> `type` | `abstract` | `ClassTypes` | lib/fivem/models/BaseEntity.d.ts:16 |

## Accessors

### AttachedBlip

#### Get Signature

```ts
get AttachedBlip(): null | Blip;
```

Defined in: lib/fivem/models/BaseEntity.d.ts:119

##### Returns

`null` \| [`Blip`](../../../Blip/classes/Blip.md)

***

### Bones

#### Get Signature

```ts
get abstract Bones(): BaseEntityBoneCollection;
```

Defined in: lib/fivem/models/BaseEntity.d.ts:118

##### Returns

[`BaseEntityBoneCollection`](../../BaseEntityBoneCollection/classes/BaseEntityBoneCollection.md)

***

### ForwardVector

#### Get Signature

```ts
get ForwardVector(): Vector3;
```

Defined in: lib/fivem/models/BaseEntity.d.ts:41

##### Returns

`Vector3`

***

### Handle

#### Get Signature

```ts
get Handle(): number;
```

Defined in: lib/fivem/models/BaseEntity.d.ts:19

##### Returns

`number`

***

### HasCollided

#### Get Signature

```ts
get HasCollided(): boolean;
```

Defined in: lib/fivem/models/BaseEntity.d.ts:113

##### Returns

`boolean`

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

***

### Health

#### Get Signature

```ts
get Health(): number;
```

Defined in: lib/fivem/models/BaseEntity.d.ts:44

##### Returns

`number`

#### Set Signature

```ts
set Health(amount): void;
```

Defined in: lib/fivem/models/BaseEntity.d.ts:45

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
get HeightAboveGround(): number;
```

Defined in: lib/fivem/models/BaseEntity.d.ts:84

##### Returns

`number`

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

***

### IsAlive

#### Get Signature

```ts
get IsAlive(): boolean;
```

Defined in: lib/fivem/models/BaseEntity.d.ts:50

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

***

### IsInAir

#### Get Signature

```ts
get IsInAir(): boolean;
```

Defined in: lib/fivem/models/BaseEntity.d.ts:94

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

***

### IsInWater

#### Get Signature

```ts
get IsInWater(): boolean;
```

Defined in: lib/fivem/models/BaseEntity.d.ts:95

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

***

### IsOccluded

#### Get Signature

```ts
get IsOccluded(): boolean;
```

Defined in: lib/fivem/models/BaseEntity.d.ts:90

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

***

### IsOnScreen

#### Get Signature

```ts
get IsOnScreen(): boolean;
```

Defined in: lib/fivem/models/BaseEntity.d.ts:91

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

***

### IsUpright

#### Get Signature

```ts
get IsUpright(): boolean;
```

Defined in: lib/fivem/models/BaseEntity.d.ts:92

##### Returns

`boolean`

***

### IsUpsideDown

#### Get Signature

```ts
get IsUpsideDown(): boolean;
```

Defined in: lib/fivem/models/BaseEntity.d.ts:93

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

***

### MaterialCollidingWith

#### Get Signature

```ts
get MaterialCollidingWith(): MaterialHash;
```

Defined in: lib/fivem/models/BaseEntity.d.ts:114

##### Returns

[`MaterialHash`](../../../hashes/MaterialHash/enumerations/MaterialHash.md)

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

***

### MaxHealth

#### Get Signature

```ts
get MaxHealth(): number;
```

Defined in: lib/fivem/models/BaseEntity.d.ts:46

##### Returns

`number`

#### Set Signature

```ts
set MaxHealth(amount): void;
```

Defined in: lib/fivem/models/BaseEntity.d.ts:47

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
set MaxSpeed(value): void;
```

Defined in: lib/fivem/models/BaseEntity.d.ts:82

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
get Model(): Model;
```

Defined in: lib/fivem/models/BaseEntity.d.ts:59

##### Returns

[`Model`](../../../Model/classes/Model.md)

***

### NetworkId

#### Get Signature

```ts
get NetworkId(): number;
```

Defined in: lib/fivem/models/BaseEntity.d.ts:25

##### Returns

`number`

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

***

### Owner

#### Get Signature

```ts
get Owner(): number;
```

Defined in: lib/fivem/models/BaseEntity.d.ts:38

##### Returns

`number`

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

***

### RotationVelocity

#### Get Signature

```ts
get RotationVelocity(): Vector3;
```

Defined in: lib/fivem/models/BaseEntity.d.ts:81

##### Returns

`Vector3`

***

### Speed

#### Get Signature

```ts
get Speed(): number;
```

Defined in: lib/fivem/models/BaseEntity.d.ts:39

##### Returns

`number`

***

### State

#### Get Signature

```ts
get State(): StateBagInterface;
```

Defined in: lib/fivem/models/BaseEntity.d.ts:28

##### Returns

[`StateBagInterface`](../../../../redm/definitions/Citizen/interfaces/StateBagInterface.md)

***

### SubmersionLevel

#### Get Signature

```ts
get SubmersionLevel(): number;
```

Defined in: lib/fivem/models/BaseEntity.d.ts:85

##### Returns

`number`

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

***

### attachBlip()

```ts
attachBlip(): Blip;
```

Defined in: lib/fivem/models/BaseEntity.d.ts:120

#### Returns

[`Blip`](../../../Blip/classes/Blip.md)

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
| `entity` | `BaseEntity` |
| `position` | `Vector3` |
| `rotation` | `Vector3` |
| `collisions?` | `boolean` |
| `unk9?` | `boolean` |
| `useSoftPinning?` | `boolean` |
| `rotationOrder?` | `number` |

#### Returns

`void`

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

***

### clearInterior()

```ts
clearInterior(): void;
```

Defined in: lib/fivem/models/BaseEntity.d.ts:195

#### Returns

`void`

***

### clearLastWeaponDamage()

```ts
clearLastWeaponDamage(): void;
```

Defined in: lib/fivem/models/BaseEntity.d.ts:128

#### Returns

`void`

***

### delete()

```ts
delete(): void;
```

Defined in: lib/fivem/models/BaseEntity.d.ts:182

#### Returns

`void`

***

### detach()

```ts
detach(): void;
```

Defined in: lib/fivem/models/BaseEntity.d.ts:167

#### Returns

`void`

***

### exists()

```ts
exists(): boolean;
```

Defined in: lib/fivem/models/BaseEntity.d.ts:181

#### Returns

`boolean`

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

***

### getEntityAttachedTo()

```ts
abstract getEntityAttachedTo(): null | BaseEntity;
```

Defined in: lib/fivem/models/BaseEntity.d.ts:170

#### Returns

`null` \| `BaseEntity`

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

***

### hasBeenDamagedBy()

```ts
hasBeenDamagedBy(entity): boolean;
```

Defined in: lib/fivem/models/BaseEntity.d.ts:124

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `entity` | `BaseEntity` |

#### Returns

`boolean`

***

### hasBeenDamagedByAnyMeleeWeapon()

```ts
hasBeenDamagedByAnyMeleeWeapon(): boolean;
```

Defined in: lib/fivem/models/BaseEntity.d.ts:127

#### Returns

`boolean`

***

### hasBeenDamagedByAnyWeapon()

```ts
hasBeenDamagedByAnyWeapon(): boolean;
```

Defined in: lib/fivem/models/BaseEntity.d.ts:126

#### Returns

`boolean`

***

### hasBeenDamagedByWeapon()

```ts
hasBeenDamagedByWeapon(weapon): boolean;
```

Defined in: lib/fivem/models/BaseEntity.d.ts:125

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `weapon` | [`WeaponHash`](../../../hashes/WeaponHash/enumerations/WeaponHash.md) |

#### Returns

`boolean`

***

### hasClearLosToEntity()

```ts
hasClearLosToEntity(entity, traceType?): boolean;
```

Defined in: lib/fivem/models/BaseEntity.d.ts:122

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `entity` | `BaseEntity` |
| `traceType?` | `number` |

#### Returns

`boolean`

***

### hasClearLosToEntityInFront()

```ts
hasClearLosToEntityInFront(entity): boolean;
```

Defined in: lib/fivem/models/BaseEntity.d.ts:123

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `entity` | `BaseEntity` |

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

***

### isAttached()

```ts
isAttached(): boolean;
```

Defined in: lib/fivem/models/BaseEntity.d.ts:168

#### Returns

`boolean`

***

### isAttachedTo()

```ts
isAttachedTo(entity): boolean;
```

Defined in: lib/fivem/models/BaseEntity.d.ts:169

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `entity` | `BaseEntity` |

#### Returns

`boolean`

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

***

### isNearEntity()

```ts
isNearEntity(entity, bounds): boolean;
```

Defined in: lib/fivem/models/BaseEntity.d.ts:132

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `entity` | `BaseEntity` |
| `bounds` | `Vector3` |

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
| `entity` | `BaseEntity` |

#### Returns

`boolean`

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

***

### removePtfxEffects()

```ts
removePtfxEffects(): void;
```

Defined in: lib/fivem/models/BaseEntity.d.ts:176

Removes all particle effects from the entity

#### Returns

`void`

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

***

### resetOpacity()

```ts
resetOpacity(): void;
```

Defined in: lib/fivem/models/BaseEntity.d.ts:112

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
| `entity` | `BaseEntity` |
| `toggle` | `boolean` |

#### Returns

`void`
