[@nativewrappers/fivem](../../README.md) / [fivem](../README.md) / InstructionalButtons

# Class: InstructionalButtons

Defined in: [src/fivem/ui/InstructionalButtons.ts:22](https://github.com/nativewrappers/nativewrappers/blob/99c881fe3bb9acc58d25c55399e7f11bef9ab7c6/src/fivem/ui/InstructionalButtons.ts#L22)

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

Defined in: [src/fivem/ui/InstructionalButtons.ts:30](https://github.com/nativewrappers/nativewrappers/blob/99c881fe3bb9acc58d25c55399e7f11bef9ab7c6/src/fivem/ui/InstructionalButtons.ts#L30)

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

Defined in: [src/fivem/ui/InstructionalButtons.ts:60](https://github.com/nativewrappers/nativewrappers/blob/99c881fe3bb9acc58d25c55399e7f11bef9ab7c6/src/fivem/ui/InstructionalButtons.ts#L60)

Renders the instructional button scaleform

#### Returns

`Promise`\<`void`\>
