[@nativewrappers/fivem](../../../../../../../README.md) / [fivem/ui/menu/items/panels/AbstractUIMenuPanel](../README.md) / AbstractUIMenuPanel

# Abstract Class: AbstractUIMenuPanel

Defined in: lib/fivem/ui/menu/items/panels/AbstractUIMenuPanel.d.ts:5

## Extended by

- [`UIMenuColorPanel`](../../UIMenuColorPanel/classes/UIMenuColorPanel.md)
- [`UIMenuGridPanel`](../../UIMenuGridPanel/classes/UIMenuGridPanel.md)
- [`UIMenuPercentagePanel`](../../UIMenuPercentagePanel/classes/UIMenuPercentagePanel.md)
- [`UIMenuStatisticsPanel`](../../UIMenuStatisticsPanel/classes/UIMenuStatisticsPanel.md)

## Constructors

### Constructor

```ts
new AbstractUIMenuPanel(): AbstractUIMenuPanel;
```

#### Returns

`AbstractUIMenuPanel`

## Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="background"></a> `background?` | `readonly` | \| [`Rectangle`](../../../../../Rectangle/classes/Rectangle.md) \| [`Sprite`](../../../../../Sprite/classes/Sprite.md) | lib/fivem/ui/menu/items/panels/AbstractUIMenuPanel.d.ts:9 |
| <a id="enabled"></a> `enabled` | `protected` | `boolean` | lib/fivem/ui/menu/items/panels/AbstractUIMenuPanel.d.ts:8 |
| <a id="id"></a> `id` | `readonly` | `string` | lib/fivem/ui/menu/items/panels/AbstractUIMenuPanel.d.ts:6 |
| <a id="parentitem"></a> `parentItem?` | `protected` | [`UIMenuItem`](../../../UIMenuItem/classes/UIMenuItem.md) | lib/fivem/ui/menu/items/panels/AbstractUIMenuPanel.d.ts:7 |

## Accessors

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

***

### Height

#### Get Signature

```ts
get Height(): number;
```

Defined in: lib/fivem/ui/menu/items/panels/AbstractUIMenuPanel.d.ts:15

##### Returns

`number`

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

***

### ParentMenu

#### Get Signature

```ts
get ParentMenu(): undefined | Menu;
```

Defined in: lib/fivem/ui/menu/items/panels/AbstractUIMenuPanel.d.ts:10

##### Returns

`undefined` \| [`Menu`](../../../../Menu/classes/Menu.md)

## Methods

### draw()

```ts
draw(): void;
```

Defined in: lib/fivem/ui/menu/items/panels/AbstractUIMenuPanel.d.ts:17

#### Returns

`void`

***

### setVerticalPosition()

```ts
setVerticalPosition(y): void;
```

Defined in: lib/fivem/ui/menu/items/panels/AbstractUIMenuPanel.d.ts:16

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `y` | `number` |

#### Returns

`void`
