[@nativewrappers/fivem](../../../../README.md) / [fivem/ui/LoadingPrompt](../README.md) / LoadingPrompt

# Abstract Class: LoadingPrompt

Defined in: lib/fivem/ui/LoadingPrompt.d.ts:17

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

### Constructor

```ts
new LoadingPrompt(): LoadingPrompt;
```

#### Returns

`LoadingPrompt`

## Accessors

### IsActive

#### Get Signature

```ts
get static IsActive(): boolean;
```

Defined in: lib/fivem/ui/LoadingPrompt.d.ts:26

##### Returns

`boolean`

## Methods

### hide()

```ts
static hide(): void;
```

Defined in: lib/fivem/ui/LoadingPrompt.d.ts:25

#### Returns

`void`

***

### show()

```ts
static show(loadingText?, spinnerType?): void;
```

Defined in: lib/fivem/ui/LoadingPrompt.d.ts:24

Shows a loading prompt.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `loadingText?` | `string` | Text to be displayed inside loading prompt. |
| `spinnerType?` | [`LoadingSpinnerType`](../../../enums/LoadingSpinnerType/enumerations/LoadingSpinnerType.md) | Type of spinner. |

#### Returns

`void`
