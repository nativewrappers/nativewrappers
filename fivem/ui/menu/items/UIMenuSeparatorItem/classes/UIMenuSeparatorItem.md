[@nativewrappers/fivem](../../../../../../README.md) / [fivem/ui/menu/items/UIMenuSeparatorItem](../README.md) / UIMenuSeparatorItem

# Class: UIMenuSeparatorItem

Defined in: lib/fivem/ui/menu/items/UIMenuSeparatorItem.d.ts:2

## Extends

- [`UIMenuItem`](../../UIMenuItem/classes/UIMenuItem.md)

## Constructors

### Constructor

```ts
new UIMenuSeparatorItem(text?): UIMenuSeparatorItem;
```

Defined in: lib/fivem/ui/menu/items/UIMenuSeparatorItem.d.ts:8

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `text?` | `string` |

#### Returns

`UIMenuSeparatorItem`

#### Overrides

[`UIMenuItem`](../../UIMenuItem/classes/UIMenuItem.md).[`constructor`](../../UIMenuItem/classes/UIMenuItem.md#constructor)

## Properties

| Property | Modifier | Type | Overrides | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ | ------ |
| <a id="activated"></a> `activated` | `readonly` | [`LiteEvent`](../../../../../utils/LiteEvent/classes/LiteEvent.md) | - | [`UIMenuItem`](../../UIMenuItem/classes/UIMenuItem.md).[`activated`](../../UIMenuItem/classes/UIMenuItem.md#activated) | lib/fivem/ui/menu/items/UIMenuItem.d.ts:28 |
| <a id="badgeleft"></a> `badgeLeft` | `readonly` | [`Sprite`](../../../../Sprite/classes/Sprite.md) | - | [`UIMenuItem`](../../UIMenuItem/classes/UIMenuItem.md).[`badgeLeft`](../../UIMenuItem/classes/UIMenuItem.md#badgeleft) | lib/fivem/ui/menu/items/UIMenuItem.d.ts:38 |
| <a id="badgeright"></a> `badgeRight` | `readonly` | [`Sprite`](../../../../Sprite/classes/Sprite.md) | - | [`UIMenuItem`](../../UIMenuItem/classes/UIMenuItem.md).[`badgeRight`](../../UIMenuItem/classes/UIMenuItem.md#badgeright) | lib/fivem/ui/menu/items/UIMenuItem.d.ts:39 |
| <a id="enabled"></a> `enabled` | `public` | `boolean` | - | [`UIMenuItem`](../../UIMenuItem/classes/UIMenuItem.md).[`enabled`](../../UIMenuItem/classes/UIMenuItem.md#enabled) | lib/fivem/ui/menu/items/UIMenuItem.d.ts:23 |
| <a id="hovered"></a> `hovered` | `public` | `boolean` | - | [`UIMenuItem`](../../UIMenuItem/classes/UIMenuItem.md).[`hovered`](../../UIMenuItem/classes/UIMenuItem.md#hovered) | lib/fivem/ui/menu/items/UIMenuItem.d.ts:25 |
| <a id="id"></a> `id` | `readonly` | `string` | - | [`UIMenuItem`](../../UIMenuItem/classes/UIMenuItem.md).[`id`](../../UIMenuItem/classes/UIMenuItem.md#id) | lib/fivem/ui/menu/items/UIMenuItem.d.ts:22 |
| <a id="labeltext"></a> `labelText` | `readonly` | [`Text`](../../../../Text/classes/Text.md) | - | [`UIMenuItem`](../../UIMenuItem/classes/UIMenuItem.md).[`labelText`](../../UIMenuItem/classes/UIMenuItem.md#labeltext) | lib/fivem/ui/menu/items/UIMenuItem.d.ts:40 |
| <a id="offset"></a> `offset` | `public` | [`Point`](../../../../../utils/Point/classes/Point.md) | - | [`UIMenuItem`](../../UIMenuItem/classes/UIMenuItem.md).[`offset`](../../UIMenuItem/classes/UIMenuItem.md#offset) | lib/fivem/ui/menu/items/UIMenuItem.d.ts:26 |
| <a id="panelactivated"></a> `panelActivated` | `readonly` | [`LiteEvent`](../../../../../utils/LiteEvent/classes/LiteEvent.md) | - | [`UIMenuItem`](../../UIMenuItem/classes/UIMenuItem.md).[`panelActivated`](../../UIMenuItem/classes/UIMenuItem.md#panelactivated) | lib/fivem/ui/menu/items/UIMenuItem.d.ts:29 |
| <a id="parent"></a> `parent?` | `public` | [`Menu`](../../../Menu/classes/Menu.md) | - | [`UIMenuItem`](../../UIMenuItem/classes/UIMenuItem.md).[`parent`](../../UIMenuItem/classes/UIMenuItem.md#parent) | lib/fivem/ui/menu/items/UIMenuItem.d.ts:27 |
| <a id="rectangle"></a> `rectangle` | `readonly` | [`Rectangle`](../../../../Rectangle/classes/Rectangle.md) | - | [`UIMenuItem`](../../UIMenuItem/classes/UIMenuItem.md).[`rectangle`](../../UIMenuItem/classes/UIMenuItem.md#rectangle) | lib/fivem/ui/menu/items/UIMenuItem.d.ts:35 |
| <a id="selected"></a> `selected` | `public` | `boolean` | - | [`UIMenuItem`](../../UIMenuItem/classes/UIMenuItem.md).[`selected`](../../UIMenuItem/classes/UIMenuItem.md#selected) | lib/fivem/ui/menu/items/UIMenuItem.d.ts:24 |
| <a id="selectedsprite"></a> `selectedSprite` | `readonly` | [`Sprite`](../../../../Sprite/classes/Sprite.md) | - | [`UIMenuItem`](../../UIMenuItem/classes/UIMenuItem.md).[`selectedSprite`](../../UIMenuItem/classes/UIMenuItem.md#selectedsprite) | lib/fivem/ui/menu/items/UIMenuItem.d.ts:37 |
| <a id="supportsdescription"></a> `supportsDescription` | `protected` | `boolean` | [`UIMenuItem`](../../UIMenuItem/classes/UIMenuItem.md).[`supportsDescription`](../../UIMenuItem/classes/UIMenuItem.md#supportsdescription) | - | lib/fivem/ui/menu/items/UIMenuSeparatorItem.d.ts:3 |
| <a id="supportsleftbadge"></a> `supportsLeftBadge` | `protected` | `boolean` | [`UIMenuItem`](../../UIMenuItem/classes/UIMenuItem.md).[`supportsLeftBadge`](../../UIMenuItem/classes/UIMenuItem.md#supportsleftbadge) | - | lib/fivem/ui/menu/items/UIMenuSeparatorItem.d.ts:5 |
| <a id="supportspanels"></a> `supportsPanels` | `protected` | `boolean` | [`UIMenuItem`](../../UIMenuItem/classes/UIMenuItem.md).[`supportsPanels`](../../UIMenuItem/classes/UIMenuItem.md#supportspanels) | - | lib/fivem/ui/menu/items/UIMenuSeparatorItem.d.ts:4 |
| <a id="supportsrightbadge"></a> `supportsRightBadge` | `protected` | `boolean` | [`UIMenuItem`](../../UIMenuItem/classes/UIMenuItem.md).[`supportsRightBadge`](../../UIMenuItem/classes/UIMenuItem.md#supportsrightbadge) | - | lib/fivem/ui/menu/items/UIMenuSeparatorItem.d.ts:6 |
| <a id="supportsrightlabel"></a> `supportsRightLabel` | `protected` | `boolean` | [`UIMenuItem`](../../UIMenuItem/classes/UIMenuItem.md).[`supportsRightLabel`](../../UIMenuItem/classes/UIMenuItem.md#supportsrightlabel) | - | lib/fivem/ui/menu/items/UIMenuSeparatorItem.d.ts:7 |
| <a id="text"></a> `text` | `readonly` | [`Text`](../../../../Text/classes/Text.md) | - | [`UIMenuItem`](../../UIMenuItem/classes/UIMenuItem.md).[`text`](../../UIMenuItem/classes/UIMenuItem.md#text) | lib/fivem/ui/menu/items/UIMenuItem.d.ts:36 |
| <a id="defaultbackcolor"></a> `defaultBackColor` | `static` | `Color` | - | [`UIMenuItem`](../../UIMenuItem/classes/UIMenuItem.md).[`defaultBackColor`](../../UIMenuItem/classes/UIMenuItem.md#defaultbackcolor) | lib/fivem/ui/menu/items/UIMenuItem.d.ts:16 |
| <a id="defaultforecolor"></a> `defaultForeColor` | `static` | `Color` | - | [`UIMenuItem`](../../UIMenuItem/classes/UIMenuItem.md).[`defaultForeColor`](../../UIMenuItem/classes/UIMenuItem.md#defaultforecolor) | lib/fivem/ui/menu/items/UIMenuItem.d.ts:19 |
| <a id="defaulthighlightedbackcolor"></a> `defaultHighlightedBackColor` | `static` | `Color` | - | [`UIMenuItem`](../../UIMenuItem/classes/UIMenuItem.md).[`defaultHighlightedBackColor`](../../UIMenuItem/classes/UIMenuItem.md#defaulthighlightedbackcolor) | lib/fivem/ui/menu/items/UIMenuItem.d.ts:17 |
| <a id="defaulthighlightedforecolor"></a> `defaultHighlightedForeColor` | `static` | `Color` | - | [`UIMenuItem`](../../UIMenuItem/classes/UIMenuItem.md).[`defaultHighlightedForeColor`](../../UIMenuItem/classes/UIMenuItem.md#defaulthighlightedforecolor) | lib/fivem/ui/menu/items/UIMenuItem.d.ts:21 |
| <a id="defaulthoveredbackcolor"></a> `defaultHoveredBackColor` | `static` | `Color` | - | [`UIMenuItem`](../../UIMenuItem/classes/UIMenuItem.md).[`defaultHoveredBackColor`](../../UIMenuItem/classes/UIMenuItem.md#defaulthoveredbackcolor) | lib/fivem/ui/menu/items/UIMenuItem.d.ts:18 |
| <a id="defaulthoveredforecolor"></a> `defaultHoveredForeColor` | `static` | `Color` | - | [`UIMenuItem`](../../UIMenuItem/classes/UIMenuItem.md).[`defaultHoveredForeColor`](../../UIMenuItem/classes/UIMenuItem.md#defaulthoveredforecolor) | lib/fivem/ui/menu/items/UIMenuItem.d.ts:20 |

## Accessors

### BackColor

#### Get Signature

```ts
get BackColor(): Color;
```

Defined in: lib/fivem/ui/menu/items/UIMenuItem.d.ts:57

##### Returns

`Color`

#### Set Signature

```ts
set BackColor(value): void;
```

Defined in: lib/fivem/ui/menu/items/UIMenuItem.d.ts:58

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `Color` |

##### Returns

`void`

#### Inherited from

[`UIMenuItem`](../../UIMenuItem/classes/UIMenuItem.md).[`BackColor`](../../UIMenuItem/classes/UIMenuItem.md#backcolor)

***

### Description

#### Get Signature

```ts
get Description(): string;
```

Defined in: lib/fivem/ui/menu/items/UIMenuItem.d.ts:54

##### Returns

`string`

#### Set Signature

```ts
set Description(value): void;
```

Defined in: lib/fivem/ui/menu/items/UIMenuItem.d.ts:55

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `string` |

##### Returns

`void`

#### Inherited from

[`UIMenuItem`](../../UIMenuItem/classes/UIMenuItem.md).[`Description`](../../UIMenuItem/classes/UIMenuItem.md#description)

***

### ForeColor

#### Get Signature

```ts
get ForeColor(): Color;
```

Defined in: lib/fivem/ui/menu/items/UIMenuItem.d.ts:61

##### Returns

`Color`

#### Set Signature

```ts
set ForeColor(value): void;
```

Defined in: lib/fivem/ui/menu/items/UIMenuItem.d.ts:62

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `Color` |

##### Returns

`void`

#### Inherited from

[`UIMenuItem`](../../UIMenuItem/classes/UIMenuItem.md).[`ForeColor`](../../UIMenuItem/classes/UIMenuItem.md#forecolor)

***

### FormattedDescription

#### Get Signature

```ts
get FormattedDescription(): string;
```

Defined in: lib/fivem/ui/menu/items/UIMenuItem.d.ts:56

##### Returns

`string`

#### Inherited from

[`UIMenuItem`](../../UIMenuItem/classes/UIMenuItem.md).[`FormattedDescription`](../../UIMenuItem/classes/UIMenuItem.md#formatteddescription)

***

### HighlightedBackColor

#### Get Signature

```ts
get HighlightedBackColor(): Color;
```

Defined in: lib/fivem/ui/menu/items/UIMenuItem.d.ts:59

##### Returns

`Color`

#### Set Signature

```ts
set HighlightedBackColor(value): void;
```

Defined in: lib/fivem/ui/menu/items/UIMenuItem.d.ts:60

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `Color` |

##### Returns

`void`

#### Inherited from

[`UIMenuItem`](../../UIMenuItem/classes/UIMenuItem.md).[`HighlightedBackColor`](../../UIMenuItem/classes/UIMenuItem.md#highlightedbackcolor)

***

### HighlightedForeColor

#### Get Signature

```ts
get HighlightedForeColor(): Color;
```

Defined in: lib/fivem/ui/menu/items/UIMenuItem.d.ts:63

##### Returns

`Color`

#### Set Signature

```ts
set HighlightedForeColor(value): void;
```

Defined in: lib/fivem/ui/menu/items/UIMenuItem.d.ts:64

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `Color` |

##### Returns

`void`

#### Inherited from

[`UIMenuItem`](../../UIMenuItem/classes/UIMenuItem.md).[`HighlightedForeColor`](../../UIMenuItem/classes/UIMenuItem.md#highlightedforecolor)

***

### IsMouseInBounds

#### Get Signature

```ts
get IsMouseInBounds(): boolean;
```

Defined in: lib/fivem/ui/menu/items/UIMenuItem.d.ts:71

##### Returns

`boolean`

#### Inherited from

[`UIMenuItem`](../../UIMenuItem/classes/UIMenuItem.md).[`IsMouseInBounds`](../../UIMenuItem/classes/UIMenuItem.md#ismouseinbounds)

***

### LeftBadge

#### Get Signature

```ts
get LeftBadge(): BadgeStyle;
```

Defined in: lib/fivem/ui/menu/items/UIMenuItem.d.ts:65

##### Returns

[`BadgeStyle`](../../../../../enums/BadgeStyle/enumerations/BadgeStyle.md)

#### Set Signature

```ts
set LeftBadge(value): void;
```

Defined in: lib/fivem/ui/menu/items/UIMenuItem.d.ts:66

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | [`BadgeStyle`](../../../../../enums/BadgeStyle/enumerations/BadgeStyle.md) |

##### Returns

`void`

#### Inherited from

[`UIMenuItem`](../../UIMenuItem/classes/UIMenuItem.md).[`LeftBadge`](../../UIMenuItem/classes/UIMenuItem.md#leftbadge)

***

### Panels

#### Get Signature

```ts
get Panels(): AbstractUIMenuPanel[];
```

Defined in: lib/fivem/ui/menu/items/UIMenuItem.d.ts:72

##### Returns

[`AbstractUIMenuPanel`](../../panels/AbstractUIMenuPanel/classes/AbstractUIMenuPanel.md)[]

#### Set Signature

```ts
set Panels(value): void;
```

Defined in: lib/fivem/ui/menu/items/UIMenuItem.d.ts:73

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | [`AbstractUIMenuPanel`](../../panels/AbstractUIMenuPanel/classes/AbstractUIMenuPanel.md)[] |

##### Returns

`void`

#### Inherited from

[`UIMenuItem`](../../UIMenuItem/classes/UIMenuItem.md).[`Panels`](../../UIMenuItem/classes/UIMenuItem.md#panels)

***

### RightBadge

#### Get Signature

```ts
get RightBadge(): BadgeStyle;
```

Defined in: lib/fivem/ui/menu/items/UIMenuItem.d.ts:67

##### Returns

[`BadgeStyle`](../../../../../enums/BadgeStyle/enumerations/BadgeStyle.md)

#### Set Signature

```ts
set RightBadge(value): void;
```

Defined in: lib/fivem/ui/menu/items/UIMenuItem.d.ts:68

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | [`BadgeStyle`](../../../../../enums/BadgeStyle/enumerations/BadgeStyle.md) |

##### Returns

`void`

#### Inherited from

[`UIMenuItem`](../../UIMenuItem/classes/UIMenuItem.md).[`RightBadge`](../../UIMenuItem/classes/UIMenuItem.md#rightbadge)

***

### RightLabel

#### Get Signature

```ts
get RightLabel(): string;
```

Defined in: lib/fivem/ui/menu/items/UIMenuItem.d.ts:69

##### Returns

`string`

#### Set Signature

```ts
set RightLabel(value): void;
```

Defined in: lib/fivem/ui/menu/items/UIMenuItem.d.ts:70

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `string` |

##### Returns

`void`

#### Inherited from

[`UIMenuItem`](../../UIMenuItem/classes/UIMenuItem.md).[`RightLabel`](../../UIMenuItem/classes/UIMenuItem.md#rightlabel)

***

### Text

#### Get Signature

```ts
get Text(): string;
```

Defined in: lib/fivem/ui/menu/items/UIMenuItem.d.ts:52

##### Returns

`string`

#### Set Signature

```ts
set Text(value): void;
```

Defined in: lib/fivem/ui/menu/items/UIMenuItem.d.ts:53

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `string` |

##### Returns

`void`

#### Inherited from

[`UIMenuItem`](../../UIMenuItem/classes/UIMenuItem.md).[`Text`](../../UIMenuItem/classes/UIMenuItem.md#text-1)

## Methods

### addEvent()

```ts
addEvent(event, ...args): void;
```

Defined in: lib/fivem/ui/menu/items/UIMenuItem.d.ts:77

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `string` |
| ...`args` | `unknown`[] |

#### Returns

`void`

#### Inherited from

[`UIMenuItem`](../../UIMenuItem/classes/UIMenuItem.md).[`addEvent`](../../UIMenuItem/classes/UIMenuItem.md#addevent)

***

### addPanel()

```ts
addPanel(panel): void;
```

Defined in: lib/fivem/ui/menu/items/UIMenuItem.d.ts:74

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `panel` | \| [`AbstractUIMenuPanel`](../../panels/AbstractUIMenuPanel/classes/AbstractUIMenuPanel.md) \| [`AbstractUIMenuPanel`](../../panels/AbstractUIMenuPanel/classes/AbstractUIMenuPanel.md)[] |

#### Returns

`void`

#### Inherited from

[`UIMenuItem`](../../UIMenuItem/classes/UIMenuItem.md).[`addPanel`](../../UIMenuItem/classes/UIMenuItem.md#addpanel)

***

### badgeToColor()

```ts
badgeToColor(badge): Color;
```

Defined in: lib/fivem/ui/menu/items/UIMenuItem.d.ts:81

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `badge` | [`BadgeStyle`](../../../../../enums/BadgeStyle/enumerations/BadgeStyle.md) |

#### Returns

`Color`

#### Inherited from

[`UIMenuItem`](../../UIMenuItem/classes/UIMenuItem.md).[`badgeToColor`](../../UIMenuItem/classes/UIMenuItem.md#badgetocolor)

***

### badgeToTextureName()

```ts
badgeToTextureName(badge): string;
```

Defined in: lib/fivem/ui/menu/items/UIMenuItem.d.ts:80

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `badge` | [`BadgeStyle`](../../../../../enums/BadgeStyle/enumerations/BadgeStyle.md) |

#### Returns

`string`

#### Inherited from

[`UIMenuItem`](../../UIMenuItem/classes/UIMenuItem.md).[`badgeToTextureName`](../../UIMenuItem/classes/UIMenuItem.md#badgetotexturename)

***

### draw()

```ts
draw(): void;
```

Defined in: lib/fivem/ui/menu/items/UIMenuSeparatorItem.d.ts:10

#### Returns

`void`

#### Overrides

[`UIMenuItem`](../../UIMenuItem/classes/UIMenuItem.md).[`draw`](../../UIMenuItem/classes/UIMenuItem.md#draw)

***

### findPanelIndex()

```ts
findPanelIndex(panel): number;
```

Defined in: lib/fivem/ui/menu/items/UIMenuItem.d.ts:75

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `panel` | [`AbstractUIMenuPanel`](../../panels/AbstractUIMenuPanel/classes/AbstractUIMenuPanel.md) |

#### Returns

`number`

#### Inherited from

[`UIMenuItem`](../../UIMenuItem/classes/UIMenuItem.md).[`findPanelIndex`](../../UIMenuItem/classes/UIMenuItem.md#findpanelindex)

***

### fireEvent()

```ts
fireEvent(): void;
```

Defined in: lib/fivem/ui/menu/items/UIMenuItem.d.ts:78

#### Returns

`void`

#### Inherited from

[`UIMenuItem`](../../UIMenuItem/classes/UIMenuItem.md).[`fireEvent`](../../UIMenuItem/classes/UIMenuItem.md#fireevent)

***

### formatDescription()

```ts
formatDescription(): void;
```

Defined in: lib/fivem/ui/menu/items/UIMenuItem.d.ts:79

#### Returns

`void`

#### Inherited from

[`UIMenuItem`](../../UIMenuItem/classes/UIMenuItem.md).[`formatDescription`](../../UIMenuItem/classes/UIMenuItem.md#formatdescription)

***

### removePanel()

```ts
removePanel(panelOrIndex): void;
```

Defined in: lib/fivem/ui/menu/items/UIMenuItem.d.ts:76

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `panelOrIndex` | \| `number` \| [`AbstractUIMenuPanel`](../../panels/AbstractUIMenuPanel/classes/AbstractUIMenuPanel.md) |

#### Returns

`void`

#### Inherited from

[`UIMenuItem`](../../UIMenuItem/classes/UIMenuItem.md).[`removePanel`](../../UIMenuItem/classes/UIMenuItem.md#removepanel)

***

### setVerticalPosition()

```ts
setVerticalPosition(y): void;
```

Defined in: lib/fivem/ui/menu/items/UIMenuSeparatorItem.d.ts:9

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `y` | `number` |

#### Returns

`void`

#### Overrides

[`UIMenuItem`](../../UIMenuItem/classes/UIMenuItem.md).[`setVerticalPosition`](../../UIMenuItem/classes/UIMenuItem.md#setverticalposition)

***

### badgeToTextureDict()

```ts
static badgeToTextureDict(badge): string;
```

Defined in: lib/fivem/ui/menu/items/UIMenuItem.d.ts:12

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `badge` | [`BadgeStyle`](../../../../../enums/BadgeStyle/enumerations/BadgeStyle.md) |

#### Returns

`string`

#### Inherited from

[`UIMenuItem`](../../UIMenuItem/classes/UIMenuItem.md).[`badgeToTextureDict`](../../UIMenuItem/classes/UIMenuItem.md#badgetotexturedict)

***

### getBadgeSize()

```ts
static getBadgeSize(badge): Size;
```

Defined in: lib/fivem/ui/menu/items/UIMenuItem.d.ts:15

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `badge` | [`BadgeStyle`](../../../../../enums/BadgeStyle/enumerations/BadgeStyle.md) |

#### Returns

[`Size`](../../../../../utils/Size/classes/Size.md)

#### Inherited from

[`UIMenuItem`](../../UIMenuItem/classes/UIMenuItem.md).[`getBadgeSize`](../../UIMenuItem/classes/UIMenuItem.md#getbadgesize)

***

### getBadgeSpriteHeightOffset()

```ts
static getBadgeSpriteHeightOffset(sprite): number;
```

Defined in: lib/fivem/ui/menu/items/UIMenuItem.d.ts:14

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `sprite` | [`Sprite`](../../../../Sprite/classes/Sprite.md) |

#### Returns

`number`

#### Inherited from

[`UIMenuItem`](../../UIMenuItem/classes/UIMenuItem.md).[`getBadgeSpriteHeightOffset`](../../UIMenuItem/classes/UIMenuItem.md#getbadgespriteheightoffset)

***

### getBadgeSpriteWidthOffset()

```ts
static getBadgeSpriteWidthOffset(sprite): number;
```

Defined in: lib/fivem/ui/menu/items/UIMenuItem.d.ts:13

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `sprite` | [`Sprite`](../../../../Sprite/classes/Sprite.md) |

#### Returns

`number`

#### Inherited from

[`UIMenuItem`](../../UIMenuItem/classes/UIMenuItem.md).[`getBadgeSpriteWidthOffset`](../../UIMenuItem/classes/UIMenuItem.md#getbadgespritewidthoffset)
