[@nativewrappers/fivem](../../README.md) / [common](../README.md) / Resource

# Class: Resource

Defined in: [src/common/Resource.ts:3](https://github.com/nativewrappers/nativewrappers/blob/df8f763f54a2ec439be9cb68f9abf90f9a4d79aa/src/common/Resource.ts#L3)

## Constructors

### new Resource()

```ts
new Resource(name): Resource
```

Defined in: [src/common/Resource.ts:4](https://github.com/nativewrappers/nativewrappers/blob/df8f763f54a2ec439be9cb68f9abf90f9a4d79aa/src/common/Resource.ts#L4)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |

#### Returns

[`Resource`](Resource.md)

## Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="name-1"></a> `name` | `public` | `string` | [src/common/Resource.ts:4](https://github.com/nativewrappers/nativewrappers/blob/df8f763f54a2ec439be9cb68f9abf90f9a4d79aa/src/common/Resource.ts#L4) |

## Methods

### getMetadata()

```ts
getMetadata(metadataKey, index): string
```

Defined in: [src/common/Resource.ts:5](https://github.com/nativewrappers/nativewrappers/blob/df8f763f54a2ec439be9cb68f9abf90f9a4d79aa/src/common/Resource.ts#L5)

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

Defined in: [src/common/Resource.ts:9](https://github.com/nativewrappers/nativewrappers/blob/df8f763f54a2ec439be9cb68f9abf90f9a4d79aa/src/common/Resource.ts#L9)

#### Returns

`string`

***

### loadFile()

```ts
loadFile(fileName): string
```

Defined in: [src/common/Resource.ts:13](https://github.com/nativewrappers/nativewrappers/blob/df8f763f54a2ec439be9cb68f9abf90f9a4d79aa/src/common/Resource.ts#L13)

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

Defined in: [src/common/Resource.ts:17](https://github.com/nativewrappers/nativewrappers/blob/df8f763f54a2ec439be9cb68f9abf90f9a4d79aa/src/common/Resource.ts#L17)

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

Defined in: [src/common/Resource.ts:26](https://github.com/nativewrappers/nativewrappers/blob/df8f763f54a2ec439be9cb68f9abf90f9a4d79aa/src/common/Resource.ts#L26)

#### Returns

`void`

***

### start()

```ts
start(): void
```

Defined in: [src/common/Resource.ts:35](https://github.com/nativewrappers/nativewrappers/blob/df8f763f54a2ec439be9cb68f9abf90f9a4d79aa/src/common/Resource.ts#L35)

#### Returns

`void`

***

### stop()

```ts
stop(): void
```

Defined in: [src/common/Resource.ts:39](https://github.com/nativewrappers/nativewrappers/blob/df8f763f54a2ec439be9cb68f9abf90f9a4d79aa/src/common/Resource.ts#L39)

#### Returns

`void`

***

### resourceCount()

```ts
static resourceCount(): number
```

Defined in: [src/common/Resource.ts:51](https://github.com/nativewrappers/nativewrappers/blob/df8f763f54a2ec439be9cb68f9abf90f9a4d79aa/src/common/Resource.ts#L51)

#### Returns

`number`

***

### startResource()

```ts
static startResource(name): void
```

Defined in: [src/common/Resource.ts:43](https://github.com/nativewrappers/nativewrappers/blob/df8f763f54a2ec439be9cb68f9abf90f9a4d79aa/src/common/Resource.ts#L43)

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

Defined in: [src/common/Resource.ts:47](https://github.com/nativewrappers/nativewrappers/blob/df8f763f54a2ec439be9cb68f9abf90f9a4d79aa/src/common/Resource.ts#L47)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |

#### Returns

`void`
