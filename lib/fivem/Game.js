var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { Vector3 } from "./common/utils/Vector";
import { Audio } from "./Audio";
import { Blip } from "./Blip";
import { InputMode } from "./enums/InputMode";
import { RadioStation } from "./enums/RadioStation";
import { Ped } from "./models/Ped";
import { Prop } from "./models/Prop";
import { Vehicle } from "./models/Vehicle";
import { Player } from "./models/Player";
class Game {
  static {
    __name(this, "Game");
  }
  static useHashCache = true;
  // A map containing generated hashes.
  static hashCache = /* @__PURE__ */ new Map();
  /**
   * Calculate the Jenkins One At A Time (joaat) has from the given string.
   *
   * @param input The input string to calculate the hash
   */
  static generateHash(input) {
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
  static setLocalPlayerGhosted(isGhosted, inverseGhost) {
    SetLocalPlayerAsGhost(isGhosted, inverseGhost);
  }
  static setGhostAlpha(alpha) {
    SetGhostedEntityAlpha(alpha);
  }
  static resetGhostAlpha() {
    ResetGhostedEntityAlpha();
  }
  static setGhostingInverted(isInverted) {
    N_0xd7b6c73cad419bcf(isInverted);
  }
  /**
   * Gets the game language
   */
  static get Language() {
    return GetUiLanguageId();
  }
  /**
   * Gets how many milliseconds the game has been open this session
   */
  static get GameTime() {
    return GetGameTimer();
  }
  /**
   * Sets the time scale of the Game.
   *
   * @param time The time scale, only accepts values between 0.0 and 1.0
   */
  static set TimeScale(time) {
    SetTimeScale(time <= 1 && time >= 0 ? time : 1);
  }
  /**
   * Gets the total amount of frames rendered in this session
   */
  static get FrameCount() {
    return GetFrameCount();
  }
  /**
   * Gets the current frame rate per second
   */
  static get FPS() {
    return 1 / Game.LastFrameTime;
  }
  /**
   * Gets the time it currently takes to render a frame, in seconds;
   */
  static get LastFrameTime() {
    return GetFrameTime();
  }
  /**
   * Get the local player's Player object.
   */
  static get Player() {
    const handle = PlayerId();
    if (Game.cachedPlayer === void 0 || handle !== Game.cachedPlayer.Handle) {
      Game.cachedPlayer = new Player(handle);
    }
    return Game.cachedPlayer;
  }
  /**
   * Get the local player character's Ped object.
   * @returns A local player's character.
   */
  static get PlayerPed() {
    return Game.Player.Character;
  }
  /**
   * Get an iterable list of players currently on server.
   * @returns Iterable list of Player objects.
   */
  static *playerList(excludeLocalPlayer = false) {
    const localPlayer = Game.Player;
    for (const id of GetActivePlayers()) {
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
  static get PlayerVersusPlayer() {
    return Game.Player.PvPEnabled;
  }
  /**
   * Set whether PvP is enabled.
   */
  static set PlayerVersusPlayer(value) {
    Game.Player.PvPEnabled = value;
  }
  /**
   * Get the maximum wanted level.
   */
  static get MaxWantedLevel() {
    return GetMaxWantedLevel();
  }
  /**
   * Set the maximum wanted level the local client can get.
   */
  static set MaxWantedLevel(value) {
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
  static set WantedMultiplier(value) {
    SetWantedLevelMultiplier(value);
  }
  /**
   * Set whether police blips should show on minimap.
   */
  static set ShowPoliceBlipsOnRadar(toggle) {
    SetPoliceRadarBlips(toggle);
  }
  /**
   * Get if nightvision is active.
   */
  static get Nightvision() {
    return IsNightvisionActive();
  }
  /**
   * Toggle nightvision.
   */
  static set Nightvision(toggle) {
    SetNightvision(toggle);
  }
  /**
   * Get if thermal (heat) vision is active.
   */
  static get ThermalVision() {
    return IsSeethroughActive();
  }
  /**
   * Toggle thermal (heat) vision.
   */
  static set ThermalVision(toggle) {
    SetSeethrough(toggle);
  }
  static get IsMissionActive() {
    return GetMissionFlag();
  }
  static set IsMissionActive(toggle) {
    SetMissionFlag(toggle);
  }
  static get IsRandomEventActive() {
    return GetRandomEventFlag();
  }
  static set IsRandomEventActive(toggle) {
    SetRandomEventFlag(toggle);
  }
  static get IsCutsceneActive() {
    return IsCutsceneActive();
  }
  /**
   * Is a waypoint set on the map.
   */
  static get IsWaypointActive() {
    return IsWaypointActive();
  }
  /**
   * Is the player in the pause menu (ESC).
   */
  static get IsPaused() {
    return IsPauseMenuActive();
  }
  /**
   * Force enable pause menu.
   */
  static set IsPaused(toggle) {
    SetPauseMenuActive(toggle);
  }
  /**
   * Get if a loading screen is active.
   */
  static get IsLoading() {
    return GetIsLoadingScreenActive();
  }
  /**
   * Get current input mode.
   * @returns InputMode: Mouse & Keyboard or GamePad.
   */
  static get CurrentInputMode() {
    return IsInputDisabled(2) ? InputMode.MouseAndKeyboard : InputMode.GamePad;
  }
  /**
   * Gets the player's current radio station.
   *
   * @returns A radio station.
   */
  static get RadioStation() {
    const stationName = GetPlayerRadioStationName();
    return RadioStation[stationName];
  }
  /**
   * Sets the player's radio station.
   *
   * @param station A radio station.
   */
  static set RadioStation(station) {
    SetRadioToStationName(station);
  }
  /**
   * Check whether a control is currently pressed.
   *
   * @param inputMode InputMode
   * @param control Control
   * @returns True or False.
   */
  static isControlPressed(inputMode, control) {
    return IsControlPressed(inputMode, Number(control));
  }
  /**
   * Check whether a disabled control is currently pressed.
   *
   * @param inputMode InputMode
   * @param control Control
   * @returns True or False.
   */
  static isDisabledControlPressed(inputMode, control) {
    return IsDisabledControlPressed(inputMode, Number(control));
  }
  /**
   * Check whether a control has been pressed since last check.
   *
   * @param inputMode InputMode
   * @param control Control
   * @returns True or False.
   */
  static isControlJustPressed(inputMode, control) {
    return IsControlJustPressed(inputMode, Number(control));
  }
  /**
   * Check whether a disabled control has been pressed since last check.
   *
   * @param inputMode InputMode
   * @param control Control
   * @returns True or False.
   */
  static isDisabledControlJustPressed(inputMode, control) {
    return IsDisabledControlJustPressed(inputMode, Number(control));
  }
  /**
   * Check whether a control is being released.
   *
   * @param inputMode InputMode
   * @param control Control
   * @returns True or False.
   */
  static isControlReleased(inputMode, control) {
    return IsControlReleased(inputMode, Number(control));
  }
  /**
   * Check whether a disabled control is being released.
   *
   * @param inputMode InputMode
   * @param control Control
   * @returns True or False.
   */
  static isDisabledControlReleased(inputMode, control) {
    return IsDisabledControlReleased(inputMode, Number(control));
  }
  /**
   * Check whether a control has been released since last check.
   *
   * @param inputMode InputMode
   * @param control Control
   * @returns True or False.
   */
  static isControlJustReleased(inputMode, control) {
    return IsControlJustReleased(inputMode, Number(control));
  }
  /**
   * Check whether a disabled control has been released since last check.
   *
   * @param inputMode InputMode
   * @param control Control
   * @returns True or False.
   */
  static isDisabledControlJustReleased(inputMode, control) {
    return IsDisabledControlJustReleased(inputMode, Number(control));
  }
  /**
   * Check whether a control is enabled this frame.
   *
   * @param inputMode InputMode
   * @param control Control
   * @returns True or False.
   */
  static isControlEnabled(inputMode, control) {
    return IsControlEnabled(inputMode, Number(control));
  }
  /**
   * Makes the Game Engine respond to the given Control this frame
   *
   * @param inputMode InputMode
   * @param control Control
   */
  static enableControlThisFrame(inputMode, control) {
    EnableControlAction(inputMode, Number(control), true);
  }
  /**
   * Makes the Game Engine ignore the given Control this frame
   *
   * @param inputMode InputMode
   * @param control Control
   */
  static disableControlThisFrame(inputMode, control) {
    DisableControlAction(inputMode, Number(control), true);
  }
  /**
   * Disables all Controls this frame.
   *
   * @param inputMode InputMode
   */
  static disableAllControlsThisFrame(inputMode) {
    DisableAllControlActions(inputMode);
  }
  /**
   * Enables all Controls this frame.
   *
   * @param inputMode InputMode
   */
  static enableAllControlsThisFrame(inputMode) {
    EnableAllControlActions(inputMode);
  }
  /**
   * Get an entity object from an entity handle.
   *
   * @param handle Handle of entity
   * @returns A Ped, Vehicle or Prop object. `undefined` if entity handle doesn't exist.
   */
  static entityFromHandle(handle) {
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
  static playSound(soundFile, soundSet) {
    Audio.playSound(soundFile, soundSet);
  }
  /**
   * Play music. Same as Audio.playSound
   *
   * @param musicFile Music file.
   */
  static playMusic(musicFile) {
    Audio.playMusic(musicFile);
  }
  /**
   * Stop music. If `musicFile` is not given, last played music is stopped. Same as Audio.playSound
   *
   * @param musicFile (optional) Music file.
   */
  static stopMusic(musicFile) {
    Audio.stopMusic(musicFile);
  }
  /**
   * Determines the game language files contain a entry for the specified GXT key
   *
   * @param entry - The GXT key.
   * @returns true if GXT entry exists; otherwise, false
   * @constructor
   */
  static doesGXTEntryExist(entry) {
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
  static getGXTEntry(entry) {
    return Game.doesGXTEntryExist(entry) ? GetLabelText(entry.toString()) : "";
  }
  /**
   * Sets the max boundry the local player can go to before they get killed
   *
   * @param vec - the max bounds for the local player
   */
  set ExtendWorldBoundry(vec) {
    ExtendWorldBoundaryForPlayer(vec.x, vec.y, vec.z);
  }
  get LastVehicle() {
    const vehicle = GetPlayersLastVehicle();
    if (vehicle === 0) return null;
    return new Vehicle(vehicle);
  }
  static getWaypointBlip() {
    if (!Game.IsWaypointActive) return null;
    for (let handle = GetBlipInfoIdIterator(), blip = GetFirstBlipInfoId(handle); DoesBlipExist(handle); blip = GetNextBlipInfoId(handle)) {
      if (GetBlipInfoIdType(blip) === 4) return new Blip(blip);
    }
    return null;
  }
  static removeWaypoint() {
    SetWaypointOff();
  }
  static get WaypointPosition() {
    const waypointBlip = Game.getWaypointBlip();
    if (waypointBlip == null) {
      return Vector3.Zero;
    }
    const position = waypointBlip.Position;
    position.z = Game.getGroundHeight(position);
    return position;
  }
  static set WaypointPosition(position) {
    SetNewWaypoint(position.x, position.y);
  }
  static getGroundHeight(position) {
    RequestCollisionAtCoord(position.x, position.z, 1e3);
    return GetGroundZFor_3dCoord(position.x, position.y, 1e3, false)[1];
  }
  static cachedPlayer;
}
export {
  Game
};
