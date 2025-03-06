[@nativewrappers/fivem](../../README.md) / [fivem](../README.md) / Menu

# Class: Menu

Defined in: fivem/ui/menu/Menu.d.ts:5

## Constructors

### new Menu()

```ts
new Menu(
   title, 
   subtitle, 
   offset?, 
   spriteLibrary?, 
   spriteName?): Menu
```

Defined in: fivem/ui/menu/Menu.d.ts:57

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `title` | `string` |
| `subtitle` | `string` |
| `offset`? | [`Point`](Point.md) |
| `spriteLibrary`? | `string` |
| `spriteName`? | `string` |

#### Returns

[`Menu`](Menu.md)

## Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="checkboxchange"></a> `checkboxChange` | `readonly` | [`LiteEvent`](LiteEvent.md) | fivem/ui/menu/Menu.d.ts:22 |
| <a id="children"></a> `children` | `public` | `Map`\<`string`, [`Menu`](Menu.md)\> | fivem/ui/menu/Menu.d.ts:15 |
| <a id="id"></a> `id` | `readonly` | `string` | fivem/ui/menu/Menu.d.ts:10 |
| <a id="indexchange"></a> `indexChange` | `readonly` | [`LiteEvent`](LiteEvent.md) | fivem/ui/menu/Menu.d.ts:19 |
| <a id="items"></a> `items` | `public` | [`UIMenuItem`](UIMenuItem.md)[] | fivem/ui/menu/Menu.d.ts:14 |
| <a id="itemselect"></a> `itemSelect` | `readonly` | [`LiteEvent`](LiteEvent.md) | fivem/ui/menu/Menu.d.ts:25 |
| <a id="listchange"></a> `listChange` | `readonly` | [`LiteEvent`](LiteEvent.md) | fivem/ui/menu/Menu.d.ts:20 |
| <a id="listselect"></a> `listSelect` | `readonly` | [`LiteEvent`](LiteEvent.md) | fivem/ui/menu/Menu.d.ts:23 |
| <a id="menuchange"></a> `menuChange` | `readonly` | [`LiteEvent`](LiteEvent.md) | fivem/ui/menu/Menu.d.ts:18 |
| <a id="menuclose"></a> `menuClose` | `readonly` | [`LiteEvent`](LiteEvent.md) | fivem/ui/menu/Menu.d.ts:17 |
| <a id="menuopen"></a> `menuOpen` | `readonly` | [`LiteEvent`](LiteEvent.md) | fivem/ui/menu/Menu.d.ts:16 |
| <a id="panelactivated"></a> `panelActivated` | `readonly` | [`LiteEvent`](LiteEvent.md) | fivem/ui/menu/Menu.d.ts:26 |
| <a id="parentitem"></a> `parentItem?` | `public` | [`UIMenuItem`](UIMenuItem.md) | fivem/ui/menu/Menu.d.ts:13 |
| <a id="parentmenu"></a> `parentMenu?` | `public` | [`Menu`](Menu.md) | fivem/ui/menu/Menu.d.ts:12 |
| <a id="sliderchange"></a> `sliderChange` | `readonly` | [`LiteEvent`](LiteEvent.md) | fivem/ui/menu/Menu.d.ts:21 |
| <a id="sliderselect"></a> `sliderSelect` | `readonly` | [`LiteEvent`](LiteEvent.md) | fivem/ui/menu/Menu.d.ts:24 |
| <a id="visible"></a> `visible` | `public` | `boolean` | fivem/ui/menu/Menu.d.ts:11 |
| <a id="screenaspectratio"></a> `screenAspectRatio` | `static` | `number` | fivem/ui/menu/Menu.d.ts:6 |
| <a id="screenheight"></a> `screenHeight` | `static` | `number` | fivem/ui/menu/Menu.d.ts:7 |
| <a id="screenresolution"></a> `screenResolution` | `static` | [`Size`](Size.md) | fivem/ui/menu/Menu.d.ts:9 |
| <a id="screenwidth"></a> `screenWidth` | `static` | `number` | fivem/ui/menu/Menu.d.ts:8 |

## Accessors

### Alignment

#### Get Signature

```ts
get Alignment(): MenuAlignment
```

