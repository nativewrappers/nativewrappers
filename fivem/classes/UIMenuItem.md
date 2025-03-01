[@nativewrappers/fivem](../../README.md) / [fivem](../README.md) / UIMenuItem

# Class: UIMenuItem

Defined in: fivem/ui/menu/items/UIMenuItem.d.ts:5

## Extended by

- [`UIMenuCheckboxItem`](UIMenuCheckboxItem.md)
- [`UIMenuListItem`](UIMenuListItem.md)
- [`UIMenuSeparatorItem`](UIMenuSeparatorItem.md)
- [`UIMenuSliderItem`](UIMenuSliderItem.md)

## Constructors

### new UIMenuItem()

```ts
new UIMenuItem(text, description?): UIMenuItem
```

Defined in: fivem/ui/menu/items/UIMenuItem.d.ts:45

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `text` | `string` |
| `description`? | `string` |

#### Returns

[`UIMenuItem`](UIMenuItem.md)

## Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="activated"></a> `activated` | `readonly` | [`LiteEvent`](LiteEvent.md) | fivem/ui/menu/items/UIMenuItem.d.ts:22 |
| <a id="badgeleft"></a> `badgeLeft` | `readonly` | [`Sprite`](Sprite.md) | fivem/ui/menu/items/UIMenuItem.d.ts:32 |
| <a id="badgeright"></a> `badgeRight` | `readonly` | [`Sprite`](Sprite.md) | fivem/ui/menu/items/UIMenuItem.d.ts:33 |
| <a id="enabled"></a> `enabled` | `public` | `boolean` | fivem/ui/menu/items/UIMenuItem.d.ts:17 |
| <a id="hovered"></a> `hovered` | `public` | `boolean` | fivem/ui/menu/items/UIMenuItem.d.ts:19 |
| <a id="id"></a> `id` | `readonly` | `string` | fivem/ui/menu/items/UIMenuItem.d.ts:16 |
| <a id="labeltext"></a> `labelText` | `readonly` | [`Text`](Text.md) | fivem/ui/menu/items/UIMenuItem.d.ts:34 |
| <a id="offset"></a> `offset` | `public` | [`Point`](Point.md) | fivem/ui/menu/items/UIMenuItem.d.ts:20 |
| <a id="panelactivated"></a> `panelActivated` | `readonly` | [`LiteEvent`](LiteEvent.md) | fivem/ui/menu/items/UIMenuItem.d.ts:23 |
| <a id="parent"></a> `parent?` | `public` | [`Menu`](Menu.md) | fivem/ui/menu/items/UIMenuItem.d.ts:21 |
| <a id="rectangle"></a> `rectangle` | `readonly` | [`Rectangle`](Rectangle.md) | fivem/ui/menu/items/UIMenuItem.d.ts:29 |
| <a id="selected"></a> `selected` | `public` | `boolean` | fivem/ui/menu/items/UIMenuItem.d.ts:18 |
| <a id="selectedsprite"></a> `selectedSprite` | `readonly` | [`Sprite`](Sprite.md) | fivem/ui/menu/items/UIMenuItem.d.ts:31 |
| <a id="supportsdescription"></a> `supportsDescription` | `protected` | `boolean` | fivem/ui/menu/items/UIMenuItem.d.ts:24 |
| <a id="supportsleftbadge"></a> `supportsLeftBadge` | `protected` | `boolean` | fivem/ui/menu/items/UIMenuItem.d.ts:26 |
| <a id="supportspanels"></a> `supportsPanels` | `protected` | `boolean` | fivem/ui/menu/items/UIMenuItem.d.ts:25 |
| <a id="supportsrightbadge"></a> `supportsRightBadge` | `protected` | `boolean` | fivem/ui/menu/items/UIMenuItem.d.ts:27 |
| <a id="supportsrightlabel"></a> `supportsRightLabel` | `protected` | `boolean` | fivem/ui/menu/items/UIMenuItem.d.ts:28 |
| <a id="text-1"></a> `text` | `readonly` | [`Text`](Text.md) | fivem/ui/menu/items/UIMenuItem.d.ts:30 |
| <a id="defaultbackcolor"></a> `defaultBackColor` | `static` | `Color` | fivem/ui/menu/items/UIMenuItem.d.ts:10 |
| <a id="defaultforecolor"></a> `defaultForeColor` | `static` | `Color` | fivem/ui/menu/items/UIMenuItem.d.ts:13 |
| <a id="defaulthighlightedbackcolor"></a> `defaultHighlightedBackColor` | `static` | `Color` | fivem/ui/menu/items/UIMenuItem.d.ts:11 |
| <a id="defaulthighlightedforecolor"></a> `defaultHighlightedForeColor` | `static` | `Color` | fivem/ui/menu/items/UIMenuItem.d.ts:15 |
| <a id="defaulthoveredbackcolor"></a> `defaultHoveredBackColor` | `static` | `Color` | fivem/ui/menu/items/UIMenuItem.d.ts:12 |
| <a id="defaulthoveredforecolor"></a> `defaultHoveredForeColor` | `static` | `Color` | fivem/ui/menu/items/UIMenuItem.d.ts:14 |

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

***

### FormattedDescription

#### Get Signature

```ts
get FormattedDescription(): string
```

Defined in: fivem/ui/menu/items/UIMenuItem.d.ts:50

##### Returns

`string`

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

***

### IsMouseInBounds

#### Get Signature

```ts
get IsMouseInBounds(): boolean
```

Defined in: fivem/ui/menu/items/UIMenuItem.d.ts:65

##### Returns

`boolean`

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

***

### draw()

```ts
draw(): void
```

Defined in: fivem/ui/menu/items/UIMenuItem.d.ts:77

#### Returns

`void`

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

***

### fireEvent()

```ts
fireEvent(): void
```

Defined in: fivem/ui/menu/items/UIMenuItem.d.ts:72

#### Returns

`void`

***

### formatDescription()

```ts
formatDescription(): void
```

Defined in: fivem/ui/menu/items/UIMenuItem.d.ts:73

#### Returns

`void`

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

***

### setVerticalPosition()

```ts
setVerticalPosition(y): void
```

Defined in: fivem/ui/menu/items/UIMenuItem.d.ts:76

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `y` | `number` |

#### Returns

`void`

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
