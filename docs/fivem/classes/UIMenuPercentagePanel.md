[@nativewrappers/fivem](../../README.md) / [fivem](../README.md) / UIMenuPercentagePanel

# Class: UIMenuPercentagePanel

Defined in: [src/fivem/ui/menu/items/panels/UIMenuPercentagePanel.ts:7](https://github.com/nativewrappers/nativewrappers/blob/fae5ced8514b2702c9e091cb4666009f585dc560/src/fivem/ui/menu/items/panels/UIMenuPercentagePanel.ts#L7)

## Extends

- [`AbstractUIMenuPanel`](AbstractUIMenuPanel.md)

## Constructors

### new UIMenuPercentagePanel()

```ts
new UIMenuPercentagePanel(
   title, 
   percentage, 
   minText?, 
   maxText?): UIMenuPercentagePanel
```

Defined in: [src/fivem/ui/menu/items/panels/UIMenuPercentagePanel.ts:20](https://github.com/nativewrappers/nativewrappers/blob/fae5ced8514b2702c9e091cb4666009f585dc560/src/fivem/ui/menu/items/panels/UIMenuPercentagePanel.ts#L20)

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `title` | `string` | `""` |
| `percentage` | `number` | `0` |
| `minText`? | `string` | `undefined` |
| `maxText`? | `string` | `undefined` |

#### Returns

[`UIMenuPercentagePanel`](UIMenuPercentagePanel.md)

#### Overrides

[`AbstractUIMenuPanel`](AbstractUIMenuPanel.md).[`constructor`](AbstractUIMenuPanel.md#constructors)

## Properties

| Property | Modifier | Type | Default value | Overrides | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ | ------ | ------ |
| <a id="background"></a> `background` | `readonly` | [`Sprite`](Sprite.md) | `undefined` | [`AbstractUIMenuPanel`](AbstractUIMenuPanel.md).[`background`](AbstractUIMenuPanel.md#background) | - | [src/fivem/ui/menu/items/panels/UIMenuPercentagePanel.ts:8](https://github.com/nativewrappers/nativewrappers/blob/fae5ced8514b2702c9e091cb4666009f585dc560/src/fivem/ui/menu/items/panels/UIMenuPercentagePanel.ts#L8) |
| <a id="enabled"></a> `enabled` | `protected` | `boolean` | `true` | - | [`AbstractUIMenuPanel`](AbstractUIMenuPanel.md).[`enabled`](AbstractUIMenuPanel.md#enabled) | [src/fivem/ui/menu/items/panels/AbstractUIMenuPanel.ts:10](https://github.com/nativewrappers/nativewrappers/blob/fae5ced8514b2702c9e091cb4666009f585dc560/src/fivem/ui/menu/items/panels/AbstractUIMenuPanel.ts#L10) |
| <a id="id"></a> `id` | `readonly` | `string` | `undefined` | - | [`AbstractUIMenuPanel`](AbstractUIMenuPanel.md).[`id`](AbstractUIMenuPanel.md#id) | [src/fivem/ui/menu/items/panels/AbstractUIMenuPanel.ts:7](https://github.com/nativewrappers/nativewrappers/blob/fae5ced8514b2702c9e091cb4666009f585dc560/src/fivem/ui/menu/items/panels/AbstractUIMenuPanel.ts#L7) |
| <a id="parentitem"></a> `parentItem?` | `protected` | [`UIMenuItem`](UIMenuItem.md) | `undefined` | - | [`AbstractUIMenuPanel`](AbstractUIMenuPanel.md).[`parentItem`](AbstractUIMenuPanel.md#parentitem) | [src/fivem/ui/menu/items/panels/AbstractUIMenuPanel.ts:9](https://github.com/nativewrappers/nativewrappers/blob/fae5ced8514b2702c9e091cb4666009f585dc560/src/fivem/ui/menu/items/panels/AbstractUIMenuPanel.ts#L9) |

## Accessors

### Enabled

#### Get Signature

```ts
get Enabled(): boolean
```

Defined in: [src/fivem/ui/menu/items/panels/AbstractUIMenuPanel.ts:26](https://github.com/nativewrappers/nativewrappers/blob/fae5ced8514b2702c9e091cb4666009f585dc560/src/fivem/ui/menu/items/panels/AbstractUIMenuPanel.ts#L26)

##### Returns

`boolean`

#### Set Signature

```ts
set Enabled(value): void
```

Defined in: [src/fivem/ui/menu/items/panels/AbstractUIMenuPanel.ts:30](https://github.com/nativewrappers/nativewrappers/blob/fae5ced8514b2702c9e091cb4666009f585dc560/src/fivem/ui/menu/items/panels/AbstractUIMenuPanel.ts#L30)

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

Defined in: [src/fivem/ui/menu/items/panels/AbstractUIMenuPanel.ts:34](https://github.com/nativewrappers/nativewrappers/blob/fae5ced8514b2702c9e091cb4666009f585dc560/src/fivem/ui/menu/items/panels/AbstractUIMenuPanel.ts#L34)

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

Defined in: [src/fivem/ui/menu/items/panels/UIMenuPercentagePanel.ts:86](https://github.com/nativewrappers/nativewrappers/blob/fae5ced8514b2702c9e091cb4666009f585dc560/src/fivem/ui/menu/items/panels/UIMenuPercentagePanel.ts#L86)

##### Returns

`string`

#### Set Signature

```ts
set MaxText(value): void
```

Defined in: [src/fivem/ui/menu/items/panels/UIMenuPercentagePanel.ts:90](https://github.com/nativewrappers/nativewrappers/blob/fae5ced8514b2702c9e091cb4666009f585dc560/src/fivem/ui/menu/items/panels/UIMenuPercentagePanel.ts#L90)

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

Defined in: [src/fivem/ui/menu/items/panels/UIMenuPercentagePanel.ts:78](https://github.com/nativewrappers/nativewrappers/blob/fae5ced8514b2702c9e091cb4666009f585dc560/src/fivem/ui/menu/items/panels/UIMenuPercentagePanel.ts#L78)

##### Returns

`string`

#### Set Signature

```ts
set MinText(value): void
```

Defined in: [src/fivem/ui/menu/items/panels/UIMenuPercentagePanel.ts:82](https://github.com/nativewrappers/nativewrappers/blob/fae5ced8514b2702c9e091cb4666009f585dc560/src/fivem/ui/menu/items/panels/UIMenuPercentagePanel.ts#L82)

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

Defined in: [src/fivem/ui/menu/items/panels/AbstractUIMenuPanel.ts:18](https://github.com/nativewrappers/nativewrappers/blob/fae5ced8514b2702c9e091cb4666009f585dc560/src/fivem/ui/menu/items/panels/AbstractUIMenuPanel.ts#L18)

##### Returns

`undefined` \| [`UIMenuItem`](UIMenuItem.md)

#### Set Signature

```ts
set ParentItem(value): void
```

Defined in: [src/fivem/ui/menu/items/panels/AbstractUIMenuPanel.ts:22](https://github.com/nativewrappers/nativewrappers/blob/fae5ced8514b2702c9e091cb4666009f585dc560/src/fivem/ui/menu/items/panels/AbstractUIMenuPanel.ts#L22)

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

Defined in: [src/fivem/ui/menu/items/panels/AbstractUIMenuPanel.ts:14](https://github.com/nativewrappers/nativewrappers/blob/fae5ced8514b2702c9e091cb4666009f585dc560/src/fivem/ui/menu/items/panels/AbstractUIMenuPanel.ts#L14)

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

Defined in: [src/fivem/ui/menu/items/panels/UIMenuPercentagePanel.ts:94](https://github.com/nativewrappers/nativewrappers/blob/fae5ced8514b2702c9e091cb4666009f585dc560/src/fivem/ui/menu/items/panels/UIMenuPercentagePanel.ts#L94)

##### Returns

`number`

#### Set Signature

```ts
set Percentage(value): void
```

Defined in: [src/fivem/ui/menu/items/panels/UIMenuPercentagePanel.ts:100](https://github.com/nativewrappers/nativewrappers/blob/fae5ced8514b2702c9e091cb4666009f585dc560/src/fivem/ui/menu/items/panels/UIMenuPercentagePanel.ts#L100)

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

Defined in: [src/fivem/ui/menu/items/panels/UIMenuPercentagePanel.ts:70](https://github.com/nativewrappers/nativewrappers/blob/fae5ced8514b2702c9e091cb4666009f585dc560/src/fivem/ui/menu/items/panels/UIMenuPercentagePanel.ts#L70)

##### Returns

`string`

#### Set Signature

```ts
set Title(value): void
```

Defined in: [src/fivem/ui/menu/items/panels/UIMenuPercentagePanel.ts:74](https://github.com/nativewrappers/nativewrappers/blob/fae5ced8514b2702c9e091cb4666009f585dc560/src/fivem/ui/menu/items/panels/UIMenuPercentagePanel.ts#L74)

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

Defined in: [src/fivem/ui/menu/items/panels/UIMenuPercentagePanel.ts:128](https://github.com/nativewrappers/nativewrappers/blob/fae5ced8514b2702c9e091cb4666009f585dc560/src/fivem/ui/menu/items/panels/UIMenuPercentagePanel.ts#L128)

#### Returns

`void`

#### Overrides

[`AbstractUIMenuPanel`](AbstractUIMenuPanel.md).[`draw`](AbstractUIMenuPanel.md#draw)

***

### setVerticalPosition()

```ts
setVerticalPosition(y): void
```

Defined in: [src/fivem/ui/menu/items/panels/UIMenuPercentagePanel.ts:118](https://github.com/nativewrappers/nativewrappers/blob/fae5ced8514b2702c9e091cb4666009f585dc560/src/fivem/ui/menu/items/panels/UIMenuPercentagePanel.ts#L118)

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

Defined in: [src/fivem/ui/menu/items/panels/UIMenuPercentagePanel.ts:106](https://github.com/nativewrappers/nativewrappers/blob/fae5ced8514b2702c9e091cb4666009f585dc560/src/fivem/ui/menu/items/panels/UIMenuPercentagePanel.ts#L106)

#### Returns

`void`
