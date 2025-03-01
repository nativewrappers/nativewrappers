[@nativewrappers/fivem](../../README.md) / [fivem](../README.md) / NetworkedScene

# Class: NetworkedScene

Defined in: fivem/NetworkedScene.d.ts:3

## Constructors

### new NetworkedScene()

```ts
new NetworkedScene(
   pos, 
   rot, 
   rotationOrder, 
   holdLastFrame, 
   looped, 
   sceneHash, 
   animTime, 
   animSpeed): NetworkedScene
```

Defined in: fivem/NetworkedScene.d.ts:5

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `pos` | `Vector3` |
| `rot` | `Vector3` |
| `rotationOrder` | `number` |
| `holdLastFrame` | `boolean` |
| `looped` | `boolean` |
| `sceneHash` | `number` |
| `animTime` | `number` |
| `animSpeed` | `number` |

#### Returns

[`NetworkedScene`](NetworkedScene.md)

## Methods

### addEntity()

```ts
addEntity(
   entity, 
   animDict, 
   animName, 
   speed, 
   speedMultiplier, 
   flag): void
```

Defined in: fivem/NetworkedScene.d.ts:7

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `entity` | [`BaseEntity`](BaseEntity.md) |
| `animDict` | `string` |
| `animName` | `string` |
| `speed` | `number` |
| `speedMultiplier` | `number` |
| `flag` | `number` |

#### Returns

`void`

***

### addPed()

```ts
addPed(
   ped, 
   animDict, 
   animName, 
   blendInSpeed, 
   blendOutSpeed, 
   duration, 
   flag, 
   playbackRate, 
   p9): void
```

Defined in: fivem/NetworkedScene.d.ts:6

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `ped` | [`Ped`](Ped.md) |
| `animDict` | `string` |
| `animName` | `string` |
| `blendInSpeed` | `number` |
| `blendOutSpeed` | `number` |
| `duration` | `number` |
| `flag` | `number` |
| `playbackRate` | `number` |
| `p9` | `number` |

#### Returns

`void`

***

### start()

```ts
start(): void
```

Defined in: fivem/NetworkedScene.d.ts:8

#### Returns

`void`

***

### stop()

```ts
stop(): void
```

Defined in: fivem/NetworkedScene.d.ts:9

#### Returns

`void`
