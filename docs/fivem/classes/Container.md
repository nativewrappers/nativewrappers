[@nativewrappers/fivem](../../README.md) / [fivem](../README.md) / Container

# Class: Container

Defined in: [src/fivem/ui/Container.ts:4](https://github.com/nativewrappers/nativewrappers/blob/99c881fe3bb9acc58d25c55399e7f11bef9ab7c6/src/fivem/ui/Container.ts#L4)

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

Defined in: [src/fivem/ui/Container.ts:10](https://github.com/nativewrappers/nativewrappers/blob/99c881fe3bb9acc58d25c55399e7f11bef9ab7c6/src/fivem/ui/Container.ts#L10)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `pos` | [`Point`](Point.md) |
| `size` | [`Size`](Size.md) |
| `color` | [`Color`](Color.md) |

#### Returns

[`Container`](Container.md)

## Properties

| Property | Modifier | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="color-1"></a> `color` | `public` | [`Color`](Color.md) | `undefined` | [src/fivem/ui/Container.ts:7](https://github.com/nativewrappers/nativewrappers/blob/99c881fe3bb9acc58d25c55399e7f11bef9ab7c6/src/fivem/ui/Container.ts#L7) |
| <a id="items"></a> `items` | `public` | [`IDrawable`](../interfaces/IDrawable.md)[] | `[]` | [src/fivem/ui/Container.ts:8](https://github.com/nativewrappers/nativewrappers/blob/99c881fe3bb9acc58d25c55399e7f11bef9ab7c6/src/fivem/ui/Container.ts#L8) |
| <a id="pos-1"></a> `pos` | `public` | [`Point`](Point.md) | `undefined` | [src/fivem/ui/Container.ts:5](https://github.com/nativewrappers/nativewrappers/blob/99c881fe3bb9acc58d25c55399e7f11bef9ab7c6/src/fivem/ui/Container.ts#L5) |
| <a id="size-1"></a> `size` | `public` | [`Size`](Size.md) | `undefined` | [src/fivem/ui/Container.ts:6](https://github.com/nativewrappers/nativewrappers/blob/99c881fe3bb9acc58d25c55399e7f11bef9ab7c6/src/fivem/ui/Container.ts#L6) |

## Methods

### addItem()

```ts
addItem(items): void
```

Defined in: [src/fivem/ui/Container.ts:16](https://github.com/nativewrappers/nativewrappers/blob/99c881fe3bb9acc58d25c55399e7f11bef9ab7c6/src/fivem/ui/Container.ts#L16)

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

Defined in: [src/fivem/ui/Container.ts:23](https://github.com/nativewrappers/nativewrappers/blob/99c881fe3bb9acc58d25c55399e7f11bef9ab7c6/src/fivem/ui/Container.ts#L23)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `offset`? | [`Size`](Size.md) |
| `resolution`? | [`Size`](Size.md) |

#### Returns

`void`

#### Implementation of

[`IDrawable`](../interfaces/IDrawable.md).[`draw`](../interfaces/IDrawable.md#draw)
