[@nativewrappers/fivem](../../README.md) / [fivem](../README.md) / Menu

# Class: Menu

Defined in: [src/fivem/ui/menu/Menu.ts:29](https://github.com/nativewrappers/fivem/blob/b9a4f02a0f902a29cccc3c350b3c8379abeb4a1b/src/fivem/ui/menu/Menu.ts#L29)

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

Defined in: [src/fivem/ui/menu/Menu.ts:96](https://github.com/nativewrappers/fivem/blob/b9a4f02a0f902a29cccc3c350b3c8379abeb4a1b/src/fivem/ui/menu/Menu.ts#L96)

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

## Properties

| Property | Modifier | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="checkboxchange"></a> `checkboxChange` | `readonly` | [`LiteEvent`](LiteEvent.md) | `undefined` | [src/fivem/ui/menu/Menu.ts:56](https://github.com/nativewrappers/fivem/blob/b9a4f02a0f902a29cccc3c350b3c8379abeb4a1b/src/fivem/ui/menu/Menu.ts#L56) |
| <a id="children"></a> `children` | `public` | `Map`\<`string`, [`Menu`](Menu.md)\> | `undefined` | [src/fivem/ui/menu/Menu.ts:47](https://github.com/nativewrappers/fivem/blob/b9a4f02a0f902a29cccc3c350b3c8379abeb4a1b/src/fivem/ui/menu/Menu.ts#L47) |
| <a id="id"></a> `id` | `readonly` | `string` | `undefined` | [src/fivem/ui/menu/Menu.ts:40](https://github.com/nativewrappers/fivem/blob/b9a4f02a0f902a29cccc3c350b3c8379abeb4a1b/src/fivem/ui/menu/Menu.ts#L40) |
| <a id="indexchange"></a> `indexChange` | `readonly` | [`LiteEvent`](LiteEvent.md) | `undefined` | [src/fivem/ui/menu/Menu.ts:53](https://github.com/nativewrappers/fivem/blob/b9a4f02a0f902a29cccc3c350b3c8379abeb4a1b/src/fivem/ui/menu/Menu.ts#L53) |
| <a id="items"></a> `items` | `public` | [`UIMenuItem`](UIMenuItem.md)[] | `[]` | [src/fivem/ui/menu/Menu.ts:46](https://github.com/nativewrappers/fivem/blob/b9a4f02a0f902a29cccc3c350b3c8379abeb4a1b/src/fivem/ui/menu/Menu.ts#L46) |
| <a id="itemselect"></a> `itemSelect` | `readonly` | [`LiteEvent`](LiteEvent.md) | `undefined` | [src/fivem/ui/menu/Menu.ts:60](https://github.com/nativewrappers/fivem/blob/b9a4f02a0f902a29cccc3c350b3c8379abeb4a1b/src/fivem/ui/menu/Menu.ts#L60) |
| <a id="listchange"></a> `listChange` | `readonly` | [`LiteEvent`](LiteEvent.md) | `undefined` | [src/fivem/ui/menu/Menu.ts:54](https://github.com/nativewrappers/fivem/blob/b9a4f02a0f902a29cccc3c350b3c8379abeb4a1b/src/fivem/ui/menu/Menu.ts#L54) |
| <a id="listselect"></a> `listSelect` | `readonly` | [`LiteEvent`](LiteEvent.md) | `undefined` | [src/fivem/ui/menu/Menu.ts:58](https://github.com/nativewrappers/fivem/blob/b9a4f02a0f902a29cccc3c350b3c8379abeb4a1b/src/fivem/ui/menu/Menu.ts#L58) |
| <a id="menuchange"></a> `menuChange` | `readonly` | [`LiteEvent`](LiteEvent.md) | `undefined` | [src/fivem/ui/menu/Menu.ts:51](https://github.com/nativewrappers/fivem/blob/b9a4f02a0f902a29cccc3c350b3c8379abeb4a1b/src/fivem/ui/menu/Menu.ts#L51) |
| <a id="menuclose"></a> `menuClose` | `readonly` | [`LiteEvent`](LiteEvent.md) | `undefined` | [src/fivem/ui/menu/Menu.ts:50](https://github.com/nativewrappers/fivem/blob/b9a4f02a0f902a29cccc3c350b3c8379abeb4a1b/src/fivem/ui/menu/Menu.ts#L50) |
| <a id="menuopen"></a> `menuOpen` | `readonly` | [`LiteEvent`](LiteEvent.md) | `undefined` | [src/fivem/ui/menu/Menu.ts:49](https://github.com/nativewrappers/fivem/blob/b9a4f02a0f902a29cccc3c350b3c8379abeb4a1b/src/fivem/ui/menu/Menu.ts#L49) |
| <a id="panelactivated"></a> `panelActivated` | `readonly` | [`LiteEvent`](LiteEvent.md) | `undefined` | [src/fivem/ui/menu/Menu.ts:62](https://github.com/nativewrappers/fivem/blob/b9a4f02a0f902a29cccc3c350b3c8379abeb4a1b/src/fivem/ui/menu/Menu.ts#L62) |
| <a id="parentitem"></a> `parentItem?` | `public` | [`UIMenuItem`](UIMenuItem.md) | `undefined` | [src/fivem/ui/menu/Menu.ts:45](https://github.com/nativewrappers/fivem/blob/b9a4f02a0f902a29cccc3c350b3c8379abeb4a1b/src/fivem/ui/menu/Menu.ts#L45) |
| <a id="parentmenu"></a> `parentMenu?` | `public` | [`Menu`](Menu.md) | `undefined` | [src/fivem/ui/menu/Menu.ts:44](https://github.com/nativewrappers/fivem/blob/b9a4f02a0f902a29cccc3c350b3c8379abeb4a1b/src/fivem/ui/menu/Menu.ts#L44) |
| <a id="sliderchange"></a> `sliderChange` | `readonly` | [`LiteEvent`](LiteEvent.md) | `undefined` | [src/fivem/ui/menu/Menu.ts:55](https://github.com/nativewrappers/fivem/blob/b9a4f02a0f902a29cccc3c350b3c8379abeb4a1b/src/fivem/ui/menu/Menu.ts#L55) |
| <a id="sliderselect"></a> `sliderSelect` | `readonly` | [`LiteEvent`](LiteEvent.md) | `undefined` | [src/fivem/ui/menu/Menu.ts:59](https://github.com/nativewrappers/fivem/blob/b9a4f02a0f902a29cccc3c350b3c8379abeb4a1b/src/fivem/ui/menu/Menu.ts#L59) |
| <a id="visible"></a> `visible` | `public` | `boolean` | `false` | [src/fivem/ui/menu/Menu.ts:42](https://github.com/nativewrappers/fivem/blob/b9a4f02a0f902a29cccc3c350b3c8379abeb4a1b/src/fivem/ui/menu/Menu.ts#L42) |
| <a id="screenaspectratio"></a> `screenAspectRatio` | `static` | `number` | `undefined` | [src/fivem/ui/menu/Menu.ts:30](https://github.com/nativewrappers/fivem/blob/b9a4f02a0f902a29cccc3c350b3c8379abeb4a1b/src/fivem/ui/menu/Menu.ts#L30) |
| <a id="screenheight"></a> `screenHeight` | `static` | `number` | `1080` | [src/fivem/ui/menu/Menu.ts:33](https://github.com/nativewrappers/fivem/blob/b9a4f02a0f902a29cccc3c350b3c8379abeb4a1b/src/fivem/ui/menu/Menu.ts#L33) |
| <a id="screenresolution"></a> `screenResolution` | `static` | [`Size`](Size.md) | `undefined` | [src/fivem/ui/menu/Menu.ts:35](https://github.com/nativewrappers/fivem/blob/b9a4f02a0f902a29cccc3c350b3c8379abeb4a1b/src/fivem/ui/menu/Menu.ts#L35) |
| <a id="screenwidth"></a> `screenWidth` | `static` | `number` | `undefined` | [src/fivem/ui/menu/Menu.ts:34](https://github.com/nativewrappers/fivem/blob/b9a4f02a0f902a29cccc3c350b3c8379abeb4a1b/src/fivem/ui/menu/Menu.ts#L34) |

## Accessors

### Alignment

#### Get Signature

```ts
get Alignment(): MenuAlignment
```

Defined in: [src/fivem/ui/menu/Menu.ts:282](https://github.com/nativewrappers/fivem/blob/b9a4f02a0f902a29cccc3c350b3c8379abeb4a1b/src/fivem/ui/menu/Menu.ts#L282)

##### Returns

[`MenuAlignment`](../enumerations/MenuAlignment.md)

#### Set Signature

```ts
set Alignment(alignment): void
```

Defined in: [src/fivem/ui/menu/Menu.ts:286](https://github.com/nativewrappers/fivem/blob/b9a4f02a0f902a29cccc3c350b3c8379abeb4a1b/src/fivem/ui/menu/Menu.ts#L286)

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

Defined in: [src/fivem/ui/menu/Menu.ts:329](https://github.com/nativewrappers/fivem/blob/b9a4f02a0f902a29cccc3c350b3c8379abeb4a1b/src/fivem/ui/menu/Menu.ts#L329)

##### Returns

[`MenuControls`](MenuControls.md)

***

### CurrentItem

#### Get Signature

```ts
get CurrentItem(): UIMenuItem
```

Defined in: [src/fivem/ui/menu/Menu.ts:254](https://github.com/nativewrappers/fivem/blob/b9a4f02a0f902a29cccc3c350b3c8379abeb4a1b/src/fivem/ui/menu/Menu.ts#L254)

##### Returns

[`UIMenuItem`](UIMenuItem.md)

#### Set Signature

```ts
set CurrentItem(value): void
```

Defined in: [src/fivem/ui/menu/Menu.ts:258](https://github.com/nativewrappers/fivem/blob/b9a4f02a0f902a29cccc3c350b3c8379abeb4a1b/src/fivem/ui/menu/Menu.ts#L258)

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

Defined in: [src/fivem/ui/menu/Menu.ts:265](https://github.com/nativewrappers/fivem/blob/b9a4f02a0f902a29cccc3c350b3c8379abeb4a1b/src/fivem/ui/menu/Menu.ts#L265)

##### Returns

`number`

#### Set Signature

```ts
set CurrentSelection(v): void
```

Defined in: [src/fivem/ui/menu/Menu.ts:269](https://github.com/nativewrappers/fivem/blob/b9a4f02a0f902a29cccc3c350b3c8379abeb4a1b/src/fivem/ui/menu/Menu.ts#L269)

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

Defined in: [src/fivem/ui/menu/Menu.ts:325](https://github.com/nativewrappers/fivem/blob/b9a4f02a0f902a29cccc3c350b3c8379abeb4a1b/src/fivem/ui/menu/Menu.ts#L325)

##### Returns

[`Point`](Point.md)

***

### Settings

#### Get Signature

```ts
get Settings(): MenuSettings
```

Defined in: [src/fivem/ui/menu/Menu.ts:333](https://github.com/nativewrappers/fivem/blob/b9a4f02a0f902a29cccc3c350b3c8379abeb4a1b/src/fivem/ui/menu/Menu.ts#L333)

##### Returns

[`MenuSettings`](MenuSettings.md)

***

### Subtitle

#### Get Signature

```ts
get Subtitle(): string
```

Defined in: [src/fivem/ui/menu/Menu.ts:226](https://github.com/nativewrappers/fivem/blob/b9a4f02a0f902a29cccc3c350b3c8379abeb4a1b/src/fivem/ui/menu/Menu.ts#L226)

##### Returns

`string`

#### Set Signature

```ts
set Subtitle(text): void
```

Defined in: [src/fivem/ui/menu/Menu.ts:222](https://github.com/nativewrappers/fivem/blob/b9a4f02a0f902a29cccc3c350b3c8379abeb4a1b/src/fivem/ui/menu/Menu.ts#L222)

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

Defined in: [src/fivem/ui/menu/Menu.ts:250](https://github.com/nativewrappers/fivem/blob/b9a4f02a0f902a29cccc3c350b3c8379abeb4a1b/src/fivem/ui/menu/Menu.ts#L250)

##### Returns

[`Color`](Color.md)

#### Set Signature

```ts
set SubtitleBackColor(color): void
```

Defined in: [src/fivem/ui/menu/Menu.ts:246](https://github.com/nativewrappers/fivem/blob/b9a4f02a0f902a29cccc3c350b3c8379abeb4a1b/src/fivem/ui/menu/Menu.ts#L246)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `color` | [`Color`](Color.md) |

##### Returns

`void`

***

### SubtitleFont

#### Get Signature

```ts
get SubtitleFont(): Font
```

Defined in: [src/fivem/ui/menu/Menu.ts:234](https://github.com/nativewrappers/fivem/blob/b9a4f02a0f902a29cccc3c350b3c8379abeb4a1b/src/fivem/ui/menu/Menu.ts#L234)

##### Returns

[`Font`](../enumerations/Font.md)

#### Set Signature

```ts
set SubtitleFont(font): void
```

Defined in: [src/fivem/ui/menu/Menu.ts:230](https://github.com/nativewrappers/fivem/blob/b9a4f02a0f902a29cccc3c350b3c8379abeb4a1b/src/fivem/ui/menu/Menu.ts#L230)

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

Defined in: [src/fivem/ui/menu/Menu.ts:242](https://github.com/nativewrappers/fivem/blob/b9a4f02a0f902a29cccc3c350b3c8379abeb4a1b/src/fivem/ui/menu/Menu.ts#L242)

##### Returns

[`Color`](Color.md)

#### Set Signature

```ts
set SubtitleForeColor(color): void
```

Defined in: [src/fivem/ui/menu/Menu.ts:238](https://github.com/nativewrappers/fivem/blob/b9a4f02a0f902a29cccc3c350b3c8379abeb4a1b/src/fivem/ui/menu/Menu.ts#L238)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `color` | [`Color`](Color.md) |

##### Returns

`void`

***

### Title

#### Get Signature

```ts
get Title(): string
```

Defined in: [src/fivem/ui/menu/Menu.ts:210](https://github.com/nativewrappers/fivem/blob/b9a4f02a0f902a29cccc3c350b3c8379abeb4a1b/src/fivem/ui/menu/Menu.ts#L210)

##### Returns

`string`

#### Set Signature

```ts
set Title(text): void
```

Defined in: [src/fivem/ui/menu/Menu.ts:206](https://github.com/nativewrappers/fivem/blob/b9a4f02a0f902a29cccc3c350b3c8379abeb4a1b/src/fivem/ui/menu/Menu.ts#L206)

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

Defined in: [src/fivem/ui/menu/Menu.ts:214](https://github.com/nativewrappers/fivem/blob/b9a4f02a0f902a29cccc3c350b3c8379abeb4a1b/src/fivem/ui/menu/Menu.ts#L214)

##### Returns

[`Font`](../enumerations/Font.md)

#### Set Signature

```ts
set TitleFont(font): void
```

Defined in: [src/fivem/ui/menu/Menu.ts:218](https://github.com/nativewrappers/fivem/blob/b9a4f02a0f902a29cccc3c350b3c8379abeb4a1b/src/fivem/ui/menu/Menu.ts#L218)

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

Defined in: [src/fivem/ui/menu/Menu.ts:290](https://github.com/nativewrappers/fivem/blob/b9a4f02a0f902a29cccc3c350b3c8379abeb4a1b/src/fivem/ui/menu/Menu.ts#L290)

##### Returns

`number`

#### Set Signature

```ts
set WidthOffset(widthOffset): void
```

Defined in: [src/fivem/ui/menu/Menu.ts:294](https://github.com/nativewrappers/fivem/blob/b9a4f02a0f902a29cccc3c350b3c8379abeb4a1b/src/fivem/ui/menu/Menu.ts#L294)

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

Defined in: [src/fivem/ui/menu/Menu.ts:384](https://github.com/nativewrappers/fivem/blob/b9a4f02a0f902a29cccc3c350b3c8379abeb4a1b/src/fivem/ui/menu/Menu.ts#L384)

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

Defined in: [src/fivem/ui/menu/Menu.ts:337](https://github.com/nativewrappers/fivem/blob/b9a4f02a0f902a29cccc3c350b3c8379abeb4a1b/src/fivem/ui/menu/Menu.ts#L337)

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `text` | `string` | `undefined` |
| `description`? | `string` | `undefined` |
| `inherit`? | `boolean` | `true` |

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

Defined in: [src/fivem/ui/menu/Menu.ts:365](https://github.com/nativewrappers/fivem/blob/b9a4f02a0f902a29cccc3c350b3c8379abeb4a1b/src/fivem/ui/menu/Menu.ts#L365)

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `subMenuToAdd` | [`Menu`](Menu.md) | `undefined` |
| `text` | `string` | `undefined` |
| `description`? | `string` | `undefined` |
| `inherit`? | `boolean` | `true` |

#### Returns

[`Menu`](Menu.md)

***

### bindMenuToItem()

```ts
bindMenuToItem(menuToBind, itemToBindTo): void
```

Defined in: [src/fivem/ui/menu/Menu.ts:409](https://github.com/nativewrappers/fivem/blob/b9a4f02a0f902a29cccc3c350b3c8379abeb4a1b/src/fivem/ui/menu/Menu.ts#L409)

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

Defined in: [src/fivem/ui/menu/Menu.ts:452](https://github.com/nativewrappers/fivem/blob/b9a4f02a0f902a29cccc3c350b3c8379abeb4a1b/src/fivem/ui/menu/Menu.ts#L452)

#### Returns

`void`

***

### close()

```ts
close(): void
```

Defined in: [src/fivem/ui/menu/Menu.ts:472](https://github.com/nativewrappers/fivem/blob/b9a4f02a0f902a29cccc3c350b3c8379abeb4a1b/src/fivem/ui/menu/Menu.ts#L472)

#### Returns

`void`

***

### goBack()

```ts
goBack(): void
```

Defined in: [src/fivem/ui/menu/Menu.ts:663](https://github.com/nativewrappers/fivem/blob/b9a4f02a0f902a29cccc3c350b3c8379abeb4a1b/src/fivem/ui/menu/Menu.ts#L663)

#### Returns

`void`

***

### goDown()

```ts
goDown(): void
```

Defined in: [src/fivem/ui/menu/Menu.ts:628](https://github.com/nativewrappers/fivem/blob/b9a4f02a0f902a29cccc3c350b3c8379abeb4a1b/src/fivem/ui/menu/Menu.ts#L628)

#### Returns

`void`

***

### goLeft()

```ts
goLeft(): void
```

Defined in: [src/fivem/ui/menu/Menu.ts:482](https://github.com/nativewrappers/fivem/blob/b9a4f02a0f902a29cccc3c350b3c8379abeb4a1b/src/fivem/ui/menu/Menu.ts#L482)

#### Returns

`void`

***

### goRight()

```ts
goRight(): void
```

Defined in: [src/fivem/ui/menu/Menu.ts:509](https://github.com/nativewrappers/fivem/blob/b9a4f02a0f902a29cccc3c350b3c8379abeb4a1b/src/fivem/ui/menu/Menu.ts#L509)

#### Returns

`void`

***

### goUp()

```ts
goUp(): void
```

Defined in: [src/fivem/ui/menu/Menu.ts:592](https://github.com/nativewrappers/fivem/blob/b9a4f02a0f902a29cccc3c350b3c8379abeb4a1b/src/fivem/ui/menu/Menu.ts#L592)

#### Returns

`void`

***

### isMouseInBounds()

```ts
isMouseInBounds(
   pos, 
   size, 
   drawOffset): boolean
```

Defined in: [src/fivem/ui/menu/Menu.ts:573](https://github.com/nativewrappers/fivem/blob/b9a4f02a0f902a29cccc3c350b3c8379abeb4a1b/src/fivem/ui/menu/Menu.ts#L573)

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `pos` | [`Point`](Point.md) | `undefined` |
| `size` | [`Size`](Size.md) | `undefined` |
| `drawOffset` | `boolean` | `true` |

#### Returns

`boolean`

***

### open()

```ts
open(): void
```

Defined in: [src/fivem/ui/menu/Menu.ts:458](https://github.com/nativewrappers/fivem/blob/b9a4f02a0f902a29cccc3c350b3c8379abeb4a1b/src/fivem/ui/menu/Menu.ts#L458)

#### Returns

`void`

***

### refreshIndex()

```ts
refreshIndex(): void
```

Defined in: [src/fivem/ui/menu/Menu.ts:428](https://github.com/nativewrappers/fivem/blob/b9a4f02a0f902a29cccc3c350b3c8379abeb4a1b/src/fivem/ui/menu/Menu.ts#L428)

#### Returns

`void`

***

### releaseMenuFromItem()

```ts
releaseMenuFromItem(releaseFrom): boolean
```

Defined in: [src/fivem/ui/menu/Menu.ts:415](https://github.com/nativewrappers/fivem/blob/b9a4f02a0f902a29cccc3c350b3c8379abeb4a1b/src/fivem/ui/menu/Menu.ts#L415)

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

Defined in: [src/fivem/ui/menu/Menu.ts:400](https://github.com/nativewrappers/fivem/blob/b9a4f02a0f902a29cccc3c350b3c8379abeb4a1b/src/fivem/ui/menu/Menu.ts#L400)

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

Defined in: [src/fivem/ui/menu/Menu.ts:533](https://github.com/nativewrappers/fivem/blob/b9a4f02a0f902a29cccc3c350b3c8379abeb4a1b/src/fivem/ui/menu/Menu.ts#L533)

#### Returns

`void`
