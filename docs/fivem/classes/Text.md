[@nativewrappers/fivem](../../README.md) / [fivem](../README.md) / Text

# Class: Text

Defined in: [src/fivem/ui/Text.ts:5](https://github.com/nativewrappers/nativewrappers/blob/df8f763f54a2ec439be9cb68f9abf90f9a4d79aa/src/fivem/ui/Text.ts#L5)

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

Defined in: [src/fivem/ui/Text.ts:86](https://github.com/nativewrappers/nativewrappers/blob/df8f763f54a2ec439be9cb68f9abf90f9a4d79aa/src/fivem/ui/Text.ts#L86)

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

## Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="alignment-1"></a> `alignment` | `public` | [`Alignment`](../enumerations/Alignment.md) | [src/fivem/ui/Text.ts:69](https://github.com/nativewrappers/nativewrappers/blob/df8f763f54a2ec439be9cb68f9abf90f9a4d79aa/src/fivem/ui/Text.ts#L69) |
| <a id="caption-1"></a> `caption` | `public` | `string` | [src/fivem/ui/Text.ts:64](https://github.com/nativewrappers/nativewrappers/blob/df8f763f54a2ec439be9cb68f9abf90f9a4d79aa/src/fivem/ui/Text.ts#L64) |
| <a id="color-1"></a> `color` | `public` | [`Color`](Color.md) | [src/fivem/ui/Text.ts:67](https://github.com/nativewrappers/nativewrappers/blob/df8f763f54a2ec439be9cb68f9abf90f9a4d79aa/src/fivem/ui/Text.ts#L67) |
| <a id="dropshadow-1"></a> `dropShadow` | `public` | `boolean` | [src/fivem/ui/Text.ts:70](https://github.com/nativewrappers/nativewrappers/blob/df8f763f54a2ec439be9cb68f9abf90f9a4d79aa/src/fivem/ui/Text.ts#L70) |
| <a id="font-1"></a> `font` | `public` | [`Font`](../enumerations/Font.md) | [src/fivem/ui/Text.ts:68](https://github.com/nativewrappers/nativewrappers/blob/df8f763f54a2ec439be9cb68f9abf90f9a4d79aa/src/fivem/ui/Text.ts#L68) |
| <a id="outline-1"></a> `outline` | `public` | `boolean` | [src/fivem/ui/Text.ts:71](https://github.com/nativewrappers/nativewrappers/blob/df8f763f54a2ec439be9cb68f9abf90f9a4d79aa/src/fivem/ui/Text.ts#L71) |
| <a id="pos-1"></a> `pos` | `public` | [`Point`](Point.md) | [src/fivem/ui/Text.ts:65](https://github.com/nativewrappers/nativewrappers/blob/df8f763f54a2ec439be9cb68f9abf90f9a4d79aa/src/fivem/ui/Text.ts#L65) |
| <a id="scale-1"></a> `scale` | `public` | `number` | [src/fivem/ui/Text.ts:66](https://github.com/nativewrappers/nativewrappers/blob/df8f763f54a2ec439be9cb68f9abf90f9a4d79aa/src/fivem/ui/Text.ts#L66) |
| <a id="wordwrap-1"></a> `wordWrap` | `public` | [`Size`](Size.md) | [src/fivem/ui/Text.ts:72](https://github.com/nativewrappers/nativewrappers/blob/df8f763f54a2ec439be9cb68f9abf90f9a4d79aa/src/fivem/ui/Text.ts#L72) |

## Methods

### draw()

#### Call Signature

```ts
draw(offset?, resolution?): void
```

Defined in: [src/fivem/ui/Text.ts:108](https://github.com/nativewrappers/nativewrappers/blob/df8f763f54a2ec439be9cb68f9abf90f9a4d79aa/src/fivem/ui/Text.ts#L108)

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

Defined in: [src/fivem/ui/Text.ts:109](https://github.com/nativewrappers/nativewrappers/blob/df8f763f54a2ec439be9cb68f9abf90f9a4d79aa/src/fivem/ui/Text.ts#L109)

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

```ts
IDrawable.draw
```

***

### addLongString()

```ts
static addLongString(str): void
```

Defined in: [src/fivem/ui/Text.ts:55](https://github.com/nativewrappers/nativewrappers/blob/df8f763f54a2ec439be9cb68f9abf90f9a4d79aa/src/fivem/ui/Text.ts#L55)

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
   scale, 
   color, 
   font, 
   alignment, 
   dropShadow, 
   outline, 
   wordWrap?, 
   resolution?): void
```

Defined in: [src/fivem/ui/Text.ts:6](https://github.com/nativewrappers/nativewrappers/blob/df8f763f54a2ec439be9cb68f9abf90f9a4d79aa/src/fivem/ui/Text.ts#L6)

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
