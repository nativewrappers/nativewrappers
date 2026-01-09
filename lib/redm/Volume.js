var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var VolumeType = /* @__PURE__ */ ((VolumeType2) => {
  VolumeType2[VolumeType2["Cylinder"] = 0] = "Cylinder";
  VolumeType2[VolumeType2["Box"] = 1] = "Box";
  return VolumeType2;
})(VolumeType || {});
function getVolumeFunctionFromType(volumeType, hasCustomName) {
  if (hasCustomName) {
    switch (volumeType) {
      case 0 /* Cylinder */:
        return CreateVolumeCylinderWithCustomName;
      case 1 /* Box */:
        return CreateVolumeBoxWithCustomName;
    }
  }
  switch (volumeType) {
    case 0 /* Cylinder */:
      return CreateVolumeCylinder;
    case 1 /* Box */:
      return CreateVolumeBox;
  }
}
__name(getVolumeFunctionFromType, "getVolumeFunctionFromType");
class Volume {
  static {
    __name(this, "Volume");
  }
  handle;
  constructor(volumeType, coord, rot, scale, customName) {
    const fn = getVolumeFunctionFromType(volumeType, customName !== void 0);
    this.handle = fn(
      coord.x,
      coord.y,
      coord.z,
      rot.x,
      rot.y,
      rot.z,
      scale.x,
      scale.y,
      scale.z,
      customName
    );
  }
  get Handle() {
    return this.handle;
  }
}
export {
  Volume,
  VolumeType
};
