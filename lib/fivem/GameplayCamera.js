var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { Vector3 } from "./common/utils/Vector";
import { Camera } from "./Camera";
class GameplayCamera {
  static {
    __name(this, "GameplayCamera");
  }
  /**
   * Get the world position of gameplay camera.
   */
  static get Position() {
    return Vector3.fromArray(GetGameplayCamCoords());
  }
  /**
   * Get the rotation of gameplay camera.
   */
  static get Rotation() {
    return Vector3.fromArray(GetGameplayCamRot(2));
  }
  /**
   * Get the forward vector of gameplay camera.
   */
  static get ForwardVector() {
    const rotation = Vector3.multiply(GameplayCamera.Rotation, Math.PI / 180);
    return Vector3.normalize(
      new Vector3(
        -Math.sin(rotation.z) * Math.abs(Math.cos(rotation.x)),
        Math.cos(rotation.z) * Math.abs(Math.cos(rotation.x)),
        Math.sin(rotation.x)
      )
    );
  }
  /**
   * Get the pitch of the gameplay camera relative to player.
   */
  static get RelativePitch() {
    return GetGameplayCamRelativePitch();
  }
  /**
   * Set gameplay camera pitch relative to player.
   */
  static set RelativePitch(pitch) {
    SetGameplayCamRelativePitch(pitch, 1);
  }
  /**
   * Get heading of gameplay camera.
   */
  static get RelativeHeading() {
    return GetGameplayCamRelativeHeading();
  }
  /**
   * Get heading of gameplay camera.
   */
  static set RelativeHeading(heading) {
    SetGameplayCamRelativeHeading(heading);
  }
  /**
   * Clamps the yaw of the gameplay camera.
   *
   * @param min The minimum yaw value.
   * @param max The maximum yaw value.
   */
  static clampYaw(min, max) {
    ClampGameplayCamYaw(min, max);
  }
  /**
   * Clamps the pitch of the gameplay camera.
   *
   * @param min The minimum pitch value.
   * @param max The maximum pitch value.
   */
  static clampPitch(min, max) {
    ClampGameplayCamPitch(min, max);
  }
  /**
   * Gets zoom of the gameplay camera.
   */
  static get Zoom() {
    return GetGameplayCamZoom();
  }
  /**
   * Gets field of view of the gameplay camera.
   */
  static get FieldOfView() {
    return GetGameplayCamFov();
  }
  /**
   * Gets a value indicating whether the gameplay camera is rendering.
   *
   * @returns true if the gameplay camera is rendering; otherwise, false.
   */
  static get IsRendering() {
    return IsGameplayCamRendering();
  }
  /**
   * Gets a value indicating whether the aiming camera is rendering.
   *
   * @returns true if the aiming camera is rendering; otherwise, false.
   */
  static get IsAimCamActive() {
    return IsAimCamActive();
  }
  /**
   * Gets a value indicating whether the first person aiming camera is rendering.
   *
   * @returns true if the first person aiming camera is rendering; otherwise, false.
   */
  static get IsFirstPersonAimCamActive() {
    return IsFirstPersonAimCamActive();
  }
  /**
   * Gets a value indicating whether the gameplay camera is looking behind.
   *
   * @returns true if the gameplay camera is looking behind; otherwise, false.
   */
  static get IsLookingBehind() {
    return IsGameplayCamLookingBehind();
  }
  /**
   * Shakes the gameplay camera.
   *
   * @param shakeType Type of the shake to apply.
   * @param amplitude The amplitude of the shaking.
   */
  static shake(shakeType, amplitude) {
    ShakeGameplayCam(Camera.shakeNames[Number(shakeType)], amplitude);
  }
  /**
   * Stops shaking the gameplay camera.
   */
  static stopShaking() {
    StopGameplayCamShaking(true);
  }
  /**
   * Gets a value indicating whether the gameplay camera is shaking.
   *
   * @returns true if the gameplay camera is shaking; otherwise, false.
   */
  static get IsShaking() {
    return IsGameplayCamShaking();
  }
  /**
   * Sets the shake amplitude for the gameplay camera.
   */
  static set ShakeAmplitude(value) {
    SetGameplayCamShakeAmplitude(value);
  }
}
export {
  GameplayCamera
};
