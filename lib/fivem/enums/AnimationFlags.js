var AnimationFlags = /* @__PURE__ */ ((AnimationFlags2) => {
  AnimationFlags2[AnimationFlags2["None"] = 0] = "None";
  AnimationFlags2[AnimationFlags2["Looping"] = 1] = "Looping";
  AnimationFlags2[AnimationFlags2["HoldLastFrame"] = 2] = "HoldLastFrame";
  AnimationFlags2[AnimationFlags2["RepositionWhenFinished"] = 4] = "RepositionWhenFinished";
  AnimationFlags2[AnimationFlags2["NotInterruptible"] = 8] = "NotInterruptible";
  AnimationFlags2[AnimationFlags2["UpperBody"] = 16] = "UpperBody";
  AnimationFlags2[AnimationFlags2["Secondary"] = 32] = "Secondary";
  AnimationFlags2[AnimationFlags2["ReorientWhenFinished"] = 64] = "ReorientWhenFinished";
  AnimationFlags2[AnimationFlags2["AbortOnPedMovement"] = 128] = "AbortOnPedMovement";
  AnimationFlags2[AnimationFlags2["Additive"] = 256] = "Additive";
  AnimationFlags2[AnimationFlags2["TurnOffCollision"] = 512] = "TurnOffCollision";
  AnimationFlags2[AnimationFlags2["OverridePhysics"] = 1024] = "OverridePhysics";
  AnimationFlags2[AnimationFlags2["IgnorePhysics"] = 2048] = "IgnorePhysics";
  AnimationFlags2[AnimationFlags2["ExtractInitialOffset"] = 4096] = "ExtractInitialOffset";
  AnimationFlags2[AnimationFlags2["ExitAfterInterrupted"] = 8192] = "ExitAfterInterrupted";
  AnimationFlags2[AnimationFlags2["TagSyncIn"] = 16384] = "TagSyncIn";
  AnimationFlags2[AnimationFlags2["TagSyncOut"] = 32768] = "TagSyncOut";
  AnimationFlags2[AnimationFlags2["TagSyncContinous"] = 65536] = "TagSyncContinous";
  AnimationFlags2[AnimationFlags2["ForceStart"] = 131072] = "ForceStart";
  AnimationFlags2[AnimationFlags2["UseKinematicPhysics"] = 262144] = "UseKinematicPhysics";
  AnimationFlags2[AnimationFlags2["UseMoverExtrations"] = 524288] = "UseMoverExtrations";
  AnimationFlags2[AnimationFlags2["HideWeapon"] = 1048576] = "HideWeapon";
  AnimationFlags2[AnimationFlags2["EndsInDeadPose"] = 2097152] = "EndsInDeadPose";
  AnimationFlags2[AnimationFlags2["ActivateRagdoolOnCollision"] = 4194304] = "ActivateRagdoolOnCollision";
  AnimationFlags2[AnimationFlags2["DontExitOnDeath"] = 8388608] = "DontExitOnDeath";
  AnimationFlags2[AnimationFlags2["AbortOnWeaponDamage"] = 16777216] = "AbortOnWeaponDamage";
  AnimationFlags2[AnimationFlags2["DisableForcedPhysicsUpdate"] = 33554432] = "DisableForcedPhysicsUpdate";
  AnimationFlags2[AnimationFlags2["ProcessAttachmentsOnStart"] = 67108864] = "ProcessAttachmentsOnStart";
  AnimationFlags2[AnimationFlags2["ExpandPedCapsuleFromSkeleton"] = 134217728] = "ExpandPedCapsuleFromSkeleton";
  AnimationFlags2[AnimationFlags2["UseAlternativeFpAnim"] = 268435456] = "UseAlternativeFpAnim";
  AnimationFlags2[AnimationFlags2["BlendOutWrtLastFrame"] = 536870912] = "BlendOutWrtLastFrame";
  AnimationFlags2[AnimationFlags2["UseFullBlending"] = 1073741824] = "UseFullBlending";
  return AnimationFlags2;
})(AnimationFlags || {});
export {
  AnimationFlags
};
