[@nativewrappers/fivem](../../README.md) / [fivem](../README.md) / ParticleEffect

# Class: `abstract` ParticleEffect

Defined in: [src/fivem/ParticleEffect.ts:9](https://github.com/nativewrappers/nativewrappers/blob/0bf5a50fdb39736240229f922b5089be4fd3a85c/src/fivem/ParticleEffect.ts#L9)

UNFINISHED! Class to manage particle effects.

## Constructors

### new ParticleEffect()

```ts
new ParticleEffect(asset, effectName): ParticleEffect
```

Defined in: [src/fivem/ParticleEffect.ts:26](https://github.com/nativewrappers/nativewrappers/blob/0bf5a50fdb39736240229f922b5089be4fd3a85c/src/fivem/ParticleEffect.ts#L26)

Creates a particle effect.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `asset` | [`ParticleEffectAsset`](ParticleEffectAsset.md) | Particle effect asset. |
| `effectName` | `string` | Name of effect. |

#### Returns

[`ParticleEffect`](ParticleEffect.md)

## Properties

| Property | Modifier | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="asset-1"></a> `asset` | `readonly` | [`ParticleEffectAsset`](ParticleEffectAsset.md) | `undefined` | [src/fivem/ParticleEffect.ts:10](https://github.com/nativewrappers/nativewrappers/blob/0bf5a50fdb39736240229f922b5089be4fd3a85c/src/fivem/ParticleEffect.ts#L10) |
| <a id="color"></a> `color` | `protected` | [`Color`](Color.md) | `Color.Transparent` | [src/fivem/ParticleEffect.ts:14](https://github.com/nativewrappers/nativewrappers/blob/0bf5a50fdb39736240229f922b5089be4fd3a85c/src/fivem/ParticleEffect.ts#L14) |
| <a id="effectname-1"></a> `effectName` | `readonly` | `string` | `undefined` | [src/fivem/ParticleEffect.ts:11](https://github.com/nativewrappers/nativewrappers/blob/0bf5a50fdb39736240229f922b5089be4fd3a85c/src/fivem/ParticleEffect.ts#L11) |
| <a id="invertaxis"></a> `invertAxis` | `protected` | [`InvertAxis`](../interfaces/InvertAxis.md) | `undefined` | [src/fivem/ParticleEffect.ts:17](https://github.com/nativewrappers/nativewrappers/blob/0bf5a50fdb39736240229f922b5089be4fd3a85c/src/fivem/ParticleEffect.ts#L17) |
| <a id="offset"></a> `offset` | `protected` | [`Vector3`](Vector3.md) | `undefined` | [src/fivem/ParticleEffect.ts:12](https://github.com/nativewrappers/nativewrappers/blob/0bf5a50fdb39736240229f922b5089be4fd3a85c/src/fivem/ParticleEffect.ts#L12) |
| <a id="range"></a> `range` | `protected` | `number` | `1.0` | [src/fivem/ParticleEffect.ts:16](https://github.com/nativewrappers/nativewrappers/blob/0bf5a50fdb39736240229f922b5089be4fd3a85c/src/fivem/ParticleEffect.ts#L16) |
| <a id="rotation"></a> `rotation` | `protected` | [`Vector3`](Vector3.md) | `undefined` | [src/fivem/ParticleEffect.ts:13](https://github.com/nativewrappers/nativewrappers/blob/0bf5a50fdb39736240229f922b5089be4fd3a85c/src/fivem/ParticleEffect.ts#L13) |
| <a id="scale"></a> `scale` | `protected` | `number` | `1.0` | [src/fivem/ParticleEffect.ts:15](https://github.com/nativewrappers/nativewrappers/blob/0bf5a50fdb39736240229f922b5089be4fd3a85c/src/fivem/ParticleEffect.ts#L15) |

## Accessors

### AssetName

#### Get Signature

```ts
get AssetName(): string
```

Defined in: [src/fivem/ParticleEffect.ts:132](https://github.com/nativewrappers/nativewrappers/blob/0bf5a50fdb39736240229f922b5089be4fd3a85c/src/fivem/ParticleEffect.ts#L132)

Get the name of the particle effect asset. Same as ParticleEffect.AssetName.

##### Returns

`string`

***

### EffectName

#### Get Signature

```ts
get EffectName(): string
```

Defined in: [src/fivem/ParticleEffect.ts:139](https://github.com/nativewrappers/nativewrappers/blob/0bf5a50fdb39736240229f922b5089be4fd3a85c/src/fivem/ParticleEffect.ts#L139)

Get the name of the particle effect.

##### Returns

`string`

***

### Handle

#### Get Signature

```ts
get Handle(): number
```

Defined in: [src/fivem/ParticleEffect.ts:35](https://github.com/nativewrappers/nativewrappers/blob/0bf5a50fdb39736240229f922b5089be4fd3a85c/src/fivem/ParticleEffect.ts#L35)

Get the particle effect handle.

##### Returns

`number`

***

### InvertAxis

#### Get Signature

```ts
get InvertAxis(): InvertAxis
```

Defined in: [src/fivem/ParticleEffect.ts:102](https://github.com/nativewrappers/nativewrappers/blob/0bf5a50fdb39736240229f922b5089be4fd3a85c/src/fivem/ParticleEffect.ts#L102)

Get the invert axis flag of the particle effect.

##### Returns

[`InvertAxis`](../interfaces/InvertAxis.md)

#### Set Signature

```ts
set InvertAxis(invertAxis): void
```

Defined in: [src/fivem/ParticleEffect.ts:109](https://github.com/nativewrappers/nativewrappers/blob/0bf5a50fdb39736240229f922b5089be4fd3a85c/src/fivem/ParticleEffect.ts#L109)

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

Defined in: [src/fivem/ParticleEffect.ts:42](https://github.com/nativewrappers/nativewrappers/blob/0bf5a50fdb39736240229f922b5089be4fd3a85c/src/fivem/ParticleEffect.ts#L42)

Get whether particle effect is currently active.

##### Returns

`boolean`

***

### Range

#### Get Signature

```ts
get Range(): number
```

Defined in: [src/fivem/ParticleEffect.ts:87](https://github.com/nativewrappers/nativewrappers/blob/0bf5a50fdb39736240229f922b5089be4fd3a85c/src/fivem/ParticleEffect.ts#L87)

Get the range of the particle effect.

##### Returns

`number`

#### Set Signature

```ts
set Range(range): void
```

Defined in: [src/fivem/ParticleEffect.ts:94](https://github.com/nativewrappers/nativewrappers/blob/0bf5a50fdb39736240229f922b5089be4fd3a85c/src/fivem/ParticleEffect.ts#L94)

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

Defined in: [src/fivem/ParticleEffect.ts:61](https://github.com/nativewrappers/nativewrappers/blob/0bf5a50fdb39736240229f922b5089be4fd3a85c/src/fivem/ParticleEffect.ts#L61)

Get the rotation of the particle effect.

##### Returns

[`Vector3`](Vector3.md)

#### Set Signature

```ts
set Rotation(rotation): void
```

Defined in: [src/fivem/ParticleEffect.ts:68](https://github.com/nativewrappers/nativewrappers/blob/0bf5a50fdb39736240229f922b5089be4fd3a85c/src/fivem/ParticleEffect.ts#L68)

Set the rotation of the particle effect.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `rotation` | [`Vector3`](Vector3.md) |

##### Returns

`void`

## Methods

### setParameter()

```ts
setParameter(parameterName, value): void
```

Defined in: [src/fivem/ParticleEffect.ts:123](https://github.com/nativewrappers/nativewrappers/blob/0bf5a50fdb39736240229f922b5089be4fd3a85c/src/fivem/ParticleEffect.ts#L123)

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

Defined in: [src/fivem/ParticleEffect.ts:46](https://github.com/nativewrappers/nativewrappers/blob/0bf5a50fdb39736240229f922b5089be4fd3a85c/src/fivem/ParticleEffect.ts#L46)

#### Returns

`boolean`

***

### stop()

```ts
stop(): void
```

Defined in: [src/fivem/ParticleEffect.ts:51](https://github.com/nativewrappers/nativewrappers/blob/0bf5a50fdb39736240229f922b5089be4fd3a85c/src/fivem/ParticleEffect.ts#L51)

Stop a particle effect.

#### Returns

`void`

***

### toString()

```ts
toString(): string
```

Defined in: [src/fivem/ParticleEffect.ts:146](https://github.com/nativewrappers/nativewrappers/blob/0bf5a50fdb39736240229f922b5089be4fd3a85c/src/fivem/ParticleEffect.ts#L146)

Return the particle effect as string. `AssetName`\`EffectName`.

#### Returns

`string`
