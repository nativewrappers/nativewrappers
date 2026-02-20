var ParachuteLandingType = /* @__PURE__ */ ((ParachuteLandingType2) => {
  ParachuteLandingType2[ParachuteLandingType2["None"] = -1] = "None";
  ParachuteLandingType2[ParachuteLandingType2["Stumbling"] = 1] = "Stumbling";
  ParachuteLandingType2[ParachuteLandingType2["Rolling"] = 2] = "Rolling";
  ParachuteLandingType2[ParachuteLandingType2["Ragdoll"] = 3] = "Ragdoll";
  return ParachuteLandingType2;
})(ParachuteLandingType || {});
var ParachuteState = /* @__PURE__ */ ((ParachuteState2) => {
  ParachuteState2[ParachuteState2["None"] = -1] = "None";
  ParachuteState2[ParachuteState2["FreeFalling"] = 0] = "FreeFalling";
  ParachuteState2[ParachuteState2["Deploying"] = 1] = "Deploying";
  ParachuteState2[ParachuteState2["Gliding"] = 2] = "Gliding";
  ParachuteState2[ParachuteState2["LandingOrFallingToDoom"] = 3] = "LandingOrFallingToDoom";
  return ParachuteState2;
})(ParachuteState || {});
export {
  ParachuteLandingType,
  ParachuteState
};
