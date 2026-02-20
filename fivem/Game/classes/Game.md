[@nativewrappers/fivem](../../../README.md) / [fivem/Game](../README.md) / Game

# Abstract Class: Game

Defined in: lib/fivem/Game.d.ts:11

## Constructors

### Constructor

```ts
new Game(): Game;
```

#### Returns

`Game`

## Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="cachedplayer"></a> `cachedPlayer` | `static` | [`Player`](../../models/Player/classes/Player.md) | lib/fivem/Game.d.ts:294 |
| <a id="hashcache"></a> `hashCache` | `static` | `Map`\<`string`, `number`\> | lib/fivem/Game.d.ts:13 |
| <a id="usehashcache"></a> `useHashCache` | `static` | `boolean` | lib/fivem/Game.d.ts:12 |

## Accessors

### ExtendWorldBoundry

#### Set Signature

```ts
set ExtendWorldBoundry(vec): void;
```

Defined in: lib/fivem/Game.d.ts:287

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
get LastVehicle(): null | Vehicle;
```

Defined in: lib/fivem/Game.d.ts:288

##### Returns

`null` \| [`Vehicle`](../../models/Vehicle/classes/Vehicle.md)

***

### CurrentInputMode

#### Get Signature

```ts
get static CurrentInputMode(): InputMode;
```

Defined in: lib/fivem/Game.d.ts:130

Get current input mode.

##### Returns

[`InputMode`](../../enums/InputMode/enumerations/InputMode.md)

InputMode: Mouse & Keyboard or GamePad.

***

### FPS

#### Get Signature

```ts
get static FPS(): number;
```

Defined in: lib/fivem/Game.d.ts:45

Gets the current frame rate per second

##### Returns

`number`

***

### FrameCount

#### Get Signature

```ts
get static FrameCount(): number;
```

Defined in: lib/fivem/Game.d.ts:41

Gets the total amount of frames rendered in this session

##### Returns

`number`

***

### GameTime

#### Get Signature

```ts
get static GameTime(): number;
```

Defined in: lib/fivem/Game.d.ts:31

Gets how many milliseconds the game has been open this session

##### Returns

`number`

***

### IsCutsceneActive

#### Get Signature

```ts
get static IsCutsceneActive(): boolean;
```

Defined in: lib/fivem/Game.d.ts:109

##### Returns

`boolean`

***

### IsLoading

#### Get Signature

```ts
get static IsLoading(): boolean;
```

Defined in: lib/fivem/Game.d.ts:125

Get if a loading screen is active.

##### Returns

`boolean`

***

### IsMissionActive

#### Get Signature

```ts
get static IsMissionActive(): boolean;
```

Defined in: lib/fivem/Game.d.ts:105

##### Returns

`boolean`

#### Set Signature

```ts
set static IsMissionActive(toggle): void;
```

Defined in: lib/fivem/Game.d.ts:106

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
get static IsPaused(): boolean;
```

Defined in: lib/fivem/Game.d.ts:117

Is the player in the pause menu (ESC).

##### Returns

`boolean`

#### Set Signature

```ts
set static IsPaused(toggle): void;
```

Defined in: lib/fivem/Game.d.ts:121

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
get static IsRandomEventActive(): boolean;
```

Defined in: lib/fivem/Game.d.ts:107

##### Returns

`boolean`

#### Set Signature

```ts
set static IsRandomEventActive(toggle): void;
```

Defined in: lib/fivem/Game.d.ts:108

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
get static IsWaypointActive(): boolean;
```

Defined in: lib/fivem/Game.d.ts:113

Is a waypoint set on the map.

##### Returns

`boolean`

***

### Language

#### Get Signature

```ts
get static Language(): Language;
```

Defined in: lib/fivem/Game.d.ts:27

Gets the game language

##### Returns

[`Language`](../../enums/Language/enumerations/Language.md)

***

### LastFrameTime

#### Get Signature

```ts
get static LastFrameTime(): number;
```

