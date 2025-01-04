[@nativewrappers/fivem](../../README.md) / [fivem](../README.md) / GameplayCamera

# Class: `abstract` GameplayCamera

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

```ts
get static FieldOfView(): number
```

Gets field of view of the gameplay camera.

#### Returns

`number`

#### Defined in

[src/fivem/GameplayCamera.ts:95](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/GameplayCamera.ts#L95)

***

### ForwardVector

```ts
get static ForwardVector(): Vector3
```

Get the forward vector of gameplay camera.

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/fivem/GameplayCamera.ts:26](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/GameplayCamera.ts#L26)

***

### IsAimCamActive

```ts
get static IsAimCamActive(): boolean
```

Gets a value indicating whether the aiming camera is rendering.

#### Returns

`boolean`

true if the aiming camera is rendering; otherwise, false.

#### Defined in

[src/fivem/GameplayCamera.ts:113](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/GameplayCamera.ts#L113)

***

### IsFirstPersonAimCamActive

```ts
get static IsFirstPersonAimCamActive(): boolean
```

Gets a value indicating whether the first person aiming camera is rendering.

#### Returns

`boolean`

true if the first person aiming camera is rendering; otherwise, false.

#### Defined in

[src/fivem/GameplayCamera.ts:122](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/GameplayCamera.ts#L122)

***

### IsLookingBehind

```ts
get static IsLookingBehind(): boolean
```

Gets a value indicating whether the gameplay camera is looking behind.

#### Returns

`boolean`

true if the gameplay camera is looking behind; otherwise, false.

#### Defined in

[src/fivem/GameplayCamera.ts:131](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/GameplayCamera.ts#L131)

***

### IsRendering

```ts
get static IsRendering(): boolean
```

Gets a value indicating whether the gameplay camera is rendering.

#### Returns

`boolean`

true if the gameplay camera is rendering; otherwise, false.

#### Defined in

[src/fivem/GameplayCamera.ts:104](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/GameplayCamera.ts#L104)

***

### IsShaking

```ts
get static IsShaking(): boolean
```

Gets a value indicating whether the gameplay camera is shaking.

#### Returns

`boolean`

true if the gameplay camera is shaking; otherwise, false.

#### Defined in

[src/fivem/GameplayCamera.ts:157](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/GameplayCamera.ts#L157)

***

### Position

```ts
get static Position(): Vector3
```

Get the world position of gameplay camera.

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/fivem/GameplayCamera.ts:12](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/GameplayCamera.ts#L12)

***

### RelativeHeading

```ts
get static RelativeHeading(): number
```

Get heading of gameplay camera.

```ts
set static RelativeHeading(heading): void
```

Get heading of gameplay camera.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `heading` | `number` |

#### Returns

`number`

#### Defined in

[src/fivem/GameplayCamera.ts:54](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/GameplayCamera.ts#L54)

***

### RelativePitch

```ts
get static RelativePitch(): number
```

Get the pitch of the gameplay camera relative to player.

```ts
set static RelativePitch(pitch): void
```

Set gameplay camera pitch relative to player.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `pitch` | `number` |

#### Returns

`number`

#### Defined in

[src/fivem/GameplayCamera.ts:40](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/GameplayCamera.ts#L40)

***

### Rotation

```ts
get static Rotation(): Vector3
```

Get the rotation of gameplay camera.

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/fivem/GameplayCamera.ts:19](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/GameplayCamera.ts#L19)

***

### ShakeAmplitude

```ts
set static ShakeAmplitude(value): void
```

Sets the shake amplitude for the gameplay camera.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

#### Defined in

[src/fivem/GameplayCamera.ts:164](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/GameplayCamera.ts#L164)

***

### Zoom

```ts
get static Zoom(): number
```

Gets zoom of the gameplay camera.

#### Returns

`number`

#### Defined in

[src/fivem/GameplayCamera.ts:88](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/GameplayCamera.ts#L88)

## Methods

### clampPitch()

```ts
static clampPitch(min, max): void
```

Clamps the pitch of the gameplay camera.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `min` | `number` | The minimum pitch value. |
| `max` | `number` | The maximum pitch value. |

#### Returns

`void`

#### Defined in

[src/fivem/GameplayCamera.ts:81](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/GameplayCamera.ts#L81)

***

### clampYaw()

```ts
static clampYaw(min, max): void
```

Clamps the yaw of the gameplay camera.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `min` | `number` | The minimum yaw value. |
| `max` | `number` | The maximum yaw value. |

#### Returns

`void`

#### Defined in

[src/fivem/GameplayCamera.ts:71](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/GameplayCamera.ts#L71)

***

### shake()

```ts
static shake(shakeType, amplitude): void
```

Shakes the gameplay camera.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `shakeType` | [`CameraShake`](../enumerations/CameraShake.md) | Type of the shake to apply. |
| `amplitude` | `number` | The amplitude of the shaking. |

#### Returns

`void`

#### Defined in

[src/fivem/GameplayCamera.ts:141](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/GameplayCamera.ts#L141)

***

### stopShaking()

```ts
static stopShaking(): void
```

Stops shaking the gameplay camera.

#### Returns

`void`

#### Defined in

[src/fivem/GameplayCamera.ts:148](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/GameplayCamera.ts#L148)
