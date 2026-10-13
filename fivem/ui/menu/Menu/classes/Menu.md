[@nativewrappers/fivem](../../../../../README.md) / [fivem/ui/menu/Menu](../README.md) / Menu

# Class: Menu

Defined in: lib/fivem/ui/menu/Menu.d.ts:10

## Constructors

### Constructor

```ts
new Menu(
   title, 
   subtitle, 
   offset?, 
   spriteLibrary?, 
   spriteName?): Menu;
```

Defined in: lib/fivem/ui/menu/Menu.d.ts:62

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `title` | `string` |
| `subtitle` | `string` |
| `offset?` | [`Point`](../../../../utils/Point/classes/Point.md) |
| `spriteLibrary?` | `string` |
| `spriteName?` | `string` |

#### Returns

`Menu`

## Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="checkboxchange"></a> `checkboxChange` | `readonly` | [`LiteEvent`](../../../../utils/LiteEvent/classes/LiteEvent.md) | lib/fivem/ui/menu/Menu.d.ts:27 |
| <a id="children"></a> `children` | `public` | `Map`\<`string`, `Menu`\> | lib/fivem/ui/menu/Menu.d.ts:20 |
| <a id="id"></a> `id` | `readonly` | `string` | lib/fivem/ui/menu/Menu.d.ts:15 |
| <a id="indexchange"></a> `indexChange` | `readonly` | [`LiteEvent`](../../../../utils/LiteEvent/classes/LiteEvent.md) | lib/fivem/ui/menu/Menu.d.ts:24 |
| <a id="items"></a> `items` | `public` | [`UIMenuItem`](../../items/UIMenuItem/classes/UIMenuItem.md)[] | lib/fivem/ui/menu/Menu.d.ts:19 |
| <a id="itemselect"></a> `itemSelect` | `readonly` | [`LiteEvent`](../../../../utils/LiteEvent/classes/LiteEvent.md) | lib/fivem/ui/menu/Menu.d.ts:30 |
| <a id="listchange"></a> `listChange` | `readonly` | [`LiteEvent`](../../../../utils/LiteEvent/classes/LiteEvent.md) | lib/fivem/ui/menu/Menu.d.ts:25 |
| <a id="listselect"></a> `listSelect` | `readonly` | [`LiteEvent`](../../../../utils/LiteEvent/classes/LiteEvent.md) | lib/fivem/ui/menu/Menu.d.ts:28 |
| <a id="menuchange"></a> `menuChange` | `readonly` | [`LiteEvent`](../../../../utils/LiteEvent/classes/LiteEvent.md) | lib/fivem/ui/menu/Menu.d.ts:23 |
| <a id="menuclose"></a> `menuClose` | `readonly` | [`LiteEvent`](../../../../utils/LiteEvent/classes/LiteEvent.md) | lib/fivem/ui/menu/Menu.d.ts:22 |
| <a id="menuopen"></a> `menuOpen` | `readonly` | [`LiteEvent`](../../../../utils/LiteEvent/classes/LiteEvent.md) | lib/fivem/ui/menu/Menu.d.ts:21 |
| <a id="panelactivated"></a> `panelActivated` | `readonly` | [`LiteEvent`](../../../../utils/LiteEvent/classes/LiteEvent.md) | lib/fivem/ui/menu/Menu.d.ts:31 |
| <a id="parentitem"></a> `parentItem?` | `public` | [`UIMenuItem`](../../items/UIMenuItem/classes/UIMenuItem.md) | lib/fivem/ui/menu/Menu.d.ts:18 |
| <a id="parentmenu"></a> `parentMenu?` | `public` | `Menu` | lib/fivem/ui/menu/Menu.d.ts:17 |
| <a id="sliderchange"></a> `sliderChange` | `readonly` | [`LiteEvent`](../../../../utils/LiteEvent/classes/LiteEvent.md) | lib/fivem/ui/menu/Menu.d.ts:26 |
| <a id="sliderselect"></a> `sliderSelect` | `readonly` | [`LiteEvent`](../../../../utils/LiteEvent/classes/LiteEvent.md) | lib/fivem/ui/menu/Menu.d.ts:29 |
| <a id="visible"></a> `visible` | `public` | `boolean` | lib/fivem/ui/menu/Menu.d.ts:16 |
| <a id="screenaspectratio"></a> `screenAspectRatio` | `static` | `number` | lib/fivem/ui/menu/Menu.d.ts:11 |
| <a id="screenheight"></a> `screenHeight` | `static` | `number` | lib/fivem/ui/menu/Menu.d.ts:12 |
| <a id="screenresolution"></a> `screenResolution` | `static` | [`Size`](../../../../utils/Size/classes/Size.md) | lib/fivem/ui/menu/Menu.d.ts:14 |
| <a id="screenwidth"></a> `screenWidth` | `static` | `number` | lib/fivem/ui/menu/Menu.d.ts:13 |

