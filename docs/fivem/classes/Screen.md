[@nativewrappers/fivem](../../README.md) / [fivem](../README.md) / Screen

# Class: `abstract` Screen

## Constructors

### new Screen()

```ts
new Screen(): Screen
```

#### Returns

[`Screen`](Screen.md)

## Accessors

### AspectRatio

```ts
get static AspectRatio(): number
```

#### Returns

`number`

#### Defined in

[src/fivem/ui/Screen.ts:29](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/Screen.ts#L29)

***

### Height

```ts
get static Height(): number
```

#### Returns

`number`

#### Defined in

[src/fivem/ui/Screen.ts:25](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/Screen.ts#L25)

***

### Resolution

```ts
get static Resolution(): Size
```

#### Returns

[`Size`](Size.md)

#### Defined in

[src/fivem/ui/Screen.ts:7](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/Screen.ts#L7)

***

### ScaledResolution

```ts
get static ScaledResolution(): Size
```

#### Returns

[`Size`](Size.md)

#### Defined in

[src/fivem/ui/Screen.ts:12](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/Screen.ts#L12)

***

### ScaledWidth

```ts
get static ScaledWidth(): number
```

#### Returns

`number`

#### Defined in

[src/fivem/ui/Screen.ts:21](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/Screen.ts#L21)

***

### Width

```ts
get static Width(): number
```

#### Returns

`number`

#### Defined in

[src/fivem/ui/Screen.ts:17](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/Screen.ts#L17)

## Methods

### displayHelpTextThisFrame()

```ts
static displayHelpTextThisFrame(message): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `message` | `string` |

#### Returns

`void`

#### Defined in

[src/fivem/ui/Screen.ts:45](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/Screen.ts#L45)

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

#### Defined in

[src/fivem/ui/Screen.ts:72](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/Screen.ts#L72)

***

### showNotification()

```ts
static showNotification(message, blinking): Notification
```

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `message` | `string` | `undefined` |
| `blinking` | `boolean` | `false` |

#### Returns

[`Notification`](Notification.md)

#### Defined in

[src/fivem/ui/Screen.ts:57](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/Screen.ts#L57)

***

### showSubtitle()

```ts
static showSubtitle(message, duration): void
```

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `message` | `string` | `undefined` |
| `duration` | `number` | `2500` |

#### Returns

`void`

#### Defined in

[src/fivem/ui/Screen.ts:33](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/Screen.ts#L33)

***

### worldToScreen()

```ts
static worldToScreen(position, scaleWidth): Size
```

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `position` | [`Vector3`](Vector3.md) | `undefined` |
| `scaleWidth` | `boolean` | `false` |

#### Returns

[`Size`](Size.md)

#### Defined in

[src/fivem/ui/Screen.ts:114](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/ui/Screen.ts#L114)
