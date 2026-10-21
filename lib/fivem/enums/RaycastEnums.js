var IntersectFlags = /* @__PURE__ */ ((IntersectFlags2) => {
  IntersectFlags2[IntersectFlags2["None"] = 0] = "None";
  IntersectFlags2[IntersectFlags2["World"] = 1] = "World";
  IntersectFlags2[IntersectFlags2["Vehicles"] = 2] = "Vehicles";
  IntersectFlags2[IntersectFlags2["Ped"] = 4] = "Ped";
  IntersectFlags2[IntersectFlags2["Ragdoll"] = 8] = "Ragdoll";
  IntersectFlags2[IntersectFlags2["Object"] = 16] = "Object";
  IntersectFlags2[IntersectFlags2["Pickup"] = 32] = "Pickup";
  IntersectFlags2[IntersectFlags2["River"] = 128] = "River";
  IntersectFlags2[IntersectFlags2["Foliage"] = 256] = "Foliage";
  IntersectFlags2[IntersectFlags2["All"] = 511] = "All";
  return IntersectFlags2;
})(IntersectFlags || {});
var ShapeTestOptions = /* @__PURE__ */ ((ShapeTestOptions2) => {
  ShapeTestOptions2[ShapeTestOptions2["None"] = 0] = "None";
  ShapeTestOptions2[ShapeTestOptions2["IgnoreGlass"] = 1] = "IgnoreGlass";
  ShapeTestOptions2[ShapeTestOptions2["IgnoreSeeThrough"] = 2] = "IgnoreSeeThrough";
  ShapeTestOptions2[ShapeTestOptions2["IgnoreNoCollision"] = 4] = "IgnoreNoCollision";
  return ShapeTestOptions2;
})(ShapeTestOptions || {});
var ShapeTestStatus = /* @__PURE__ */ ((ShapeTestStatus2) => {
  ShapeTestStatus2[ShapeTestStatus2["Discarded"] = 0] = "Discarded";
  ShapeTestStatus2[ShapeTestStatus2["NotReady"] = 1] = "NotReady";
  ShapeTestStatus2[ShapeTestStatus2["Ready"] = 2] = "Ready";
  return ShapeTestStatus2;
})(ShapeTestStatus || {});
const SHAPE_TEST_DEFAULT = 1 /* IgnoreGlass */ | 2 /* IgnoreSeeThrough */ | 4 /* IgnoreNoCollision */;
export {
  IntersectFlags,
  SHAPE_TEST_DEFAULT,
  ShapeTestOptions,
  ShapeTestStatus
};
