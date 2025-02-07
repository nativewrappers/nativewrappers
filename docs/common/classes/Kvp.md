[@nativewrappers/fivem](../../README.md) / [common](../README.md) / Kvp

# Class: Kvp\<T\>

Defined in: [src/common/Kvp.ts:5](https://github.com/nativewrappers/nativewrappers/blob/427b5ee59afa6efb7a0db0f5ab134f700c75b61b/src/common/Kvp.ts#L5)

## Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `Schema` |

## Constructors

### new Kvp()

```ts
new Kvp<T>(schema): Kvp<T>
```

Defined in: [src/common/Kvp.ts:8](https://github.com/nativewrappers/nativewrappers/blob/427b5ee59afa6efb7a0db0f5ab134f700c75b61b/src/common/Kvp.ts#L8)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `schema` | `T` |

#### Returns

[`Kvp`](Kvp.md)\<`T`\>

## Methods

### delete()

```ts
delete(key, async): void
```

Defined in: [src/common/Kvp.ts:153](https://github.com/nativewrappers/nativewrappers/blob/427b5ee59afa6efb7a0db0f5ab134f700c75b61b/src/common/Kvp.ts#L153)

Deletes the specified value for key.

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `key` | `string` | `undefined` | - |
| `async` | `boolean` | `false` | remove the value using an async operation |

#### Returns

`void`

***

### flush()

```ts
flush(): void
```

Defined in: [src/common/Kvp.ts:162](https://github.com/nativewrappers/nativewrappers/blob/427b5ee59afa6efb7a0db0f5ab134f700c75b61b/src/common/Kvp.ts#L162)

Commits pending asynchronous operations to disk, ensuring data consistency.

Should be called after calling set methods using the async flag.

#### Returns

`void`

***

### get()

```ts
get<K>(key): T[K] extends "number" | "float" ? number : T[K] extends object ? null | any[any] : null | string
```

Defined in: [src/common/Kvp.ts:95](https://github.com/nativewrappers/nativewrappers/blob/427b5ee59afa6efb7a0db0f5ab134f700c75b61b/src/common/Kvp.ts#L95)

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

Defined in: [src/common/Kvp.ts:34](https://github.com/nativewrappers/nativewrappers/blob/427b5ee59afa6efb7a0db0f5ab134f700c75b61b/src/common/Kvp.ts#L34)

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

Defined in: [src/common/Kvp.ts:48](https://github.com/nativewrappers/nativewrappers/blob/427b5ee59afa6efb7a0db0f5ab134f700c75b61b/src/common/Kvp.ts#L48)

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

Defined in: [src/common/Kvp.ts:187](https://github.com/nativewrappers/nativewrappers/blob/427b5ee59afa6efb7a0db0f5ab134f700c75b61b/src/common/Kvp.ts#L187)

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

Defined in: [src/common/Kvp.ts:27](https://github.com/nativewrappers/nativewrappers/blob/427b5ee59afa6efb7a0db0f5ab134f700c75b61b/src/common/Kvp.ts#L27)

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

Defined in: [src/common/Kvp.ts:41](https://github.com/nativewrappers/nativewrappers/blob/427b5ee59afa6efb7a0db0f5ab134f700c75b61b/src/common/Kvp.ts#L41)

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

Defined in: [src/common/Kvp.ts:20](https://github.com/nativewrappers/nativewrappers/blob/427b5ee59afa6efb7a0db0f5ab134f700c75b61b/src/common/Kvp.ts#L20)

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

Defined in: [src/common/Kvp.ts:196](https://github.com/nativewrappers/nativewrappers/blob/427b5ee59afa6efb7a0db0f5ab134f700c75b61b/src/common/Kvp.ts#L196)

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
   async): void
```

Defined in: [src/common/Kvp.ts:120](https://github.com/nativewrappers/nativewrappers/blob/427b5ee59afa6efb7a0db0f5ab134f700c75b61b/src/common/Kvp.ts#L120)

Sets the value associated with a key as a value, using its type from the declared Kvp stricture.

#### Type Parameters

| Type Parameter |
| ------ |
| `K` *extends* `string` |

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `key` | `K` *extends* keyof `T` ? `K`\<`K`\> : `never` | `undefined` | - |
| `value` | `T`\[`K`\] *extends* `"number"` \| `"float"` ? `number` : `T`\[`K`\] *extends* `object` ? `null` \| `any`\[`any`\] : `null` \| `string` | `undefined` | - |
| `async` | `boolean` | `false` | set the value using an async operation. |

#### Returns

`void`

***

### setFloat()

```ts
setFloat(
   key, 
   value, 
   async): void
```

Defined in: [src/common/Kvp.ts:67](https://github.com/nativewrappers/nativewrappers/blob/427b5ee59afa6efb7a0db0f5ab134f700c75b61b/src/common/Kvp.ts#L67)

Sets the value associated with a key as a float.

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `key` | `string` | `undefined` | - |
| `value` | `number` | `undefined` | - |
| `async` | `boolean` | `false` | set the value using an async operation. |

#### Returns

`void`

***

### setJson()

```ts
setJson(
   key, 
   value, 
   async): void
```

Defined in: [src/common/Kvp.ts:87](https://github.com/nativewrappers/nativewrappers/blob/427b5ee59afa6efb7a0db0f5ab134f700c75b61b/src/common/Kvp.ts#L87)

Sets the value associated with a key as a JSON string.

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `key` | `string` | `undefined` | - |
| `value` | `object` | `undefined` | - |
| `async` | `boolean` | `false` | set the value using an async operation. |

#### Returns

`void`

***

### setNumber()

```ts
setNumber(
   key, 
   value, 
   async): void
```

Defined in: [src/common/Kvp.ts:57](https://github.com/nativewrappers/nativewrappers/blob/427b5ee59afa6efb7a0db0f5ab134f700c75b61b/src/common/Kvp.ts#L57)

Sets the value associated with a key as a number.

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `key` | `string` | `undefined` | - |
| `value` | `number` | `undefined` | - |
| `async` | `boolean` | `false` | set the value using an async operation. |

#### Returns

`void`

***

### setString()

```ts
setString(
   key, 
   value, 
   async): void
```

Defined in: [src/common/Kvp.ts:77](https://github.com/nativewrappers/nativewrappers/blob/427b5ee59afa6efb7a0db0f5ab134f700c75b61b/src/common/Kvp.ts#L77)

Sets the value associated with a key as a string.

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `key` | `string` | `undefined` | - |
| `value` | `string` | `undefined` | - |
| `async` | `boolean` | `false` | set the value using an async operation. |

#### Returns

`void`
