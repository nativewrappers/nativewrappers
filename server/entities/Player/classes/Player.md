[@nativewrappers/fivem](../../../../README.md) / [server/entities/Player](../README.md) / Player

# Class: Player

Defined in: lib/server/entities/Player.d.ts:5

## Constructors

### Constructor

```ts
new Player(source): Player;
```

Defined in: lib/server/entities/Player.d.ts:9

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `source` | `any` |

#### Returns

`Player`

## Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="ped"></a> `ped` | `protected` | `null` \| [`Ped`](../../Ped/classes/Ped.md) | lib/server/entities/Player.d.ts:8 |
| <a id="type"></a> `type` | `protected` | `ClassTypes` | lib/server/entities/Player.d.ts:7 |

## Accessors

### AirDragMultiplier

#### Get Signature

```ts
get AirDragMultiplier(): number;
```

Defined in: lib/server/entities/Player.d.ts:90

##### Returns

`number`

***

### CameraRotation

#### Get Signature

```ts
get CameraRotation(): Vector3;
```

Defined in: lib/server/entities/Player.d.ts:41

##### Returns

`Vector3`

***

### Endpoint

#### Get Signature

```ts
get Endpoint(): string;
```

Defined in: lib/server/entities/Player.d.ts:40

##### Returns

`string`

***

### Exists

#### Get Signature

```ts
get Exists(): boolean;
```

Defined in: lib/server/entities/Player.d.ts:22

##### Returns

`boolean`

***

### Handle

#### Get Signature

```ts
get Handle(): any;
```

Defined in: lib/server/entities/Player.d.ts:28

##### Returns

`any`

the handle of the current player, this will be a number type, but we return 'any'
so we don't have to deal with annoying type differences between native calls

***

### Identifiers

#### Get Signature

```ts
get Identifiers(): string[];
```

Defined in: lib/server/entities/Player.d.ts:39

##### Returns

`string`[]

***

### IsEvadingWanted

#### Get Signature

```ts
get IsEvadingWanted(): boolean;
```

Defined in: lib/server/entities/Player.d.ts:86

##### Returns

`boolean`

***

### IsMuted

#### Get Signature

```ts
get IsMuted(): boolean;
```

Defined in: lib/server/entities/Player.d.ts:92

##### Returns

`boolean`

#### Set Signature

```ts
set IsMuted(isMuted): void;
```

