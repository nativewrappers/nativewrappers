[@nativewrappers/fivem](../../README.md) / [fivem](../README.md) / Rectangle

# Class: Rectangle

Defined in: fivem/ui/Rectangle.d.ts:3

## Implements

- [`IDrawable`](../interfaces/IDrawable.md)

## Constructors

### new Rectangle()

```ts
new Rectangle(
   pos, 
   size, 
   color): Rectangle
```

Defined in: fivem/ui/Rectangle.d.ts:7

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `pos` | [`Point`](Point.md) |
| `size` | [`Size`](Size.md) |
| `color` | `Color` |

#### Returns

[`Rectangle`](Rectangle.md)

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="color-1"></a> `color` | `Color` | fivem/ui/Rectangle.d.ts:6 |
| <a id="pos-1"></a> `pos` | [`Point`](Point.md) | fivem/ui/Rectangle.d.ts:4 |
| <a id="size-1"></a> `size` | [`Size`](Size.md) | fivem/ui/Rectangle.d.ts:5 |

## Methods

### draw()

#### Call Signature

```ts
draw(offset?, resolution?): void
```

Defined in: fivem/ui/Rectangle.d.ts:8

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `offset`? | [`Size`](Size.md) |
| `resolution`? | [`Size`](Size.md) |

##### Returns

`void`

##### Implementation of

[`IDrawable`](../interfaces/IDrawable.md).[`draw`](../interfaces/IDrawable.md#draw)

#### Call Signature

```ts
draw(
   pos, 
   size, 
   color, 
   resolution?): void
```

Defined in: fivem/ui/Rectangle.d.ts:9

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `pos` | [`Point`](Point.md) |
| `size` | [`Size`](Size.md) |
| `color` | `Color` |
| `resolution`? | [`Size`](Size.md) |

##### Returns

`void`

##### Implementation of

```ts
IDrawable.draw
```
