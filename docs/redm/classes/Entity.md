[@nativewrappers/fivem](../../README.md) / [redm](../README.md) / Entity

# Class: Entity

Defined in: [src/redm/entities/Entity.ts:6](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/redm/entities/Entity.ts#L6)

## Extends

- `BaseEntity`

## Constructors

### new Entity()

```ts
new Entity(handle): Entity
```

Defined in: [src/redm/entities/Entity.ts:8](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/redm/entities/Entity.ts#L8)

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

Defined in: [src/redm/entities/Entity.ts:17](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/redm/entities/Entity.ts#L17)

##### Returns

`EntityType`

***

### Exists

#### Get Signature

```ts
get Exists(): boolean
```

Defined in: [src/redm/entities/BaseEntity.ts:52](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/redm/entities/BaseEntity.ts#L52)

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

Defined in: [src/redm/entities/BaseEntity.ts:59](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/redm/entities/BaseEntity.ts#L59)

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

Defined in: [src/redm/entities/BaseEntity.ts:80](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/redm/entities/BaseEntity.ts#L80)

##### Returns

`number`

the heading of the current BaseEntity

#### Set Signature

```ts
set Heading(heading): void
```

Defined in: [src/redm/entities/BaseEntity.ts:87](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/redm/entities/BaseEntity.ts#L87)

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

Defined in: [src/redm/entities/BaseEntity.ts:73](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/redm/entities/BaseEntity.ts#L73)

##### Returns

`number`

the amount of health the current BaseEntity has

#### Set Signature

```ts
set Health(amount): void
```

Defined in: [src/redm/entities/BaseEntity.ts:66](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/redm/entities/BaseEntity.ts#L66)

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

Defined in: [src/redm/entities/BaseEntity.ts:45](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/redm/entities/BaseEntity.ts#L45)

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

Defined in: [src/redm/entities/BaseEntity.ts:38](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/redm/entities/BaseEntity.ts#L38)

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

Defined in: [src/redm/entities/BaseEntity.ts:94](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/redm/entities/BaseEntity.ts#L94)

##### Returns

[`Vector3`](../../fivem/classes/Vector3.md)

the position of the current Entity

#### Set Signature

```ts
set Position(pos): void
```

Defined in: [src/redm/entities/BaseEntity.ts:102](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/redm/entities/BaseEntity.ts#L102)

You should (almost) always try to load the collisions before setting the entitys position if going a long distance.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `pos` | [`Vector3`](../../fivem/classes/Vector3.md) | sets the position for the current ped |

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

Defined in: [src/redm/entities/Entity.ts:12](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/redm/entities/Entity.ts#L12)

#### Returns

`void`

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

Defined in: [src/redm/entities/Entity.ts:30](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/redm/entities/Entity.ts#L30)

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

***

### applyForceToCenter()

```ts
applyForceToCenter(
   direction, 
   forceType, 
   isDirectional, 
   isForceRel): void
```

Defined in: [src/redm/entities/Entity.ts:65](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/redm/entities/Entity.ts#L65)

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `direction` | [`Vector3`](../../fivem/classes/Vector3.md) | `undefined` | the direction to apply the force towards |
| `forceType` | `ForceType` | `ForceType.MinForce` | the force type to use |
| `isDirectional` | `boolean` | `false` | whether the direction is local? |
| `isForceRel` | `boolean` | `true` | whether to multiply the force by the object mass & acceleration |

#### Returns

`void`

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

Defined in: [src/redm/entities/Entity.ts:96](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/redm/entities/Entity.ts#L96)

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

***

### replaceHandle()

```ts
replaceHandle(newHandle): void
```

Defined in: [src/redm/entities/BaseEntity.ts:31](https://github.com/nativewrappers/nativewrappers/blob/bed19baaeaf131ae08126ef8189b9b3d2beb3a28/src/redm/entities/BaseEntity.ts#L31)

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
