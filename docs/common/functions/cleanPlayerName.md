[@nativewrappers/fivem](../../README.md) / [common](../README.md) / cleanPlayerName

# Function: cleanPlayerName()

```ts
function cleanPlayerName(original): string
```

Defined in: [src/common/utils/cleanPlayerName.ts:9](https://github.com/nativewrappers/nativewrappers/blob/df8f763f54a2ec439be9cb68f9abf90f9a4d79aa/src/common/utils/cleanPlayerName.ts#L9)

Cleans up a player name and returns one version to be displayed, and one pure version to be used for fuzzy matching.
In case the name has no ascii characters, the pure name will be "empty name".
NOTE: this is not perfect, but took me two hours to arrive to this point.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `original` | `string` |

## Returns

`string`
