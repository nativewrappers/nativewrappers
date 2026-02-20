[@nativewrappers/fivem](../../../../README.md) / [redm/definitions/redm](../README.md) / SetVehicleHandlingField

# Function: SetVehicleHandlingField()

## Call Signature

```ts
function SetVehicleHandlingField(
   vehicle, 
   class_, 
   fieldName, 
   value): void;
```

Defined in: [src/common-game/definitions/redm.d.ts:23944](https://github.com/nativewrappers/nativewrappers/blob/8fd2e00d7e048b9268f6c990b83eef252e4d6150/src/common-game/definitions/redm.d.ts#L23944)

Sets a handling override for a specific vehicle. Certain handling flags can only be set globally using `SET_HANDLING_FIELD`, this might require some experimentation.
Example: `SetVehicleHandlingField(vehicle, 'CHandlingData', 'fSteeringLock', 360.0)`

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `vehicle` | `number` | The vehicle to set data for. |
| `class_` | `string` | The handling class to set. Only "CHandlingData" is supported at this time. |
| `fieldName` | `string` | The field name to set. These match the keys in `handling.meta`. |
| `value` | `number` | The value to set. |

### Returns

`void`

## Call Signature

```ts
function SetVehicleHandlingField(
   vehicle, 
   class_, 
   fieldName, 
   value): void;
```

Defined in: [src/common-game/definitions/redm.d.ts:23959](https://github.com/nativewrappers/nativewrappers/blob/8fd2e00d7e048b9268f6c990b83eef252e4d6150/src/common-game/definitions/redm.d.ts#L23959)

Sets a handling override for a specific vehicle. Certain handling flags can only be set globally using `SET_HANDLING_FIELD`, this might require some experimentation.
Example: `SetVehicleHandlingField(vehicle, 'CHandlingData', 'fSteeringLock', 360.0)`

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `vehicle` | `number` | The vehicle to set data for. |
| `class_` | `string` | The handling class to set. Only "CHandlingData" is supported at this time. |
| `fieldName` | `string` | The field name to set. These match the keys in `handling.meta`. |
| `value` | `number` | The value to set. |

### Returns

`void`

## Call Signature

```ts
function SetVehicleHandlingField(
   vehicle, 
   class_, 
   fieldName, 
   value): void;
```

Defined in: [src/redm/definitions/redm.d.ts:23944](https://github.com/nativewrappers/nativewrappers/blob/8fd2e00d7e048b9268f6c990b83eef252e4d6150/src/redm/definitions/redm.d.ts#L23944)

Sets a handling override for a specific vehicle. Certain handling flags can only be set globally using `SET_HANDLING_FIELD`, this might require some experimentation.
Example: `SetVehicleHandlingField(vehicle, 'CHandlingData', 'fSteeringLock', 360.0)`

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `vehicle` | `number` | The vehicle to set data for. |
| `class_` | `string` | The handling class to set. Only "CHandlingData" is supported at this time. |
| `fieldName` | `string` | The field name to set. These match the keys in `handling.meta`. |
| `value` | `number` | The value to set. |

### Returns

`void`

## Call Signature

```ts
function SetVehicleHandlingField(
   vehicle, 
   class_, 
   fieldName, 
   value): void;
```

Defined in: [src/redm/definitions/redm.d.ts:23959](https://github.com/nativewrappers/nativewrappers/blob/8fd2e00d7e048b9268f6c990b83eef252e4d6150/src/redm/definitions/redm.d.ts#L23959)

Sets a handling override for a specific vehicle. Certain handling flags can only be set globally using `SET_HANDLING_FIELD`, this might require some experimentation.
Example: `SetVehicleHandlingField(vehicle, 'CHandlingData', 'fSteeringLock', 360.0)`

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `vehicle` | `number` | The vehicle to set data for. |
| `class_` | `string` | The handling class to set. Only "CHandlingData" is supported at this time. |
| `fieldName` | `string` | The field name to set. These match the keys in `handling.meta`. |
| `value` | `number` | The value to set. |

### Returns

`void`
