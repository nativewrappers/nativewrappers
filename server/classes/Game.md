[@nativewrappers/fivem](../../README.md) / [server](../README.md) / Game

# Class: `abstract` Game

Defined in: server/Game.d.ts:2

## Constructors

### new Game()

```ts
new Game(): Game
```

#### Returns

[`Game`](Game.md)

## Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="hashcache"></a> `hashCache` | `static` | `Map`\<`string`, `number`\> | server/Game.d.ts:3 |

## Accessors

### GameBuild

#### Get Signature

```ts
get static GameBuild(): number
```

Defined in: server/Game.d.ts:14

##### Returns

`number`

***

### GameName

#### Get Signature

```ts
get static GameName(): string
```

Defined in: server/Game.d.ts:15

##### Returns

`string`

***

### GameTime

#### Get Signature

```ts
get static GameTime(): number
```

Defined in: server/Game.d.ts:13

Gets how many milliseconds the game has been open this session

##### Returns

`number`

***

### RegisteredCommands

#### Get Signature

```ts
get static RegisteredCommands(): [{
  name: string;
 }]
```

Defined in: server/Game.d.ts:17

##### Returns

\[\{
  `name`: `string`;
 \}\]

## Methods

### generateHash()

```ts
static generateHash(input): number
```

Defined in: server/Game.d.ts:9

Calculate the Jenkins One At A Time (joaat) has from the given string.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `input` | `string` | The input string to calculate the hash |

#### Returns

`number`

***

### PlayerList()

```ts
static PlayerList(): IterableIterator<Player>
```

Defined in: server/Game.d.ts:24

Get an iterable list of players currently on the server.

#### Returns

`IterableIterator`\<[`Player`](Player.md)\>

Iterable list of Player objects.

***

### registerCommand()

```ts
static registerCommand(
   name, 
   handler, 
   restricted?): void
```

Defined in: server/Game.d.ts:16

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |
| `handler` | (`player`, `args`) => `void` |
| `restricted`? | `boolean` |

#### Returns

`void`
