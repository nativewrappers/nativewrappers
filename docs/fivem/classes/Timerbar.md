[@nativewrappers/fivem](../../README.md) / [fivem](../README.md) / Timerbar

# Class: Timerbar

Defined in: [src/fivem/ui/Timerbar.ts:79](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/ui/Timerbar.ts#L79)

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

Defined in: [src/fivem/ui/Timerbar.ts:91](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/ui/Timerbar.ts#L91)

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `title` | `string` | `undefined` |
| `useProgressBar` | `boolean` | `false` |

#### Returns

[`Timerbar`](Timerbar.md)

## Accessors

### PlayerStyle

#### Get Signature

```ts
get PlayerStyle(): boolean
```

Defined in: [src/fivem/ui/Timerbar.ts:215](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/ui/Timerbar.ts#L215)

##### Returns

`boolean`

#### Set Signature

```ts
set PlayerStyle(value): void
```

Defined in: [src/fivem/ui/Timerbar.ts:211](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/ui/Timerbar.ts#L211)

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
get Progress(): number
```

Defined in: [src/fivem/ui/Timerbar.ts:143](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/ui/Timerbar.ts#L143)

##### Returns

`number`

#### Set Signature

```ts
set Progress(value): void
```

Defined in: [src/fivem/ui/Timerbar.ts:147](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/ui/Timerbar.ts#L147)

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
get ProgressbarBgColor(): number | number[]
```

Defined in: [src/fivem/ui/Timerbar.ts:185](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/ui/Timerbar.ts#L185)

##### Returns

`number` \| `number`[]

#### Set Signature

```ts
set ProgressbarBgColor(value): void
```

Defined in: [src/fivem/ui/Timerbar.ts:189](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/ui/Timerbar.ts#L189)

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
get ProgressbarFgColor(): number | number[]
```

Defined in: [src/fivem/ui/Timerbar.ts:198](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/ui/Timerbar.ts#L198)

##### Returns

`number` \| `number`[]

#### Set Signature

```ts
set ProgressbarFgColor(value): void
```

Defined in: [src/fivem/ui/Timerbar.ts:202](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/ui/Timerbar.ts#L202)

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
get Sprite(): null | Sprite
```

Defined in: [src/fivem/ui/Timerbar.ts:219](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/ui/Timerbar.ts#L219)

##### Returns

`null` \| [`Sprite`](Sprite.md)

***

### Text

#### Get Signature

```ts
get Text(): string
```

Defined in: [src/fivem/ui/Timerbar.ts:131](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/ui/Timerbar.ts#L131)

##### Returns

`string`

#### Set Signature

```ts
set Text(value): void
```

Defined in: [src/fivem/ui/Timerbar.ts:135](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/ui/Timerbar.ts#L135)

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
get TextColor(): number | number[]
```

Defined in: [src/fivem/ui/Timerbar.ts:172](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/ui/Timerbar.ts#L172)

##### Returns

`number` \| `number`[]

#### Set Signature

```ts
set TextColor(value): void
```

Defined in: [src/fivem/ui/Timerbar.ts:176](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/ui/Timerbar.ts#L176)

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
get Title(): string
```

Defined in: [src/fivem/ui/Timerbar.ts:123](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/ui/Timerbar.ts#L123)

##### Returns

`string`

#### Set Signature

```ts
set Title(value): void
```

Defined in: [src/fivem/ui/Timerbar.ts:127](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/ui/Timerbar.ts#L127)

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
get UseProgressBar(): boolean
```

Defined in: [src/fivem/ui/Timerbar.ts:139](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/ui/Timerbar.ts#L139)

##### Returns

`boolean`

***

### Visible

#### Get Signature

```ts
get Visible(): boolean
```

Defined in: [src/fivem/ui/Timerbar.ts:151](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/ui/Timerbar.ts#L151)

##### Returns

`boolean`

#### Set Signature

```ts
set Visible(value): void
```

Defined in: [src/fivem/ui/Timerbar.ts:155](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/ui/Timerbar.ts#L155)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

##### Returns

`void`
