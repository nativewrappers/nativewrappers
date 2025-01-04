[@nativewrappers/fivem](../../README.md) / [common](../README.md) / NetworkedMap

# Class: NetworkedMap\<K, V\>

not ready to be used just thoughts right now

## Extends

- `Map`\<`K`, `V`\>

## Type Parameters

| Type Parameter |
| ------ |
| `K` |
| `V` |

## Constructors

### new NetworkedMap()

```ts
new NetworkedMap<K, V>(syncName, initialValue?): NetworkedMap<K, V>
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `syncName` | `string` |
| `initialValue`? | [`K`, `V`][] |

#### Returns

[`NetworkedMap`](NetworkedMap.md)\<`K`, `V`\>

#### Overrides

`Map<K, V>.constructor`

#### Defined in

[src/common/net/NetworkedMap.ts:36](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/common/net/NetworkedMap.ts#L36)

## Properties

| Property | Modifier | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ | ------ |
| `size` | `readonly` | `number` |  | `Map.size` | node\_modules/.pnpm/typescript@5.6.3/node\_modules/typescript/lib/lib.es2015.collection.d.ts:45 |
| `[species]` | `readonly` | `MapConstructor` | - | `Map.[species]` | node\_modules/.pnpm/typescript@5.6.3/node\_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:319 |

## Accessors

### \[toStringTag\]

```ts
get toStringTag: string
```

#### Returns

`string`

#### Overrides

`Map.[toStringTag]`

#### Defined in

[src/common/net/NetworkedMap.ts:226](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/common/net/NetworkedMap.ts#L226)

## Methods

### \[dispose\]()

```ts
dispose: void
```

#### Returns

`void`

#### Defined in

[src/common/net/NetworkedMap.ts:213](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/common/net/NetworkedMap.ts#L213)

***

### \[iterator\]()

```ts
iterator: MapIterator<[K, V]>
```

Returns an iterable of entries in the map.

#### Returns

`MapIterator`\<[`K`, `V`]\>

#### Inherited from

`Map.[iterator]`

#### Defined in

node\_modules/.pnpm/typescript@5.6.3/node\_modules/typescript/lib/lib.es2015.iterable.d.ts:143

***

### addSubscriber()

```ts
addSubscriber(sub): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `sub` | `number` |

#### Returns

`void`

#### Defined in

[src/common/net/NetworkedMap.ts:72](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/common/net/NetworkedMap.ts#L72)

***

### clear()

```ts
clear(): void
```

#### Returns

`void`

#### Overrides

`Map.clear`

#### Defined in

[src/common/net/NetworkedMap.ts:191](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/common/net/NetworkedMap.ts#L191)

***

### delete()

```ts
delete(key): boolean
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `key` | `K` |

#### Returns

`boolean`

true if an element in the Map existed and has been removed, or false if the element does not exist.

#### Overrides

`Map.delete`

#### Defined in

[src/common/net/NetworkedMap.ts:200](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/common/net/NetworkedMap.ts#L200)

***

### dispose()

```ts
dispose(): void
```

Unregisters from the tick handler and removes the event listener

#### Returns

`void`

#### Defined in

[src/common/net/NetworkedMap.ts:222](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/common/net/NetworkedMap.ts#L222)

***

### entries()

```ts
entries(): MapIterator<[K, V]>
```

Returns an iterable of key, value pairs for every entry in the map.

#### Returns

`MapIterator`\<[`K`, `V`]\>

#### Inherited from

`Map.entries`

#### Defined in

node\_modules/.pnpm/typescript@5.6.3/node\_modules/typescript/lib/lib.es2015.iterable.d.ts:148

***

### forEach()

```ts
forEach(callbackfn, thisArg?): void
```

Executes a provided function once per each key/value pair in the Map, in insertion order.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `callbackfn` | (`value`, `key`, `map`) => `void` |
| `thisArg`? | `any` |

#### Returns

`void`

#### Inherited from

`Map.forEach`

#### Defined in

node\_modules/.pnpm/typescript@5.6.3/node\_modules/typescript/lib/lib.es2015.collection.d.ts:28

***

### get()

```ts
get(key): undefined | V
```

Returns a specified element from the Map object. If the value that is associated to the provided key is an object, then you will get a reference to that object and any change made to that object will effectively modify it inside the Map.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `key` | `K` |

#### Returns

`undefined` \| `V`

Returns the element associated with the specified key. If no element is associated with the specified key, undefined is returned.

#### Inherited from

`Map.get`

#### Defined in

node\_modules/.pnpm/typescript@5.6.3/node\_modules/typescript/lib/lib.es2015.collection.d.ts:33

***

### has()

```ts
has(key): boolean
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `key` | `K` |

#### Returns

`boolean`

boolean indicating whether an element with the specified key exists or not.

#### Inherited from

`Map.has`

#### Defined in

node\_modules/.pnpm/typescript@5.6.3/node\_modules/typescript/lib/lib.es2015.collection.d.ts:37

***

### keys()

```ts
keys(): MapIterator<K>
```

Returns an iterable of keys in the map

#### Returns

`MapIterator`\<`K`\>

#### Inherited from

`Map.keys`

#### Defined in

node\_modules/.pnpm/typescript@5.6.3/node\_modules/typescript/lib/lib.es2015.iterable.d.ts:153

***

### listenForChange()

```ts
listenForChange(key, fn): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `key` | `K` |
| `fn` | `ChangeListener`\<`V`\> |

#### Returns

`void`

#### Defined in

[src/common/net/NetworkedMap.ts:123](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/common/net/NetworkedMap.ts#L123)

***

### networkTick()

```ts
networkTick(): void
```

#### Returns

`void`

#### Defined in

[src/common/net/NetworkedMap.ts:206](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/common/net/NetworkedMap.ts#L206)

***

### removeSubscriber()

```ts
removeSubscriber(sub): boolean
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `sub` | `number` |

#### Returns

`boolean`

#### Defined in

[src/common/net/NetworkedMap.ts:83](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/common/net/NetworkedMap.ts#L83)

***

### set()

```ts
set(key, value): this
```

Adds a new element with a specified key and value to the Map. If an element with the same key already exists, the element will be updated.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `key` | `K` |
| `value` | `V` |

#### Returns

`this`

#### Overrides

`Map.set`

#### Defined in

[src/common/net/NetworkedMap.ts:148](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/common/net/NetworkedMap.ts#L148)

***

### values()

```ts
values(): MapIterator<V>
```

Returns an iterable of values in the map

#### Returns

`MapIterator`\<`V`\>

#### Inherited from

`Map.values`

#### Defined in

node\_modules/.pnpm/typescript@5.6.3/node\_modules/typescript/lib/lib.es2015.iterable.d.ts:158
