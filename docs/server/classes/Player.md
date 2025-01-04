[@nativewrappers/fivem](../../README.md) / [server](../README.md) / Player

# Class: Player

## Constructors

### new Player()

```ts
new Player(source): Player
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `source` | `number` |

#### Returns

[`Player`](Player.md)

#### Defined in

[src/server/entities/Player.ts:9](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/server/entities/Player.ts#L9)

## Properties

| Property | Modifier | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| `type` | `protected` | `ClassTypes` | `ClassTypes.Player` | [src/server/entities/Player.ts:8](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/server/entities/Player.ts#L8) |

## Accessors

### AirDragMultiplier

```ts
get AirDragMultiplier(): number
```

#### Returns

`number`

#### Defined in

[src/server/entities/Player.ts:136](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/server/entities/Player.ts#L136)

***

### CamerRotation

```ts
get CamerRotation(): Vector3
```

#### Returns

[`Vector3`](../../fivem/classes/Vector3.md)

#### Defined in

[src/server/entities/Player.ts:57](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/server/entities/Player.ts#L57)

***

### Endpoint

```ts
get Endpoint(): string
```

#### Returns

`string`

#### Defined in

[src/server/entities/Player.ts:53](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/server/entities/Player.ts#L53)

***

### Exists

```ts
get Exists(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/server/entities/Player.ts:22](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/server/entities/Player.ts#L22)

***

### Identifiers

```ts
get Identifiers(): string[]
```

#### Returns

`string`[]

#### Defined in

[src/server/entities/Player.ts:49](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/server/entities/Player.ts#L49)

***

### IsEvadingWanted

```ts
get IsEvadingWanted(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/server/entities/Player.ts:120](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/server/entities/Player.ts#L120)

***

### IsMuted

```ts
get IsMuted(): boolean
```

```ts
set IsMuted(isMuted): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `isMuted` | `boolean` |

#### Returns

`boolean`

#### Defined in

[src/server/entities/Player.ts:144](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/server/entities/Player.ts#L144)

***

### IsUsingSuperJump

```ts
get IsUsingSuperJump(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/server/entities/Player.ts:140](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/server/entities/Player.ts#L140)

***

### LastMessage

```ts
get LastMessage(): number
```

Returns the time since the last player UDP message

#### Returns

`number`

#### Defined in

[src/server/entities/Player.ts:64](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/server/entities/Player.ts#L64)

***

### MaxArmour

```ts
get MaxArmour(): number
```

#### Returns

`number`

#### Defined in

[src/server/entities/Player.ts:68](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/server/entities/Player.ts#L68)

***

### MaxHealth

```ts
get MaxHealth(): number
```

#### Returns

`number`

#### Defined in

[src/server/entities/Player.ts:72](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/server/entities/Player.ts#L72)

***

### MeleeModifier

```ts
get MeleeModifier(): number
```

#### Returns

`number`

#### Defined in

[src/server/entities/Player.ts:76](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/server/entities/Player.ts#L76)

***

### Name

```ts
get Name(): string
```

#### Returns

`string`

the players name

#### Defined in

[src/server/entities/Player.ts:83](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/server/entities/Player.ts#L83)

***

### Ped

```ts
get Ped(): Ped
```

#### Returns

[`Ped`](Ped.md)

#### Defined in

[src/server/entities/Player.ts:41](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/server/entities/Player.ts#L41)

***

### Ping

```ts
get Ping(): number
```

#### Returns

`number`

the players round trip ping

#### Defined in

[src/server/entities/Player.ts:97](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/server/entities/Player.ts#L97)

***

### RoutingBucket

```ts
get RoutingBucket(): number
```

#### Returns

`number`

the current routhing bucket the player is in, default is 0

#### Defined in

[src/server/entities/Player.ts:104](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/server/entities/Player.ts#L104)

***

### Source

```ts
get Source(): number
```

#### Returns

`number`

#### Defined in

[src/server/entities/Player.ts:26](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/server/entities/Player.ts#L26)

***

### Src

```ts
get Src(): string
```

Returns the player source casted as a string

#### Returns

`string`

#### Defined in

[src/server/entities/Player.ts:37](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/server/entities/Player.ts#L37)

***

### State

```ts
get State(): StateBagInterface
```

#### Returns

`StateBagInterface`

#### Defined in

[src/server/entities/Player.ts:30](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/server/entities/Player.ts#L30)

***

### Team

```ts
get Team(): number
```

#### Returns

`number`

#### Defined in

[src/server/entities/Player.ts:108](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/server/entities/Player.ts#L108)

***

### Tokens

```ts
get Tokens(): string[]
```

#### Returns

`string`[]

#### Defined in

[src/server/entities/Player.ts:45](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/server/entities/Player.ts#L45)

***

### WantedLevel

```ts
get WantedLevel(): number
```

#### Returns

`number`

#### Defined in

[src/server/entities/Player.ts:116](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/server/entities/Player.ts#L116)

***

### WantedPosition

```ts
get WantedPosition(): Vector3
```

#### Returns

[`Vector3`](../../fivem/classes/Vector3.md)

#### Defined in

[src/server/entities/Player.ts:112](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/server/entities/Player.ts#L112)

***

### WeaponDamageModifier

```ts
get WeaponDamageModifier(): number
```

#### Returns

`number`

#### Defined in

[src/server/entities/Player.ts:124](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/server/entities/Player.ts#L124)

***

### WeaponDefenseModifier

```ts
get WeaponDefenseModifier(): number
```

#### Returns

`number`

#### Defined in

[src/server/entities/Player.ts:128](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/server/entities/Player.ts#L128)

***

### WeaponDefenseModifier2

```ts
get WeaponDefenseModifier2(): number
```

#### Returns

`number`

#### Defined in

[src/server/entities/Player.ts:132](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/server/entities/Player.ts#L132)

## Methods

### drop()

```ts
drop(reason): void
```

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `reason` | `string` | `"No reason specified"` |

#### Returns

`void`

#### Defined in

[src/server/entities/Player.ts:160](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/server/entities/Player.ts#L160)

***

### emit()

```ts
emit(eventName, ...args): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventName` | `string` |
| ...`args` | `any`[] |

#### Returns

`void`

#### Defined in

[src/server/entities/Player.ts:164](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/server/entities/Player.ts#L164)

***

### filteredName()

```ts
filteredName(): string
```

#### Returns

`string`

the players name with any color code unicode, etc removed, this can lead to there being no name at all

#### Defined in

[src/server/entities/Player.ts:90](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/server/entities/Player.ts#L90)

***

### isAceAllowed()

```ts
isAceAllowed(object): boolean
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `object` | `string` |

#### Returns

`boolean`

#### Defined in

[src/server/entities/Player.ts:152](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/server/entities/Player.ts#L152)

***

### timeInPersuit()

```ts
timeInPersuit(lastPursuit): number
```

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `lastPursuit` | `boolean` | `false` |

#### Returns

`number`

#### Defined in

[src/server/entities/Player.ts:156](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/server/entities/Player.ts#L156)

***

### AllPlayers()

```ts
static AllPlayers(): IterableIterator<Player, any, any>
```

Get an interable list of players currently on the server

#### Returns

`IterableIterator`\<[`Player`](Player.md), `any`, `any`\>

Iterable list of Players.

#### Defined in

[src/server/entities/Player.ts:15](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/server/entities/Player.ts#L15)
