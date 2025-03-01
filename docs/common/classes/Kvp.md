[@nativewrappers/fivem](../../README.md) / [common](../README.md) / Kvp

# Class: Kvp\<Schema\>

Defined in: [src/common/Kvp.ts:13](https://github.com/nativewrappers/nativewrappers/blob/bf1d263f0188667cde482dc5657983cf3674a640/src/common/Kvp.ts#L13)

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
delete(key, async): void
```

Defined in: [src/common/Kvp.ts:137](https://github.com/nativewrappers/nativewrappers/blob/bf1d263f0188667cde482dc5657983cf3674a640/src/common/Kvp.ts#L137)

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

Defined in: [src/common/Kvp.ts:146](https://github.com/nativewrappers/nativewrappers/blob/bf1d263f0188667cde482dc5657983cf3674a640/src/common/Kvp.ts#L146)

Commits pending asynchronous operations to disk, ensuring data consistency.

Should be called after calling set methods using the async flag.

#### Returns

`void`

***

### getAllKeys()

```ts
getAllKeys(prefix): keyof Schema[]
```

Defined in: [src/common/Kvp.ts:150](https://github.com/nativewrappers/nativewrappers/blob/bf1d263f0188667cde482dc5657983cf3674a640/src/common/Kvp.ts#L150)

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

Defined in: [src/common/Kvp.ts:24](https://github.com/nativewrappers/nativewrappers/blob/bf1d263f0188667cde482dc5657983cf3674a640/src/common/Kvp.ts#L24)

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
getJson<K, O>(key): null | O extends string ? Schema[O<O>] : null
```

Defined in: [src/common/Kvp.ts:38](https://github.com/nativewrappers/nativewrappers/blob/bf1d263f0188667cde482dc5657983cf3674a640/src/common/Kvp.ts#L38)

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

`null` \| `O` *extends* `string` ? `Schema`\[`O`\<`O`\>\] : `null`

***

### getKeys()

```ts
getKeys<K>(prefix): keyof Schema[]
```

Defined in: [src/common/Kvp.ts:171](https://github.com/nativewrappers/nativewrappers/blob/bf1d263f0188667cde482dc5657983cf3674a640/src/common/Kvp.ts#L171)

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

Defined in: [src/common/Kvp.ts:17](https://github.com/nativewrappers/nativewrappers/blob/bf1d263f0188667cde482dc5657983cf3674a640/src/common/Kvp.ts#L17)

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

Defined in: [src/common/Kvp.ts:31](https://github.com/nativewrappers/nativewrappers/blob/bf1d263f0188667cde482dc5657983cf3674a640/src/common/Kvp.ts#L31)

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

Defined in: [src/common/Kvp.ts:180](https://github.com/nativewrappers/nativewrappers/blob/bf1d263f0188667cde482dc5657983cf3674a640/src/common/Kvp.ts#L180)

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
   async): void
```

Defined in: [src/common/Kvp.ts:104](https://github.com/nativewrappers/nativewrappers/blob/bf1d263f0188667cde482dc5657983cf3674a640/src/common/Kvp.ts#L104)

Sets the value associated with a key as a JSON string.

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `K` *extends* `string` | - |
| `O` | `KvpObject`\<`K`\> |

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `key` | `K` *extends* keyof `Schema` ? `K`\<`K`\> : `O` *extends* `string` ? `K` : `never` | `undefined` | - |
| `value` | `K` *extends* keyof `Schema` ? `Schema`\[`K`\<`K`\>\] : `O` *extends* `string` ? `Schema`\[`O`\<`O`\>\] : `never` | `undefined` | - |
| `async` | `boolean` | `false` | set the value using an async operation. |

#### Returns

`void`

***

### setFloat()

```ts
setFloat<K>(
   key, 
   value, 
   async): void
```

Defined in: [src/common/Kvp.ts:63](https://github.com/nativewrappers/nativewrappers/blob/bf1d263f0188667cde482dc5657983cf3674a640/src/common/Kvp.ts#L63)

Sets the value associated with a key as a float.

#### Type Parameters

| Type Parameter |
| ------ |
| `K` *extends* `string` |

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `key` | `K` | `undefined` | - |
| `value` | `number` | `undefined` | - |
| `async` | `boolean` | `false` | set the value using an async operation. |

#### Returns

`void`

***

### setJson()

```ts
setJson<K, O>(
   key, 
   value, 
   async): void
```

Defined in: [src/common/Kvp.ts:91](https://github.com/nativewrappers/nativewrappers/blob/bf1d263f0188667cde482dc5657983cf3674a640/src/common/Kvp.ts#L91)

Sets the value associated with a key as a JSON string.

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `K` *extends* `string` | - |
| `O` | `KvpObject`\<`K`\> |

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `key` | `K` *extends* `ValidJsonKey`\<`O`\> ? `K`\<`K`\> : `never` | `undefined` | - |
| `value` | `O` *extends* `string` ? `Schema`\[`O`\<`O`\>\] : `never` | `undefined` | - |
| `async` | `boolean` | `false` | set the value using an async operation. |

#### Returns

`void`

***

### setNumber()

```ts
setNumber<K>(
   key, 
   value, 
   async): void
```

Defined in: [src/common/Kvp.ts:49](https://github.com/nativewrappers/nativewrappers/blob/bf1d263f0188667cde482dc5657983cf3674a640/src/common/Kvp.ts#L49)

Sets the value associated with a key as a number.

#### Type Parameters

| Type Parameter |
| ------ |
| `K` *extends* `string` |

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `key` | `K` | `undefined` | - |
| `value` | `number` | `undefined` | - |
| `async` | `boolean` | `false` | set the value using an async operation. |

#### Returns

`void`

***

### setString()

```ts
setString<K>(
   key, 
   value, 
   async): void
```

Defined in: [src/common/Kvp.ts:77](https://github.com/nativewrappers/nativewrappers/blob/bf1d263f0188667cde482dc5657983cf3674a640/src/common/Kvp.ts#L77)

Sets the value associated with a key as a string.

#### Type Parameters

| Type Parameter |
| ------ |
| `K` *extends* `string` |

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `key` | `K` | `undefined` | - |
| `value` | `string` | `undefined` | - |
| `async` | `boolean` | `false` | set the value using an async operation. |

#### Returns

`void`
