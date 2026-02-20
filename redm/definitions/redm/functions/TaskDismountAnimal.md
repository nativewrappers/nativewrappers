[@nativewrappers/fivem](../../../../README.md) / [redm/definitions/redm](../README.md) / TaskDismountAnimal

# Function: TaskDismountAnimal()

## Call Signature

```ts
function TaskDismountAnimal(
   rider, 
   taskFlag, 
   p2, 
   p3, 
   p4, 
   p5): void;
```

Defined in: [src/common-game/definitions/redm.d.ts:25291](https://github.com/nativewrappers/nativewrappers/blob/8fd2e00d7e048b9268f6c990b83eef252e4d6150/src/common-game/definitions/redm.d.ts#L25291)

Dismounts the ped from the animal it's mounted on. taskFlag affects what side the rider gets off. 1 << 18 will get off on the left side, where any other value will get off on the right side. The only other known value are 1 << 17 and 1 << 24, which has the behavior of any other value (getting off the animal from the right side). p2-p5 are almost always 0.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `rider` | `number` | : |
| `taskFlag` | `number` | : |
| `p2` | `number` | : |
| `p3` | `number` | : |
| `p4` | `number` | : |
| `p5` | `number` | : |

### Returns

`void`

## Call Signature

```ts
function TaskDismountAnimal(
   rider, 
   taskFlag, 
   p2, 
   p3, 
   p4, 
   p5): void;
```

Defined in: [src/redm/definitions/redm.d.ts:25291](https://github.com/nativewrappers/nativewrappers/blob/8fd2e00d7e048b9268f6c990b83eef252e4d6150/src/redm/definitions/redm.d.ts#L25291)

Dismounts the ped from the animal it's mounted on. taskFlag affects what side the rider gets off. 1 << 18 will get off on the left side, where any other value will get off on the right side. The only other known value are 1 << 17 and 1 << 24, which has the behavior of any other value (getting off the animal from the right side). p2-p5 are almost always 0.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `rider` | `number` | : |
| `taskFlag` | `number` | : |
| `p2` | `number` | : |
| `p3` | `number` | : |
| `p4` | `number` | : |
| `p5` | `number` | : |

### Returns

`void`
