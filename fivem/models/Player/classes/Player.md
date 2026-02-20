[@nativewrappers/fivem](../../../../README.md) / [fivem/models/Player](../README.md) / Player

# Class: Player

Defined in: lib/fivem/models/Player.d.ts:6

## Constructors

### Constructor

```ts
new Player(handle?): Player;
```

Defined in: lib/fivem/models/Player.d.ts:39

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `handle?` | `number` | the player handle, or if on the server, their source. |

#### Returns

`Player`

## Accessors

### Character

#### Get Signature

```ts
get Character(): Ped;
```

Defined in: lib/fivem/models/Player.d.ts:44

This is here for compatibility with older versions.

##### Returns

[`Ped`](../../Ped/classes/Ped.md)

***

### DisableFiring

#### Set Signature

```ts
set DisableFiring(value): void;
```

Defined in: lib/fivem/models/Player.d.ts:63

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

##### Returns

`void`

***

### EntityPlayerIsAimingAt

#### Get Signature

```ts
get EntityPlayerIsAimingAt(): Entity;
```

Defined in: lib/fivem/models/Player.d.ts:64

##### Returns

[`Entity`](../../Entity/type-aliases/Entity.md)

***

### FakeWantedLevel

#### Get Signature

```ts
get FakeWantedLevel(): number;
```

Defined in: lib/fivem/models/Player.d.ts:66

##### Returns

`number`

***

### Ghosted

#### Set Signature

```ts
set Ghosted(isGhosted): void;
```

Defined in: lib/fivem/models/Player.d.ts:61

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `isGhosted` | `boolean` |

##### Returns

`void`

***

### Handle

#### Get Signature

```ts
get Handle(): number;
```

Defined in: lib/fivem/models/Player.d.ts:40

##### Returns

`number`

***

### HasReserveParachute

#### Get Signature

```ts
get HasReserveParachute(): boolean;
```

Defined in: lib/fivem/models/Player.d.ts:68

##### Returns

`boolean`

***

### HealthRechargeLimit

#### Get Signature

```ts
get HealthRechargeLimit(): number;
```

Defined in: lib/fivem/models/Player.d.ts:69

##### Returns

`number`

***

### IsDead

#### Get Signature

```ts
get IsDead(): boolean;
```

Defined in: lib/fivem/models/Player.d.ts:62

##### Returns

`boolean`

***

### IsInvincible

#### Get Signature

```ts
get IsInvincible(): boolean;
```

Defined in: lib/fivem/models/Player.d.ts:70

##### Returns

`boolean`

***

### MaxArmor

#### Get Signature

```ts
get MaxArmor(): number;
```

Defined in: lib/fivem/models/Player.d.ts:71

##### Returns

`number`

***

### Name

#### Get Signature

```ts
get Name(): string;
```

Defined in: lib/fivem/models/Player.d.ts:58

##### Returns

`string`

***

### ParachuteColorTrailColor

#### Get Signature

```ts
get ParachuteColorTrailColor(): Color;
```

Defined in: lib/fivem/models/Player.d.ts:75

##### Returns

`Color`

***

### ParachuteModelOverride

#### Get Signature

```ts
get ParachuteModelOverride(): Model;
```

Defined in: lib/fivem/models/Player.d.ts:72

##### Returns

[`Model`](../../../Model/classes/Model.md)

***

### ParachutePackTintIndex

#### Get Signature

```ts
get ParachutePackTintIndex(): number;
```

Defined in: lib/fivem/models/Player.d.ts:73

##### Returns

`number`

***

### ParachuteTintIndex

#### Get Signature

```ts
get ParachuteTintIndex(): number;
```

Defined in: lib/fivem/models/Player.d.ts:74

##### Returns

`number`

***

### Ped

#### Get Signature

```ts
get Ped(): Ped;
```

Defined in: lib/fivem/models/Player.d.ts:45

##### Returns

[`Ped`](../../Ped/classes/Ped.md)

***

### PlayerGroup

#### Get Signature

```ts
get PlayerGroup(): number;
```

Defined in: lib/fivem/models/Player.d.ts:67

##### Returns

`number`

***

### PlayerRgbColour

#### Get Signature

```ts
get PlayerRgbColour(): Color;
```

Defined in: lib/fivem/models/Player.d.ts:78

##### Returns

`Color`

***

### PvPEnabled

#### Get Signature

```ts
get PvPEnabled(): boolean;
```

Defined in: lib/fivem/models/Player.d.ts:59

##### Returns

`boolean`

#### Set Signature

```ts
set PvPEnabled(value): void;
```

Defined in: lib/fivem/models/Player.d.ts:60

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

##### Returns

`void`

***

### ReserveParachuteModelOverride

#### Get Signature

```ts
get ReserveParachuteModelOverride(): Model;
```

Defined in: lib/fivem/models/Player.d.ts:76

##### Returns

[`Model`](../../../Model/classes/Model.md)

***

### ReserveParachuteTintIndex

#### Get Signature

