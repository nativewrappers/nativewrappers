[@nativewrappers/fivem](../../README.md) / [fivem](../README.md) / TaskSequence

# Class: TaskSequence

Defined in: [src/fivem/TaskSequence.ts:4](https://github.com/nativewrappers/nativewrappers/blob/c639ec5cd28328d6b44c7ebf73de56bb1b4bef7d/src/fivem/TaskSequence.ts#L4)

## Constructors

### new TaskSequence()

```ts
new TaskSequence(handle?): TaskSequence
```

Defined in: [src/fivem/TaskSequence.ts:10](https://github.com/nativewrappers/nativewrappers/blob/c639ec5cd28328d6b44c7ebf73de56bb1b4bef7d/src/fivem/TaskSequence.ts#L10)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `handle`? | `number` |

#### Returns

[`TaskSequence`](TaskSequence.md)

## Accessors

### AddTask

#### Get Signature

```ts
get AddTask(): Tasks
```

Defined in: [src/fivem/TaskSequence.ts:45](https://github.com/nativewrappers/nativewrappers/blob/c639ec5cd28328d6b44c7ebf73de56bb1b4bef7d/src/fivem/TaskSequence.ts#L45)

##### Returns

[`Tasks`](Tasks.md)

***

### Count

#### Get Signature

```ts
get Count(): number
```

Defined in: [src/fivem/TaskSequence.ts:58](https://github.com/nativewrappers/nativewrappers/blob/c639ec5cd28328d6b44c7ebf73de56bb1b4bef7d/src/fivem/TaskSequence.ts#L58)

##### Returns

`number`

***

### Handle

#### Get Signature

```ts
get Handle(): number
```

Defined in: [src/fivem/TaskSequence.ts:41](https://github.com/nativewrappers/nativewrappers/blob/c639ec5cd28328d6b44c7ebf73de56bb1b4bef7d/src/fivem/TaskSequence.ts#L41)

##### Returns

`number`

***

### IsClosed

#### Get Signature

```ts
get IsClosed(): boolean
```

Defined in: [src/fivem/TaskSequence.ts:54](https://github.com/nativewrappers/nativewrappers/blob/c639ec5cd28328d6b44c7ebf73de56bb1b4bef7d/src/fivem/TaskSequence.ts#L54)

##### Returns

`boolean`

## Methods

### close()

```ts
close(repeat): void
```

Defined in: [src/fivem/TaskSequence.ts:32](https://github.com/nativewrappers/nativewrappers/blob/c639ec5cd28328d6b44c7ebf73de56bb1b4bef7d/src/fivem/TaskSequence.ts#L32)

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `repeat` | `boolean` | `false` |

#### Returns

`void`

***

### dispose()

```ts
dispose(): void
```

Defined in: [src/fivem/TaskSequence.ts:27](https://github.com/nativewrappers/nativewrappers/blob/c639ec5cd28328d6b44c7ebf73de56bb1b4bef7d/src/fivem/TaskSequence.ts#L27)

#### Returns

`void`
