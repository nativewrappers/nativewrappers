[@nativewrappers/fivem](../../../README.md) / [fivem/NetworkedScene](../README.md) / NetworkedScene

# Class: NetworkedScene

Defined in: lib/fivem/NetworkedScene.d.ts:6

## Constructors

### Constructor

```ts
new NetworkedScene(
   pos, 
   rot, 
   rotationOrder?, 
   holdLastFrame?, 
   looped?, 
   phaseToStopScene?, 
   phaseToStartScene?, 
   animSpeed?): NetworkedScene;
```

Defined in: lib/fivem/NetworkedScene.d.ts:9

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `pos` | `Vector3` |
| `rot` | `Vector3` |
| `rotationOrder?` | `number` |
| `holdLastFrame?` | `boolean` |
| `looped?` | `boolean` |
| `phaseToStopScene?` | `number` |
| `phaseToStartScene?` | `number` |
| `animSpeed?` | `number` |

#### Returns

`NetworkedScene`

## Accessors

### LocalSceneId

#### Get Signature

```ts
get LocalSceneId(): number;
```

Defined in: lib/fivem/NetworkedScene.d.ts:14

##### Returns

`number`

***

### NetworkSceneId

#### Get Signature

```ts
get NetworkSceneId(): number;
```

Defined in: lib/fivem/NetworkedScene.d.ts:15

##### Returns

`number`

***

### AllowRemoveSyncedScenes

#### Set Signature

```ts
set static AllowRemoveSyncedScenes(allow): void;
```

Defined in: lib/fivem/NetworkedScene.d.ts:8

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `allow` | `boolean` |

##### Returns

`void`

## Methods

### addEntity()

```ts
addEntity(
   entity, 
   animDict, 
   animName, 
   blendInSpeed?, 
   blendOutSpeed?, 
   syncedSceneFlags?): void;
```

Defined in: lib/fivem/NetworkedScene.d.ts:11

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `entity` | [`BaseEntity`](../../models/BaseEntity/classes/BaseEntity.md) |
| `animDict` | `string` |
| `animName` | `string` |
| `blendInSpeed?` | `number` |
| `blendOutSpeed?` | `number` |
| `syncedSceneFlags?` | [`SyncedSceneFlags`](../../enums/SyncedSceneFlags/enumerations/SyncedSceneFlags.md) |

#### Returns

`void`

***

### addPed()

```ts
addPed(
   ped, 
   animDict, 
   animName, 
   blendInSpeed?, 
   blendOutSpeed?, 
   syncedSceneFlags?, 
   ragdollBlockingFlags?, 
   moverBlendInData?, 
   ikFlags?): void;
```

Defined in: lib/fivem/NetworkedScene.d.ts:10

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `ped` | [`Ped`](../../models/Ped/classes/Ped.md) |
| `animDict` | `string` |
| `animName` | `string` |
| `blendInSpeed?` | `number` |
| `blendOutSpeed?` | `number` |
| `syncedSceneFlags?` | [`SyncedSceneFlags`](../../enums/SyncedSceneFlags/enumerations/SyncedSceneFlags.md) |
| `ragdollBlockingFlags?` | `number` |
| `moverBlendInData?` | `number` |
| `ikFlags?` | `number` |

#### Returns

`void`

***

### attachSceneToEntityBone()

```ts
attachSceneToEntityBone(entity, bone): void;
```

Defined in: lib/fivem/NetworkedScene.d.ts:13

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `entity` | [`BaseEntity`](../../models/BaseEntity/classes/BaseEntity.md) |
| `bone` | [`EntityBone`](../../models/EntityBone/classes/EntityBone.md) |

#### Returns

`void`

***

### forceLocalUseOfSyncedSceneCamera()

```ts
forceLocalUseOfSyncedSceneCamera(): void;
```

Defined in: lib/fivem/NetworkedScene.d.ts:12

#### Returns

`void`

***

### start()

```ts
start(): void;
```

Defined in: lib/fivem/NetworkedScene.d.ts:16

#### Returns

`void`

***

### stop()

```ts
stop(): void;
```

Defined in: lib/fivem/NetworkedScene.d.ts:17

#### Returns

`void`
