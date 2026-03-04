[@nativewrappers/fivem](../../../../README.md) / [redm/definitions/redm](../README.md) / MumbleRemoveVoiceTargetChannel

# Function: MumbleRemoveVoiceTargetChannel()

## Call Signature

```ts
function MumbleRemoveVoiceTargetChannel(targetId, channel): void;
```

Defined in: [src/common-game/definitions/redm.d.ts:6506](https://github.com/nativewrappers/nativewrappers/blob/9ceb3d467a6d5103cb727cbd51b495f5463dc479/src/common-game/definitions/redm.d.ts#L6506)

Removes the specified voice channel from the user's voice targets.
Performs the opposite operation of [MUMBLE_ADD_VOICE_TARGET_CHANNEL](#\_0x4D386C9E)

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `targetId` | `number` | A Mumble voice target ID, ranging from 1..30 (inclusive). |
| `channel` | `number` | The game voice channel ID to remove from the target. |

### Returns

`void`

## Call Signature

```ts
function MumbleRemoveVoiceTargetChannel(targetId, channel): void;
```

Defined in: [src/redm/definitions/redm.d.ts:6506](https://github.com/nativewrappers/nativewrappers/blob/9ceb3d467a6d5103cb727cbd51b495f5463dc479/src/redm/definitions/redm.d.ts#L6506)

Removes the specified voice channel from the user's voice targets.
Performs the opposite operation of [MUMBLE_ADD_VOICE_TARGET_CHANNEL](#\_0x4D386C9E)

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `targetId` | `number` | A Mumble voice target ID, ranging from 1..30 (inclusive). |
| `channel` | `number` | The game voice channel ID to remove from the target. |

### Returns

`void`
