[@nativewrappers/fivem](../../README.md) / [fivem](../README.md) / Game

# Class: `abstract` Game

Defined in: fivem/Game.d.ts:4

## Constructors

### new Game()

```ts
new Game(): Game
```

#### Returns

[`Game`](Game.md)

## Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="cachedplayer"></a> `cachedPlayer` | `static` | [`Player`](Player.md) | fivem/Game.d.ts:287 |
| <a id="hashcache"></a> `hashCache` | `static` | `Map`\<`string`, `number`\> | fivem/Game.d.ts:6 |
| <a id="usehashcache"></a> `useHashCache` | `static` | `boolean` | fivem/Game.d.ts:5 |

## Accessors

### ExtendWorldBoundry

#### Set Signature

```ts
set ExtendWorldBoundry(vec): void
```

Defined in: fivem/Game.d.ts:280

Sets the max boundry the local player can go to before they get killed

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `vec` | `Vector3` | the max bounds for the local player |

##### Returns

`void`

***

### LastVehicle

#### Get Signature

```ts
get LastVehicle(): null | Vehicle
```

Defined in: fivem/Game.d.ts:281

##### Returns

`null` \| [`Vehicle`](Vehicle.md)

***

### CurrentInputMode

#### Get Signature

```ts
get static CurrentInputMode(): InputMode
```

Defined in: fivem/Game.d.ts:123

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

Defined in: fivem/Game.d.ts:38

Gets the current frame rate per second

##### Returns

`number`

***

### FrameCount

#### Get Signature

```ts
get static FrameCount(): number
```

Defined in: fivem/Game.d.ts:34

Gets the total amount of frames rendered in this session

##### Returns

`number`

***

### GameTime

#### Get Signature

```ts
get static GameTime(): number
```

Defined in: fivem/Game.d.ts:24

Gets how many milliseconds the game has been open this session

##### Returns

`number`

***

### IsCutsceneActive

#### Get Signature

```ts
get static IsCutsceneActive(): boolean
```

Defined in: fivem/Game.d.ts:102

##### Returns

`boolean`

***

### IsLoading

#### Get Signature

```ts
get static IsLoading(): boolean
```

Defined in: fivem/Game.d.ts:118

Get if a loading screen is active.

##### Returns

`boolean`

***

### IsMissionActive

#### Get Signature

```ts
get static IsMissionActive(): boolean
```

Defined in: fivem/Game.d.ts:98

##### Returns

`boolean`

#### Set Signature

```ts
set static IsMissionActive(toggle): void
```

Defined in: fivem/Game.d.ts:99

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

Defined in: fivem/Game.d.ts:110

Is the player in the pause menu (ESC).

##### Returns

`boolean`

#### Set Signature

```ts
set static IsPaused(toggle): void
```

Defined in: fivem/Game.d.ts:114

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

Defined in: fivem/Game.d.ts:100

##### Returns

`boolean`

#### Set Signature

```ts
set static IsRandomEventActive(toggle): void
```

Defined in: fivem/Game.d.ts:101

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

Defined in: fivem/Game.d.ts:106

Is a waypoint set on the map.

##### Returns

`boolean`

***

### Language

#### Get Signature

```ts
get static Language(): Language
```

Defined in: fivem/Game.d.ts:20

Gets the game language

##### Returns

[`Language`](../enumerations/Language.md)

***

### LastFrameTime

#### Get Signature

```ts
get static LastFrameTime(): number
```

Defined in: fivem/Game.d.ts:42

Gets the time it currently takes to render a frame, in seconds;

##### Returns

`number`

***

### MaxWantedLevel

#### Get Signature

```ts
get static MaxWantedLevel(): number
```

Defined in: fivem/Game.d.ts:69

Get the maximum wanted level.

##### Returns

`number`

#### Set Signature

```ts
set static MaxWantedLevel(value): void
```

Defined in: fivem/Game.d.ts:73

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

Defined in: fivem/Game.d.ts:85

Get if nightvision is active.

##### Returns

`boolean`

#### Set Signature

```ts
set static Nightvision(toggle): void
```

Defined in: fivem/Game.d.ts:89

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

