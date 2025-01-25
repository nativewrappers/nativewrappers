[@nativewrappers/fivem](../../README.md) / [fivem](../README.md) / UIMenuCheckboxItem

# Class: UIMenuCheckboxItem

Defined in: [src/fivem/ui/menu/items/UIMenuCheckboxItem.ts:6](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/fivem/ui/menu/items/UIMenuCheckboxItem.ts#L6)

## Extends

- [`UIMenuItem`](UIMenuItem.md)

## Constructors

### new UIMenuCheckboxItem()

```ts
new UIMenuCheckboxItem(
   text, 
   checked, 
   description?, 
   style?): UIMenuCheckboxItem
```

Defined in: [src/fivem/ui/menu/items/UIMenuCheckboxItem.ts:17](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/fivem/ui/menu/items/UIMenuCheckboxItem.ts#L17)

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `text` | `string` | `undefined` |
| `checked` | `boolean` | `false` |
| `description`? | `string` | `undefined` |
| `style`? | [`CheckboxStyle`](../enumerations/CheckboxStyle.md) | `CheckboxStyle.Tick` |

#### Returns

[`UIMenuCheckboxItem`](UIMenuCheckboxItem.md)

#### Overrides

[`UIMenuItem`](UIMenuItem.md).[`constructor`](UIMenuItem.md#constructors)

## Properties

| Property | Modifier | Type | Default value | Overrides | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ | ------ | ------ |
| <a id="activated"></a> `activated` | `readonly` | [`LiteEvent`](LiteEvent.md) | `undefined` | - | [`UIMenuItem`](UIMenuItem.md).[`activated`](UIMenuItem.md#activated) | [src/fivem/ui/menu/items/UIMenuItem.ts:361](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/fivem/ui/menu/items/UIMenuItem.ts#L361) |
| <a id="badgeleft"></a> `badgeLeft` | `readonly` | [`Sprite`](Sprite.md) | `undefined` | - | [`UIMenuItem`](UIMenuItem.md).[`badgeLeft`](UIMenuItem.md#badgeleft) | [src/fivem/ui/menu/items/UIMenuItem.ts:374](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/fivem/ui/menu/items/UIMenuItem.ts#L374) |
| <a id="badgeright"></a> `badgeRight` | `readonly` | [`Sprite`](Sprite.md) | `undefined` | - | [`UIMenuItem`](UIMenuItem.md).[`badgeRight`](UIMenuItem.md#badgeright) | [src/fivem/ui/menu/items/UIMenuItem.ts:375](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/fivem/ui/menu/items/UIMenuItem.ts#L375) |
| <a id="checkboxchanged"></a> `checkboxChanged` | `readonly` | [`LiteEvent`](LiteEvent.md) | `undefined` | - | - | [src/fivem/ui/menu/items/UIMenuCheckboxItem.ts:7](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/fivem/ui/menu/items/UIMenuCheckboxItem.ts#L7) |
| <a id="enabled"></a> `enabled` | `public` | `boolean` | `true` | - | [`UIMenuItem`](UIMenuItem.md).[`enabled`](UIMenuItem.md#enabled) | [src/fivem/ui/menu/items/UIMenuItem.ts:354](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/fivem/ui/menu/items/UIMenuItem.ts#L354) |
| <a id="hovered"></a> `hovered` | `public` | `boolean` | `false` | - | [`UIMenuItem`](UIMenuItem.md).[`hovered`](UIMenuItem.md#hovered) | [src/fivem/ui/menu/items/UIMenuItem.ts:356](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/fivem/ui/menu/items/UIMenuItem.ts#L356) |
| <a id="id"></a> `id` | `readonly` | `string` | `undefined` | - | [`UIMenuItem`](UIMenuItem.md).[`id`](UIMenuItem.md#id) | [src/fivem/ui/menu/items/UIMenuItem.ts:352](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/fivem/ui/menu/items/UIMenuItem.ts#L352) |
| <a id="labeltext"></a> `labelText` | `readonly` | [`Text`](Text.md) | `undefined` | - | [`UIMenuItem`](UIMenuItem.md).[`labelText`](UIMenuItem.md#labeltext) | [src/fivem/ui/menu/items/UIMenuItem.ts:377](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/fivem/ui/menu/items/UIMenuItem.ts#L377) |
| <a id="offset"></a> `offset` | `public` | [`Point`](Point.md) | `undefined` | - | [`UIMenuItem`](UIMenuItem.md).[`offset`](UIMenuItem.md#offset) | [src/fivem/ui/menu/items/UIMenuItem.ts:358](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/fivem/ui/menu/items/UIMenuItem.ts#L358) |
| <a id="panelactivated"></a> `panelActivated` | `readonly` | [`LiteEvent`](LiteEvent.md) | `undefined` | - | [`UIMenuItem`](UIMenuItem.md).[`panelActivated`](UIMenuItem.md#panelactivated) | [src/fivem/ui/menu/items/UIMenuItem.ts:362](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/fivem/ui/menu/items/UIMenuItem.ts#L362) |
| <a id="parent"></a> `parent?` | `public` | [`Menu`](Menu.md) | `undefined` | - | [`UIMenuItem`](UIMenuItem.md).[`parent`](UIMenuItem.md#parent) | [src/fivem/ui/menu/items/UIMenuItem.ts:359](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/fivem/ui/menu/items/UIMenuItem.ts#L359) |
| <a id="rectangle"></a> `rectangle` | `readonly` | [`Rectangle`](Rectangle.md) | `undefined` | - | [`UIMenuItem`](UIMenuItem.md).[`rectangle`](UIMenuItem.md#rectangle) | [src/fivem/ui/menu/items/UIMenuItem.ts:370](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/fivem/ui/menu/items/UIMenuItem.ts#L370) |
| <a id="selected"></a> `selected` | `public` | `boolean` | `false` | - | [`UIMenuItem`](UIMenuItem.md).[`selected`](UIMenuItem.md#selected) | [src/fivem/ui/menu/items/UIMenuItem.ts:355](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/fivem/ui/menu/items/UIMenuItem.ts#L355) |
| <a id="selectedsprite"></a> `selectedSprite` | `readonly` | [`Sprite`](Sprite.md) | `undefined` | - | [`UIMenuItem`](UIMenuItem.md).[`selectedSprite`](UIMenuItem.md#selectedsprite) | [src/fivem/ui/menu/items/UIMenuItem.ts:372](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/fivem/ui/menu/items/UIMenuItem.ts#L372) |
| <a id="supportsdescription"></a> `supportsDescription` | `protected` | `boolean` | `true` | - | [`UIMenuItem`](UIMenuItem.md).[`supportsDescription`](UIMenuItem.md#supportsdescription) | [src/fivem/ui/menu/items/UIMenuItem.ts:364](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/fivem/ui/menu/items/UIMenuItem.ts#L364) |
| <a id="supportsleftbadge"></a> `supportsLeftBadge` | `protected` | `boolean` | `true` | - | [`UIMenuItem`](UIMenuItem.md).[`supportsLeftBadge`](UIMenuItem.md#supportsleftbadge) | [src/fivem/ui/menu/items/UIMenuItem.ts:366](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/fivem/ui/menu/items/UIMenuItem.ts#L366) |
| <a id="supportspanels"></a> `supportsPanels` | `protected` | `boolean` | `true` | - | [`UIMenuItem`](UIMenuItem.md).[`supportsPanels`](UIMenuItem.md#supportspanels) | [src/fivem/ui/menu/items/UIMenuItem.ts:365](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/fivem/ui/menu/items/UIMenuItem.ts#L365) |
| <a id="supportsrightbadge"></a> `supportsRightBadge` | `protected` | `boolean` | `false` | [`UIMenuItem`](UIMenuItem.md).[`supportsRightBadge`](UIMenuItem.md#supportsrightbadge) | - | [src/fivem/ui/menu/items/UIMenuCheckboxItem.ts:9](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/fivem/ui/menu/items/UIMenuCheckboxItem.ts#L9) |
| <a id="supportsrightlabel"></a> `supportsRightLabel` | `protected` | `boolean` | `false` | [`UIMenuItem`](UIMenuItem.md).[`supportsRightLabel`](UIMenuItem.md#supportsrightlabel) | - | [src/fivem/ui/menu/items/UIMenuCheckboxItem.ts:10](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/fivem/ui/menu/items/UIMenuCheckboxItem.ts#L10) |
| <a id="text-1"></a> `text` | `readonly` | [`Text`](Text.md) | `undefined` | - | [`UIMenuItem`](UIMenuItem.md).[`text`](UIMenuItem.md#text-1) | [src/fivem/ui/menu/items/UIMenuItem.ts:371](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/fivem/ui/menu/items/UIMenuItem.ts#L371) |
| <a id="defaultbackcolor"></a> `defaultBackColor` | `static` | [`Color`](Color.md) | `Color.Transparent` | - | [`UIMenuItem`](UIMenuItem.md).[`defaultBackColor`](UIMenuItem.md#defaultbackcolor) | [src/fivem/ui/menu/items/UIMenuItem.ts:344](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/fivem/ui/menu/items/UIMenuItem.ts#L344) |
| <a id="defaultforecolor"></a> `defaultForeColor` | `static` | [`Color`](Color.md) | `Color.WhiteSmoke` | - | [`UIMenuItem`](UIMenuItem.md).[`defaultForeColor`](UIMenuItem.md#defaultforecolor) | [src/fivem/ui/menu/items/UIMenuItem.ts:348](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/fivem/ui/menu/items/UIMenuItem.ts#L348) |
| <a id="defaulthighlightedbackcolor"></a> `defaultHighlightedBackColor` | `static` | [`Color`](Color.md) | `Color.White` | - | [`UIMenuItem`](UIMenuItem.md).[`defaultHighlightedBackColor`](UIMenuItem.md#defaulthighlightedbackcolor) | [src/fivem/ui/menu/items/UIMenuItem.ts:345](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/fivem/ui/menu/items/UIMenuItem.ts#L345) |
| <a id="defaulthighlightedforecolor"></a> `defaultHighlightedForeColor` | `static` | [`Color`](Color.md) | `Color.Black` | - | [`UIMenuItem`](UIMenuItem.md).[`defaultHighlightedForeColor`](UIMenuItem.md#defaulthighlightedforecolor) | [src/fivem/ui/menu/items/UIMenuItem.ts:350](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/fivem/ui/menu/items/UIMenuItem.ts#L350) |
| <a id="defaulthoveredbackcolor"></a> `defaultHoveredBackColor` | `static` | [`Color`](Color.md) | `undefined` | - | [`UIMenuItem`](UIMenuItem.md).[`defaultHoveredBackColor`](UIMenuItem.md#defaulthoveredbackcolor) | [src/fivem/ui/menu/items/UIMenuItem.ts:346](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/fivem/ui/menu/items/UIMenuItem.ts#L346) |
| <a id="defaulthoveredforecolor"></a> `defaultHoveredForeColor` | `static` | [`Color`](Color.md) | `UIMenuItem.defaultForeColor` | - | [`UIMenuItem`](UIMenuItem.md).[`defaultHoveredForeColor`](UIMenuItem.md#defaulthoveredforecolor) | [src/fivem/ui/menu/items/UIMenuItem.ts:349](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/fivem/ui/menu/items/UIMenuItem.ts#L349) |

## Accessors

### BackColor

#### Get Signature

```ts
get BackColor(): Color
```

Defined in: [src/fivem/ui/menu/items/UIMenuItem.ts:457](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/fivem/ui/menu/items/UIMenuItem.ts#L457)

##### Returns

[`Color`](Color.md)

#### Set Signature

```ts
set BackColor(value): void
```

Defined in: [src/fivem/ui/menu/items/UIMenuItem.ts:461](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/fivem/ui/menu/items/UIMenuItem.ts#L461)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | [`Color`](Color.md) |

##### Returns

`void`

#### Inherited from

[`UIMenuItem`](UIMenuItem.md).[`BackColor`](UIMenuItem.md#backcolor)

***

### Checked

#### Get Signature

```ts
get Checked(): boolean
```

Defined in: [src/fivem/ui/menu/items/UIMenuCheckboxItem.ts:34](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/fivem/ui/menu/items/UIMenuCheckboxItem.ts#L34)

##### Returns

`boolean`

#### Set Signature

```ts
set Checked(value): void
```

Defined in: [src/fivem/ui/menu/items/UIMenuCheckboxItem.ts:38](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/fivem/ui/menu/items/UIMenuCheckboxItem.ts#L38)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

##### Returns

`void`

***

### Description

#### Get Signature

```ts
get Description(): string
```

Defined in: [src/fivem/ui/menu/items/UIMenuItem.ts:438](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/fivem/ui/menu/items/UIMenuItem.ts#L438)

##### Returns

`string`

#### Set Signature

```ts
set Description(value): void
```

Defined in: [src/fivem/ui/menu/items/UIMenuItem.ts:445](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/fivem/ui/menu/items/UIMenuItem.ts#L445)

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

Defined in: [src/fivem/ui/menu/items/UIMenuItem.ts:477](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/fivem/ui/menu/items/UIMenuItem.ts#L477)

##### Returns

[`Color`](Color.md)

#### Set Signature

```ts
set ForeColor(value): void
```

Defined in: [src/fivem/ui/menu/items/UIMenuItem.ts:481](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/fivem/ui/menu/items/UIMenuItem.ts#L481)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | [`Color`](Color.md) |

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

Defined in: [src/fivem/ui/menu/items/UIMenuItem.ts:453](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/fivem/ui/menu/items/UIMenuItem.ts#L453)

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

Defined in: [src/fivem/ui/menu/items/UIMenuItem.ts:467](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/fivem/ui/menu/items/UIMenuItem.ts#L467)

##### Returns

[`Color`](Color.md)

#### Set Signature

```ts
set HighlightedBackColor(value): void
```

Defined in: [src/fivem/ui/menu/items/UIMenuItem.ts:471](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/fivem/ui/menu/items/UIMenuItem.ts#L471)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | [`Color`](Color.md) |

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

Defined in: [src/fivem/ui/menu/items/UIMenuItem.ts:487](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/fivem/ui/menu/items/UIMenuItem.ts#L487)

##### Returns

[`Color`](Color.md)

#### Set Signature

```ts
set HighlightedForeColor(value): void
```

Defined in: [src/fivem/ui/menu/items/UIMenuItem.ts:491](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/fivem/ui/menu/items/UIMenuItem.ts#L491)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | [`Color`](Color.md) |

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

Defined in: [src/fivem/ui/menu/items/UIMenuItem.ts:543](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/fivem/ui/menu/items/UIMenuItem.ts#L543)

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

Defined in: [src/fivem/ui/menu/items/UIMenuItem.ts:495](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/fivem/ui/menu/items/UIMenuItem.ts#L495)

##### Returns

[`BadgeStyle`](../enumerations/BadgeStyle.md)

#### Set Signature

```ts
set LeftBadge(value): void
```

Defined in: [src/fivem/ui/menu/items/UIMenuItem.ts:502](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/fivem/ui/menu/items/UIMenuItem.ts#L502)

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

Defined in: [src/fivem/ui/menu/items/UIMenuItem.ts:549](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/fivem/ui/menu/items/UIMenuItem.ts#L549)

##### Returns

[`AbstractUIMenuPanel`](AbstractUIMenuPanel.md)[]

#### Set Signature

```ts
set Panels(value): void
```

Defined in: [src/fivem/ui/menu/items/UIMenuItem.ts:556](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/fivem/ui/menu/items/UIMenuItem.ts#L556)

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

Defined in: [src/fivem/ui/menu/items/UIMenuItem.ts:512](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/fivem/ui/menu/items/UIMenuItem.ts#L512)

##### Returns

[`BadgeStyle`](../enumerations/BadgeStyle.md)

#### Set Signature

```ts
set RightBadge(value): void
```

Defined in: [src/fivem/ui/menu/items/UIMenuItem.ts:519](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/fivem/ui/menu/items/UIMenuItem.ts#L519)

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

Defined in: [src/fivem/ui/menu/items/UIMenuItem.ts:529](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/fivem/ui/menu/items/UIMenuItem.ts#L529)

##### Returns

`string`

#### Set Signature

```ts
set RightLabel(value): void
```

Defined in: [src/fivem/ui/menu/items/UIMenuItem.ts:536](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/fivem/ui/menu/items/UIMenuItem.ts#L536)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `string` |

##### Returns

`void`

#### Inherited from

[`UIMenuItem`](UIMenuItem.md).[`RightLabel`](UIMenuItem.md#rightlabel)

***

### Style

#### Get Signature

```ts
get Style(): CheckboxStyle
```

Defined in: [src/fivem/ui/menu/items/UIMenuCheckboxItem.ts:42](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/fivem/ui/menu/items/UIMenuCheckboxItem.ts#L42)

##### Returns

[`CheckboxStyle`](../enumerations/CheckboxStyle.md)

#### Set Signature

```ts
set Style(value): void
```

Defined in: [src/fivem/ui/menu/items/UIMenuCheckboxItem.ts:46](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/fivem/ui/menu/items/UIMenuCheckboxItem.ts#L46)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | [`CheckboxStyle`](../enumerations/CheckboxStyle.md) |

##### Returns

`void`

***

### Text

#### Get Signature

```ts
get Text(): string
```

Defined in: [src/fivem/ui/menu/items/UIMenuItem.ts:430](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/fivem/ui/menu/items/UIMenuItem.ts#L430)

##### Returns

`string`

#### Set Signature

```ts
set Text(value): void
```

Defined in: [src/fivem/ui/menu/items/UIMenuItem.ts:434](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/fivem/ui/menu/items/UIMenuItem.ts#L434)

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

Defined in: [src/fivem/ui/menu/items/UIMenuItem.ts:593](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/fivem/ui/menu/items/UIMenuItem.ts#L593)

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

Defined in: [src/fivem/ui/menu/items/UIMenuItem.ts:563](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/fivem/ui/menu/items/UIMenuItem.ts#L563)

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

Defined in: [src/fivem/ui/menu/items/UIMenuItem.ts:1007](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/fivem/ui/menu/items/UIMenuItem.ts#L1007)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `badge` | [`BadgeStyle`](../enumerations/BadgeStyle.md) |

#### Returns

[`Color`](Color.md)

#### Inherited from

[`UIMenuItem`](UIMenuItem.md).[`badgeToColor`](UIMenuItem.md#badgetocolor)

***

### badgeToTextureName()

```ts
badgeToTextureName(badge): string
```

Defined in: [src/fivem/ui/menu/items/UIMenuItem.ts:644](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/fivem/ui/menu/items/UIMenuItem.ts#L644)

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

Defined in: [src/fivem/ui/menu/items/UIMenuCheckboxItem.ts:55](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/fivem/ui/menu/items/UIMenuCheckboxItem.ts#L55)

#### Returns

`void`

#### Overrides

[`UIMenuItem`](UIMenuItem.md).[`draw`](UIMenuItem.md#draw)

***

### findPanelIndex()

```ts
findPanelIndex(panel): number
```

Defined in: [src/fivem/ui/menu/items/UIMenuItem.ts:574](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/fivem/ui/menu/items/UIMenuItem.ts#L574)

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

Defined in: [src/fivem/ui/menu/items/UIMenuItem.ts:597](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/fivem/ui/menu/items/UIMenuItem.ts#L597)

#### Returns

`void`

#### Inherited from

[`UIMenuItem`](UIMenuItem.md).[`fireEvent`](UIMenuItem.md#fireevent)

***

### formatDescription()

```ts
formatDescription(): void
```

Defined in: [src/fivem/ui/menu/items/UIMenuItem.ts:603](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/fivem/ui/menu/items/UIMenuItem.ts#L603)

#### Returns

`void`

#### Inherited from

[`UIMenuItem`](UIMenuItem.md).[`formatDescription`](UIMenuItem.md#formatdescription)

***

### removePanel()

```ts
removePanel(panelOrIndex): void
```

Defined in: [src/fivem/ui/menu/items/UIMenuItem.ts:582](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/fivem/ui/menu/items/UIMenuItem.ts#L582)

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

Defined in: [src/fivem/ui/menu/items/UIMenuCheckboxItem.ts:50](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/fivem/ui/menu/items/UIMenuCheckboxItem.ts#L50)

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

Defined in: [src/fivem/ui/menu/items/UIMenuItem.ts:7](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/fivem/ui/menu/items/UIMenuItem.ts#L7)

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

Defined in: [src/fivem/ui/menu/items/UIMenuItem.ts:182](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/fivem/ui/menu/items/UIMenuItem.ts#L182)

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

Defined in: [src/fivem/ui/menu/items/UIMenuItem.ts:178](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/fivem/ui/menu/items/UIMenuItem.ts#L178)

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

Defined in: [src/fivem/ui/menu/items/UIMenuItem.ts:174](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/fivem/ui/menu/items/UIMenuItem.ts#L174)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `sprite` | [`Sprite`](Sprite.md) |

#### Returns

`number`

#### Inherited from

[`UIMenuItem`](UIMenuItem.md).[`getBadgeSpriteWidthOffset`](UIMenuItem.md#getbadgespritewidthoffset)
