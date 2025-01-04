[@nativewrappers/fivem](../../README.md) / [fivem](../README.md) / Rope

# Class: Rope

Class to manage invisible ropes between entities.

## Constructors

### new Rope()

```ts
new Rope(handle): Rope
```

Create a rope object based on an existing rope in the world.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `handle` | `number` | entity Id of rope. |

#### Returns

[`Rope`](Rope.md)

#### Defined in

[src/fivem/Rope.ts:18](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Rope.ts#L18)

## Accessors

### Handle

```ts
get Handle(): number
```

#### Returns

`number`

#### Defined in

[src/fivem/Rope.ts:22](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Rope.ts#L22)

***

### Length

```ts
get Length(): number
```

Get the length of the rope.

```ts
set Length(length): void
```

Sets the length of the rope.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `length` | `number` | Desired new length of rope. |

#### Returns

`number`

The rope length.

#### Defined in

[src/fivem/Rope.ts:30](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Rope.ts#L30)

***

### VertexCount

```ts
get VertexCount(): number
```

Get the number of vertices on the rope.

#### Returns

`number`

Returns the number of vertices.

#### Defined in

[src/fivem/Rope.ts:48](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Rope.ts#L48)

## Methods

### activatePhysics()

```ts
activatePhysics(): void
```

Activates world physics on the rope object.

#### Returns

`void`

#### Defined in

[src/fivem/Rope.ts:64](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Rope.ts#L64)

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

#### Defined in

[src/fivem/Rope.ts:94](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Rope.ts#L94)

***

### attachEntity()

```ts
attachEntity(entity, position): void
```

Attach the rope to an entity.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `entity` | [`BaseEntity`](BaseEntity.md) | Entity to attach the rope to. |
| `position` | [`Vector3`](Vector3.md) | Location where the rope is to be attached. |

#### Returns

`void`

#### Defined in

[src/fivem/Rope.ts:74](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Rope.ts#L74)

***

### delete()

```ts
delete(): void
```

Delete the rope from the world. This does not delete the rope object.

#### Returns

`void`

#### Defined in

[src/fivem/Rope.ts:160](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Rope.ts#L160)

***

### detachEntity()

```ts
detachEntity(entity): void
```

Detach the rope from an entity.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `entity` | [`BaseEntity`](BaseEntity.md) | Entity to detach the rope from. |

#### Returns

`void`

#### Defined in

[src/fivem/Rope.ts:124](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Rope.ts#L124)

***

### exists()

```ts
exists(): boolean
```

Check if the rope still exists in the world based on it's handle.

#### Returns

`boolean`

Whether the rope exists or not.

#### Defined in

[src/fivem/Rope.ts:169](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Rope.ts#L169)

***

### getVertexCoord()

```ts
getVertexCoord(vertex): Vector3
```

Return the world location of a specified vertex on the rope.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `vertex` | `number` | Vertex to get location from. |

#### Returns

[`Vector3`](Vector3.md)

The vector location of the vertex.

#### Defined in

[src/fivem/Rope.ts:153](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Rope.ts#L153)

***

### pinVertex()

```ts
pinVertex(vertex, position): void
```

Pin a vertex of the rope to a certain location.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `vertex` | `number` | Vertex to pin. |
| `position` | [`Vector3`](Vector3.md) | Location to pin the vertex to. |

#### Returns

`void`

#### Defined in

[src/fivem/Rope.ts:134](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Rope.ts#L134)

***

### resetLength()

```ts
resetLength(reset): void
```

Resets the length of the rope to it's length upon object creation or a length of 1.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `reset` | `boolean` | Whether to reset the length to it's original length or 1. |

#### Returns

`void`

#### Defined in

[src/fivem/Rope.ts:57](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Rope.ts#L57)

***

### unpinVertex()

```ts
unpinVertex(vertex): void
```

Unpin a specified vertex from it's current pinned location (if any).

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `vertex` | `number` | Vertex to unpin. |

#### Returns

`void`

#### Defined in

[src/fivem/Rope.ts:143](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/Rope.ts#L143)
