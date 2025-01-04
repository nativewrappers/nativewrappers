[@nativewrappers/fivem](../../README.md) / [fivem](../README.md) / Tasks

# Class: Tasks

## Constructors

### new Tasks()

```ts
new Tasks(ped): Tasks
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `ped` | `null` \| [`Ped`](Ped.md) |

#### Returns

[`Tasks`](Tasks.md)

#### Defined in

[src/fivem/Tasks.ts:19](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Tasks.ts#L19)

## Methods

### achieveHeading()

```ts
achieveHeading(heading, timeout): void
```

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `heading` | `number` | `undefined` |
| `timeout` | `number` | `0` |

#### Returns

`void`

#### Defined in

[src/fivem/Tasks.ts:25](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Tasks.ts#L25)

***

### aimAt()

```ts
aimAt(target, duration): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `target` | [`BaseEntity`](BaseEntity.md) \| [`Vector3`](Vector3.md) |
| `duration` | `number` |

#### Returns

`void`

#### Defined in

[src/fivem/Tasks.ts:33](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Tasks.ts#L33)

***

### arrest()

```ts
arrest(ped): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `ped` | [`Ped`](Ped.md) |

#### Returns

`void`

#### Defined in

[src/fivem/Tasks.ts:48](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Tasks.ts#L48)

***

### blockTemporaryEvents()

```ts
blockTemporaryEvents(block): void
```

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `block` | `boolean` | `true` |

#### Returns

`void`

#### Defined in

[src/fivem/Tasks.ts:29](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Tasks.ts#L29)

***

### chaseWithGroundVehicle()

```ts
chaseWithGroundVehicle(target): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `target` | [`BaseEntity`](BaseEntity.md) |

#### Returns

`void`

#### Defined in

[src/fivem/Tasks.ts:72](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Tasks.ts#L72)

***

### chaseWithHelicopter()

```ts
chaseWithHelicopter(target, offset): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `target` | [`BaseEntity`](BaseEntity.md) |
| `offset` | [`Vector3`](Vector3.md) |

#### Returns

`void`

#### Defined in

[src/fivem/Tasks.ts:76](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Tasks.ts#L76)

***

### chaseWithPlane()

```ts
chaseWithPlane(target, offset): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `target` | [`BaseEntity`](BaseEntity.md) |
| `offset` | [`Vector3`](Vector3.md) |

#### Returns

`void`

#### Defined in

[src/fivem/Tasks.ts:80](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Tasks.ts#L80)

***

### chatTo()

```ts
chatTo(ped): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `ped` | [`Ped`](Ped.md) |

#### Returns

`void`

#### Defined in

[src/fivem/Tasks.ts:52](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Tasks.ts#L52)

***

### clearAll()

```ts
clearAll(): void
```

#### Returns

`void`

#### Defined in

[src/fivem/Tasks.ts:541](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Tasks.ts#L541)

***

### clearAllImmediately()

```ts
clearAllImmediately(): void
```

#### Returns

`void`

#### Defined in

[src/fivem/Tasks.ts:545](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Tasks.ts#L545)

***

### clearAnimation()

```ts
clearAnimation(animDict, animName): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `animDict` | `string` |
| `animName` | `string` |

#### Returns

`void`

#### Defined in

[src/fivem/Tasks.ts:557](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Tasks.ts#L557)

***

### clearLookAt()

```ts
clearLookAt(): void
```

#### Returns

`void`

#### Defined in

[src/fivem/Tasks.ts:549](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Tasks.ts#L549)

***

### clearSecondary()

```ts
clearSecondary(): void
```

#### Returns

`void`

#### Defined in

[src/fivem/Tasks.ts:553](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Tasks.ts#L553)

***

### climb()

```ts
climb(): void
```

#### Returns

`void`

#### Defined in

[src/fivem/Tasks.ts:60](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Tasks.ts#L60)

***

### climbLadder()

```ts
climbLadder(): void
```

#### Returns

`void`

#### Defined in

[src/fivem/Tasks.ts:64](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Tasks.ts#L64)

***

### cower()

```ts
cower(duration): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `duration` | `number` |

#### Returns

`void`

#### Defined in

[src/fivem/Tasks.ts:68](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Tasks.ts#L68)

***

### cruiseWithVehicle()

```ts
cruiseWithVehicle(
   vehicle, 
   speed, 
   drivingstyle): void
```

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `vehicle` | [`Vehicle`](Vehicle.md) | `undefined` |
| `speed` | `number` | `undefined` |
| `drivingstyle` | [`DrivingStyle`](../enumerations/DrivingStyle.md) | `DrivingStyle.None` |

#### Returns

`void`

#### Defined in

[src/fivem/Tasks.ts:90](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Tasks.ts#L90)

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

#### Defined in

[src/fivem/Tasks.ts:103](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Tasks.ts#L103)

***

### enterAnyVehicle()

```ts
enterAnyVehicle(
   seat, 
   timeout, 
   speed, 
   flag): void
```

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `seat` | [`VehicleSeat`](../enumerations/VehicleSeat.md) | `VehicleSeat.Any` |
| `timeout` | `number` | `-1` |
| `speed` | `number` | `0` |
| `flag` | `number` | `0` |

#### Returns

`void`

#### Defined in

[src/fivem/Tasks.ts:122](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Tasks.ts#L122)

***

### fightAgainst()

```ts
fightAgainst(target, duration?): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `target` | [`Ped`](Ped.md) |
| `duration`? | `number` |

#### Returns

`void`

#### Defined in

[src/fivem/Tasks.ts:135](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Tasks.ts#L135)

***

### fightAgainstHatedTargets()

```ts
fightAgainstHatedTargets(radius, duration?): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `radius` | `number` |
| `duration`? | `number` |

#### Returns

`void`

#### Defined in

[src/fivem/Tasks.ts:143](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Tasks.ts#L143)

***

### fleeFrom()

```ts
fleeFrom(pedOrPosition, duration): void
```

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `pedOrPosition` | [`Vector3`](Vector3.md) \| [`Ped`](Ped.md) | `undefined` |
| `duration` | `number` | `-1` |

#### Returns

`void`

#### Defined in

[src/fivem/Tasks.ts:156](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Tasks.ts#L156)

***

### followPointRoute()

```ts
followPointRoute(points): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `points` | [`Vector3`](Vector3.md)[] |

#### Returns

`void`

#### Defined in

[src/fivem/Tasks.ts:180](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Tasks.ts#L180)

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

#### Defined in

[src/fivem/Tasks.ts:188](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Tasks.ts#L188)

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

#### Defined in

[src/fivem/Tasks.ts:209](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Tasks.ts#L209)

***

### goToEntity()

```ts
goToEntity(
   target, 
   offset, 
   timeout): void
```

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `target` | [`BaseEntity`](BaseEntity.md) | `undefined` |
| `offset` | `null` \| [`Vector3`](Vector3.md) | `null` |
| `timeout` | `number` | `-1` |

#### Returns

`void`

#### Defined in

[src/fivem/Tasks.ts:244](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Tasks.ts#L244)

***

### guardCurrentPosition()

```ts
guardCurrentPosition(): void
```

#### Returns

`void`

#### Defined in

[src/fivem/Tasks.ts:265](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Tasks.ts#L265)

***

### handsUp()

```ts
handsUp(duration): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `duration` | `number` |

#### Returns

`void`

#### Defined in

[src/fivem/Tasks.ts:269](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Tasks.ts#L269)

***

### isPlayingAnim()

```ts
isPlayingAnim(
   dict, 
   anim, 
   taskFlag): boolean
```

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `dict` | `string` | `undefined` |
| `anim` | `string` | `undefined` |
| `taskFlag` | `number` | `3` |

#### Returns

`boolean`

#### Defined in

[src/fivem/Tasks.ts:537](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Tasks.ts#L537)

***

### jump()

```ts
jump(): void
```

#### Returns

`void`

#### Defined in

[src/fivem/Tasks.ts:56](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Tasks.ts#L56)

***

### landPlane()

```ts
landPlane(
   startPosition, 
   touchdownPosition, 
   plane): void
```

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `startPosition` | [`Vector3`](Vector3.md) | `undefined` |
| `touchdownPosition` | [`Vector3`](Vector3.md) | `undefined` |
| `plane` | `null` \| [`Vehicle`](Vehicle.md) | `null` |

#### Returns

`void`

#### Defined in

[src/fivem/Tasks.ts:273](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Tasks.ts#L273)

***

### lookAt()

```ts
lookAt(targetOrPosition, duration): void
```

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `targetOrPosition` | [`BaseEntity`](BaseEntity.md) \| [`Vector3`](Vector3.md) | `undefined` |
| `duration` | `number` | `-1` |

#### Returns

`void`

#### Defined in

[src/fivem/Tasks.ts:307](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Tasks.ts#L307)

***

### parachuteTo()

```ts
parachuteTo(position): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `position` | [`Vector3`](Vector3.md) |

#### Returns

`void`

#### Defined in

[src/fivem/Tasks.ts:328](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Tasks.ts#L328)

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

#### Defined in

[src/fivem/Tasks.ts:332](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Tasks.ts#L332)

***

### performSequence()

```ts
performSequence(sequence): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `sequence` | [`TaskSequence`](TaskSequence.md) |

#### Returns

`void`

#### Defined in

[src/fivem/Tasks.ts:352](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Tasks.ts#L352)

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

#### Defined in

[src/fivem/Tasks.ts:363](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Tasks.ts#L363)

***

### putAwayMobilePhone()

```ts
putAwayMobilePhone(): void
```

#### Returns

`void`

#### Defined in

[src/fivem/Tasks.ts:499](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Tasks.ts#L499)

***

### putAwayParachute()

```ts
putAwayParachute(): void
```

#### Returns

`void`

#### Defined in

[src/fivem/Tasks.ts:495](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Tasks.ts#L495)

***

### reactAndFlee()

```ts
reactAndFlee(ped): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `ped` | [`Ped`](Ped.md) |

#### Returns

`void`

#### Defined in

[src/fivem/Tasks.ts:391](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Tasks.ts#L391)

***

### reloadWeapon()

```ts
reloadWeapon(): void
```

#### Returns

`void`

#### Defined in

[src/fivem/Tasks.ts:395](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Tasks.ts#L395)

***

### shootAt()

```ts
shootAt(
   targetOrPosition, 
   duration, 
   pattern): void
```

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `targetOrPosition` | [`Vector3`](Vector3.md) \| [`Ped`](Ped.md) | `undefined` |
| `duration` | `number` | `-1` |
| `pattern` | [`FiringPattern`](../enumerations/FiringPattern.md) | `FiringPattern.Default` |

#### Returns

`void`

#### Defined in

[src/fivem/Tasks.ts:399](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Tasks.ts#L399)

***

### shuffleToNextVehicleSeat()

```ts
shuffleToNextVehicleSeat(vehicle): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `vehicle` | [`Vehicle`](Vehicle.md) |

#### Returns

`void`

#### Defined in

[src/fivem/Tasks.ts:422](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Tasks.ts#L422)

***

### skyDive()

```ts
skyDive(): void
```

#### Returns

`void`

#### Defined in

[src/fivem/Tasks.ts:426](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Tasks.ts#L426)

***

### slideTo()

```ts
slideTo(
   position, 
   heading, 
   duration): void
```

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `position` | [`Vector3`](Vector3.md) | `undefined` |
| `heading` | `number` | `undefined` |
| `duration` | `number` | `0.7` |

#### Returns

`void`

#### Defined in

[src/fivem/Tasks.ts:430](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Tasks.ts#L430)

***

### standStill()

```ts
standStill(duration): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `duration` | `number` |

#### Returns

`void`

#### Defined in

[src/fivem/Tasks.ts:441](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Tasks.ts#L441)

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

#### Defined in

[src/fivem/Tasks.ts:445](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Tasks.ts#L445)

***

### swapWeapon()

```ts
swapWeapon(): void
```

#### Returns

`void`

#### Defined in

[src/fivem/Tasks.ts:466](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Tasks.ts#L466)

***

### turnTo()

```ts
turnTo(targetOrPosition, duration): void
```

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `targetOrPosition` | [`BaseEntity`](BaseEntity.md) \| [`Vector3`](Vector3.md) | `undefined` |
| `duration` | `number` | `-1` |

#### Returns

`void`

#### Defined in

[src/fivem/Tasks.ts:470](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Tasks.ts#L470)

***

### useMobilePhone()

```ts
useMobilePhone(duration): void
```

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `duration` | `number` | `1` |

#### Returns

`void`

#### Defined in

[src/fivem/Tasks.ts:491](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Tasks.ts#L491)

***

### useParachute()

```ts
useParachute(): void
```

#### Returns

`void`

#### Defined in

[src/fivem/Tasks.ts:487](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Tasks.ts#L487)

***

### vehicleChase()

```ts
vehicleChase(target): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `target` | [`Ped`](Ped.md) |

#### Returns

`void`

#### Defined in

[src/fivem/Tasks.ts:503](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Tasks.ts#L503)

***

### vehicleShootAtPed()

```ts
vehicleShootAtPed(target): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `target` | [`Ped`](Ped.md) |

#### Returns

`void`

#### Defined in

[src/fivem/Tasks.ts:507](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Tasks.ts#L507)

***

### wait()

```ts
wait(duration): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `duration` | `number` |

#### Returns

`void`

#### Defined in

[src/fivem/Tasks.ts:511](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Tasks.ts#L511)

***

### wanderAround()

```ts
wanderAround(position?, radius?): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `position`? | [`Vector3`](Vector3.md) |
| `radius`? | `number` |

#### Returns

`void`

#### Defined in

[src/fivem/Tasks.ts:515](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Tasks.ts#L515)

***

### warpIntoVehicle()

```ts
warpIntoVehicle(vehicle, seat): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `vehicle` | [`Vehicle`](Vehicle.md) |
| `seat` | [`VehicleSeat`](../enumerations/VehicleSeat.md) |

#### Returns

`void`

#### Defined in

[src/fivem/Tasks.ts:529](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Tasks.ts#L529)

***

### warpOutOfVehicle()

```ts
warpOutOfVehicle(vehicle, flags): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `vehicle` | [`Vehicle`](Vehicle.md) |
| `flags` | [`LeaveVehicleFlags`](../enumerations/LeaveVehicleFlags.md) |

#### Returns

`void`

#### Defined in

[src/fivem/Tasks.ts:533](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Tasks.ts#L533)

***

### everyoneLeaveVehicle()

```ts
static everyoneLeaveVehicle(vehicle): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `vehicle` | [`Vehicle`](Vehicle.md) |

#### Returns

`void`

#### Defined in

[src/fivem/Tasks.ts:131](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Tasks.ts#L131)
