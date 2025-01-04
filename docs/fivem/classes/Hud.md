[@nativewrappers/fivem](../../README.md) / [fivem](../README.md) / Hud

# Class: `abstract` Hud

## Constructors

### new Hud()

```ts
new Hud(): Hud
```

#### Returns

[`Hud`](Hud.md)

## Accessors

### CursorPosition

```ts
set static CursorPosition(position): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `position` | [`Point`](Point.md) |

#### Defined in

[src/fivem/ui/Hud.ts:21](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/Hud.ts#L21)

***

### CursorSprite

```ts
get static CursorSprite(): CursorSprite
```

```ts
set static CursorSprite(sprite): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `sprite` | [`CursorSprite`](../enumerations/CursorSprite.md) |

#### Returns

[`CursorSprite`](../enumerations/CursorSprite.md)

#### Defined in

[src/fivem/ui/Hud.ts:25](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/Hud.ts#L25)

***

### IsRadarVisible

```ts
get static IsRadarVisible(): boolean
```

```ts
set static IsRadarVisible(toggle): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `toggle` | `boolean` |

#### Returns

`boolean`

#### Defined in

[src/fivem/ui/Hud.ts:41](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/Hud.ts#L41)

***

### IsVisible

```ts
get static IsVisible(): boolean
```

```ts
set static IsVisible(toggle): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `toggle` | `boolean` |

#### Returns

`boolean`

#### Defined in

[src/fivem/ui/Hud.ts:33](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/Hud.ts#L33)

***

### RadarZoom

```ts
set static RadarZoom(zoomLevel): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `zoomLevel` | `number` |

#### Defined in

[src/fivem/ui/Hud.ts:49](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/Hud.ts#L49)

## Methods

### hideComponentThisFrame()

```ts
static hideComponentThisFrame(component): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `component` | [`HudComponent`](../enumerations/HudComponent.md) |

#### Returns

`void`

#### Defined in

[src/fivem/ui/Hud.ts:13](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/Hud.ts#L13)

***

### isComponentActive()

```ts
static isComponentActive(component): boolean
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `component` | [`HudComponent`](../enumerations/HudComponent.md) |

#### Returns

`boolean`

#### Defined in

[src/fivem/ui/Hud.ts:5](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/Hud.ts#L5)

***

### showComponentThisFrame()

```ts
static showComponentThisFrame(component): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `component` | [`HudComponent`](../enumerations/HudComponent.md) |

#### Returns

`void`

#### Defined in

[src/fivem/ui/Hud.ts:9](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/Hud.ts#L9)

***

### showCursorThisFrame()

```ts
static showCursorThisFrame(): void
```

#### Returns

`void`

#### Defined in

[src/fivem/ui/Hud.ts:17](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/Hud.ts#L17)
