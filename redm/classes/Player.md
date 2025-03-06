[@nativewrappers/fivem](../../README.md) / [redm](../README.md) / Player

# Class: Player

Defined in: redm/entities/Player.d.ts:1

## Constructors

### new Player()

```ts
new Player(handle): Player
```

Defined in: redm/entities/Player.d.ts:12

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `handle` | `number` | the player handle |

#### Returns

[`Player`](Player.md)

## Accessors

### Handle

#### Get Signature

```ts
get Handle(): number
```

Defined in: redm/entities/Player.d.ts:13

##### Returns

`number`

## Methods

### addDeadeyeUpgrade()

```ts
addDeadeyeUpgrade(amount): void
```

Defined in: redm/entities/Player.d.ts:20

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `amount` | `number` |

#### Returns

`void`

***

### addHealthUpgrade()

```ts
addHealthUpgrade(amount): void
```

Defined in: redm/entities/Player.d.ts:19

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `amount` | `number` |

#### Returns

`void`

***

### addStaminaUpgrade()

```ts
addStaminaUpgrade(amount): void
```

Defined in: redm/entities/Player.d.ts:18

Adds the amount of stamina player has on the hud

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `amount` | `number` | the amount of upgrade to give 6 is half the bar while 12 is the full bar |

#### Returns

`void`

***

### fromPedHandle()

```ts
static fromPedHandle(handle): Player
```

Defined in: redm/entities/Player.d.ts:3

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `handle` | `number` |

#### Returns

[`Player`](Player.md)

***

### fromServerId()

```ts
static fromServerId(serverId): null | Player
```

Defined in: redm/entities/Player.d.ts:8

Gets the player from the specified {@param serverId}

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `serverId` | `number` |

#### Returns

`null` \| [`Player`](Player.md)

the player object, or null if the player didn't exist
