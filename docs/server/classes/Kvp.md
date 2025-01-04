[@nativewrappers/fivem](../../README.md) / [server](../README.md) / Kvp

# Class: Kvp

Defined in: lib/common/Kvp.d.ts:1

## Constructors

### new Kvp()

```ts
new Kvp(): Kvp
```

#### Returns

[`Kvp`](Kvp.md)

## Methods

### delete()

```ts
delete(key): void
```

Defined in: lib/common/Kvp.d.ts:44

Deletes the specified value for key, this is a blocking operation, if you're deleting a bunch of keys you should use [[deleteAsync]]

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | `string` | the key of the value to delete |

#### Returns

`void`

***

### deleteAsync()

```ts
deleteAsync(key): void
```

Defined in: lib/common/Kvp.d.ts:49

Deletes the specified resource keys value, this doesn't immediately write to disk and needs [[flush]] called afterwards.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | `string` | the key to delete |

#### Returns

`void`

***

### flush()

```ts
flush(): void
```

Defined in: lib/common/Kvp.d.ts:53

Ensures that any previous async call is flushed to disk

#### Returns

`void`

***

### getKvpFloat()

```ts
getKvpFloat(key): number
```

Defined in: lib/common/Kvp.d.ts:38

Gets the specified value for key

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | `string` | the key of the value to get |

#### Returns

`number`

the value stored as a float, or 0.0 if there is no value

***

### getKvpJson()

```ts
getKvpJson<T>(key): T
```

Defined in: lib/common/Kvp.d.ts:39

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `key` | `string` |

#### Returns

`T`

***

### getKvpNumber()

```ts
getKvpNumber(key): number
```

Defined in: lib/common/Kvp.d.ts:32

Gets the specified value for key

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | `string` | the key of the value to get |

#### Returns

`number`

the value stored, as a number, or 0 if there is no value

***

### getKvpsAsFloat()

```ts
getKvpsAsFloat(prefix): IterableIterator<number>
```

Defined in: lib/common/Kvp.d.ts:90

enumerates over any kvp prefixed with the prefix

```typescript
for (const value of Kvp.getKvpsAsFloat("native:")) {
		console.log(value);
}
```

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `prefix` | `string` | the prefix to search for |

#### Returns

`IterableIterator`\<`number`\>

***

### getKvpsAsNumber()

```ts
getKvpsAsNumber(prefix): IterableIterator<number>
```

Defined in: lib/common/Kvp.d.ts:78

enumerates over any kvp prefixed with the prefix

```typescript
for (const value of Kvp.getKvpsAsNumber("native:")) {
		console.log(value);
}
```

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `prefix` | `string` | the prefix to search for |

#### Returns

`IterableIterator`\<`number`\>

***

### getKvpsAsString()

```ts
getKvpsAsString(prefix): IterableIterator<string>
```

Defined in: lib/common/Kvp.d.ts:66

enumerates over any kvp prefixed with the prefix

```typescript
for (const value of Kvp.getKvpsAsString("native:")) {
		console.log(value);
}
```

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `prefix` | `string` | the prefix to search for |

#### Returns

`IterableIterator`\<`string`\>

***

### getKvpString()

```ts
getKvpString(key): null | string
```

Defined in: lib/common/Kvp.d.ts:26

Gets the specified value for key

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | `string` | the key of the value to get |

#### Returns

`null` \| `string`

a string, or null if there is no value

***

### setKvp()

```ts
setKvp<T>(key, value): void
```

Defined in: lib/common/Kvp.d.ts:7

Sets the resource key to the specified value this is a blocking operation, if you're doing large write operations you should use [[setKvpAsync]] instead.

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `string` \| `number` |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | `string` | the key string |
| `value` | `T` | the value to set the key to |

#### Returns

`void`

***

### setKvpAsync()

```ts
setKvpAsync<T>(key, value): void
```

Defined in: lib/common/Kvp.d.ts:13

Sets the resource key to the specified value, this doesn't immediately write to disk and needs [[flush]] called afterwards.

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `string` \| `number` |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | `string` | the key string |
| `value` | `T` | the value to set the key to |

#### Returns

`void`

***

### setKvpJson()

```ts
setKvpJson(key, value): void
```

Defined in: lib/common/Kvp.d.ts:20

Sets the specified key to the specified json value
This can error if given an invalid object

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | `string` | the key string |
| `value` | `any` | the value to set the key to |

#### Returns

`void`
