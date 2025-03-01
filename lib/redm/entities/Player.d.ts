export declare class Player {
    private handle;
    static fromPedHandle(handle: number): Player;
    /**
     * Gets the player from the specified {@param serverId}
     * @returns the player object, or null if the player didn't exist
     */
    static fromServerId(serverId: number): Player | null;
    /**
     * @param handle the player handle
     */
    constructor(handle: number);
    get Handle(): number;
    /**
     * Adds the amount of stamina player has on the hud
     * @param amount the amount of upgrade to give 6 is half the bar while 12 is the full bar
     */
    addStaminaUpgrade(amount: number): void;
    addHealthUpgrade(amount: number): void;
    addDeadeyeUpgrade(amount: number): void;
}