Defined in: lib/fivem/Game.d.ts:49

Gets the time it currently takes to render a frame, in seconds;

##### Returns

`number`

***

### MaxWantedLevel

#### Get Signature

```ts
get static MaxWantedLevel(): number;
```

Defined in: lib/fivem/Game.d.ts:76

Get the maximum wanted level.

##### Returns

`number`

#### Set Signature

```ts
set static MaxWantedLevel(value): void;
```

Defined in: lib/fivem/Game.d.ts:80

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
get static Nightvision(): boolean;
```

Defined in: lib/fivem/Game.d.ts:92

Get if nightvision is active.

##### Returns

`boolean`

#### Set Signature

```ts
set static Nightvision(toggle): void;
```

Defined in: lib/fivem/Game.d.ts:96

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
get static Player(): Player;
```

Defined in: lib/fivem/Game.d.ts:53

Get the local player's Player object.

##### Returns

[`Player`](../../models/Player/classes/Player.md)

***

### PlayerPed

#### Get Signature

```ts
get static PlayerPed(): Ped;
```

Defined in: lib/fivem/Game.d.ts:58

Get the local player character's Ped object.

##### Returns

[`Ped`](../../models/Ped/classes/Ped.md)

A local player's character.

***

### PlayerVersusPlayer

#### Get Signature

```ts
get static PlayerVersusPlayer(): boolean;
```

Defined in: lib/fivem/Game.d.ts:68

Get whether PvP is enabled.

##### Returns

`boolean`

True if enabled.

#### Set Signature

```ts
set static PlayerVersusPlayer(value): void;
```

Defined in: lib/fivem/Game.d.ts:72

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
get static RadioStation(): RadioStation;
```

Defined in: lib/fivem/Game.d.ts:136

Gets the player's current radio station.

##### Returns

[`RadioStation`](../../enums/RadioStation/enumerations/RadioStation.md)

A radio station.

#### Set Signature

```ts
set static RadioStation(station): void;
```

Defined in: lib/fivem/Game.d.ts:142

Sets the player's radio station.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `station` | [`RadioStation`](../../enums/RadioStation/enumerations/RadioStation.md) | A radio station. |

##### Returns

`void`

***

### ShowPoliceBlipsOnRadar

#### Set Signature

```ts
set static ShowPoliceBlipsOnRadar(toggle): void;
```

Defined in: lib/fivem/Game.d.ts:88

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
get static ThermalVision(): boolean;
```

Defined in: lib/fivem/Game.d.ts:100

Get if thermal (heat) vision is active.

##### Returns

`boolean`

#### Set Signature

```ts
set static ThermalVision(toggle): void;
```

Defined in: lib/fivem/Game.d.ts:104

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
set static TimeScale(time): void;
```

Defined in: lib/fivem/Game.d.ts:37

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
set static WantedMultiplier(value): void;
```

Defined in: lib/fivem/Game.d.ts:84

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
get static WaypointPosition(): Vector3;
```

Defined in: lib/fivem/Game.d.ts:291

##### Returns

`Vector3`

#### Set Signature

```ts
set static WaypointPosition(position): void;
```

Defined in: lib/fivem/Game.d.ts:292

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `position` | `Vector3` |

##### Returns

`void`

## Methods

### disableAllControlsThisFrame()

```ts
static disableAllControlsThisFrame(inputMode): void;
```

Defined in: lib/fivem/Game.d.ts:234

Disables all Controls this frame.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `inputMode` | [`InputMode`](../../enums/InputMode/enumerations/InputMode.md) | InputMode |

#### Returns

`void`

***

### disableControlThisFrame()

```ts
static disableControlThisFrame(inputMode, control): void;
```

Defined in: lib/fivem/Game.d.ts:228

Makes the Game Engine ignore the given Control this frame

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `inputMode` | [`InputMode`](../../enums/InputMode/enumerations/InputMode.md) | InputMode |
| `control` | [`Control`](../../enums/Control/enumerations/Control.md) | Control |

#### Returns

`void`

***

### doesGXTEntryExist()

```ts
static doesGXTEntryExist(entry): boolean;
```

Defined in: lib/fivem/Game.d.ts:274

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
static enableAllControlsThisFrame(inputMode): void;
```

