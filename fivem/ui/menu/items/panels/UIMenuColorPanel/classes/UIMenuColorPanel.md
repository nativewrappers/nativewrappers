[@nativewrappers/fivem](../../../../../../../README.md) / [fivem/ui/menu/items/panels/UIMenuColorPanel](../README.md) / UIMenuColorPanel

# Class: UIMenuColorPanel

Defined in: lib/fivem/ui/menu/items/panels/UIMenuColorPanel.d.ts:4

## Extends

- [`AbstractUIMenuPanel`](../../AbstractUIMenuPanel/classes/AbstractUIMenuPanel.md)

## Constructors

### Constructor

```ts
new UIMenuColorPanel(title, colors): UIMenuColorPanel;
```

Defined in: lib/fivem/ui/menu/items/panels/UIMenuColorPanel.d.ts:18

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `title` | `string` |
| `colors` | `Color`[] |

#### Returns

`UIMenuColorPanel`

#### Overrides

[`AbstractUIMenuPanel`](../../AbstractUIMenuPanel/classes/AbstractUIMenuPanel.md).[`constructor`](../../AbstractUIMenuPanel/classes/AbstractUIMenuPanel.md#constructor)

## Properties

| Property | Modifier | Type | Overrides | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ | ------ |
| <a id="background"></a> `background` | `readonly` | [`Sprite`](../../../../../Sprite/classes/Sprite.md) | [`AbstractUIMenuPanel`](../../AbstractUIMenuPanel/classes/AbstractUIMenuPanel.md).[`background`](../../AbstractUIMenuPanel/classes/AbstractUIMenuPanel.md#background) | - | lib/fivem/ui/menu/items/panels/UIMenuColorPanel.d.ts:5 |
| <a id="enabled"></a> `enabled` | `protected` | `boolean` | - | [`AbstractUIMenuPanel`](../../AbstractUIMenuPanel/classes/AbstractUIMenuPanel.md).[`enabled`](../../AbstractUIMenuPanel/classes/AbstractUIMenuPanel.md#enabled) | lib/fivem/ui/menu/items/panels/AbstractUIMenuPanel.d.ts:8 |
| <a id="id"></a> `id` | `readonly` | `string` | - | [`AbstractUIMenuPanel`](../../AbstractUIMenuPanel/classes/AbstractUIMenuPanel.md).[`id`](../../AbstractUIMenuPanel/classes/AbstractUIMenuPanel.md#id) | lib/fivem/ui/menu/items/panels/AbstractUIMenuPanel.d.ts:6 |
| <a id="parentitem"></a> `parentItem?` | `protected` | [`UIMenuItem`](../../../UIMenuItem/classes/UIMenuItem.md) | - | [`AbstractUIMenuPanel`](../../AbstractUIMenuPanel/classes/AbstractUIMenuPanel.md).[`parentItem`](../../AbstractUIMenuPanel/classes/AbstractUIMenuPanel.md#parentitem) | lib/fivem/ui/menu/items/panels/AbstractUIMenuPanel.d.ts:7 |

## Accessors

### Color

#### Get Signature

```ts
get Color(): Color;
```

Defined in: lib/fivem/ui/menu/items/panels/UIMenuColorPanel.d.ts:23

##### Returns

`Color`

#### Set Signature

```ts
set Color(value): void;
```

Defined in: lib/fivem/ui/menu/items/panels/UIMenuColorPanel.d.ts:24

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `Color` |

##### Returns

`void`

***

### Colors

#### Get Signature

```ts
get Colors(): Color[];
```

Defined in: lib/fivem/ui/menu/items/panels/UIMenuColorPanel.d.ts:21

##### Returns

`Color`[]

#### Set Signature

```ts
set Colors(value): void;
```

Defined in: lib/fivem/ui/menu/items/panels/UIMenuColorPanel.d.ts:22

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `Color`[] |

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

### Index

#### Get Signature

```ts
get Index(): number;
```

Defined in: lib/fivem/ui/menu/items/panels/UIMenuColorPanel.d.ts:25

##### Returns

`number`

#### Set Signature

```ts
set Index(value): void;
```

Defined in: lib/fivem/ui/menu/items/panels/UIMenuColorPanel.d.ts:26

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

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

***

### Title

#### Get Signature

```ts
get Title(): string;
```

Defined in: lib/fivem/ui/menu/items/panels/UIMenuColorPanel.d.ts:19

##### Returns

`string`

#### Set Signature

```ts
set Title(value): void;
```

Defined in: lib/fivem/ui/menu/items/panels/UIMenuColorPanel.d.ts:20

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `string` |

##### Returns

`void`

## Methods

### draw()

```ts
draw(): void;
```

Defined in: lib/fivem/ui/menu/items/panels/UIMenuColorPanel.d.ts:29

#### Returns

`void`

#### Overrides

[`AbstractUIMenuPanel`](../../AbstractUIMenuPanel/classes/AbstractUIMenuPanel.md).[`draw`](../../AbstractUIMenuPanel/classes/AbstractUIMenuPanel.md#draw)

***

### setVerticalPosition()

```ts
setVerticalPosition(y): void;
```

Defined in: lib/fivem/ui/menu/items/panels/UIMenuColorPanel.d.ts:28

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `y` | `number` |

#### Returns

`void`

#### Overrides

[`AbstractUIMenuPanel`](../../AbstractUIMenuPanel/classes/AbstractUIMenuPanel.md).[`setVerticalPosition`](../../AbstractUIMenuPanel/classes/AbstractUIMenuPanel.md#setverticalposition)

***

### updateParentItem()

```ts
updateParentItem(): void;
```

Defined in: lib/fivem/ui/menu/items/panels/UIMenuColorPanel.d.ts:27

#### Returns

`void`
