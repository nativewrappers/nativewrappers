[@nativewrappers/fivem](../../../README.md) / [fivem/ParticleEffectAsset](../README.md) / ParticleEffectAsset

# Class: ParticleEffectAsset

Defined in: lib/fivem/ParticleEffectAsset.d.ts:7

UNFINISHED! Class that represents a particle effect asset.

## Constructors

### Constructor

```ts
new ParticleEffectAsset(assetName): ParticleEffectAsset;
```

Defined in: lib/fivem/ParticleEffectAsset.d.ts:13

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `assetName` | `string` |

#### Returns

`ParticleEffectAsset`

## Accessors

### Asset

#### Get Signature

```ts
get Asset(): string;
```

Defined in: lib/fivem/ParticleEffectAsset.d.ts:11

Returns the name of the asset. Same as AssetName.

##### Returns

`string`

***

### AssetName

#### Get Signature

```ts
get AssetName(): string;
```

Defined in: lib/fivem/ParticleEffectAsset.d.ts:17

Get the name of the particle effect.

##### Returns

`string`

***

### IsLoaded

#### Get Signature

```ts
get IsLoaded(): boolean;
```

Defined in: lib/fivem/ParticleEffectAsset.d.ts:21

Get whether the particle effect has loaded into game memory.

##### Returns

`boolean`

## Methods

### markAsNoLongerNeeded()

```ts
markAsNoLongerNeeded(): void;
```

Defined in: lib/fivem/ParticleEffectAsset.d.ts:51

Allow game engine to safely unload particle effect model from memory.

#### Returns

`void`

***

### request()

```ts
request(timeout): Promise<boolean>;
```

Defined in: lib/fivem/ParticleEffectAsset.d.ts:47

Load a particle effect into the game memory.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `timeout` | `number` | Max time to load Particle Effect |

#### Returns

`Promise`\<`boolean`\>

***

### startNonLoopedAtCoord()

```ts
startNonLoopedAtCoord(
   effectName, 
   pos, 
   rot?, 
   scale?, 
   invertAxis?): boolean;
```

Defined in: lib/fivem/ParticleEffectAsset.d.ts:30

Start a particle effect at a world position.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `effectName` | `string` | Name of effect. |
| `pos` | `Vector3` | - |
| `rot?` | `any` | Rotation from entity position. |
| `scale?` | `number` | Size of the effect. |
| `invertAxis?` | [`InvertAxis`](../../enums/InvertAxis/interfaces/InvertAxis.md) | Which axis to invert (default none). |

#### Returns

`boolean`

***

### startNonLoopedOnEntity()

```ts
startNonLoopedOnEntity(
   effectName, 
   entity, 
   off?, 
   rot?, 
   scale?, 
   invertAxis?): boolean;
```

Defined in: lib/fivem/ParticleEffectAsset.d.ts:41

Start a particle effect on an entity

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `effectName` | `string` | Name of effect. |
| `entity` | [`BaseEntity`](../../models/BaseEntity/classes/BaseEntity.md) | Entity to use effect on. |
| `off?` | `any` | Offset from entity position. |
| `rot?` | `any` | Rotation from entity position. |
| `scale?` | `number` | Size of the effect. |
| `invertAxis?` | [`InvertAxis`](../../enums/InvertAxis/interfaces/InvertAxis.md) | Which axis to invert (default none). |

#### Returns

`boolean`

***

### toString()

```ts
toString(): string;
```

Defined in: lib/fivem/ParticleEffectAsset.d.ts:52

#### Returns

`string`
