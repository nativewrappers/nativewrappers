[@nativewrappers/fivem](../../../README.md) / [redm/RawKeymaps](../README.md) / RawKeymap

# Class: RawKeymap

Defined in: lib/redm/RawKeymaps.d.ts:8

A builder for RawKeymap, you should call [finish](#finish) to actually register the raw keymap
This should be usable across resource bounds, so you can create the keymap
and pass the object to a manager to handle rebinding the maps with calls.

## Constructors

### Constructor

```ts
new RawKeymap(
   keymapName, 
   rawKey, 
   canBeDisabled): RawKeymap;
```

Defined in: lib/redm/RawKeymaps.d.ts:15

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `keymapName` | `string` | the name of the keymap to register to, this should be unique across all resources. |
| `rawKey` | [`RawKeys`](../../enums/RawKeys/enumerations/RawKeys.md) | the key to bind to initially, this can be rebound with [setRawKey](#setrawkey) |
| `canBeDisabled` | `boolean` | if the key can be disabled with RawControls.DisableKeyThisFrame |

#### Returns

`RawKeymap`

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="getkeymapname"></a> `getKeymapName` | () => `string` | - | lib/redm/RawKeymaps.d.ts:16 |
| <a id="getrawkeymap"></a> `getRawKeymap` | () => [`RawKeys`](../../enums/RawKeys/enumerations/RawKeys.md) | Gets the current raw keymap | lib/redm/RawKeymaps.d.ts:20 |
| <a id="setonkeydown"></a> `setOnKeyDown` | (`fn`) => `void` | Sets the function to be used on onKeyDown | lib/redm/RawKeymaps.d.ts:28 |
| <a id="setonkeyup"></a> `setOnKeyUp` | (`fn`) => `void` | Sets the function to be used onKeyUp | lib/redm/RawKeymaps.d.ts:24 |
| <a id="setrawkey"></a> `setRawKey` | (`key`) => `void` | Remaps the current RawKeymap's raw key to key | lib/redm/RawKeymaps.d.ts:32 |

## Accessors

### KeymapName

#### Get Signature

```ts
get KeymapName(): string;
```

Defined in: lib/redm/RawKeymaps.d.ts:47

##### Returns

`string`

***

### OnKeyDown

#### Set Signature

```ts
set OnKeyDown(fn): void;
```

Defined in: lib/redm/RawKeymaps.d.ts:42

Sets the function to be used on onKeyDown, if you need to use this across
resource bounds you should use [setOnKeyDown](#setonkeydown)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `fn` | [`KeymapFunction`](../type-aliases/KeymapFunction.md) |

##### Returns

`void`

***

### OnKeyUp

#### Set Signature

```ts
set OnKeyUp(fn): void;
```

Defined in: lib/redm/RawKeymaps.d.ts:37

Sets the function to be used on onKeyUp, if you need to use this across
resource bounds you should use [setOnKeyUp](#setonkeyup)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `fn` | [`KeymapFunction`](../type-aliases/KeymapFunction.md) |

##### Returns

`void`

***

### RawKey

#### Set Signature

```ts
set RawKey(key): void;
```

Defined in: lib/redm/RawKeymaps.d.ts:46

Changes the RawKeymap to use the [key](#rawkeyrawkey) for its keymap

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `key` | [`RawKeys`](../../enums/RawKeys/enumerations/RawKeys.md) |

##### Returns

`void`

## Methods

### finish()

```ts
finish(): void;
```

Defined in: lib/redm/RawKeymaps.d.ts:48

#### Returns

`void`
