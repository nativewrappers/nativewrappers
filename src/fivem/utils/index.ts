export { _String } from "./String";
export { LiteEvent } from "./LiteEvent";
export { PointF } from "./PointF";
export { Crypto } from "./Crypto";
export { Point } from "./Point";
export { Size } from "./Size";

export {
  Vector2,
  Vector3,
  Vector4,
  Maths,
  Color,
  Quaternion,
  Delay,
  enumValues,
  getStringFromUInt8Array,
  getUInt32FromUint8Array,
} from "@common/utils/index";

export const Wait = (milliseconds: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, milliseconds));

export * from "./Animations";
