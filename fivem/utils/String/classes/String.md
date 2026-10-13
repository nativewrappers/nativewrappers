[@nativewrappers/fivem](../../../../README.md) / [fivem/utils/String](../README.md) / \_String

# Abstract Class: \_String

Defined in: lib/fivem/utils/String.d.ts:2

## Constructors

### Constructor

```ts
new _String(): _String;
```

#### Returns

`_String`

## Methods

### measureString()

```ts
static measureString(
   str, 
   font?, 
   scale?, 
   screenWidth?): number;
```

Defined in: lib/fivem/utils/String.d.ts:5

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `str` | `string` |
| `font?` | [`Font`](../../../enums/Font/enumerations/Font.md) |
| `scale?` | `number` |
| `screenWidth?` | `number` |

#### Returns

`number`

***

### measureStringWidthNoConvert()

```ts
static measureStringWidthNoConvert(
   input, 
   font?, 
   scale?): number;
```

Defined in: lib/fivem/utils/String.d.ts:4

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | `string` |
| `font?` | [`Font`](../../../enums/Font/enumerations/Font.md) |
| `scale?` | `number` |

#### Returns

`number`

***

### stringToArray()

```ts
static stringToArray(input): string[];
```

Defined in: lib/fivem/utils/String.d.ts:3

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | `string` |

#### Returns

`string`[]
