[@nativewrappers/fivem](../../../README.md) / [fivem/Rope](../README.md) / Rope

# Class: Rope

Defined in: lib/fivem/Rope.d.ts:6

Class to manage invisible ropes between entities.

## Constructors

### Constructor

```ts
new Rope(handle): Rope;
```

Defined in: lib/fivem/Rope.d.ts:16

Create a rope object based on an existing rope in the world.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `handle` | `number` | entity Id of rope. |

#### Returns

`Rope`

## Accessors

### Handle

#### Get Signature

```ts
get Handle(): number;
```

Defined in: lib/fivem/Rope.d.ts:17

##### Returns

`number`

***

### Length

#### Get Signature

```ts
get Length(): number;
```

Defined in: lib/fivem/Rope.d.ts:23

Get the length of the rope.

##### Returns

`number`

The rope length.

#### Set Signature

```ts
set Length(length): void;
```

Defined in: lib/fivem/Rope.d.ts:29

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
get VertexCount(): number;
```

Defined in: lib/fivem/Rope.d.ts:35

Get the number of vertices on the rope.

##### Returns

`number`

Returns the number of vertices.

## Methods

### activatePhysics()

```ts
activatePhysics(): void;
```

Defined in: lib/fivem/Rope.d.ts:45

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
   length): void;
```

Defined in: lib/fivem/Rope.d.ts:62

Attach the rope between two entities at given locations on the entities.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `entityOne` | [`BaseEntity`](../../models/BaseEntity/classes/BaseEntity.md) | The first entity to attach to. |
| `positionOne` | `Vector3` | Where on the first entity to attach the rope to. |
| `entityTwo` | [`BaseEntity`](../../models/BaseEntity/classes/BaseEntity.md) | The second entity to attach to. |
| `positionTwo` | `Vector3` | Where on the second entity to attach the rope to. |
| `length` | `number` | The desired length of the rope between the two entities. |

#### Returns

`void`

***

### attachEntity()

```ts
attachEntity(entity, position): void;
```

Defined in: lib/fivem/Rope.d.ts:52

Attach the rope to an entity.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `entity` | [`BaseEntity`](../../models/BaseEntity/classes/BaseEntity.md) | Entity to attach the rope to. |
| `position` | `Vector3` | Location where the rope is to be attached. |

#### Returns

`void`

***

### delete()

```ts
delete(): void;
```

Defined in: lib/fivem/Rope.d.ts:92

Delete the rope from the world. This does not delete the rope object.

#### Returns

`void`

***

### detachEntity()

```ts
detachEntity(entity): void;
```

Defined in: lib/fivem/Rope.d.ts:68

Detach the rope from an entity.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `entity` | [`BaseEntity`](../../models/BaseEntity/classes/BaseEntity.md) | Entity to detach the rope from. |

#### Returns

`void`

***

### exists()

```ts
exists(): boolean;
```

Defined in: lib/fivem/Rope.d.ts:98

Check if the rope still exists in the world based on it's handle.

#### Returns

`boolean`

Whether the rope exists or not.

***

### getVertexCoord()

```ts
getVertexCoord(vertex): Vector3;
```

Defined in: lib/fivem/Rope.d.ts:88

Return the world location of a specified vertex on the rope.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `vertex` | `number` | Vertex to get location from. |

#### Returns

`Vector3`

The vector location of the vertex.

***

### pinVertex()

```ts
pinVertex(vertex, position): void;
```

Defined in: lib/fivem/Rope.d.ts:75

Pin a vertex of the rope to a certain location.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `vertex` | `number` | Vertex to pin. |
| `position` | `Vector3` | Location to pin the vertex to. |

#### Returns

`void`

***

### resetLength()

```ts
resetLength(reset): void;
```

Defined in: lib/fivem/Rope.d.ts:41

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
unpinVertex(vertex): void;
```

Defined in: lib/fivem/Rope.d.ts:81

Unpin a specified vertex from it's current pinned location (if any).

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `vertex` | `number` | Vertex to unpin. |

#### Returns

`void`
