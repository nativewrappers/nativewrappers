[@nativewrappers/fivem](../../README.md) / [fivem](../README.md) / TaskSequence

# Class: TaskSequence

## Constructors

### new TaskSequence()

```ts
new TaskSequence(handle?): TaskSequence
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `handle`? | `number` |

#### Returns

[`TaskSequence`](TaskSequence.md)

#### Defined in

[src/fivem/TaskSequence.ts:10](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/TaskSequence.ts#L10)

## Accessors

### AddTask

```ts
get AddTask(): Tasks
```

#### Returns

[`Tasks`](Tasks.md)

#### Defined in

[src/fivem/TaskSequence.ts:45](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/TaskSequence.ts#L45)

***

### Count

```ts
get Count(): number
```

#### Returns

`number`

#### Defined in

[src/fivem/TaskSequence.ts:58](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/TaskSequence.ts#L58)

***

### Handle

```ts
get Handle(): number
```

#### Returns

`number`

#### Defined in

[src/fivem/TaskSequence.ts:41](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/TaskSequence.ts#L41)

***

### IsClosed

```ts
get IsClosed(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/fivem/TaskSequence.ts:54](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/TaskSequence.ts#L54)

## Methods

### close()

```ts
close(repeat): void
```

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `repeat` | `boolean` | `false` |

#### Returns

`void`

#### Defined in

[src/fivem/TaskSequence.ts:32](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/TaskSequence.ts#L32)

***

### dispose()

```ts
dispose(): void
```

#### Returns

`void`

#### Defined in

[src/fivem/TaskSequence.ts:27](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/TaskSequence.ts#L27)
