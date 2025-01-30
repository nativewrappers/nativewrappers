[@nativewrappers/fivem](../../README.md) / [fivem](../README.md) / Tasks

# Class: Tasks

Defined in: [src/fivem/Tasks.ts:14](https://github.com/nativewrappers/nativewrappers/blob/b3515708998f90e7d7096e3fffccb36c69d6b942/src/fivem/Tasks.ts#L14)

## Constructors

### new Tasks()

```ts
new Tasks(ped): Tasks
```

Defined in: [src/fivem/Tasks.ts:19](https://github.com/nativewrappers/nativewrappers/blob/b3515708998f90e7d7096e3fffccb36c69d6b942/src/fivem/Tasks.ts#L19)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `ped` | `null` \| [`Ped`](Ped.md) |

#### Returns

[`Tasks`](Tasks.md)

## Methods

### achieveHeading()

```ts
achieveHeading(heading, timeout): void
```

Defined in: [src/fivem/Tasks.ts:25](https://github.com/nativewrappers/nativewrappers/blob/b3515708998f90e7d7096e3fffccb36c69d6b942/src/fivem/Tasks.ts#L25)

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `heading` | `number` | `undefined` |
| `timeout` | `number` | `0` |

#### Returns

`void`

***

### aimAt()

```ts
aimAt(target, duration): void
```

Defined in: [src/fivem/Tasks.ts:33](https://github.com/nativewrappers/nativewrappers/blob/b3515708998f90e7d7096e3fffccb36c69d6b942/src/fivem/Tasks.ts#L33)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `target` | [`BaseEntity`](BaseEntity.md) \| [`Vector3`](Vector3.md) |
| `duration` | `number` |

#### Returns

`void`

***

### arrest()

```ts
arrest(ped): void
```

Defined in: [src/fivem/Tasks.ts:48](https://github.com/nativewrappers/nativewrappers/blob/b3515708998f90e7d7096e3fffccb36c69d6b942/src/fivem/Tasks.ts#L48)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `ped` | [`Ped`](Ped.md) |

#### Returns

`void`

***

### blockTemporaryEvents()

```ts
blockTemporaryEvents(block): void
```

Defined in: [src/fivem/Tasks.ts:29](https://github.com/nativewrappers/nativewrappers/blob/b3515708998f90e7d7096e3fffccb36c69d6b942/src/fivem/Tasks.ts#L29)

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `block` | `boolean` | `true` |

#### Returns

`void`

***

### chaseWithGroundVehicle()

```ts
chaseWithGroundVehicle(target): void
```

Defined in: [src/fivem/Tasks.ts:72](https://github.com/nativewrappers/nativewrappers/blob/b3515708998f90e7d7096e3fffccb36c69d6b942/src/fivem/Tasks.ts#L72)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `target` | [`BaseEntity`](BaseEntity.md) |

#### Returns

`void`

***

### chaseWithHelicopter()

```ts
chaseWithHelicopter(target, offset): void
```

Defined in: [src/fivem/Tasks.ts:76](https://github.com/nativewrappers/nativewrappers/blob/b3515708998f90e7d7096e3fffccb36c69d6b942/src/fivem/Tasks.ts#L76)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `target` | [`BaseEntity`](BaseEntity.md) |
| `offset` | [`Vector3`](Vector3.md) |

#### Returns

`void`

***

### chaseWithPlane()

```ts
chaseWithPlane(target, offset): void
```

Defined in: [src/fivem/Tasks.ts:80](https://github.com/nativewrappers/nativewrappers/blob/b3515708998f90e7d7096e3fffccb36c69d6b942/src/fivem/Tasks.ts#L80)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `target` | [`BaseEntity`](BaseEntity.md) |
| `offset` | [`Vector3`](Vector3.md) |

#### Returns

`void`

***

### chatTo()

```ts
chatTo(ped): void
```

Defined in: [src/fivem/Tasks.ts:52](https://github.com/nativewrappers/nativewrappers/blob/b3515708998f90e7d7096e3fffccb36c69d6b942/src/fivem/Tasks.ts#L52)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `ped` | [`Ped`](Ped.md) |

#### Returns

`void`

***

### clearAll()

```ts
clearAll(): void
```

Defined in: [src/fivem/Tasks.ts:541](https://github.com/nativewrappers/nativewrappers/blob/b3515708998f90e7d7096e3fffccb36c69d6b942/src/fivem/Tasks.ts#L541)

#### Returns

`void`

***

### clearAllImmediately()

```ts
clearAllImmediately(): void
```

Defined in: [src/fivem/Tasks.ts:545](https://github.com/nativewrappers/nativewrappers/blob/b3515708998f90e7d7096e3fffccb36c69d6b942/src/fivem/Tasks.ts#L545)

#### Returns

`void`

***

### clearAnimation()

```ts
clearAnimation(animDict, animName): void
```

Defined in: [src/fivem/Tasks.ts:557](https://github.com/nativewrappers/nativewrappers/blob/b3515708998f90e7d7096e3fffccb36c69d6b942/src/fivem/Tasks.ts#L557)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `animDict` | `string` |
| `animName` | `string` |

#### Returns

`void`

***

### clearLookAt()

```ts
clearLookAt(): void
```

Defined in: [src/fivem/Tasks.ts:549](https://github.com/nativewrappers/nativewrappers/blob/b3515708998f90e7d7096e3fffccb36c69d6b942/src/fivem/Tasks.ts#L549)

#### Returns

`void`

***

### clearSecondary()

```ts
clearSecondary(): void
```

Defined in: [src/fivem/Tasks.ts:553](https://github.com/nativewrappers/nativewrappers/blob/b3515708998f90e7d7096e3fffccb36c69d6b942/src/fivem/Tasks.ts#L553)

#### Returns

`void`

***

### climb()

```ts
climb(): void
```

Defined in: [src/fivem/Tasks.ts:60](https://github.com/nativewrappers/nativewrappers/blob/b3515708998f90e7d7096e3fffccb36c69d6b942/src/fivem/Tasks.ts#L60)

#### Returns

`void`

***

### climbLadder()

```ts
climbLadder(): void
```

Defined in: [src/fivem/Tasks.ts:64](https://github.com/nativewrappers/nativewrappers/blob/b3515708998f90e7d7096e3fffccb36c69d6b942/src/fivem/Tasks.ts#L64)

#### Returns

`void`

***

### cower()

```ts
cower(duration): void
```

Defined in: [src/fivem/Tasks.ts:68](https://github.com/nativewrappers/nativewrappers/blob/b3515708998f90e7d7096e3fffccb36c69d6b942/src/fivem/Tasks.ts#L68)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `duration` | `number` |

#### Returns

`void`

***

### cruiseWithVehicle()

```ts
cruiseWithVehicle(
   vehicle, 
   speed, 
   drivingstyle): void
```

Defined in: [src/fivem/Tasks.ts:90](https://github.com/nativewrappers/nativewrappers/blob/b3515708998f90e7d7096e3fffccb36c69d6b942/src/fivem/Tasks.ts#L90)

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `vehicle` | [`Vehicle`](Vehicle.md) | `undefined` |
| `speed` | `number` | `undefined` |
| `drivingstyle` | [`DrivingStyle`](../enumerations/DrivingStyle.md) | `DrivingStyle.None` |

#### Returns

`void`

***

### driveTo()

```ts
driveTo(
   vehicle, 
   target, 
   radius, 
   speed, 
   drivingstyle): void
```

Defined in: [src/fivem/Tasks.ts:103](https://github.com/nativewrappers/nativewrappers/blob/b3515708998f90e7d7096e3fffccb36c69d6b942/src/fivem/Tasks.ts#L103)

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `vehicle` | [`Vehicle`](Vehicle.md) | `undefined` |
| `target` | [`Vector3`](Vector3.md) | `undefined` |
| `radius` | `number` | `undefined` |
| `speed` | `number` | `undefined` |
| `drivingstyle` | [`DrivingStyle`](../enumerations/DrivingStyle.md) | `DrivingStyle.None` |

#### Returns

`void`

***

### enterAnyVehicle()

```ts
enterAnyVehicle(
   seat, 
   timeout, 
   speed, 
   flag): void
```

Defined in: [src/fivem/Tasks.ts:122](https://github.com/nativewrappers/nativewrappers/blob/b3515708998f90e7d7096e3fffccb36c69d6b942/src/fivem/Tasks.ts#L122)

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `seat` | [`VehicleSeat`](../enumerations/VehicleSeat.md) | `VehicleSeat.Any` |
| `timeout` | `number` | `-1` |
| `speed` | `number` | `0` |
| `flag` | `number` | `0` |

#### Returns

`void`

***

### fightAgainst()

```ts
fightAgainst(target, duration?): void
```

Defined in: [src/fivem/Tasks.ts:135](https://github.com/nativewrappers/nativewrappers/blob/b3515708998f90e7d7096e3fffccb36c69d6b942/src/fivem/Tasks.ts#L135)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `target` | [`Ped`](Ped.md) |
| `duration`? | `number` |

#### Returns

`void`

***

### fightAgainstHatedTargets()

```ts
fightAgainstHatedTargets(radius, duration?): void
```

Defined in: [src/fivem/Tasks.ts:143](https://github.com/nativewrappers/nativewrappers/blob/b3515708998f90e7d7096e3fffccb36c69d6b942/src/fivem/Tasks.ts#L143)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `radius` | `number` |
| `duration`? | `number` |

#### Returns

`void`

***

### fleeFrom()

```ts
fleeFrom(pedOrPosition, duration): void
```

Defined in: [src/fivem/Tasks.ts:156](https://github.com/nativewrappers/nativewrappers/blob/b3515708998f90e7d7096e3fffccb36c69d6b942/src/fivem/Tasks.ts#L156)

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `pedOrPosition` | [`Vector3`](Vector3.md) \| [`Ped`](Ped.md) | `undefined` |
| `duration` | `number` | `-1` |

#### Returns

`void`

***

### followPointRoute()

```ts
followPointRoute(points): void
```

Defined in: [src/fivem/Tasks.ts:180](https://github.com/nativewrappers/nativewrappers/blob/b3515708998f90e7d7096e3fffccb36c69d6b942/src/fivem/Tasks.ts#L180)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `points` | [`Vector3`](Vector3.md)[] |

#### Returns

`void`

***

### followToOffsetFromEntity()

```ts
followToOffsetFromEntity(
   target, 
   offset, 
   timeout, 
   stoppingRange, 
   movementSpeed, 
   persistFollowing): void
```

Defined in: [src/fivem/Tasks.ts:188](https://github.com/nativewrappers/nativewrappers/blob/b3515708998f90e7d7096e3fffccb36c69d6b942/src/fivem/Tasks.ts#L188)

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `target` | [`BaseEntity`](BaseEntity.md) | `undefined` |
| `offset` | [`Vector3`](Vector3.md) | `undefined` |
| `timeout` | `number` | `undefined` |
| `stoppingRange` | `number` | `undefined` |
| `movementSpeed` | `number` | `1` |
| `persistFollowing` | `boolean` | `true` |

#### Returns

`void`

***

### goTo()

```ts
goTo(
   position, 
   ignorePaths, 
   timeout, 
   speed, 
   targetHeading, 
   distanceToSlide, 
   flags): void
```

Defined in: [src/fivem/Tasks.ts:209](https://github.com/nativewrappers/nativewrappers/blob/b3515708998f90e7d7096e3fffccb36c69d6b942/src/fivem/Tasks.ts#L209)

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `position` | [`Vector3`](Vector3.md) | `undefined` |
| `ignorePaths` | `boolean` | `false` |
| `timeout` | `number` | `-1` |
| `speed` | `number` | `1` |
| `targetHeading` | `number` | `0` |
| `distanceToSlide` | `number` | `0` |
| `flags` | `number` | `0` |

#### Returns

`void`

***

### goToEntity()

```ts
goToEntity(
   target, 
   offset, 
   timeout): void
```

Defined in: [src/fivem/Tasks.ts:244](https://github.com/nativewrappers/nativewrappers/blob/b3515708998f90e7d7096e3fffccb36c69d6b942/src/fivem/Tasks.ts#L244)

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `target` | [`BaseEntity`](BaseEntity.md) | `undefined` |
| `offset` | `null` \| [`Vector3`](Vector3.md) | `null` |
| `timeout` | `number` | `-1` |

#### Returns

`void`

***

### guardCurrentPosition()

```ts
guardCurrentPosition(): void
```

Defined in: [src/fivem/Tasks.ts:265](https://github.com/nativewrappers/nativewrappers/blob/b3515708998f90e7d7096e3fffccb36c69d6b942/src/fivem/Tasks.ts#L265)

#### Returns

`void`

***

### handsUp()

```ts
handsUp(duration): void
```

Defined in: [src/fivem/Tasks.ts:269](https://github.com/nativewrappers/nativewrappers/blob/b3515708998f90e7d7096e3fffccb36c69d6b942/src/fivem/Tasks.ts#L269)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `duration` | `number` |

#### Returns

`void`

***

### isPlayingAnim()

```ts
isPlayingAnim(
   dict, 
   anim, 
   taskFlag): boolean
```

Defined in: [src/fivem/Tasks.ts:537](https://github.com/nativewrappers/nativewrappers/blob/b3515708998f90e7d7096e3fffccb36c69d6b942/src/fivem/Tasks.ts#L537)

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `dict` | `string` | `undefined` |
| `anim` | `string` | `undefined` |
| `taskFlag` | `number` | `3` |

#### Returns

`boolean`

***

### jump()

```ts
jump(): void
```

Defined in: [src/fivem/Tasks.ts:56](https://github.com/nativewrappers/nativewrappers/blob/b3515708998f90e7d7096e3fffccb36c69d6b942/src/fivem/Tasks.ts#L56)

#### Returns

`void`

***

### landPlane()

```ts
landPlane(
   startPosition, 
   touchdownPosition, 
   plane): void
```

Defined in: [src/fivem/Tasks.ts:273](https://github.com/nativewrappers/nativewrappers/blob/b3515708998f90e7d7096e3fffccb36c69d6b942/src/fivem/Tasks.ts#L273)

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `startPosition` | [`Vector3`](Vector3.md) | `undefined` |
| `touchdownPosition` | [`Vector3`](Vector3.md) | `undefined` |
| `plane` | `null` \| [`Vehicle`](Vehicle.md) | `null` |

#### Returns

`void`

***

### lookAt()

```ts
lookAt(targetOrPosition, duration): void
```

Defined in: [src/fivem/Tasks.ts:307](https://github.com/nativewrappers/nativewrappers/blob/b3515708998f90e7d7096e3fffccb36c69d6b942/src/fivem/Tasks.ts#L307)

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `targetOrPosition` | [`BaseEntity`](BaseEntity.md) \| [`Vector3`](Vector3.md) | `undefined` |
| `duration` | `number` | `-1` |

#### Returns

`void`

***

### parachuteTo()

```ts
parachuteTo(position): void
```

Defined in: [src/fivem/Tasks.ts:328](https://github.com/nativewrappers/nativewrappers/blob/b3515708998f90e7d7096e3fffccb36c69d6b942/src/fivem/Tasks.ts#L328)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `position` | [`Vector3`](Vector3.md) |

#### Returns

`void`

***

### parkVehicle()

```ts
parkVehicle(
   vehicle, 
   position, 
   heading, 
   radius, 
   keepEngineOn): void
```

Defined in: [src/fivem/Tasks.ts:332](https://github.com/nativewrappers/nativewrappers/blob/b3515708998f90e7d7096e3fffccb36c69d6b942/src/fivem/Tasks.ts#L332)

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `vehicle` | [`Vehicle`](Vehicle.md) | `undefined` |
| `position` | [`Vector3`](Vector3.md) | `undefined` |
| `heading` | `number` | `undefined` |
| `radius` | `number` | `20` |
| `keepEngineOn` | `boolean` | `false` |

#### Returns

`void`

***

### performSequence()

```ts
performSequence(sequence): void
```

Defined in: [src/fivem/Tasks.ts:352](https://github.com/nativewrappers/nativewrappers/blob/b3515708998f90e7d7096e3fffccb36c69d6b942/src/fivem/Tasks.ts#L352)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `sequence` | [`TaskSequence`](TaskSequence.md) |

#### Returns

`void`

***

### playAnimation()

```ts
playAnimation(
   animDict, 
   animName, 
   blendInSpeed, 
   blendOutSpeed, 
   duration, 
   playbackRate, 
flags): Promise<void>
```

Defined in: [src/fivem/Tasks.ts:363](https://github.com/nativewrappers/nativewrappers/blob/b3515708998f90e7d7096e3fffccb36c69d6b942/src/fivem/Tasks.ts#L363)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `animDict` | `string` |
| `animName` | `string` |
| `blendInSpeed` | `number` |
| `blendOutSpeed` | `number` |
| `duration` | `number` |
| `playbackRate` | `number` |
| `flags` | [`AnimationFlags`](../enumerations/AnimationFlags.md) |

#### Returns

`Promise`\<`void`\>

***

### putAwayMobilePhone()

```ts
putAwayMobilePhone(): void
```

Defined in: [src/fivem/Tasks.ts:499](https://github.com/nativewrappers/nativewrappers/blob/b3515708998f90e7d7096e3fffccb36c69d6b942/src/fivem/Tasks.ts#L499)

#### Returns

`void`

***

### putAwayParachute()

```ts
putAwayParachute(): void
```

Defined in: [src/fivem/Tasks.ts:495](https://github.com/nativewrappers/nativewrappers/blob/b3515708998f90e7d7096e3fffccb36c69d6b942/src/fivem/Tasks.ts#L495)

#### Returns

`void`

***

### reactAndFlee()

```ts
reactAndFlee(ped): void
```

Defined in: [src/fivem/Tasks.ts:391](https://github.com/nativewrappers/nativewrappers/blob/b3515708998f90e7d7096e3fffccb36c69d6b942/src/fivem/Tasks.ts#L391)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `ped` | [`Ped`](Ped.md) |

#### Returns

`void`

***

### reloadWeapon()

```ts
reloadWeapon(): void
```

Defined in: [src/fivem/Tasks.ts:395](https://github.com/nativewrappers/nativewrappers/blob/b3515708998f90e7d7096e3fffccb36c69d6b942/src/fivem/Tasks.ts#L395)

#### Returns

`void`

***

### shootAt()

```ts
shootAt(
   targetOrPosition, 
   duration, 
   pattern): void
```

Defined in: [src/fivem/Tasks.ts:399](https://github.com/nativewrappers/nativewrappers/blob/b3515708998f90e7d7096e3fffccb36c69d6b942/src/fivem/Tasks.ts#L399)

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `targetOrPosition` | [`Vector3`](Vector3.md) \| [`Ped`](Ped.md) | `undefined` |
| `duration` | `number` | `-1` |
| `pattern` | [`FiringPattern`](../enumerations/FiringPattern.md) | `FiringPattern.Default` |

#### Returns

`void`

***

### shuffleToNextVehicleSeat()

```ts
shuffleToNextVehicleSeat(vehicle): void
```

Defined in: [src/fivem/Tasks.ts:422](https://github.com/nativewrappers/nativewrappers/blob/b3515708998f90e7d7096e3fffccb36c69d6b942/src/fivem/Tasks.ts#L422)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `vehicle` | [`Vehicle`](Vehicle.md) |

#### Returns

`void`

***

### skyDive()

```ts
skyDive(): void
```

Defined in: [src/fivem/Tasks.ts:426](https://github.com/nativewrappers/nativewrappers/blob/b3515708998f90e7d7096e3fffccb36c69d6b942/src/fivem/Tasks.ts#L426)

#### Returns

`void`

***

### slideTo()

```ts
slideTo(
   position, 
   heading, 
   duration): void
```

Defined in: [src/fivem/Tasks.ts:430](https://github.com/nativewrappers/nativewrappers/blob/b3515708998f90e7d7096e3fffccb36c69d6b942/src/fivem/Tasks.ts#L430)

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `position` | [`Vector3`](Vector3.md) | `undefined` |
| `heading` | `number` | `undefined` |
| `duration` | `number` | `0.7` |

#### Returns

`void`

***

### standStill()

```ts
standStill(duration): void
```

Defined in: [src/fivem/Tasks.ts:441](https://github.com/nativewrappers/nativewrappers/blob/b3515708998f90e7d7096e3fffccb36c69d6b942/src/fivem/Tasks.ts#L441)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `duration` | `number` |

#### Returns

`void`

***

### startScenario()

```ts
startScenario(
   name, 
   position, 
   heading, 
   duration, 
   sittingScenario, 
   teleport): void
```

Defined in: [src/fivem/Tasks.ts:445](https://github.com/nativewrappers/nativewrappers/blob/b3515708998f90e7d7096e3fffccb36c69d6b942/src/fivem/Tasks.ts#L445)

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `name` | `string` | `undefined` |
| `position` | [`Vector3`](Vector3.md) | `undefined` |
| `heading` | `number` | `0` |
| `duration` | `number` | `0` |
| `sittingScenario` | `boolean` | `false` |
| `teleport` | `boolean` | `true` |

#### Returns

`void`

***

### swapWeapon()

```ts
swapWeapon(): void
```

Defined in: [src/fivem/Tasks.ts:466](https://github.com/nativewrappers/nativewrappers/blob/b3515708998f90e7d7096e3fffccb36c69d6b942/src/fivem/Tasks.ts#L466)

#### Returns

`void`

***

### turnTo()

```ts
turnTo(targetOrPosition, duration): void
```

Defined in: [src/fivem/Tasks.ts:470](https://github.com/nativewrappers/nativewrappers/blob/b3515708998f90e7d7096e3fffccb36c69d6b942/src/fivem/Tasks.ts#L470)

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `targetOrPosition` | [`BaseEntity`](BaseEntity.md) \| [`Vector3`](Vector3.md) | `undefined` |
| `duration` | `number` | `-1` |

#### Returns

`void`

***

### useMobilePhone()

```ts
useMobilePhone(duration): void
```

Defined in: [src/fivem/Tasks.ts:491](https://github.com/nativewrappers/nativewrappers/blob/b3515708998f90e7d7096e3fffccb36c69d6b942/src/fivem/Tasks.ts#L491)

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `duration` | `number` | `1` |

#### Returns

`void`

***

### useParachute()

```ts
useParachute(): void
```

Defined in: [src/fivem/Tasks.ts:487](https://github.com/nativewrappers/nativewrappers/blob/b3515708998f90e7d7096e3fffccb36c69d6b942/src/fivem/Tasks.ts#L487)

#### Returns

`void`

***

### vehicleChase()

```ts
vehicleChase(target): void
```

Defined in: [src/fivem/Tasks.ts:503](https://github.com/nativewrappers/nativewrappers/blob/b3515708998f90e7d7096e3fffccb36c69d6b942/src/fivem/Tasks.ts#L503)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `target` | [`Ped`](Ped.md) |

#### Returns

`void`

***

### vehicleShootAtPed()

```ts
vehicleShootAtPed(target): void
```

Defined in: [src/fivem/Tasks.ts:507](https://github.com/nativewrappers/nativewrappers/blob/b3515708998f90e7d7096e3fffccb36c69d6b942/src/fivem/Tasks.ts#L507)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `target` | [`Ped`](Ped.md) |

#### Returns

`void`

***

### wait()

```ts
wait(duration): void
```

Defined in: [src/fivem/Tasks.ts:511](https://github.com/nativewrappers/nativewrappers/blob/b3515708998f90e7d7096e3fffccb36c69d6b942/src/fivem/Tasks.ts#L511)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `duration` | `number` |

#### Returns

`void`

***

### wanderAround()

```ts
wanderAround(position?, radius?): void
```

Defined in: [src/fivem/Tasks.ts:515](https://github.com/nativewrappers/nativewrappers/blob/b3515708998f90e7d7096e3fffccb36c69d6b942/src/fivem/Tasks.ts#L515)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `position`? | [`Vector3`](Vector3.md) |
| `radius`? | `number` |

#### Returns

`void`

***

### warpIntoVehicle()

```ts
warpIntoVehicle(vehicle, seat): void
```

Defined in: [src/fivem/Tasks.ts:529](https://github.com/nativewrappers/nativewrappers/blob/b3515708998f90e7d7096e3fffccb36c69d6b942/src/fivem/Tasks.ts#L529)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `vehicle` | [`Vehicle`](Vehicle.md) |
| `seat` | [`VehicleSeat`](../enumerations/VehicleSeat.md) |

#### Returns

`void`

***

### warpOutOfVehicle()

```ts
warpOutOfVehicle(vehicle, flags): void
```

Defined in: [src/fivem/Tasks.ts:533](https://github.com/nativewrappers/nativewrappers/blob/b3515708998f90e7d7096e3fffccb36c69d6b942/src/fivem/Tasks.ts#L533)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `vehicle` | [`Vehicle`](Vehicle.md) |
| `flags` | [`LeaveVehicleFlags`](../enumerations/LeaveVehicleFlags.md) |

#### Returns

`void`

***

### everyoneLeaveVehicle()

```ts
static everyoneLeaveVehicle(vehicle): void
```

Defined in: [src/fivem/Tasks.ts:131](https://github.com/nativewrappers/nativewrappers/blob/b3515708998f90e7d7096e3fffccb36c69d6b942/src/fivem/Tasks.ts#L131)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `vehicle` | [`Vehicle`](Vehicle.md) |

#### Returns

`void`
