[@nativewrappers/fivem](../../../README.md) / [fivem/TaskSequence](../README.md) / TaskSequence

# Class: TaskSequence

Defined in: lib/fivem/TaskSequence.d.ts:2

## Constructors

### Constructor

```ts
new TaskSequence(handle?): TaskSequence;
```

Defined in: lib/fivem/TaskSequence.d.ts:7

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `handle?` | `number` |

#### Returns

`TaskSequence`

## Accessors

### AddTask

#### Get Signature

```ts
get AddTask(): Tasks;
```

Defined in: lib/fivem/TaskSequence.d.ts:12

##### Returns

[`Tasks`](../../Tasks/classes/Tasks.md)

***

### Count

#### Get Signature

```ts
get Count(): number;
```

Defined in: lib/fivem/TaskSequence.d.ts:14

##### Returns

`number`

***

### Handle

#### Get Signature

```ts
get Handle(): number;
```

Defined in: lib/fivem/TaskSequence.d.ts:11

##### Returns

`number`

***

### IsClosed

#### Get Signature

```ts
get IsClosed(): boolean;
```

Defined in: lib/fivem/TaskSequence.d.ts:13

##### Returns

`boolean`

## Methods

### close()

```ts
close(repeat?): void;
```

Defined in: lib/fivem/TaskSequence.d.ts:10

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `repeat?` | `boolean` |

#### Returns

`void`

***

### dispose()

```ts
dispose(): void;
```

Defined in: lib/fivem/TaskSequence.d.ts:9

#### Returns

`void`
