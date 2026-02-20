[@nativewrappers/fivem](../../../../README.md) / [redm/definitions/redm](../README.md) / RegisterCommand

# Function: RegisterCommand()

## Call Signature

```ts
function RegisterCommand(
   commandName, 
   handler, 
   restricted): void;
```

Defined in: [src/common-game/definitions/redm.d.ts:20671](https://github.com/nativewrappers/nativewrappers/blob/8fd2e00d7e048b9268f6c990b83eef252e4d6150/src/common-game/definitions/redm.d.ts#L20671)

Registered commands can be executed by entering them in the client console (this works for client side and server side registered commands). Or by entering them in the server console/through an RCON client (only works for server side registered commands). Or if you use a supported chat resource, like the default one provided in the cfx-server-data repository, then you can enter the command in chat by prefixing it with a `/`.
Commands registered using this function can also be executed by resources, using the [`ExecuteCommand` native](#_0x561C060B).
The restricted bool is not used on the client side. Permissions can only be checked on the server side, so if you want to limit your command with an ace permission automatically, make it a server command (by registering it in a server script).
**Example result**:
![](https://i.imgur.com/TaCnG09.png)

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `commandName` | `string` | The command you want to register. |
| `handler` | `Function` | A handler function that gets called whenever the command is executed. |
| `restricted` | `boolean` | If this is a server command and you set this to true, then players will need the command.yourCommandName ace permission to execute this command. |

### Returns

`void`

## Call Signature

```ts
function RegisterCommand(
   commandName, 
   handler, 
   restricted): void;
```

Defined in: [src/common-game/definitions/redm.d.ts:20687](https://github.com/nativewrappers/nativewrappers/blob/8fd2e00d7e048b9268f6c990b83eef252e4d6150/src/common-game/definitions/redm.d.ts#L20687)

Registered commands can be executed by entering them in the client console (this works for client side and server side registered commands). Or by entering them in the server console/through an RCON client (only works for server side registered commands). Or if you use a supported chat resource, like the default one provided in the cfx-server-data repository, then you can enter the command in chat by prefixing it with a `/`.
Commands registered using this function can also be executed by resources, using the [`ExecuteCommand` native](#\_0x561C060B).
The restricted bool is not used on the client side. Permissions can only be checked on the server side, so if you want to limit your command with an ace permission automatically, make it a server command (by registering it in a server script).
**Example result**:
![](https://i.imgur.com/TaCnG09.png)

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `commandName` | `string` | The command you want to register. |
| `handler` | `Function` | A handler function that gets called whenever the command is executed. |
| `restricted` | `boolean` | If this is a server command and you set this to true, then players will need the command.yourCommandName ace permission to execute this command. |

### Returns

`void`

## Call Signature

```ts
function RegisterCommand(
   commandName, 
   handler, 
   restricted): void;
```

Defined in: [src/redm/definitions/redm.d.ts:20671](https://github.com/nativewrappers/nativewrappers/blob/8fd2e00d7e048b9268f6c990b83eef252e4d6150/src/redm/definitions/redm.d.ts#L20671)

Registered commands can be executed by entering them in the client console (this works for client side and server side registered commands). Or by entering them in the server console/through an RCON client (only works for server side registered commands). Or if you use a supported chat resource, like the default one provided in the cfx-server-data repository, then you can enter the command in chat by prefixing it with a `/`.
Commands registered using this function can also be executed by resources, using the [`ExecuteCommand` native](#_0x561C060B).
The restricted bool is not used on the client side. Permissions can only be checked on the server side, so if you want to limit your command with an ace permission automatically, make it a server command (by registering it in a server script).
**Example result**:
![](https://i.imgur.com/TaCnG09.png)

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `commandName` | `string` | The command you want to register. |
| `handler` | `Function` | A handler function that gets called whenever the command is executed. |
| `restricted` | `boolean` | If this is a server command and you set this to true, then players will need the command.yourCommandName ace permission to execute this command. |

### Returns

`void`

## Call Signature

```ts
function RegisterCommand(
   commandName, 
   handler, 
   restricted): void;
```

Defined in: [src/redm/definitions/redm.d.ts:20687](https://github.com/nativewrappers/nativewrappers/blob/8fd2e00d7e048b9268f6c990b83eef252e4d6150/src/redm/definitions/redm.d.ts#L20687)

Registered commands can be executed by entering them in the client console (this works for client side and server side registered commands). Or by entering them in the server console/through an RCON client (only works for server side registered commands). Or if you use a supported chat resource, like the default one provided in the cfx-server-data repository, then you can enter the command in chat by prefixing it with a `/`.
Commands registered using this function can also be executed by resources, using the [`ExecuteCommand` native](#\_0x561C060B).
The restricted bool is not used on the client side. Permissions can only be checked on the server side, so if you want to limit your command with an ace permission automatically, make it a server command (by registering it in a server script).
**Example result**:
![](https://i.imgur.com/TaCnG09.png)

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `commandName` | `string` | The command you want to register. |
| `handler` | `Function` | A handler function that gets called whenever the command is executed. |
| `restricted` | `boolean` | If this is a server command and you set this to true, then players will need the command.yourCommandName ace permission to execute this command. |

### Returns

`void`
