[@nativewrappers/fivem](../../README.md) / [redm](../README.md) / RelationshipGroup

# Class: RelationshipGroup

Class to create and manage a relationship group. Useful to manage behavior between Peds.

## Constructors

### new RelationshipGroup()

```ts
new RelationshipGroup(name): RelationshipGroup
```

Create a relationship group. Optionally pass a group hash.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `string` | Name of the relationship group. |

#### Returns

[`RelationshipGroup`](RelationshipGroup.md)

#### Defined in

[src/redm/RelationshipGroup.ts:17](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/redm/RelationshipGroup.ts#L17)

## Accessors

### Hash

```ts
get Hash(): number
```

Gets the hash of the relationship group.

#### Returns

`number`

The hash of this object.

#### Defined in

[src/redm/RelationshipGroup.ts:27](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/redm/RelationshipGroup.ts#L27)

## Methods

### clearRelationshipBetweenGroups()

```ts
clearRelationshipBetweenGroups(
   targetGroup, 
   relationship, 
   biDirectionally): void
```

Clear the relationship between this relationship group and another.

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `targetGroup` | [`RelationshipGroup`](RelationshipGroup.md) | `undefined` | The other relationship group. |
| `relationship` | [`Relationship`](../enumerations/Relationship.md) | `undefined` | The desired relationship to clear. |
| `biDirectionally` | `boolean` | `false` | Whether the target group should also clear the relationship. |

#### Returns

`void`

#### Defined in

[src/redm/RelationshipGroup.ts:77](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/redm/RelationshipGroup.ts#L77)

***

### getRelationshipBetweenGroups()

```ts
getRelationshipBetweenGroups(targetGroup): Relationship
```

Get the relationship between two relationship groups.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `targetGroup` | [`RelationshipGroup`](RelationshipGroup.md) | The other relationship group. |

#### Returns

[`Relationship`](../enumerations/Relationship.md)

The relationship

#### Defined in

[src/redm/RelationshipGroup.ts:37](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/redm/RelationshipGroup.ts#L37)

***

### remove()

```ts
remove(): void
```

Remove this relationship group from the game. This will not delete this object.

#### Returns

`void`

#### Defined in

[src/redm/RelationshipGroup.ts:100](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/redm/RelationshipGroup.ts#L100)

***

### setRelationshipBetweenGroups()

```ts
setRelationshipBetweenGroups(
   targetGroup, 
   relationship, 
   biDirectionally): void
```

Set the relationship group between this relationship group and another one.

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `targetGroup` | [`RelationshipGroup`](RelationshipGroup.md) | `undefined` | The other relationship group. |
| `relationship` | [`Relationship`](../enumerations/Relationship.md) | `undefined` | The desired relationship. |
| `biDirectionally` | `boolean` | `false` | If target group should have same relationship towards this. |

#### Returns

`void`

#### Defined in

[src/redm/RelationshipGroup.ts:50](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/redm/RelationshipGroup.ts#L50)
