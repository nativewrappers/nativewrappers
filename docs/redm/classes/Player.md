[@nativewrappers/fivem](../../README.md) / [redm](../README.md) / Player

# Class: Player

Defined in: [src/redm/entities/Player.ts:20](https://github.com/nativewrappers/fivem/blob/712f0bf92fff25cfcad1f759429c48668c195b4a/src/redm/entities/Player.ts#L20)

## Constructors

### new Player()

```ts
new Player(handle): Player
```

Defined in: [src/redm/entities/Player.ts:34](https://github.com/nativewrappers/fivem/blob/712f0bf92fff25cfcad1f759429c48668c195b4a/src/redm/entities/Player.ts#L34)

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

Defined in: [src/redm/entities/Player.ts:38](https://github.com/nativewrappers/fivem/blob/712f0bf92fff25cfcad1f759429c48668c195b4a/src/redm/entities/Player.ts#L38)

##### Returns

`number`

## Methods

### addDeadeyeUpgrade()

```ts
addDeadeyeUpgrade(amount): void
```

Defined in: [src/redm/entities/Player.ts:58](https://github.com/nativewrappers/fivem/blob/712f0bf92fff25cfcad1f759429c48668c195b4a/src/redm/entities/Player.ts#L58)

Doesn't seem to work :*

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `amount` | `number` |  |

#### Returns

`void`

***

### addHealthUpgrade()

```ts
addHealthUpgrade(amount): void
```

Defined in: [src/redm/entities/Player.ts:50](https://github.com/nativewrappers/fivem/blob/712f0bf92fff25cfcad1f759429c48668c195b4a/src/redm/entities/Player.ts#L50)

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

Defined in: [src/redm/entities/Player.ts:46](https://github.com/nativewrappers/fivem/blob/712f0bf92fff25cfcad1f759429c48668c195b4a/src/redm/entities/Player.ts#L46)

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

Defined in: [src/redm/entities/Player.ts:23](https://github.com/nativewrappers/fivem/blob/712f0bf92fff25cfcad1f759429c48668c195b4a/src/redm/entities/Player.ts#L23)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `handle` | `number` |

#### Returns

[`Player`](Player.md)

***

### fromServerId()

```ts
static fromServerId(serverId): Player
```

Defined in: [src/redm/entities/Player.ts:27](https://github.com/nativewrappers/fivem/blob/712f0bf92fff25cfcad1f759429c48668c195b4a/src/redm/entities/Player.ts#L27)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `serverId` | `number` |

#### Returns

[`Player`](Player.md)
