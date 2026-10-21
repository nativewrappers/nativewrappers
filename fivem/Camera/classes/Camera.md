[@nativewrappers/fivem](../../../README.md) / [fivem/Camera](../README.md) / Camera

# Class: Camera

Defined in: lib/fivem/Camera.d.ts:5

## Constructors

### Constructor

```ts
new Camera(handle): Camera;
```

Defined in: lib/fivem/Camera.d.ts:8

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `handle` | `number` |

#### Returns

`Camera`

## Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="shakenames"></a> `shakeNames` | `readonly` | `string`[] | lib/fivem/Camera.d.ts:6 |

## Accessors

### DepthOfFieldStrength

#### Set Signature

```ts
set DepthOfFieldStrength(strength): void;
```

Defined in: lib/fivem/Camera.d.ts:31

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `strength` | `number` |

##### Returns

`void`

***

### Direction

#### Get Signature

```ts
get Direction(): Vector3;
```

Defined in: lib/fivem/Camera.d.ts:19

Gets the direction the camera is facing. Same as ForwardVector

##### Returns

`Vector3`

#### Set Signature

```ts
set Direction(direction): void;
```

Defined in: lib/fivem/Camera.d.ts:20

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `direction` | `Vector3` |

##### Returns

`void`

***

### FarClip

#### Get Signature

```ts
get FarClip(): number;
```

Defined in: lib/fivem/Camera.d.ts:26

##### Returns

`number`

#### Set Signature

```ts
set FarClip(farClip): void;
```

Defined in: lib/fivem/Camera.d.ts:27

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `farClip` | `number` |

##### Returns

`void`

***

### FarDepthOfField

#### Get Signature

```ts
get FarDepthOfField(): number;
```

Defined in: lib/fivem/Camera.d.ts:29

##### Returns

`number`

#### Set Signature

```ts
set FarDepthOfField(farDepthOfField): void;
```

Defined in: lib/fivem/Camera.d.ts:30

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `farDepthOfField` | `number` |

##### Returns

`void`

***

### FieldOfView

#### Get Signature

```ts
get FieldOfView(): number;
```

Defined in: lib/fivem/Camera.d.ts:22

##### Returns

`number`

#### Set Signature

```ts
set FieldOfView(fieldOfView): void;
```

Defined in: lib/fivem/Camera.d.ts:23

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `fieldOfView` | `number` |

##### Returns

`void`

***

### ForwardVector

#### Get Signature

```ts
get ForwardVector(): Vector3;
```

Defined in: lib/fivem/Camera.d.ts:21

##### Returns

`Vector3`

***

### Handle

#### Get Signature

```ts
get Handle(): number;
```

Defined in: lib/fivem/Camera.d.ts:9

##### Returns

`number`

***

### IsActive

#### Get Signature

```ts
get IsActive(): boolean;
```

Defined in: lib/fivem/Camera.d.ts:10

##### Returns

`boolean`

#### Set Signature

```ts
set IsActive(active): void;
```

Defined in: lib/fivem/Camera.d.ts:11

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `active` | `boolean` |

##### Returns

`void`

***

### IsInterpolating

#### Get Signature

```ts
get IsInterpolating(): boolean;
```

Defined in: lib/fivem/Camera.d.ts:41

##### Returns

`boolean`

***

### IsShaking

#### Get Signature

```ts
get IsShaking(): boolean;
```

Defined in: lib/fivem/Camera.d.ts:35

##### Returns

`boolean`

***

### MotionBlurStrength

#### Set Signature

```ts
set MotionBlurStrength(strength): void;
```

Defined in: lib/fivem/Camera.d.ts:32

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `strength` | `number` |

##### Returns

`void`

***

### NearClip

#### Get Signature

```ts
get NearClip(): number;
```

Defined in: lib/fivem/Camera.d.ts:24

##### Returns

`number`

#### Set Signature

```ts
set NearClip(nearClip): void;
```

Defined in: lib/fivem/Camera.d.ts:25

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `nearClip` | `number` |

##### Returns

`void`

***

### NearDepthOfField

#### Set Signature

```ts
set NearDepthOfField(nearDepthOfField): void;
```

Defined in: lib/fivem/Camera.d.ts:28

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `nearDepthOfField` | `number` |

##### Returns

`void`

***

### Position

#### Get Signature

```ts
get Position(): Vector3;
```

Defined in: lib/fivem/Camera.d.ts:12

##### Returns

`Vector3`

#### Set Signature

```ts
set Position(position): void;
```

Defined in: lib/fivem/Camera.d.ts:13

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `position` | `Vector3` |

##### Returns

`void`

***

### Rotation

#### Get Signature

```ts
get Rotation(): Vector3;
```

Defined in: lib/fivem/Camera.d.ts:14

##### Returns

`Vector3`

#### Set Signature

```ts
set Rotation(rotation): void;
```

Defined in: lib/fivem/Camera.d.ts:15

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `rotation` | `Vector3` |

##### Returns

`void`

***

### ShakeAmplitude

#### Set Signature

```ts
set ShakeAmplitude(amplitude): void;
```

Defined in: lib/fivem/Camera.d.ts:36

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `amplitude` | `number` |

##### Returns

`void`

## Methods

### attachTo()

```ts
attachTo(object, offset): void;
```

Defined in: lib/fivem/Camera.d.ts:42

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `object` | \| [`BaseEntity`](../../models/BaseEntity/classes/BaseEntity.md) \| [`PedBone`](../../models/PedBone/classes/PedBone.md) |
| `offset` | `Vector3` |

#### Returns

`void`

***

### delete()

```ts
delete(): void;
```

Defined in: lib/fivem/Camera.d.ts:44

#### Returns

`void`

***

### detach()

```ts
detach(): void;
```

Defined in: lib/fivem/Camera.d.ts:43

#### Returns

`void`

***

### exists()

```ts
exists(): boolean;
```

Defined in: lib/fivem/Camera.d.ts:45

#### Returns

`boolean`

***

### interpTo()

```ts
interpTo(
   to, 
   duration, 
   easePosition, 
   easeRotation): void;
```

Defined in: lib/fivem/Camera.d.ts:40

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `to` | `Camera` |
| `duration` | `number` |
| `easePosition` | `boolean` |
| `easeRotation` | `boolean` |

#### Returns

`void`

***

### playAnim()

```ts
playAnim(
   animName, 
   animDict, 
   position, 
rotation): Promise<void>;
```

Defined in: lib/fivem/Camera.d.ts:37

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `animName` | `string` |
| `animDict` | `string` |
| `position` | `Vector3` |
| `rotation` | `Vector3` |

#### Returns

`Promise`\<`void`\>

***

### pointAt()

```ts
pointAt(target, offset?): void;
```

Defined in: lib/fivem/Camera.d.ts:38

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `target` | `any` |
| `offset?` | `any` |

#### Returns

`void`

***

### shake()

```ts
shake(shakeType, amplitude): void;
```

Defined in: lib/fivem/Camera.d.ts:33

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `shakeType` | [`CameraShake`](../../enums/CameraShake/enumerations/CameraShake.md) |
| `amplitude` | `number` |

#### Returns

`void`

***

### stopPointing()

```ts
stopPointing(): void;
```

Defined in: lib/fivem/Camera.d.ts:39

#### Returns

`void`

***

### stopShaking()

```ts
stopShaking(): void;
```

Defined in: lib/fivem/Camera.d.ts:34

#### Returns

`void`
