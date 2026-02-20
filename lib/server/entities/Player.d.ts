import { ClassTypes } from "../common/utils/ClassTypes";
import { Vector3 } from "../common/utils/Vector";
import { Ped } from "./Ped";
export declare class Player {
    private readonly source;
    protected type: ClassTypes;
    constructor(source: any);
    static fromServerId(serverId: number): Player | null;
    /**
     * Get an interable list of players currently on the server
     * @returns Iterable list of Players.
     */
    static AllPlayers(): IterableIterator<Player>;
    get Exists(): boolean;
    get Source(): number;
    /**
     * @returns the handle of the current player, this will be a number type, but we return 'any'
     * so we don't have to deal with annoying type differences between native calls
     */
    get Handle(): any;
    get State(): StateBagInterface;
    /**
     * Returns the player source casted as a string
     */
    get Src(): string;
    get Ped(): Ped;
    get Tokens(): string[];
    get Identifiers(): string[];
    get Endpoint(): string;
    get CameraRotation(): Vector3;
    /**
     * Returns the time since the last player UDP message
     */
    get LastMessage(): number;
    get MaxArmour(): number;
    get MaxHealth(): number;
    get MeleeModifier(): number;
    /**
     * @returns the players name
     */
    get Name(): string;
    /**
     * @returns the players name with any color code unicode, etc removed, this can lead to there being no name at all
     */
    filteredName(): string;
    /**
     * @returns the players round trip ping
     */
    get Ping(): number;
    /**
     * @returns the current routhing bucket the player is in, default is 0
     */
    get RoutingBucket(): number;
    get Team(): number;
    get WantedPosition(): Vector3;
    get WantedLevel(): number;
    get IsEvadingWanted(): boolean;
    get WeaponDamageModifier(): number;
    get WeaponDefenseModifier(): number;
    get WeaponDefenseModifier2(): number;
    get AirDragMultiplier(): number;
    get IsUsingSuperJump(): boolean;
    get IsMuted(): boolean;
    set IsMuted(isMuted: boolean);
    isAceAllowed(object: string): boolean;
    timeInPersuit(lastPursuit?: boolean): number;
    drop(reason?: string): void;
    emit(eventName: string, ...args: any[]): void;
    emitRaw(eventName: string, data: Uint8Array): void;
}
