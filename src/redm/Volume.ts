import type { Vector3 } from "@common/utils/Vector";

export enum VolumeType {
  Cylinder,
  Box
}


function getVolumeFunctionFromType(volumeType: VolumeType, hasCustomName: boolean) {
  if (hasCustomName) {
    switch (volumeType) {
      case VolumeType.Cylinder: return CreateVolumeCylinderWithCustomName
      case VolumeType.Box: return CreateVolumeBoxWithCustomName;
    }

  } else {

    switch (volumeType) {
      case VolumeType.Cylinder: return CreateVolumeCylinder;

      case VolumeType.Box: return CreateVolumeBox;
    }

  }

}


export class Volume {
  private handle: number;
  constructor(volumeType: VolumeType, coord: Vector3, rot: Vector3, scale: Vector3, customName?: string) {
    const fn = getVolumeFunctionFromType(volumeType, customName !== undefined);
    this.handle = fn(coord.x, coord.y, coord.z, rot.x, rot.y, rot.z, scale.x, scale.y, scale.z, customName as unknown as any);
  }

  get Handle(): number {
    return this.handle;
  }
}
