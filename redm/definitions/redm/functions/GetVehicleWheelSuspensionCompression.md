[@nativewrappers/fivem](../../../../README.md) / [redm/definitions/redm](../README.md) / GetVehicleWheelSuspensionCompression

# Function: GetVehicleWheelSuspensionCompression()

## Call Signature

```ts
function GetVehicleWheelSuspensionCompression(vehicle, wheelIndex): number;
```

Defined in: [src/common-game/definitions/redm.d.ts:4575](https://github.com/nativewrappers/nativewrappers/blob/dc9e2638d1087a48984d9b0f544b0f441166f8eb/src/common-game/definitions/redm.d.ts#L4575)

Gets the current suspension compression of a wheel.
Returns a positive value. 0 means the suspension is fully extended, the wheel is off the ground.
Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.

### Parameters

| Parameter | Type |
| ------ | ------ |
| `vehicle` | `number` |
| `wheelIndex` | `number` |

### Returns

`number`

The current compression of the wheel's suspension.

## Call Signature

```ts
function GetVehicleWheelSuspensionCompression(vehicle, wheelIndex): number;
```

Defined in: [src/redm/definitions/redm.d.ts:4575](https://github.com/nativewrappers/nativewrappers/blob/dc9e2638d1087a48984d9b0f544b0f441166f8eb/src/redm/definitions/redm.d.ts#L4575)

Gets the current suspension compression of a wheel.
Returns a positive value. 0 means the suspension is fully extended, the wheel is off the ground.
Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.

### Parameters

| Parameter | Type |
| ------ | ------ |
| `vehicle` | `number` |
| `wheelIndex` | `number` |

### Returns

`number`

The current compression of the wheel's suspension.
