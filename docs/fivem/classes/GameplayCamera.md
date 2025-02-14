[@nativewrappers/fivem](../../README.md) / [fivem](../README.md) / GameplayCamera

# Class: `abstract` GameplayCamera

Defined in: [src/fivem/GameplayCamera.ts:8](https://github.com/nativewrappers/nativewrappers/blob/0bf5a50fdb39736240229f922b5089be4fd3a85c/src/fivem/GameplayCamera.ts#L8)

The current rendering gameplay camera

## Constructors

### new GameplayCamera()

```ts
new GameplayCamera(): GameplayCamera
```

#### Returns

[`GameplayCamera`](GameplayCamera.md)

## Accessors

### FieldOfView

#### Get Signature

```ts
get static FieldOfView(): number
```

Defined in: [src/fivem/GameplayCamera.ts:95](https://github.com/nativewrappers/nativewrappers/blob/0bf5a50fdb39736240229f922b5089be4fd3a85c/src/fivem/GameplayCamera.ts#L95)

Gets field of view of the gameplay camera.

##### Returns

`number`

***

### ForwardVector

#### Get Signature

```ts
get static ForwardVector(): Vector3
```

Defined in: [src/fivem/GameplayCamera.ts:26](https://github.com/nativewrappers/nativewrappers/blob/0bf5a50fdb39736240229f922b5089be4fd3a85c/src/fivem/GameplayCamera.ts#L26)

Get the forward vector of gameplay camera.

##### Returns

[`Vector3`](Vector3.md)

***

### IsAimCamActive

#### Get Signature

```ts
get static IsAimCamActive(): boolean
```

Defined in: [src/fivem/GameplayCamera.ts:113](https://github.com/nativewrappers/nativewrappers/blob/0bf5a50fdb39736240229f922b5089be4fd3a85c/src/fivem/GameplayCamera.ts#L113)

Gets a value indicating whether the aiming camera is rendering.

##### Returns

`boolean`

true if the aiming camera is rendering; otherwise, false.

***

### IsFirstPersonAimCamActive

#### Get Signature

```ts
get static IsFirstPersonAimCamActive(): boolean
```

Defined in: [src/fivem/GameplayCamera.ts:122](https://github.com/nativewrappers/nativewrappers/blob/0bf5a50fdb39736240229f922b5089be4fd3a85c/src/fivem/GameplayCamera.ts#L122)

Gets a value indicating whether the first person aiming camera is rendering.

##### Returns

`boolean`

true if the first person aiming camera is rendering; otherwise, false.

***

### IsLookingBehind

#### Get Signature

```ts
get static IsLookingBehind(): boolean
```

Defined in: [src/fivem/GameplayCamera.ts:131](https://github.com/nativewrappers/nativewrappers/blob/0bf5a50fdb39736240229f922b5089be4fd3a85c/src/fivem/GameplayCamera.ts#L131)

Gets a value indicating whether the gameplay camera is looking behind.

##### Returns

`boolean`

true if the gameplay camera is looking behind; otherwise, false.

***

### IsRendering

#### Get Signature

```ts
get static IsRendering(): boolean
```

Defined in: [src/fivem/GameplayCamera.ts:104](https://github.com/nativewrappers/nativewrappers/blob/0bf5a50fdb39736240229f922b5089be4fd3a85c/src/fivem/GameplayCamera.ts#L104)

Gets a value indicating whether the gameplay camera is rendering.

##### Returns

`boolean`

true if the gameplay camera is rendering; otherwise, false.

***

### IsShaking

#### Get Signature

```ts
get static IsShaking(): boolean
```

Defined in: [src/fivem/GameplayCamera.ts:157](https://github.com/nativewrappers/nativewrappers/blob/0bf5a50fdb39736240229f922b5089be4fd3a85c/src/fivem/GameplayCamera.ts#L157)

Gets a value indicating whether the gameplay camera is shaking.

##### Returns

`boolean`

true if the gameplay camera is shaking; otherwise, false.

***

### Position

#### Get Signature

```ts
get static Position(): Vector3
```

Defined in: [src/fivem/GameplayCamera.ts:12](https://github.com/nativewrappers/nativewrappers/blob/0bf5a50fdb39736240229f922b5089be4fd3a85c/src/fivem/GameplayCamera.ts#L12)

Get the world position of gameplay camera.

##### Returns

[`Vector3`](Vector3.md)

***

### RelativeHeading

#### Get Signature

```ts
get static RelativeHeading(): number
```

Defined in: [src/fivem/GameplayCamera.ts:54](https://github.com/nativewrappers/nativewrappers/blob/0bf5a50fdb39736240229f922b5089be4fd3a85c/src/fivem/GameplayCamera.ts#L54)

Get heading of gameplay camera.

##### Returns

`number`

#### Set Signature

```ts
set static RelativeHeading(heading): void
```

Defined in: [src/fivem/GameplayCamera.ts:61](https://github.com/nativewrappers/nativewrappers/blob/0bf5a50fdb39736240229f922b5089be4fd3a85c/src/fivem/GameplayCamera.ts#L61)

Get heading of gameplay camera.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `heading` | `number` |

##### Returns

`void`

***

### RelativePitch

#### Get Signature

```ts
get static RelativePitch(): number
```

Defined in: [src/fivem/GameplayCamera.ts:40](https://github.com/nativewrappers/nativewrappers/blob/0bf5a50fdb39736240229f922b5089be4fd3a85c/src/fivem/GameplayCamera.ts#L40)

Get the pitch of the gameplay camera relative to player.

##### Returns

`number`

#### Set Signature

```ts
set static RelativePitch(pitch): void
```

Defined in: [src/fivem/GameplayCamera.ts:47](https://github.com/nativewrappers/nativewrappers/blob/0bf5a50fdb39736240229f922b5089be4fd3a85c/src/fivem/GameplayCamera.ts#L47)

Set gameplay camera pitch relative to player.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `pitch` | `number` |

##### Returns

`void`

***

### Rotation

#### Get Signature

```ts
get static Rotation(): Vector3
```

Defined in: [src/fivem/GameplayCamera.ts:19](https://github.com/nativewrappers/nativewrappers/blob/0bf5a50fdb39736240229f922b5089be4fd3a85c/src/fivem/GameplayCamera.ts#L19)

Get the rotation of gameplay camera.

##### Returns

[`Vector3`](Vector3.md)

***

### ShakeAmplitude

#### Set Signature

```ts
set static ShakeAmplitude(value): void
```

Defined in: [src/fivem/GameplayCamera.ts:164](https://github.com/nativewrappers/nativewrappers/blob/0bf5a50fdb39736240229f922b5089be4fd3a85c/src/fivem/GameplayCamera.ts#L164)

Sets the shake amplitude for the gameplay camera.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

##### Returns

`void`

***

### Zoom

#### Get Signature

```ts
get static Zoom(): number
```

Defined in: [src/fivem/GameplayCamera.ts:88](https://github.com/nativewrappers/nativewrappers/blob/0bf5a50fdb39736240229f922b5089be4fd3a85c/src/fivem/GameplayCamera.ts#L88)

Gets zoom of the gameplay camera.

##### Returns

`number`

## Methods

### clampPitch()

```ts
static clampPitch(min, max): void
```

Defined in: [src/fivem/GameplayCamera.ts:81](https://github.com/nativewrappers/nativewrappers/blob/0bf5a50fdb39736240229f922b5089be4fd3a85c/src/fivem/GameplayCamera.ts#L81)

Clamps the pitch of the gameplay camera.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `min` | `number` | The minimum pitch value. |
| `max` | `number` | The maximum pitch value. |

#### Returns

`void`

***

### clampYaw()

```ts
static clampYaw(min, max): void
```

Defined in: [src/fivem/GameplayCamera.ts:71](https://github.com/nativewrappers/nativewrappers/blob/0bf5a50fdb39736240229f922b5089be4fd3a85c/src/fivem/GameplayCamera.ts#L71)

Clamps the yaw of the gameplay camera.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `min` | `number` | The minimum yaw value. |
| `max` | `number` | The maximum yaw value. |

#### Returns

`void`

***

### shake()

```ts
static shake(shakeType, amplitude): void
```

Defined in: [src/fivem/GameplayCamera.ts:141](https://github.com/nativewrappers/nativewrappers/blob/0bf5a50fdb39736240229f922b5089be4fd3a85c/src/fivem/GameplayCamera.ts#L141)

Shakes the gameplay camera.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `shakeType` | [`CameraShake`](../enumerations/CameraShake.md) | Type of the shake to apply. |
| `amplitude` | `number` | The amplitude of the shaking. |

#### Returns

`void`

***

### stopShaking()

```ts
static stopShaking(): void
```

Defined in: [src/fivem/GameplayCamera.ts:148](https://github.com/nativewrappers/nativewrappers/blob/0bf5a50fdb39736240229f922b5089be4fd3a85c/src/fivem/GameplayCamera.ts#L148)

Stops shaking the gameplay camera.

#### Returns

`void`
