[@nativewrappers/fivem](../../README.md) / [server](../README.md) / Kvp

# Class: Kvp

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

Deletes the specified value for key, this is a blocking operation, if you're deleting a bunch of keys you should use [[deleteAsync]]

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | `string` | the key of the value to delete |

#### Returns

`void`

#### Defined in

lib/common/Kvp.d.ts:44

***

### deleteAsync()

```ts
deleteAsync(key): void
```

Deletes the specified resource keys value, this doesn't immediately write to disk and needs [[flush]] called afterwards.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | `string` | the key to delete |

#### Returns

`void`

#### Defined in

lib/common/Kvp.d.ts:49

***

### flush()

```ts
flush(): void
```

Ensures that any previous async call is flushed to disk

#### Returns

`void`

#### Defined in

lib/common/Kvp.d.ts:53

***

### getKvpFloat()

```ts
getKvpFloat(key): number
```

Gets the specified value for key

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | `string` | the key of the value to get |

#### Returns

`number`

the value stored as a float, or 0.0 if there is no value

#### Defined in

lib/common/Kvp.d.ts:38

***

### getKvpJson()

```ts
getKvpJson<T>(key): T
```

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

#### Defined in

lib/common/Kvp.d.ts:39

***

### getKvpNumber()

```ts
getKvpNumber(key): number
```

Gets the specified value for key

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | `string` | the key of the value to get |

#### Returns

`number`

the value stored, as a number, or 0 if there is no value

#### Defined in

lib/common/Kvp.d.ts:32

***

### getKvpsAsFloat()

```ts
getKvpsAsFloat(prefix): IterableIterator<number, any, any>
```

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

`IterableIterator`\<`number`, `any`, `any`\>

#### Defined in

lib/common/Kvp.d.ts:90

***

### getKvpsAsNumber()

```ts
getKvpsAsNumber(prefix): IterableIterator<number, any, any>
```

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

`IterableIterator`\<`number`, `any`, `any`\>

#### Defined in

lib/common/Kvp.d.ts:78

***

### getKvpsAsString()

```ts
getKvpsAsString(prefix): IterableIterator<string, any, any>
```

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

`IterableIterator`\<`string`, `any`, `any`\>

#### Defined in

lib/common/Kvp.d.ts:66

***

### getKvpString()

```ts
getKvpString(key): null | string
```

Gets the specified value for key

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | `string` | the key of the value to get |

#### Returns

`null` \| `string`

a string, or null if there is no value

#### Defined in

lib/common/Kvp.d.ts:26

***

### setKvp()

```ts
setKvp<T>(key, value): void
```

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

#### Defined in

lib/common/Kvp.d.ts:7

***

### setKvpAsync()

```ts
setKvpAsync<T>(key, value): void
```

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

#### Defined in

lib/common/Kvp.d.ts:13

***

### setKvpJson()

```ts
setKvpJson(key, value): void
```

Sets the specified key to the specified json value
This can error if given an invalid object

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | `string` | the key string |
| `value` | `any` | the value to set the key to |

#### Returns

`void`

#### Defined in

lib/common/Kvp.d.ts:20
