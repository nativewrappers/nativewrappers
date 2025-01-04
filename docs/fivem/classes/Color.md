[@nativewrappers/fivem](../../README.md) / [fivem](../README.md) / Color

# Class: Color

Defined in: lib/common/utils/Color.d.ts:1

## Constructors

### new Color()

```ts
new Color(
   r, 
   g, 
   b, 
   a?): Color
```

Defined in: lib/common/utils/Color.d.ts:13

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `number` |
| `g` | `number` |
| `b` | `number` |
| `a`? | `number` |

#### Returns

[`Color`](Color.md)

## Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="a-1"></a> `a` | `public` | `number` | lib/common/utils/Color.d.ts:9 |
| <a id="b-1"></a> `b` | `public` | `number` | lib/common/utils/Color.d.ts:12 |
| <a id="g-1"></a> `g` | `public` | `number` | lib/common/utils/Color.d.ts:11 |
| <a id="r-1"></a> `r` | `public` | `number` | lib/common/utils/Color.d.ts:10 |
| <a id="black"></a> `Black` | `static` | [`Color`](Color.md) | lib/common/utils/Color.d.ts:3 |
| <a id="transparent"></a> `Transparent` | `static` | [`Color`](Color.md) | lib/common/utils/Color.d.ts:2 |
| <a id="white"></a> `White` | `static` | [`Color`](Color.md) | lib/common/utils/Color.d.ts:4 |
| <a id="whitesmoke"></a> `WhiteSmoke` | `static` | [`Color`](Color.md) | lib/common/utils/Color.d.ts:5 |

## Methods

### fromArgb()

```ts
static fromArgb(
   a, 
   r, 
   g, 
   b): Color
```

Defined in: lib/common/utils/Color.d.ts:6

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `a` | `number` |
| `r` | `number` |
| `g` | `number` |
| `b` | `number` |

#### Returns

[`Color`](Color.md)

***

### fromArray()

```ts
static fromArray(primitive): Color
```

Defined in: lib/common/utils/Color.d.ts:8

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `primitive` | `number`[] \| \[`number`, `number`, `number`\] |

#### Returns

[`Color`](Color.md)

***

### fromRgb()

```ts
static fromRgb(
   r, 
   g, 
   b): Color
```

Defined in: lib/common/utils/Color.d.ts:7

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `number` |
| `g` | `number` |
| `b` | `number` |

#### Returns

[`Color`](Color.md)