Defined in: fivem/ui/menu/Menu.d.ts:74

##### Returns

[`MenuAlignment`](../enumerations/MenuAlignment.md)

#### Set Signature

```ts
set Alignment(alignment): void
```

Defined in: fivem/ui/menu/Menu.d.ts:75

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `alignment` | [`MenuAlignment`](../enumerations/MenuAlignment.md) |

##### Returns

`void`

***

### Controls

#### Get Signature

```ts
get Controls(): MenuControls
```

Defined in: fivem/ui/menu/Menu.d.ts:79

##### Returns

[`MenuControls`](MenuControls.md)

***

### CurrentItem

#### Get Signature

```ts
get CurrentItem(): UIMenuItem
```

Defined in: fivem/ui/menu/Menu.d.ts:70

##### Returns

[`UIMenuItem`](UIMenuItem.md)

#### Set Signature

```ts
set CurrentItem(value): void
```

Defined in: fivem/ui/menu/Menu.d.ts:71

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | [`UIMenuItem`](UIMenuItem.md) |

##### Returns

`void`

***

### CurrentSelection

#### Get Signature

```ts
get CurrentSelection(): number
```

Defined in: fivem/ui/menu/Menu.d.ts:72

##### Returns

`number`

#### Set Signature

```ts
set CurrentSelection(v): void
```

Defined in: fivem/ui/menu/Menu.d.ts:73

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | `number` |

##### Returns

`void`

***

### DrawOffset

#### Get Signature

```ts
get DrawOffset(): Point
```

Defined in: fivem/ui/menu/Menu.d.ts:78

##### Returns

[`Point`](Point.md)

***

### Settings

#### Get Signature

```ts
get Settings(): MenuSettings
```

Defined in: fivem/ui/menu/Menu.d.ts:80

##### Returns

[`MenuSettings`](MenuSettings.md)

***

### Subtitle

#### Get Signature

```ts
get Subtitle(): string
```

Defined in: fivem/ui/menu/Menu.d.ts:63

##### Returns

`string`

#### Set Signature

```ts
set Subtitle(text): void
```

Defined in: fivem/ui/menu/Menu.d.ts:62

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `text` | `string` |

##### Returns

`void`

***

### SubtitleBackColor

#### Get Signature

```ts
get SubtitleBackColor(): Color
```

Defined in: fivem/ui/menu/Menu.d.ts:69

##### Returns

`Color`

#### Set Signature

```ts
set SubtitleBackColor(color): void
```

Defined in: fivem/ui/menu/Menu.d.ts:68

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `color` | `Color` |

##### Returns

`void`

***

### SubtitleFont

#### Get Signature

```ts
get SubtitleFont(): Font
```

Defined in: fivem/ui/menu/Menu.d.ts:65

##### Returns

[`Font`](../enumerations/Font.md)

#### Set Signature

```ts
set SubtitleFont(font): void
```

Defined in: fivem/ui/menu/Menu.d.ts:64

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `font` | [`Font`](../enumerations/Font.md) |

##### Returns

`void`

***

### SubtitleForeColor

#### Get Signature

```ts
get SubtitleForeColor(): Color
```

Defined in: fivem/ui/menu/Menu.d.ts:67

##### Returns

`Color`

#### Set Signature

```ts
set SubtitleForeColor(color): void
```

Defined in: fivem/ui/menu/Menu.d.ts:66

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `color` | `Color` |

##### Returns

`void`

***

### Title

#### Get Signature

```ts
get Title(): string
```

Defined in: fivem/ui/menu/Menu.d.ts:59

##### Returns

`string`

#### Set Signature

```ts
set Title(text): void
```

Defined in: fivem/ui/menu/Menu.d.ts:58

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `text` | `string` |

##### Returns

`void`

***

### TitleFont

#### Get Signature

```ts
get TitleFont(): Font
```

Defined in: fivem/ui/menu/Menu.d.ts:60

##### Returns

[`Font`](../enumerations/Font.md)

#### Set Signature

```ts
set TitleFont(font): void
```

Defined in: fivem/ui/menu/Menu.d.ts:61

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `font` | [`Font`](../enumerations/Font.md) |

