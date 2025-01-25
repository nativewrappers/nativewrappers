[@nativewrappers/fivem](../../README.md) / [fivem](../README.md) / Fading

# Class: `abstract` Fading

Defined in: [src/fivem/ui/Fading.ts:4](https://github.com/nativewrappers/nativewrappers/blob/99c881fe3bb9acc58d25c55399e7f11bef9ab7c6/src/fivem/ui/Fading.ts#L4)

Static class for screen fading

## Constructors

### new Fading()

```ts
new Fading(): Fading
```

#### Returns

[`Fading`](Fading.md)

## Accessors

### IsFadedIn

#### Get Signature

```ts
get static IsFadedIn(): boolean
```

Defined in: [src/fivem/ui/Fading.ts:10](https://github.com/nativewrappers/nativewrappers/blob/99c881fe3bb9acc58d25c55399e7f11bef9ab7c6/src/fivem/ui/Fading.ts#L10)

Gets whether the screen is faded in

##### Returns

`boolean`

True or false

***

### IsFadedOut

#### Get Signature

```ts
get static IsFadedOut(): boolean
```

Defined in: [src/fivem/ui/Fading.ts:19](https://github.com/nativewrappers/nativewrappers/blob/99c881fe3bb9acc58d25c55399e7f11bef9ab7c6/src/fivem/ui/Fading.ts#L19)

Gets whether the screen is faded out

##### Returns

`boolean`

True or false

***

### IsFadingIn

#### Get Signature

```ts
get static IsFadingIn(): boolean
```

Defined in: [src/fivem/ui/Fading.ts:28](https://github.com/nativewrappers/nativewrappers/blob/99c881fe3bb9acc58d25c55399e7f11bef9ab7c6/src/fivem/ui/Fading.ts#L28)

Gets whether the screen is currently fading in

##### Returns

`boolean`

True or false

***

### IsFadingOut

#### Get Signature

```ts
get static IsFadingOut(): boolean
```

Defined in: [src/fivem/ui/Fading.ts:37](https://github.com/nativewrappers/nativewrappers/blob/99c881fe3bb9acc58d25c55399e7f11bef9ab7c6/src/fivem/ui/Fading.ts#L37)

Gets whether the screen is currently fading out

##### Returns

`boolean`

True or false

## Methods

### fadeIn()

```ts
static fadeIn(duration): Promise<void>
```

Defined in: [src/fivem/ui/Fading.ts:46](https://github.com/nativewrappers/nativewrappers/blob/99c881fe3bb9acc58d25c55399e7f11bef9ab7c6/src/fivem/ui/Fading.ts#L46)

Fade in the screen for a certain duration.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `duration` | `number` | Time to fade in |

#### Returns

`Promise`\<`void`\>

***

### fadeOut()

```ts
static fadeOut(duration): Promise<void>
```

Defined in: [src/fivem/ui/Fading.ts:64](https://github.com/nativewrappers/nativewrappers/blob/99c881fe3bb9acc58d25c55399e7f11bef9ab7c6/src/fivem/ui/Fading.ts#L64)

Fade out the screen for a certain duration.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `duration` | `number` | Time to fade out |

#### Returns

`Promise`\<`void`\>
