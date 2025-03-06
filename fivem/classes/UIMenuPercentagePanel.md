[@nativewrappers/fivem](../../README.md) / [fivem](../README.md) / UIMenuPercentagePanel

# Class: UIMenuPercentagePanel

Defined in: fivem/ui/menu/items/panels/UIMenuPercentagePanel.d.ts:3

## Extends

- [`AbstractUIMenuPanel`](AbstractUIMenuPanel.md)

## Constructors

### new UIMenuPercentagePanel()

```ts
new UIMenuPercentagePanel(
   title?, 
   percentage?, 
   minText?, 
   maxText?): UIMenuPercentagePanel
```

Defined in: fivem/ui/menu/items/panels/UIMenuPercentagePanel.d.ts:12

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `title`? | `string` |
| `percentage`? | `number` |
| `minText`? | `string` |
| `maxText`? | `string` |

#### Returns

[`UIMenuPercentagePanel`](UIMenuPercentagePanel.md)

#### Overrides

[`AbstractUIMenuPanel`](AbstractUIMenuPanel.md).[`constructor`](AbstractUIMenuPanel.md#constructors)

## Properties

| Property | Modifier | Type | Overrides | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ | ------ |
| <a id="background"></a> `background` | `readonly` | [`Sprite`](Sprite.md) | [`AbstractUIMenuPanel`](AbstractUIMenuPanel.md).[`background`](AbstractUIMenuPanel.md#background) | - | fivem/ui/menu/items/panels/UIMenuPercentagePanel.d.ts:4 |
| <a id="enabled"></a> `enabled` | `protected` | `boolean` | - | [`AbstractUIMenuPanel`](AbstractUIMenuPanel.md).[`enabled`](AbstractUIMenuPanel.md#enabled) | fivem/ui/menu/items/panels/AbstractUIMenuPanel.d.ts:7 |
| <a id="id"></a> `id` | `readonly` | `string` | - | [`AbstractUIMenuPanel`](AbstractUIMenuPanel.md).[`id`](AbstractUIMenuPanel.md#id) | fivem/ui/menu/items/panels/AbstractUIMenuPanel.d.ts:5 |
| <a id="parentitem"></a> `parentItem?` | `protected` | [`UIMenuItem`](UIMenuItem.md) | - | [`AbstractUIMenuPanel`](AbstractUIMenuPanel.md).[`parentItem`](AbstractUIMenuPanel.md#parentitem) | fivem/ui/menu/items/panels/AbstractUIMenuPanel.d.ts:6 |

## Accessors

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

### MaxText

#### Get Signature

```ts
get MaxText(): string
```

Defined in: fivem/ui/menu/items/panels/UIMenuPercentagePanel.d.ts:17

##### Returns

`string`

#### Set Signature

```ts
set MaxText(value): void
```

Defined in: fivem/ui/menu/items/panels/UIMenuPercentagePanel.d.ts:18

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
get MinText(): string
```

Defined in: fivem/ui/menu/items/panels/UIMenuPercentagePanel.d.ts:15

##### Returns

`string`

#### Set Signature

```ts
set MinText(value): void
```

Defined in: fivem/ui/menu/items/panels/UIMenuPercentagePanel.d.ts:16

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

***

### Percentage

#### Get Signature

```ts
get Percentage(): number
```

Defined in: fivem/ui/menu/items/panels/UIMenuPercentagePanel.d.ts:19

##### Returns

`number`

#### Set Signature

```ts
set Percentage(value): void
```

Defined in: fivem/ui/menu/items/panels/UIMenuPercentagePanel.d.ts:20

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
get Title(): string
```

Defined in: fivem/ui/menu/items/panels/UIMenuPercentagePanel.d.ts:13

##### Returns

`string`

#### Set Signature

```ts
set Title(value): void
```

Defined in: fivem/ui/menu/items/panels/UIMenuPercentagePanel.d.ts:14

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `string` |

##### Returns

`void`

## Methods

### draw()

```ts
draw(): void
```

Defined in: fivem/ui/menu/items/panels/UIMenuPercentagePanel.d.ts:23

#### Returns

`void`

#### Overrides

[`AbstractUIMenuPanel`](AbstractUIMenuPanel.md).[`draw`](AbstractUIMenuPanel.md#draw)

***

### setVerticalPosition()

```ts
setVerticalPosition(y): void
```

Defined in: fivem/ui/menu/items/panels/UIMenuPercentagePanel.d.ts:22

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `y` | `number` |

#### Returns

`void`

#### Overrides

[`AbstractUIMenuPanel`](AbstractUIMenuPanel.md).[`setVerticalPosition`](AbstractUIMenuPanel.md#setverticalposition)

***

### updateParentItem()

```ts
updateParentItem(): void
```

Defined in: fivem/ui/menu/items/panels/UIMenuPercentagePanel.d.ts:21

#### Returns

`void`
