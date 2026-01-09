[@nativewrappers/fivem](../../../../README.md) / [server/utils/waitForEntityToExist](../README.md) / waitForEntityToExist

# Function: waitForEntityToExist()

```ts
function waitForEntityToExist(netId, timeoutMs?): Promise<null | number>;
```

Defined in: lib/server/utils/waitForEntityToExist.d.ts:7

Waits for the specified netId to exist, useful for when you're creating an entity on the client
ane sending it to the server, as it can "race" the net event, resulting in it never getting created.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `netId` | `number` | the network id of the entity to wait to exist |
| `timeoutMs?` | `number` | the amount of time to wait for the entity to exist before giving up |

## Returns

`Promise`\<`null` \| `number`\>
