[@nativewrappers/fivem](../../README.md) / [server](../README.md) / Events

# Class: Events

Defined in: [src/server/Events.ts:58](https://github.com/nativewrappers/nativewrappers/blob/c6ab47d1014f341bb58fccc9d519ceb48157a741/src/server/Events.ts#L58)

## Constructors

### new Events()

```ts
new Events(): Events
```

#### Returns

[`Events`](Events.md)

## Accessors

### InvokingResource

#### Get Signature

```ts
get static InvokingResource(): string
```

Defined in: [src/server/Events.ts:67](https://github.com/nativewrappers/nativewrappers/blob/c6ab47d1014f341bb58fccc9d519ceb48157a741/src/server/Events.ts#L67)

##### Returns

`string`

## Methods

### cancel()

```ts
static cancel(): void
```

Defined in: [src/server/Events.ts:59](https://github.com/nativewrappers/nativewrappers/blob/c6ab47d1014f341bb58fccc9d519ceb48157a741/src/server/Events.ts#L59)

#### Returns

`void`

***

### on()

```ts
static on(eventName, event): void
```

Defined in: [src/server/Events.ts:85](https://github.com/nativewrappers/nativewrappers/blob/c6ab47d1014f341bb58fccc9d519ceb48157a741/src/server/Events.ts#L85)

An on wrapper that properly converts the classes

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventName` | `string` |
| `event` | [`LocalEvent`](../type-aliases/LocalEvent.md) |

#### Returns

`void`

***

### onNet()

```ts
static onNet(eventName, event): void
```

Defined in: [src/server/Events.ts:74](https://github.com/nativewrappers/nativewrappers/blob/c6ab47d1014f341bb58fccc9d519ceb48157a741/src/server/Events.ts#L74)

An onNet wrapper that properly converts the type into the correct type

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventName` | `string` |
| `event` | [`NetEvent`](../type-aliases/NetEvent.md) |

#### Returns

`void`

***

### wasCanceled()

```ts
static wasCanceled(): boolean
```

Defined in: [src/server/Events.ts:63](https://github.com/nativewrappers/nativewrappers/blob/c6ab47d1014f341bb58fccc9d519ceb48157a741/src/server/Events.ts#L63)

#### Returns

`boolean`
