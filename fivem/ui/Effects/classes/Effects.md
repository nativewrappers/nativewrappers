[@nativewrappers/fivem](../../../../README.md) / [fivem/ui/Effects](../README.md) / Effects

# Abstract Class: Effects

Defined in: lib/fivem/ui/Effects.d.ts:2

## Constructors

### Constructor

```ts
new Effects(): Effects;
```

#### Returns

`Effects`

## Methods

### isActive()

```ts
static isActive(screenEffect): boolean;
```

Defined in: lib/fivem/ui/Effects.d.ts:5

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `screenEffect` | [`ScreenEffect`](../../../enums/ScreenEffect/enumerations/ScreenEffect.md) |

#### Returns

`boolean`

***

### start()

```ts
static start(
   effectName, 
   duration?, 
   looped?): void;
```

Defined in: lib/fivem/ui/Effects.d.ts:3

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `effectName` | [`ScreenEffect`](../../../enums/ScreenEffect/enumerations/ScreenEffect.md) |
| `duration?` | `number` |
| `looped?` | `boolean` |

#### Returns

`void`

***

### stop()

```ts
static stop(screenEffect?): void;
```

Defined in: lib/fivem/ui/Effects.d.ts:4

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `screenEffect?` | [`ScreenEffect`](../../../enums/ScreenEffect/enumerations/ScreenEffect.md) |

#### Returns

`void`
