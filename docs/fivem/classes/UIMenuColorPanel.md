[@nativewrappers/fivem](../../README.md) / [fivem](../README.md) / UIMenuColorPanel

# Class: UIMenuColorPanel

Defined in: [src/fivem/ui/menu/items/panels/UIMenuColorPanel.ts:7](https://github.com/nativewrappers/nativewrappers/blob/3a5a8937f4f56e42414bc65083bf196262ee500c/src/fivem/ui/menu/items/panels/UIMenuColorPanel.ts#L7)

## Extends

- [`AbstractUIMenuPanel`](AbstractUIMenuPanel.md)

## Constructors

### new UIMenuColorPanel()

```ts
new UIMenuColorPanel(title, colors): UIMenuColorPanel
```

Defined in: [src/fivem/ui/menu/items/panels/UIMenuColorPanel.ts:27](https://github.com/nativewrappers/nativewrappers/blob/3a5a8937f4f56e42414bc65083bf196262ee500c/src/fivem/ui/menu/items/panels/UIMenuColorPanel.ts#L27)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `title` | `string` |
| `colors` | [`Color`](Color.md)[] |

#### Returns

[`UIMenuColorPanel`](UIMenuColorPanel.md)

#### Overrides

[`AbstractUIMenuPanel`](AbstractUIMenuPanel.md).[`constructor`](AbstractUIMenuPanel.md#constructors)

## Properties

| Property | Modifier | Type | Default value | Overrides | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ | ------ | ------ |
| <a id="background"></a> `background` | `readonly` | [`Sprite`](Sprite.md) | `undefined` | [`AbstractUIMenuPanel`](AbstractUIMenuPanel.md).[`background`](AbstractUIMenuPanel.md#background) | - | [src/fivem/ui/menu/items/panels/UIMenuColorPanel.ts:8](https://github.com/nativewrappers/nativewrappers/blob/3a5a8937f4f56e42414bc65083bf196262ee500c/src/fivem/ui/menu/items/panels/UIMenuColorPanel.ts#L8) |
| <a id="enabled"></a> `enabled` | `protected` | `boolean` | `true` | - | [`AbstractUIMenuPanel`](AbstractUIMenuPanel.md).[`enabled`](AbstractUIMenuPanel.md#enabled) | [src/fivem/ui/menu/items/panels/AbstractUIMenuPanel.ts:10](https://github.com/nativewrappers/nativewrappers/blob/3a5a8937f4f56e42414bc65083bf196262ee500c/src/fivem/ui/menu/items/panels/AbstractUIMenuPanel.ts#L10) |
| <a id="id"></a> `id` | `readonly` | `string` | `undefined` | - | [`AbstractUIMenuPanel`](AbstractUIMenuPanel.md).[`id`](AbstractUIMenuPanel.md#id) | [src/fivem/ui/menu/items/panels/AbstractUIMenuPanel.ts:7](https://github.com/nativewrappers/nativewrappers/blob/3a5a8937f4f56e42414bc65083bf196262ee500c/src/fivem/ui/menu/items/panels/AbstractUIMenuPanel.ts#L7) |
| <a id="parentitem"></a> `parentItem?` | `protected` | [`UIMenuItem`](UIMenuItem.md) | `undefined` | - | [`AbstractUIMenuPanel`](AbstractUIMenuPanel.md).[`parentItem`](AbstractUIMenuPanel.md#parentitem) | [src/fivem/ui/menu/items/panels/AbstractUIMenuPanel.ts:9](https://github.com/nativewrappers/nativewrappers/blob/3a5a8937f4f56e42414bc65083bf196262ee500c/src/fivem/ui/menu/items/panels/AbstractUIMenuPanel.ts#L9) |

## Accessors

### Color

#### Get Signature

```ts
get Color(): Color
```

Defined in: [src/fivem/ui/menu/items/panels/UIMenuColorPanel.ts:91](https://github.com/nativewrappers/nativewrappers/blob/3a5a8937f4f56e42414bc65083bf196262ee500c/src/fivem/ui/menu/items/panels/UIMenuColorPanel.ts#L91)

##### Returns

[`Color`](Color.md)

#### Set Signature

```ts
set Color(value): void
```

Defined in: [src/fivem/ui/menu/items/panels/UIMenuColorPanel.ts:95](https://github.com/nativewrappers/nativewrappers/blob/3a5a8937f4f56e42414bc65083bf196262ee500c/src/fivem/ui/menu/items/panels/UIMenuColorPanel.ts#L95)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | [`Color`](Color.md) |

##### Returns

`void`

***

### Colors

#### Get Signature

```ts
get Colors(): Color[]
```

Defined in: [src/fivem/ui/menu/items/panels/UIMenuColorPanel.ts:73](https://github.com/nativewrappers/nativewrappers/blob/3a5a8937f4f56e42414bc65083bf196262ee500c/src/fivem/ui/menu/items/panels/UIMenuColorPanel.ts#L73)

##### Returns

[`Color`](Color.md)[]

#### Set Signature

```ts
set Colors(value): void
```

Defined in: [src/fivem/ui/menu/items/panels/UIMenuColorPanel.ts:77](https://github.com/nativewrappers/nativewrappers/blob/3a5a8937f4f56e42414bc65083bf196262ee500c/src/fivem/ui/menu/items/panels/UIMenuColorPanel.ts#L77)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | [`Color`](Color.md)[] |

##### Returns

`void`

***

### Enabled

#### Get Signature

```ts
get Enabled(): boolean
```

Defined in: [src/fivem/ui/menu/items/panels/AbstractUIMenuPanel.ts:26](https://github.com/nativewrappers/nativewrappers/blob/3a5a8937f4f56e42414bc65083bf196262ee500c/src/fivem/ui/menu/items/panels/AbstractUIMenuPanel.ts#L26)

##### Returns

`boolean`

#### Set Signature

```ts
set Enabled(value): void
```

Defined in: [src/fivem/ui/menu/items/panels/AbstractUIMenuPanel.ts:30](https://github.com/nativewrappers/nativewrappers/blob/3a5a8937f4f56e42414bc65083bf196262ee500c/src/fivem/ui/menu/items/panels/AbstractUIMenuPanel.ts#L30)

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

Defined in: [src/fivem/ui/menu/items/panels/AbstractUIMenuPanel.ts:34](https://github.com/nativewrappers/nativewrappers/blob/3a5a8937f4f56e42414bc65083bf196262ee500c/src/fivem/ui/menu/items/panels/AbstractUIMenuPanel.ts#L34)

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

Defined in: [src/fivem/ui/menu/items/panels/UIMenuColorPanel.ts:106](https://github.com/nativewrappers/nativewrappers/blob/3a5a8937f4f56e42414bc65083bf196262ee500c/src/fivem/ui/menu/items/panels/UIMenuColorPanel.ts#L106)

##### Returns

`number`

#### Set Signature

```ts
set Index(value): void
```

Defined in: [src/fivem/ui/menu/items/panels/UIMenuColorPanel.ts:110](https://github.com/nativewrappers/nativewrappers/blob/3a5a8937f4f56e42414bc65083bf196262ee500c/src/fivem/ui/menu/items/panels/UIMenuColorPanel.ts#L110)

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

Defined in: [src/fivem/ui/menu/items/panels/AbstractUIMenuPanel.ts:18](https://github.com/nativewrappers/nativewrappers/blob/3a5a8937f4f56e42414bc65083bf196262ee500c/src/fivem/ui/menu/items/panels/AbstractUIMenuPanel.ts#L18)

##### Returns

`undefined` \| [`UIMenuItem`](UIMenuItem.md)

#### Set Signature

```ts
set ParentItem(value): void
```

Defined in: [src/fivem/ui/menu/items/panels/AbstractUIMenuPanel.ts:22](https://github.com/nativewrappers/nativewrappers/blob/3a5a8937f4f56e42414bc65083bf196262ee500c/src/fivem/ui/menu/items/panels/AbstractUIMenuPanel.ts#L22)

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

Defined in: [src/fivem/ui/menu/items/panels/AbstractUIMenuPanel.ts:14](https://github.com/nativewrappers/nativewrappers/blob/3a5a8937f4f56e42414bc65083bf196262ee500c/src/fivem/ui/menu/items/panels/AbstractUIMenuPanel.ts#L14)

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

Defined in: [src/fivem/ui/menu/items/panels/UIMenuColorPanel.ts:64](https://github.com/nativewrappers/nativewrappers/blob/3a5a8937f4f56e42414bc65083bf196262ee500c/src/fivem/ui/menu/items/panels/UIMenuColorPanel.ts#L64)

##### Returns

`string`

#### Set Signature

```ts
set Title(value): void
```

Defined in: [src/fivem/ui/menu/items/panels/UIMenuColorPanel.ts:68](https://github.com/nativewrappers/nativewrappers/blob/3a5a8937f4f56e42414bc65083bf196262ee500c/src/fivem/ui/menu/items/panels/UIMenuColorPanel.ts#L68)

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

Defined in: [src/fivem/ui/menu/items/panels/UIMenuColorPanel.ts:161](https://github.com/nativewrappers/nativewrappers/blob/3a5a8937f4f56e42414bc65083bf196262ee500c/src/fivem/ui/menu/items/panels/UIMenuColorPanel.ts#L161)

#### Returns

`void`

#### Overrides

[`AbstractUIMenuPanel`](AbstractUIMenuPanel.md).[`draw`](AbstractUIMenuPanel.md#draw)

***

### setVerticalPosition()

```ts
setVerticalPosition(y): void
```

Defined in: [src/fivem/ui/menu/items/panels/UIMenuColorPanel.ts:150](https://github.com/nativewrappers/nativewrappers/blob/3a5a8937f4f56e42414bc65083bf196262ee500c/src/fivem/ui/menu/items/panels/UIMenuColorPanel.ts#L150)

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

Defined in: [src/fivem/ui/menu/items/panels/UIMenuColorPanel.ts:127](https://github.com/nativewrappers/nativewrappers/blob/3a5a8937f4f56e42414bc65083bf196262ee500c/src/fivem/ui/menu/items/panels/UIMenuColorPanel.ts#L127)

#### Returns

`void`
