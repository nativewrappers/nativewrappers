[@nativewrappers/fivem](../../README.md) / [fivem](../README.md) / Audio

# Class: `abstract` Audio

Defined in: fivem/Audio.d.ts:4

## Constructors

### new Audio()

```ts
new Audio(): Audio
```

#### Returns

[`Audio`](Audio.md)

## Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="cachedmusicfile"></a> `cachedMusicFile` | `static` | `string` | fivem/Audio.d.ts:15 |

## Methods

### hasSoundFinished()

```ts
static hasSoundFinished(soundId): boolean
```

Defined in: fivem/Audio.d.ts:10

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `soundId` | `number` |

#### Returns

`boolean`

***

### playMusic()

```ts
static playMusic(musicFile): void
```

Defined in: fivem/Audio.d.ts:13

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `musicFile` | `string` |

#### Returns

`void`

***

### playSound()

```ts
static playSound(soundFile, soundSet): void
```

Defined in: fivem/Audio.d.ts:12

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `soundFile` | `string` |
| `soundSet` | `string` |

#### Returns

`void`

***

### playSoundAt()

```ts
static playSoundAt(
   position, 
   sound, 
   set?, 
   generateSoundId?): number
```

Defined in: fivem/Audio.d.ts:5

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `position` | `Vector3` |
| `sound` | `string` |
| `set`? | `string` |
| `generateSoundId`? | `boolean` |

#### Returns

`number`

***

### playSoundFromEntity()

```ts
static playSoundFromEntity(
   entity, 
   sound, 
   set?, 
   generateSoundId?): number
```

Defined in: fivem/Audio.d.ts:6

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `entity` | [`BaseEntity`](BaseEntity.md) |
| `sound` | `string` |
| `set`? | `string` |
| `generateSoundId`? | `boolean` |

#### Returns

`number`

***

### playSoundFrontEnd()

```ts
static playSoundFrontEnd(
   sound, 
   set?, 
   generateSoundId?): number
```

Defined in: fivem/Audio.d.ts:7

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `sound` | `string` |
| `set`? | `string` |
| `generateSoundId`? | `boolean` |

#### Returns

`number`

***

### releaseSound()

```ts
static releaseSound(soundId): void
```

Defined in: fivem/Audio.d.ts:9

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `soundId` | `number` |

#### Returns

`void`

***

### setAudioFlag()

```ts
static setAudioFlag(flag, toggle): void
```

Defined in: fivem/Audio.d.ts:11

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `flag` | `string` \| [`AudioFlag`](../enumerations/AudioFlag.md) |
| `toggle` | `boolean` |

#### Returns

`void`

***

### stopMusic()

```ts
static stopMusic(musicFile?): void
```

Defined in: fivem/Audio.d.ts:14

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `musicFile`? | `string` |

#### Returns

`void`

***

### stopSound()

```ts
static stopSound(soundId): void
```

Defined in: fivem/Audio.d.ts:8

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `soundId` | `number` |

#### Returns

`void`
