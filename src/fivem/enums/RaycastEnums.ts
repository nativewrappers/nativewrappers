/**
 * List of possible entity intersections. Used for raycasting.
 */
export enum IntersectFlags {
  None = 0,
  World = 1,
  Vehicles = 2,
  Ped = 4,
  Ragdoll = 8,
  Object = 16,
  Pickup = 32,
  River = 128,
  Foliage = 256,
  All = 511,
}

export enum ShapeTestOptions {
  None = 0,
  IgnoreGlass = 1,
  IgnoreSeeThrough = 2,
  IgnoreNoCollision = 4,
}

export enum ShapeTestStatus {
  Discarded = 0,
  NotReady = 1,
  Ready = 2,
}

export const SHAPE_TEST_DEFAULT =
  ShapeTestOptions.IgnoreGlass | ShapeTestOptions.IgnoreSeeThrough | ShapeTestOptions.IgnoreNoCollision;
