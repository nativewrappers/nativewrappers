[@nativewrappers/fivem](../../../../README.md) / [redm/definitions/redm](../README.md) / SetVehicleWheelIsPowered

# Function: SetVehicleWheelIsPowered()

## Call Signature

```ts
function SetVehicleWheelIsPowered(
   vehicle, 
   wheelIndex, 
   powered): void;
```

Defined in: [src/common-game/definitions/redm.d.ts:24198](https://github.com/nativewrappers/nativewrappers/blob/cae596ddcffbe00705fb3021a8a61a76a01a649f/src/common-game/definitions/redm.d.ts#L24198)

Sets whether the wheel is powered.
On all wheel drive cars this works to change which wheels receive power, but if a car's fDriveBiasFront doesn't send power to that wheel, it won't get power anyway. This can be fixed by changing the fDriveBiasFront with SET_VEHICLE_HANDLING_FLOAT.
Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
This is a shortcut to a flag in SET_VEHICLE_WHEEL_FLAGS.

### Parameters

| Parameter | Type |
| ------ | ------ |
| `vehicle` | `number` |
| `wheelIndex` | `number` |
| `powered` | `boolean` |

### Returns

`void`

## Call Signature

```ts
function SetVehicleWheelIsPowered(
   vehicle, 
   wheelIndex, 
   powered): void;
```

Defined in: [src/redm/definitions/redm.d.ts:24198](https://github.com/nativewrappers/nativewrappers/blob/cae596ddcffbe00705fb3021a8a61a76a01a649f/src/redm/definitions/redm.d.ts#L24198)

Sets whether the wheel is powered.
On all wheel drive cars this works to change which wheels receive power, but if a car's fDriveBiasFront doesn't send power to that wheel, it won't get power anyway. This can be fixed by changing the fDriveBiasFront with SET_VEHICLE_HANDLING_FLOAT.
Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
This is a shortcut to a flag in SET_VEHICLE_WHEEL_FLAGS.

### Parameters

| Parameter | Type |
| ------ | ------ |
| `vehicle` | `number` |
| `wheelIndex` | `number` |
| `powered` | `boolean` |

### Returns

`void`
