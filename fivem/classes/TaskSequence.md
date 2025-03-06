[@nativewrappers/fivem](../../README.md) / [fivem](../README.md) / TaskSequence

# Class: TaskSequence

Defined in: fivem/TaskSequence.d.ts:2

## Constructors

### new TaskSequence()

```ts
new TaskSequence(handle?): TaskSequence
```

Defined in: fivem/TaskSequence.d.ts:7

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

Defined in: fivem/TaskSequence.d.ts:12

##### Returns

[`Tasks`](Tasks.md)

***

### Count

#### Get Signature

```ts
get Count(): number
```

Defined in: fivem/TaskSequence.d.ts:14

##### Returns

`number`

***

### Handle

#### Get Signature

```ts
get Handle(): number
```

Defined in: fivem/TaskSequence.d.ts:11

##### Returns

`number`

***

### IsClosed

#### Get Signature

```ts
get IsClosed(): boolean
```

Defined in: fivem/TaskSequence.d.ts:13

##### Returns

`boolean`

## Methods

### close()

```ts
close(repeat?): void
```

Defined in: fivem/TaskSequence.d.ts:10

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `repeat`? | `boolean` |

#### Returns

`void`

***

### dispose()

```ts
dispose(): void
```

Defined in: fivem/TaskSequence.d.ts:9

#### Returns

`void`
