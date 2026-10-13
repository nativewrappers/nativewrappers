[@nativewrappers/fivem](../../../../README.md) / [redm/entities/Entity](../README.md) / Entity

# Class: Entity

Defined in: lib/redm/entities/Entity.d.ts:7

## Extends

- [`BaseEntity`](../../BaseEntity/classes/BaseEntity.md)

## Constructors

### Constructor

```ts
new Entity(handle): Entity;
```

Defined in: lib/redm/entities/Entity.d.ts:10

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `handle` | `number` |

#### Returns

`Entity`

#### Overrides

[`BaseEntity`](../../BaseEntity/classes/BaseEntity.md).[`constructor`](../../BaseEntity/classes/BaseEntity.md#constructor)

## Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="bones"></a> `bones?` | `protected` | `any` | lib/redm/entities/Entity.d.ts:9 |
| <a id="type"></a> `type` | `protected` | `ClassTypes` | lib/redm/entities/Entity.d.ts:8 |

## Accessors

### EntityType

#### Get Signature

```ts
get EntityType(): EntityType;
```

Defined in: lib/redm/entities/Entity.d.ts:12

##### Returns

[`EntityType`](../../../enums/Entity/enumerations/EntityType.md)

## Methods

### addTrackingTrails()

```ts
addTrackingTrails(): void;
```

Defined in: lib/redm/entities/Entity.d.ts:11

#### Returns

`void`

***

### applyForce()

```ts
applyForce(
   direction, 
   offset, 
   forceType?, 
   boneIndex?, 
   isDirectional?, 
   ignoreUpVec?, 
   isForceRel?): void;
```

Defined in: lib/redm/entities/Entity.d.ts:22

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `direction` | `Vector3` | the direction to apply the force towards |
| `offset` | `Vector3` | the offset to apply the force to |
| `forceType?` | [`ForceType`](../../../enums/Entity/enumerations/ForceType.md) | the force type to apply |
| `boneIndex?` | `number` | the boneIndex to apply the force to, or 0 |
| `isDirectional?` | `boolean` | whether the direction is relational? |
| `ignoreUpVec?` | `boolean` | ? |
| `isForceRel?` | `boolean` | whether to multiply the force by the object mass & acceleration |

#### Returns

`void`

***

### applyForceToCenter()

```ts
applyForceToCenter(
   direction, 
   forceType?, 
   isDirectional?, 
   isForceRel?): void;
```

Defined in: lib/redm/entities/Entity.d.ts:29

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `direction` | `Vector3` | the direction to apply the force towards |
| `forceType?` | [`ForceType`](../../../enums/Entity/enumerations/ForceType.md) | the force type to use |
| `isDirectional?` | `boolean` | whether the direction is local? |
| `isForceRel?` | `boolean` | whether to multiply the force by the object mass & acceleration |

#### Returns

`void`

***

### attachTo()

```ts
attachTo(
   tgtEntity, 
   pos, 
   rot, 
   boneIndex?, 
   enableCollision?, 
   useSoftPinning?, 
   vertexIndex?, 
   fixedRot?): void;
```

Defined in: lib/redm/entities/Entity.d.ts:41

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `tgtEntity` | `Entity` | the entity to attach to the |
| `pos` | `Vector3` | the position offset |
| `rot` | `Vector3` | the rotation to apply to the entity |
| `boneIndex?` | `number` | the bone to attach the entity to, or 0 for the center of the entity |
| `enableCollision?` | `boolean` | whether the entity should have collision enabled |
| `useSoftPinning?` | `boolean` | when false the entity will not detach from the |
| `vertexIndex?` | `number` | ? |
| `fixedRot?` | `boolean` | ? |

#### Returns

`void`

#### Throws

Error if tgtEntity and  are the same entity
