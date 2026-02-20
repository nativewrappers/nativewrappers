[@nativewrappers/fivem](../../../../README.md) / [fivem/ui/Timerbar](../README.md) / Timerbar

# Class: Timerbar

Defined in: lib/fivem/ui/Timerbar.d.ts:14

Create a Timerbar. It's automatically added to the internal Timerbar array and drawn in a FIFO (first in, first out) way.

```typescript
// Create simple Timerbar
const myTimerbar = new Cfx.Timerbar("Hello");
myTimerbar.Text = "World";

// Disable Timerbar later on
myTimerbar.Visible = false;
```

## Constructors

### Constructor

```ts
new Timerbar(title, useProgressBar?): Timerbar;
```

Defined in: lib/fivem/ui/Timerbar.d.ts:25

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `title` | `string` |
| `useProgressBar?` | `boolean` |

#### Returns

`Timerbar`

## Accessors

### PlayerStyle

#### Get Signature

```ts
get PlayerStyle(): boolean;
```

Defined in: lib/fivem/ui/Timerbar.d.ts:42

##### Returns

`boolean`

#### Set Signature

```ts
set PlayerStyle(value): void;
```

Defined in: lib/fivem/ui/Timerbar.d.ts:41

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

##### Returns

`void`

***

### Progress

#### Get Signature

```ts
get Progress(): number;
```

Defined in: lib/fivem/ui/Timerbar.d.ts:31

##### Returns

`number`

#### Set Signature

```ts
set Progress(value): void;
```

Defined in: lib/fivem/ui/Timerbar.d.ts:32

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

##### Returns

`void`

***

### ProgressbarBgColor

#### Get Signature

```ts
get ProgressbarBgColor(): number | number[];
```

Defined in: lib/fivem/ui/Timerbar.d.ts:37

##### Returns

`number` \| `number`[]

#### Set Signature

```ts
set ProgressbarBgColor(value): void;
```

Defined in: lib/fivem/ui/Timerbar.d.ts:38

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` \| `number`[] |

##### Returns

`void`

***

### ProgressbarFgColor

#### Get Signature

```ts
get ProgressbarFgColor(): number | number[];
```

Defined in: lib/fivem/ui/Timerbar.d.ts:39

##### Returns

`number` \| `number`[]

#### Set Signature

```ts
set ProgressbarFgColor(value): void;
```

Defined in: lib/fivem/ui/Timerbar.d.ts:40

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` \| `number`[] |

##### Returns

`void`

***

### Sprite

#### Get Signature

```ts
get Sprite(): null | Sprite;
```

Defined in: lib/fivem/ui/Timerbar.d.ts:43

##### Returns

`null` \| [`Sprite`](../../Sprite/classes/Sprite.md)

***

### Text

#### Get Signature

```ts
get Text(): string;
```

Defined in: lib/fivem/ui/Timerbar.d.ts:28

##### Returns

`string`

#### Set Signature

```ts
set Text(value): void;
```

Defined in: lib/fivem/ui/Timerbar.d.ts:29

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `string` |

##### Returns

`void`

***

### TextColor

#### Get Signature

```ts
get TextColor(): number | number[];
```

Defined in: lib/fivem/ui/Timerbar.d.ts:35

##### Returns

`number` \| `number`[]

#### Set Signature

```ts
set TextColor(value): void;
```

Defined in: lib/fivem/ui/Timerbar.d.ts:36

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` \| `number`[] |

##### Returns

`void`

***

### Title

#### Get Signature

```ts
get Title(): string;
```

Defined in: lib/fivem/ui/Timerbar.d.ts:26

##### Returns

`string`

#### Set Signature

```ts
set Title(value): void;
```

Defined in: lib/fivem/ui/Timerbar.d.ts:27

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `string` |

##### Returns

`void`

***

### UseProgressBar

#### Get Signature

```ts
get UseProgressBar(): boolean;
```

Defined in: lib/fivem/ui/Timerbar.d.ts:30

##### Returns

`boolean`

***

### Visible

#### Get Signature

```ts
get Visible(): boolean;
```

Defined in: lib/fivem/ui/Timerbar.d.ts:33

##### Returns

`boolean`

#### Set Signature

```ts
set Visible(value): void;
```

Defined in: lib/fivem/ui/Timerbar.d.ts:34

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

##### Returns

`void`
