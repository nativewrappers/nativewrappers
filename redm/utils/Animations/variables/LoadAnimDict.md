[@nativewrappers/fivem](../../../../README.md) / [redm/utils/Animations](../README.md) / LoadAnimDict

# Variable: LoadAnimDict()

```ts
const LoadAnimDict: (animDict, waitTime?) => Promise<boolean>;
```

Defined in: lib/redm/utils/Animations.d.ts:7

A utility to load an animation dictionary, anything that loads an animation should RemoveAnimDict after its finish being used.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `animDict` | `string` | the animation dictionary to load |
| `waitTime?` | `number` | how long to wait for the dictionary to load |

## Returns

`Promise`\<`boolean`\>

if the animation successfully loaded
