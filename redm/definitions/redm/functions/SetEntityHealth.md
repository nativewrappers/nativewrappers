[@nativewrappers/fivem](../../../../README.md) / [redm/definitions/redm](../README.md) / SetEntityHealth

# Function: SetEntityHealth()

## Call Signature

```ts
function SetEntityHealth(
   entity, 
   healthAmount, 
   p2?): void;
```

Defined in: [src/common-game/definitions/redm.d.ts:21920](https://github.com/nativewrappers/nativewrappers/blob/ce43691ffb0bea7b7243736baf23594a9ade4b3d/src/common-game/definitions/redm.d.ts#L21920)

Sets the entity's health. healthAmount sets the health value to that, and sets the maximum health core value. Setting healthAmount to 0 will kill the entity. Unclear what role p2 serves, but it's either 0 or an entity handle.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `entity` | `number` | : |
| `healthAmount` | `number` | : |
| `p2?` | `number` | : |

### Returns

`void`

## Call Signature

```ts
function SetEntityHealth(
   entity, 
   healthAmount, 
   p2): void;
```

Defined in: [src/redm/definitions/redm.d.ts:21920](https://github.com/nativewrappers/nativewrappers/blob/ce43691ffb0bea7b7243736baf23594a9ade4b3d/src/redm/definitions/redm.d.ts#L21920)

Sets the entity's health. healthAmount sets the health value to that, and sets the maximum health core value. Setting healthAmount to 0 will kill the entity. Unclear what role p2 serves, but it's either 0 or an entity handle.

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `entity` | `number` | : |
| `healthAmount` | `number` | : |
| `p2` | `number` | : |

### Returns

`void`
