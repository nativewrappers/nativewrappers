[@nativewrappers/fivem](../../../../README.md) / [redm/definitions/Citizen](../README.md) / Console

# Interface: Console

Defined in: [src/redm/definitions/Citizen.d.ts:187](https://github.com/nativewrappers/nativewrappers/blob/8fd2e00d7e048b9268f6c990b83eef252e4d6150/src/redm/definitions/Citizen.d.ts#L187)

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="console"></a> `Console` | `ConsoleConstructor` | node\_modules/.pnpm/@types+node@22.13.7/node\_modules/@types/node/console.d.ts:68 |

## Methods

### assert()

#### Call Signature

```ts
assert(condition?, ...data?): void;
```

Defined in: [src/redm/definitions/Citizen.d.ts:188](https://github.com/nativewrappers/nativewrappers/blob/8fd2e00d7e048b9268f6c990b83eef252e4d6150/src/redm/definitions/Citizen.d.ts#L188)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `condition?` | `boolean` |
| ...`data?` | `any`[] |

##### Returns

`void`

#### Call Signature

```ts
assert(
   value, 
   message?, ...
   optionalParams?): void;
```

Defined in: node\_modules/.pnpm/@types+node@22.13.7/node\_modules/@types/node/console.d.ts:90

`console.assert()` writes a message if `value` is [falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy) or omitted. It only
writes a message and does not otherwise affect execution. The output always
starts with `"Assertion failed"`. If provided, `message` is formatted using
[`util.format()`](https://nodejs.org/docs/latest-v22.x/api/util.html#utilformatformat-args).

If `value` is [truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy), nothing happens.

```js
console.assert(true, 'does nothing');

console.assert(false, 'Whoops %s work', 'didn\'t');
// Assertion failed: Whoops didn't work

console.assert();
// Assertion failed
```

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `any` | The value tested for being truthy. |
| `message?` | `string` | All arguments besides `value` are used as error message. |
| ...`optionalParams?` | `any`[] | - |

##### Returns

`void`

##### Since

v0.1.101

***

### clear()

```ts
clear(): void;
```

Defined in: node\_modules/.pnpm/@types+node@22.13.7/node\_modules/@types/node/console.d.ts:101

When `stdout` is a TTY, calling `console.clear()` will attempt to clear the
TTY. When `stdout` is not a TTY, this method does nothing.

The specific operation of `console.clear()` can vary across operating systems
and terminal types. For most Linux operating systems, `console.clear()` operates similarly to the `clear` shell command. On Windows, `console.clear()` will clear only the output in the
current terminal viewport for the Node.js
binary.

#### Returns

`void`

#### Since

v8.3.0

***

### count()

#### Call Signature

```ts
count(label?): void;
```

Defined in: [src/redm/definitions/Citizen.d.ts:190](https://github.com/nativewrappers/nativewrappers/blob/8fd2e00d7e048b9268f6c990b83eef252e4d6150/src/redm/definitions/Citizen.d.ts#L190)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `label?` | `string` |

##### Returns

`void`

#### Call Signature

```ts
count(label?): void;
```

Defined in: node\_modules/.pnpm/@types+node@22.13.7/node\_modules/@types/node/console.d.ts:130

Maintains an internal counter specific to `label` and outputs to `stdout` the
number of times `console.count()` has been called with the given `label`.

```js
> console.count()
default: 1
undefined
> console.count('default')
default: 2
undefined
> console.count('abc')
abc: 1
undefined
> console.count('xyz')
xyz: 1
undefined
> console.count('abc')
abc: 2
undefined
> console.count()
default: 3
undefined
>
```

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `label?` | `string` | The display label for the counter. |

##### Returns

`void`

##### Since

v8.3.0

***

### countReset()

#### Call Signature

```ts
countReset(label?): void;
```

Defined in: [src/redm/definitions/Citizen.d.ts:191](https://github.com/nativewrappers/nativewrappers/blob/8fd2e00d7e048b9268f6c990b83eef252e4d6150/src/redm/definitions/Citizen.d.ts#L191)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `label?` | `string` |

##### Returns

`void`

#### Call Signature

```ts
countReset(label?): void;
```

Defined in: node\_modules/.pnpm/@types+node@22.13.7/node\_modules/@types/node/console.d.ts:148

Resets the internal counter specific to `label`.

```js
> console.count('abc');
abc: 1
undefined
> console.countReset('abc');
undefined
> console.count('abc');
abc: 1
undefined
>
```

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `label?` | `string` | The display label for the counter. |

##### Returns

`void`

##### Since

v8.3.0

***

### debug()

#### Call Signature

```ts
debug(...data): void;
```

Defined in: [src/redm/definitions/Citizen.d.ts:192](https://github.com/nativewrappers/nativewrappers/blob/8fd2e00d7e048b9268f6c990b83eef252e4d6150/src/redm/definitions/Citizen.d.ts#L192)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`data` | `any`[] |

##### Returns

`void`

#### Call Signature

```ts
debug(message?, ...optionalParams?): void;
```

Defined in: node\_modules/.pnpm/@types+node@22.13.7/node\_modules/@types/node/console.d.ts:153

The `console.debug()` function is an alias for [log](#log).

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `message?` | `any` |
| ...`optionalParams?` | `any`[] |

##### Returns

`void`

##### Since

v8.0.0

***

### dir()

#### Call Signature

```ts
dir(item?, options?): void;
```

Defined in: [src/redm/definitions/Citizen.d.ts:193](https://github.com/nativewrappers/nativewrappers/blob/8fd2e00d7e048b9268f6c990b83eef252e4d6150/src/redm/definitions/Citizen.d.ts#L193)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `item?` | `any` |
| `options?` | `any` |

##### Returns

`void`

#### Call Signature

```ts
dir(obj, options?): void;
```

Defined in: node\_modules/.pnpm/@types+node@22.13.7/node\_modules/@types/node/console.d.ts:159

Uses [`util.inspect()`](https://nodejs.org/docs/latest-v22.x/api/util.html#utilinspectobject-options) on `obj` and prints the resulting string to `stdout`.
This function bypasses any custom `inspect()` function defined on `obj`.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `obj` | `any` |
| `options?` | `InspectOptions` |

##### Returns

`void`

##### Since

v0.1.101

***

### dirxml()

```ts
dirxml(...data): void;
```

Defined in: node\_modules/.pnpm/@types+node@22.13.7/node\_modules/@types/node/console.d.ts:165

This method calls `console.log()` passing it the arguments received.
This method does not produce any XML formatting.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`data` | `any`[] |

#### Returns

`void`

#### Since

v8.0.0

***

### error()

#### Call Signature

```ts
error(...data): void;
```

Defined in: [src/redm/definitions/Citizen.d.ts:195](https://github.com/nativewrappers/nativewrappers/blob/8fd2e00d7e048b9268f6c990b83eef252e4d6150/src/redm/definitions/Citizen.d.ts#L195)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`data` | `any`[] |

##### Returns

`void`

#### Call Signature

```ts
error(message?, ...optionalParams?): void;
```

Defined in: node\_modules/.pnpm/@types+node@22.13.7/node\_modules/@types/node/console.d.ts:186

Prints to `stderr` with newline. Multiple arguments can be passed, with the
first used as the primary message and all additional used as substitution
values similar to [`printf(3)`](http://man7.org/linux/man-pages/man3/printf.3.html)
(the arguments are all passed to [`util.format()`](https://nodejs.org/docs/latest-v22.x/api/util.html#utilformatformat-args)).

```js
const code = 5;
console.error('error #%d', code);
// Prints: error #5, to stderr
console.error('error', code);
// Prints: error 5, to stderr
```

If formatting elements (e.g. `%d`) are not found in the first string then
[`util.inspect()`](https://nodejs.org/docs/latest-v22.x/api/util.html#utilinspectobject-options) is called on each argument and the
resulting string values are concatenated. See [`util.format()`](https://nodejs.org/docs/latest-v22.x/api/util.html#utilformatformat-args)
for more information.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `message?` | `any` |
| ...`optionalParams?` | `any`[] |

##### Returns

`void`

##### Since

v0.1.100

***

### group()

```ts
group(...label): void;
```

Defined in: node\_modules/.pnpm/@types+node@22.13.7/node\_modules/@types/node/console.d.ts:194

Increases indentation of subsequent lines by spaces for `groupIndentation` length.

If one or more `label`s are provided, those are printed first without the
additional indentation.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`label` | `any`[] |

#### Returns

`void`

#### Since

v8.5.0

***

### groupCollapsed()

```ts
groupCollapsed(...label): void;
```

Defined in: node\_modules/.pnpm/@types+node@22.13.7/node\_modules/@types/node/console.d.ts:199

An alias for [group](#group).

#### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`label` | `any`[] |

#### Returns

`void`

#### Since

v8.5.0

***

### groupEnd()

```ts
groupEnd(): void;
```

Defined in: node\_modules/.pnpm/@types+node@22.13.7/node\_modules/@types/node/console.d.ts:204

Decreases indentation of subsequent lines by spaces for `groupIndentation` length.

#### Returns

`void`

#### Since

v8.5.0

***

### info()

#### Call Signature

```ts
info(...data): void;
```

Defined in: [src/redm/definitions/Citizen.d.ts:199](https://github.com/nativewrappers/nativewrappers/blob/8fd2e00d7e048b9268f6c990b83eef252e4d6150/src/redm/definitions/Citizen.d.ts#L199)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`data` | `any`[] |

##### Returns

`void`

#### Call Signature

```ts
info(message?, ...optionalParams?): void;
```

Defined in: node\_modules/.pnpm/@types+node@22.13.7/node\_modules/@types/node/console.d.ts:209

The `console.info()` function is an alias for [log](#log).

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `message?` | `any` |
| ...`optionalParams?` | `any`[] |

##### Returns

`void`

##### Since

v0.1.100

***

### log()

#### Call Signature

```ts
log(...data): void;
```

Defined in: [src/redm/definitions/Citizen.d.ts:200](https://github.com/nativewrappers/nativewrappers/blob/8fd2e00d7e048b9268f6c990b83eef252e4d6150/src/redm/definitions/Citizen.d.ts#L200)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`data` | `any`[] |

##### Returns

`void`

#### Call Signature

```ts
log(message?, ...optionalParams?): void;
```

Defined in: node\_modules/.pnpm/@types+node@22.13.7/node\_modules/@types/node/console.d.ts:227

Prints to `stdout` with newline. Multiple arguments can be passed, with the
first used as the primary message and all additional used as substitution
values similar to [`printf(3)`](http://man7.org/linux/man-pages/man3/printf.3.html)
(the arguments are all passed to [`util.format()`](https://nodejs.org/docs/latest-v22.x/api/util.html#utilformatformat-args)).

```js
const count = 5;
console.log('count: %d', count);
// Prints: count: 5, to stdout
console.log('count:', count);
// Prints: count: 5, to stdout
```

See [`util.format()`](https://nodejs.org/docs/latest-v22.x/api/util.html#utilformatformat-args) for more information.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `message?` | `any` |
| ...`optionalParams?` | `any`[] |

##### Returns

`void`

##### Since

v0.1.100

***

### profile()

```ts
profile(label?): void;
```

Defined in: node\_modules/.pnpm/@types+node@22.13.7/node\_modules/@types/node/console.d.ts:340

This method does not display anything unless used in the inspector. The `console.profile()`
method starts a JavaScript CPU profile with an optional label until [profileEnd](#profileend)
is called. The profile is then added to the Profile panel of the inspector.

```js
console.profile('MyLabel');
// Some code
console.profileEnd('MyLabel');
// Adds the profile 'MyLabel' to the Profiles panel of the inspector.
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `label?` | `string` |

#### Returns

`void`

#### Since

v8.0.0

***

### profileEnd()

```ts
profileEnd(label?): void;
```

Defined in: node\_modules/.pnpm/@types+node@22.13.7/node\_modules/@types/node/console.d.ts:349

This method does not display anything unless used in the inspector. Stops the current
JavaScript CPU profiling session if one has been started and prints the report to the
Profiles panel of the inspector. See [profile](#profile) for an example.

If this method is called without a label, the most recently started profile is stopped.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `label?` | `string` |

#### Returns

`void`

#### Since

v8.0.0

***

### table()

```ts
table(tabularData, properties?): void;
```

Defined in: node\_modules/.pnpm/@types+node@22.13.7/node\_modules/@types/node/console.d.ts:259

Try to construct a table with the columns of the properties of `tabularData` (or use `properties`) and rows of `tabularData` and log it. Falls back to just
logging the argument if it can't be parsed as tabular.

```js
// These can't be parsed as tabular data
console.table(Symbol());
// Symbol()

console.table(undefined);
// undefined

console.table([{ a: 1, b: 'Y' }, { a: 'Z', b: 2 }]);
// ┌─────────┬─────┬─────┐
// │ (index) │  a  │  b  │
// ├─────────┼─────┼─────┤
// │    0    │  1  │ 'Y' │
// │    1    │ 'Z' │  2  │
// └─────────┴─────┴─────┘

console.table([{ a: 1, b: 'Y' }, { a: 'Z', b: 2 }], ['a']);
// ┌─────────┬─────┐
// │ (index) │  a  │
// ├─────────┼─────┤
// │    0    │  1  │
// │    1    │ 'Z' │
// └─────────┴─────┘
```

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `tabularData` | `any` | - |
| `properties?` | readonly `string`[] | Alternate properties for constructing the table. |

#### Returns

`void`

#### Since

v10.0.0

***

### time()

#### Call Signature

```ts
time(label?): void;
```

Defined in: [src/redm/definitions/Citizen.d.ts:202](https://github.com/nativewrappers/nativewrappers/blob/8fd2e00d7e048b9268f6c990b83eef252e4d6150/src/redm/definitions/Citizen.d.ts#L202)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `label?` | `string` |

##### Returns

`void`

#### Call Signature

```ts
time(label?): void;
```

Defined in: node\_modules/.pnpm/@types+node@22.13.7/node\_modules/@types/node/console.d.ts:268

Starts a timer that can be used to compute the duration of an operation. Timers
are identified by a unique `label`. Use the same `label` when calling [timeEnd](#timeend) to stop the timer and output the elapsed time in
suitable time units to `stdout`. For example, if the elapsed
time is 3869ms, `console.timeEnd()` displays "3.869s".

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `label?` | `string` |  |

##### Returns

`void`

##### Since

v0.1.104

***

### timeEnd()

#### Call Signature

```ts
timeEnd(label?): void;
```

Defined in: [src/redm/definitions/Citizen.d.ts:203](https://github.com/nativewrappers/nativewrappers/blob/8fd2e00d7e048b9268f6c990b83eef252e4d6150/src/redm/definitions/Citizen.d.ts#L203)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `label?` | `string` |

##### Returns

`void`

#### Call Signature

```ts
timeEnd(label?): void;
```

Defined in: node\_modules/.pnpm/@types+node@22.13.7/node\_modules/@types/node/console.d.ts:282

Stops a timer that was previously started by calling [time](#time) and
prints the result to `stdout`:

```js
console.time('bunch-of-stuff');
// Do a bunch of stuff.
console.timeEnd('bunch-of-stuff');
// Prints: bunch-of-stuff: 225.438ms
```

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `label?` | `string` |  |

##### Returns

`void`

##### Since

v0.1.104

***

### timeLog()

```ts
timeLog(label?, ...data?): void;
```

Defined in: node\_modules/.pnpm/@types+node@22.13.7/node\_modules/@types/node/console.d.ts:298

For a timer that was previously started by calling [time](#time), prints
the elapsed time and other `data` arguments to `stdout`:

```js
console.time('process');
const value = expensiveProcess1(); // Returns 42
console.timeLog('process', value);
// Prints "process: 365.227ms 42".
doExpensiveProcess2(value);
console.timeEnd('process');
```

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `label?` | `string` |  |
| ...`data?` | `any`[] | - |

#### Returns

`void`

#### Since

v10.7.0

***

### timeStamp()

```ts
timeStamp(label?): void;
```

Defined in: node\_modules/.pnpm/@types+node@22.13.7/node\_modules/@types/node/console.d.ts:355

This method does not display anything unless used in the inspector. The `console.timeStamp()`
method adds an event with the label `'label'` to the Timeline panel of the inspector.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `label?` | `string` |

#### Returns

`void`

#### Since

v8.0.0

***

### trace()

#### Call Signature

```ts
trace(...data): void;
```

Defined in: [src/redm/definitions/Citizen.d.ts:206](https://github.com/nativewrappers/nativewrappers/blob/8fd2e00d7e048b9268f6c990b83eef252e4d6150/src/redm/definitions/Citizen.d.ts#L206)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`data` | `any`[] |

##### Returns

`void`

#### Call Signature

```ts
trace(message?, ...optionalParams?): void;
```

Defined in: node\_modules/.pnpm/@types+node@22.13.7/node\_modules/@types/node/console.d.ts:320

Prints to `stderr` the string `'Trace: '`, followed by the [`util.format()`](https://nodejs.org/docs/latest-v22.x/api/util.html#utilformatformat-args)
formatted message and stack trace to the current position in the code.

```js
console.trace('Show me');
// Prints: (stack trace will vary based on where trace is called)
//  Trace: Show me
//    at repl:2:9
//    at REPLServer.defaultEval (repl.js:248:27)
//    at bound (domain.js:287:14)
//    at REPLServer.runBound [as eval] (domain.js:300:12)
//    at REPLServer.<anonymous> (repl.js:412:12)
//    at emitOne (events.js:82:20)
//    at REPLServer.emit (events.js:169:7)
//    at REPLServer.Interface._onLine (readline.js:210:10)
//    at REPLServer.Interface._line (readline.js:549:8)
//    at REPLServer.Interface._ttyWrite (readline.js:826:14)
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `message?` | `any` |
| ...`optionalParams?` | `any`[] |

##### Returns

`void`

##### Since

v0.1.104

***

### warn()

#### Call Signature

```ts
warn(...data): void;
```

Defined in: [src/redm/definitions/Citizen.d.ts:207](https://github.com/nativewrappers/nativewrappers/blob/8fd2e00d7e048b9268f6c990b83eef252e4d6150/src/redm/definitions/Citizen.d.ts#L207)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`data` | `any`[] |

##### Returns

`void`

#### Call Signature

```ts
warn(message?, ...optionalParams?): void;
```

Defined in: node\_modules/.pnpm/@types+node@22.13.7/node\_modules/@types/node/console.d.ts:325

The `console.warn()` function is an alias for [error](#error).

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `message?` | `any` |
| ...`optionalParams?` | `any`[] |

##### Returns

`void`

##### Since

v0.1.100
