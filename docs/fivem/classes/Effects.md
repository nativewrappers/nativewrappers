[@nativewrappers/fivem](../../README.md) / [fivem](../README.md) / Effects

# Class: `abstract` Effects

Defined in: [src/fivem/ui/Effects.ts:3](https://github.com/nativewrappers/nativewrappers/blob/91f5faba0ec3a416ffe852da10ae535e5abf14fa/src/fivem/ui/Effects.ts#L3)

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

Defined in: [src/fivem/ui/Effects.ts:20](https://github.com/nativewrappers/nativewrappers/blob/91f5faba0ec3a416ffe852da10ae535e5abf14fa/src/fivem/ui/Effects.ts#L20)

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
   duration, 
   looped): void
```

Defined in: [src/fivem/ui/Effects.ts:4](https://github.com/nativewrappers/nativewrappers/blob/91f5faba0ec3a416ffe852da10ae535e5abf14fa/src/fivem/ui/Effects.ts#L4)

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `effectName` | [`ScreenEffect`](../enumerations/ScreenEffect.md) | `undefined` |
| `duration` | `number` | `0` |
| `looped` | `boolean` | `false` |

#### Returns

`void`

***

### stop()

```ts
static stop(screenEffect?): void
```

Defined in: [src/fivem/ui/Effects.ts:12](https://github.com/nativewrappers/nativewrappers/blob/91f5faba0ec3a416ffe852da10ae535e5abf14fa/src/fivem/ui/Effects.ts#L12)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `screenEffect`? | [`ScreenEffect`](../enumerations/ScreenEffect.md) |

#### Returns

`void`
