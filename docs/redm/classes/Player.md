[@nativewrappers/fivem](../../README.md) / [redm](../README.md) / Player

# Class: Player

## Constructors

### new Player()

```ts
new Player(handle): Player
```

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `handle` | `number` | the player handle |

#### Returns

[`Player`](Player.md)

#### Defined in

[src/redm/entities/Player.ts:34](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/redm/entities/Player.ts#L34)

## Accessors

### Handle

```ts
get Handle(): number
```

#### Returns

`number`

#### Defined in

[src/redm/entities/Player.ts:38](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/redm/entities/Player.ts#L38)

## Methods

### addDeadeyeUpgrade()

```ts
addDeadeyeUpgrade(amount): void
```

Doesn't seem to work :*

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `amount` | `number` |  |

#### Returns

`void`

#### Defined in

[src/redm/entities/Player.ts:58](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/redm/entities/Player.ts#L58)

***

### addHealthUpgrade()

```ts
addHealthUpgrade(amount): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `amount` | `number` |

#### Returns

`void`

#### Defined in

[src/redm/entities/Player.ts:50](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/redm/entities/Player.ts#L50)

***

### addStaminaUpgrade()

```ts
addStaminaUpgrade(amount): void
```

Adds the amount of stamina player has on the hud

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `amount` | `number` | the amount of upgrade to give 6 is half the bar while 12 is the full bar |

#### Returns

`void`

#### Defined in

[src/redm/entities/Player.ts:46](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/redm/entities/Player.ts#L46)

***

### fromPedHandle()

```ts
static fromPedHandle(handle): Player
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `handle` | `number` |

#### Returns

[`Player`](Player.md)

#### Defined in

[src/redm/entities/Player.ts:23](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/redm/entities/Player.ts#L23)

***

### fromServerId()

```ts
static fromServerId(serverId): Player
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `serverId` | `number` |

#### Returns

[`Player`](Player.md)

#### Defined in

[src/redm/entities/Player.ts:27](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/redm/entities/Player.ts#L27)
