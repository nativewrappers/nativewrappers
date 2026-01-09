[@nativewrappers/fivem](../../../../README.md) / [redm/definitions/redm](../README.md) / SetVehicleWheelXOffset

# Function: SetVehicleWheelXOffset()

## Call Signature

```ts
function SetVehicleWheelXOffset(
   vehicle, 
   wheelIndex, 
   offset): void;
```

Defined in: [src/common-game/definitions/redm.d.ts:24301](https://github.com/nativewrappers/nativewrappers/blob/5084b61ea79d43bdf84faea5c688d0b87ec5e48b/src/common-game/definitions/redm.d.ts#L24301)

Adjusts the offset of the specified wheel relative to the wheel's axle center.
Needs to be called every frame in order to function properly, as GTA will reset the offset otherwise.
This function can be especially useful to set the track width of a vehicle, for example:
```
function SetVehicleFrontTrackWidth(vehicle, width)
SetVehicleWheelXOffset(vehicle, 0, -width/2)
SetVehicleWheelXOffset(vehicle, 1, width/2)
end
```

### Parameters

| Parameter | Type |
| ------ | ------ |
| `vehicle` | `number` |
| `wheelIndex` | `number` |
| `offset` | `number` |

### Returns

`void`

## Call Signature

```ts
function SetVehicleWheelXOffset(
   vehicle, 
   wheelIndex, 
   offset): void;
```

Defined in: [src/common-game/definitions/redm.d.ts:24321](https://github.com/nativewrappers/nativewrappers/blob/5084b61ea79d43bdf84faea5c688d0b87ec5e48b/src/common-game/definitions/redm.d.ts#L24321)

Adjusts the offset of the specified wheel relative to the wheel's axle center.
Needs to be called every frame in order to function properly, as GTA will reset the offset otherwise.
This function can be especially useful to set the track width of a vehicle, for example:
```
function SetVehicleFrontTrackWidth(vehicle, width)
SetVehicleWheelXOffset(vehicle, 0, -width/2)
SetVehicleWheelXOffset(vehicle, 1, width/2)
end
```

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `vehicle` | `number` |  |
| `wheelIndex` | `number` |  |
| `offset` | `number` |  |

### Returns

`void`

## Call Signature

```ts
function SetVehicleWheelXOffset(
   vehicle, 
   wheelIndex, 
   offset): void;
```

Defined in: [src/redm/definitions/redm.d.ts:24301](https://github.com/nativewrappers/nativewrappers/blob/5084b61ea79d43bdf84faea5c688d0b87ec5e48b/src/redm/definitions/redm.d.ts#L24301)

Adjusts the offset of the specified wheel relative to the wheel's axle center.
Needs to be called every frame in order to function properly, as GTA will reset the offset otherwise.
This function can be especially useful to set the track width of a vehicle, for example:
```
function SetVehicleFrontTrackWidth(vehicle, width)
SetVehicleWheelXOffset(vehicle, 0, -width/2)
SetVehicleWheelXOffset(vehicle, 1, width/2)
end
```

### Parameters

| Parameter | Type |
| ------ | ------ |
| `vehicle` | `number` |
| `wheelIndex` | `number` |
| `offset` | `number` |

### Returns

`void`

## Call Signature

```ts
function SetVehicleWheelXOffset(
   vehicle, 
   wheelIndex, 
   offset): void;
```

Defined in: [src/redm/definitions/redm.d.ts:24321](https://github.com/nativewrappers/nativewrappers/blob/5084b61ea79d43bdf84faea5c688d0b87ec5e48b/src/redm/definitions/redm.d.ts#L24321)

Adjusts the offset of the specified wheel relative to the wheel's axle center.
Needs to be called every frame in order to function properly, as GTA will reset the offset otherwise.
This function can be especially useful to set the track width of a vehicle, for example:
```
function SetVehicleFrontTrackWidth(vehicle, width)
SetVehicleWheelXOffset(vehicle, 0, -width/2)
SetVehicleWheelXOffset(vehicle, 1, width/2)
end
```

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `vehicle` | `number` |  |
| `wheelIndex` | `number` |  |
| `offset` | `number` |  |

### Returns

`void`
