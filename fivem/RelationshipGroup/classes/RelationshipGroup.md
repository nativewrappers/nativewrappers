[@nativewrappers/fivem](../../../README.md) / [fivem/RelationshipGroup](../README.md) / RelationshipGroup

# Class: RelationshipGroup

Defined in: lib/fivem/RelationshipGroup.d.ts:5

Class to create and manage a relationship group. Useful to manage behavior between Peds.

## Constructors

### Constructor

```ts
new RelationshipGroup(name): RelationshipGroup;
```

Defined in: lib/fivem/RelationshipGroup.d.ts:15

Create a relationship group. Optionally pass a group hash.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `string` | Name of the relationship group. |

#### Returns

`RelationshipGroup`

## Accessors

### Hash

#### Get Signature

```ts
get Hash(): number;
```

Defined in: lib/fivem/RelationshipGroup.d.ts:21

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
   biDirectionally?): void;
```

Defined in: lib/fivem/RelationshipGroup.d.ts:44

Clear the relationship between this relationship group and another.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `targetGroup` | `RelationshipGroup` | The other relationship group. |
| `relationship` | [`Relationship`](../../enums/Relationship/enumerations/Relationship.md) | The desired relationship to clear. |
| `biDirectionally?` | `boolean` | Whether the target group should also clear the relationship. |

#### Returns

`void`

***

### getRelationshipBetweenGroups()

```ts
getRelationshipBetweenGroups(targetGroup): Relationship;
```

Defined in: lib/fivem/RelationshipGroup.d.ts:28

Get the relationship between two relationship groups.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `targetGroup` | `RelationshipGroup` | The other relationship group. |

#### Returns

[`Relationship`](../../enums/Relationship/enumerations/Relationship.md)

The relationship

***

### remove()

```ts
remove(): void;
```

Defined in: lib/fivem/RelationshipGroup.d.ts:48

Remove this relationship group from the game. This will not delete this object.

#### Returns

`void`

***

### setRelationshipBetweenGroups()

```ts
setRelationshipBetweenGroups(
   targetGroup, 
   relationship, 
   biDirectionally?): void;
```

Defined in: lib/fivem/RelationshipGroup.d.ts:36

Set the relationship group between this relationship group and another one.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `targetGroup` | `RelationshipGroup` | The other relationship group. |
| `relationship` | [`Relationship`](../../enums/Relationship/enumerations/Relationship.md) | The desired relationship. |
| `biDirectionally?` | `boolean` | If target group should have same relationship towards this. |

#### Returns

`void`
