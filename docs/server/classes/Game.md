[@nativewrappers/fivem](../../README.md) / [server](../README.md) / Game

# Class: `abstract` Game

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
| `hashCache` | `static` | `Map`\<`string`, `number`\> | [src/server/Game.ts:5](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/server/Game.ts#L5) |

## Accessors

### GameBuild

```ts
get static GameBuild(): number
```

#### Returns

`number`

#### Defined in

[src/server/Game.ts:30](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/server/Game.ts#L30)

***

### GameName

```ts
get static GameName(): string
```

#### Returns

`string`

#### Defined in

[src/server/Game.ts:34](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/server/Game.ts#L34)

***

### GameTime

```ts
get static GameTime(): number
```

Gets how many milliseconds the game has been open this session

#### Returns

`number`

#### Defined in

[src/server/Game.ts:26](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/server/Game.ts#L26)

***

### RegisteredCommands

```ts
get static RegisteredCommands(): [{
  name: string;
 }]
```

#### Returns

[\{
  `name`: `string`;
 \}]

#### Defined in

[src/server/Game.ts:56](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/server/Game.ts#L56)

## Methods

### generateHash()

```ts
static generateHash(input): number
```

Calculate the Jenkins One At A Time (joaat) has from the given string.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `input` | `string` | The input string to calculate the hash |

#### Returns

`number`

#### Defined in

[src/server/Game.ts:11](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/server/Game.ts#L11)

***

### PlayerList()

```ts
static PlayerList(): IterableIterator<Player, any, any>
```

Get an iterable list of players currently on the server.

#### Returns

`IterableIterator`\<[`Player`](Player.md), `any`, `any`\>

Iterable list of Player objects.

#### Defined in

[src/server/Game.ts:64](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/server/Game.ts#L64)

***

### registerCommand()

```ts
static registerCommand(
   name, 
   handler, 
   restricted): void
```

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `name` | `string` | `undefined` |
| `handler` | (`player`, `args`) => `void` | `undefined` |
| `restricted` | `boolean` | `false` |

#### Returns

`void`

#### Defined in

[src/server/Game.ts:38](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/server/Game.ts#L38)
