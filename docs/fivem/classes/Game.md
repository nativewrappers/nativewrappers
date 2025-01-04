[@nativewrappers/fivem](../../README.md) / [fivem](../README.md) / Game

# Class: `abstract` Game

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
| `cachedPlayer` | `static` | [`Player`](Player.md) | `undefined` | [src/fivem/Game.ts:583](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Game.ts#L583) |
| `hashCache` | `static` | `Map`\<`string`, `number`\> | `undefined` | [src/fivem/Game.ts:9](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Game.ts#L9) |
| `useHashCache` | `static` | `boolean` | `true` | [src/fivem/Game.ts:7](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Game.ts#L7) |

## Accessors

### ExtendWorldBoundry

```ts
set ExtendWorldBoundry(vec): void
```

Sets the max boundry the local player can go to before they get killed

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `vec` | [`Vector3`](Vector3.md) | the max bounds for the local player |

#### Defined in

[src/fivem/Game.ts:533](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Game.ts#L533)

***

### LastVehicle

```ts
get LastVehicle(): null | Vehicle
```

#### Returns

`null` \| [`Vehicle`](Vehicle.md)

#### Defined in

[src/fivem/Game.ts:537](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Game.ts#L537)

***

### CurrentInputMode

```ts
get static CurrentInputMode(): InputMode
```

Get current input mode.

#### Returns

[`InputMode`](../enumerations/InputMode.md)

InputMode: Mouse & Keyboard or GamePad.

#### Defined in

[src/fivem/Game.ts:264](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Game.ts#L264)

***

### FPS

```ts
get static FPS(): number
```

Gets the current frame rate per second

#### Returns

`number`

#### Defined in

[src/fivem/Game.ts:85](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Game.ts#L85)

***

### FrameCount

```ts
get static FrameCount(): number
```

Gets the total amount of frames rendered in this session

#### Returns

`number`

#### Defined in

[src/fivem/Game.ts:78](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Game.ts#L78)

***

### GameTime

```ts
get static GameTime(): number
```

Gets how many milliseconds the game has been open this session

#### Returns

`number`

#### Defined in

[src/fivem/Game.ts:62](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Game.ts#L62)

***

### IsCutsceneActive

```ts
get static IsCutsceneActive(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/fivem/Game.ts:228](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Game.ts#L228)

***

### IsLoading

```ts
get static IsLoading(): boolean
```

Get if a loading screen is active.

#### Returns

`boolean`

#### Defined in

[src/fivem/Game.ts:256](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Game.ts#L256)

***

### IsMissionActive

```ts
get static IsMissionActive(): boolean
```

```ts
set static IsMissionActive(toggle): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `toggle` | `boolean` |

#### Returns

`boolean`

#### Defined in

[src/fivem/Game.ts:212](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Game.ts#L212)

***

### IsPaused

```ts
get static IsPaused(): boolean
```

Is the player in the pause menu (ESC).

```ts
set static IsPaused(toggle): void
```

Force enable pause menu.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `toggle` | `boolean` |

#### Returns

`boolean`

#### Defined in

[src/fivem/Game.ts:242](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Game.ts#L242)

***

### IsRandomEventActive

```ts
get static IsRandomEventActive(): boolean
```

```ts
set static IsRandomEventActive(toggle): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `toggle` | `boolean` |

#### Returns

`boolean`

#### Defined in

[src/fivem/Game.ts:220](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Game.ts#L220)

***

### IsWaypointActive

```ts
get static IsWaypointActive(): boolean
```

Is a waypoint set on the map.

#### Returns

`boolean`

#### Defined in

[src/fivem/Game.ts:235](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Game.ts#L235)

***

### Language

```ts
get static Language(): Language
```

Gets the game language

#### Returns

[`Language`](../enumerations/Language.md)

#### Defined in

[src/fivem/Game.ts:55](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Game.ts#L55)

***

### LastFrameTime

```ts
get static LastFrameTime(): number
```

Gets the time it currently takes to render a frame, in seconds;

#### Returns

`number`

#### Defined in

[src/fivem/Game.ts:92](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Game.ts#L92)

***

### MaxWantedLevel

```ts
get static MaxWantedLevel(): number
```

Get the maximum wanted level.

```ts
set static MaxWantedLevel(value): void
```

Set the maximum wanted level the local client can get.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

#### Returns

`number`

#### Defined in

[src/fivem/Game.ts:153](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Game.ts#L153)

***

### Nightvision

```ts
get static Nightvision(): boolean
```

Get if nightvision is active.

```ts
set static Nightvision(toggle): void
```

Toggle nightvision.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `toggle` | `boolean` |

#### Returns

`boolean`

#### Defined in

[src/fivem/Game.ts:187](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Game.ts#L187)

***

### Player

```ts
get static Player(): Player
```

Get the local player's Player object.

#### Returns

[`Player`](Player.md)

#### Defined in

[src/fivem/Game.ts:99](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Game.ts#L99)

***

### PlayerPed

```ts
get static PlayerPed(): Ped
```

Get the local player character's Ped object.

#### Returns

[`Ped`](Ped.md)

A local player's character.

#### Defined in

[src/fivem/Game.ts:115](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Game.ts#L115)

***

### PlayerVersusPlayer

```ts
get static PlayerVersusPlayer(): boolean
```

Get whether PvP is enabled.

```ts
set static PlayerVersusPlayer(value): void
```

Set whether PvP is enabled.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

#### Returns

`boolean`

True if enabled.

#### Defined in

[src/fivem/Game.ts:139](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Game.ts#L139)

***

### RadioStation

```ts
get static RadioStation(): RadioStation
```

Gets the player's current radio station.

```ts
set static RadioStation(station): void
```

Sets the player's radio station.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `station` | [`RadioStation`](../enumerations/RadioStation.md) | A radio station. |

#### Returns

[`RadioStation`](../enumerations/RadioStation.md)

A radio station.

#### Defined in

[src/fivem/Game.ts:273](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Game.ts#L273)

***

### ShowPoliceBlipsOnRadar

```ts
set static ShowPoliceBlipsOnRadar(toggle): void
```

Set whether police blips should show on minimap.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `toggle` | `boolean` |

#### Defined in

[src/fivem/Game.ts:180](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Game.ts#L180)

***

### ThermalVision

```ts
get static ThermalVision(): boolean
```

Get if thermal (heat) vision is active.

```ts
set static ThermalVision(toggle): void
```

Toggle thermal (heat) vision.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `toggle` | `boolean` |

#### Returns

`boolean`

#### Defined in

[src/fivem/Game.ts:201](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Game.ts#L201)

***

### TimeScale

```ts
set static TimeScale(time): void
```

Sets the time scale of the Game.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `time` | `number` | The time scale, only accepts values between 0.0 and 1.0 |

#### Defined in

[src/fivem/Game.ts:71](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Game.ts#L71)

***

### WantedMultiplier

```ts
set static WantedMultiplier(value): void
```

Set the multiplier of the wanted level.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

#### Defined in

[src/fivem/Game.ts:173](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Game.ts#L173)

***

### WaypointPosition

```ts
get static WaypointPosition(): Vector3
```

```ts
set static WaypointPosition(position): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `position` | [`Vector3`](Vector3.md) |

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/fivem/Game.ts:561](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Game.ts#L561)

## Methods

### disableAllControlsThisFrame()

```ts
static disableAllControlsThisFrame(inputMode): void
```

Disables all Controls this frame.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `inputMode` | [`InputMode`](../enumerations/InputMode.md) | InputMode |

#### Returns

`void`

#### Defined in

[src/fivem/Game.ts:444](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Game.ts#L444)

***

### disableControlThisFrame()

```ts
static disableControlThisFrame(inputMode, control): void
```

Makes the Game Engine ignore the given Control this frame

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `inputMode` | [`InputMode`](../enumerations/InputMode.md) | InputMode |
| `control` | [`Control`](../enumerations/Control.md) | Control |

#### Returns

`void`

#### Defined in

[src/fivem/Game.ts:432](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Game.ts#L432)

***

### doesGXTEntryExist()

```ts
static doesGXTEntryExist(entry): boolean
```

Determines the game language files contain a entry for the specified GXT key

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `entry` | `string` \| `number` | The GXT key. |

#### Returns

`boolean`

true if GXT entry exists; otherwise, false

#### Defined in

[src/fivem/Game.ts:510](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Game.ts#L510)

***

### enableAllControlsThisFrame()

```ts
static enableAllControlsThisFrame(inputMode): void
```

Enables all Controls this frame.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `inputMode` | [`InputMode`](../enumerations/InputMode.md) | InputMode |

#### Returns

`void`

#### Defined in

[src/fivem/Game.ts:453](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Game.ts#L453)

***

### enableControlThisFrame()

```ts
static enableControlThisFrame(inputMode, control): void
```

Makes the Game Engine respond to the given Control this frame

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `inputMode` | [`InputMode`](../enumerations/InputMode.md) | InputMode |
| `control` | [`Control`](../enumerations/Control.md) | Control |

#### Returns

`void`

#### Defined in

[src/fivem/Game.ts:419](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Game.ts#L419)

***

### entityFromHandle()

```ts
static entityFromHandle(handle): null | Ped | Vehicle | Prop
```

Get an entity object from an entity handle.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `handle` | `number` | Handle of entity |

#### Returns

`null` \| [`Ped`](Ped.md) \| [`Vehicle`](Vehicle.md) \| [`Prop`](Prop.md)

A Ped, Vehicle or Prop object. `undefined` if entity handle doesn't exist.

#### Defined in

[src/fivem/Game.ts:463](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Game.ts#L463)

***

### generateHash()

```ts
static generateHash(input): number
```

Calculate the Jenkins One At A Time (joaat) has from the given string.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `input` | `string` | The input string to calculate the hash |

#### Returns

`number`

#### Defined in

[src/fivem/Game.ts:15](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Game.ts#L15)

***

### getGroundHeight()

```ts
static getGroundHeight(position): number
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `position` | [`Vector3`](Vector3.md) |

#### Returns

`number`

#### Defined in

[src/fivem/Game.ts:578](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Game.ts#L578)

***

### getGXTEntry()

```ts
static getGXTEntry(entry): string
```

Returns a localised string from the games language files with a specified GXT key

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `entry` | `string` \| `number` | The GXT key. |

#### Returns

`string`

The localised string if the key exists; otherwise, empty string

#### Defined in

[src/fivem/Game.ts:524](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Game.ts#L524)

***

### getWaypointBlip()

```ts
static getWaypointBlip(): null | Blip
```

#### Returns

`null` \| [`Blip`](Blip.md)

#### Defined in

[src/fivem/Game.ts:543](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Game.ts#L543)

***

### isControlEnabled()

```ts
static isControlEnabled(inputMode, control): boolean
```

Check whether a control is enabled this frame.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `inputMode` | [`InputMode`](../enumerations/InputMode.md) | InputMode |
| `control` | [`Control`](../enumerations/Control.md) | Control |

#### Returns

`boolean`

True or False.

#### Defined in

[src/fivem/Game.ts:406](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Game.ts#L406)

***

### isControlJustPressed()

```ts
static isControlJustPressed(inputMode, control): boolean
```

Check whether a control has been pressed since last check.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `inputMode` | [`InputMode`](../enumerations/InputMode.md) | InputMode |
| `control` | [`Control`](../enumerations/Control.md) | Control |

#### Returns

`boolean`

True or False.

#### Defined in

[src/fivem/Game.ts:322](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Game.ts#L322)

***

### isControlJustReleased()

```ts
static isControlJustReleased(inputMode, control): boolean
```

Check whether a control has been released since last check.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `inputMode` | [`InputMode`](../enumerations/InputMode.md) | InputMode |
| `control` | [`Control`](../enumerations/Control.md) | Control |

#### Returns

`boolean`

True or False.

#### Defined in

[src/fivem/Game.ts:378](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Game.ts#L378)

***

### isControlPressed()

```ts
static isControlPressed(inputMode, control): boolean
```

Check whether a control is currently pressed.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `inputMode` | [`InputMode`](../enumerations/InputMode.md) | InputMode |
| `control` | [`Control`](../enumerations/Control.md) | Control |

#### Returns

`boolean`

True or False.

#### Defined in

[src/fivem/Game.ts:294](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Game.ts#L294)

***

### isControlReleased()

```ts
static isControlReleased(inputMode, control): boolean
```

Check whether a control is being released.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `inputMode` | [`InputMode`](../enumerations/InputMode.md) | InputMode |
| `control` | [`Control`](../enumerations/Control.md) | Control |

#### Returns

`boolean`

True or False.

#### Defined in

[src/fivem/Game.ts:350](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Game.ts#L350)

***

### isDisabledControlJustPressed()

```ts
static isDisabledControlJustPressed(inputMode, control): boolean
```

Check whether a disabled control has been pressed since last check.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `inputMode` | [`InputMode`](../enumerations/InputMode.md) | InputMode |
| `control` | [`Control`](../enumerations/Control.md) | Control |

#### Returns

`boolean`

True or False.

#### Defined in

[src/fivem/Game.ts:336](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Game.ts#L336)

***

### isDisabledControlJustReleased()

```ts
static isDisabledControlJustReleased(inputMode, control): boolean
```

Check whether a disabled control has been released since last check.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `inputMode` | [`InputMode`](../enumerations/InputMode.md) | InputMode |
| `control` | [`Control`](../enumerations/Control.md) | Control |

#### Returns

`boolean`

True or False.

#### Defined in

[src/fivem/Game.ts:392](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Game.ts#L392)

***

### isDisabledControlPressed()

```ts
static isDisabledControlPressed(inputMode, control): boolean
```

Check whether a disabled control is currently pressed.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `inputMode` | [`InputMode`](../enumerations/InputMode.md) | InputMode |
| `control` | [`Control`](../enumerations/Control.md) | Control |

#### Returns

`boolean`

True or False.

#### Defined in

[src/fivem/Game.ts:308](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Game.ts#L308)

***

### isDisabledControlReleased()

```ts
static isDisabledControlReleased(inputMode, control): boolean
```

Check whether a disabled control is being released.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `inputMode` | [`InputMode`](../enumerations/InputMode.md) | InputMode |
| `control` | [`Control`](../enumerations/Control.md) | Control |

#### Returns

`boolean`

True or False.

#### Defined in

[src/fivem/Game.ts:364](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Game.ts#L364)

***

### playerList()

```ts
static playerList(excludeLocalPlayer): IterableIterator<Player, any, any>
```

Get an iterable list of players currently on server.

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `excludeLocalPlayer` | `boolean` | `false` |

#### Returns

`IterableIterator`\<[`Player`](Player.md), `any`, `any`\>

Iterable list of Player objects.

#### Defined in

[src/fivem/Game.ts:123](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Game.ts#L123)

***

### playMusic()

```ts
static playMusic(musicFile): void
```

Play music. Same as Audio.playSound

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `musicFile` | `string` | Music file. |

#### Returns

`void`

#### Defined in

[src/fivem/Game.ts:490](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Game.ts#L490)

***

### playSound()

```ts
static playSound(soundFile, soundSet): void
```

Play a sound. Same as Audio.playSound

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `soundFile` | `string` | Name of sound |
| `soundSet` | `string` | The set where the sound is in |

#### Returns

`void`

#### Defined in

[src/fivem/Game.ts:481](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Game.ts#L481)

***

### removeWaypoint()

```ts
static removeWaypoint(): void
```

#### Returns

`void`

#### Defined in

[src/fivem/Game.ts:557](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Game.ts#L557)

***

### resetGhostAlpha()

```ts
static resetGhostAlpha(): void
```

#### Returns

`void`

#### Defined in

[src/fivem/Game.ts:43](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Game.ts#L43)

***

### setGhostAlpha()

```ts
static setGhostAlpha(alpha): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `alpha` | `number` |

#### Returns

`void`

#### Defined in

[src/fivem/Game.ts:39](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Game.ts#L39)

***

### setGhostingInverted()

```ts
static setGhostingInverted(isInverted): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `isInverted` | `boolean` |

#### Returns

`void`

#### Defined in

[src/fivem/Game.ts:47](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Game.ts#L47)

***

### setLocalPlayerGhosted()

```ts
static setLocalPlayerGhosted(isGhosted, inverseGhost): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `isGhosted` | `boolean` |
| `inverseGhost` | `boolean` |

#### Returns

`void`

#### Defined in

[src/fivem/Game.ts:31](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Game.ts#L31)

***

### stopMusic()

```ts
static stopMusic(musicFile?): void
```

Stop music. If `musicFile` is not given, last played music is stopped. Same as Audio.playSound

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `musicFile`? | `string` | (optional) Music file. |

#### Returns

`void`

#### Defined in

[src/fivem/Game.ts:499](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Game.ts#L499)
