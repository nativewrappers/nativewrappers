[@nativewrappers/fivem](../../README.md) / [fivem](../README.md) / Scaleform

# Class: Scaleform

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

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |

#### Returns

[`Scaleform`](Scaleform.md)

#### Defined in

[src/fivem/ui/Scaleform.ts:47](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/Scaleform.ts#L47)

## Properties

| Property | Modifier | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| `handle` | `protected` | `number` | `undefined` | [src/fivem/ui/Scaleform.ts:43](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/Scaleform.ts#L43) |
| `loaded` | `protected` | `boolean` | `false` | [src/fivem/ui/Scaleform.ts:45](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/Scaleform.ts#L45) |
| `name` | `protected` | `string` | `undefined` | [src/fivem/ui/Scaleform.ts:44](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/Scaleform.ts#L44) |

## Accessors

### Handle

```ts
get Handle(): number
```

Get the handle of the scaleform.

#### Returns

`number`

#### Defined in

[src/fivem/ui/Scaleform.ts:55](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/Scaleform.ts#L55)

***

### IsLoaded

```ts
get IsLoaded(): boolean
```

Get whether the scaleform is loaded.

#### Returns

`boolean`

#### Defined in

[src/fivem/ui/Scaleform.ts:69](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/Scaleform.ts#L69)

***

### IsValid

```ts
get IsValid(): boolean
```

Get whether the handle is a valid handle.

#### Returns

`boolean`

#### Defined in

[src/fivem/ui/Scaleform.ts:62](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/Scaleform.ts#L62)

## Methods

### callFunction()

```ts
callFunction(name, ...args): void
```

Call a function on the scaleform.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `string` | Name of the function |
| ...`args` | `unknown`[] | Additional arguments |

#### Returns

`void`

#### Defined in

[src/fivem/ui/Scaleform.ts:93](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/Scaleform.ts#L93)

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

#### Defined in

[src/fivem/ui/Scaleform.ts:165](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/Scaleform.ts#L165)

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

#### Defined in

[src/fivem/ui/Scaleform.ts:199](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/Scaleform.ts#L199)

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

#### Defined in

[src/fivem/ui/Scaleform.ts:136](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/Scaleform.ts#L136)

***

### callVoidMethod()

```ts
callVoidMethod(name): void
```

Calls a void method on the scaleform.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `string` | Name of the function |

#### Returns

`void`

#### Defined in

[src/fivem/ui/Scaleform.ts:122](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/Scaleform.ts#L122)

***

### dispose()

```ts
dispose(): void
```

Dispose the scaleform allowing the GTA engine to free memory when wanted.

#### Returns

`void`

#### Defined in

[src/fivem/ui/Scaleform.ts:80](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/Scaleform.ts#L80)

***

### load()

```ts
load(): Promise<boolean>
```

#### Returns

`Promise`\<`boolean`\>

#### Defined in

[src/fivem/ui/Scaleform.ts:349](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/Scaleform.ts#L349)

***

### render2D()

```ts
render2D(): Promise<void>
```

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/fivem/ui/Scaleform.ts:251](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/Scaleform.ts#L251)

***

### render2DScreenSpace()

```ts
render2DScreenSpace(location, size): Promise<void>
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `location` | [`PointF`](PointF.md) |
| `size` | [`PointF`](PointF.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/fivem/ui/Scaleform.ts:262](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/Scaleform.ts#L262)

***

### render3D()

```ts
render3D(
   position, 
   rotation, 
scale): Promise<void>
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `position` | [`Vector3`](Vector3.md) |
| `rotation` | [`Vector3`](Vector3.md) |
| `scale` | [`Vector3`](Vector3.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/fivem/ui/Scaleform.ts:289](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/Scaleform.ts#L289)

***

### render3DAdditive()

```ts
render3DAdditive(
   position, 
   rotation, 
scale): Promise<void>
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `position` | [`Vector3`](Vector3.md) |
| `rotation` | [`Vector3`](Vector3.md) |
| `scale` | [`Vector3`](Vector3.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/fivem/ui/Scaleform.ts:319](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/Scaleform.ts#L319)

***

### setDuration()

```ts
setDuration(duration): void
```

Sets a duration the scaleform should be shown.
Useful for showing a scaleform for a known amount of time, such as messages.

This only works for any scaleform using [`render2D`](Scaleform.md#render2d);

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `duration` | `number` | Duration in milliseconds |

#### Returns

`void`

#### Defined in

[src/fivem/ui/Scaleform.ts:236](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/Scaleform.ts#L236)

***

### render2DMasked()

```ts
static render2DMasked(scaleform1, scaleform2): Promise<void>
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `scaleform1` | [`Scaleform`](Scaleform.md) |
| `scaleform2` | [`Scaleform`](Scaleform.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/fivem/ui/Scaleform.ts:21](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/Scaleform.ts#L21)
