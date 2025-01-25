[@nativewrappers/fivem](../../README.md) / [fivem](../README.md) / Screen

# Class: `abstract` Screen

Defined in: [src/fivem/ui/Screen.ts:6](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/fivem/ui/Screen.ts#L6)

## Constructors

### new Screen()

```ts
new Screen(): Screen
```

#### Returns

[`Screen`](Screen.md)

## Accessors

### AspectRatio

#### Get Signature

```ts
get static AspectRatio(): number
```

Defined in: [src/fivem/ui/Screen.ts:29](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/fivem/ui/Screen.ts#L29)

##### Returns

`number`

***

### Height

#### Get Signature

```ts
get static Height(): number
```

Defined in: [src/fivem/ui/Screen.ts:25](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/fivem/ui/Screen.ts#L25)

##### Returns

`number`

***

### Resolution

#### Get Signature

```ts
get static Resolution(): Size
```

Defined in: [src/fivem/ui/Screen.ts:7](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/fivem/ui/Screen.ts#L7)

##### Returns

[`Size`](Size.md)

***

### ScaledResolution

#### Get Signature

```ts
get static ScaledResolution(): Size
```

Defined in: [src/fivem/ui/Screen.ts:12](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/fivem/ui/Screen.ts#L12)

##### Returns

[`Size`](Size.md)

***

### ScaledWidth

#### Get Signature

```ts
get static ScaledWidth(): number
```

Defined in: [src/fivem/ui/Screen.ts:21](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/fivem/ui/Screen.ts#L21)

##### Returns

`number`

***

### Width

#### Get Signature

```ts
get static Width(): number
```

Defined in: [src/fivem/ui/Screen.ts:17](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/fivem/ui/Screen.ts#L17)

##### Returns

`number`

## Methods

### displayHelpTextThisFrame()

```ts
static displayHelpTextThisFrame(message): void
```

Defined in: [src/fivem/ui/Screen.ts:45](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/fivem/ui/Screen.ts#L45)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `message` | `string` |

#### Returns

`void`

***

### showAdvancedNotification()

```ts
static showAdvancedNotification(
   message, 
   title, 
   subtitle, 
   iconSet, 
   icon, 
   bgColor, 
   flashColor, 
   blinking, 
   type, 
   showInBrief, 
   sound): Notification
```

Defined in: [src/fivem/ui/Screen.ts:72](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/fivem/ui/Screen.ts#L72)

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `message` | `string` | `undefined` |
| `title` | `string` | `undefined` |
| `subtitle` | `string` | `undefined` |
| `iconSet` | `string` | `undefined` |
| `icon` | `string` | `undefined` |
| `bgColor` | [`HudColor`](../enumerations/HudColor.md) | `HudColor.NONE` |
| `flashColor` | [`Color`](Color.md) | `Color.Transparent` |
| `blinking` | `boolean` | `false` |
| `type` | [`NotificationType`](../enumerations/NotificationType.md) | `NotificationType.Default` |
| `showInBrief` | `boolean` | `true` |
| `sound` | `boolean` | `true` |

#### Returns

[`Notification`](Notification.md)

***

### showNotification()

```ts
static showNotification(message, blinking): Notification
```

Defined in: [src/fivem/ui/Screen.ts:57](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/fivem/ui/Screen.ts#L57)

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `message` | `string` | `undefined` |
| `blinking` | `boolean` | `false` |

#### Returns

[`Notification`](Notification.md)

***

### showSubtitle()

```ts
static showSubtitle(message, duration): void
```

Defined in: [src/fivem/ui/Screen.ts:33](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/fivem/ui/Screen.ts#L33)

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `message` | `string` | `undefined` |
| `duration` | `number` | `2500` |

#### Returns

`void`

***

### worldToScreen()

```ts
static worldToScreen(position, scaleWidth): Size
```

Defined in: [src/fivem/ui/Screen.ts:114](https://github.com/nativewrappers/nativewrappers/blob/c60977197fc03a84e577475a74a7b129c71770ca/src/fivem/ui/Screen.ts#L114)

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `position` | [`Vector3`](Vector3.md) | `undefined` |
| `scaleWidth` | `boolean` | `false` |

#### Returns

[`Size`](Size.md)
