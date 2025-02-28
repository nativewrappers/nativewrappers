[@nativewrappers/fivem](../../README.md) / [redm](../README.md) / Entity

# Class: Entity

Defined in: [src/redm/entities/Entity.ts:6](https://github.com/nativewrappers/nativewrappers/blob/9823dedfda755d69570435af704d4d60473d3d5a/src/redm/entities/Entity.ts#L6)

## Extends

- `BaseEntity`

## Constructors

### new Entity()

```ts
new Entity(handle): Entity
```

Defined in: [src/redm/entities/Entity.ts:8](https://github.com/nativewrappers/nativewrappers/blob/9823dedfda755d69570435af704d4d60473d3d5a/src/redm/entities/Entity.ts#L8)

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

Defined in: [src/redm/entities/Entity.ts:17](https://github.com/nativewrappers/nativewrappers/blob/9823dedfda755d69570435af704d4d60473d3d5a/src/redm/entities/Entity.ts#L17)

##### Returns

`EntityType`

***

### Exists

#### Get Signature

```ts
get Exists(): boolean
```

Defined in: [src/redm/entities/BaseEntity.ts:34](https://github.com/nativewrappers/nativewrappers/blob/9823dedfda755d69570435af704d4d60473d3d5a/src/redm/entities/BaseEntity.ts#L34)

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

Defined in: [src/redm/entities/BaseEntity.ts:38](https://github.com/nativewrappers/nativewrappers/blob/9823dedfda755d69570435af704d4d60473d3d5a/src/redm/entities/BaseEntity.ts#L38)

##### Returns

`number`

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

Defined in: [src/redm/entities/BaseEntity.ts:50](https://github.com/nativewrappers/nativewrappers/blob/9823dedfda755d69570435af704d4d60473d3d5a/src/redm/entities/BaseEntity.ts#L50)

##### Returns

`number`

#### Set Signature

```ts
set Heading(heading): void
```

Defined in: [src/redm/entities/BaseEntity.ts:54](https://github.com/nativewrappers/nativewrappers/blob/9823dedfda755d69570435af704d4d60473d3d5a/src/redm/entities/BaseEntity.ts#L54)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `heading` | `number` |

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

Defined in: [src/redm/entities/BaseEntity.ts:46](https://github.com/nativewrappers/nativewrappers/blob/9823dedfda755d69570435af704d4d60473d3d5a/src/redm/entities/BaseEntity.ts#L46)

##### Returns

`number`

#### Set Signature

```ts
set Health(amount): void
```

Defined in: [src/redm/entities/BaseEntity.ts:42](https://github.com/nativewrappers/nativewrappers/blob/9823dedfda755d69570435af704d4d60473d3d5a/src/redm/entities/BaseEntity.ts#L42)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `amount` | `number` |

##### Returns

`void`

#### Inherited from

```ts
BaseEntity.Health
```

***

### Position

#### Get Signature

```ts
get Position(): Vector3
```

Defined in: [src/redm/entities/BaseEntity.ts:58](https://github.com/nativewrappers/nativewrappers/blob/9823dedfda755d69570435af704d4d60473d3d5a/src/redm/entities/BaseEntity.ts#L58)

##### Returns

[`Vector3`](../../fivem/classes/Vector3.md)

#### Set Signature

```ts
set Position(pos): void
```

Defined in: [src/redm/entities/BaseEntity.ts:62](https://github.com/nativewrappers/nativewrappers/blob/9823dedfda755d69570435af704d4d60473d3d5a/src/redm/entities/BaseEntity.ts#L62)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `pos` | [`Vector3`](../../fivem/classes/Vector3.md) |

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

Defined in: [src/redm/entities/Entity.ts:12](https://github.com/nativewrappers/nativewrappers/blob/9823dedfda755d69570435af704d4d60473d3d5a/src/redm/entities/Entity.ts#L12)

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

Defined in: [src/redm/entities/Entity.ts:30](https://github.com/nativewrappers/nativewrappers/blob/9823dedfda755d69570435af704d4d60473d3d5a/src/redm/entities/Entity.ts#L30)

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

Defined in: [src/redm/entities/Entity.ts:65](https://github.com/nativewrappers/nativewrappers/blob/9823dedfda755d69570435af704d4d60473d3d5a/src/redm/entities/Entity.ts#L65)

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

Defined in: [src/redm/entities/Entity.ts:96](https://github.com/nativewrappers/nativewrappers/blob/9823dedfda755d69570435af704d4d60473d3d5a/src/redm/entities/Entity.ts#L96)

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

Defined in: [src/redm/entities/BaseEntity.ts:27](https://github.com/nativewrappers/nativewrappers/blob/9823dedfda755d69570435af704d4d60473d3d5a/src/redm/entities/BaseEntity.ts#L27)

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
