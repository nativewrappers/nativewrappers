[@nativewrappers/fivem](../../README.md) / [fivem](../README.md) / Camera

# Class: Camera

Defined in: [src/fivem/Camera.ts:7](https://github.com/nativewrappers/nativewrappers/blob/bf1d263f0188667cde482dc5657983cf3674a640/src/fivem/Camera.ts#L7)

## Constructors

### new Camera()

```ts
new Camera(handle): Camera
```

Defined in: [src/fivem/Camera.ts:24](https://github.com/nativewrappers/nativewrappers/blob/bf1d263f0188667cde482dc5657983cf3674a640/src/fivem/Camera.ts#L24)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `handle` | `number` |

#### Returns

[`Camera`](Camera.md)

## Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="shakenames"></a> `shakeNames` | `readonly` | `string`[] | [src/fivem/Camera.ts:8](https://github.com/nativewrappers/nativewrappers/blob/bf1d263f0188667cde482dc5657983cf3674a640/src/fivem/Camera.ts#L8) |

## Accessors

### DepthOfFieldStrength

#### Set Signature

```ts
set DepthOfFieldStrength(strength): void
```

Defined in: [src/fivem/Camera.ts:142](https://github.com/nativewrappers/nativewrappers/blob/bf1d263f0188667cde482dc5657983cf3674a640/src/fivem/Camera.ts#L142)

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
get Direction(): Vector3
```

Defined in: [src/fivem/Camera.ts:61](https://github.com/nativewrappers/nativewrappers/blob/bf1d263f0188667cde482dc5657983cf3674a640/src/fivem/Camera.ts#L61)

Gets the direction the camera is facing. Same as ForwardVector

##### Returns

[`Vector3`](Vector3.md)

#### Set Signature

```ts
set Direction(direction): void
```

Defined in: [src/fivem/Camera.ts:65](https://github.com/nativewrappers/nativewrappers/blob/bf1d263f0188667cde482dc5657983cf3674a640/src/fivem/Camera.ts#L65)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `direction` | [`Vector3`](Vector3.md) |

##### Returns

`void`

***

### FarClip

#### Get Signature

```ts
get FarClip(): number
```

Defined in: [src/fivem/Camera.ts:122](https://github.com/nativewrappers/nativewrappers/blob/bf1d263f0188667cde482dc5657983cf3674a640/src/fivem/Camera.ts#L122)

##### Returns

`number`

#### Set Signature

```ts
set FarClip(farClip): void
```

Defined in: [src/fivem/Camera.ts:126](https://github.com/nativewrappers/nativewrappers/blob/bf1d263f0188667cde482dc5657983cf3674a640/src/fivem/Camera.ts#L126)

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
get FarDepthOfField(): number
```

Defined in: [src/fivem/Camera.ts:134](https://github.com/nativewrappers/nativewrappers/blob/bf1d263f0188667cde482dc5657983cf3674a640/src/fivem/Camera.ts#L134)

##### Returns

`number`

#### Set Signature

```ts
set FarDepthOfField(farDepthOfField): void
```

Defined in: [src/fivem/Camera.ts:138](https://github.com/nativewrappers/nativewrappers/blob/bf1d263f0188667cde482dc5657983cf3674a640/src/fivem/Camera.ts#L138)

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
get FieldOfView(): number
```

Defined in: [src/fivem/Camera.ts:106](https://github.com/nativewrappers/nativewrappers/blob/bf1d263f0188667cde482dc5657983cf3674a640/src/fivem/Camera.ts#L106)

##### Returns

`number`

#### Set Signature

```ts
set FieldOfView(fieldOfView): void
```

Defined in: [src/fivem/Camera.ts:110](https://github.com/nativewrappers/nativewrappers/blob/bf1d263f0188667cde482dc5657983cf3674a640/src/fivem/Camera.ts#L110)

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
get ForwardVector(): Vector3
```

Defined in: [src/fivem/Camera.ts:83](https://github.com/nativewrappers/nativewrappers/blob/bf1d263f0188667cde482dc5657983cf3674a640/src/fivem/Camera.ts#L83)

##### Returns

[`Vector3`](Vector3.md)

***

### Handle

#### Get Signature

```ts
get Handle(): number
```

Defined in: [src/fivem/Camera.ts:28](https://github.com/nativewrappers/nativewrappers/blob/bf1d263f0188667cde482dc5657983cf3674a640/src/fivem/Camera.ts#L28)

##### Returns

`number`

***

### IsActive

#### Get Signature

```ts
get IsActive(): boolean
```

Defined in: [src/fivem/Camera.ts:32](https://github.com/nativewrappers/nativewrappers/blob/bf1d263f0188667cde482dc5657983cf3674a640/src/fivem/Camera.ts#L32)

##### Returns

`boolean`

#### Set Signature

```ts
set IsActive(active): void
```

Defined in: [src/fivem/Camera.ts:36](https://github.com/nativewrappers/nativewrappers/blob/bf1d263f0188667cde482dc5657983cf3674a640/src/fivem/Camera.ts#L36)

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
get IsInterpolating(): boolean
```

Defined in: [src/fivem/Camera.ts:236](https://github.com/nativewrappers/nativewrappers/blob/bf1d263f0188667cde482dc5657983cf3674a640/src/fivem/Camera.ts#L236)

##### Returns

`boolean`

***

### IsShaking

#### Get Signature

```ts
get IsShaking(): boolean
```

Defined in: [src/fivem/Camera.ts:158](https://github.com/nativewrappers/nativewrappers/blob/bf1d263f0188667cde482dc5657983cf3674a640/src/fivem/Camera.ts#L158)

##### Returns

`boolean`

***

### MotionBlurStrength

#### Set Signature

```ts
set MotionBlurStrength(strength): void
```

Defined in: [src/fivem/Camera.ts:146](https://github.com/nativewrappers/nativewrappers/blob/bf1d263f0188667cde482dc5657983cf3674a640/src/fivem/Camera.ts#L146)

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
get NearClip(): number
```

Defined in: [src/fivem/Camera.ts:114](https://github.com/nativewrappers/nativewrappers/blob/bf1d263f0188667cde482dc5657983cf3674a640/src/fivem/Camera.ts#L114)

##### Returns

`number`

#### Set Signature

```ts
set NearClip(nearClip): void
```

Defined in: [src/fivem/Camera.ts:118](https://github.com/nativewrappers/nativewrappers/blob/bf1d263f0188667cde482dc5657983cf3674a640/src/fivem/Camera.ts#L118)

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
set NearDepthOfField(nearDepthOfField): void
```

Defined in: [src/fivem/Camera.ts:130](https://github.com/nativewrappers/nativewrappers/blob/bf1d263f0188667cde482dc5657983cf3674a640/src/fivem/Camera.ts#L130)

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
get Position(): Vector3
```

Defined in: [src/fivem/Camera.ts:40](https://github.com/nativewrappers/nativewrappers/blob/bf1d263f0188667cde482dc5657983cf3674a640/src/fivem/Camera.ts#L40)

##### Returns

[`Vector3`](Vector3.md)

#### Set Signature

```ts
set Position(position): void
```

Defined in: [src/fivem/Camera.ts:44](https://github.com/nativewrappers/nativewrappers/blob/bf1d263f0188667cde482dc5657983cf3674a640/src/fivem/Camera.ts#L44)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `position` | [`Vector3`](Vector3.md) |

##### Returns

`void`

***

### Rotation

#### Get Signature

```ts
get Rotation(): Vector3
```

Defined in: [src/fivem/Camera.ts:48](https://github.com/nativewrappers/nativewrappers/blob/bf1d263f0188667cde482dc5657983cf3674a640/src/fivem/Camera.ts#L48)

##### Returns

[`Vector3`](Vector3.md)

#### Set Signature

```ts
set Rotation(rotation): void
```

Defined in: [src/fivem/Camera.ts:52](https://github.com/nativewrappers/nativewrappers/blob/bf1d263f0188667cde482dc5657983cf3674a640/src/fivem/Camera.ts#L52)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `rotation` | [`Vector3`](Vector3.md) |

##### Returns

`void`

***

### ShakeAmplitude

#### Set Signature

```ts
set ShakeAmplitude(amplitude): void
```

Defined in: [src/fivem/Camera.ts:162](https://github.com/nativewrappers/nativewrappers/blob/bf1d263f0188667cde482dc5657983cf3674a640/src/fivem/Camera.ts#L162)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `amplitude` | `number` |

##### Returns

`void`

## Methods

### attachTo()

```ts
attachTo(object, offset): void
```

Defined in: [src/fivem/Camera.ts:240](https://github.com/nativewrappers/nativewrappers/blob/bf1d263f0188667cde482dc5657983cf3674a640/src/fivem/Camera.ts#L240)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `object` | [`BaseEntity`](BaseEntity.md) \| [`PedBone`](PedBone.md) |
| `offset` | [`Vector3`](Vector3.md) |

#### Returns

`void`

***

### delete()

```ts
delete(): void
```

Defined in: [src/fivem/Camera.ts:267](https://github.com/nativewrappers/nativewrappers/blob/bf1d263f0188667cde482dc5657983cf3674a640/src/fivem/Camera.ts#L267)

#### Returns

`void`

***

### detach()

```ts
detach(): void
```

Defined in: [src/fivem/Camera.ts:263](https://github.com/nativewrappers/nativewrappers/blob/bf1d263f0188667cde482dc5657983cf3674a640/src/fivem/Camera.ts#L263)

#### Returns

`void`

***

### exists()

```ts
exists(): boolean
```

Defined in: [src/fivem/Camera.ts:271](https://github.com/nativewrappers/nativewrappers/blob/bf1d263f0188667cde482dc5657983cf3674a640/src/fivem/Camera.ts#L271)

#### Returns

`boolean`

***

### interpTo()

```ts
interpTo(
   to, 
   duration, 
   easePosition, 
   easeRotation): void
```

Defined in: [src/fivem/Camera.ts:221](https://github.com/nativewrappers/nativewrappers/blob/bf1d263f0188667cde482dc5657983cf3674a640/src/fivem/Camera.ts#L221)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `to` | [`Camera`](Camera.md) |
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
rotation): Promise<void>
```

Defined in: [src/fivem/Camera.ts:166](https://github.com/nativewrappers/nativewrappers/blob/bf1d263f0188667cde482dc5657983cf3674a640/src/fivem/Camera.ts#L166)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `animName` | `string` |
| `animDict` | `string` |
| `position` | [`Vector3`](Vector3.md) |
| `rotation` | [`Vector3`](Vector3.md) |

#### Returns

`Promise`\<`void`\>

***

### pointAt()

```ts
pointAt(target, offset): void
```

Defined in: [src/fivem/Camera.ts:189](https://github.com/nativewrappers/nativewrappers/blob/bf1d263f0188667cde482dc5657983cf3674a640/src/fivem/Camera.ts#L189)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `target` | \| [`BaseEntity`](BaseEntity.md) \| [`Vector3`](Vector3.md) \| [`PedBone`](PedBone.md) |
| `offset` | [`Vector3`](Vector3.md) |

#### Returns

`void`

***

### shake()

```ts
shake(shakeType, amplitude): void
```

Defined in: [src/fivem/Camera.ts:150](https://github.com/nativewrappers/nativewrappers/blob/bf1d263f0188667cde482dc5657983cf3674a640/src/fivem/Camera.ts#L150)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `shakeType` | [`CameraShake`](../enumerations/CameraShake.md) |
| `amplitude` | `number` |

#### Returns

`void`

***

### stopPointing()

```ts
stopPointing(): void
```

Defined in: [src/fivem/Camera.ts:217](https://github.com/nativewrappers/nativewrappers/blob/bf1d263f0188667cde482dc5657983cf3674a640/src/fivem/Camera.ts#L217)

#### Returns

`void`

***

### stopShaking()

```ts
stopShaking(): void
```

Defined in: [src/fivem/Camera.ts:154](https://github.com/nativewrappers/nativewrappers/blob/bf1d263f0188667cde482dc5657983cf3674a640/src/fivem/Camera.ts#L154)

#### Returns

`void`
