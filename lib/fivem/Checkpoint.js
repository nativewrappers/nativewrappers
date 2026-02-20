var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { Vector3 } from "./common/utils/Vector";
import { CheckpointIcon } from "./enums/Checkpoint";
class Checkpoint {
  static {
    __name(this, "Checkpoint");
  }
  handle;
  position = new Vector3(0, 0, 0);
  targetPosition = new Vector3(0, 0, 0);
  icon = CheckpointIcon.Empty;
  radius = 0;
  constructor(handle) {
    this.handle = handle;
  }
  get Position() {
    return this.position;
  }
  set Position(position) {
    this.position = position;
  }
  get TargetPosition() {
    return this.targetPosition;
  }
  set TargetPosition(targetPosition) {
    this.targetPosition = targetPosition;
  }
  get Icon() {
    return this.icon;
  }
  set Icon(icon) {
    this.icon = icon;
  }
  // TODO
  //   public get CustomIcon(): CheckpointIcon {
  //     return this.icon;
  //   }
  //     public set CustomIcon(icon: CheckpointIcon) {
  //     this.icon = icon;
  //   }
  get Radius() {
    return this.radius;
  }
  set Radius(radius) {
    this.radius = radius;
  }
}
export {
  Checkpoint
};
