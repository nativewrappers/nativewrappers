[@nativewrappers/fivem](../../README.md) / [fivem](../README.md) / Container

# Class: Container

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

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `pos` | [`Point`](Point.md) |
| `size` | [`Size`](Size.md) |
| `color` | [`Color`](Color.md) |

#### Returns

[`Container`](Container.md)

#### Defined in

[src/fivem/ui/Container.ts:10](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/Container.ts#L10)

## Properties

| Property | Modifier | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| `color` | `public` | [`Color`](Color.md) | `undefined` | [src/fivem/ui/Container.ts:7](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/Container.ts#L7) |
| `items` | `public` | [`IDrawable`](../interfaces/IDrawable.md)[] | `[]` | [src/fivem/ui/Container.ts:8](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/Container.ts#L8) |
| `pos` | `public` | [`Point`](Point.md) | `undefined` | [src/fivem/ui/Container.ts:5](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/Container.ts#L5) |
| `size` | `public` | [`Size`](Size.md) | `undefined` | [src/fivem/ui/Container.ts:6](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/Container.ts#L6) |

## Methods

### addItem()

```ts
addItem(items): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `items` | [`IDrawable`](../interfaces/IDrawable.md) \| [`IDrawable`](../interfaces/IDrawable.md)[] |

#### Returns

`void`

#### Defined in

[src/fivem/ui/Container.ts:16](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/Container.ts#L16)

***

### draw()

```ts
draw(offset?, resolution?): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `offset`? | [`Size`](Size.md) |
| `resolution`? | [`Size`](Size.md) |

#### Returns

`void`

#### Implementation of

[`IDrawable`](../interfaces/IDrawable.md).[`draw`](../interfaces/IDrawable.md#draw)

#### Defined in

[src/fivem/ui/Container.ts:23](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/Container.ts#L23)
