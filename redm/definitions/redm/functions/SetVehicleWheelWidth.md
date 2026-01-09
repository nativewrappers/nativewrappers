[@nativewrappers/fivem](../../../../README.md) / [redm/definitions/redm](../README.md) / SetVehicleWheelWidth

# Function: SetVehicleWheelWidth()

## Call Signature

```ts
function SetVehicleWheelWidth(vehicle, width): boolean;
```

Defined in: [src/common-game/definitions/redm.d.ts:24288](https://github.com/nativewrappers/nativewrappers/blob/5084b61ea79d43bdf84faea5c688d0b87ec5e48b/src/common-game/definitions/redm.d.ts#L24288)

Sets vehicle's wheels' width (width is the same for all the wheels, cannot get/set specific wheel of vehicle).
Only works on non-default wheels.
Returns whether change was successful (can be false if trying to set width for non-default wheels).

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `vehicle` | `number` | The vehicle to set data for. |
| `width` | `number` | Width of the wheels (usually between 0.1 and 1.5 is reasonable). |

### Returns

`boolean`

Bool - whether change was successful or not

## Call Signature

```ts
function SetVehicleWheelWidth(vehicle, width): boolean;
```

Defined in: [src/redm/definitions/redm.d.ts:24288](https://github.com/nativewrappers/nativewrappers/blob/5084b61ea79d43bdf84faea5c688d0b87ec5e48b/src/redm/definitions/redm.d.ts#L24288)

Sets vehicle's wheels' width (width is the same for all the wheels, cannot get/set specific wheel of vehicle).
Only works on non-default wheels.
Returns whether change was successful (can be false if trying to set width for non-default wheels).

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `vehicle` | `number` | The vehicle to set data for. |
| `width` | `number` | Width of the wheels (usually between 0.1 and 1.5 is reasonable). |

### Returns

`boolean`

Bool - whether change was successful or not
