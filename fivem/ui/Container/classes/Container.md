[@nativewrappers/fivem](../../../../README.md) / [fivem/ui/Container](../README.md) / Container

# Class: Container

Defined in: lib/fivem/ui/Container.d.ts:5

## Implements

- [`IDrawable`](../../interfaces/IDrawable/interfaces/IDrawable.md)

## Constructors

### Constructor

```ts
new Container(
   pos, 
   size, 
   color): Container;
```

Defined in: lib/fivem/ui/Container.d.ts:10

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `pos` | [`Point`](../../../utils/Point/classes/Point.md) |
| `size` | [`Size`](../../../utils/Size/classes/Size.md) |
| `color` | `Color` |

#### Returns

`Container`

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="color"></a> `color` | `Color` | lib/fivem/ui/Container.d.ts:8 |
| <a id="items"></a> `items` | [`IDrawable`](../../interfaces/IDrawable/interfaces/IDrawable.md)[] | lib/fivem/ui/Container.d.ts:9 |
| <a id="pos"></a> `pos` | [`Point`](../../../utils/Point/classes/Point.md) | lib/fivem/ui/Container.d.ts:6 |
| <a id="size"></a> `size` | [`Size`](../../../utils/Size/classes/Size.md) | lib/fivem/ui/Container.d.ts:7 |

## Methods

### addItem()

```ts
addItem(items): void;
```

Defined in: lib/fivem/ui/Container.d.ts:11

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `items` | \| [`IDrawable`](../../interfaces/IDrawable/interfaces/IDrawable.md) \| [`IDrawable`](../../interfaces/IDrawable/interfaces/IDrawable.md)[] |

#### Returns

`void`

***

### draw()

```ts
draw(offset?, resolution?): void;
```

Defined in: lib/fivem/ui/Container.d.ts:12

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `offset?` | [`Size`](../../../utils/Size/classes/Size.md) |
| `resolution?` | [`Size`](../../../utils/Size/classes/Size.md) |

#### Returns

`void`

#### Implementation of

[`IDrawable`](../../interfaces/IDrawable/interfaces/IDrawable.md).[`draw`](../../interfaces/IDrawable/interfaces/IDrawable.md#draw)
