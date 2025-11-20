[@nativewrappers/fivem](../../../README.md) / [redm/RawControls](../README.md) / RawControls

# Class: RawControls

Defined in: lib/redm/RawControls.d.ts:2

## Constructors

### Constructor

```ts
new RawControls(): RawControls;
```

#### Returns

`RawControls`

## Methods

### DisableKeyThisFrame()

```ts
static DisableKeyThisFrame(rawKey): void;
```

Defined in: lib/redm/RawControls.d.ts:7

Disables the raw key this frame, making any calls return false even if they
are currently pressed/released.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `rawKey` | [`RawKeys`](../../enums/RawKeys/enumerations/RawKeys.md) |

#### Returns

`void`

***

### IsKeyPressed()

```ts
static IsKeyPressed(rawKey, canBeDisabled?): boolean;
```

Defined in: lib/redm/RawControls.d.ts:17

If the raw key is currently pressed down, will return false if disabled with [DisableKeyThisFrame](#disablekeythisframe)
and [canBeDisabled](#iskeypressed-1) is set to true

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `rawKey` | [`RawKeys`](../../enums/RawKeys/enumerations/RawKeys.md) |
| `canBeDisabled?` | `boolean` |

#### Returns

`boolean`

***

### IsKeyReleased()

```ts
static IsKeyReleased(rawKey, canBeDisabled?): boolean;
```

Defined in: lib/redm/RawControls.d.ts:22

If the raw key is in its up state, will return false if disabled with [DisableKeyThisFrame](#disablekeythisframe)
and [canBeDisabled](#iskeyreleased-1) is set to true

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `rawKey` | [`RawKeys`](../../enums/RawKeys/enumerations/RawKeys.md) |
| `canBeDisabled?` | `boolean` |

#### Returns

`boolean`

***

### WasJustPressed()

```ts
static WasJustPressed(rawKey, canBeDisabled?): boolean;
```

Defined in: lib/redm/RawControls.d.ts:12

If the raw key is was just pressed down, will return false if disabled with [DisableKeyThisFrame](#disablekeythisframe)
and [canBeDisabled](#wasjustpressed-1) is set to true

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `rawKey` | [`RawKeys`](../../enums/RawKeys/enumerations/RawKeys.md) |
| `canBeDisabled?` | `boolean` |

#### Returns

`boolean`

***

### WasJustReleased()

```ts
static WasJustReleased(rawKey, canBeDisabled?): boolean;
```

Defined in: lib/redm/RawControls.d.ts:27

If the raw key is was just released, will return false if disabled with [DisableKeyThisFrame](#disablekeythisframe)
and [canBeDisabled](#wasjustreleased-1) is set to true

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `rawKey` | [`RawKeys`](../../enums/RawKeys/enumerations/RawKeys.md) |
| `canBeDisabled?` | `boolean` |

#### Returns

`boolean`