Defined in: lib/fivem/Game.d.ts:240

Enables all Controls this frame.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `inputMode` | [`InputMode`](../../enums/InputMode/enumerations/InputMode.md) | InputMode |

#### Returns

`void`

***

### enableControlThisFrame()

```ts
static enableControlThisFrame(inputMode, control): void;
```

Defined in: lib/fivem/Game.d.ts:221

Makes the Game Engine respond to the given Control this frame

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `inputMode` | [`InputMode`](../../enums/InputMode/enumerations/InputMode.md) | InputMode |
| `control` | [`Control`](../../enums/Control/enumerations/Control.md) | Control |

#### Returns

`void`

***

### entityFromHandle()

```ts
static entityFromHandle(handle): 
  | null
  | Vehicle
  | Ped
  | Prop;
```

Defined in: lib/fivem/Game.d.ts:247

Get an entity object from an entity handle.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `handle` | `number` | Handle of entity |

#### Returns

  \| `null`
  \| [`Vehicle`](../../models/Vehicle/classes/Vehicle.md)
  \| [`Ped`](../../models/Ped/classes/Ped.md)
  \| [`Prop`](../../models/Prop/classes/Prop.md)

A Ped, Vehicle or Prop object. `undefined` if entity handle doesn't exist.

***

### generateHash()

```ts
static generateHash(input): number;
```

Defined in: lib/fivem/Game.d.ts:19

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
static getGroundHeight(position): number;
```

Defined in: lib/fivem/Game.d.ts:293

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `position` | `Vector3` |

#### Returns

`number`

***

### getGXTEntry()

```ts
static getGXTEntry(entry): string;
```

Defined in: lib/fivem/Game.d.ts:281

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
static getWaypointBlip(): null | Blip;
```

Defined in: lib/fivem/Game.d.ts:289

#### Returns

`null` \| [`Blip`](../../Blip/classes/Blip.md)

***

### isControlEnabled()

```ts
static isControlEnabled(inputMode, control): boolean;
```

Defined in: lib/fivem/Game.d.ts:214

Check whether a control is enabled this frame.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `inputMode` | [`InputMode`](../../enums/InputMode/enumerations/InputMode.md) | InputMode |
| `control` | [`Control`](../../enums/Control/enumerations/Control.md) | Control |

#### Returns

`boolean`

True or False.

***

### isControlJustPressed()

```ts
static isControlJustPressed(inputMode, control): boolean;
```

Defined in: lib/fivem/Game.d.ts:166

Check whether a control has been pressed since last check.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `inputMode` | [`InputMode`](../../enums/InputMode/enumerations/InputMode.md) | InputMode |
| `control` | [`Control`](../../enums/Control/enumerations/Control.md) | Control |

#### Returns

`boolean`

True or False.

***

### isControlJustReleased()

```ts
static isControlJustReleased(inputMode, control): boolean;
```

Defined in: lib/fivem/Game.d.ts:198

Check whether a control has been released since last check.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `inputMode` | [`InputMode`](../../enums/InputMode/enumerations/InputMode.md) | InputMode |
| `control` | [`Control`](../../enums/Control/enumerations/Control.md) | Control |

#### Returns

`boolean`

True or False.

***

### isControlPressed()

```ts
static isControlPressed(inputMode, control): boolean;
```

Defined in: lib/fivem/Game.d.ts:150

Check whether a control is currently pressed.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `inputMode` | [`InputMode`](../../enums/InputMode/enumerations/InputMode.md) | InputMode |
| `control` | [`Control`](../../enums/Control/enumerations/Control.md) | Control |

#### Returns

`boolean`

True or False.

***

### isControlReleased()

```ts
static isControlReleased(inputMode, control): boolean;
```

