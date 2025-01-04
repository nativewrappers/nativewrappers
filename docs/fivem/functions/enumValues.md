[@nativewrappers/fivem](../../README.md) / [fivem](../README.md) / enumValues

# Function: enumValues()

## Call Signature

```ts
function enumValues<T>(enumObj): IterableIterator<T>
```

Defined in: lib/common/utils/enumValues.d.ts:7

EnumValues - iterate over enum values
Just copy&paste from https://github.com/microsoft/TypeScript/issues/4753#issuecomment-694557208

### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `string` |

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `enumObj` | \{\} |  |

### Returns

`IterableIterator`\<`T`\>

## Call Signature

```ts
function enumValues<T>(enumObj): IterableIterator<Exclude<T, string>>
```

Defined in: lib/common/utils/enumValues.d.ts:10

EnumValues - iterate over enum values
Just copy&paste from https://github.com/microsoft/TypeScript/issues/4753#issuecomment-694557208

### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `string` \| `number` |

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `enumObj` | \{\} |  |

### Returns

`IterableIterator`\<`Exclude`\<`T`, `string`\>\>
