[@nativewrappers/fivem](../../README.md) / [fivem](../README.md) / Text

# Class: Text

## Implements

- [`IDrawable`](../interfaces/IDrawable.md)

## Constructors

### new Text()

```ts
new Text(
   caption, 
   pos, 
   scale, 
   color, 
   font, 
   alignment, 
   dropShadow, 
   outline, 
   wordWrap): Text
```

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `caption` | `string` | `undefined` | Text to display |
| `pos` | [`Point`](Point.md) | `undefined` | Position of text relative to alignment. In pixels. |
| `scale` | `number` | `1` | Size of text. Default 1.0 |
| `color` | [`Color`](Color.md) | `Color.White` | Color of text. Default black. |
| `font` | [`Font`](../enumerations/Font.md) | `Font.ChaletLondon` | Font of text. Default Chalet London. |
| `alignment` | [`Alignment`](../enumerations/Alignment.md) | `Alignment.Left` | Alignment of text. Default Left. |
| `dropShadow` | `boolean` | `false` |  |
| `outline` | `boolean` | `false` |  |
| `wordWrap` | [`Size`](Size.md) | `...` |  |

#### Returns

[`Text`](Text.md)

#### Defined in

[src/fivem/ui/Text.ts:86](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/Text.ts#L86)

## Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| `alignment` | `public` | [`Alignment`](../enumerations/Alignment.md) | [src/fivem/ui/Text.ts:69](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/Text.ts#L69) |
| `caption` | `public` | `string` | [src/fivem/ui/Text.ts:64](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/Text.ts#L64) |
| `color` | `public` | [`Color`](Color.md) | [src/fivem/ui/Text.ts:67](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/Text.ts#L67) |
| `dropShadow` | `public` | `boolean` | [src/fivem/ui/Text.ts:70](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/Text.ts#L70) |
| `font` | `public` | [`Font`](../enumerations/Font.md) | [src/fivem/ui/Text.ts:68](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/Text.ts#L68) |
| `outline` | `public` | `boolean` | [src/fivem/ui/Text.ts:71](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/Text.ts#L71) |
| `pos` | `public` | [`Point`](Point.md) | [src/fivem/ui/Text.ts:65](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/Text.ts#L65) |
| `scale` | `public` | `number` | [src/fivem/ui/Text.ts:66](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/Text.ts#L66) |
| `wordWrap` | `public` | [`Size`](Size.md) | [src/fivem/ui/Text.ts:72](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/Text.ts#L72) |

## Methods

### draw()

#### draw(offset, resolution)

```ts
draw(offset?, resolution?): void
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `offset`? | [`Size`](Size.md) |
| `resolution`? | [`Size`](Size.md) |

##### Returns

`void`

##### Implementation of

[`IDrawable`](../interfaces/IDrawable.md).[`draw`](../interfaces/IDrawable.md#draw)

##### Defined in

[src/fivem/ui/Text.ts:108](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/Text.ts#L108)

#### draw(caption, pos, scale, color, font, alignment, dropShadow, outline, wordWrap, resolution)

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

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `caption` | `string` |
| `pos` | [`Point`](Point.md) |
| `scale` | `number` |
| `color`? | [`Color`](Color.md) |
| `font`? | [`Font`](../enumerations/Font.md) |
| `alignment`? | [`Alignment`](../enumerations/Alignment.md) |
| `dropShadow`? | `boolean` |
| `outline`? | `boolean` |
| `wordWrap`? | [`Size`](Size.md) |
| `resolution`? | [`Size`](Size.md) |

##### Returns

`void`

##### Implementation of

`IDrawable.draw`

##### Defined in

[src/fivem/ui/Text.ts:109](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/Text.ts#L109)

***

### addLongString()

```ts
static addLongString(str): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `str` | `string` |

#### Returns

`void`

#### Defined in

[src/fivem/ui/Text.ts:55](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/Text.ts#L55)

***

### draw()

```ts
static draw(
   caption, 
   pos, 
   scale, 
   color, 
   font, 
   alignment, 
   dropShadow, 
   outline, 
   wordWrap?, 
   resolution?): void
```

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `caption` | `string` | `undefined` |
| `pos` | [`Point`](Point.md) | `undefined` |
| `scale` | `number` | `1` |
| `color` | [`Color`](Color.md) | `Color.White` |
| `font` | [`Font`](../enumerations/Font.md) | `Font.ChaletLondon` |
| `alignment` | [`Alignment`](../enumerations/Alignment.md) | `Alignment.Left` |
| `dropShadow` | `boolean` | `false` |
| `outline` | `boolean` | `false` |
| `wordWrap`? | [`Size`](Size.md) | `undefined` |
| `resolution`? | [`Size`](Size.md) | `undefined` |

#### Returns

`void`

#### Defined in

[src/fivem/ui/Text.ts:6](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/Text.ts#L6)
