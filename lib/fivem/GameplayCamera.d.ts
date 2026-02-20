import { Vector3 } from "./common/utils/Vector";
import type { CameraShake } from "./enums/CameraShake";
/**
 * The current rendering gameplay camera
 */
export declare abstract class GameplayCamera {
    /**
     * Get the world position of gameplay camera.
     */
    static get Position(): Vector3;
    /**
     * Get the rotation of gameplay camera.
     */
    static get Rotation(): Vector3;
    /**
     * Get the forward vector of gameplay camera.
     */
    static get ForwardVector(): Vector3;
    /**
     * Get the pitch of the gameplay camera relative to player.
     */
    static get RelativePitch(): number;
    /**
     * Set gameplay camera pitch relative to player.
     */
    static set RelativePitch(pitch: number);
    /**
     * Get heading of gameplay camera.
     */
    static get RelativeHeading(): number;
    /**
     * Get heading of gameplay camera.
     */
    static set RelativeHeading(heading: number);
    /**
     * Clamps the yaw of the gameplay camera.
     *
     * @param min The minimum yaw value.
     * @param max The maximum yaw value.
     */
    static clampYaw(min: number, max: number): void;
    /**
     * Clamps the pitch of the gameplay camera.
     *
     * @param min The minimum pitch value.
     * @param max The maximum pitch value.
     */
    static clampPitch(min: number, max: number): void;
    /**
     * Gets zoom of the gameplay camera.
     */
    static get Zoom(): number;
    /**
     * Gets field of view of the gameplay camera.
     */
    static get FieldOfView(): number;
    /**
     * Gets a value indicating whether the gameplay camera is rendering.
     *
     * @returns true if the gameplay camera is rendering; otherwise, false.
     */
    static get IsRendering(): boolean;
    /**
     * Gets a value indicating whether the aiming camera is rendering.
     *
     * @returns true if the aiming camera is rendering; otherwise, false.
     */
    static get IsAimCamActive(): boolean;
    /**
     * Gets a value indicating whether the first person aiming camera is rendering.
     *
     * @returns true if the first person aiming camera is rendering; otherwise, false.
     */
    static get IsFirstPersonAimCamActive(): boolean;
    /**
     * Gets a value indicating whether the gameplay camera is looking behind.
     *
     * @returns true if the gameplay camera is looking behind; otherwise, false.
     */
    static get IsLookingBehind(): boolean;
    /**
     * Shakes the gameplay camera.
     *
     * @param shakeType Type of the shake to apply.
     * @param amplitude The amplitude of the shaking.
     */
    static shake(shakeType: CameraShake, amplitude: number): void;
    /**
     * Stops shaking the gameplay camera.
     */
    static stopShaking(): void;
    /**
     * Gets a value indicating whether the gameplay camera is shaking.
     *
     * @returns true if the gameplay camera is shaking; otherwise, false.
     */
    static get IsShaking(): boolean;
    /**
     * Sets the shake amplitude for the gameplay camera.
     */
    static set ShakeAmplitude(value: number);
}
