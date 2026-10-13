var DrivingStyle = /* @__PURE__ */ ((DrivingStyle2) => {
  DrivingStyle2[DrivingStyle2["None"] = 0] = "None";
  DrivingStyle2[DrivingStyle2["Normal"] = 786603] = "Normal";
  DrivingStyle2[DrivingStyle2["IgnoreLights"] = 2883621] = "IgnoreLights";
  DrivingStyle2[DrivingStyle2["SometimesOvertakeTraffic"] = 5] = "SometimesOvertakeTraffic";
  DrivingStyle2[DrivingStyle2["Rushed"] = 1074528293] = "Rushed";
  DrivingStyle2[DrivingStyle2["AvoidTraffic"] = 786468] = "AvoidTraffic";
  DrivingStyle2[DrivingStyle2["AvoidTrafficExtremely"] = 6] = "AvoidTrafficExtremely";
  DrivingStyle2[DrivingStyle2["AvoidHighwaysWhenPossible"] = 536870912] = "AvoidHighwaysWhenPossible";
  DrivingStyle2[DrivingStyle2["IgnorePathing"] = 16777216] = "IgnorePathing";
  DrivingStyle2[DrivingStyle2["IgnoreRoads"] = 4194304] = "IgnoreRoads";
  DrivingStyle2[DrivingStyle2["ShortestPath"] = 262144] = "ShortestPath";
  DrivingStyle2[DrivingStyle2["Backwards"] = 1024] = "Backwards";
  return DrivingStyle2;
})(DrivingStyle || {});
var VehicleDrivingFlags = /* @__PURE__ */ ((VehicleDrivingFlags2) => {
  VehicleDrivingFlags2[VehicleDrivingFlags2["None"] = 0] = "None";
  VehicleDrivingFlags2[VehicleDrivingFlags2["FollowTraffic"] = 1] = "FollowTraffic";
  VehicleDrivingFlags2[VehicleDrivingFlags2["YieldToPeds"] = 2] = "YieldToPeds";
  VehicleDrivingFlags2[VehicleDrivingFlags2["AvoidVehicles"] = 4] = "AvoidVehicles";
  VehicleDrivingFlags2[VehicleDrivingFlags2["AvoidEmptyVehicles"] = 8] = "AvoidEmptyVehicles";
  VehicleDrivingFlags2[VehicleDrivingFlags2["AvoidPeds"] = 16] = "AvoidPeds";
  VehicleDrivingFlags2[VehicleDrivingFlags2["AvoidObjects"] = 32] = "AvoidObjects";
  VehicleDrivingFlags2[VehicleDrivingFlags2["StopAtTrafficLights"] = 128] = "StopAtTrafficLights";
  VehicleDrivingFlags2[VehicleDrivingFlags2["UseBlinkers"] = 256] = "UseBlinkers";
  VehicleDrivingFlags2[VehicleDrivingFlags2["AllowGoingWrongWay"] = 512] = "AllowGoingWrongWay";
  VehicleDrivingFlags2[VehicleDrivingFlags2["Reverse"] = 1024] = "Reverse";
  VehicleDrivingFlags2[VehicleDrivingFlags2["AllowMedianCrossing"] = 262144] = "AllowMedianCrossing";
  VehicleDrivingFlags2[VehicleDrivingFlags2["DriveBySight"] = 4194304] = "DriveBySight";
  VehicleDrivingFlags2[VehicleDrivingFlags2["IgnorePathFinding"] = 16777216] = "IgnorePathFinding";
  VehicleDrivingFlags2[VehicleDrivingFlags2["TryToAvoidHighways"] = 536870912] = "TryToAvoidHighways";
  VehicleDrivingFlags2[VehicleDrivingFlags2["StopAtDestination"] = 2147483648] = "StopAtDestination";
  return VehicleDrivingFlags2;
})(VehicleDrivingFlags || {});
export {
  DrivingStyle,
  VehicleDrivingFlags
};
