import type { AudioFlag } from "./enums";
import type { BaseEntity } from "./models/BaseEntity";
import type { Vector3 } from "./utils";

export abstract class Audio {
  public static playSoundAt(
    position: Vector3,
    sound: string,
    set?: string,
    generateSoundId = true,
  ): number {
    const SOUND_ID = generateSoundId ? GetSoundId() : -1;
    PlaySoundFromCoord(
      SOUND_ID,
      sound,
      position.x,
      position.y,
      position.z,
      set ?? "",
      false,
      0,
      false,
    );
    return SOUND_ID;
  }

  public static playSoundFromEntity(
    entity: BaseEntity,
    sound: string,
    set?: string,
    generateSoundId = true,
  ): number {
    const SOUND_ID = generateSoundId ? GetSoundId() : -1;
    PlaySoundFromEntity(SOUND_ID, sound, entity.Handle, set ?? "", false, 0);
    return SOUND_ID;
  }

  public static playSoundFrontEnd(
    sound: string,
    set?: string,
    generateSoundId = true,
  ): number {
    const SOUND_ID = generateSoundId ? GetSoundId() : -1;
    PlaySoundFrontend(SOUND_ID, sound, set ?? "", false);
    return SOUND_ID;
  }

  public static stopSound(soundId: number): void {
    StopSound(soundId);
  }

  public static releaseSound(soundId: number): void {
    ReleaseSoundId(soundId);
  }

  public static hasSoundFinished(soundId: number): boolean {
    return HasSoundFinished(soundId);
  }

  public static setAudioFlag(flag: string | AudioFlag, toggle: boolean): void {
    if (typeof flag === "string") {
      SetAudioFlag(flag, toggle);
    } else {
      SetAudioFlag(this.audioFlags[Number(flag)], toggle);
    }
  }

  public static playSound(soundFile: string, soundSet: string): void {
    this.releaseSound(this.playSoundFrontEnd(soundFile, soundSet));
  }

  public static playMusic(musicFile: string): void {
    if (!this.cachedMusicFile) {
      CancelMusicEvent(musicFile);
    }
    this.cachedMusicFile = musicFile;
    TriggerMusicEvent(musicFile);
  }

  public static stopMusic(musicFile?: string): void {
    if (!musicFile) {
      if (!this.cachedMusicFile) {
        CancelMusicEvent(this.cachedMusicFile);
        this.cachedMusicFile = "";
      }
    } else {
      CancelMusicEvent(musicFile ?? "");
    }
  }

  protected static cachedMusicFile: string;

  private static readonly audioFlags: string[] = [
    "ActivateSwitchWheelAudio",
    "AllowCutsceneOverScreenFade",
    "AllowForceRadioAfterRetune",
    "AllowPainAndAmbientSpeechToPlayDuringCutscene",
    "AllowPlayerAIOnMission",
    "AllowPoliceScannerWhenPlayerHasNoControl",
    "AllowRadioDuringSwitch",
    "AllowRadioOverScreenFade",
    "AllowScoreAndRadio",
    "AllowScriptedSpeechInSlowMo",
    "AvoidMissionCompleteDelay",
    "DisableAbortConversationForDeathAndInjury",
    "DisableAbortConversationForRagdoll",
    "DisableBarks",
    "DisableFlightMusic",
    "DisableReplayScriptStreamRecording",
    "EnableHeadsetBeep",
    "ForceConversationInterrupt",
    "ForceSeamlessRadioSwitch",
    "ForceSniperAudio",
    "FrontendRadioDisabled",
    "HoldMissionCompleteWhenPrepared",
    "IsDirectorModeActive",
    "IsPlayerOnMissionForSpeech",
    "ListenerReverbDisabled",
    "LoadMPData",
    "MobileRadioInGame",
    "OnlyAllowScriptTriggerPoliceScanner",
    "PlayMenuMusic",
    "PoliceScannerDisabled",
    "ScriptedConvListenerMaySpeak",
    "SpeechDucksScore",
    "SuppressPlayerScubaBreathing",
    "WantedMusicDisabled",
    "WantedMusicOnMission",
  ];
}
