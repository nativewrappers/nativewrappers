[@nativewrappers/fivem](../../../../../../../README.md) / [fivem/ui/menu/items/panels/UIMenuStatisticsPanel](../README.md) / UIMenuStatisticsPanel

# Class: UIMenuStatisticsPanel

Defined in: lib/fivem/ui/menu/items/panels/UIMenuStatisticsPanel.d.ts:4

## Extends

- [`AbstractUIMenuPanel`](../../AbstractUIMenuPanel/classes/AbstractUIMenuPanel.md)

## Constructors

### Constructor

```ts
new UIMenuStatisticsPanel(item?, divider?): UIMenuStatisticsPanel;
```

Defined in: lib/fivem/ui/menu/items/panels/UIMenuStatisticsPanel.d.ts:8

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `item?` | \| [`UIMenuStatisticsPanelItem`](../../UIMenuStatisticsPanelItem/classes/UIMenuStatisticsPanelItem.md) \| [`UIMenuStatisticsPanelItem`](../../UIMenuStatisticsPanelItem/classes/UIMenuStatisticsPanelItem.md)[] |
| `divider?` | `boolean` |

#### Returns

`UIMenuStatisticsPanel`

#### Overrides

[`AbstractUIMenuPanel`](../../AbstractUIMenuPanel/classes/AbstractUIMenuPanel.md).[`constructor`](../../AbstractUIMenuPanel/classes/AbstractUIMenuPanel.md#constructor)

## Properties

| Property | Modifier | Type | Overrides | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ | ------ |
| <a id="background"></a> `background` | `readonly` | [`Rectangle`](../../../../../Rectangle/classes/Rectangle.md) | [`AbstractUIMenuPanel`](../../AbstractUIMenuPanel/classes/AbstractUIMenuPanel.md).[`background`](../../AbstractUIMenuPanel/classes/AbstractUIMenuPanel.md#background) | - | lib/fivem/ui/menu/items/panels/UIMenuStatisticsPanel.d.ts:5 |
| <a id="enabled"></a> `enabled` | `protected` | `boolean` | - | [`AbstractUIMenuPanel`](../../AbstractUIMenuPanel/classes/AbstractUIMenuPanel.md).[`enabled`](../../AbstractUIMenuPanel/classes/AbstractUIMenuPanel.md#enabled) | lib/fivem/ui/menu/items/panels/AbstractUIMenuPanel.d.ts:8 |
| <a id="id"></a> `id` | `readonly` | `string` | - | [`AbstractUIMenuPanel`](../../AbstractUIMenuPanel/classes/AbstractUIMenuPanel.md).[`id`](../../AbstractUIMenuPanel/classes/AbstractUIMenuPanel.md#id) | lib/fivem/ui/menu/items/panels/AbstractUIMenuPanel.d.ts:6 |
| <a id="parentitem"></a> `parentItem?` | `protected` | [`UIMenuItem`](../../../UIMenuItem/classes/UIMenuItem.md) | - | [`AbstractUIMenuPanel`](../../AbstractUIMenuPanel/classes/AbstractUIMenuPanel.md).[`parentItem`](../../AbstractUIMenuPanel/classes/AbstractUIMenuPanel.md#parentitem) | lib/fivem/ui/menu/items/panels/AbstractUIMenuPanel.d.ts:7 |

## Accessors

### Divider

#### Get Signature

```ts
get Divider(): boolean;
```

Defined in: lib/fivem/ui/menu/items/panels/UIMenuStatisticsPanel.d.ts:9

##### Returns

`boolean`

#### Set Signature

```ts
set Divider(value): void;
```

Defined in: lib/fivem/ui/menu/items/panels/UIMenuStatisticsPanel.d.ts:10

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
get Enabled(): boolean;
```

Defined in: lib/fivem/ui/menu/items/panels/AbstractUIMenuPanel.d.ts:13

##### Returns

`boolean`

#### Set Signature

```ts
set Enabled(value): void;
```

Defined in: lib/fivem/ui/menu/items/panels/AbstractUIMenuPanel.d.ts:14

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

##### Returns

`void`

#### Inherited from

[`AbstractUIMenuPanel`](../../AbstractUIMenuPanel/classes/AbstractUIMenuPanel.md).[`Enabled`](../../AbstractUIMenuPanel/classes/AbstractUIMenuPanel.md#enabled-1)

***

### Height

#### Get Signature

```ts
get Height(): number;
```

Defined in: lib/fivem/ui/menu/items/panels/AbstractUIMenuPanel.d.ts:15

##### Returns

`number`

#### Inherited from

[`AbstractUIMenuPanel`](../../AbstractUIMenuPanel/classes/AbstractUIMenuPanel.md).[`Height`](../../AbstractUIMenuPanel/classes/AbstractUIMenuPanel.md#height)

***

### Items

#### Get Signature

```ts
get Items(): UIMenuStatisticsPanelItem[];
```

Defined in: lib/fivem/ui/menu/items/panels/UIMenuStatisticsPanel.d.ts:11

##### Returns

[`UIMenuStatisticsPanelItem`](../../UIMenuStatisticsPanelItem/classes/UIMenuStatisticsPanelItem.md)[]

#### Set Signature

```ts
set Items(value): void;
```

Defined in: lib/fivem/ui/menu/items/panels/UIMenuStatisticsPanel.d.ts:12

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | [`UIMenuStatisticsPanelItem`](../../UIMenuStatisticsPanelItem/classes/UIMenuStatisticsPanelItem.md)[] |

##### Returns

`void`

***

### ParentItem

#### Get Signature

```ts
get ParentItem(): undefined | UIMenuItem;
```

Defined in: lib/fivem/ui/menu/items/panels/AbstractUIMenuPanel.d.ts:11

##### Returns

`undefined` \| [`UIMenuItem`](../../../UIMenuItem/classes/UIMenuItem.md)

#### Set Signature

```ts
set ParentItem(value): void;
```

Defined in: lib/fivem/ui/menu/items/panels/AbstractUIMenuPanel.d.ts:12

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `undefined` \| [`UIMenuItem`](../../../UIMenuItem/classes/UIMenuItem.md) |

##### Returns

`void`

#### Inherited from

[`AbstractUIMenuPanel`](../../AbstractUIMenuPanel/classes/AbstractUIMenuPanel.md).[`ParentItem`](../../AbstractUIMenuPanel/classes/AbstractUIMenuPanel.md#parentitem-1)

***

### ParentMenu

#### Get Signature

```ts
get ParentMenu(): undefined | Menu;
```

Defined in: lib/fivem/ui/menu/items/panels/AbstractUIMenuPanel.d.ts:10

##### Returns

`undefined` \| [`Menu`](../../../../Menu/classes/Menu.md)

#### Inherited from

[`AbstractUIMenuPanel`](../../AbstractUIMenuPanel/classes/AbstractUIMenuPanel.md).[`ParentMenu`](../../AbstractUIMenuPanel/classes/AbstractUIMenuPanel.md#parentmenu)

## Methods

### addItem()

```ts
addItem(item): void;
```

Defined in: lib/fivem/ui/menu/items/panels/UIMenuStatisticsPanel.d.ts:13

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `item` | \| [`UIMenuStatisticsPanelItem`](../../UIMenuStatisticsPanelItem/classes/UIMenuStatisticsPanelItem.md) \| [`UIMenuStatisticsPanelItem`](../../UIMenuStatisticsPanelItem/classes/UIMenuStatisticsPanelItem.md)[] |

#### Returns

`void`

***

### draw()

```ts
draw(): void;
```

Defined in: lib/fivem/ui/menu/items/panels/UIMenuStatisticsPanel.d.ts:16

#### Returns

`void`

#### Overrides

[`AbstractUIMenuPanel`](../../AbstractUIMenuPanel/classes/AbstractUIMenuPanel.md).[`draw`](../../AbstractUIMenuPanel/classes/AbstractUIMenuPanel.md#draw)

***

### removeItem()

```ts
removeItem(itemOrIndex): void;
```

Defined in: lib/fivem/ui/menu/items/panels/UIMenuStatisticsPanel.d.ts:14

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `itemOrIndex` | \| `number` \| [`UIMenuStatisticsPanelItem`](../../UIMenuStatisticsPanelItem/classes/UIMenuStatisticsPanelItem.md) |

#### Returns

`void`

***

### setVerticalPosition()

```ts
setVerticalPosition(y): void;
```

Defined in: lib/fivem/ui/menu/items/panels/UIMenuStatisticsPanel.d.ts:15

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `y` | `number` |

#### Returns

`void`

#### Overrides

[`AbstractUIMenuPanel`](../../AbstractUIMenuPanel/classes/AbstractUIMenuPanel.md).[`setVerticalPosition`](../../AbstractUIMenuPanel/classes/AbstractUIMenuPanel.md#setverticalposition)
