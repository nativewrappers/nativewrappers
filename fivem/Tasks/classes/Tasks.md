[@nativewrappers/fivem](../../../README.md) / [fivem/Tasks](../README.md) / Tasks

# Class: Tasks

Defined in: lib/fivem/Tasks.d.ts:11

## Constructors

### Constructor

```ts
new Tasks(ped): Tasks;
```

Defined in: lib/fivem/Tasks.d.ts:13

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `ped` | `null` \| [`Ped`](../../models/Ped/classes/Ped.md) |

#### Returns

`Tasks`

## Methods

### achieveHeading()

```ts
achieveHeading(heading, timeout?): void;
```

Defined in: lib/fivem/Tasks.d.ts:14

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `heading` | `number` |
| `timeout?` | `number` |

#### Returns

`void`

***

### aimAt()

```ts
aimAt(target, duration): void;
```

Defined in: lib/fivem/Tasks.d.ts:16

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `target` | `any` |
| `duration` | `number` |

#### Returns

`void`

***

### arrest()

```ts
arrest(ped): void;
```

Defined in: lib/fivem/Tasks.d.ts:17

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `ped` | [`Ped`](../../models/Ped/classes/Ped.md) |

#### Returns

`void`

***

### blockTemporaryEvents()

```ts
blockTemporaryEvents(block?): void;
```

Defined in: lib/fivem/Tasks.d.ts:15

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `block?` | `boolean` |

#### Returns

`void`

***

### chaseWithGroundVehicle()

```ts
chaseWithGroundVehicle(target): void;
```

Defined in: lib/fivem/Tasks.d.ts:23

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `target` | [`BaseEntity`](../../models/BaseEntity/classes/BaseEntity.md) |

#### Returns

`void`

***

### chaseWithHelicopter()

```ts
chaseWithHelicopter(target, offset): void;
```

Defined in: lib/fivem/Tasks.d.ts:24

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `target` | [`BaseEntity`](../../models/BaseEntity/classes/BaseEntity.md) |
| `offset` | `Vector3` |

#### Returns

`void`

***

### chaseWithPlane()

```ts
chaseWithPlane(target, offset): void;
```

Defined in: lib/fivem/Tasks.d.ts:25

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `target` | [`BaseEntity`](../../models/BaseEntity/classes/BaseEntity.md) |
| `offset` | `Vector3` |

#### Returns

`void`

***

### chatTo()

```ts
chatTo(ped): void;
```

Defined in: lib/fivem/Tasks.d.ts:18

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `ped` | [`Ped`](../../models/Ped/classes/Ped.md) |

#### Returns

`void`

***

### clearAll()

```ts
clearAll(): void;
```

Defined in: lib/fivem/Tasks.d.ts:66

#### Returns

`void`

***

### clearAllImmediately()

```ts
clearAllImmediately(): void;
```

Defined in: lib/fivem/Tasks.d.ts:67

#### Returns

`void`

***

### clearAnimation()

```ts
clearAnimation(animDict, animName): void;
```

Defined in: lib/fivem/Tasks.d.ts:70

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
clearLookAt(): void;
```

Defined in: lib/fivem/Tasks.d.ts:68

#### Returns

`void`

***

### clearSecondary()

```ts
clearSecondary(): void;
```

Defined in: lib/fivem/Tasks.d.ts:69

#### Returns

`void`

***

### climb()

```ts
climb(): void;
```

Defined in: lib/fivem/Tasks.d.ts:20

#### Returns

`void`

***

### climbLadder()

```ts
climbLadder(): void;
```

Defined in: lib/fivem/Tasks.d.ts:21

#### Returns

`void`

***

### cower()

```ts
cower(duration): void;
```

Defined in: lib/fivem/Tasks.d.ts:22

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
   drivingstyle?): void;
```

Defined in: lib/fivem/Tasks.d.ts:26

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `vehicle` | [`Vehicle`](../../models/Vehicle/classes/Vehicle.md) |
| `speed` | `number` |
| `drivingstyle?` | [`DrivingStyle`](../../enums/Driving/enumerations/DrivingStyle.md) |

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
   drivingstyle?): void;
```

Defined in: lib/fivem/Tasks.d.ts:27

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `vehicle` | [`Vehicle`](../../models/Vehicle/classes/Vehicle.md) |
| `target` | `Vector3` |
| `radius` | `number` |
| `speed` | `number` |
| `drivingstyle?` | [`DrivingStyle`](../../enums/Driving/enumerations/DrivingStyle.md) |

#### Returns

`void`

***

### enterAnyVehicle()

```ts
enterAnyVehicle(
   seat?, 
   timeout?, 
   speed?, 
   flag?): void;
