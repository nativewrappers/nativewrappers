[@nativewrappers/fivem](../../README.md) / [fivem](../README.md) / UIMenuGridPanel

# Class: UIMenuGridPanel

Defined in: [src/fivem/ui/menu/items/panels/UIMenuGridPanel.ts:8](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/ui/menu/items/panels/UIMenuGridPanel.ts#L8)

## Extends

- [`AbstractUIMenuPanel`](AbstractUIMenuPanel.md)

## Constructors

### new UIMenuGridPanel()

```ts
new UIMenuGridPanel(
   topText?, 
   leftText?, 
   rightText?, 
   bottomText?, 
   circlePosition?): UIMenuGridPanel
```

Defined in: [src/fivem/ui/menu/items/panels/UIMenuGridPanel.ts:27](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/ui/menu/items/panels/UIMenuGridPanel.ts#L27)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `topText`? | `string` |
| `leftText`? | `string` |
| `rightText`? | `string` |
| `bottomText`? | `string` |
| `circlePosition`? | [`Point`](Point.md) |

#### Returns

[`UIMenuGridPanel`](UIMenuGridPanel.md)

#### Overrides

[`AbstractUIMenuPanel`](AbstractUIMenuPanel.md).[`constructor`](AbstractUIMenuPanel.md#constructors)

## Properties

| Property | Modifier | Type | Default value | Overrides | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ | ------ | ------ |
| <a id="background"></a> `background` | `readonly` | [`Sprite`](Sprite.md) | `undefined` | [`AbstractUIMenuPanel`](AbstractUIMenuPanel.md).[`background`](AbstractUIMenuPanel.md#background) | - | [src/fivem/ui/menu/items/panels/UIMenuGridPanel.ts:9](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/ui/menu/items/panels/UIMenuGridPanel.ts#L9) |
| <a id="enabled"></a> `enabled` | `protected` | `boolean` | `true` | - | [`AbstractUIMenuPanel`](AbstractUIMenuPanel.md).[`enabled`](AbstractUIMenuPanel.md#enabled) | [src/fivem/ui/menu/items/panels/AbstractUIMenuPanel.ts:10](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/ui/menu/items/panels/AbstractUIMenuPanel.ts#L10) |
| <a id="id"></a> `id` | `readonly` | `string` | `undefined` | - | [`AbstractUIMenuPanel`](AbstractUIMenuPanel.md).[`id`](AbstractUIMenuPanel.md#id) | [src/fivem/ui/menu/items/panels/AbstractUIMenuPanel.ts:7](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/ui/menu/items/panels/AbstractUIMenuPanel.ts#L7) |
| <a id="parentitem"></a> `parentItem?` | `protected` | [`UIMenuItem`](UIMenuItem.md) | `undefined` | - | [`AbstractUIMenuPanel`](AbstractUIMenuPanel.md).[`parentItem`](AbstractUIMenuPanel.md#parentitem) | [src/fivem/ui/menu/items/panels/AbstractUIMenuPanel.ts:9](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/ui/menu/items/panels/AbstractUIMenuPanel.ts#L9) |

## Accessors

### BottomText

#### Get Signature

```ts
get BottomText(): string
```

Defined in: [src/fivem/ui/menu/items/panels/UIMenuGridPanel.ts:86](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/ui/menu/items/panels/UIMenuGridPanel.ts#L86)

##### Returns

`string`

#### Set Signature

```ts
set BottomText(value): void
```

Defined in: [src/fivem/ui/menu/items/panels/UIMenuGridPanel.ts:90](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/ui/menu/items/panels/UIMenuGridPanel.ts#L90)

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
get CirclePosition(): Point
```

Defined in: [src/fivem/ui/menu/items/panels/UIMenuGridPanel.ts:94](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/ui/menu/items/panels/UIMenuGridPanel.ts#L94)

##### Returns

[`Point`](Point.md)

#### Set Signature

```ts
set CirclePosition(position): void
```

Defined in: [src/fivem/ui/menu/items/panels/UIMenuGridPanel.ts:113](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/ui/menu/items/panels/UIMenuGridPanel.ts#L113)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `position` | [`Point`](Point.md) |

##### Returns

`void`

***

### CirclePositionX

#### Set Signature

```ts
set CirclePositionX(x): void
```

Defined in: [src/fivem/ui/menu/items/panels/UIMenuGridPanel.ts:118](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/ui/menu/items/panels/UIMenuGridPanel.ts#L118)

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
set CirclePositionY(y): void
```

Defined in: [src/fivem/ui/menu/items/panels/UIMenuGridPanel.ts:131](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/ui/menu/items/panels/UIMenuGridPanel.ts#L131)

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
get Enabled(): boolean
```

Defined in: [src/fivem/ui/menu/items/panels/AbstractUIMenuPanel.ts:26](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/ui/menu/items/panels/AbstractUIMenuPanel.ts#L26)

##### Returns

`boolean`

#### Set Signature

```ts
set Enabled(value): void
```

Defined in: [src/fivem/ui/menu/items/panels/AbstractUIMenuPanel.ts:30](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/ui/menu/items/panels/AbstractUIMenuPanel.ts#L30)

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

Defined in: [src/fivem/ui/menu/items/panels/AbstractUIMenuPanel.ts:34](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/ui/menu/items/panels/AbstractUIMenuPanel.ts#L34)

##### Returns

`number`

#### Inherited from

[`AbstractUIMenuPanel`](AbstractUIMenuPanel.md).[`Height`](AbstractUIMenuPanel.md#height)

***

### LeftText

#### Get Signature

```ts
get LeftText(): string
```

Defined in: [src/fivem/ui/menu/items/panels/UIMenuGridPanel.ts:70](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/ui/menu/items/panels/UIMenuGridPanel.ts#L70)

##### Returns

`string`

#### Set Signature

```ts
set LeftText(value): void
```

Defined in: [src/fivem/ui/menu/items/panels/UIMenuGridPanel.ts:74](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/ui/menu/items/panels/UIMenuGridPanel.ts#L74)

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
get LockXAxis(): boolean
```

Defined in: [src/fivem/ui/menu/items/panels/UIMenuGridPanel.ts:144](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/ui/menu/items/panels/UIMenuGridPanel.ts#L144)

##### Returns

`boolean`

#### Set Signature

```ts
set LockXAxis(value): void
```

Defined in: [src/fivem/ui/menu/items/panels/UIMenuGridPanel.ts:148](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/ui/menu/items/panels/UIMenuGridPanel.ts#L148)

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
get LockYAxis(): boolean
```

Defined in: [src/fivem/ui/menu/items/panels/UIMenuGridPanel.ts:158](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/ui/menu/items/panels/UIMenuGridPanel.ts#L158)

##### Returns

`boolean`

#### Set Signature

```ts
set LockYAxis(value): void
```

Defined in: [src/fivem/ui/menu/items/panels/UIMenuGridPanel.ts:162](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/ui/menu/items/panels/UIMenuGridPanel.ts#L162)

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
get ParentItem(): undefined | UIMenuItem
```

Defined in: [src/fivem/ui/menu/items/panels/AbstractUIMenuPanel.ts:18](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/ui/menu/items/panels/AbstractUIMenuPanel.ts#L18)

##### Returns

`undefined` \| [`UIMenuItem`](UIMenuItem.md)

#### Set Signature

```ts
set ParentItem(value): void
```

Defined in: [src/fivem/ui/menu/items/panels/AbstractUIMenuPanel.ts:22](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/ui/menu/items/panels/AbstractUIMenuPanel.ts#L22)

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

Defined in: [src/fivem/ui/menu/items/panels/AbstractUIMenuPanel.ts:14](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/ui/menu/items/panels/AbstractUIMenuPanel.ts#L14)

##### Returns

`undefined` \| [`Menu`](Menu.md)

#### Inherited from

[`AbstractUIMenuPanel`](AbstractUIMenuPanel.md).[`ParentMenu`](AbstractUIMenuPanel.md#parentmenu)

***

### RightText

#### Get Signature

```ts
get RightText(): string
```

Defined in: [src/fivem/ui/menu/items/panels/UIMenuGridPanel.ts:78](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/ui/menu/items/panels/UIMenuGridPanel.ts#L78)

##### Returns

`string`

#### Set Signature

```ts
set RightText(value): void
```

Defined in: [src/fivem/ui/menu/items/panels/UIMenuGridPanel.ts:82](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/ui/menu/items/panels/UIMenuGridPanel.ts#L82)

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
get TopText(): string
```

Defined in: [src/fivem/ui/menu/items/panels/UIMenuGridPanel.ts:62](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/ui/menu/items/panels/UIMenuGridPanel.ts#L62)

##### Returns

`string`

#### Set Signature

```ts
set TopText(value): void
```

Defined in: [src/fivem/ui/menu/items/panels/UIMenuGridPanel.ts:66](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/ui/menu/items/panels/UIMenuGridPanel.ts#L66)

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

Defined in: [src/fivem/ui/menu/items/panels/UIMenuGridPanel.ts:201](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/ui/menu/items/panels/UIMenuGridPanel.ts#L201)

#### Returns

`void`

#### Overrides

[`AbstractUIMenuPanel`](AbstractUIMenuPanel.md).[`draw`](AbstractUIMenuPanel.md#draw)

***

### setVerticalPosition()

```ts
setVerticalPosition(y): void
```

Defined in: [src/fivem/ui/menu/items/panels/UIMenuGridPanel.ts:184](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/ui/menu/items/panels/UIMenuGridPanel.ts#L184)

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

Defined in: [src/fivem/ui/menu/items/panels/UIMenuGridPanel.ts:172](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/ui/menu/items/panels/UIMenuGridPanel.ts#L172)

#### Returns

`void`
