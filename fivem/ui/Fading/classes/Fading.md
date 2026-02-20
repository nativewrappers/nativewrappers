[@nativewrappers/fivem](../../../../README.md) / [fivem/ui/Fading](../README.md) / Fading

# Abstract Class: Fading

Defined in: lib/fivem/ui/Fading.d.ts:4

Static class for screen fading

## Constructors

### Constructor

```ts
new Fading(): Fading;
```

#### Returns

`Fading`

## Accessors

### IsFadedIn

#### Get Signature

```ts
get static IsFadedIn(): boolean;
```

Defined in: lib/fivem/ui/Fading.d.ts:10

Gets whether the screen is faded in

##### Returns

`boolean`

True or false

***

### IsFadedOut

#### Get Signature

```ts
get static IsFadedOut(): boolean;
```

Defined in: lib/fivem/ui/Fading.d.ts:16

Gets whether the screen is faded out

##### Returns

`boolean`

True or false

***

### IsFadingIn

#### Get Signature

```ts
get static IsFadingIn(): boolean;
```

Defined in: lib/fivem/ui/Fading.d.ts:22

Gets whether the screen is currently fading in

##### Returns

`boolean`

True or false

***

### IsFadingOut

#### Get Signature

```ts
get static IsFadingOut(): boolean;
```

Defined in: lib/fivem/ui/Fading.d.ts:28

Gets whether the screen is currently fading out

##### Returns

`boolean`

True or false

## Methods

### fadeIn()

```ts
static fadeIn(duration): Promise<void>;
```

Defined in: lib/fivem/ui/Fading.d.ts:34

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
static fadeOut(duration): Promise<void>;
```

Defined in: lib/fivem/ui/Fading.d.ts:40

Fade out the screen for a certain duration.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `duration` | `number` | Time to fade out |

#### Returns

`Promise`\<`void`\>
