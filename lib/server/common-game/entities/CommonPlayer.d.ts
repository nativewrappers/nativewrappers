import type { StateBagChangeHandler } from "../cfx/StateBagChangeHandler";
import { CommonPed } from "./CommonPed";
import type { CommonEntity } from "./CommonEntityType";
export declare class CommonPlayer {
    private handle;
    private ped?;
    private pvp;
    private stateBagCookies;
    private source;
    private type;
    static AllPlayers(excludeLocalPlayer?: boolean): IterableIterator<CommonPlayer>;
    /**
     * @param handle the handoe of the ped to get the player of
     * @returns the player, or null if the player doesn't exist
     */
    static fromPedHandle(handle: number): CommonPlayer | null;
    /**
     * @param serverId the server id to get the player of
     * @returns the player, or null if the player doesn't exist
     */
    static fromServerId(serverId: number): CommonPlayer | null;
    /**
     * @param [minimumDistance=Number.MAX_VALUE] the minimum distance this should check
     * @param [fromPlayer=GameConstants.Player] the player to get the distance from
     * @returns the closest player from {@param fromPlayer} and the distance the player was
     */
    static getClosestPlayerPedWithDistance(minimumDistance?: number, fromPlayer?: CommonPlayer): [CommonPed | null, number];
    /**
     * @param [minimumDistance=Number.MAX_VALUE] the minimum distance this should check
     * @param [fromPlayer=GameConstants.Player] the player to get the distance from
     * @returns the closest player from {@param fromPlayer} and the distance the player was
     */
    static getClosestPlayerPed(minimumDistance?: number, fromPlayer?: CommonPlayer): CommonPed | null;
    /**
     * @param handle the player handle, or if on the server, their source.
     */
    constructor(handle?: number);
    get Handle(): number;
    /**
     * This is here for compatibility with older versions.
     */
    get Character(): CommonPed;
    get Ped(): CommonPed;
    get ServerId(): number;
    get State(): StateBagInterface;
    AddStateBagChangeHandler(keyFilter: string | null, handler: StateBagChangeHandler<unknown>): number;
    /**
     * A short hand function for AddStateBagChangeHandler, this gets automatically cleaned up on entity deletion.
     * @param keyFilter the key to filter for or null
     * @param handler the function to handle the change
     * @returns a cookie to be used in RemoveStateBagChangeHandler
     */
    listenForStateChange(keyFilter: string | null, handler: StateBagChangeHandler<unknown>): number;
    removeStateListener(tgtCookie: number): void;
    removeAllStateListeners(): void;
    get Name(): string;
    get IsDead(): boolean;
    set DisableFiring(value: boolean);
    get EntityPlayerIsAimingAt(): CommonEntity | null;
    get StealthNoise(): number;
}
