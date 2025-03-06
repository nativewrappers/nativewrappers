[@nativewrappers/fivem](../../README.md) / [fivem](../README.md) / Container

# Class: Container

Defined in: fivem/ui/Container.d.ts:3

## Implements

- [`IDrawable`](../interfaces/IDrawable.md)

## Constructors

### new Container()

```ts
new Container(
   pos, 
   size, 
   color): Container
```

Defined in: fivem/ui/Container.d.ts:8

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `pos` | [`Point`](Point.md) |
| `size` | [`Size`](Size.md) |
| `color` | `Color` |

#### Returns

[`Container`](Container.md)

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="color-1"></a> `color` | `Color` | fivem/ui/Container.d.ts:6 |
| <a id="items"></a> `items` | [`IDrawable`](../interfaces/IDrawable.md)[] | fivem/ui/Container.d.ts:7 |
| <a id="pos-1"></a> `pos` | [`Point`](Point.md) | fivem/ui/Container.d.ts:4 |
| <a id="size-1"></a> `size` | [`Size`](Size.md) | fivem/ui/Container.d.ts:5 |

## Methods

### addItem()

```ts
addItem(items): void
```

Defined in: fivem/ui/Container.d.ts:9

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `items` | \| [`IDrawable`](../interfaces/IDrawable.md) \| [`IDrawable`](../interfaces/IDrawable.md)[] |

#### Returns

`void`

***

### draw()

```ts
draw(offset?, resolution?): void
```

Defined in: fivem/ui/Container.d.ts:10

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `offset`? | [`Size`](Size.md) |
| `resolution`? | [`Size`](Size.md) |

#### Returns

`void`

#### Implementation of

[`IDrawable`](../interfaces/IDrawable.md).[`draw`](../interfaces/IDrawable.md#draw)
