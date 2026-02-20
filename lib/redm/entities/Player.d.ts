import { Ped } from "./Ped";
export declare class Player {
    private handle;
    static AllPlayers(excludeLocalPlayer?: boolean): IterableIterator<Player>;
    static fromPedHandle(handle: number): Player;
    /**
     * Gets the player from the specified {@param serverId}
     * @returns the player object, or null if the player didn't exist
     */
    static fromServerId(serverId: number): Player | null;
    /**
     * @param [minimumDistance=Number.MAX_VALUE] the minimum distance this should check
     * @param [fromPlayer=GameConstants.Player] the player to get the distance from
     * @returns the closest player from {@param fromPlayer} and the distance the player was
     */
    static getClosestPlayerWithDistance(minimumDistance?: number, fromPlayer?: Player): [Player | null, number];
    /**
     * @param [minimumDistance=Number.MAX_VALUE] the minimum distance this should check
     * @param [fromPlayer=GameConstants.Player] the player to get the distance from
     * @returns the closest player from {@param fromPlayer} and the distance the player was
     */
    static getClosestPlayer(minimumDistance?: number, fromPlayer?: Player): Player | null;
    /**
     * @param handle the player handle
     */
    constructor(handle: number);
    get Handle(): number;
    get Ped(): Ped;
    get ServerId(): number;
    /**
     * Adds the amount of stamina player has on the hud
     * @param amount the amount of upgrade to give 6 is half the bar while 12 is the full bar
     */
    addStaminaUpgrade(amount: number): void;
    addHealthUpgrade(amount: number): void;
    addDeadeyeUpgrade(amount: number): void;
    setOwnsMount(mount: Ped): void;
}
