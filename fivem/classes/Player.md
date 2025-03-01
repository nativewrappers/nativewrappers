[@nativewrappers/fivem](../../README.md) / [fivem](../README.md) / Player

# Class: Player

Defined in: fivem/models/Player.d.ts:4

## Constructors

### new Player()

```ts
new Player(handle?): Player
```

Defined in: fivem/models/Player.d.ts:16

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `handle`? | `number` | the player handle, or if on the server, their source. |

#### Returns

[`Player`](Player.md)

## Accessors

### Character

#### Get Signature

```ts
get Character(): Ped
```

Defined in: fivem/models/Player.d.ts:21

This is here for compatibility with older versions.

##### Returns

[`Ped`](Ped.md)

***

### DisableFiring

#### Set Signature

```ts
set DisableFiring(value): void
```

Defined in: fivem/models/Player.d.ts:39

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
get EntityPlayerIsAimingAt(): null | BaseEntity
```

Defined in: fivem/models/Player.d.ts:41

##### Returns

`null` \| [`BaseEntity`](BaseEntity.md)

***

### FakeWantedLevel

#### Get Signature

```ts
get FakeWantedLevel(): number
```

Defined in: fivem/models/Player.d.ts:43

##### Returns

`number`

***

### Ghosted

#### Set Signature

```ts
set Ghosted(isGhosted): void
```

Defined in: fivem/models/Player.d.ts:40

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
get Handle(): number
```

Defined in: fivem/models/Player.d.ts:17

##### Returns

`number`

***

### HasReserveParachute

#### Get Signature

```ts
get HasReserveParachute(): boolean
```

Defined in: fivem/models/Player.d.ts:45

##### Returns

`boolean`

***

### HealthRechargeLimit

#### Get Signature

```ts
get HealthRechargeLimit(): number
```

Defined in: fivem/models/Player.d.ts:46

##### Returns

`number`

***

### IsDead

#### Get Signature

```ts
get IsDead(): boolean
```

Defined in: fivem/models/Player.d.ts:38

##### Returns

`boolean`

***

### IsInvincible

#### Get Signature

```ts
get IsInvincible(): boolean
```

Defined in: fivem/models/Player.d.ts:47

##### Returns

`boolean`

***

### MaxArmor

#### Get Signature

```ts
get MaxArmor(): number
```

Defined in: fivem/models/Player.d.ts:48

##### Returns

`number`

***

### Name

#### Get Signature

```ts
get Name(): string
```

Defined in: fivem/models/Player.d.ts:35

##### Returns

`string`

***

### ParachuteColorTrailColor

#### Get Signature

```ts
get ParachuteColorTrailColor(): Color
```

Defined in: fivem/models/Player.d.ts:52

##### Returns

`Color`

***

### ParachuteModelOverride

#### Get Signature

```ts
get ParachuteModelOverride(): Model
```

Defined in: fivem/models/Player.d.ts:49

##### Returns

[`Model`](Model.md)

***

### ParachutePackTintIndex

#### Get Signature

```ts
get ParachutePackTintIndex(): number
```

Defined in: fivem/models/Player.d.ts:50

##### Returns

`number`

***

### ParachuteTintIndex

#### Get Signature

```ts
get ParachuteTintIndex(): number
```

Defined in: fivem/models/Player.d.ts:51

##### Returns

`number`

***

### Ped

#### Get Signature

```ts
get Ped(): Ped
```

Defined in: fivem/models/Player.d.ts:22

##### Returns

[`Ped`](Ped.md)

***

### PlayerGroup

#### Get Signature

```ts
get PlayerGroup(): number
```

Defined in: fivem/models/Player.d.ts:44

##### Returns

`number`

***

### PlayerRgbColour

#### Get Signature

```ts
get PlayerRgbColour(): Color
```

Defined in: fivem/models/Player.d.ts:55

##### Returns

`Color`

***

### PvPEnabled

#### Get Signature

```ts
get PvPEnabled(): boolean
```

Defined in: fivem/models/Player.d.ts:36

##### Returns

`boolean`

#### Set Signature

```ts
set PvPEnabled(value): void
```

Defined in: fivem/models/Player.d.ts:37

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
get ReserveParachuteModelOverride(): Model
```

Defined in: fivem/models/Player.d.ts:53

##### Returns

[`Model`](Model.md)

***

### ReserveParachuteTintIndex

#### Get Signature

```ts
get ReserveParachuteTintIndex(): number
```

Defined in: fivem/models/Player.d.ts:54

##### Returns

`number`

***

### ServerId

#### Get Signature

```ts
get ServerId(): number
```

Defined in: fivem/models/Player.d.ts:23

##### Returns

`number`

***

### SprintTimeRemaining

#### Get Signature

```ts
get SprintTimeRemaining(): number
```

Defined in: fivem/models/Player.d.ts:57

##### Returns

`number`

***

### Stamina

#### Get Signature

```ts
get Stamina(): number
```

Defined in: fivem/models/Player.d.ts:56

##### Returns

`number`

***

### State

#### Get Signature

```ts
get State(): StateBagInterface
```

Defined in: fivem/models/Player.d.ts:24

##### Returns

`StateBagInterface`

***

### StealthNoise

#### Get Signature

```ts
get StealthNoise(): number
```

Defined in: fivem/models/Player.d.ts:42

##### Returns

`number`

***

### TargetEntity

#### Get Signature

```ts
get TargetEntity(): null | BaseEntity
```

Defined in: fivem/models/Player.d.ts:61

The players melee target?

##### Returns

`null` \| [`BaseEntity`](BaseEntity.md)

***

### Team

#### Get Signature

```ts
get Team(): number
```

Defined in: fivem/models/Player.d.ts:62

##### Returns

`number`

## Methods

### AddStateBagChangeHandler()

```ts
AddStateBagChangeHandler(keyFilter, handler): number
```

Defined in: fivem/models/Player.d.ts:25

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `keyFilter` | `null` \| `string` |
| `handler` | `StateBagChangeHandler` |

#### Returns

`number`

***

### CanPedHearPlayer()

```ts
CanPedHearPlayer(ped): boolean
```

Defined in: fivem/models/Player.d.ts:63

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `ped` | [`Ped`](Ped.md) |

#### Returns

`boolean`

***

### listenForStateChange()

```ts
listenForStateChange(keyFilter, handler): number
```

Defined in: fivem/models/Player.d.ts:32

A short hand function for AddStateBagChangeHandler, this gets automatically cleaned up on entity deletion.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `keyFilter` | `null` \| `string` | the key to filter for or null |
| `handler` | `StateBagChangeHandler` | the function to handle the change |

#### Returns

`number`

a cookie to be used in RemoveStateBagChangeHandler

***

### removeAllStateListeners()

```ts
removeAllStateListeners(): void
```

Defined in: fivem/models/Player.d.ts:34

#### Returns

`void`

***

### removeStateListener()

```ts
removeStateListener(tgtCookie): void
```

Defined in: fivem/models/Player.d.ts:33

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `tgtCookie` | `number` |

#### Returns

`void`

***

### fromPedHandle()

```ts
static fromPedHandle(handle): Player
```

Defined in: fivem/models/Player.d.ts:11

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

Defined in: fivem/models/Player.d.ts:12

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `serverId` | `number` |

#### Returns

[`Player`](Player.md)
