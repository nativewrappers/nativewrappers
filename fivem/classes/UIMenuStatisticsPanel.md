[@nativewrappers/fivem](../../README.md) / [fivem](../README.md) / UIMenuStatisticsPanel

# Class: UIMenuStatisticsPanel

Defined in: fivem/ui/menu/items/panels/UIMenuStatisticsPanel.d.ts:3

## Extends

- [`AbstractUIMenuPanel`](AbstractUIMenuPanel.md)

## Constructors

### new UIMenuStatisticsPanel()

```ts
new UIMenuStatisticsPanel(item?, divider?): UIMenuStatisticsPanel
```

Defined in: fivem/ui/menu/items/panels/UIMenuStatisticsPanel.d.ts:7

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `item`? | \| [`UIMenuStatisticsPanelItem`](UIMenuStatisticsPanelItem.md) \| [`UIMenuStatisticsPanelItem`](UIMenuStatisticsPanelItem.md)[] |
| `divider`? | `boolean` |

#### Returns

[`UIMenuStatisticsPanel`](UIMenuStatisticsPanel.md)

#### Overrides

[`AbstractUIMenuPanel`](AbstractUIMenuPanel.md).[`constructor`](AbstractUIMenuPanel.md#constructors)

## Properties

| Property | Modifier | Type | Overrides | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ | ------ |
| <a id="background"></a> `background` | `readonly` | [`Rectangle`](Rectangle.md) | [`AbstractUIMenuPanel`](AbstractUIMenuPanel.md).[`background`](AbstractUIMenuPanel.md#background) | - | fivem/ui/menu/items/panels/UIMenuStatisticsPanel.d.ts:4 |
| <a id="enabled"></a> `enabled` | `protected` | `boolean` | - | [`AbstractUIMenuPanel`](AbstractUIMenuPanel.md).[`enabled`](AbstractUIMenuPanel.md#enabled) | fivem/ui/menu/items/panels/AbstractUIMenuPanel.d.ts:7 |
| <a id="id"></a> `id` | `readonly` | `string` | - | [`AbstractUIMenuPanel`](AbstractUIMenuPanel.md).[`id`](AbstractUIMenuPanel.md#id) | fivem/ui/menu/items/panels/AbstractUIMenuPanel.d.ts:5 |
| <a id="parentitem"></a> `parentItem?` | `protected` | [`UIMenuItem`](UIMenuItem.md) | - | [`AbstractUIMenuPanel`](AbstractUIMenuPanel.md).[`parentItem`](AbstractUIMenuPanel.md#parentitem) | fivem/ui/menu/items/panels/AbstractUIMenuPanel.d.ts:6 |

## Accessors

### Divider

#### Get Signature

```ts
get Divider(): boolean
```

Defined in: fivem/ui/menu/items/panels/UIMenuStatisticsPanel.d.ts:8

##### Returns

`boolean`

#### Set Signature

```ts
set Divider(value): void
```

Defined in: fivem/ui/menu/items/panels/UIMenuStatisticsPanel.d.ts:9

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

##### Returns

`void`

***

### Enabled

#### Get Signature

```ts
get Enabled(): boolean
```

Defined in: fivem/ui/menu/items/panels/AbstractUIMenuPanel.d.ts:12

##### Returns

`boolean`

#### Set Signature

```ts
set Enabled(value): void
```

Defined in: fivem/ui/menu/items/panels/AbstractUIMenuPanel.d.ts:13

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

##### Returns

`void`

#### Inherited from

[`AbstractUIMenuPanel`](AbstractUIMenuPanel.md).[`Enabled`](AbstractUIMenuPanel.md#enabled-1)

***

### Height

#### Get Signature

```ts
get Height(): number
```

Defined in: fivem/ui/menu/items/panels/AbstractUIMenuPanel.d.ts:14

##### Returns

`number`

#### Inherited from

[`AbstractUIMenuPanel`](AbstractUIMenuPanel.md).[`Height`](AbstractUIMenuPanel.md#height)

***

### Items

#### Get Signature

```ts
get Items(): UIMenuStatisticsPanelItem[]
```

Defined in: fivem/ui/menu/items/panels/UIMenuStatisticsPanel.d.ts:10

##### Returns

[`UIMenuStatisticsPanelItem`](UIMenuStatisticsPanelItem.md)[]

#### Set Signature

```ts
set Items(value): void
```

Defined in: fivem/ui/menu/items/panels/UIMenuStatisticsPanel.d.ts:11

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | [`UIMenuStatisticsPanelItem`](UIMenuStatisticsPanelItem.md)[] |

##### Returns

`void`

***

### ParentItem

#### Get Signature

```ts
get ParentItem(): undefined | UIMenuItem
```

Defined in: fivem/ui/menu/items/panels/AbstractUIMenuPanel.d.ts:10

##### Returns

`undefined` \| [`UIMenuItem`](UIMenuItem.md)

#### Set Signature

```ts
set ParentItem(value): void
```

Defined in: fivem/ui/menu/items/panels/AbstractUIMenuPanel.d.ts:11

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `undefined` \| [`UIMenuItem`](UIMenuItem.md) |

##### Returns

`void`

#### Inherited from

[`AbstractUIMenuPanel`](AbstractUIMenuPanel.md).[`ParentItem`](AbstractUIMenuPanel.md#parentitem-1)

***

### ParentMenu

#### Get Signature

```ts
get ParentMenu(): undefined | Menu
```

Defined in: fivem/ui/menu/items/panels/AbstractUIMenuPanel.d.ts:9

##### Returns

`undefined` \| [`Menu`](Menu.md)

#### Inherited from

[`AbstractUIMenuPanel`](AbstractUIMenuPanel.md).[`ParentMenu`](AbstractUIMenuPanel.md#parentmenu)

## Methods

### addItem()

```ts
addItem(item): void
```

Defined in: fivem/ui/menu/items/panels/UIMenuStatisticsPanel.d.ts:12

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `item` | \| [`UIMenuStatisticsPanelItem`](UIMenuStatisticsPanelItem.md) \| [`UIMenuStatisticsPanelItem`](UIMenuStatisticsPanelItem.md)[] |

#### Returns

`void`

***

### draw()

```ts
draw(): void
```

Defined in: fivem/ui/menu/items/panels/UIMenuStatisticsPanel.d.ts:15

#### Returns

`void`

#### Overrides

[`AbstractUIMenuPanel`](AbstractUIMenuPanel.md).[`draw`](AbstractUIMenuPanel.md#draw)

***

### removeItem()

```ts
removeItem(itemOrIndex): void
```

Defined in: fivem/ui/menu/items/panels/UIMenuStatisticsPanel.d.ts:13

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `itemOrIndex` | `number` \| [`UIMenuStatisticsPanelItem`](UIMenuStatisticsPanelItem.md) |

#### Returns

`void`

***

### setVerticalPosition()

```ts
setVerticalPosition(y): void
```

Defined in: fivem/ui/menu/items/panels/UIMenuStatisticsPanel.d.ts:14

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `y` | `number` |

#### Returns

`void`

#### Overrides

[`AbstractUIMenuPanel`](AbstractUIMenuPanel.md).[`setVerticalPosition`](AbstractUIMenuPanel.md#setverticalposition)
