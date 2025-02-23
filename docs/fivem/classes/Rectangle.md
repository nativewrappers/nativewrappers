[@nativewrappers/fivem](../../README.md) / [fivem](../README.md) / Rectangle

# Class: Rectangle

Defined in: [src/fivem/ui/Rectangle.ts:4](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/ui/Rectangle.ts#L4)

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

Defined in: [src/fivem/ui/Rectangle.ts:9](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/ui/Rectangle.ts#L9)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `pos` | [`Point`](Point.md) |
| `size` | [`Size`](Size.md) |
| `color` | [`Color`](Color.md) |

#### Returns

[`Rectangle`](Rectangle.md)

## Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="color-1"></a> `color` | `public` | [`Color`](Color.md) | [src/fivem/ui/Rectangle.ts:7](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/ui/Rectangle.ts#L7) |
| <a id="pos-1"></a> `pos` | `public` | [`Point`](Point.md) | [src/fivem/ui/Rectangle.ts:5](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/ui/Rectangle.ts#L5) |
| <a id="size-1"></a> `size` | `public` | [`Size`](Size.md) | [src/fivem/ui/Rectangle.ts:6](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/ui/Rectangle.ts#L6) |

## Methods

### draw()

#### Call Signature

```ts
draw(offset?, resolution?): void
```

Defined in: [src/fivem/ui/Rectangle.ts:15](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/ui/Rectangle.ts#L15)

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

Defined in: [src/fivem/ui/Rectangle.ts:16](https://github.com/nativewrappers/nativewrappers/blob/84be26c83fecd998aefe2c41198ac733aa3abad7/src/fivem/ui/Rectangle.ts#L16)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `pos` | [`Point`](Point.md) |
| `size` | [`Size`](Size.md) |
| `color` | [`Color`](Color.md) |
| `resolution`? | [`Size`](Size.md) |

##### Returns

`void`

##### Implementation of

```ts
IDrawable.draw
```
