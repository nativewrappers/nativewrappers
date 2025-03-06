[@nativewrappers/fivem](../../README.md) / [fivem](../README.md) / ParticleEffect

# Class: `abstract` ParticleEffect

Defined in: fivem/ParticleEffect.d.ts:7

UNFINISHED! Class to manage particle effects.

## Constructors

### new ParticleEffect()

```ts
new ParticleEffect(asset, effectName): ParticleEffect
```

Defined in: fivem/ParticleEffect.d.ts:23

Creates a particle effect.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `asset` | [`ParticleEffectAsset`](ParticleEffectAsset.md) | Particle effect asset. |
| `effectName` | `string` | Name of effect. |

#### Returns

[`ParticleEffect`](ParticleEffect.md)

## Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="asset-1"></a> `asset` | `readonly` | [`ParticleEffectAsset`](ParticleEffectAsset.md) | fivem/ParticleEffect.d.ts:8 |
| <a id="color"></a> `color` | `protected` | `Color` | fivem/ParticleEffect.d.ts:12 |
| <a id="effectname-1"></a> `effectName` | `readonly` | `string` | fivem/ParticleEffect.d.ts:9 |
| <a id="invertaxis"></a> `invertAxis` | `protected` | [`InvertAxis`](../interfaces/InvertAxis.md) | fivem/ParticleEffect.d.ts:15 |
| <a id="offset"></a> `offset` | `protected` | `Vector3` | fivem/ParticleEffect.d.ts:10 |
| <a id="range"></a> `range` | `protected` | `number` | fivem/ParticleEffect.d.ts:14 |
| <a id="rotation"></a> `rotation` | `protected` | `Vector3` | fivem/ParticleEffect.d.ts:11 |
| <a id="scale"></a> `scale` | `protected` | `number` | fivem/ParticleEffect.d.ts:13 |

## Accessors

### AssetName

#### Get Signature

```ts
get AssetName(): string
```

Defined in: fivem/ParticleEffect.d.ts:71

Get the name of the particle effect asset. Same as ParticleEffect.AssetName.

##### Returns

`string`

***

### EffectName

#### Get Signature

```ts
get EffectName(): string
```

Defined in: fivem/ParticleEffect.d.ts:75

Get the name of the particle effect.

##### Returns

`string`

***

### Handle

#### Get Signature

```ts
get Handle(): number
```

Defined in: fivem/ParticleEffect.d.ts:27

Get the particle effect handle.

##### Returns

`number`

***

### InvertAxis

#### Get Signature

```ts
get InvertAxis(): InvertAxis
```

Defined in: fivem/ParticleEffect.d.ts:56

Get the invert axis flag of the particle effect.

##### Returns

[`InvertAxis`](../interfaces/InvertAxis.md)

#### Set Signature

```ts
set InvertAxis(invertAxis): void
```

Defined in: fivem/ParticleEffect.d.ts:60

Set the inverted axis of the particle effect.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `invertAxis` | [`InvertAxis`](../interfaces/InvertAxis.md) |

##### Returns

`void`

***

### IsActive

#### Get Signature

```ts
get IsActive(): boolean
```

Defined in: fivem/ParticleEffect.d.ts:31

Get whether particle effect is currently active.

##### Returns

`boolean`

***

### Range

#### Get Signature

```ts
get Range(): number
```

Defined in: fivem/ParticleEffect.d.ts:48

Get the range of the particle effect.

##### Returns

`number`

#### Set Signature

```ts
set Range(range): void
```

Defined in: fivem/ParticleEffect.d.ts:52

Set the range of the particle effect.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `range` | `number` |

##### Returns

`void`

***

### Rotation

#### Get Signature

```ts
get Rotation(): Vector3
```

Defined in: fivem/ParticleEffect.d.ts:40

Get the rotation of the particle effect.

##### Returns

`Vector3`

#### Set Signature

```ts
set Rotation(rotation): void
```

Defined in: fivem/ParticleEffect.d.ts:44

Set the rotation of the particle effect.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `rotation` | `Vector3` |

##### Returns

`void`

## Methods

### setParameter()

```ts
setParameter(parameterName, value): void
```

Defined in: fivem/ParticleEffect.d.ts:67

Set a paramaeter of a particle effect.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `parameterName` | `string` | Name of parameter. |
| `value` | `number` | Value of parameter. |

#### Returns

`void`

***

### start()

```ts
abstract start(): boolean
```

Defined in: fivem/ParticleEffect.d.ts:32

#### Returns

`boolean`

***

### stop()

```ts
stop(): void
```

Defined in: fivem/ParticleEffect.d.ts:36

Stop a particle effect.

#### Returns

`void`

***

### toString()

```ts
toString(): string
```

Defined in: fivem/ParticleEffect.d.ts:79

Return the particle effect as string. `AssetName`\`EffectName`.

#### Returns

`string`
