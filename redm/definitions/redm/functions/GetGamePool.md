[@nativewrappers/fivem](../../../../README.md) / [redm/definitions/redm](../README.md) / GetGamePool

# Function: GetGamePool()

## Call Signature

```ts
function GetGamePool(poolname): any;
```

Defined in: [src/common-game/definitions/redm.d.ts:3051](https://github.com/nativewrappers/nativewrappers/blob/8fd2e00d7e048b9268f6c990b83eef252e4d6150/src/common-game/definitions/redm.d.ts#L3051)

Returns all pool handles for the given pool name; the data returned adheres to the following layout:
```
[ 770, 1026, 1282, 1538, 1794, 2050, 2306, 2562, 2818, 3074, 3330, 3586, 3842, 4098, 4354, 4610, ...]
```
### Supported Pools
**1**: CPed\
**2**: CObject\
**3**: CVehicle\
**4**: CPickup

### Parameters

| Parameter | Type |
| ------ | ------ |
| `poolname` | `string` |

### Returns

`any`

An object containing a list of all pool handles

## Call Signature

```ts
function GetGamePool(poolname): any;
```

Defined in: [src/redm/definitions/redm.d.ts:3051](https://github.com/nativewrappers/nativewrappers/blob/8fd2e00d7e048b9268f6c990b83eef252e4d6150/src/redm/definitions/redm.d.ts#L3051)

Returns all pool handles for the given pool name; the data returned adheres to the following layout:
```
[ 770, 1026, 1282, 1538, 1794, 2050, 2306, 2562, 2818, 3074, 3330, 3586, 3842, 4098, 4354, 4610, ...]
```
### Supported Pools
**1**: CPed\
**2**: CObject\
**3**: CVehicle\
**4**: CPickup

### Parameters

| Parameter | Type |
| ------ | ------ |
| `poolname` | `string` |

### Returns

`any`

An object containing a list of all pool handles
