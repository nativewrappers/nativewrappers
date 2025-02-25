[@nativewrappers/fivem](../../README.md) / [fivem](../README.md) / LoadingPrompt

# Class: `abstract` LoadingPrompt

Defined in: [src/fivem/ui/LoadingPrompt.ts:18](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/ui/LoadingPrompt.ts#L18)

Show and hide loading prompt on the bottom right of the screen.

Example:

```typescript
import { LoadingPrompt } from '@nativewrappers/client/ui';

LoadingPrompt.show("Hello World");

setTimeout(() => {
 LoadingPrompt.hide();
}, 10000)'
```

## Constructors

### new LoadingPrompt()

```ts
new LoadingPrompt(): LoadingPrompt
```

#### Returns

[`LoadingPrompt`](LoadingPrompt.md)

## Accessors

### IsActive

#### Get Signature

```ts
get static IsActive(): boolean
```

Defined in: [src/fivem/ui/LoadingPrompt.ts:49](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/ui/LoadingPrompt.ts#L49)

##### Returns

`boolean`

## Methods

### hide()

```ts
static hide(): void
```

Defined in: [src/fivem/ui/LoadingPrompt.ts:43](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/ui/LoadingPrompt.ts#L43)

#### Returns

`void`

***

### show()

```ts
static show(loadingText, spinnerType): void
```

Defined in: [src/fivem/ui/LoadingPrompt.ts:25](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/ui/LoadingPrompt.ts#L25)

Shows a loading prompt.

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `loadingText` | `string` | `""` | Text to be displayed inside loading prompt. |
| `spinnerType` | [`LoadingSpinnerType`](../enumerations/LoadingSpinnerType.md) | `LoadingSpinnerType.RegularClockwise` | Type of spinner. |

#### Returns

`void`
