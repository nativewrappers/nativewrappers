[@nativewrappers/fivem](../../README.md) / [fivem](../README.md) / LoadAnimDictArray

# Function: LoadAnimDictArray()

```ts
function LoadAnimDictArray(animDict, waitTime): Promise<[boolean, null | string[]]>
```

Defined in: [src/fivem/utils/Animations.ts:33](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/utils/Animations.ts#L33)

A utility to load multiple animation dictionary, anything that loads an animation should RemoveAnimDict after its finish being used.

## Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `animDict` | `string`[] | `undefined` | the animation dictionary to load |
| `waitTime` | `number` | `1000` | how long to wait for the dictionary to load |

## Returns

`Promise`\<\[`boolean`, `null` \| `string`[]\]\>

if the animation successfully loaded, if the animation failed to load it will return an array of animations that failed to load
