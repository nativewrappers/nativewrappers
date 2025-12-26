[@nativewrappers/fivem](../../../../README.md) / [fivem/ui/Screen](../README.md) / Screen

# Abstract Class: Screen

Defined in: lib/fivem/ui/Screen.d.ts:7

## Constructors

### Constructor

```ts
new Screen(): Screen;
```

#### Returns

`Screen`

## Accessors

### AspectRatio

#### Get Signature

```ts
get static AspectRatio(): number;
```

Defined in: lib/fivem/ui/Screen.d.ts:13

##### Returns

`number`

***

### Height

#### Get Signature

```ts
get static Height(): number;
```

Defined in: lib/fivem/ui/Screen.d.ts:12

##### Returns

`number`

***

### Resolution

#### Get Signature

```ts
get static Resolution(): Size;
```

Defined in: lib/fivem/ui/Screen.d.ts:8

##### Returns

[`Size`](../../../utils/Size/classes/Size.md)

***

### ScaledResolution

#### Get Signature

```ts
get static ScaledResolution(): Size;
```

Defined in: lib/fivem/ui/Screen.d.ts:9

##### Returns

[`Size`](../../../utils/Size/classes/Size.md)

***

### ScaledWidth

#### Get Signature

```ts
get static ScaledWidth(): number;
```

Defined in: lib/fivem/ui/Screen.d.ts:11

##### Returns

`number`

***

### Width

#### Get Signature

```ts
get static Width(): number;
```

Defined in: lib/fivem/ui/Screen.d.ts:10

##### Returns

`number`

## Methods

### displayHelpTextThisFrame()

```ts
static displayHelpTextThisFrame(message): void;
```

Defined in: lib/fivem/ui/Screen.d.ts:15

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
   sound?): Notification;
```

Defined in: lib/fivem/ui/Screen.d.ts:17

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `message` | `string` |
| `title` | `string` |
| `subtitle` | `string` |
| `iconSet` | `string` |
| `icon` | `string` |
| `bgColor?` | [`HudColor`](../../../enums/HudColor/enumerations/HudColor.md) |
| `flashColor?` | `any` |
| `blinking?` | `boolean` |
| `type?` | [`NotificationType`](../../../enums/NotificationType/enumerations/NotificationType.md) |
| `showInBrief?` | `boolean` |
| `sound?` | `boolean` |

#### Returns

[`Notification`](../../Notification/classes/Notification.md)

***

### showNotification()

```ts
static showNotification(message, blinking?): Notification;
```

Defined in: lib/fivem/ui/Screen.d.ts:16

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `message` | `string` |
| `blinking?` | `boolean` |

#### Returns

[`Notification`](../../Notification/classes/Notification.md)

***

### showSubtitle()

```ts
static showSubtitle(message, duration?): void;
```

Defined in: lib/fivem/ui/Screen.d.ts:14

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `message` | `string` |
| `duration?` | `number` |

#### Returns

`void`

***

### worldToScreen()

```ts
static worldToScreen(position, scaleWidth?): Size;
```

Defined in: lib/fivem/ui/Screen.d.ts:18

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `position` | `Vector3` |
| `scaleWidth?` | `boolean` |

#### Returns

[`Size`](../../../utils/Size/classes/Size.md)
