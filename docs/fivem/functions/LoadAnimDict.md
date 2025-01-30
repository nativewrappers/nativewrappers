[@nativewrappers/fivem](../../README.md) / [fivem](../README.md) / LoadAnimDict

# Function: LoadAnimDict()

```ts
function LoadAnimDict(animDict, waitTime): Promise<boolean>
```

Defined in: [src/fivem/utils/Animations.ts:9](https://github.com/nativewrappers/nativewrappers/blob/b3515708998f90e7d7096e3fffccb36c69d6b942/src/fivem/utils/Animations.ts#L9)

A utility to load an animation dictionary, anything that loads an animation should RemoveAnimDict after its finish being used.

## Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `animDict` | `string` | `undefined` | the animation dictionary to load |
| `waitTime` | `number` | `1000` | how long to wait for the dictionary to load |

## Returns

`Promise`\<`boolean`\>

if the animation successfully loaded
