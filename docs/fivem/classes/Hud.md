[@nativewrappers/fivem](../../README.md) / [fivem](../README.md) / Hud

# Class: `abstract` Hud

Defined in: [src/fivem/ui/Hud.ts:4](https://github.com/nativewrappers/nativewrappers/blob/11c6a49b7dbba5233f7fb8c63e2382099dcf6c28/src/fivem/ui/Hud.ts#L4)

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

Defined in: [src/fivem/ui/Hud.ts:21](https://github.com/nativewrappers/nativewrappers/blob/11c6a49b7dbba5233f7fb8c63e2382099dcf6c28/src/fivem/ui/Hud.ts#L21)

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

Defined in: [src/fivem/ui/Hud.ts:25](https://github.com/nativewrappers/nativewrappers/blob/11c6a49b7dbba5233f7fb8c63e2382099dcf6c28/src/fivem/ui/Hud.ts#L25)

##### Returns

[`CursorSprite`](../enumerations/CursorSprite.md)

#### Set Signature

```ts
set static CursorSprite(sprite): void
```

Defined in: [src/fivem/ui/Hud.ts:29](https://github.com/nativewrappers/nativewrappers/blob/11c6a49b7dbba5233f7fb8c63e2382099dcf6c28/src/fivem/ui/Hud.ts#L29)

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

Defined in: [src/fivem/ui/Hud.ts:41](https://github.com/nativewrappers/nativewrappers/blob/11c6a49b7dbba5233f7fb8c63e2382099dcf6c28/src/fivem/ui/Hud.ts#L41)

##### Returns

`boolean`

#### Set Signature

```ts
set static IsRadarVisible(toggle): void
```

Defined in: [src/fivem/ui/Hud.ts:45](https://github.com/nativewrappers/nativewrappers/blob/11c6a49b7dbba5233f7fb8c63e2382099dcf6c28/src/fivem/ui/Hud.ts#L45)

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

Defined in: [src/fivem/ui/Hud.ts:33](https://github.com/nativewrappers/nativewrappers/blob/11c6a49b7dbba5233f7fb8c63e2382099dcf6c28/src/fivem/ui/Hud.ts#L33)

##### Returns

`boolean`

#### Set Signature

```ts
set static IsVisible(toggle): void
```

Defined in: [src/fivem/ui/Hud.ts:37](https://github.com/nativewrappers/nativewrappers/blob/11c6a49b7dbba5233f7fb8c63e2382099dcf6c28/src/fivem/ui/Hud.ts#L37)

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

Defined in: [src/fivem/ui/Hud.ts:49](https://github.com/nativewrappers/nativewrappers/blob/11c6a49b7dbba5233f7fb8c63e2382099dcf6c28/src/fivem/ui/Hud.ts#L49)

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

Defined in: [src/fivem/ui/Hud.ts:13](https://github.com/nativewrappers/nativewrappers/blob/11c6a49b7dbba5233f7fb8c63e2382099dcf6c28/src/fivem/ui/Hud.ts#L13)

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

Defined in: [src/fivem/ui/Hud.ts:5](https://github.com/nativewrappers/nativewrappers/blob/11c6a49b7dbba5233f7fb8c63e2382099dcf6c28/src/fivem/ui/Hud.ts#L5)

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

Defined in: [src/fivem/ui/Hud.ts:9](https://github.com/nativewrappers/nativewrappers/blob/11c6a49b7dbba5233f7fb8c63e2382099dcf6c28/src/fivem/ui/Hud.ts#L9)

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

Defined in: [src/fivem/ui/Hud.ts:17](https://github.com/nativewrappers/nativewrappers/blob/11c6a49b7dbba5233f7fb8c63e2382099dcf6c28/src/fivem/ui/Hud.ts#L17)

#### Returns

`void`
