[@nativewrappers/fivem](../../README.md) / [fivem](../README.md) / UIMenuItem

# Class: UIMenuItem

Defined in: [src/fivem/ui/menu/items/UIMenuItem.ts:6](https://github.com/nativewrappers/nativewrappers/blob/756c662f77d10717b10de50b84f2e02fa47719d1/src/fivem/ui/menu/items/UIMenuItem.ts#L6)

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

Defined in: [src/fivem/ui/menu/items/UIMenuItem.ts:394](https://github.com/nativewrappers/nativewrappers/blob/756c662f77d10717b10de50b84f2e02fa47719d1/src/fivem/ui/menu/items/UIMenuItem.ts#L394)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `text` | `string` |
| `description`? | `string` |

#### Returns

[`UIMenuItem`](UIMenuItem.md)

## Properties

| Property | Modifier | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="activated"></a> `activated` | `readonly` | [`LiteEvent`](LiteEvent.md) | `undefined` | [src/fivem/ui/menu/items/UIMenuItem.ts:361](https://github.com/nativewrappers/nativewrappers/blob/756c662f77d10717b10de50b84f2e02fa47719d1/src/fivem/ui/menu/items/UIMenuItem.ts#L361) |
| <a id="badgeleft"></a> `badgeLeft` | `readonly` | [`Sprite`](Sprite.md) | `undefined` | [src/fivem/ui/menu/items/UIMenuItem.ts:374](https://github.com/nativewrappers/nativewrappers/blob/756c662f77d10717b10de50b84f2e02fa47719d1/src/fivem/ui/menu/items/UIMenuItem.ts#L374) |
| <a id="badgeright"></a> `badgeRight` | `readonly` | [`Sprite`](Sprite.md) | `undefined` | [src/fivem/ui/menu/items/UIMenuItem.ts:375](https://github.com/nativewrappers/nativewrappers/blob/756c662f77d10717b10de50b84f2e02fa47719d1/src/fivem/ui/menu/items/UIMenuItem.ts#L375) |
| <a id="enabled"></a> `enabled` | `public` | `boolean` | `true` | [src/fivem/ui/menu/items/UIMenuItem.ts:354](https://github.com/nativewrappers/nativewrappers/blob/756c662f77d10717b10de50b84f2e02fa47719d1/src/fivem/ui/menu/items/UIMenuItem.ts#L354) |
| <a id="hovered"></a> `hovered` | `public` | `boolean` | `false` | [src/fivem/ui/menu/items/UIMenuItem.ts:356](https://github.com/nativewrappers/nativewrappers/blob/756c662f77d10717b10de50b84f2e02fa47719d1/src/fivem/ui/menu/items/UIMenuItem.ts#L356) |
| <a id="id"></a> `id` | `readonly` | `string` | `undefined` | [src/fivem/ui/menu/items/UIMenuItem.ts:352](https://github.com/nativewrappers/nativewrappers/blob/756c662f77d10717b10de50b84f2e02fa47719d1/src/fivem/ui/menu/items/UIMenuItem.ts#L352) |
| <a id="labeltext"></a> `labelText` | `readonly` | [`Text`](Text.md) | `undefined` | [src/fivem/ui/menu/items/UIMenuItem.ts:377](https://github.com/nativewrappers/nativewrappers/blob/756c662f77d10717b10de50b84f2e02fa47719d1/src/fivem/ui/menu/items/UIMenuItem.ts#L377) |
| <a id="offset"></a> `offset` | `public` | [`Point`](Point.md) | `undefined` | [src/fivem/ui/menu/items/UIMenuItem.ts:358](https://github.com/nativewrappers/nativewrappers/blob/756c662f77d10717b10de50b84f2e02fa47719d1/src/fivem/ui/menu/items/UIMenuItem.ts#L358) |
| <a id="panelactivated"></a> `panelActivated` | `readonly` | [`LiteEvent`](LiteEvent.md) | `undefined` | [src/fivem/ui/menu/items/UIMenuItem.ts:362](https://github.com/nativewrappers/nativewrappers/blob/756c662f77d10717b10de50b84f2e02fa47719d1/src/fivem/ui/menu/items/UIMenuItem.ts#L362) |
| <a id="parent"></a> `parent?` | `public` | [`Menu`](Menu.md) | `undefined` | [src/fivem/ui/menu/items/UIMenuItem.ts:359](https://github.com/nativewrappers/nativewrappers/blob/756c662f77d10717b10de50b84f2e02fa47719d1/src/fivem/ui/menu/items/UIMenuItem.ts#L359) |
| <a id="rectangle"></a> `rectangle` | `readonly` | [`Rectangle`](Rectangle.md) | `undefined` | [src/fivem/ui/menu/items/UIMenuItem.ts:370](https://github.com/nativewrappers/nativewrappers/blob/756c662f77d10717b10de50b84f2e02fa47719d1/src/fivem/ui/menu/items/UIMenuItem.ts#L370) |
| <a id="selected"></a> `selected` | `public` | `boolean` | `false` | [src/fivem/ui/menu/items/UIMenuItem.ts:355](https://github.com/nativewrappers/nativewrappers/blob/756c662f77d10717b10de50b84f2e02fa47719d1/src/fivem/ui/menu/items/UIMenuItem.ts#L355) |
| <a id="selectedsprite"></a> `selectedSprite` | `readonly` | [`Sprite`](Sprite.md) | `undefined` | [src/fivem/ui/menu/items/UIMenuItem.ts:372](https://github.com/nativewrappers/nativewrappers/blob/756c662f77d10717b10de50b84f2e02fa47719d1/src/fivem/ui/menu/items/UIMenuItem.ts#L372) |
| <a id="supportsdescription"></a> `supportsDescription` | `protected` | `boolean` | `true` | [src/fivem/ui/menu/items/UIMenuItem.ts:364](https://github.com/nativewrappers/nativewrappers/blob/756c662f77d10717b10de50b84f2e02fa47719d1/src/fivem/ui/menu/items/UIMenuItem.ts#L364) |
| <a id="supportsleftbadge"></a> `supportsLeftBadge` | `protected` | `boolean` | `true` | [src/fivem/ui/menu/items/UIMenuItem.ts:366](https://github.com/nativewrappers/nativewrappers/blob/756c662f77d10717b10de50b84f2e02fa47719d1/src/fivem/ui/menu/items/UIMenuItem.ts#L366) |
| <a id="supportspanels"></a> `supportsPanels` | `protected` | `boolean` | `true` | [src/fivem/ui/menu/items/UIMenuItem.ts:365](https://github.com/nativewrappers/nativewrappers/blob/756c662f77d10717b10de50b84f2e02fa47719d1/src/fivem/ui/menu/items/UIMenuItem.ts#L365) |
| <a id="supportsrightbadge"></a> `supportsRightBadge` | `protected` | `boolean` | `true` | [src/fivem/ui/menu/items/UIMenuItem.ts:367](https://github.com/nativewrappers/nativewrappers/blob/756c662f77d10717b10de50b84f2e02fa47719d1/src/fivem/ui/menu/items/UIMenuItem.ts#L367) |
| <a id="supportsrightlabel"></a> `supportsRightLabel` | `protected` | `boolean` | `true` | [src/fivem/ui/menu/items/UIMenuItem.ts:368](https://github.com/nativewrappers/nativewrappers/blob/756c662f77d10717b10de50b84f2e02fa47719d1/src/fivem/ui/menu/items/UIMenuItem.ts#L368) |
| <a id="text-1"></a> `text` | `readonly` | [`Text`](Text.md) | `undefined` | [src/fivem/ui/menu/items/UIMenuItem.ts:371](https://github.com/nativewrappers/nativewrappers/blob/756c662f77d10717b10de50b84f2e02fa47719d1/src/fivem/ui/menu/items/UIMenuItem.ts#L371) |
| <a id="defaultbackcolor"></a> `defaultBackColor` | `static` | [`Color`](Color.md) | `Color.Transparent` | [src/fivem/ui/menu/items/UIMenuItem.ts:344](https://github.com/nativewrappers/nativewrappers/blob/756c662f77d10717b10de50b84f2e02fa47719d1/src/fivem/ui/menu/items/UIMenuItem.ts#L344) |
| <a id="defaultforecolor"></a> `defaultForeColor` | `static` | [`Color`](Color.md) | `Color.WhiteSmoke` | [src/fivem/ui/menu/items/UIMenuItem.ts:348](https://github.com/nativewrappers/nativewrappers/blob/756c662f77d10717b10de50b84f2e02fa47719d1/src/fivem/ui/menu/items/UIMenuItem.ts#L348) |
| <a id="defaulthighlightedbackcolor"></a> `defaultHighlightedBackColor` | `static` | [`Color`](Color.md) | `Color.White` | [src/fivem/ui/menu/items/UIMenuItem.ts:345](https://github.com/nativewrappers/nativewrappers/blob/756c662f77d10717b10de50b84f2e02fa47719d1/src/fivem/ui/menu/items/UIMenuItem.ts#L345) |
| <a id="defaulthighlightedforecolor"></a> `defaultHighlightedForeColor` | `static` | [`Color`](Color.md) | `Color.Black` | [src/fivem/ui/menu/items/UIMenuItem.ts:350](https://github.com/nativewrappers/nativewrappers/blob/756c662f77d10717b10de50b84f2e02fa47719d1/src/fivem/ui/menu/items/UIMenuItem.ts#L350) |
| <a id="defaulthoveredbackcolor"></a> `defaultHoveredBackColor` | `static` | [`Color`](Color.md) | `undefined` | [src/fivem/ui/menu/items/UIMenuItem.ts:346](https://github.com/nativewrappers/nativewrappers/blob/756c662f77d10717b10de50b84f2e02fa47719d1/src/fivem/ui/menu/items/UIMenuItem.ts#L346) |
| <a id="defaulthoveredforecolor"></a> `defaultHoveredForeColor` | `static` | [`Color`](Color.md) | `UIMenuItem.defaultForeColor` | [src/fivem/ui/menu/items/UIMenuItem.ts:349](https://github.com/nativewrappers/nativewrappers/blob/756c662f77d10717b10de50b84f2e02fa47719d1/src/fivem/ui/menu/items/UIMenuItem.ts#L349) |

## Accessors

### BackColor

#### Get Signature

```ts
get BackColor(): Color
```

Defined in: [src/fivem/ui/menu/items/UIMenuItem.ts:457](https://github.com/nativewrappers/nativewrappers/blob/756c662f77d10717b10de50b84f2e02fa47719d1/src/fivem/ui/menu/items/UIMenuItem.ts#L457)

##### Returns

[`Color`](Color.md)

#### Set Signature

```ts
set BackColor(value): void
```

Defined in: [src/fivem/ui/menu/items/UIMenuItem.ts:461](https://github.com/nativewrappers/nativewrappers/blob/756c662f77d10717b10de50b84f2e02fa47719d1/src/fivem/ui/menu/items/UIMenuItem.ts#L461)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | [`Color`](Color.md) |

##### Returns

`void`

***

### Description

#### Get Signature

```ts
get Description(): string
```

Defined in: [src/fivem/ui/menu/items/UIMenuItem.ts:438](https://github.com/nativewrappers/nativewrappers/blob/756c662f77d10717b10de50b84f2e02fa47719d1/src/fivem/ui/menu/items/UIMenuItem.ts#L438)

##### Returns

`string`

#### Set Signature

```ts
set Description(value): void
```

Defined in: [src/fivem/ui/menu/items/UIMenuItem.ts:445](https://github.com/nativewrappers/nativewrappers/blob/756c662f77d10717b10de50b84f2e02fa47719d1/src/fivem/ui/menu/items/UIMenuItem.ts#L445)

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

Defined in: [src/fivem/ui/menu/items/UIMenuItem.ts:477](https://github.com/nativewrappers/nativewrappers/blob/756c662f77d10717b10de50b84f2e02fa47719d1/src/fivem/ui/menu/items/UIMenuItem.ts#L477)

##### Returns

[`Color`](Color.md)

#### Set Signature

```ts
set ForeColor(value): void
```

Defined in: [src/fivem/ui/menu/items/UIMenuItem.ts:481](https://github.com/nativewrappers/nativewrappers/blob/756c662f77d10717b10de50b84f2e02fa47719d1/src/fivem/ui/menu/items/UIMenuItem.ts#L481)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | [`Color`](Color.md) |

##### Returns

`void`

***

### FormattedDescription

#### Get Signature

```ts
get FormattedDescription(): string
```

Defined in: [src/fivem/ui/menu/items/UIMenuItem.ts:453](https://github.com/nativewrappers/nativewrappers/blob/756c662f77d10717b10de50b84f2e02fa47719d1/src/fivem/ui/menu/items/UIMenuItem.ts#L453)

##### Returns

`string`

***

### HighlightedBackColor

#### Get Signature

```ts
get HighlightedBackColor(): Color
```

Defined in: [src/fivem/ui/menu/items/UIMenuItem.ts:467](https://github.com/nativewrappers/nativewrappers/blob/756c662f77d10717b10de50b84f2e02fa47719d1/src/fivem/ui/menu/items/UIMenuItem.ts#L467)

##### Returns

[`Color`](Color.md)

#### Set Signature

```ts
set HighlightedBackColor(value): void
```

Defined in: [src/fivem/ui/menu/items/UIMenuItem.ts:471](https://github.com/nativewrappers/nativewrappers/blob/756c662f77d10717b10de50b84f2e02fa47719d1/src/fivem/ui/menu/items/UIMenuItem.ts#L471)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | [`Color`](Color.md) |

##### Returns

`void`

***

### HighlightedForeColor

#### Get Signature

```ts
get HighlightedForeColor(): Color
```

Defined in: [src/fivem/ui/menu/items/UIMenuItem.ts:487](https://github.com/nativewrappers/nativewrappers/blob/756c662f77d10717b10de50b84f2e02fa47719d1/src/fivem/ui/menu/items/UIMenuItem.ts#L487)

##### Returns

[`Color`](Color.md)

#### Set Signature

```ts
set HighlightedForeColor(value): void
```

Defined in: [src/fivem/ui/menu/items/UIMenuItem.ts:491](https://github.com/nativewrappers/nativewrappers/blob/756c662f77d10717b10de50b84f2e02fa47719d1/src/fivem/ui/menu/items/UIMenuItem.ts#L491)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | [`Color`](Color.md) |

##### Returns

`void`

***

### IsMouseInBounds

#### Get Signature

```ts
get IsMouseInBounds(): boolean
```

Defined in: [src/fivem/ui/menu/items/UIMenuItem.ts:543](https://github.com/nativewrappers/nativewrappers/blob/756c662f77d10717b10de50b84f2e02fa47719d1/src/fivem/ui/menu/items/UIMenuItem.ts#L543)

##### Returns

`boolean`

***

### LeftBadge

#### Get Signature

```ts
get LeftBadge(): BadgeStyle
```

Defined in: [src/fivem/ui/menu/items/UIMenuItem.ts:495](https://github.com/nativewrappers/nativewrappers/blob/756c662f77d10717b10de50b84f2e02fa47719d1/src/fivem/ui/menu/items/UIMenuItem.ts#L495)

##### Returns

[`BadgeStyle`](../enumerations/BadgeStyle.md)

#### Set Signature

```ts
set LeftBadge(value): void
```

Defined in: [src/fivem/ui/menu/items/UIMenuItem.ts:502](https://github.com/nativewrappers/nativewrappers/blob/756c662f77d10717b10de50b84f2e02fa47719d1/src/fivem/ui/menu/items/UIMenuItem.ts#L502)

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

Defined in: [src/fivem/ui/menu/items/UIMenuItem.ts:549](https://github.com/nativewrappers/nativewrappers/blob/756c662f77d10717b10de50b84f2e02fa47719d1/src/fivem/ui/menu/items/UIMenuItem.ts#L549)

##### Returns

[`AbstractUIMenuPanel`](AbstractUIMenuPanel.md)[]

#### Set Signature

```ts
set Panels(value): void
```

Defined in: [src/fivem/ui/menu/items/UIMenuItem.ts:556](https://github.com/nativewrappers/nativewrappers/blob/756c662f77d10717b10de50b84f2e02fa47719d1/src/fivem/ui/menu/items/UIMenuItem.ts#L556)

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

Defined in: [src/fivem/ui/menu/items/UIMenuItem.ts:512](https://github.com/nativewrappers/nativewrappers/blob/756c662f77d10717b10de50b84f2e02fa47719d1/src/fivem/ui/menu/items/UIMenuItem.ts#L512)

##### Returns

[`BadgeStyle`](../enumerations/BadgeStyle.md)

#### Set Signature

```ts
set RightBadge(value): void
```

Defined in: [src/fivem/ui/menu/items/UIMenuItem.ts:519](https://github.com/nativewrappers/nativewrappers/blob/756c662f77d10717b10de50b84f2e02fa47719d1/src/fivem/ui/menu/items/UIMenuItem.ts#L519)

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

Defined in: [src/fivem/ui/menu/items/UIMenuItem.ts:529](https://github.com/nativewrappers/nativewrappers/blob/756c662f77d10717b10de50b84f2e02fa47719d1/src/fivem/ui/menu/items/UIMenuItem.ts#L529)

##### Returns

`string`

#### Set Signature

```ts
set RightLabel(value): void
```

Defined in: [src/fivem/ui/menu/items/UIMenuItem.ts:536](https://github.com/nativewrappers/nativewrappers/blob/756c662f77d10717b10de50b84f2e02fa47719d1/src/fivem/ui/menu/items/UIMenuItem.ts#L536)

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

Defined in: [src/fivem/ui/menu/items/UIMenuItem.ts:430](https://github.com/nativewrappers/nativewrappers/blob/756c662f77d10717b10de50b84f2e02fa47719d1/src/fivem/ui/menu/items/UIMenuItem.ts#L430)

##### Returns

`string`

#### Set Signature

```ts
set Text(value): void
```

Defined in: [src/fivem/ui/menu/items/UIMenuItem.ts:434](https://github.com/nativewrappers/nativewrappers/blob/756c662f77d10717b10de50b84f2e02fa47719d1/src/fivem/ui/menu/items/UIMenuItem.ts#L434)

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

Defined in: [src/fivem/ui/menu/items/UIMenuItem.ts:593](https://github.com/nativewrappers/nativewrappers/blob/756c662f77d10717b10de50b84f2e02fa47719d1/src/fivem/ui/menu/items/UIMenuItem.ts#L593)

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

Defined in: [src/fivem/ui/menu/items/UIMenuItem.ts:563](https://github.com/nativewrappers/nativewrappers/blob/756c662f77d10717b10de50b84f2e02fa47719d1/src/fivem/ui/menu/items/UIMenuItem.ts#L563)

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

Defined in: [src/fivem/ui/menu/items/UIMenuItem.ts:1007](https://github.com/nativewrappers/nativewrappers/blob/756c662f77d10717b10de50b84f2e02fa47719d1/src/fivem/ui/menu/items/UIMenuItem.ts#L1007)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `badge` | [`BadgeStyle`](../enumerations/BadgeStyle.md) |

#### Returns

[`Color`](Color.md)

***

### badgeToTextureName()

```ts
badgeToTextureName(badge): string
```

Defined in: [src/fivem/ui/menu/items/UIMenuItem.ts:644](https://github.com/nativewrappers/nativewrappers/blob/756c662f77d10717b10de50b84f2e02fa47719d1/src/fivem/ui/menu/items/UIMenuItem.ts#L644)

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

Defined in: [src/fivem/ui/menu/items/UIMenuItem.ts:1145](https://github.com/nativewrappers/nativewrappers/blob/756c662f77d10717b10de50b84f2e02fa47719d1/src/fivem/ui/menu/items/UIMenuItem.ts#L1145)

#### Returns

`void`

***

### findPanelIndex()

```ts
findPanelIndex(panel): number
```

Defined in: [src/fivem/ui/menu/items/UIMenuItem.ts:574](https://github.com/nativewrappers/nativewrappers/blob/756c662f77d10717b10de50b84f2e02fa47719d1/src/fivem/ui/menu/items/UIMenuItem.ts#L574)

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

Defined in: [src/fivem/ui/menu/items/UIMenuItem.ts:597](https://github.com/nativewrappers/nativewrappers/blob/756c662f77d10717b10de50b84f2e02fa47719d1/src/fivem/ui/menu/items/UIMenuItem.ts#L597)

#### Returns

`void`

***

### formatDescription()

```ts
formatDescription(): void
```

Defined in: [src/fivem/ui/menu/items/UIMenuItem.ts:603](https://github.com/nativewrappers/nativewrappers/blob/756c662f77d10717b10de50b84f2e02fa47719d1/src/fivem/ui/menu/items/UIMenuItem.ts#L603)

#### Returns

`void`

***

### removePanel()

```ts
removePanel(panelOrIndex): void
```

Defined in: [src/fivem/ui/menu/items/UIMenuItem.ts:582](https://github.com/nativewrappers/nativewrappers/blob/756c662f77d10717b10de50b84f2e02fa47719d1/src/fivem/ui/menu/items/UIMenuItem.ts#L582)

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

Defined in: [src/fivem/ui/menu/items/UIMenuItem.ts:1133](https://github.com/nativewrappers/nativewrappers/blob/756c662f77d10717b10de50b84f2e02fa47719d1/src/fivem/ui/menu/items/UIMenuItem.ts#L1133)

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

Defined in: [src/fivem/ui/menu/items/UIMenuItem.ts:7](https://github.com/nativewrappers/nativewrappers/blob/756c662f77d10717b10de50b84f2e02fa47719d1/src/fivem/ui/menu/items/UIMenuItem.ts#L7)

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

Defined in: [src/fivem/ui/menu/items/UIMenuItem.ts:182](https://github.com/nativewrappers/nativewrappers/blob/756c662f77d10717b10de50b84f2e02fa47719d1/src/fivem/ui/menu/items/UIMenuItem.ts#L182)

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

Defined in: [src/fivem/ui/menu/items/UIMenuItem.ts:178](https://github.com/nativewrappers/nativewrappers/blob/756c662f77d10717b10de50b84f2e02fa47719d1/src/fivem/ui/menu/items/UIMenuItem.ts#L178)

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

Defined in: [src/fivem/ui/menu/items/UIMenuItem.ts:174](https://github.com/nativewrappers/nativewrappers/blob/756c662f77d10717b10de50b84f2e02fa47719d1/src/fivem/ui/menu/items/UIMenuItem.ts#L174)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `sprite` | [`Sprite`](Sprite.md) |

#### Returns

`number`
