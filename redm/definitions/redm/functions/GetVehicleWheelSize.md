[@nativewrappers/fivem](../../../../README.md) / [redm/definitions/redm](../README.md) / GetVehicleWheelSize

# Function: GetVehicleWheelSize()

## Call Signature

```ts
function GetVehicleWheelSize(vehicle): number;
```

Defined in: [src/common-game/definitions/redm.d.ts:4530](https://github.com/nativewrappers/nativewrappers/blob/ce43691ffb0bea7b7243736baf23594a9ade4b3d/src/common-game/definitions/redm.d.ts#L4530)

Returns vehicle's wheels' size (size is the same for all the wheels, cannot get/set specific wheel of vehicle).
Only works on non-default wheels (returns 0 in case of default wheels).

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `vehicle` | `number` | The vehicle to obtain data for. |

### Returns

`number`

Float representing size of the wheel (usually between 0.5 and 1.5)

## Call Signature

```ts
function GetVehicleWheelSize(vehicle): number;
```

Defined in: [src/redm/definitions/redm.d.ts:4530](https://github.com/nativewrappers/nativewrappers/blob/ce43691ffb0bea7b7243736baf23594a9ade4b3d/src/redm/definitions/redm.d.ts#L4530)

Returns vehicle's wheels' size (size is the same for all the wheels, cannot get/set specific wheel of vehicle).
Only works on non-default wheels (returns 0 in case of default wheels).

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `vehicle` | `number` | The vehicle to obtain data for. |

### Returns

`number`

Float representing size of the wheel (usually between 0.5 and 1.5)
