/**
 * List of possible entity intersections. Used for raycasting.
 */
export declare enum IntersectFlags {
    None = 0,
    World = 1,
    Vehicles = 2,
    Ped = 4,
    Ragdoll = 8,
    Object = 16,
    Pickup = 32,
    River = 128,
    Foliage = 256,
    All = 511
}
export declare enum ShapeTestOptions {
    None = 0,
    IgnoreGlass = 1,
    IgnoreSeeThrough = 2,
    IgnoreNoCollision = 4
}
export declare enum ShapeTestStatus {
    Discarded = 0,
    NotReady = 1,
    Ready = 2
}
export declare const SHAPE_TEST_DEFAULT: number;
