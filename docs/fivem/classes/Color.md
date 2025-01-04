[@nativewrappers/fivem](../../README.md) / [fivem](../README.md) / Color

# Class: Color

## Constructors

### new Color()

```ts
new Color(
   r, 
   g, 
   b, 
   a?): Color
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `number` |
| `g` | `number` |
| `b` | `number` |
| `a`? | `number` |

#### Returns

[`Color`](Color.md)

#### Defined in

lib/common/utils/Color.d.ts:13

## Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| `a` | `public` | `number` | lib/common/utils/Color.d.ts:9 |
| `b` | `public` | `number` | lib/common/utils/Color.d.ts:12 |
| `g` | `public` | `number` | lib/common/utils/Color.d.ts:11 |
| `r` | `public` | `number` | lib/common/utils/Color.d.ts:10 |
| `Black` | `static` | [`Color`](Color.md) | lib/common/utils/Color.d.ts:3 |
| `Transparent` | `static` | [`Color`](Color.md) | lib/common/utils/Color.d.ts:2 |
| `White` | `static` | [`Color`](Color.md) | lib/common/utils/Color.d.ts:4 |
| `WhiteSmoke` | `static` | [`Color`](Color.md) | lib/common/utils/Color.d.ts:5 |

## Methods

### fromArgb()

```ts
static fromArgb(
   a, 
   r, 
   g, 
   b): Color
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `a` | `number` |
| `r` | `number` |
| `g` | `number` |
| `b` | `number` |

#### Returns

[`Color`](Color.md)

#### Defined in

lib/common/utils/Color.d.ts:6

***

### fromArray()

```ts
static fromArray(primitive): Color
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `primitive` | `number`[] \| [`number`, `number`, `number`] |

#### Returns

[`Color`](Color.md)

#### Defined in

lib/common/utils/Color.d.ts:8

***

### fromRgb()

```ts
static fromRgb(
   r, 
   g, 
   b): Color
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `number` |
| `g` | `number` |
| `b` | `number` |

#### Returns

[`Color`](Color.md)

#### Defined in

lib/common/utils/Color.d.ts:7