##### Returns

`void`

***

### WidthOffset

#### Get Signature

```ts
get WidthOffset(): number
```

Defined in: fivem/ui/menu/Menu.d.ts:76

##### Returns

`number`

#### Set Signature

```ts
set WidthOffset(widthOffset): void
```

Defined in: fivem/ui/menu/Menu.d.ts:77

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `widthOffset` | `number` |

##### Returns

`void`

## Methods

### addItem()

```ts
addItem(items): void
```

Defined in: fivem/ui/menu/Menu.d.ts:83

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `items` | [`UIMenuItem`](UIMenuItem.md) \| [`UIMenuItem`](UIMenuItem.md)[] |

#### Returns

`void`

***

### addNewSubMenu()

```ts
addNewSubMenu(
   text, 
   description?, 
   inherit?): Menu
```

Defined in: fivem/ui/menu/Menu.d.ts:81

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `text` | `string` |
| `description`? | `string` |
| `inherit`? | `boolean` |

#### Returns

[`Menu`](Menu.md)

***

### addSubMenu()

```ts
addSubMenu(
   subMenuToAdd, 
   text, 
   description?, 
   inherit?): Menu
```

Defined in: fivem/ui/menu/Menu.d.ts:82

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `subMenuToAdd` | [`Menu`](Menu.md) |
| `text` | `string` |
| `description`? | `string` |
| `inherit`? | `boolean` |

#### Returns

[`Menu`](Menu.md)

***

### bindMenuToItem()

```ts
bindMenuToItem(menuToBind, itemToBindTo): void
```

Defined in: fivem/ui/menu/Menu.d.ts:85

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `menuToBind` | [`Menu`](Menu.md) |
| `itemToBindTo` | [`UIMenuItem`](UIMenuItem.md) |

#### Returns

`void`

***

### clear()

```ts
clear(): void
```

Defined in: fivem/ui/menu/Menu.d.ts:88

#### Returns

`void`

***

### close()

```ts
close(): void
```

Defined in: fivem/ui/menu/Menu.d.ts:90

#### Returns

`void`

***

### goBack()

```ts
goBack(): void
```

Defined in: fivem/ui/menu/Menu.d.ts:97

#### Returns

`void`

***

### goDown()

```ts
goDown(): void
```

Defined in: fivem/ui/menu/Menu.d.ts:96

#### Returns

`void`

***

### goLeft()

```ts
goLeft(): void
```

Defined in: fivem/ui/menu/Menu.d.ts:91

#### Returns

`void`

***

### goRight()

```ts
goRight(): void
```

Defined in: fivem/ui/menu/Menu.d.ts:92

#### Returns

`void`

***

### goUp()

```ts
goUp(): void
```

Defined in: fivem/ui/menu/Menu.d.ts:95

#### Returns

`void`

***

### isMouseInBounds()

```ts
isMouseInBounds(
   pos, 
   size, 
   drawOffset?): boolean
```

Defined in: fivem/ui/menu/Menu.d.ts:94

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `pos` | [`Point`](Point.md) |
| `size` | [`Size`](Size.md) |
| `drawOffset`? | `boolean` |

#### Returns

`boolean`

***

### open()

```ts
open(): void
```

Defined in: fivem/ui/menu/Menu.d.ts:89

#### Returns

`void`

***

### refreshIndex()

```ts
refreshIndex(): void
```

Defined in: fivem/ui/menu/Menu.d.ts:87

#### Returns

`void`

***

### releaseMenuFromItem()

```ts
releaseMenuFromItem(releaseFrom): boolean
```

Defined in: fivem/ui/menu/Menu.d.ts:86

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `releaseFrom` | [`UIMenuItem`](UIMenuItem.md) |

#### Returns

`boolean`

***

### removeItem()

```ts
removeItem(itemOrIndex): void
```

Defined in: fivem/ui/menu/Menu.d.ts:84

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `itemOrIndex` | `number` \| [`UIMenuItem`](UIMenuItem.md) |

#### Returns

`void`

***

### selectItem()

```ts
selectItem(): void
```

Defined in: fivem/ui/menu/Menu.d.ts:93

#### Returns

`void`
