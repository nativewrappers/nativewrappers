[@nativewrappers/fivem](../../README.md) / [fivem](../README.md) / LoadAnimDictArray

# Function: LoadAnimDictArray()

```ts
function LoadAnimDictArray(animDict, waitTime): Promise<[boolean, null | string[]]>
```

Defined in: [src/fivem/utils/Animations.ts:33](https://github.com/nativewrappers/nativewrappers/blob/c639ec5cd28328d6b44c7ebf73de56bb1b4bef7d/src/fivem/utils/Animations.ts#L33)

A utility to load multiple animation dictionary, anything that loads an animation should RemoveAnimDict after its finish being used.

## Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `animDict` | `string`[] | `undefined` | the animation dictionary to load |
| `waitTime` | `number` | `1000` | how long to wait for the dictionary to load |

## Returns

`Promise`\<\[`boolean`, `null` \| `string`[]\]\>

if the animation successfully loaded, if the animation failed to load it will return an array of animations that failed to load
