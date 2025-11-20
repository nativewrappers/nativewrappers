var ForceType = /* @__PURE__ */ ((ForceType2) => {
  ForceType2[ForceType2["MinForce"] = 0] = "MinForce";
  ForceType2[ForceType2["MaxForceRot"] = 1] = "MaxForceRot";
  ForceType2[ForceType2["MinForce2"] = 2] = "MinForce2";
  ForceType2[ForceType2["MaxForceRot2"] = 3] = "MaxForceRot2";
  ForceType2[ForceType2["ForceNoRot"] = 4] = "ForceNoRot";
  ForceType2[ForceType2["ForceRotPlusForce"] = 5] = "ForceRotPlusForce";
  return ForceType2;
})(ForceType || {});
var EntityType = /* @__PURE__ */ ((EntityType2) => {
  EntityType2[EntityType2["Invalid"] = 0] = "Invalid";
  EntityType2[EntityType2["Ped"] = 1] = "Ped";
  EntityType2[EntityType2["Vehicle"] = 2] = "Vehicle";
  EntityType2[EntityType2["Object"] = 3] = "Object";
  return EntityType2;
})(EntityType || {});
export {
  EntityType,
  ForceType
};