Defined in: fivem/Game.d.ts:46

Get the local player's Player object.

##### Returns

[`Player`](Player.md)

***

### PlayerPed

#### Get Signature

```ts
get static PlayerPed(): Ped
```

Defined in: fivem/Game.d.ts:51

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

Defined in: fivem/Game.d.ts:61

Get whether PvP is enabled.

##### Returns

`boolean`

True if enabled.

#### Set Signature

```ts
set static PlayerVersusPlayer(value): void
```

Defined in: fivem/Game.d.ts:65

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

Defined in: fivem/Game.d.ts:129

Gets the player's current radio station.

##### Returns

[`RadioStation`](../enumerations/RadioStation.md)

A radio station.

#### Set Signature

```ts
set static RadioStation(station): void
```

Defined in: fivem/Game.d.ts:135

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

Defined in: fivem/Game.d.ts:81

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

Defined in: fivem/Game.d.ts:93

Get if thermal (heat) vision is active.

##### Returns

`boolean`

#### Set Signature

```ts
set static ThermalVision(toggle): void
```

Defined in: fivem/Game.d.ts:97

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

Defined in: fivem/Game.d.ts:30

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

Defined in: fivem/Game.d.ts:77

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

Defined in: fivem/Game.d.ts:284

##### Returns

`Vector3`

#### Set Signature

```ts
set static WaypointPosition(position): void
```

Defined in: fivem/Game.d.ts:285

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `position` | `Vector3` |

##### Returns

`void`

## Methods

### disableAllControlsThisFrame()

```ts
static disableAllControlsThisFrame(inputMode): void
```

Defined in: fivem/Game.d.ts:227

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

Defined in: fivem/Game.d.ts:221

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

Defined in: fivem/Game.d.ts:267

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

Defined in: fivem/Game.d.ts:233

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

Defined in: fivem/Game.d.ts:214

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

Defined in: fivem/Game.d.ts:240

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

Defined in: fivem/Game.d.ts:12

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

Defined in: fivem/Game.d.ts:286

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `position` | `Vector3` |

#### Returns

`number`

***

### getGXTEntry()

```ts
static getGXTEntry(entry): string
```

Defined in: fivem/Game.d.ts:274

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

Defined in: fivem/Game.d.ts:282

#### Returns

`null` \| [`Blip`](Blip.md)

***

### isControlEnabled()

```ts
static isControlEnabled(inputMode, control): boolean
```

Defined in: fivem/Game.d.ts:207

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

Defined in: fivem/Game.d.ts:159

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

Defined in: fivem/Game.d.ts:191

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

Defined in: fivem/Game.d.ts:143

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

Defined in: fivem/Game.d.ts:175

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

Defined in: fivem/Game.d.ts:167

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

Defined in: fivem/Game.d.ts:199

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

Defined in: fivem/Game.d.ts:151

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

Defined in: fivem/Game.d.ts:183

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
static playerList(excludeLocalPlayer?): IterableIterator<Player>
```

Defined in: fivem/Game.d.ts:56

Get an iterable list of players currently on server.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `excludeLocalPlayer`? | `boolean` |

#### Returns

`IterableIterator`\<[`Player`](Player.md)\>

Iterable list of Player objects.

***

### playMusic()

```ts
static playMusic(musicFile): void
```

Defined in: fivem/Game.d.ts:253

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

Defined in: fivem/Game.d.ts:247

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

Defined in: fivem/Game.d.ts:283

#### Returns

`void`

***

### resetGhostAlpha()

```ts
static resetGhostAlpha(): void
```

Defined in: fivem/Game.d.ts:15

#### Returns

`void`

***

### setGhostAlpha()

```ts
static setGhostAlpha(alpha): void
```

Defined in: fivem/Game.d.ts:14

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

Defined in: fivem/Game.d.ts:16

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

Defined in: fivem/Game.d.ts:13

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

Defined in: fivem/Game.d.ts:259

Stop music. If `musicFile` is not given, last played music is stopped. Same as Audio.playSound

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `musicFile`? | `string` | (optional) Music file. |

#### Returns

`void`
