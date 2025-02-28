[@nativewrappers/fivem](../../README.md) / [common](../README.md) / NetworkedMap

# Class: NetworkedMap\<K, V\>

Defined in: [src/common/net/NetworkedMap.ts:83](https://github.com/nativewrappers/nativewrappers/blob/9823dedfda755d69570435af704d4d60473d3d5a/src/common/net/NetworkedMap.ts#L83)

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

Defined in: [src/common/net/NetworkedMap.ts:89](https://github.com/nativewrappers/nativewrappers/blob/9823dedfda755d69570435af704d4d60473d3d5a/src/common/net/NetworkedMap.ts#L89)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `syncName` | `string` |
| `initialValue`? | \[`K`, `V`\][] |

#### Returns

[`NetworkedMap`](NetworkedMap.md)\<`K`, `V`\>

#### Overrides

```ts
Map<K, V>.constructor
```

## Properties

| Property | Modifier | Type | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="size"></a> `size` | `readonly` | `number` | `Map.size` | node\_modules/.pnpm/typescript@5.7.2/node\_modules/typescript/lib/lib.es2015.collection.d.ts:45 |
| <a id="species"></a> `[species]` | `readonly` | `MapConstructor` | `Map.[species]` | node\_modules/.pnpm/typescript@5.7.2/node\_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:319 |

## Accessors

### \[toStringTag\]

#### Get Signature

```ts
get toStringTag: string
```

Defined in: [src/common/net/NetworkedMap.ts:304](https://github.com/nativewrappers/nativewrappers/blob/9823dedfda755d69570435af704d4d60473d3d5a/src/common/net/NetworkedMap.ts#L304)

##### Returns

`string`

#### Overrides

```ts
Map.[toStringTag]
```

***

### SyncName

#### Get Signature

```ts
get SyncName(): string
```

Defined in: [src/common/net/NetworkedMap.ts:109](https://github.com/nativewrappers/nativewrappers/blob/9823dedfda755d69570435af704d4d60473d3d5a/src/common/net/NetworkedMap.ts#L109)

##### Returns

`string`

## Methods

### \[dispose\]()

```ts
dispose: void
```

Defined in: [src/common/net/NetworkedMap.ts:287](https://github.com/nativewrappers/nativewrappers/blob/9823dedfda755d69570435af704d4d60473d3d5a/src/common/net/NetworkedMap.ts#L287)

#### Returns

`void`

***

### \[iterator\]()

```ts
iterator: MapIterator<[K, V]>
```

Defined in: node\_modules/.pnpm/typescript@5.7.2/node\_modules/typescript/lib/lib.es2015.iterable.d.ts:143

Returns an iterable of entries in the map.

#### Returns

`MapIterator`\<\[`K`, `V`\]\>

#### Inherited from

```ts
Map.[iterator]
```

***

### addSubscriber()

```ts
addSubscriber(source): void
```

Defined in: [src/common/net/NetworkedMap.ts:139](https://github.com/nativewrappers/nativewrappers/blob/9823dedfda755d69570435af704d4d60473d3d5a/src/common/net/NetworkedMap.ts#L139)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `source` | `number` |

#### Returns

`void`

***

### clear()

```ts
clear(): void
```

Defined in: [src/common/net/NetworkedMap.ts:265](https://github.com/nativewrappers/nativewrappers/blob/9823dedfda755d69570435af704d4d60473d3d5a/src/common/net/NetworkedMap.ts#L265)

#### Returns

`void`

#### Overrides

```ts
Map.clear
```

***

### delete()

```ts
delete(key): boolean
```

Defined in: [src/common/net/NetworkedMap.ts:274](https://github.com/nativewrappers/nativewrappers/blob/9823dedfda755d69570435af704d4d60473d3d5a/src/common/net/NetworkedMap.ts#L274)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `key` | `K` |

#### Returns

`boolean`

true if an element in the Map existed and has been removed, or false if the element does not exist.

#### Overrides

```ts
Map.delete
```

***

### dispose()

```ts
dispose(): void
```

Defined in: [src/common/net/NetworkedMap.ts:300](https://github.com/nativewrappers/nativewrappers/blob/9823dedfda755d69570435af704d4d60473d3d5a/src/common/net/NetworkedMap.ts#L300)

Unregisters from the tick handler and removes the event listener

#### Returns

`void`

***

### entries()

```ts
entries(): MapIterator<[K, V]>
```

Defined in: node\_modules/.pnpm/typescript@5.7.2/node\_modules/typescript/lib/lib.es2015.iterable.d.ts:148

Returns an iterable of key, value pairs for every entry in the map.

#### Returns

`MapIterator`\<\[`K`, `V`\]\>

#### Inherited from

```ts
Map.entries
```

***

### forEach()

```ts
forEach(callbackfn, thisArg?): void
```

Defined in: node\_modules/.pnpm/typescript@5.7.2/node\_modules/typescript/lib/lib.es2015.collection.d.ts:28

Executes a provided function once per each key/value pair in the Map, in insertion order.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `callbackfn` | (`value`, `key`, `map`) => `void` |
| `thisArg`? | `any` |

#### Returns

`void`

#### Inherited from

```ts
Map.forEach
```

***

### get()

```ts
get(key): undefined | V
```

Defined in: node\_modules/.pnpm/typescript@5.7.2/node\_modules/typescript/lib/lib.es2015.collection.d.ts:33

Returns a specified element from the Map object. If the value that is associated to the provided key is an object, then you will get a reference to that object and any change made to that object will effectively modify it inside the Map.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `key` | `K` |

#### Returns

`undefined` \| `V`

Returns the element associated with the specified key. If no element is associated with the specified key, undefined is returned.

#### Inherited from

```ts
Map.get
```

***

### has()

```ts
has(key): boolean
```

Defined in: node\_modules/.pnpm/typescript@5.7.2/node\_modules/typescript/lib/lib.es2015.collection.d.ts:37

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `key` | `K` |

#### Returns

`boolean`

boolean indicating whether an element with the specified key exists or not.

#### Inherited from

```ts
Map.has
```

***

### hasSubscriber()

```ts
hasSubscriber(sub): boolean
```

Defined in: [src/common/net/NetworkedMap.ts:148](https://github.com/nativewrappers/nativewrappers/blob/9823dedfda755d69570435af704d4d60473d3d5a/src/common/net/NetworkedMap.ts#L148)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `sub` | `number` |

#### Returns

`boolean`

***

### keys()

```ts
keys(): MapIterator<K>
```

Defined in: node\_modules/.pnpm/typescript@5.7.2/node\_modules/typescript/lib/lib.es2015.iterable.d.ts:153

Returns an iterable of keys in the map

#### Returns

`MapIterator`\<`K`\>

#### Inherited from

```ts
Map.keys
```

***

### listenForChange()

```ts
listenForChange(key, fn): void
```

Defined in: [src/common/net/NetworkedMap.ts:194](https://github.com/nativewrappers/nativewrappers/blob/9823dedfda755d69570435af704d4d60473d3d5a/src/common/net/NetworkedMap.ts#L194)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `key` | `K` |
| `fn` | `ChangeListener`\<`V`\> |

#### Returns

`void`

***

### networkTick()

```ts
networkTick(): void
```

Defined in: [src/common/net/NetworkedMap.ts:280](https://github.com/nativewrappers/nativewrappers/blob/9823dedfda755d69570435af704d4d60473d3d5a/src/common/net/NetworkedMap.ts#L280)

#### Returns

`void`

***

### removeSubscriber()

```ts
removeSubscriber(sub): boolean
```

Defined in: [src/common/net/NetworkedMap.ts:144](https://github.com/nativewrappers/nativewrappers/blob/9823dedfda755d69570435af704d4d60473d3d5a/src/common/net/NetworkedMap.ts#L144)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `sub` | `number` |

#### Returns

`boolean`

***

### resync()

```ts
resync(source): void
```

Defined in: [src/common/net/NetworkedMap.ts:123](https://github.com/nativewrappers/nativewrappers/blob/9823dedfda755d69570435af704d4d60473d3d5a/src/common/net/NetworkedMap.ts#L123)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `source` | `number` |

#### Returns

`void`

***

### set()

```ts
set(key, value): this
```

Defined in: [src/common/net/NetworkedMap.ts:219](https://github.com/nativewrappers/nativewrappers/blob/9823dedfda755d69570435af704d4d60473d3d5a/src/common/net/NetworkedMap.ts#L219)

Adds a new element with a specified key and value to the Map. If an element with the same key already exists, the element will be updated.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `key` | `K` |
| `value` | `V` |

#### Returns

`this`

#### Overrides

```ts
Map.set
```

***

### subscriberCount()

```ts
subscriberCount(): number
```

Defined in: [src/common/net/NetworkedMap.ts:152](https://github.com/nativewrappers/nativewrappers/blob/9823dedfda755d69570435af704d4d60473d3d5a/src/common/net/NetworkedMap.ts#L152)

#### Returns

`number`

***

### values()

```ts
values(): MapIterator<V>
```

Defined in: node\_modules/.pnpm/typescript@5.7.2/node\_modules/typescript/lib/lib.es2015.iterable.d.ts:158

Returns an iterable of values in the map

#### Returns

`MapIterator`\<`V`\>

#### Inherited from

```ts
Map.values
```
