import { Model, Color } from "..";
import { type StateBagChangeHandler } from "../cfx";
import { BaseEntity, Ped } from "./";
export declare class Player {
    private handle;
    private ped?;
    private pvp;
    private stateBagCookies;
    private source;
    private type;
    static fromPedHandle(handle: number): Player;
    static fromServerId(serverId: number): Player;
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
    get IsDead(): boolean;
    set DisableFiring(value: boolean);
    set Ghosted(isGhosted: boolean);
    get EntityPlayerIsAimingAt(): BaseEntity | null;
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
    get TargetEntity(): BaseEntity | null;
    get Team(): number;
    CanPedHearPlayer(ped: Ped): boolean;
}
