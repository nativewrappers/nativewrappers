import { ClassTypes } from "@common/utils/ClassTypes";
import { Vector3 } from "@common/utils/Vector";
import { cleanPlayerName } from "@common/utils/cleanPlayerName";
import cfx from "../cfx";
import { Ped } from "./Ped";

export class Player {
  protected type = ClassTypes.Player;
  constructor(private readonly source: any) {}

  static fromServerId(serverId: number): Player | null {
    if (!DoesPlayerExist(serverId as any)) {
      return null;
    }

    return new Player(serverId);
  }

  /**
   * Get an interable list of players currently on the server
   * @returns Iterable list of Players.
   */
  public static *AllPlayers(): IterableIterator<Player> {
    const num = GetNumPlayerIndices();
    for (let i = 0; i < num; i++) {
      yield new Player(Number.parseInt(GetPlayerFromIndex(i)));
    }
  }

  public get Exists(): boolean {
    return this.source !== 0 && DoesPlayerExist(this.source);
  }

  public get Source(): number {
    return this.source;
  }

  /**
   * @returns the handle of the current player, this will be a number type, but we return 'any'
   * so we don't have to deal with annoying type differences between native calls
   */
  public get Handle(): any {
    return this.source;
  }

  public get State(): StateBagInterface {
    return cfx.Player(this.source).state;
  }

  /**
   * Returns the player source casted as a string
   */
  public get Src(): string {
    return this.source as unknown as string;
  }

  public get Ped(): Ped {
    const ped = GetPlayerPed(this.source);
    return new Ped(GetPlayerPed(this.source));
  }

  public get Tokens(): string[] {
    return getPlayerTokens(this.source);
  }

  public get Identifiers(): string[] {
    return getPlayerIdentifiers(this.source);
  }

  public get Endpoint(): string {
    return GetPlayerEndpoint(this.source);
  }

  public get CameraRotation(): Vector3 {
    return Vector3.fromArray(GetPlayerCameraRotation(this.Src));
  }

  /**
   * Returns the time since the last player UDP message
   */
  public get LastMessage(): number {
    return GetPlayerLastMsg(this.Src);
  }

  public get MaxArmour(): number {
    return GetPlayerMaxArmour(this.Src);
  }

  public get MaxHealth(): number {
    return GetPlayerMaxHealth(this.Src);
  }

  public get MeleeModifier(): number {
    return GetPlayerMeleeWeaponDamageModifier(this.Src);
  }

  /**
   * @returns the players name
   */
  public get Name(): string {
    return GetPlayerName(this.Src);
  }

  /**
   * @returns the players name with any color code unicode, etc removed, this can lead to there being no name at all
   */
  public filteredName(): string {
    return cleanPlayerName(this.Name);
  }

  /**
   * @returns the players round trip ping
   */
  public get Ping(): number {
    return GetPlayerPing(this.Src);
  }

  /**
   * @returns the current routhing bucket the player is in, default is 0
   */
  public get RoutingBucket(): number {
    return GetPlayerRoutingBucket(this.Src);
  }

  public get Team(): number {
    return GetPlayerTeam(this.Src);
  }

  public get WantedPosition(): Vector3 {
    return Vector3.fromArray(GetPlayerWantedCentrePosition(this.Src));
  }

  public get WantedLevel(): number {
    return GetPlayerWantedLevel(this.Src);
  }

  public get IsEvadingWanted(): boolean {
    return IsPlayerEvadingWantedLevel(this.Src);
  }

  public get WeaponDamageModifier(): number {
    return GetPlayerWeaponDamageModifier(this.Src);
  }

  public get WeaponDefenseModifier(): number {
    return GetPlayerWeaponDefenseModifier(this.Src);
  }

  public get WeaponDefenseModifier2(): number {
    return GetPlayerWeaponDefenseModifier_2(this.Src);
  }

  public get AirDragMultiplier(): number {
    return GetAirDragMultiplierForPlayersVehicle(this.Src);
  }

  public get IsUsingSuperJump(): boolean {
    return IsPlayerUsingSuperJump(this.Src);
  }

  public get IsMuted(): boolean {
    return MumbleIsPlayerMuted(this.source);
  }

  public set IsMuted(isMuted: boolean) {
    MumbleSetPlayerMuted(this.source, isMuted);
  }

  public isAceAllowed(object: string): boolean {
    return IsPlayerAceAllowed(this.Src, object);
  }

  public timeInPersuit(lastPursuit = false): number {
    return GetPlayerTimeInPursuit(this.Src, lastPursuit);
  }

  public drop(reason = "No reason specified"): void {
    DropPlayer(this.Src, reason);
  }

  public emit(eventName: string, ...args: any[]): void {
    TriggerClientEvent(eventName, this.source, ...args);
  }
}
