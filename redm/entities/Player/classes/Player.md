[@nativewrappers/fivem](../../../../README.md) / [redm/entities/Player](../README.md) / Player

# Class: Player

Defined in: lib/redm/entities/Player.d.ts:2

## Constructors

### Constructor

```ts
new Player(handle): Player;
```

Defined in: lib/redm/entities/Player.d.ts:26

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `handle` | `number` | the player handle |

#### Returns

`Player`

## Accessors

### Handle

#### Get Signature

```ts
get Handle(): number;
```

Defined in: lib/redm/entities/Player.d.ts:27

##### Returns

`number`

***

### Ped

#### Get Signature

```ts
get Ped(): Ped;
```

Defined in: lib/redm/entities/Player.d.ts:28

##### Returns

[`Ped`](../../Ped/classes/Ped.md)

***

### ServerId

#### Get Signature

```ts
get ServerId(): number;
```

Defined in: lib/redm/entities/Player.d.ts:29

##### Returns

`number`

## Methods

### addDeadeyeUpgrade()

```ts
addDeadeyeUpgrade(amount): void;
```

Defined in: lib/redm/entities/Player.d.ts:36

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `amount` | `number` |

#### Returns

`void`

***

### addHealthUpgrade()

```ts
addHealthUpgrade(amount): void;
```

Defined in: lib/redm/entities/Player.d.ts:35

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `amount` | `number` |

#### Returns

`void`

***

### addStaminaUpgrade()

```ts
addStaminaUpgrade(amount): void;
```

Defined in: lib/redm/entities/Player.d.ts:34

Adds the amount of stamina player has on the hud

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `amount` | `number` | the amount of upgrade to give 6 is half the bar while 12 is the full bar |

#### Returns

`void`

***

### setOwnsMount()

```ts
setOwnsMount(mount): void;
```

Defined in: lib/redm/entities/Player.d.ts:37

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `mount` | [`Ped`](../../Ped/classes/Ped.md) |

#### Returns

`void`

***

### AllPlayers()

```ts
static AllPlayers(excludeLocalPlayer?): IterableIterator<Player>;
```

Defined in: lib/redm/entities/Player.d.ts:4

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `excludeLocalPlayer?` | `boolean` |

#### Returns

`IterableIterator`\<`Player`\>

***

### fromPedHandle()

```ts
static fromPedHandle(handle): Player;
```

Defined in: lib/redm/entities/Player.d.ts:5

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `handle` | `number` |

#### Returns

`Player`

***

### fromServerId()

```ts
static fromServerId(serverId): null | Player;
```

Defined in: lib/redm/entities/Player.d.ts:10

Gets the player from the specified serverId

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `serverId` | `number` |

#### Returns

`null` \| `Player`

the player object, or null if the player didn't exist

***

### getClosestPlayer()

```ts
static getClosestPlayer(minimumDistance?, fromPlayer?): null | Player;
```

Defined in: lib/redm/entities/Player.d.ts:22

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `minimumDistance?` | `number` | the minimum distance this should check |
| `fromPlayer?` | `Player` | the player to get the distance from |

#### Returns

`null` \| `Player`

the closest player from fromPlayer and the distance the player was

***

### getClosestPlayerWithDistance()

```ts
static getClosestPlayerWithDistance(minimumDistance?, fromPlayer?): [null | Player, number];
```

Defined in: lib/redm/entities/Player.d.ts:16

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `minimumDistance?` | `number` | the minimum distance this should check |
| `fromPlayer?` | `Player` | the player to get the distance from |

#### Returns

\[`null` \| `Player`, `number`\]

the closest player from fromPlayer and the distance the player was
