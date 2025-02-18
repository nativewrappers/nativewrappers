[@nativewrappers/fivem](../../README.md) / [fivem](../README.md) / Audio

# Class: `abstract` Audio

Defined in: [src/fivem/Audio.ts:5](https://github.com/nativewrappers/nativewrappers/blob/c639ec5cd28328d6b44c7ebf73de56bb1b4bef7d/src/fivem/Audio.ts#L5)

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
| <a id="cachedmusicfile"></a> `cachedMusicFile` | `static` | `string` | [src/fivem/Audio.ts:91](https://github.com/nativewrappers/nativewrappers/blob/c639ec5cd28328d6b44c7ebf73de56bb1b4bef7d/src/fivem/Audio.ts#L91) |

## Methods

### hasSoundFinished()

```ts
static hasSoundFinished(soundId): boolean
```

Defined in: [src/fivem/Audio.ts:56](https://github.com/nativewrappers/nativewrappers/blob/c639ec5cd28328d6b44c7ebf73de56bb1b4bef7d/src/fivem/Audio.ts#L56)

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

Defined in: [src/fivem/Audio.ts:72](https://github.com/nativewrappers/nativewrappers/blob/c639ec5cd28328d6b44c7ebf73de56bb1b4bef7d/src/fivem/Audio.ts#L72)

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

Defined in: [src/fivem/Audio.ts:68](https://github.com/nativewrappers/nativewrappers/blob/c639ec5cd28328d6b44c7ebf73de56bb1b4bef7d/src/fivem/Audio.ts#L68)

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

Defined in: [src/fivem/Audio.ts:6](https://github.com/nativewrappers/nativewrappers/blob/c639ec5cd28328d6b44c7ebf73de56bb1b4bef7d/src/fivem/Audio.ts#L6)

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `position` | [`Vector3`](Vector3.md) | `undefined` |
| `sound` | `string` | `undefined` |
| `set`? | `string` | `undefined` |
| `generateSoundId`? | `boolean` | `true` |

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

Defined in: [src/fivem/Audio.ts:27](https://github.com/nativewrappers/nativewrappers/blob/c639ec5cd28328d6b44c7ebf73de56bb1b4bef7d/src/fivem/Audio.ts#L27)

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `entity` | [`BaseEntity`](BaseEntity.md) | `undefined` |
| `sound` | `string` | `undefined` |
| `set`? | `string` | `undefined` |
| `generateSoundId`? | `boolean` | `true` |

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

Defined in: [src/fivem/Audio.ts:38](https://github.com/nativewrappers/nativewrappers/blob/c639ec5cd28328d6b44c7ebf73de56bb1b4bef7d/src/fivem/Audio.ts#L38)

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `sound` | `string` | `undefined` |
| `set`? | `string` | `undefined` |
| `generateSoundId`? | `boolean` | `true` |

#### Returns

`number`

***

### releaseSound()

```ts
static releaseSound(soundId): void
```

Defined in: [src/fivem/Audio.ts:52](https://github.com/nativewrappers/nativewrappers/blob/c639ec5cd28328d6b44c7ebf73de56bb1b4bef7d/src/fivem/Audio.ts#L52)

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

Defined in: [src/fivem/Audio.ts:60](https://github.com/nativewrappers/nativewrappers/blob/c639ec5cd28328d6b44c7ebf73de56bb1b4bef7d/src/fivem/Audio.ts#L60)

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

Defined in: [src/fivem/Audio.ts:80](https://github.com/nativewrappers/nativewrappers/blob/c639ec5cd28328d6b44c7ebf73de56bb1b4bef7d/src/fivem/Audio.ts#L80)

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

Defined in: [src/fivem/Audio.ts:48](https://github.com/nativewrappers/nativewrappers/blob/c639ec5cd28328d6b44c7ebf73de56bb1b4bef7d/src/fivem/Audio.ts#L48)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `soundId` | `number` |

#### Returns

`void`
