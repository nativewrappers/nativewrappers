[@nativewrappers/fivem](../../README.md) / [common](../README.md) / enumValues

# Function: enumValues()

## Call Signature

```ts
function enumValues<T>(enumObj): IterableIterator<T>
```

Defined in: [src/common/utils/enumValues.ts:7](https://github.com/nativewrappers/nativewrappers/blob/756c662f77d10717b10de50b84f2e02fa47719d1/src/common/utils/enumValues.ts#L7)

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

Defined in: [src/common/utils/enumValues.ts:10](https://github.com/nativewrappers/nativewrappers/blob/756c662f77d10717b10de50b84f2e02fa47719d1/src/common/utils/enumValues.ts#L10)

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
