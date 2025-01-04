[@nativewrappers/fivem](../../README.md) / [server](../README.md) / cleanPlayerName

# Function: cleanPlayerName()

```ts
function cleanPlayerName(original): string
```

Defined in: lib/common/utils/cleanPlayerName.d.ts:6

Cleans up a player name and returns one version to be displayed, and one pure version to be used for fuzzy matching.
In case the name has no ascii characters, the pure name will be "empty name".
NOTE: this is not perfect, but took me two hours to arrive to this point.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `original` | `string` |

## Returns

`string`
