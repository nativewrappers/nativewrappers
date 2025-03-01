[@nativewrappers/fivem](../../README.md) / [fivem](../README.md) / Scaleform

# Class: Scaleform

Defined in: [src/fivem/ui/Scaleform.ts:20](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/fivem/ui/Scaleform.ts#L20)

Scaleforms will automatically load when calling any of the render functions.

Example:

```typescript
import { Scaleform } from '@nativewrappers/client/ui';

const scaleform = new Cfx.Scaleform("MIDSIZED_MESSAGE");

scaleform.callFunction("SHOW_MIDSIZED_MESSAGE", ["Title", "Message"]);

setTick(() => {
 await scaleform.render2D();
});
```

## Constructors

### new Scaleform()

```ts
new Scaleform(name): Scaleform
```

Defined in: [src/fivem/ui/Scaleform.ts:47](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/fivem/ui/Scaleform.ts#L47)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |

#### Returns

[`Scaleform`](Scaleform.md)

## Properties

| Property | Modifier | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="handle"></a> `handle` | `protected` | `number` | `undefined` | [src/fivem/ui/Scaleform.ts:43](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/fivem/ui/Scaleform.ts#L43) |
| <a id="loaded"></a> `loaded` | `protected` | `boolean` | `false` | [src/fivem/ui/Scaleform.ts:45](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/fivem/ui/Scaleform.ts#L45) |
| <a id="name-1"></a> `name` | `protected` | `string` | `undefined` | [src/fivem/ui/Scaleform.ts:44](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/fivem/ui/Scaleform.ts#L44) |

## Accessors

### Handle

#### Get Signature

```ts
get Handle(): number
```

Defined in: [src/fivem/ui/Scaleform.ts:55](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/fivem/ui/Scaleform.ts#L55)

Get the handle of the scaleform.

##### Returns

`number`

***

### IsLoaded

#### Get Signature

```ts
get IsLoaded(): boolean
```

Defined in: [src/fivem/ui/Scaleform.ts:69](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/fivem/ui/Scaleform.ts#L69)

Get whether the scaleform is loaded.

##### Returns

`boolean`

***

### IsValid

#### Get Signature

```ts
get IsValid(): boolean
```

Defined in: [src/fivem/ui/Scaleform.ts:62](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/fivem/ui/Scaleform.ts#L62)

Get whether the handle is a valid handle.

##### Returns

`boolean`

## Methods

### callFunction()

```ts
callFunction(name, ...args): void
```

Defined in: [src/fivem/ui/Scaleform.ts:93](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/fivem/ui/Scaleform.ts#L93)

Call a function on the scaleform.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `string` | Name of the function |
| ...`args` | `unknown`[] | Additional arguments |

#### Returns

`void`

***

### callNumberMethod()

```ts
callNumberMethod(
   name, 
   param1, 
   param2, 
   param3, 
   param4, 
   param5): void
```

Defined in: [src/fivem/ui/Scaleform.ts:165](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/fivem/ui/Scaleform.ts#L165)

Calls a number method on the scaleform.

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `name` | `string` | `undefined` | Name of the function |
| `param1` | `number` | `-1.0` |  |
| `param2` | `number` | `-1.0` |  |
| `param3` | `number` | `-1.0` |  |
| `param4` | `number` | `-1.0` |  |
| `param5` | `number` | `-1.0` |  |

#### Returns

`void`

***

### callSharedMethod()

```ts
callSharedMethod(
   name, 
   fParam1, 
   fParam2, 
   fParam3, 
   fParam4, 
   fParam5, 
   sParam1, 
   sParam2, 
   sParam3, 
   sParam4, 
   sParam5): void
```

Defined in: [src/fivem/ui/Scaleform.ts:199](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/fivem/ui/Scaleform.ts#L199)

Calls a number & string method on the scaleform.

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `name` | `string` | `undefined` | Name of the function |
| `fParam1` | `number` | `-1.0` |  |
| `fParam2` | `number` | `-1.0` |  |
| `fParam3` | `number` | `-1.0` |  |
| `fParam4` | `number` | `-1.0` |  |
| `fParam5` | `number` | `-1.0` |  |
| `sParam1` | `string` | `""` |  |
| `sParam2` | `string` | `""` |  |
| `sParam3` | `string` | `""` |  |
| `sParam4` | `string` | `""` |  |
| `sParam5` | `string` | `""` |  |

#### Returns

`void`

***

### callStringMethod()

```ts
callStringMethod(
   name, 
   param1, 
   param2, 
   param3, 
   param4, 
   param5): void
```

Defined in: [src/fivem/ui/Scaleform.ts:136](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/fivem/ui/Scaleform.ts#L136)

Calls a string method on the scaleform.

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `name` | `string` | `undefined` | Name of the function |
| `param1` | `string` | `""` |  |
| `param2` | `string` | `""` |  |
| `param3` | `string` | `""` |  |
| `param4` | `string` | `""` |  |
| `param5` | `string` | `""` |  |

#### Returns

`void`

***

### callVoidMethod()

```ts
callVoidMethod(name): void
```

Defined in: [src/fivem/ui/Scaleform.ts:122](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/fivem/ui/Scaleform.ts#L122)

Calls a void method on the scaleform.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `string` | Name of the function |

#### Returns

`void`

***

### dispose()

```ts
dispose(): void
```

Defined in: [src/fivem/ui/Scaleform.ts:80](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/fivem/ui/Scaleform.ts#L80)

Dispose the scaleform allowing the GTA engine to free memory when wanted.

#### Returns

`void`

***

### load()

```ts
load(): Promise<boolean>
```

Defined in: [src/fivem/ui/Scaleform.ts:349](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/fivem/ui/Scaleform.ts#L349)

#### Returns

`Promise`\<`boolean`\>

***

### render2D()

```ts
render2D(): Promise<void>
```

Defined in: [src/fivem/ui/Scaleform.ts:251](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/fivem/ui/Scaleform.ts#L251)

#### Returns

`Promise`\<`void`\>

***

### render2DScreenSpace()

```ts
render2DScreenSpace(location, size): Promise<void>
```

Defined in: [src/fivem/ui/Scaleform.ts:262](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/fivem/ui/Scaleform.ts#L262)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `location` | [`PointF`](PointF.md) |
| `size` | [`PointF`](PointF.md) |

#### Returns

`Promise`\<`void`\>

***

### render3D()

```ts
render3D(
   position, 
   rotation, 
scale): Promise<void>
```

Defined in: [src/fivem/ui/Scaleform.ts:289](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/fivem/ui/Scaleform.ts#L289)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `position` | [`Vector3`](Vector3.md) |
| `rotation` | [`Vector3`](Vector3.md) |
| `scale` | [`Vector3`](Vector3.md) |

#### Returns

`Promise`\<`void`\>

***

### render3DAdditive()

```ts
render3DAdditive(
   position, 
   rotation, 
scale): Promise<void>
```

Defined in: [src/fivem/ui/Scaleform.ts:319](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/fivem/ui/Scaleform.ts#L319)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `position` | [`Vector3`](Vector3.md) |
| `rotation` | [`Vector3`](Vector3.md) |
| `scale` | [`Vector3`](Vector3.md) |

#### Returns

`Promise`\<`void`\>

***

### setDuration()

```ts
setDuration(duration): void
```

Defined in: [src/fivem/ui/Scaleform.ts:236](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/fivem/ui/Scaleform.ts#L236)

Sets a duration the scaleform should be shown.
Useful for showing a scaleform for a known amount of time, such as messages.

This only works for any scaleform using [`render2D`](Scaleform.md#render2d);

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `duration` | `number` | Duration in milliseconds |

#### Returns

`void`

***

### render2DMasked()

```ts
static render2DMasked(scaleform1, scaleform2): Promise<void>
```

Defined in: [src/fivem/ui/Scaleform.ts:21](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/fivem/ui/Scaleform.ts#L21)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `scaleform1` | [`Scaleform`](Scaleform.md) |
| `scaleform2` | [`Scaleform`](Scaleform.md) |

#### Returns

`Promise`\<`void`\>
