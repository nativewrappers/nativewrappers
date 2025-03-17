import { Vector3 } from "@common/utils/Vector";
import { GameplayCamera } from "./GameplayCamera";
import type { CameraShake } from "./enums/CameraShake";
import type { BaseEntity } from "./models/BaseEntity";
import { PedBone } from "./models/PedBone";
import { LoadAnimDict } from "./utils/Animations";

export class Camera {
  public static readonly shakeNames: string[] = [
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
    "DEATH_FAIL_IN_EFFECT_SHAKE",
  ];

  private handle: number;

  constructor(handle: number) {
    this.handle = handle;
  }

  public get Handle(): number {
    return this.handle;
  }

  public get IsActive(): boolean {
    return IsCamActive(this.handle);
  }

  public set IsActive(active: boolean) {
    SetCamActive(this.handle, active);
  }

  public get Position(): Vector3 {
    return Vector3.fromArray(GetCamCoord(this.handle));
  }

  public set Position(position: Vector3) {
    SetCamCoord(this.handle, position.x, position.y, position.z);
  }

  public get Rotation(): Vector3 {
    return Vector3.fromArray(GetCamRot(this.handle, 2));
  }

  public set Rotation(rotation: Vector3) {
    SetCamRot(this.handle, rotation.x, rotation.y, rotation.z, 2);
  }

  // public get Matrix() : Matrix {}

  /**
   * Gets the direction the camera is facing. Same as ForwardVector
   */
  public get Direction(): Vector3 {
    return this.ForwardVector;
  }

  public set Direction(direction: Vector3) {
    const dir = direction.normalize();

    const vec1 = new Vector3(dir.x, dir.y, 0);
    const vec2 = new Vector3(dir.z, vec1.distanceSquared(vec1), 0);
    const vec3 = vec2.normalize();

    this.Rotation = new Vector3(
      Math.atan2(vec3.x, vec3.y) * 57.295779513082323,
      this.Rotation.y,
      Math.atan2(dir.x, dir.y) * -57.295779513082323,
    );
  }

  //   public get UpVector() : Vector3 {
  //       return Matrix.Up;
  //   }

  public get ForwardVector(): Vector3 {
    const rotation = Vector3.multiply(GameplayCamera.Rotation, Math.PI / 180);
    const normalized = Vector3.normalize(
      new Vector3(
        -Math.sin(rotation.z) * Math.abs(Math.cos(rotation.x)),
        Math.cos(rotation.z) * Math.abs(Math.cos(rotation.x)),
        Math.sin(rotation.x),
      ),
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

  public get FieldOfView(): number {
    return GetCamFov(this.handle);
  }

  public set FieldOfView(fieldOfView: number) {
    SetCamFov(this.handle, fieldOfView);
  }

  public get NearClip(): number {
    return GetCamNearClip(this.handle);
  }

  public set NearClip(nearClip: number) {
    SetCamNearClip(this.handle, nearClip);
  }

  public get FarClip(): number {
    return GetCamFarClip(this.handle);
  }

  public set FarClip(farClip: number) {
    SetCamFarClip(this.handle, farClip);
  }

  public set NearDepthOfField(nearDepthOfField: number) {
    SetCamNearDof(this.handle, nearDepthOfField);
  }

  public get FarDepthOfField(): number {
    return GetCamFarDof(this.handle);
  }

  public set FarDepthOfField(farDepthOfField: number) {
    SetCamFarDof(this.handle, farDepthOfField);
  }

  public set DepthOfFieldStrength(strength: number) {
    SetCamDofStrength(this.handle, strength);
  }

  public set MotionBlurStrength(strength: number) {
    SetCamMotionBlurStrength(this.handle, strength);
  }

  public shake(shakeType: CameraShake, amplitude: number): void {
    ShakeCam(this.handle, Camera.shakeNames[Number(shakeType)], amplitude);
  }

  public stopShaking(): void {
    StopCamShaking(this.handle, true);
  }

  public get IsShaking(): boolean {
    return IsCamShaking(this.handle);
  }

  public set ShakeAmplitude(amplitude: number) {
    SetCamShakeAmplitude(this.handle, amplitude);
  }

  public async playAnim(animName: string, animDict: string, position: Vector3, rotation: Vector3): Promise<void> {
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
      2,
    );
    RemoveAnimDict(animDict);
  }

  public pointAt(target: BaseEntity | PedBone | Vector3, offset: Vector3 = new Vector3(0, 0, 0)): void {
    if (target instanceof Vector3) {
      PointCamAtCoord(this.handle, target.x, target.y, target.z);
    } else if (target instanceof PedBone) {
      PointCamAtPedBone(this.handle, target.Owner.Handle, target.Index, offset.x, offset.y, offset.z, true);
    } else {
      PointCamAtEntity(this.handle, target.Handle, offset.x, offset.y, offset.z, true);
    }
  }

  public stopPointing(): void {
    StopCamPointing(this.handle);
  }

  public interpTo(to: Camera, duration: number, easePosition: boolean, easeRotation: boolean): void {
    SetCamActiveWithInterp(to.handle, this.handle, duration, Number(easePosition), Number(easeRotation));
  }

  public get IsInterpolating(): boolean {
    return IsCamInterpolating(this.handle);
  }

  public attachTo(object: BaseEntity | PedBone, offset: Vector3): void {
    if (object instanceof PedBone) {
      AttachCamToPedBone(this.handle, object.Owner.Handle, object.Index, offset.x, offset.y, offset.z, true);
    } else {
      AttachCamToEntity(this.handle, object.Handle, offset.x, offset.y, offset.z, true);
    }
  }

  public detach(): void {
    DetachCam(this.handle);
  }

  public delete(): void {
    DestroyCam(this.handle, false);
  }

  public exists(): boolean {
    return DoesCamExist(this.handle);
  }
}
