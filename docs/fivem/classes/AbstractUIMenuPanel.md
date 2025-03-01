[@nativewrappers/fivem](../../README.md) / [fivem](../README.md) / AbstractUIMenuPanel

# Class: `abstract` AbstractUIMenuPanel

Defined in: [src/fivem/ui/menu/items/panels/AbstractUIMenuPanel.ts:6](https://github.com/nativewrappers/nativewrappers/blob/bf1d263f0188667cde482dc5657983cf3674a640/src/fivem/ui/menu/items/panels/AbstractUIMenuPanel.ts#L6)

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

| Property | Modifier | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="background"></a> `background?` | `readonly` | [`Rectangle`](Rectangle.md) \| [`Sprite`](Sprite.md) | `undefined` | [src/fivem/ui/menu/items/panels/AbstractUIMenuPanel.ts:12](https://github.com/nativewrappers/nativewrappers/blob/bf1d263f0188667cde482dc5657983cf3674a640/src/fivem/ui/menu/items/panels/AbstractUIMenuPanel.ts#L12) |
| <a id="enabled"></a> `enabled` | `protected` | `boolean` | `true` | [src/fivem/ui/menu/items/panels/AbstractUIMenuPanel.ts:10](https://github.com/nativewrappers/nativewrappers/blob/bf1d263f0188667cde482dc5657983cf3674a640/src/fivem/ui/menu/items/panels/AbstractUIMenuPanel.ts#L10) |
| <a id="id"></a> `id` | `readonly` | `string` | `undefined` | [src/fivem/ui/menu/items/panels/AbstractUIMenuPanel.ts:7](https://github.com/nativewrappers/nativewrappers/blob/bf1d263f0188667cde482dc5657983cf3674a640/src/fivem/ui/menu/items/panels/AbstractUIMenuPanel.ts#L7) |
| <a id="parentitem"></a> `parentItem?` | `protected` | [`UIMenuItem`](UIMenuItem.md) | `undefined` | [src/fivem/ui/menu/items/panels/AbstractUIMenuPanel.ts:9](https://github.com/nativewrappers/nativewrappers/blob/bf1d263f0188667cde482dc5657983cf3674a640/src/fivem/ui/menu/items/panels/AbstractUIMenuPanel.ts#L9) |

## Accessors

### Enabled

#### Get Signature

```ts
get Enabled(): boolean
```

Defined in: [src/fivem/ui/menu/items/panels/AbstractUIMenuPanel.ts:26](https://github.com/nativewrappers/nativewrappers/blob/bf1d263f0188667cde482dc5657983cf3674a640/src/fivem/ui/menu/items/panels/AbstractUIMenuPanel.ts#L26)

##### Returns

`boolean`

#### Set Signature

```ts
set Enabled(value): void
```

Defined in: [src/fivem/ui/menu/items/panels/AbstractUIMenuPanel.ts:30](https://github.com/nativewrappers/nativewrappers/blob/bf1d263f0188667cde482dc5657983cf3674a640/src/fivem/ui/menu/items/panels/AbstractUIMenuPanel.ts#L30)

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

Defined in: [src/fivem/ui/menu/items/panels/AbstractUIMenuPanel.ts:34](https://github.com/nativewrappers/nativewrappers/blob/bf1d263f0188667cde482dc5657983cf3674a640/src/fivem/ui/menu/items/panels/AbstractUIMenuPanel.ts#L34)

##### Returns

`number`

***

### ParentItem

#### Get Signature

```ts
get ParentItem(): undefined | UIMenuItem
```

Defined in: [src/fivem/ui/menu/items/panels/AbstractUIMenuPanel.ts:18](https://github.com/nativewrappers/nativewrappers/blob/bf1d263f0188667cde482dc5657983cf3674a640/src/fivem/ui/menu/items/panels/AbstractUIMenuPanel.ts#L18)

##### Returns

`undefined` \| [`UIMenuItem`](UIMenuItem.md)

#### Set Signature

```ts
set ParentItem(value): void
```

Defined in: [src/fivem/ui/menu/items/panels/AbstractUIMenuPanel.ts:22](https://github.com/nativewrappers/nativewrappers/blob/bf1d263f0188667cde482dc5657983cf3674a640/src/fivem/ui/menu/items/panels/AbstractUIMenuPanel.ts#L22)

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

Defined in: [src/fivem/ui/menu/items/panels/AbstractUIMenuPanel.ts:14](https://github.com/nativewrappers/nativewrappers/blob/bf1d263f0188667cde482dc5657983cf3674a640/src/fivem/ui/menu/items/panels/AbstractUIMenuPanel.ts#L14)

##### Returns

`undefined` \| [`Menu`](Menu.md)

## Methods

### draw()

```ts
draw(): void
```

Defined in: [src/fivem/ui/menu/items/panels/AbstractUIMenuPanel.ts:42](https://github.com/nativewrappers/nativewrappers/blob/bf1d263f0188667cde482dc5657983cf3674a640/src/fivem/ui/menu/items/panels/AbstractUIMenuPanel.ts#L42)

#### Returns

`void`

***

### setVerticalPosition()

```ts
setVerticalPosition(y): void
```

Defined in: [src/fivem/ui/menu/items/panels/AbstractUIMenuPanel.ts:38](https://github.com/nativewrappers/nativewrappers/blob/bf1d263f0188667cde482dc5657983cf3674a640/src/fivem/ui/menu/items/panels/AbstractUIMenuPanel.ts#L38)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `y` | `number` |

#### Returns

`void`
