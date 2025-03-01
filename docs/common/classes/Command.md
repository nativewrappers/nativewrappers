[@nativewrappers/fivem](../../README.md) / [common](../README.md) / Command

# Class: Command\<T\>

Defined in: [src/common/Command.ts:64](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/common/Command.ts#L64)

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` *extends* `Parameter`[] | `Parameter`[] |

## Constructors

### new Command()

```ts
new Command<T>(
   name, 
   help, 
   handler, 
   params?, 
restricted?): Command<T>
```

Defined in: [src/common/Command.ts:67](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/common/Command.ts#L67)

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `name` | `string` \| `string`[] | `undefined` |
| `help` | `string` | `undefined` |
| `handler` | `CommandHandler`\<`T`\> | `undefined` |
| `params`? | `T` | `undefined` |
| `restricted`? | `Restricted` | `true` |

#### Returns

[`Command`](Command.md)\<`T`\>

## Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="help-1"></a> `help` | `readonly` | `string` | [src/common/Command.ts:69](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/common/Command.ts#L69) |
| <a id="name-1"></a> `name` | `readonly` | `string` \| `string`[] | [src/common/Command.ts:68](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/common/Command.ts#L68) |
| <a id="params-1"></a> `params?` | `readonly` | `T` | [src/common/Command.ts:71](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/common/Command.ts#L71) |

## Methods

### call()

```ts
call(
   source, 
   args, 
raw): Promise<void>
```

Defined in: [src/common/Command.ts:160](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/common/Command.ts#L160)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `source` | `number` |
| `args` | `string`[] |
| `raw` | `string` |

#### Returns

`Promise`\<`void`\>
