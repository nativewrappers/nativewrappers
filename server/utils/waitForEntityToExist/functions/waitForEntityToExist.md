[@nativewrappers/fivem](../../../../README.md) / [server/utils/waitForEntityToExist](../README.md) / waitForEntityToExist

# Function: waitForEntityToExist()

```ts
function waitForEntityToExist(netId, timeoutMs?): Promise<null | number>;
```

Defined in: lib/server/utils/waitForEntityToExist.d.ts:12

Waits for the specified netId to exist on the server.

This is needed due to the fact that when creating and instantly sending a
net id on the client we can race the actual creation of the entity, making
`NetworkGetEntityFromNetworkId` return `0`, this will resolve itself within the
next game tick (approximately ever 8ms for the sync thread).

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `netId` | `number` | the network id of the entity to wait to exist |
| `timeoutMs?` | `number` | the amount of time to wait for the entity to exist before giving up |

## Returns

`Promise`\<`null` \| `number`\>
