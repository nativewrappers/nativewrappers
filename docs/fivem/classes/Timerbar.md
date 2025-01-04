[@nativewrappers/fivem](../../README.md) / [fivem](../README.md) / Timerbar

# Class: Timerbar

Create a Timerbar. It's automatically added to the internal Timerbar array and drawn in a FIFO (first in, first out) way.

```typescript
// Create simple Timerbar
const myTimerbar = new Cfx.Timerbar("Hello");
myTimerbar.Text = "World";

// Disable Timerbar later on
myTimerbar.Visible = false;
```

## Constructors

### new Timerbar()

```ts
new Timerbar(title, useProgressBar): Timerbar
```

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `title` | `string` | `undefined` |
| `useProgressBar` | `boolean` | `false` |

#### Returns

[`Timerbar`](Timerbar.md)

#### Defined in

[src/fivem/ui/Timerbar.ts:91](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/Timerbar.ts#L91)

## Accessors

### PlayerStyle

```ts
get PlayerStyle(): boolean
```

```ts
set PlayerStyle(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

#### Returns

`boolean`

#### Defined in

[src/fivem/ui/Timerbar.ts:215](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/Timerbar.ts#L215)

***

### Progress

```ts
get Progress(): number
```

```ts
set Progress(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

#### Returns

`number`

#### Defined in

[src/fivem/ui/Timerbar.ts:143](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/Timerbar.ts#L143)

***

### ProgressbarBgColor

```ts
get ProgressbarBgColor(): number | number[]
```

```ts
set ProgressbarBgColor(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` \| `number`[] |

#### Returns

`number` \| `number`[]

#### Defined in

[src/fivem/ui/Timerbar.ts:185](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/Timerbar.ts#L185)

***

### ProgressbarFgColor

```ts
get ProgressbarFgColor(): number | number[]
```

```ts
set ProgressbarFgColor(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` \| `number`[] |

#### Returns

`number` \| `number`[]

#### Defined in

[src/fivem/ui/Timerbar.ts:198](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/Timerbar.ts#L198)

***

### Sprite

```ts
get Sprite(): null | Sprite
```

#### Returns

`null` \| [`Sprite`](Sprite.md)

#### Defined in

[src/fivem/ui/Timerbar.ts:219](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/Timerbar.ts#L219)

***

### Text

```ts
get Text(): string
```

```ts
set Text(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `string` |

#### Returns

`string`

#### Defined in

[src/fivem/ui/Timerbar.ts:131](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/Timerbar.ts#L131)

***

### TextColor

```ts
get TextColor(): number | number[]
```

```ts
set TextColor(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` \| `number`[] |

#### Returns

`number` \| `number`[]

#### Defined in

[src/fivem/ui/Timerbar.ts:172](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/Timerbar.ts#L172)

***

### Title

```ts
get Title(): string
```

```ts
set Title(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `string` |

#### Returns

`string`

#### Defined in

[src/fivem/ui/Timerbar.ts:123](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/Timerbar.ts#L123)

***

### UseProgressBar

```ts
get UseProgressBar(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/fivem/ui/Timerbar.ts:139](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/Timerbar.ts#L139)

***

### Visible

```ts
get Visible(): boolean
```

```ts
set Visible(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

#### Returns

`boolean`

#### Defined in

[src/fivem/ui/Timerbar.ts:151](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/Timerbar.ts#L151)
