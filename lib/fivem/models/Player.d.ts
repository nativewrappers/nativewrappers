import { Color } from "../common/utils/Color";
import { Model } from "../Model";
import { type StateBagChangeHandler } from "../cfx";
import type { Entity } from "./Entity";
import { Ped } from "./Ped";
export declare class Player {
    private handle;
    private ped?;
    private pvp;
    private stateBagCookies;
    private source;
    private type;
    static AllPlayers(excludeLocalPlayer?: boolean): IterableIterator<Player>;
    /**
     * @param handle the handoe of the ped to get the player of
     * @returns the player, or null if the player doesn't exist
     */
    static fromPedHandle(handle: number): Player | null;
    /**
     * @param serverId the server id to get the player of
     * @returns the player, or null if the player doesn't exist
     */
    static fromServerId(serverId: number): Player | null;
    /**
     * @param [minimumDistance=Number.MAX_VALUE] the minimum distance this should check
     * @param [fromPlayer=GameConstants.Player] the player to get the distance from
     * @returns the closest player from {@param fromPlayer} and the distance the player was
     */
    static getClosestPlayerPedWithDistance(minimumDistance?: number, fromPlayer?: Player): [Ped | null, number];
    /**
     * @param [minimumDistance=Number.MAX_VALUE] the minimum distance this should check
     * @param [fromPlayer=GameConstants.Player] the player to get the distance from
     * @returns the closest player from {@param fromPlayer} and the distance the player was
     */
    static getClosestPlayerPed(minimumDistance?: number, fromPlayer?: Player): Ped | null;
    /**
     * @param handle the player handle, or if on the server, their source.
     */
    constructor(handle?: number);
    get Handle(): number;
    /**
     * This is here for compatibility with older versions.
     */
    get Character(): Ped;
    get Ped(): Ped;
    get ServerId(): number;
    get State(): StateBagInterface;
    AddStateBagChangeHandler(keyFilter: string | null, handler: StateBagChangeHandler): number;
    /**
     * A short hand function for AddStateBagChangeHandler, this gets automatically cleaned up on entity deletion.
     * @param keyFilter the key to filter for or null
     * @param handler the function to handle the change
     * @returns a cookie to be used in RemoveStateBagChangeHandler
     */
    listenForStateChange(keyFilter: string | null, handler: StateBagChangeHandler): number;
    removeStateListener(tgtCookie: number): void;
    removeAllStateListeners(): void;
    get Name(): string;
    get PvPEnabled(): boolean;
    set PvPEnabled(value: boolean);
    set Ghosted(isGhosted: boolean);
    get IsDead(): boolean;
    set DisableFiring(value: boolean);
    get EntityPlayerIsAimingAt(): Entity | null;
    get StealthNoise(): number;
    get FakeWantedLevel(): number;
    get PlayerGroup(): number;
    get HasReserveParachute(): boolean;
    get HealthRechargeLimit(): number;
    get IsInvincible(): boolean;
    get MaxArmor(): number;
    get ParachuteModelOverride(): Model;
    get ParachutePackTintIndex(): number;
    get ParachuteTintIndex(): number;
    get ParachuteColorTrailColor(): Color;
    get ReserveParachuteModelOverride(): Model;
    get ReserveParachuteTintIndex(): number;
    get PlayerRgbColour(): Color;
    get Stamina(): number;
    get SprintTimeRemaining(): number;
    /**
     * The players melee target?
     */
    get TargetEntity(): Entity | null;
    get Team(): number;
    CanPedHearPlayer(ped: Ped): boolean;
}
