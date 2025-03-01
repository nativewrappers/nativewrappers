[@nativewrappers/fivem](../../README.md) / [fivem](../README.md) / Command

# Class: Command\<T\>

Defined in: lib/common/Command.d.ts:21

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

Defined in: lib/common/Command.d.ts:26

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` \| `string`[] |
| `help` | `string` |
| `handler` | `CommandHandler`\<`T`\> |
| `params`? | `T` |
| `restricted`? | `Restricted` |

#### Returns

[`Command`](Command.md)\<`T`\>

## Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="help-1"></a> `help` | `readonly` | `string` | lib/common/Command.d.ts:24 |
| <a id="name-1"></a> `name` | `readonly` | `string` \| `string`[] | lib/common/Command.d.ts:23 |
| <a id="params-1"></a> `params?` | `readonly` | `T` | lib/common/Command.d.ts:25 |

## Methods

### call()

```ts
call(
   source, 
   args, 
raw?): Promise<void>
```

Defined in: lib/common/Command.d.ts:28

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `source` | `number` |
| `args` | `string`[] |
| `raw`? | `string` |

#### Returns

`Promise`\<`void`\>
