[@nativewrappers/fivem](../../../README.md) / [server/Game](../README.md) / Game

# Abstract Class: Game

Defined in: lib/server/Game.d.ts:1

## Constructors

### Constructor

```ts
new Game(): Game;
```

#### Returns

`Game`

## Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="hashcache"></a> `hashCache` | `static` | `Map`\<`string`, `number`\> | lib/server/Game.d.ts:2 |

## Accessors

### GameBuild

#### Get Signature

```ts
get static GameBuild(): number;
```

Defined in: lib/server/Game.d.ts:13

##### Returns

`number`

***

### GameName

#### Get Signature

```ts
get static GameName(): string;
```

Defined in: lib/server/Game.d.ts:14

##### Returns

`string`

***

### GameTime

#### Get Signature

```ts
get static GameTime(): number;
```

Defined in: lib/server/Game.d.ts:12

Gets how many milliseconds the game has been open this session

##### Returns

`number`

***

### RegisteredCommands

#### Get Signature

```ts
get static RegisteredCommands(): [{
  name: string;
}];
```

Defined in: lib/server/Game.d.ts:15

##### Returns

\[\{
  `name`: `string`;
\}\]

## Methods

### generateHash()

```ts
static generateHash(input): number;
```

Defined in: lib/server/Game.d.ts:8

Calculate the Jenkins One At A Time (joaat) has from the given string.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `input` | `string` | The input string to calculate the hash |

#### Returns

`number`
