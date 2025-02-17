[@nativewrappers/fivem](../../README.md) / [redm](../README.md) / Player

# Class: Player

Defined in: [src/redm/entities/Player.ts:23](https://github.com/nativewrappers/nativewrappers/blob/c6ab47d1014f341bb58fccc9d519ceb48157a741/src/redm/entities/Player.ts#L23)

## Constructors

### new Player()

```ts
new Player(handle): Player
```

Defined in: [src/redm/entities/Player.ts:47](https://github.com/nativewrappers/nativewrappers/blob/c6ab47d1014f341bb58fccc9d519ceb48157a741/src/redm/entities/Player.ts#L47)

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

Defined in: [src/redm/entities/Player.ts:51](https://github.com/nativewrappers/nativewrappers/blob/c6ab47d1014f341bb58fccc9d519ceb48157a741/src/redm/entities/Player.ts#L51)

##### Returns

`number`

## Methods

### addDeadeyeUpgrade()

```ts
addDeadeyeUpgrade(amount): void
```

Defined in: [src/redm/entities/Player.ts:67](https://github.com/nativewrappers/nativewrappers/blob/c6ab47d1014f341bb58fccc9d519ceb48157a741/src/redm/entities/Player.ts#L67)

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

Defined in: [src/redm/entities/Player.ts:63](https://github.com/nativewrappers/nativewrappers/blob/c6ab47d1014f341bb58fccc9d519ceb48157a741/src/redm/entities/Player.ts#L63)

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

Defined in: [src/redm/entities/Player.ts:59](https://github.com/nativewrappers/nativewrappers/blob/c6ab47d1014f341bb58fccc9d519ceb48157a741/src/redm/entities/Player.ts#L59)

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

Defined in: [src/redm/entities/Player.ts:26](https://github.com/nativewrappers/nativewrappers/blob/c6ab47d1014f341bb58fccc9d519ceb48157a741/src/redm/entities/Player.ts#L26)

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

Defined in: [src/redm/entities/Player.ts:34](https://github.com/nativewrappers/nativewrappers/blob/c6ab47d1014f341bb58fccc9d519ceb48157a741/src/redm/entities/Player.ts#L34)

Gets the player from the specified {@param serverId}

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `serverId` | `number` |

#### Returns

`null` \| [`Player`](Player.md)

the player object, or null if the player didn't exist
