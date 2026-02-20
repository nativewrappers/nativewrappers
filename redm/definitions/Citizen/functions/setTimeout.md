[@nativewrappers/fivem](../../../../README.md) / [redm/definitions/Citizen](../README.md) / setTimeout

# Function: setTimeout()

## Call Signature

```ts
function setTimeout<T>(
   callback, 
   ms?, ...
   args?): CitizenTimer;
```

Defined in: [src/redm/definitions/Citizen.d.ts:153](https://github.com/nativewrappers/nativewrappers/blob/8fd2e00d7e048b9268f6c990b83eef252e4d6150/src/redm/definitions/Citizen.d.ts#L153)

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
function setTimeout<TArgs>(
   callback, 
   ms?, ...
   args?): Timeout;
```

Defined in: node\_modules/.pnpm/@types+node@22.13.7/node\_modules/@types/node/timers.d.ts:152

Schedules execution of a one-time `callback` after `delay` milliseconds.

The `callback` will likely not be invoked in precisely `delay` milliseconds.
Node.js makes no guarantees about the exact timing of when callbacks will fire,
nor of their ordering. The callback will be called as close as possible to the
time specified.

When `delay` is larger than `2147483647` or less than `1`, the `delay` will be set to `1`. Non-integer delays are truncated to an integer.

If `callback` is not a function, a `TypeError` will be thrown.

This method has a custom variant for promises that is available using `timersPromises.setTimeout()`.

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

for use with [clearTimeout](clearTimeout.md)

### Since

v0.0.1

## Call Signature

```ts
function setTimeout(callback, ms?): Timeout;
```

Defined in: node\_modules/.pnpm/@types+node@22.13.7/node\_modules/@types/node/timers.d.ts:159

### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | (`args`) => `void` |
| `ms?` | `number` |

### Returns

`Timeout`
