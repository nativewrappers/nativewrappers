[@nativewrappers/fivem](../../README.md) / [fivem](../README.md) / InstructionalButtons

# Class: InstructionalButtons

Defined in: [src/fivem/ui/InstructionalButtons.ts:22](https://github.com/nativewrappers/nativewrappers/blob/4bf6e80cad9d1396d4cdc3ea16cf4f39993ed50e/src/fivem/ui/InstructionalButtons.ts#L22)

Draw native instructional buttons in the bottom left of the screen using scaleform

Example:

```typescript
import { InstructionalButtons, Control } from '@nativewrappers/client';

const buttons = new InstructionalButtons([
 {controls: [Control.Context], label: "Interact with Bob"},
 {controls: [Control.Detonate], label: "Say hello to Alice"}
])

setTick(() => {
  buttons.draw()
})
```

## Constructors

### new InstructionalButtons()

```ts
new InstructionalButtons(buttons): InstructionalButtons
```

Defined in: [src/fivem/ui/InstructionalButtons.ts:30](https://github.com/nativewrappers/nativewrappers/blob/4bf6e80cad9d1396d4cdc3ea16cf4f39993ed50e/src/fivem/ui/InstructionalButtons.ts#L30)

Draws native instructional buttons

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `buttons` | [`IButton`](../interfaces/IButton.md)[] | Array of instructional buttons to be drawn |

#### Returns

[`InstructionalButtons`](InstructionalButtons.md)

## Methods

### draw()

```ts
draw(): Promise<void>
```

Defined in: [src/fivem/ui/InstructionalButtons.ts:60](https://github.com/nativewrappers/nativewrappers/blob/4bf6e80cad9d1396d4cdc3ea16cf4f39993ed50e/src/fivem/ui/InstructionalButtons.ts#L60)

Renders the instructional button scaleform

#### Returns

`Promise`\<`void`\>
