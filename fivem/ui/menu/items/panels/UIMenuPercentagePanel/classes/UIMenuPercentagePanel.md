[@nativewrappers/fivem](../../../../../../../README.md) / [fivem/ui/menu/items/panels/UIMenuPercentagePanel](../README.md) / UIMenuPercentagePanel

# Class: UIMenuPercentagePanel

Defined in: lib/fivem/ui/menu/items/panels/UIMenuPercentagePanel.d.ts:3

## Extends

- [`AbstractUIMenuPanel`](../../AbstractUIMenuPanel/classes/AbstractUIMenuPanel.md)

## Constructors

### Constructor

```ts
new UIMenuPercentagePanel(
   title?, 
   percentage?, 
   minText?, 
   maxText?): UIMenuPercentagePanel;
```

Defined in: lib/fivem/ui/menu/items/panels/UIMenuPercentagePanel.d.ts:12

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `title?` | `string` |
| `percentage?` | `number` |
| `minText?` | `string` |
| `maxText?` | `string` |

#### Returns

`UIMenuPercentagePanel`

#### Overrides

[`AbstractUIMenuPanel`](../../AbstractUIMenuPanel/classes/AbstractUIMenuPanel.md).[`constructor`](../../AbstractUIMenuPanel/classes/AbstractUIMenuPanel.md#constructor)

## Properties

| Property | Modifier | Type | Overrides | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ | ------ |
| <a id="background"></a> `background` | `readonly` | [`Sprite`](../../../../../Sprite/classes/Sprite.md) | [`AbstractUIMenuPanel`](../../AbstractUIMenuPanel/classes/AbstractUIMenuPanel.md).[`background`](../../AbstractUIMenuPanel/classes/AbstractUIMenuPanel.md#background) | - | lib/fivem/ui/menu/items/panels/UIMenuPercentagePanel.d.ts:4 |
| <a id="enabled"></a> `enabled` | `protected` | `boolean` | - | [`AbstractUIMenuPanel`](../../AbstractUIMenuPanel/classes/AbstractUIMenuPanel.md).[`enabled`](../../AbstractUIMenuPanel/classes/AbstractUIMenuPanel.md#enabled) | lib/fivem/ui/menu/items/panels/AbstractUIMenuPanel.d.ts:8 |
| <a id="id"></a> `id` | `readonly` | `string` | - | [`AbstractUIMenuPanel`](../../AbstractUIMenuPanel/classes/AbstractUIMenuPanel.md).[`id`](../../AbstractUIMenuPanel/classes/AbstractUIMenuPanel.md#id) | lib/fivem/ui/menu/items/panels/AbstractUIMenuPanel.d.ts:6 |
| <a id="parentitem"></a> `parentItem?` | `protected` | [`UIMenuItem`](../../../UIMenuItem/classes/UIMenuItem.md) | - | [`AbstractUIMenuPanel`](../../AbstractUIMenuPanel/classes/AbstractUIMenuPanel.md).[`parentItem`](../../AbstractUIMenuPanel/classes/AbstractUIMenuPanel.md#parentitem) | lib/fivem/ui/menu/items/panels/AbstractUIMenuPanel.d.ts:7 |

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

### MaxText

#### Get Signature

```ts
get MaxText(): string;
```

Defined in: lib/fivem/ui/menu/items/panels/UIMenuPercentagePanel.d.ts:17

##### Returns

`string`

#### Set Signature

```ts
set MaxText(value): void;
```

Defined in: lib/fivem/ui/menu/items/panels/UIMenuPercentagePanel.d.ts:18

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `string` |

##### Returns

`void`

***

### MinText

#### Get Signature

```ts
get MinText(): string;
```

Defined in: lib/fivem/ui/menu/items/panels/UIMenuPercentagePanel.d.ts:15

##### Returns

`string`

#### Set Signature

```ts
set MinText(value): void;
```

Defined in: lib/fivem/ui/menu/items/panels/UIMenuPercentagePanel.d.ts:16

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `string` |

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

### Percentage

#### Get Signature

```ts
get Percentage(): number;
```

Defined in: lib/fivem/ui/menu/items/panels/UIMenuPercentagePanel.d.ts:19

##### Returns

`number`

#### Set Signature

```ts
set Percentage(value): void;
```

Defined in: lib/fivem/ui/menu/items/panels/UIMenuPercentagePanel.d.ts:20

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

##### Returns

`void`

***

### Title

#### Get Signature

```ts
get Title(): string;
```

Defined in: lib/fivem/ui/menu/items/panels/UIMenuPercentagePanel.d.ts:13

##### Returns

`string`

#### Set Signature

```ts
set Title(value): void;
```

Defined in: lib/fivem/ui/menu/items/panels/UIMenuPercentagePanel.d.ts:14

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

Defined in: lib/fivem/ui/menu/items/panels/UIMenuPercentagePanel.d.ts:23

#### Returns

`void`

#### Overrides

[`AbstractUIMenuPanel`](../../AbstractUIMenuPanel/classes/AbstractUIMenuPanel.md).[`draw`](../../AbstractUIMenuPanel/classes/AbstractUIMenuPanel.md#draw)

***

### setVerticalPosition()

```ts
setVerticalPosition(y): void;
```

Defined in: lib/fivem/ui/menu/items/panels/UIMenuPercentagePanel.d.ts:22

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

Defined in: lib/fivem/ui/menu/items/panels/UIMenuPercentagePanel.d.ts:21

#### Returns

`void`
