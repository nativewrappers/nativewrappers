[@nativewrappers/fivem](../../README.md) / [server](../README.md) / Resource

# Class: Resource

Defined in: lib/common/Resource.d.ts:1

## Constructors

### new Resource()

```ts
new Resource(name): Resource
```

Defined in: lib/common/Resource.d.ts:3

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |

#### Returns

[`Resource`](Resource.md)

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="name-1"></a> `name` | `string` | lib/common/Resource.d.ts:2 |

## Methods

### getMetadata()

```ts
getMetadata(metadataKey, index): string
```

Defined in: lib/common/Resource.d.ts:4

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `metadataKey` | `string` |
| `index` | `number` |

#### Returns

`string`

***

### getPath()

```ts
getPath(): string
```

Defined in: lib/common/Resource.d.ts:5

#### Returns

`string`

***

### loadFile()

```ts
loadFile(fileName): string
```

Defined in: lib/common/Resource.d.ts:6

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `fileName` | `string` |

#### Returns

`string`

***

### saveFile()

```ts
saveFile(
   fileName, 
   data, 
   length): boolean
```

Defined in: lib/common/Resource.d.ts:7

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `fileName` | `string` |
| `data` | `string` |
| `length` | `number` |

#### Returns

`boolean`

***

### scheduleTick()

```ts
scheduleTick(): void
```

Defined in: lib/common/Resource.d.ts:8

#### Returns

`void`

***

### start()

```ts
start(): void
```

Defined in: lib/common/Resource.d.ts:9

#### Returns

`void`

***

### stop()

```ts
stop(): void
```

Defined in: lib/common/Resource.d.ts:10

#### Returns

`void`

***

### resourceCount()

```ts
static resourceCount(): number
```

Defined in: lib/common/Resource.d.ts:13

#### Returns

`number`

***

### startResource()

```ts
static startResource(name): void
```

Defined in: lib/common/Resource.d.ts:11

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |

#### Returns

`void`

***

### stopResource()

```ts
static stopResource(name): void
```

Defined in: lib/common/Resource.d.ts:12

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |

#### Returns

`void`
