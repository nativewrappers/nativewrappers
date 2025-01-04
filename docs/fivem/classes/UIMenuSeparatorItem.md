[@nativewrappers/fivem](../../README.md) / [fivem](../README.md) / UIMenuSeparatorItem

# Class: UIMenuSeparatorItem

## Extends

- [`UIMenuItem`](UIMenuItem.md)

## Constructors

### new UIMenuSeparatorItem()

```ts
new UIMenuSeparatorItem(text?): UIMenuSeparatorItem
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `text`? | `string` |

#### Returns

[`UIMenuSeparatorItem`](UIMenuSeparatorItem.md)

#### Overrides

[`UIMenuItem`](UIMenuItem.md).[`constructor`](UIMenuItem.md#constructors)

#### Defined in

[src/fivem/ui/menu/items/UIMenuSeparatorItem.ts:12](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/menu/items/UIMenuSeparatorItem.ts#L12)

## Properties

| Property | Modifier | Type | Default value | Overrides | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ | ------ | ------ |
| `activated` | `readonly` | [`LiteEvent`](LiteEvent.md) | `undefined` | - | [`UIMenuItem`](UIMenuItem.md).`activated` | [src/fivem/ui/menu/items/UIMenuItem.ts:361](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/menu/items/UIMenuItem.ts#L361) |
| `badgeLeft` | `readonly` | [`Sprite`](Sprite.md) | `undefined` | - | [`UIMenuItem`](UIMenuItem.md).`badgeLeft` | [src/fivem/ui/menu/items/UIMenuItem.ts:374](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/menu/items/UIMenuItem.ts#L374) |
| `badgeRight` | `readonly` | [`Sprite`](Sprite.md) | `undefined` | - | [`UIMenuItem`](UIMenuItem.md).`badgeRight` | [src/fivem/ui/menu/items/UIMenuItem.ts:375](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/menu/items/UIMenuItem.ts#L375) |
| `enabled` | `public` | `boolean` | `true` | - | [`UIMenuItem`](UIMenuItem.md).`enabled` | [src/fivem/ui/menu/items/UIMenuItem.ts:354](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/menu/items/UIMenuItem.ts#L354) |
| `hovered` | `public` | `boolean` | `false` | - | [`UIMenuItem`](UIMenuItem.md).`hovered` | [src/fivem/ui/menu/items/UIMenuItem.ts:356](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/menu/items/UIMenuItem.ts#L356) |
| `id` | `readonly` | `string` | `undefined` | - | [`UIMenuItem`](UIMenuItem.md).`id` | [src/fivem/ui/menu/items/UIMenuItem.ts:352](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/menu/items/UIMenuItem.ts#L352) |
| `labelText` | `readonly` | [`Text`](Text.md) | `undefined` | - | [`UIMenuItem`](UIMenuItem.md).`labelText` | [src/fivem/ui/menu/items/UIMenuItem.ts:377](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/menu/items/UIMenuItem.ts#L377) |
| `offset` | `public` | [`Point`](Point.md) | `undefined` | - | [`UIMenuItem`](UIMenuItem.md).`offset` | [src/fivem/ui/menu/items/UIMenuItem.ts:358](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/menu/items/UIMenuItem.ts#L358) |
| `panelActivated` | `readonly` | [`LiteEvent`](LiteEvent.md) | `undefined` | - | [`UIMenuItem`](UIMenuItem.md).`panelActivated` | [src/fivem/ui/menu/items/UIMenuItem.ts:362](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/menu/items/UIMenuItem.ts#L362) |
| `parent?` | `public` | [`Menu`](Menu.md) | `undefined` | - | [`UIMenuItem`](UIMenuItem.md).`parent` | [src/fivem/ui/menu/items/UIMenuItem.ts:359](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/menu/items/UIMenuItem.ts#L359) |
| `rectangle` | `readonly` | [`Rectangle`](Rectangle.md) | `undefined` | - | [`UIMenuItem`](UIMenuItem.md).`rectangle` | [src/fivem/ui/menu/items/UIMenuItem.ts:370](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/menu/items/UIMenuItem.ts#L370) |
| `selected` | `public` | `boolean` | `false` | - | [`UIMenuItem`](UIMenuItem.md).`selected` | [src/fivem/ui/menu/items/UIMenuItem.ts:355](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/menu/items/UIMenuItem.ts#L355) |
| `selectedSprite` | `readonly` | [`Sprite`](Sprite.md) | `undefined` | - | [`UIMenuItem`](UIMenuItem.md).`selectedSprite` | [src/fivem/ui/menu/items/UIMenuItem.ts:372](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/menu/items/UIMenuItem.ts#L372) |
| `supportsDescription` | `protected` | `boolean` | `false` | [`UIMenuItem`](UIMenuItem.md).`supportsDescription` | - | [src/fivem/ui/menu/items/UIMenuSeparatorItem.ts:6](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/menu/items/UIMenuSeparatorItem.ts#L6) |
| `supportsLeftBadge` | `protected` | `boolean` | `false` | [`UIMenuItem`](UIMenuItem.md).`supportsLeftBadge` | - | [src/fivem/ui/menu/items/UIMenuSeparatorItem.ts:8](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/menu/items/UIMenuSeparatorItem.ts#L8) |
| `supportsPanels` | `protected` | `boolean` | `false` | [`UIMenuItem`](UIMenuItem.md).`supportsPanels` | - | [src/fivem/ui/menu/items/UIMenuSeparatorItem.ts:7](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/menu/items/UIMenuSeparatorItem.ts#L7) |
| `supportsRightBadge` | `protected` | `boolean` | `false` | [`UIMenuItem`](UIMenuItem.md).`supportsRightBadge` | - | [src/fivem/ui/menu/items/UIMenuSeparatorItem.ts:9](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/menu/items/UIMenuSeparatorItem.ts#L9) |
| `supportsRightLabel` | `protected` | `boolean` | `false` | [`UIMenuItem`](UIMenuItem.md).`supportsRightLabel` | - | [src/fivem/ui/menu/items/UIMenuSeparatorItem.ts:10](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/menu/items/UIMenuSeparatorItem.ts#L10) |
| `text` | `readonly` | [`Text`](Text.md) | `undefined` | - | [`UIMenuItem`](UIMenuItem.md).`text` | [src/fivem/ui/menu/items/UIMenuItem.ts:371](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/menu/items/UIMenuItem.ts#L371) |
| `defaultBackColor` | `static` | [`Color`](Color.md) | `Color.Transparent` | - | [`UIMenuItem`](UIMenuItem.md).`defaultBackColor` | [src/fivem/ui/menu/items/UIMenuItem.ts:344](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/menu/items/UIMenuItem.ts#L344) |
| `defaultForeColor` | `static` | [`Color`](Color.md) | `Color.WhiteSmoke` | - | [`UIMenuItem`](UIMenuItem.md).`defaultForeColor` | [src/fivem/ui/menu/items/UIMenuItem.ts:348](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/menu/items/UIMenuItem.ts#L348) |
| `defaultHighlightedBackColor` | `static` | [`Color`](Color.md) | `Color.White` | - | [`UIMenuItem`](UIMenuItem.md).`defaultHighlightedBackColor` | [src/fivem/ui/menu/items/UIMenuItem.ts:345](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/menu/items/UIMenuItem.ts#L345) |
| `defaultHighlightedForeColor` | `static` | [`Color`](Color.md) | `Color.Black` | - | [`UIMenuItem`](UIMenuItem.md).`defaultHighlightedForeColor` | [src/fivem/ui/menu/items/UIMenuItem.ts:350](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/menu/items/UIMenuItem.ts#L350) |
| `defaultHoveredBackColor` | `static` | [`Color`](Color.md) | `undefined` | - | [`UIMenuItem`](UIMenuItem.md).`defaultHoveredBackColor` | [src/fivem/ui/menu/items/UIMenuItem.ts:346](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/menu/items/UIMenuItem.ts#L346) |
| `defaultHoveredForeColor` | `static` | [`Color`](Color.md) | `UIMenuItem.defaultForeColor` | - | [`UIMenuItem`](UIMenuItem.md).`defaultHoveredForeColor` | [src/fivem/ui/menu/items/UIMenuItem.ts:349](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/menu/items/UIMenuItem.ts#L349) |

## Accessors

### BackColor

```ts
get BackColor(): Color
```

```ts
set BackColor(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | [`Color`](Color.md) |

#### Returns

[`Color`](Color.md)

#### Inherited from

[`UIMenuItem`](UIMenuItem.md).[`BackColor`](UIMenuItem.md#backcolor)

#### Defined in

[src/fivem/ui/menu/items/UIMenuItem.ts:457](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/menu/items/UIMenuItem.ts#L457)

***

### Description

```ts
get Description(): string
```

```ts
set Description(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `string` |

#### Returns

`string`

#### Inherited from

[`UIMenuItem`](UIMenuItem.md).[`Description`](UIMenuItem.md#description)

#### Defined in

[src/fivem/ui/menu/items/UIMenuItem.ts:438](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/menu/items/UIMenuItem.ts#L438)

***

### ForeColor

```ts
get ForeColor(): Color
```

```ts
set ForeColor(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | [`Color`](Color.md) |

#### Returns

[`Color`](Color.md)

#### Inherited from

[`UIMenuItem`](UIMenuItem.md).[`ForeColor`](UIMenuItem.md#forecolor)

#### Defined in

[src/fivem/ui/menu/items/UIMenuItem.ts:477](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/menu/items/UIMenuItem.ts#L477)

***

### FormattedDescription

```ts
get FormattedDescription(): string
```

#### Returns

`string`

#### Inherited from

[`UIMenuItem`](UIMenuItem.md).[`FormattedDescription`](UIMenuItem.md#formatteddescription)

#### Defined in

[src/fivem/ui/menu/items/UIMenuItem.ts:453](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/menu/items/UIMenuItem.ts#L453)

***

### HighlightedBackColor

```ts
get HighlightedBackColor(): Color
```

```ts
set HighlightedBackColor(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | [`Color`](Color.md) |

#### Returns

[`Color`](Color.md)

#### Inherited from

[`UIMenuItem`](UIMenuItem.md).[`HighlightedBackColor`](UIMenuItem.md#highlightedbackcolor)

#### Defined in

[src/fivem/ui/menu/items/UIMenuItem.ts:467](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/menu/items/UIMenuItem.ts#L467)

***

### HighlightedForeColor

```ts
get HighlightedForeColor(): Color
```

```ts
set HighlightedForeColor(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | [`Color`](Color.md) |

#### Returns

[`Color`](Color.md)

#### Inherited from

[`UIMenuItem`](UIMenuItem.md).[`HighlightedForeColor`](UIMenuItem.md#highlightedforecolor)

#### Defined in

[src/fivem/ui/menu/items/UIMenuItem.ts:487](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/menu/items/UIMenuItem.ts#L487)

***

### IsMouseInBounds

```ts
get IsMouseInBounds(): boolean
```

#### Returns

`boolean`

#### Inherited from

[`UIMenuItem`](UIMenuItem.md).[`IsMouseInBounds`](UIMenuItem.md#ismouseinbounds)

#### Defined in

[src/fivem/ui/menu/items/UIMenuItem.ts:543](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/menu/items/UIMenuItem.ts#L543)

***

### LeftBadge

```ts
get LeftBadge(): BadgeStyle
```

```ts
set LeftBadge(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | [`BadgeStyle`](../enumerations/BadgeStyle.md) |

#### Returns

[`BadgeStyle`](../enumerations/BadgeStyle.md)

#### Inherited from

[`UIMenuItem`](UIMenuItem.md).[`LeftBadge`](UIMenuItem.md#leftbadge)

#### Defined in

[src/fivem/ui/menu/items/UIMenuItem.ts:495](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/menu/items/UIMenuItem.ts#L495)

***

### Panels

```ts
get Panels(): AbstractUIMenuPanel[]
```

```ts
set Panels(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | [`AbstractUIMenuPanel`](AbstractUIMenuPanel.md)[] |

#### Returns

[`AbstractUIMenuPanel`](AbstractUIMenuPanel.md)[]

#### Inherited from

[`UIMenuItem`](UIMenuItem.md).[`Panels`](UIMenuItem.md#panels)

#### Defined in

[src/fivem/ui/menu/items/UIMenuItem.ts:549](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/menu/items/UIMenuItem.ts#L549)

***

### RightBadge

```ts
get RightBadge(): BadgeStyle
```

```ts
set RightBadge(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | [`BadgeStyle`](../enumerations/BadgeStyle.md) |

#### Returns

[`BadgeStyle`](../enumerations/BadgeStyle.md)

#### Inherited from

[`UIMenuItem`](UIMenuItem.md).[`RightBadge`](UIMenuItem.md#rightbadge)

#### Defined in

[src/fivem/ui/menu/items/UIMenuItem.ts:512](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/menu/items/UIMenuItem.ts#L512)

***

### RightLabel

```ts
get RightLabel(): string
```

```ts
set RightLabel(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `string` |

#### Returns

`string`

#### Inherited from

[`UIMenuItem`](UIMenuItem.md).[`RightLabel`](UIMenuItem.md#rightlabel)

#### Defined in

[src/fivem/ui/menu/items/UIMenuItem.ts:529](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/menu/items/UIMenuItem.ts#L529)

***

### Text

```ts
get Text(): string
```

```ts
set Text(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `string` |

#### Returns

`string`

#### Inherited from

[`UIMenuItem`](UIMenuItem.md).[`Text`](UIMenuItem.md#text)

#### Defined in

[src/fivem/ui/menu/items/UIMenuItem.ts:430](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/menu/items/UIMenuItem.ts#L430)

## Methods

### addEvent()

```ts
addEvent(event, ...args): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `string` |
| ...`args` | `unknown`[] |

#### Returns

`void`

#### Inherited from

[`UIMenuItem`](UIMenuItem.md).[`addEvent`](UIMenuItem.md#addevent)

#### Defined in

[src/fivem/ui/menu/items/UIMenuItem.ts:593](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/menu/items/UIMenuItem.ts#L593)

***

### addPanel()

```ts
addPanel(panel): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `panel` | [`AbstractUIMenuPanel`](AbstractUIMenuPanel.md) \| [`AbstractUIMenuPanel`](AbstractUIMenuPanel.md)[] |

#### Returns

`void`

#### Inherited from

[`UIMenuItem`](UIMenuItem.md).[`addPanel`](UIMenuItem.md#addpanel)

#### Defined in

[src/fivem/ui/menu/items/UIMenuItem.ts:563](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/menu/items/UIMenuItem.ts#L563)

***

### badgeToColor()

```ts
badgeToColor(badge): Color
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `badge` | [`BadgeStyle`](../enumerations/BadgeStyle.md) |

#### Returns

[`Color`](Color.md)

#### Inherited from

[`UIMenuItem`](UIMenuItem.md).[`badgeToColor`](UIMenuItem.md#badgetocolor)

#### Defined in

[src/fivem/ui/menu/items/UIMenuItem.ts:1007](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/menu/items/UIMenuItem.ts#L1007)

***

### badgeToTextureName()

```ts
badgeToTextureName(badge): string
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `badge` | [`BadgeStyle`](../enumerations/BadgeStyle.md) |

#### Returns

`string`

#### Inherited from

[`UIMenuItem`](UIMenuItem.md).[`badgeToTextureName`](UIMenuItem.md#badgetotexturename)

#### Defined in

[src/fivem/ui/menu/items/UIMenuItem.ts:644](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/menu/items/UIMenuItem.ts#L644)

***

### draw()

```ts
draw(): void
```

#### Returns

`void`

#### Overrides

[`UIMenuItem`](UIMenuItem.md).[`draw`](UIMenuItem.md#draw)

#### Defined in

[src/fivem/ui/menu/items/UIMenuSeparatorItem.ts:23](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/menu/items/UIMenuSeparatorItem.ts#L23)

***

### findPanelIndex()

```ts
findPanelIndex(panel): number
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `panel` | [`AbstractUIMenuPanel`](AbstractUIMenuPanel.md) |

#### Returns

`number`

#### Inherited from

[`UIMenuItem`](UIMenuItem.md).[`findPanelIndex`](UIMenuItem.md#findpanelindex)

#### Defined in

[src/fivem/ui/menu/items/UIMenuItem.ts:574](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/menu/items/UIMenuItem.ts#L574)

***

### fireEvent()

```ts
fireEvent(): void
```

#### Returns

`void`

#### Inherited from

[`UIMenuItem`](UIMenuItem.md).[`fireEvent`](UIMenuItem.md#fireevent)

#### Defined in

[src/fivem/ui/menu/items/UIMenuItem.ts:597](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/menu/items/UIMenuItem.ts#L597)

***

### formatDescription()

```ts
formatDescription(): void
```

#### Returns

`void`

#### Inherited from

[`UIMenuItem`](UIMenuItem.md).[`formatDescription`](UIMenuItem.md#formatdescription)

#### Defined in

[src/fivem/ui/menu/items/UIMenuItem.ts:603](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/menu/items/UIMenuItem.ts#L603)

***

### removePanel()

```ts
removePanel(panelOrIndex): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `panelOrIndex` | `number` \| [`AbstractUIMenuPanel`](AbstractUIMenuPanel.md) |

#### Returns

`void`

#### Inherited from

[`UIMenuItem`](UIMenuItem.md).[`removePanel`](UIMenuItem.md#removepanel)

#### Defined in

[src/fivem/ui/menu/items/UIMenuItem.ts:582](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/menu/items/UIMenuItem.ts#L582)

***

### setVerticalPosition()

```ts
setVerticalPosition(y): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `y` | `number` |

#### Returns

`void`

#### Overrides

[`UIMenuItem`](UIMenuItem.md).[`setVerticalPosition`](UIMenuItem.md#setverticalposition)

#### Defined in

[src/fivem/ui/menu/items/UIMenuSeparatorItem.ts:17](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/menu/items/UIMenuSeparatorItem.ts#L17)

***

### badgeToTextureDict()

```ts
static badgeToTextureDict(badge): string
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `badge` | [`BadgeStyle`](../enumerations/BadgeStyle.md) |

#### Returns

`string`

#### Inherited from

[`UIMenuItem`](UIMenuItem.md).[`badgeToTextureDict`](UIMenuItem.md#badgetotexturedict)

#### Defined in

[src/fivem/ui/menu/items/UIMenuItem.ts:7](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/menu/items/UIMenuItem.ts#L7)

***

### getBadgeSize()

```ts
static getBadgeSize(badge): Size
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `badge` | [`BadgeStyle`](../enumerations/BadgeStyle.md) |

#### Returns

[`Size`](Size.md)

#### Inherited from

[`UIMenuItem`](UIMenuItem.md).[`getBadgeSize`](UIMenuItem.md#getbadgesize)

#### Defined in

[src/fivem/ui/menu/items/UIMenuItem.ts:182](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/menu/items/UIMenuItem.ts#L182)

***

### getBadgeSpriteHeightOffset()

```ts
static getBadgeSpriteHeightOffset(sprite): number
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `sprite` | [`Sprite`](Sprite.md) |

#### Returns

`number`

#### Inherited from

[`UIMenuItem`](UIMenuItem.md).[`getBadgeSpriteHeightOffset`](UIMenuItem.md#getbadgespriteheightoffset)

#### Defined in

[src/fivem/ui/menu/items/UIMenuItem.ts:178](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/menu/items/UIMenuItem.ts#L178)

***

### getBadgeSpriteWidthOffset()

```ts
static getBadgeSpriteWidthOffset(sprite): number
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `sprite` | [`Sprite`](Sprite.md) |

#### Returns

`number`

#### Inherited from

[`UIMenuItem`](UIMenuItem.md).[`getBadgeSpriteWidthOffset`](UIMenuItem.md#getbadgespritewidthoffset)

#### Defined in

[src/fivem/ui/menu/items/UIMenuItem.ts:174](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/menu/items/UIMenuItem.ts#L174)
