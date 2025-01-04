[@nativewrappers/fivem](../../README.md) / [common](../README.md) / Convar

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

[src/common/Convar.ts:7](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/common/Convar.ts#L7)

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

[src/common/Convar.ts:16](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/common/Convar.ts#L16)

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

[src/common/Convar.ts:28](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/common/Convar.ts#L28)

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

[src/common/Convar.ts:24](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/common/Convar.ts#L24)

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

[src/common/Convar.ts:20](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/common/Convar.ts#L20)

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

[src/common/Convar.ts:32](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/common/Convar.ts#L32)

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

[src/common/Convar.ts:41](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/common/Convar.ts#L41)

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

[src/common/Convar.ts:50](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/common/Convar.ts#L50)
