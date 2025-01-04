[@nativewrappers/fivem](../../README.md) / [fivem](../README.md) / enumValues

# Function: enumValues()

## enumValues(enumObj)

```ts
function enumValues<T>(enumObj): IterableIterator<T>
```

EnumValues - iterate over enum values
Just copy&paste from https://github.com/microsoft/TypeScript/issues/4753#issuecomment-694557208

### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `string` |

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `enumObj` | `object` |  |

### Returns

`IterableIterator`\<`T`\>

### Defined in

lib/common/utils/enumValues.d.ts:7

## enumValues(enumObj)

```ts
function enumValues<T>(enumObj): IterableIterator<Exclude<T, string>>
```

### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `string` \| `number` |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `enumObj` | `object` |

### Returns

`IterableIterator`\<`Exclude`\<`T`, `string`\>\>

### Defined in

lib/common/utils/enumValues.d.ts:10
