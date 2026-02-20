[@nativewrappers/fivem](../../../../README.md) / [fivem/ui/Hud](../README.md) / Hud

# Abstract Class: Hud

Defined in: lib/fivem/ui/Hud.d.ts:4

## Constructors

### Constructor

```ts
new Hud(): Hud;
```

#### Returns

`Hud`

## Accessors

### CursorPosition

#### Set Signature

```ts
set static CursorPosition(position): void;
```

Defined in: lib/fivem/ui/Hud.d.ts:9

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `position` | [`Point`](../../../utils/Point/classes/Point.md) |

##### Returns

`void`

***

### CursorSprite

#### Get Signature

```ts
get static CursorSprite(): CursorSprite;
```

Defined in: lib/fivem/ui/Hud.d.ts:10

##### Returns

[`CursorSprite`](../../../enums/CursorSprite/enumerations/CursorSprite.md)

#### Set Signature

```ts
set static CursorSprite(sprite): void;
```

Defined in: lib/fivem/ui/Hud.d.ts:11

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `sprite` | [`CursorSprite`](../../../enums/CursorSprite/enumerations/CursorSprite.md) |

##### Returns

`void`

***

### IsRadarVisible

#### Get Signature

```ts
get static IsRadarVisible(): boolean;
```

Defined in: lib/fivem/ui/Hud.d.ts:14

##### Returns

`boolean`

#### Set Signature

```ts
set static IsRadarVisible(toggle): void;
```

Defined in: lib/fivem/ui/Hud.d.ts:15

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
get static IsVisible(): boolean;
```

Defined in: lib/fivem/ui/Hud.d.ts:12

##### Returns

`boolean`

#### Set Signature

```ts
set static IsVisible(toggle): void;
```

Defined in: lib/fivem/ui/Hud.d.ts:13

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
set static RadarZoom(zoomLevel): void;
```

Defined in: lib/fivem/ui/Hud.d.ts:16

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `zoomLevel` | `number` |

##### Returns

`void`

## Methods

### hideComponentThisFrame()

```ts
static hideComponentThisFrame(component): void;
```

Defined in: lib/fivem/ui/Hud.d.ts:7

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `component` | [`HudComponent`](../../../enums/HudComponent/enumerations/HudComponent.md) |

#### Returns

`void`

***

### isComponentActive()

```ts
static isComponentActive(component): boolean;
```

Defined in: lib/fivem/ui/Hud.d.ts:5

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `component` | [`HudComponent`](../../../enums/HudComponent/enumerations/HudComponent.md) |

#### Returns

`boolean`

***

### showComponentThisFrame()

```ts
static showComponentThisFrame(component): void;
```

Defined in: lib/fivem/ui/Hud.d.ts:6

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `component` | [`HudComponent`](../../../enums/HudComponent/enumerations/HudComponent.md) |

#### Returns

`void`

***

### showCursorThisFrame()

```ts
static showCursorThisFrame(): void;
```

Defined in: lib/fivem/ui/Hud.d.ts:8

#### Returns

`void`
