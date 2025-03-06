[@nativewrappers/fivem](../../README.md) / [fivem](../README.md) / UIMenuSeparatorItem

# Class: UIMenuSeparatorItem

Defined in: fivem/ui/menu/items/UIMenuSeparatorItem.d.ts:2

## Extends

- [`UIMenuItem`](UIMenuItem.md)

## Constructors

### new UIMenuSeparatorItem()

```ts
new UIMenuSeparatorItem(text?): UIMenuSeparatorItem
```

Defined in: fivem/ui/menu/items/UIMenuSeparatorItem.d.ts:8

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `text`? | `string` |

#### Returns

[`UIMenuSeparatorItem`](UIMenuSeparatorItem.md)

#### Overrides

[`UIMenuItem`](UIMenuItem.md).[`constructor`](UIMenuItem.md#constructors)

## Properties

| Property | Modifier | Type | Overrides | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ | ------ |
| <a id="activated"></a> `activated` | `readonly` | [`LiteEvent`](LiteEvent.md) | - | [`UIMenuItem`](UIMenuItem.md).[`activated`](UIMenuItem.md#activated) | fivem/ui/menu/items/UIMenuItem.d.ts:22 |
| <a id="badgeleft"></a> `badgeLeft` | `readonly` | [`Sprite`](Sprite.md) | - | [`UIMenuItem`](UIMenuItem.md).[`badgeLeft`](UIMenuItem.md#badgeleft) | fivem/ui/menu/items/UIMenuItem.d.ts:32 |
| <a id="badgeright"></a> `badgeRight` | `readonly` | [`Sprite`](Sprite.md) | - | [`UIMenuItem`](UIMenuItem.md).[`badgeRight`](UIMenuItem.md#badgeright) | fivem/ui/menu/items/UIMenuItem.d.ts:33 |
| <a id="enabled"></a> `enabled` | `public` | `boolean` | - | [`UIMenuItem`](UIMenuItem.md).[`enabled`](UIMenuItem.md#enabled) | fivem/ui/menu/items/UIMenuItem.d.ts:17 |
| <a id="hovered"></a> `hovered` | `public` | `boolean` | - | [`UIMenuItem`](UIMenuItem.md).[`hovered`](UIMenuItem.md#hovered) | fivem/ui/menu/items/UIMenuItem.d.ts:19 |
| <a id="id"></a> `id` | `readonly` | `string` | - | [`UIMenuItem`](UIMenuItem.md).[`id`](UIMenuItem.md#id) | fivem/ui/menu/items/UIMenuItem.d.ts:16 |
| <a id="labeltext"></a> `labelText` | `readonly` | [`Text`](Text.md) | - | [`UIMenuItem`](UIMenuItem.md).[`labelText`](UIMenuItem.md#labeltext) | fivem/ui/menu/items/UIMenuItem.d.ts:34 |
| <a id="offset"></a> `offset` | `public` | [`Point`](Point.md) | - | [`UIMenuItem`](UIMenuItem.md).[`offset`](UIMenuItem.md#offset) | fivem/ui/menu/items/UIMenuItem.d.ts:20 |
| <a id="panelactivated"></a> `panelActivated` | `readonly` | [`LiteEvent`](LiteEvent.md) | - | [`UIMenuItem`](UIMenuItem.md).[`panelActivated`](UIMenuItem.md#panelactivated) | fivem/ui/menu/items/UIMenuItem.d.ts:23 |
| <a id="parent"></a> `parent?` | `public` | [`Menu`](Menu.md) | - | [`UIMenuItem`](UIMenuItem.md).[`parent`](UIMenuItem.md#parent) | fivem/ui/menu/items/UIMenuItem.d.ts:21 |
| <a id="rectangle"></a> `rectangle` | `readonly` | [`Rectangle`](Rectangle.md) | - | [`UIMenuItem`](UIMenuItem.md).[`rectangle`](UIMenuItem.md#rectangle) | fivem/ui/menu/items/UIMenuItem.d.ts:29 |
| <a id="selected"></a> `selected` | `public` | `boolean` | - | [`UIMenuItem`](UIMenuItem.md).[`selected`](UIMenuItem.md#selected) | fivem/ui/menu/items/UIMenuItem.d.ts:18 |
| <a id="selectedsprite"></a> `selectedSprite` | `readonly` | [`Sprite`](Sprite.md) | - | [`UIMenuItem`](UIMenuItem.md).[`selectedSprite`](UIMenuItem.md#selectedsprite) | fivem/ui/menu/items/UIMenuItem.d.ts:31 |
| <a id="supportsdescription"></a> `supportsDescription` | `protected` | `boolean` | [`UIMenuItem`](UIMenuItem.md).[`supportsDescription`](UIMenuItem.md#supportsdescription) | - | fivem/ui/menu/items/UIMenuSeparatorItem.d.ts:3 |
| <a id="supportsleftbadge"></a> `supportsLeftBadge` | `protected` | `boolean` | [`UIMenuItem`](UIMenuItem.md).[`supportsLeftBadge`](UIMenuItem.md#supportsleftbadge) | - | fivem/ui/menu/items/UIMenuSeparatorItem.d.ts:5 |
| <a id="supportspanels"></a> `supportsPanels` | `protected` | `boolean` | [`UIMenuItem`](UIMenuItem.md).[`supportsPanels`](UIMenuItem.md#supportspanels) | - | fivem/ui/menu/items/UIMenuSeparatorItem.d.ts:4 |
| <a id="supportsrightbadge"></a> `supportsRightBadge` | `protected` | `boolean` | [`UIMenuItem`](UIMenuItem.md).[`supportsRightBadge`](UIMenuItem.md#supportsrightbadge) | - | fivem/ui/menu/items/UIMenuSeparatorItem.d.ts:6 |
| <a id="supportsrightlabel"></a> `supportsRightLabel` | `protected` | `boolean` | [`UIMenuItem`](UIMenuItem.md).[`supportsRightLabel`](UIMenuItem.md#supportsrightlabel) | - | fivem/ui/menu/items/UIMenuSeparatorItem.d.ts:7 |
| <a id="text-1"></a> `text` | `readonly` | [`Text`](Text.md) | - | [`UIMenuItem`](UIMenuItem.md).[`text`](UIMenuItem.md#text-1) | fivem/ui/menu/items/UIMenuItem.d.ts:30 |
| <a id="defaultbackcolor"></a> `defaultBackColor` | `static` | `Color` | - | [`UIMenuItem`](UIMenuItem.md).[`defaultBackColor`](UIMenuItem.md#defaultbackcolor) | fivem/ui/menu/items/UIMenuItem.d.ts:10 |
| <a id="defaultforecolor"></a> `defaultForeColor` | `static` | `Color` | - | [`UIMenuItem`](UIMenuItem.md).[`defaultForeColor`](UIMenuItem.md#defaultforecolor) | fivem/ui/menu/items/UIMenuItem.d.ts:13 |
| <a id="defaulthighlightedbackcolor"></a> `defaultHighlightedBackColor` | `static` | `Color` | - | [`UIMenuItem`](UIMenuItem.md).[`defaultHighlightedBackColor`](UIMenuItem.md#defaulthighlightedbackcolor) | fivem/ui/menu/items/UIMenuItem.d.ts:11 |
| <a id="defaulthighlightedforecolor"></a> `defaultHighlightedForeColor` | `static` | `Color` | - | [`UIMenuItem`](UIMenuItem.md).[`defaultHighlightedForeColor`](UIMenuItem.md#defaulthighlightedforecolor) | fivem/ui/menu/items/UIMenuItem.d.ts:15 |
| <a id="defaulthoveredbackcolor"></a> `defaultHoveredBackColor` | `static` | `Color` | - | [`UIMenuItem`](UIMenuItem.md).[`defaultHoveredBackColor`](UIMenuItem.md#defaulthoveredbackcolor) | fivem/ui/menu/items/UIMenuItem.d.ts:12 |
| <a id="defaulthoveredforecolor"></a> `defaultHoveredForeColor` | `static` | `Color` | - | [`UIMenuItem`](UIMenuItem.md).[`defaultHoveredForeColor`](UIMenuItem.md#defaulthoveredforecolor) | fivem/ui/menu/items/UIMenuItem.d.ts:14 |

## Accessors

### BackColor

#### Get Signature

```ts
get BackColor(): Color
```

Defined in: fivem/ui/menu/items/UIMenuItem.d.ts:51

##### Returns

`Color`

#### Set Signature

```ts
set BackColor(value): void
```

Defined in: fivem/ui/menu/items/UIMenuItem.d.ts:52

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `Color` |

##### Returns

`void`

#### Inherited from

[`UIMenuItem`](UIMenuItem.md).[`BackColor`](UIMenuItem.md#backcolor)

***

### Description

#### Get Signature

```ts
get Description(): string
```

Defined in: fivem/ui/menu/items/UIMenuItem.d.ts:48

##### Returns

`string`

#### Set Signature

```ts
set Description(value): void
```

Defined in: fivem/ui/menu/items/UIMenuItem.d.ts:49

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `string` |

##### Returns

`void`

#### Inherited from

[`UIMenuItem`](UIMenuItem.md).[`Description`](UIMenuItem.md#description-1)

***

### ForeColor

#### Get Signature

```ts
get ForeColor(): Color
```

Defined in: fivem/ui/menu/items/UIMenuItem.d.ts:55

##### Returns

`Color`

#### Set Signature

```ts
set ForeColor(value): void
```

Defined in: fivem/ui/menu/items/UIMenuItem.d.ts:56

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `Color` |

##### Returns

`void`

#### Inherited from

[`UIMenuItem`](UIMenuItem.md).[`ForeColor`](UIMenuItem.md#forecolor)

***

### FormattedDescription

#### Get Signature

```ts
get FormattedDescription(): string
```

Defined in: fivem/ui/menu/items/UIMenuItem.d.ts:50

##### Returns

`string`

#### Inherited from

[`UIMenuItem`](UIMenuItem.md).[`FormattedDescription`](UIMenuItem.md#formatteddescription)

***

### HighlightedBackColor

#### Get Signature

```ts
get HighlightedBackColor(): Color
```

Defined in: fivem/ui/menu/items/UIMenuItem.d.ts:53

##### Returns

`Color`

#### Set Signature

```ts
set HighlightedBackColor(value): void
```

Defined in: fivem/ui/menu/items/UIMenuItem.d.ts:54

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `Color` |

##### Returns

`void`

#### Inherited from

[`UIMenuItem`](UIMenuItem.md).[`HighlightedBackColor`](UIMenuItem.md#highlightedbackcolor)

***

### HighlightedForeColor

#### Get Signature

```ts
get HighlightedForeColor(): Color
```

Defined in: fivem/ui/menu/items/UIMenuItem.d.ts:57

##### Returns

`Color`

#### Set Signature

```ts
set HighlightedForeColor(value): void
```

Defined in: fivem/ui/menu/items/UIMenuItem.d.ts:58

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `Color` |

##### Returns

`void`

#### Inherited from

[`UIMenuItem`](UIMenuItem.md).[`HighlightedForeColor`](UIMenuItem.md#highlightedforecolor)

***

### IsMouseInBounds

#### Get Signature

```ts
get IsMouseInBounds(): boolean
```

Defined in: fivem/ui/menu/items/UIMenuItem.d.ts:65

##### Returns

`boolean`

#### Inherited from

[`UIMenuItem`](UIMenuItem.md).[`IsMouseInBounds`](UIMenuItem.md#ismouseinbounds)

***

### LeftBadge

#### Get Signature

```ts
get LeftBadge(): BadgeStyle
```

Defined in: fivem/ui/menu/items/UIMenuItem.d.ts:59

##### Returns

[`BadgeStyle`](../enumerations/BadgeStyle.md)

#### Set Signature

```ts
set LeftBadge(value): void
```

Defined in: fivem/ui/menu/items/UIMenuItem.d.ts:60

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | [`BadgeStyle`](../enumerations/BadgeStyle.md) |

##### Returns

`void`

#### Inherited from

[`UIMenuItem`](UIMenuItem.md).[`LeftBadge`](UIMenuItem.md#leftbadge)

***

### Panels

#### Get Signature

```ts
get Panels(): AbstractUIMenuPanel[]
```

Defined in: fivem/ui/menu/items/UIMenuItem.d.ts:66

##### Returns

[`AbstractUIMenuPanel`](AbstractUIMenuPanel.md)[]

#### Set Signature

```ts
set Panels(value): void
```

Defined in: fivem/ui/menu/items/UIMenuItem.d.ts:67

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | [`AbstractUIMenuPanel`](AbstractUIMenuPanel.md)[] |

##### Returns

`void`

#### Inherited from

[`UIMenuItem`](UIMenuItem.md).[`Panels`](UIMenuItem.md#panels)

***

### RightBadge

#### Get Signature

```ts
get RightBadge(): BadgeStyle
```

Defined in: fivem/ui/menu/items/UIMenuItem.d.ts:61

##### Returns

[`BadgeStyle`](../enumerations/BadgeStyle.md)

#### Set Signature

```ts
set RightBadge(value): void
```

Defined in: fivem/ui/menu/items/UIMenuItem.d.ts:62

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | [`BadgeStyle`](../enumerations/BadgeStyle.md) |

##### Returns

`void`

#### Inherited from

[`UIMenuItem`](UIMenuItem.md).[`RightBadge`](UIMenuItem.md#rightbadge)

***

### RightLabel

#### Get Signature

```ts
get RightLabel(): string
```

Defined in: fivem/ui/menu/items/UIMenuItem.d.ts:63

##### Returns

`string`

#### Set Signature

```ts
set RightLabel(value): void
```

Defined in: fivem/ui/menu/items/UIMenuItem.d.ts:64

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `string` |

##### Returns

`void`

#### Inherited from

[`UIMenuItem`](UIMenuItem.md).[`RightLabel`](UIMenuItem.md#rightlabel)

***

### Text

#### Get Signature

```ts
get Text(): string
```

Defined in: fivem/ui/menu/items/UIMenuItem.d.ts:46

##### Returns

`string`

#### Set Signature

```ts
set Text(value): void
```

Defined in: fivem/ui/menu/items/UIMenuItem.d.ts:47

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `string` |

##### Returns

`void`

#### Inherited from

[`UIMenuItem`](UIMenuItem.md).[`Text`](UIMenuItem.md#text-2)

## Methods

### addEvent()

```ts
addEvent(event, ...args): void
```

Defined in: fivem/ui/menu/items/UIMenuItem.d.ts:71

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `string` |
| ...`args` | `unknown`[] |

#### Returns

`void`

#### Inherited from

[`UIMenuItem`](UIMenuItem.md).[`addEvent`](UIMenuItem.md#addevent)

***

### addPanel()

```ts
addPanel(panel): void
```

Defined in: fivem/ui/menu/items/UIMenuItem.d.ts:68

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `panel` | \| [`AbstractUIMenuPanel`](AbstractUIMenuPanel.md) \| [`AbstractUIMenuPanel`](AbstractUIMenuPanel.md)[] |

#### Returns

`void`

#### Inherited from

[`UIMenuItem`](UIMenuItem.md).[`addPanel`](UIMenuItem.md#addpanel)

***

### badgeToColor()

```ts
badgeToColor(badge): Color
```

Defined in: fivem/ui/menu/items/UIMenuItem.d.ts:75

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `badge` | [`BadgeStyle`](../enumerations/BadgeStyle.md) |

#### Returns

`Color`

#### Inherited from

[`UIMenuItem`](UIMenuItem.md).[`badgeToColor`](UIMenuItem.md#badgetocolor)

***

### badgeToTextureName()

```ts
badgeToTextureName(badge): string
```

Defined in: fivem/ui/menu/items/UIMenuItem.d.ts:74

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `badge` | [`BadgeStyle`](../enumerations/BadgeStyle.md) |

#### Returns

`string`

#### Inherited from

[`UIMenuItem`](UIMenuItem.md).[`badgeToTextureName`](UIMenuItem.md#badgetotexturename)

***

### draw()

```ts
draw(): void
```

Defined in: fivem/ui/menu/items/UIMenuSeparatorItem.d.ts:10

#### Returns

`void`

#### Overrides

[`UIMenuItem`](UIMenuItem.md).[`draw`](UIMenuItem.md#draw)

***

### findPanelIndex()

```ts
findPanelIndex(panel): number
```

Defined in: fivem/ui/menu/items/UIMenuItem.d.ts:69

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `panel` | [`AbstractUIMenuPanel`](AbstractUIMenuPanel.md) |

#### Returns

`number`

#### Inherited from

[`UIMenuItem`](UIMenuItem.md).[`findPanelIndex`](UIMenuItem.md#findpanelindex)

***

### fireEvent()

```ts
fireEvent(): void
```

Defined in: fivem/ui/menu/items/UIMenuItem.d.ts:72

#### Returns

`void`

#### Inherited from

[`UIMenuItem`](UIMenuItem.md).[`fireEvent`](UIMenuItem.md#fireevent)

***

### formatDescription()

```ts
formatDescription(): void
```

Defined in: fivem/ui/menu/items/UIMenuItem.d.ts:73

#### Returns

`void`

#### Inherited from

[`UIMenuItem`](UIMenuItem.md).[`formatDescription`](UIMenuItem.md#formatdescription)

***

### removePanel()

```ts
removePanel(panelOrIndex): void
```

Defined in: fivem/ui/menu/items/UIMenuItem.d.ts:70

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `panelOrIndex` | `number` \| [`AbstractUIMenuPanel`](AbstractUIMenuPanel.md) |

#### Returns

`void`

#### Inherited from

[`UIMenuItem`](UIMenuItem.md).[`removePanel`](UIMenuItem.md#removepanel)

***

### setVerticalPosition()

```ts
setVerticalPosition(y): void
```

Defined in: fivem/ui/menu/items/UIMenuSeparatorItem.d.ts:9

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `y` | `number` |

#### Returns

`void`

#### Overrides

[`UIMenuItem`](UIMenuItem.md).[`setVerticalPosition`](UIMenuItem.md#setverticalposition)

***

### badgeToTextureDict()

```ts
static badgeToTextureDict(badge): string
```

Defined in: fivem/ui/menu/items/UIMenuItem.d.ts:6

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `badge` | [`BadgeStyle`](../enumerations/BadgeStyle.md) |

#### Returns

`string`

#### Inherited from

[`UIMenuItem`](UIMenuItem.md).[`badgeToTextureDict`](UIMenuItem.md#badgetotexturedict)

***

### getBadgeSize()

```ts
static getBadgeSize(badge): Size
```

Defined in: fivem/ui/menu/items/UIMenuItem.d.ts:9

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `badge` | [`BadgeStyle`](../enumerations/BadgeStyle.md) |

#### Returns

[`Size`](Size.md)

#### Inherited from

[`UIMenuItem`](UIMenuItem.md).[`getBadgeSize`](UIMenuItem.md#getbadgesize)

***

### getBadgeSpriteHeightOffset()

```ts
static getBadgeSpriteHeightOffset(sprite): number
```

Defined in: fivem/ui/menu/items/UIMenuItem.d.ts:8

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `sprite` | [`Sprite`](Sprite.md) |

#### Returns

`number`

#### Inherited from

[`UIMenuItem`](UIMenuItem.md).[`getBadgeSpriteHeightOffset`](UIMenuItem.md#getbadgespriteheightoffset)

***

### getBadgeSpriteWidthOffset()

```ts
static getBadgeSpriteWidthOffset(sprite): number
```

Defined in: fivem/ui/menu/items/UIMenuItem.d.ts:7

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `sprite` | [`Sprite`](Sprite.md) |

#### Returns

`number`

#### Inherited from

[`UIMenuItem`](UIMenuItem.md).[`getBadgeSpriteWidthOffset`](UIMenuItem.md#getbadgespritewidthoffset)
