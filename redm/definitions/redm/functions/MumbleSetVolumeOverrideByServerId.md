[@nativewrappers/fivem](../../../../README.md) / [redm/definitions/redm](../README.md) / MumbleSetVolumeOverrideByServerId

# Function: MumbleSetVolumeOverrideByServerId()

## Call Signature

```ts
function MumbleSetVolumeOverrideByServerId(serverId, volume): void;
```

Defined in: [src/common-game/definitions/redm.d.ts:6577](https://github.com/nativewrappers/nativewrappers/blob/dc9e2638d1087a48984d9b0f544b0f441166f8eb/src/common-game/definitions/redm.d.ts#L6577)

Overrides the output volume for a particular player with the specified server id and player name on Mumble. This will also bypass 3D audio and distance calculations. -1.0 to reset the override.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `serverId` | `number` | The player's server id. |
| `volume` | `number` | The volume, ranging from 0.0 to 1.0 (or above). |

### Returns

`void`

## Call Signature

```ts
function MumbleSetVolumeOverrideByServerId(serverId, volume): void;
```

Defined in: [src/redm/definitions/redm.d.ts:6577](https://github.com/nativewrappers/nativewrappers/blob/dc9e2638d1087a48984d9b0f544b0f441166f8eb/src/redm/definitions/redm.d.ts#L6577)

Overrides the output volume for a particular player with the specified server id and player name on Mumble. This will also bypass 3D audio and distance calculations. -1.0 to reset the override.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `serverId` | `number` | The player's server id. |
| `volume` | `number` | The volume, ranging from 0.0 to 1.0 (or above). |

### Returns

`void`
