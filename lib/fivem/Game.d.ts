import { Vector3 } from "./common/utils/Vector";
import { Blip } from "./Blip";
import type { Control } from "./enums/Control";
import { InputMode } from "./enums/InputMode";
import type { Language } from "./enums/Language";
import { RadioStation } from "./enums/RadioStation";
import { Ped } from "./models/Ped";
import { Prop } from "./models/Prop";
import { Vehicle } from "./models/Vehicle";
import { Player } from "./models/Player";
export declare abstract class Game {
    static useHashCache: boolean;
    static hashCache: Map<string, number>;
    /**
     * Calculate the Jenkins One At A Time (joaat) has from the given string.
     *
     * @param input The input string to calculate the hash
     */
    static generateHash(input: string): number;
    static setLocalPlayerGhosted(isGhosted: boolean, inverseGhost: boolean): void;
    static setGhostAlpha(alpha: number): void;
    static resetGhostAlpha(): void;
    static setGhostingInverted(isInverted: boolean): void;
    /**
     * Gets the game language
     */
    static get Language(): Language;
    /**
     * Gets how many milliseconds the game has been open this session
     */
    static get GameTime(): number;
    /**
     * Sets the time scale of the Game.
     *
     * @param time The time scale, only accepts values between 0.0 and 1.0
     */
    static set TimeScale(time: number);
    /**
     * Gets the total amount of frames rendered in this session
     */
    static get FrameCount(): number;
    /**
     * Gets the current frame rate per second
     */
    static get FPS(): number;
    /**
     * Gets the time it currently takes to render a frame, in seconds;
     */
    static get LastFrameTime(): number;
    /**
     * Get the local player's Player object.
     */
    static get Player(): Player;
    /**
     * Get the local player character's Ped object.
     * @returns A local player's character.
     */
    static get PlayerPed(): Ped;
    /**
     * Get an iterable list of players currently on server.
     * @returns Iterable list of Player objects.
     */
    static playerList(excludeLocalPlayer?: boolean): IterableIterator<Player>;
    /**
     * Get whether PvP is enabled.
     * @returns True if enabled.
     */
    static get PlayerVersusPlayer(): boolean;
    /**
     * Set whether PvP is enabled.
     */
    static set PlayerVersusPlayer(value: boolean);
    /**
     * Get the maximum wanted level.
     */
    static get MaxWantedLevel(): number;
    /**
     * Set the maximum wanted level the local client can get.
     */
    static set MaxWantedLevel(value: number);
    /**
     * Set the multiplier of the wanted level.
     */
    static set WantedMultiplier(value: number);
    /**
     * Set whether police blips should show on minimap.
     */
    static set ShowPoliceBlipsOnRadar(toggle: boolean);
    /**
     * Get if nightvision is active.
     */
    static get Nightvision(): boolean;
    /**
     * Toggle nightvision.
     */
    static set Nightvision(toggle: boolean);
    /**
     * Get if thermal (heat) vision is active.
     */
    static get ThermalVision(): boolean;
    /**
     * Toggle thermal (heat) vision.
     */
    static set ThermalVision(toggle: boolean);
    static get IsMissionActive(): boolean;
    static set IsMissionActive(toggle: boolean);
    static get IsRandomEventActive(): boolean;
    static set IsRandomEventActive(toggle: boolean);
    static get IsCutsceneActive(): boolean;
    /**
     * Is a waypoint set on the map.
     */
    static get IsWaypointActive(): boolean;
    /**
     * Is the player in the pause menu (ESC).
     */
    static get IsPaused(): boolean;
    /**
     * Force enable pause menu.
     */
    static set IsPaused(toggle: boolean);
    /**
     * Get if a loading screen is active.
     */
    static get IsLoading(): boolean;
    /**
     * Get current input mode.
     * @returns InputMode: Mouse & Keyboard or GamePad.
     */
    static get CurrentInputMode(): InputMode;
    /**
     * Gets the player's current radio station.
     *
     * @returns A radio station.
     */
    static get RadioStation(): RadioStation;
    /**
     * Sets the player's radio station.
     *
     * @param station A radio station.
     */
    static set RadioStation(station: RadioStation);
    /**
     * Check whether a control is currently pressed.
     *
     * @param inputMode InputMode
     * @param control Control
     * @returns True or False.
     */
    static isControlPressed(inputMode: InputMode, control: Control): boolean;
    /**
     * Check whether a disabled control is currently pressed.
     *
     * @param inputMode InputMode
     * @param control Control
     * @returns True or False.
     */
    static isDisabledControlPressed(inputMode: InputMode, control: Control): boolean;
    /**
     * Check whether a control has been pressed since last check.
     *
     * @param inputMode InputMode
     * @param control Control
     * @returns True or False.
     */
    static isControlJustPressed(inputMode: InputMode, control: Control): boolean;
    /**
     * Check whether a disabled control has been pressed since last check.
     *
     * @param inputMode InputMode
     * @param control Control
     * @returns True or False.
     */
    static isDisabledControlJustPressed(inputMode: InputMode, control: Control): boolean;
    /**
     * Check whether a control is being released.
     *
     * @param inputMode InputMode
     * @param control Control
     * @returns True or False.
     */
    static isControlReleased(inputMode: InputMode, control: Control): boolean;
    /**
     * Check whether a disabled control is being released.
     *
     * @param inputMode InputMode
     * @param control Control
     * @returns True or False.
     */
    static isDisabledControlReleased(inputMode: InputMode, control: Control): boolean;
    /**
     * Check whether a control has been released since last check.
     *
     * @param inputMode InputMode
     * @param control Control
     * @returns True or False.
     */
    static isControlJustReleased(inputMode: InputMode, control: Control): boolean;
    /**
     * Check whether a disabled control has been released since last check.
     *
     * @param inputMode InputMode
     * @param control Control
     * @returns True or False.
     */
    static isDisabledControlJustReleased(inputMode: InputMode, control: Control): boolean;
    /**
     * Check whether a control is enabled this frame.
     *
     * @param inputMode InputMode
     * @param control Control
     * @returns True or False.
     */
    static isControlEnabled(inputMode: InputMode, control: Control): boolean;
    /**
     * Makes the Game Engine respond to the given Control this frame
     *
     * @param inputMode InputMode
     * @param control Control
     */
    static enableControlThisFrame(inputMode: InputMode, control: Control): void;
    /**
     * Makes the Game Engine ignore the given Control this frame
     *
     * @param inputMode InputMode
     * @param control Control
     */
    static disableControlThisFrame(inputMode: InputMode, control: Control): void;
    /**
     * Disables all Controls this frame.
     *
     * @param inputMode InputMode
     */
    static disableAllControlsThisFrame(inputMode: InputMode): void;
    /**
     * Enables all Controls this frame.
     *
     * @param inputMode InputMode
     */
    static enableAllControlsThisFrame(inputMode: InputMode): void;
    /**
     * Get an entity object from an entity handle.
     *
     * @param handle Handle of entity
     * @returns A Ped, Vehicle or Prop object. `undefined` if entity handle doesn't exist.
     */
    static entityFromHandle(handle: number): Ped | Vehicle | Prop | null;
    /**
     * Play a sound. Same as Audio.playSound
     *
     * @param soundFile Name of sound
     * @param soundSet The set where the sound is in
     */
    static playSound(soundFile: string, soundSet: string): void;
    /**
     * Play music. Same as Audio.playSound
     *
     * @param musicFile Music file.
     */
    static playMusic(musicFile: string): void;
    /**
     * Stop music. If `musicFile` is not given, last played music is stopped. Same as Audio.playSound
     *
     * @param musicFile (optional) Music file.
     */
    static stopMusic(musicFile?: string): void;
    /**
     * Determines the game language files contain a entry for the specified GXT key
     *
     * @param entry - The GXT key.
     * @returns true if GXT entry exists; otherwise, false
     * @constructor
     */
    static doesGXTEntryExist(entry: number | string): boolean;
    /**
     * Returns a localised string from the games language files with a specified GXT key
     *
     * @param entry - The GXT key.
     * @returns The localised string if the key exists; otherwise, empty string
     */
    static getGXTEntry(entry: number | string): string;
    /**
     * Sets the max boundry the local player can go to before they get killed
     *
     * @param vec - the max bounds for the local player
     */
    set ExtendWorldBoundry(vec: Vector3);
    get LastVehicle(): Vehicle | null;
    static getWaypointBlip(): Blip | null;
    static removeWaypoint(): void;
    static get WaypointPosition(): Vector3;
    static set WaypointPosition(position: Vector3);
    static getGroundHeight(position: Vector3): number;
    protected static cachedPlayer: Player;
}
