[@nativewrappers/fivem](../../README.md) / [fivem](../README.md) / Rope

# Class: Rope

Defined in: [src/fivem/Rope.ts:7](https://github.com/nativewrappers/fivem/blob/b9a4f02a0f902a29cccc3c350b3c8379abeb4a1b/src/fivem/Rope.ts#L7)

Class to manage invisible ropes between entities.

## Constructors

### new Rope()

```ts
new Rope(handle): Rope
```

Defined in: [src/fivem/Rope.ts:18](https://github.com/nativewrappers/fivem/blob/b9a4f02a0f902a29cccc3c350b3c8379abeb4a1b/src/fivem/Rope.ts#L18)

Create a rope object based on an existing rope in the world.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `handle` | `number` | entity Id of rope. |

#### Returns

[`Rope`](Rope.md)

## Accessors

### Handle

#### Get Signature

```ts
get Handle(): number
```

Defined in: [src/fivem/Rope.ts:22](https://github.com/nativewrappers/fivem/blob/b9a4f02a0f902a29cccc3c350b3c8379abeb4a1b/src/fivem/Rope.ts#L22)

##### Returns

`number`

***

### Length

#### Get Signature

```ts
get Length(): number
```

Defined in: [src/fivem/Rope.ts:30](https://github.com/nativewrappers/fivem/blob/b9a4f02a0f902a29cccc3c350b3c8379abeb4a1b/src/fivem/Rope.ts#L30)

Get the length of the rope.

##### Returns

`number`

The rope length.

#### Set Signature

```ts
set Length(length): void
```

Defined in: [src/fivem/Rope.ts:39](https://github.com/nativewrappers/fivem/blob/b9a4f02a0f902a29cccc3c350b3c8379abeb4a1b/src/fivem/Rope.ts#L39)

Sets the length of the rope.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `length` | `number` | Desired new length of rope. |

##### Returns

`void`

***

### VertexCount

#### Get Signature

```ts
get VertexCount(): number
```

Defined in: [src/fivem/Rope.ts:48](https://github.com/nativewrappers/fivem/blob/b9a4f02a0f902a29cccc3c350b3c8379abeb4a1b/src/fivem/Rope.ts#L48)

Get the number of vertices on the rope.

##### Returns

`number`

Returns the number of vertices.

## Methods

### activatePhysics()

```ts
activatePhysics(): void
```

Defined in: [src/fivem/Rope.ts:64](https://github.com/nativewrappers/fivem/blob/b9a4f02a0f902a29cccc3c350b3c8379abeb4a1b/src/fivem/Rope.ts#L64)

Activates world physics on the rope object.

#### Returns

`void`

***

### attachEntities()

```ts
attachEntities(
   entityOne, 
   positionOne, 
   entityTwo, 
   positionTwo, 
   length): void
```

Defined in: [src/fivem/Rope.ts:94](https://github.com/nativewrappers/fivem/blob/b9a4f02a0f902a29cccc3c350b3c8379abeb4a1b/src/fivem/Rope.ts#L94)

Attach the rope between two entities at given locations on the entities.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `entityOne` | [`BaseEntity`](BaseEntity.md) | The first entity to attach to. |
| `positionOne` | [`Vector3`](Vector3.md) | Where on the first entity to attach the rope to. |
| `entityTwo` | [`BaseEntity`](BaseEntity.md) | The second entity to attach to. |
| `positionTwo` | [`Vector3`](Vector3.md) | Where on the second entity to attach the rope to. |
| `length` | `number` | The desired length of the rope between the two entities. |

#### Returns

`void`

***

### attachEntity()

```ts
attachEntity(entity, position): void
```

Defined in: [src/fivem/Rope.ts:74](https://github.com/nativewrappers/fivem/blob/b9a4f02a0f902a29cccc3c350b3c8379abeb4a1b/src/fivem/Rope.ts#L74)

Attach the rope to an entity.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `entity` | [`BaseEntity`](BaseEntity.md) | Entity to attach the rope to. |
| `position` | [`Vector3`](Vector3.md) | Location where the rope is to be attached. |

#### Returns

`void`

***

### delete()

```ts
delete(): void
```

Defined in: [src/fivem/Rope.ts:160](https://github.com/nativewrappers/fivem/blob/b9a4f02a0f902a29cccc3c350b3c8379abeb4a1b/src/fivem/Rope.ts#L160)

Delete the rope from the world. This does not delete the rope object.

#### Returns

`void`

***

### detachEntity()

```ts
detachEntity(entity): void
```

Defined in: [src/fivem/Rope.ts:124](https://github.com/nativewrappers/fivem/blob/b9a4f02a0f902a29cccc3c350b3c8379abeb4a1b/src/fivem/Rope.ts#L124)

Detach the rope from an entity.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `entity` | [`BaseEntity`](BaseEntity.md) | Entity to detach the rope from. |

#### Returns

`void`

***

### exists()

```ts
exists(): boolean
```

Defined in: [src/fivem/Rope.ts:169](https://github.com/nativewrappers/fivem/blob/b9a4f02a0f902a29cccc3c350b3c8379abeb4a1b/src/fivem/Rope.ts#L169)

Check if the rope still exists in the world based on it's handle.

#### Returns

`boolean`

Whether the rope exists or not.

***

### getVertexCoord()

```ts
getVertexCoord(vertex): Vector3
```

Defined in: [src/fivem/Rope.ts:153](https://github.com/nativewrappers/fivem/blob/b9a4f02a0f902a29cccc3c350b3c8379abeb4a1b/src/fivem/Rope.ts#L153)

Return the world location of a specified vertex on the rope.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `vertex` | `number` | Vertex to get location from. |

#### Returns

[`Vector3`](Vector3.md)

The vector location of the vertex.

***

### pinVertex()

```ts
pinVertex(vertex, position): void
```

Defined in: [src/fivem/Rope.ts:134](https://github.com/nativewrappers/fivem/blob/b9a4f02a0f902a29cccc3c350b3c8379abeb4a1b/src/fivem/Rope.ts#L134)

Pin a vertex of the rope to a certain location.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `vertex` | `number` | Vertex to pin. |
| `position` | [`Vector3`](Vector3.md) | Location to pin the vertex to. |

#### Returns

`void`

***

### resetLength()

```ts
resetLength(reset): void
```

Defined in: [src/fivem/Rope.ts:57](https://github.com/nativewrappers/fivem/blob/b9a4f02a0f902a29cccc3c350b3c8379abeb4a1b/src/fivem/Rope.ts#L57)

Resets the length of the rope to it's length upon object creation or a length of 1.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `reset` | `boolean` | Whether to reset the length to it's original length or 1. |

#### Returns

`void`

***

### unpinVertex()

```ts
unpinVertex(vertex): void
```

Defined in: [src/fivem/Rope.ts:143](https://github.com/nativewrappers/fivem/blob/b9a4f02a0f902a29cccc3c350b3c8379abeb4a1b/src/fivem/Rope.ts#L143)

Unpin a specified vertex from it's current pinned location (if any).

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `vertex` | `number` | Vertex to unpin. |

#### Returns

`void`
