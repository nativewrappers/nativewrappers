[@nativewrappers/fivem](../../README.md) / [fivem](../README.md) / Sprite

# Class: Sprite

Defined in: [src/fivem/ui/Sprite.ts:4](https://github.com/nativewrappers/nativewrappers/blob/9823dedfda755d69570435af704d4d60473d3d5a/src/fivem/ui/Sprite.ts#L4)

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

Defined in: [src/fivem/ui/Sprite.ts:14](https://github.com/nativewrappers/nativewrappers/blob/9823dedfda755d69570435af704d4d60473d3d5a/src/fivem/ui/Sprite.ts#L14)

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

## Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="color-1"></a> `color` | `public` | [`Color`](Color.md) | [src/fivem/ui/Sprite.ts:9](https://github.com/nativewrappers/nativewrappers/blob/9823dedfda755d69570435af704d4d60473d3d5a/src/fivem/ui/Sprite.ts#L9) |
| <a id="heading-1"></a> `heading` | `public` | `number` | [src/fivem/ui/Sprite.ts:8](https://github.com/nativewrappers/nativewrappers/blob/9823dedfda755d69570435af704d4d60473d3d5a/src/fivem/ui/Sprite.ts#L8) |
| <a id="pos-1"></a> `pos` | `public` | [`Point`](Point.md) | [src/fivem/ui/Sprite.ts:6](https://github.com/nativewrappers/nativewrappers/blob/9823dedfda755d69570435af704d4d60473d3d5a/src/fivem/ui/Sprite.ts#L6) |
| <a id="size-1"></a> `size` | `public` | [`Size`](Size.md) | [src/fivem/ui/Sprite.ts:7](https://github.com/nativewrappers/nativewrappers/blob/9823dedfda755d69570435af704d4d60473d3d5a/src/fivem/ui/Sprite.ts#L7) |
| <a id="texturename-1"></a> `textureName` | `public` | `string` | [src/fivem/ui/Sprite.ts:5](https://github.com/nativewrappers/nativewrappers/blob/9823dedfda755d69570435af704d4d60473d3d5a/src/fivem/ui/Sprite.ts#L5) |
| <a id="visible"></a> `visible` | `public` | `boolean` | [src/fivem/ui/Sprite.ts:10](https://github.com/nativewrappers/nativewrappers/blob/9823dedfda755d69570435af704d4d60473d3d5a/src/fivem/ui/Sprite.ts#L10) |

## Accessors

### IsTextureDictionaryLoaded

#### Get Signature

```ts
get IsTextureDictionaryLoaded(): boolean
```

Defined in: [src/fivem/ui/Sprite.ts:51](https://github.com/nativewrappers/nativewrappers/blob/9823dedfda755d69570435af704d4d60473d3d5a/src/fivem/ui/Sprite.ts#L51)

##### Returns

`boolean`

***

### TextureDict

#### Get Signature

```ts
get TextureDict(): string
```

Defined in: [src/fivem/ui/Sprite.ts:47](https://github.com/nativewrappers/nativewrappers/blob/9823dedfda755d69570435af704d4d60473d3d5a/src/fivem/ui/Sprite.ts#L47)

##### Returns

`string`

#### Set Signature

```ts
set TextureDict(v): void
```

Defined in: [src/fivem/ui/Sprite.ts:40](https://github.com/nativewrappers/nativewrappers/blob/9823dedfda755d69570435af704d4d60473d3d5a/src/fivem/ui/Sprite.ts#L40)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | `string` |

##### Returns

`void`

## Methods

### draw()

#### Call Signature

```ts
draw(resolution?): void
```

Defined in: [src/fivem/ui/Sprite.ts:55](https://github.com/nativewrappers/nativewrappers/blob/9823dedfda755d69570435af704d4d60473d3d5a/src/fivem/ui/Sprite.ts#L55)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `resolution`? | [`Size`](Size.md) |

##### Returns

`void`

#### Call Signature

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

Defined in: [src/fivem/ui/Sprite.ts:56](https://github.com/nativewrappers/nativewrappers/blob/9823dedfda755d69570435af704d4d60473d3d5a/src/fivem/ui/Sprite.ts#L56)

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

***

### loadTextureDictionary()

```ts
loadTextureDictionary(): void
```

Defined in: [src/fivem/ui/Sprite.ts:31](https://github.com/nativewrappers/nativewrappers/blob/9823dedfda755d69570435af704d4d60473d3d5a/src/fivem/ui/Sprite.ts#L31)

#### Returns

`void`
