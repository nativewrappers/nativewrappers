[@nativewrappers/fivem](../../README.md) / [fivem](../README.md) / NetworkedScene

# Class: NetworkedScene

Defined in: [src/fivem/NetworkedScene.ts:3](https://github.com/nativewrappers/nativewrappers/blob/0bf5a50fdb39736240229f922b5089be4fd3a85c/src/fivem/NetworkedScene.ts#L3)

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

Defined in: [src/fivem/NetworkedScene.ts:5](https://github.com/nativewrappers/nativewrappers/blob/0bf5a50fdb39736240229f922b5089be4fd3a85c/src/fivem/NetworkedScene.ts#L5)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `pos` | [`Vector3`](Vector3.md) |
| `rot` | [`Vector3`](Vector3.md) |
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

Defined in: [src/fivem/NetworkedScene.ts:56](https://github.com/nativewrappers/nativewrappers/blob/0bf5a50fdb39736240229f922b5089be4fd3a85c/src/fivem/NetworkedScene.ts#L56)

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

Defined in: [src/fivem/NetworkedScene.ts:31](https://github.com/nativewrappers/nativewrappers/blob/0bf5a50fdb39736240229f922b5089be4fd3a85c/src/fivem/NetworkedScene.ts#L31)

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

Defined in: [src/fivem/NetworkedScene.ts:75](https://github.com/nativewrappers/nativewrappers/blob/0bf5a50fdb39736240229f922b5089be4fd3a85c/src/fivem/NetworkedScene.ts#L75)

#### Returns

`void`

***

### stop()

```ts
stop(): void
```

Defined in: [src/fivem/NetworkedScene.ts:79](https://github.com/nativewrappers/nativewrappers/blob/0bf5a50fdb39736240229f922b5089be4fd3a85c/src/fivem/NetworkedScene.ts#L79)

#### Returns

`void`
