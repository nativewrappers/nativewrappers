var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { Vector3 } from "./common/utils/Vector";
import { GameplayCamera } from "./GameplayCamera";
import { PedBone } from "./models/PedBone";
import { LoadAnimDict } from "./utils/Animations";
class Camera {
  static {
    __name(this, "Camera");
  }
  static shakeNames = [
    "HAND_SHAKE",
    "SMALL_EXPLOSION_SHAKE",
    "MEDIUM_EXPLOSION_SHAKE",
    "LARGE_EXPLOSION_SHAKE",
    "JOLT_SHAKE",
    "VIBRATE_SHAKE",
    "ROAD_VIBRATION_SHAKE",
    "DRUNK_SHAKE",
    "SKY_DIVING_SHAKE",
    "FAMILY5_DRUG_TRIP_SHAKE",
    "DEATH_FAIL_IN_EFFECT_SHAKE"
  ];
  handle;
  constructor(handle) {
    this.handle = handle;
  }
  get Handle() {
    return this.handle;
  }
  get IsActive() {
    return IsCamActive(this.handle);
  }
  set IsActive(active) {
    SetCamActive(this.handle, active);
  }
  get Position() {
    return Vector3.fromArray(GetCamCoord(this.handle));
  }
  set Position(position) {
    SetCamCoord(this.handle, position.x, position.y, position.z);
  }
  get Rotation() {
    return Vector3.fromArray(GetCamRot(this.handle, 2));
  }
  set Rotation(rotation) {
    SetCamRot(this.handle, rotation.x, rotation.y, rotation.z, 2);
  }
  // public get Matrix() : Matrix {}
  /**
   * Gets the direction the camera is facing. Same as ForwardVector
   */
  get Direction() {
    return this.ForwardVector;
  }
  set Direction(direction) {
    const dir = direction.normalize();
    const vec1 = new Vector3(dir.x, dir.y, 0);
    const vec2 = new Vector3(dir.z, vec1.distanceSquared(vec1), 0);
    const vec3 = vec2.normalize();
    this.Rotation = new Vector3(
      Math.atan2(vec3.x, vec3.y) * 57.29577951308232,
      this.Rotation.y,
      Math.atan2(dir.x, dir.y) * -57.29577951308232
    );
  }
  //   public get UpVector() : Vector3 {
  //       return Matrix.Up;
  //   }
  get ForwardVector() {
    const rotation = Vector3.multiply(GameplayCamera.Rotation, Math.PI / 180);
    const normalized = Vector3.normalize(
      new Vector3(
        -Math.sin(rotation.z) * Math.abs(Math.cos(rotation.x)),
        Math.cos(rotation.z) * Math.abs(Math.cos(rotation.x)),
        Math.sin(rotation.x)
      )
    );
    return new Vector3(normalized.x, normalized.y, normalized.z);
  }
  //   public get RightVector() : Vector3 {
  //       return Matrix.Right;
  //   }
  // public Vector3 GetOffsetPosition(Vector3 offset) {
  //     return Vector3.TransformCoordinate(offset, Matrix);
  // }
  // public Vector3 GetPositionOffset(Vector3 worldCoords) {
  //     return Vector3.TransformCoordinate(worldCoords, Matrix.Invert(Matrix));
  // }
  get FieldOfView() {
    return GetCamFov(this.handle);
  }
  set FieldOfView(fieldOfView) {
    SetCamFov(this.handle, fieldOfView);
  }
  get NearClip() {
    return GetCamNearClip(this.handle);
  }
  set NearClip(nearClip) {
    SetCamNearClip(this.handle, nearClip);
  }
  get FarClip() {
    return GetCamFarClip(this.handle);
  }
  set FarClip(farClip) {
    SetCamFarClip(this.handle, farClip);
  }
  set NearDepthOfField(nearDepthOfField) {
    SetCamNearDof(this.handle, nearDepthOfField);
  }
  get FarDepthOfField() {
    return GetCamFarDof(this.handle);
  }
  set FarDepthOfField(farDepthOfField) {
    SetCamFarDof(this.handle, farDepthOfField);
  }
  set DepthOfFieldStrength(strength) {
    SetCamDofStrength(this.handle, strength);
  }
  set MotionBlurStrength(strength) {
    SetCamMotionBlurStrength(this.handle, strength);
  }
  shake(shakeType, amplitude) {
    ShakeCam(this.handle, Camera.shakeNames[Number(shakeType)], amplitude);
  }
  stopShaking() {
    StopCamShaking(this.handle, true);
  }
  get IsShaking() {
    return IsCamShaking(this.handle);
  }
  set ShakeAmplitude(amplitude) {
    SetCamShakeAmplitude(this.handle, amplitude);
  }
  async playAnim(animName, animDict, position, rotation) {
    await LoadAnimDict(animDict);
    PlayCamAnim(
      this.handle,
      animName,
      animDict,
      position.x,
      position.y,
      position.z,
      rotation.x,
      rotation.y,
      rotation.z,
      false,
      2
    );
    RemoveAnimDict(animDict);
  }
  pointAt(target, offset = new Vector3(0, 0, 0)) {
    if (target instanceof Vector3) {
      PointCamAtCoord(this.handle, target.x, target.y, target.z);
    } else if (target instanceof PedBone) {
      PointCamAtPedBone(this.handle, target.Owner.Handle, target.Index, offset.x, offset.y, offset.z, true);
    } else {
      PointCamAtEntity(this.handle, target.Handle, offset.x, offset.y, offset.z, true);
    }
  }
  stopPointing() {
    StopCamPointing(this.handle);
  }
  interpTo(to, duration, easePosition, easeRotation) {
    SetCamActiveWithInterp(to.handle, this.handle, duration, Number(easePosition), Number(easeRotation));
  }
  get IsInterpolating() {
    return IsCamInterpolating(this.handle);
  }
  attachTo(object, offset) {
    if (object instanceof PedBone) {
      AttachCamToPedBone(this.handle, object.Owner.Handle, object.Index, offset.x, offset.y, offset.z, true);
    } else {
      AttachCamToEntity(this.handle, object.Handle, offset.x, offset.y, offset.z, true);
    }
  }
  detach() {
    DetachCam(this.handle);
  }
  delete() {
    DestroyCam(this.handle, false);
  }
  exists() {
    return DoesCamExist(this.handle);
  }
}
export {
  Camera
};
