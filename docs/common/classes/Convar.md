[@nativewrappers/fivem](../../README.md) / [common](../README.md) / Convar

# Class: Convar

Defined in: [src/common/Convar.ts:3](https://github.com/nativewrappers/nativewrappers/blob/91f5faba0ec3a416ffe852da10ae535e5abf14fa/src/common/Convar.ts#L3)

## Constructors

### new Convar()

```ts
new Convar(): Convar
```

#### Returns

[`Convar`](Convar.md)

## Methods

### buffer()

```ts
buffer(): string
```

Defined in: [src/common/Convar.ts:7](https://github.com/nativewrappers/nativewrappers/blob/91f5faba0ec3a416ffe852da10ae535e5abf14fa/src/common/Convar.ts#L7)

#### Returns

`string`

the current console buffer

***

### get()

```ts
get(variable, defaultVar): string
```

Defined in: [src/common/Convar.ts:16](https://github.com/nativewrappers/nativewrappers/blob/91f5faba0ec3a416ffe852da10ae535e5abf14fa/src/common/Convar.ts#L16)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `variable` | `string` |
| `defaultVar` | `string` |

#### Returns

`string`

***

### getBool()

```ts
getBool(varName, defaultVar): boolean
```

Defined in: [src/common/Convar.ts:28](https://github.com/nativewrappers/nativewrappers/blob/91f5faba0ec3a416ffe852da10ae535e5abf14fa/src/common/Convar.ts#L28)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `varName` | `string` |
| `defaultVar` | `boolean` |

#### Returns

`boolean`

***

### getFloat()

```ts
getFloat(varName, defaultVar): number
```

Defined in: [src/common/Convar.ts:24](https://github.com/nativewrappers/nativewrappers/blob/91f5faba0ec3a416ffe852da10ae535e5abf14fa/src/common/Convar.ts#L24)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `varName` | `string` |
| `defaultVar` | `number` |

#### Returns

`number`

***

### getInt()

```ts
getInt(variable, defaultVar): number
```

Defined in: [src/common/Convar.ts:20](https://github.com/nativewrappers/nativewrappers/blob/91f5faba0ec3a416ffe852da10ae535e5abf14fa/src/common/Convar.ts#L20)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `variable` | `string` |
| `defaultVar` | `number` |

#### Returns

`number`

***

### set()

```ts
set(variable, value): void
```

Defined in: [src/common/Convar.ts:32](https://github.com/nativewrappers/nativewrappers/blob/91f5faba0ec3a416ffe852da10ae535e5abf14fa/src/common/Convar.ts#L32)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `variable` | `string` |
| `value` | `string` |

#### Returns

`void`

***

### setReplicated()

```ts
setReplicated(variable, value): void
```

Defined in: [src/common/Convar.ts:41](https://github.com/nativewrappers/nativewrappers/blob/91f5faba0ec3a416ffe852da10ae535e5abf14fa/src/common/Convar.ts#L41)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `variable` | `string` |
| `value` | `string` |

#### Returns

`void`

***

### setServerInfo()

```ts
setServerInfo(variable, value): void
```

Defined in: [src/common/Convar.ts:50](https://github.com/nativewrappers/nativewrappers/blob/91f5faba0ec3a416ffe852da10ae535e5abf14fa/src/common/Convar.ts#L50)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `variable` | `string` |
| `value` | `string` |

#### Returns

`void`
