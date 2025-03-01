[@nativewrappers/fivem](../../README.md) / [fivem](../README.md) / Screen

# Class: `abstract` Screen

Defined in: fivem/ui/Screen.d.ts:4

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

Defined in: fivem/ui/Screen.d.ts:10

##### Returns

`number`

***

### Height

#### Get Signature

```ts
get static Height(): number
```

Defined in: fivem/ui/Screen.d.ts:9

##### Returns

`number`

***

### Resolution

#### Get Signature

```ts
get static Resolution(): Size
```

Defined in: fivem/ui/Screen.d.ts:5

##### Returns

[`Size`](Size.md)

***

### ScaledResolution

#### Get Signature

```ts
get static ScaledResolution(): Size
```

Defined in: fivem/ui/Screen.d.ts:6

##### Returns

[`Size`](Size.md)

***

### ScaledWidth

#### Get Signature

```ts
get static ScaledWidth(): number
```

Defined in: fivem/ui/Screen.d.ts:8

##### Returns

`number`

***

### Width

#### Get Signature

```ts
get static Width(): number
```

Defined in: fivem/ui/Screen.d.ts:7

##### Returns

`number`

## Methods

### displayHelpTextThisFrame()

```ts
static displayHelpTextThisFrame(message): void
```

Defined in: fivem/ui/Screen.d.ts:12

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
   bgColor?, 
   flashColor?, 
   blinking?, 
   type?, 
   showInBrief?, 
   sound?): Notification
```

Defined in: fivem/ui/Screen.d.ts:14

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `message` | `string` |
| `title` | `string` |
| `subtitle` | `string` |
| `iconSet` | `string` |
| `icon` | `string` |
| `bgColor`? | [`HudColor`](../enumerations/HudColor.md) |
| `flashColor`? | `any` |
| `blinking`? | `boolean` |
| `type`? | [`NotificationType`](../enumerations/NotificationType.md) |
| `showInBrief`? | `boolean` |
| `sound`? | `boolean` |

#### Returns

[`Notification`](Notification.md)

***

### showNotification()

```ts
static showNotification(message, blinking?): Notification
```

Defined in: fivem/ui/Screen.d.ts:13

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `message` | `string` |
| `blinking`? | `boolean` |

#### Returns

[`Notification`](Notification.md)

***

### showSubtitle()

```ts
static showSubtitle(message, duration?): void
```

Defined in: fivem/ui/Screen.d.ts:11

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `message` | `string` |
| `duration`? | `number` |

#### Returns

`void`

***

### worldToScreen()

```ts
static worldToScreen(position, scaleWidth?): Size
```

Defined in: fivem/ui/Screen.d.ts:15

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `position` | `Vector3` |
| `scaleWidth`? | `boolean` |

#### Returns

[`Size`](Size.md)
