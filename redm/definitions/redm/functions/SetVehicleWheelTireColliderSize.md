[@nativewrappers/fivem](../../../../README.md) / [redm/definitions/redm](../README.md) / SetVehicleWheelTireColliderSize

# Function: SetVehicleWheelTireColliderSize()

## Call Signature

```ts
function SetVehicleWheelTireColliderSize(
   vehicle, 
   wheelIndex, 
   value): void;
```

Defined in: [src/common-game/definitions/redm.d.ts:24252](https://github.com/nativewrappers/nativewrappers/blob/dc9e2638d1087a48984d9b0f544b0f441166f8eb/src/common-game/definitions/redm.d.ts#L24252)

Use along with SetVehicleWheelSize to resize the wheels (this native sets the collider size affecting physics while SetVehicleWheelSize will change visual size).

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `vehicle` | `number` | The vehicle to obtain data for. |
| `wheelIndex` | `number` | Index of wheel, 0-3. |
| `value` | `number` | Radius of tire collider. |

### Returns

`void`

## Call Signature

```ts
function SetVehicleWheelTireColliderSize(
   vehicle, 
   wheelIndex, 
   value): void;
```

Defined in: [src/redm/definitions/redm.d.ts:24252](https://github.com/nativewrappers/nativewrappers/blob/dc9e2638d1087a48984d9b0f544b0f441166f8eb/src/redm/definitions/redm.d.ts#L24252)

Use along with SetVehicleWheelSize to resize the wheels (this native sets the collider size affecting physics while SetVehicleWheelSize will change visual size).

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `vehicle` | `number` | The vehicle to obtain data for. |
| `wheelIndex` | `number` | Index of wheel, 0-3. |
| `value` | `number` | Radius of tire collider. |

### Returns

`void`
