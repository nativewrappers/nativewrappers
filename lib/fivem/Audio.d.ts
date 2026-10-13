import type { Vector3 } from "./common/utils/Vector";
import type { AudioFlag } from "./enums/AudioFlag";
import type { BaseEntity } from "./models/BaseEntity";
export declare abstract class Audio {
    static playSoundAt(position: Vector3, sound: string, set?: string, generateSoundId?: boolean): number;
    static playSoundFromEntity(entity: BaseEntity, sound: string, set?: string, generateSoundId?: boolean): number;
    static playSoundFrontEnd(sound: string, set?: string, generateSoundId?: boolean): number;
    static stopSound(soundId: number): void;
    static releaseSound(soundId: number): void;
    static hasSoundFinished(soundId: number): boolean;
    static setAudioFlag(flag: string | AudioFlag, toggle: boolean): void;
    static playSound(soundFile: string, soundSet: string): void;
    static playMusic(musicFile: string): void;
    static stopMusic(musicFile?: string): void;
    protected static cachedMusicFile: string;
    private static readonly audioFlags;
}
