[@nativewrappers/fivem](../../../../README.md) / [redm/utils/Animations](../README.md) / LoadAnimDictArray

# Variable: LoadAnimDictArray()

```ts
const LoadAnimDictArray: (animDict, waitTime?) => Promise<[boolean, string[] | null]>;
```

Defined in: lib/redm/utils/Animations.d.ts:14

A utility to load multiple animation dictionary, anything that loads an animation should RemoveAnimDict after its finish being used.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `animDict` | `string`[] | the animation dictionary to load |
| `waitTime?` | `number` | how long to wait for the dictionary to load |

## Returns

`Promise`\<\[`boolean`, `string`[] \| `null`\]\>

if the animation successfully loaded, if the animation failed to load it will return an array of animations that failed to load
