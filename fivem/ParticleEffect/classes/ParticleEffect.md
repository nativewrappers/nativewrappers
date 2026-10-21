[@nativewrappers/fivem](../../../README.md) / [fivem/ParticleEffect](../README.md) / ParticleEffect

# Abstract Class: ParticleEffect

Defined in: lib/fivem/ParticleEffect.d.ts:8

UNFINISHED! Class to manage particle effects.

## Constructors

### Constructor

```ts
new ParticleEffect(asset, effectName): ParticleEffect;
```

Defined in: lib/fivem/ParticleEffect.d.ts:24

Creates a particle effect.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `asset` | [`ParticleEffectAsset`](../../ParticleEffectAsset/classes/ParticleEffectAsset.md) | Particle effect asset. |
| `effectName` | `string` | Name of effect. |

#### Returns

`ParticleEffect`

## Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="asset"></a> `asset` | `readonly` | [`ParticleEffectAsset`](../../ParticleEffectAsset/classes/ParticleEffectAsset.md) | lib/fivem/ParticleEffect.d.ts:9 |
| <a id="color"></a> `color` | `protected` | `Color` | lib/fivem/ParticleEffect.d.ts:13 |
| <a id="effectname"></a> `effectName` | `readonly` | `string` | lib/fivem/ParticleEffect.d.ts:10 |
| <a id="invertaxis"></a> `invertAxis` | `protected` | [`InvertAxis`](../../enums/InvertAxis/interfaces/InvertAxis.md) | lib/fivem/ParticleEffect.d.ts:16 |
| <a id="offset"></a> `offset` | `protected` | `Vector3` | lib/fivem/ParticleEffect.d.ts:11 |
| <a id="range"></a> `range` | `protected` | `number` | lib/fivem/ParticleEffect.d.ts:15 |
| <a id="rotation"></a> `rotation` | `protected` | `Vector3` | lib/fivem/ParticleEffect.d.ts:12 |
| <a id="scale"></a> `scale` | `protected` | `number` | lib/fivem/ParticleEffect.d.ts:14 |

## Accessors

### AssetName

#### Get Signature

```ts
get AssetName(): string;
```

Defined in: lib/fivem/ParticleEffect.d.ts:72

Get the name of the particle effect asset. Same as ParticleEffect.AssetName.

##### Returns

`string`

***

### EffectName

#### Get Signature

```ts
get EffectName(): string;
```

Defined in: lib/fivem/ParticleEffect.d.ts:76

Get the name of the particle effect.

##### Returns

`string`

***

### Handle

#### Get Signature

```ts
get Handle(): number;
```

Defined in: lib/fivem/ParticleEffect.d.ts:28

Get the particle effect handle.

##### Returns

`number`

***

### InvertAxis

#### Get Signature

```ts
get InvertAxis(): InvertAxis;
```

Defined in: lib/fivem/ParticleEffect.d.ts:57

Get the invert axis flag of the particle effect.

##### Returns

[`InvertAxis`](../../enums/InvertAxis/interfaces/InvertAxis.md)

#### Set Signature

```ts
set InvertAxis(invertAxis): void;
```

Defined in: lib/fivem/ParticleEffect.d.ts:61

Set the inverted axis of the particle effect.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `invertAxis` | [`InvertAxis`](../../enums/InvertAxis/interfaces/InvertAxis.md) |

##### Returns

`void`

***

### IsActive

#### Get Signature

```ts
get IsActive(): boolean;
```

Defined in: lib/fivem/ParticleEffect.d.ts:32

Get whether particle effect is currently active.

##### Returns

`boolean`

***

### Range

#### Get Signature

```ts
get Range(): number;
```

Defined in: lib/fivem/ParticleEffect.d.ts:49

Get the range of the particle effect.

##### Returns

`number`

#### Set Signature

```ts
set Range(range): void;
```

Defined in: lib/fivem/ParticleEffect.d.ts:53

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
get Rotation(): Vector3;
```

Defined in: lib/fivem/ParticleEffect.d.ts:41

Get the rotation of the particle effect.

##### Returns

`Vector3`

#### Set Signature

```ts
set Rotation(rotation): void;
```

Defined in: lib/fivem/ParticleEffect.d.ts:45

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
setParameter(parameterName, value): void;
```

Defined in: lib/fivem/ParticleEffect.d.ts:68

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
abstract start(): boolean;
```

Defined in: lib/fivem/ParticleEffect.d.ts:33

#### Returns

`boolean`

***

### stop()

```ts
stop(): void;
```

Defined in: lib/fivem/ParticleEffect.d.ts:37

Stop a particle effect.

#### Returns

`void`

***

### toString()

```ts
toString(): string;
```

Defined in: lib/fivem/ParticleEffect.d.ts:80

Return the particle effect as string. `AssetName`\`EffectName`.

#### Returns

`string`
