var VehicleLockStatus = /* @__PURE__ */ ((VehicleLockStatus2) => {
  VehicleLockStatus2[VehicleLockStatus2["None"] = 0] = "None";
  VehicleLockStatus2[VehicleLockStatus2["Locked"] = 2] = "Locked";
  VehicleLockStatus2[VehicleLockStatus2["LockedForPlayer"] = 3] = "LockedForPlayer";
  VehicleLockStatus2[VehicleLockStatus2["StickPlayerInside"] = 4] = "StickPlayerInside";
  VehicleLockStatus2[VehicleLockStatus2["CanBeBrokenInto"] = 7] = "CanBeBrokenInto";
  VehicleLockStatus2[VehicleLockStatus2["CanBeBrokenIntoPersist"] = 8] = "CanBeBrokenIntoPersist";
  VehicleLockStatus2[VehicleLockStatus2["CannotBeTriedToEnter"] = 10] = "CannotBeTriedToEnter";
  return VehicleLockStatus2;
})(VehicleLockStatus || {});
export {
  VehicleLockStatus
};
