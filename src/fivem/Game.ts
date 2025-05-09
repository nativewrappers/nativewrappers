import { Vector3 } from "@common/utils/Vector";
import { Audio } from "./Audio";
import { Blip } from "./Blip";
import type { Control } from "./enums/Control";
import { InputMode } from "./enums/InputMode";
import type { Language } from "./enums/Language";
import { RadioStation } from "./enums/RadioStation";
import { Ped } from "./models/Ped";
import { Prop } from "./models/Prop";
import { Vehicle } from "./models/Vehicle";
import { Player } from "./models/Player";

export abstract class Game {
  public static useHashCache = true;
  // A map containing generated hashes.
  public static hashCache: Map<string, number> = new Map();
  /**
   * Calculate the Jenkins One At A Time (joaat) has from the given string.
   *
   * @param input The input string to calculate the hash
   */
  public static generateHash(input: string): number {
    if (typeof input === "undefined") {
      return 0;
    }

    if (!Game.useHashCache) {
      return GetHashKey(input);
    }

    let hash = Game.hashCache.get(input);

    if (!hash) {
      hash = GetHashKey(input);
      Game.hashCache.set(input, hash);
    }

    return hash;
  }

  public static setLocalPlayerGhosted(isGhosted: boolean, inverseGhost: boolean) {
    // @ts-ignore
    SetLocalPlayerAsGhost(isGhosted, inverseGhost);
  }

  public static setGhostAlpha(alpha: number) {
    SetGhostedEntityAlpha(alpha);
  }

  static resetGhostAlpha() {
    ResetGhostedEntityAlpha();
  }

  static setGhostingInverted(isInverted: boolean) {
    // actual name is SET_INVERT_GHOSTING
    N_0xd7b6c73cad419bcf(isInverted);
  }

  /**
   * Gets the game language
   */
  public static get Language(): Language {
    return GetUiLanguageId();
  }

  /**
   * Gets how many milliseconds the game has been open this session
   */
  public static get GameTime(): number {
    return GetGameTimer();
  }

  /**
   * Sets the time scale of the Game.
   *
   * @param time The time scale, only accepts values between 0.0 and 1.0
   */
  public static set TimeScale(time: number) {
    SetTimeScale(time <= 1 && time >= 0 ? time : 1);
  }

  /**
   * Gets the total amount of frames rendered in this session
   */
  public static get FrameCount(): number {
    return GetFrameCount();
  }

  /**
   * Gets the current frame rate per second
   */
  public static get FPS(): number {
    return 1 / Game.LastFrameTime;
  }

  /**
   * Gets the time it currently takes to render a frame, in seconds;
   */
  public static get LastFrameTime(): number {
    return GetFrameTime();
  }

  /**
   * Get the local player's Player object.
   */
  public static get Player(): Player {
    const handle = PlayerId();
    if (Game.cachedPlayer === undefined || handle !== Game.cachedPlayer.Handle) {
      Game.cachedPlayer = new Player(handle);
    }

    return Game.cachedPlayer;
  }

  /**
   * Get the local player character's Ped object.
   * @returns A local player's character.
   */
  public static get PlayerPed(): Ped {
    return Game.Player.Character;
  }

  /**
   * Get an iterable list of players currently on server.
   * @returns Iterable list of Player objects.
   */
  public static *playerList(excludeLocalPlayer = false): IterableIterator<Player> {
    const localPlayer = Game.Player;
    for (const id of GetActivePlayers() as number[]) {
      if (excludeLocalPlayer && localPlayer.Handle === id) {
        continue;
      }
      yield new Player(id);
    }
  }

  /**
   * Get whether PvP is enabled.
   * @returns True if enabled.
   */
  public static get PlayerVersusPlayer(): boolean {
    return Game.Player.PvPEnabled;
  }

  /**
   * Set whether PvP is enabled.
   */
  public static set PlayerVersusPlayer(value: boolean) {
    Game.Player.PvPEnabled = value;
  }

  /**
   * Get the maximum wanted level.
   */
  public static get MaxWantedLevel(): number {
    return GetMaxWantedLevel();
  }

  /**
   * Set the maximum wanted level the local client can get.
   */
  public static set MaxWantedLevel(value: number) {
    if (value < 0) {
      value = 0;
    } else if (value > 5) {
      value = 5;
    }

    SetMaxWantedLevel(value);
  }

  /**
   * Set the multiplier of the wanted level.
   */
  public static set WantedMultiplier(value: number) {
    SetWantedLevelMultiplier(value);
  }

  /**
   * Set whether police blips should show on minimap.
   */
  public static set ShowPoliceBlipsOnRadar(toggle: boolean) {
    SetPoliceRadarBlips(toggle);
  }

