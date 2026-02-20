[@nativewrappers/fivem](../../../../README.md) / [fivem/ui/Text](../README.md) / Text

# Class: Text

Defined in: lib/fivem/ui/Text.d.ts:7

## Implements

- [`IDrawable`](../../interfaces/IDrawable/interfaces/IDrawable.md)

## Constructors

### Constructor

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
   wordWrap?): Text;
```

Defined in: lib/fivem/ui/Text.d.ts:31

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `caption` | `string` | Text to display |
| `pos` | [`Point`](../../../utils/Point/classes/Point.md) | Position of text relative to alignment. In pixels. |
| `scale?` | `number` | Size of text. Default 1.0 |
| `color?` | `any` | Color of text. Default black. |
| `font?` | [`Font`](../../../enums/Font/enumerations/Font.md) | Font of text. Default Chalet London. |
| `alignment?` | [`Alignment`](../../../enums/Alignment/enumerations/Alignment.md) | Alignment of text. Default Left. |
| `dropShadow?` | `boolean` |  |
| `outline?` | `boolean` |  |
| `wordWrap?` | [`Size`](../../../utils/Size/classes/Size.md) |  |

#### Returns

`Text`

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="alignment"></a> `alignment` | [`Alignment`](../../../enums/Alignment/enumerations/Alignment.md) | lib/fivem/ui/Text.d.ts:15 |
| <a id="caption"></a> `caption` | `string` | lib/fivem/ui/Text.d.ts:10 |
| <a id="color"></a> `color` | `Color` | lib/fivem/ui/Text.d.ts:13 |
| <a id="dropshadow"></a> `dropShadow` | `boolean` | lib/fivem/ui/Text.d.ts:16 |
| <a id="font"></a> `font` | [`Font`](../../../enums/Font/enumerations/Font.md) | lib/fivem/ui/Text.d.ts:14 |
| <a id="outline"></a> `outline` | `boolean` | lib/fivem/ui/Text.d.ts:17 |
| <a id="pos"></a> `pos` | [`Point`](../../../utils/Point/classes/Point.md) | lib/fivem/ui/Text.d.ts:11 |
| <a id="scale"></a> `scale` | `number` | lib/fivem/ui/Text.d.ts:12 |
| <a id="wordwrap"></a> `wordWrap` | [`Size`](../../../utils/Size/classes/Size.md) | lib/fivem/ui/Text.d.ts:18 |

## Methods

### draw()

#### Call Signature

```ts
draw(offset?, resolution?): void;
```

Defined in: lib/fivem/ui/Text.d.ts:32

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
   caption, 
   pos, 
   scale, 
   color?, 
   font?, 
   alignment?, 
   dropShadow?, 
   outline?, 
   wordWrap?, 
   resolution?): void;
```

Defined in: lib/fivem/ui/Text.d.ts:33

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `caption` | `string` |
| `pos` | [`Point`](../../../utils/Point/classes/Point.md) |
| `scale` | `number` |
| `color?` | `any` |
| `font?` | [`Font`](../../../enums/Font/enumerations/Font.md) |
| `alignment?` | [`Alignment`](../../../enums/Alignment/enumerations/Alignment.md) |
| `dropShadow?` | `boolean` |
| `outline?` | `boolean` |
| `wordWrap?` | [`Size`](../../../utils/Size/classes/Size.md) |
| `resolution?` | [`Size`](../../../utils/Size/classes/Size.md) |

##### Returns

`void`

##### Implementation of

```ts
IDrawable.draw
```

***

### addLongString()

```ts
static addLongString(str): void;
```

Defined in: lib/fivem/ui/Text.d.ts:9

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
   resolution?): void;
```

Defined in: lib/fivem/ui/Text.d.ts:8

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `caption` | `string` |
| `pos` | [`Point`](../../../utils/Point/classes/Point.md) |
| `scale?` | `number` |
| `color?` | `any` |
| `font?` | [`Font`](../../../enums/Font/enumerations/Font.md) |
| `alignment?` | [`Alignment`](../../../enums/Alignment/enumerations/Alignment.md) |
| `dropShadow?` | `boolean` |
| `outline?` | `boolean` |
| `wordWrap?` | [`Size`](../../../utils/Size/classes/Size.md) |
| `resolution?` | [`Size`](../../../utils/Size/classes/Size.md) |

#### Returns

`void`
