[@nativewrappers/fivem](../../README.md) / [server](../README.md) / Kvp

# Class: Kvp\<T\>

Defined in: lib/common/Kvp.d.ts:4

## Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `Schema` |

## Constructors

### new Kvp()

```ts
new Kvp<T>(schema): Kvp<T>
```

Defined in: lib/common/Kvp.d.ts:6

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `schema` | `T` |

#### Returns

[`Kvp`](Kvp.md)\<`T`\>

## Methods

### delete()

```ts
delete(key, async?): void
```

Defined in: lib/common/Kvp.d.ts:60

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

Defined in: lib/common/Kvp.d.ts:66

Commits pending asynchronous operations to disk, ensuring data consistency.

Should be called after calling set methods using the async flag.

#### Returns

`void`

***

### get()

```ts
get<K>(key): T[K] extends "number" | "float" ? number : T[K] extends object ? null | any[any] : null | string
```

Defined in: lib/common/Kvp.d.ts:50

Returns the value associated with a key, determining the type using the declared Kvp schema.

#### Type Parameters

| Type Parameter |
| ------ |
| `K` *extends* `string` \| `number` \| `symbol` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `key` | `K` |

#### Returns

`T`\[`K`\] *extends* `"number"` \| `"float"` ? `number` : `T`\[`K`\] *extends* `object` ? `null` \| `any`\[`any`\] : `null` \| `string`

***

### getFloat()

```ts
getFloat(key): number
```

Defined in: lib/common/Kvp.d.ts:18

Returns the value associated with a key as a float.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `key` | `string` |

#### Returns

`number`

***

### getJson()

```ts
getJson<T>(key): null | T
```

Defined in: lib/common/Kvp.d.ts:26

Returns the value associated with a key as a parsed JSON string.

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `key` | `string` |

#### Returns

`null` \| `T`

***

### getKeys()

```ts
getKeys(prefix): string[]
```

Defined in: lib/common/Kvp.d.ts:71

Returns an array of keys which match or contain the given keys.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `prefix` | `string` \| `string`[] |

#### Returns

`string`[]

***

### getNumber()

```ts
getNumber(key): number
```

Defined in: lib/common/Kvp.d.ts:14

Returns the value associated with a key as a number.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `key` | `string` |

#### Returns

`number`

***

### getString()

```ts
getString(key): null | string
```

Defined in: lib/common/Kvp.d.ts:22

Returns the value associated with a key as a string.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `key` | `string` |

#### Returns

`null` \| `string`

***

### getType()

```ts
getType(key): "string" | "number" | "object" | "float"
```

Defined in: lib/common/Kvp.d.ts:10

Returns the type associated with a schema key.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `key` | keyof `T` |

#### Returns

`"string"` \| `"number"` \| `"object"` \| `"float"`

***

### getValuesAsType()

```ts
getValuesAsType(prefix, type): unknown[]
```

Defined in: lib/common/Kvp.d.ts:75

Get all values from keys in an array as the specified type.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `prefix` | `string`[] |
| `type` | `"string"` \| `"number"` \| `"object"` \| `"float"` |

#### Returns

`unknown`[]

***

### set()

```ts
set<K>(
   key, 
   value, 
   async?): void
```

Defined in: lib/common/Kvp.d.ts:55

Sets the value associated with a key as a value, using its type from the declared Kvp stricture.

#### Type Parameters

| Type Parameter |
| ------ |
| `K` *extends* `string` |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | `K` *extends* keyof `T` ? `K`\<`K`\> : `never` | - |
| `value` | `T`\[`K`\] *extends* `"number"` \| `"float"` ? `number` : `T`\[`K`\] *extends* `object` ? `null` \| `any`\[`any`\] : `null` \| `string` | - |
| `async`? | `boolean` | set the value using an async operation. |

#### Returns

`void`

***

### setFloat()

```ts
setFloat(
   key, 
   value, 
   async?): void
```

Defined in: lib/common/Kvp.d.ts:36

Sets the value associated with a key as a float.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | `string` | - |
| `value` | `number` | - |
| `async`? | `boolean` | set the value using an async operation. |

#### Returns

`void`

***

### setJson()

```ts
setJson(
   key, 
   value, 
   async?): void
```

Defined in: lib/common/Kvp.d.ts:46

Sets the value associated with a key as a JSON string.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | `string` | - |
| `value` | `object` | - |
| `async`? | `boolean` | set the value using an async operation. |

#### Returns

`void`

***

### setNumber()

```ts
setNumber(
   key, 
   value, 
   async?): void
```

Defined in: lib/common/Kvp.d.ts:31

Sets the value associated with a key as a number.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | `string` | - |
| `value` | `number` | - |
| `async`? | `boolean` | set the value using an async operation. |

#### Returns

`void`

***

### setString()

```ts
setString(
   key, 
   value, 
   async?): void
```

Defined in: lib/common/Kvp.d.ts:41

Sets the value associated with a key as a string.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | `string` | - |
| `value` | `string` | - |
| `async`? | `boolean` | set the value using an async operation. |

#### Returns

`void`