```

Defined in: lib/fivem/Tasks.d.ts:28

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `seat?` | [`VehicleSeat`](../../enums/Vehicle/enumerations/VehicleSeat.md) |
| `timeout?` | `number` |
| `speed?` | `number` |
| `flag?` | `number` |

#### Returns

`void`

***

### fightAgainst()

```ts
fightAgainst(target, duration?): void;
```

Defined in: lib/fivem/Tasks.d.ts:30

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `target` | [`Ped`](../../models/Ped/classes/Ped.md) |
| `duration?` | `number` |

#### Returns

`void`

***

### fightAgainstHatedTargets()

```ts
fightAgainstHatedTargets(radius, duration?): void;
```

Defined in: lib/fivem/Tasks.d.ts:31

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `radius` | `number` |
| `duration?` | `number` |

#### Returns

`void`

***

### fleeFrom()

```ts
fleeFrom(pedOrPosition, duration?): void;
```

Defined in: lib/fivem/Tasks.d.ts:32

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `pedOrPosition` | `any` |
| `duration?` | `number` |

#### Returns

`void`

***

### followPointRoute()

```ts
followPointRoute(points): void;
```

Defined in: lib/fivem/Tasks.d.ts:33

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `points` | `Vector3`[] |

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
   movementSpeed?, 
   persistFollowing?): void;
```

Defined in: lib/fivem/Tasks.d.ts:34

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `target` | [`BaseEntity`](../../models/BaseEntity/classes/BaseEntity.md) |
| `offset` | `Vector3` |
| `timeout` | `number` |
| `stoppingRange` | `number` |
| `movementSpeed?` | `number` |
| `persistFollowing?` | `boolean` |

#### Returns

`void`

***

### goTo()

```ts
goTo(
   position, 
   ignorePaths?, 
   timeout?, 
   speed?, 
   targetHeading?, 
   distanceToSlide?, 
   flags?): void;
```

Defined in: lib/fivem/Tasks.d.ts:35

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `position` | `Vector3` |
| `ignorePaths?` | `boolean` |
| `timeout?` | `number` |
| `speed?` | `number` |
| `targetHeading?` | `number` |
| `distanceToSlide?` | `number` |
| `flags?` | `number` |

#### Returns

`void`

***

### goToEntity()

```ts
goToEntity(
   target, 
   offset?, 
   timeout?): void;
```

Defined in: lib/fivem/Tasks.d.ts:36

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `target` | [`BaseEntity`](../../models/BaseEntity/classes/BaseEntity.md) |
| `offset?` | `any` |
| `timeout?` | `number` |

#### Returns

`void`

***

### guardCurrentPosition()

```ts
guardCurrentPosition(): void;
```

Defined in: lib/fivem/Tasks.d.ts:37

#### Returns

`void`

***

### handsUp()

```ts
handsUp(duration): void;
```

Defined in: lib/fivem/Tasks.d.ts:38

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
   taskFlag?): boolean;
```

Defined in: lib/fivem/Tasks.d.ts:65

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `dict` | `string` |
| `anim` | `string` |
| `taskFlag?` | `number` |

#### Returns

`boolean`

***

### jump()

```ts
jump(): void;
```

Defined in: lib/fivem/Tasks.d.ts:19

#### Returns

`void`

***

### landPlane()

```ts
landPlane(
   startPosition, 
   touchdownPosition, 
   plane?): void;
```

Defined in: lib/fivem/Tasks.d.ts:39

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `startPosition` | `Vector3` |
| `touchdownPosition` | `Vector3` |
| `plane?` | `null` \| [`Vehicle`](../../models/Vehicle/classes/Vehicle.md) |

#### Returns

`void`

***

### lookAt()

```ts
lookAt(targetOrPosition, duration?): void;
```

Defined in: lib/fivem/Tasks.d.ts:40

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `targetOrPosition` | `any` |
| `duration?` | `number` |

#### Returns

`void`

***

### parachuteTo()

```ts
parachuteTo(position): void;
```

Defined in: lib/fivem/Tasks.d.ts:41

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `position` | `Vector3` |

#### Returns

`void`

***

### parkVehicle()

```ts
parkVehicle(
   vehicle, 
   position, 
   heading, 
   radius?, 
   keepEngineOn?): void;
```

Defined in: lib/fivem/Tasks.d.ts:42

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `vehicle` | [`Vehicle`](../../models/Vehicle/classes/Vehicle.md) |
| `position` | `Vector3` |
| `heading` | `number` |
| `radius?` | `number` |
| `keepEngineOn?` | `boolean` |

#### Returns

`void`

***

### performSequence()

```ts
performSequence(sequence): void;
```

Defined in: lib/fivem/Tasks.d.ts:43

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `sequence` | [`TaskSequence`](../../TaskSequence/classes/TaskSequence.md) |

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
flags): Promise<void>;
```

Defined in: lib/fivem/Tasks.d.ts:44

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `animDict` | `string` |
| `animName` | `string` |
| `blendInSpeed` | `number` |
| `blendOutSpeed` | `number` |
| `duration` | `number` |
| `playbackRate` | `number` |
| `flags` | [`AnimationFlags`](../../enums/AnimationFlags/enumerations/AnimationFlags.md) |

#### Returns

`Promise`\<`void`\>

***

### putAwayMobilePhone()

```ts
putAwayMobilePhone(): void;
```

