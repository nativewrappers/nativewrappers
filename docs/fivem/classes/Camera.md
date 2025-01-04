[@nativewrappers/fivem](../../README.md) / [fivem](../README.md) / Camera

# Class: Camera

## Constructors

### new Camera()

```ts
new Camera(handle): Camera
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `handle` | `number` |

#### Returns

[`Camera`](Camera.md)

#### Defined in

[src/fivem/Camera.ts:24](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Camera.ts#L24)

## Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| `shakeNames` | `readonly` | `string`[] | [src/fivem/Camera.ts:8](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Camera.ts#L8) |

## Accessors

### DepthOfFieldStrength

```ts
set DepthOfFieldStrength(strength): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `strength` | `number` |

#### Defined in

[src/fivem/Camera.ts:142](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Camera.ts#L142)

***

### Direction

```ts
get Direction(): Vector3
```

Gets the direction the camera is facing. Same as ForwardVector

```ts
set Direction(direction): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `direction` | [`Vector3`](Vector3.md) |

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/fivem/Camera.ts:61](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Camera.ts#L61)

***

### FarClip

```ts
get FarClip(): number
```

```ts
set FarClip(farClip): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `farClip` | `number` |

#### Returns

`number`

#### Defined in

[src/fivem/Camera.ts:122](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Camera.ts#L122)

***

### FarDepthOfField

```ts
get FarDepthOfField(): number
```

```ts
set FarDepthOfField(farDepthOfField): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `farDepthOfField` | `number` |

#### Returns

`number`

#### Defined in

[src/fivem/Camera.ts:134](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Camera.ts#L134)

***

### FieldOfView

```ts
get FieldOfView(): number
```

```ts
set FieldOfView(fieldOfView): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `fieldOfView` | `number` |

#### Returns

`number`

#### Defined in

[src/fivem/Camera.ts:106](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Camera.ts#L106)

***

### ForwardVector

```ts
get ForwardVector(): Vector3
```

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/fivem/Camera.ts:83](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Camera.ts#L83)

***

### Handle

```ts
get Handle(): number
```

#### Returns

`number`

#### Defined in

[src/fivem/Camera.ts:28](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Camera.ts#L28)

***

### IsActive

```ts
get IsActive(): boolean
```

```ts
set IsActive(active): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `active` | `boolean` |

#### Returns

`boolean`

#### Defined in

[src/fivem/Camera.ts:32](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Camera.ts#L32)

***

### IsInterpolating

```ts
get IsInterpolating(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/fivem/Camera.ts:236](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Camera.ts#L236)

***

### IsShaking

```ts
get IsShaking(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/fivem/Camera.ts:158](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Camera.ts#L158)

***

### MotionBlurStrength

```ts
set MotionBlurStrength(strength): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `strength` | `number` |

#### Defined in

[src/fivem/Camera.ts:146](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Camera.ts#L146)

***

### NearClip

```ts
get NearClip(): number
```

```ts
set NearClip(nearClip): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `nearClip` | `number` |

#### Returns

`number`

#### Defined in

[src/fivem/Camera.ts:114](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Camera.ts#L114)

***

### NearDepthOfField

```ts
set NearDepthOfField(nearDepthOfField): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `nearDepthOfField` | `number` |

#### Defined in

[src/fivem/Camera.ts:130](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Camera.ts#L130)

***

### Position

```ts
get Position(): Vector3
```

```ts
set Position(position): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `position` | [`Vector3`](Vector3.md) |

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/fivem/Camera.ts:40](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Camera.ts#L40)

***

### Rotation

```ts
get Rotation(): Vector3
```

```ts
set Rotation(rotation): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `rotation` | [`Vector3`](Vector3.md) |

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/fivem/Camera.ts:48](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Camera.ts#L48)

***

### ShakeAmplitude

```ts
set ShakeAmplitude(amplitude): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `amplitude` | `number` |

#### Defined in

[src/fivem/Camera.ts:162](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Camera.ts#L162)

## Methods

### attachTo()

```ts
attachTo(object, offset): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `object` | [`BaseEntity`](BaseEntity.md) \| [`PedBone`](PedBone.md) |
| `offset` | [`Vector3`](Vector3.md) |

#### Returns

`void`

#### Defined in

[src/fivem/Camera.ts:240](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Camera.ts#L240)

***

### delete()

```ts
delete(): void
```

#### Returns

`void`

#### Defined in

[src/fivem/Camera.ts:267](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Camera.ts#L267)

***

### detach()

```ts
detach(): void
```

#### Returns

`void`

#### Defined in

[src/fivem/Camera.ts:263](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Camera.ts#L263)

***

### exists()

```ts
exists(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/fivem/Camera.ts:271](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Camera.ts#L271)

***

### interpTo()

```ts
interpTo(
   to, 
   duration, 
   easePosition, 
   easeRotation): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `to` | [`Camera`](Camera.md) |
| `duration` | `number` |
| `easePosition` | `boolean` |
| `easeRotation` | `boolean` |

#### Returns

`void`

#### Defined in

[src/fivem/Camera.ts:221](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Camera.ts#L221)

***

### playAnim()

```ts
playAnim(
   animName, 
   animDict, 
   position, 
rotation): Promise<void>
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `animName` | `string` |
| `animDict` | `string` |
| `position` | [`Vector3`](Vector3.md) |
| `rotation` | [`Vector3`](Vector3.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/fivem/Camera.ts:166](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Camera.ts#L166)

***

### pointAt()

```ts
pointAt(target, offset): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `target` | [`BaseEntity`](BaseEntity.md) \| [`Vector3`](Vector3.md) \| [`PedBone`](PedBone.md) |
| `offset` | [`Vector3`](Vector3.md) |

#### Returns

`void`

#### Defined in

[src/fivem/Camera.ts:189](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Camera.ts#L189)

***

### shake()

```ts
shake(shakeType, amplitude): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `shakeType` | [`CameraShake`](../enumerations/CameraShake.md) |
| `amplitude` | `number` |

#### Returns

`void`

#### Defined in

[src/fivem/Camera.ts:150](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Camera.ts#L150)

***

### stopPointing()

```ts
stopPointing(): void
```

#### Returns

`void`

#### Defined in

[src/fivem/Camera.ts:217](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Camera.ts#L217)

***

### stopShaking()

```ts
stopShaking(): void
```

#### Returns

`void`

#### Defined in

[src/fivem/Camera.ts:154](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Camera.ts#L154)
