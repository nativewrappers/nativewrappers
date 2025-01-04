[@nativewrappers/fivem](../../README.md) / [fivem](../README.md) / Audio

# Class: `abstract` Audio

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
| `cachedMusicFile` | `static` | `string` | [src/fivem/Audio.ts:91](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Audio.ts#L91) |

## Methods

### hasSoundFinished()

```ts
static hasSoundFinished(soundId): boolean
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `soundId` | `number` |

#### Returns

`boolean`

#### Defined in

[src/fivem/Audio.ts:56](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Audio.ts#L56)

***

### playMusic()

```ts
static playMusic(musicFile): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `musicFile` | `string` |

#### Returns

`void`

#### Defined in

[src/fivem/Audio.ts:72](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Audio.ts#L72)

***

### playSound()

```ts
static playSound(soundFile, soundSet): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `soundFile` | `string` |
| `soundSet` | `string` |

#### Returns

`void`

#### Defined in

[src/fivem/Audio.ts:68](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Audio.ts#L68)

***

### playSoundAt()

```ts
static playSoundAt(
   position, 
   sound, 
   set?, 
   generateSoundId?): number
```

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `position` | [`Vector3`](Vector3.md) | `undefined` |
| `sound` | `string` | `undefined` |
| `set`? | `string` | `undefined` |
| `generateSoundId`? | `boolean` | `true` |

#### Returns

`number`

#### Defined in

[src/fivem/Audio.ts:6](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Audio.ts#L6)

***

### playSoundFromEntity()

```ts
static playSoundFromEntity(
   entity, 
   sound, 
   set?, 
   generateSoundId?): number
```

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `entity` | [`BaseEntity`](BaseEntity.md) | `undefined` |
| `sound` | `string` | `undefined` |
| `set`? | `string` | `undefined` |
| `generateSoundId`? | `boolean` | `true` |

#### Returns

`number`

#### Defined in

[src/fivem/Audio.ts:27](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Audio.ts#L27)

***

### playSoundFrontEnd()

```ts
static playSoundFrontEnd(
   sound, 
   set?, 
   generateSoundId?): number
```

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `sound` | `string` | `undefined` |
| `set`? | `string` | `undefined` |
| `generateSoundId`? | `boolean` | `true` |

#### Returns

`number`

#### Defined in

[src/fivem/Audio.ts:38](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Audio.ts#L38)

***

### releaseSound()

```ts
static releaseSound(soundId): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `soundId` | `number` |

#### Returns

`void`

#### Defined in

[src/fivem/Audio.ts:52](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Audio.ts#L52)

***

### setAudioFlag()

```ts
static setAudioFlag(flag, toggle): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `flag` | `string` \| [`AudioFlag`](../enumerations/AudioFlag.md) |
| `toggle` | `boolean` |

#### Returns

`void`

#### Defined in

[src/fivem/Audio.ts:60](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Audio.ts#L60)

***

### stopMusic()

```ts
static stopMusic(musicFile?): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `musicFile`? | `string` |

#### Returns

`void`

#### Defined in

[src/fivem/Audio.ts:80](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Audio.ts#L80)

***

### stopSound()

```ts
static stopSound(soundId): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `soundId` | `number` |

#### Returns

`void`

#### Defined in

[src/fivem/Audio.ts:48](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Audio.ts#L48)
