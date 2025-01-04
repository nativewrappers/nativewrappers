[@nativewrappers/fivem](../../README.md) / [redm](../README.md) / Entity

# Class: Entity

## Extends

- `BaseEntity`

## Constructors

### new Entity()

```ts
new Entity(handle): Entity
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `handle` | `number` |

#### Returns

[`Entity`](Entity.md)

#### Overrides

`BaseEntity.constructor`

#### Defined in

[src/redm/entities/Entity.ts:7](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/redm/entities/Entity.ts#L7)

## Accessors

### EntityType

```ts
get EntityType(): EntityType
```

#### Returns

`EntityType`

#### Defined in

[src/redm/entities/Entity.ts:16](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/redm/entities/Entity.ts#L16)

***

### Handle

```ts
get Handle(): number
```

#### Returns

`number`

#### Inherited from

`BaseEntity.Handle`

#### Defined in

[src/redm/entities/BaseEntity.ts:7](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/redm/entities/BaseEntity.ts#L7)

***

### Health

```ts
get Health(): number
```

```ts
set Health(amount): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `amount` | `number` |

#### Returns

`number`

#### Inherited from

`BaseEntity.Health`

#### Defined in

[src/redm/entities/BaseEntity.ts:15](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/redm/entities/BaseEntity.ts#L15)

## Methods

### addTrackingTrails()

```ts
addTrackingTrails(): void
```

#### Returns

`void`

#### Defined in

[src/redm/entities/Entity.ts:11](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/redm/entities/Entity.ts#L11)

***

### applyForce()

```ts
applyForce(
   direction, 
   offset, 
   forceType, 
   boneIndex, 
   isDirectional, 
   ignoreUpVec, 
   isForceRel): void
```

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `direction` | [`Vector3`](../../fivem/classes/Vector3.md) | `undefined` | the direction to apply the force towards |
| `offset` | [`Vector3`](../../fivem/classes/Vector3.md) | `undefined` | the offset to apply the force to |
| `forceType` | `ForceType` | `ForceType.MinForce` | the force type to apply |
| `boneIndex` | `number` | `0` | the boneIndex to apply the force to, or 0 |
| `isDirectional` | `boolean` | `false` | whether the direction is relational? |
| `ignoreUpVec` | `boolean` | `true` | ? |
| `isForceRel` | `boolean` | `true` | whether to multiply the force by the object mass & acceleration |

#### Returns

`void`

#### Defined in

[src/redm/entities/Entity.ts:29](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/redm/entities/Entity.ts#L29)

***

### applyForceToCenter()

```ts
applyForceToCenter(
   direction, 
   forceType, 
   isDirectional, 
   isForceRel): void
```

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `direction` | [`Vector3`](../../fivem/classes/Vector3.md) | `undefined` | the direction to apply the force towards |
| `forceType` | `ForceType` | `ForceType.MinForce` | the force type to use |
| `isDirectional` | `boolean` | `false` | whether the direction is local? |
| `isForceRel` | `boolean` | `true` | whether to multiply the force by the object mass & acceleration |

#### Returns

`void`

#### Defined in

[src/redm/entities/Entity.ts:64](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/redm/entities/Entity.ts#L64)

***

### attachTo()

```ts
attachTo(
   tgtEntity, 
   pos, 
   rot, 
   boneIndex, 
   enableCollision, 
   useSoftPinning, 
   vertexIndex, 
   fixedRot): void
```

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `tgtEntity` | [`Entity`](Entity.md) | `undefined` | the entity to attach to the {@Entity } |
| `pos` | [`Vector3`](../../fivem/classes/Vector3.md) | `undefined` | the position offset |
| `rot` | [`Vector3`](../../fivem/classes/Vector3.md) | `undefined` | the rotation to apply to the entity |
| `boneIndex` | `number` | `0` | the bone to attach the entity to, or 0 for the center of the entity |
| `enableCollision` | `boolean` | `true` | whether the entity should have collision enabled |
| `useSoftPinning` | `boolean` | `false` | when false the entity will not detach from the {@Entity } |
| `vertexIndex` | `number` | `0` | ? |
| `fixedRot` | `boolean` | `true` | ? |

#### Returns

`void`

#### Throws

Error if tgtEntity and {@Entity } are the same entity

#### Defined in

[src/redm/entities/Entity.ts:95](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/redm/entities/Entity.ts#L95)
