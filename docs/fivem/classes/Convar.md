[@nativewrappers/fivem](../../README.md) / [fivem](../README.md) / Convar

# Class: Convar

Defined in: lib/common/Convar.d.ts:1

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

Defined in: lib/common/Convar.d.ts:5

#### Returns

`string`

the current console buffer

***

### get()

```ts
get(variable, defaultVar): string
```

Defined in: lib/common/Convar.d.ts:6

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

Defined in: lib/common/Convar.d.ts:9

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

Defined in: lib/common/Convar.d.ts:8

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

Defined in: lib/common/Convar.d.ts:7

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

Defined in: lib/common/Convar.d.ts:10

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

Defined in: lib/common/Convar.d.ts:11

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

Defined in: lib/common/Convar.d.ts:12

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `variable` | `string` |
| `value` | `string` |

#### Returns

`void`
