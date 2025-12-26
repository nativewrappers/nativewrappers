[@nativewrappers/fivem](../../../../README.md) / [redm/definitions/redm](../README.md) / StartFindExternalKvp

# Function: StartFindExternalKvp()

## Call Signature

```ts
function StartFindExternalKvp(resourceName, prefix): number;
```

Defined in: [src/common-game/definitions/redm.d.ts:24562](https://github.com/nativewrappers/nativewrappers/blob/c095d96f328c0dd1eabd3cb087951bc76dcd2d76/src/common-game/definitions/redm.d.ts#L24562)

Equivalent of [START_FIND_KVP](#\_0xDD379006), but for another resource than the current one.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `resourceName` | `string` | The resource to try finding the key/values for |
| `prefix` | `string` | A prefix match |

### Returns

`number`

A KVP find handle to use with [FIND_KVP](#\_0xBD7BEBC5) and close with [END_FIND_KVP](#\_0xB3210203)

## Call Signature

```ts
function StartFindExternalKvp(resourceName, prefix): number;
```

Defined in: [src/redm/definitions/redm.d.ts:24562](https://github.com/nativewrappers/nativewrappers/blob/c095d96f328c0dd1eabd3cb087951bc76dcd2d76/src/redm/definitions/redm.d.ts#L24562)

Equivalent of [START_FIND_KVP](#\_0xDD379006), but for another resource than the current one.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `resourceName` | `string` | The resource to try finding the key/values for |
| `prefix` | `string` | A prefix match |

### Returns

`number`

A KVP find handle to use with [FIND_KVP](#\_0xBD7BEBC5) and close with [END_FIND_KVP](#\_0xB3210203)
