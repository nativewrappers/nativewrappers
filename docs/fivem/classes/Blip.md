[@nativewrappers/fivem](../../README.md) / [fivem](../README.md) / Blip

# Class: Blip

Defined in: [src/fivem/Blip.ts:5](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/fivem/Blip.ts#L5)

## Constructors

### new Blip()

```ts
new Blip(handle): Blip
```

Defined in: [src/fivem/Blip.ts:8](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/fivem/Blip.ts#L8)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `handle` | `number` |

#### Returns

[`Blip`](Blip.md)

## Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="handle-1"></a> `handle` | `protected` | `number` | [src/fivem/Blip.ts:6](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/fivem/Blip.ts#L6) |

## Accessors

### Alpha

#### Get Signature

```ts
get Alpha(): number
```

Defined in: [src/fivem/Blip.ts:36](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/fivem/Blip.ts#L36)

##### Returns

`number`

#### Set Signature

```ts
set Alpha(alpha): void
```

Defined in: [src/fivem/Blip.ts:40](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/fivem/Blip.ts#L40)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `alpha` | `number` |

##### Returns

`void`

***

### Color

#### Get Signature

```ts
get Color(): BlipColor
```

Defined in: [src/fivem/Blip.ts:52](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/fivem/Blip.ts#L52)

##### Returns

[`BlipColor`](../enumerations/BlipColor.md)

#### Set Signature

```ts
set Color(color): void
```

Defined in: [src/fivem/Blip.ts:56](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/fivem/Blip.ts#L56)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `color` | [`BlipColor`](../enumerations/BlipColor.md) |

##### Returns

`void`

***

### Display

#### Set Signature

```ts
set Display(display): void
```

Defined in: [src/fivem/Blip.ts:68](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/fivem/Blip.ts#L68)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `display` | `number` |

##### Returns

`void`

***

### Entity

#### Get Signature

```ts
get Entity(): null | BaseEntity
```

Defined in: [src/fivem/Blip.ts:82](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/fivem/Blip.ts#L82)

##### Returns

`null` \| [`BaseEntity`](BaseEntity.md)

***

### Handle

#### Get Signature

```ts
get Handle(): number
```

Defined in: [src/fivem/Blip.ts:12](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/fivem/Blip.ts#L12)

##### Returns

`number`

***

### IsCrew

#### Set Signature

```ts
set IsCrew(crew): void
```

Defined in: [src/fivem/Blip.ts:102](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/fivem/Blip.ts#L102)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `crew` | `boolean` |

##### Returns

`void`

***

### IsFlashing

#### Get Signature

```ts
get IsFlashing(): boolean
```

Defined in: [src/fivem/Blip.ts:106](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/fivem/Blip.ts#L106)

##### Returns

`boolean`

#### Set Signature

```ts
set IsFlashing(flashing): void
```

Defined in: [src/fivem/Blip.ts:110](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/fivem/Blip.ts#L110)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `flashing` | `boolean` |

##### Returns

`void`

***

### IsFriend

#### Set Signature

```ts
set IsFriend(friend): void
```

Defined in: [src/fivem/Blip.ts:98](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/fivem/Blip.ts#L98)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `friend` | `boolean` |

##### Returns

`void`

***

### IsFriendly

#### Set Signature

```ts
set IsFriendly(friendly): void
```

Defined in: [src/fivem/Blip.ts:94](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/fivem/Blip.ts#L94)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `friendly` | `boolean` |

##### Returns

`void`

***

### IsOnMinimap

#### Get Signature

```ts
get IsOnMinimap(): boolean
```

Defined in: [src/fivem/Blip.ts:114](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/fivem/Blip.ts#L114)

##### Returns

`boolean`

***

### IsShortRange

#### Get Signature

```ts
get IsShortRange(): boolean
```

Defined in: [src/fivem/Blip.ts:118](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/fivem/Blip.ts#L118)

##### Returns

`boolean`

#### Set Signature

```ts
set IsShortRange(shortRange): void
```

Defined in: [src/fivem/Blip.ts:122](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/fivem/Blip.ts#L122)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `shortRange` | `boolean` |

##### Returns

`void`

***

### Name

#### Set Signature

```ts
set Name(name): void
```

Defined in: [src/fivem/Blip.ts:72](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/fivem/Blip.ts#L72)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |

##### Returns

`void`

***

### NumberLabel

#### Set Signature

```ts
set NumberLabel(number): void
```

Defined in: [src/fivem/Blip.ts:48](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/fivem/Blip.ts#L48)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `number` | `number` |

##### Returns

`void`

***

### Position

#### Get Signature

```ts
get Position(): Vector3
```

Defined in: [src/fivem/Blip.ts:16](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/fivem/Blip.ts#L16)

##### Returns

[`Vector3`](Vector3.md)

#### Set Signature

```ts
set Position(location): void
```

Defined in: [src/fivem/Blip.ts:20](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/fivem/Blip.ts#L20)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `location` | [`Vector3`](Vector3.md) |

##### Returns

`void`

***

### Priority

#### Set Signature

```ts
set Priority(priority): void
```

Defined in: [src/fivem/Blip.ts:44](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/fivem/Blip.ts#L44)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `priority` | `number` |

##### Returns

`void`

***

### Rotation

#### Set Signature

```ts
set Rotation(rotation): void
```

Defined in: [src/fivem/Blip.ts:24](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/fivem/Blip.ts#L24)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `rotation` | `number` |

##### Returns

`void`

***

### Scale

#### Set Signature

```ts
set Scale(scale): void
```

Defined in: [src/fivem/Blip.ts:28](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/fivem/Blip.ts#L28)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `scale` | `number` |

##### Returns

`void`

***

### ShowHeadingIndicator

#### Set Signature

```ts
set ShowHeadingIndicator(show): void
```

Defined in: [src/fivem/Blip.ts:86](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/fivem/Blip.ts#L86)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `show` | `boolean` |

##### Returns

`void`

***

### ShowRoute

#### Set Signature

```ts
set ShowRoute(show): void
```

Defined in: [src/fivem/Blip.ts:90](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/fivem/Blip.ts#L90)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `show` | `boolean` |

##### Returns

`void`

***

### Sprite

#### Get Signature

```ts
get Sprite(): BlipSprite
```

Defined in: [src/fivem/Blip.ts:60](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/fivem/Blip.ts#L60)

##### Returns

[`BlipSprite`](../enumerations/BlipSprite.md)

#### Set Signature

```ts
set Sprite(sprite): void
```

Defined in: [src/fivem/Blip.ts:64](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/fivem/Blip.ts#L64)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `sprite` | [`BlipSprite`](../enumerations/BlipSprite.md) |

##### Returns

`void`

***

### Type

#### Get Signature

```ts
get Type(): number
```

Defined in: [src/fivem/Blip.ts:32](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/fivem/Blip.ts#L32)

##### Returns

`number`

## Methods

### delete()

```ts
delete(): void
```

Defined in: [src/fivem/Blip.ts:130](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/fivem/Blip.ts#L130)

#### Returns

`void`

***

### exists()

```ts
exists(): boolean
```

Defined in: [src/fivem/Blip.ts:136](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/fivem/Blip.ts#L136)

#### Returns

`boolean`

***

### removeNumberLabel()

```ts
removeNumberLabel(): void
```

Defined in: [src/fivem/Blip.ts:126](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/fivem/Blip.ts#L126)

#### Returns

`void`

***

### setNameToPlayerName()

```ts
setNameToPlayerName(player): void
```

Defined in: [src/fivem/Blip.ts:78](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/fivem/Blip.ts#L78)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `player` | [`Player`](Player.md) |

#### Returns

`void`
