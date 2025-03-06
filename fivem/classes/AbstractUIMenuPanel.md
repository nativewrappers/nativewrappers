[@nativewrappers/fivem](../../README.md) / [fivem](../README.md) / AbstractUIMenuPanel

# Class: `abstract` AbstractUIMenuPanel

Defined in: fivem/ui/menu/items/panels/AbstractUIMenuPanel.d.ts:4

## Extended by

- [`UIMenuGridPanel`](UIMenuGridPanel.md)
- [`UIMenuColorPanel`](UIMenuColorPanel.md)
- [`UIMenuPercentagePanel`](UIMenuPercentagePanel.md)
- [`UIMenuStatisticsPanel`](UIMenuStatisticsPanel.md)

## Constructors

### new AbstractUIMenuPanel()

```ts
new AbstractUIMenuPanel(): AbstractUIMenuPanel
```

#### Returns

[`AbstractUIMenuPanel`](AbstractUIMenuPanel.md)

## Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="background"></a> `background?` | `readonly` | [`Rectangle`](Rectangle.md) \| [`Sprite`](Sprite.md) | fivem/ui/menu/items/panels/AbstractUIMenuPanel.d.ts:8 |
| <a id="enabled"></a> `enabled` | `protected` | `boolean` | fivem/ui/menu/items/panels/AbstractUIMenuPanel.d.ts:7 |
| <a id="id"></a> `id` | `readonly` | `string` | fivem/ui/menu/items/panels/AbstractUIMenuPanel.d.ts:5 |
| <a id="parentitem"></a> `parentItem?` | `protected` | [`UIMenuItem`](UIMenuItem.md) | fivem/ui/menu/items/panels/AbstractUIMenuPanel.d.ts:6 |

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

***

### Height

#### Get Signature

```ts
get Height(): number
```

Defined in: fivem/ui/menu/items/panels/AbstractUIMenuPanel.d.ts:14

##### Returns

`number`

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

***

### ParentMenu

#### Get Signature

```ts
get ParentMenu(): undefined | Menu
```

Defined in: fivem/ui/menu/items/panels/AbstractUIMenuPanel.d.ts:9

##### Returns

`undefined` \| [`Menu`](Menu.md)

## Methods

### draw()

```ts
draw(): void
```

Defined in: fivem/ui/menu/items/panels/AbstractUIMenuPanel.d.ts:16

#### Returns

`void`

***

### setVerticalPosition()

```ts
setVerticalPosition(y): void
```

Defined in: fivem/ui/menu/items/panels/AbstractUIMenuPanel.d.ts:15

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `y` | `number` |

#### Returns

`void`
