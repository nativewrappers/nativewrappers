[@nativewrappers/fivem](../../README.md) / [fivem](../README.md) / LoadAnimDictArray

# Function: LoadAnimDictArray()

```ts
function LoadAnimDictArray(animDict, waitTime?): Promise<[boolean, null | string[]]>
```

Defined in: fivem/utils/Animations.d.ts:14

A utility to load multiple animation dictionary, anything that loads an animation should RemoveAnimDict after its finish being used.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `animDict` | `string`[] | the animation dictionary to load |
| `waitTime`? | `number` | how long to wait for the dictionary to load |

## Returns

`Promise`\<\[`boolean`, `null` \| `string`[]\]\>

if the animation successfully loaded, if the animation failed to load it will return an array of animations that failed to load
