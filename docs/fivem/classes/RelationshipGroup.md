[@nativewrappers/fivem](../../README.md) / [fivem](../README.md) / RelationshipGroup

# Class: RelationshipGroup

Defined in: [src/fivem/RelationshipGroup.ts:6](https://github.com/nativewrappers/fivem/blob/712f0bf92fff25cfcad1f759429c48668c195b4a/src/fivem/RelationshipGroup.ts#L6)

Class to create and manage a relationship group. Useful to manage behavior between Peds.

## Constructors

### new RelationshipGroup()

```ts
new RelationshipGroup(name): RelationshipGroup
```

Defined in: [src/fivem/RelationshipGroup.ts:17](https://github.com/nativewrappers/fivem/blob/712f0bf92fff25cfcad1f759429c48668c195b4a/src/fivem/RelationshipGroup.ts#L17)

Create a relationship group. Optionally pass a group hash.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `string` | Name of the relationship group. |

#### Returns

[`RelationshipGroup`](RelationshipGroup.md)

## Accessors

### Hash

#### Get Signature

```ts
get Hash(): number
```

Defined in: [src/fivem/RelationshipGroup.ts:27](https://github.com/nativewrappers/fivem/blob/712f0bf92fff25cfcad1f759429c48668c195b4a/src/fivem/RelationshipGroup.ts#L27)

Gets the hash of the relationship group.

##### Returns

`number`

The hash of this object.

## Methods

### clearRelationshipBetweenGroups()

```ts
clearRelationshipBetweenGroups(
   targetGroup, 
   relationship, 
   biDirectionally): void
```

Defined in: [src/fivem/RelationshipGroup.ts:77](https://github.com/nativewrappers/fivem/blob/712f0bf92fff25cfcad1f759429c48668c195b4a/src/fivem/RelationshipGroup.ts#L77)

Clear the relationship between this relationship group and another.

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `targetGroup` | [`RelationshipGroup`](RelationshipGroup.md) | `undefined` | The other relationship group. |
| `relationship` | [`Relationship`](../enumerations/Relationship.md) | `undefined` | The desired relationship to clear. |
| `biDirectionally` | `boolean` | `false` | Whether the target group should also clear the relationship. |

#### Returns

`void`

***

### getRelationshipBetweenGroups()

```ts
getRelationshipBetweenGroups(targetGroup): Relationship
```

Defined in: [src/fivem/RelationshipGroup.ts:37](https://github.com/nativewrappers/fivem/blob/712f0bf92fff25cfcad1f759429c48668c195b4a/src/fivem/RelationshipGroup.ts#L37)

Get the relationship between two relationship groups.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `targetGroup` | [`RelationshipGroup`](RelationshipGroup.md) | The other relationship group. |

#### Returns

[`Relationship`](../enumerations/Relationship.md)

The relationship

***

### remove()

```ts
remove(): void
```

Defined in: [src/fivem/RelationshipGroup.ts:100](https://github.com/nativewrappers/fivem/blob/712f0bf92fff25cfcad1f759429c48668c195b4a/src/fivem/RelationshipGroup.ts#L100)

Remove this relationship group from the game. This will not delete this object.

#### Returns

`void`

***

### setRelationshipBetweenGroups()

```ts
setRelationshipBetweenGroups(
   targetGroup, 
   relationship, 
   biDirectionally): void
```

Defined in: [src/fivem/RelationshipGroup.ts:50](https://github.com/nativewrappers/fivem/blob/712f0bf92fff25cfcad1f759429c48668c195b4a/src/fivem/RelationshipGroup.ts#L50)

Set the relationship group between this relationship group and another one.

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `targetGroup` | [`RelationshipGroup`](RelationshipGroup.md) | `undefined` | The other relationship group. |
| `relationship` | [`Relationship`](../enumerations/Relationship.md) | `undefined` | The desired relationship. |
| `biDirectionally` | `boolean` | `false` | If target group should have same relationship towards this. |

#### Returns

`void`