Defined in: lib/fivem/Tasks.d.ts:58

#### Returns

`void`

***

### putAwayParachute()

```ts
putAwayParachute(): void;
```

Defined in: lib/fivem/Tasks.d.ts:57

#### Returns

`void`

***

### reactAndFlee()

```ts
reactAndFlee(ped): void;
```

Defined in: lib/fivem/Tasks.d.ts:45

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `ped` | [`Ped`](../../models/Ped/classes/Ped.md) |

#### Returns

`void`

***

### reloadWeapon()

```ts
reloadWeapon(): void;
```

Defined in: lib/fivem/Tasks.d.ts:46

#### Returns

`void`

***

### shootAt()

```ts
shootAt(
   targetOrPosition, 
   duration?, 
   pattern?): void;
```

Defined in: lib/fivem/Tasks.d.ts:47

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `targetOrPosition` | `any` |
| `duration?` | `number` |
| `pattern?` | [`FiringPattern`](../../enums/FiringPattern/enumerations/FiringPattern.md) |

#### Returns

`void`

***

### shuffleToNextVehicleSeat()

```ts
shuffleToNextVehicleSeat(vehicle): void;
```

Defined in: lib/fivem/Tasks.d.ts:48

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `vehicle` | [`Vehicle`](../../models/Vehicle/classes/Vehicle.md) |

#### Returns

`void`

***

### skyDive()

```ts
skyDive(): void;
```

Defined in: lib/fivem/Tasks.d.ts:49

#### Returns

`void`

***

### slideTo()

```ts
slideTo(
   position, 
   heading, 
   duration?): void;
```

Defined in: lib/fivem/Tasks.d.ts:50

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `position` | `Vector3` |
| `heading` | `number` |
| `duration?` | `number` |

#### Returns

`void`

***

### standStill()

```ts
standStill(duration): void;
```

Defined in: lib/fivem/Tasks.d.ts:51

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
   heading?, 
   duration?, 
   sittingScenario?, 
   teleport?): void;
```

Defined in: lib/fivem/Tasks.d.ts:52

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |
| `position` | `Vector3` |
| `heading?` | `number` |
| `duration?` | `number` |
| `sittingScenario?` | `boolean` |
| `teleport?` | `boolean` |

#### Returns

`void`

***

### swapWeapon()

```ts
swapWeapon(): void;
```

Defined in: lib/fivem/Tasks.d.ts:53

#### Returns

`void`

***

### turnTo()

```ts
turnTo(targetOrPosition, duration?): void;
```

Defined in: lib/fivem/Tasks.d.ts:54

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `targetOrPosition` | `any` |
| `duration?` | `number` |

#### Returns

`void`

***

### useMobilePhone()

```ts
useMobilePhone(duration?): void;
```

Defined in: lib/fivem/Tasks.d.ts:56

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `duration?` | `number` |

#### Returns

`void`

***

### useParachute()

```ts
useParachute(): void;
```

Defined in: lib/fivem/Tasks.d.ts:55

#### Returns

`void`

***

### vehicleChase()

```ts
vehicleChase(target): void;
```

Defined in: lib/fivem/Tasks.d.ts:59

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `target` | [`Ped`](../../models/Ped/classes/Ped.md) |

#### Returns

`void`

***

### vehicleShootAtPed()

```ts
vehicleShootAtPed(target): void;
```

Defined in: lib/fivem/Tasks.d.ts:60

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `target` | [`Ped`](../../models/Ped/classes/Ped.md) |

#### Returns

`void`

***

### wait()

```ts
wait(duration): void;
```

Defined in: lib/fivem/Tasks.d.ts:61

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `duration` | `number` |

#### Returns

`void`

***

### wanderAround()

```ts
wanderAround(position?, radius?): void;
```

Defined in: lib/fivem/Tasks.d.ts:62

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `position?` | `any` |
| `radius?` | `number` |

#### Returns

`void`

***

### warpIntoVehicle()

```ts
warpIntoVehicle(vehicle, seat): void;
```

Defined in: lib/fivem/Tasks.d.ts:63

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `vehicle` | [`Vehicle`](../../models/Vehicle/classes/Vehicle.md) |
| `seat` | [`VehicleSeat`](../../enums/Vehicle/enumerations/VehicleSeat.md) |

#### Returns

`void`

***

### warpOutOfVehicle()

```ts
warpOutOfVehicle(vehicle, flags): void;
```

Defined in: lib/fivem/Tasks.d.ts:64

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `vehicle` | [`Vehicle`](../../models/Vehicle/classes/Vehicle.md) |
| `flags` | [`LeaveVehicleFlags`](../../enums/LeaveVehicleFlags/enumerations/LeaveVehicleFlags.md) |

#### Returns

`void`

***

### everyoneLeaveVehicle()

```ts
static everyoneLeaveVehicle(vehicle): void;
```

Defined in: lib/fivem/Tasks.d.ts:29

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `vehicle` | [`Vehicle`](../../models/Vehicle/classes/Vehicle.md) |

#### Returns

`void`
