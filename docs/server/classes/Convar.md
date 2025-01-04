[@nativewrappers/fivem](../../README.md) / [server](../README.md) / Convar

# Class: Convar

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

#### Returns

`string`

the current console buffer

#### Defined in

lib/common/Convar.d.ts:5

***

### get()

```ts
get(variable, defaultVar): string
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `variable` | `string` |
| `defaultVar` | `string` |

#### Returns

`string`

#### Defined in

lib/common/Convar.d.ts:6

***

### getBool()

```ts
getBool(varName, defaultVar): boolean
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `varName` | `string` |
| `defaultVar` | `boolean` |

#### Returns

`boolean`

#### Defined in

lib/common/Convar.d.ts:9

***

### getFloat()

```ts
getFloat(varName, defaultVar): number
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `varName` | `string` |
| `defaultVar` | `number` |

#### Returns

`number`

#### Defined in

lib/common/Convar.d.ts:8

***

### getInt()

```ts
getInt(variable, defaultVar): number
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `variable` | `string` |
| `defaultVar` | `number` |

#### Returns

`number`

#### Defined in

lib/common/Convar.d.ts:7

***

### set()

```ts
set(variable, value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `variable` | `string` |
| `value` | `string` |

#### Returns

`void`

#### Defined in

lib/common/Convar.d.ts:10

***

### setReplicated()

```ts
setReplicated(variable, value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `variable` | `string` |
| `value` | `string` |

#### Returns

`void`

#### Defined in

lib/common/Convar.d.ts:11

***

### setServerInfo()

```ts
setServerInfo(variable, value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `variable` | `string` |
| `value` | `string` |

#### Returns

`void`

#### Defined in

lib/common/Convar.d.ts:12
