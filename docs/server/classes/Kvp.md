[@nativewrappers/fivem](../../README.md) / [server](../README.md) / Kvp

# Class: Kvp\<Schema\>

Defined in: lib/common/Kvp.d.ts:6

## Type Parameters

| Type Parameter |
| ------ |
| `Schema` *extends* `KvpSchema` |

## Constructors

### new Kvp()

```ts
new Kvp<Schema>(): Kvp<Schema>
```

#### Returns

[`Kvp`](Kvp.md)\<`Schema`\>

## Methods

### delete()

```ts
delete(key, async?): void
```

Defined in: lib/common/Kvp.d.ts:52

Deletes the specified value for key.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | `string` | - |
| `async`? | `boolean` | remove the value using an async operation |

#### Returns

`void`

***

### flush()

```ts
flush(): void
```

Defined in: lib/common/Kvp.d.ts:58

Commits pending asynchronous operations to disk, ensuring data consistency.

Should be called after calling set methods using the async flag.

#### Returns

`void`

***

### getAllKeys()

```ts
getAllKeys(prefix): keyof Schema[]
```

Defined in: lib/common/Kvp.d.ts:59

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `prefix` | `string` |

#### Returns

keyof `Schema`[]

***

### getFloat()

```ts
getFloat<K>(key): number
```

Defined in: lib/common/Kvp.d.ts:14

Returns the value associated with a key as a float.

#### Type Parameters

| Type Parameter |
| ------ |
| `K` *extends* `string` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `key` | `K` |

#### Returns

`number`

***

### getJson()

```ts
getJson<K, O>(key): O extends string ? Schema[O<O>] : null
```

Defined in: lib/common/Kvp.d.ts:22

Returns the value associated with a key as a parsed JSON string.

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `K` *extends* `string` | - |
| `O` | `KvpObject`\<`K`\> |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `key` | `K` *extends* `ValidJsonKey`\<`O`\> ? `K`\<`K`\> : `never` |

#### Returns

`O` *extends* `string` ? `Schema`\[`O`\<`O`\>\] : `null`

***

### getKeys()

```ts
getKeys<K>(prefix): keyof Schema[]
```

Defined in: lib/common/Kvp.d.ts:63

Returns an array of keys which match or contain the given keys.

#### Type Parameters

| Type Parameter |
| ------ |
| `K` *extends* `string` \| `string`[] |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `prefix` | `K` |

#### Returns

keyof `Schema`[]

***

### getNumber()

```ts
getNumber<K>(key): number
```

Defined in: lib/common/Kvp.d.ts:10

Returns the value associated with a key as a number.

#### Type Parameters

| Type Parameter |
| ------ |
| `K` *extends* `string` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `key` | `K` |

#### Returns

`number`

***

### getString()

```ts
getString<K>(key): null | string
```

Defined in: lib/common/Kvp.d.ts:18

Returns the value associated with a key as a string.

#### Type Parameters

| Type Parameter |
| ------ |
| `K` *extends* `string` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `key` | `K` |

#### Returns

`null` \| `string`

***

### getValuesAsType()

```ts
getValuesAsType<K>(prefix, type): (null | string | number | Schema[string])[]
```

Defined in: lib/common/Kvp.d.ts:67

Get all values from keys in an array as the specified type.

#### Type Parameters

| Type Parameter |
| ------ |
| `K` *extends* `string` \| `string` & keyof `Schema`[] |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `prefix` | `K` |
| `type` | `any` |

#### Returns

(`null` \| `string` \| `number` \| `Schema`\[`string`\])[]

***

### set()

```ts
set<K, O>(
   key, 
   value, 
   async?): void
```

Defined in: lib/common/Kvp.d.ts:47

Sets the value associated with a key as a JSON string.

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `K` *extends* `string` | - |
| `O` | `KvpObject`\<`K`\> |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | `K` *extends* keyof `Schema` ? `K`\<`K`\> : `O` *extends* `string` ? `K` : `never` | - |
| `value` | `K` *extends* keyof `Schema` ? `Schema`\[`K`\<`K`\>\] : `O` *extends* `string` ? `Schema`\[`O`\<`O`\>\] : `never` | - |
| `async`? | `boolean` | set the value using an async operation. |

#### Returns

`void`

***

### setFloat()

```ts
setFloat<K>(
   key, 
   value, 
   async?): void
```

Defined in: lib/common/Kvp.d.ts:32

Sets the value associated with a key as a float.

#### Type Parameters

| Type Parameter |
| ------ |
| `K` *extends* `string` |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | `K` | - |
| `value` | `number` | - |
| `async`? | `boolean` | set the value using an async operation. |

#### Returns

`void`

***

### setJson()

```ts
setJson<K, O>(
   key, 
   value, 
   async?): void
```

Defined in: lib/common/Kvp.d.ts:42

Sets the value associated with a key as a JSON string.

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `K` *extends* `string` | - |
| `O` | `KvpObject`\<`K`\> |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | `K` *extends* `ValidJsonKey`\<`O`\> ? `K`\<`K`\> : `never` | - |
| `value` | `O` *extends* `string` ? `Schema`\[`O`\<`O`\>\] : `never` | - |
| `async`? | `boolean` | set the value using an async operation. |

#### Returns

`void`

***

### setNumber()

```ts
setNumber<K>(
   key, 
   value, 
   async?): void
```

Defined in: lib/common/Kvp.d.ts:27

Sets the value associated with a key as a number.

#### Type Parameters

| Type Parameter |
| ------ |
| `K` *extends* `string` |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | `K` | - |
| `value` | `number` | - |
| `async`? | `boolean` | set the value using an async operation. |

#### Returns

`void`

***

### setString()

```ts
setString<K>(
   key, 
   value, 
   async?): void
```

Defined in: lib/common/Kvp.d.ts:37

Sets the value associated with a key as a string.

#### Type Parameters

| Type Parameter |
| ------ |
| `K` *extends* `string` |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | `K` | - |
| `value` | `string` | - |
| `async`? | `boolean` | set the value using an async operation. |

#### Returns

`void`
