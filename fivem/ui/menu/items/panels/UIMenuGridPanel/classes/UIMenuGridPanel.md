[@nativewrappers/fivem](../../../../../../../README.md) / [fivem/ui/menu/items/panels/UIMenuGridPanel](../README.md) / UIMenuGridPanel

# Class: UIMenuGridPanel

Defined in: lib/fivem/ui/menu/items/panels/UIMenuGridPanel.d.ts:4

## Extends

- [`AbstractUIMenuPanel`](../../AbstractUIMenuPanel/classes/AbstractUIMenuPanel.md)

## Constructors

### Constructor

```ts
new UIMenuGridPanel(
   topText?, 
   leftText?, 
   rightText?, 
   bottomText?, 
   circlePosition?): UIMenuGridPanel;
```

Defined in: lib/fivem/ui/menu/items/panels/UIMenuGridPanel.d.ts:18

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `topText?` | `string` |
| `leftText?` | `string` |
| `rightText?` | `string` |
| `bottomText?` | `string` |
| `circlePosition?` | [`Point`](../../../../../../utils/Point/classes/Point.md) |

#### Returns

`UIMenuGridPanel`

#### Overrides

[`AbstractUIMenuPanel`](../../AbstractUIMenuPanel/classes/AbstractUIMenuPanel.md).[`constructor`](../../AbstractUIMenuPanel/classes/AbstractUIMenuPanel.md#constructor)

## Properties

| Property | Modifier | Type | Overrides | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ | ------ |
| <a id="background"></a> `background` | `readonly` | [`Sprite`](../../../../../Sprite/classes/Sprite.md) | [`AbstractUIMenuPanel`](../../AbstractUIMenuPanel/classes/AbstractUIMenuPanel.md).[`background`](../../AbstractUIMenuPanel/classes/AbstractUIMenuPanel.md#background) | - | lib/fivem/ui/menu/items/panels/UIMenuGridPanel.d.ts:5 |
| <a id="enabled"></a> `enabled` | `protected` | `boolean` | - | [`AbstractUIMenuPanel`](../../AbstractUIMenuPanel/classes/AbstractUIMenuPanel.md).[`enabled`](../../AbstractUIMenuPanel/classes/AbstractUIMenuPanel.md#enabled) | lib/fivem/ui/menu/items/panels/AbstractUIMenuPanel.d.ts:8 |
| <a id="id"></a> `id` | `readonly` | `string` | - | [`AbstractUIMenuPanel`](../../AbstractUIMenuPanel/classes/AbstractUIMenuPanel.md).[`id`](../../AbstractUIMenuPanel/classes/AbstractUIMenuPanel.md#id) | lib/fivem/ui/menu/items/panels/AbstractUIMenuPanel.d.ts:6 |
| <a id="parentitem"></a> `parentItem?` | `protected` | [`UIMenuItem`](../../../UIMenuItem/classes/UIMenuItem.md) | - | [`AbstractUIMenuPanel`](../../AbstractUIMenuPanel/classes/AbstractUIMenuPanel.md).[`parentItem`](../../AbstractUIMenuPanel/classes/AbstractUIMenuPanel.md#parentitem) | lib/fivem/ui/menu/items/panels/AbstractUIMenuPanel.d.ts:7 |

## Accessors

### BottomText

#### Get Signature

```ts
get BottomText(): string;
```

Defined in: lib/fivem/ui/menu/items/panels/UIMenuGridPanel.d.ts:25

##### Returns

`string`

#### Set Signature

```ts
set BottomText(value): void;
```

Defined in: lib/fivem/ui/menu/items/panels/UIMenuGridPanel.d.ts:26

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `string` |

##### Returns

`void`

***

### CirclePosition

#### Get Signature

```ts
get CirclePosition(): Point;
```

Defined in: lib/fivem/ui/menu/items/panels/UIMenuGridPanel.d.ts:27

##### Returns

[`Point`](../../../../../../utils/Point/classes/Point.md)

#### Set Signature

```ts
set CirclePosition(position): void;
```

Defined in: lib/fivem/ui/menu/items/panels/UIMenuGridPanel.d.ts:28

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `position` | [`Point`](../../../../../../utils/Point/classes/Point.md) |

##### Returns

`void`

***

### CirclePositionX

#### Set Signature

```ts
set CirclePositionX(x): void;
```

Defined in: lib/fivem/ui/menu/items/panels/UIMenuGridPanel.d.ts:29

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `x` | `number` |

##### Returns

`void`

***

### CirclePositionY

#### Set Signature

```ts
set CirclePositionY(y): void;
```

Defined in: lib/fivem/ui/menu/items/panels/UIMenuGridPanel.d.ts:30

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `y` | `number` |

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

### LeftText

#### Get Signature

```ts
get LeftText(): string;
```

Defined in: lib/fivem/ui/menu/items/panels/UIMenuGridPanel.d.ts:21

##### Returns

`string`

#### Set Signature

```ts
set LeftText(value): void;
```

Defined in: lib/fivem/ui/menu/items/panels/UIMenuGridPanel.d.ts:22

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `string` |

##### Returns

`void`

***

### LockXAxis

#### Get Signature

```ts
get LockXAxis(): boolean;
```

Defined in: lib/fivem/ui/menu/items/panels/UIMenuGridPanel.d.ts:31

##### Returns

`boolean`

#### Set Signature

```ts
set LockXAxis(value): void;
```

Defined in: lib/fivem/ui/menu/items/panels/UIMenuGridPanel.d.ts:32

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

##### Returns

`void`

***

### LockYAxis

#### Get Signature

```ts
get LockYAxis(): boolean;
```

Defined in: lib/fivem/ui/menu/items/panels/UIMenuGridPanel.d.ts:33

##### Returns

`boolean`

#### Set Signature

```ts
set LockYAxis(value): void;
```

Defined in: lib/fivem/ui/menu/items/panels/UIMenuGridPanel.d.ts:34

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

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

### RightText

#### Get Signature

```ts
get RightText(): string;
```

Defined in: lib/fivem/ui/menu/items/panels/UIMenuGridPanel.d.ts:23

##### Returns

`string`

#### Set Signature

```ts
set RightText(value): void;
```

Defined in: lib/fivem/ui/menu/items/panels/UIMenuGridPanel.d.ts:24

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `string` |

##### Returns

`void`

***

### TopText

#### Get Signature

```ts
get TopText(): string;
```

Defined in: lib/fivem/ui/menu/items/panels/UIMenuGridPanel.d.ts:19

##### Returns

`string`

#### Set Signature

```ts
set TopText(value): void;
```

Defined in: lib/fivem/ui/menu/items/panels/UIMenuGridPanel.d.ts:20

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

Defined in: lib/fivem/ui/menu/items/panels/UIMenuGridPanel.d.ts:37

#### Returns

`void`

#### Overrides

[`AbstractUIMenuPanel`](../../AbstractUIMenuPanel/classes/AbstractUIMenuPanel.md).[`draw`](../../AbstractUIMenuPanel/classes/AbstractUIMenuPanel.md#draw)

***

### setVerticalPosition()

```ts
setVerticalPosition(y): void;
```

Defined in: lib/fivem/ui/menu/items/panels/UIMenuGridPanel.d.ts:36

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

Defined in: lib/fivem/ui/menu/items/panels/UIMenuGridPanel.d.ts:35

#### Returns

`void`
