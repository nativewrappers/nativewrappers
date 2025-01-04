[@nativewrappers/fivem](../../README.md) / [common](../README.md) / Resource

# Class: Resource

## Constructors

### new Resource()

```ts
new Resource(name): Resource
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |

#### Returns

[`Resource`](Resource.md)

#### Defined in

[src/common/Resource.ts:4](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/common/Resource.ts#L4)

## Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| `name` | `public` | `string` | [src/common/Resource.ts:4](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/common/Resource.ts#L4) |

## Methods

### getMetadata()

```ts
getMetadata(metadataKey, index): string
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `metadataKey` | `string` |
| `index` | `number` |

#### Returns

`string`

#### Defined in

[src/common/Resource.ts:5](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/common/Resource.ts#L5)

***

### getPath()

```ts
getPath(): string
```

#### Returns

`string`

#### Defined in

[src/common/Resource.ts:9](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/common/Resource.ts#L9)

***

### loadFile()

```ts
loadFile(fileName): string
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `fileName` | `string` |

#### Returns

`string`

#### Defined in

[src/common/Resource.ts:13](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/common/Resource.ts#L13)

***

### saveFile()

```ts
saveFile(
   fileName, 
   data, 
   length): boolean
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `fileName` | `string` |
| `data` | `string` |
| `length` | `number` |

#### Returns

`boolean`

#### Defined in

[src/common/Resource.ts:17](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/common/Resource.ts#L17)

***

### scheduleTick()

```ts
scheduleTick(): void
```

#### Returns

`void`

#### Defined in

[src/common/Resource.ts:26](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/common/Resource.ts#L26)

***

### start()

```ts
start(): void
```

#### Returns

`void`

#### Defined in

[src/common/Resource.ts:35](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/common/Resource.ts#L35)

***

### stop()

```ts
stop(): void
```

#### Returns

`void`

#### Defined in

[src/common/Resource.ts:39](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/common/Resource.ts#L39)

***

### resourceCount()

```ts
static resourceCount(): number
```

#### Returns

`number`

#### Defined in

[src/common/Resource.ts:51](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/common/Resource.ts#L51)

***

### startResource()

```ts
static startResource(name): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |

#### Returns

`void`

#### Defined in

[src/common/Resource.ts:43](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/common/Resource.ts#L43)

***

### stopResource()

```ts
static stopResource(name): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |

#### Returns

`void`

#### Defined in

[src/common/Resource.ts:47](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/common/Resource.ts#L47)
