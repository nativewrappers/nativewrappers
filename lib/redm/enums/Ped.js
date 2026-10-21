var KnockOffVehicle = /* @__PURE__ */ ((KnockOffVehicle2) => {
  KnockOffVehicle2[KnockOffVehicle2["Default"] = 0] = "Default";
  KnockOffVehicle2[KnockOffVehicle2["Never"] = 1] = "Never";
  KnockOffVehicle2[KnockOffVehicle2["Easy"] = 2] = "Easy";
  KnockOffVehicle2[KnockOffVehicle2["Hard"] = 3] = "Hard";
  return KnockOffVehicle2;
})(KnockOffVehicle || {});
var TamingState = /* @__PURE__ */ ((TamingState2) => {
  TamingState2[TamingState2["Invalid"] = 0] = "Invalid";
  TamingState2[TamingState2["Inactive"] = 1] = "Inactive";
  TamingState2[TamingState2["TargetDetected"] = 2] = "TargetDetected";
  TamingState2[TamingState2["CalledOut"] = 3] = "CalledOut";
  TamingState2[TamingState2["Mountable"] = 4] = "Mountable";
  TamingState2[TamingState2["BeingPatted"] = 5] = "BeingPatted";
  TamingState2[TamingState2["BreakingActive"] = 6] = "BreakingActive";
  TamingState2[TamingState2["Spooked"] = 7] = "Spooked";
  TamingState2[TamingState2["Retreating"] = 8] = "Retreating";
  TamingState2[TamingState2["Fleeing"] = 9] = "Fleeing";
  return TamingState2;
})(TamingState || {});
var eDamageCleanliness = /* @__PURE__ */ ((eDamageCleanliness2) => {
  eDamageCleanliness2[eDamageCleanliness2["Poor"] = 0] = "Poor";
  eDamageCleanliness2[eDamageCleanliness2["Good"] = 1] = "Good";
  eDamageCleanliness2[eDamageCleanliness2["Perfect"] = 2] = "Perfect";
  return eDamageCleanliness2;
})(eDamageCleanliness || {});
export {
  KnockOffVehicle,
  TamingState,
  eDamageCleanliness
};
