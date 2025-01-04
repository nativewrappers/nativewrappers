[@nativewrappers/fivem](../../README.md) / [fivem](../README.md) / Sprite

# Class: Sprite

## Constructors

### new Sprite()

```ts
new Sprite(
   textureDict, 
   textureName, 
   pos?, 
   size?, 
   heading?, 
   color?): Sprite
```

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `textureDict` | `string` | `undefined` |
| `textureName` | `string` | `undefined` |
| `pos`? | [`Point`](Point.md) | `undefined` |
| `size`? | [`Size`](Size.md) | `undefined` |
| `heading`? | `number` | `0` |
| `color`? | [`Color`](Color.md) | `Color.White` |

#### Returns

[`Sprite`](Sprite.md)

#### Defined in

[src/fivem/ui/Sprite.ts:14](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/Sprite.ts#L14)

## Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| `color` | `public` | [`Color`](Color.md) | [src/fivem/ui/Sprite.ts:9](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/Sprite.ts#L9) |
| `heading` | `public` | `number` | [src/fivem/ui/Sprite.ts:8](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/Sprite.ts#L8) |
| `pos` | `public` | [`Point`](Point.md) | [src/fivem/ui/Sprite.ts:6](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/Sprite.ts#L6) |
| `size` | `public` | [`Size`](Size.md) | [src/fivem/ui/Sprite.ts:7](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/Sprite.ts#L7) |
| `textureName` | `public` | `string` | [src/fivem/ui/Sprite.ts:5](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/Sprite.ts#L5) |
| `visible` | `public` | `boolean` | [src/fivem/ui/Sprite.ts:10](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/Sprite.ts#L10) |

## Accessors

### IsTextureDictionaryLoaded

```ts
get IsTextureDictionaryLoaded(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/fivem/ui/Sprite.ts:51](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/Sprite.ts#L51)

***

### TextureDict

```ts
get TextureDict(): string
```

```ts
set TextureDict(v): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | `string` |

#### Returns

`string`

#### Defined in

[src/fivem/ui/Sprite.ts:47](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/Sprite.ts#L47)

## Methods

### draw()

#### draw(resolution)

```ts
draw(resolution?): void
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `resolution`? | [`Size`](Size.md) |

##### Returns

`void`

##### Defined in

[src/fivem/ui/Sprite.ts:55](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/Sprite.ts#L55)

#### draw(textureDictionary, textureName, pos, size, heading, color, loadTexture, resolution)

```ts
draw(
   textureDictionary?, 
   textureName?, 
   pos?, 
   size?, 
   heading?, 
   color?, 
   loadTexture?, 
   resolution?): void
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `textureDictionary`? | `string` |
| `textureName`? | `string` |
| `pos`? | [`Point`](Point.md) |
| `size`? | [`Size`](Size.md) |
| `heading`? | `number` |
| `color`? | [`Color`](Color.md) |
| `loadTexture`? | `boolean` |
| `resolution`? | [`Size`](Size.md) |

##### Returns

`void`

##### Defined in

[src/fivem/ui/Sprite.ts:56](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/Sprite.ts#L56)

***

### loadTextureDictionary()

```ts
loadTextureDictionary(): void
```

#### Returns

`void`

#### Defined in

[src/fivem/ui/Sprite.ts:31](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/Sprite.ts#L31)
