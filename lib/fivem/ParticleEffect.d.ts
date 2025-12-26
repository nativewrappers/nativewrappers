import { Color } from "./common/utils/Color";
import { Vector3 } from "./common/utils/Vector";
import { type InvertAxis } from "./enums/InvertAxis";
import type { ParticleEffectAsset } from "./ParticleEffectAsset";
/**
 * UNFINISHED! Class to manage particle effects.
 */
export declare abstract class ParticleEffect {
    protected readonly asset: ParticleEffectAsset;
    protected readonly effectName: string;
    protected offset: Vector3;
    protected rotation: Vector3;
    protected color: Color;
    protected scale: number;
    protected range: number;
    protected invertAxis: InvertAxis;
    private handle;
    /**
     * Creates a particle effect.
     *
     * @param asset Particle effect asset.
     * @param effectName Name of effect.
     */
    constructor(asset: ParticleEffectAsset, effectName: string);
    /**
     * Get the particle effect handle.
     */
    get Handle(): number;
    /**
     * Get whether particle effect is currently active.
     */
    get IsActive(): boolean;
    abstract start(): boolean;
    /**
     * Stop a particle effect.
     */
    stop(): void;
    /**
     * Get the rotation of the particle effect.
     */
    get Rotation(): Vector3;
    /**
     * Set the rotation of the particle effect.
     */
    set Rotation(rotation: Vector3);
    /**
     * Get the range of the particle effect.
     */
    get Range(): number;
    /**
     * Set the range of the particle effect.
     */
    set Range(range: number);
    /**
     * Get the invert axis flag of the particle effect.
     */
    get InvertAxis(): InvertAxis;
    /**
     * Set the inverted axis of the particle effect.
     */
    set InvertAxis(invertAxis: InvertAxis);
    /**
     * Set a paramaeter of a particle effect.
     *
     * @param parameterName Name of parameter.
     * @param value Value of parameter.
     */
    setParameter(parameterName: string, value: number): void;
    /**
     * Get the name of the particle effect asset. Same as ParticleEffect.AssetName.
     */
    get AssetName(): string;
    /**
     * Get the name of the particle effect.
     */
    get EffectName(): string;
    /**
     * Return the particle effect as string. `AssetName`\\`EffectName`.
     */
    toString(): string;
}
