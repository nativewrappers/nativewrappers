[@nativewrappers/fivem](../../README.md) / [server](../README.md) / Game

# Class: `abstract` Game

Defined in: [src/server/Game.ts:3](https://github.com/nativewrappers/nativewrappers/blob/3a5a8937f4f56e42414bc65083bf196262ee500c/src/server/Game.ts#L3)

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
| <a id="hashcache"></a> `hashCache` | `static` | `Map`\<`string`, `number`\> | [src/server/Game.ts:5](https://github.com/nativewrappers/nativewrappers/blob/3a5a8937f4f56e42414bc65083bf196262ee500c/src/server/Game.ts#L5) |

## Accessors

### GameBuild

#### Get Signature

```ts
get static GameBuild(): number
```

Defined in: [src/server/Game.ts:30](https://github.com/nativewrappers/nativewrappers/blob/3a5a8937f4f56e42414bc65083bf196262ee500c/src/server/Game.ts#L30)

##### Returns

`number`

***

### GameName

#### Get Signature

```ts
get static GameName(): string
```

Defined in: [src/server/Game.ts:34](https://github.com/nativewrappers/nativewrappers/blob/3a5a8937f4f56e42414bc65083bf196262ee500c/src/server/Game.ts#L34)

##### Returns

`string`

***

### GameTime

#### Get Signature

```ts
get static GameTime(): number
```

Defined in: [src/server/Game.ts:26](https://github.com/nativewrappers/nativewrappers/blob/3a5a8937f4f56e42414bc65083bf196262ee500c/src/server/Game.ts#L26)

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

Defined in: [src/server/Game.ts:56](https://github.com/nativewrappers/nativewrappers/blob/3a5a8937f4f56e42414bc65083bf196262ee500c/src/server/Game.ts#L56)

##### Returns

\[\{
  `name`: `string`;
 \}\]

## Methods

### generateHash()

```ts
static generateHash(input): number
```

Defined in: [src/server/Game.ts:11](https://github.com/nativewrappers/nativewrappers/blob/3a5a8937f4f56e42414bc65083bf196262ee500c/src/server/Game.ts#L11)

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

Defined in: [src/server/Game.ts:64](https://github.com/nativewrappers/nativewrappers/blob/3a5a8937f4f56e42414bc65083bf196262ee500c/src/server/Game.ts#L64)

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
   restricted): void
```

Defined in: [src/server/Game.ts:38](https://github.com/nativewrappers/nativewrappers/blob/3a5a8937f4f56e42414bc65083bf196262ee500c/src/server/Game.ts#L38)

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `name` | `string` | `undefined` |
| `handler` | (`player`, `args`) => `void` | `undefined` |
| `restricted` | `boolean` | `false` |

#### Returns

`void`
