[@nativewrappers/fivem](../README.md) / common

# common

## Enumerations

| Enumeration | Description |
| ------ | ------ |
| [ConVarType](enumerations/ConVarType.md) | - |

## Classes

| Class | Description |
| ------ | ------ |
| [Color](classes/Color.md) | - |
| [Command](classes/Command.md) | - |
| [Convar](classes/Convar.md) | - |
| [Kvp](classes/Kvp.md) | - |
| [Maths](classes/Maths.md) | - |
| [NetworkedMap](classes/NetworkedMap.md) | not ready to be used just thoughts right now |
| [PointF](classes/PointF.md) | - |
| [Quaternion](classes/Quaternion.md) | - |
| [Resource](classes/Resource.md) | - |
| [Vector2](classes/Vector2.md) | Represents a 2-dimensional vector. |
| [Vector3](classes/Vector3.md) | Represents a 3-dimensional vector. |
| [Vector4](classes/Vector4.md) | Represents a 4-dimensional vector. |

## Functions

| Function | Description |
| ------ | ------ |
| [cleanPlayerName](functions/cleanPlayerName.md) | Cleans up a player name and returns one version to be displayed, and one pure version to be used for fuzzy matching. In case the name has no ascii characters, the pure name will be "empty name". NOTE: this is not perfect, but took me two hours to arrive to this point. |
| [ConVar](functions/ConVar.md) | Gets the specified `ConVar`s value, this will bind to the param. |
| [Delay](functions/Delay.md) | - |
| [DisablePrettyPrint](functions/DisablePrettyPrint.md) | Disables pretty printing in error messages |
| [enumValues](functions/enumValues.md) | EnumValues - iterate over enum values Just copy&paste from https://github.com/microsoft/TypeScript/issues/4753#issuecomment-694557208 |
| [Event](functions/Event.md) | Registers the Event call for [eventName](functions/Event.md#eventname) to this method. |
| [Exports](functions/Exports.md) | - |
| [getStringFromUInt8Array](functions/getStringFromUInt8Array.md) | get string from uint8 array |
| [getUInt32FromUint8Array](functions/getUInt32FromUint8Array.md) | get uint32 from uint8 array |
| [NetEvent](functions/NetEvent.md) | Registers the Net Event call for [eventName](functions/NetEvent.md#eventname) to this method |
| [NuiEvent](functions/NuiEvent.md) | Registers the NUI Event call for {eventName} to this method, the function signature should be (data: unknown, cb: (data?: any) => void) => void You shoud always execute `cb` with 'ok' if you don't want to send data back to the UI, otherwise you'll cause a network error for the `fetch` request |
| [SetTick](functions/SetTick.md) | Gets called per server/client tick, this is asyncronous though, if you await in it, it will not be called until whatever was being awaited resolves. |
