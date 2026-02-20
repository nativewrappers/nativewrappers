[@nativewrappers/fivem](../../../../README.md) / [fivem/ui/Scaleform](../README.md) / Scaleform

# Class: Scaleform

Defined in: lib/fivem/ui/Scaleform.d.ts:20

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

### Constructor

```ts
new Scaleform(name): Scaleform;
```

Defined in: lib/fivem/ui/Scaleform.d.ts:25

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |

#### Returns

`Scaleform`

## Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="handle"></a> `handle` | `protected` | `number` | lib/fivem/ui/Scaleform.d.ts:22 |
| <a id="loaded"></a> `loaded` | `protected` | `boolean` | lib/fivem/ui/Scaleform.d.ts:24 |
| <a id="name"></a> `name` | `protected` | `string` | lib/fivem/ui/Scaleform.d.ts:23 |

## Accessors

### Handle

#### Get Signature

```ts
get Handle(): number;
```

Defined in: lib/fivem/ui/Scaleform.d.ts:29

Get the handle of the scaleform.

##### Returns

`number`

***

### IsLoaded

#### Get Signature

```ts
get IsLoaded(): boolean;
```

Defined in: lib/fivem/ui/Scaleform.d.ts:37

Get whether the scaleform is loaded.

##### Returns

`boolean`

***

### IsValid

#### Get Signature

```ts
get IsValid(): boolean;
```

Defined in: lib/fivem/ui/Scaleform.d.ts:33

Get whether the handle is a valid handle.

##### Returns

`boolean`

## Methods

### callFunction()

```ts
callFunction(name, ...args): void;
```

Defined in: lib/fivem/ui/Scaleform.d.ts:48

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
   param1?, 
   param2?, 
   param3?, 
   param4?, 
   param5?): void;
```

Defined in: lib/fivem/ui/Scaleform.d.ts:76

Calls a number method on the scaleform.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `string` | Name of the function |
| `param1?` | `number` |  |
| `param2?` | `number` |  |
| `param3?` | `number` |  |
| `param4?` | `number` |  |
| `param5?` | `number` |  |

#### Returns

`void`

***

### callSharedMethod()

```ts
callSharedMethod(
   name, 
   fParam1?, 
   fParam2?, 
   fParam3?, 
   fParam4?, 
   fParam5?, 
   sParam1?, 
   sParam2?, 
   sParam3?, 
   sParam4?, 
   sParam5?): void;
```

Defined in: lib/fivem/ui/Scaleform.d.ts:92

Calls a number & string method on the scaleform.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `string` | Name of the function |
| `fParam1?` | `number` |  |
| `fParam2?` | `number` |  |
| `fParam3?` | `number` |  |
| `fParam4?` | `number` |  |
| `fParam5?` | `number` |  |
| `sParam1?` | `string` |  |
| `sParam2?` | `string` |  |
| `sParam3?` | `string` |  |
| `sParam4?` | `string` |  |
| `sParam5?` | `string` |  |

#### Returns

`void`

***

### callStringMethod()

```ts
callStringMethod(
   name, 
   param1?, 
   param2?, 
   param3?, 
   param4?, 
   param5?): void;
```

Defined in: lib/fivem/ui/Scaleform.d.ts:65

Calls a string method on the scaleform.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `string` | Name of the function |
| `param1?` | `string` |  |
| `param2?` | `string` |  |
| `param3?` | `string` |  |
| `param4?` | `string` |  |
| `param5?` | `string` |  |

#### Returns

`void`

***

### callVoidMethod()

```ts
callVoidMethod(name): void;
```

Defined in: lib/fivem/ui/Scaleform.d.ts:54

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
dispose(): void;
```

Defined in: lib/fivem/ui/Scaleform.d.ts:41

Dispose the scaleform allowing the GTA engine to free memory when wanted.

#### Returns

`void`

***

### load()

```ts
load(): Promise<boolean>;
```

Defined in: lib/fivem/ui/Scaleform.d.ts:106

#### Returns

`Promise`\<`boolean`\>

***

### render2D()

```ts
render2D(): Promise<void>;
```

Defined in: lib/fivem/ui/Scaleform.d.ts:102

#### Returns

`Promise`\<`void`\>

***

### render2DScreenSpace()

```ts
render2DScreenSpace(location, size): Promise<void>;
```

Defined in: lib/fivem/ui/Scaleform.d.ts:103

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `location` | `PointF` |
| `size` | `PointF` |

#### Returns

`Promise`\<`void`\>

***

### render3D()

```ts
render3D(
   position, 
   rotation, 
scale): Promise<void>;
```

Defined in: lib/fivem/ui/Scaleform.d.ts:104

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `position` | `Vector3` |
| `rotation` | `Vector3` |
| `scale` | `Vector3` |

#### Returns

`Promise`\<`void`\>

***

### render3DAdditive()

```ts
render3DAdditive(
   position, 
   rotation, 
scale): Promise<void>;
```

Defined in: lib/fivem/ui/Scaleform.d.ts:105

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `position` | `Vector3` |
| `rotation` | `Vector3` |
| `scale` | `Vector3` |

#### Returns

`Promise`\<`void`\>

***

### setDuration()

```ts
setDuration(duration): void;
```

Defined in: lib/fivem/ui/Scaleform.d.ts:101

Sets a duration the scaleform should be shown.
Useful for showing a scaleform for a known amount of time, such as messages.

This only works for any scaleform using [`render2D`](#render2d);

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `duration` | `number` | Duration in milliseconds |

#### Returns

`void`

***

### render2DMasked()

```ts
static render2DMasked(scaleform1, scaleform2): Promise<void>;
```

Defined in: lib/fivem/ui/Scaleform.d.ts:21

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `scaleform1` | `Scaleform` |
| `scaleform2` | `Scaleform` |

#### Returns

`Promise`\<`void`\>
