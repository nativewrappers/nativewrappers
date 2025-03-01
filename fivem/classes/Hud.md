[@nativewrappers/fivem](../../README.md) / [fivem](../README.md) / Hud

# Class: `abstract` Hud

Defined in: fivem/ui/Hud.d.ts:3

## Constructors

### new Hud()

```ts
new Hud(): Hud
```

#### Returns

[`Hud`](Hud.md)

## Accessors

### CursorPosition

#### Set Signature

```ts
set static CursorPosition(position): void
```

Defined in: fivem/ui/Hud.d.ts:8

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `position` | [`Point`](Point.md) |

##### Returns

`void`

***

### CursorSprite

#### Get Signature

```ts
get static CursorSprite(): CursorSprite
```

Defined in: fivem/ui/Hud.d.ts:9

##### Returns

[`CursorSprite`](../enumerations/CursorSprite.md)

#### Set Signature

```ts
set static CursorSprite(sprite): void
```

Defined in: fivem/ui/Hud.d.ts:10

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `sprite` | [`CursorSprite`](../enumerations/CursorSprite.md) |

##### Returns

`void`

***

### IsRadarVisible

#### Get Signature

```ts
get static IsRadarVisible(): boolean
```

Defined in: fivem/ui/Hud.d.ts:13

##### Returns

`boolean`

#### Set Signature

```ts
set static IsRadarVisible(toggle): void
```

Defined in: fivem/ui/Hud.d.ts:14

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `toggle` | `boolean` |

##### Returns

`void`

***

### IsVisible

#### Get Signature

```ts
get static IsVisible(): boolean
```

Defined in: fivem/ui/Hud.d.ts:11

##### Returns

`boolean`

#### Set Signature

```ts
set static IsVisible(toggle): void
```

Defined in: fivem/ui/Hud.d.ts:12

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `toggle` | `boolean` |

##### Returns

`void`

***

### RadarZoom

#### Set Signature

```ts
set static RadarZoom(zoomLevel): void
```

Defined in: fivem/ui/Hud.d.ts:15

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `zoomLevel` | `number` |

##### Returns

`void`

## Methods

### hideComponentThisFrame()

```ts
static hideComponentThisFrame(component): void
```

Defined in: fivem/ui/Hud.d.ts:6

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `component` | [`HudComponent`](../enumerations/HudComponent.md) |

#### Returns

`void`

***

### isComponentActive()

```ts
static isComponentActive(component): boolean
```

Defined in: fivem/ui/Hud.d.ts:4

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `component` | [`HudComponent`](../enumerations/HudComponent.md) |

#### Returns

`boolean`

***

### showComponentThisFrame()

```ts
static showComponentThisFrame(component): void
```

Defined in: fivem/ui/Hud.d.ts:5

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `component` | [`HudComponent`](../enumerations/HudComponent.md) |

#### Returns

`void`

***

### showCursorThisFrame()

```ts
static showCursorThisFrame(): void
```

Defined in: fivem/ui/Hud.d.ts:7

#### Returns

`void`