## Accessors

### Alignment

#### Get Signature

```ts
get Alignment(): MenuAlignment;
```

Defined in: lib/fivem/ui/menu/Menu.d.ts:79

##### Returns

[`MenuAlignment`](../../../../enums/MenuAlignment/enumerations/MenuAlignment.md)

#### Set Signature

```ts
set Alignment(alignment): void;
```

Defined in: lib/fivem/ui/menu/Menu.d.ts:80

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `alignment` | [`MenuAlignment`](../../../../enums/MenuAlignment/enumerations/MenuAlignment.md) |

##### Returns

`void`

***

### Controls

#### Get Signature

```ts
get Controls(): MenuControls;
```

Defined in: lib/fivem/ui/menu/Menu.d.ts:84

##### Returns

[`MenuControls`](../../MenuControls/classes/MenuControls.md)

***

### CurrentItem

#### Get Signature

```ts
get CurrentItem(): UIMenuItem;
```

Defined in: lib/fivem/ui/menu/Menu.d.ts:75

##### Returns

[`UIMenuItem`](../../items/UIMenuItem/classes/UIMenuItem.md)

#### Set Signature

```ts
set CurrentItem(value): void;
```

Defined in: lib/fivem/ui/menu/Menu.d.ts:76

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | [`UIMenuItem`](../../items/UIMenuItem/classes/UIMenuItem.md) |

##### Returns

`void`

***

### CurrentSelection

#### Get Signature

```ts
get CurrentSelection(): number;
```

Defined in: lib/fivem/ui/menu/Menu.d.ts:77

##### Returns

`number`

#### Set Signature

```ts
set CurrentSelection(v): void;
```

Defined in: lib/fivem/ui/menu/Menu.d.ts:78

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
get DrawOffset(): Point;
```

Defined in: lib/fivem/ui/menu/Menu.d.ts:83

##### Returns

[`Point`](../../../../utils/Point/classes/Point.md)

***

### Settings

#### Get Signature

```ts
get Settings(): MenuSettings;
```

Defined in: lib/fivem/ui/menu/Menu.d.ts:85

##### Returns

[`MenuSettings`](../../MenuSettings/classes/MenuSettings.md)

***

### Subtitle

#### Get Signature

```ts
get Subtitle(): string;
```

Defined in: lib/fivem/ui/menu/Menu.d.ts:68

##### Returns

`string`

#### Set Signature

```ts
set Subtitle(text): void;
```

Defined in: lib/fivem/ui/menu/Menu.d.ts:67

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
get SubtitleBackColor(): Color;
```

Defined in: lib/fivem/ui/menu/Menu.d.ts:74

##### Returns

`Color`

#### Set Signature

```ts
set SubtitleBackColor(color): void;
```

Defined in: lib/fivem/ui/menu/Menu.d.ts:73

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
get SubtitleFont(): Font;
```

Defined in: lib/fivem/ui/menu/Menu.d.ts:70

##### Returns

[`Font`](../../../../enums/Font/enumerations/Font.md)

#### Set Signature

```ts
set SubtitleFont(font): void;
```

Defined in: lib/fivem/ui/menu/Menu.d.ts:69

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `font` | [`Font`](../../../../enums/Font/enumerations/Font.md) |

##### Returns

`void`

***

### SubtitleForeColor

#### Get Signature

```ts
get SubtitleForeColor(): Color;
```

Defined in: lib/fivem/ui/menu/Menu.d.ts:72

##### Returns

`Color`

#### Set Signature

```ts
set SubtitleForeColor(color): void;
```

Defined in: lib/fivem/ui/menu/Menu.d.ts:71

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
get Title(): string;
```

Defined in: lib/fivem/ui/menu/Menu.d.ts:64

##### Returns

`string`

#### Set Signature

```ts
set Title(text): void;
```

