[@nativewrappers/fivem](../../../README.md) / [fivem/GameplayCamera](../README.md) / GameplayCamera

# Abstract Class: GameplayCamera

Defined in: lib/fivem/GameplayCamera.d.ts:6

The current rendering gameplay camera

## Constructors

### Constructor

```ts
new GameplayCamera(): GameplayCamera;
```

#### Returns

`GameplayCamera`

## Accessors

### FieldOfView

#### Get Signature

```ts
get static FieldOfView(): number;
```

Defined in: lib/fivem/GameplayCamera.d.ts:56

Gets field of view of the gameplay camera.

##### Returns

`number`

***

### ForwardVector

#### Get Signature

```ts
get static ForwardVector(): Vector3;
```

Defined in: lib/fivem/GameplayCamera.d.ts:18

Get the forward vector of gameplay camera.

##### Returns

`Vector3`

***

### IsAimCamActive

#### Get Signature

```ts
get static IsAimCamActive(): boolean;
```

Defined in: lib/fivem/GameplayCamera.d.ts:68

Gets a value indicating whether the aiming camera is rendering.

##### Returns

`boolean`

true if the aiming camera is rendering; otherwise, false.

***

### IsFirstPersonAimCamActive

#### Get Signature

```ts
get static IsFirstPersonAimCamActive(): boolean;
```

Defined in: lib/fivem/GameplayCamera.d.ts:74

Gets a value indicating whether the first person aiming camera is rendering.

##### Returns

`boolean`

true if the first person aiming camera is rendering; otherwise, false.

***

### IsLookingBehind

#### Get Signature

```ts
get static IsLookingBehind(): boolean;
```

Defined in: lib/fivem/GameplayCamera.d.ts:80

Gets a value indicating whether the gameplay camera is looking behind.

##### Returns

`boolean`

true if the gameplay camera is looking behind; otherwise, false.

***

### IsRendering

#### Get Signature

```ts
get static IsRendering(): boolean;
```

Defined in: lib/fivem/GameplayCamera.d.ts:62

Gets a value indicating whether the gameplay camera is rendering.

##### Returns

`boolean`

true if the gameplay camera is rendering; otherwise, false.

***

### IsShaking

#### Get Signature

```ts
get static IsShaking(): boolean;
```

Defined in: lib/fivem/GameplayCamera.d.ts:97

Gets a value indicating whether the gameplay camera is shaking.

##### Returns

`boolean`

true if the gameplay camera is shaking; otherwise, false.

***

### Position

#### Get Signature

```ts
get static Position(): Vector3;
```

Defined in: lib/fivem/GameplayCamera.d.ts:10

Get the world position of gameplay camera.

##### Returns

`Vector3`

***

### RelativeHeading

#### Get Signature

```ts
get static RelativeHeading(): number;
```

Defined in: lib/fivem/GameplayCamera.d.ts:30

Get heading of gameplay camera.

##### Returns

`number`

#### Set Signature

```ts
set static RelativeHeading(heading): void;
```

Defined in: lib/fivem/GameplayCamera.d.ts:34

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
get static RelativePitch(): number;
```

Defined in: lib/fivem/GameplayCamera.d.ts:22

Get the pitch of the gameplay camera relative to player.

##### Returns

`number`

#### Set Signature

```ts
set static RelativePitch(pitch): void;
```

Defined in: lib/fivem/GameplayCamera.d.ts:26

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
get static Rotation(): Vector3;
```

Defined in: lib/fivem/GameplayCamera.d.ts:14

Get the rotation of gameplay camera.

##### Returns

`Vector3`

***

### ShakeAmplitude

#### Set Signature

```ts
set static ShakeAmplitude(value): void;
```

Defined in: lib/fivem/GameplayCamera.d.ts:101

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
get static Zoom(): number;
```

Defined in: lib/fivem/GameplayCamera.d.ts:52

Gets zoom of the gameplay camera.

##### Returns

`number`

## Methods

### clampPitch()

```ts
static clampPitch(min, max): void;
```

Defined in: lib/fivem/GameplayCamera.d.ts:48

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
static clampYaw(min, max): void;
```

Defined in: lib/fivem/GameplayCamera.d.ts:41

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
static shake(shakeType, amplitude): void;
```

Defined in: lib/fivem/GameplayCamera.d.ts:87

Shakes the gameplay camera.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `shakeType` | [`CameraShake`](../../enums/CameraShake/enumerations/CameraShake.md) | Type of the shake to apply. |
| `amplitude` | `number` | The amplitude of the shaking. |

#### Returns

`void`

***

### stopShaking()

```ts
static stopShaking(): void;
```

Defined in: lib/fivem/GameplayCamera.d.ts:91

Stops shaking the gameplay camera.

#### Returns

`void`
