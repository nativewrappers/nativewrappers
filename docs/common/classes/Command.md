[@nativewrappers/fivem](../../README.md) / [common](../README.md) / Command

# Class: Command\<T\>

Defined in: [src/common/Command.ts:33](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/common/Command.ts#L33)

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

Defined in: [src/common/Command.ts:36](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/common/Command.ts#L36)

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
| <a id="help-1"></a> `help` | `readonly` | `string` | [src/common/Command.ts:38](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/common/Command.ts#L38) |
| <a id="name-1"></a> `name` | `readonly` | `string` \| `string`[] | [src/common/Command.ts:37](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/common/Command.ts#L37) |
| <a id="params-1"></a> `params?` | `readonly` | `T` | [src/common/Command.ts:40](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/common/Command.ts#L40) |

## Methods

### call()

```ts
call(
   source, 
   args, 
raw): Promise<void>
```

Defined in: [src/common/Command.ts:130](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/common/Command.ts#L130)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `source` | `number` |
| `args` | `string`[] |
| `raw` | `string` |

#### Returns

`Promise`\<`void`\>
