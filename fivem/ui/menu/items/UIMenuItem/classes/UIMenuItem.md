[@nativewrappers/fivem](../../../../../../README.md) / [fivem/ui/menu/items/UIMenuItem](../README.md) / UIMenuItem

# Class: UIMenuItem

Defined in: lib/fivem/ui/menu/items/UIMenuItem.d.ts:11

## Extended by

- [`UIMenuCheckboxItem`](../../UIMenuCheckboxItem/classes/UIMenuCheckboxItem.md)
- [`UIMenuListItem`](../../UIMenuListItem/classes/UIMenuListItem.md)
- [`UIMenuSeparatorItem`](../../UIMenuSeparatorItem/classes/UIMenuSeparatorItem.md)
- [`UIMenuSliderItem`](../../UIMenuSliderItem/classes/UIMenuSliderItem.md)

## Constructors

### Constructor

```ts
new UIMenuItem(text, description?): UIMenuItem;
```

Defined in: lib/fivem/ui/menu/items/UIMenuItem.d.ts:51

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `text` | `string` |
| `description?` | `string` |

#### Returns

`UIMenuItem`

## Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="activated"></a> `activated` | `readonly` | [`LiteEvent`](../../../../../utils/LiteEvent/classes/LiteEvent.md) | lib/fivem/ui/menu/items/UIMenuItem.d.ts:28 |
| <a id="badgeleft"></a> `badgeLeft` | `readonly` | [`Sprite`](../../../../Sprite/classes/Sprite.md) | lib/fivem/ui/menu/items/UIMenuItem.d.ts:38 |
| <a id="badgeright"></a> `badgeRight` | `readonly` | [`Sprite`](../../../../Sprite/classes/Sprite.md) | lib/fivem/ui/menu/items/UIMenuItem.d.ts:39 |
| <a id="enabled"></a> `enabled` | `public` | `boolean` | lib/fivem/ui/menu/items/UIMenuItem.d.ts:23 |
| <a id="hovered"></a> `hovered` | `public` | `boolean` | lib/fivem/ui/menu/items/UIMenuItem.d.ts:25 |
| <a id="id"></a> `id` | `readonly` | `string` | lib/fivem/ui/menu/items/UIMenuItem.d.ts:22 |
| <a id="labeltext"></a> `labelText` | `readonly` | [`Text`](../../../../Text/classes/Text.md) | lib/fivem/ui/menu/items/UIMenuItem.d.ts:40 |
| <a id="offset"></a> `offset` | `public` | [`Point`](../../../../../utils/Point/classes/Point.md) | lib/fivem/ui/menu/items/UIMenuItem.d.ts:26 |
| <a id="panelactivated"></a> `panelActivated` | `readonly` | [`LiteEvent`](../../../../../utils/LiteEvent/classes/LiteEvent.md) | lib/fivem/ui/menu/items/UIMenuItem.d.ts:29 |
| <a id="parent"></a> `parent?` | `public` | [`Menu`](../../../Menu/classes/Menu.md) | lib/fivem/ui/menu/items/UIMenuItem.d.ts:27 |
| <a id="rectangle"></a> `rectangle` | `readonly` | [`Rectangle`](../../../../Rectangle/classes/Rectangle.md) | lib/fivem/ui/menu/items/UIMenuItem.d.ts:35 |
| <a id="selected"></a> `selected` | `public` | `boolean` | lib/fivem/ui/menu/items/UIMenuItem.d.ts:24 |
| <a id="selectedsprite"></a> `selectedSprite` | `readonly` | [`Sprite`](../../../../Sprite/classes/Sprite.md) | lib/fivem/ui/menu/items/UIMenuItem.d.ts:37 |
| <a id="supportsdescription"></a> `supportsDescription` | `protected` | `boolean` | lib/fivem/ui/menu/items/UIMenuItem.d.ts:30 |
| <a id="supportsleftbadge"></a> `supportsLeftBadge` | `protected` | `boolean` | lib/fivem/ui/menu/items/UIMenuItem.d.ts:32 |
| <a id="supportspanels"></a> `supportsPanels` | `protected` | `boolean` | lib/fivem/ui/menu/items/UIMenuItem.d.ts:31 |
| <a id="supportsrightbadge"></a> `supportsRightBadge` | `protected` | `boolean` | lib/fivem/ui/menu/items/UIMenuItem.d.ts:33 |
| <a id="supportsrightlabel"></a> `supportsRightLabel` | `protected` | `boolean` | lib/fivem/ui/menu/items/UIMenuItem.d.ts:34 |
| <a id="text"></a> `text` | `readonly` | [`Text`](../../../../Text/classes/Text.md) | lib/fivem/ui/menu/items/UIMenuItem.d.ts:36 |
| <a id="defaultbackcolor"></a> `defaultBackColor` | `static` | `Color` | lib/fivem/ui/menu/items/UIMenuItem.d.ts:16 |
| <a id="defaultforecolor"></a> `defaultForeColor` | `static` | `Color` | lib/fivem/ui/menu/items/UIMenuItem.d.ts:19 |
| <a id="defaulthighlightedbackcolor"></a> `defaultHighlightedBackColor` | `static` | `Color` | lib/fivem/ui/menu/items/UIMenuItem.d.ts:17 |
| <a id="defaulthighlightedforecolor"></a> `defaultHighlightedForeColor` | `static` | `Color` | lib/fivem/ui/menu/items/UIMenuItem.d.ts:21 |
| <a id="defaulthoveredbackcolor"></a> `defaultHoveredBackColor` | `static` | `Color` | lib/fivem/ui/menu/items/UIMenuItem.d.ts:18 |
| <a id="defaulthoveredforecolor"></a> `defaultHoveredForeColor` | `static` | `Color` | lib/fivem/ui/menu/items/UIMenuItem.d.ts:20 |

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

***

### FormattedDescription

#### Get Signature

```ts
get FormattedDescription(): string;
```

Defined in: lib/fivem/ui/menu/items/UIMenuItem.d.ts:56

##### Returns

`string`

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

***

### IsMouseInBounds

#### Get Signature

```ts
get IsMouseInBounds(): boolean;
```

Defined in: lib/fivem/ui/menu/items/UIMenuItem.d.ts:71

##### Returns

`boolean`

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

***

### draw()

```ts
draw(): void;
```

Defined in: lib/fivem/ui/menu/items/UIMenuItem.d.ts:83

#### Returns

`void`

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

***

### fireEvent()

```ts
fireEvent(): void;
```

Defined in: lib/fivem/ui/menu/items/UIMenuItem.d.ts:78

#### Returns

`void`

***

### formatDescription()

```ts
formatDescription(): void;
```

Defined in: lib/fivem/ui/menu/items/UIMenuItem.d.ts:79

#### Returns

`void`

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

***

### setVerticalPosition()

```ts
setVerticalPosition(y): void;
```

Defined in: lib/fivem/ui/menu/items/UIMenuItem.d.ts:82

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `y` | `number` |

#### Returns

`void`

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
