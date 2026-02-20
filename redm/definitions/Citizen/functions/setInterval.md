[@nativewrappers/fivem](../../../../README.md) / [redm/definitions/Citizen](../README.md) / setInterval

# Function: setInterval()

## Call Signature

```ts
function setInterval<T>(
   callback, 
   ms?, ...
   args?): CitizenTimer;
```

Defined in: [src/redm/definitions/Citizen.d.ts:160](https://github.com/nativewrappers/nativewrappers/blob/8fd2e00d7e048b9268f6c990b83eef252e4d6150/src/redm/definitions/Citizen.d.ts#L160)

### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `any`[] |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | (...`args`) => `void` |
| `ms?` | `number` |
| ...`args?` | `T` |

### Returns

[`CitizenTimer`](../interfaces/CitizenTimer.md)

## Call Signature

```ts
function setInterval<TArgs>(
   callback, 
   ms?, ...
   args?): Timeout;
```

Defined in: node\_modules/.pnpm/@types+node@22.13.7/node\_modules/@types/node/timers.d.ts:184

Schedules repeated execution of `callback` every `delay` milliseconds.

When `delay` is larger than `2147483647` or less than `1`, the `delay` will be
set to `1`. Non-integer delays are truncated to an integer.

If `callback` is not a function, a `TypeError` will be thrown.

This method has a custom variant for promises that is available using `timersPromises.setInterval()`.

### Type Parameters

| Type Parameter |
| ------ |
| `TArgs` *extends* `any`[] |

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | (...`args`) => `void` | The function to call when the timer elapses. |
| `ms?` | `number` | - |
| ...`args?` | `TArgs` | Optional arguments to pass when the `callback` is called. |

### Returns

`Timeout`

for use with [clearInterval](clearInterval.md)

### Since

v0.0.1

## Call Signature

```ts
function setInterval(callback, ms?): Timeout;
```

Defined in: node\_modules/.pnpm/@types+node@22.13.7/node\_modules/@types/node/timers.d.ts:191

### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | (`args`) => `void` |
| `ms?` | `number` |

### Returns

`Timeout`
