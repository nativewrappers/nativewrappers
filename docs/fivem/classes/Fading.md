[@nativewrappers/fivem](../../README.md) / [fivem](../README.md) / Fading

# Class: `abstract` Fading

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

```ts
get static IsFadedIn(): boolean
```

Gets whether the screen is faded in

#### Returns

`boolean`

True or false

#### Defined in

[src/fivem/ui/Fading.ts:10](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/Fading.ts#L10)

***

### IsFadedOut

```ts
get static IsFadedOut(): boolean
```

Gets whether the screen is faded out

#### Returns

`boolean`

True or false

#### Defined in

[src/fivem/ui/Fading.ts:19](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/Fading.ts#L19)

***

### IsFadingIn

```ts
get static IsFadingIn(): boolean
```

Gets whether the screen is currently fading in

#### Returns

`boolean`

True or false

#### Defined in

[src/fivem/ui/Fading.ts:28](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/Fading.ts#L28)

***

### IsFadingOut

```ts
get static IsFadingOut(): boolean
```

Gets whether the screen is currently fading out

#### Returns

`boolean`

True or false

#### Defined in

[src/fivem/ui/Fading.ts:37](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/Fading.ts#L37)

## Methods

### fadeIn()

```ts
static fadeIn(duration): Promise<void>
```

Fade in the screen for a certain duration.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `duration` | `number` | Time to fade in |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/fivem/ui/Fading.ts:46](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/Fading.ts#L46)

***

### fadeOut()

```ts
static fadeOut(duration): Promise<void>
```

Fade out the screen for a certain duration.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `duration` | `number` | Time to fade out |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/fivem/ui/Fading.ts:64](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/Fading.ts#L64)
