import { WeaponComponentHash } from "./WeaponComponentHash";
import { ComponentAttachmentPoint } from "./ComponentAttachmentPoint";
import { DlcWeaponComponentData } from "./DlcWeaponComponentData";

/**
 * ComponentAttachmentPointByHash - Mapping of WeaponComponentHash -> ComponentAttachmentPoint
 *
 */
export const ComponentAttachmentPointByHash = new Map<
  WeaponComponentHash,
  ComponentAttachmentPoint
>([
  [WeaponComponentHash.PistolClip01, ComponentAttachmentPoint.Clip],
  [WeaponComponentHash.PistolClip02, ComponentAttachmentPoint.Clip],
  [WeaponComponentHash.CombatPistolClip01, ComponentAttachmentPoint.Clip],
  [WeaponComponentHash.CombatPistolClip02, ComponentAttachmentPoint.Clip],
  [WeaponComponentHash.APPistolClip01, ComponentAttachmentPoint.Clip],
  [WeaponComponentHash.APPistolClip02, ComponentAttachmentPoint.Clip],
  [WeaponComponentHash.MicroSMGClip01, ComponentAttachmentPoint.Clip],
  [WeaponComponentHash.MicroSMGClip02, ComponentAttachmentPoint.Clip],
  [WeaponComponentHash.SMGClip01, ComponentAttachmentPoint.Clip],
  [WeaponComponentHash.SMGClip02, ComponentAttachmentPoint.Clip],
  [WeaponComponentHash.SMGClip03, ComponentAttachmentPoint.Clip],
  [WeaponComponentHash.AssaultRifleClip01, ComponentAttachmentPoint.Clip],
  [WeaponComponentHash.AssaultRifleClip02, ComponentAttachmentPoint.Clip],
  [WeaponComponentHash.AssaultRifleClip03, ComponentAttachmentPoint.Clip],
  [WeaponComponentHash.CarbineRifleClip01, ComponentAttachmentPoint.Clip],
  [WeaponComponentHash.CarbineRifleClip02, ComponentAttachmentPoint.Clip],
  [WeaponComponentHash.CarbineRifleClip03, ComponentAttachmentPoint.Clip],
  [WeaponComponentHash.AdvancedRifleClip01, ComponentAttachmentPoint.Clip],
  [WeaponComponentHash.AdvancedRifleClip02, ComponentAttachmentPoint.Clip],
  [WeaponComponentHash.MGClip01, ComponentAttachmentPoint.Clip],
  [WeaponComponentHash.MGClip02, ComponentAttachmentPoint.Clip],
  [WeaponComponentHash.CombatMGClip01, ComponentAttachmentPoint.Clip],
  [WeaponComponentHash.CombatMGClip02, ComponentAttachmentPoint.Clip],
  [WeaponComponentHash.PumpShotgunClip01, ComponentAttachmentPoint.Clip],
  [WeaponComponentHash.AssaultShotgunClip01, ComponentAttachmentPoint.Clip],
  [WeaponComponentHash.AssaultShotgunClip02, ComponentAttachmentPoint.Clip],
  [WeaponComponentHash.SniperRifleClip01, ComponentAttachmentPoint.Clip],
  [WeaponComponentHash.HeavySniperClip01, ComponentAttachmentPoint.Clip],
  [WeaponComponentHash.MinigunClip01, ComponentAttachmentPoint.Clip],
  [WeaponComponentHash.AssaultSMGClip01, ComponentAttachmentPoint.Clip],
  [WeaponComponentHash.AssaultSMGClip02, ComponentAttachmentPoint.Clip],
  [WeaponComponentHash.BullpupShotgunClip01, ComponentAttachmentPoint.Clip],
  [WeaponComponentHash.Pistol50Clip01, ComponentAttachmentPoint.Clip],
  [WeaponComponentHash.Pistol50Clip02, ComponentAttachmentPoint.Clip],
  [WeaponComponentHash.SawnoffShotgunClip01, ComponentAttachmentPoint.Clip],
  [WeaponComponentHash.PistolMk2ClipNormal, ComponentAttachmentPoint.Clip],
  [WeaponComponentHash.PistolMk2ClipExtended, ComponentAttachmentPoint.Clip],
  [WeaponComponentHash.PistolMk2ClipFMJ, ComponentAttachmentPoint.Clip],
  [WeaponComponentHash.PistolMk2ClipHollowpoint, ComponentAttachmentPoint.Clip],
  [WeaponComponentHash.PistolMk2ClipIncendiary, ComponentAttachmentPoint.Clip],
  [WeaponComponentHash.PistolMk2ClipTracer, ComponentAttachmentPoint.Clip],
  [
    WeaponComponentHash.AssaultRifleMk2ClipNormal,
    ComponentAttachmentPoint.Clip,
  ],
  [
    WeaponComponentHash.AssaultRifleMk2ClipExtended,
    ComponentAttachmentPoint.Clip,
  ],
  [WeaponComponentHash.AssaultRifleMk2ClipFMJ, ComponentAttachmentPoint.Clip],
  [
    WeaponComponentHash.AssaultRifleMk2ClipArmorPiercing,
    ComponentAttachmentPoint.Clip,
  ],
  [
    WeaponComponentHash.AssaultRifleMk2ClipIncendiary,
    ComponentAttachmentPoint.Clip,
  ],
  [
    WeaponComponentHash.AssaultRifleMk2ClipTracer,
    ComponentAttachmentPoint.Clip,
  ],
  [
    WeaponComponentHash.CarbineRifleMk2ClipNormal,
    ComponentAttachmentPoint.Clip,
  ],
  [
    WeaponComponentHash.CarbineRifleMk2ClipExtended,
    ComponentAttachmentPoint.Clip,
  ],
  [WeaponComponentHash.CarbineRifleMk2ClipFMJ, ComponentAttachmentPoint.Clip],
  [
    WeaponComponentHash.CarbineRifleMk2ClipArmorPiercing,
    ComponentAttachmentPoint.Clip,
  ],
  [
    WeaponComponentHash.CarbineRifleMk2ClipIncendiary,
    ComponentAttachmentPoint.Clip,
  ],
  [
    WeaponComponentHash.CarbineRifleMk2ClipTracer,
    ComponentAttachmentPoint.Clip,
  ],
  [WeaponComponentHash.CombatMGMk2ClipNormal, ComponentAttachmentPoint.Clip],
  [WeaponComponentHash.CombatMGMk2ClipExtended, ComponentAttachmentPoint.Clip],
  [WeaponComponentHash.CombatMGMk2ClipFMJ, ComponentAttachmentPoint.Clip],
  [
    WeaponComponentHash.CombatMGMk2ClipArmorPiercing,
    ComponentAttachmentPoint.Clip,
  ],
  [
    WeaponComponentHash.CombatMGMk2ClipIncendiary,
    ComponentAttachmentPoint.Clip,
  ],
  [WeaponComponentHash.CombatMGMk2ClipTracer, ComponentAttachmentPoint.Clip],
  [WeaponComponentHash.HeavySniperMk2ClipNormal, ComponentAttachmentPoint.Clip],
  [
    WeaponComponentHash.HeavySniperMk2ClipExtended,
    ComponentAttachmentPoint.Clip,
  ],
  [WeaponComponentHash.HeavySniperMk2ClipFMJ, ComponentAttachmentPoint.Clip],
  [
    WeaponComponentHash.HeavySniperMk2ClipArmorPiercing,
    ComponentAttachmentPoint.Clip,
  ],
  [
    WeaponComponentHash.HeavySniperMk2ClipIncendiary,
    ComponentAttachmentPoint.Clip,
  ],
  [
    WeaponComponentHash.HeavySniperMk2ClipExplosive,
    ComponentAttachmentPoint.Clip,
  ],
  [WeaponComponentHash.SMGMk2ClipNormal, ComponentAttachmentPoint.Clip],
  [WeaponComponentHash.SMGMk2ClipExtended, ComponentAttachmentPoint.Clip],
  [WeaponComponentHash.SMGMk2ClipFMJ, ComponentAttachmentPoint.Clip],
  [WeaponComponentHash.SMGMk2ClipHollowpoint, ComponentAttachmentPoint.Clip],
  [WeaponComponentHash.SMGMk2ClipIncendiary, ComponentAttachmentPoint.Clip],
  [WeaponComponentHash.SMGMk2ClipTracer, ComponentAttachmentPoint.Clip],

  [WeaponComponentHash.AtPiFlsh, ComponentAttachmentPoint.FlashLaser],
  [WeaponComponentHash.AtPiFlsh, ComponentAttachmentPoint.FlashLaser],
  [WeaponComponentHash.AtPiFlsh, ComponentAttachmentPoint.FlashLaser],
  [WeaponComponentHash.AtPiFlsh, ComponentAttachmentPoint.FlashLaser],
  [WeaponComponentHash.AtArFlsh, ComponentAttachmentPoint.FlashLaser],
  [WeaponComponentHash.AtArFlsh, ComponentAttachmentPoint.FlashLaser],
  [WeaponComponentHash.AtArFlsh, ComponentAttachmentPoint.FlashLaser],
  [WeaponComponentHash.AtArFlsh, ComponentAttachmentPoint.FlashLaser],
  [WeaponComponentHash.AtArFlsh, ComponentAttachmentPoint.FlashLaser],
  [WeaponComponentHash.AtArFlsh, ComponentAttachmentPoint.FlashLaser],
  [WeaponComponentHash.AtArFlsh, ComponentAttachmentPoint.FlashLaser],
  [WeaponComponentHash.AtArFlsh, ComponentAttachmentPoint.FlashLaser],
  [WeaponComponentHash.AtArFlsh, ComponentAttachmentPoint.FlashLaser],
  [WeaponComponentHash.AtPiFlsh, ComponentAttachmentPoint.FlashLaser],
  [WeaponComponentHash.AtArFlsh, ComponentAttachmentPoint.FlashLaser],
  [WeaponComponentHash.AtArFlsh, ComponentAttachmentPoint.FlashLaser],
  [WeaponComponentHash.AtArFlsh, ComponentAttachmentPoint.FlashLaser],

  [WeaponComponentHash.PistolMk2Compensator, ComponentAttachmentPoint.Supp],
  [WeaponComponentHash.AtPiSupp02, ComponentAttachmentPoint.Supp],
  [WeaponComponentHash.AtPiSupp, ComponentAttachmentPoint.Supp],
  [WeaponComponentHash.AtPiSupp, ComponentAttachmentPoint.Supp],
  [WeaponComponentHash.AtArSupp02, ComponentAttachmentPoint.Supp],
  [WeaponComponentHash.AtPiSupp, ComponentAttachmentPoint.Supp],
  [WeaponComponentHash.AtArSupp02, ComponentAttachmentPoint.Supp],
  [WeaponComponentHash.AtArSupp, ComponentAttachmentPoint.Supp],
  [WeaponComponentHash.AtArSupp, ComponentAttachmentPoint.Supp],
  [WeaponComponentHash.AtArSupp, ComponentAttachmentPoint.Supp],
  [WeaponComponentHash.AtArSupp, ComponentAttachmentPoint.Supp],
  [WeaponComponentHash.AtArSupp02, ComponentAttachmentPoint.Supp],
  [WeaponComponentHash.AtArSupp02, ComponentAttachmentPoint.Supp],
  [WeaponComponentHash.AtArSupp02, ComponentAttachmentPoint.Supp],
  [WeaponComponentHash.AtArSupp02, ComponentAttachmentPoint.Supp],
  [WeaponComponentHash.AtPiSupp02, ComponentAttachmentPoint.Supp],
  [WeaponComponentHash.AtMuzzle1, ComponentAttachmentPoint.Supp],
  [WeaponComponentHash.AtMuzzle2, ComponentAttachmentPoint.Supp],
  [WeaponComponentHash.AtMuzzle3, ComponentAttachmentPoint.Supp],
  [WeaponComponentHash.AtMuzzle4, ComponentAttachmentPoint.Supp],
  [WeaponComponentHash.AtMuzzle5, ComponentAttachmentPoint.Supp],
  [WeaponComponentHash.AtMuzzle6, ComponentAttachmentPoint.Supp],
  [WeaponComponentHash.AtMuzzle7, ComponentAttachmentPoint.Supp],
  [WeaponComponentHash.HeavySniperMk2Suppressor, ComponentAttachmentPoint.Supp],
  [WeaponComponentHash.HeavySniperMk2Muzzle8, ComponentAttachmentPoint.Supp],
  [WeaponComponentHash.HeavySniperMk2Muzzle9, ComponentAttachmentPoint.Supp],

  [WeaponComponentHash.AtArSupp, ComponentAttachmentPoint.Supp2],
  [WeaponComponentHash.AtMuzzle1, ComponentAttachmentPoint.Supp2],
  [WeaponComponentHash.AtMuzzle2, ComponentAttachmentPoint.Supp2],
  [WeaponComponentHash.AtMuzzle3, ComponentAttachmentPoint.Supp2],
  [WeaponComponentHash.AtMuzzle4, ComponentAttachmentPoint.Supp2],
  [WeaponComponentHash.AtMuzzle5, ComponentAttachmentPoint.Supp2],
  [WeaponComponentHash.AtMuzzle6, ComponentAttachmentPoint.Supp2],
  [WeaponComponentHash.AtMuzzle7, ComponentAttachmentPoint.Supp2],
  [WeaponComponentHash.AtArSupp02, ComponentAttachmentPoint.Supp2],
  [WeaponComponentHash.AtMuzzle1, ComponentAttachmentPoint.Supp2],
  [WeaponComponentHash.AtMuzzle2, ComponentAttachmentPoint.Supp2],
  [WeaponComponentHash.AtMuzzle3, ComponentAttachmentPoint.Supp2],
  [WeaponComponentHash.AtMuzzle4, ComponentAttachmentPoint.Supp2],
  [WeaponComponentHash.AtMuzzle5, ComponentAttachmentPoint.Supp2],
  [WeaponComponentHash.AtMuzzle6, ComponentAttachmentPoint.Supp2],
  [WeaponComponentHash.AtMuzzle7, ComponentAttachmentPoint.Supp2],
  [WeaponComponentHash.AtPiSupp, ComponentAttachmentPoint.Supp2],
  [WeaponComponentHash.AtMuzzle1, ComponentAttachmentPoint.Supp2],
  [WeaponComponentHash.AtMuzzle2, ComponentAttachmentPoint.Supp2],
  [WeaponComponentHash.AtMuzzle3, ComponentAttachmentPoint.Supp2],
  [WeaponComponentHash.AtMuzzle4, ComponentAttachmentPoint.Supp2],
  [WeaponComponentHash.AtMuzzle5, ComponentAttachmentPoint.Supp2],
  [WeaponComponentHash.AtMuzzle6, ComponentAttachmentPoint.Supp2],
  [WeaponComponentHash.AtMuzzle7, ComponentAttachmentPoint.Supp2],

  [WeaponComponentHash.PistolVarmodLuxe, ComponentAttachmentPoint.GunRoot],
  [
    WeaponComponentHash.CombatPistolVarmodLowrider,
    ComponentAttachmentPoint.GunRoot,
  ],
  [WeaponComponentHash.APPistolVarmodLuxe, ComponentAttachmentPoint.GunRoot],
  [WeaponComponentHash.MicroSMGVarmodLuxe, ComponentAttachmentPoint.GunRoot],
  [WeaponComponentHash.SMGVarmodLuxe, ComponentAttachmentPoint.GunRoot],
  [
    WeaponComponentHash.AssaultRifleVarmodLuxe,
    ComponentAttachmentPoint.GunRoot,
  ],
  [
    WeaponComponentHash.CarbineRifleVarmodLuxe,
    ComponentAttachmentPoint.GunRoot,
  ],
  [
    WeaponComponentHash.AdvancedRifleVarmodLuxe,
    ComponentAttachmentPoint.GunRoot,
  ],
  [WeaponComponentHash.MGVarmodLowrider, ComponentAttachmentPoint.GunRoot],
  [
    WeaponComponentHash.CombatMGVarmodLowrider,
    ComponentAttachmentPoint.GunRoot,
  ],
  [
    WeaponComponentHash.PumpShotgunVarmodLowrider,
    ComponentAttachmentPoint.GunRoot,
  ],
  [WeaponComponentHash.SniperRifleVarmodLuxe, ComponentAttachmentPoint.GunRoot],
  [
    WeaponComponentHash.AssaultSMGVarmodLowrider,
    ComponentAttachmentPoint.GunRoot,
  ],
  [WeaponComponentHash.Pistol50VarmodLuxe, ComponentAttachmentPoint.GunRoot],
  [
    WeaponComponentHash.SawnoffShotgunVarmodLuxe,
    ComponentAttachmentPoint.GunRoot,
  ],
  [WeaponComponentHash.PistolMk2CamoDigital, ComponentAttachmentPoint.GunRoot],
  [
    WeaponComponentHash.PistolMk2CamoBrushstroke,
    ComponentAttachmentPoint.GunRoot,
  ],
  [WeaponComponentHash.PistolMk2CamoWoodland, ComponentAttachmentPoint.GunRoot],
  [WeaponComponentHash.PistolMk2CamoSkull, ComponentAttachmentPoint.GunRoot],
  [WeaponComponentHash.PistolMk2CamoSessanta, ComponentAttachmentPoint.GunRoot],
  [WeaponComponentHash.PistolMk2CamoPerseus, ComponentAttachmentPoint.GunRoot],
  [WeaponComponentHash.PistolMk2CamoLeopard, ComponentAttachmentPoint.GunRoot],
  [WeaponComponentHash.PistolMk2CamoZebra, ComponentAttachmentPoint.GunRoot],
  [
    WeaponComponentHash.PistolMk2CamoGeometric,
    ComponentAttachmentPoint.GunRoot,
  ],
  [WeaponComponentHash.PistolMk2CamoBoom, ComponentAttachmentPoint.GunRoot],
  [
    WeaponComponentHash.PistolMk2CamoPatriotic,
    ComponentAttachmentPoint.GunRoot,
  ],
  [
    WeaponComponentHash.AssaultRifleMk2CamoDigital,
    ComponentAttachmentPoint.GunRoot,
  ],
  [
    WeaponComponentHash.AssaultRifleMk2CamoBrushstroke,
    ComponentAttachmentPoint.GunRoot,
  ],
  [
    WeaponComponentHash.AssaultRifleMk2CamoWoodland,
    ComponentAttachmentPoint.GunRoot,
  ],
  [
    WeaponComponentHash.AssaultRifleMk2CamoSkull,
    ComponentAttachmentPoint.GunRoot,
  ],
  [
    WeaponComponentHash.AssaultRifleMk2CamoSessanta,
    ComponentAttachmentPoint.GunRoot,
  ],
  [
    WeaponComponentHash.AssaultRifleMk2CamoPerseus,
    ComponentAttachmentPoint.GunRoot,
  ],
  [
    WeaponComponentHash.AssaultRifleMk2CamoLeopard,
    ComponentAttachmentPoint.GunRoot,
  ],
  [
    WeaponComponentHash.AssaultRifleMk2CamoZebra,
    ComponentAttachmentPoint.GunRoot,
  ],
  [
    WeaponComponentHash.AssaultRifleMk2CamoGeometric,
    ComponentAttachmentPoint.GunRoot,
  ],
  [
    WeaponComponentHash.AssaultRifleMk2CamoBoom,
    ComponentAttachmentPoint.GunRoot,
  ],
  [
    WeaponComponentHash.AssaultRifleMk2CamoPatriotic,
    ComponentAttachmentPoint.GunRoot,
  ],
  [
    WeaponComponentHash.CarbineRifleMk2CamoDigital,
    ComponentAttachmentPoint.GunRoot,
  ],
  [
    WeaponComponentHash.CarbineRifleMk2CamoBrushstroke,
    ComponentAttachmentPoint.GunRoot,
  ],
  [
    WeaponComponentHash.CarbineRifleMk2CamoWoodland,
    ComponentAttachmentPoint.GunRoot,
  ],
  [
    WeaponComponentHash.CarbineRifleMk2CamoSkull,
    ComponentAttachmentPoint.GunRoot,
  ],
  [
    WeaponComponentHash.CarbineRifleMk2CamoSessanta,
    ComponentAttachmentPoint.GunRoot,
  ],
  [
    WeaponComponentHash.CarbineRifleMk2CamoPerseus,
    ComponentAttachmentPoint.GunRoot,
  ],
  [
    WeaponComponentHash.CarbineRifleMk2CamoLeopard,
    ComponentAttachmentPoint.GunRoot,
  ],
  [
    WeaponComponentHash.CarbineRifleMk2CamoZebra,
    ComponentAttachmentPoint.GunRoot,
  ],
  [
    WeaponComponentHash.CarbineRifleMk2CamoGeometric,
    ComponentAttachmentPoint.GunRoot,
  ],
  [
    WeaponComponentHash.CarbineRifleMk2CamoBoom,
    ComponentAttachmentPoint.GunRoot,
  ],
  [
    WeaponComponentHash.CarbineRifleMk2CamoPatriotic,
    ComponentAttachmentPoint.GunRoot,
  ],
  [
    WeaponComponentHash.CombatMGMk2CamoDigital,
    ComponentAttachmentPoint.GunRoot,
  ],
  [
    WeaponComponentHash.CombatMGMk2CamoBrushstroke,
    ComponentAttachmentPoint.GunRoot,
  ],
  [
    WeaponComponentHash.CombatMGMk2CamoWoodland,
    ComponentAttachmentPoint.GunRoot,
  ],
  [WeaponComponentHash.CombatMGMk2CamoSkull, ComponentAttachmentPoint.GunRoot],
  [
    WeaponComponentHash.CombatMGMk2CamoSessanta,
    ComponentAttachmentPoint.GunRoot,
  ],
  [
    WeaponComponentHash.CombatMGMk2CamoPerseus,
    ComponentAttachmentPoint.GunRoot,
  ],
  [
    WeaponComponentHash.CombatMGMk2CamoLeopard,
    ComponentAttachmentPoint.GunRoot,
  ],
  [WeaponComponentHash.CombatMGMk2CamoZebra, ComponentAttachmentPoint.GunRoot],
  [
    WeaponComponentHash.CombatMGMk2CamoGeometric,
    ComponentAttachmentPoint.GunRoot,
  ],
  [WeaponComponentHash.CombatMGMk2CamoBoom, ComponentAttachmentPoint.GunRoot],
  [
    WeaponComponentHash.CombatMGMk2CamoPatriotic,
    ComponentAttachmentPoint.GunRoot,
  ],
  [
    WeaponComponentHash.HeavySniperMk2CamoDigital,
    ComponentAttachmentPoint.GunRoot,
  ],
  [
    WeaponComponentHash.HeavySniperMk2CamoBrushstroke,
    ComponentAttachmentPoint.GunRoot,
  ],
  [
    WeaponComponentHash.HeavySniperMk2CamoWoodland,
    ComponentAttachmentPoint.GunRoot,
  ],
  [
    WeaponComponentHash.HeavySniperMk2CamoSkull,
    ComponentAttachmentPoint.GunRoot,
  ],
  [
    WeaponComponentHash.HeavySniperMk2CamoSessanta,
    ComponentAttachmentPoint.GunRoot,
  ],
  [
    WeaponComponentHash.HeavySniperMk2CamoPerseus,
    ComponentAttachmentPoint.GunRoot,
  ],
  [
    WeaponComponentHash.HeavySniperMk2CamoLeopard,
    ComponentAttachmentPoint.GunRoot,
  ],
  [
    WeaponComponentHash.HeavySniperMk2CamoZebra,
    ComponentAttachmentPoint.GunRoot,
  ],
  [
    WeaponComponentHash.HeavySniperMk2CamoGeometric,
    ComponentAttachmentPoint.GunRoot,
  ],
  [
    WeaponComponentHash.HeavySniperMk2CamoBoom,
    ComponentAttachmentPoint.GunRoot,
  ],
  [
    WeaponComponentHash.HeavySniperMk2CamoPatriotic,
    ComponentAttachmentPoint.GunRoot,
  ],
  [WeaponComponentHash.SMGMk2CamoDigital, ComponentAttachmentPoint.GunRoot],
  [WeaponComponentHash.SMGMk2CamoBrushstroke, ComponentAttachmentPoint.GunRoot],
  [WeaponComponentHash.SMGMk2CamoWoodland, ComponentAttachmentPoint.GunRoot],
  [WeaponComponentHash.SMGMk2CamoSkull, ComponentAttachmentPoint.GunRoot],
  [WeaponComponentHash.SMGMk2CamoSessanta, ComponentAttachmentPoint.GunRoot],
  [WeaponComponentHash.SMGMk2CamoPerseus, ComponentAttachmentPoint.GunRoot],
  [WeaponComponentHash.SMGMk2CamoLeopard, ComponentAttachmentPoint.GunRoot],
  [WeaponComponentHash.SMGMk2CamoZebra, ComponentAttachmentPoint.GunRoot],
  [WeaponComponentHash.SMGMk2CamoGeometric, ComponentAttachmentPoint.GunRoot],
  [WeaponComponentHash.SMGMk2CamoBoom, ComponentAttachmentPoint.GunRoot],
  [WeaponComponentHash.SMGMk2CamoPatriotic, ComponentAttachmentPoint.GunRoot],

  [WeaponComponentHash.AtScopeMacro, ComponentAttachmentPoint.Scope],
  [WeaponComponentHash.AtScopeMacro02, ComponentAttachmentPoint.Scope],
  [WeaponComponentHash.AtScopeMacro, ComponentAttachmentPoint.Scope],
  [WeaponComponentHash.AtScopeMedium, ComponentAttachmentPoint.Scope],
  [WeaponComponentHash.AtScopeSmall, ComponentAttachmentPoint.Scope],
  [WeaponComponentHash.AtScopeSmall02, ComponentAttachmentPoint.Scope],
  [WeaponComponentHash.AtScopeMedium, ComponentAttachmentPoint.Scope],
  [WeaponComponentHash.AtScopeLarge, ComponentAttachmentPoint.Scope],
  [WeaponComponentHash.AtScopeMax, ComponentAttachmentPoint.Scope],
  [WeaponComponentHash.AtScopeLarge, ComponentAttachmentPoint.Scope],
  [WeaponComponentHash.AtScopeMax, ComponentAttachmentPoint.Scope],
  [WeaponComponentHash.AtScopeSmall, ComponentAttachmentPoint.Scope],
  [WeaponComponentHash.AtScopeMacro, ComponentAttachmentPoint.Scope],
  [WeaponComponentHash.PistolMk2Scope, ComponentAttachmentPoint.Scope],
  [WeaponComponentHash.PistolMk2Flash, ComponentAttachmentPoint.Scope],
  [
    WeaponComponentHash.HeavySniperMk2ScopeLarge,
    ComponentAttachmentPoint.Scope,
  ],
  [WeaponComponentHash.AtScopeMax, ComponentAttachmentPoint.Scope],
  [
    WeaponComponentHash.HeavySniperMk2ScopeNightvision,
    ComponentAttachmentPoint.Scope,
  ],
  [
    WeaponComponentHash.HeavySniperMk2ScopeThermal,
    ComponentAttachmentPoint.Scope,
  ],
  [WeaponComponentHash.SMGMk2Sights, ComponentAttachmentPoint.Scope],
  [WeaponComponentHash.SMGMk2ScopeMacro, ComponentAttachmentPoint.Scope],
  [WeaponComponentHash.SMGMk2ScopeSmall, ComponentAttachmentPoint.Scope],

  [
    WeaponComponentHash.PistolMk2CamoSlideDigital,
    ComponentAttachmentPoint.Scope2,
  ],
  [
    WeaponComponentHash.PistolMk2CamoSlideBrushstroke,
    ComponentAttachmentPoint.Scope2,
  ],
  [
    WeaponComponentHash.PistolMk2CamoSlideWoodland,
    ComponentAttachmentPoint.Scope2,
  ],
  [
    WeaponComponentHash.PistolMk2CamoSlideSkull,
    ComponentAttachmentPoint.Scope2,
  ],
  [
    WeaponComponentHash.PistolMk2CamoSlideSessanta,
    ComponentAttachmentPoint.Scope2,
  ],
  [
    WeaponComponentHash.PistolMk2CamoSlidePerseus,
    ComponentAttachmentPoint.Scope2,
  ],
  [
    WeaponComponentHash.PistolMk2CamoSlideLeopard,
    ComponentAttachmentPoint.Scope2,
  ],
  [
    WeaponComponentHash.PistolMk2CamoSlideZebra,
    ComponentAttachmentPoint.Scope2,
  ],
  [
    WeaponComponentHash.PistolMk2CamoSlideGeometric,
    ComponentAttachmentPoint.Scope2,
  ],
  [WeaponComponentHash.PistolMk2CamoSlideBoom, ComponentAttachmentPoint.Scope2],
  [
    WeaponComponentHash.PistolMk2CamoSlidePatriotic,
    ComponentAttachmentPoint.Scope2,
  ],
  [WeaponComponentHash.AtSights, ComponentAttachmentPoint.Scope2],
  [WeaponComponentHash.AtScopeMacroMk2, ComponentAttachmentPoint.Scope2],
  [WeaponComponentHash.AtScopeMediumMk2, ComponentAttachmentPoint.Scope2],
  [WeaponComponentHash.AtSights, ComponentAttachmentPoint.Scope2],
  [WeaponComponentHash.AtScopeSmallMk2, ComponentAttachmentPoint.Scope2],
  [WeaponComponentHash.AtScopeMediumMk2, ComponentAttachmentPoint.Scope2],
  [WeaponComponentHash.AtSights, ComponentAttachmentPoint.Scope2],
  [WeaponComponentHash.AtScopeMacroMk2, ComponentAttachmentPoint.Scope2],
  [WeaponComponentHash.AtScopeMediumMk2, ComponentAttachmentPoint.Scope2],

  [WeaponComponentHash.AtArAfGrip, ComponentAttachmentPoint.Grip2],
  [WeaponComponentHash.AtArAfGrip, ComponentAttachmentPoint.Grip2],
  [WeaponComponentHash.AtArAfGrip, ComponentAttachmentPoint.Grip2],
  [WeaponComponentHash.AtArAfGrip, ComponentAttachmentPoint.Grip2],
  [WeaponComponentHash.GrenadeLauncherClip01, ComponentAttachmentPoint.Grip2],
  [WeaponComponentHash.AtArAfGrip, ComponentAttachmentPoint.Grip2],
  [WeaponComponentHash.AtArAfGrip, ComponentAttachmentPoint.Grip2],
  [WeaponComponentHash.AtArAfGrip2, ComponentAttachmentPoint.Grip2],
  [WeaponComponentHash.AtArAfGrip2, ComponentAttachmentPoint.Grip2],
  [WeaponComponentHash.AtArAfGrip2, ComponentAttachmentPoint.Grip2],
  [WeaponComponentHash.AtArAfGrip2, ComponentAttachmentPoint.Grip2],

  [WeaponComponentHash.AtRailCover01, ComponentAttachmentPoint.Rail],

  [
    WeaponComponentHash.AssaultRifleMk2BarrelNormal,
    ComponentAttachmentPoint.Barrel,
  ],
  [
    WeaponComponentHash.AssaultRifleMk2BarrelHeavy,
    ComponentAttachmentPoint.Barrel,
  ],
  [
    WeaponComponentHash.CarbineRifleMk2BarrelNormal,
    ComponentAttachmentPoint.Barrel,
  ],
  [
    WeaponComponentHash.CarbineRifleMk2BarrelHeavy,
    ComponentAttachmentPoint.Barrel,
  ],
  [
    WeaponComponentHash.CombatMGMk2BarrelNormal,
    ComponentAttachmentPoint.Barrel,
  ],
  [WeaponComponentHash.CombatMGMk2BarrelHeavy, ComponentAttachmentPoint.Barrel],
  [
    WeaponComponentHash.HeavySniperMk2BarrelNormal,
    ComponentAttachmentPoint.Barrel,
  ],
  [
    WeaponComponentHash.HeavySniperMk2BarrelHeavy,
    ComponentAttachmentPoint.Barrel,
  ],
  [WeaponComponentHash.SMGMk2BarrelNormal, ComponentAttachmentPoint.Barrel],
  [WeaponComponentHash.SMGMk2BarrelHeavy, ComponentAttachmentPoint.Barrel],
]);

/**
 * Initialize with DlcWeaponComponentData, in case of any missing dlc data
 *
 */
function initializeOnce() {
  let isInitialized = false;

  return function () {
    if (isInitialized) {
      return;
    }

    for (const [hash, data] of DlcWeaponComponentData) {
      ComponentAttachmentPointByHash.set(hash, data.attachBone);
    }

    isInitialized = true;
  };
}

initializeOnce()();
