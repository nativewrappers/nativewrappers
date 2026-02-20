[@nativewrappers/fivem](../../../../README.md) / [fivem/ui/Sprite](../README.md) / Sprite

# Class: Sprite

Defined in: lib/fivem/ui/Sprite.d.ts:4

## Constructors

### Constructor

```ts
new Sprite(
   textureDict, 
   textureName, 
   pos?, 
   size?, 
   heading?, 
   color?): Sprite;
```

Defined in: lib/fivem/ui/Sprite.d.ts:12

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `textureDict` | `string` |
| `textureName` | `string` |
| `pos?` | [`Point`](../../../utils/Point/classes/Point.md) |
| `size?` | [`Size`](../../../utils/Size/classes/Size.md) |
| `heading?` | `number` |
| `color?` | `any` |

#### Returns

`Sprite`

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="color"></a> `color` | `Color` | lib/fivem/ui/Sprite.d.ts:9 |
| <a id="heading"></a> `heading` | `number` | lib/fivem/ui/Sprite.d.ts:8 |
| <a id="pos"></a> `pos` | [`Point`](../../../utils/Point/classes/Point.md) | lib/fivem/ui/Sprite.d.ts:6 |
| <a id="size"></a> `size` | [`Size`](../../../utils/Size/classes/Size.md) | lib/fivem/ui/Sprite.d.ts:7 |
| <a id="texturename"></a> `textureName` | `string` | lib/fivem/ui/Sprite.d.ts:5 |
| <a id="visible"></a> `visible` | `boolean` | lib/fivem/ui/Sprite.d.ts:10 |

## Accessors

### IsTextureDictionaryLoaded

#### Get Signature

```ts
get IsTextureDictionaryLoaded(): boolean;
```

Defined in: lib/fivem/ui/Sprite.d.ts:16

##### Returns

`boolean`

***

### TextureDict

#### Get Signature

```ts
get TextureDict(): string;
```

Defined in: lib/fivem/ui/Sprite.d.ts:15

##### Returns

`string`

#### Set Signature

```ts
set TextureDict(v): void;
```

Defined in: lib/fivem/ui/Sprite.d.ts:14

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
draw(resolution?): void;
```

Defined in: lib/fivem/ui/Sprite.d.ts:17

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `resolution?` | [`Size`](../../../utils/Size/classes/Size.md) |

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
   resolution?): void;
```

Defined in: lib/fivem/ui/Sprite.d.ts:18

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `textureDictionary?` | `string` |
| `textureName?` | `string` |
| `pos?` | [`Point`](../../../utils/Point/classes/Point.md) |
| `size?` | [`Size`](../../../utils/Size/classes/Size.md) |
| `heading?` | `number` |
| `color?` | `any` |
| `loadTexture?` | `boolean` |
| `resolution?` | [`Size`](../../../utils/Size/classes/Size.md) |

##### Returns

`void`

***

### loadTextureDictionary()

```ts
loadTextureDictionary(): void;
```

Defined in: lib/fivem/ui/Sprite.d.ts:13

#### Returns

`void`
