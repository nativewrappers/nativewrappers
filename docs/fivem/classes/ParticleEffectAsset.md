[@nativewrappers/fivem](../../README.md) / [fivem](../README.md) / ParticleEffectAsset

# Class: ParticleEffectAsset

UNFINISHED! Class that represents a particle effect asset.

## Constructors

### new ParticleEffectAsset()

```ts
new ParticleEffectAsset(assetName): ParticleEffectAsset
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `assetName` | `string` |

#### Returns

[`ParticleEffectAsset`](ParticleEffectAsset.md)

#### Defined in

[src/fivem/ParticleEffectAsset.ts:18](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ParticleEffectAsset.ts#L18)

## Accessors

### Asset

```ts
get Asset(): string
```

Returns the name of the asset. Same as AssetName.

#### Returns

`string`

#### Defined in

[src/fivem/ParticleEffectAsset.ts:12](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ParticleEffectAsset.ts#L12)

***

### AssetName

```ts
get AssetName(): string
```

Get the name of the particle effect.

#### Returns

`string`

#### Defined in

[src/fivem/ParticleEffectAsset.ts:25](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ParticleEffectAsset.ts#L25)

***

### IsLoaded

```ts
get IsLoaded(): boolean
```

Get whether the particle effect has loaded into game memory.

#### Returns

`boolean`

#### Defined in

[src/fivem/ParticleEffectAsset.ts:32](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ParticleEffectAsset.ts#L32)

## Methods

### markAsNoLongerNeeded()

```ts
markAsNoLongerNeeded(): void
```

Allow game engine to safely unload particle effect model from memory.

#### Returns

`void`

#### Defined in

[src/fivem/ParticleEffectAsset.ts:139](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ParticleEffectAsset.ts#L139)

***

### request()

```ts
request(timeout): Promise<boolean>
```

Load a particle effect into the game memory.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `timeout` | `number` | Max time to load Particle Effect |

#### Returns

`Promise`\<`boolean`\>

#### Defined in

[src/fivem/ParticleEffectAsset.ts:119](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ParticleEffectAsset.ts#L119)

***

### startNonLoopedAtCoord()

```ts
startNonLoopedAtCoord(
   effectName, 
   pos, 
   rot, 
   scale, 
   invertAxis): boolean
```

Start a particle effect at a world position.

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `effectName` | `string` | `undefined` | Name of effect. |
| `pos` | [`Vector3`](Vector3.md) | `undefined` | - |
| `rot` | [`Vector3`](Vector3.md) | `...` | Rotation from entity position. |
| `scale` | `number` | `1.0` | Size of the effect. |
| `invertAxis` | [`InvertAxis`](../interfaces/InvertAxis.md) | `...` | Which axis to invert (default none). |

#### Returns

`boolean`

#### Defined in

[src/fivem/ParticleEffectAsset.ts:44](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ParticleEffectAsset.ts#L44)

***

### startNonLoopedOnEntity()

```ts
startNonLoopedOnEntity(
   effectName, 
   entity, 
   off, 
   rot, 
   scale, 
   invertAxis): boolean
```

Start a particle effect on an entity

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `effectName` | `string` | `undefined` | Name of effect. |
| `entity` | [`BaseEntity`](BaseEntity.md) | `undefined` | Entity to use effect on. |
| `off` | [`Vector3`](Vector3.md) | `...` | Offset from entity position. |
| `rot` | [`Vector3`](Vector3.md) | `...` | Rotation from entity position. |
| `scale` | `number` | `1.0` | Size of the effect. |
| `invertAxis` | [`InvertAxis`](../interfaces/InvertAxis.md) | `...` | Which axis to invert (default none). |

#### Returns

`boolean`

#### Defined in

[src/fivem/ParticleEffectAsset.ts:84](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ParticleEffectAsset.ts#L84)

***

### toString()

```ts
toString(): string
```

#### Returns

`string`

#### Defined in

[src/fivem/ParticleEffectAsset.ts:143](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ParticleEffectAsset.ts#L143)
