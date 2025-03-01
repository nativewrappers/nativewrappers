[@nativewrappers/fivem](../../README.md) / [fivem](../README.md) / String

# Class: `abstract` String

Defined in: [src/fivem/utils/String.ts:4](https://github.com/nativewrappers/nativewrappers/blob/bf1d263f0188667cde482dc5657983cf3674a640/src/fivem/utils/String.ts#L4)

## Constructors

### new String()

```ts
new String(): String
```

#### Returns

[`String`](String.md)

## Methods

### measureString()

```ts
static measureString(
   str, 
   font?, 
   scale?, 
   screenWidth?): number
```

Defined in: [src/fivem/utils/String.ts:33](https://github.com/nativewrappers/nativewrappers/blob/bf1d263f0188667cde482dc5657983cf3674a640/src/fivem/utils/String.ts#L33)

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `str` | `string` | `undefined` |
| `font`? | [`Font`](../enumerations/Font.md) | `undefined` |
| `scale`? | `number` | `undefined` |
| `screenWidth`? | `number` | `Screen.ScaledWidth` |

#### Returns

`number`

***

### measureStringWidthNoConvert()

```ts
static measureStringWidthNoConvert(
   input, 
   font, 
   scale): number
```

Defined in: [src/fivem/utils/String.ts:21](https://github.com/nativewrappers/nativewrappers/blob/bf1d263f0188667cde482dc5657983cf3674a640/src/fivem/utils/String.ts#L21)

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `input` | `string` | `undefined` |
| `font` | [`Font`](../enumerations/Font.md) | `Font.ChaletLondon` |
| `scale` | `number` | `0` |

#### Returns

`number`

***

### stringToArray()

```ts
static stringToArray(input): string[]
```

Defined in: [src/fivem/utils/String.ts:5](https://github.com/nativewrappers/nativewrappers/blob/bf1d263f0188667cde482dc5657983cf3674a640/src/fivem/utils/String.ts#L5)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | `string` |

#### Returns

`string`[]
