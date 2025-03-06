[@nativewrappers/fivem](../../README.md) / [fivem](../README.md) / InstructionalButtons

# Class: InstructionalButtons

Defined in: fivem/ui/InstructionalButtons.d.ts:20

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

Defined in: fivem/ui/InstructionalButtons.d.ts:27

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

Defined in: fivem/ui/InstructionalButtons.d.ts:32

Renders the instructional button scaleform

#### Returns

`Promise`\<`void`\>
