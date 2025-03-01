[@nativewrappers/fivem](../../README.md) / [fivem](../README.md) / Effects

# Class: `abstract` Effects

Defined in: fivem/ui/Effects.d.ts:2

## Constructors

### new Effects()

```ts
new Effects(): Effects
```

#### Returns

[`Effects`](Effects.md)

## Methods

### isActive()

```ts
static isActive(screenEffect): boolean
```

Defined in: fivem/ui/Effects.d.ts:5

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `screenEffect` | [`ScreenEffect`](../enumerations/ScreenEffect.md) |

#### Returns

`boolean`

***

### start()

```ts
static start(
   effectName, 
   duration?, 
   looped?): void
```

Defined in: fivem/ui/Effects.d.ts:3

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `effectName` | [`ScreenEffect`](../enumerations/ScreenEffect.md) |
| `duration`? | `number` |
| `looped`? | `boolean` |

#### Returns

`void`

***

### stop()

```ts
static stop(screenEffect?): void
```

Defined in: fivem/ui/Effects.d.ts:4

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `screenEffect`? | [`ScreenEffect`](../enumerations/ScreenEffect.md) |

#### Returns

`void`
