var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
class Audio {
  static {
    __name(this, "Audio");
  }
  static playSoundAt(position, sound, set, generateSoundId = true) {
    const SOUND_ID = generateSoundId ? GetSoundId() : -1;
    PlaySoundFromCoord(SOUND_ID, sound, position.x, position.y, position.z, set ?? "", false, 0, false);
    return SOUND_ID;
  }
  static playSoundFromEntity(entity, sound, set, generateSoundId = true) {
    const SOUND_ID = generateSoundId ? GetSoundId() : -1;
    PlaySoundFromEntity(SOUND_ID, sound, entity.Handle, set ?? "", false, 0);
    return SOUND_ID;
  }
  static playSoundFrontEnd(sound, set, generateSoundId = true) {
    const SOUND_ID = generateSoundId ? GetSoundId() : -1;
    PlaySoundFrontend(SOUND_ID, sound, set ?? "", false);
    return SOUND_ID;
  }
  static stopSound(soundId) {
    StopSound(soundId);
  }
  static releaseSound(soundId) {
    ReleaseSoundId(soundId);
  }
  static hasSoundFinished(soundId) {
    return HasSoundFinished(soundId);
  }
  static setAudioFlag(flag, toggle) {
    if (typeof flag === "string") {
      SetAudioFlag(flag, toggle);
    } else {
      SetAudioFlag(Audio.audioFlags[Number(flag)], toggle);
    }
  }
  static playSound(soundFile, soundSet) {
    Audio.releaseSound(Audio.playSoundFrontEnd(soundFile, soundSet));
  }
  static playMusic(musicFile) {
    if (!Audio.cachedMusicFile) {
      CancelMusicEvent(musicFile);
    }
    Audio.cachedMusicFile = musicFile;
    TriggerMusicEvent(musicFile);
  }
  static stopMusic(musicFile) {
    if (!musicFile) {
      if (!Audio.cachedMusicFile) {
        CancelMusicEvent(Audio.cachedMusicFile);
        Audio.cachedMusicFile = "";
      }
    } else {
      CancelMusicEvent(musicFile ?? "");
    }
  }
  static cachedMusicFile;
  static audioFlags = [
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
    "WantedMusicOnMission"
  ];
}
export {
  Audio
};
