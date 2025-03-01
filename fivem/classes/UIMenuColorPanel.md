[@nativewrappers/fivem](../../README.md) / [fivem](../README.md) / UIMenuColorPanel

# Class: UIMenuColorPanel

Defined in: fivem/ui/menu/items/panels/UIMenuColorPanel.d.ts:4

## Extends

- [`AbstractUIMenuPanel`](AbstractUIMenuPanel.md)

## Constructors

### new UIMenuColorPanel()

```ts
new UIMenuColorPanel(title, colors): UIMenuColorPanel
```

Defined in: fivem/ui/menu/items/panels/UIMenuColorPanel.d.ts:18

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `title` | `string` |
| `colors` | `Color`[] |

#### Returns

[`UIMenuColorPanel`](UIMenuColorPanel.md)

#### Overrides

[`AbstractUIMenuPanel`](AbstractUIMenuPanel.md).[`constructor`](AbstractUIMenuPanel.md#constructors)

## Properties

| Property | Modifier | Type | Overrides | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ | ------ |
| <a id="background"></a> `background` | `readonly` | [`Sprite`](Sprite.md) | [`AbstractUIMenuPanel`](AbstractUIMenuPanel.md).[`background`](AbstractUIMenuPanel.md#background) | - | fivem/ui/menu/items/panels/UIMenuColorPanel.d.ts:5 |
| <a id="enabled"></a> `enabled` | `protected` | `boolean` | - | [`AbstractUIMenuPanel`](AbstractUIMenuPanel.md).[`enabled`](AbstractUIMenuPanel.md#enabled) | fivem/ui/menu/items/panels/AbstractUIMenuPanel.d.ts:7 |
| <a id="id"></a> `id` | `readonly` | `string` | - | [`AbstractUIMenuPanel`](AbstractUIMenuPanel.md).[`id`](AbstractUIMenuPanel.md#id) | fivem/ui/menu/items/panels/AbstractUIMenuPanel.d.ts:5 |
| <a id="parentitem"></a> `parentItem?` | `protected` | [`UIMenuItem`](UIMenuItem.md) | - | [`AbstractUIMenuPanel`](AbstractUIMenuPanel.md).[`parentItem`](AbstractUIMenuPanel.md#parentitem) | fivem/ui/menu/items/panels/AbstractUIMenuPanel.d.ts:6 |

## Accessors

### Color

#### Get Signature

```ts
get Color(): Color
```

Defined in: fivem/ui/menu/items/panels/UIMenuColorPanel.d.ts:23

##### Returns

`Color`

#### Set Signature

```ts
set Color(value): void
```

Defined in: fivem/ui/menu/items/panels/UIMenuColorPanel.d.ts:24

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
get Colors(): Color[]
```

Defined in: fivem/ui/menu/items/panels/UIMenuColorPanel.d.ts:21

##### Returns

`Color`[]

#### Set Signature

```ts
set Colors(value): void
```

Defined in: fivem/ui/menu/items/panels/UIMenuColorPanel.d.ts:22

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

### Index

#### Get Signature

```ts
get Index(): number
```

Defined in: fivem/ui/menu/items/panels/UIMenuColorPanel.d.ts:25

##### Returns

`number`

#### Set Signature

```ts
set Index(value): void
```

Defined in: fivem/ui/menu/items/panels/UIMenuColorPanel.d.ts:26

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

### Title

#### Get Signature

```ts
get Title(): string
```

Defined in: fivem/ui/menu/items/panels/UIMenuColorPanel.d.ts:19

##### Returns

`string`

#### Set Signature

```ts
set Title(value): void
```

Defined in: fivem/ui/menu/items/panels/UIMenuColorPanel.d.ts:20

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

Defined in: fivem/ui/menu/items/panels/UIMenuColorPanel.d.ts:29

#### Returns

`void`

#### Overrides

[`AbstractUIMenuPanel`](AbstractUIMenuPanel.md).[`draw`](AbstractUIMenuPanel.md#draw)

***

### setVerticalPosition()

```ts
setVerticalPosition(y): void
```

Defined in: fivem/ui/menu/items/panels/UIMenuColorPanel.d.ts:28

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

Defined in: fivem/ui/menu/items/panels/UIMenuColorPanel.d.ts:27

#### Returns

`void`
