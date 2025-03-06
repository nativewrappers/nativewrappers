[@nativewrappers/fivem](../../README.md) / [redm](../README.md) / Entity

# Class: Entity

Defined in: redm/entities/Entity.d.ts:5

## Extends

- `BaseEntity`

## Constructors

### new Entity()

```ts
new Entity(handle): Entity
```

Defined in: redm/entities/Entity.d.ts:6

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `handle` | `number` |

#### Returns

[`Entity`](Entity.md)

#### Overrides

```ts
BaseEntity.constructor
```

## Accessors

### EntityType

#### Get Signature

```ts
get EntityType(): EntityType
```

Defined in: redm/entities/Entity.d.ts:8

##### Returns

`EntityType`

***

### Exists

#### Get Signature

```ts
get Exists(): boolean
```

Defined in: redm/entities/BaseEntity.d.ts:37

##### Returns

`boolean`

Returns true if the entity handle is not 0 and exists in the game engine

#### Inherited from

```ts
BaseEntity.Exists
```

***

### Handle

#### Get Signature

```ts
get Handle(): number
```

Defined in: redm/entities/BaseEntity.d.ts:41

##### Returns

`number`

The entitys current handle.

#### Inherited from

```ts
BaseEntity.Handle
```

***

### Heading

#### Get Signature

```ts
get Heading(): number
```

Defined in: redm/entities/BaseEntity.d.ts:53

##### Returns

`number`

the heading of the current BaseEntity

#### Set Signature

```ts
set Heading(heading): void
```

Defined in: redm/entities/BaseEntity.d.ts:57

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `heading` | `number` | sets the entitys heading to the specified heading, this can be in the range of 0..360 |

##### Returns

`void`

#### Inherited from

```ts
BaseEntity.Heading
```

***

### Health

#### Get Signature

```ts
get Health(): number
```

Defined in: redm/entities/BaseEntity.d.ts:49

##### Returns

`number`

the amount of health the current BaseEntity has

#### Set Signature

```ts
set Health(amount): void
```

Defined in: redm/entities/BaseEntity.d.ts:45

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `amount` | `number` | the health to set the health to, setting to `0` will kill the entity, if using on a [Ped](Ped.md) you should check the MaxHealth before setting. |

##### Returns

`void`

#### Inherited from

```ts
BaseEntity.Health
```

***

### IsNetworked

#### Get Signature

```ts
get IsNetworked(): boolean
```

Defined in: redm/entities/BaseEntity.d.ts:33

##### Returns

`boolean`

`true` if the current entity is networked, false otherwise

#### Inherited from

```ts
BaseEntity.IsNetworked
```

***

### NetworkId

#### Get Signature

```ts
get NetworkId(): number
```

Defined in: redm/entities/BaseEntity.d.ts:29

##### Returns

`number`

the network for the specified entity, this doesn't check if the entity is networked, you should use [BaseEntity.IsNetworked](Entity.md#isnetworked)

#### Inherited from

```ts
BaseEntity.NetworkId
```

***

### Position

#### Get Signature

```ts
get Position(): Vector3
```

Defined in: redm/entities/BaseEntity.d.ts:61

##### Returns

`Vector3`

the position of the current Entity

#### Set Signature

```ts
set Position(pos): void
```

Defined in: redm/entities/BaseEntity.d.ts:66

You should (almost) always try to load the collisions before setting the entitys position if going a long distance.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `pos` | `Vector3` | sets the position for the current ped |

##### Returns

`void`

#### Inherited from

```ts
BaseEntity.Position
```

## Methods

### addTrackingTrails()

```ts
addTrackingTrails(): void
```

Defined in: redm/entities/Entity.d.ts:7

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
   isForceRel?): void
```

Defined in: redm/entities/Entity.d.ts:18

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `direction` | `Vector3` | the direction to apply the force towards |
| `offset` | `Vector3` | the offset to apply the force to |
| `forceType`? | `ForceType` | the force type to apply |
| `boneIndex`? | `number` | the boneIndex to apply the force to, or 0 |
| `isDirectional`? | `boolean` | whether the direction is relational? |
| `ignoreUpVec`? | `boolean` | ? |
| `isForceRel`? | `boolean` | whether to multiply the force by the object mass & acceleration |

#### Returns

`void`

***

### applyForceToCenter()

```ts
applyForceToCenter(
   direction, 
   forceType?, 
   isDirectional?, 
   isForceRel?): void
```

Defined in: redm/entities/Entity.d.ts:25

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `direction` | `Vector3` | the direction to apply the force towards |
| `forceType`? | `ForceType` | the force type to use |
| `isDirectional`? | `boolean` | whether the direction is local? |
| `isForceRel`? | `boolean` | whether to multiply the force by the object mass & acceleration |

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
   fixedRot?): void
```

Defined in: redm/entities/Entity.d.ts:37

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `tgtEntity` | [`Entity`](Entity.md) | the entity to attach to the {@Entity } |
| `pos` | `Vector3` | the position offset |
| `rot` | `Vector3` | the rotation to apply to the entity |
| `boneIndex`? | `number` | the bone to attach the entity to, or 0 for the center of the entity |
| `enableCollision`? | `boolean` | whether the entity should have collision enabled |
| `useSoftPinning`? | `boolean` | when false the entity will not detach from the {@Entity } |
| `vertexIndex`? | `number` | ? |
| `fixedRot`? | `boolean` | ? |

#### Returns

`void`

#### Throws

Error if tgtEntity and {@Entity } are the same entity

***

### replaceHandle()

```ts
replaceHandle(newHandle): void
```

Defined in: redm/entities/BaseEntity.d.ts:25

Replaces the current handle for the entity used on, this hsould be used sparringly, mainly
in situations where you're going to reuse an entity over and over and don't want to make a
new entity every time.

 **WARNING**: This does no checks, if you provide it an invalid entity it will use it

```ts
const REUSABLE_ENTITY = new Entity(entityHandle);

onNet("entityHandler", (entNetId: number) => {
 // if no net entity we should ignore
 if (!NetworkDoesEntityExistWithNetworkId(entNetId)) return;

 // Reuse our entity so we don't have to initialize a new one
 REUSABLE_ENTITY.replaceHandle(NetworkGetEntityFromNetworkId(entNetId));
 // Do something with REUSABLE_ENTITY entity
})
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `newHandle` | `number` |

#### Returns

`void`

#### Inherited from

```ts
BaseEntity.replaceHandle
```
