[@nativewrappers/fivem](../../README.md) / [common](../README.md) / Kvp

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

[src/common/Kvp.ts:88](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/common/Kvp.ts#L88)

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

[src/common/Kvp.ts:96](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/common/Kvp.ts#L96)

***

### flush()

```ts
flush(): void
```

Ensures that any previous async call is flushed to disk

#### Returns

`void`

#### Defined in

[src/common/Kvp.ts:103](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/common/Kvp.ts#L103)

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

[src/common/Kvp.ts:75](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/common/Kvp.ts#L75)

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

[src/common/Kvp.ts:79](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/common/Kvp.ts#L79)

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

[src/common/Kvp.ts:66](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/common/Kvp.ts#L66)

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

[src/common/Kvp.ts:169](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/common/Kvp.ts#L169)

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

[src/common/Kvp.ts:154](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/common/Kvp.ts#L154)

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

[src/common/Kvp.ts:139](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/common/Kvp.ts#L139)

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

[src/common/Kvp.ts:57](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/common/Kvp.ts#L57)

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

[src/common/Kvp.ts:10](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/common/Kvp.ts#L10)

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

[src/common/Kvp.ts:28](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/common/Kvp.ts#L28)

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

[src/common/Kvp.ts:47](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/common/Kvp.ts#L47)
