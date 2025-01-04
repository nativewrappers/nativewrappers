[@nativewrappers/fivem](../../README.md) / [fivem](../README.md) / NetworkedScene

# Class: NetworkedScene

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

#### Defined in

[src/fivem/NetworkedScene.ts:5](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/NetworkedScene.ts#L5)

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

#### Defined in

[src/fivem/NetworkedScene.ts:56](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/NetworkedScene.ts#L56)

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

#### Defined in

[src/fivem/NetworkedScene.ts:31](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/NetworkedScene.ts#L31)

***

### start()

```ts
start(): void
```

#### Returns

`void`

#### Defined in

[src/fivem/NetworkedScene.ts:75](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/NetworkedScene.ts#L75)

***

### stop()

```ts
stop(): void
```

#### Returns

`void`

#### Defined in

[src/fivem/NetworkedScene.ts:79](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/NetworkedScene.ts#L79)
