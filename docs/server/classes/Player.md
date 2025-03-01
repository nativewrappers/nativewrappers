[@nativewrappers/fivem](../../README.md) / [server](../README.md) / Player

# Class: Player

Defined in: [src/server/entities/Player.ts:7](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/server/entities/Player.ts#L7)

## Constructors

### new Player()

```ts
new Player(source): Player
```

Defined in: [src/server/entities/Player.ts:9](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/server/entities/Player.ts#L9)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `source` | `number` |

#### Returns

[`Player`](Player.md)

## Properties

| Property | Modifier | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="type"></a> `type` | `protected` | `ClassTypes` | `ClassTypes.Player` | [src/server/entities/Player.ts:8](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/server/entities/Player.ts#L8) |

## Accessors

### AirDragMultiplier

#### Get Signature

```ts
get AirDragMultiplier(): number
```

Defined in: [src/server/entities/Player.ts:136](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/server/entities/Player.ts#L136)

##### Returns

`number`

***

### CamerRotation

#### Get Signature

```ts
get CamerRotation(): Vector3
```

Defined in: [src/server/entities/Player.ts:57](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/server/entities/Player.ts#L57)

##### Returns

[`Vector3`](../../fivem/classes/Vector3.md)

***

### Endpoint

#### Get Signature

```ts
get Endpoint(): string
```

Defined in: [src/server/entities/Player.ts:53](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/server/entities/Player.ts#L53)

##### Returns

`string`

***

### Exists

#### Get Signature

```ts
get Exists(): boolean
```

Defined in: [src/server/entities/Player.ts:22](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/server/entities/Player.ts#L22)

##### Returns

`boolean`

***

### Identifiers

#### Get Signature

```ts
get Identifiers(): string[]
```

Defined in: [src/server/entities/Player.ts:49](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/server/entities/Player.ts#L49)

##### Returns

`string`[]

***

### IsEvadingWanted

#### Get Signature

```ts
get IsEvadingWanted(): boolean
```

Defined in: [src/server/entities/Player.ts:120](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/server/entities/Player.ts#L120)

##### Returns

`boolean`

***

### IsMuted

#### Get Signature

```ts
get IsMuted(): boolean
```

Defined in: [src/server/entities/Player.ts:144](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/server/entities/Player.ts#L144)

##### Returns

`boolean`

#### Set Signature

```ts
set IsMuted(isMuted): void
```

Defined in: [src/server/entities/Player.ts:148](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/server/entities/Player.ts#L148)

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

Defined in: [src/server/entities/Player.ts:140](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/server/entities/Player.ts#L140)

##### Returns

`boolean`

***

### LastMessage

#### Get Signature

```ts
get LastMessage(): number
```

Defined in: [src/server/entities/Player.ts:64](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/server/entities/Player.ts#L64)

Returns the time since the last player UDP message

##### Returns

`number`

***

### MaxArmour

#### Get Signature

```ts
get MaxArmour(): number
```

Defined in: [src/server/entities/Player.ts:68](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/server/entities/Player.ts#L68)

##### Returns

`number`

***

### MaxHealth

#### Get Signature

```ts
get MaxHealth(): number
```

Defined in: [src/server/entities/Player.ts:72](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/server/entities/Player.ts#L72)

##### Returns

`number`

***

### MeleeModifier

#### Get Signature

```ts
get MeleeModifier(): number
```

Defined in: [src/server/entities/Player.ts:76](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/server/entities/Player.ts#L76)

##### Returns

`number`

***

### Name

#### Get Signature

```ts
get Name(): string
```

Defined in: [src/server/entities/Player.ts:83](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/server/entities/Player.ts#L83)

##### Returns

`string`

the players name

***

### Ped

#### Get Signature

```ts
get Ped(): Ped
```

Defined in: [src/server/entities/Player.ts:41](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/server/entities/Player.ts#L41)

##### Returns

[`Ped`](Ped.md)

***

### Ping

#### Get Signature

```ts
get Ping(): number
```

Defined in: [src/server/entities/Player.ts:97](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/server/entities/Player.ts#L97)

##### Returns

`number`

the players round trip ping

***

### RoutingBucket

#### Get Signature

```ts
get RoutingBucket(): number
```

Defined in: [src/server/entities/Player.ts:104](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/server/entities/Player.ts#L104)

##### Returns

`number`

the current routhing bucket the player is in, default is 0

***

### Source

#### Get Signature

```ts
get Source(): number
```

Defined in: [src/server/entities/Player.ts:26](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/server/entities/Player.ts#L26)

##### Returns

`number`

***

### Src

#### Get Signature

```ts
get Src(): string
```

Defined in: [src/server/entities/Player.ts:37](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/server/entities/Player.ts#L37)

Returns the player source casted as a string

##### Returns

`string`

***

### State

#### Get Signature

```ts
get State(): StateBagInterface
```

Defined in: [src/server/entities/Player.ts:30](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/server/entities/Player.ts#L30)

##### Returns

`StateBagInterface`

***

### Team

#### Get Signature

```ts
get Team(): number
```

Defined in: [src/server/entities/Player.ts:108](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/server/entities/Player.ts#L108)

##### Returns

`number`

***

### Tokens

#### Get Signature

```ts
get Tokens(): string[]
```

Defined in: [src/server/entities/Player.ts:45](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/server/entities/Player.ts#L45)

##### Returns

`string`[]

***

### WantedLevel

#### Get Signature

```ts
get WantedLevel(): number
```

Defined in: [src/server/entities/Player.ts:116](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/server/entities/Player.ts#L116)

##### Returns

`number`

***

### WantedPosition

#### Get Signature

```ts
get WantedPosition(): Vector3
```

Defined in: [src/server/entities/Player.ts:112](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/server/entities/Player.ts#L112)

##### Returns

[`Vector3`](../../fivem/classes/Vector3.md)

***

### WeaponDamageModifier

#### Get Signature

```ts
get WeaponDamageModifier(): number
```

Defined in: [src/server/entities/Player.ts:124](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/server/entities/Player.ts#L124)

##### Returns

`number`

***

### WeaponDefenseModifier

#### Get Signature

```ts
get WeaponDefenseModifier(): number
```

Defined in: [src/server/entities/Player.ts:128](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/server/entities/Player.ts#L128)

##### Returns

`number`

***

### WeaponDefenseModifier2

#### Get Signature

```ts
get WeaponDefenseModifier2(): number
```

Defined in: [src/server/entities/Player.ts:132](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/server/entities/Player.ts#L132)

##### Returns

`number`

## Methods

### drop()

```ts
drop(reason): void
```

Defined in: [src/server/entities/Player.ts:160](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/server/entities/Player.ts#L160)

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `reason` | `string` | `"No reason specified"` |

#### Returns

`void`

***

### emit()

```ts
emit(eventName, ...args): void
```

Defined in: [src/server/entities/Player.ts:164](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/server/entities/Player.ts#L164)

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

Defined in: [src/server/entities/Player.ts:90](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/server/entities/Player.ts#L90)

#### Returns

`string`

the players name with any color code unicode, etc removed, this can lead to there being no name at all

***

### isAceAllowed()

```ts
isAceAllowed(object): boolean
```

Defined in: [src/server/entities/Player.ts:152](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/server/entities/Player.ts#L152)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `object` | `string` |

#### Returns

`boolean`

***

### timeInPersuit()

```ts
timeInPersuit(lastPursuit): number
```

Defined in: [src/server/entities/Player.ts:156](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/server/entities/Player.ts#L156)

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `lastPursuit` | `boolean` | `false` |

#### Returns

`number`

***

### AllPlayers()

```ts
static AllPlayers(): IterableIterator<Player>
```

Defined in: [src/server/entities/Player.ts:15](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/server/entities/Player.ts#L15)

Get an interable list of players currently on the server

#### Returns

`IterableIterator`\<[`Player`](Player.md)\>

Iterable list of Players.
