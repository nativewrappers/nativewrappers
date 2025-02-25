[@nativewrappers/fivem](../../README.md) / [fivem](../README.md) / Game

# Class: `abstract` Game

Defined in: [src/fivem/Game.ts:6](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/Game.ts#L6)

## Constructors

### new Game()

```ts
new Game(): Game
```

#### Returns

[`Game`](Game.md)

## Properties

| Property | Modifier | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="cachedplayer"></a> `cachedPlayer` | `static` | [`Player`](Player.md) | `undefined` | [src/fivem/Game.ts:583](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/Game.ts#L583) |
| <a id="hashcache"></a> `hashCache` | `static` | `Map`\<`string`, `number`\> | `undefined` | [src/fivem/Game.ts:9](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/Game.ts#L9) |
| <a id="usehashcache"></a> `useHashCache` | `static` | `boolean` | `true` | [src/fivem/Game.ts:7](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/Game.ts#L7) |

## Accessors

### ExtendWorldBoundry

#### Set Signature

```ts
set ExtendWorldBoundry(vec): void
```

Defined in: [src/fivem/Game.ts:533](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/Game.ts#L533)

Sets the max boundry the local player can go to before they get killed

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `vec` | [`Vector3`](Vector3.md) | the max bounds for the local player |

##### Returns

`void`

***

### LastVehicle

#### Get Signature

```ts
get LastVehicle(): null | Vehicle
```

Defined in: [src/fivem/Game.ts:537](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/Game.ts#L537)

##### Returns

`null` \| [`Vehicle`](Vehicle.md)

***

### CurrentInputMode

#### Get Signature

```ts
get static CurrentInputMode(): InputMode
```

Defined in: [src/fivem/Game.ts:264](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/Game.ts#L264)

Get current input mode.

##### Returns

[`InputMode`](../enumerations/InputMode.md)

InputMode: Mouse & Keyboard or GamePad.

***

### FPS

#### Get Signature

```ts
get static FPS(): number
```

Defined in: [src/fivem/Game.ts:85](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/Game.ts#L85)

Gets the current frame rate per second

##### Returns

`number`

***

### FrameCount

#### Get Signature

```ts
get static FrameCount(): number
```

Defined in: [src/fivem/Game.ts:78](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/Game.ts#L78)

Gets the total amount of frames rendered in this session

##### Returns

`number`

***

### GameTime

#### Get Signature

```ts
get static GameTime(): number
```

Defined in: [src/fivem/Game.ts:62](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/Game.ts#L62)

Gets how many milliseconds the game has been open this session

##### Returns

`number`

***

### IsCutsceneActive

#### Get Signature

```ts
get static IsCutsceneActive(): boolean
```

Defined in: [src/fivem/Game.ts:228](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/Game.ts#L228)

##### Returns

`boolean`

***

### IsLoading

#### Get Signature

```ts
get static IsLoading(): boolean
```

Defined in: [src/fivem/Game.ts:256](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/Game.ts#L256)

Get if a loading screen is active.

##### Returns

`boolean`

***

### IsMissionActive

#### Get Signature

```ts
get static IsMissionActive(): boolean
```

Defined in: [src/fivem/Game.ts:212](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/Game.ts#L212)

##### Returns

`boolean`

#### Set Signature

```ts
set static IsMissionActive(toggle): void
```

Defined in: [src/fivem/Game.ts:216](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/Game.ts#L216)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `toggle` | `boolean` |

##### Returns

`void`

***

### IsPaused

#### Get Signature

```ts
get static IsPaused(): boolean
```

Defined in: [src/fivem/Game.ts:242](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/Game.ts#L242)

Is the player in the pause menu (ESC).

##### Returns

`boolean`

#### Set Signature

```ts
set static IsPaused(toggle): void
```

Defined in: [src/fivem/Game.ts:249](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/Game.ts#L249)

Force enable pause menu.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `toggle` | `boolean` |

##### Returns

`void`

***

### IsRandomEventActive

#### Get Signature

```ts
get static IsRandomEventActive(): boolean
```

Defined in: [src/fivem/Game.ts:220](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/Game.ts#L220)

##### Returns

`boolean`

#### Set Signature

```ts
set static IsRandomEventActive(toggle): void
```

Defined in: [src/fivem/Game.ts:224](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/Game.ts#L224)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `toggle` | `boolean` |

##### Returns

`void`

***

### IsWaypointActive

#### Get Signature

```ts
get static IsWaypointActive(): boolean
```

Defined in: [src/fivem/Game.ts:235](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/Game.ts#L235)

Is a waypoint set on the map.

##### Returns

`boolean`

***

### Language

#### Get Signature

```ts
get static Language(): Language
```

Defined in: [src/fivem/Game.ts:55](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/Game.ts#L55)

Gets the game language

##### Returns

[`Language`](../enumerations/Language.md)

***

### LastFrameTime

#### Get Signature

```ts
get static LastFrameTime(): number
```

Defined in: [src/fivem/Game.ts:92](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/Game.ts#L92)

Gets the time it currently takes to render a frame, in seconds;

##### Returns

`number`

***

### MaxWantedLevel

#### Get Signature

```ts
get static MaxWantedLevel(): number
```

Defined in: [src/fivem/Game.ts:153](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/Game.ts#L153)

Get the maximum wanted level.

##### Returns

`number`

#### Set Signature

```ts
set static MaxWantedLevel(value): void
```

Defined in: [src/fivem/Game.ts:160](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/Game.ts#L160)

Set the maximum wanted level the local client can get.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

##### Returns

`void`

***

### Nightvision

#### Get Signature

```ts
get static Nightvision(): boolean
```

Defined in: [src/fivem/Game.ts:187](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/Game.ts#L187)

Get if nightvision is active.

##### Returns

`boolean`

#### Set Signature

```ts
set static Nightvision(toggle): void
```

Defined in: [src/fivem/Game.ts:194](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/Game.ts#L194)

Toggle nightvision.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `toggle` | `boolean` |

##### Returns

`void`

***

### Player

#### Get Signature

```ts
get static Player(): Player
```

Defined in: [src/fivem/Game.ts:99](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/Game.ts#L99)

Get the local player's Player object.

##### Returns

[`Player`](Player.md)

***

### PlayerPed

#### Get Signature

```ts
get static PlayerPed(): Ped
```

Defined in: [src/fivem/Game.ts:115](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/Game.ts#L115)

Get the local player character's Ped object.

##### Returns

[`Ped`](Ped.md)

A local player's character.

***

### PlayerVersusPlayer

#### Get Signature

```ts
get static PlayerVersusPlayer(): boolean
```

Defined in: [src/fivem/Game.ts:139](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/Game.ts#L139)

Get whether PvP is enabled.

##### Returns

`boolean`

True if enabled.

#### Set Signature

```ts
set static PlayerVersusPlayer(value): void
```

Defined in: [src/fivem/Game.ts:146](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/Game.ts#L146)

Set whether PvP is enabled.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

##### Returns

`void`

***

### RadioStation

#### Get Signature

```ts
get static RadioStation(): RadioStation
```

Defined in: [src/fivem/Game.ts:273](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/Game.ts#L273)

Gets the player's current radio station.

##### Returns

[`RadioStation`](../enumerations/RadioStation.md)

A radio station.

#### Set Signature

```ts
set static RadioStation(station): void
```

Defined in: [src/fivem/Game.ts:283](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/Game.ts#L283)

Sets the player's radio station.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `station` | [`RadioStation`](../enumerations/RadioStation.md) | A radio station. |

##### Returns

`void`

***

### ShowPoliceBlipsOnRadar

#### Set Signature

```ts
set static ShowPoliceBlipsOnRadar(toggle): void
```

Defined in: [src/fivem/Game.ts:180](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/Game.ts#L180)

Set whether police blips should show on minimap.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `toggle` | `boolean` |

##### Returns

`void`

***

### ThermalVision

#### Get Signature

```ts
get static ThermalVision(): boolean
```

Defined in: [src/fivem/Game.ts:201](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/Game.ts#L201)

Get if thermal (heat) vision is active.

##### Returns

`boolean`

#### Set Signature

```ts
set static ThermalVision(toggle): void
```

Defined in: [src/fivem/Game.ts:208](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/Game.ts#L208)

Toggle thermal (heat) vision.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `toggle` | `boolean` |

##### Returns

`void`

***

### TimeScale

#### Set Signature

```ts
set static TimeScale(time): void
```

Defined in: [src/fivem/Game.ts:71](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/Game.ts#L71)

Sets the time scale of the Game.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `time` | `number` | The time scale, only accepts values between 0.0 and 1.0 |

##### Returns

`void`

***

### WantedMultiplier

#### Set Signature

```ts
set static WantedMultiplier(value): void
```

Defined in: [src/fivem/Game.ts:173](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/Game.ts#L173)

Set the multiplier of the wanted level.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

##### Returns

`void`

***

### WaypointPosition

#### Get Signature

```ts
get static WaypointPosition(): Vector3
```

Defined in: [src/fivem/Game.ts:561](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/Game.ts#L561)

##### Returns

[`Vector3`](Vector3.md)

#### Set Signature

```ts
set static WaypointPosition(position): void
```

Defined in: [src/fivem/Game.ts:574](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/Game.ts#L574)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `position` | [`Vector3`](Vector3.md) |

##### Returns

`void`

## Methods

### disableAllControlsThisFrame()

```ts
static disableAllControlsThisFrame(inputMode): void
```

Defined in: [src/fivem/Game.ts:444](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/Game.ts#L444)

Disables all Controls this frame.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `inputMode` | [`InputMode`](../enumerations/InputMode.md) | InputMode |

#### Returns

`void`

***

### disableControlThisFrame()

```ts
static disableControlThisFrame(inputMode, control): void
```

Defined in: [src/fivem/Game.ts:432](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/Game.ts#L432)

Makes the Game Engine ignore the given Control this frame

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `inputMode` | [`InputMode`](../enumerations/InputMode.md) | InputMode |
| `control` | [`Control`](../enumerations/Control.md) | Control |

#### Returns

`void`

***

### doesGXTEntryExist()

```ts
static doesGXTEntryExist(entry): boolean
```

Defined in: [src/fivem/Game.ts:510](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/Game.ts#L510)

Determines the game language files contain a entry for the specified GXT key

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `entry` | `string` \| `number` | The GXT key. |

#### Returns

`boolean`

true if GXT entry exists; otherwise, false

***

### enableAllControlsThisFrame()

```ts
static enableAllControlsThisFrame(inputMode): void
```

Defined in: [src/fivem/Game.ts:453](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/Game.ts#L453)

Enables all Controls this frame.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `inputMode` | [`InputMode`](../enumerations/InputMode.md) | InputMode |

#### Returns

`void`

***

### enableControlThisFrame()

```ts
static enableControlThisFrame(inputMode, control): void
```

Defined in: [src/fivem/Game.ts:419](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/Game.ts#L419)

Makes the Game Engine respond to the given Control this frame

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `inputMode` | [`InputMode`](../enumerations/InputMode.md) | InputMode |
| `control` | [`Control`](../enumerations/Control.md) | Control |

#### Returns

`void`

***

### entityFromHandle()

```ts
static entityFromHandle(handle): null | Ped | Vehicle | Prop
```

Defined in: [src/fivem/Game.ts:463](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/Game.ts#L463)

Get an entity object from an entity handle.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `handle` | `number` | Handle of entity |

#### Returns

`null` \| [`Ped`](Ped.md) \| [`Vehicle`](Vehicle.md) \| [`Prop`](Prop.md)

A Ped, Vehicle or Prop object. `undefined` if entity handle doesn't exist.

***

### generateHash()

```ts
static generateHash(input): number
```

Defined in: [src/fivem/Game.ts:15](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/Game.ts#L15)

Calculate the Jenkins One At A Time (joaat) has from the given string.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `input` | `string` | The input string to calculate the hash |

#### Returns

`number`

***

### getGroundHeight()

```ts
static getGroundHeight(position): number
```

Defined in: [src/fivem/Game.ts:578](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/Game.ts#L578)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `position` | [`Vector3`](Vector3.md) |

#### Returns

`number`

***

### getGXTEntry()

```ts
static getGXTEntry(entry): string
```

Defined in: [src/fivem/Game.ts:524](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/Game.ts#L524)

Returns a localised string from the games language files with a specified GXT key

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `entry` | `string` \| `number` | The GXT key. |

#### Returns

`string`

The localised string if the key exists; otherwise, empty string

***

### getWaypointBlip()

```ts
static getWaypointBlip(): null | Blip
```

Defined in: [src/fivem/Game.ts:543](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/Game.ts#L543)

#### Returns

`null` \| [`Blip`](Blip.md)

***

### isControlEnabled()

```ts
static isControlEnabled(inputMode, control): boolean
```

Defined in: [src/fivem/Game.ts:406](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/Game.ts#L406)

Check whether a control is enabled this frame.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `inputMode` | [`InputMode`](../enumerations/InputMode.md) | InputMode |
| `control` | [`Control`](../enumerations/Control.md) | Control |

#### Returns

`boolean`

True or False.

***

### isControlJustPressed()

```ts
static isControlJustPressed(inputMode, control): boolean
```

Defined in: [src/fivem/Game.ts:322](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/Game.ts#L322)

Check whether a control has been pressed since last check.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `inputMode` | [`InputMode`](../enumerations/InputMode.md) | InputMode |
| `control` | [`Control`](../enumerations/Control.md) | Control |

#### Returns

`boolean`

True or False.

***

### isControlJustReleased()

```ts
static isControlJustReleased(inputMode, control): boolean
```

Defined in: [src/fivem/Game.ts:378](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/Game.ts#L378)

Check whether a control has been released since last check.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `inputMode` | [`InputMode`](../enumerations/InputMode.md) | InputMode |
| `control` | [`Control`](../enumerations/Control.md) | Control |

#### Returns

`boolean`

True or False.

***

### isControlPressed()

```ts
static isControlPressed(inputMode, control): boolean
```

Defined in: [src/fivem/Game.ts:294](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/Game.ts#L294)

Check whether a control is currently pressed.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `inputMode` | [`InputMode`](../enumerations/InputMode.md) | InputMode |
| `control` | [`Control`](../enumerations/Control.md) | Control |

#### Returns

`boolean`

True or False.

***

### isControlReleased()

```ts
static isControlReleased(inputMode, control): boolean
```

Defined in: [src/fivem/Game.ts:350](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/Game.ts#L350)

Check whether a control is being released.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `inputMode` | [`InputMode`](../enumerations/InputMode.md) | InputMode |
| `control` | [`Control`](../enumerations/Control.md) | Control |

#### Returns

`boolean`

True or False.

***

### isDisabledControlJustPressed()

```ts
static isDisabledControlJustPressed(inputMode, control): boolean
```

Defined in: [src/fivem/Game.ts:336](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/Game.ts#L336)

Check whether a disabled control has been pressed since last check.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `inputMode` | [`InputMode`](../enumerations/InputMode.md) | InputMode |
| `control` | [`Control`](../enumerations/Control.md) | Control |

#### Returns

`boolean`

True or False.

***

### isDisabledControlJustReleased()

```ts
static isDisabledControlJustReleased(inputMode, control): boolean
```

Defined in: [src/fivem/Game.ts:392](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/Game.ts#L392)

Check whether a disabled control has been released since last check.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `inputMode` | [`InputMode`](../enumerations/InputMode.md) | InputMode |
| `control` | [`Control`](../enumerations/Control.md) | Control |

#### Returns

`boolean`

True or False.

***

### isDisabledControlPressed()

```ts
static isDisabledControlPressed(inputMode, control): boolean
```

Defined in: [src/fivem/Game.ts:308](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/Game.ts#L308)

Check whether a disabled control is currently pressed.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `inputMode` | [`InputMode`](../enumerations/InputMode.md) | InputMode |
| `control` | [`Control`](../enumerations/Control.md) | Control |

#### Returns

`boolean`

True or False.

***

### isDisabledControlReleased()

```ts
static isDisabledControlReleased(inputMode, control): boolean
```

Defined in: [src/fivem/Game.ts:364](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/Game.ts#L364)

Check whether a disabled control is being released.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `inputMode` | [`InputMode`](../enumerations/InputMode.md) | InputMode |
| `control` | [`Control`](../enumerations/Control.md) | Control |

#### Returns

`boolean`

True or False.

***

### playerList()

```ts
static playerList(excludeLocalPlayer): IterableIterator<Player>
```

Defined in: [src/fivem/Game.ts:123](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/Game.ts#L123)

Get an iterable list of players currently on server.

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `excludeLocalPlayer` | `boolean` | `false` |

#### Returns

`IterableIterator`\<[`Player`](Player.md)\>

Iterable list of Player objects.

***

### playMusic()

```ts
static playMusic(musicFile): void
```

Defined in: [src/fivem/Game.ts:490](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/Game.ts#L490)

Play music. Same as Audio.playSound

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `musicFile` | `string` | Music file. |

#### Returns

`void`

***

### playSound()

```ts
static playSound(soundFile, soundSet): void
```

Defined in: [src/fivem/Game.ts:481](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/Game.ts#L481)

Play a sound. Same as Audio.playSound

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `soundFile` | `string` | Name of sound |
| `soundSet` | `string` | The set where the sound is in |

#### Returns

`void`

***

### removeWaypoint()

```ts
static removeWaypoint(): void
```

Defined in: [src/fivem/Game.ts:557](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/Game.ts#L557)

#### Returns

`void`

***

### resetGhostAlpha()

```ts
static resetGhostAlpha(): void
```

Defined in: [src/fivem/Game.ts:43](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/Game.ts#L43)

#### Returns

`void`

***

### setGhostAlpha()

```ts
static setGhostAlpha(alpha): void
```

Defined in: [src/fivem/Game.ts:39](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/Game.ts#L39)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `alpha` | `number` |

#### Returns

`void`

***

### setGhostingInverted()

```ts
static setGhostingInverted(isInverted): void
```

Defined in: [src/fivem/Game.ts:47](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/Game.ts#L47)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `isInverted` | `boolean` |

#### Returns

`void`

***

### setLocalPlayerGhosted()

```ts
static setLocalPlayerGhosted(isGhosted, inverseGhost): void
```

Defined in: [src/fivem/Game.ts:31](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/Game.ts#L31)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `isGhosted` | `boolean` |
| `inverseGhost` | `boolean` |

#### Returns

`void`

***

### stopMusic()

```ts
static stopMusic(musicFile?): void
```

Defined in: [src/fivem/Game.ts:499](https://github.com/nativewrappers/nativewrappers/blob/ef9379993d0b7126700360ea0bc0e228bd354e81/src/fivem/Game.ts#L499)

Stop music. If `musicFile` is not given, last played music is stopped. Same as Audio.playSound

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `musicFile`? | `string` | (optional) Music file. |

#### Returns

`void`
