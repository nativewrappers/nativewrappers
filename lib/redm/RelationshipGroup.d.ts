import type { Relationship } from "./enums/Relationship";
/**
 * Class to create and manage a relationship group. Useful to manage behavior between Peds.
 */
export declare class RelationshipGroup {
    /**
     * The hash of the relationship group
     */
    private hash;
    /**
     * Create a relationship group. Optionally pass a group hash.
     *
     * @param name Name of the relationship group.
     */
    constructor(name: string);
    /**
     * Gets the hash of the relationship group.
     *
     * @returns The hash of this object.
     */
    get Hash(): number;
    /**
     * Get the relationship between two relationship groups.
     *
     * @param targetGroup The other relationship group.
     * @returns The relationship
     */
    getRelationshipBetweenGroups(targetGroup: RelationshipGroup): Relationship;
    /**
     * Set the relationship group between this relationship group and another one.
     *
     * @param targetGroup The other relationship group.
     * @param relationship The desired relationship.
     * @param biDirectionally If target group should have same relationship towards this.
     */
    setRelationshipBetweenGroups(targetGroup: RelationshipGroup, relationship: Relationship, biDirectionally?: boolean): void;
    /**
     * Clear the relationship between this relationship group and another.
     *
     * @param targetGroup The other relationship group.
     * @param relationship The desired relationship to clear.
     * @param biDirectionally Whether the target group should also clear the relationship.
     */
    clearRelationshipBetweenGroups(targetGroup: RelationshipGroup, relationship: Relationship, biDirectionally?: boolean): void;
    /**
     * Remove this relationship group from the game. This will not delete this object.
     */
    remove(): void;
}
