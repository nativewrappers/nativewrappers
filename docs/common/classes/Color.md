[@nativewrappers/fivem](../../README.md) / [common](../README.md) / Color

# Class: Color

Defined in: [src/common/utils/Color.ts:1](https://github.com/nativewrappers/nativewrappers/blob/b3515708998f90e7d7096e3fffccb36c69d6b942/src/common/utils/Color.ts#L1)

## Constructors

### new Color()

```ts
new Color(
   r, 
   g, 
   b, 
   a): Color
```

Defined in: [src/common/utils/Color.ts:26](https://github.com/nativewrappers/nativewrappers/blob/b3515708998f90e7d7096e3fffccb36c69d6b942/src/common/utils/Color.ts#L26)

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `r` | `number` | `undefined` |
| `g` | `number` | `undefined` |
| `b` | `number` | `undefined` |
| `a` | `number` | `255` |

#### Returns

[`Color`](Color.md)

## Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="a-1"></a> `a` | `public` | `number` | [src/common/utils/Color.ts:21](https://github.com/nativewrappers/nativewrappers/blob/b3515708998f90e7d7096e3fffccb36c69d6b942/src/common/utils/Color.ts#L21) |
| <a id="b-1"></a> `b` | `public` | `number` | [src/common/utils/Color.ts:24](https://github.com/nativewrappers/nativewrappers/blob/b3515708998f90e7d7096e3fffccb36c69d6b942/src/common/utils/Color.ts#L24) |
| <a id="g-1"></a> `g` | `public` | `number` | [src/common/utils/Color.ts:23](https://github.com/nativewrappers/nativewrappers/blob/b3515708998f90e7d7096e3fffccb36c69d6b942/src/common/utils/Color.ts#L23) |
| <a id="r-1"></a> `r` | `public` | `number` | [src/common/utils/Color.ts:22](https://github.com/nativewrappers/nativewrappers/blob/b3515708998f90e7d7096e3fffccb36c69d6b942/src/common/utils/Color.ts#L22) |
| <a id="black"></a> `Black` | `static` | [`Color`](Color.md) | [src/common/utils/Color.ts:3](https://github.com/nativewrappers/nativewrappers/blob/b3515708998f90e7d7096e3fffccb36c69d6b942/src/common/utils/Color.ts#L3) |
| <a id="transparent"></a> `Transparent` | `static` | [`Color`](Color.md) | [src/common/utils/Color.ts:2](https://github.com/nativewrappers/nativewrappers/blob/b3515708998f90e7d7096e3fffccb36c69d6b942/src/common/utils/Color.ts#L2) |
| <a id="white"></a> `White` | `static` | [`Color`](Color.md) | [src/common/utils/Color.ts:4](https://github.com/nativewrappers/nativewrappers/blob/b3515708998f90e7d7096e3fffccb36c69d6b942/src/common/utils/Color.ts#L4) |
| <a id="whitesmoke"></a> `WhiteSmoke` | `static` | [`Color`](Color.md) | [src/common/utils/Color.ts:5](https://github.com/nativewrappers/nativewrappers/blob/b3515708998f90e7d7096e3fffccb36c69d6b942/src/common/utils/Color.ts#L5) |

## Methods

### fromArgb()

```ts
static fromArgb(
   a, 
   r, 
   g, 
   b): Color
```

Defined in: [src/common/utils/Color.ts:7](https://github.com/nativewrappers/nativewrappers/blob/b3515708998f90e7d7096e3fffccb36c69d6b942/src/common/utils/Color.ts#L7)

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

Defined in: [src/common/utils/Color.ts:15](https://github.com/nativewrappers/nativewrappers/blob/b3515708998f90e7d7096e3fffccb36c69d6b942/src/common/utils/Color.ts#L15)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `primitive` | \[`number`, `number`, `number`\] \| `number`[] |

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

Defined in: [src/common/utils/Color.ts:11](https://github.com/nativewrappers/nativewrappers/blob/b3515708998f90e7d7096e3fffccb36c69d6b942/src/common/utils/Color.ts#L11)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `number` |
| `g` | `number` |
| `b` | `number` |

#### Returns

[`Color`](Color.md)