  /**
   * Get if nightvision is active.
   */
  public static get Nightvision(): boolean {
    return IsNightvisionActive();
  }

  /**
   * Toggle nightvision.
   */
  public static set Nightvision(toggle: boolean) {
    SetNightvision(toggle);
  }

  /**
   * Get if thermal (heat) vision is active.
   */
  public static get ThermalVision(): boolean {
    return IsSeethroughActive();
  }

  /**
   * Toggle thermal (heat) vision.
   */
  public static set ThermalVision(toggle: boolean) {
    SetSeethrough(toggle);
  }

  public static get IsMissionActive(): boolean {
    return GetMissionFlag();
  }

  public static set IsMissionActive(toggle: boolean) {
    SetMissionFlag(toggle);
  }

  public static get IsRandomEventActive(): boolean {
    return GetRandomEventFlag();
  }

  public static set IsRandomEventActive(toggle: boolean) {
    SetRandomEventFlag(toggle);
  }

  public static get IsCutsceneActive(): boolean {
    return IsCutsceneActive();
  }

  /**
   * Is a waypoint set on the map.
   */
  public static get IsWaypointActive(): boolean {
    return IsWaypointActive();
  }

  /**
   * Is the player in the pause menu (ESC).
   */
  public static get IsPaused(): boolean {
    return IsPauseMenuActive();
  }

  /**
   * Force enable pause menu.
   */
  public static set IsPaused(toggle: boolean) {
    SetPauseMenuActive(toggle);
  }

  /**
   * Get if a loading screen is active.
   */
  public static get IsLoading(): boolean {
    return GetIsLoadingScreenActive();
  }

  /**
   * Get current input mode.
   * @returns InputMode: Mouse & Keyboard or GamePad.
   */
  public static get CurrentInputMode(): InputMode {
    return IsInputDisabled(2) ? InputMode.MouseAndKeyboard : InputMode.GamePad;
  }

  /**
   * Gets the player's current radio station.
   *
   * @returns A radio station.
   */
  public static get RadioStation(): RadioStation {
    const stationName: string = GetPlayerRadioStationName();
    return (RadioStation as never)[stationName];
  }

  /**
   * Sets the player's radio station.
   *
   * @param station A radio station.
   */
  public static set RadioStation(station: RadioStation) {
    SetRadioToStationName(station);
  }

  /**
   * Check whether a control is currently pressed.
   *
   * @param inputMode InputMode
   * @param control Control
   * @returns True or False.
   */
  public static isControlPressed(inputMode: InputMode, control: Control): boolean {
    return IsControlPressed(inputMode, Number(control));
  }

  /**
   * Check whether a disabled control is currently pressed.
   *
   * @param inputMode InputMode
   * @param control Control
   * @returns True or False.
   */
  public static isDisabledControlPressed(inputMode: InputMode, control: Control): boolean {
    return IsDisabledControlPressed(inputMode, Number(control));
  }

  /**
   * Check whether a control has been pressed since last check.
   *
   * @param inputMode InputMode
   * @param control Control
   * @returns True or False.
   */
  public static isControlJustPressed(inputMode: InputMode, control: Control): boolean {
    return IsControlJustPressed(inputMode, Number(control));
  }

  /**
   * Check whether a disabled control has been pressed since last check.
   *
   * @param inputMode InputMode
   * @param control Control
   * @returns True or False.
   */
  public static isDisabledControlJustPressed(inputMode: InputMode, control: Control): boolean {
    return IsDisabledControlJustPressed(inputMode, Number(control));
  }

  /**
   * Check whether a control is being released.
   *
   * @param inputMode InputMode
   * @param control Control
   * @returns True or False.
   */
  public static isControlReleased(inputMode: InputMode, control: Control): boolean {
    return IsControlReleased(inputMode, Number(control));
  }

  /**
   * Check whether a disabled control is being released.
   *
   * @param inputMode InputMode
   * @param control Control
   * @returns True or False.
   */
  public static isDisabledControlReleased(inputMode: InputMode, control: Control): boolean {
    return IsDisabledControlReleased(inputMode, Number(control));
  }

  /**
   * Check whether a control has been released since last check.
   *
   * @param inputMode InputMode
   * @param control Control
   * @returns True or False.
   */
  public static isControlJustReleased(inputMode: InputMode, control: Control): boolean {
    return IsControlJustReleased(inputMode, Number(control));
  }

  /**
   * Check whether a disabled control has been released since last check.
   *
   * @param inputMode InputMode
   * @param control Control
   * @returns True or False.
   */
  public static isDisabledControlJustReleased(inputMode: InputMode, control: Control): boolean {
    return IsDisabledControlJustReleased(inputMode, Number(control));
  }