Defined in: lib/fivem/ui/menu/Menu.d.ts:63

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
get TitleFont(): Font;
```

Defined in: lib/fivem/ui/menu/Menu.d.ts:65

##### Returns

[`Font`](../../../../enums/Font/enumerations/Font.md)

#### Set Signature

```ts
set TitleFont(font): void;
```

Defined in: lib/fivem/ui/menu/Menu.d.ts:66

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `font` | [`Font`](../../../../enums/Font/enumerations/Font.md) |

##### Returns

`void`

***

### WidthOffset

#### Get Signature

```ts
get WidthOffset(): number;
```

Defined in: lib/fivem/ui/menu/Menu.d.ts:81

##### Returns

`number`

#### Set Signature

```ts
set WidthOffset(widthOffset): void;
```

Defined in: lib/fivem/ui/menu/Menu.d.ts:82

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `widthOffset` | `number` |

##### Returns

`void`

## Methods

### addItem()

```ts
addItem(items): void;
```

Defined in: lib/fivem/ui/menu/Menu.d.ts:88

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `items` | \| [`UIMenuItem`](../../items/UIMenuItem/classes/UIMenuItem.md) \| [`UIMenuItem`](../../items/UIMenuItem/classes/UIMenuItem.md)[] |

#### Returns

`void`

***

### addNewSubMenu()

```ts
addNewSubMenu(
   text, 
   description?, 
   inherit?): Menu;
```

Defined in: lib/fivem/ui/menu/Menu.d.ts:86

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `text` | `string` |
| `description?` | `string` |
| `inherit?` | `boolean` |

#### Returns

`Menu`

***

### addSubMenu()

```ts
addSubMenu(
   subMenuToAdd, 
   text, 
   description?, 
   inherit?): Menu;
```

Defined in: lib/fivem/ui/menu/Menu.d.ts:87

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `subMenuToAdd` | `Menu` |
| `text` | `string` |
| `description?` | `string` |
| `inherit?` | `boolean` |

#### Returns

`Menu`

***

### bindMenuToItem()

```ts
bindMenuToItem(menuToBind, itemToBindTo): void;
```

Defined in: lib/fivem/ui/menu/Menu.d.ts:90

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `menuToBind` | `Menu` |
| `itemToBindTo` | [`UIMenuItem`](../../items/UIMenuItem/classes/UIMenuItem.md) |

#### Returns

`void`

***

### clear()

```ts
clear(): void;
```

Defined in: lib/fivem/ui/menu/Menu.d.ts:93

#### Returns

`void`

***

### close()

```ts
close(): void;
```

Defined in: lib/fivem/ui/menu/Menu.d.ts:95

#### Returns

`void`

***

### goBack()

```ts
goBack(): void;
```

Defined in: lib/fivem/ui/menu/Menu.d.ts:102

#### Returns

`void`

***

### goDown()

```ts
goDown(): void;
```

Defined in: lib/fivem/ui/menu/Menu.d.ts:101

#### Returns

`void`

***

### goLeft()

```ts
goLeft(): void;
```

Defined in: lib/fivem/ui/menu/Menu.d.ts:96

#### Returns

`void`

***

### goRight()

```ts
goRight(): void;
```

Defined in: lib/fivem/ui/menu/Menu.d.ts:97

#### Returns

`void`

***

### goUp()

```ts
goUp(): void;
```

Defined in: lib/fivem/ui/menu/Menu.d.ts:100

#### Returns

`void`

***

### isMouseInBounds()

```ts
isMouseInBounds(
   pos, 
   size, 
   drawOffset?): boolean;
```

Defined in: lib/fivem/ui/menu/Menu.d.ts:99

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `pos` | [`Point`](../../../../utils/Point/classes/Point.md) |
| `size` | [`Size`](../../../../utils/Size/classes/Size.md) |
| `drawOffset?` | `boolean` |

#### Returns

`boolean`

***

### open()

```ts
open(): void;
```

Defined in: lib/fivem/ui/menu/Menu.d.ts:94

#### Returns

`void`

***

### refreshIndex()

```ts
refreshIndex(): void;
```

Defined in: lib/fivem/ui/menu/Menu.d.ts:92

#### Returns

`void`

***

### releaseMenuFromItem()

```ts
releaseMenuFromItem(releaseFrom): boolean;
```

Defined in: lib/fivem/ui/menu/Menu.d.ts:91

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `releaseFrom` | [`UIMenuItem`](../../items/UIMenuItem/classes/UIMenuItem.md) |

#### Returns

`boolean`

***

### removeItem()

```ts
removeItem(itemOrIndex): void;
```

Defined in: lib/fivem/ui/menu/Menu.d.ts:89

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `itemOrIndex` | `number` \| [`UIMenuItem`](../../items/UIMenuItem/classes/UIMenuItem.md) |

#### Returns

`void`

***

### selectItem()

```ts
selectItem(): void;
```

Defined in: lib/fivem/ui/menu/Menu.d.ts:98

#### Returns

`void`
