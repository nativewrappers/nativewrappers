[@nativewrappers/fivem](../../README.md) / [fivem](../README.md) / Player

# Class: Player

## Constructors

### new Player()

```ts
new Player(handle): Player
```

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `handle` | `number` | `-1` | the player handle, or if on the server, their source. |

#### Returns

[`Player`](Player.md)

#### Defined in

[src/fivem/models/Player.ts:25](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Player.ts#L25)

## Accessors

### Character

```ts
get Character(): Ped
```

This is here for compatibility with older versions.

#### Returns

[`Ped`](Ped.md)

#### Defined in

[src/fivem/models/Player.ts:40](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Player.ts#L40)

***

### DisableFiring

```ts
set DisableFiring(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

#### Defined in

[src/fivem/models/Player.ts:125](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Player.ts#L125)

***

### EntityPlayerIsAimingAt

```ts
get EntityPlayerIsAimingAt(): null | BaseEntity
```

#### Returns

`null` \| [`BaseEntity`](BaseEntity.md)

#### Defined in

[src/fivem/models/Player.ts:139](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Player.ts#L139)

***

### FakeWantedLevel

```ts
get FakeWantedLevel(): number
```

#### Returns

`number`

#### Defined in

[src/fivem/models/Player.ts:151](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Player.ts#L151)

***

### Ghosted

```ts
set Ghosted(isGhosted): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `isGhosted` | `boolean` |

#### Defined in

[src/fivem/models/Player.ts:129](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Player.ts#L129)

***

### Handle

```ts
get Handle(): number
```

#### Returns

`number`

#### Defined in

[src/fivem/models/Player.ts:33](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Player.ts#L33)

***

### HasReserveParachute

```ts
get HasReserveParachute(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/fivem/models/Player.ts:159](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Player.ts#L159)

***

### HealthRechargeLimit

```ts
get HealthRechargeLimit(): number
```

#### Returns

`number`

#### Defined in

[src/fivem/models/Player.ts:163](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Player.ts#L163)

***

### IsDead

```ts
get IsDead(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/fivem/models/Player.ts:121](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Player.ts#L121)

***

### IsInvincible

```ts
get IsInvincible(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/fivem/models/Player.ts:167](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Player.ts#L167)

***

### MaxArmor

```ts
get MaxArmor(): number
```

#### Returns

`number`

#### Defined in

[src/fivem/models/Player.ts:175](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Player.ts#L175)

***

### Name

```ts
get Name(): string
```

#### Returns

`string`

#### Defined in

[src/fivem/models/Player.ts:107](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Player.ts#L107)

***

### ParachuteColorTrailColor

```ts
get ParachuteColorTrailColor(): Color
```

#### Returns

[`Color`](Color.md)

#### Defined in

[src/fivem/models/Player.ts:191](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Player.ts#L191)

***

### ParachuteModelOverride

```ts
get ParachuteModelOverride(): Model
```

#### Returns

[`Model`](Model.md)

#### Defined in

[src/fivem/models/Player.ts:179](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Player.ts#L179)

***

### ParachutePackTintIndex

```ts
get ParachutePackTintIndex(): number
```

#### Returns

`number`

#### Defined in

[src/fivem/models/Player.ts:183](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Player.ts#L183)

***

### ParachuteTintIndex

```ts
get ParachuteTintIndex(): number
```

#### Returns

`number`

#### Defined in

[src/fivem/models/Player.ts:187](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Player.ts#L187)

***

### Ped

```ts
get Ped(): Ped
```

#### Returns

[`Ped`](Ped.md)

#### Defined in

[src/fivem/models/Player.ts:44](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Player.ts#L44)

***

### PlayerGroup

```ts
get PlayerGroup(): number
```

#### Returns

`number`

#### Defined in

[src/fivem/models/Player.ts:155](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Player.ts#L155)

***

### PlayerRgbColour

```ts
get PlayerRgbColour(): Color
```

#### Returns

[`Color`](Color.md)

#### Defined in

[src/fivem/models/Player.ts:203](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Player.ts#L203)

***

### PvPEnabled

```ts
get PvPEnabled(): boolean
```

```ts
set PvPEnabled(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

#### Returns

`boolean`

#### Defined in

[src/fivem/models/Player.ts:111](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Player.ts#L111)

***

### ReserveParachuteModelOverride

```ts
get ReserveParachuteModelOverride(): Model
```

#### Returns

[`Model`](Model.md)

#### Defined in

[src/fivem/models/Player.ts:195](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Player.ts#L195)

***

### ReserveParachuteTintIndex

```ts
get ReserveParachuteTintIndex(): number
```

#### Returns

`number`

#### Defined in

[src/fivem/models/Player.ts:199](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Player.ts#L199)

***

### ServerId

```ts
get ServerId(): number
```

#### Returns

`number`

#### Defined in

[src/fivem/models/Player.ts:54](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Player.ts#L54)

***

### SprintTimeRemaining

```ts
get SprintTimeRemaining(): number
```

#### Returns

`number`

#### Defined in

[src/fivem/models/Player.ts:211](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Player.ts#L211)

***

### Stamina

```ts
get Stamina(): number
```

#### Returns

`number`

#### Defined in

[src/fivem/models/Player.ts:207](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Player.ts#L207)

***

### State

```ts
get State(): StateBagInterface
```

#### Returns

`StateBagInterface`

#### Defined in

[src/fivem/models/Player.ts:61](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Player.ts#L61)

***

### StealthNoise

```ts
get StealthNoise(): number
```

#### Returns

`number`

#### Defined in

[src/fivem/models/Player.ts:147](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Player.ts#L147)

***

### TargetEntity

```ts
get TargetEntity(): null | BaseEntity
```

The players melee target?

#### Returns

`null` \| [`BaseEntity`](BaseEntity.md)

#### Defined in

[src/fivem/models/Player.ts:218](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Player.ts#L218)

***

### Team

```ts
get Team(): number
```

#### Returns

`number`

#### Defined in

[src/fivem/models/Player.ts:227](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Player.ts#L227)

## Methods

### AddStateBagChangeHandler()

```ts
AddStateBagChangeHandler(keyFilter, handler): number
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `keyFilter` | `null` \| `string` |
| `handler` | `StateBagChangeHandler` |

#### Returns

`number`

#### Defined in

[src/fivem/models/Player.ts:65](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Player.ts#L65)

***

### CanPedHearPlayer()

```ts
CanPedHearPlayer(ped): boolean
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `ped` | [`Ped`](Ped.md) |

#### Returns

`boolean`

#### Defined in

[src/fivem/models/Player.ts:233](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Player.ts#L233)

***

### listenForStateChange()

```ts
listenForStateChange(keyFilter, handler): number
```

A short hand function for AddStateBagChangeHandler, this gets automatically cleaned up on entity deletion.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `keyFilter` | `null` \| `string` | the key to filter for or null |
| `handler` | `StateBagChangeHandler` | the function to handle the change |

#### Returns

`number`

a cookie to be used in RemoveStateBagChangeHandler

#### Defined in

[src/fivem/models/Player.ts:86](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Player.ts#L86)

***

### removeAllStateListeners()

```ts
removeAllStateListeners(): void
```

#### Returns

`void`

#### Defined in

[src/fivem/models/Player.ts:101](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Player.ts#L101)

***

### removeStateListener()

```ts
removeStateListener(tgtCookie): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `tgtCookie` | `number` |

#### Returns

`void`

#### Defined in

[src/fivem/models/Player.ts:93](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Player.ts#L93)

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

[src/fivem/models/Player.ts:14](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Player.ts#L14)

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

[src/fivem/models/Player.ts:18](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/models/Player.ts#L18)
