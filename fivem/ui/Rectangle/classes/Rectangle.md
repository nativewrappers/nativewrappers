[@nativewrappers/fivem](../../../../README.md) / [fivem/ui/Rectangle](../README.md) / Rectangle

# Class: Rectangle

Defined in: lib/fivem/ui/Rectangle.d.ts:5

## Implements

- [`IDrawable`](../../interfaces/IDrawable/interfaces/IDrawable.md)

## Constructors

### Constructor

```ts
new Rectangle(
   pos, 
   size, 
   color): Rectangle;
```

Defined in: lib/fivem/ui/Rectangle.d.ts:9

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `pos` | [`Point`](../../../utils/Point/classes/Point.md) |
| `size` | [`Size`](../../../utils/Size/classes/Size.md) |
| `color` | `Color` |

#### Returns

`Rectangle`

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="color"></a> `color` | `Color` | lib/fivem/ui/Rectangle.d.ts:8 |
| <a id="pos"></a> `pos` | [`Point`](../../../utils/Point/classes/Point.md) | lib/fivem/ui/Rectangle.d.ts:6 |
| <a id="size"></a> `size` | [`Size`](../../../utils/Size/classes/Size.md) | lib/fivem/ui/Rectangle.d.ts:7 |

## Methods

### draw()

#### Call Signature

```ts
draw(offset?, resolution?): void;
```

Defined in: lib/fivem/ui/Rectangle.d.ts:10

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `offset?` | [`Size`](../../../utils/Size/classes/Size.md) |
| `resolution?` | [`Size`](../../../utils/Size/classes/Size.md) |

##### Returns

`void`

##### Implementation of

[`IDrawable`](../../interfaces/IDrawable/interfaces/IDrawable.md).[`draw`](../../interfaces/IDrawable/interfaces/IDrawable.md#draw)

#### Call Signature

```ts
draw(
   pos, 
   size, 
   color, 
   resolution?): void;
```

Defined in: lib/fivem/ui/Rectangle.d.ts:11

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `pos` | [`Point`](../../../utils/Point/classes/Point.md) |
| `size` | [`Size`](../../../utils/Size/classes/Size.md) |
| `color` | `Color` |
| `resolution?` | [`Size`](../../../utils/Size/classes/Size.md) |

##### Returns

`void`

##### Implementation of

```ts
IDrawable.draw
```
