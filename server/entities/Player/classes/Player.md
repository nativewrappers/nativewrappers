[@nativewrappers/fivem](../../../../README.md) / [server/entities/Player](../README.md) / Player

# Class: Player

Defined in: lib/server/entities/Player.d.ts:4

## Constructors

### Constructor

```ts
new Player(source): Player;
```

Defined in: lib/server/entities/Player.d.ts:7

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `source` | `any` |

#### Returns

`Player`

## Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="type"></a> `type` | `protected` | `ClassTypes` | lib/server/entities/Player.d.ts:6 |

## Accessors

### AirDragMultiplier

#### Get Signature

```ts
get AirDragMultiplier(): number;
```

Defined in: lib/server/entities/Player.d.ts:61

##### Returns

`number`

***

### CameraRotation

#### Get Signature

```ts
get CameraRotation(): Vector3;
```

Defined in: lib/server/entities/Player.d.ts:30

##### Returns

`Vector3`

***

### Endpoint

#### Get Signature

```ts
get Endpoint(): string;
```

Defined in: lib/server/entities/Player.d.ts:29

##### Returns

`string`

***

### Exists

#### Get Signature

```ts
get Exists(): boolean;
```

Defined in: lib/server/entities/Player.d.ts:14

##### Returns

`boolean`

***

### Handle

#### Get Signature

```ts
get Handle(): any;
```

Defined in: lib/server/entities/Player.d.ts:20

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

Defined in: lib/server/entities/Player.d.ts:28

##### Returns

`string`[]

***

### IsEvadingWanted

#### Get Signature

```ts
get IsEvadingWanted(): boolean;
```

Defined in: lib/server/entities/Player.d.ts:57

##### Returns

`boolean`

***

### IsMuted

#### Get Signature

```ts
get IsMuted(): boolean;
```

Defined in: lib/server/entities/Player.d.ts:63

##### Returns

`boolean`

#### Set Signature

```ts
set IsMuted(isMuted): void;
```

Defined in: lib/server/entities/Player.d.ts:64

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

Defined in: lib/server/entities/Player.d.ts:62

##### Returns

`boolean`

***

### LastMessage

#### Get Signature

```ts
get LastMessage(): number;
```

Defined in: lib/server/entities/Player.d.ts:34

Returns the time since the last player UDP message

##### Returns

`number`

***

### MaxArmour

#### Get Signature

```ts
get MaxArmour(): number;
```

Defined in: lib/server/entities/Player.d.ts:35

##### Returns

`number`

***

### MaxHealth

#### Get Signature

```ts
get MaxHealth(): number;
```

Defined in: lib/server/entities/Player.d.ts:36

##### Returns

`number`

***

### MeleeModifier

#### Get Signature

```ts
get MeleeModifier(): number;
```

Defined in: lib/server/entities/Player.d.ts:37

##### Returns

`number`

***

### Name

#### Get Signature

```ts
get Name(): string;
```

Defined in: lib/server/entities/Player.d.ts:41

##### Returns

`string`

the players name

***

### Ped

#### Get Signature

```ts
get Ped(): Ped;
```

Defined in: lib/server/entities/Player.d.ts:26

##### Returns

[`Ped`](../../Ped/classes/Ped.md)

***

### Ping

#### Get Signature

```ts
get Ping(): number;
```

Defined in: lib/server/entities/Player.d.ts:49

##### Returns

`number`

the players round trip ping

***

### RoutingBucket

#### Get Signature

```ts
get RoutingBucket(): number;
```

Defined in: lib/server/entities/Player.d.ts:53

##### Returns

`number`

the current routhing bucket the player is in, default is 0

***

### Source

#### Get Signature

```ts
get Source(): number;
```

Defined in: lib/server/entities/Player.d.ts:15

##### Returns

`number`

***

### Src

#### Get Signature

```ts
get Src(): string;
```

Defined in: lib/server/entities/Player.d.ts:25

Returns the player source casted as a string

##### Returns

`string`

***

### State

#### Get Signature

```ts
get State(): StateBagInterface;
```

Defined in: lib/server/entities/Player.d.ts:21

##### Returns

[`StateBagInterface`](../../../../redm/definitions/Citizen/interfaces/StateBagInterface.md)

***

### Team

#### Get Signature

```ts
get Team(): number;
```

Defined in: lib/server/entities/Player.d.ts:54

##### Returns

`number`

***

### Tokens

#### Get Signature

```ts
get Tokens(): string[];
```

Defined in: lib/server/entities/Player.d.ts:27

##### Returns

`string`[]

***

### WantedLevel

#### Get Signature

```ts
get WantedLevel(): number;
```

Defined in: lib/server/entities/Player.d.ts:56

##### Returns

`number`

***

### WantedPosition

#### Get Signature

```ts
get WantedPosition(): Vector3;
```

Defined in: lib/server/entities/Player.d.ts:55

##### Returns

`Vector3`

***

### WeaponDamageModifier

#### Get Signature

```ts
get WeaponDamageModifier(): number;
```

Defined in: lib/server/entities/Player.d.ts:58

##### Returns

`number`

***

### WeaponDefenseModifier

#### Get Signature

```ts
get WeaponDefenseModifier(): number;
```

Defined in: lib/server/entities/Player.d.ts:59

##### Returns

`number`

***

### WeaponDefenseModifier2

#### Get Signature

```ts
get WeaponDefenseModifier2(): number;
```

Defined in: lib/server/entities/Player.d.ts:60

##### Returns

`number`

## Methods

### drop()

```ts
drop(reason?): void;
```

Defined in: lib/server/entities/Player.d.ts:67

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

Defined in: lib/server/entities/Player.d.ts:68

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

Defined in: lib/server/entities/Player.d.ts:69

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

Defined in: lib/server/entities/Player.d.ts:45

#### Returns

`string`

the players name with any color code unicode, etc removed, this can lead to there being no name at all

***

### isAceAllowed()

```ts
isAceAllowed(object): boolean;
```

Defined in: lib/server/entities/Player.d.ts:65

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

Defined in: lib/server/entities/Player.d.ts:66

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

Defined in: lib/server/entities/Player.d.ts:13

Get an interable list of players currently on the server

#### Returns

`IterableIterator`\<`Player`\>

Iterable list of Players.

***

### fromServerId()

```ts
static fromServerId(serverId): null | Player;
```

Defined in: lib/server/entities/Player.d.ts:8

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `serverId` | `number` |

#### Returns

`null` \| `Player`
