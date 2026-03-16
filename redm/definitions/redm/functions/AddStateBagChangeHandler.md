[@nativewrappers/fivem](../../../../README.md) / [redm/definitions/redm](../README.md) / AddStateBagChangeHandler

# Function: AddStateBagChangeHandler()

## Call Signature

```ts
function AddStateBagChangeHandler(
   keyFilter, 
   bagFilter, 
   handler): number;
```

Defined in: [src/common-game/definitions/redm.d.ts:353](https://github.com/nativewrappers/nativewrappers/blob/cae596ddcffbe00705fb3021a8a61a76a01a649f/src/common-game/definitions/redm.d.ts#L353)

Adds a handler for changes to a state bag.
The function called expects to match the following signature:
```ts
function StateBagChangeHandler(bagName: string, key: string, value: any, reserved: number, replicated: boolean);
```
*   **bagName**: The internal bag ID for the state bag which changed. This is usually `player:Source`, `entity:NetID`
or `localEntity:Handle`.
*   **key**: The changed key.
*   **value**: The new value stored at key. The old value is still stored in the state bag at the time this callback executes.
*   **reserved**: Currently unused.
*   **replicated**: Whether the set is meant to be replicated.
At this time, the change handler can't opt to reject changes.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `keyFilter` | `string` | The key to check for, or null. |
| `bagFilter` | `string` | The bag ID to check for, or null. |
| `handler` | `Function` | The handler function. |

### Returns

`number`

A cookie to remove the change handler.

## Call Signature

```ts
function AddStateBagChangeHandler(
   keyFilter, 
   bagFilter, 
   handler): number;
```

Defined in: [src/redm/definitions/redm.d.ts:353](https://github.com/nativewrappers/nativewrappers/blob/cae596ddcffbe00705fb3021a8a61a76a01a649f/src/redm/definitions/redm.d.ts#L353)

Adds a handler for changes to a state bag.
The function called expects to match the following signature:
```ts
function StateBagChangeHandler(bagName: string, key: string, value: any, reserved: number, replicated: boolean);
```
*   **bagName**: The internal bag ID for the state bag which changed. This is usually `player:Source`, `entity:NetID`
or `localEntity:Handle`.
*   **key**: The changed key.
*   **value**: The new value stored at key. The old value is still stored in the state bag at the time this callback executes.
*   **reserved**: Currently unused.
*   **replicated**: Whether the set is meant to be replicated.
At this time, the change handler can't opt to reject changes.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `keyFilter` | `string` | The key to check for, or null. |
| `bagFilter` | `string` | The bag ID to check for, or null. |
| `handler` | `Function` | The handler function. |

### Returns

`number`

A cookie to remove the change handler.
