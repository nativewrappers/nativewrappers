[@nativewrappers/fivem](../../../../README.md) / [redm/definitions/redm](../README.md) / MumbleRemoveVoiceTargetPlayerByServerId

# Function: MumbleRemoveVoiceTargetPlayerByServerId()

## Call Signature

```ts
function MumbleRemoveVoiceTargetPlayerByServerId(targetId, serverId): void;
```

Defined in: [src/common-game/definitions/redm.d.ts:6528](https://github.com/nativewrappers/nativewrappers/blob/d1af436bb546eddfd82b8a2566b57a43c63686dd/src/common-game/definitions/redm.d.ts#L6528)

Removes the specified player from the user's voice targets.
Performs the opposite operation of [MUMBLE_ADD_VOICE_TARGET_PLAYER_BY_SERVER_ID](#\_0x25F2B65F)

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `targetId` | `number` | A Mumble voice target ID, ranging from 1..30 (inclusive). |
| `serverId` | `number` | The player's server id to remove from the target. |

### Returns

`void`

## Call Signature

```ts
function MumbleRemoveVoiceTargetPlayerByServerId(targetId, serverId): void;
```

Defined in: [src/redm/definitions/redm.d.ts:6528](https://github.com/nativewrappers/nativewrappers/blob/d1af436bb546eddfd82b8a2566b57a43c63686dd/src/redm/definitions/redm.d.ts#L6528)

Removes the specified player from the user's voice targets.
Performs the opposite operation of [MUMBLE_ADD_VOICE_TARGET_PLAYER_BY_SERVER_ID](#\_0x25F2B65F)

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `targetId` | `number` | A Mumble voice target ID, ranging from 1..30 (inclusive). |
| `serverId` | `number` | The player's server id to remove from the target. |

### Returns

`void`