```ts
get ReserveParachuteTintIndex(): number;
```

Defined in: lib/fivem/models/Player.d.ts:77

##### Returns

`number`

***

### ServerId

#### Get Signature

```ts
get ServerId(): number;
```

Defined in: lib/fivem/models/Player.d.ts:46

##### Returns

`number`

***

### SprintTimeRemaining

#### Get Signature

```ts
get SprintTimeRemaining(): number;
```

Defined in: lib/fivem/models/Player.d.ts:80

##### Returns

`number`

***

### Stamina

#### Get Signature

```ts
get Stamina(): number;
```

Defined in: lib/fivem/models/Player.d.ts:79

##### Returns

`number`

***

### State

#### Get Signature

```ts
get State(): StateBagInterface;
```

Defined in: lib/fivem/models/Player.d.ts:47

##### Returns

[`StateBagInterface`](../../../../redm/definitions/Citizen/interfaces/StateBagInterface.md)

***

### StealthNoise

#### Get Signature

```ts
get StealthNoise(): number;
```

Defined in: lib/fivem/models/Player.d.ts:65

##### Returns

`number`

***

### TargetEntity

#### Get Signature

```ts
get TargetEntity(): Entity;
```

Defined in: lib/fivem/models/Player.d.ts:84

The players melee target?

##### Returns

[`Entity`](../../Entity/type-aliases/Entity.md)

***

### Team

#### Get Signature

```ts
get Team(): number;
```

Defined in: lib/fivem/models/Player.d.ts:85

##### Returns

`number`

## Methods

### AddStateBagChangeHandler()

```ts
AddStateBagChangeHandler(keyFilter, handler): number;
```

Defined in: lib/fivem/models/Player.d.ts:48

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `keyFilter` | `null` \| `string` |
| `handler` | [`StateBagChangeHandler`](../../../cfx/StateBagChangeHandler/type-aliases/StateBagChangeHandler.md) |

#### Returns

`number`

***

### CanPedHearPlayer()

```ts
CanPedHearPlayer(ped): boolean;
```

Defined in: lib/fivem/models/Player.d.ts:86

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `ped` | [`Ped`](../../Ped/classes/Ped.md) |

#### Returns

`boolean`

***

### listenForStateChange()

```ts
listenForStateChange(keyFilter, handler): number;
```

Defined in: lib/fivem/models/Player.d.ts:55

A short hand function for AddStateBagChangeHandler, this gets automatically cleaned up on entity deletion.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `keyFilter` | `null` \| `string` | the key to filter for or null |
| `handler` | [`StateBagChangeHandler`](../../../cfx/StateBagChangeHandler/type-aliases/StateBagChangeHandler.md) | the function to handle the change |

#### Returns

`number`

a cookie to be used in RemoveStateBagChangeHandler

***

### removeAllStateListeners()

```ts
removeAllStateListeners(): void;
```

Defined in: lib/fivem/models/Player.d.ts:57

#### Returns

`void`

***

### removeStateListener()

```ts
removeStateListener(tgtCookie): void;
```

Defined in: lib/fivem/models/Player.d.ts:56

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `tgtCookie` | `number` |

#### Returns

`void`

***

### AllPlayers()

```ts
static AllPlayers(excludeLocalPlayer?): IterableIterator<Player>;
```

Defined in: lib/fivem/models/Player.d.ts:13

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `excludeLocalPlayer?` | `boolean` |

#### Returns

`IterableIterator`\<`Player`\>

***

### fromPedHandle()

```ts
static fromPedHandle(handle): null | Player;
```

Defined in: lib/fivem/models/Player.d.ts:18

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `handle` | `number` | the handoe of the ped to get the player of |

#### Returns

`null` \| `Player`

the player, or null if the player doesn't exist

***

### fromServerId()

```ts
static fromServerId(serverId): null | Player;
```

Defined in: lib/fivem/models/Player.d.ts:23

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `serverId` | `number` | the server id to get the player of |

#### Returns

`null` \| `Player`

the player, or null if the player doesn't exist

***

### getClosestPlayerPed()

```ts
static getClosestPlayerPed(minimumDistance?, fromPlayer?): null | Ped;
```

Defined in: lib/fivem/models/Player.d.ts:35

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `minimumDistance?` | `number` | the minimum distance this should check |
| `fromPlayer?` | `Player` | the player to get the distance from |

#### Returns

`null` \| [`Ped`](../../Ped/classes/Ped.md)

the closest player from fromPlayer and the distance the player was

***

### getClosestPlayerPedWithDistance()

```ts
static getClosestPlayerPedWithDistance(minimumDistance?, fromPlayer?): [null | Ped, number];
```

Defined in: lib/fivem/models/Player.d.ts:29

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `minimumDistance?` | `number` | the minimum distance this should check |
| `fromPlayer?` | `Player` | the player to get the distance from |

#### Returns

\[`null` \| [`Ped`](../../Ped/classes/Ped.md), `number`\]

the closest player from fromPlayer and the distance the player was
