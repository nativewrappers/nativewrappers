[@nativewrappers/fivem](../../../../README.md) / [redm/definitions/redm](../README.md) / RegisterKeyMapping

# Function: RegisterKeyMapping()

## Call Signature

```ts
function RegisterKeyMapping(
   commandString, 
   description, 
   defaultMapper, 
   defaultParameter): void;
```

Defined in: [src/common-game/definitions/redm.d.ts:20750](https://github.com/nativewrappers/nativewrappers/blob/8fd2e00d7e048b9268f6c990b83eef252e4d6150/src/common-game/definitions/redm.d.ts#L20750)

Registers a key mapping for the current resource.
See the related [cookbook post](https://cookbook.fivem.net/2020/01/06/using-the-new-console-key-bindings/) for more information.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `commandString` | `string` | The command to execute, and the identifier of the binding. |
| `description` | `string` | A description for in the settings menu. |
| `defaultMapper` | `string` | The [mapper ID](https://docs.fivem.net/docs/game-references/input-mapper-parameter-ids/) to use for the default binding, e.g. `keyboard`. |
| `defaultParameter` | `string` | The [IO parameter ID](https://docs.fivem.net/docs/game-references/input-mapper-parameter-ids/) to use for the default binding, e.g. `f3`. |

### Returns

`void`

## Call Signature

```ts
function RegisterKeyMapping(
   commandString, 
   description, 
   defaultMapper, 
   defaultParameter): void;
```

Defined in: [src/redm/definitions/redm.d.ts:20750](https://github.com/nativewrappers/nativewrappers/blob/8fd2e00d7e048b9268f6c990b83eef252e4d6150/src/redm/definitions/redm.d.ts#L20750)

Registers a key mapping for the current resource.
See the related [cookbook post](https://cookbook.fivem.net/2020/01/06/using-the-new-console-key-bindings/) for more information.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `commandString` | `string` | The command to execute, and the identifier of the binding. |
| `description` | `string` | A description for in the settings menu. |
| `defaultMapper` | `string` | The [mapper ID](https://docs.fivem.net/docs/game-references/input-mapper-parameter-ids/) to use for the default binding, e.g. `keyboard`. |
| `defaultParameter` | `string` | The [IO parameter ID](https://docs.fivem.net/docs/game-references/input-mapper-parameter-ids/) to use for the default binding, e.g. `f3`. |

### Returns

`void`
