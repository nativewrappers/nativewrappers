[@nativewrappers/fivem](../../README.md) / [fivem](../README.md) / Text

# Class: Text

Defined in: fivem/ui/Text.d.ts:4

## Implements

- [`IDrawable`](../interfaces/IDrawable.md)

## Constructors

### new Text()

```ts
new Text(
   caption, 
   pos, 
   scale?, 
   color?, 
   font?, 
   alignment?, 
   dropShadow?, 
   outline?, 
   wordWrap?): Text
```

Defined in: fivem/ui/Text.d.ts:28

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `caption` | `string` | Text to display |
| `pos` | [`Point`](Point.md) | Position of text relative to alignment. In pixels. |
| `scale`? | `number` | Size of text. Default 1.0 |
| `color`? | `any` | Color of text. Default black. |
| `font`? | [`Font`](../enumerations/Font.md) | Font of text. Default Chalet London. |
| `alignment`? | [`Alignment`](../enumerations/Alignment.md) | Alignment of text. Default Left. |
| `dropShadow`? | `boolean` |  |
| `outline`? | `boolean` |  |
| `wordWrap`? | [`Size`](Size.md) |  |

#### Returns

[`Text`](Text.md)

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="alignment-1"></a> `alignment` | [`Alignment`](../enumerations/Alignment.md) | fivem/ui/Text.d.ts:12 |
| <a id="caption-1"></a> `caption` | `string` | fivem/ui/Text.d.ts:7 |
| <a id="color-1"></a> `color` | `Color` | fivem/ui/Text.d.ts:10 |
| <a id="dropshadow-1"></a> `dropShadow` | `boolean` | fivem/ui/Text.d.ts:13 |
| <a id="font-1"></a> `font` | [`Font`](../enumerations/Font.md) | fivem/ui/Text.d.ts:11 |
| <a id="outline-1"></a> `outline` | `boolean` | fivem/ui/Text.d.ts:14 |
| <a id="pos-1"></a> `pos` | [`Point`](Point.md) | fivem/ui/Text.d.ts:8 |
| <a id="scale-1"></a> `scale` | `number` | fivem/ui/Text.d.ts:9 |
| <a id="wordwrap-1"></a> `wordWrap` | [`Size`](Size.md) | fivem/ui/Text.d.ts:15 |

## Methods

### draw()

#### Call Signature

```ts
draw(offset?, resolution?): void
```

Defined in: fivem/ui/Text.d.ts:29

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
   caption, 
   pos, 
   scale, 
   color?, 
   font?, 
   alignment?, 
   dropShadow?, 
   outline?, 
   wordWrap?, 
   resolution?): void
```

Defined in: fivem/ui/Text.d.ts:30

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `caption` | `string` |
| `pos` | [`Point`](Point.md) |
| `scale` | `number` |
| `color`? | `any` |
| `font`? | [`Font`](../enumerations/Font.md) |
| `alignment`? | [`Alignment`](../enumerations/Alignment.md) |
| `dropShadow`? | `boolean` |
| `outline`? | `boolean` |
| `wordWrap`? | [`Size`](Size.md) |
| `resolution`? | [`Size`](Size.md) |

##### Returns

`void`

##### Implementation of

```ts
IDrawable.draw
```

***

### addLongString()

```ts
static addLongString(str): void
```

Defined in: fivem/ui/Text.d.ts:6

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `str` | `string` |

#### Returns

`void`

***

### draw()

```ts
static draw(
   caption, 
   pos, 
   scale?, 
   color?, 
   font?, 
   alignment?, 
   dropShadow?, 
   outline?, 
   wordWrap?, 
   resolution?): void
```

Defined in: fivem/ui/Text.d.ts:5

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `caption` | `string` |
| `pos` | [`Point`](Point.md) |
| `scale`? | `number` |
| `color`? | `any` |
| `font`? | [`Font`](../enumerations/Font.md) |
| `alignment`? | [`Alignment`](../enumerations/Alignment.md) |
| `dropShadow`? | `boolean` |
| `outline`? | `boolean` |
| `wordWrap`? | [`Size`](Size.md) |
| `resolution`? | [`Size`](Size.md) |

#### Returns

`void`
