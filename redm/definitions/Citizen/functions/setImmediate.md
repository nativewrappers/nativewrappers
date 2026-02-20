[@nativewrappers/fivem](../../../../README.md) / [redm/definitions/Citizen](../README.md) / setImmediate

# Function: setImmediate()

## Call Signature

```ts
function setImmediate<T>(callback, ...args): CitizenImmediate;
```

Defined in: [src/redm/definitions/Citizen.d.ts:167](https://github.com/nativewrappers/nativewrappers/blob/8fd2e00d7e048b9268f6c990b83eef252e4d6150/src/redm/definitions/Citizen.d.ts#L167)

### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `any`[] |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | (...`args`) => `void` |
| ...`args` | `T` |

### Returns

[`CitizenImmediate`](../type-aliases/CitizenImmediate.md)

## Call Signature

```ts
function setImmediate<TArgs>(callback, ...args): Immediate;
```

Defined in: node\_modules/.pnpm/@types+node@22.13.7/node\_modules/@types/node/timers.d.ts:219

Schedules the "immediate" execution of the `callback` after I/O events'
callbacks.

When multiple calls to `setImmediate()` are made, the `callback` functions are
queued for execution in the order in which they are created. The entire callback
queue is processed every event loop iteration. If an immediate timer is queued
from inside an executing callback, that timer will not be triggered until the
next event loop iteration.

If `callback` is not a function, a `TypeError` will be thrown.

This method has a custom variant for promises that is available using `timersPromises.setImmediate()`.

### Type Parameters

| Type Parameter |
| ------ |
| `TArgs` *extends* `any`[] |

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | (...`args`) => `void` | The function to call at the end of this turn of the Node.js `Event Loop` |
| ...`args` | `TArgs` | Optional arguments to pass when the `callback` is called. |

### Returns

`Immediate`

for use with [clearImmediate](clearImmediate.md)

### Since

v0.9.1

## Call Signature

```ts
function setImmediate(callback): Immediate;
```

Defined in: node\_modules/.pnpm/@types+node@22.13.7/node\_modules/@types/node/timers.d.ts:225

### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | (`args`) => `void` |

### Returns

`Immediate`
