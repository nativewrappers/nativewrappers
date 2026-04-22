[@nativewrappers/fivem](../../../../README.md) / [redm/definitions/redm](../README.md) / MumbleSetVolumeOverride

# Function: MumbleSetVolumeOverride()

## Call Signature

```ts
function MumbleSetVolumeOverride(player, volume): void;
```

Defined in: [src/common-game/definitions/redm.d.ts:6570](https://github.com/nativewrappers/nativewrappers/blob/ce43691ffb0bea7b7243736baf23594a9ade4b3d/src/common-game/definitions/redm.d.ts#L6570)

Overrides the output volume for a particular player on Mumble. This will also bypass 3D audio and distance calculations. -1.0 to reset the override.
Set to -1.0 to reset the Volume override.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `player` | `number` | A game player index. |
| `volume` | `number` | The volume, ranging from 0.0 to 1.0 (or above). |

### Returns

`void`

## Call Signature

```ts
function MumbleSetVolumeOverride(player, volume): void;
```

Defined in: [src/redm/definitions/redm.d.ts:6570](https://github.com/nativewrappers/nativewrappers/blob/ce43691ffb0bea7b7243736baf23594a9ade4b3d/src/redm/definitions/redm.d.ts#L6570)

Overrides the output volume for a particular player on Mumble. This will also bypass 3D audio and distance calculations. -1.0 to reset the override.
Set to -1.0 to reset the Volume override.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `player` | `number` | A game player index. |
| `volume` | `number` | The volume, ranging from 0.0 to 1.0 (or above). |

### Returns

`void`
