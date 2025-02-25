[@nativewrappers/fivem](../../README.md) / [fivem](../README.md) / ParticleEffectAsset

# Class: ParticleEffectAsset

Defined in: [src/fivem/ParticleEffectAsset.ts:8](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/ParticleEffectAsset.ts#L8)

UNFINISHED! Class that represents a particle effect asset.

## Constructors

### new ParticleEffectAsset()

```ts
new ParticleEffectAsset(assetName): ParticleEffectAsset
```

Defined in: [src/fivem/ParticleEffectAsset.ts:18](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/ParticleEffectAsset.ts#L18)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `assetName` | `string` |

#### Returns

[`ParticleEffectAsset`](ParticleEffectAsset.md)

## Accessors

### Asset

#### Get Signature

```ts
get Asset(): string
```

Defined in: [src/fivem/ParticleEffectAsset.ts:12](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/ParticleEffectAsset.ts#L12)

Returns the name of the asset. Same as AssetName.

##### Returns

`string`

***

### AssetName

#### Get Signature

```ts
get AssetName(): string
```

Defined in: [src/fivem/ParticleEffectAsset.ts:25](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/ParticleEffectAsset.ts#L25)

Get the name of the particle effect.

##### Returns

`string`

***

### IsLoaded

#### Get Signature

```ts
get IsLoaded(): boolean
```

Defined in: [src/fivem/ParticleEffectAsset.ts:32](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/ParticleEffectAsset.ts#L32)

Get whether the particle effect has loaded into game memory.

##### Returns

`boolean`

## Methods

### markAsNoLongerNeeded()

```ts
markAsNoLongerNeeded(): void
```

Defined in: [src/fivem/ParticleEffectAsset.ts:139](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/ParticleEffectAsset.ts#L139)

Allow game engine to safely unload particle effect model from memory.

#### Returns

`void`

***

### request()

```ts
request(timeout): Promise<boolean>
```

Defined in: [src/fivem/ParticleEffectAsset.ts:119](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/ParticleEffectAsset.ts#L119)

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
   rot, 
   scale, 
   invertAxis): boolean
```

Defined in: [src/fivem/ParticleEffectAsset.ts:44](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/ParticleEffectAsset.ts#L44)

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

Defined in: [src/fivem/ParticleEffectAsset.ts:84](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/ParticleEffectAsset.ts#L84)

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

***

### toString()

```ts
toString(): string
```

Defined in: [src/fivem/ParticleEffectAsset.ts:143](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/ParticleEffectAsset.ts#L143)

#### Returns

`string`