Defined in: lib/server/entities/Player.d.ts:93

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
get IsUsingSuperJump(): boolean;
```

Defined in: lib/server/entities/Player.d.ts:91

##### Returns

`boolean`

***

### LastMessage

#### Get Signature

```ts
get LastMessage(): number;
```

Defined in: lib/server/entities/Player.d.ts:45

Returns the time since the last player UDP message

##### Returns

`number`

***

### MaxArmour

#### Get Signature

```ts
get MaxArmour(): number;
```

Defined in: lib/server/entities/Player.d.ts:46

##### Returns

`number`

***

### MaxHealth

#### Get Signature

```ts
get MaxHealth(): number;
```

Defined in: lib/server/entities/Player.d.ts:47

##### Returns

`number`

***

### MeleeModifier

#### Get Signature

```ts
get MeleeModifier(): number;
```

Defined in: lib/server/entities/Player.d.ts:48

##### Returns

`number`

***

### Name

#### Get Signature

```ts
get Name(): string;
```

Defined in: lib/server/entities/Player.d.ts:52

##### Returns

`string`

the players name

***

### PacketLoss

#### Get Signature

```ts
get PacketLoss(): number;
```

Defined in: lib/server/entities/Player.d.ts:68

##### Returns

`number`

the players packet loss as a fraction (0.0 - 1.0), this only updates once every 10 seconds

***

### Ped

#### Get Signature

```ts
get Ped(): null | Ped;
```

Defined in: lib/server/entities/Player.d.ts:37

Gets the player ped

##### Returns

`null` \| [`Ped`](../../Ped/classes/Ped.md)

***

### Ping

#### Get Signature

```ts
get Ping(): number;
```

Defined in: lib/server/entities/Player.d.ts:60

##### Returns

`number`

the players round trip ping

***

### Position

#### Get Signature

```ts
get Position(): Vector3;
```

Defined in: lib/server/entities/Player.d.ts:84

Returns the position the player is currently focused on

##### Returns

`Vector3`

***

### RoutingBucket

#### Get Signature

```ts
get RoutingBucket(): number;
```

Defined in: lib/server/entities/Player.d.ts:72

##### Returns

`number`

the current routhing bucket the player is in, default is 0

#### Set Signature

```ts
set RoutingBucket(routingBucket): void;
```

Defined in: lib/server/entities/Player.d.ts:78

Sets the players routing bucket to routingBucket
You can use onPlayerBucketChange to listen for routing bucket changes
[https://github.com/citizenfx/fivem/blob/cfed16afb4ba2d920cfd31adb0c27d758988aac3/code/components/citizen-server-impl/src/state/ServerGameState\_Scripting.cpp#L1675C1-L1686C25](https://github.com/citizenfx/fivem/blob/cfed16afb4ba2d920cfd31adb0c27d758988aac3/code/components/citizen-server-impl/src/state/ServerGameState_Scripting.cpp#L1675C1-L1686C25)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `routingBucket` | `number` |

##### Returns

`void`

***

### Source

#### Get Signature

```ts
get Source(): number;
```

Defined in: lib/server/entities/Player.d.ts:23

##### Returns

`number`

***

### Src

#### Get Signature

```ts
get Src(): string;
```

Defined in: lib/server/entities/Player.d.ts:33

Returns the player source casted as a string

##### Returns

`string`

***

### State

#### Get Signature

```ts
get State(): StateBagInterface;
```

Defined in: lib/server/entities/Player.d.ts:29

##### Returns

[`StateBagInterface`](../../../../redm/definitions/Citizen/interfaces/StateBagInterface.md)

***

### Team

#### Get Signature

```ts
get Team(): number;
```

Defined in: lib/server/entities/Player.d.ts:79

##### Returns

`number`

***

### Tokens

#### Get Signature

```ts
get Tokens(): string[];
```

Defined in: lib/server/entities/Player.d.ts:38

##### Returns

`string`[]

***

### WantedLevel

#### Get Signature

```ts
get WantedLevel(): number;
```

Defined in: lib/server/entities/Player.d.ts:85

##### Returns

`number`

***

### WantedPosition

#### Get Signature

```ts
get WantedPosition(): Vector3;
```

Defined in: lib/server/entities/Player.d.ts:80

##### Returns

`Vector3`

***

### WeaponDamageModifier

#### Get Signature

```ts
get WeaponDamageModifier(): number;
```

Defined in: lib/server/entities/Player.d.ts:87

##### Returns

`number`

***

### WeaponDefenseModifier

#### Get Signature

```ts
get WeaponDefenseModifier(): number;
```

Defined in: lib/server/entities/Player.d.ts:88

##### Returns

`number`

***

### WeaponDefenseModifier2

#### Get Signature

```ts
get WeaponDefenseModifier2(): number;
```

Defined in: lib/server/entities/Player.d.ts:89

##### Returns

`number`

## Methods

### drop()

```ts
drop(reason?): void;
```

Defined in: lib/server/entities/Player.d.ts:96

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `reason?` | `string` |

#### Returns

`void`

***

### emit()

```ts
emit(eventName, ...args): void;
```

Defined in: lib/server/entities/Player.d.ts:97

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventName` | `string` |
| ...`args` | `any`[] |

#### Returns

`void`

***

### emitRaw()

```ts
emitRaw(eventName, data): void;
```

Defined in: lib/server/entities/Player.d.ts:98

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventName` | `string` |
| `data` | `Uint8Array` |

#### Returns

`void`

***

### filteredName()

```ts
filteredName(): string;
```

Defined in: lib/server/entities/Player.d.ts:56

#### Returns

`string`

the players name with any color code unicode, etc removed, this can lead to there being no name at all

***

### getPeerStatistic()

```ts
getPeerStatistic(statistic): number;
```

Defined in: lib/server/entities/Player.d.ts:64

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `statistic` | [`PeerStatistics`](../../../enum/PeerStatistics/enumerations/PeerStatistics.md) |

#### Returns

`number`

the raw value of the specified ENet peer statistic for the player

***

### isAceAllowed()

```ts
isAceAllowed(object): boolean;
```

Defined in: lib/server/entities/Player.d.ts:94

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `object` | `string` |

#### Returns

`boolean`

***

### timeInPersuit()

```ts
timeInPersuit(lastPursuit?): number;
```

Defined in: lib/server/entities/Player.d.ts:95

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `lastPursuit?` | `boolean` |

#### Returns

`number`

***

### AllPlayers()

```ts
static AllPlayers(): IterableIterator<Player>;
```

Defined in: lib/server/entities/Player.d.ts:21

Get an interable list of players currently on the server

You should generally prefer to use PlayerList for this if you're
frequently doing this call, since it has less overhead, as it doesn't have
to iterate over the entire player list every time, and it doesn't have to
create a new player object

#### Returns

`IterableIterator`\<`Player`\>

Iterable list of Players.

***

### fromServerId()

```ts
static fromServerId(serverId): null | Player;
```

Defined in: lib/server/entities/Player.d.ts:10

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `serverId` | `number` |

#### Returns

`null` \| `Player`
