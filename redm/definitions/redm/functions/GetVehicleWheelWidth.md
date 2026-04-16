[@nativewrappers/fivem](../../../../README.md) / [redm/definitions/redm](../README.md) / GetVehicleWheelWidth

# Function: GetVehicleWheelWidth()

## Call Signature

```ts
function GetVehicleWheelWidth(vehicle): number;
```

Defined in: [src/common-game/definitions/redm.d.ts:4605](https://github.com/nativewrappers/nativewrappers/blob/dc9e2638d1087a48984d9b0f544b0f441166f8eb/src/common-game/definitions/redm.d.ts#L4605)

Returns vehicle's wheels' width (width is the same for all the wheels, cannot get/set specific wheel of vehicle).
Only works on non-default wheels (returns 0 in case of default wheels).

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `vehicle` | `number` | The vehicle to obtain data for. |

### Returns

`number`

Float representing width of the wheel (usually between 0.1 and 1.5)

## Call Signature

```ts
function GetVehicleWheelWidth(vehicle): number;
```

Defined in: [src/redm/definitions/redm.d.ts:4605](https://github.com/nativewrappers/nativewrappers/blob/dc9e2638d1087a48984d9b0f544b0f441166f8eb/src/redm/definitions/redm.d.ts#L4605)

Returns vehicle's wheels' width (width is the same for all the wheels, cannot get/set specific wheel of vehicle).
Only works on non-default wheels (returns 0 in case of default wheels).

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `vehicle` | `number` | The vehicle to obtain data for. |

### Returns

`number`

Float representing width of the wheel (usually between 0.1 and 1.5)