Defined in: lib/fivem/Game.d.ts:182

Check whether a control is being released.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `inputMode` | [`InputMode`](../../enums/InputMode/enumerations/InputMode.md) | InputMode |
| `control` | [`Control`](../../enums/Control/enumerations/Control.md) | Control |

#### Returns

`boolean`

True or False.

***

### isDisabledControlJustPressed()

```ts
static isDisabledControlJustPressed(inputMode, control): boolean;
```

Defined in: lib/fivem/Game.d.ts:174

Check whether a disabled control has been pressed since last check.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `inputMode` | [`InputMode`](../../enums/InputMode/enumerations/InputMode.md) | InputMode |
| `control` | [`Control`](../../enums/Control/enumerations/Control.md) | Control |

#### Returns

`boolean`

True or False.

***

### isDisabledControlJustReleased()

```ts
static isDisabledControlJustReleased(inputMode, control): boolean;
```

Defined in: lib/fivem/Game.d.ts:206

Check whether a disabled control has been released since last check.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `inputMode` | [`InputMode`](../../enums/InputMode/enumerations/InputMode.md) | InputMode |
| `control` | [`Control`](../../enums/Control/enumerations/Control.md) | Control |

#### Returns

`boolean`

True or False.

***

### isDisabledControlPressed()

```ts
static isDisabledControlPressed(inputMode, control): boolean;
```

Defined in: lib/fivem/Game.d.ts:158

Check whether a disabled control is currently pressed.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `inputMode` | [`InputMode`](../../enums/InputMode/enumerations/InputMode.md) | InputMode |
| `control` | [`Control`](../../enums/Control/enumerations/Control.md) | Control |

#### Returns

`boolean`

True or False.

***

### isDisabledControlReleased()

```ts
static isDisabledControlReleased(inputMode, control): boolean;
```

Defined in: lib/fivem/Game.d.ts:190

Check whether a disabled control is being released.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `inputMode` | [`InputMode`](../../enums/InputMode/enumerations/InputMode.md) | InputMode |
| `control` | [`Control`](../../enums/Control/enumerations/Control.md) | Control |

#### Returns

`boolean`

True or False.

***

### playerList()

```ts
static playerList(excludeLocalPlayer?): IterableIterator<Player>;
```

Defined in: lib/fivem/Game.d.ts:63

Get an iterable list of players currently on server.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `excludeLocalPlayer?` | `boolean` |

#### Returns

`IterableIterator`\<[`Player`](../../models/Player/classes/Player.md)\>

Iterable list of Player objects.

***

### playMusic()

```ts
static playMusic(musicFile): void;
```

Defined in: lib/fivem/Game.d.ts:260

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
static playSound(soundFile, soundSet): void;
```

Defined in: lib/fivem/Game.d.ts:254

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
static removeWaypoint(): void;
```

Defined in: lib/fivem/Game.d.ts:290

#### Returns

`void`

***

### resetGhostAlpha()

```ts
static resetGhostAlpha(): void;
```

Defined in: lib/fivem/Game.d.ts:22

#### Returns

`void`

***

### setGhostAlpha()

```ts
static setGhostAlpha(alpha): void;
```

Defined in: lib/fivem/Game.d.ts:21

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `alpha` | `number` |

#### Returns

`void`

***

### setGhostingInverted()

```ts
static setGhostingInverted(isInverted): void;
```

Defined in: lib/fivem/Game.d.ts:23

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `isInverted` | `boolean` |

#### Returns

`void`

***

### setLocalPlayerGhosted()

```ts
static setLocalPlayerGhosted(isGhosted, inverseGhost): void;
```

Defined in: lib/fivem/Game.d.ts:20

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
static stopMusic(musicFile?): void;
```

Defined in: lib/fivem/Game.d.ts:266

Stop music. If `musicFile` is not given, last played music is stopped. Same as Audio.playSound

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `musicFile?` | `string` | (optional) Music file. |

#### Returns

`void`
