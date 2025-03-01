[@nativewrappers/fivem](../../README.md) / [fivem](../README.md) / LoadAnimDict

# Function: LoadAnimDict()

```ts
function LoadAnimDict(animDict, waitTime): Promise<boolean>
```

Defined in: [src/fivem/utils/Animations.ts:9](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/fivem/utils/Animations.ts#L9)

A utility to load an animation dictionary, anything that loads an animation should RemoveAnimDict after its finish being used.

## Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `animDict` | `string` | `undefined` | the animation dictionary to load |
| `waitTime` | `number` | `1000` | how long to wait for the dictionary to load |

## Returns

`Promise`\<`boolean`\>

if the animation successfully loaded