  /**
   * Check whether a control is enabled this frame.
   *
   * @param inputMode InputMode
   * @param control Control
   * @returns True or False.
   */
  public static isControlEnabled(inputMode: InputMode, control: Control): boolean {
    return IsControlEnabled(inputMode, Number(control));
  }

  /**
   * Makes the Game Engine respond to the given Control this frame
   *
   * @param inputMode InputMode
   * @param control Control
   */
  public static enableControlThisFrame(inputMode: InputMode, control: Control): void {
    EnableControlAction(inputMode, Number(control), true);
  }

  /**
   * Makes the Game Engine ignore the given Control this frame
   *
   * @param inputMode InputMode
   * @param control Control
   */
  public static disableControlThisFrame(inputMode: InputMode, control: Control): void {
    DisableControlAction(inputMode, Number(control), true);
  }

  /**
   * Disables all Controls this frame.
   *
   * @param inputMode InputMode
   */
  public static disableAllControlsThisFrame(inputMode: InputMode): void {
    DisableAllControlActions(inputMode);
  }

  /**
   * Enables all Controls this frame.
   *
   * @param inputMode InputMode
   */
  public static enableAllControlsThisFrame(inputMode: InputMode): void {
    EnableAllControlActions(inputMode);
  }

  /**
   * Get an entity object from an entity handle.
   *
   * @param handle Handle of entity
   * @returns A Ped, Vehicle or Prop object. `undefined` if entity handle doesn't exist.
   */
  public static entityFromHandle(handle: number): Ped | Vehicle | Prop | null {
    switch (GetEntityType(handle)) {
      case 1:
        return new Ped(handle);
      case 2:
        return new Vehicle(handle);
      case 3:
        return new Prop(handle);
    }
    return null;
  }

  /**
   * Play a sound. Same as Audio.playSound
   *
   * @param soundFile Name of sound
   * @param soundSet The set where the sound is in
   */
  public static playSound(soundFile: string, soundSet: string): void {
    Audio.playSound(soundFile, soundSet);
  }

  /**
   * Play music. Same as Audio.playSound
   *
   * @param musicFile Music file.
   */
  public static playMusic(musicFile: string): void {
    Audio.playMusic(musicFile);
  }

  /**
   * Stop music. If `musicFile` is not given, last played music is stopped. Same as Audio.playSound
   *
   * @param musicFile (optional) Music file.
   */
  public static stopMusic(musicFile?: string): void {
    Audio.stopMusic(musicFile);
  }

  /**
   * Determines the game language files contain a entry for the specified GXT key
   *
   * @param entry - The GXT key.
   * @returns true if GXT entry exists; otherwise, false
   * @constructor
   */
  public static doesGXTEntryExist(entry: number | string): boolean {
    if (typeof entry === "number") {
      return DoesTextLabelExist(entry.toString());
    }

    return DoesTextLabelExist(entry);
  }

  /**
   * Returns a localised string from the games language files with a specified GXT key
   *
   * @param entry - The GXT key.
   * @returns The localised string if the key exists; otherwise, empty string
   */
  public static getGXTEntry(entry: number | string): string {
    return Game.doesGXTEntryExist(entry) ? GetLabelText(entry.toString()) : "";
  }

  /**
   * Sets the max boundry the local player can go to before they get killed
   *
   * @param vec - the max bounds for the local player
   */
  public set ExtendWorldBoundry(vec: Vector3) {
    ExtendWorldBoundaryForPlayer(vec.x, vec.y, vec.z);
  }

  public get LastVehicle(): Vehicle | null {
    const vehicle = GetPlayersLastVehicle();
    if (vehicle === 0) return null;
    return new Vehicle(vehicle);
  }

  public static getWaypointBlip(): Blip | null {
    if (!Game.IsWaypointActive) return null;

    for (
      let handle = GetBlipInfoIdIterator(), blip = GetFirstBlipInfoId(handle);
      DoesBlipExist(handle);
      blip = GetNextBlipInfoId(handle)
    ) {
      if (GetBlipInfoIdType(blip) === 4) return new Blip(blip);
    }

    return null;
  }

  public static removeWaypoint(): void {
    SetWaypointOff();
  }

  public static get WaypointPosition(): Vector3 {
    const waypointBlip = Game.getWaypointBlip();

    if (waypointBlip == null) {
      return Vector3.Zero;
    }

    const position = waypointBlip.Position;
    position.z = Game.getGroundHeight(position);

    return position;
  }

  public static set WaypointPosition(position: Vector3) {
    SetNewWaypoint(position.x, position.y);
  }

  public static getGroundHeight(position: Vector3): number {
    RequestCollisionAtCoord(position.x, position.z, 1000.0);
    return GetGroundZFor_3dCoord(position.x, position.y, 1000.0, false)[1];
  }

  protected static cachedPlayer: Player;
}
