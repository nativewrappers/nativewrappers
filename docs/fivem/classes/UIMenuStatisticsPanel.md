[@nativewrappers/fivem](../../README.md) / [fivem](../README.md) / UIMenuStatisticsPanel

# Class: UIMenuStatisticsPanel

Defined in: [src/fivem/ui/menu/items/panels/UIMenuStatisticsPanel.ts:5](https://github.com/nativewrappers/nativewrappers/blob/c6ab47d1014f341bb58fccc9d519ceb48157a741/src/fivem/ui/menu/items/panels/UIMenuStatisticsPanel.ts#L5)

## Extends

- [`AbstractUIMenuPanel`](AbstractUIMenuPanel.md)

## Constructors

### new UIMenuStatisticsPanel()

```ts
new UIMenuStatisticsPanel(item?, divider?): UIMenuStatisticsPanel
```

Defined in: [src/fivem/ui/menu/items/panels/UIMenuStatisticsPanel.ts:11](https://github.com/nativewrappers/nativewrappers/blob/c6ab47d1014f341bb58fccc9d519ceb48157a741/src/fivem/ui/menu/items/panels/UIMenuStatisticsPanel.ts#L11)

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `item`? | \| [`UIMenuStatisticsPanelItem`](UIMenuStatisticsPanelItem.md) \| [`UIMenuStatisticsPanelItem`](UIMenuStatisticsPanelItem.md)[] | `undefined` |
| `divider`? | `boolean` | `true` |

#### Returns

[`UIMenuStatisticsPanel`](UIMenuStatisticsPanel.md)

#### Overrides

[`AbstractUIMenuPanel`](AbstractUIMenuPanel.md).[`constructor`](AbstractUIMenuPanel.md#constructors)

## Properties

| Property | Modifier | Type | Default value | Overrides | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ | ------ | ------ |
| <a id="background"></a> `background` | `readonly` | [`Rectangle`](Rectangle.md) | `undefined` | [`AbstractUIMenuPanel`](AbstractUIMenuPanel.md).[`background`](AbstractUIMenuPanel.md#background) | - | [src/fivem/ui/menu/items/panels/UIMenuStatisticsPanel.ts:6](https://github.com/nativewrappers/nativewrappers/blob/c6ab47d1014f341bb58fccc9d519ceb48157a741/src/fivem/ui/menu/items/panels/UIMenuStatisticsPanel.ts#L6) |
| <a id="enabled"></a> `enabled` | `protected` | `boolean` | `true` | - | [`AbstractUIMenuPanel`](AbstractUIMenuPanel.md).[`enabled`](AbstractUIMenuPanel.md#enabled) | [src/fivem/ui/menu/items/panels/AbstractUIMenuPanel.ts:10](https://github.com/nativewrappers/nativewrappers/blob/c6ab47d1014f341bb58fccc9d519ceb48157a741/src/fivem/ui/menu/items/panels/AbstractUIMenuPanel.ts#L10) |
| <a id="id"></a> `id` | `readonly` | `string` | `undefined` | - | [`AbstractUIMenuPanel`](AbstractUIMenuPanel.md).[`id`](AbstractUIMenuPanel.md#id) | [src/fivem/ui/menu/items/panels/AbstractUIMenuPanel.ts:7](https://github.com/nativewrappers/nativewrappers/blob/c6ab47d1014f341bb58fccc9d519ceb48157a741/src/fivem/ui/menu/items/panels/AbstractUIMenuPanel.ts#L7) |
| <a id="parentitem"></a> `parentItem?` | `protected` | [`UIMenuItem`](UIMenuItem.md) | `undefined` | - | [`AbstractUIMenuPanel`](AbstractUIMenuPanel.md).[`parentItem`](AbstractUIMenuPanel.md#parentitem) | [src/fivem/ui/menu/items/panels/AbstractUIMenuPanel.ts:9](https://github.com/nativewrappers/nativewrappers/blob/c6ab47d1014f341bb58fccc9d519ceb48157a741/src/fivem/ui/menu/items/panels/AbstractUIMenuPanel.ts#L9) |

## Accessors

### Divider

#### Get Signature

```ts
get Divider(): boolean
```

Defined in: [src/fivem/ui/menu/items/panels/UIMenuStatisticsPanel.ts:27](https://github.com/nativewrappers/nativewrappers/blob/c6ab47d1014f341bb58fccc9d519ceb48157a741/src/fivem/ui/menu/items/panels/UIMenuStatisticsPanel.ts#L27)

##### Returns

`boolean`

#### Set Signature

```ts
set Divider(value): void
```

Defined in: [src/fivem/ui/menu/items/panels/UIMenuStatisticsPanel.ts:31](https://github.com/nativewrappers/nativewrappers/blob/c6ab47d1014f341bb58fccc9d519ceb48157a741/src/fivem/ui/menu/items/panels/UIMenuStatisticsPanel.ts#L31)

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

Defined in: [src/fivem/ui/menu/items/panels/AbstractUIMenuPanel.ts:26](https://github.com/nativewrappers/nativewrappers/blob/c6ab47d1014f341bb58fccc9d519ceb48157a741/src/fivem/ui/menu/items/panels/AbstractUIMenuPanel.ts#L26)

##### Returns

`boolean`

#### Set Signature

```ts
set Enabled(value): void
```

Defined in: [src/fivem/ui/menu/items/panels/AbstractUIMenuPanel.ts:30](https://github.com/nativewrappers/nativewrappers/blob/c6ab47d1014f341bb58fccc9d519ceb48157a741/src/fivem/ui/menu/items/panels/AbstractUIMenuPanel.ts#L30)

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

Defined in: [src/fivem/ui/menu/items/panels/AbstractUIMenuPanel.ts:34](https://github.com/nativewrappers/nativewrappers/blob/c6ab47d1014f341bb58fccc9d519ceb48157a741/src/fivem/ui/menu/items/panels/AbstractUIMenuPanel.ts#L34)

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

Defined in: [src/fivem/ui/menu/items/panels/UIMenuStatisticsPanel.ts:35](https://github.com/nativewrappers/nativewrappers/blob/c6ab47d1014f341bb58fccc9d519ceb48157a741/src/fivem/ui/menu/items/panels/UIMenuStatisticsPanel.ts#L35)

##### Returns

[`UIMenuStatisticsPanelItem`](UIMenuStatisticsPanelItem.md)[]

#### Set Signature

```ts
set Items(value): void
```

Defined in: [src/fivem/ui/menu/items/panels/UIMenuStatisticsPanel.ts:39](https://github.com/nativewrappers/nativewrappers/blob/c6ab47d1014f341bb58fccc9d519ceb48157a741/src/fivem/ui/menu/items/panels/UIMenuStatisticsPanel.ts#L39)

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

Defined in: [src/fivem/ui/menu/items/panels/AbstractUIMenuPanel.ts:18](https://github.com/nativewrappers/nativewrappers/blob/c6ab47d1014f341bb58fccc9d519ceb48157a741/src/fivem/ui/menu/items/panels/AbstractUIMenuPanel.ts#L18)

##### Returns

`undefined` \| [`UIMenuItem`](UIMenuItem.md)

#### Set Signature

```ts
set ParentItem(value): void
```

Defined in: [src/fivem/ui/menu/items/panels/AbstractUIMenuPanel.ts:22](https://github.com/nativewrappers/nativewrappers/blob/c6ab47d1014f341bb58fccc9d519ceb48157a741/src/fivem/ui/menu/items/panels/AbstractUIMenuPanel.ts#L22)

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

Defined in: [src/fivem/ui/menu/items/panels/AbstractUIMenuPanel.ts:14](https://github.com/nativewrappers/nativewrappers/blob/c6ab47d1014f341bb58fccc9d519ceb48157a741/src/fivem/ui/menu/items/panels/AbstractUIMenuPanel.ts#L14)

##### Returns

`undefined` \| [`Menu`](Menu.md)

#### Inherited from

[`AbstractUIMenuPanel`](AbstractUIMenuPanel.md).[`ParentMenu`](AbstractUIMenuPanel.md#parentmenu)

## Methods

### addItem()

```ts
addItem(item): void
```

Defined in: [src/fivem/ui/menu/items/panels/UIMenuStatisticsPanel.ts:43](https://github.com/nativewrappers/nativewrappers/blob/c6ab47d1014f341bb58fccc9d519ceb48157a741/src/fivem/ui/menu/items/panels/UIMenuStatisticsPanel.ts#L43)

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

Defined in: [src/fivem/ui/menu/items/panels/UIMenuStatisticsPanel.ts:74](https://github.com/nativewrappers/nativewrappers/blob/c6ab47d1014f341bb58fccc9d519ceb48157a741/src/fivem/ui/menu/items/panels/UIMenuStatisticsPanel.ts#L74)

#### Returns

`void`

#### Overrides

[`AbstractUIMenuPanel`](AbstractUIMenuPanel.md).[`draw`](AbstractUIMenuPanel.md#draw)

***

### removeItem()

```ts
removeItem(itemOrIndex): void
```

Defined in: [src/fivem/ui/menu/items/panels/UIMenuStatisticsPanel.ts:50](https://github.com/nativewrappers/nativewrappers/blob/c6ab47d1014f341bb58fccc9d519ceb48157a741/src/fivem/ui/menu/items/panels/UIMenuStatisticsPanel.ts#L50)

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

Defined in: [src/fivem/ui/menu/items/panels/UIMenuStatisticsPanel.ts:58](https://github.com/nativewrappers/nativewrappers/blob/c6ab47d1014f341bb58fccc9d519ceb48157a741/src/fivem/ui/menu/items/panels/UIMenuStatisticsPanel.ts#L58)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `y` | `number` |

#### Returns

`void`

#### Overrides

[`AbstractUIMenuPanel`](AbstractUIMenuPanel.md).[`setVerticalPosition`](AbstractUIMenuPanel.md#setverticalposition)
