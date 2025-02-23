[@nativewrappers/fivem](../../README.md) / [fivem](../README.md) / Player

# Class: Player

Defined in: [src/fivem/models/Player.ts:6](https://github.com/nativewrappers/nativewrappers/blob/c639ec5cd28328d6b44c7ebf73de56bb1b4bef7d/src/fivem/models/Player.ts#L6)

## Constructors

### new Player()

```ts
new Player(handle): Player
```

Defined in: [src/fivem/models/Player.ts:25](https://github.com/nativewrappers/nativewrappers/blob/c639ec5cd28328d6b44c7ebf73de56bb1b4bef7d/src/fivem/models/Player.ts#L25)

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `handle` | `number` | `-1` | the player handle, or if on the server, their source. |

#### Returns

[`Player`](Player.md)

## Accessors

### Character

#### Get Signature

```ts
get Character(): Ped
```

Defined in: [src/fivem/models/Player.ts:40](https://github.com/nativewrappers/nativewrappers/blob/c639ec5cd28328d6b44c7ebf73de56bb1b4bef7d/src/fivem/models/Player.ts#L40)

This is here for compatibility with older versions.

##### Returns

[`Ped`](Ped.md)

***

### DisableFiring

#### Set Signature

```ts
set DisableFiring(value): void
```

Defined in: [src/fivem/models/Player.ts:125](https://github.com/nativewrappers/nativewrappers/blob/c639ec5cd28328d6b44c7ebf73de56bb1b4bef7d/src/fivem/models/Player.ts#L125)

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

Defined in: [src/fivem/models/Player.ts:139](https://github.com/nativewrappers/nativewrappers/blob/c639ec5cd28328d6b44c7ebf73de56bb1b4bef7d/src/fivem/models/Player.ts#L139)

##### Returns

`null` \| [`BaseEntity`](BaseEntity.md)

***

### FakeWantedLevel

#### Get Signature

```ts
get FakeWantedLevel(): number
```

Defined in: [src/fivem/models/Player.ts:151](https://github.com/nativewrappers/nativewrappers/blob/c639ec5cd28328d6b44c7ebf73de56bb1b4bef7d/src/fivem/models/Player.ts#L151)

##### Returns

`number`

***

### Ghosted

#### Set Signature

```ts
set Ghosted(isGhosted): void
```

Defined in: [src/fivem/models/Player.ts:129](https://github.com/nativewrappers/nativewrappers/blob/c639ec5cd28328d6b44c7ebf73de56bb1b4bef7d/src/fivem/models/Player.ts#L129)

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

Defined in: [src/fivem/models/Player.ts:33](https://github.com/nativewrappers/nativewrappers/blob/c639ec5cd28328d6b44c7ebf73de56bb1b4bef7d/src/fivem/models/Player.ts#L33)

##### Returns

`number`

***

### HasReserveParachute

#### Get Signature

```ts
get HasReserveParachute(): boolean
```

Defined in: [src/fivem/models/Player.ts:159](https://github.com/nativewrappers/nativewrappers/blob/c639ec5cd28328d6b44c7ebf73de56bb1b4bef7d/src/fivem/models/Player.ts#L159)

##### Returns

`boolean`

***

### HealthRechargeLimit

#### Get Signature

```ts
get HealthRechargeLimit(): number
```

Defined in: [src/fivem/models/Player.ts:163](https://github.com/nativewrappers/nativewrappers/blob/c639ec5cd28328d6b44c7ebf73de56bb1b4bef7d/src/fivem/models/Player.ts#L163)

##### Returns

`number`

***

### IsDead

#### Get Signature

```ts
get IsDead(): boolean
```

Defined in: [src/fivem/models/Player.ts:121](https://github.com/nativewrappers/nativewrappers/blob/c639ec5cd28328d6b44c7ebf73de56bb1b4bef7d/src/fivem/models/Player.ts#L121)

##### Returns

`boolean`

***

### IsInvincible

#### Get Signature

```ts
get IsInvincible(): boolean
```

Defined in: [src/fivem/models/Player.ts:167](https://github.com/nativewrappers/nativewrappers/blob/c639ec5cd28328d6b44c7ebf73de56bb1b4bef7d/src/fivem/models/Player.ts#L167)

##### Returns

`boolean`

***

### MaxArmor

#### Get Signature

```ts
get MaxArmor(): number
```

Defined in: [src/fivem/models/Player.ts:175](https://github.com/nativewrappers/nativewrappers/blob/c639ec5cd28328d6b44c7ebf73de56bb1b4bef7d/src/fivem/models/Player.ts#L175)

##### Returns

`number`

***

### Name

#### Get Signature

```ts
get Name(): string
```

Defined in: [src/fivem/models/Player.ts:107](https://github.com/nativewrappers/nativewrappers/blob/c639ec5cd28328d6b44c7ebf73de56bb1b4bef7d/src/fivem/models/Player.ts#L107)

##### Returns

`string`

***

### ParachuteColorTrailColor

#### Get Signature

```ts
get ParachuteColorTrailColor(): Color
```

Defined in: [src/fivem/models/Player.ts:191](https://github.com/nativewrappers/nativewrappers/blob/c639ec5cd28328d6b44c7ebf73de56bb1b4bef7d/src/fivem/models/Player.ts#L191)

##### Returns

[`Color`](Color.md)

***

### ParachuteModelOverride

#### Get Signature

```ts
get ParachuteModelOverride(): Model
```

Defined in: [src/fivem/models/Player.ts:179](https://github.com/nativewrappers/nativewrappers/blob/c639ec5cd28328d6b44c7ebf73de56bb1b4bef7d/src/fivem/models/Player.ts#L179)

##### Returns

[`Model`](Model.md)

***

### ParachutePackTintIndex

#### Get Signature

```ts
get ParachutePackTintIndex(): number
```

Defined in: [src/fivem/models/Player.ts:183](https://github.com/nativewrappers/nativewrappers/blob/c639ec5cd28328d6b44c7ebf73de56bb1b4bef7d/src/fivem/models/Player.ts#L183)

##### Returns

`number`

***

### ParachuteTintIndex

#### Get Signature

```ts
get ParachuteTintIndex(): number
```

Defined in: [src/fivem/models/Player.ts:187](https://github.com/nativewrappers/nativewrappers/blob/c639ec5cd28328d6b44c7ebf73de56bb1b4bef7d/src/fivem/models/Player.ts#L187)

##### Returns

`number`

***

### Ped

#### Get Signature

```ts
get Ped(): Ped
```

Defined in: [src/fivem/models/Player.ts:44](https://github.com/nativewrappers/nativewrappers/blob/c639ec5cd28328d6b44c7ebf73de56bb1b4bef7d/src/fivem/models/Player.ts#L44)

##### Returns

[`Ped`](Ped.md)

***

### PlayerGroup

#### Get Signature

```ts
get PlayerGroup(): number
```

Defined in: [src/fivem/models/Player.ts:155](https://github.com/nativewrappers/nativewrappers/blob/c639ec5cd28328d6b44c7ebf73de56bb1b4bef7d/src/fivem/models/Player.ts#L155)

##### Returns

`number`

***

### PlayerRgbColour

#### Get Signature

```ts
get PlayerRgbColour(): Color
```

Defined in: [src/fivem/models/Player.ts:203](https://github.com/nativewrappers/nativewrappers/blob/c639ec5cd28328d6b44c7ebf73de56bb1b4bef7d/src/fivem/models/Player.ts#L203)

##### Returns

[`Color`](Color.md)

***

### PvPEnabled

#### Get Signature

```ts
get PvPEnabled(): boolean
```

Defined in: [src/fivem/models/Player.ts:111](https://github.com/nativewrappers/nativewrappers/blob/c639ec5cd28328d6b44c7ebf73de56bb1b4bef7d/src/fivem/models/Player.ts#L111)

##### Returns

`boolean`

#### Set Signature

```ts
set PvPEnabled(value): void
```

Defined in: [src/fivem/models/Player.ts:115](https://github.com/nativewrappers/nativewrappers/blob/c639ec5cd28328d6b44c7ebf73de56bb1b4bef7d/src/fivem/models/Player.ts#L115)

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

Defined in: [src/fivem/models/Player.ts:195](https://github.com/nativewrappers/nativewrappers/blob/c639ec5cd28328d6b44c7ebf73de56bb1b4bef7d/src/fivem/models/Player.ts#L195)

##### Returns

[`Model`](Model.md)

***

### ReserveParachuteTintIndex

#### Get Signature

```ts
get ReserveParachuteTintIndex(): number
```

Defined in: [src/fivem/models/Player.ts:199](https://github.com/nativewrappers/nativewrappers/blob/c639ec5cd28328d6b44c7ebf73de56bb1b4bef7d/src/fivem/models/Player.ts#L199)

##### Returns

`number`

***

### ServerId

#### Get Signature

```ts
get ServerId(): number
```

Defined in: [src/fivem/models/Player.ts:54](https://github.com/nativewrappers/nativewrappers/blob/c639ec5cd28328d6b44c7ebf73de56bb1b4bef7d/src/fivem/models/Player.ts#L54)

##### Returns

`number`

***

### SprintTimeRemaining

#### Get Signature

```ts
get SprintTimeRemaining(): number
```

Defined in: [src/fivem/models/Player.ts:211](https://github.com/nativewrappers/nativewrappers/blob/c639ec5cd28328d6b44c7ebf73de56bb1b4bef7d/src/fivem/models/Player.ts#L211)

##### Returns

`number`

***

### Stamina

#### Get Signature

```ts
get Stamina(): number
```

Defined in: [src/fivem/models/Player.ts:207](https://github.com/nativewrappers/nativewrappers/blob/c639ec5cd28328d6b44c7ebf73de56bb1b4bef7d/src/fivem/models/Player.ts#L207)

##### Returns

`number`

***

### State

#### Get Signature

```ts
get State(): StateBagInterface
```

Defined in: [src/fivem/models/Player.ts:61](https://github.com/nativewrappers/nativewrappers/blob/c639ec5cd28328d6b44c7ebf73de56bb1b4bef7d/src/fivem/models/Player.ts#L61)

##### Returns

`StateBagInterface`

***

### StealthNoise

#### Get Signature

```ts
get StealthNoise(): number
```

Defined in: [src/fivem/models/Player.ts:147](https://github.com/nativewrappers/nativewrappers/blob/c639ec5cd28328d6b44c7ebf73de56bb1b4bef7d/src/fivem/models/Player.ts#L147)

##### Returns

`number`

***

### TargetEntity

#### Get Signature

```ts
get TargetEntity(): null | BaseEntity
```

Defined in: [src/fivem/models/Player.ts:218](https://github.com/nativewrappers/nativewrappers/blob/c639ec5cd28328d6b44c7ebf73de56bb1b4bef7d/src/fivem/models/Player.ts#L218)

The players melee target?

##### Returns

`null` \| [`BaseEntity`](BaseEntity.md)

***

### Team

#### Get Signature

```ts
get Team(): number
```

Defined in: [src/fivem/models/Player.ts:227](https://github.com/nativewrappers/nativewrappers/blob/c639ec5cd28328d6b44c7ebf73de56bb1b4bef7d/src/fivem/models/Player.ts#L227)

##### Returns

`number`

## Methods

### AddStateBagChangeHandler()

```ts
AddStateBagChangeHandler(keyFilter, handler): number
```

Defined in: [src/fivem/models/Player.ts:65](https://github.com/nativewrappers/nativewrappers/blob/c639ec5cd28328d6b44c7ebf73de56bb1b4bef7d/src/fivem/models/Player.ts#L65)

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

Defined in: [src/fivem/models/Player.ts:233](https://github.com/nativewrappers/nativewrappers/blob/c639ec5cd28328d6b44c7ebf73de56bb1b4bef7d/src/fivem/models/Player.ts#L233)

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

Defined in: [src/fivem/models/Player.ts:86](https://github.com/nativewrappers/nativewrappers/blob/c639ec5cd28328d6b44c7ebf73de56bb1b4bef7d/src/fivem/models/Player.ts#L86)

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

Defined in: [src/fivem/models/Player.ts:101](https://github.com/nativewrappers/nativewrappers/blob/c639ec5cd28328d6b44c7ebf73de56bb1b4bef7d/src/fivem/models/Player.ts#L101)

#### Returns

`void`

***

### removeStateListener()

```ts
removeStateListener(tgtCookie): void
```

Defined in: [src/fivem/models/Player.ts:93](https://github.com/nativewrappers/nativewrappers/blob/c639ec5cd28328d6b44c7ebf73de56bb1b4bef7d/src/fivem/models/Player.ts#L93)

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

Defined in: [src/fivem/models/Player.ts:14](https://github.com/nativewrappers/nativewrappers/blob/c639ec5cd28328d6b44c7ebf73de56bb1b4bef7d/src/fivem/models/Player.ts#L14)

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

Defined in: [src/fivem/models/Player.ts:18](https://github.com/nativewrappers/nativewrappers/blob/c639ec5cd28328d6b44c7ebf73de56bb1b4bef7d/src/fivem/models/Player.ts#L18)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `serverId` | `number` |

#### Returns

[`Player`](Player.md)
