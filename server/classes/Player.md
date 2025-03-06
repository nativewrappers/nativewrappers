[@nativewrappers/fivem](../../README.md) / [server](../README.md) / Player

# Class: Player

Defined in: server/entities/Player.d.ts:4

## Constructors

### new Player()

```ts
new Player(source): Player
```

Defined in: server/entities/Player.d.ts:7

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `source` | `number` |

#### Returns

[`Player`](Player.md)

## Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="type"></a> `type` | `protected` | `ClassTypes` | server/entities/Player.d.ts:6 |

## Accessors

### AirDragMultiplier

#### Get Signature

```ts
get AirDragMultiplier(): number
```

Defined in: server/entities/Player.d.ts:55

##### Returns

`number`

***

### CamerRotation

#### Get Signature

```ts
get CamerRotation(): Vector3
```

Defined in: server/entities/Player.d.ts:24

##### Returns

`Vector3`

***

### Endpoint

#### Get Signature

```ts
get Endpoint(): string
```

Defined in: server/entities/Player.d.ts:23

##### Returns

`string`

***

### Exists

#### Get Signature

```ts
get Exists(): boolean
```

Defined in: server/entities/Player.d.ts:13

##### Returns

`boolean`

***

### Identifiers

#### Get Signature

```ts
get Identifiers(): string[]
```

Defined in: server/entities/Player.d.ts:22

##### Returns

`string`[]

***

### IsEvadingWanted

#### Get Signature

```ts
get IsEvadingWanted(): boolean
```

Defined in: server/entities/Player.d.ts:51

##### Returns

`boolean`

***

### IsMuted

#### Get Signature

```ts
get IsMuted(): boolean
```

Defined in: server/entities/Player.d.ts:57

##### Returns

`boolean`

#### Set Signature

```ts
set IsMuted(isMuted): void
```

Defined in: server/entities/Player.d.ts:58

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `isMuted` | `boolean` |

##### Returns

`void`

***

### IsUsingSuperJump

#### Get Signature

```ts
get IsUsingSuperJump(): boolean
```

Defined in: server/entities/Player.d.ts:56

##### Returns

`boolean`

***

### LastMessage

#### Get Signature

```ts
get LastMessage(): number
```

Defined in: server/entities/Player.d.ts:28

Returns the time since the last player UDP message

##### Returns

`number`

***

### MaxArmour

#### Get Signature

```ts
get MaxArmour(): number
```

Defined in: server/entities/Player.d.ts:29

##### Returns

`number`

***

### MaxHealth

#### Get Signature

```ts
get MaxHealth(): number
```

Defined in: server/entities/Player.d.ts:30

##### Returns

`number`

***

### MeleeModifier

#### Get Signature

```ts
get MeleeModifier(): number
```

Defined in: server/entities/Player.d.ts:31

##### Returns

`number`

***

### Name

#### Get Signature

```ts
get Name(): string
```

Defined in: server/entities/Player.d.ts:35

##### Returns

`string`

the players name

***

### Ped

#### Get Signature

```ts
get Ped(): Ped
```

Defined in: server/entities/Player.d.ts:20

##### Returns

[`Ped`](Ped.md)

***

### Ping

#### Get Signature

```ts
get Ping(): number
```

Defined in: server/entities/Player.d.ts:43

##### Returns

`number`

the players round trip ping

***

### RoutingBucket

#### Get Signature

```ts
get RoutingBucket(): number
```

Defined in: server/entities/Player.d.ts:47

##### Returns

`number`

the current routhing bucket the player is in, default is 0

***

### Source

#### Get Signature

```ts
get Source(): number
```

Defined in: server/entities/Player.d.ts:14

##### Returns

`number`

***

### Src

#### Get Signature

```ts
get Src(): string
```

Defined in: server/entities/Player.d.ts:19

Returns the player source casted as a string

##### Returns

`string`

***

### State

#### Get Signature

```ts
get State(): StateBagInterface
```

Defined in: server/entities/Player.d.ts:15

##### Returns

`StateBagInterface`

***

### Team

#### Get Signature

```ts
get Team(): number
```

Defined in: server/entities/Player.d.ts:48

##### Returns

`number`

***

### Tokens

#### Get Signature

```ts
get Tokens(): string[]
```

Defined in: server/entities/Player.d.ts:21

##### Returns

`string`[]

***

### WantedLevel

#### Get Signature

```ts
get WantedLevel(): number
```

Defined in: server/entities/Player.d.ts:50

##### Returns

`number`

***

### WantedPosition

#### Get Signature

```ts
get WantedPosition(): Vector3
```

Defined in: server/entities/Player.d.ts:49

##### Returns

`Vector3`

***

### WeaponDamageModifier

#### Get Signature

```ts
get WeaponDamageModifier(): number
```

Defined in: server/entities/Player.d.ts:52

##### Returns

`number`

***

### WeaponDefenseModifier

#### Get Signature

```ts
get WeaponDefenseModifier(): number
```

Defined in: server/entities/Player.d.ts:53

##### Returns

`number`

***

### WeaponDefenseModifier2

#### Get Signature

```ts
get WeaponDefenseModifier2(): number
```

Defined in: server/entities/Player.d.ts:54

##### Returns

`number`

## Methods

### drop()

```ts
drop(reason?): void
```

Defined in: server/entities/Player.d.ts:61

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `reason`? | `string` |

#### Returns

`void`

***

### emit()

```ts
emit(eventName, ...args): void
```

Defined in: server/entities/Player.d.ts:62

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventName` | `string` |
| ...`args` | `any`[] |

#### Returns

`void`

***

### filteredName()

```ts
filteredName(): string
```

Defined in: server/entities/Player.d.ts:39

#### Returns

`string`

the players name with any color code unicode, etc removed, this can lead to there being no name at all

***

### isAceAllowed()

```ts
isAceAllowed(object): boolean
```

Defined in: server/entities/Player.d.ts:59

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `object` | `string` |

#### Returns

`boolean`

***

### timeInPersuit()

```ts
timeInPersuit(lastPursuit?): number
```

Defined in: server/entities/Player.d.ts:60

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `lastPursuit`? | `boolean` |

#### Returns

`number`

***

### AllPlayers()

```ts
static AllPlayers(): IterableIterator<Player>
```

Defined in: server/entities/Player.d.ts:12

Get an interable list of players currently on the server

#### Returns

`IterableIterator`\<[`Player`](Player.md)\>

Iterable list of Players.
