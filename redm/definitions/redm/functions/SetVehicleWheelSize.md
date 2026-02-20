[@nativewrappers/fivem](../../../../README.md) / [redm/definitions/redm](../README.md) / SetVehicleWheelSize

# Function: SetVehicleWheelSize()

## Call Signature

```ts
function SetVehicleWheelSize(vehicle, size): boolean;
```

Defined in: [src/common-game/definitions/redm.d.ts:24244](https://github.com/nativewrappers/nativewrappers/blob/8fd2e00d7e048b9268f6c990b83eef252e4d6150/src/common-game/definitions/redm.d.ts#L24244)

Sets vehicle's wheels' size (size is the same for all the wheels, cannot get/set specific wheel of vehicle).
Only works on non-default wheels.
Returns whether change was successful (can be false if trying to set size for non-default wheels).

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `vehicle` | `number` | The vehicle to set data for. |
| `size` | `number` | Size of the wheels (usually between 0.5 and 1.5 is reasonable). |

### Returns

`boolean`

Bool - whether change was successful or not

## Call Signature

```ts
function SetVehicleWheelSize(vehicle, size): boolean;
```

Defined in: [src/redm/definitions/redm.d.ts:24244](https://github.com/nativewrappers/nativewrappers/blob/8fd2e00d7e048b9268f6c990b83eef252e4d6150/src/redm/definitions/redm.d.ts#L24244)

Sets vehicle's wheels' size (size is the same for all the wheels, cannot get/set specific wheel of vehicle).
Only works on non-default wheels.
Returns whether change was successful (can be false if trying to set size for non-default wheels).

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `vehicle` | `number` | The vehicle to set data for. |
| `size` | `number` | Size of the wheels (usually between 0.5 and 1.5 is reasonable). |

### Returns

`boolean`

Bool - whether change was successful or not
