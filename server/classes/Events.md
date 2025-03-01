[@nativewrappers/fivem](../../README.md) / [server](../README.md) / Events

# Class: Events

Defined in: server/Events.d.ts:4

## Constructors

### new Events()

```ts
new Events(): Events
```

#### Returns

[`Events`](Events.md)

## Properties

| Property | Modifier | Type | Description | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="on"></a> `on` | `static` | (`eventName`: `string`, `event`: [`LocalEvent`](../type-aliases/LocalEvent.md)) => `void` | An on wrapper that properly converts the classes | server/Events.d.ts:15 |
| <a id="onnet"></a> `onNet` | `static` | (`eventName`: `string`, `event`: [`NetEvent`](../type-aliases/NetEvent.md)) => `void` | An onNet wrapper that properly converts the type into the correct type | server/Events.d.ts:11 |

## Accessors

### InvokingResource

#### Get Signature

```ts
get static InvokingResource(): string
```

Defined in: server/Events.d.ts:7

##### Returns

`string`

## Methods

### cancel()

```ts
static cancel(): void
```

Defined in: server/Events.d.ts:5

#### Returns

`void`

***

### wasCanceled()

```ts
static wasCanceled(): boolean
```

Defined in: server/Events.d.ts:6

#### Returns

`boolean`
