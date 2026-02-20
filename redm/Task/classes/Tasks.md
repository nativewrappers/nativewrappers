[@nativewrappers/fivem](../../../README.md) / [redm/Task](../README.md) / Tasks

# Class: Tasks

Defined in: lib/redm/Task.d.ts:9

## Constructors

### Constructor

```ts
new Tasks(ped): Tasks;
```

Defined in: lib/redm/Task.d.ts:11

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `ped` | `null` \| [`Ped`](../../entities/Ped/classes/Ped.md) |

#### Returns

`Tasks`

## Methods

### achieveHeading()

```ts
achieveHeading(heading, timeout?): void;
```

Defined in: lib/redm/Task.d.ts:12

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

Defined in: lib/redm/Task.d.ts:14

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

Defined in: lib/redm/Task.d.ts:15

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `ped` | [`Ped`](../../entities/Ped/classes/Ped.md) |

#### Returns

`void`

***

### blockTemporaryEvents()

```ts
blockTemporaryEvents(block?): void;
```

Defined in: lib/redm/Task.d.ts:13

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `block?` | `boolean` |

#### Returns

`void`

***

### clearAll()

```ts
clearAll(): void;
```

Defined in: lib/redm/Task.d.ts:41

#### Returns

`void`

***

### clearAllImmediately()

```ts
clearAllImmediately(): void;
```

Defined in: lib/redm/Task.d.ts:42

#### Returns

`void`

***

### clearAnimation()

```ts
clearAnimation(animDict, animName): void;
```

Defined in: lib/redm/Task.d.ts:45

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

Defined in: lib/redm/Task.d.ts:43

#### Returns

`void`

***

### clearSecondary()

```ts
clearSecondary(): void;
```

Defined in: lib/redm/Task.d.ts:44

#### Returns

`void`

***

### climb()

```ts
climb(): void;
```

Defined in: lib/redm/Task.d.ts:17

#### Returns

`void`

***

### cruiseWithVehicle()

```ts
cruiseWithVehicle(
   vehicle, 
   speed, 
   drivingStyle?): void;
```

Defined in: lib/redm/Task.d.ts:18

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `vehicle` | [`Vehicle`](../../entities/Vehicle/classes/Vehicle.md) |
| `speed` | `number` |
| `drivingStyle?` | [`None`](../../enums/Driving/enumerations/DrivingStyle.md#none) |

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

Defined in: lib/redm/Task.d.ts:19

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `seat?` | [`VehicleSeat`](../../enums/VehicleSeat/enumerations/VehicleSeat.md) |
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

Defined in: lib/redm/Task.d.ts:21

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `target` | [`Ped`](../../entities/Ped/classes/Ped.md) |
| `duration?` | `number` |

#### Returns

`void`

***

### fightAgainstHatedTargets()

```ts
fightAgainstHatedTargets(radius, duration?): void;
```

Defined in: lib/redm/Task.d.ts:22

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
fleeFrom(
   pedOrPosition, 
   distance?, 
   duration?, 
   fleeType?, 
   fleeSpeed?, 
   fleeFrom?): void;
```

Defined in: lib/redm/Task.d.ts:23

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `pedOrPosition` | `any` |
| `distance?` | `number` |
| `duration?` | `number` |
| `fleeType?` | `number` |
| `fleeSpeed?` | `number` |
| `fleeFrom?` | [`Ped`](../../entities/Ped/classes/Ped.md) |

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

Defined in: lib/redm/Task.d.ts:24

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

Defined in: lib/redm/Task.d.ts:25

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `target` | [`BaseEntity`](../../entities/BaseEntity/classes/BaseEntity.md) |
| `offset?` | `any` |
| `timeout?` | `number` |

#### Returns

`void`

***

### guardCurrentPosition()

```ts
guardCurrentPosition(): void;
```

Defined in: lib/redm/Task.d.ts:26

#### Returns

`void`

***

### handsUp()

```ts
handsUp(duration): void;
```

Defined in: lib/redm/Task.d.ts:27

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

Defined in: lib/redm/Task.d.ts:40

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

Defined in: lib/redm/Task.d.ts:16

#### Returns

`void`

***

### lookAt()

```ts
lookAt(targetOrPosition, duration?): void;
```

Defined in: lib/redm/Task.d.ts:28

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `targetOrPosition` | `any` |
| `duration?` | `number` |

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
   animFlags, 
ikFlags): Promise<void>;
```

Defined in: lib/redm/Task.d.ts:29

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `animDict` | `string` |
| `animName` | `string` |
| `blendInSpeed` | `number` |
| `blendOutSpeed` | `number` |
| `duration` | `number` |
| `playbackRate` | `number` |
| `animFlags` | [`AnimationFlags`](../../enums/AnimationFlags/enumerations/AnimationFlags.md) |
| `ikFlags` | [`IkControlFlags`](../../enums/AnimationFlags/enumerations/IkControlFlags.md) |

#### Returns

`Promise`\<`void`\>

***

### reloadWeapon()

```ts
reloadWeapon(): void;
```

Defined in: lib/redm/Task.d.ts:30

#### Returns

`void`

***

### shootAt()

```ts
shootAt(
   targetOrPosition, 
   duration?, 
   pattern?, 
   affectCockedState?): void;
```

Defined in: lib/redm/Task.d.ts:31

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `targetOrPosition` | `any` |
| `duration?` | `number` |
| `pattern?` | [`FiringPatterns`](../../enums/FiringPatterns/enumerations/FiringPatterns.md) |
| `affectCockedState?` | `boolean` |

#### Returns

`void`

***

### shuffleToNextVehicleSeat()

```ts
shuffleToNextVehicleSeat(vehicle): void;
```

Defined in: lib/redm/Task.d.ts:32

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `vehicle` | [`Vehicle`](../../entities/Vehicle/classes/Vehicle.md) |

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

Defined in: lib/redm/Task.d.ts:33

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

Defined in: lib/redm/Task.d.ts:34

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `duration` | `number` |

#### Returns

`void`

***

### vehicleShootAtPed()

```ts
vehicleShootAtPed(target): void;
```

Defined in: lib/redm/Task.d.ts:35

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `target` | [`Ped`](../../entities/Ped/classes/Ped.md) |

#### Returns

`void`

***

### wait()

```ts
wait(duration): void;
```

Defined in: lib/redm/Task.d.ts:36

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

Defined in: lib/redm/Task.d.ts:37

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

Defined in: lib/redm/Task.d.ts:38

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `vehicle` | [`Vehicle`](../../entities/Vehicle/classes/Vehicle.md) |
| `seat` | [`VehicleSeat`](../../enums/VehicleSeat/enumerations/VehicleSeat.md) |

#### Returns

`void`

***

### warpOutOfVehicle()

```ts
warpOutOfVehicle(vehicle, flags): void;
```

Defined in: lib/redm/Task.d.ts:39

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `vehicle` | [`Vehicle`](../../entities/Vehicle/classes/Vehicle.md) |
| `flags` | [`EnterExitVehicleFlags`](../../enums/EnterExitFlags/enumerations/EnterExitVehicleFlags.md) |

#### Returns

`void`

***

### everyoneLeaveVehicle()

```ts
static everyoneLeaveVehicle(vehicle): void;
```

Defined in: lib/redm/Task.d.ts:20

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `vehicle` | [`Vehicle`](../../entities/Vehicle/classes/Vehicle.md) |

#### Returns

`void`
