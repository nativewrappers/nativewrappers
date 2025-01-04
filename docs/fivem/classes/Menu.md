[@nativewrappers/fivem](../../README.md) / [fivem](../README.md) / Menu

# Class: Menu

## Constructors

### new Menu()

```ts
new Menu(
   title, 
   subtitle, 
   offset, 
   spriteLibrary, 
   spriteName): Menu
```

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `title` | `string` | `undefined` |
| `subtitle` | `string` | `undefined` |
| `offset` | [`Point`](Point.md) | `...` |
| `spriteLibrary` | `string` | `"commonmenu"` |
| `spriteName` | `string` | `"interaction_bgd"` |

#### Returns

[`Menu`](Menu.md)

#### Defined in

[src/fivem/ui/menu/Menu.ts:96](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/menu/Menu.ts#L96)

## Properties

| Property | Modifier | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| `checkboxChange` | `readonly` | [`LiteEvent`](LiteEvent.md) | `undefined` | [src/fivem/ui/menu/Menu.ts:56](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/menu/Menu.ts#L56) |
| `children` | `public` | `Map`\<`string`, [`Menu`](Menu.md)\> | `undefined` | [src/fivem/ui/menu/Menu.ts:47](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/menu/Menu.ts#L47) |
| `id` | `readonly` | `string` | `undefined` | [src/fivem/ui/menu/Menu.ts:40](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/menu/Menu.ts#L40) |
| `indexChange` | `readonly` | [`LiteEvent`](LiteEvent.md) | `undefined` | [src/fivem/ui/menu/Menu.ts:53](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/menu/Menu.ts#L53) |
| `items` | `public` | [`UIMenuItem`](UIMenuItem.md)[] | `[]` | [src/fivem/ui/menu/Menu.ts:46](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/menu/Menu.ts#L46) |
| `itemSelect` | `readonly` | [`LiteEvent`](LiteEvent.md) | `undefined` | [src/fivem/ui/menu/Menu.ts:60](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/menu/Menu.ts#L60) |
| `listChange` | `readonly` | [`LiteEvent`](LiteEvent.md) | `undefined` | [src/fivem/ui/menu/Menu.ts:54](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/menu/Menu.ts#L54) |
| `listSelect` | `readonly` | [`LiteEvent`](LiteEvent.md) | `undefined` | [src/fivem/ui/menu/Menu.ts:58](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/menu/Menu.ts#L58) |
| `menuChange` | `readonly` | [`LiteEvent`](LiteEvent.md) | `undefined` | [src/fivem/ui/menu/Menu.ts:51](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/menu/Menu.ts#L51) |
| `menuClose` | `readonly` | [`LiteEvent`](LiteEvent.md) | `undefined` | [src/fivem/ui/menu/Menu.ts:50](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/menu/Menu.ts#L50) |
| `menuOpen` | `readonly` | [`LiteEvent`](LiteEvent.md) | `undefined` | [src/fivem/ui/menu/Menu.ts:49](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/menu/Menu.ts#L49) |
| `panelActivated` | `readonly` | [`LiteEvent`](LiteEvent.md) | `undefined` | [src/fivem/ui/menu/Menu.ts:62](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/menu/Menu.ts#L62) |
| `parentItem?` | `public` | [`UIMenuItem`](UIMenuItem.md) | `undefined` | [src/fivem/ui/menu/Menu.ts:45](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/menu/Menu.ts#L45) |
| `parentMenu?` | `public` | [`Menu`](Menu.md) | `undefined` | [src/fivem/ui/menu/Menu.ts:44](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/menu/Menu.ts#L44) |
| `sliderChange` | `readonly` | [`LiteEvent`](LiteEvent.md) | `undefined` | [src/fivem/ui/menu/Menu.ts:55](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/menu/Menu.ts#L55) |
| `sliderSelect` | `readonly` | [`LiteEvent`](LiteEvent.md) | `undefined` | [src/fivem/ui/menu/Menu.ts:59](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/menu/Menu.ts#L59) |
| `visible` | `public` | `boolean` | `false` | [src/fivem/ui/menu/Menu.ts:42](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/menu/Menu.ts#L42) |
| `screenAspectRatio` | `static` | `number` | `undefined` | [src/fivem/ui/menu/Menu.ts:30](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/menu/Menu.ts#L30) |
| `screenHeight` | `static` | `number` | `1080` | [src/fivem/ui/menu/Menu.ts:33](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/menu/Menu.ts#L33) |
| `screenResolution` | `static` | [`Size`](Size.md) | `undefined` | [src/fivem/ui/menu/Menu.ts:35](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/menu/Menu.ts#L35) |
| `screenWidth` | `static` | `number` | `undefined` | [src/fivem/ui/menu/Menu.ts:34](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/menu/Menu.ts#L34) |

## Accessors

### Alignment

```ts
get Alignment(): MenuAlignment
```

```ts
set Alignment(alignment): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `alignment` | [`MenuAlignment`](../enumerations/MenuAlignment.md) |

#### Returns

[`MenuAlignment`](../enumerations/MenuAlignment.md)

#### Defined in

[src/fivem/ui/menu/Menu.ts:282](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/menu/Menu.ts#L282)

***

### Controls

```ts
get Controls(): MenuControls
```

#### Returns

[`MenuControls`](MenuControls.md)

#### Defined in

[src/fivem/ui/menu/Menu.ts:329](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/menu/Menu.ts#L329)

***

### CurrentItem

```ts
get CurrentItem(): UIMenuItem
```

```ts
set CurrentItem(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | [`UIMenuItem`](UIMenuItem.md) |

#### Returns

[`UIMenuItem`](UIMenuItem.md)

#### Defined in

[src/fivem/ui/menu/Menu.ts:254](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/menu/Menu.ts#L254)

***

### CurrentSelection

```ts
get CurrentSelection(): number
```

```ts
set CurrentSelection(v): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | `number` |

#### Returns

`number`

#### Defined in

[src/fivem/ui/menu/Menu.ts:265](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/menu/Menu.ts#L265)

***

### DrawOffset

```ts
get DrawOffset(): Point
```

#### Returns

[`Point`](Point.md)

#### Defined in

[src/fivem/ui/menu/Menu.ts:325](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/menu/Menu.ts#L325)

***

### Settings

```ts
get Settings(): MenuSettings
```

#### Returns

[`MenuSettings`](MenuSettings.md)

#### Defined in

[src/fivem/ui/menu/Menu.ts:333](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/menu/Menu.ts#L333)

***

### Subtitle

```ts
get Subtitle(): string
```

```ts
set Subtitle(text): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `text` | `string` |

#### Returns

`string`

#### Defined in

[src/fivem/ui/menu/Menu.ts:226](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/menu/Menu.ts#L226)

***

### SubtitleBackColor

```ts
get SubtitleBackColor(): Color
```

```ts
set SubtitleBackColor(color): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `color` | [`Color`](Color.md) |

#### Returns

[`Color`](Color.md)

#### Defined in

[src/fivem/ui/menu/Menu.ts:250](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/menu/Menu.ts#L250)

***

### SubtitleFont

```ts
get SubtitleFont(): Font
```

```ts
set SubtitleFont(font): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `font` | [`Font`](../enumerations/Font.md) |

#### Returns

[`Font`](../enumerations/Font.md)

#### Defined in

[src/fivem/ui/menu/Menu.ts:234](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/menu/Menu.ts#L234)

***

### SubtitleForeColor

```ts
get SubtitleForeColor(): Color
```

```ts
set SubtitleForeColor(color): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `color` | [`Color`](Color.md) |

#### Returns

[`Color`](Color.md)

#### Defined in

[src/fivem/ui/menu/Menu.ts:242](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/menu/Menu.ts#L242)

***

### Title

```ts
get Title(): string
```

```ts
set Title(text): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `text` | `string` |

#### Returns

`string`

#### Defined in

[src/fivem/ui/menu/Menu.ts:210](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/menu/Menu.ts#L210)

***

### TitleFont

```ts
get TitleFont(): Font
```

```ts
set TitleFont(font): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `font` | [`Font`](../enumerations/Font.md) |

#### Returns

[`Font`](../enumerations/Font.md)

#### Defined in

[src/fivem/ui/menu/Menu.ts:214](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/menu/Menu.ts#L214)

***

### WidthOffset

```ts
get WidthOffset(): number
```

```ts
set WidthOffset(widthOffset): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `widthOffset` | `number` |

#### Returns

`number`

#### Defined in

[src/fivem/ui/menu/Menu.ts:290](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/menu/Menu.ts#L290)

## Methods

### addItem()

```ts
addItem(items): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `items` | [`UIMenuItem`](UIMenuItem.md) \| [`UIMenuItem`](UIMenuItem.md)[] |

#### Returns

`void`

#### Defined in

[src/fivem/ui/menu/Menu.ts:384](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/menu/Menu.ts#L384)

***

### addNewSubMenu()

```ts
addNewSubMenu(
   text, 
   description?, 
   inherit?): Menu
```

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `text` | `string` | `undefined` |
| `description`? | `string` | `undefined` |
| `inherit`? | `boolean` | `true` |

#### Returns

[`Menu`](Menu.md)

#### Defined in

[src/fivem/ui/menu/Menu.ts:337](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/menu/Menu.ts#L337)

***

### addSubMenu()

```ts
addSubMenu(
   subMenuToAdd, 
   text, 
   description?, 
   inherit?): Menu
```

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `subMenuToAdd` | [`Menu`](Menu.md) | `undefined` |
| `text` | `string` | `undefined` |
| `description`? | `string` | `undefined` |
| `inherit`? | `boolean` | `true` |

#### Returns

[`Menu`](Menu.md)

#### Defined in

[src/fivem/ui/menu/Menu.ts:365](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/menu/Menu.ts#L365)

***

### bindMenuToItem()

```ts
bindMenuToItem(menuToBind, itemToBindTo): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `menuToBind` | [`Menu`](Menu.md) |
| `itemToBindTo` | [`UIMenuItem`](UIMenuItem.md) |

#### Returns

`void`

#### Defined in

[src/fivem/ui/menu/Menu.ts:409](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/menu/Menu.ts#L409)

***

### clear()

```ts
clear(): void
```

#### Returns

`void`

#### Defined in

[src/fivem/ui/menu/Menu.ts:452](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/menu/Menu.ts#L452)

***

### close()

```ts
close(): void
```

#### Returns

`void`

#### Defined in

[src/fivem/ui/menu/Menu.ts:472](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/menu/Menu.ts#L472)

***

### goBack()

```ts
goBack(): void
```

#### Returns

`void`

#### Defined in

[src/fivem/ui/menu/Menu.ts:663](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/menu/Menu.ts#L663)

***

### goDown()

```ts
goDown(): void
```

#### Returns

`void`

#### Defined in

[src/fivem/ui/menu/Menu.ts:628](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/menu/Menu.ts#L628)

***

### goLeft()

```ts
goLeft(): void
```

#### Returns

`void`

#### Defined in

[src/fivem/ui/menu/Menu.ts:482](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/menu/Menu.ts#L482)

***

### goRight()

```ts
goRight(): void
```

#### Returns

`void`

#### Defined in

[src/fivem/ui/menu/Menu.ts:509](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/menu/Menu.ts#L509)

***

### goUp()

```ts
goUp(): void
```

#### Returns

`void`

#### Defined in

[src/fivem/ui/menu/Menu.ts:592](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/menu/Menu.ts#L592)

***

### isMouseInBounds()

```ts
isMouseInBounds(
   pos, 
   size, 
   drawOffset): boolean
```

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `pos` | [`Point`](Point.md) | `undefined` |
| `size` | [`Size`](Size.md) | `undefined` |
| `drawOffset` | `boolean` | `true` |

#### Returns

`boolean`

#### Defined in

[src/fivem/ui/menu/Menu.ts:573](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/menu/Menu.ts#L573)

***

### open()

```ts
open(): void
```

#### Returns

`void`

#### Defined in

[src/fivem/ui/menu/Menu.ts:458](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/menu/Menu.ts#L458)

***

### refreshIndex()

```ts
refreshIndex(): void
```

#### Returns

`void`

#### Defined in

[src/fivem/ui/menu/Menu.ts:428](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/menu/Menu.ts#L428)

***

### releaseMenuFromItem()

```ts
releaseMenuFromItem(releaseFrom): boolean
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `releaseFrom` | [`UIMenuItem`](UIMenuItem.md) |

#### Returns

`boolean`

#### Defined in

[src/fivem/ui/menu/Menu.ts:415](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/menu/Menu.ts#L415)

***

### removeItem()

```ts
removeItem(itemOrIndex): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `itemOrIndex` | `number` \| [`UIMenuItem`](UIMenuItem.md) |

#### Returns

`void`

#### Defined in

[src/fivem/ui/menu/Menu.ts:400](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/menu/Menu.ts#L400)

***

### selectItem()

```ts
selectItem(): void
```

#### Returns

`void`

#### Defined in

[src/fivem/ui/menu/Menu.ts:533](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/menu/Menu.ts#L533)
