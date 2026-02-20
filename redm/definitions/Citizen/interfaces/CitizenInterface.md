[@nativewrappers/fivem](../../../../README.md) / [redm/definitions/Citizen](../README.md) / CitizenInterface

# Interface: CitizenInterface

Defined in: [src/redm/definitions/Citizen.d.ts:42](https://github.com/nativewrappers/nativewrappers/blob/8fd2e00d7e048b9268f6c990b83eef252e4d6150/src/redm/definitions/Citizen.d.ts#L42)

## Methods

### canonicalizeRef()

```ts
canonicalizeRef(ref): string;
```

Defined in: [src/redm/definitions/Citizen.d.ts:50](https://github.com/nativewrappers/nativewrappers/blob/8fd2e00d7e048b9268f6c990b83eef252e4d6150/src/redm/definitions/Citizen.d.ts#L50)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `ref` | `number` |

#### Returns

`string`

***

### getTickCount()

```ts
getTickCount(): number;
```

Defined in: [src/redm/definitions/Citizen.d.ts:53](https://github.com/nativewrappers/nativewrappers/blob/8fd2e00d7e048b9268f6c990b83eef252e4d6150/src/redm/definitions/Citizen.d.ts#L53)

#### Returns

`number`

***

### invokeFunctionReference()

```ts
invokeFunctionReference(ref, args): Uint8Array;
```

Defined in: [src/redm/definitions/Citizen.d.ts:51](https://github.com/nativewrappers/nativewrappers/blob/8fd2e00d7e048b9268f6c990b83eef252e4d6150/src/redm/definitions/Citizen.d.ts#L51)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `ref` | `string` |
| `args` | `Uint8Array` |

#### Returns

`Uint8Array`

***

### invokeNative()

```ts
invokeNative<T>(hash, ...args): T;
```

Defined in: [src/redm/definitions/Citizen.d.ts:54](https://github.com/nativewrappers/nativewrappers/blob/8fd2e00d7e048b9268f6c990b83eef252e4d6150/src/redm/definitions/Citizen.d.ts#L54)

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `void` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `hash` | `string` |
| ...`args` | [`InputArgument`](../type-aliases/InputArgument.md)[] |

#### Returns

`T`

***

### invokeNativeByHash()

```ts
invokeNativeByHash<T>(
   hash1, 
   hash2, ...
   args): T;
```

Defined in: [src/redm/definitions/Citizen.d.ts:55](https://github.com/nativewrappers/nativewrappers/blob/8fd2e00d7e048b9268f6c990b83eef252e4d6150/src/redm/definitions/Citizen.d.ts#L55)

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `void` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `hash1` | `number` |
| `hash2` | `number` |
| ...`args` | [`InputArgument`](../type-aliases/InputArgument.md)[] |

#### Returns

`T`

***

### makeRefFunction()

```ts
makeRefFunction(refFunction): string;
```

Defined in: [src/redm/definitions/Citizen.d.ts:77](https://github.com/nativewrappers/nativewrappers/blob/8fd2e00d7e048b9268f6c990b83eef252e4d6150/src/redm/definitions/Citizen.d.ts#L77)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `refFunction` | `Function` |

#### Returns

`string`

***

### pointerValueFloat()

```ts
pointerValueFloat(): FloatPtr;
```

Defined in: [src/redm/definitions/Citizen.d.ts:66](https://github.com/nativewrappers/nativewrappers/blob/8fd2e00d7e048b9268f6c990b83eef252e4d6150/src/redm/definitions/Citizen.d.ts#L66)

#### Returns

[`FloatPtr`](../type-aliases/FloatPtr.md)

***

### pointerValueFloatInitialized()

```ts
pointerValueFloatInitialized(): FloatPtrInitialized;
```

Defined in: [src/redm/definitions/Citizen.d.ts:64](https://github.com/nativewrappers/nativewrappers/blob/8fd2e00d7e048b9268f6c990b83eef252e4d6150/src/redm/definitions/Citizen.d.ts#L64)

#### Returns

[`FloatPtrInitialized`](../type-aliases/FloatPtrInitialized.md)

***

### pointerValueInt()

```ts
pointerValueInt(): IntPtr;
```

Defined in: [src/redm/definitions/Citizen.d.ts:65](https://github.com/nativewrappers/nativewrappers/blob/8fd2e00d7e048b9268f6c990b83eef252e4d6150/src/redm/definitions/Citizen.d.ts#L65)

#### Returns

[`IntPtr`](../type-aliases/IntPtr.md)

***

### pointerValueIntInitialized()

```ts
pointerValueIntInitialized(): IntPtrInitialized;
```

Defined in: [src/redm/definitions/Citizen.d.ts:63](https://github.com/nativewrappers/nativewrappers/blob/8fd2e00d7e048b9268f6c990b83eef252e4d6150/src/redm/definitions/Citizen.d.ts#L63)

#### Returns

[`IntPtrInitialized`](../type-aliases/IntPtrInitialized.md)

***

### pointerValueVector()

```ts
pointerValueVector(): VectorPtr;
```

Defined in: [src/redm/definitions/Citizen.d.ts:67](https://github.com/nativewrappers/nativewrappers/blob/8fd2e00d7e048b9268f6c990b83eef252e4d6150/src/redm/definitions/Citizen.d.ts#L67)

#### Returns

[`VectorPtr`](../type-aliases/VectorPtr.md)

***

### resultAsFloat()

```ts
resultAsFloat(): ResultAsFloat;
```

Defined in: [src/redm/definitions/Citizen.d.ts:70](https://github.com/nativewrappers/nativewrappers/blob/8fd2e00d7e048b9268f6c990b83eef252e4d6150/src/redm/definitions/Citizen.d.ts#L70)

#### Returns

[`ResultAsFloat`](../type-aliases/ResultAsFloat.md)

***

### resultAsInteger()

```ts
resultAsInteger(): ResultAsInteger;
```

Defined in: [src/redm/definitions/Citizen.d.ts:69](https://github.com/nativewrappers/nativewrappers/blob/8fd2e00d7e048b9268f6c990b83eef252e4d6150/src/redm/definitions/Citizen.d.ts#L69)

#### Returns

[`ResultAsInteger`](../type-aliases/ResultAsInteger.md)

***

### resultAsLong()

```ts
resultAsLong(): ResultAsLong;
```

Defined in: [src/redm/definitions/Citizen.d.ts:73](https://github.com/nativewrappers/nativewrappers/blob/8fd2e00d7e048b9268f6c990b83eef252e4d6150/src/redm/definitions/Citizen.d.ts#L73)

#### Returns

[`ResultAsLong`](../type-aliases/ResultAsLong.md)

***

### resultAsObject()

```ts
resultAsObject(): ResultAsObject;
```

Defined in: [src/redm/definitions/Citizen.d.ts:74](https://github.com/nativewrappers/nativewrappers/blob/8fd2e00d7e048b9268f6c990b83eef252e4d6150/src/redm/definitions/Citizen.d.ts#L74)

#### Returns

[`ResultAsObject`](../type-aliases/ResultAsObject.md)

***

### resultAsObject2()

```ts
resultAsObject2(): ResultAsObject;
```

Defined in: [src/redm/definitions/Citizen.d.ts:75](https://github.com/nativewrappers/nativewrappers/blob/8fd2e00d7e048b9268f6c990b83eef252e4d6150/src/redm/definitions/Citizen.d.ts#L75)

#### Returns

[`ResultAsObject`](../type-aliases/ResultAsObject.md)

***

### resultAsString()

```ts
resultAsString(): ResultAsString;
```

Defined in: [src/redm/definitions/Citizen.d.ts:71](https://github.com/nativewrappers/nativewrappers/blob/8fd2e00d7e048b9268f6c990b83eef252e4d6150/src/redm/definitions/Citizen.d.ts#L71)

#### Returns

[`ResultAsString`](../type-aliases/ResultAsString.md)

***

### resultAsVector()

```ts
resultAsVector(): ResultAsVector;
```

Defined in: [src/redm/definitions/Citizen.d.ts:72](https://github.com/nativewrappers/nativewrappers/blob/8fd2e00d7e048b9268f6c990b83eef252e4d6150/src/redm/definitions/Citizen.d.ts#L72)

#### Returns

[`ResultAsVector`](../type-aliases/ResultAsVector.md)

***

### returnResultAnyway()

```ts
returnResultAnyway(): ReturnResultAnyway;
```

Defined in: [src/redm/definitions/Citizen.d.ts:68](https://github.com/nativewrappers/nativewrappers/blob/8fd2e00d7e048b9268f6c990b83eef252e4d6150/src/redm/definitions/Citizen.d.ts#L68)

#### Returns

[`ReturnResultAnyway`](../type-aliases/ReturnResultAnyway.md)

***

### setCallRefFunction()

```ts
setCallRefFunction(callback): void;
```

Defined in: [src/redm/definitions/Citizen.d.ts:47](https://github.com/nativewrappers/nativewrappers/blob/8fd2e00d7e048b9268f6c990b83eef252e4d6150/src/redm/definitions/Citizen.d.ts#L47)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `Function` |

#### Returns

`void`

***

### setDeleteRefFunction()

```ts
setDeleteRefFunction(callback): void;
```

Defined in: [src/redm/definitions/Citizen.d.ts:48](https://github.com/nativewrappers/nativewrappers/blob/8fd2e00d7e048b9268f6c990b83eef252e4d6150/src/redm/definitions/Citizen.d.ts#L48)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `Function` |

#### Returns

`void`

***

### setDuplicateRefFunction()

```ts
setDuplicateRefFunction(callback): void;
```

Defined in: [src/redm/definitions/Citizen.d.ts:49](https://github.com/nativewrappers/nativewrappers/blob/8fd2e00d7e048b9268f6c990b83eef252e4d6150/src/redm/definitions/Citizen.d.ts#L49)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `Function` |

#### Returns

`void`

***

### setEventFunction()

```ts
setEventFunction(callback): void;
```

Defined in: [src/redm/definitions/Citizen.d.ts:45](https://github.com/nativewrappers/nativewrappers/blob/8fd2e00d7e048b9268f6c990b83eef252e4d6150/src/redm/definitions/Citizen.d.ts#L45)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `Function` |

#### Returns

`void`

***

### setTickFunction()

```ts
setTickFunction(callback): void;
```

Defined in: [src/redm/definitions/Citizen.d.ts:44](https://github.com/nativewrappers/nativewrappers/blob/8fd2e00d7e048b9268f6c990b83eef252e4d6150/src/redm/definitions/Citizen.d.ts#L44)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `Function` |

#### Returns

`void`

***

### startProfiling()

```ts
startProfiling(name?): void;
```

Defined in: [src/redm/definitions/Citizen.d.ts:60](https://github.com/nativewrappers/nativewrappers/blob/8fd2e00d7e048b9268f6c990b83eef252e4d6150/src/redm/definitions/Citizen.d.ts#L60)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `name?` | `string` |

#### Returns

`void`

***

### stopProfiling()

```ts
stopProfiling(name?): {
};
```

Defined in: [src/redm/definitions/Citizen.d.ts:61](https://github.com/nativewrappers/nativewrappers/blob/8fd2e00d7e048b9268f6c990b83eef252e4d6150/src/redm/definitions/Citizen.d.ts#L61)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `name?` | `string` |

#### Returns

```ts
{
}
```

***

### trace()

```ts
trace(...args): void;
```

Defined in: [src/redm/definitions/Citizen.d.ts:43](https://github.com/nativewrappers/nativewrappers/blob/8fd2e00d7e048b9268f6c990b83eef252e4d6150/src/redm/definitions/Citizen.d.ts#L43)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | `string`[] |

#### Returns

`void`
