[@nativewrappers/fivem](../../../../README.md) / [redm/definitions/redm](../README.md) / GetVehicleWheelRotationSpeed

# Function: GetVehicleWheelRotationSpeed()

## Call Signature

```ts
function GetVehicleWheelRotationSpeed(vehicle, wheelIndex): number;
```

Defined in: [src/common-game/definitions/redm.d.ts:4519](https://github.com/nativewrappers/nativewrappers/blob/ce43691ffb0bea7b7243736baf23594a9ade4b3d/src/common-game/definitions/redm.d.ts#L4519)

Gets the rotation speed of a wheel.
This is used internally to calcuate GET_VEHICLE_WHEEL_SPEED.
Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.

### Parameters

| Parameter | Type |
| ------ | ------ |
| `vehicle` | `number` |
| `wheelIndex` | `number` |

### Returns

`number`

The angular velocity of the wheel.

## Call Signature

```ts
function GetVehicleWheelRotationSpeed(vehicle, wheelIndex): number;
```

Defined in: [src/redm/definitions/redm.d.ts:4519](https://github.com/nativewrappers/nativewrappers/blob/ce43691ffb0bea7b7243736baf23594a9ade4b3d/src/redm/definitions/redm.d.ts#L4519)

Gets the rotation speed of a wheel.
This is used internally to calcuate GET_VEHICLE_WHEEL_SPEED.
Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.

### Parameters

| Parameter | Type |
| ------ | ------ |
| `vehicle` | `number` |
| `wheelIndex` | `number` |

### Returns

`number`

The angular velocity of the wheel.
