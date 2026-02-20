import { Vector3 } from "./common/utils/Vector";
import { type InvertAxis } from "./enums/InvertAxis";
import type { BaseEntity } from "./models/BaseEntity";
/**
 * UNFINISHED! Class that represents a particle effect asset.
 */
export declare class ParticleEffectAsset {
    /**
     * Returns the name of the asset. Same as AssetName.
     */
    get Asset(): string;
    private readonly assetName;
    constructor(assetName: string);
    /**
     * Get the name of the particle effect.
     */
    get AssetName(): string;
    /**
     * Get whether the particle effect has loaded into game memory.
     */
    get IsLoaded(): boolean;
    /**
     * Start a particle effect at a world position.
     *
     * @param effectName Name of effect.
     * @param rot Rotation from entity position.
     * @param scale Size of the effect.
     * @param invertAxis Which axis to invert (default none).
     */
    startNonLoopedAtCoord(effectName: string, pos: Vector3, rot?: Vector3, scale?: number, invertAxis?: InvertAxis): boolean;
    /**
     * Start a particle effect on an entity
     *
     * @param effectName Name of effect.
     * @param entity Entity to use effect on.
     * @param off Offset from entity position.
     * @param rot Rotation from entity position.
     * @param scale Size of the effect.
     * @param invertAxis Which axis to invert (default none).
     */
    startNonLoopedOnEntity(effectName: string, entity: BaseEntity, off?: Vector3, rot?: Vector3, scale?: number, invertAxis?: InvertAxis): boolean;
    /**
     * Load a particle effect into the game memory.
     *
     * @param timeout Max time to load Particle Effect
     */
    request(timeout: number): Promise<boolean>;
    /**
     * Allow game engine to safely unload particle effect model from memory.
     */
    markAsNoLongerNeeded(): void;
    toString(): string;
    private setNextCall;
}
