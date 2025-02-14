[@nativewrappers/fivem](../../README.md) / [fivem](../README.md) / Point

# Class: Point

Defined in: [src/fivem/utils/Point.ts:1](https://github.com/nativewrappers/nativewrappers/blob/0bf5a50fdb39736240229f922b5089be4fd3a85c/src/fivem/utils/Point.ts#L1)

## Constructors

### new Point()

```ts
new Point(x, y): Point
```

Defined in: [src/fivem/utils/Point.ts:28](https://github.com/nativewrappers/nativewrappers/blob/0bf5a50fdb39736240229f922b5089be4fd3a85c/src/fivem/utils/Point.ts#L28)

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `x` | `number` | `0` |
| `y` | `number` | `0` |

#### Returns

[`Point`](Point.md)

## Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="x-1"></a> `X` | `public` | `number` | [src/fivem/utils/Point.ts:25](https://github.com/nativewrappers/nativewrappers/blob/0bf5a50fdb39736240229f922b5089be4fd3a85c/src/fivem/utils/Point.ts#L25) |
| <a id="y-1"></a> `Y` | `public` | `number` | [src/fivem/utils/Point.ts:26](https://github.com/nativewrappers/nativewrappers/blob/0bf5a50fdb39736240229f922b5089be4fd3a85c/src/fivem/utils/Point.ts#L26) |

## Methods

### parse()

```ts
static parse(arg): Point
```

Defined in: [src/fivem/utils/Point.ts:2](https://github.com/nativewrappers/nativewrappers/blob/0bf5a50fdb39736240229f922b5089be4fd3a85c/src/fivem/utils/Point.ts#L2)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `arg` | \| `string` \| \[`number`, `number`\] \| \{ `X`: `number`; `Y`: `number`; \} |

#### Returns

[`Point`](Point.md)
