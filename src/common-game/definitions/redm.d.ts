/* eslint-disable */

declare function NetworkDoesEntityExistWithNetworkId(netId: number): boolean;
declare function GetEntityFromStateBagName(bagName: string): number;

declare function AbortAnimScene(animScene: number, p1: boolean): void;

declare function Absf(value: number): number;

declare function Absi(value: number): number;

declare function Acos(p0: number): number;

declare function ActivateDamageTrackerOnNetworkId(
  netID: number,
  toggle: boolean,
): void;

declare function ActivateInteriorEntitySet(
  p0: number,
  p1: number,
  p2: number,
): void;

declare function ActivatePhysics(entity: number): void;

declare function AddArmourToPed(ped: number, amount: number): void;

declare function AddAttributePoints(p0: number, p1: number, p2: number): void;

declare function AddCamSplineNode(
  camera: number,
  x: number,
  y: number,
  z: number,
  xRot: number,
  yRot: number,
  zRot: number,
  length: number,
  p8: number,
  p9: number,
): void;

declare function AddCoverBlockingArea(
  playerX: number,
  playerY: number,
  playerZ: number,
  radiusX: number,
  radiusY: number,
  radiusZ: number,
  p6: boolean,
  p7: boolean,
  p8: boolean,
  p9: boolean,
): void;

declare function AddCoverPoint(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: boolean,
): number;

declare function AddCustomFormationLocation(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): void;

declare function AddDecal(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
  p10: number,
  p11: number,
  p12: number,
  p13: number,
  p14: number,
  p15: number,
  p16: number,
  p17: number,
  p18: number,
  p19: number,
  p20: number,
  p21: number,
): number;

declare function AddEntityToAudioMixGroup(
  entity: number,
  groupName: string,
  p2: number,
): void;

declare function AddExplosion(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
): void;

declare function AddExplosionWithUserVfx(
  x: number,
  y: number,
  z: number,
  explosionType: number,
  explosionFx: string | number,
  damageScale: number,
  isAudible: boolean,
  isInvisible: boolean,
  cameraShake: number,
): void;

declare function AddFormationLocation(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): number;

/**
 * Loads a minimap overlay from a GFx file in the current resource.
 * @param name The path to a `.gfx` file in the current resource. It has to be specified as a `file`.
 * @return A minimap overlay ID.
 */
declare function AddMinimapOverlay(name: string): number;

/**
 * Loads a minimap overlay from a GFx file in the current resource.
 * @param name The path to a `.gfx` file in the current resource. It has to be specified as a `file`.
 * @return A minimap overlay ID.
 */
declare function AddMinimapOverlay(name: string): number;

declare function AddNavmeshBlockingObject(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: boolean,
  p8: number,
): number;

declare function AddNavmeshRequiredRegion(
  x: number,
  y: number,
  radius: number,
): void;

declare function AddOwnedExplosion(
  ped: number,
  x: number,
  y: number,
  z: number,
  explosionType: number,
  damageScale: number,
  isAudible: boolean,
  isInvisible: boolean,
  cameraShake: number,
): void;

declare function AddPatrolRouteLink(p0: number, p1: number): void;

declare function AddPatrolRouteNode(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
): void;

declare function AddPedToConversation(
  index: number,
  ped: number,
  p2: string,
): void;

declare function AddPedToFlock(p0: number, ped: number): void;

declare function AddPetrolTrailDecalInfo(
  x: number,
  y: number,
  z: number,
  p3: number,
): void;

declare function AddPointToGpsMultiRoute(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function AddPopMultiplierArea(
  x1: number,
  y1: number,
  z1: number,
  x2: number,
  y2: number,
  z2: number,
  p6: number,
  p7: number,
  p8: boolean,
  p9: boolean,
): number;

declare function AddRelationshipGroup(
  name: string,
  groupHash?: number,
): [number, number];

/**
 * Experimental natives, please do not use in a live environment.
 * @param origTxd
 * @param origTxn
 * @param newTxd
 * @param newTxn
 */
declare function AddReplaceTexture(
  origTxd: string,
  origTxn: string,
  newTxd: string,
  newTxn: string,
): void;

/**
 * Experimental natives, please do not use in a live environment.
 */
declare function AddReplaceTexture(
  origTxd: string,
  origTxn: string,
  newTxd: string,
  newTxn: string,
): void;

declare function AddRope(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
  p10: number,
  p11: number,
  p12: number,
  p13: number,
  p14: number,
  p15: number,
  p16: number,
  p17: number,
): number;

declare function AddScenarioBlockingArea(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
): number;

declare function AddShockingEventAtPosition(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
  p10: number,
): number;

declare function AddShockingEventForEntity(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
  p10: number,
  p11: number,
): number;

declare function AddSpeedZoneForCoord(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
  p10: number,
): number;

/**
 * Adds a handler for changes to a state bag.
 * The function called expects to match the following signature:
 * ```ts
 * function StateBagChangeHandler(bagName: string, key: string, value: any, reserved: number, replicated: boolean);
 * ```
 * *   **bagName**: The internal bag ID for the state bag which changed. This is usually `player:Source`, `entity:NetID`
 * or `localEntity:Handle`.
 * *   **key**: The changed key.
 * *   **value**: The new value stored at key. The old value is still stored in the state bag at the time this callback executes.
 * *   **reserved**: Currently unused.
 * *   **replicated**: Whether the set is meant to be replicated.
 * At this time, the change handler can't opt to reject changes.
 * @param keyFilter The key to check for, or null.
 * @param bagFilter The bag ID to check for, or null.
 * @param handler The handler function.
 * @return A cookie to remove the change handler.
 */
declare function AddStateBagChangeHandler(
  keyFilter: string,
  bagFilter: string,
  handler: Function,
): number;

declare function AddTacticalAnalysisPoint(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function AddTextEntry(entryKey: string, entryText: string): void;

declare function AddTextEntry(entryKey: string, entryText: string): void;

declare function AddTextEntryByHash(
  entryKey: string | number,
  entryText: string,
): void;

declare function AddTextEntryByHash(
  entryKey: string | number,
  entryText: string,
): void;

declare function AddToClockTime(
  hours: number,
  minutes: number,
  seconds: number,
): void;

declare function AddToItemset(itemset: number, p1: number): boolean;

declare function AdvanceClockTimeTo(
  hour: number,
  minute: number,
  second: number,
): void;

declare function AllowPauseMenuWhenDeadThisFrame(): void;

declare function AllowSonarBlips(p0: boolean): void;

declare function AnimateGameplayCamZoom(p0: number, distance: number): void;

declare function AnimpostfxIsRunning(effectName: string): boolean;

declare function AnimpostfxPlay(effectName: string): void;

declare function AnimpostfxStop(effectName: string): void;

declare function AnimpostfxStopAll(): void;

declare function ApplyDamageToPed(
  ped: number,
  damageAmount: number,
  p2: number,
  boneId: number,
  pedKiller: number,
): void;

declare function ApplyForceToEntity(
  entity: number,
  forceFlags: number,
  x: number,
  y: number,
  z: number,
  offX: number,
  offY: number,
  offZ: number,
  boneIndex: number,
  isDirectionRel: boolean,
  ignoreUpVec: boolean,
  isForceRel: boolean,
  p12: boolean,
  p13: boolean,
): void;

declare function ApplyForceToEntityCenterOfMass(
  entity: number,
  forceType: number,
  x: number,
  y: number,
  z: number,
  p5: boolean,
  isDirectionRel: boolean,
  isForceRel: boolean,
  p8: boolean,
): void;

declare function ApplyPedBloodSpecific(
  ped: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8?: number,
): number;

declare function ApplyPedDamagePack(
  ped: number,
  damagePack: string,
  damage: number,
  mult: number,
): void;

declare function AreAnyVehicleSeatsFree(vehicle: number): boolean;

declare function AreCoordsCollidingWithExterior(
  x: number,
  y: number,
  z: number,
): boolean;

declare function ArePathNodesLoadedInArea(
  x1: number,
  y1: number,
  x2: number,
  y2: number,
): boolean;

declare function AreStringsEqual(string1: string, string2: string): boolean;

declare function ArrayValueGetBoolean(arrayIndex: number): [boolean, number];

declare function ArrayValueGetFloat(arrayIndex: number): [number, number];

declare function ArrayValueGetInteger(arrayIndex: number): [number, number];

declare function ArrayValueGetObject(arrayIndex: number): [number, number];

declare function ArrayValueGetSize(arrayData: number): [number, number];

declare function ArrayValueGetString(arrayIndex: number): [string, number];

declare function ArrayValueGetType(arrayIndex: number): [number, number];

declare function ArrayValueGetVector3(arrayIndex: number): [number[], number];

declare function Asin(p0: number): number;

declare function AssistedMovementIsRouteLoaded(route: string): boolean;

declare function AssistedMovementRemoveRoute(route: string): void;

declare function AssistedMovementSetRouteProperties(
  route: string,
  props: number,
): void;

declare function Atan(p0: number): number;

declare function Atan2(p0: number, p1: number): number;

declare function AttachAnimSceneToEntity(
  animScene: number,
  entity: number,
  p2: number,
): void;

declare function AttachAnimSceneToEntityPreservingLocation(
  animScene: number,
  entity: number,
  p2: number,
): void;

declare function AttachCamToEntity(
  cam: number,
  entity: number,
  xOffset: number,
  yOffset: number,
  zOffset: number,
  isRelative: boolean,
): void;

declare function AttachCamToPedBone(
  cam: number,
  ped: number,
  boneIndex: number,
  x: number,
  y: number,
  z: number,
  heading: boolean,
): void;

declare function AttachEntitiesToRope(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
  p10: number,
  p11: number,
  p12: number,
  p13: number,
  p14: number,
  p15: number,
  p16: number,
  p17: number,
  p18: number,
  p19: number,
  p20: number,
): void;

declare function AttachEntityToEntity(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
  p10: number,
  p11: number,
  p12: number,
  p13: number,
  p14: number,
  p15: number,
  p16: number,
): void;

declare function AttachEntityToEntityPhysically(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
  p10: number,
  p11: number,
  p12: number,
  p13: number,
  p14: number,
  p15: number,
  p16: number,
  p17: number,
  p18: number,
  p19: number,
  p20: number,
  p21: number,
): void;

declare function AttachPortablePickupToPed(
  pickupObject: number,
  ped: number,
): void;

declare function AttachTvAudioToEntity(entity: number): void;

declare function AudioIsScriptedMusicPlaying(): boolean;

declare function BeginSrl(): void;

/**
 * Deletes the given context from the background scripts context map.
 * @param contextName :
 */
declare function BgEndContext(contextName: string): void;

/**
 * Hashed version of BG_END_CONTEXT
 * @param contextHash :
 */
declare function BgEndContextHash(contextHash: string | number): void;

/**
 * Inserts the given context into the background scripts context map.
 * @param contextName :
 */
declare function BgStartContext(contextName: string): void;

/**
 * Hashed version of BG_START_CONTEXT
 * @param contextHash :
 */
declare function BgStartContextHash(contextHash: string | number): void;

declare function BlockDispatchServiceResourceCreation(
  dispatchService: number,
  toggle: boolean,
): void;

declare function BlockPickupFromPlayerCollection(p0: number, p1: number): void;

declare function BreakEntityGlass(
  entity: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
  p10: boolean,
): void;

declare function BringVehicleToHalt(
  vehicle: number,
  distance: number,
  duration: number,
  unknown: boolean,
): void;

declare function BusyspinnerIsOn(): boolean;

declare function BusyspinnerOff(): void;

/**
 * This is similar to the PushScaleformMovieFunction natives, except it calls in the `TIMELINE` of a minimap overlay.
 * @param miniMap The minimap overlay ID.
 * @param fnName A function in the overlay's TIMELINE.
 */
declare function CallMinimapScaleformFunction(
  miniMap: number,
  fnName: string,
): boolean;

/**
 * This is similar to the PushScaleformMovieFunction natives, except it calls in the `TIMELINE` of a minimap overlay.
 * @param miniMap The minimap overlay ID.
 * @param fnName A function in the overlay's TIMELINE.
 */
declare function CallMinimapScaleformFunction(
  miniMap: number,
  fnName: string,
): boolean;

declare function CanAnchorBoatHere(vehicle: number): boolean;

declare function CanKnockPedOffVehicle(ped: number): boolean;

declare function CanLaunchAppByHash(p0: number): number;

declare function CanPedInCombatSeeTarget(ped: number, target: number): boolean;

declare function CanPedRagdoll(ped: number): boolean;

declare function CanPedSpeak(
  ped: number,
  speechName: string,
  unk: boolean,
): boolean;

declare function CanPlayerStartMission(player: number): boolean;

declare function CanRegisterMissionEntities(
  ped_amt: number,
  vehicle_amt: number,
  object_amt: number,
  pickup_amt: number,
): boolean;

declare function CanRegisterMissionObjects(amount: number): boolean;

declare function CanRegisterMissionPeds(amount: number): boolean;

declare function CanRegisterMissionVehicles(amount: number): boolean;

declare function CanShuffleSeat(vehicle: number, p1: number): boolean;

/**
 * Cancels the currently executing event.
 */
declare function CancelEvent(): void;

/**
 * Cancels the currently executing event.
 */
declare function CancelEvent(): void;

declare function CancelMusicEvent(eventName: string): boolean;

declare function CancelOnscreenKeyboard(): void;

declare function CascadeshadowsResetType(): void;

declare function CascadeshadowsSetType(_type: string): void;

declare function CashinventoryInitSessionIsFaulted(): boolean;

declare function CashinventoryInitSessionStatus(): [boolean, number, number];

declare function CashinventoryIsConnectionFaulted(): boolean;

declare function CashinventoryIsSessionReady(): boolean;

declare function CashinventoryTransactionAddItem(
  id: number,
  p2: number,
): [boolean, number];

declare function CashinventoryTransactionAddItemWithIngredients(
  id: number,
  p2: number,
  p4: number,
): [boolean, number, number];

declare function CashinventoryTransactionCheckout(id: number): boolean;

declare function CashinventoryTransactionCheckoutStatus(
  id: number,
  status?: number,
): [boolean, number];

declare function CashinventoryTransactionDelete(id: number): boolean;

declare function CashinventoryTransactionFireAndForgetItem(
  actionHash: string | number,
  p3: number,
): [boolean, number, number];

declare function CashinventoryTransactionGetAction(id: number): number;

declare function CashinventoryTransactionGetBasketIsValid(id: number): boolean;

declare function CashinventoryTransactionGetItemInfo(
  id: number,
  index: number,
  itemInfo?: number,
): [boolean, number];

declare function CashinventoryTransactionGetNumOfItems(id: number): number;

declare function CashinventoryTransactionResponseGetItemInfo(
  id: number,
  index: number,
  itemInfo?: number,
): [boolean, number];

declare function CashinventoryTransactionStart(
  _type: string | number,
  actionHash: string | number,
): [boolean, number];

declare function Ceil(value: number): number;

declare function ChalAddGoalProgressFloat(
  p0: number,
  p1: number,
  p2: number,
): void;

declare function ChalAddGoalProgressInt(
  p0: number,
  p1: number,
  p2: number,
): void;

declare function ChalAddGoalProgressIntByScoreId(p0: number, p1: number): void;

declare function ChalGetMaxRanks(p0: number): number;

declare function ChalGetNumRanksCompleted(p0: number): number;

declare function ChalIsGoalActive(p0: number, p1: number): number;

declare function ChalMissionAddGoalProgressInt(
  p0: number,
  p1: number,
  p2: number,
): void;

declare function ChalMissionGetNumGoals(p0: number): number;

declare function ChalMissionGetNumGoalsComplete(p0: number): number;

declare function ChalMissionIsGoalComplete(p0: number, p1: number): number;

declare function ChalNetStartChal(p0: number): void;

declare function ChalNetStartGoal(p0: number, p1: number): void;

declare function ChalNetStopChal(p0: number): void;

declare function ChalNetStopGoal(p0: number, p1: number): void;

declare function ChalSetGoalProgressInt(
  p0: number,
  p1: number,
  p2: number,
): void;

declare function CheckOwnershipOfAnimScene(animScene: number): boolean;

declare function ClampGameplayCamPitch(minimum: number, maximum: number): void;

declare function ClampGameplayCamYaw(minimum: number, maximum: number): void;

declare function CleanItemset(itemset: number): void;

declare function ClearAllHelpMessages(): void;

declare function ClearAmbientZoneListState(p1: boolean): number;

declare function ClearAmbientZoneState(zoneName: string, p1: boolean): void;

declare function ClearAngledAreaOfVehicles(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
): void;

declare function ClearArea(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): void;

declare function ClearBit(offset: number): number;

declare function ClearDrivebyTaskUnderneathDrivingTask(ped: number): void;

declare function ClearEntityLastDamageEntity(entity: number): void;

declare function ClearFacialIdleAnimOverride(ped: number): void;

declare function ClearFocus(): void;

declare function ClearGpsCustomRoute(): void;

declare function ClearGpsFlags(): void;

declare function ClearGpsMultiRoute(): void;

declare function ClearGpsPlayerWaypoint(): void;

declare function ClearHdArea(): void;

declare function ClearLastDrivenVehicle(): void;

declare function ClearOverrideWeather(): void;

declare function ClearPedBloodDamage(ped: number): void;

declare function ClearPedBloodDamageByZone(ped: number, p1: number): void;

declare function ClearPedDamageDecalByZone(
  ped: number,
  p1: number,
  p2: string,
): void;

declare function ClearPedDecorations(ped: number): void;

declare function ClearPedEnvDirt(ped: number): void;

declare function ClearPedLastDamageBone(ped: number): void;

declare function ClearPedNonCreationArea(): void;

declare function ClearPedSecondaryTask(ped: number): void;

declare function ClearPedTasks(p0: number, p1: number, p2: number): void;

declare function ClearPedTasksImmediately(
  p0: number,
  p1: number,
  p2: number,
): void;

declare function ClearPedWetness(ped: number): void;

declare function ClearPlayerHasDamagedAtLeastOneNonAnimalPed(
  player: number,
): void;

declare function ClearPlayerHasDamagedAtLeastOnePed(player: number): void;

declare function ClearPlayerWantedLevel(player: number): void;

declare function ClearRagdollBlockingFlags(ped: number, flags: number): void;

declare function ClearRelationshipBetweenGroups(
  relationship: number,
  group1: string | number,
  group2: string | number,
): void;

declare function ClearRoomForEntity(entity: number): void;

declare function ClearRoomForGameViewport(): void;

declare function ClearSequenceTask(taskSequenceId: number): void;

declare function ClearSpawnerInfoPriority(
  p0: string | number,
  p1: string | number,
): void;

declare function ClearTacticalAnalysisPoints(): void;

declare function ClearTimecycleModifier(): void;

declare function ClearWeatherTypePersist(): void;

declare function ClonePed(
  ped: number,
  isNetwork: boolean,
  bScriptHostPed: boolean,
  copyHeadBlendFlag: boolean,
): number;

declare function ClonePedToTarget(ped: number, targetPed: number): void;

declare function CloseAllApps(): void;

declare function CloseApp(p0: number): void;

declare function CloseAppByHash(p0: number): void;

declare function CloseAppByHashImmediate(p0: number): void;

declare function ClosePatrolRoute(): void;

declare function CloseSequenceTask(taskSequenceId: number): void;

declare function CloudHasRequestCompleted(p0: number): boolean;

/**
 * Commits the backing pixels to the specified runtime texture.
 * @param tex The runtime texture handle.
 */
declare function CommitRuntimeTexture(tex: number): void;

/**
 * Commits the backing pixels to the specified runtime texture.
 * @param tex The runtime texture handle.
 */
declare function CommitRuntimeTexture(tex: number): void;

declare function CompareStrings(
  str1: string,
  str2: string,
  matchCase: boolean,
  maxLength: number,
): number;

declare function CompendiumAnimalObservedByStatName(
  p0: number,
  p1: number,
): void;

declare function CompendiumFishCaught(p0: number, p1: number): void;

declare function CompendiumFishGetLureSuitabilityByStatItem(
  p0: number,
  p1: number,
): number;

declare function CompendiumGangAmbushSurvived(p0: number): void;

declare function CompendiumGangBountyCaptured(p0: number): void;

declare function CompendiumGangCampFound(p0: number, p1: number): void;

declare function CompendiumGangEncountered(p0: number): void;

declare function CompendiumGangHideoutFound(p0: number, p1: number): void;

declare function CompendiumGangMemberKilled(p0: number): void;

declare function CompendiumGetMapDiscoverableFromStatItem(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): number;

declare function CompendiumGetShortDescriptionFromPed(p0: number): number;

declare function CompendiumHerbPicked(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function CompendiumHorseBonding(p0: number, p1: number): void;

declare function CompendiumHorseObserved(p0: number, p1: number): void;

declare function CompendiumHorseWildBroken(p0: number): void;

declare function CopyMemory(size: number): [number, number];

declare function CopyVehicleDamages(
  sourceVehicle: number,
  targetVehicle: number,
): void;

declare function Cos(value: number): number;

declare function CreateAmbientPickup(
  pickupHash: string | number,
  x: number,
  y: number,
  z: number,
  flags: number,
  value: number,
  modelHash: string | number,
  p7: boolean,
  p8: boolean,
  p9: number,
  p10: number,
): number;

declare function CreateAnimScene(
  animDict: string,
  flags: number,
  p2: string,
  p3: boolean,
  p4: boolean,
): number;

declare function CreateCam(camName: string, p1: boolean): number;

declare function CreateCamWithParams(
  camName: string,
  posX: number,
  posY: number,
  posZ: number,
  rotX: number,
  rotY: number,
  rotZ: number,
  fov: number,
  p8: boolean,
  p9: number,
): number;

declare function CreateCamera(camHash: string | number, p1: boolean): number;

declare function CreateCameraWithParams(
  camHash: string | number,
  posX: number,
  posY: number,
  posZ: number,
  rotX: number,
  rotY: number,
  rotZ: number,
  fov: number,
  p8: boolean,
  p9: number,
): number;

declare function CreateCheckpoint(
  _type: number,
  posX1: number,
  posY1: number,
  posZ1: number,
  posX2: number,
  posY2: number,
  posZ2: number,
  radius: number,
  red: number,
  green: number,
  blue: number,
  alpha: number,
  reserved: number,
): number;

/**
 * Returns a formatted string (0x%x)
 * @param rgb :
 */
declare function CreateColorString(rgb: number): string;

/**
 * Creates a DUI browser. This can be used to draw on a runtime texture using CREATE_RUNTIME_TEXTURE_FROM_DUI_HANDLE.
 * @param url The initial URL to load in the browser.
 * @param width The width of the backing surface.
 * @param height The height of the backing surface.
 * @return A DUI object.
 */
declare function CreateDui(url: string, width: number, height: number): number;

/**
 * Creates a DUI browser. This can be used to draw on a runtime texture using CREATE_RUNTIME_TEXTURE_FROM_DUI_HANDLE.
 * @param url The initial URL to load in the browser.
 * @param width The width of the backing surface.
 * @param height The height of the backing surface.
 * @return A DUI object.
 */
declare function CreateDui(url: string, width: number, height: number): number;

declare function CreateFakeMpGamerTag(
  ped: number,
  username: string,
  pointedClanTag: boolean,
  isRockstarClan: boolean,
  clanTag: string,
  p5: number,
): number;

declare function CreateForcedObject(
  x: number,
  y: number,
  z: number,
  p3: number,
  modelHash: string | number,
  p5: boolean,
): void;

declare function CreateGroup(unused: number): number;

declare function CreateGuardZone(name: string): void;

declare function CreateIncident(
  dispatchService: number,
  x: number,
  y: number,
  z: number,
  numUnits: number,
  radius: number,
  p7: number,
  p8: number,
): [boolean, number];

declare function CreateItemset(p0: boolean): number;

declare function CreateModelHide(
  x: number,
  y: number,
  z: number,
  radius: number,
  model: string | number,
  p5: boolean,
): void;

declare function CreateModelHideExcludingScriptObjects(
  x: number,
  y: number,
  z: number,
  radius: number,
  model: string | number,
  p5: boolean,
): void;

declare function CreateModelSwap(
  x: number,
  y: number,
  z: number,
  radius: number,
  originalModel: string | number,
  newModel: string | number,
  p6: boolean,
): void;

declare function CreateMpGamerTag(
  player: number,
  username: string,
  pointedClanTag: boolean,
  isRockstarClan: boolean,
  clanTag: string,
  p5: number,
): number;

declare function CreateNewScriptedConversation(p0: number): number;

declare function CreateObject(
  modelHash: string | number,
  x: number,
  y: number,
  z: number,
  p4: boolean,
  p5: boolean,
  p6: boolean,
  p7: boolean,
  p8: boolean,
): number;

declare function CreateObjectNoOffset(
  modelHash: string | number,
  x: number,
  y: number,
  z: number,
  p4: boolean,
  p5: boolean,
  p6: boolean,
  p7: boolean,
): number;

declare function CreatePatrolRoute(): void;

declare function CreatePed(
  modelHash: string | number,
  x: number,
  y: number,
  z: number,
  heading: number,
  p5: boolean,
  p6: boolean,
  p7: boolean,
  p8: boolean,
): number;

declare function CreatePedInsideVehicle(
  vehicle: number,
  modelHash: string | number,
  seatIndex: number,
  p3: boolean,
  p4: boolean,
  p5: boolean,
): number;

declare function CreatePedOnMount(
  mount: number,
  modelHash: string | number,
  index: number,
  p3: boolean,
  p4: boolean,
  p5: boolean,
  p6: boolean,
): number;

declare function CreatePickup(
  pickupHash: string | number,
  x: number,
  y: number,
  z: number,
  flags: number,
  p5: number,
  p6: boolean,
  modelHash: string | number,
  p8: number,
  p9: number,
): number;

declare function CreatePickupRotate(
  pickupHash: string | number,
  posX: number,
  posY: number,
  posZ: number,
  rotX: number,
  rotY: number,
  rotZ: number,
  flags: number,
  p8: number,
  p9: number,
  p10: boolean,
  modelHash: string | number,
  p12: number,
  p13: number,
): number;

declare function CreatePopzoneFromVolume(volume: number): number;

declare function CreatePortablePickup(
  pickupHash: string | number,
  x: number,
  y: number,
  z: number,
  placeOnGround: boolean,
  modelHash: string | number,
): number;

/**
 * Creates a blank runtime texture.
 * @param txd A handle to the runtime TXD to create the runtime texture in.
 * @param txn The name for the texture in the runtime texture dictionary.
 * @param width The width of the new texture.
 * @param height The height of the new texture.
 * @return A runtime texture handle.
 */
declare function CreateRuntimeTexture(
  txd: number,
  txn: string,
  width: number,
  height: number,
): number;

/**
 * Creates a blank runtime texture.
 * @param txd A handle to the runtime TXD to create the runtime texture in.
 * @param txn The name for the texture in the runtime texture dictionary.
 * @param width The width of the new texture.
 * @param height The height of the new texture.
 * @return A runtime texture handle.
 */
declare function CreateRuntimeTexture(
  txd: number,
  txn: string,
  width: number,
  height: number,
): number;

/**
 * Creates a runtime texture from a DUI handle.
 * @param txd A handle to the runtime TXD to create the runtime texture in.
 * @param txn The name for the texture in the runtime texture dictionary.
 * @param duiHandle The DUI handle returned from GET_DUI_HANDLE.
 * @return The runtime texture handle.
 */
declare function CreateRuntimeTextureFromDuiHandle(
  txd: number,
  txn: string,
  duiHandle: string,
): number;

/**
 * Creates a runtime texture from a DUI handle.
 * @param txd A handle to the runtime TXD to create the runtime texture in.
 * @param txn The name for the texture in the runtime texture dictionary.
 * @param duiHandle The DUI handle returned from GET_DUI_HANDLE.
 * @return The runtime texture handle.
 */
declare function CreateRuntimeTextureFromDuiHandle(
  txd: number,
  txn: number,
  duiHandle: string,
): number;

/**
 * Creates a runtime texture from the specified file in the current resource.
 * @param txd A handle to the runtime TXD to create the runtime texture in.
 * @param txn The name for the texture in the runtime texture dictionary.
 * @param fileName The file name of an image to load. This should preferably be a PNG, and has to be specified as a `file` in the resource manifest.
 * @return A runtime texture handle.
 */
declare function CreateRuntimeTextureFromImage(
  txd: number,
  txn: string,
  fileName: string,
): number;

/**
 * Creates a runtime texture from the specified file in the current resource.
 * @param txd A handle to the runtime TXD to create the runtime texture in.
 * @param txn The name for the texture in the runtime texture dictionary.
 * @param fileName The file name of an image to load. This should preferably be a PNG, and has to be specified as a `file` in the resource manifest.
 * @return A runtime texture handle.
 */
declare function CreateRuntimeTextureFromImage(
  txd: number,
  txn: string,
  fileName: string,
): number;

/**
 * Creates a runtime texture dictionary with the specified name.
 * Example:
 * ```lua
 * local txd = CreateRuntimeTxd('meow')
 * ```
 * @param name The name for the runtime TXD.
 * @return A handle to the runtime TXD.
 */
declare function CreateRuntimeTxd(name: string): number;

/**
 * Creates a runtime texture dictionary with the specified name.
 * Example:
 * ```lua
 * local txd = CreateRuntimeTxd('meow')
 * ```
 * @param name The name for the runtime TXD.
 * @return A handle to the runtime TXD.
 */
declare function CreateRuntimeTxd(name: string): number;

declare function CreateTrackedPoint(): number;

declare function CreateVarString(
  p0: number,
  p1: string,
  variadic: number,
): number;

declare function CreateVehicle(
  modelHash: string | number,
  x: number,
  y: number,
  z: number,
  heading: number,
  p5: boolean,
  p6: boolean,
  p7: boolean,
  p8: boolean,
): number;

declare function CreateVehicle_2(
  modelHash: string | number,
  x: number,
  y: number,
  z: number,
  heading: number,
  p5: boolean,
  p6: boolean,
  p7: boolean,
  p8: boolean,
  p9: boolean,
): number;

declare function CreateVolumeAggregate(): number;

declare function CreateVolumeAggregateWithCustomName(name: string): number;

declare function CreateVolumeBox(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
): number;

declare function CreateVolumeBoxWithCustomName(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
): number;

declare function CreateVolumeByHash(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
): number;

declare function CreateVolumeByHashWithCustomName(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
  p10: number,
): number;

declare function CreateVolumeCylinder(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
): number;

declare function CreateVolumeCylinderWithCustomName(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
): number;

declare function DatabdingGetArrayCount(p0: number): number;

declare function DatabindingAddDataBool(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function DatabindingAddDataBoolByHash(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function DatabindingAddDataBoolFromPath(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function DatabindingAddDataContainer(p0: number, p1: number): number;

declare function DatabindingAddDataContainerByHash(
  p0: number,
  p1: number,
): number;

declare function DatabindingAddDataContainerFromPath(
  p0: number,
  p1: number,
): number;

declare function DatabindingAddDataFloat(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function DatabindingAddDataGangId(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function DatabindingAddDataHash(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function DatabindingAddDataHashByHash(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function DatabindingAddDataInt(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function DatabindingAddDataIntByHash(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function DatabindingAddDataString(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function DatabindingAddDataStringByHash(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function DatabindingAddHashArray(p0: number, p1: number): number;

declare function DatabindingAddStringArray(p0: number, p1: number): number;

declare function DatabindingAddUiItemList(p0: number, p1: number): number;

declare function DatabindingAddUiItemListByHash(p0: number, p1: number): number;

declare function DatabindingAddUiItemListFromPath(
  p0: number,
  p1: number,
): number;

declare function DatabindingClearBindingArray(p0: number): void;

declare function DatabindingGetDataContainerFromChildIndex(
  p0: number,
  p1: number,
): number;

declare function DatabindingGetDataContainerFromPath(p0: number): number;

declare function DatabindingGetItemContextByIndex(
  p0: number,
  p1: number,
): number;

declare function DatabindingInsertUiItemToListFromContextHashAlias(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function DatabindingInsertUiItemToListFromContextStringAlias(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function DatabindingInsertUiItemToListFromPathStringAlias(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function DatabindingIsDataIdValid(p0: number): number;

declare function DatabindingReadDataBool(p0: number): number;

declare function DatabindingReadDataBoolFromParent(
  p0: number,
  p1: number,
): number;

declare function DatabindingReadDataBoolFromParentByHash(
  p0: number,
  p1: number,
): number;

declare function DatabindingReadDataHashStringFromParent(
  p0: number,
  p1: number,
): number;

declare function DatabindingReadDataHashStringFromParentByHash(
  p0: number,
  p1: number,
): number;

declare function DatabindingReadDataInt(p0: number): number;

declare function DatabindingReadDataIntFromParent(
  p0: number,
  p1: number,
): number;

declare function DatabindingReadDataIntFromParentByHash(
  p0: number,
  p1: number,
): number;

declare function DatabindingReadDataString(p0: number): number;

declare function DatabindingReadDataStringFromParent(
  p0: number,
  p1: number,
): number;

declare function DatabindingRemoveBindingArrayItemByDataContextId(
  p0: number,
  p1: number,
): void;

declare function DatabindingRemoveDataEntry(p0: number): void;

declare function DatabindingSetTemplatedUiItemHashAlias(
  p0: number,
  p1: number,
  p2: number,
): void;

declare function DatabindingSetTemplatedUiItemListSize(
  p0: number,
  p1: number,
): void;

declare function DatabindingWriteDataBool(p0: number, p1: number): void;

declare function DatabindingWriteDataBoolFromParent(
  p0: number,
  p1: number,
  p2: number,
): void;

declare function DatabindingWriteDataFloat(p0: number, p1: number): void;

declare function DatabindingWriteDataHashString(p0: number, p1: number): void;

declare function DatabindingWriteDataHashStringFromParent(
  p0: number,
  p1: number,
  p2: number,
): void;

declare function DatabindingWriteDataHashStringFromParentByHash(
  p0: number,
  p1: number,
  p2: number,
): void;

declare function DatabindingWriteDataInt(p0: number, p1: number): void;

declare function DatabindingWriteDataIntFromParent(
  p0: number,
  p1: number,
  p2: number,
): void;

declare function DatabindingWriteDataIntFromParentByHash(
  p0: number,
  p1: number,
  p2: number,
): void;

declare function DatabindingWriteDataScriptVariables(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
): void;

declare function DatabindingWriteDataString(p0: number, p1: number): void;

declare function DatabindingWriteDataStringFromParent(
  p0: number,
  p1: number,
  p2: number,
): void;

declare function DatafileCreate(index: number): void;

declare function DatafileDelete(index: number): void;

declare function DatafileDeleteRequestedFile(p0: number): boolean;

declare function DatafileGetBool(p0: number, p1: number): number;

declare function DatafileGetDataNodeIndex(p0: number, p1: number): number;

declare function DatafileGetFileDict(index: number): string;

declare function DatafileGetFloat(p0: number, p1: number): number;

declare function DatafileGetHash(p0: number, p1: number): number;

declare function DatafileGetInt(p0: number, p1: number): number;

declare function DatafileGetNumChildren(p0: number, p1: number): number;

declare function DatafileGetNumNodes(p0: number): number;

declare function DatafileGetString(p0: number, p1: number): number;

declare function DatafileGetVector(p0: number, p1: number): number;

declare function DatafileHasLoadedFileData(p0: number): boolean;

declare function DatafileHasValidFileData(p0: number): boolean;

declare function DatafileRegisterQuery(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function DatafileSelectActiveFile(p0: number, p1: number): boolean;

declare function DatafileUnload(p0: number): void;

declare function DatafileWatchRequestId(id: number): void;

declare function DeactivateInteriorEntitySet(
  p0: number,
  p1: number,
  p2: number,
): void;

declare function DecorExistOn(entity: number, propertyName: string): boolean;

declare function DecorGetBool(entity: number, propertyName: string): boolean;

declare function DecorGetFloat(entity: number, propertyName: string): number;

declare function DecorGetInt(entity: number, propertyName: string): number;

declare function DecorGetUint8(entity: number, propertyName: string): number;

declare function DecorIsRegisteredAsType(
  propertyName: string,
  _type: number,
): boolean;

declare function DecorRegister(propertyName: string, _type: number): void;

declare function DecorRegister_2(
  propertyName: string,
  _type: number,
  p2: boolean,
): void;

declare function DecorRemove(entity: number, propertyName: string): boolean;

declare function DecorRemoveAll(entity: number): boolean;

declare function DecorSetBool(
  entity: number,
  propertyName: string,
  value: boolean,
): boolean;

declare function DecorSetFloat(
  entity: number,
  propertyName: string,
  value: number,
): boolean;

declare function DecorSetInt(
  entity: number,
  propertyName: string,
  value: number,
): boolean;

declare function DecorSetString(
  entity: number,
  propertyName: string,
  value: string,
): boolean;

declare function DecorSetUint8(
  entity: number,
  propertyName: string,
  value: number,
): boolean;

declare function DeleteAllTrains(): void;

declare function DeleteCheckpoint(checkpoint: number): void;

declare function DeleteChildRope(ropeId: number): void;

declare function DeleteEntity(entity: number): void;

declare function DeleteFunctionReference(referenceIdentity: string): void;

declare function DeleteFunctionReference(referenceIdentity: string): void;

declare function DeleteIncident(incidentId: number): void;

declare function DeleteMissionTrain(train: number): void;

declare function DeleteObject(object: number): void;

declare function DeletePatrolRoute(patrolRoute: string): void;

declare function DeletePed(ped: number): void;

declare function DeleteResourceKvp(key: string): void;

declare function DeleteResourceKvp(key: string): void;

declare function DeleteRope(ropeId: number): void;

declare function DeleteVehicle(vehicle: number): void;

declare function DestroyAllCams(thisScriptCheck: boolean): void;

declare function DestroyCam(cam: number, thisScriptCheck: boolean): void;

/**
 * Destroys a DUI browser.
 * @param duiObject The DUI browser handle.
 */
declare function DestroyDui(duiObject: number): void;

/**
 * Destroys a DUI browser.
 * @param duiObject The DUI browser handle.
 */
declare function DestroyDui(duiObject: number): void;

declare function DestroyItemset(itemset: number): void;

declare function DestroyTrackedPoint(point: number): void;

declare function DetachAnimScene(animScene: number): void;

declare function DetachAnimScenePreservingLocation(animScene: number): void;

declare function DetachCam(cam: number): void;

declare function DetachEntity(
  entity: number,
  p1: boolean,
  collision: boolean,
): void;

declare function DetachPortablePickupFromPed(pickupObject: number): void;

declare function DetachRopeFromEntity(ropeId: number, entity: number): void;

declare function DisableAllControlActions(padIndex: number): void;

declare function DisableAmbientLookAtRequests(p0: number, p1: number): void;

declare function DisableAttributeOverpower(p0: number, p1: number): void;

declare function DisableControlAction(
  padIndex: number,
  control: string | number,
  disable: boolean,
): void;

declare function DisableFirstPersonCamThisFrame(): void;

declare function DisableFrontendThisFrame(): void;

declare function DisableGuardZone(name: string): void;

/**
 * Disables the game's afk camera that starts panning around after 30 seconds of inactivity.
 * @param state On/Off
 */
declare function DisableIdleCamera(state: boolean): void;

declare function DisableInterior(interior: number, toggle: boolean): void;

declare function DisablePedPainAudio(ped: number, toggle: boolean): void;

declare function DisablePlayerFiring(player: number, toggle: boolean): void;

declare function DisableScriptBrainSet(brainSet: number): void;

declare function DisableVehicleFirstPersonCamThisFrame(): void;

declare function DisableVehicleWeapon(
  disabled: boolean,
  weaponHash: string | number,
  vehicle: number,
  owner: number,
): void;

declare function DisplayHud(toggle: boolean): void;

declare function DisplayOnscreenKeyboard(
  p0: number,
  windowTitle: string,
  p2: string,
  defaultText: string,
  defaultConcat1: string,
  defaultConcat2: string,
  defaultConcat3: string,
  maxInputLength: number,
): void;

declare function DisplayRadar(toggle: boolean): void;

/**
 * Note: you must use _CREATE_VAR_STRING
 * @param text :
 * @param xPos :
 * @param yPos :
 */
declare function DisplayText(text: number, xPos: number, yPos: number): void;

declare function DoScreenFadeIn(duration: number): void;

declare function DoScreenFadeOut(duration: number): void;

declare function DoesAnimDictExist(animDict: string): boolean;

declare function DoesBlipExist(blip: number): boolean;

declare function DoesCamExist(cam: number): boolean;

declare function DoesEntityBelongToThisScript(
  entity: number,
  p1: boolean,
): boolean;

declare function DoesEntityExist(entity: number): boolean;

declare function DoesEntityHaveDrawable(entity: number): boolean;

declare function DoesEntityHavePhysics(entity: number): boolean;

declare function DoesExtraExist(vehicle: number, extraId: number): boolean;

declare function DoesGroupExist(groupId: number): boolean;

declare function DoesNavmeshBlockingObjectExist(p0: number): boolean;

declare function DoesObjectOfTypeExistAtCoords(
  x: number,
  y: number,
  z: number,
  radius: number,
  hash: string | number,
  p5: boolean,
): boolean;

declare function DoesParticleFxLoopedExist(ptfxHandle: number): boolean;

declare function DoesPickupExist(pickup: number): boolean;

declare function DoesPickupObjectExist(pickupObject: number): boolean;

declare function DoesPickupOfTypeExistInArea(
  pickupHash: string | number,
  x: number,
  y: number,
  z: number,
  radius: number,
): boolean;

declare function DoesPopMultiplierAreaExist(id: number): boolean;

declare function DoesRayfireMapObjectExist(object: number): boolean;

declare function DoesRopeExist(ropeId: number): [boolean, number];

declare function DoesScenarioExistInArea(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
): boolean;

declare function DoesScenarioGroupExist(scenarioGroup: string): boolean;

declare function DoesScenarioGroupExistHash(
  scenarioGroup: string | number,
): boolean;

declare function DoesScriptExist(scriptName: string): boolean;

declare function DoesScriptWithNameHashExist(
  scriptHash: string | number,
): boolean;

declare function DoesScriptedCoverPointExistAtCoords(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): boolean;

declare function DoesStateMachineExist(p0: number): number;

declare function DoesStringExistInString(p0: number, p1: number): number;

declare function DoesTextLabelExist(label: string): boolean;

declare function DominoesBuyIn(p0: number): number;

declare function DominoesPlaceDomino(p0: number, p1: number): number;

declare function DominoesRequestValidPlacements(p0: number): number;

/**
 * Returns a list of door system entries: a door system hash (see [ADD_DOOR_TO_SYSTEM](#\_0x6F8838D03D1DC226)) and its object handle.
 * The data returned adheres to the following layout:
 * ```
 * [{doorHash1, doorHandle1}, ..., {doorHashN, doorHandleN}]
 * ```
 * @return An object containing a list of door system entries.
 */
declare function DoorSystemGetActive(): any;

declare function DoorSystemGetDoorState(doorHash: string | number): number;

declare function DoorSystemGetOpenRatio(doorHash: string | number): number;

declare function DoorSystemGetSize(): number;

declare function DoorSystemSetAutomaticDistance(p0: number, p1: number): void;

declare function DoorSystemSetAutomaticRate(p0: number, p1: number): void;

declare function DoorSystemSetDoorState(p0: number, p1: number): void;

declare function DoorSystemSetOpenRatio(
  p0: number,
  p1: number,
  p2: number,
): void;

declare function DrawLightWithRange(
  posX: number,
  posY: number,
  posZ: number,
  colorR: number,
  colorG: number,
  colorB: number,
  range: number,
  intensity: number,
): void;

declare function DrawRect(
  x: number,
  y: number,
  width: number,
  height: number,
  red: number,
  green: number,
  blue: number,
  alpha: number,
  p8: boolean,
  p9: boolean,
): void;

declare function DrawSprite(
  textureDict: string,
  textureName: string,
  screenX: number,
  screenY: number,
  width: number,
  height: number,
  heading: number,
  red: number,
  green: number,
  blue: number,
  alpha: number,
  p11: boolean,
): void;

declare function DrawTvChannel(
  xPos: number,
  yPos: number,
  xScale: number,
  yScale: number,
  rotation: number,
  red: number,
  green: number,
  blue: number,
  alpha: number,
): void;

declare function DuplicateFunctionReference(referenceIdentity: string): string;

declare function DuplicateFunctionReference(referenceIdentity: string): string;

declare function EnableAttributeOverpower(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function EnableControlAction(
  padIndex: number,
  control: string | number,
  enable: boolean,
): void;

declare function EnableDispatchService(
  dispatchService: number,
  toggle: boolean,
): void;

declare function EnableMovieSubtitles(toggle: boolean): void;

declare function EnableScriptBrainSet(brainSet: number): void;

declare function EndFindKvp(handle: number): void;

declare function EndFindKvp(handle: number): void;

declare function EndFindObject(findHandle: number): void;

declare function EndFindObject(findHandle: number): void;

declare function EndFindPed(findHandle: number): void;

declare function EndFindPed(findHandle: number): void;

declare function EndFindPickup(findHandle: number): void;

declare function EndFindPickup(findHandle: number): void;

declare function EndFindVehicle(findHandle: number): void;

declare function EndFindVehicle(findHandle: number): void;

declare function EndPetrolTrailDecals(): void;

declare function EndSrl(): void;

/**
 * Internal function for ensuring an entity has a state bag.
 */
declare function EnsureEntityStateBag(entity: number): void;

declare function EnterFlowBlock(p0: number, p1: number): number;

declare function EventManagerGetEvent(
  hash: string | number,
  eventData?: number,
): [boolean, number];

declare function EventManagerIsEventPending(hash: string | number): boolean;

declare function EventManagerPeekEvent(
  hash: string | number,
  eventData?: number,
): [boolean, number];

declare function EventManagerPopEvent(hash: string | number): void;

declare function EventQueueIsEmpty(p0: number): number;

declare function EventQueuePop(p0: number): void;

declare function ExecuteCommand(commandString: string): void;

declare function ExecuteCommand(commandString: string): void;

/**
 * This native is not implemented.
 * @param data
 * @param objectId
 * @param tree
 */
declare function ExperimentalLoadCloneCreate(
  data: string,
  objectId: number,
  tree: string,
): number;

/**
 * This native is not implemented.
 */
declare function ExperimentalLoadCloneCreate(
  data: string,
  objectId: number,
  tree: string,
): number;

/**
 * This native is not implemented.
 * @param entity
 * @param data
 */
declare function ExperimentalLoadCloneSync(entity: number, data: string): void;

/**
 * This native is not implemented.
 */
declare function ExperimentalLoadCloneSync(entity: number, data: string): void;

/**
 * This native is not implemented.
 * @param entity
 */
declare function ExperimentalSaveCloneCreate(entity: number): string;

/**
 * This native is not implemented.
 */
declare function ExperimentalSaveCloneCreate(entity: number): string;

/**
 * This native is not implemented.
 * @param entity
 */
declare function ExperimentalSaveCloneSync(entity: number): string;

/**
 * This native is not implemented.
 */
declare function ExperimentalSaveCloneSync(entity: number): string;

declare function ExplodePedHead(ped: number, weaponHash: string | number): void;

declare function ExplodeVehicle(
  vehicle: number,
  isAudible: boolean,
  isInvisible: boolean,
  p3: number,
): void;

declare function FadeAnimSceneAudioIn(animScene: number, p1: number): void;

declare function FadeAnimSceneAudioOut(animScene: number, p1: number): void;

declare function FindAllAttachedCarriableEntities(
  ped: number,
  itemset: number,
): void;

declare function FindAnimEventPhase(
  animDictionary: string,
  animName: string,
  p2: string,
): [boolean, number, number];

declare function FindFirstObject(outEntity: number): [number, number];

declare function FindFirstObject(outEntity: number): [number, number];

declare function FindFirstPed(outEntity: number): [number, number];

declare function FindFirstPed(outEntity: number): [number, number];

declare function FindFirstPickup(outEntity: number): [number, number];

declare function FindFirstPickup(outEntity: number): [number, number];

declare function FindFirstVehicle(outEntity: number): [number, number];

declare function FindFirstVehicle(outEntity: number): [number, number];

declare function FindKvp(handle: number): string;

declare function FindKvp(handle: number): string;

declare function FindNextObject(
  findHandle: number,
  outEntity?: number,
): [boolean, number];

declare function FindNextObject(
  findHandle: number,
  outEntity?: number,
): [boolean, number];

declare function FindNextPed(
  findHandle: number,
  outEntity?: number,
): [boolean, number];

declare function FindNextPed(
  findHandle: number,
  outEntity?: number,
): [boolean, number];

declare function FindNextPickup(
  findHandle: number,
  outEntity?: number,
): [boolean, number];

declare function FindNextPickup(
  findHandle: number,
  outEntity?: number,
): [boolean, number];

declare function FindNextVehicle(
  findHandle: number,
  outEntity?: number,
): [boolean, number];

declare function FindNextVehicle(
  findHandle: number,
  outEntity?: number,
): [boolean, number];

declare function Floor(value: number): number;

declare function ForceCleanup(cleanupFlags: number): void;

declare function ForceCleanupForAllThreadsWithThisName(
  name: string,
  cleanupFlags: number,
): void;

declare function ForceCleanupForThreadWithThisId(
  id: number,
  cleanupFlags: number,
): void;

declare function ForceCloseTextInputBox(): void;

declare function ForceEntityAiAndAnimationUpdate(p0: number, p1: number): void;

declare function ForceLightningFlash(): void;

declare function ForceLightningFlashAtCoords(
  x: number,
  y: number,
  z: number,
): void;

declare function ForcePedMotionState(
  ped: number,
  motionStateHash: string | number,
  p2: boolean,
  p3: number,
  p4: boolean,
): boolean;

declare function ForcePickupRegenerate(p0: number): void;

declare function ForceRoomForEntity(
  entity: number,
  interior: number,
  roomHashKey: string | number,
): void;

declare function ForceRoomForGameViewport(
  interiorID: number,
  roomHashKey: string | number,
): void;

declare function ForceSonarBlipsThisFrame(): number;

declare function ForceVehicleEngineAudio(
  vehicle: number,
  audioName: string,
): void;

declare function FreezeEntityPosition(entity: number, toggle: boolean): void;

declare function FreezePedCameraRotation(ped: number): void;

/**
 * Returns all player indices for 'active' physical players known to the client.
 * The data returned adheres to the following layout:
 * ```
 * [127, 42, 13, 37]
 * ```
 * @return An object containing a list of player indices.
 */
declare function GetActivePlayers(): any;

/**
 * Returns all player indices for 'active' physical players known to the client.
 * The data returned adheres to the following layout:
 * ```
 * [127, 42, 13, 37]
 * ```
 * @return An object containing a list of player indices.
 */
declare function GetActivePlayers(): any;

declare function GetActiveVehicleMissionType(vehicle: number): number;

/**
 * Returns all rope handles. The data returned adheres to the following layout:
 * ```
 * [ 770, 1026, 1282, 1538, 1794, 2050, 2306, 2562, 2818, 3074, 3330, 3586, 3842, 4098, 4354, 4610, ...]
 * ```
 * @return An object containing a list of all rope handles.
 */
declare function GetAllRopes(): any;

declare function GetAmmoInClip(
  ped: number,
  weaponHash: string | number,
): [boolean, number];

declare function GetAmmoInPedWeapon(
  ped: number,
  weaponHash: string | number,
): number;

declare function GetAngleBetween_2dVectors(
  x1: number,
  y1: number,
  x2: number,
  y2: number,
): number;

declare function GetAnimDuration(animDict: string, animName: string): number;

declare function GetAnimInitialOffsetPosition(
  animDict: string,
  animName: string,
  x: number,
  y: number,
  z: number,
  xRot: number,
  yRot: number,
  zRot: number,
  p8: number,
  p9: number,
): number[];

declare function GetAnimInitialOffsetRotation(
  animDict: string,
  animName: string,
  x: number,
  y: number,
  z: number,
  xRot: number,
  yRot: number,
  zRot: number,
  p8: number,
  p9: number,
): number[];

declare function GetAnimalTuningBoolParam(animal: number, p1: number): boolean;

declare function GetAnimalTuningFloatParam(animal: number, p1: number): number;

declare function GetAttributeBaseRank(p0: number, p1: number): number;

declare function GetAttributeBonusRank(p0: number, p1: number): number;

/**
 * Gets the ped's core value on a scale of 0 to 100. The coreIndex is as follows:
 * - health = 0,
 * - stamina = 1,
 * - deadeye = 2
 * @param ped :
 * @param coreIndex :
 */
declare function GetAttributeCoreValue(ped: number, coreIndex: number): number;

declare function GetAttributePoints(p0: number, p1: number): number;

declare function GetAttributeRank(p0: number, p1: number): number;

declare function GetBenchmarkIterationsFromCommandLine(): number;

declare function GetBenchmarkPassFromCommandLine(): number;

declare function GetBenchmarkTime(): number;

declare function GetBestPedWeapon(
  ped: number,
  p1: boolean,
  p2: boolean,
): number;

declare function GetBitsInRange(
  _var: number,
  rangeStart: number,
  rangeEnd: number,
): number;

declare function GetBlipCoords(blip: number): number[];

declare function GetBlipFromEntity(entity: number): number;

declare function GetBlockOfPlayerBits(p0: number, p1: number): number;

declare function GetCamCoord(cam: number): number[];

declare function GetCamFov(cam: number): number;

/**
 * Returns the world matrix of the specified camera. To turn this into a view matrix, calculate the inverse.
 * @param camera
 * @param rightVector
 * @param forwardVector
 * @param upVector
 * @param position
 */
declare function GetCamMatrix(
  camera: number,
): [number[], number[], number[], number[]];

/**
 * Returns the world matrix of the specified camera. To turn this into a view matrix, calculate the inverse.
 */
declare function GetCamMatrix(
  camera: number,
): [number[], number[], number[], number[]];

declare function GetCamRot(cam: number, rotationOrder: number): number[];

declare function GetCamSplinePhase(cam: number): number;

declare function GetCauseOfMostRecentForceCleanup(): number;

declare function GetClockDayOfMonth(): number;

declare function GetClockDayOfWeek(): number;

declare function GetClockHours(): number;

declare function GetClockMinutes(): number;

declare function GetClockMonth(): number;

declare function GetClockSeconds(): number;

declare function GetClockYear(): number;

declare function GetClosestFirePos(
  x: number,
  y: number,
  z: number,
): [boolean, number[]];

declare function GetClosestObjectOfType(
  x: number,
  y: number,
  z: number,
  radius: number,
  modelHash: string | number,
  isMission: boolean,
  p6: boolean,
  p7: boolean,
): number;

declare function GetClosestPed(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
  p10: number,
): boolean;

declare function GetClosestRoad(
  x: number,
  y: number,
  z: number,
  p3: number,
  p4: number,
  p10: boolean,
): [number, number[], number[], number, number, number];

declare function GetClosestVehicle(
  x: number,
  y: number,
  z: number,
  radius: number,
  modelHash: string | number,
  flags: number,
): number;

declare function GetClosestVehicleNode(
  x: number,
  y: number,
  z: number,
  nodeType: number,
  p5: number,
  p6: number,
): [boolean, number[]];

declare function GetClosestVehicleNodeWithHeading(
  x: number,
  y: number,
  z: number,
  nodeType: number,
  p6: number,
  p7: number,
): [boolean, number[], number];

declare function GetCloudTimeAsInt(): number;

declare function GetCombatFloat(ped: number, p1: number): number;

declare function GetControlNormal(
  padIndex: number,
  control: string | number,
): number;

declare function GetControlUnboundNormal(
  padIndex: number,
  control: string | number,
): number;

declare function GetControlValue(
  padIndex: number,
  control: string | number,
): number;

declare function GetConvar(varName: string, default_: string): string;

declare function GetConvar(varName: string, default_: string): string;

declare function GetConvarInt(varName: string, default_: number): number;

declare function GetConvarInt(varName: string, default_: number): number;

/**
 * This native returns the currently used game's name.
 * @return The game name as a string, one of the following values: gta4, gta5, rdr3
 */
declare function GetCurrentGameName(): string;

declare function GetCurrentLanguage(): number;

declare function GetCurrentPedVehicleWeapon(
  ped: number,
  weaponHash?: number,
): [boolean, number];

declare function GetCurrentPedWeapon(
  ped: number,
  p2: boolean,
  p3: number,
  p4: boolean,
): [boolean, number];

declare function GetCurrentPedWeaponEntityIndex(
  ped: number,
  p1: number,
): number;

/**
 * Returns the name of the currently executing resource.
 * @return The name of the resource.
 */
declare function GetCurrentResourceName(): string;

/**
 * Returns the name of the currently executing resource.
 * @return The name of the resource.
 */
declare function GetCurrentResourceName(): string;

declare function GetCurrentScriptedConversationLine(p0: number): number;

/**
 * Returns the peer address of the remote game server that the user is currently connected to.
 * @return The peer address of the game server (e.g. `127.0.0.1:30120`), or NULL if not available.
 */
declare function GetCurrentServerEndpoint(): string;

/**
 * Returns the peer address of the remote game server that the user is currently connected to.
 * @return The peer address of the game server (e.g. `127.0.0.1:30120`), or NULL if not available.
 */
declare function GetCurrentServerEndpoint(): string;

declare function GetDateAndTimeFromUnixEpoch(
  unixEpoch: number,
  timeStructure?: number,
): number;

declare function GetDeadPedPickupCoords(
  ped: number,
  p1: number,
  p2: number,
): number[];

declare function GetDefaultAttributePointsNeededForRank(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function GetDefaultAttributeRank(p0: number, p1: number): number;

declare function GetDefaultMaxAttributeRank(p0: number, p1: number): number;

declare function GetDefaultRelationshipGroupHash(
  modelHash: string | number,
): number;

declare function GetDisabledControlNormal(
  padIndex: number,
  control: string | number,
): number;

declare function GetDisabledControlUnboundNormal(
  padIndex: number,
  control: string | number,
): number;

declare function GetDistanceBetweenCoords(
  x1: number,
  y1: number,
  z1: number,
  x2: number,
  y2: number,
  z2: number,
  useZ: boolean,
): number;

/**
 * Returns the NUI window handle for a specified DUI browser object.
 * @param duiObject The DUI browser handle.
 * @return The NUI window handle, for use in e.g. CREATE_RUNTIME_TEXTURE_FROM_DUI_HANDLE.
 */
declare function GetDuiHandle(duiObject: number): string;

/**
 * Returns the NUI window handle for a specified DUI browser object.
 * @param duiObject The DUI browser handle.
 * @return The NUI window handle, for use in e.g. CREATE_RUNTIME_TEXTURE_FROM_DUI_HANDLE.
 */
declare function GetDuiHandle(duiObject: number): string;

declare function GetEntityAlpha(entity: number): number;

declare function GetEntityAttachedTo(entity: number): number;

declare function GetEntityBoneIndexByName(
  entity: number,
  boneName: string,
): number;

declare function GetEntityCollisionDisabled(entity: number): boolean;

declare function GetEntityCoords(
  entity: number,
  p1: boolean,
  p2?: boolean,
): number[];

declare function GetEntityForwardVector(entity: string | number): number[];

declare function GetEntityForwardX(entity: number): number;

declare function GetEntityForwardY(entity: number): number;

declare function GetEntityHeading(entity: number): number;

declare function GetEntityHealth(entity: number): number;

declare function GetEntityHeight(
  entity: number,
  X: number,
  Y: number,
  Z: number,
  atTop: boolean,
  inWorldCoords: boolean,
): number;

declare function GetEntityHeightAboveGround(entity: number): number;

declare function GetEntityInsideExplosionArea(
  explosionType: number,
  x1: number,
  y1: number,
  z1: number,
  x2: number,
  y2: number,
  z2: number,
  radius: number,
): number;

declare function GetEntityLodDist(entity: number): number;

declare function GetEntityMatrix(
  entity: number,
): [number[], number[], number[], number[]];

declare function GetEntityMaxHealth(p0: number, p1?: number): number;

declare function GetEntityModel(entity: number): number;

declare function GetEntityPitch(entity: number): number;

declare function GetEntityPlayerIsFreeAimingAt(
  player: number,
  entity?: number,
): [boolean, number];

declare function GetEntityPopulationType(entity: number): number;

declare function GetEntityProofs(entity: number): number;

declare function GetEntityRoll(entity: number): number;

declare function GetEntityRotation(
  entity: number,
  rotationOrder: number,
): number[];

declare function GetEntitySpeed(entity: number): number;

declare function GetEntitySpeedVector(
  entity: number,
  relative: boolean,
): number[];

declare function GetEntitySubmergedLevel(entity: number): number;

declare function GetEntityType(entity: number): number;

declare function GetEntityUprightValue(entity: number): number;

declare function GetEntityVelocity(p0: number, p1?: number): number[];

declare function GetEventAtIndex(
  eventGroup: number,
  eventIndex: number,
): number;

declare function GetEventData(
  eventGroup: number,
  eventIndex: number,
  argStructSize: number,
): [boolean, number];

declare function GetEventExists(
  eventGroup: number,
  eventIndex: number,
): boolean;

/**
 * A getter for [SET_RESOURCE_KVP_FLOAT](#\_0x9ADD2938), but for a specified resource.
 * @param resource The resource to fetch from.
 * @param key The key to fetch
 * @return A float that contains the value stored in the Kvp or nil/null if none.
 */
declare function GetExternalKvpFloat(resource: string, key: string): number;

/**
 * A getter for [SET_RESOURCE_KVP_INT](#\_0x6A2B1E8), but for a specified resource.
 * @param resource The resource to fetch from.
 * @param key The key to fetch
 * @return A int that contains the value stored in the Kvp or nil/null if none.
 */
declare function GetExternalKvpInt(resource: string, key: string): number;

/**
 * A getter for [SET_RESOURCE_KVP](#\_0x21C7A35B), but for a specified resource.
 * @param resource The resource to fetch from.
 * @param key The key to fetch
 * @return A string that contains the value stored in the Kvp or nil/null if none.
 */
declare function GetExternalKvpString(resource: string, key: string): string;

declare function GetFinalRenderedCamCoord(): number[];

declare function GetFinalRenderedCamFov(): number;

declare function GetFinalRenderedCamRot(rotationOrder: number): number[];

declare function GetFirstPersonAimCamZoomFactor(): number;

declare function GetFrameCount(): number;

declare function GetFrameTime(): number;

/**
 * Returns the internal build number of the current game being executed.
 * Possible values:
 * *   FiveM
 * *   1604
 * *   2060
 * *   2189
 * *   2372
 * *   2545
 * *   RedM
 * *   1311
 * *   1355
 * *   1436
 * *   LibertyM
 * *   43
 * *   FXServer
 * *   0
 * @return The build number, or **0** if no build number is known.
 */
declare function GetGameBuildNumber(): number;

/**
 * Return example: 1207.69_dev_pc
 */
declare function GetGameBuildString(): string;

/**
 * Returns the current game being executed.
 * Possible values:
 * | Return value | Meaning                        |
 * | ------------ | ------------------------------ |
 * | `fxserver`   | Server-side code ('Duplicity') |
 * | `fivem`      | FiveM for GTA V                |
 * | `libertym`   | LibertyM for GTA IV            |
 * | `redm`       | RedM for Red Dead Redemption 2 |
 * @return The game the script environment is running in.
 */
declare function GetGameName(): string;

/**
 * Returns all pool handles for the given pool name; the data returned adheres to the following layout:
 * ```
 * [ 770, 1026, 1282, 1538, 1794, 2050, 2306, 2562, 2818, 3074, 3330, 3586, 3842, 4098, 4354, 4610, ...]
 * ```
 * ### Supported Pools
 * **1**: CPed\
 * **2**: CObject\
 * **3**: CVehicle\
 * **4**: CPickup
 * @return An object containing a list of all pool handles
 */
declare function GetGamePool(poolname: string): any;

declare function GetGameTimer(): number;

declare function GetGameplayCamCoord(): number[];

declare function GetGameplayCamFov(): number;

declare function GetGameplayCamRelativeHeading(): number;

declare function GetGameplayCamRelativePitch(): number;

declare function GetGameplayCamRot(rotationOrder: number): number[];

declare function GetGlobalBlockCanBeAccessed(index: number): boolean;

declare function GetGpsBlipRouteFound(): boolean;

declare function GetGpsBlipRouteLength(): number;

declare function GetGroundZAndNormalFor_3dCoord(
  x: number,
  y: number,
  z: number,
): [boolean, number, number[]];

declare function GetGroundZFor_3dCoord(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): boolean;

declare function GetGroupSize(groupID: number): [number, number];

declare function GetHashKey(_string: string): number;

declare function GetHashOfThisScriptName(): number;

declare function GetHashOfThread(threadId: number): number;

declare function GetHeadingFromVector_2d(dx: number, dy: number): number;

declare function GetHeightmapBottomZForPosition(
  left: number,
  right: number,
): number;

declare function GetHudScreenPositionFromWorldPosition(
  worldX: number,
  worldY: number,
  worldZ: number,
): [boolean, number, number];

declare function GetIdOfThisThread(): number;

declare function GetIndexedItemInItemset(itemset: number, p1: number): number;

declare function GetIndexedScenarioPointIndexInItemset(
  itemset: number,
  p1: number,
): number;

declare function GetInstanceId(): number;

declare function GetInstanceId(): number;

declare function GetInteriorAtCoords(x: number, y: number, z: number): number;

declare function GetInteriorAtCoordsWithType(
  x: number,
  y: number,
  z: number,
  interiorType: string,
): number;

declare function GetInteriorAtCoordsWithTypehash(
  x: number,
  y: number,
  z: number,
  typeHash: string | number,
): number;

declare function GetInteriorEntitiesExtents(
  interiorId: number,
): [number, number, number, number, number, number];

declare function GetInteriorEntitiesExtents(
  interiorId: number,
): [number, number, number, number, number, number];

declare function GetInteriorFromCollision(
  x: number,
  y: number,
  z: number,
): number;

declare function GetInteriorFromEntity(entity: number): number;

declare function GetInteriorPortalCornerPosition(
  interiorId: number,
  portalIndex: number,
  cornerIndex: number,
): [number, number, number];

declare function GetInteriorPortalCornerPosition(
  interiorId: number,
  portalIndex: number,
  cornerIndex: number,
): [number, number, number];

declare function GetInteriorPortalCount(interiorId: number): number;

declare function GetInteriorPortalCount(interiorId: number): number;

declare function GetInteriorPortalEntityArchetype(
  interiorId: number,
  portalIndex: number,
  entityIndex: number,
): number;

declare function GetInteriorPortalEntityCount(
  interiorId: number,
  portalIndex: number,
): number;

declare function GetInteriorPortalEntityFlag(
  interiorId: number,
  portalIndex: number,
  entityIndex: number,
): number;

declare function GetInteriorPortalEntityPosition(
  interiorId: number,
  portalIndex: number,
  entityIndex: number,
): [number, number, number];

declare function GetInteriorPortalEntityRotation(
  interiorId: number,
  portalIndex: number,
  entityIndex: number,
): [number, number, number, number];

declare function GetInteriorPortalFlag(
  interiorId: number,
  portalIndex: number,
): number;

declare function GetInteriorPortalFlag(
  interiorId: number,
  portalIndex: number,
): number;

declare function GetInteriorPortalRoomFrom(
  interiorId: number,
  portalIndex: number,
): number;

declare function GetInteriorPortalRoomFrom(
  interiorId: number,
  portalIndex: number,
): number;

declare function GetInteriorPortalRoomTo(
  interiorId: number,
  portalIndex: number,
): number;

declare function GetInteriorPortalRoomTo(
  interiorId: number,
  portalIndex: number,
): number;

declare function GetInteriorPosition(
  interiorId: number,
): [number, number, number];

declare function GetInteriorPosition(
  interiorId: number,
): [number, number, number];

declare function GetInteriorRoomCount(interiorId: number): number;

declare function GetInteriorRoomCount(interiorId: number): number;

declare function GetInteriorRoomExtents(
  interiorId: number,
  roomIndex: number,
): [number, number, number, number, number, number];

declare function GetInteriorRoomExtents(
  interiorId: number,
  roomIndex: number,
): [number, number, number, number, number, number];

declare function GetInteriorRoomFlag(
  interiorId: number,
  roomIndex: number,
): number;

declare function GetInteriorRoomFlag(
  interiorId: number,
  roomIndex: number,
): number;

declare function GetInteriorRoomIndexByHash(
  interiorId: number,
  roomHash: number,
): number;

declare function GetInteriorRoomIndexByHash(
  interiorId: number,
  roomHash: number,
): number;

declare function GetInteriorRoomName(
  interiorId: number,
  roomIndex: number,
): string;

declare function GetInteriorRoomName(
  interiorId: number,
  roomIndex: number,
): string;

declare function GetInteriorRoomTimecycle(
  interiorId: number,
  roomIndex: number,
): number;

declare function GetInteriorRoomTimecycle(
  interiorId: number,
  roomIndex: number,
): number;

declare function GetInteriorRotation(
  interiorId: number,
): [number, number, number, number];

declare function GetInteriorRotation(
  interiorId: number,
): [number, number, number, number];

declare function GetInvokingResource(): string;

declare function GetIsLoadingScreenActive(): boolean;

declare function GetIsTaskActive(ped: number, taskIndex: number): boolean;

declare function GetIsThreatIndicatorCapableRadarShown(): number;

declare function GetIsThreatIndicatorOn(): number;

declare function GetIsWaypointRecordingLoaded(name: string): boolean;

declare function GetItemsetSize(itemset: number): number;

declare function GetJackTarget(ped: number): number;

declare function GetKeyForEntityInRoom(entity: number): number;

declare function GetLabelText(labelName: string): string;

/**
 * Returns the label text given the hash.
 * @param labelHash :
 */
declare function GetLabelTextByHash(labelHash: string | number): string;

declare function GetLabelText_2(label: string): string;

declare function GetLastDrivenVehicle(): number;

declare function GetLastPedInVehicleSeat(
  vehicle: number,
  seatIndex: number,
): number;

declare function GetLengthOfLiteralString(_string: string): number;

declare function GetLengthOfLiteralStringInBytes(_string: string): number;

declare function GetMainPlayerBlipId(): number;

/**
 * Returns the zoom level data by index from mapzoomdata.meta file.
 * @param index Zoom level index.
 * @param zoomScale fZoomScale value.
 * @param zoomSpeed fZoomSpeed value.
 * @param scrollSpeed fScrollSpeed value.
 * @param tilesX vTiles X.
 * @param tilesY vTiles Y.
 * @return A boolean indicating TRUE if the data was received successfully.
 */
declare function GetMapZoomDataLevel(
  index: number,
): [boolean, number, number, number, number, number];

/**
 * Returns the zoom level data by index from mapzoomdata.meta file.
 * @param index Zoom level index.
 * @param zoomScale fZoomScale value.
 * @param zoomSpeed fZoomSpeed value.
 * @param scrollSpeed fScrollSpeed value.
 * @param tilesX vTiles X.
 * @param tilesY vTiles Y.
 * @return A boolean indicating TRUE if the data was received successfully.
 */
declare function GetMapZoomDataLevel(
  index: number,
): [boolean, number, number, number, number, number];

declare function GetMaxAmmo(
  ped: number,
  weaponHash: string | number,
  ammo?: number,
): [boolean, number];

declare function GetMaxAmmoInClip(
  ped: number,
  weaponHash: string | number,
  p2: boolean,
): number;

declare function GetMaxAttributePoints(p0: number, p1: number): number;

declare function GetMaxAttributeRank(p0: number, p1: number): number;

declare function GetMaxNumNetworkObjects(): number;

declare function GetMaxNumNetworkPeds(): number;

declare function GetMaxNumNetworkPickups(): number;

declare function GetMaxNumNetworkVehicles(): number;

declare function GetMaxWantedLevel(): number;

declare function GetMeleeTargetForPed(ped: number): number;

declare function GetMillisecondsPerGameMinute(): number;

declare function GetMissionFlag(): boolean;

declare function GetModelDimensions(
  modelHash: string | number,
): [number[], number[]];

declare function GetMount(ped: number): number;

declare function GetMusicPlaytime(): number;

declare function GetNamedRendertargetRenderId(name: string): number;

declare function GetNearestPlayerToEntity(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function GetNearestPlayerToEntityOnTeam(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): number;

declare function GetNetworkTime(): number;

declare function GetNetworkTimeAccurate(): number;

declare function GetNoLoadingScreen(): boolean;

declare function GetNthClosestVehicleNode(
  x: number,
  y: number,
  z: number,
  nthClosest: number,
  unknown1: number,
  unknown2: number,
  unknown3: number,
): [boolean, number[]];

declare function GetNthClosestVehicleNodeFavourDirection(
  x: number,
  y: number,
  z: number,
  desiredX: number,
  desiredY: number,
  desiredZ: number,
  nthClosest: number,
  nodetype: number,
  p10: number,
  p11: number,
): [boolean, number[], number];

declare function GetNthClosestVehicleNodeId(
  x: number,
  y: number,
  z: number,
  nth: number,
  nodetype: number,
  p5: number,
  p6: number,
): number;

declare function GetNthClosestVehicleNodeIdWithHeading(
  x: number,
  y: number,
  z: number,
  nthClosest: number,
  outHeading: number,
  p6: number,
  p7: number,
  p8: number,
): [boolean, number[]];

declare function GetNthClosestVehicleNodeWithHeading(
  x: number,
  y: number,
  z: number,
  nthClosest: number,
  unknown2: number,
  unknown3: number,
  unknown4: number,
): [boolean, number[], number, number];

declare function GetNuiCursorPosition(): [number, number];

declare function GetNuiCursorPosition(): [number, number];

declare function GetNumCreatedMissionObjects(p0: boolean): number;

declare function GetNumCreatedMissionPeds(p0: boolean): number;

declare function GetNumCreatedMissionVehicles(p0: boolean): number;

declare function GetNumModelsInPopulationSet(p0: number): number;

declare function GetNumReservedMissionObjects(p0: number): number;

declare function GetNumReservedMissionPeds(p0: number): number;

declare function GetNumReservedMissionVehicles(p0: number): number;

/**
 * Gets the amount of metadata values with the specified key existing in the specified resource's manifest.
 * See also: [Resource manifest](https://docs.fivem.net/resources/manifest/)
 * @param resourceName The resource name.
 * @param metadataKey The key to look up in the resource manifest.
 */
declare function GetNumResourceMetadata(
  resourceName: string,
  metadataKey: string,
): number;

/**
 * Gets the amount of metadata values with the specified key existing in the specified resource's manifest.
 * See also: [Resource manifest](https://docs.fivem.net/resources/manifest/)
 * @param resourceName The resource name.
 * @param metadataKey The key to look up in the resource manifest.
 */
declare function GetNumResourceMetadata(
  resourceName: string,
  metadataKey: string,
): number;

declare function GetNumResources(): number;

declare function GetNumResources(): number;

declare function GetNumberOfEvents(eventGroup: number): number;

declare function GetNumberOfFiresInRange(
  x: number,
  y: number,
  z: number,
  radius: number,
): number;

declare function GetNumberOfFreeStacksOfThisSize(stackSize: number): number;

declare function GetNumberOfMicrosecondsSinceLastCall(): number;

declare function GetNumberOfReferencesOfScriptWithNameHash(
  scriptHash: string | number,
): number;

declare function GetNumberOfStreamingRequests(): number;

declare function GetObjectFragmentDamageHealth(p0: number, p1: boolean): number;

declare function GetObjectIndexFromEntityIndex(entity: number): number;

declare function GetObjectOffsetFromCoords(
  xPos: number,
  yPos: number,
  zPos: number,
  heading: number,
  xOffset: number,
  yOffset: number,
  zOffset: number,
): number[];

declare function GetOffsetFromEntityGivenWorldCoords(
  entity: number,
  posX: number,
  posY: number,
  posZ: number,
): number[];

declare function GetOffsetFromEntityInWorldCoords(
  entity: number,
  offsetX: number,
  offsetY: number,
  offsetZ: number,
): number[];

declare function GetOnscreenKeyboardResult(): string;

declare function GetPedAccuracy(ped: number): number;

declare function GetPedAmmoByType(ped: number, ammoType: number): number;

declare function GetPedAmmoTypeFromWeapon(
  ped: number,
  weaponHash: string | number,
): number;

declare function GetPedAsGroupLeader(groupID: number): number;

declare function GetPedAsGroupMember(
  groupID: number,
  memberNumber: number,
): number;

declare function GetPedBoneCoords(
  ped: number,
  boneId: number,
  offsetX: number,
  offsetY: number,
  offsetZ: number,
): number[];

declare function GetPedBoneIndex(ped: number, boneId: number): number;

declare function GetPedCauseOfDeath(ped: number): number;

declare function GetPedCombatMovement(ped: number): number;

declare function GetPedConfigFlag(
  ped: number,
  flagId: number,
  p2: boolean,
): boolean;

declare function GetPedDefensiveAreaPosition(
  ped: number,
  p1: boolean,
): number[];

declare function GetPedDesiredMoveBlendRatio(ped: number): number;

/**
 * A getter for [\_SET_PED_EYE_COLOR](#\_0x50B56988B170AFDF). Returns -1 if fails to get.
 * @param ped The target ped
 * @return Returns ped's eye colour, or -1 if fails to get.
 */
declare function GetPedEyeColor(ped: number): number;

/**
 * A getter for [\_SET_PED_EYE_COLOR](#_0x50B56988B170AFDF). Returns -1 if fails to get.
 * @param ped The target ped
 * @return Returns ped's eye colour, or -1 if fails to get.
 */
declare function GetPedEyeColor(ped: number): number;

/**
 * A getter for [\_SET_PED_FACE_FEATURE](#\_0x71A5C1DBA060049E). Returns 0.0 if fails to get.
 * @param ped The target ped
 * @param index Face feature index
 * @return Returns ped's face feature value, or 0.0 if fails to get.
 */
declare function GetPedFaceFeature(ped: number, index: number): number;

/**
 * A getter for [\_SET_PED_FACE_FEATURE](#_0x71A5C1DBA060049E). Returns 0.0 if fails to get.
 * @param ped The target ped
 * @param index Face feature index
 * @return Returns ped's face feature value, or 0.0 if fails to get.
 */
declare function GetPedFaceFeature(ped: number, index: number): number;

declare function GetPedGroupIndex(ped: number): number;

/**
 * A getter for [\_SET_PED_HAIR_COLOR](#\_0x4CFFC65454C93A49). Returns -1 if fails to get.
 * @param ped The target ped
 * @return Returns ped's primary hair colour.
 */
declare function GetPedHairColor(ped: number): number;

/**
 * A getter for [\_SET_PED_HAIR_COLOR](#_0x4CFFC65454C93A49). Returns -1 if fails to get.
 * @param ped The target ped
 * @return Returns ped's primary hair colour.
 */
declare function GetPedHairColor(ped: number): number;

/**
 * A getter for [\_SET_PED_HAIR_COLOR](#\_0x4CFFC65454C93A49). Returns -1 if fails to get.
 * @param ped The target ped
 * @return Returns ped's secondary hair colour.
 */
declare function GetPedHairHighlightColor(ped: number): number;

/**
 * A getter for [\_SET_PED_HAIR_COLOR](#_0x4CFFC65454C93A49). Returns -1 if fails to get.
 * @param ped The target ped
 * @return Returns ped's secondary hair colour.
 */
declare function GetPedHairHighlightColor(ped: number): number;

/**
 * A getter for [SET_PED_HEAD_OVERLAY](#\_0x48F44967FA05CC1E) and [\_SET_PED_HEAD_OVERLAY_COLOR](#\_0x497BF74A7B9CB952) natives.
 * @param ped The target ped
 * @param index Overlay index
 * @param overlayValue Overlay value pointer
 * @param colourType Colour type pointer
 * @param firstColour First colour pointer
 * @param secondColour Second colour pointer
 * @param overlayOpacity Opacity pointer
 * @return Returns ped's head overlay data.
 */
declare function GetPedHeadOverlayData(
  ped: number,
  index: number,
): [boolean, number, number, number, number, number];

/**
 * A getter for [SET_PED_HEAD_OVERLAY](#_0x48F44967FA05CC1E) and [\_SET_PED_HEAD_OVERLAY_COLOR](#_0x497BF74A7B9CB952) natives.
 * @param ped The target ped
 * @param index Overlay index
 * @param overlayValue Overlay value pointer
 * @param colourType Colour type pointer
 * @param firstColour First colour pointer
 * @param secondColour Second colour pointer
 * @param overlayOpacity Opacity pointer
 * @return Returns ped's head overlay data.
 */
declare function GetPedHeadOverlayData(
  ped: number,
  index: number,
): [boolean, number, number, number, number, number];

declare function GetPedInVehicleSeat(
  vehicle: number,
  seatIndex: number,
): number;

declare function GetPedIndexFromEntityIndex(entity: number): number;

declare function GetPedLastDamageBone(
  ped: number,
  outBone?: number,
): [boolean, number];

declare function GetPedLastWeaponImpactCoord(ped: number): [boolean, number[]];

declare function GetPedMaxHealth(ped: number): number;

declare function GetPedModelNameInPopulationSet(p0: number, p1: number): number;

declare function GetPedMoney(ped: number): number;

declare function GetPedNearbyPeds(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): number;

declare function GetPedNearbyVehicles(
  ped: number,
  sizeAndVehs?: number,
): [number, number];

declare function GetPedRelationshipGroupDefaultHash(ped: number): number;

declare function GetPedRelationshipGroupHash(ped: number): number;

declare function GetPedResetFlag(ped: number, flagId: number): boolean;

declare function GetPedSourceOfDeath(ped: number): number;

declare function GetPedStealthMovement(ped: number): boolean;

declare function GetPedTimeOfDeath(ped: number): number;

declare function GetPedType(ped: number): number;

declare function GetPedWaypointDistance(p0: number): number;

declare function GetPedWaypointOverrideSpeed(p0: number): number;

declare function GetPedWaypointProgress(ped: number): number;

declare function GetPedsJacker(ped: number): number;

declare function GetPickupCoords(pickup: number): number[];

declare function GetPickupHash(pickupHash: string | number): number;

declare function GetPickupObject(pickup: number): number;

declare function GetPlayerCurrentStealthNoise(player: number): number;

declare function GetPlayerFromServerId(serverId: number): number;

declare function GetPlayerFromServerId(serverId: number): number;

declare function GetPlayerGroup(player: number): number;

declare function GetPlayerIndex(): number;

declare function GetPlayerInvincible(player: number): boolean;

/**
 * Unlike [GET_PLAYER_INVINCIBLE](#\_0xB721981B2B939E07) this native gets both [SET_PLAYER_INVINCIBLE_KEEP_RAGDOLL_ENABLED](#\_0x6BC97F4F4BB3C04B) and [SET_PLAYER_INVINCIBLE](#\_0x239528EACDC3E7DE) invincibility state.
 * @param player The player id
 * @return A boolean to tell if the player is invincible.
 */
declare function GetPlayerInvincible_2(player: number): boolean;

declare function GetPlayerName(player: number): string;

declare function GetPlayerPed(player: number): number;

declare function GetPlayerPedIsFollowing(ped: number): number;

declare function GetPlayerPedScriptIndex(player: number): number;

declare function GetPlayerServerId(player: number): number;

declare function GetPlayerServerId(player: number): number;

declare function GetPlayerTargetEntity(
  player: number,
  entity?: number,
): [boolean, number];

declare function GetPlayerTeam(player: number): number;

declare function GetPlayerWantedLevel(player: number): number;

declare function GetPlayersLastVehicle(): number;

declare function GetPositionOfVehicleRecordingAtTime(
  p0: number,
  p1: number,
  p2: string,
): number[];

declare function GetPosixTime(): [
  number,
  number,
  number,
  number,
  number,
  number,
];

declare function GetProjectileNearPed(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
): boolean;

declare function GetProjectileNearPedCoords(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
): boolean;

declare function GetRainLevel(): number;

declare function GetRandomEventFlag(): boolean;

declare function GetRandomFloatInRange(
  startRange: number,
  endRange: number,
): number;

declare function GetRandomIntInRange(
  startRange: number,
  endRange: number,
): number;

declare function GetRandomModelFromPopulationSet(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
): number;

declare function GetRandomVehicleNode(
  x: number,
  y: number,
  z: number,
  radius: number,
  p4: boolean,
  p5: boolean,
  p6: boolean,
): [boolean, number[], number];

declare function GetRayfireMapObject(
  x: number,
  y: number,
  z: number,
  radius: number,
  name: string,
): number;

declare function GetRayfireMapObjectAnimPhase(object: number): number;

/**
 * Returns all commands that are registered in the command system.
 * The data returned adheres to the following layout:
 * ```
 * [
 * {
 * "name": "cmdlist"
 * },
 * {
 * "name": "command1"
 * }
 * ]
 * ```
 * @return An object containing registered commands.
 */
declare function GetRegisteredCommands(): any;

/**
 * Returns all commands that are registered in the command system.
 * The data returned adheres to the following layout:
 * ```
 * [
 * {
 * "name": "cmdlist"
 * },
 * {
 * "name": "command1"
 * }
 * ]
 * ```
 * @return An object containing registered commands.
 */
declare function GetRegisteredCommands(): any;

declare function GetRelationshipBetweenGroups(
  group1: string | number,
  group2: string | number,
): number;

declare function GetRelationshipBetweenPeds(ped1: number, ped2: number): number;

declare function GetRenderingCam(): number;

declare function GetResourceByFindIndex(findIndex: number): string;

declare function GetResourceByFindIndex(findIndex: number): string;

declare function GetResourceKvpFloat(key: string): number;

/**
 * A getter for [SET_RESOURCE_KVP_FLOAT](#\_0x9ADD2938).
 * @param key The key to fetch
 * @return A float that contains the value stored in the Kvp or nil/null if none.
 */
declare function GetResourceKvpFloat(key: string): number;

/**
 * A getter for [SET_RESOURCE_KVP_INT](#\_0x6A2B1E8).
 * @param key The key to fetch
 * @return A int that contains the value stored in the Kvp or nil/null if none.
 */
declare function GetResourceKvpInt(key: string): number;

declare function GetResourceKvpInt(key: string): number;

/**
 * A getter for [SET_RESOURCE_KVP](#\_0x21C7A35B).
 * @param key The key to fetch
 * @return A string that contains the value stored in the Kvp or nil/null if none.
 */
declare function GetResourceKvpString(key: string): string;

declare function GetResourceKvpString(key: string): string;

/**
 * Gets the metadata value at a specified key/index from a resource's manifest.
 * See also: [Resource manifest](https://docs.fivem.net/resources/manifest/)
 * @param resourceName The resource name.
 * @param metadataKey The key in the resource manifest.
 * @param index The value index, in a range from [0..GET_NUM_RESOURCE_METDATA-1].
 */
declare function GetResourceMetadata(
  resourceName: string,
  metadataKey: string,
  index: number,
): string;

/**
 * Gets the metadata value at a specified key/index from a resource's manifest.
 * See also: [Resource manifest](https://docs.fivem.net/resources/manifest/)
 * @param resourceName The resource name.
 * @param metadataKey The key in the resource manifest.
 * @param index The value index, in a range from \[0..GET_NUM_RESOURCE_METDATA-1].
 */
declare function GetResourceMetadata(
  resourceName: string,
  metadataKey: string,
  index: number,
): string;

/**
 * Returns the current state of the specified resource.
 * @param resourceName The name of the resource.
 * @return The resource state. One of `"missing", "started", "starting", "stopped", "stopping", "uninitialized" or "unknown"`.
 */
declare function GetResourceState(resourceName: string): string;

/**
 * Returns the current state of the specified resource.
 * @param resourceName The name of the resource.
 * @return The resource state. One of `"missing", "started", "starting", "stopped", "stopping", "uninitialized" or "unknown"`.
 */
declare function GetResourceState(resourceName: string): string;

declare function GetRoomKeyFromEntity(entity: number): number;

/**
 * cpp
 * enum eRopeFlags
 * {
 * DrawShadowEnabled = 2,
 * Breakable = 4,
 * RopeUnwindingFront = 8,
 * RopeWinding = 32
 * }
 * @param rope The rope to get the flags for.
 * @return The rope's flags.
 */
declare function GetRopeFlags(rope: number): number;

declare function GetRopeLastVertexCoord(ropeId: number): number[];

declare function GetRopeLengthChangeRate(rope: number): number;

declare function GetRopeTimeMultiplier(rope: number): number;

declare function GetRopeUpdateOrder(rope: number): number;

declare function GetRopeVertexCoord(ropeId: number, vertex: number): number[];

declare function GetRopeVertexCount(ropeId: number): number;

declare function GetRotationOfVehicleRecordingAtTime(
  p0: number,
  p1: number,
  p2?: number,
): [number[], number];

/**
 * Gets the height of the specified runtime texture.
 * @param tex A handle to the runtime texture.
 * @return The height in pixels.
 */
declare function GetRuntimeTextureHeight(tex: number): number;

/**
 * Gets the height of the specified runtime texture.
 * @param tex A handle to the runtime texture.
 * @return The height in pixels.
 */
declare function GetRuntimeTextureHeight(tex: number): number;

/**
 * Gets the row pitch of the specified runtime texture, for use when creating data for `SET_RUNTIME_TEXTURE_ARGB_DATA`.
 * @param tex A handle to the runtime texture.
 * @return The row pitch in bytes.
 */
declare function GetRuntimeTexturePitch(tex: number): number;

/**
 * Gets the row pitch of the specified runtime texture, for use when creating data for `SET_RUNTIME_TEXTURE_ARGB_DATA`.
 * @param tex A handle to the runtime texture.
 * @return The row pitch in bytes.
 */
declare function GetRuntimeTexturePitch(tex: number): number;

/**
 * Gets the width of the specified runtime texture.
 * @param tex A handle to the runtime texture.
 * @return The width in pixels.
 */
declare function GetRuntimeTextureWidth(tex: number): number;

/**
 * Gets the width of the specified runtime texture.
 * @param tex A handle to the runtime texture.
 * @return The width in pixels.
 */
declare function GetRuntimeTextureWidth(tex: number): number;

declare function GetSafeCoordForPed(
  x: number,
  y: number,
  z: number,
  onGround: boolean,
  flags: number,
): [boolean, number[]];

declare function GetSafePickupCoords(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
): number[];

declare function GetScreenCoordFromWorldCoord(
  worldX: number,
  worldY: number,
  worldZ: number,
): [boolean, number, number];

declare function GetScreenResolution(): [number, number];

/**
 * 0 = invalid
 * 1 = CEntity
 * 2 = 0x2A72C62B
 * 3 = 0xE63A0D71
 * 4 = 0x9FDE1AC6
 * 5 = 0x6D766374
 * 6 = 0x27ACC35B
 * 7 = CScriptedCoverPoint
 * 8 = ptfxScriptInfo
 * 9 = CPed
 * 10 = CVehicle
 * 11 = CObject
 * 12 = CItemSet
 * 13 = 0x830B8272
 * @param handle :
 */
declare function GetScriptHandleType(handle: number): number;

declare function GetScriptTaskStatus(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function GetScriptTimeWithinFrameInMicroseconds(): number;

declare function GetScriptedCoverPointCoords(coverpoint: number): number[];

declare function GetSeatPedIsTryingToEnter(ped: number): number;

declare function GetSecondsSinceBaseYear(): number;

declare function GetSequenceProgress(ped: number): number;

declare function GetShapeTestResult(
  rayHandle: number,
): [number, any /* actually bool */, number[], number[], number];

declare function GetSnowLevel(): number;

declare function GetSoundId(): number;

declare function GetSpeciesTuningFloatParam(
  p0: string | number,
  p1: number,
  p2: number,
): number;

/**
 * Returns the value of a state bag key.
 * @return Value.
 */
declare function GetStateBagValue(bagName: string, key: string): any;

declare function GetStateOfRayfireMapObject(object: number): number;

declare function GetStatusOfTextureDownload(p0: number): number;

declare function GetSystemTime(): number;

declare function GetTaskMoveNetworkEvent(
  ped: number,
  eventName: string,
): boolean;

declare function GetTaskMoveNetworkState(ped: number): string;

declare function GetTemperatureAtCoords(
  x: number,
  y: number,
  z: number,
): number;

declare function GetTextSubstring(
  text: string,
  position: number,
  length: number,
): string;

declare function GetTimeDifference(timeA: number, timeB: number): number;

declare function GetTimeOffset(timeA: number, timeB: number): number;

declare function GetTimePositionInRecording(p0: number): number;

declare function GetTimecycleModifierIndex(): number;

declare function GetTimecycleTransitionModifierIndex(): number;

declare function GetTogglePausedRenderphasesStatus(): boolean;

declare function GetTotalScInboxIds(): number;

declare function GetTrainCarriage(train: number, trailerNumber: number): number;

declare function GetTrainCurrentTrackNode(train: number): number;

declare function GetTrainCurrentTrackNode(train: number): number;

/**
 * Gets the door count for the specified train.
 * @param train The train to obtain the door count for.
 * @return The door count.
 */
declare function GetTrainDoorCount(train: number): number;

/**
 * Gets the ratio that a door is open for on a train.
 * @param train The train to obtain the door ratio for.
 * @param doorIndex Zero-based door index.
 * @return A value between 0.0 (fully closed) and 1.0 (fully open).
 */
declare function GetTrainDoorOpenRatio(
  train: number,
  doorIndex: number,
): number;

declare function GetTvChannel(): number;

declare function GetUniqueIntForPlayer(player: number): number;

declare function GetVehicleAlarmTimeLeft(vehicle: number): number;

declare function GetVehicleAlarmTimeLeft(vehicle: number): number;

declare function GetVehicleBodyHealth(vehicle: number): number;

/**
 * A getter for [SET_VEHICLE_CHEAT_POWER_INCREASE](#\_0xB59E4BD37AE292DB).
 * @param vehicle The target vehicle.
 * @return Returns vehicle's cheat power increase modifier value.
 */
declare function GetVehicleCheatPowerIncrease(vehicle: number): number;

declare function GetVehicleClutch(vehicle: number): number;

declare function GetVehicleClutch(vehicle: number): number;

declare function GetVehicleCurrentAcceleration(vehicle: number): number;

declare function GetVehicleCurrentGear(vehicle: number): number;

declare function GetVehicleCurrentGear(vehicle: number): number;

declare function GetVehicleCurrentRpm(vehicle: number): number;

declare function GetVehicleCurrentRpm(vehicle: number): number;

declare function GetVehicleDashboardSpeed(vehicle: number): number;

declare function GetVehicleDashboardSpeed(vehicle: number): number;

declare function GetVehicleDoorLockStatus(vehicle: number): number;

declare function GetVehicleDoorsLockedForPlayer(
  vehicle: number,
  player: number,
): boolean;

/**
 * Gets a vehicle's multiplier used with a wheel's GET_VEHICLE_WHEEL_STEERING_ANGLE to determine the angle the wheel is rendered.
 */
declare function GetVehicleDrawnWheelAngleMult(vehicle: number): number;

declare function GetVehicleEngineHealth(vehicle: number): number;

declare function GetVehicleEngineTemperature(vehicle: number): number;

declare function GetVehicleEngineTemperature(vehicle: number): number;

declare function GetVehicleEstimatedMaxSpeed(vehicle: number): number;

declare function GetVehicleFuelLevel(vehicle: number): number;

declare function GetVehicleFuelLevel(vehicle: number): number;

declare function GetVehicleGravityAmount(vehicle: number): number;

declare function GetVehicleGravityAmount(vehicle: number): number;

declare function GetVehicleHandbrake(vehicle: number): boolean;

declare function GetVehicleHandbrake(vehicle: number): boolean;

/**
 * Returns the effective handling data of a vehicle as a floating-point value.
 * Example: `local fSteeringLock = GetVehicleHandlingFloat(vehicle, 'CHandlingData', 'fSteeringLock')`
 * @param vehicle The vehicle to obtain data for.
 * @param class_ The handling class to get. Only "CHandlingData" is supported at this time.
 * @param fieldName The field name to get. These match the keys in `handling.meta`.
 * @return A floating-point value.
 */
declare function GetVehicleHandlingFloat(
  vehicle: number,
  class_: string,
  fieldName: string,
): number;

/**
 * Returns the effective handling data of a vehicle as a floating-point value.
 * Example: `local fSteeringLock = GetVehicleHandlingFloat(vehicle, 'CHandlingData', 'fSteeringLock')`
 * @param vehicle The vehicle to obtain data for.
 * @param class_ The handling class to get. Only "CHandlingData" is supported at this time.
 * @param fieldName The field name to get. These match the keys in `handling.meta`.
 * @return A floating-point value.
 */
declare function GetVehicleHandlingFloat(
  vehicle: number,
  class_: string,
  fieldName: string,
): number;

/**
 * Returns the effective handling data of a vehicle as an integer value.
 * Example: `local modelFlags = GetVehicleHandlingInt(vehicle, 'CHandlingData', 'strModelFlags')`
 * @param vehicle The vehicle to obtain data for.
 * @param class_ The handling class to get. Only "CHandlingData" is supported at this time.
 * @param fieldName The field name to get. These match the keys in `handling.meta`.
 * @return An integer.
 */
declare function GetVehicleHandlingInt(
  vehicle: number,
  class_: string,
  fieldName: string,
): number;

/**
 * Returns the effective handling data of a vehicle as an integer value.
 * Example: `local modelFlags = GetVehicleHandlingInt(vehicle, 'CHandlingData', 'strModelFlags')`
 * @param vehicle The vehicle to obtain data for.
 * @param class_ The handling class to get. Only "CHandlingData" is supported at this time.
 * @param fieldName The field name to get. These match the keys in `handling.meta`.
 * @return An integer.
 */
declare function GetVehicleHandlingInt(
  vehicle: number,
  class_: string,
  fieldName: string,
): number;

/**
 * Returns the effective handling data of a vehicle as a vector value.
 * Example: `local inertiaMultiplier = GetVehicleHandlingVector(vehicle, 'CHandlingData', 'vecInertiaMultiplier')`
 * @param vehicle The vehicle to obtain data for.
 * @param class_ The handling class to get. Only "CHandlingData" is supported at this time.
 * @param fieldName The field name to get. These match the keys in `handling.meta`.
 * @return An integer.
 */
declare function GetVehicleHandlingVector(
  vehicle: number,
  class_: string,
  fieldName: string,
): number[];

/**
 * Returns the effective handling data of a vehicle as a vector value.
 * Example: `local inertiaMultiplier = GetVehicleHandlingVector(vehicle, 'CHandlingData', 'vecInertiaMultiplier')`
 * @param vehicle The vehicle to obtain data for.
 * @param class_ The handling class to get. Only "CHandlingData" is supported at this time.
 * @param fieldName The field name to get. These match the keys in `handling.meta`.
 * @return An integer.
 */
declare function GetVehicleHandlingVector(
  vehicle: number,
  class_: string,
  fieldName: string,
): number[];

declare function GetVehicleHighGear(vehicle: number): number;

declare function GetVehicleHighGear(vehicle: number): number;

declare function GetVehicleIndexFromEntityIndex(entity: number): number;

/**
 * Gets the vehicle indicator light state. 0 = off, 1 = left, 2 = right, 3 = both
 * @param vehicle
 * @return An integer.
 */
declare function GetVehicleIndicatorLights(vehicle: number): number;

/**
 * Gets the vehicle indicator light state. 0 = off, 1 = left, 2 = right, 3 = both
 * @return An integer.
 */
declare function GetVehicleIndicatorLights(vehicle: number): number;

declare function GetVehicleLightMultiplier(vehicle: number): number;

declare function GetVehicleMaxNumberOfPassengers(vehicle: number): number;

declare function GetVehicleModelNumberOfSeats(
  modelHash: string | number,
): number;

declare function GetVehicleNextGear(vehicle: number): number;

declare function GetVehicleNextGear(vehicle: number): number;

declare function GetVehicleNodeIsSwitchedOff(nodeID: number): boolean;

declare function GetVehicleNodePosition(nodeId: number): number[];

declare function GetVehicleNumberOfPassengers(vehicle: number): number;

declare function GetVehicleNumberOfWheels(vehicle: number): number;

declare function GetVehicleNumberOfWheels(vehicle: number): number;

declare function GetVehicleOilLevel(vehicle: number): number;

declare function GetVehicleOilLevel(vehicle: number): number;

declare function GetVehiclePedIsEntering(ped: number): number;

declare function GetVehiclePedIsIn(ped: number, lastVehicle: boolean): number;

declare function GetVehiclePedIsUsing(ped: number): number;

declare function GetVehiclePetrolTankHealth(vehicle: number): number;

declare function GetVehicleSteeringAngle(vehicle: number): number;

declare function GetVehicleSteeringAngle(vehicle: number): number;

declare function GetVehicleSteeringScale(vehicle: number): number;

declare function GetVehicleSteeringScale(vehicle: number): number;

declare function GetVehicleThrottleOffset(vehicle: number): number;
declare function GetVehicleCurrentAcceleration(vehicle: number): number;

/**
 * A getter for [MODIFY_VEHICLE_TOP_SPEED](#\_0x93A3996368C94158). Returns -1.0 if a modifier is not set.
 * @param vehicle The target vehicle.
 * @return Returns vehicle's modified top speed.
 */
declare function GetVehicleTopSpeedModifier(vehicle: number): number;

declare function GetVehicleTrailerVehicle(
  vehicle: number,
  trailer?: number,
): [boolean, number];

declare function GetVehicleTurboPressure(vehicle: number): number;

declare function GetVehicleTurboPressure(vehicle: number): number;

declare function GetVehicleWaypointPlaybackOverrideSpeed(p0: number): number;

declare function GetVehicleWaypointProgress(vehicle: number): number;

declare function GetVehicleWaypointTargetPoint(vehicle: number): number;

/**
 * Gets brake pressure of a wheel.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 * Normal values around 1.0f when braking.
 */
declare function GetVehicleWheelBrakePressure(
  vehicle: number,
  wheelIndex: number,
): number;

/**
 * Gets the flags of a wheel.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 * @return An unsigned int containing bit flags.
 */
declare function GetVehicleWheelFlags(
  vehicle: number,
  wheelIndex: number,
): number;

declare function GetVehicleWheelHealth(
  vehicle: number,
  wheelIndex: number,
): number;

declare function GetVehicleWheelHealth(
  vehicle: number,
  wheelIndex: number,
): number;

/**
 * Gets whether the wheel is powered.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 * This is a shortcut to a flag in GET_VEHICLE_WHEEL_FLAGS.
 */
declare function GetVehicleWheelIsPowered(
  vehicle: number,
  wheelIndex: number,
): boolean;

/**
 * Gets power being sent to a wheel.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 */
declare function GetVehicleWheelPower(
  vehicle: number,
  wheelIndex: number,
): number;

declare function GetVehicleWheelRimColliderSize(
  vehicle: number,
  wheelIndex: number,
): number;

/**
 * Gets the rotation speed of a wheel.
 * This is used internally to calcuate GET_VEHICLE_WHEEL_SPEED.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 * @return The angular velocity of the wheel.
 */
declare function GetVehicleWheelRotationSpeed(
  vehicle: number,
  wheelIndex: number,
): number;

/**
 * Returns vehicle's wheels' size (size is the same for all the wheels, cannot get/set specific wheel of vehicle).
 * Only works on non-default wheels (returns 0 in case of default wheels).
 * @param vehicle The vehicle to obtain data for.
 * @return Float representing size of the wheel (usually between 0.5 and 1.5)
 */
declare function GetVehicleWheelSize(vehicle: number): number;

/**
 * Gets speed of a wheel at the tyre.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 * @return An integer.
 */
declare function GetVehicleWheelSpeed(
  vehicle: number,
  wheelIndex: number,
): number;

/**
 * Gets speed of a wheel at the tyre.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 * @param vehicle
 * @param wheelIndex
 * @return An integer.
 */
declare function GetVehicleWheelSpeed(
  vehicle: number,
  wheelIndex: number,
): number;

/**
 * Gets steering angle of a wheel.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 * @return The steering angle of the wheel, with 0 being straight.
 */
declare function GetVehicleWheelSteeringAngle(
  vehicle: number,
  wheelIndex: number,
): number;

declare function GetVehicleWheelSurfaceMaterial(
  vehicle: number,
  wheelIndex: number,
): number;

/**
 * Gets the current suspension compression of a wheel.
 * Returns a positive value. 0 means the suspension is fully extended, the wheel is off the ground.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 * @return The current compression of the wheel's suspension.
 */
declare function GetVehicleWheelSuspensionCompression(
  vehicle: number,
  wheelIndex: number,
): number;

declare function GetVehicleWheelTireColliderSize(
  vehicle: number,
  wheelIndex: number,
): number;

declare function GetVehicleWheelTireColliderWidth(
  vehicle: number,
  wheelIndex: number,
): number;

/**
 * Gets the traction vector length of a wheel.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 */
declare function GetVehicleWheelTractionVectorLength(
  vehicle: number,
  wheelIndex: number,
): number;

/**
 * Returns vehicle's wheels' width (width is the same for all the wheels, cannot get/set specific wheel of vehicle).
 * Only works on non-default wheels (returns 0 in case of default wheels).
 * @param vehicle The vehicle to obtain data for.
 * @return Float representing width of the wheel (usually between 0.1 and 1.5)
 */
declare function GetVehicleWheelWidth(vehicle: number): number;

/**
 * Returns the offset of the specified wheel relative to the wheel's axle center.
 */
declare function GetVehicleWheelXOffset(
  vehicle: number,
  wheelIndex: number,
): number;

/**
 * Returns the offset of the specified wheel relative to the wheel's axle center.
 * @param vehicle
 * @param wheelIndex
 */
declare function GetVehicleWheelXOffset(
  vehicle: number,
  wheelIndex: number,
): number;

declare function GetVehicleWheelYRotation(
  vehicle: number,
  wheelIndex: number,
): number;
declare function GetVehicleWheelXrot(
  vehicle: number,
  wheelIndex: number,
): number;

declare function GetVehicleWheelYRotation(
  vehicle: number,
  wheelIndex: number,
): number;
declare function GetVehicleWheelXrot(
  vehicle: number,
  wheelIndex: number,
): number;

/**
 * List of known states:
 * ```
 * 1: Not wheeling.
 * 65: Vehicle is ready to do wheelie (burnouting).
 * 129: Vehicle is doing wheelie.
 * ```
 * @param vehicle Vehicle
 * @return Vehicle's current wheelie state.
 */
declare function GetVehicleWheelieState(vehicle: number): number;

/**
 * List of known states:
 * ```
 * 1: Not wheeling.
 * 65: Vehicle is ready to do wheelie (burnouting).
 * 129: Vehicle is doing wheelie.
 * ```
 * @param vehicle Vehicle
 * @return Vehicle's current wheelie state.
 */
declare function GetVehicleWheelieState(vehicle: number): number;

declare function GetWantedLevelRadius(player: number): number;

declare function GetWantedLevelThreshold(wantedLevel: number): number;

declare function GetWaterHeight(
  x: number,
  y: number,
  z: number,
  height?: number,
): [boolean, number];

declare function GetWaterHeightNoWaves(
  x: number,
  y: number,
  z: number,
  height?: number,
): [boolean, number];

declare function GetWaypointCoords(): number[];

declare function GetWaypointDistanceAlongRoute(p0: string, p1: number): number;

/**
 * A getter for [SET_WEAPON_ANIMATION_OVERRIDE](\_0x1055AC3A667F09D9).
 * @param ped The target ped.
 * @return The weapon animation override.
 */
declare function GetWeaponAnimationOverride(ped: number): number;

/**
 * A getter for `CWeaponAccuracyModifier` in a weapon component.
 * @param componentHash Weapon component name hash.
 * @return A weapon component accuracy modifier.
 */
declare function GetWeaponComponentAccuracyModifier(
  componentHash: string | number,
): number;

/**
 * A getter for `CameraHash` in a weapon scope component.
 * @param componentHash Weapon component name hash.
 * @return The hash of the scope camera.
 */
declare function GetWeaponComponentCameraHash(
  componentHash: string | number,
): number;

/**
 * A getter for `ClipSize` in a weapon component.
 * @param componentHash Weapon component name hash.
 * @return A weapon component clip size.
 */
declare function GetWeaponComponentClipSize(
  componentHash: string | number,
): number;

/**
 * A getter for `CWeaponDamageModifier` in a weapon component.
 * @param componentHash Weapon component name hash.
 * @return A weapon component damage modifier.
 */
declare function GetWeaponComponentDamageModifier(
  componentHash: string | number,
): number;

/**
 * A getter for `CWeaponFallOffModifier` damage modifier value in a weapon component.
 * @param componentHash Weapon component name hash.
 * @return A weapon component damage modifier.
 */
declare function GetWeaponComponentRangeDamageModifier(
  componentHash: string | number,
): number;

/**
 * A getter for `CWeaponFallOffModifier` range modifier value in a weapon component.
 * @param componentHash Weapon component name hash.
 * @return A weapon component range modifier.
 */
declare function GetWeaponComponentRangeModifier(
  componentHash: string | number,
): number;

/**
 * A getter for `ReticuleHash` in a weapon scope component.
 * @param componentHash Weapon component name hash.
 * @return The hash of the reticule camera.
 */
declare function GetWeaponComponentReticuleHash(
  componentHash: string | number,
): number;

/**
 * A getter for [\_SET_WEAPON_DAMAGE_MODIFIER](#\_0x4757F00BC6323CFE).
 * @param weaponHash Weapon name hash.
 * @return A weapon damage modifier.
 */
declare function GetWeaponDamageModifier(weaponHash: string | number): number;

declare function GetWeaponTypeFromPickupType(
  pickupHash: string | number,
): number;

declare function GetWeapontypeGroup(weaponHash: string | number): number;

/**
 * Gets the model hash from the weapon hash.
 * @param weaponHash :
 */
declare function GetWeapontypeModel(weaponHash: string | number): number;

declare function GetWeatherTypeTransition(): [number, number, number];

declare function GetWindDirection(): number[];

declare function GetWindSpeed(): number;

declare function GetWorldPositionOfEntityBone(
  entity: number,
  boneIndex: number,
): number[];

declare function GiveDelayedWeaponToPed(
  ped: number,
  weaponHash: string | number,
  p2: number,
  p3: boolean,
  p4: number,
): void;

declare function GiveWeaponToPed(ped: number): [boolean, number, number];

/**
 * Gives the ped the weapon. p7 is 0.5f, and p8 is 1.0f. p11 and p12 are both 0.
 * For a list of weapon groups, here is a weapons enum by Mooshe with all weapon-related hashes: https://pastebin.com/n72eW6zd
 * @param ped :
 * @param weaponHash :
 * @param ammoCount :
 * @param equipNow :
 * @param p4 :
 * @param weaponGroup :
 * @param p6 :
 * @param p7 :
 * @param p8 :
 * @param p9 :
 * @param p10 :
 * @param p11 :
 * @param p12 :
 */
declare function GiveWeaponToPed_2(
  ped: number,
  weaponHash: string | number,
  ammoCount: number,
  equipNow: boolean,
  p4: boolean,
  weaponGroup: number,
  p6: boolean,
  p7: number,
  p8: number,
  p9: number,
  p10: boolean,
  p11: number,
  p12: boolean,
): boolean;

declare function GoogleAnalyticsPopPage(pageName: string): void;

declare function GoogleAnalyticsPushPage(pageName: string): void;

declare function HasAnimDictLoaded(animDict: string): boolean;

declare function HasAnimEventFired(
  entity: number,
  actionHash: string | number,
): boolean;

declare function HasBulletImpactedInArea(
  x: number,
  y: number,
  z: number,
  p3: number,
  p4: boolean,
  p5: boolean,
): boolean;

declare function HasBulletImpactedInBox(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: boolean,
  p7: boolean,
): boolean;

declare function HasClipSetLoaded(clipSet: string): boolean;

declare function HasClosestObjectOfTypeBeenBroken(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  modelHash: string | number,
  p5: number,
): boolean;

declare function HasCollisionForModelLoaded(model: string | number): boolean;

declare function HasCollisionLoadedAroundEntity(entity: number): boolean;

declare function HasEntityAnimFinished(
  entity: number,
  animDict: string,
  animName: string,
  p3: number,
): boolean;

declare function HasEntityBeenDamagedByAnyObject(entity: number): boolean;

declare function HasEntityBeenDamagedByAnyPed(entity: number): boolean;

declare function HasEntityBeenDamagedByAnyVehicle(entity: number): boolean;

declare function HasEntityBeenDamagedByEntity(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): boolean;

declare function HasEntityClearLosToEntity(
  entity1: number,
  entity2: number,
  traceType: number,
): boolean;

declare function HasEntityClearLosToEntityInFront(
  p0: number,
  p1: number,
  p2: number,
): boolean;

declare function HasEntityCollidedWithAnything(entity: number): boolean;

declare function HasForceCleanupOccurred(cleanupFlags: number): boolean;

/**
 * Returns whether or not the specific minimap overlay has loaded.
 * @param id A minimap overlay ID.
 * @return A boolean indicating load status.
 */
declare function HasMinimapOverlayLoaded(id: number): boolean;

/**
 * Returns whether or not the specific minimap overlay has loaded.
 * @param id A minimap overlay ID.
 * @return A boolean indicating load status.
 */
declare function HasMinimapOverlayLoaded(id: number): boolean;

declare function HasModelLoaded(model: string | number): boolean;

declare function HasNamedPtfxAssetLoaded(fxNameHash: string | number): boolean;

declare function HasNetworkTimeStarted(): boolean;

declare function HasObjectBeenBroken(p0: number): boolean;

declare function HasPedGotWeapon(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): boolean;

declare function HasPickupBeenCollected(pickup: number): boolean;

declare function HasPlayerBeenSpottedInStolenVehicle(player: number): boolean;

declare function HasPlayerDamagedAtLeastOneNonAnimalPed(
  player: number,
): boolean;

declare function HasPlayerDamagedAtLeastOnePed(player: number): boolean;

declare function HasPlayerTeleportFinished(player: number): boolean;

declare function HasPtfxAssetLoaded(): boolean;

declare function HasScriptLoaded(scriptName: string): boolean;

declare function HasScriptWithNameHashLoaded(
  scriptHash: string | number,
): boolean;

declare function HasStreamedTextureDictLoaded(textureDict: string): boolean;

declare function HasVehicleAssetLoaded(vehicleAsset: number): boolean;

declare function HasVehicleRecordingBeenLoaded(
  p0: number,
  p1?: number,
): [boolean, number];

declare function HasWeaponGotWeaponComponent(
  weapon: number,
  addonHash: string | number,
): boolean;

declare function HideHudAndRadarThisFrame(): void;

declare function HideLoadingOnFadeThisFrame(): void;

declare function HidePedWeaponForScriptedCutscene(
  ped: number,
  toggle: boolean,
): void;

declare function HidePickupObject(pickupObject: number, toggle: boolean): void;

declare function IgnoreNextRestart(toggle: boolean): void;

declare function IntToParticipantindex(value: number): number;

declare function IntToPlayerindex(value: number): number;

/**
 * Note: the buffer should be exactly 32 bytes long
 * @param value :
 * @param format :
 * @param buffer :
 */
declare function IntToString(
  value: number,
  format: string,
  buffer: string,
): void;

declare function InvokeFunctionReference(
  referenceIdentity: string,
  argsSerialized: string,
  argsLength: number,
  retvalLength?: number,
): [string, number];

declare function InvokeFunctionReference(
  referenceIdentity: string,
  argsSerialized: string,
  argsLength: number,
  retvalLength?: number,
): [string, number];

declare function IsAceAllowed(object: string): boolean;

declare function IsAceAllowed(object: string): boolean;

declare function IsAmbientSpeechDisabled(ped: number): boolean;

declare function IsAmbientSpeechPlaying(ped: number): boolean;

declare function IsAnEntity(handle: number): boolean;

declare function IsAnimalVocalizationPlaying(pedHandle: number): boolean;

declare function IsAnyAppRunning(): number;

declare function IsAnyPedNearPoint(
  x: number,
  y: number,
  z: number,
  radius: number,
): boolean;

declare function IsAnyPedShootingInArea(
  x1: number,
  y1: number,
  z1: number,
  x2: number,
  y2: number,
  z2: number,
  p6: boolean,
  p7: boolean,
): boolean;

declare function IsAnySpeechPlaying(ped: number): boolean;

declare function IsAnyVehicleNearPoint(
  x: number,
  y: number,
  z: number,
  radius: number,
): boolean;

declare function IsAppActive(p0: number): number;

declare function IsAppRunning(p0: number): number;

declare function IsAudioSceneActive(scene: string): boolean;

/**
 * <!-- Native implemented by Disquse. 0xFFF65C63 -->
 * Returns true if the minimap is currently expanded. False if it's the normal minimap state.
 * Use [`IsBigmapFull`](#\_0x66EE14B2) to check if the full map is currently revealed on the minimap.
 * @return A bool indicating if the minimap is currently expanded or normal state.
 */
declare function IsBigmapActive(): boolean;

/**
 * <!-- Native implemented by Disquse. 0xFFF65C63 -->
 * Returns true if the minimap is currently expanded. False if it's the normal minimap state.
 * Use [`IsBigmapFull`](#_0x66EE14B2) to check if the full map is currently revealed on the minimap.
 * @return A bool indicating if the minimap is currently expanded or normal state.
 */
declare function IsBigmapActive(): boolean;

/**
 * <!-- Native implemented by Disquse. 0x66EE14B2 -->
 * @return Returns true if the full map is currently revealed on the minimap.
Use [`IsBigmapActive`](#\_0xFFF65C63) to check if the minimap is currently expanded or in it's normal state.
 */
declare function IsBigmapFull(): boolean;

/**
 * <!-- Native implemented by Disquse. 0x66EE14B2 -->
 * Returns true if the full map is currently revealed on the minimap.
 * Use [`IsBigmapActive`](#_0xFFF65C63) to check if the minimap is currently expanded or in it's normal state.
 * @return Returns true if the full map is currently revealed on the minimap.
 */
declare function IsBigmapFull(): boolean;

declare function IsBitSet(address: number, offset: number): boolean;

declare function IsBlipOnMinimap(blip: number): boolean;

declare function IsBulletInAngledArea(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: boolean,
): boolean;

declare function IsBulletInArea(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: boolean,
): boolean;

declare function IsBulletInBox(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: boolean,
): boolean;

declare function IsCamActive(cam: number): boolean;

declare function IsCamInterpolating(cam: number): boolean;

declare function IsCamRendering(cam: number): boolean;

declare function IsCamShaking(cam: number): boolean;

declare function IsCinematicCamRendering(): boolean;

declare function IsControlEnabled(
  padIndex: number,
  control: string | number,
): boolean;

declare function IsControlJustPressed(
  padIndex: number,
  control: string | number,
): boolean;

declare function IsControlJustReleased(
  padIndex: number,
  control: string | number,
): boolean;

declare function IsControlPressed(
  padIndex: number,
  control: string | number,
): boolean;

declare function IsControlReleased(
  padIndex: number,
  control: string | number,
): boolean;

declare function IsDamageTrackerActiveOnNetworkId(netID: number): boolean;

declare function IsDecalAlive(decal: number): boolean;

declare function IsDisabledControlJustPressed(
  padIndex: number,
  control: string | number,
): boolean;

declare function IsDisabledControlJustReleased(
  padIndex: number,
  control: string | number,
): boolean;

declare function IsDisabledControlPressed(
  padIndex: number,
  control: string | number,
): boolean;

declare function IsDlcPresent(dlcHash: string | number): boolean;

declare function IsDoorClosed(doorHash: string | number): boolean;

declare function IsDoorRegisteredWithSystem(doorHash: string | number): boolean;

declare function IsDrivebyTaskUnderneathDrivingTask(ped: number): boolean;

/**
 * Returns whether or not a browser is created for a specified DUI browser object.
 * @param duiObject The DUI browser handle.
 * @return A boolean indicating TRUE if the browser is created.
 */
declare function IsDuiAvailable(duiObject: number): boolean;

/**
 * Returns whether or not a browser is created for a specified DUI browser object.
 * @param duiObject The DUI browser handle.
 * @return A boolean indicating TRUE if the browser is created.
 */
declare function IsDuiAvailable(duiObject: number): boolean;

/**
 * Gets whether or not this is the CitizenFX server.
 * @return A boolean value.
 */
declare function IsDuplicityVersion(): boolean;

/**
 * Gets whether or not this is the CitizenFX server.
 * @return A boolean value.
 */
declare function IsDuplicityVersion(): boolean;

declare function IsDurangoVersion(): boolean;

declare function IsEntityAMissionEntity(entity: number): boolean;

declare function IsEntityAPed(entity: number): boolean;

declare function IsEntityAVehicle(entity: number): boolean;

declare function IsEntityAnObject(entity: number): boolean;

declare function IsEntityAtCoord(
  entity: number,
  xPos: number,
  yPos: number,
  zPos: number,
  xSize: number,
  ySize: number,
  zSize: number,
  p7: boolean,
  p8: boolean,
  p9: number,
): boolean;

declare function IsEntityAtEntity(
  entity1: number,
  entity2: number,
  xSize: number,
  ySize: number,
  zSize: number,
  p5: boolean,
  p6: boolean,
  p7: number,
): boolean;

declare function IsEntityAttached(entity: number): boolean;

declare function IsEntityAttachedToAnyObject(entity: number): boolean;

declare function IsEntityAttachedToAnyPed(entity: number): boolean;

declare function IsEntityAttachedToAnyVehicle(entity: number): boolean;

declare function IsEntityAttachedToEntity(_from: number, to: number): boolean;

declare function IsEntityDead(p0: number): boolean;

declare function IsEntityFocus(entity: number): boolean;

declare function IsEntityInAir(p0: number, p1: number): boolean;

declare function IsEntityInAngledArea(
  entity: number,
  originX: number,
  originY: number,
  originZ: number,
  edgeX: number,
  edgeY: number,
  edgeZ: number,
  angle: number,
  p8: boolean,
  p9: boolean,
  p10: number,
): boolean;

declare function IsEntityInArea(
  entity: number,
  x1: number,
  y1: number,
  z1: number,
  x2: number,
  y2: number,
  z2: number,
  p7: boolean,
  p8: boolean,
  p9: number,
): boolean;

declare function IsEntityInVolume(
  entity: number,
  volume: number,
  p2: boolean,
  p3: number,
): boolean;

declare function IsEntityInWater(entity: number): boolean;

declare function IsEntityOccluded(entity: number): boolean;

declare function IsEntityOnFire(entity: number): boolean;

declare function IsEntityOnScreen(entity: number): boolean;

declare function IsEntityPlayingAnim(
  entity: number,
  animDict: string,
  animName: string,
  taskFlag: number,
): boolean;

/**
 * A getter for [FREEZE_ENTITY_POSITION](#\_0x428CA6DBD1094446).
 * @param entity The entity to check for
 * @return Boolean stating if it is frozen or not.
 */
declare function IsEntityPositionFrozen(entity: number): boolean;

declare function IsEntityStatic(entity: number): boolean;

declare function IsEntityTouchingEntity(
  entity: number,
  targetEntity: number,
): boolean;

declare function IsEntityTouchingModel(
  entity: number,
  modelHash: string | number,
): boolean;

declare function IsEntityUpright(entity: number, angle: number): boolean;

declare function IsEntityUpsidedown(entity: number): boolean;

declare function IsEntityVisible(entity: number): boolean;

declare function IsEntityVisibleToScript(entity: number): boolean;

declare function IsEntityWaitingForWorldCollision(entity: number): boolean;

declare function IsExplosionActiveInArea(
  explosionType: number,
  x1: number,
  y1: number,
  z1: number,
  x2: number,
  y2: number,
  z2: number,
): boolean;

declare function IsExplosionInAngledArea(
  explosionType: number,
  x1: number,
  y1: number,
  z1: number,
  x2: number,
  y2: number,
  z2: number,
  angle: number,
): boolean;

declare function IsExplosionInArea(
  explosionType: number,
  x1: number,
  y1: number,
  z1: number,
  x2: number,
  y2: number,
  z2: number,
): boolean;

declare function IsExplosionInSphere(
  explosionType: number,
  x: number,
  y: number,
  z: number,
  radius: number,
): boolean;

declare function IsFirstPersonAimCamActive(): boolean;

declare function IsFlowBlockLoaded(p0: number): number;

declare function IsFollowVehicleCamActive(): boolean;

declare function IsGameplayCamLookingBehind(): boolean;

declare function IsGameplayCamRendering(): boolean;

declare function IsGameplayCamShaking(): boolean;

declare function IsGameplayHintActive(): boolean;

declare function IsHornActive(vehicle: number): boolean;

declare function IsHudHidden(): boolean;

declare function IsImapActive(imapHash: string | number): boolean;

declare function IsImapActive_2(imapHash: string | number): boolean;

declare function IsInItemset(itemset: number, p1: number): boolean;

declare function IsIncidentValid(incidentId: number): boolean;

declare function IsInputDisabled(padIndex: number): boolean;

declare function IsInteriorEntitySetActive(
  interior: number,
  entitySetName: string,
): boolean;

declare function IsInteriorReady(interior: number): boolean;

declare function IsInteriorRenderingDisabled(): boolean;

declare function IsInteriorScene(): boolean;

declare function IsItemsetValid(itemset: number): boolean;

/**
 * Same as GET_IS_LOADING_SCREEN_ACTIVE
 */
declare function IsLoadingScreenActive(): boolean;

declare function IsLookInverted(): boolean;

declare function IsMinigameInProgress(): boolean;

declare function IsModelAPed(model: string | number): boolean;

declare function IsModelAVehicle(model: string | number): boolean;

declare function IsModelInCdimage(model: string | number): boolean;

declare function IsModelValid(model: string | number): boolean;

declare function IsMountedWeaponTaskUnderneathDrivingTask(ped: number): boolean;

declare function IsMoveBlendRatioRunning(ped: number): boolean;

declare function IsMoveBlendRatioSprinting(ped: number): boolean;

declare function IsMoveBlendRatioStill(ped: number): boolean;

declare function IsMoveBlendRatioWalking(ped: number): boolean;

declare function IsMpGamerTagActive(gamerTagId: number): boolean;

declare function IsMultiplayerChatActive(): boolean;

declare function IsNamedRendertargetLinked(modelHash: string | number): boolean;

declare function IsNamedRendertargetRegistered(name: string): boolean;

declare function IsNavmeshLoadedInArea(
  x1: number,
  y1: number,
  z1: number,
  x2: number,
  y2: number,
  z2: number,
): boolean;

declare function IsNetworkIdOwnedByParticipant(netId: number): boolean;

/**
 * Checks if keyboard input is enabled during NUI focus using `SET_NUI_FOCUS_KEEP_INPUT`.
 * @return True or false.
 */
declare function IsNuiFocusKeepingInput(): boolean;

/**
 * Returns the current NUI focus state previously set with `SET_NUI_FOCUS`.
 * @return True or false.
 */
declare function IsNuiFocused(): boolean;

declare function IsObjectVisible(object: number): boolean;

declare function IsOrbisVersion(): boolean;

declare function IsPauseMenuActive(): boolean;

declare function IsPcVersion(): boolean;

declare function IsPedAPlayer(ped: number): boolean;

declare function IsPedActiveInScenario(p0: number, p1: number): boolean;

declare function IsPedAimingFromCover(ped: number): boolean;

declare function IsPedBeingArrested(ped: number): boolean;

declare function IsPedBeingJacked(ped: number): boolean;

declare function IsPedBeingStealthKilled(ped: number): boolean;

declare function IsPedBeingStunned(ped: number, p1: number): boolean;

declare function IsPedClimbing(ped: number): boolean;

declare function IsPedCuffed(ped: number): boolean;

declare function IsPedDeadOrDying(ped: number, p1: boolean): boolean;

declare function IsPedDefensiveAreaActive(ped: number, p1: boolean): boolean;

declare function IsPedDiving(ped: number): boolean;

declare function IsPedEvasiveDiving(
  ped: number,
  evadingEntity?: number,
): [boolean, number];

declare function IsPedFacingPed(
  ped: number,
  otherPed: number,
  angle: number,
): boolean;

declare function IsPedFalling(ped: number): boolean;

declare function IsPedFatallyInjured(ped: number): boolean;

declare function IsPedFleeing(ped: number): boolean;

declare function IsPedGettingIntoAVehicle(ped: number): boolean;

declare function IsPedGettingUp(ped: number): boolean;

declare function IsPedGoingIntoCover(ped: number): boolean;

declare function IsPedGroupMember(p0: number, p1: number, p2: number): boolean;

declare function IsPedHangingOnToVehicle(ped: number): boolean;

declare function IsPedHeadingTowardsPosition(
  ped: number,
  x: number,
  y: number,
  z: number,
  p4: number,
): boolean;

declare function IsPedHeadtrackingEntity(ped: number, entity: number): boolean;

declare function IsPedHeadtrackingPed(ped1: number, ped2: number): boolean;

declare function IsPedHuman(ped: number): boolean;

declare function IsPedInAnyBoat(ped: number): boolean;

declare function IsPedInAnyHeli(ped: number): boolean;

declare function IsPedInAnyPlane(ped: number): boolean;

declare function IsPedInAnyTaxi(ped: number): boolean;

declare function IsPedInAnyTrain(ped: number): boolean;

declare function IsPedInAnyVehicle(ped: number, atGetIn: boolean): boolean;

declare function IsPedInCombat(ped: number, target: number): boolean;

declare function IsPedInCover(p0: number, p1: number, p2: number): boolean;

declare function IsPedInCoverFacingLeft(ped: number): boolean;

declare function IsPedInCurrentConversation(
  p0: number,
  p1: number,
  p2: number,
): boolean;

declare function IsPedInFlyingVehicle(ped: number): boolean;

declare function IsPedInGroup(ped: number): boolean;

declare function IsPedInMeleeCombat(ped: number): boolean;

declare function IsPedInModel(ped: number, modelHash: string | number): boolean;

declare function IsPedInVehicle(
  ped: number,
  vehicle: number,
  atGetIn: boolean,
): boolean;

declare function IsPedInWrithe(ped: number): boolean;

declare function IsPedInjured(ped: number): boolean;

declare function IsPedJacking(ped: number): boolean;

declare function IsPedJumping(ped: number): boolean;

declare function IsPedMale(ped: number): boolean;

declare function IsPedModel(ped: number, modelHash: string | number): boolean;

declare function IsPedOnFoot(ped: number): boolean;

declare function IsPedOnMount(ped: number): boolean;

declare function IsPedOnSpecificVehicle(ped: number, vehicle: number): boolean;

declare function IsPedOnVehicle(p0: number, p1: number): boolean;

declare function IsPedOpeningADoor(ped: number): boolean;

declare function IsPedPerformingMeleeAction(
  p0: number,
  p1: number,
  p2: number,
): boolean;

declare function IsPedPlantingBomb(ped: number): boolean;

declare function IsPedProne(ped: number): boolean;

declare function IsPedRagdoll(ped: number): boolean;

declare function IsPedReloading(ped: number): boolean;

declare function IsPedRespondingToEvent(ped: number, event: number): boolean;

declare function IsPedRunning(ped: number): boolean;

declare function IsPedRunningMobilePhoneTask(ped: number): boolean;

declare function IsPedRunningRagdollTask(ped: number): boolean;

declare function IsPedShooting(ped: number): boolean;

declare function IsPedSittingInAnyVehicle(ped: number): boolean;

declare function IsPedSittingInVehicle(ped: number, vehicle: number): boolean;

declare function IsPedSprinting(ped: number): boolean;

declare function IsPedStill(ped: number): boolean;

declare function IsPedStopped(ped: number): boolean;

declare function IsPedSwimming(ped: number): boolean;

declare function IsPedSwimmingUnderWater(ped: number): boolean;

declare function IsPedUsingActionMode(ped: number): boolean;

declare function IsPedUsingAnyScenario(ped: number): boolean;

declare function IsPedVaulting(ped: number): boolean;

declare function IsPedWalking(ped: number): boolean;

declare function IsPedWeaponReadyToShoot(ped: number): boolean;

declare function IsPlaybackGoingOnForVehicle(vehicle: number): boolean;

declare function IsPlaybackUsingAiGoingOnForVehicle(vehicle: number): boolean;

declare function IsPlayerBeingArrested(
  player: number,
  atArresting: boolean,
): boolean;

declare function IsPlayerClimbing(player: number): boolean;

declare function IsPlayerControlOn(player: number): boolean;

declare function IsPlayerDead(player: number): boolean;

declare function IsPlayerFreeAiming(player: number): boolean;

declare function IsPlayerFreeAimingAtEntity(
  player: number,
  entity: number,
): boolean;

declare function IsPlayerPlaying(player: number): boolean;

declare function IsPlayerReadyForCutscene(player: number): boolean;

declare function IsPlayerRidingTrain(player: number): boolean;

declare function IsPlayerScriptControlOn(player: number): boolean;

declare function IsPlayerSwitchInProgress(): boolean;

declare function IsPlayerTargettingAnything(player: number): boolean;

declare function IsPlayerTargettingEntity(
  p0: number,
  p1: number,
  p2: number,
): boolean;

declare function IsPlayerTeleportActive(): boolean;

declare function IsPlayerWantedLevelGreater(
  player: number,
  wantedLevel: number,
): boolean;

declare function IsPointInAngledArea(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
  p10: boolean,
  p11: boolean,
): boolean;

declare function IsPointOnRoad(
  x: number,
  y: number,
  z: number,
  vehicle: number,
): boolean;

declare function IsPositionOccupied(
  x: number,
  y: number,
  z: number,
  range: number,
  p4: boolean,
  p5: boolean,
  p6: boolean,
  p7: boolean,
  p8: boolean,
  p9: number,
  p10: boolean,
): boolean;

declare function IsPrincipalAceAllowed(
  principal: string,
  object: string,
): boolean;

declare function IsPrincipalAceAllowed(
  principal: string,
  object: string,
): boolean;

declare function IsProjectileInArea(
  x1: number,
  y1: number,
  z1: number,
  x2: number,
  y2: number,
  z2: number,
  ownedByPlayer: boolean,
): boolean;

declare function IsProjectileTypeInAngledArea(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: boolean,
): boolean;

declare function IsProjectileTypeInArea(
  x1: number,
  y1: number,
  z1: number,
  x2: number,
  y2: number,
  z2: number,
  _type: number,
  p7: boolean,
): boolean;

declare function IsProjectileTypeInRadius(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: boolean,
): boolean;

declare function IsRadarHidden(): boolean;

declare function IsRadarPreferenceSwitchedOn(): boolean;

declare function IsScInboxValid(p0: number): boolean;

declare function IsScenarioGroupEnabled(scenarioGroup: string): boolean;

declare function IsScenarioGroupEnabledHash(
  scenarioGroup: string | number,
): boolean;

declare function IsScenarioOccupied(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: boolean,
): boolean;

declare function IsScenarioTypeEnabled(scenarioType: string): boolean;

declare function IsScreenFadedIn(): boolean;

declare function IsScreenFadedOut(): boolean;

declare function IsScreenFadingIn(): boolean;

declare function IsScreenFadingOut(): boolean;

declare function IsScriptedConversationLoaded(p0: number): boolean;

declare function IsScriptedSpeechPlaying(p0: number): boolean;

declare function IsSeatWarpOnly(vehicle: number, seatIndex: number): boolean;

declare function IsShockingEventInSphere(
  _type: number,
  x: number,
  y: number,
  z: number,
  radius: number,
): boolean;

declare function IsSphereVisible(
  x: number,
  y: number,
  z: number,
  radius: number,
): boolean;

declare function IsSphereVisibleToAnotherMachine(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): boolean;

declare function IsSphereVisibleToPlayer(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
): boolean;

declare function IsSrlLoaded(): boolean;

declare function IsStreamPlaying(p0: number): boolean;

/**
 * **Experimental**: This native may be altered or removed in future versions of CitizenFX without warning.
 * Returns whether an asynchronous streaming file registration completed.
 * @param registerAs The file name to check, for example `asset.ydr`.
 * @return Whether or not the streaming file has been registered.
 */
declare function IsStreamingFileReady(registerAs: string): boolean;

/**
 * **Experimental**: This native may be altered or removed in future versions of CitizenFX without warning.
 * Returns whether an asynchronous streaming file registration completed.
 * @param registerAs The file name to check, for example `asset.ydr`.
 * @return Whether or not the streaming file has been registered.
 */
declare function IsStreamingFileReady(registerAs: string): boolean;

declare function IsStringNull(_string: string): boolean;

declare function IsStringNullOrEmpty(_string: string): boolean;

declare function IsSystemUiBeingDisplayed(): boolean;

declare function IsTaskMoveNetworkActive(ped: number): boolean;

declare function IsTaskMoveNetworkReadyForTransition(ped: number): boolean;

declare function IsThisModelABoat(model: string | number): boolean;

declare function IsThisModelATrain(model: string | number): boolean;

declare function IsThreadActive(threadId: number, p1: boolean): boolean;

declare function IsTimeLessThan(timeA: number, timeB: number): boolean;

declare function IsTimeMoreThan(timeA: number, timeB: number): boolean;

declare function IsTrackedPedVisible(ped: number): boolean;

declare function IsTrackedPointVisible(point: number): boolean;

declare function IsTvPlaylistItemPlaying(
  videoCliphash: string | number,
): boolean;

declare function IsValidInterior(interior: number): boolean;

declare function IsVehicleAlarmSet(vehicle: number): boolean;

declare function IsVehicleAlarmSet(vehicle: number): boolean;

declare function IsVehicleDoorFullyOpen(
  vehicle: number,
  doorIndex: number,
): boolean;

declare function IsVehicleDriveable(
  p0: number,
  p1: number,
  p2: number,
): boolean;

declare function IsVehicleEngineStarting(vehicle: number): boolean;

declare function IsVehicleEngineStarting(vehicle: number): boolean;

declare function IsVehicleExtraTurnedOn(
  vehicle: number,
  extraId: number,
): boolean;

declare function IsVehicleInBurnout(vehicle: number): boolean;

declare function IsVehicleInteriorLightOn(vehicle: number): boolean;

declare function IsVehicleInteriorLightOn(vehicle: number): boolean;

declare function IsVehicleModel(
  vehicle: number,
  model: string | number,
): boolean;

declare function IsVehicleNeedsToBeHotwired(vehicle: number): boolean;

declare function IsVehicleNeedsToBeHotwired(vehicle: number): boolean;

declare function IsVehicleNodeIdValid(vehicleNodeId: number): boolean;

declare function IsVehicleOnAllWheels(vehicle: number): boolean;

declare function IsVehiclePreviouslyOwnedByPlayer(vehicle: number): boolean;

declare function IsVehiclePreviouslyOwnedByPlayer(vehicle: number): boolean;

declare function IsVehicleSeatFree(vehicle: number, seatIndex: number): boolean;

declare function IsVehicleStopped(vehicle: number): boolean;

declare function IsVehicleStuckTimerUp(
  vehicle: number,
  p1: number,
  p2: number,
): boolean;

declare function IsVehicleVisible(vehicle: number): boolean;

declare function IsVehicleWanted(vehicle: number): boolean;

declare function IsVehicleWanted(vehicle: number): boolean;

declare function IsWaypointActive(): boolean;

declare function IsWaypointPlaybackGoingOnForPed(
  p0: number,
  p1: number,
): boolean;

declare function IsWaypointPlaybackGoingOnForVehicle(
  p0: number,
  p1: number,
): boolean;

declare function IsWeaponValid(weaponHash: string | number): boolean;

declare function ItemDatabaseCanEquipItemOnCategory(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function ItemDatabaseCreateItemCollection(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function ItemDatabaseDoesItemHaveTag(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function ItemDatabaseFilloutAcquireCost(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function ItemDatabaseFilloutBuyAwardAcquireCosts(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): number;

declare function ItemDatabaseFilloutItemEffectsIdInfo(
  p0: number,
  p1: number,
): number;

declare function ItemDatabaseFilloutItemEffectsIds(
  p0: number,
  p1: number,
): number;

declare function ItemDatabaseFilloutItemInfo(p0: number, p1: number): number;

declare function ItemDatabaseFilloutModifier(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function ItemDatabaseFilloutPriceModifierByKey(
  p0: number,
  p1: number,
): number;

declare function ItemDatabaseFilloutSatchelData(p0: number, p1: number): number;

declare function ItemDatabaseFilloutSellPrice(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function ItemDatabaseFilloutTagData(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): number;

declare function ItemDatabaseFilloutUiData(p0: number, p1: number): number;

declare function ItemDatabaseGetAcquireCost(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function ItemDatabaseGetAcquireCostsCount(p0: number): number;

declare function ItemDatabaseGetBundleId(p0: number): number;

declare function ItemDatabaseGetBundleItemCount(p0: number, p1: number): number;

declare function ItemDatabaseGetBundleItemInfo(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): number;

declare function ItemDatabaseGetFitsSlotCount(p0: number): number;

declare function ItemDatabaseGetFitsSlotInfo(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function ItemDatabaseGetHasSlotCount(p0: number): number;

declare function ItemDatabaseGetHasSlotInfo(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function ItemDatabaseGetItemPriceModifiers(
  p0: number,
  p1: number,
): number;

declare function ItemDatabaseGetItemTagType(p0: number, p1: number): number;

declare function ItemDatabaseGetModifiedPrice(p0: number, p1: number): number;

declare function ItemDatabaseGetNumberOfModifiedPrices(p0: number): number;

declare function ItemDatabaseGetNumberOfModifiers(p0: number): number;

declare function ItemDatabaseGetShopInventoriesItemInfo(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function ItemDatabaseGetShopInventoriesItemInfoByKey(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function ItemDatabaseGetShopInventoriesItemsCount(p0: number): number;

declare function ItemDatabaseGetShopInventoriesRequirementGroupInfo(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): number;

declare function ItemDatabaseGetShopInventoriesRequirementInfo(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): number;

declare function ItemDatabaseGetShopLayoutInfo(p0: number, p1: number): number;

declare function ItemDatabaseGetShopLayoutMenuInfoById(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function ItemDatabaseGetShopLayoutMenuInfoByIndex(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): number;

declare function ItemDatabaseGetShopLayoutMenuPageKey(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): number;

declare function ItemDatabaseGetShopLayoutPageInfoByKey(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function ItemDatabaseGetShopLayoutPageItemKey(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
): number;

declare function ItemDatabaseGetShopLayoutRootMenuInfo(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function ItemDatabaseIsBuyAwardKeyValid(p0: number): number;

declare function ItemDatabaseIsIntrinsicItem(p0: number): number;

declare function ItemDatabaseIsKeyValid(p0: number, p1: number): number;

declare function ItemDatabaseIsOverpoweredItem(p0: number): number;

declare function ItemDatabaseIsShopKeyValid(p0: number): number;

declare function ItemDatabaseIsShopLayoutKeyValid(p0: number): number;

declare function ItemDatabaseLocalizationGetNumLabelTypes(p0: number): number;

declare function ItemDatabaseLocalizationGetNumValues(
  p0: number,
  p1: number,
): number;

declare function ItemDatabaseLocalizationGetType(
  p0: number,
  p1: number,
): number;

declare function ItemDatabaseLocalizationGetValue(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function JorunalClearAllProgress(): void;

declare function JorunalGetTextureWithLayout(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function JorunalMarkRead(p0: number): void;

declare function JournalCanWriteEntry(p0: number): number;

declare function JournalGetEntryAtIndex(p0: number): number;

declare function JournalGetEntryCount(): number;

declare function JournalGetEntryInfo(p0: number, p1: number): number;

declare function JournalGetGrimeAtIndex(p0: number): number;

declare function JournalWriteEntry(p0: number): void;

declare function KnockOffPedProp(
  ped: number,
  p1: boolean,
  p2: boolean,
  p3: boolean,
  p4: boolean,
): void;

declare function KnockPedOffVehicle(ped: number): void;

declare function LaunchAppByHash(p0: number): number;

declare function LaunchAppByHashWithEntry(p0: number, p1: number): number;

declare function LaunchAppWithEntry(p0: number, p1: number): number;

declare function LinkNamedRendertarget(modelHash: string | number): void;

declare function LoadAnimScene(animScene: number): void;

/**
 * Reads the contents of a text file in a specified resource.
 * If executed on the client, this file has to be included in `files` in the resource manifest.
 * Example: `local data = LoadResourceFile("devtools", "data.json")`
 * @param resourceName The resource name.
 * @param fileName The file in the resource.
 * @return The file contents
 */
declare function LoadResourceFile(
  resourceName: string,
  fileName: string,
): string;

/**
 * Reads the contents of a text file in a specified resource.
 * If executed on the client, this file has to be included in `files` in the resource manifest.
 * Example: `local data = LoadResourceFile("devtools", "data.json")`
 * @param resourceName The resource name.
 * @param fileName The file in the resource.
 * @return The file contents
 */
declare function LoadResourceFile(
  resourceName: string,
  fileName: string,
): string;

declare function LoadStream(streamName: string, soundSet: string): boolean;

declare function LocalizationGetSystemLanguage(): number;

declare function LocalizationGetUserLanguage(): number;

declare function LockMinimapAngle(angle: number): void;

declare function LogAddEntryHash(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
): void;

declare function LogAddOrUpdateObjective(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
): void;

declare function LogAddTotalTakeEntry(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): void;

declare function LogClearAllEntries(): void;

declare function LogClearCachedObjective(): void;

declare function LogClearHasDisplayedCachedObjective(): void;

declare function LogGetCachedObjective(): number;

declare function LogHasDisplayedCachedObjective(): number;

declare function LogIsEntryRegistered(p0: number, p1: number): number;

declare function LogMarkAllEntriesAvailability(p0: number, p1: number): void;

declare function LogMarkEntryAvailability(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function LogMarkMissionCompleted(p0: number): void;

declare function LogPostNotification(data: number): [number, number];

declare function LogPrintCachedObjective(): void;

declare function LogRemoveEntry(p0: number, p1: number): void;

declare function LogSetCachedObjective(p0: number): void;

declare function LogSetEntryBriefTexture(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function LogSetEntryIconTexture(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function LogSetEntryPinned(p0: number, p1: number, p2: number): void;

declare function LogSetHasDisplayedCachedObjective(): void;

declare function LogSetPendingDetailsId(p0: number, p1: number): number;

declare function LogSetTotalTakeSummary(p0: number, p1: number): void;

declare function LogUpdateEntrySubheader(
  p0: number,
  p1: number,
  p2: number,
): void;

declare function MarkObjectForDeletion(object: number): void;

declare function MinigameGetNextEvent(p0: number, p1: number): number;

declare function MinigameGetNextEventType(): number;

declare function MinigameIsConnectedToServer(p0: number): number;

declare function MinigameIsRequestPending(p0: number): number;

declare function MinigameLeaveTable(p0: number): number;

declare function MinigamePopNextEvent(): void;

declare function MinigameRequestSeatAtTable(data: number): [boolean, number];

declare function MissiondataGetHighScore(p0: number): number;

declare function MissiondataGetReplayState(p0: number): number;

declare function MissiondataSetHighScore(p0: number, p1: number): void;

declare function MissiondataSetRatingScores(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function ModifyVehicleTopSpeed(vehicle: number, value: number): void;

declare function MoneyDecrementCashBalance(amount: number): boolean;

declare function MoneyGetCashBalance(): number;

declare function MoneyIncrementCashBalance(amount: number, p1: number): boolean;

/**
 * Starts listening to the specified channel, when available.
 * @param channel A game voice channel ID.
 */
declare function MumbleAddVoiceChannelListen(channel: number): void;

/**
 * Adds the specified channel to the target list for the specified Mumble voice target ID.
 * @param targetId A Mumble voice target ID, ranging from 1..30 (inclusive).
 * @param channel A game voice channel ID.
 */
declare function MumbleAddVoiceTargetChannel(
  targetId: number,
  channel: number,
): void;

/**
 * Adds the specified player to the target list for the specified Mumble voice target ID.
 * @param targetId A Mumble voice target ID, ranging from 1..30 (inclusive).
 * @param player A game player index.
 */
declare function MumbleAddVoiceTargetPlayer(
  targetId: number,
  player: number,
): void;

/**
 * Adds the specified player to the target list for the specified Mumble voice target ID.
 * @param targetId A Mumble voice target ID, ranging from 1..30 (inclusive).
 * @param serverId The player's server id.
 */
declare function MumbleAddVoiceTargetPlayerByServerId(
  targetId: number,
  serverId: number,
): void;

declare function MumbleClearVoiceChannel(): void;

/**
 * Clears the target list for the specified Mumble voice target ID.
 * @param targetId A Mumble voice target ID, ranging from 1..30 (inclusive).
 */
declare function MumbleClearVoiceTarget(targetId: number): void;

/**
 * Clears channels from the target list for the specified Mumble voice target ID.
 * @param targetId A Mumble voice target ID, ranging from 1..30 (inclusive).
 */
declare function MumbleClearVoiceTargetChannels(targetId: number): void;

/**
 * Clears players from the target list for the specified Mumble voice target ID.
 * @param targetId A Mumble voice target ID, ranging from 1..30 (inclusive).
 */
declare function MumbleClearVoiceTargetPlayers(targetId: number): void;

declare function MumbleGetTalkerProximity(): number;

/**
 * Returns the mumble voice channel from a player's server id.
 * @param serverId The player's server id.
 * @return Int representing the identifier of the voice channel.
 */
declare function MumbleGetVoiceChannelFromServerId(serverId: number): number;

declare function MumbleIsActive(): boolean;

/**
 * This native will return true if the user succesfully connected to the voice server.
 * If the user disabled the voice-chat setting it will return false.
 * @return True if the player is connected to a mumble server.
 */
declare function MumbleIsConnected(): boolean;

declare function MumbleIsPlayerTalking(player: number): boolean;

/**
 * Stops listening to the specified channel.
 * @param channel A game voice channel ID.
 */
declare function MumbleRemoveVoiceChannelListen(channel: number): void;

/**
 * Removes the specified voice channel from the user's voice targets.
 * Performs the opposite operation of [MUMBLE_ADD_VOICE_TARGET_CHANNEL](#\_0x4D386C9E)
 * @param targetId A Mumble voice target ID, ranging from 1..30 (inclusive).
 * @param channel The game voice channel ID to remove from the target.
 */
declare function MumbleRemoveVoiceTargetChannel(
  targetId: number,
  channel: number,
): void;

/**
 * Removes the specified player from the user's voice targets.
 * Performs the opposite operation of [MUMBLE_ADD_VOICE_TARGET_PLAYER](#\_0x32C5355A)
 * @param targetId A Mumble voice target ID, ranging from 1..30 (inclusive).
 * @param player The player index to remove from the target.
 */
declare function MumbleRemoveVoiceTargetPlayer(
  targetId: number,
  player: number,
): void;

/**
 * Removes the specified player from the user's voice targets.
 * Performs the opposite operation of [MUMBLE_ADD_VOICE_TARGET_PLAYER_BY_SERVER_ID](#\_0x25F2B65F)
 * @param targetId A Mumble voice target ID, ranging from 1..30 (inclusive).
 * @param serverId The player's server id to remove from the target.
 */
declare function MumbleRemoveVoiceTargetPlayerByServerId(
  targetId: number,
  serverId: number,
): void;

declare function MumbleSetActive(state: boolean): void;

/**
 * Sets the current input distance. The player will be able to talk to other players within this distance.
 * @param distance The input distance.
 */
declare function MumbleSetAudioInputDistance(distance: number): void;

/**
 * Sets the current output distance. The player will be able to hear other players talking within this distance.
 * @param distance The output distance.
 */
declare function MumbleSetAudioOutputDistance(distance: number): void;

/**
 * Changes the Mumble server address to connect to, and reconnects to the new address.
 * @param address The address of the mumble server.
 * @param port The port of the mumble server.
 */
declare function MumbleSetServerAddress(address: string, port: number): void;

declare function MumbleSetTalkerProximity(value: number): void;

declare function MumbleSetVoiceChannel(channel: number): void;

/**
 * Sets the current Mumble voice target ID to broadcast voice to.
 * @param targetId A Mumble voice target ID, ranging from 1..30 (inclusive). 0 disables voice targets, and 31 is server loopback.
 */
declare function MumbleSetVoiceTarget(targetId: number): void;

/**
 * Overrides the output volume for a particular player on Mumble. This will also bypass 3D audio and distance calculations. -1.0 to reset the override.
 * Set to -1.0 to reset the Volume override.
 * @param player A game player index.
 * @param volume The volume, ranging from 0.0 to 1.0 (or above).
 */
declare function MumbleSetVolumeOverride(player: number, volume: number): void;

/**
 * Overrides the output volume for a particular player with the specified server id and player name on Mumble. This will also bypass 3D audio and distance calculations. -1.0 to reset the override.
 * @param serverId The player's server id.
 * @param volume The volume, ranging from 0.0 to 1.0 (or above).
 */
declare function MumbleSetVolumeOverrideByServerId(
  serverId: number,
  volume: number,
): void;

declare function N_0x00000000467f4caa(): number;

declare function N_0x0000000085488c49(): number;

declare function N_0x00000000eb2d93b3(): number;

declare function N_0x0000a8acdc2e1b6a(p0: number, p1: number): void;

declare function N_0x000fa7a4a8443af7(p0: number): void;

declare function N_0x002aac783ed323ed(p0: number, p1: number): void;

declare function N_0x002babe0b7d53136(p0: number): void;

declare function N_0x005e6f28dd7ed58d(p0: number, p1: number): number;

declare function N_0x0060b31968e60e41(p0: number): number;

declare function N_0x007aac783ed323ed(p0: number, p1: number, p2: number): void;

declare function N_0x007bd043587f7c82(p0: number): number;

declare function N_0x007ff852dcf49da4(p0: number): void;

declare function N_0x009cf9a29972c298(p0: number): void;

declare function N_0x00a15b94cba4f76f(p0: number): void;

declare function N_0x00b156afebcc5ae0(p0: number): void;

declare function N_0x00b380ff2df6ab7a(p0: number, p1: number): void;

declare function N_0x00ba333da05adc23(p0: number, p1: number): void;

declare function N_0x00bbf7ceae8c666a(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
): number;

declare function N_0x00db0bc05e3faa4e(p0: number, p1: number): void;

declare function N_0x00eb5a760638db55(p0: number, p1: number, p2: number): void;

declare function N_0x00ee08603eadee92(p0: number): void;

declare function N_0x00f611a794a3c36e(p0: number): void;

declare function N_0x00ffe0f85253c572(p0: number): number;

declare function N_0x0105fee8f9091255(p0: number, p1: number): number;

declare function N_0x012027c28f421f46(p0: number, p1: number): number;

declare function N_0x012701ed938b85de(p0: number, p1: number): void;

declare function N_0x0139637a3bff8b6d(p0: number, p1: number): number;

declare function N_0x013a7ba5015c1372(p0: number, p1: number): void;

declare function N_0x01708e8dd3ff8c65(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
): number;

declare function N_0x017492b2201e3428(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function N_0x018f30d762e62df8(p0: number, p1: number): number;

declare function N_0x01af8a3729231a43(p0: number): number;

declare function N_0x01b21b81865e2a1f(p0: number, p1: number): void;

declare function N_0x01b928ca2e198b01(p0: number): number;

declare function N_0x01f4d242765c6b24(p0: number): number;

declare function N_0x01f661bb9c71b465(p0: number, p1: number, p2: number): void;

declare function N_0x02389579a53c3276(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function N_0x024ec9b649111915(p0: number, p1: number): void;

declare function N_0x025a1b1fb03fbf61(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): number;

declare function N_0x025e98e317652cdd(p0: number): void;

declare function N_0x027cab2c3af27010(): void;

declare function N_0x0286617c8fc50a53(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function N_0x028e7b3bba0bd2fc(p0: number): void;

declare function N_0x028f76b6e78246eb(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function N_0x029884fb65821b07(p0: number): number;

declare function N_0x02aa2096fe00f3e1(p0: number, p1: number): number;

declare function N_0x02b21b6beedd83cc(p0: number, p1: number): number;

declare function N_0x02bcc0fe9eba3529(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): number;

declare function N_0x02c4c6c2900d84df(p0: number, p1: number): void;

declare function N_0x02e741e19e39628c(p0: number, p1: number): void;

declare function N_0x02e97ce283648cd9(p0: number): number;

declare function N_0x02ebbb3989b7e695(p0: number): number;

declare function N_0x0317c947d062854e(p0: number): number;

declare function N_0x032a14d082a9b269(p0: number): void;

declare function N_0x0335106f3acabbed(p0: number): number;

declare function N_0x033ee4b89f3ac545(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0x0348469daa17576c(p0: number): void;

declare function N_0x0349404a22736740(p0: number, p1: number, p2: number): void;

declare function N_0x0355fe37240e2c77(p0: number, p1: number): void;

declare function N_0x0358b8a41916c613(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): number;

declare function N_0x0365000d8bf86531(p0: number): number;

declare function N_0x0378c08504160d0d(p0: number): boolean;

declare function N_0x038b1f1674f0e242(p0: number): number;

declare function N_0x03b4b759a8990505(p0: number): number;

declare function N_0x03b61cd51097de60(p0: number): number;

declare function N_0x03c03abbabbef752(): number;

declare function N_0x03ddbf2d73799f9e(p0: number): void;

declare function N_0x04019ae4956d4393(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0x04084490cc302cfb(): void;

declare function N_0x040ee319efd1d3b5(): void;

declare function N_0x041d17a9e221ae30(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
): void;

declare function N_0x0455546f23ff08e4(p0: number): number;

declare function N_0x049d2196d9d11184(): boolean;

declare function N_0x049d5c615bd38bad(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0x04aa59ca40571c2e(p0: number, p1: number): number;

declare function N_0x04d1d4e411ce52d0(p0: number, p1: number): void;

declare function N_0x04d7f33640662fa2(p0: number): number;

declare function N_0x04f0579dbdd32f34(p0: number): void;

declare function N_0x0501d52d24ea8934(p0: number): number;

declare function N_0x0516fae561276efc(p0: number): number;

declare function N_0x052d4ac0922af91a(p0: number, p1: number): void;

declare function N_0x054473164c012699(p0: number): number;

declare function N_0x0552aa3ffc5b87aa(p0: number, p1: number): void;

declare function N_0x0556c784fa056628(p0: number, p1: number): number;

declare function N_0x0556e9d2ecf39d01(p0: number): number;

declare function N_0x057c4f092e2298be(p0: number, p1: number, p2: number): void;

declare function N_0x05a0100ea714db68(p0: number, p1: number): number;

declare function N_0x05ab44d906738426(): void;

declare function N_0x05ac9e1e02975afb(p0: number, p1: number, p2: number): void;

declare function N_0x05bd5e4088b30a66(p0: number, p1: number): void;

declare function N_0x05ce6af4df071d23(p0: number, p1: number): void;

declare function N_0x05d6195fb4d428f4(p0: number): number;

declare function N_0x05dd384f39de1c8c(p0: number, p1: number): number;

declare function N_0x0608326f7b98c08d(p0: number, p1: number): void;

declare function N_0x06087579e7aa85a9(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
): boolean;

declare function N_0x060bbad634c2b44b(): number;

declare function N_0x062b4a4a3396351d(p0: number): void;

declare function N_0x062d5ead4da2fa6a(): void;

declare function N_0x06557f6d96c86881(): void;

declare function N_0x065887b694359799(p0: number): void;

declare function N_0x065d03a9d6b2c6b5(p0: number, p1: number): void;

declare function N_0x066167c63111d8cf(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): void;

declare function N_0x069eddf1fd4deb0a(p0: number, p1: number): void;

declare function N_0x06a09a6e0c6d2a84(p0: number, p1: number): void;

declare function N_0x06a10b4d7f50b0c3(p0: number): number;

declare function N_0x06aade17334f7a40(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function N_0x06c0d8bb6b04a709(): number;

declare function N_0x06c5df5ee444bc6b(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): void;

declare function N_0x06d26a96ca1bca75(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function N_0x06e1fb78b1e59ca5(p0: number, p1: number): void;

declare function N_0x06fa94c835787c64(p0: number): number;

declare function N_0x070a3841406c43d5(p0: number, p1: number): void;

declare function N_0x071769bcb24379e5(): number;

declare function N_0x0730e518486deec3(p0: number): void;

declare function N_0x0751d461f06e41ce(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function N_0x07559b29950301ff(p0: number, p1: number): void;

declare function N_0x0760d6f70ebcc05c(p0: number): number;

declare function N_0x07706c4cc9c6cc9e(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): void;

declare function N_0x0772f87d7b07719a(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0x078076ab50fb117f(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
): number;

declare function N_0x078f77fd1a43eab3(p0: number, p1: number): void;

declare function N_0x0790473eee1977d3(p0: number): number;

declare function N_0x0794199b25e499e1(p0: number, p1: number): void;

declare function N_0x07954320d77f6a3d(p0: number): number;

declare function N_0x07a6f6447eca9b64(p0: number, p1: number): number;

declare function N_0x07ad9e43fd478527(p0: number, p1: number): boolean;

declare function N_0x07c0f87aac57f2e4(p0: number, p1: number): void;

declare function N_0x07e1c35f0078c3f9(p0: number, p1: number): number;

declare function N_0x07e2e21e799080a0(p0: number, p1: number): void;

declare function N_0x07e8b8b20570271c(p0: number): void;

declare function N_0x07ea5b053fa60ac7(p0: number, p1: number): void;

declare function N_0x07fb139b592fa687(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): boolean;

declare function N_0x0816c31480764ab0(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function N_0x082c043c7afc3747(p0: number, p1: number): void;

declare function N_0x083d497d57b7400f(p0: number): number;

declare function N_0x085c5b61a0114f32(p0: number, p1: number): void;

declare function N_0x086549f3b0381cb1(p0: number, p1: number): void;

declare function N_0x0869d499a7848309(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
): void;

declare function N_0x0876326238914a3f(): void;

declare function N_0x08797a8c03868cb8(p0: number): void;

declare function N_0x087d8f4bc65f68e4(p0: number): void;

declare function N_0x08892122769770d5(popZone: number, p1: boolean): void;

declare function N_0x08c5825a2932ea7b(p0: number): number;

declare function N_0x08e22898a6af4905(p0: number, p1: number): void;

declare function N_0x08fc896d2cb31fcc(p0: number, p1: number): number;

declare function N_0x08ff1099ed2e6e21(p0: number): number;

declare function N_0x09034479e6e3e269(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0x0909f71b5c070797(): number;

declare function N_0x09171a6f8fde5dc1(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): void;

declare function N_0x0918e3565c20f03c(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
): void;

declare function N_0x0939e773925c4719(): void;

declare function N_0x093a9d1f72df0d19(p0: number, p1: number): void;

declare function N_0x0943113e02322164(p0: number, p1: number): number;

declare function N_0x095c2277fed731db(p0: number): number;

declare function N_0x0961b089947ba6d0(p0: number): void;

declare function N_0x098036cab8373d36(p0: number): void;

declare function N_0x098caa6dbe7d8d82(p0: number, p1: number): void;

declare function N_0x09937eb0cebc2f9f(): number;

declare function N_0x099d4a855d53b03b(p0: number, p1: number, p2: number): void;

declare function N_0x09a1c7dfdce54fbc(p0: number): void;

declare function N_0x09b83e68de004cd4(p0: number): number;

declare function N_0x09c28f828ee674fa(p0: number, p1: number, p2: number): void;

declare function N_0x09c970ae59abf6b2(vehicle: number, p1: boolean): void;

declare function N_0x09d7afd3716da8e1(p0: number, p1: number): number;

declare function N_0x09e378c52b1433b5(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): void;

declare function N_0x09ee00b8f858e0be(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
): number;

declare function N_0x09fbf15d73efc900(): void;

declare function N_0x0a04a07bc3074edb(p0: number): void;

declare function N_0x0a2ab7b7abc055f4(p0: number): number;

declare function N_0x0a428058079ee65c(p0: number): void;

declare function N_0x0a4618ffd517e24d(p0: number, p1: number): void;

declare function N_0x0a487cc74a517fb5(p0: number): void;

declare function N_0x0a5a4f1979abb40e(p0: number): void;

declare function N_0x0a79c81c418f5d38(p0: number, p1: number): number;

declare function N_0x0a82317b7ebfc420(p0: number): number;

declare function N_0x0a8fd91ede7b328a(p0: number, p1: number): void;

declare function N_0x0a98a362c5a19a43(p0: number): number;

declare function N_0x0ada3ec589e1736e(): void;

declare function N_0x0ae241a4a9adeeec(p0: number): number;

declare function N_0x0b3a99ab6713aa52(p0: number): void;

declare function N_0x0b46e25761519058(p0: number, p1: number, p2: number): void;

declare function N_0x0b6009a90b8495f1(p0: number): number;

declare function N_0x0b6b4507ac5ea8b8(): number;

declare function N_0x0b6d275d2f242e17(p0: number, p1: number, p2: number): void;

declare function N_0x0b7803f6f7bb43e0(): number;

declare function N_0x0b7cb1300cbfe19c(p0: number, p1: number): number;

declare function N_0x0b9f7a01ec50448d(p0: number, p1: number): void;

declare function N_0x0ba4250d20007c2e(p0: number): number;

declare function N_0x0bb6de7d23c60626(p0: number): number;

declare function N_0x0bcd4091c8eaba42(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
): number;

declare function N_0x0bdfebcf40a5f7e3(p0: number): number;

declare function N_0x0bf3b3bd47d79c08(
  modelHash: string | number,
  p1: number,
): void;

declare function N_0x0bf90cbb6b72977b(): void;

declare function N_0x0bfa1bd465cdfefd(p0: number): void;

declare function N_0x0c093c1787f18519(p0: number, p1: number): number;

declare function N_0x0c0a373d181bf900(p0: number): void;

declare function N_0x0c31c51168e80365(p0: number): number;

declare function N_0x0c392db374655176(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): void;

declare function N_0x0c3cb2e600c8977d(p0: number, p1: number): number;

declare function N_0x0c3f0f7f92ca847c(p0: number, p1: number): void;

declare function N_0x0c6a00dae896614c(p0: number, p1: number): void;

declare function N_0x0c6b89876262a99d(p0: number, p1: number): void;

declare function N_0x0c718001b77ca468(p0: number, p1: number): void;

declare function N_0x0c7a2289a5c4d7c9(p0: number, p1: number): void;

declare function N_0x0c9dbf48c6ba6e4c(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): number;

declare function N_0x0cab404cd2db41f5(p0: number, p1: number): number;

declare function N_0x0cadc3a977997472(p0: number, p1: number): number;

declare function N_0x0cb16d05e03fb525(p0: number): void;

declare function N_0x0cb3d1919e8d7cba(p0: number): number;

declare function N_0x0cc28c08613ba9e5(p0: number): void;

declare function N_0x0cc36d4156006509(p0: number): number;

declare function N_0x0ccefc6c2c95da2a(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): number;

declare function N_0x0ccfe72b43c9cf96(p0: number): number;

declare function N_0x0cd7914d17a970ab(p0: number, p1: number): void;

declare function N_0x0ce8aafe9e433a23(p0: number): number;

declare function N_0x0ceeb6f4780b1f2f(p0: number, p1: number): number;

declare function N_0x0d0ae5081f88cfe1(p0: number): number;

declare function N_0x0d0db2b6af19a987(p0: number): void;

declare function N_0x0d322aef8878b8fe(p0: number, p1: number): void;

declare function N_0x0d3b1568917ebda0(p0: number, p1: number): number;

declare function N_0x0d497aa69059fe40(p0: number, p1: number): void;

declare function N_0x0d5fdf0d36fa10cd(p0: number): void;

declare function N_0x0d78e1097f89e637(p0: number): number;

declare function N_0x0d7fd6a55fd63aef(p0: number, p1: number, p2: number): void;

declare function N_0x0db41d59e0f1502b(p0: number): void;

declare function N_0x0dbaca9c38c9a686(p0: number): number;

declare function N_0x0dcec6a92e497e17(p0: number, p1: number): void;

declare function N_0x0dd051b1bf4b8bd6(p0: number): number;

declare function N_0x0de02da3c0f66955(p0: number, p1: number): void;

declare function N_0x0ded260a1958a82e(p0: number): number;

declare function N_0x0df57f86fe71dbe5(p0: number, p1: number): number;

declare function N_0x0e17378642156790(p0: number, p1: number): void;

declare function N_0x0e184495b27bb57d(): void;

declare function N_0x0e1db1f8f5b561dc(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
): void;

declare function N_0x0e2c3aee6ce603b7(): number;

declare function N_0x0e3a041ed6ac2b45(): number;

declare function N_0x0e3bdeed21beb945(p0: number, p1: number): void;

declare function N_0x0e3bf7ed4169ec43(p0: number): number;

declare function N_0x0e54d4da6018ff8e(): number;

declare function N_0x0e558d3a49d759d6(p0: number, p1: number): number;

declare function N_0x0e5c9fb9ed5dff1c(p0: number): number;

declare function N_0x0e6846476906c9dd(p0: number, p1: number): number;

declare function N_0x0e71c80fa4ec8147(p0: number, p1: number): void;

declare function N_0x0e9057a9da78d0f8(p0: number, p1: number): void;

declare function N_0x0e94c95ec3185fa9(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
): void;

declare function N_0x0e99e3bf11bb6367(p0: number): number;

declare function N_0x0e9e95fdedcc9d35(p0: number, p1: number, p2: number): void;

declare function N_0x0ea9eacba3b01601(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0x0eabf182fbb63d72(p0: number, p1: number, p2: number): void;

declare function N_0x0eaf918f751f27ba(p0: number): number;

declare function N_0x0eb78c2b156635b1(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
): number;

declare function N_0x0ee3f0d7feccc54f(): number;

declare function N_0x0eef7a81c17679db(p0: number): number;

declare function N_0x0f1861101c9a9944(popZone: number, p1: boolean): void;

declare function N_0x0f1cd8ca9e65d5f6(p0: number, p1: number): void;

declare function N_0x0f1ffef5d54ae832(): void;

declare function N_0x0f230de0ddbe3649(p0: number): number;

declare function N_0x0f2a2175734926d8(p0: number, p1: number): void;

declare function N_0x0f44a5c78d114922(p0: number): number;

declare function N_0x0f4eaf69da41af43(p0: number): number;

declare function N_0x0f4f6c4ce471259d(p0: number, p1: number): void;

declare function N_0x0f7f603bde08c4d3(p0: number): void;

declare function N_0x0f967019cc853bcc(p0: number, p1: number): void;

declare function N_0x0f99f6436528a089(p0: number): number;

declare function N_0x0f9cf06986300875(p0: number): void;

declare function N_0x0faf7171bf613b80(p0: number): void;

declare function N_0x0faf95d71ed67ade(p0: number, p1: number): void;

declare function N_0x0fb1ba7ff73b41e1(p0: number, p1: number, p2: number): void;

declare function N_0x0fbbffc891a97c81(p0: number): number;

declare function N_0x0fd07141ad048aae(p0: number, p1: number): number;

declare function N_0x0fd25587bb306c86(p0: number): number;

declare function N_0x0fd3ecf9d0c8655f(): number;

declare function N_0x0fd7d7c232876e72(p0: number): void;

declare function N_0x0fddee66e3465726(p0: number): number;

declare function N_0x0fe797dd9f70dfa6(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function N_0x0fee2561120f3333(p0: number): void;

declare function N_0x0ff421e467373fcf(p0: number): number;

declare function N_0x0ff7125f07deb84f(p0: number, p1: number): void;

declare function N_0x0ffdf937e5c11382(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
): void;

declare function N_0x100157d6d7fe32ca(p0: number, p1: number): number;

declare function N_0x10157bc3247ff3ba(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
): number;

declare function N_0x101b45c5f56d970f(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): number;

declare function N_0x101f538c25abb39a(p0: number, p1: number): number;

declare function N_0x10342cc82e8356e9(p0: number, p1: number): number;

declare function N_0x103c2f885abeb00b(p0: number, p1: number): number;

declare function N_0x104080ca9e519b00(p0: number, p1: number): number;

declare function N_0x104d9a7b1c0d0783(p0: number, p1: number): void;

declare function N_0x106a811c6d3035f3(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function N_0x107f2a66e1c4c83a(p0: number): void;

declare function N_0x10827b5a0aac56a7(p0: number, p1: number, p2: number): void;

declare function N_0x1096603b519c905f(p0: number): void;

declare function N_0x1098cda477890165(p0: number, p1: number): void;

declare function N_0x10adfdf07b7dffba(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0x10c1767b93257480(p0: number, p1: number, p2: number): void;

declare function N_0x10c44f633e2d6d9e(p0: number): void;

declare function N_0x10c70a515bc03707(p0: number): number;

declare function N_0x10daa76cb8a201a1(p0: number): void;

declare function N_0x10f96086123b939f(p0: number, p1: number, p2: number): void;

declare function N_0x1121b07088ed3013(p0: number): number;

declare function N_0x112bca290d2eb53c(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
): number;

declare function N_0x112ddf56300bc6e5(p0: number): number;

declare function N_0x113857d66a9cabe6(p0: number): number;

declare function N_0x113ef458ab6cda67(p0: number, p1: number): void;

declare function N_0x1148f706cf4ebdda(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0x1180a2974d251b7b(p0: number): number;

declare function N_0x11820d1ae80dea39(p0: number, p1: number): number;

declare function N_0x118873dd538490b4(p0: number, p1: number): void;

declare function N_0x118d476a6f1a13f1(p0: number): number;

declare function N_0x11986b05885564d2(p0: number): void;

declare function N_0x119a5714578f4e05(p0: number, p1: number): void;

declare function N_0x11a7ff918ef6bc66(p0: number, p1: number): void;

declare function N_0x11b0a0b282fa9b10(p0: number): void;

declare function N_0x11c7ce1ae38911b5(p0: number): number;

declare function N_0x11cd066f54da0133(p0: number): number;

declare function N_0x11cdabdc7783b2bc(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function N_0x11e73195e735b25b(p0: number): number;

declare function N_0x11ea52cad1b55910(): boolean;

declare function N_0x11f32bb61b756732(p0: number, p1: number): void;

declare function N_0x120376c23f019c6c(p0: number, p1: number): number;

declare function N_0x1204eb53a5fbc63d(): number;

declare function N_0x121d2005dd64496b(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0x1240e8596a8308b9(p0: number, p1: number): void;

declare function N_0x1252c029fc8ebb4d(): number;

declare function N_0x126cbebba46693cf(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0x12769eeb8dbd7a7b(): void;

declare function N_0x128fc3a893bf853a(p0: number): void;

declare function N_0x1298b3d8e4c2409f(p0: number): void;

declare function N_0x12990818c1d35886(p0: number, p1: number, p2: number): void;

declare function N_0x12aeb56b489415c5(): number;

declare function N_0x12e09e278c6c29b7(p0: number): void;

declare function N_0x12e981d53b07bf48(p0: number): number;

declare function N_0x12eb4e31f092c9b3(p0: number): number;

declare function N_0x12f2d161bf4031fc(p0: number, p1: number): void;

declare function N_0x12f6c6ed3eff42de(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function N_0x12fb95fe3d579238(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
): void;

declare function N_0x12fcaa23f2320422(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
  p10: number,
): void;

declare function N_0x13154a76ce0cf9ab(p0: number, p1: number): number;

declare function N_0x131e294ef60160df(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
): void;

declare function N_0x131ec9247e7a2903(p0: number): number;

declare function N_0x13430d3d5a45f14b(p0: number): number;

declare function N_0x134775b093ad5c38(p0: number): number;

declare function N_0x1359c181bc625503(): number;

declare function N_0x137772000daf42c5(p0: number): number;

declare function N_0x138398153824e332(): void;

declare function N_0x138adb94f8b90616(): void;

declare function N_0x1392105da88bbffb(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): void;

declare function N_0x139805c2a67c4795(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
): void;

declare function N_0x139efb0a71dd9011(): number;

declare function N_0x13a1b061007c906b(p0: number): number;

declare function N_0x13a210949fcbd92b(p0: number, p1: number): void;

declare function N_0x13aaecda43318bfe(p0: number, p1: number): number;

declare function N_0x13c190302369308b(p0: number): number;

declare function N_0x13d234a2a3f66e63(p0: number): number;

declare function N_0x13e7320c762f0477(p0: number): void;

declare function N_0x13eb275bf81636d1(p0: number, p1: number): void;

declare function N_0x13f138225c202f66(p0: number, p1: number): void;

declare function N_0x13f592fc3bf0ea84(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): void;

declare function N_0x1407f5115fb9583e(p0: number, p1: number): number;

declare function N_0x140b3cb1d424a945(p0: number, p1: number): void;

declare function N_0x1413b6bf27ab7a95(): number;

declare function N_0x14169fa823679e41(p0: number): number;

declare function N_0x141bc64c8d7c5529(p0: number): void;

declare function N_0x1431540bca1a1bd2(): number;

declare function N_0x1460b644397453eb(): void;

declare function N_0x1461df6db886be3f(p0: number): void;

declare function N_0x148e7ac8141c9e64(p0: number): number;

declare function N_0x149a2751ab66ac02(p0: number): number;

declare function N_0x149aee66f0cb3a99(p0: number, p1: number): void;

declare function N_0x14c4a49e36c29e49(): number;

declare function N_0x14d29bb12d47f68c(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): void;

declare function N_0x14da8c4bc2ccd90a(p0: number): number;

declare function N_0x14e57f88ba0a07fc(p0: number): void;

declare function N_0x14ff0c2545527f9b(p0: number, p1: number, p2: number): void;

declare function N_0x1520626ffafffa8f(p0: number, p1: number): void;

declare function N_0x15206e88ff7617df(p0: number, p1: number): void;

declare function N_0x152664aa3188b193(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
): number;

declare function N_0x152ed1b56e8f1f50(p0: number, p1: number): number;

declare function N_0x154340e87d8cc178(p0: number): void;

declare function N_0x154b7e841ac7412f(p0: number, p1: number): void;

declare function N_0x15598cfb25f3dc7e(p0: number, p1: number, p2: number): void;

declare function N_0x155b2fbe72d7d1d0(p0: number): number;

declare function N_0x157d8f3de12b307f(p0: number, p1: number): void;

declare function N_0x159ef5b6edce00e8(p0: number, p1: number): number;

declare function N_0x15abd5004cad2d99(p0: number): void;

declare function N_0x15b0cc1b36f1de29(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function N_0x15e90b6a993017aa(): number;

declare function N_0x15f4732c357b1d6d(p0: number, p1: number, p2: number): void;

declare function N_0x160825dadf1b04b3(): void;

declare function N_0x160921255327c591(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function N_0x160c1b5ab48ab87c(p0: number, p1: number): void;

declare function N_0x160f0ce6d76a39c9(): number;

declare function N_0x162c23ca83ed0a62(p0: number): boolean;

declare function N_0x1632eb9386cdbe64(p0: number, p1: number): void;

declare function N_0x164cecc59e70df86(p0: number, p1: number): number;

declare function N_0x165be2001e5e4b75(p0: number): void;

declare function N_0x16752daa7e6d3f72(player: number): void;

declare function N_0x16802c32b2fca06b(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function N_0x16908e859c3ab698(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): void;

declare function N_0x1694a053dfb61a34(p0: string): void;

declare function N_0x16b23d4f7a1f50d9(p0: number, p1: number, p2: number): void;

declare function N_0x16b86a49e072aa85(): void;

declare function N_0x16d3d49902f697bb(): boolean;

declare function N_0x16d9841a85fa627e(p0: number, p1: number): void;

declare function N_0x16e9abdd34ddd931(): void;

declare function N_0x16efb123c4451032(p0: number, p1: number): number;

declare function N_0x16f2c8c084ab2092(p0: number): number;

declare function N_0x16f47d434b6086bf(p0: number, p1: number): number;

declare function N_0x16f798a05bb9e3b5(p0: number): void;

declare function N_0x1710bc33cfb83634(p0: number): void;

declare function N_0x171c18e994c1a395(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): void;

declare function N_0x1726963e6049db53(p0: number): void;

declare function N_0x172e9dd35858dcd7(p0: number): void;

declare function N_0x1740e3dee0ae4d27(p0: number, p1: number): void;

declare function N_0x17721003a66c72bf(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0x179a6f0ee2e79026(p0: number): number;

declare function N_0x17e3e5c46eccd308(p0: number, p1: number, p2: number): void;

declare function N_0x18013392501ce5dc(p0: number): number;

declare function N_0x1811a02277a9e49d(): number;

declare function N_0x18262cafebb5fbe1(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
): void;

declare function N_0x183672fe838a661b(p0: number): void;

declare function N_0x183c0b6cfeffcae4(p0: number): number;

declare function N_0x183ce355115b6e75(p0: number, p1: number): void;

declare function N_0x1840f3b30ed0105f(p0: number): number;

declare function N_0x1854217c640b39ec(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
): void;

declare function N_0x186608a2ac6f9e88(p0: number, p1: number): void;

declare function N_0x18675bc914891122(p0: number): number[];

declare function N_0x18714953cced17d3(p0: number): number;

declare function N_0x187d65f3aec5d679(p0: number, p1: number): void;

declare function N_0x188313616d184213(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): number;

declare function N_0x188736456d1dede6(p0: number, p1: number): number;

declare function N_0x188b748861b5ba17(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0x188f8071f244b9b8(p0: number, p1: number): void;

declare function N_0x189739a7631c1867(): number;

declare function N_0x18a0d48df9211c07(): void;

declare function N_0x18b94666cf610aeb(): number;

declare function N_0x18c3dfac458783bb(): void;

declare function N_0x18d6869fbffec0f8(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): number;

declare function N_0x18e93ebfc1fcfa48(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0x18fc740ffdcd7454(): number;

declare function N_0x18ff3110cf47115d(p0: number, p1: number, p2: number): void;

declare function N_0x1902c4cfcc5be57c(p0: number, p1: number): void;

declare function N_0x190f7da1ac09a8ef(): number;

declare function N_0x19173c3f15367b54(p0: number, p1: number, p2: number): void;

declare function N_0x1919d59e60fd516e(p0: number, p1: number, p2: number): void;

declare function N_0x1948bbe561a2375a(p0: number): number;

declare function N_0x194d877fc5597b7d(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function N_0x196d3acbeba4a44b(p0: number): void;

declare function N_0x19870c40c7ee15be(p0: number, p1: number): number;

declare function N_0x198b85cc3c7a4593(p0: number, p1: number): number;

declare function N_0x19a6be7d9c6884d3(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): number;

declare function N_0x19abcc581d28e6f9(p0: number): void;

declare function N_0x19b14e04b009e28b(p0: number, p1: number): void;

declare function N_0x19b2c7a6c34fad54(p0: number, p1: number): number;

declare function N_0x19b4f71703902238(p0: number): void;

declare function N_0x19b52c20b5c4757c(): void;

declare function N_0x19bc99c678fba139(p0: number, p1: number, p2: number): void;

declare function N_0x19c7567d2f2287d6(p0: number, p1: number): number;

declare function N_0x19c975b81be53c28(p0: number, p1: number): void;

declare function N_0x19f70c4d80494ff8(p0: number, p1: number, p2: number): void;

declare function N_0x1a47699e8d533e8f(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function N_0x1a51bfe60708e482(p0: number): number;

declare function N_0x1a52076d26e09004(p0: number, p1: number): void;

declare function N_0x1a5c5d350068a673(p0: number, p1: number): void;

declare function N_0x1a6e84f13c952094(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0x1a7a802b2301edc0(p0: number): void;

declare function N_0x1a7d63cb1b0bb223(p0: number): void;

declare function N_0x1a861f899ebbe17c(p0: number, p1: number): void;

declare function N_0x1a9f09ab458d49c6(p0: number): void;

declare function N_0x1ac5a8ab50cfaa33(p0: number): number;

declare function N_0x1ad896bf43619551(): void;

declare function N_0x1ad922ab5038def3(p0: number): void;

declare function N_0x1af5e28e64a76a9f(): number;

declare function N_0x1b065a2bf7953815(p0: number): number;

declare function N_0x1b3c2d961f5fc0e1(p0: number): void;

declare function N_0x1b70811d3bf75db9(p0: number, p1: number): void;

declare function N_0x1b83c0deebcbb214(p0: number): void;

declare function N_0x1b89bc43b6e69107(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): number;

declare function N_0x1b8f3ce5a6001298(cam: number, p1: boolean): void;

declare function N_0x1bb50cd340a996e6(): number;

declare function N_0x1bc47a9dedc8df5d(p0: number, p1: number): void;

declare function N_0x1bdb56db258f052d(): number;

declare function N_0x1bdb5a07307f6929(p0: number, p1: number): void;

declare function N_0x1be19185b8afe299(p0: number): number;

declare function N_0x1bf9d36a5eaffbae(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0x1bfbafcc6760ff02(p0: number, p1: number): void;

declare function N_0x1c38c3577901af1f(): void;

declare function N_0x1c5d33a4293e6dde(p0: number, p1: number): number;

declare function N_0x1c5eb3c27f7508cb(p0: number, p1: number): void;

declare function N_0x1c6306e5bc25c29c(): void;

declare function N_0x1c65cc931c0f946f(p0: number, p1: number, p2: number): void;

declare function N_0x1ce875505d45338a(p0: number, p1: number, p2: number): void;

declare function N_0x1cfb749ad4317bde(): void;

declare function N_0x1d125814ebc517eb(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function N_0x1d1b448d719415ab(p0: number): number;

declare function N_0x1d23d3f70606d788(p0: number, p1: number): void;

declare function N_0x1d256eed194f5b58(p0: number): void;

declare function N_0x1d4636c90bbefacb(p0: number, p1: number): void;

declare function N_0x1d46b417f926d34d(p0: number): number;

declare function N_0x1d491ccf7211fb74(p0: number): number;

declare function N_0x1d77b47afa584e90(p0: number, p1: number, p2: number): void;

declare function N_0x1d97da8acb5d2582(p0: number, p1: number): void;

declare function N_0x1d9f72dd4fd9a9d7(p0: number): void;

declare function N_0x1da5c5b0923e1b85(p0: number): number;

declare function N_0x1da6cb02071055d5(p0: number): number[];

declare function N_0x1db9d61e505ae3fc(): number;

declare function N_0x1dd95a8d6b24a0c9(p0: boolean): void;

declare function N_0x1e017404784aa6a3(p0: number, p1: number): number;

declare function N_0x1e5b70e53db661e5(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
): void;

declare function N_0x1e6f9a9fe1a99f36(p0: number): void;

declare function N_0x1e7384ab5d4f4581(p0: number): number;

declare function N_0x1e804ea9b12030a4(p0: number, p1: number): number;

declare function N_0x1e8099f449abb0ba(p0: number): number;

declare function N_0x1e8a921112891651(p0: number): number[];

declare function N_0x1ea716e0628a6f44(p0: number, p1: number): void;

declare function N_0x1ecc76792f661cf5(p0: number): number;

declare function N_0x1ecf56c040fd839c(p0: number, p1: number): void;

declare function N_0x1ed8588524ac9be1(p0: number, p1: number, p2: number): void;

declare function N_0x1ef36558fbde2daa(vehicle: number): void;

declare function N_0x1f0e3a4434565f8f(p0: number, p1: number): void;

declare function N_0x1f0e401031e20146(p0: number, p1: number): number;

declare function N_0x1f11702ddbd915c6(p0: number, p1: number): number;

declare function N_0x1f1dd794908c2bfa(p0: number): number[];

declare function N_0x1f1fabfe9b2a1254(p0: number, p1: number): void;

declare function N_0x1f298c7bd30d1240(p0: number): void;

declare function N_0x1f44b7e283c09ede(p0: number, p1: number, p2: number): void;

declare function N_0x1f488807bc8e0630(p0: number): void;

declare function N_0x1f51f367b710a832(): number;

declare function N_0x1f56fb3fdb4eaf65(p0: number): number;

declare function N_0x1f5e07e14a86fafc(p0: number): void;

declare function N_0x1f6ebd94680252ce(p0: number, p1: number): void;

declare function N_0x1f714e7a9dadfc42(p0: number): number;

declare function N_0x1f7977c9101f807f(p0: number): number;

declare function N_0x1f7a9a9c38c13a56(p0: number): number;

declare function N_0x1f8215d0e446f593(p0: number, p1: number, p2: number): void;

declare function N_0x1f9a64c2804b3471(p0: number): void;

declare function N_0x1fa132cbcd7cb239(p0: number, p1: number): void;

declare function N_0x1fbf7f5ba7e4be3a(p0: number): void;

declare function N_0x1fc6c727d30ffdde(p0: number): void;

declare function N_0x1fc92bdba1106bd2(p0: number, p1: number): void;

declare function N_0x1fda57e8908f2609(p0: number, p1: number, p2: number): void;

declare function N_0x1ff00db43026b12f(): void;

declare function N_0x1ff441d7954f8709(p0: number): number;

declare function N_0x1ff8731be1dfc0c0(p0: number, p1: number): void;

declare function N_0x200114e99552462b(p0: number, p1: number, p2: number): void;

declare function N_0x2001687f9562fd9d(p0: number): void;

declare function N_0x200373a8df081f22(p0: number, p1: number): number;

declare function N_0x2009f8ab7a5e9d6d(p0: number): number;

declare function N_0x20135af9c10d2a3d(p0: number): number;

declare function N_0x201b8ed4ff7fe9f5(p0: number): void;

declare function N_0x2024f4f333095fb1(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0x20389408f0e93b9a(): number;

declare function N_0x203beffdbe12e96a(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
): void;

declare function N_0x2045429505158d1a(p0: number): number;

declare function N_0x2056ab38df06825c(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): void;

declare function N_0x2064b33f6e6b92d4(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function N_0x20a4bf0e09bee146(itemset: number): void;

declare function N_0x20b7f69b40c6b755(p0: number): number;

declare function N_0x20c5459379d75c1c(p0: number, p1: number): void;

declare function N_0x20d504994fdc4412(iplName1: string, iplName2: string): void;

declare function N_0x20e54854def6a54a(p0: number, p1: number): void;

declare function N_0x20f4cb76689acdbc(p0: number): void;

declare function N_0x20faee47427a4497(): void;

declare function N_0x21091b4beb6376ee(p0: number): number;

declare function N_0x21213b833ef4dae7(p0: number, p1: number, p2: number): void;

declare function N_0x2161278c6322f740(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
): void;

declare function N_0x216343750545a486(p0: number, p1: number, p2: number): void;

declare function N_0x216bc0d3d2e413d2(p0: number, p1: number): void;

declare function N_0x217f47761376e16e(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): void;

declare function N_0x218f7710a139d012(): void;

declare function N_0x21a99a72b00d8002(p0: number, p1: number): number;

declare function N_0x21d04d7bc538c146(entity: number): boolean;

declare function N_0x21d0890d88dfb0b0(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
  p10: number,
): void;

declare function N_0x21f00e08cbb5f37b(p0: number): void;

declare function N_0x2200ab13cbd10f4e(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
): void;

declare function N_0x22031584496cfb70(p0: number, p1: number): void;

declare function N_0x2208438012482a1a(
  ped: number,
  p1: boolean,
  p2: boolean,
): void;

declare function N_0x22084ca699219624(p0: number): number;

declare function N_0x221f4d9912b7fe86(p0: number, p1: number): void;

/**
 * Returns true if GtaThread+0x77C is equal to 1.
 */
declare function N_0x2238ec3ec631ab1f(): boolean;

declare function N_0x225640e09effdc3f(): number;

declare function N_0x226c6a4e3346d288(p0: number, p1: number): void;

declare function N_0x226cf9b159e38f42(p0: number): number;

declare function N_0x22741652985c84d0(p0: number, p1: number): void;

declare function N_0x227522fd59ddb7e8(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0x227b06324234fb09(p0: number, p1: number): number;

declare function N_0x22b3cabeddb538b2(p0: number, p1: number): void;

declare function N_0x22c8b10802301381(p0: number, p1: number): void;

declare function N_0x22cd23bb0c45e0cd(p0: number): number;

declare function N_0x22cd2c33ed4467a1(p0: number): number;

declare function N_0x22cdbf317c40a122(p0: number): void;

declare function N_0x22d3a61ce053270c(p0: number, p1: number): number;

declare function N_0x22e590f108289a9d(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): number;

declare function N_0x22f2a386d43048a9(p0: number): number;

declare function N_0x2302c0264ea58d31(): void;

declare function N_0x2311f15d971aa680(p0: number): number;

declare function N_0x232e1eb23cdb313c(): number;

declare function N_0x235c863da77bd88d(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0x236321f1178a5446(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0x236905c700fdb54d(): void;

declare function N_0x2371c39d4f91c288(p0: number): void;

declare function N_0x2387d6e9c6b478aa(p0: number): number;

declare function N_0x23a3ab86e0807721(vehicle: number, toggle: boolean): void;

declare function N_0x23bde06596a22cec(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function N_0x23bf601a42f329a0(p0: number): number;

declare function N_0x23ccab8f40b9cbee(): number;

declare function N_0x23d9c1f2e4098edc(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): number;

declare function N_0x23e33cb9f4a3f547(p0: number, p1: number): number;

declare function N_0x23f66c36f8e5eaab(p0: number, p1: number): void;

declare function N_0x23f74c2fda6e7c61(p0: number, p1: number): number;

declare function N_0x23fb9faca28779c1(p0: number, p1: number, p2: number): void;

declare function N_0x2412216fcc7b4e3e(p0: number): void;

declare function N_0x2416ec2f31f75266(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): void;

declare function N_0x242edf85d4e87b65(p0: number): number;

declare function N_0x243cede8f916b994(): void;

declare function N_0x243e1b4607040057(p0: number): number;

declare function N_0x244430c13ba5258e(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): number;

declare function N_0x244e8c282188e40f(p0: number, p1: number): void;

declare function N_0x245d07651b1d183b(p0: number, p1: number): number;

declare function N_0x246545c37c27a717(p0: number): number;

declare function N_0x247f86595d396344(p0: number): void;

declare function N_0x2498035289b5688f(p0: number, p1: number): void;

declare function N_0x249cd6b7285536f2(p0: number, p1: number, p2: number): void;

declare function N_0x24c82ef607105faa(p0: number, p1: number): void;

declare function N_0x24cd8faea1368379(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0x24db6b9f2b719043(p0: number): void;

declare function N_0x250c75eb1728cc0d(p0: number): void;

declare function N_0x250ebb11e81a10be(p0: number): number;

declare function N_0x251241caec707106(): boolean;

declare function N_0x25189f9908e9cd65(): number;

declare function N_0x2533baffbe737e54(): number;

declare function N_0x2533f2ab0eb9c6f9(p0: number, p1: number): void;

declare function N_0x253a63b5badbc398(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): void;

declare function N_0x254b0241e964b450(p0: number, p1: number): number;

declare function N_0x25557e324489393c(p0: number): number;

declare function N_0x255a5ef65eda9167(p0: number): number;

declare function N_0x255b6db4e3ad3c3e(p0: number): number;

declare function N_0x256edd55c6be1482(p0: number): number;

declare function N_0x25855b1574bf8cd5(p0: number): void;

declare function N_0x259acc5b52a2b2d9(p0: number, p1: number): void;

declare function N_0x259ce340a8738814(p0: number): number;

declare function N_0x25b9c78a25105c35(p0: number, p1: number): void;

declare function N_0x25ca89b2a39dcc69(): number;

declare function N_0x26054eb81ac0893b(p0: number): number;

declare function N_0x262ef7cf49cf1eb9(p0: number): void;

declare function N_0x263d69767f76059c(p0: number, p1: number): void;

declare function N_0x264e9a5cd78c338f(p0: number): void;

declare function N_0x2651ddc0ea269073(p0: number, p1: number): void;

declare function N_0x267c78c60e806b9a(p0: number, p1: boolean): void;

declare function N_0x2686bd9566b65eda(p0: number, p1: number, p2: number): void;

declare function N_0x268ab8420a9e4ed7(): boolean;

declare function N_0x268b3aebf032a88d(p0: number): number;

declare function N_0x26934083d3f2579c(p0: number): number;

declare function N_0x26a5c12facff8724(p0: number): number;

declare function N_0x26dd2fb0a88cc412(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function N_0x26e87218390e6729(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): number;

declare function N_0x26f6bbea2ce3e3dc(): void;

declare function N_0x2701d01d5e18fc31(): boolean;

declare function N_0x2703efb583f0949a(p0: number, p1: number): void;

declare function N_0x2705d18c11b61046(p0: number): void;

declare function N_0x271f95e55c663b8b(p0: number, p1: number): number;

declare function N_0x27219300c36a8d40(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): number;

declare function N_0x2728c77fbc4b9796(p0: number): void;

declare function N_0x2738d68d2b4e09e7(p0: number): void;

declare function N_0x273915ce30780986(p0: number, p1: number): number;

declare function N_0x273e04a3a7ad1f2d(): number;

declare function N_0x274ee1b90cfa669e(p0: number): number;

declare function N_0x276aaf0f1c7f2494(p0: number, p1: number): void;

declare function N_0x277251c161b4c3f4(p0: number, p1: number, p2: number): void;

declare function N_0x277865a734918ae6(): number;

declare function N_0x2797b8d66dd0ebb8(p0: number, p1: number, p2: number): void;

declare function N_0x2797c633dcdbbac5(p0: number, p1: number, p2: number): void;

declare function N_0x279b0696da4657eb(p0: number): number;

declare function N_0x27a1b170aa8af84c(p0: number): void;

declare function N_0x27ad7162d3fed01e(p0: number, p1: number): number;

declare function N_0x27af48c62b281341(): number;

declare function N_0x27b1ae4d8c652f08(p0: number): number;

declare function N_0x27d3a0e1fe090a43(p0: number): number;

declare function N_0x27e3f2b57209fa54(p0: number, p1: number): void;

declare function N_0x27e8a84c12b0b7d1(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0x2804658eb7d8a50b(p0: number, p1: number): void;

declare function N_0x280c7e3ac7f56e90(p0: number): [number, number, number];

declare function N_0x282d36ff103d78df(): string;

declare function N_0x283978a15512b2fe(p0: number, p1: number): void;

declare function N_0x285438c26c732f9d(): number;

declare function N_0x285d36c5c72b0569(p0: number): number;

declare function N_0x28717806d3bdd0d0(p0: number, p1: number): number;

declare function N_0x288cbb414c3c2fbb(p0: number): number;

declare function N_0x2890418b39bc8fff(p0: number, p1: number): void;

declare function N_0x28a13bf6b05c3d83(p0: number, p1: number): void;

declare function N_0x28ae29d909c8fdce(p0: number): number;

declare function N_0x28cb6391acedd9db(p0: number): void;

declare function N_0x28eeace9b43d9597(p0: number, p1: number, p2: number): void;

declare function N_0x28ef780bdea8a639(p0: number, p1: number): void;

declare function N_0x290b2e6ccde532e1(p0: number): number;

declare function N_0x2916b30dc6c41179(p0: number): void;

declare function N_0x2917e634206b9e17(p0: number, p1: number): void;

declare function N_0x291cc21d1fb6790e(p0: number): void;

declare function N_0x292ad61a33a7a485(): void;

declare function N_0x292f0b6edc82e3a4(p0: number, p1: number): void;

declare function N_0x2942457417a5fd24(p0: number): number;

declare function N_0x2948235db2058e99(p0: number, p1: number): void;

declare function N_0x294af5323f44b053(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0x295514f198efd0ca(p0: number, p1: number): number;

declare function N_0x295859eb18f48d82(p0: number): number;

declare function N_0x2963b5c1637e8a27(p0: number): number;

declare function N_0x297b72e2af094742(unk: number): void;

declare function N_0x2989e131fde37e97(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): number;

declare function N_0x29924eb8ee9db926(p0: number, p1: number): void;

declare function N_0x29ba9f78321e5a6c(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
  p10: number,
  p11: number,
): number;

declare function N_0x29c733459a9011eb(p0: number, p1: number): void;

declare function N_0x29cd4896ecb66c12(): void;

declare function N_0x29e6655df3590b0d(p0: number): void;

declare function N_0x29f3539189d3e277(p0: number, p1: number): void;

declare function N_0x29fb4ce89472c3cb(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
): void;

declare function N_0x29fce825613fefca(p0: number, p1: number): number;

declare function N_0x29fe035d35b8589c(p0: number): void;

declare function N_0x2a08a32b6d49906f(p0: number, p1: number): number;

declare function N_0x2a10538d0a005e81(p0: number, p1: number): void;

declare function N_0x2a1625858887d4e6(p0: number): void;

declare function N_0x2a31d13c5f021d0d(p0: number): void;

declare function N_0x2a32faa57b937173(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
  p10: number,
  p11: number,
  p12: number,
  p13: number,
  p14: number,
  p15: number,
  p16: number,
  p17: number,
  p18: number,
  p19: number,
  p20: number,
  p21: number,
  p22: number,
  p23: number,
): void;

declare function N_0x2a374e6f0075ee81(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): void;

declare function N_0x2a4765812202e671(): number;

declare function N_0x2a48d9567940598f(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): number;

declare function N_0x2a5afd2b8381a6e1(p0: number): void;

declare function N_0x2a610bee7d341cc4(p0: number, p1: number): number;

declare function N_0x2a6d1daab9ebb262(p0: number): number;

declare function N_0x2a7413168f6cd5a8(): void;

declare function N_0x2a77ef9bec8518f4(p0: number): number;

declare function N_0x2a8112a974de1ef6(): number;

declare function N_0x2ab7c81b3f70570c(): number;

declare function N_0x2af423d6ecb2c485(p0: number, p1: number): void;

declare function N_0x2b02db082258625f(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): number;

declare function N_0x2b101ad9f651243a(): number;

declare function N_0x2b12b6fc8b8772ab(p0: number, p1: number): void;

declare function N_0x2b32b11520626229(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): number;

declare function N_0x2b4ce170de09f346(p0: number, p1: number): void;

declare function N_0x2b6529c54d29037a(p0: number): void;

declare function N_0x2b6846401d68e563(p0: number, p1: number): number;

declare function N_0x2b7277484cc095fd(p0: number, p1: number): number;

declare function N_0x2b8af29a78024bd3(p0: number): void;

declare function N_0x2b9c37c01bf25edb(p0: number): number;

declare function N_0x2ba1bcc99826cda2(): void;

declare function N_0x2ba918c823b8ba56(p0: number, p1: number): void;

declare function N_0x2ba9d7bf629f920c(p0: number): number;

declare function N_0x2bae4880dcdd560b(p0: number, p1: number): number;

declare function N_0x2bb2b5bcf0df8008(p0: number, p1: number): void;

declare function N_0x2bb8d58e88777499(p0: number): void;

declare function N_0x2beed53b912537d0(p0: number, p1: number, p2: number): void;

declare function N_0x2bf1953c0c21ac88(p0: number): number;

declare function N_0x2c04d89a0fb4e244(p0: number): number;

declare function N_0x2c24af8eeeef8a55(p0: number, p1: number, p2: number): void;

declare function N_0x2c2d287748e8e9b7(p0: number): void;

declare function N_0x2c41d93f550d5e37(p0: number, p1: number, p2: number): void;

declare function N_0x2c46d2a591d8c322(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0x2c497bdef897c6df(p0: number): number;

declare function N_0x2c4e98dda475364f(p0: number): void;

declare function N_0x2c5bd9a43987aa27(p0: number): number;

declare function N_0x2c6a07af9aedabd8(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): void;

declare function N_0x2c729f2b94cea911(p0: number): number;

declare function N_0x2c76fa0e01681f8d(p0: number, p1: number): number;

declare function N_0x2c83212a7aa51d3d(p0: number): number;

declare function N_0x2c87c3e1c7b96ee2(p0: number): void;

declare function N_0x2c9746d0ca15be1c(p0: number): number[];

declare function N_0x2cd41ac000e6f611(): void;

declare function N_0x2d053ea815702dd1(p0: number, p1: number): number;

declare function N_0x2d0571bb55879da2(p0: number): number;

declare function N_0x2d19bc4df626cbe7(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): number;

declare function N_0x2d3ace3de0a2b622(p0: number, p1: number): void;

declare function N_0x2d40bcbfe9305dea(p0: number, p1: number): void;

declare function N_0x2d4f9c852ce8a253(p0: number): number;

declare function N_0x2d5dc831176d0114(p0: number): boolean;

declare function N_0x2d64376cf437363e(p0: number): number;

declare function N_0x2d657b10f211c572(p0: number, p1: number): number;

declare function N_0x2d874ba20e8e1f20(p0: number): number;

declare function N_0x2d976dbdc731df80(p0: number): void;

declare function N_0x2db524750dc41ed4(): number;

declare function N_0x2dc0e8dcbd3546e9(p0: number): number;

declare function N_0x2dd3149dc34a3f4c(p0: number): void;

declare function N_0x2dd42fad06e6f19e(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0x2dd4e0e26dfad97d(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0x2df3d457d86f8e57(p0: number, p1: number): void;

declare function N_0x2df59ffe6ffd6044(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): void;

declare function N_0x2df89cd2ed1d0bde(p0: number, p1: number): void;

declare function N_0x2df9038c90ad5264(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
): void;

declare function N_0x2e036f0480b8bf02(): number;

declare function N_0x2e1abe627c95ed9b(): number;

declare function N_0x2e1cdc1ff3b8473e(p0: number, p1: number): number;

declare function N_0x2e1d6d87346bb7d2(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function N_0x2e20878fd208a68e(p0: number, p1: number): void;

declare function N_0x2e2e06023d07631e(p0: number, p1: number): number;

declare function N_0x2e31aca7477cf00f(p0: number, p1: number, p2: number): void;

declare function N_0x2e399eafbeea74d5(): void;

declare function N_0x2e545965df98d476(p0: number): number;

declare function N_0x2e5b5d1f1453e08e(p0: number, p1: number): void;

declare function N_0x2e67707bec52ca4b(p0: number): void;

declare function N_0x2e78d822208e740a(p0: number): number;

declare function N_0x2e957aa81f2c61c9(): void;

declare function N_0x2eb75fb86c41f026(p0: number, p1: number, p2: number): void;

declare function N_0x2eb977293923c723(p0: number, p1: number): void;

declare function N_0x2ebf70e1d8c06683(p0: number, p1: number): void;

declare function N_0x2f050a3ff8738245(p0: number): number;

declare function N_0x2f4d53023f826ff0(): number;

declare function N_0x2f54b146d3edce4d(p0: number): number;

declare function N_0x2f7bb105144acf30(): void;

declare function N_0x2f7eb8b6f6afe79c(p0: number): number;

declare function N_0x2f82cab262c8ae26(p0: number): number;

declare function N_0x2f901291ef177b02(p0: number, p1: number): void;

declare function N_0x2f994cc29caa9d22(p0: number): void;

declare function N_0x2f9ac754fe179d58(p0: number): void;

declare function N_0x2fa568bfa725f8d6(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function N_0x2fa86833e3617e2d(p0: number): number;

declare function N_0x2fb53c631a49be92(): number;

declare function N_0x2fcd528a397e5c88(p0: number, p1: number): void;

declare function N_0x30146c25686b7836(p0: number, p1: number): number;

declare function N_0x302e71c1d9ee75b9(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0x3034c77c79a58880(p0: number): void;

declare function N_0x3039be60b3749716(p0: number): number;

declare function N_0x3053064f909b5f42(p0: number, p1: number): void;

declare function N_0x30569f348d126a5a(p0: number): number;

declare function N_0x3088634cf8c819cf(p0: number): void;

declare function N_0x309bbebea8a3986c(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): number;

declare function N_0x30a768c30d385ec5(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
): void;

declare function N_0x30b391915538ebe2(p0: number): void;

declare function N_0x30bed53646c86d11(p0: number): number;

declare function N_0x30d86b2b7622d0eb(p0: number): number;

declare function N_0x30e7c16b12da8211(p0: number): number;

declare function N_0x31010318ba9897ac(p0: number, p1: number): void;

declare function N_0x310ce349e0c0ec4b(p0: number, p1: number, p2: number): void;

declare function N_0x31108bb5715d035f(): void;

declare function N_0x3112adb9d5f3426b(p0: number, p1: number): void;

declare function N_0x31160ec47e7c9549(p0: number, p1: number): void;

declare function N_0x31167ed4324b758d(p0: number): number;

declare function N_0x313778edca9158e2(): number;

declare function N_0x3138582e0a13bfab(p0: number): number;

declare function N_0x3145044f3990d321(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
): void;

declare function N_0x314c5465195f3b30(p0: number, p1: number): void;

declare function N_0x3168ba5d6dece323(): void;

declare function N_0x316cdb5b6e8f4110(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0x317d9c9560529cc2(p0: number): void;

declare function N_0x3180e991d4b8f248(): void;

declare function N_0x318f0f9a4426cfa2(p0: number, p1: number): number;

declare function N_0x31b2e7f2e3c58b89(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): number;

declare function N_0x31bb338f64d5c861(p0: number, p1: number): void;

declare function N_0x31c70a716cae1fee(p0: number): number;

declare function N_0x31dad2cd6d49546e(p0: number): number;

declare function N_0x31dc8d3f216d8509(p0: number): number;

declare function N_0x31f343383f19c987(p0: number, p1: number, p2: number): void;

declare function N_0x31fef6a20f00b963(p0: number): number;

declare function N_0x3210bcb36af7621b(p0: number): void;

declare function N_0x3215bbe34d3418c5(p0: number): number;

declare function N_0x3233c4ec0514c7ec(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): number;

declare function N_0x32348719dced2969(p0: number): number;

declare function N_0x32417cb860a3bdc4(p0: number, p1: number): number;

declare function N_0x324ab2a68ad8aee5(): void;

declare function N_0x325434c68358d282(p0: number): void;

declare function N_0x3255d4d2082c6339(p0: number, p1: number, p2: number): void;

declare function N_0x326f7951ef0d7f75(p0: number, p1: number): number;

declare function N_0x329772c47dbb2fbc(p0: number): void;

declare function N_0x32a1e3b83d501096(p0: number): number;

declare function N_0x32a7c216344d623b(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0x32c2939564d74bff(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
): void;

declare function N_0x32c90cdfaf40514c(): number;

declare function N_0x32ccad8a981b53d3(p0: number): void;

declare function N_0x32ceda9a0ab4cef7(p0: number, p1: number, p2: number): void;

declare function N_0x32d5898c4898cd95(): void;

declare function N_0x32de2bffda43e62a(): void;

declare function N_0x32f4dbfdfcccc735(p0: number, p1: number, p2: number): void;

declare function N_0x330ca55a3647fa1c(p0: number, p1: number): void;

declare function N_0x331550b212014b92(p0: number, p1: number): number;

declare function N_0x331cbd247fc5daa8(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
): number;

declare function N_0x331d349e0380b097(p0: number): void;

declare function N_0x332630b862277879(): number;

declare function N_0x3329aae2882fc8e4(p0: number, p1: number, p2: number): void;

declare function N_0x334ce0da4faf330c(): void;

declare function N_0x336b3d200ab007cb(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
): number;

declare function N_0x3373779baf7caf48(p0: number, p1: number): void;

declare function N_0x337f1cc8ee895601(p0: number, p1: number): number;

declare function N_0x33825a7388a6b9f6(p0: number, p1: number): number;

declare function N_0x3397cd4e0353dfba(p0: number): number;

declare function N_0x33982467b1e349ef(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
): number;

declare function N_0x33992a808df1c1ba(vehicle: number, p1: boolean): void;

declare function N_0x339e16b41780fc35(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0x33c1d63e55fa4284(): number;

declare function N_0x33d51f801cb16e4f(): void;

declare function N_0x33fa048675821da7(p0: number, p1: number): number;

declare function N_0x341cdd17efc2472e(p0: number, p1: number): void;

declare function N_0x345c9f993a8ab4a4(p0: number, p1: number): void;

declare function N_0x345ec3b7ebde1cb5(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
): number;

declare function N_0x348f211ca2404039(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
): number;

declare function N_0x34a0671be613d3d0(p0: number): number;

declare function N_0x34ae85c7ca4857aa(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
  p10: number,
): void;

declare function N_0x34b5ceac180a5d6e(p0: number, p1: number, p2: number): void;

declare function N_0x34b9c4d86df2c2f3(p0: number): number;

declare function N_0x34bcf6209b9668a7(p0: number, p1: number): void;

declare function N_0x34c0010188d7c54a(p0: number, p1: number): void;

declare function N_0x34c11114887150fd(p0: number, p1: number): void;

declare function N_0x34c9af25649172d0(p0: number): void;

declare function N_0x34d6ac1157c8226c(p0: number, p1: number): number;

declare function N_0x34eddd59364ad74a(p0: number, p1: number): void;

declare function N_0x34f008a7e48c496b(p0: number, p1: number): number;

declare function N_0x350c23949e43686c(): number;

declare function N_0x350e9211074955af(p0: number, p1: number): number;

declare function N_0x35165c658077cd0b(): number;

declare function N_0x3519cc3525319a96(): number;

declare function N_0x351d71b8b72b858b(p0: number): number;

declare function N_0x351f74ed6177ebe7(): number;

declare function N_0x354ca4dddeec397a(p0: number): number;

declare function N_0x354f689c4ffaab37(p0: number): number;

declare function N_0x356135b9b10a2a82(p0: number): number;

declare function N_0x356f9fb0698c1feb(p0: number, p1: number): number;

declare function N_0x35815f372d43e1e5(name: string, p1: number): void;

declare function N_0x358a1a751b335a11(p0: number): void;

declare function N_0x35b8c070e0c16e2f(p0: number, p1: number): void;

declare function N_0x35d302397e524939(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
): number[];

declare function N_0x35dc1877312fba0f(p0: number): void;

declare function N_0x35defecae36d4fae(p0: number, p1: number): void;

declare function N_0x35e5e21f9159849c(p0: number): number;

declare function N_0x362086b911657b1a(p0: number, p1: number): void;

declare function N_0x3641fcd53e59b335(p0: number, p1: number, p2: number): void;

declare function N_0x36486af7da93a464(p0: number): number;

declare function N_0x36513affc703c60d(p0: number): void;

declare function N_0x36559148b78853b3(p0: number, p1: number, p2: number): void;

declare function N_0x3660bcab3a6bb734(p0: number): void;

declare function N_0x36d0f2ba2c0d9bde(p0: number, p1: number): number;

declare function N_0x36d188aecb26094b(p0: number): void;

declare function N_0x36e3d8b5a6552fe8(p0: number): number;

declare function N_0x36e4b61dc56de77c(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): void;

declare function N_0x36eb4d34d4a092c5(p0: number, p1: number): void;

declare function N_0x36f69e7a22655653(p0: number): number;

declare function N_0x370a973252741ac4(p0: number, p1: number): void;

declare function N_0x370f57c47f68ebca(p0: number): number;

declare function N_0x3738b784ddd35cc6(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0x3743ce6948194349(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): void;

declare function N_0x374f0e716bfcde82(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function N_0x375f5870a7b8bec1(p0: number): number;

declare function N_0x3765c3a3e8192e10(): number;

declare function N_0x378d3b1b11d9385b(p0: number): void;

declare function N_0x3799efcc3c8cd5e1(p0: number): number;

declare function N_0x37a834aec6a4f74a(): number;

declare function N_0x37b01666bae8f7ef(p0: number): number;

declare function N_0x37c1257849def24a(p0: number): void;

declare function N_0x37ceb637ba3b1a47(p0: number): void;

declare function N_0x37d238be69f7378a(p0: number): number;

declare function N_0x37d7bdba89f13959(p0: number): void;

declare function N_0x380a2e353ad30917(p0: number, p1: number, p2: number): void;

declare function N_0x380ffa15b72408fb(p0: number): number;

declare function N_0x3813e11a378958a5(p0: number): number;

declare function N_0x383f64263f946e45(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
): number;

declare function N_0x38497f139981c5c9(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): number;

declare function N_0x3852237a3d9df145(p0: number): void;

declare function N_0x387ad749e3b69b70(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
): number;

declare function N_0x38c0c9cae1544500(p0: number): void;

declare function N_0x38c2bf94d15f464d(p0: number): number;

declare function N_0x38d9d50f2085e9b3(p0: number): void;

declare function N_0x38e7dd70a242d5cb(p0: number, p1: number): void;

declare function N_0x3900491c0d61ed4b(p0: number, p1: number): void;

declare function N_0x390710d2dafa6bff(p0: number, p1: number): void;

declare function N_0x39073da4eddbc91d(p0: number): void;

declare function N_0x3923ec958249657d(p0: number, p1: number, p2: number): void;

declare function N_0x3946fc742ac305cd(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
): void;

declare function N_0x39654e1f68b78287(): number;

declare function N_0x3972f78a78b5d9df(p0: number): void;

declare function N_0x397769175a7dbb30(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
): number;

declare function N_0x398066f893149856(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0x39816f6f94f385ad(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
): void;

declare function N_0x398fab9c96a81924(p0: number, p1: number): void;

declare function N_0x399657ed871b3a6c(p0: number, p1: number): void;

declare function N_0x39a2fc5af55a52b1(p0: number, p1: number): void;

declare function N_0x39a8ef7af29a192c(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): number;

declare function N_0x39bed552db46ffa9(p0: number, p1: number): void;

declare function N_0x39d6dace323a20b6(p0: number): number;

declare function N_0x39ed303390ddeac7(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): void;

declare function N_0x3a00d87b20a2a5e4(p0: number, p1: number): void;

declare function N_0x3a0b667abff87f6e(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0x3a0f82f6ee2291c8(p0: number): number;

declare function N_0x3a3be6b920525237(p0: number, p1: number): void;

declare function N_0x3a3d5568af297cd5(p0: number): boolean;

declare function N_0x3a50753042b6891b(p0: number, p1: number): void;

declare function N_0x3a5697b80fed5ebe(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): void;

declare function N_0x3a65f4844913a047(p0: number, p1: number): number;

declare function N_0x3a66f1963b223f61(): number;

declare function N_0x3a6ae4eee30370fe(p0: number, p1: number): number;

declare function N_0x3a77dae8b4fd7586(p0: number, p1: number): void;

declare function N_0x3a8611bd7bde84f7(p0: number, p1: number): void;

declare function N_0x3a87fda8f1b6cdfb(p0: number, p1: number, p2: number): void;

declare function N_0x3a9a281ff71249e9(p0: number, p1: number): void;

declare function N_0x3aa0cdc63696166d(p0: number): number;

declare function N_0x3aa24ccc0d451379(p0: number): number;

declare function N_0x3ab3a77672f6473f(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): number[];

declare function N_0x3ab6c7b0bb0df4b1(p0: number, p1: number): number;

declare function N_0x3abfa128f5bf5a70(p0: number, p1: number, p2: number): void;

declare function N_0x3acac8832e77bc93(p0: number, p1: number): void;

declare function N_0x3acc128510142b9d(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): number;

declare function N_0x3acce14dfa6ba8c2(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
): number;

declare function N_0x3ad212429e095efb(p0: number, p1: number): void;

declare function N_0x3ad8eff9703be657(p0: number, p1: number): void;

declare function N_0x3adc71a66356d706(): number;

declare function N_0x3ae3552e7c207cc5(p0: number, p1: number): void;

declare function N_0x3ae451860f03ca8a(p0: number, p1: number): number;

declare function N_0x3aeabae3f3c7600c(): number;

declare function N_0x3aec4a410ecaf30d(p0: number): number;

declare function N_0x3b005ff0538ed2a9(p0: number): number;

declare function N_0x3b296934db026873(p0: number, p1: number): void;

declare function N_0x3b31732fade5baf3(): number;

declare function N_0x3b393716c3fd8237(p0: number): number;

declare function N_0x3b7b7908b7adfb4b(p0: number, p1: number): void;

declare function N_0x3b82acc3f4b6240c(): number;

declare function N_0x3b8e3ad9677ce12b(p0: number, p1: number, p2: number): void;

declare function N_0x3bb84f812e052c90(p0: number): void;

declare function N_0x3bbdd6143ff16f98(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): number;

declare function N_0x3bbeecc5b8f35318(p0: number, p1: number): void;

declare function N_0x3bcf32ff37ea9f1d(p0: number): void;

declare function N_0x3bdfcf25b58b0415(p0: number): number;

declare function N_0x3bf0767cf33fcc88(p0: number): void;

declare function N_0x3c3c7b1b5ec08764(): void;

declare function N_0x3c486e334520579d(): void;

declare function N_0x3c4ae8506638c7e2(p0: number, p1: number): void;

declare function N_0x3c529a827998f9b3(p0: number, p1: number, p2: number): void;

declare function N_0x3c61b52b00848c26(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): void;

declare function N_0x3c6490d940ff5d0b(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): void;

declare function N_0x3c67506996001f5e(): number;

declare function N_0x3c7a9c2c953128fe(p0: number): void;

declare function N_0x3c8f74e8fe751614(): void;

declare function N_0x3c9628a811cbd724(p0: number): number;

declare function N_0x3ca5e58c9731a16b(p0: number, p1: number): void;

declare function N_0x3caad93fa5b9579a(p0: number, p1: number, p2: number): void;

declare function N_0x3cb8859f04763c78(p0: number, p1: number): number;

declare function N_0x3cf46f55c6585590(): number;

declare function N_0x3cf96e16265b7dc8(p0: number): number;

declare function N_0x3d084d5568fb4028(p0: number): number;

declare function N_0x3d0bbccf401b5fdb(): void;

declare function N_0x3d10d7179d7034af(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0x3d2674828a4e6b3c(): number;

declare function N_0x3d69537039f8d824(p0: number): number;

declare function N_0x3d86997a86feef0d(p0: number, p1: number): void;

declare function N_0x3d9da5c9efd20d88(p0: number, p1: number): void;

declare function N_0x3d9f958834ab9c30(p0: number): number;

declare function N_0x3da7a10583a4bec0(): number;

declare function N_0x3daabe78a23694bc(p0: number, p1: number): void;

declare function N_0x3df7ee3a76185108(): void;

declare function N_0x3e2616e7ea539480(p0: number): number;

declare function N_0x3e2a25b2416dd67e(p0: number): number[];

declare function N_0x3e2fddbe435a8787(): void;

declare function N_0x3e4a16bc669e71b3(): number;

declare function N_0x3e4e811480b3ae79(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): number;

declare function N_0x3e592d0486dec0f6(p0: number): number;

declare function N_0x3e593df9c2962ec6(p0: number): number;

declare function N_0x3e74a687a73979c6(p0: number): void;

declare function N_0x3e8cce6769db5f34(p0: number): number;

declare function N_0x3e93dddcbb6111e4(p0: number, p1: number): void;

declare function N_0x3e98ac9d8c56c62c(p0: number): void;

declare function N_0x3ea62e56f386c997(p0: number, p1: number): void;

declare function N_0x3eb2791a1fbc8a42(p0: number, p1: number): void;

declare function N_0x3ec28da1ffac9ddd(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): number;

declare function N_0x3ee1f7a8c32f24e1(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): number;

declare function N_0x3eecaadab0d9fe29(): number;

declare function N_0x3efabb21e14a6bd1(p0: number, p1: number, p2: number): void;

declare function N_0x3f08c6163a4ab1d6(p0: number): void;

declare function N_0x3f0abae38a0515ad(p0: number, p1: number): void;

declare function N_0x3f2ee18a3e294801(p0: number): number;

declare function N_0x3f4fd4bed07ab8c4(p0: number): number;

declare function N_0x3f59fe6f37869576(p0: number, p1: number): number;

declare function N_0x3f6fd87d2030adc6(): number;

declare function N_0x3f73aed12a5ef0ff(p0: number): number;

declare function N_0x3f81ea4275d39d6f(p0: number): number;

declare function N_0x3f8387db1b9f31b7(p0: number, p1: number): number;

declare function N_0x3f9fddba79117c69(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): number;

declare function N_0x3fa09dd57b93c0de(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): number;

declare function N_0x3fa7d7d1e0ea809e(p0: number, p1: number): void;

declare function N_0x3faa928a79591761(p0: number): number;

declare function N_0x3fbb838aea30c1d8(): void;

declare function N_0x3fbc3f51bf12dfbf(p0: number): number;

declare function N_0x3fc4c027fd0936f4(p0: number): void;

declare function N_0x3fcbb5fcfd968698(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): number;

declare function N_0x3fda2b79aeee351c(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): number;

declare function N_0x3fdbb99efd8ce4af(p0: number, p1: number, p2: number): void;

declare function N_0x3fdcc1f8c17e303e(p0: number, p1: number, p2: number): void;

declare function N_0x3fe141fdb990e3d1(): void;

declare function N_0x3fe4fb41ef7d2196(p0: number): void;

declare function N_0x3feb770d8ed9047a(p0: number): number;

declare function N_0x3ffb15534067dcd4(p0: number): number;

declare function N_0x3ffcd7bba074cc80(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
): void;

declare function N_0x3ffe60dd8a936551(p0: number, p1: number): number;

declare function N_0x402e1a61d2587fcd(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
): number;

declare function N_0x404514d231db27a0(p0: number, p1: number): void;

declare function N_0x404527bc03da0e6c(p0: number): number;

declare function N_0x4046493d2eeaca0e(): void;

declare function N_0x405180b14da5a935(p0: number, p1: number): void;

declare function N_0x405ddefb1f531b18(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function N_0x406808610220405b(p0: number): void;

declare function N_0x406ccf555b04fad3(p0: number, p1: number, p2: number): void;

declare function N_0x40851bcc33acd9ab(p0: number): number;

declare function N_0x408d1149c5e39c1e(p0: number, p1: number): void;

declare function N_0x40914ccf2a1ab531(): number;

declare function N_0x409fe0ca6a4d1d49(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0x40ab73092c95b5f5(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function N_0x40c3524d4ed83554(p0: number, p1: number): void;

declare function N_0x40c9155af8bc13f3(p0: number): number;

declare function N_0x40ca665ab9d8d505(p0: number, p1: number): void;

declare function N_0x40d72189f46d2e15(p0: number, p1: number): void;

declare function N_0x40f769d31a00d5a0(p0: number, p1: number): number;

declare function N_0x411189e51b8020ba(p0: number, p1: number): void;

declare function N_0x41323f4e0c4ae94b(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
): void;

declare function N_0x41365db586cd9e8e(p0: number, p1: number): void;

declare function N_0x413697ec260aabbf(p0: number, p1: number, p2: number): void;

declare function N_0x4138ee36bc3dc0a7(p0: number, p1: number): number;

declare function N_0x41452e8a3b9c0c4b(): number;

declare function N_0x41503629d1139abc(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): void;

declare function N_0x4154b7d8c75e5dcf(p0: number): void;

declare function N_0x415fe28ed44bff14(): void;

declare function N_0x4161648394262fdf(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function N_0x4182c037aa1f0091(p0: number, p1: number): void;

declare function N_0x41afa5f228b0b6b0(): void;

declare function N_0x41c23a8e6b344867(p0: number, p1: number): void;

declare function N_0x41cda90ee3450921(p0: number): void;

declare function N_0x41d1331afad5a091(p0: number, p1: number, p2: number): void;

declare function N_0x41e452a3c580d1a7(): void;

declare function N_0x41f0b254ddf71473(p0: number): void;

declare function N_0x41f88a85a579a61d(p0: number): void;

declare function N_0x422179c7f6ad9304(p0: number, p1: number): void;

declare function N_0x423c6b1f3786d28b(p0: number, p1: number): void;

declare function N_0x42404d57d621601a(p0: number): number;

declare function N_0x42429c674b61238b(p0: number): number;

declare function N_0x4248ab2eeb3c75ad(p0: number, p1: number, p2: number): void;

declare function N_0x424b17a7dc5c90bc(p0: number): number;

declare function N_0x424ffcb9f0d2d4b5(p0: number, p1: number): void;

declare function N_0x42688e94e96fd9b4(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0x427c919e9809e370(p0: number, p1: number): void;

declare function N_0x4285804fd65d8066(p0: number, p1: number): void;

declare function N_0x42871327315edae8(p0: number): number;

declare function N_0x4293b44a855f82cc(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0x42a2f33a1942e865(p0: number): number;

declare function N_0x42a429cdfed6d99d(p0: number, p1: number, p2: number): void;

declare function N_0x42cfd8fd8cc8dc69(p0: number, p1: number): void;

declare function N_0x42ed56b02e05d109(p0: number, p1: boolean): void;

declare function N_0x43037abfe214a851(): void;

declare function N_0x4308812a6e9ca62e(p0: number, p1: number): number;

declare function N_0x430ee0a19bc5a287(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0x430f8319ae56c8a9(p0: number, p1: number): number[];

declare function N_0x431240a58484d5d0(p0: number, p1: number): void;

declare function N_0x4358bcf14c91761c(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
): void;

declare function N_0x437c08db4febe2bd(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function N_0x43ab9d5a7d415478(): boolean;

declare function N_0x43ad8fc02b429d33(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): number;

declare function N_0x43c21623e42b821b(p0: number): number;

declare function N_0x43cf999205084b4b(): void;

declare function N_0x43e4da469541a9c9(p0: number): number;

declare function N_0x43f35ddb2905d945(p0: number, p1: number): number;

declare function N_0x43f50a7cd2482156(p0: number, p1: number): void;

declare function N_0x43f867ef5c463a53(p0: number): void;

declare function N_0x43ff27fc1829c202(p0: number, p1: number): number;

declare function N_0x44026e3db3ced602(p0: number, p1: number): number;

declare function N_0x4402960666000e62(p0: number, p1: number): number;

declare function N_0x442b4347b6ec36e8(
  entity: number,
  p1: number,
  p2: boolean,
): void;

declare function N_0x443174c20b8b9e7f(p0: number, p1: number, p2: number): void;

declare function N_0x4440fee3efe78f54(p0: number): void;

declare function N_0x444c910a5058e568(p0: number, p1: number): void;

declare function N_0x445d7d8ea66e373e(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
  p10: number,
  p11: number,
  p12: number,
  p13: number,
  p14: number,
  p15: number,
): void;

declare function N_0x4465c3d1475bd3fd(p0: number): void;

declare function N_0x44813684f72b563c(p0: number, p1: number): void;

declare function N_0x449995ea846d3fc2(p0: number): void;

declare function N_0x44a5eef54f62e823(p0: number): number;

declare function N_0x44b09a23d728045a(p0: number): number;

declare function N_0x44b3a36933ac009c(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0x44c8f4908f1b2622(p0: number, p1: number): number;

declare function N_0x44d59ec597bbf348(p0: number, p1: number): void;

declare function N_0x450080ddedb91258(p0: number, p1: number): void;

declare function N_0x450769c833d58844(): number;

declare function N_0x4538ee7c321590bc(): number;

declare function N_0x453d16d41fc51d3e(p0: number): void;

declare function N_0x454ad4da6c41b5bd(p0: number): number;

declare function N_0x455156f47dc6b78c(p0: number): void;

declare function N_0x455ecca0715c507f(): void;

declare function N_0x45853f4e17d847d5(p0: number): number;

declare function N_0x4592b8b9b0ef5f48(p0: number): void;

declare function N_0x45ab66d02b601fa7(p0: number): number;

declare function N_0x45bf3a6239a576b7(): number;

declare function N_0x45d50415e4d885ff(): boolean;

declare function N_0x45e57fdd531c9477(p0: number, p1: number): void;

declare function N_0x45ef176b532ca851(p0: number, p1: number): void;

declare function N_0x45f13b7e0a15c880(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): number;

declare function N_0x45fea6d5539bd474(p0: number, p1: number): void;

declare function N_0x4607d57c5f7d332a(p0: number): number;

declare function N_0x461fcbdeb4d06717(p0: number, p1: number): void;

declare function N_0x462c687bea254bd9(p0: number): number;

declare function N_0x462ff2a432733a44(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
  p10: number,
): void;

declare function N_0x463803429297117c(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
): number;

declare function N_0x4642182a298187d0(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): number;

declare function N_0x4647842fe8f31c1e(p0: number, p1: number): void;

declare function N_0x4653a741d17f2cd0(): number;

declare function N_0x465f04f68ad38197(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0x4662bfe01938d98d(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): void;

declare function N_0x4664d213a0ccaf40(): number;

declare function N_0x46743bbfedbc859e(p0: number, p1: number, p2: number): void;

declare function N_0x4687e69d258bbe41(p0: number): number;

declare function N_0x46bf2a810679d6e6(p0: number, p1: number): number;

declare function N_0x46cbcf0e98a4e156(p0: number, p1: number): void;

declare function N_0x46db71883ee9d5af(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): number;

declare function N_0x46f032b8ddf46cde(p0: number): number;

declare function N_0x46fa0ae18f4c7fa9(p0: number): number;

declare function N_0x4707e9c23d8ca3fe(p0: number, p1: number): void;

declare function N_0x4735e2a4bb83d9da(p0: number): number;

declare function N_0x4752f68eb7f2d280(p0: number, p1: number, p2: number): void;

declare function N_0x4759cc730f947c81(): void;

declare function N_0x476038b5a0734c10(p0: number, p1: number): void;

declare function N_0x477122b8d05e7968(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0x478f6b9920446ce2(p0: number, p1: number): void;

declare function N_0x4791899615d70fa2(p0: number, p1: number, p2: number): void;

declare function N_0x4820a6939d7cef28(p0: number, p1: number): void;

declare function N_0x48229ce0c7938237(p0: number): number;

declare function N_0x4822a65d5af64e69(p0: number): number;

declare function N_0x4823f13a21f51964(p0: number, p1: number): number;

declare function N_0x482d17e45665da44(p0: number, p1: number): void;

declare function N_0x483b8c542103ad72(): number;

declare function N_0x483d4e917b0d35a9(p0: number, p1: number): void;

declare function N_0x4845e7e7643a908c(p0: number, p1: number): void;

/**
 * Sets bit 0 in GtaThread+0x784
 */
declare function N_0x4858148e3b8a75d0(): void;

declare function N_0x485b05ef05b9aee9(p0: number, p1: number): void;

declare function N_0x48a88fc684c55fdc(p0: number): number;

declare function N_0x48d82c83987e18e4(p0: number): number;

declare function N_0x48e4d50f87a96aa5(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
): void;

declare function N_0x4907d0e4fb26ee65(p0: number): void;

declare function N_0x4912dfe492db98cd(p0: number, p1: number): number;

declare function N_0x491439aef410a2fc(p0: number): void;

declare function N_0x494a9874f17a7d50(p0: number): boolean;

declare function N_0x495a04caec263af8(p0: number, p1: number): number;

declare function N_0x495cfab2924237c7(p0: number): number;

declare function N_0x49623bcfc3a3d829(p0: number, p1: number): number;

declare function N_0x497a18f8f88aa9d8(): void;

declare function N_0x497a6539bb0e8787(p0: number, p1: number, p2: number): void;

declare function N_0x498f2e77982d6945(p0: number, p1: number): number;

declare function N_0x49a8c2cd97815215(p0: number): number;

declare function N_0x49c44fe78a135a1d(p0: number): void;

declare function N_0x49c63fdf69744a27(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
): void;

declare function N_0x49cf17a564918e8d(): void;

declare function N_0x49dadfc4cd808b0a(p0: number, p1: number, p2: number): void;

declare function N_0x49e40483948af062(p0: number): number;

declare function N_0x49f1d143ade32656(p0: number): number;

declare function N_0x49f3241c28ebbfbc(p0: number): void;

declare function N_0x4a056257802dd3e5(p0: number, p1: number): void;

declare function N_0x4a3da74c3ccb1725(): number;

declare function N_0x4a47e38ea3d60939(p0: number, p1: number): void;

declare function N_0x4a7d73989f52eb37(p0: number, p1: number): void;

declare function N_0x4a8fefc43fd8ac9b(p0: number, p1: number, p2: number): void;

declare function N_0x4a98e228a936dbcc(p0: number): number;

declare function N_0x4aa5ea1edfb25786(p0: number): void;

declare function N_0x4ac38dfd286dad14(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
): void;

declare function N_0x4ad019591e94c064(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): number;

declare function N_0x4ae07eba3462c5d5(p0: number, p1: number): void;

/**
 * BG_*
 * @param scriptIndex :
 * @param p1 :
 */
declare function N_0x4ae1dff337a86fde(scriptIndex: number, p1: string): boolean;

declare function N_0x4aef1fb5b9011d75(p0: number): number;

declare function N_0x4afc7288c77238b3(p0: number): number;

declare function N_0x4b0501a468b749f8(): void;

declare function N_0x4b05b97ba46f419d(p0: number): void;

declare function N_0x4b101dbcc9482f2d(p0: number): number;

declare function N_0x4b19f171450e0d4f(p0: number): number;

declare function N_0x4b2b1a891d437ca7(p0: number): void;

declare function N_0x4b4038796f0d6566(p0: number): number;

declare function N_0x4b436bac8cbe9b07(p0: number, p1: number, p2: number): void;

declare function N_0x4b52bf96e225d230(p0: number): void;

declare function N_0x4b6c9a43f7d9109b(p0: number, p1: number): void;

declare function N_0x4b85b3cf91972222(p0: number): number;

declare function N_0x4b85b3cf9197aedf(p0: number): void;

declare function N_0x4b9668db91dc39b8(p0: number): void;

declare function N_0x4ba972d0e5ad8122(p0: number, p1: number): void;

declare function N_0x4bd66b4e3427689b(p0: number): void;

declare function N_0x4bdebea5702b97a9(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
): void;

declare function N_0x4be3ec91c01f0fe8(): void;

declare function N_0x4be6c13a45cca8ec(p0: number): number;

declare function N_0x4beb42aebca732e9(): number;

declare function N_0x4bf66f8878f67663(p0: number): number;

declare function N_0x4c05b42a8d937796(): void;

declare function N_0x4c11ccacb7c02b6e(p0: number): number;

declare function N_0x4c39c95ae5db1329(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0x4c543d5dfcd2dafd(p0: number, p1: number): number;

declare function N_0x4c57f27d1554e6b0(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
): number;

declare function N_0x4c60c333f9cca2b6(p0: number, p1: number): void;

declare function N_0x4c8b59171957bcf7(p0: number): number;

declare function N_0x4c9f782180712742(p0: number, p1: number): number;

declare function N_0x4cabe596d632e4b0(p0: number): number;

declare function N_0x4cc5f2fc1332577f(p0: number): void;

declare function N_0x4cdffe3189ebdbd0(p0: number): number;

declare function N_0x4cfa2b7fae115ecb(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
): void;

declare function N_0x4d0d2e3d8bc000eb(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0x4d107406667423be(p0: number, p1: number): void;

declare function N_0x4d14af567fc02885(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
  p10: number,
): void;

declare function N_0x4d15e49764cb328a(p0: number, p1: number): void;

declare function N_0x4d1699543b1c023c(p0: number, p1: number): void;

declare function N_0x4d2f46d1b28d90fb(p0: number, p1: number): void;

declare function N_0x4d40e7d749bc6e6d(p0: number): void;

declare function N_0x4d5c9cc7e7e23e09(): void;

declare function N_0x4d8611dfe1126478(p0: number): number;

declare function N_0x4dac398297981b87(p0: number): number;

declare function N_0x4db9d03ac4e1fa84(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function N_0x4dbc4873707e8fd6(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function N_0x4e42ca5bcd45444a(): number;

declare function N_0x4e4507cc5e4db869(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): number;

declare function N_0x4e463a3cdefffe96(): void;

declare function N_0x4e68c7ef706df35d(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
): void;

declare function N_0x4e76cb57222a00e5(p0: number): number;

declare function N_0x4e806a395d43a458(p0: number): void;

declare function N_0x4e88a65968a55c78(p0: number, p1: number): number;

declare function N_0x4ea69188fbce6a7d(p0: number, p1: number): void;

declare function N_0x4ec4ea2f72b36358(p0: number, p1: number): void;

declare function N_0x4ec8be63b8a5d4ef(p0: number, p1: number): void;

declare function N_0x4eccc2815ca79ae2(p0: number): number;

declare function N_0x4eddd9e9ca5af985(p0: number): number;

declare function N_0x4ef23e04a0c8ff51(p0: number, p1: number): number;

declare function N_0x4efc1f8ff1ad94de(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
): void;

declare function N_0x4f0d2256aae94eda(p0: number): void;

declare function N_0x4f27603e44a8e4c0(p0: number, p1: number, p2: number): void;

declare function N_0x4f2d5fa23db992de(): void;

declare function N_0x4f57397388e1dff8(): void;

declare function N_0x4f5ebe70081e5a20(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
): number;

declare function N_0x4f76e3676583d951(p0: number): number;

declare function N_0x4f806a6cfed89468(p0: number, p1: number): void;

declare function N_0x4f81ead1de8fa19b(p0: number): void;

declare function N_0x4f89dad4156ba145(p0: number): number;

declare function N_0x4f9e3ed7617123ac(p0: number): number;

declare function N_0x4fb5869e2b37fc00(): void;

declare function N_0x4fb67d172c4476f3(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function N_0x4fcbcc0584cd08e9(p0: number): void;

declare function N_0x4fd80c3dd84b817b(p0: number): void;

declare function N_0x4ff3c2b4e6a196c1(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0x5006c36652d6ec56(p0: number, p1: number): void;

declare function N_0x502e1591a504f843(p0: number, p1: number): number;

declare function N_0x503703ec1781b7d6(p0: number, p1: number, p2: number): void;

declare function N_0x503941f65dba24ec(p0: number): void;

declare function N_0x5060fa977cea4455(): number;

declare function N_0x5064db5083c29921(p0: number): number;

declare function N_0x506ce71fb6e8cf5e(p0: number, p1: number): void;

declare function N_0x506f1de1bfc75304(p0: number): number;

declare function N_0x508f5053e3f6f0c4(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): number;

declare function N_0x50aa09a0da64e73c(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
): void;

declare function N_0x50b72a754ee64a71(p0: number): void;

declare function N_0x50c14328119e1dd1(p0: number, p1: number): void;

declare function N_0x50c803a4cd5932c5(p0: number): void;

declare function N_0x50f124e6ef188b22(p0: number): number;

declare function N_0x51021d36f62aaa83(): number;

declare function N_0x5102307ce88798eb(p0: number): number;

declare function N_0x51139d8c17b16fbc(p0: number): number;

declare function N_0x511f1a683387c7e2(ped: number): number;

declare function N_0x5133cf81924f1129(): number;

declare function N_0x51345ae20f22c261(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): void;

declare function N_0x5136b284b67b35c7(p0: number): number;

declare function N_0x513f8aa5bf2f17cf(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): number;

declare function N_0x5170dda6d63acaaa(p0: number): number;

declare function N_0x517d01bf27b682d1(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
): void;

declare function N_0x51951de06c0d1c40(p0: number, p1: number): void;

declare function N_0x5199405eabfbd7f0(p0: number): void;

declare function N_0x51bea356b1c60225(p0: number, p1: number): number;

declare function N_0x51c5ef47086aa0d7(): number;

declare function N_0x51c7694e140fae43(p0: number): number;

declare function N_0x51d99497abf3f451(p0: number): void;

declare function N_0x51de09a2196bd951(p0: number, p1: number): void;

declare function N_0x51e52c9687fcdeec(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
): number;

declare function N_0x51ec204a6e5b5a1a(p0: number, p1: number): void;

declare function N_0x51f33dbc1a41cbfd(): number;

declare function N_0x5203038ff8bae577(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0x5217b7b6db78e1f3(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): void;

declare function N_0x52250b92ea70be3d(p0: number): number;

declare function N_0x522f74636df10201(p0: number, p1: number): void;

declare function N_0x522fa3f490e2f7ac(p0: number, p1: number, p2: number): void;

declare function N_0x5230bf34eb0ec645(p0: number): void;

declare function N_0x5230d3f6ee56cfe6(p0: number, p1: number): void;

/**
 * SET_PED_CAN_*
 * @param ped :
 * @param toggle :
 */
declare function N_0x5240864e847c691c(ped: number, toggle: boolean): void;

declare function N_0x52572b331e693aed(p0: number, p1: number, p2: number): void;

declare function N_0x527b97c203bb8606(p0: number): number;

declare function N_0x5288b7f0690f7c1f(p0: number): number;

declare function N_0x529b9ccd0972af4d(p0: number, p1: number): void;

declare function N_0x529b9ccd0972af4e(p0: number, p1: number): void;

declare function N_0x52a24d8a1da89658(p0: number, p1: number, p2: number): void;

declare function N_0x52bde32f21ba3b6d(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): number;

declare function N_0x52fa31db8f3ad25d(p0: number): void;

declare function N_0x52fc26d2d2fc2987(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0x53187e563f938e76(p0: number): number;

declare function N_0x531a78d6bf27014b(p0: number): void;

declare function N_0x532c5fddb986ee5c(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0x5337b721c51883a9(p0: number, p1: number, p2: number): void;

declare function N_0x535a66aad2bf68f9(p0: number, p1: number): void;

declare function N_0x535ed4605f89ab6e(p0: number, p1: number): void;

declare function N_0x536b6025e94ac48f(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function N_0x53764309c4618087(p0: number): number;

declare function N_0x53784cea0159439b(p0: number): number;

declare function N_0x537ce992bd2d7bcb(p0: number): number;

declare function N_0x53a94294fddcf98c(p0: number, p1: number): number;

declare function N_0x53ba7d96b9a421d9(p0: number, p1: number): void;

declare function N_0x53cb3970ba02e3cc(p0: number): void;

declare function N_0x53ce46c01a089da1(p0: number, p1: number): void;

declare function N_0x53d05d60e5f5b40c(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function N_0x53e4d0c079ca6855(p0: number): number;

declare function N_0x5407b7288d0478b7(p0: number, p1: number): number;

declare function N_0x541b8576615c33de(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): number;

declare function N_0x541e5b41dca45828(p0: number, p1: number, p2: number): void;

declare function N_0x54310aab97b92816(p0: number): number;

declare function N_0x543dfe14be720027(p0: number, p1: number, p2: number): void;

declare function N_0x545bf19f86e80f11(p0: number, p1: number, p2: number): void;

declare function N_0x5461c821d00fe15a(p0: number, p1: number): number;

declare function N_0x5463c962bc7777c3(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): number;

declare function N_0x54ae4fdeefeab77e(): number;

declare function N_0x54b187f111d9c6f8(p0: number, p1: number): number;

declare function N_0x54cbdd6e1b4cb4df(p0: number): void;

declare function N_0x54ec7b6bc72bad69(): void;

declare function N_0x54f4d7b6670fbb5a(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): number;

declare function N_0x550cb89dd7f4fa3d(p0: number, p1: number): number;

declare function N_0x55123d5a7d9d3c42(p0: number): void;

declare function N_0x55285f885f662169(): void;

declare function N_0x553d67295ddd2309(p0: number): void;

declare function N_0x554d9d53f696d002(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): number;

declare function N_0x55546004a244302a(p0: number, p1: number): void;

declare function N_0x5594afe9de0c01b7(p0: number): number;

declare function N_0x559a6f8c5133b4ee(p0: number, p1: number): number;

/**
 * BG_*
 * @param scriptIndex :
 * @param p1 :
 */
declare function N_0x55c40b7592bad213(scriptIndex: number, p1: string): number;

declare function N_0x55cd5fddd4335c1e(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
): void;

declare function N_0x55f37f5f3f2475e1(): void;

declare function N_0x55f618f68ab854d3(p0: number): number;

declare function N_0x5639fbea922788da(p0: number): void;

declare function N_0x563fcb6620523917(p0: number, p1: number): void;

declare function N_0x564552c6af1eeab1(): void;

declare function N_0x564837d4a9ede296(p0: number): void;

declare function N_0x5651516d947abc53(): void;

declare function N_0x5653ab26c82938cf(p0: number, p1: number, p2: number): void;

declare function N_0x5659d87be674ab17(p0: number): number;

declare function N_0x565eaa726b2ce3b7(p0: number): void;

declare function N_0x566ceb0542ef5ecf(p0: number, p1: number): number;

declare function N_0x569abc36e28ddeaa(): void;

declare function N_0x569f1e1237508deb(p0: number): number;

declare function N_0x56a786e87ff53478(p0: number): void;

declare function N_0x56b3410626a473e7(p0: number): void;

declare function N_0x56cb3b4305a4f7ce(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function N_0x56e0735d6273b227(p0: number, p1: number): void;

declare function N_0x56e4bad93d33453c(p0: number, p1: number): number;

declare function N_0x56e58d4d118fb45e(p0: number, p1: number): number;

declare function N_0x56e9c26cd29d1ed6(p0: number, p1: number): void;

declare function N_0x5708edd71b50c008(p0: number, p1: number, p2: number): void;

declare function N_0x570a13a4ca2799bb(p0: number, p1: number): void;

declare function N_0x5737199af2dc609f(p0: number, p1: number, p2: number): void;

declare function N_0x5744562e973e33cd(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): number;

declare function N_0x5758b1ee0c3fd4ac(p0: number, p1: number): void;

declare function N_0x5759160ac17c13ce(p0: number, p1: number): void;

declare function N_0x57639fd876b68a91(p0: number): number;

declare function N_0x57779b55b83e2bea(p0: number): number;

declare function N_0x577c60ba06d0ea64(p0: number): number;

declare function N_0x578907f59ba01b6d(p0: number): number;

declare function N_0x578e2fa64e847c60(popZone: number, p1: number): void;

declare function N_0x57a197ad83f66bbf(p0: number): void;

declare function N_0x57c242543b7b8fb9(p0: number, p1: number): void;

declare function N_0x57c6525034e76eb0(): void;

declare function N_0x57d9991dc1334151(p0: number): number;

declare function N_0x57e798b54c45ee1a(p0: number): number;

declare function N_0x57e798b56c45ee15(p0: number): number;

declare function N_0x57e798b57c45ee16(p0: number): number;

declare function N_0x57f35552e771be9d(p0: number, p1: number): void;

declare function N_0x5801be2df2af07ec(p0: number): void;

declare function N_0x5809dbca0a37c82b(p0: number): number;

declare function N_0x580d71dfe0088e34(p0: number, p1: number): number;

declare function N_0x580f34c726387226(p0: number, p1: number): number;

declare function N_0x58125b691f6827d5(p0: number): void;

declare function N_0x581edbe56e8d62c9(p0: number, p1: number): void;

declare function N_0x5826efd6d73c4de5(p0: number): void;

declare function N_0x5827be85a87b073d(p0: number): void;

declare function N_0x582f73acfe969571(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0x583ae9af9cee0958(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): number;

declare function N_0x58425fca3d3a2d15(p0: number): number;

declare function N_0x58521e6dcde97d74(p0: number, p1: number, p2: number): void;

declare function N_0x585ce159db46fadb(p0: number, p1: number): void;

declare function N_0x58ac173a55d9d7b4(p0: number, p1: number, p2: number): void;

declare function N_0x58cc181719256197(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0x58d32261ae0f0843(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
): void;

declare function N_0x58d378af2c8765b7(p0: number): number;

declare function N_0x58de624fa7fb0e7f(p0: number): number;

declare function N_0x58e0b01d45ca7357(p0: number): void;

declare function N_0x58f2244c1286d09a(p0: number, p1: number): number;

declare function N_0x58f7db5bd8fa2288(p0: number): void;

declare function N_0x59174f1afe095b5a(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
): void;

declare function N_0x592f58bc4d2a2cf3(p0: number, p1: number): number;

declare function N_0x595478b3bbc3076d(): number;

declare function N_0x595550376b7ea230(p0: number): number;

declare function N_0x59577799f6ae2f34(p0: number): void;

declare function N_0x595f028698072dd9(p0: number): boolean;

declare function N_0x59606519ff9d3ec2(p0: number, p1: number): number;

declare function N_0x59643424b68d52b5(p0: number): number;

declare function N_0x597f571ddee3ffac(p0: number): void;

declare function N_0x59872ea4cbd11c56(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
): number;

declare function N_0x59ae5ca4ffb4e378(p0: number, p1: number): number;

declare function N_0x59aea4dc640814b9(p0: number, p1: number): void;

declare function N_0x59b57c4b06531e1e(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
): number;

declare function N_0x59bd177a1a48600a(p0: number, p1: number): void;

declare function N_0x59c7ad6fea2ac449(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function N_0x59de03442b6c9598(p0: number): number;

declare function N_0x59ea80079b86d8c7(p0: number): number;

declare function N_0x59eca796021b0539(vehicle: number, p1: boolean): void;

declare function N_0x59f0aff3e0a1b019(p0: number, p1: number, p2: number): void;

declare function N_0x59fa676177dbe4c9(p0: number): number;

declare function N_0x5a10d6506b2f2c63(p0: number, p1: number): void;

declare function N_0x5a13586a9447931f(p0: number): number;

declare function N_0x5a1a929c8b729b4a(p0: number): void;

declare function N_0x5a34cd9c3c5bec44(p0: number): boolean;

declare function N_0x5a3b54addf5472a3(p0: number): number;

declare function N_0x5a40040bb5ae3ea2(p0: number): void;

declare function N_0x5a498fca232f71e1(p0: number, p1: number): void;

declare function N_0x5a4e1a41e3a02ad0(p0: number, p1: number, p2: number): void;

declare function N_0x5a695bd328586b44(p0: number, p1: number): number;

declare function N_0x5a79220f6d38d7c3(p0: number): number;

declare function N_0x5a8b01199c3e79c3(): void;

declare function N_0x5a91bcef74944e93(p0: number, p1: number): void;

declare function N_0x5a989b7ee3672a56(p0: number, p1: number): void;

declare function N_0x5aabb09f6fbd1f87(p0: number, p1: number): void;

declare function N_0x5aadc7bbbb1bceeb(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): void;

declare function N_0x5ac0944c156e5f44(p0: number): number;

declare function N_0x5ac6e0fa028369de(): void;

declare function N_0x5ae0cb5f35f034fd(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
): void;

declare function N_0x5ae17c6b0134b7f1(): number;

declare function N_0x5af19b6cc2115d34(p0: number, p1: number, p2: number): void;

declare function N_0x5af24ca9c974e51a(p0: number, p1: number): void;

declare function N_0x5affa9ddc87846f8(p0: number): number;

declare function N_0x5b1a26bb18e7d451(p0: number): number;

declare function N_0x5b235f24472f2c3b(p0: number, p1: number): number;

declare function N_0x5b23dff8e0948bb2(p0: number, p1: number): void;

declare function N_0x5b4a8121a47d844d(p0: number): number;

declare function N_0x5b4bbe80ad5972dc(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
): number;

declare function N_0x5b53ca0e2ac3ff45(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0x5b6193813e03e4e9(p0: number): number;

declare function N_0x5b637d6f3b67716a(p0: number): void;

declare function N_0x5b68d0007d9c92eb(p0: number, p1: number): void;

declare function N_0x5b73975b4f12f7f3(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): void;

declare function N_0x5b7b97e99f84138b(p0: number): number;

declare function N_0x5b7d7bf36d2de18b(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
): void;

declare function N_0x5b9813ecf7633fe8(p0: number): void;

declare function N_0x5b9c6ac118fd4774(): void;

declare function N_0x5ba659955369b0e2(p0: number): number;

declare function N_0x5ba7a68a346a5a91(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0x5bb04bc74a474b47(p0: number, p1: number): void;

declare function N_0x5bc885ebd75faa7d(p0: number, p1: number): void;

declare function N_0x5bcf0b79d4f5dba3(p0: number, p1: number): void;

declare function N_0x5bd616735f16bf5c(entity: number, interior: number): void;

declare function N_0x5bd7457221cc5ff4(p0: number, p1: number): void;

declare function N_0x5bf0b9d9a8e227a0(p0: number): number;

declare function N_0x5c16855277819bbf(): number;

declare function N_0x5c2e5e3caeeb1f58(p0: number, p1: number, p2: number): void;

declare function N_0x5c2ea6c44f515f34(p0: number): number;

declare function N_0x5c3c55eaad19915f(p0: number, p1: number): void;

declare function N_0x5c497525f803486b(): void;

declare function N_0x5c674eb487891f6b(): number;

declare function N_0x5c6c7c70ca302801(p0: number): number;

declare function N_0x5c885e0978b6ad60(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): number;

declare function N_0x5c90e20c25e6d83c(p0: number): void;

declare function N_0x5c9978a2a3dc3d0d(): void;

declare function N_0x5c9c3a466b3296a8(p0: number): number;

declare function N_0x5ca20fbe49891bbd(p0: number, p1: number): void;

declare function N_0x5ca6bbd4a7d8145e(p0: number): number;

declare function N_0x5ca7fb7d6de49dcc(): number;

declare function N_0x5cb71eaa1429a358(p0: number): void;

declare function N_0x5cb8b0c846d0f30b(p0: number): void;

declare function N_0x5cd3aad8ff9ed121(p0: number): void;

declare function N_0x5ce5cacc01d0f985(): void;

declare function N_0x5d10b3795f3fc886(): boolean;

declare function N_0x5d1c5d8e62e8ee1c(p0: number): number;

declare function N_0x5d3c528b7a7df836(p0: number): void;

declare function N_0x5d4cd22a8c82a81a(p0: number, p1: number): void;

declare function N_0x5d5e2102b174b8d2(): number;

declare function N_0x5d6182f3bce1333b(p0: number, p1: number): number;

declare function N_0x5d7bfda2290b4e39(p0: number): number;

declare function N_0x5d9b0baaf04cf65b(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function N_0x5da36cccb63c0895(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0x5e214112806591ea(p0: number, p1: number): number[];

declare function N_0x5e3ccf03995388b5(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function N_0x5e420ff293ee5472(): number;

declare function N_0x5e5d96be25e9df68(p0: number): number;

declare function N_0x5e6f375ca101c108(p0: number, p1: number): void;

declare function N_0x5e71e72a94985214(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
): void;

declare function N_0x5e94ea09e7207c16(): number;

declare function N_0x5e981c764df33117(p0: number, p1: number): void;

declare function N_0x5e9faf6c513347b4(p0: number, p1: number): number;

declare function N_0x5ea655f01d93667a(p0: number): number;

declare function N_0x5ebe38a20bc51c27(p0: number): number;

declare function N_0x5ed39da62beb1330(p0: number): number;

declare function N_0x5ee6fccc9c832ca2(p0: number): number[];

declare function N_0x5efa8a3d8a60d662(p0: number, p1: number): number;

declare function N_0x5f0e99071582deca(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0x5f217bc1190503d8(p0: number, p1: number): void;

declare function N_0x5f53010c4c3f6baf(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function N_0x5f57522bc1eb9d9d(p0: number, p1: number): void;

declare function N_0x5f5b1b7e8e8f94c6(p0: number): number;

declare function N_0x5f8e0303c229c84b(p0: number, p1: number): void;

declare function N_0x5fc9357c26daefce(): number;

declare function N_0x5fcf25d584065bfd(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function N_0x5fe444eb67c70ad4(p0: number): number;

declare function N_0x5ff9a878c3d115b8(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0x600bbdd29820370c(p0: number): void;

declare function N_0x603469298a4308af(p0: number): void;

declare function N_0x6035e8fbca32ac5e(): void;

declare function N_0x603ac35fd4602c76(p0: number): number;

declare function N_0x604190f0cf0df158(p0: number, p1: number): void;

declare function N_0x604e1010e3162e86(p0: number, p1: number, p2: number): void;

declare function N_0x6052b4de6657684f(p0: number): number;

declare function N_0x606d529dada3c940(p0: number, p1: number): void;

declare function N_0x6072b7420a83a03f(): number;

declare function N_0x6076213101a47b3b(p0: number): void;

declare function N_0x608ad36a644a97fe(p0: number, p1: number, p2: number): void;

declare function N_0x608bc6a6aacd5036(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): number;

declare function N_0x6090a031c69f384e(p0: number, p1: number): void;

declare function N_0x6095358c4142932a(p0: number): void;

declare function N_0x6098139150dcc745(p0: number, p1: number): number;

declare function N_0x60b7d1dcc312697d(p0: number): number;

declare function N_0x6102830f764b3de1(p0: number): number;

declare function N_0x610438375e5d1801(p0: number): number;

declare function N_0x6123e2832c34243d(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): void;

declare function N_0x6127f25ed21c533c(p0: number): number;

declare function N_0x614682e715adbaac(): void;

declare function N_0x614d0b4533f842d3(p0: number): number;

declare function N_0x615b3b8e73634509(p0: number, p1: number): void;

declare function N_0x615dc4a82e90bb48(p0: number, p1: number, p2: number): void;

declare function N_0x617d3494ad58200f(p0: number): number;

declare function N_0x61914209c36efddb(p0: number): number;

declare function N_0x619e63980bfc0096(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0x61b2aaef645ddaf0(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): number;

declare function N_0x61b98367d93f012f(p0: number): void;

declare function N_0x61bda07407754a5c(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function N_0x61be7d6186260002(p0: number): number;

declare function N_0x61bfbaa795e712ad(): void;

declare function N_0x61cae9d1fd055e44(): number;

declare function N_0x621d1b289caf5978(p0: number): number;

declare function N_0x6243635af2f1b826(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): number;

declare function N_0x627520389e288a73(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0x627b68d9ce6ee8de(p0: number): number;

declare function N_0x627f7f3a0c4c51ff(p0: number, p1: number): void;

declare function N_0x628e742fe1f79c4a(p0: number, p1: number): void;

declare function N_0x62b384fefde06817(): number;

declare function N_0x62b9f9a1272aed80(p0: number): void;

declare function N_0x62be3ecc79fbd004(p0: number): number;

declare function N_0x62c9eb51656d68ce(p0: number): number;

declare function N_0x62cab7db62ead434(p0: number, p1: number): number;

declare function N_0x62d5f0588915b277(): void;

declare function N_0x62de46f061caa468(): number;

declare function N_0x62ed71e133b6c9f1(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function N_0x62fdad5e01d2dd47(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
): number;

declare function N_0x62fdf4e678e40cc6(p0: number, p1: number): number;

declare function N_0x630e7b01f091a197(p0: number, p1: number): number;

declare function N_0x6318fb3be37e11b3(p0: number, p1: number): void;

declare function N_0x631cd2d77fdc0316(p0: number): void;

declare function N_0x63246a24f5747510(p0: number, p1: number): void;

declare function N_0x6329c34bee5bff4b(p0: number, p1: number): number;

declare function N_0x632aa10bf7ea53d3(p0: number, p1: number): void;

declare function N_0x632be8d84846fa56(): void;

declare function N_0x63342c50ec115ce8(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
  p10: number,
  p11: number,
  p12: number,
): number;

declare function N_0x6339c1ea3979b5f7(p0: number, p1: number): number;

declare function N_0x633f83b301c87994(p0: number, p1: number): void;

declare function N_0x634c19521485ab25(p0: number): void;

declare function N_0x634f4a0562cf19b8(): void;

declare function N_0x63509ddf102e08e8(p0: number, p1: number): void;

declare function N_0x635423d55ca84fc8(p0: number): number;

declare function N_0x6355602c02edc6df(p0: number, p1: number): void;

declare function N_0x6378a235374b852f(p0: number, p1: number): void;

declare function N_0x638a3a81733086db(): number;

declare function N_0x638fcfc6042a9473(p0: number, p1: number): void;

declare function N_0x63aa2b8eb087886a(p0: number, p1: number): void;

declare function N_0x63b83a526329afbc(p0: number): void;

declare function N_0x63cbbd6ca6f321f9(p0: number, p1: number): void;

declare function N_0x63dc1f22c903b709(vehicle: number, p1: boolean): void;

declare function N_0x63e39f09310f481f(p0: number, p1: number): void;

declare function N_0x63e5841a9264d016(p0: number): void;

declare function N_0x63e7279d04160477(p0: number, p1: number): void;

declare function N_0x63e9dcbc8b0931ed(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0x640a602946a8c972(p0: number): number;

declare function N_0x640f890c3e5a3ffd(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0x641092322a8852ab(): void;

declare function N_0x641351e9ad103890(p0: number, p1: number): void;

declare function N_0x642720d8d69328b6(p0: number, p1: number): void;

declare function N_0x64340dc208d671d5(p0: number): void;

declare function N_0x643fd1556f621772(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0x644439b5387ee57e(p0: number, p1: number): number;

declare function N_0x644ccb76a76cfbd6(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
): void;

declare function N_0x644e02f24f9d4e98(p0: number, p1: number): number;

declare function N_0x6452b1d357d81742(p0: number, p1: number): number;

declare function N_0x646564a3b7df68f8(p0: number, p1: number, p2: number): void;

declare function N_0x646ed1a1d28487df(p0: number, p1: number): void;

declare function N_0x6480723d3be535b6(p0: number): void;

declare function N_0x64a36ba85ce01a81(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): number;

declare function N_0x64b956f4e761df5c(p0: number): void;

declare function N_0x64f765d9a1f8f02c(p0: number, p1: number, p2: number): void;

declare function N_0x64ff4bf9af59e139(p0: number, p1: number): void;

declare function N_0x6506bfa755fb209c(): number;

declare function N_0x6507ac3bd7c99009(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): number;

declare function N_0x6519238858af5479(p0: number): void;

declare function N_0x651f0530083c0e5a(p0: number, p1: number): void;

declare function N_0x6554ecce226f2a2a(p0: number): number;

declare function N_0x6569f31a01b4c097(p0: number, p1: number, p2: number): void;

declare function N_0x6571e4327390ec0b(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
): void;

declare function N_0x6579860a5558524a(p0: number, p1: number): void;

declare function N_0x65887eac535a0b0c(p0: number): void;

declare function N_0x65a5f70f4a292ebe(p0: number, p1: number, p2: number): void;

declare function N_0x65a8196b8d7f5e0b(p0: number): number;

declare function N_0x65b205bf30c13ddb(p0: number): void;

declare function N_0x65d281985f2bdfc2(p0: number, p1: number): void;

declare function N_0x65e65ca6a0fe59d4(p0: number): number;

declare function N_0x65f040d91001ed4b(p0: number): void;

declare function N_0x660639bc60157048(p0: number, p1: number): number;

declare function N_0x660a8f876df1d4f8(p0: number): void;

declare function N_0x6614f9039bd31931(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0x661bb1e1ff77742d(p0: number): number;

declare function N_0x662d364abf16de2f(p0: number, p1: number): number;

declare function N_0x6647c5f6f5792496(ped: number, p1: boolean): void;

declare function N_0x665161d250850a9f(p0: number): number;

declare function N_0x6652b0c8f3d414d0(p0: number): void;

declare function N_0x665b21666351cb37(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0x666c2f53abefc952(p0: number): number;

declare function N_0x668af6e4933ac13f(p0: number, p1: number): void;

declare function N_0x669655ffb29ef1a9(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function N_0x669c25840c6f7ae2(p0: number, p1: number): void;

declare function N_0x66b1cb778d911f49(p0: number, p1: number): void;

declare function N_0x66b2b83b94b22458(p0: number): number;

declare function N_0x66b957aac2eaaeab(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
): void;

declare function N_0x66bc28e50e85270e(p0: number): number;

declare function N_0x66c047719b0e80e1(p0: number, p1: number): void;

declare function N_0x66ee5b93c308f734(p0: number): number;

declare function N_0x66f35dd9d2b58579(): number;

declare function N_0x66f9eb44342bb4c5(p0: number, p1: number): void;

declare function N_0x66ff395445a88a6e(p0: number, p1: number, p2: number): void;

declare function N_0x6703872ec09bc158(p0: number, p1: number): void;

declare function N_0x6718f40313a2b5a6(p0: number): number;

declare function N_0x671a07c9a1cd50a5(p0: number): number;

declare function N_0x6734f0a6a52c371c(p0: number, p1: number): void;

declare function N_0x673a8779d229ba5a(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
): void;

declare function N_0x674b90be1115846d(p0: number, p1: number): void;

declare function N_0x675680d089bfa21f(p0: number, p1: number): void;

declare function N_0x6759bee6762e140b(p0: number): void;

declare function N_0x67659a8f248e0141(p0: number, p1: number): void;

declare function N_0x6786d7afac3162b3(p0: number): void;

declare function N_0x678d3226cf70b9c8(p0: number, p1: number): number;

declare function N_0x678f00858980f516(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0x67995318f5faa496(p0: number): number;

declare function N_0x67a43ea3f6fe0076(p0: number): void;

declare function N_0x67b0778c62e74423(p0: number): void;

declare function N_0x67bfced22909834d(p0: number): void;

declare function N_0x67ccdf74c4df7169(): number;

declare function N_0x67e21acc5c0c970c(p0: number, p1: number, p2: number): void;

declare function N_0x67f7ceac2391e114(p0: number, p1: number): void;

declare function N_0x68103e2247887242(): void;

declare function N_0x6818d1a194e29983(): number;

declare function N_0x68319452c5064aba(p0: number, p1: number): void;

declare function N_0x6835afea10e186f4(p0: number, p1: number): void;

declare function N_0x6852288340b43239(p0: number, p1: number): number;

declare function N_0x6862e4d93f64cf01(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): number;

declare function N_0x68821369a2ceadd5(p0: number, p1: number): number;

declare function N_0x68830738a6bfb370(p0: number, p1: number): void;

declare function N_0x6888a43c35a5f630(p0: number): number;

declare function N_0x68a0389e0718ac8f(p0: number): number;

declare function N_0x68f6a75fdf5a70d6(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function N_0x690806bc83bc8ca2(p0: number): number;

declare function N_0x691e4de5309eaefc(p0: number, p1: number): void;

declare function N_0x6929e22158e52265(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0x694ffa4308060cd1(p0: number, p1: number): void;

declare function N_0x695dac2db928f308(p0: number, p1: number): void;

declare function N_0x6968ce7ac32f6788(p0: number): void;

declare function N_0x69786495c92a3044(p0: number): number;

declare function N_0x697df68f3a761a50(p0: number): void;

declare function N_0x69c810b72291d831(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
): void;

declare function N_0x69d65e89ffd72313(p0: number, p1: number): void;

declare function N_0x69e181772886f48b(p0: number): number;

declare function N_0x6a0184e904cdf25e(p0: number, p1: number): void;

declare function N_0x6a190b94c2541a99(p0: number): void;

declare function N_0x6a1af481407bf6e9(p0: number): void;

declare function N_0x6a4404bdfa62ce2c(p0: number, p1: number): void;

declare function N_0x6a489892e813951a(p0: number): void;

declare function N_0x6a4d224fc7643941(p0: number): void;

declare function N_0x6a564540fac12211(p0: number, p1: number): void;

declare function N_0x6a648d42bf271dc7(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
): void;

declare function N_0x6a6e79fbe8678c98(): void;

declare function N_0x6a9df0fcd0c87ff9(): void;

declare function N_0x6aa3dca2c6f5eb6d(p0: number): number;

declare function N_0x6ab944df68b512d3(p0: number): void;

declare function N_0x6abad7b0a854f8fb(p0: number): number;

declare function N_0x6abc50979655bee7(p0: number, p1: number, p2: number): void;

declare function N_0x6ac4af46a6b8dfb2(p0: number): void;

declare function N_0x6ad66548840472e5(p0: number): number;

declare function N_0x6adf821fbf21920e(p0: number, p1: number): void;

declare function N_0x6afd84aeaa3ea538(p0: number): number;

declare function N_0x6afda2264925bd11(p0: number): void;

declare function N_0x6b1044fdc2b09101(p0: number, p1: number): void;

declare function N_0x6b34be961f639e21(p0: number, p1: number): void;

declare function N_0x6b44f13d888f770d(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
): void;

declare function N_0x6b53f4b811e583d2(p0: number, p1: number): void;

declare function N_0x6b5ddfb967e5073d(p0: number, p1: number): void;

declare function N_0x6b67320e0d57856a(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function N_0x6b7a88a61b41e589(p0: number): void;

declare function N_0x6b89faa36fc909a3(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): number;

declare function N_0x6b9c5c38838fb6e6(p0: number): void;

declare function N_0x6b9fe4f0ba521a19(p0: number, p1: number): void;

declare function N_0x6ba606ab3a83bc4d(p0: number): number;

declare function N_0x6bab7aced1017204(p0: number, p1: number): number;

declare function N_0x6bcf5f3d8ffe988d(p0: number, p1: number): void;

declare function N_0x6bcf7b5cd338281a(p0: number, p1: number, p2: number): void;

declare function N_0x6bed40493a1afdb8(p0: number, p1: number): void;

declare function N_0x6befaa907b076859(p0: number): void;

declare function N_0x6bfbdc46139c45ab(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0x6bff5f84102df80a(player: number): void;

declare function N_0x6bffb7c276866996(p0: number): number;

declare function N_0x6c03118e9e5c1a14(p0: number): void;

declare function N_0x6c1053c433a573cf(p0: number): void;

declare function N_0x6c269f673c47031e(p0: number): number;

declare function N_0x6c27442a225a241a(p0: number): number;

declare function N_0x6c31b06e91518269(p0: number, p1: number): void;

declare function N_0x6c3f12eceb6d2e2a(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
): void;

declare function N_0x6c4dbf553885f9eb(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0x6c50b9dccca70023(p0: number): number;

declare function N_0x6c54e69516cc56bd(p0: number): number;

declare function N_0x6c57bea886a20c6b(p0: number, p1: number): void;

declare function N_0x6c76bc24f8bb709a(p0: number, p1: number, p2: number): void;

declare function N_0x6c7b68d3ce60e8de(p0: number): number;

declare function N_0x6c7e04e9de451789(): void;

declare function N_0x6c87f49bfa181db5(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0x6c9f12700bce69f4(p0: number, p1: number): number;

declare function N_0x6ca484c9a7377e4f(p0: number, p1: number): number;

declare function N_0x6cab0ba160b168d2(): void;

declare function N_0x6cd79468a1e595c6(padIndex: number): boolean;

declare function N_0x6cee2e30021daec6(): void;

declare function N_0x6cf82a7f65a5ad5f(p0: number, p1: number): number;

declare function N_0x6cfc373008a1edaf(p0: number): number;

declare function N_0x6d07b371e9439019(p0: number): void;

declare function N_0x6d206d383bb5f6b1(p0: number, p1: number): number;

declare function N_0x6d2f987736a42d4c(p0: number, p1: number, p2: number): void;

declare function N_0x6d3ac61694a791c5(p0: number): number;

declare function N_0x6d4d25c2137ff511(p0: number, p1: number, p2: number): void;

declare function N_0x6d58167f62238284(p0: number): number;

declare function N_0x6d5f9e69ba1be783(p0: number): void;

declare function N_0x6d85126f6ccf02c9(p0: number, p1: number, p2: number): void;

declare function N_0x6d87ba8ef15226cd(): number;

declare function N_0x6da15746d5cc1a92(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
): void;

declare function N_0x6dad6630ae4a74cb(p0: number, p1: number): void;

declare function N_0x6db875afc584fa32(p0: number, p1: number): number;

declare function N_0x6dbf2d78709ad70b(p0: number, p1: number): void;

declare function N_0x6de03bcc15e81710(
  p0: number,
  p1: number,
  p2: number,
): number[];

declare function N_0x6de072ac8a95ffc1(p0: number, p1: number): void;

declare function N_0x6df942c4179be5ab(p0: number, p1: number): number;

declare function N_0x6dfd37e586d4f44f(): number;

declare function N_0x6e0d3c3f828da773(p0: number, p1: number): void;

declare function N_0x6e2aa80bb0c03728(p0: number, p1: number): number;

declare function N_0x6e2fd8cf7eb10e53(p0: number, p1: number): number;

declare function N_0x6e4e1a82081eabed(p0: number): number;

declare function N_0x6e585a616abb8401(p0: number): number;

declare function N_0x6e5cbcb3941d7d08(p0: number, p1: number): number;

declare function N_0x6e8b87139854022d(p0: number, p1: number): void;

declare function N_0x6e8eb45a4f4460eb(p0: number): void;

declare function N_0x6e969927cf632608(p0: number): void;

declare function N_0x6ea0e93cffa472cc(p0: number): void;

declare function N_0x6ea1273d525427f4(p0: number, p1: number, p2: number): void;

declare function N_0x6ec2a67962296f49(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function N_0x6ecfc621a168424c(p0: number, p1: number, p2: number): void;

declare function N_0x6edb5d08cb03e763(p0: number, p1: number): void;

declare function N_0x6eead6af637da752(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
): number;

declare function N_0x6ef4e31b4d5d2da0(p0: number, p1: number): number;

declare function N_0x6f02b5e50511721e(p0: number): number;

declare function N_0x6f1f0b17109309da(p0: number, p1: number): number;

declare function N_0x6f3068258a499e52(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): number;

declare function N_0x6f43c351a5d51e2f(p0: number, p1: number): number;

declare function N_0x6f46f8acb44c4fc1(p0: number): number;

declare function N_0x6f62fae266dcfc81(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
): number;

declare function N_0x6f700a4bf7c3331b(p0: number): void;

declare function N_0x6f73efab11651d7f(p0: number, p1: number): void;

declare function N_0x6fb1da3ca9da7d90(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
): void;

declare function N_0x6fb76442469abd68(p0: number): number;

declare function N_0x6fd7bdf10304363a(p0: number, p1: number): void;

declare function N_0x6fd992c4a1c1b986(): number;

declare function N_0x7020839c7302d8ac(p0: number): number;

declare function N_0x702b75dc9d3ede56(p0: boolean): void;

declare function N_0x70379b5c3ff1d209(): number;

declare function N_0x703d4fb366da4452(p0: number, p1: number): void;

declare function N_0x7043d0681285ba2d(p0: number): void;

declare function N_0x704c908e9c405136(p0: number): void;

declare function N_0x704f92b3af20d857(p0: number): void;

declare function N_0x705be297eebdb95d(p0: number): number;

declare function N_0x70605812abc9ff0f(p0: number, p1: number): void;

declare function N_0x706b434fefad6a24(p0: number): void;

declare function N_0x708df841b8f27aa2(p0: string): void;

declare function N_0x709ba8c08c5c008d(): void;

declare function N_0x70a6658d476c6187(): void;

declare function N_0x710448d44a64c213(p0: number): void;

declare function N_0x712b2c2b2471b493(p0: number, p1: number): void;

declare function N_0x7146cf430965927c(p0: number, p1: number): void;

declare function N_0x714a0ea7de1167be(p0: number, p1: number): number;

declare function N_0x716f17f8a0419f95(p0: number): number;

declare function N_0x717da2281df90855(p0: number): number;

declare function N_0x7182edda1ee7db5a(p0: number): void;

declare function N_0x71845905bccde781(p0: number): void;

declare function N_0x718c6ecf5e8cbdd4(): void;

declare function N_0x718eb706b6e998a0(p0: number): void;

declare function N_0x71d71e08a7ed5bd7(p0: number): void;

declare function N_0x71fa2d1880c48032(p0: number): void;

declare function N_0x72068021f498e6e3(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): number;

declare function N_0x722d6a49200174fe(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): void;

declare function N_0x722fbe08ef5b87bd(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): number;

declare function N_0x725d52f21a5e9e22(p0: number): number;

declare function N_0x725d52f21a5e9ef6(p0: number): number;

declare function N_0x7264f9ca87a9830b(p0: number): number;

declare function N_0x7274f84b1501b523(p0: number): void;

declare function N_0x727ab6f008bb9f29(p0: number, p1: number): number;

declare function N_0x728491fb3dffef99(p0: number): void;

declare function N_0x72904d3d62af5839(): number;

declare function N_0x729d52461aea9e22(p0: number): number;

declare function N_0x729d52f61a5a9e22(p0: number): number;

declare function N_0x72ad59f7b7fb6e24(p0: number, p1: number): number;

declare function N_0x72b2e00c9bac6789(p0: number, p1: number): number;

declare function N_0x72b7f65f11fc8896(p0: number): void;

declare function N_0x72d4cb5db927009c(p0: number, p1: number, p2: number): void;

declare function N_0x72e30372e7cc4415(p0: number, p1: number): void;

declare function N_0x72e4d1c4639bc465(p0: number, p1: number): number;

declare function N_0x73118a3ee9c9b6db(p0: number, p1: number, p2: number): void;

declare function N_0x733077295ab51304(p0: number): void;

declare function N_0x7332461fc59eb7ec(p0: number): number;

declare function N_0x73348402566ecb6e(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function N_0x733c87d4ce22bea2(p0: number): void;

declare function N_0x734311e2852760d0(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0x7351da734f989f4e(p0: number): number;

declare function N_0x735662994e60a710(p0: number, p1: number): void;

declare function N_0x735762e8d7573e42(p0: number, p1: number, p2: number): void;

declare function N_0x73616e64696c132e(p0: number, p1: number): number;

declare function N_0x73616e64696c616e(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): number;

declare function N_0x738271b660fe0695(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): number;

declare function N_0x739b9c6d0e7f7f93(p0: number, p1: number): void;

declare function N_0x73b40d97d7baad77(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): number;

declare function N_0x73b6f907b913c860(p0: number, p1: number): void;

declare function N_0x73bad7b2f2db50de(p0: number, p1: number): void;

declare function N_0x73eb2ef2e92d23bf(): number;

declare function N_0x73f0d0327bfa0812(p0: number): number;

declare function N_0x73f1e4f6df26fe30(p0: boolean): void;

declare function N_0x73ff6be63dc18819(): number;

declare function N_0x7406c71f4ac2ffcc(p0: number): void;

declare function N_0x7408b5c66ba31adb(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
  p10: number,
): void;

declare function N_0x7409669c5ed50144(p0: number): number;

declare function N_0x7423f7835770f619(p0: number): void;

declare function N_0x7455cd705f7e933e(): void;

declare function N_0x745808bb01cec6b9(p0: number): void;

declare function N_0x7467165ee97d3c68(p0: number): number;

declare function N_0x747257807b8721ce(p0: number, p1: number): number;

declare function N_0x748c5f51a18cb8f0(p0: number): void;

declare function N_0x748d5e0d2a1a4c61(p0: number, p1: number, p2: number): void;

declare function N_0x74aca66484cebaf0(p0: number): void;

declare function N_0x74bcceb233ad95b2(p0: number, p1: number): void;

declare function N_0x74c2365fdd1bb48f(p0: number, p1: number): void;

declare function N_0x74c2b3dc0b294102(p0: number): void;

declare function N_0x74c333e34df74e8a(action: string): void;

declare function N_0x74c3b1093728d263(p0: number, p1: number): number;

declare function N_0x74c8000fdd1bb111(p0: number, p1: number): number;

declare function N_0x74c8000fdd1bb222(p0: number, p1: number): number;

declare function N_0x74c9080fdd1bb48e(p0: number, p1: number): void;

declare function N_0x74c9080fdd1bb48f(p0: number, p1: number): void;

declare function N_0x74c9090fdd1bb48e(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function N_0x74c90aaacc1dd48f(p0: number): void;

declare function N_0x74e2261d2a66849a(p0: number): void;

declare function N_0x74f0209674864cbd(): number;

declare function N_0x74f1d22efa71fab8(): number;

declare function N_0x74f512e29cb717e2(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): number;

declare function N_0x74f99ef7ef503398(p0: number): number;

declare function N_0x74fb3e29e6d10fa9(): number;

declare function N_0x750d42c013f64ae7(p0: number, p1: number): void;

declare function N_0x751a7e0eaedad0d3(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0x751df00eeff122e3(p0: number): void;

declare function N_0x7528720101a807a5(p0: number, p1: number): void;

declare function N_0x753b15ad0fd6f3e3(p0: number): number;

declare function N_0x754616ec6965d1bf(): void;

declare function N_0x754616ec6965d1fb(): void;

declare function N_0x754937c28271bc65(p0: number): void;

declare function N_0x7549b9e841940695(vehicle: number, p1: boolean): void;

declare function N_0x755901c7598b97bc(p0: number, p1: number): number;

declare function N_0x755e08680f21ef30(p0: number): number;

declare function N_0x7563cbca99253d1a(p0: number, p1: number): void;

declare function N_0x756c7b4c43df0422(p0: number): number;

declare function N_0x7581972adf5d699a(p0: number, p1: number): void;

declare function N_0x7583a9d35248b83f(p0: number): number;

declare function N_0x758f081db204ddde(p0: number): number;

declare function N_0x75a082563b4452e5(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function N_0x75b49acd73617437(vehicle: number, p1: boolean): void;

declare function N_0x75ba1cb3b7d40caf(ped: number, p1: boolean): void;

declare function N_0x75cbf20ba47e4f89(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): number;

declare function N_0x75cfac49301e134e(p0: number, p1: number, p2: number): void;

declare function N_0x75cfac49301e134f(p0: number, p1: number, p2: number): void;

declare function N_0x75d3333409cd33ce(p0: number, p1: number, p2: number): void;

declare function N_0x75df9e73f2f005fd(p0: number): number;

declare function N_0x75f90e4051cc084c(p0: number, p1: number): void;

declare function N_0x75fc34a2ba345bd1(): number;

declare function N_0x76160e0396142765(p0: number): number;

declare function N_0x762fdc4c19e5a981(p0: number, p1: number): void;

declare function N_0x763637f9b838b0a7(p0: number, p1: number, p2: number): void;

declare function N_0x764db5a48390fbad(p0: number, p1: number): void;

declare function N_0x765e60a1dcb8b1ce(): void;

declare function N_0x766315a564594401(p0: number, p1: number, p2: number): void;

declare function N_0x7678fe0455ed1145(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0x767931c727df2ed7(p0: number, p1: number): number;

declare function N_0x7681b677400c7071(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): void;

declare function N_0x768e81ae285a4b67(p0: number, p1: number): void;

declare function N_0x769bb7626b8cdb06(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
): number;

declare function N_0x769e848c66e3c2bb(p0: number): [boolean, number, number];

declare function N_0x76bad9d538bca1aa(p0: number, p1: number): void;

declare function N_0x76cbcd9eadc00955(): void;

declare function N_0x76cf93d4b416b288(p0: number): number;

declare function N_0x76f7e1bcd623a429(p0: number): void;

declare function N_0x771dfcb24d19c2f6(p0: number): number;

declare function N_0x77243ed4f7caaa55(p0: number): number;

declare function N_0x772a1969f649e902(p0: number): number;

declare function N_0x77525bbf433f2cd6(p0: number): number;

declare function N_0x775a1ca7893aa8b5(p0: number): number;

declare function N_0x775b2ed944e44973(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
): void;

declare function N_0x7761a30432c91297(p0: number, p1: number, p2: number): void;

declare function N_0x777d0571a466b520(p0: number): void;

declare function N_0x778d4733e0f2f265(p0: number): void;

declare function N_0x77a6e4ad0c496f81(p0: number): number;

declare function N_0x77b0b6d17a3ac9aa(p0: number, p1: number): void;

declare function N_0x77b299e8799b1332(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0x77ba37622e22023b(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): number;

declare function N_0x77d65669a05d1a1a(): void;

declare function N_0x77e83c315a3b31ca(p0: number): void;

declare function N_0x78030c7867d8b9b6(p0: number, p1: number): void;

declare function N_0x7803436e68c32b26(): void;

declare function N_0x780c5b9ae2819807(p0: number, p1: number): number;

declare function N_0x782c94db6469634d(p0: number): void;

declare function N_0x78335e12db0bf961(p0: number): number;

declare function N_0x7840576c50a13dba(p0: number, p1: number): void;

declare function N_0x785177e4d57d7389(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): void;

declare function N_0x785639d89f8451ab(p0: number, p1: number): number[];

declare function N_0x787e43477746876f(p0: number): void;

declare function N_0x78815fc52832b690(p0: number, p1: number): void;

declare function N_0x78857fc65cadb909(p0: boolean): void;

declare function N_0x789dabd18e9024db(p0: number, p1: number, p2: number): void;

declare function N_0x78a9535af83715c6(): number;

declare function N_0x78b3d19af6391a55(p0: number, p1: number): void;

declare function N_0x78b4567e18b54480(p0: number): void;

declare function N_0x78c2e029db205a3a(p0: number, p1: number): void;

declare function N_0x78c56b8a7b1d000c(): number;

declare function N_0x78d8c1d4eb80c588(p0: number): number;

declare function N_0x7907969497ea92f5(p0: number): number;

declare function N_0x790ec421078f5c4e(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0x79197f7d2bb5e73a(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
): number;

declare function N_0x792e3ef76c911959(p0: number): number;

declare function N_0x7933754f260b428a(p0: number): number;

declare function N_0x79407d33328286c6(p0: number): number;

declare function N_0x79443d56c8df45ee(p0: number): number;

declare function N_0x794ab1379a74064d(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
): number;

declare function N_0x79559bad83ccd038(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
): void;

declare function N_0x796085220adcc847(): number;

declare function N_0x796eecff0c6d39be(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0x797b3d4d92e56094(p0: number, p1: number): number;

declare function N_0x7981037a96e7d174(p0: number): void;

declare function N_0x798be43c9393632b(p0: number): void;

declare function N_0x79b1a6e780266db0(p0: number): number;

declare function N_0x79c2bec82cfd7f7f(p0: number): number;

declare function N_0x79e1e511ff7efb13(p0: number): number;

declare function N_0x79f478ff5f9f4f05(p0: number): void;

declare function N_0x79f9c57b8d0dfe90(p0: number, p1: number): number;

declare function N_0x7a17b7981560ffa5(p0: number): void;

declare function N_0x7a1bd123e5cdb6e5(): void;

declare function N_0x7a1fdcf35eaa140f(p0: number): void;

declare function N_0x7a35a72a692be9db(p0: number): number;

declare function N_0x7a49d40de437bc8d(p0: number, p1: number): void;

declare function N_0x7a4e00364b5d727b(p0: number): number;

declare function N_0x7a54d82227a139db(p0: number, p1: number): void;

declare function N_0x7a56d66c78d8ef8e(p0: number, p1: number): number;

declare function N_0x7a76104cc2cc69e8(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0x7a8e8df782b47eb0(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0x7aa043f6c41d151e(p0: number): number;

declare function N_0x7abbd9e449e0db00(p0: number, p1: number): void;

declare function N_0x7ac752103856fb20(p0: boolean): void;

declare function N_0x7ae93c45ec14a166(p0: number, p1: number): number;

declare function N_0x7af1bb4504ea5ed9(): number;

declare function N_0x7b0279170961a73f(p0: number): void;

declare function N_0x7b204f88f6c3d287(p0: number): void;

declare function N_0x7b3ff2d193628126(p0: number): void;

declare function N_0x7b5c293238ee4f20(p0: number): number;

declare function N_0x7b6a04f98bbafb2c(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
  p10: number,
  p11: number,
  p12: number,
  p13: number,
  p14: number,
): void;

declare function N_0x7b8c2b846c05e5ad(): number;

declare function N_0x7baa30c9bbe8aee7(p0: number, p1: number): number;

declare function N_0x7bb810e8b343ac7b(p0: number): number;

declare function N_0x7bca0a3972708436(p0: number, p1: number): number;

declare function N_0x7bcc6087d130312a(p0: number): number;

declare function N_0x7be0746539def0c8(p0: number, p1: number): number;

declare function N_0x7be607daff382fd2(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0x7c00cfc48a782dc0(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
): void;

declare function N_0x7c015d8bcec72cf4(p0: number, p1: number): void;

declare function N_0x7c06330bfdda182e(p0: number): void;

declare function N_0x7c08e7cb8d951b70(p0: number, p1: number): void;

declare function N_0x7c10221ce718aa72(p0: number, p1: number): void;

declare function N_0x7c1c2062cfad06fe(
  unlockHash: string | number,
  data?: number,
): number;

declare function N_0x7c2abf6e556b21fc(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function N_0x7c32191d9fb2bdea(p0: number): void;

declare function N_0x7c334ff4d9215912(p0: number): number;

declare function N_0x7c348310a6e2fb91(p0: number, p1: number): void;

declare function N_0x7c511e91738a0828(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function N_0x7c680ff55617f82f(): number;

declare function N_0x7c709c01d43d94cd(): void;

declare function N_0x7c7e4ab748ea3b07(): number;

declare function N_0x7c803bdc8343228d(p0: number): number;

declare function N_0x7c8aa850617651d9(p0: number, p1: number): number;

declare function N_0x7c907e8a725e5fd2(p0: boolean): void;

declare function N_0x7c981de05a7403a0(): boolean;

declare function N_0x7c9e45a4ced2e8da(p0: number, p1: number): void;

declare function N_0x7cc2186c32d3540a(p0: number, p1: number): number;

declare function N_0x7ce9dc58e3e4755f(): number;

declare function N_0x7cef4ac79f7e7fad(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): void;

declare function N_0x7cf96f1250ef3221(p0: number): number;

declare function N_0x7d0f2014db28dd01(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0x7d4411d6736cd295(p0: number, p1: number): number;

declare function N_0x7d4e70a67a651c71(p0: number): void;

declare function N_0x7d654266025e921b(p0: number): void;

declare function N_0x7d7285efeab5af15(p0: number, p1: number): void;

declare function N_0x7dd7fb3480d8083e(p0: number): void;

declare function N_0x7dddcf815e650ff5(p0: number): number;

declare function N_0x7de4643157ad646c(p0: number): void;

declare function N_0x7de9692c6f64cfe8(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function N_0x7dfb49bcdb73089a(p0: number, p1: number): void;

declare function N_0x7dff8f94937d2659(): void;

declare function N_0x7e002a36aefcfb55(): void;

declare function N_0x7e02e4218d916b94(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0x7e176c676f8652a9(p0: number): void;

declare function N_0x7e2c766adb2c5f1a(p0: number, p1: number): void;

declare function N_0x7e300b5b86ab1d1a(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
  p10: number,
  p11: number,
  p12: number,
  p13: number,
  p14: number,
): void;

declare function N_0x7e3f546acfe6c8d9(entity: number): void;

declare function N_0x7e40a01b11398fcb(): void;

declare function N_0x7e5185b979706210(p0: number, p1: number): void;

declare function N_0x7e6bc0b94f5928f0(
  popZone: number,
  p1: number,
  p2: number,
): void;

declare function N_0x7e7b19a4355fee13(p0: number, p1: number): number;

declare function N_0x7e8f86a4fa33033c(): number;

declare function N_0x7e8f9949b7aabbf0(p0: number, p1: number, p2: number): void;

declare function N_0x7ec0d68233e391ac(p0: number): number;

declare function N_0x7ee3a8660f38797e(p0: number): number;

declare function N_0x7ef2a2fe38d74456(p0: number, p1: number): void;

declare function N_0x7efacc589b98c488(p0: number): number;

declare function N_0x7f090958ae95b61b(p0: number, p1: number): number;

declare function N_0x7f20092547b4ddea(p0: number): void;

declare function N_0x7f458b543006c8fe(p0: number, p1: number): void;

declare function N_0x7f4ce164d9a11dfe(): number;

declare function N_0x7f5d88333ee8a86f(p0: number, p1: number): void;

declare function N_0x7f78cd75cc4539e4(p0: number): void;

declare function N_0x7f89e15a8fb8de97(): void;

declare function N_0x7f8e2b131e1dca6c(p0: number, p1: boolean): void;

declare function N_0x7f9b9791d4cb71f6(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): number;

declare function N_0x7fa58ced69405f9a(p0: number, p1: number): void;

declare function N_0x7fb0088e8769cddb(p0: number, p1: number): void;

declare function N_0x7fb78b2199c10e92(p0: number): void;

declare function N_0x7fc60c94c83c5cd7(p0: number, p1: number, p2: number): void;

declare function N_0x7fc667f6ddfbcdcc(p0: number): number;

declare function N_0x7fc84e85d98f063d(p0: number): number;

declare function N_0x7fcd49388bc9b775(p0: number, p1: number): void;

declare function N_0x7fd78dfd0c5d7b9b(p0: number): number;

declare function N_0x7fee4f07c54b6b3c(p0: number, p1: number): number;

declare function N_0x7ff72de061df55e2(p0: number, p1: number, p2: number): void;

declare function N_0x800df3fc913355f3(p0: number): number;

declare function N_0x801917e7d7bce418(p0: number): void;

declare function N_0x801bd27403f3cba0(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function N_0x802092b07e3b1eea(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): number;

declare function N_0x804425c4bbd00883(p0: number): number;

declare function N_0x8049b17bec937662(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
): number;

declare function N_0x806862e5d266cf38(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0x807e119f80231732(p0: number): void;

declare function N_0x808077647856de62(p0: number, p1: number): number;

declare function N_0x80a02d9f948a8bca(p0: number, p1: number): number;

declare function N_0x80b3e0597366adf1(): void;

declare function N_0x80bb243789008a82(p0: number, p1: number): number;

declare function N_0x80d78bdc9d88ef07(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): number;

declare function N_0x80d7a3e39b120bc4(): number;

declare function N_0x80ddccb2f4a3eb57(
  ped: number,
  vehicle: number,
  p2: boolean,
  p3: boolean,
  p4: boolean,
): boolean;

declare function N_0x80e9c316ef84dd81(p0: number): number;

declare function N_0x80fdeb3a9e9aa578(p0: number, p1: number): void;

declare function N_0x8101ba1c0b462412(p0: number, p1: number): void;

declare function N_0x810e8ae9afea7e54(p0: number): number;

declare function N_0x811a748b1be231ba(p0: number): number;

declare function N_0x8127c5aa05c5a210(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
): void;

declare function N_0x812c1563185c6fb2(): void;

declare function N_0x812ce61debcab948(p0: number, p1: number, p2: number): void;

declare function N_0x814729078aed6d30(): void;

declare function N_0x814d453fcfdf119f(p0: number, p1: number, p2: number): void;

declare function N_0x815653a42c5abe76(): void;

declare function N_0x815c0074a1bc0d93(p0: number, p1: number): void;

declare function N_0x815c4065ae6e6071(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0x816a3acd265e2297(p0: number, p1: number): void;

declare function N_0x81801291806dbc50(p0: number): number;

declare function N_0x818241b3eda84191(p0: number, p1: number): void;

declare function N_0x81847c2134039bdc(p0: number): number;

declare function N_0x818c6ca9b659e8ec(p0: number): void;

declare function N_0x81948dfe4f5a0283(p0: number): void;

declare function N_0x819add5ef1742f47(p0: number, p1: number): void;

declare function N_0x81b75428a7813e67(p0: number, p1: number): void;

declare function N_0x81d7183e7a8eca72(p0: number): number;

declare function N_0x81dcfd13cf39920e(): number;

declare function N_0x81f4e92be3958364(p0: number, p1: number, p2: number): void;

declare function N_0x81fb74c83c2ed69f(p0: number): number;

declare function N_0x821c32c728b24477(p0: number, p1: number, p2: number): void;

declare function N_0x822a001bcea5bd81(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): number;

declare function N_0x8232f37df762acb2(p0: number): void;

declare function N_0x8245c1f3262f4ac2(p0: number): void;

declare function N_0x825f6dd559a0895b(p0: number): number;

declare function N_0x8268b098f6fca4e2(p0: number, p1: number): void;

declare function N_0x827a58ced9d4d5b4(p0: number, p1: number): void;

/**
 * BG_*
 * @param p0 :
 */
declare function N_0x829cd22e043a2577(p0: string | number): number;

declare function N_0x82cb0f3f0c7785e5(p0: number): number;

declare function N_0x82e41d6ade924fca(p0: number): void;

declare function N_0x82ed59f095056550(p0: number, p1: number): void;

declare function N_0x82f11e1296996574(p0: number): void;

declare function N_0x82fa24c3d3fcd9b7(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0x8301d87b1b89e219(p0: number, p1: number): void;

declare function N_0x8312f09c56149a8a(p0: number): void;

declare function N_0x8314fc2013ece2da(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0x831bf01c56149a8a(p0: number): void;

declare function N_0x833d8268d51b4522(p0: number): number;

declare function N_0x833f0053340ef413(p0: number): number;

declare function N_0x835f131e7dc8f97a(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0x8360c47380b6f351(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): number;

declare function N_0x8370d34bd2e60b73(): void;

declare function N_0x8379e05871ad24e0(): void;

declare function N_0x838c216c2b05a009(p0: number, p1: number): void;

declare function N_0x8398438d8f14f56d(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
): number;

declare function N_0x839c9f124be74d94(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): void;

declare function N_0x83acc65d9acec5ef(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: boolean,
): number[];

declare function N_0x83b8d50eb9446bba(p0: number, p1: number): void;

declare function N_0x83c989d5b5b5b466(p0: number, p1: number): void;

declare function N_0x83d43f0fd5276e4d(p0: number, p1: number): number;

declare function N_0x83f28ce49fbbffba(p0: number): boolean;

declare function N_0x83fcd6921fc8fd05(p0: number, p1: number): void;

declare function N_0x83fe8d7229593017(): void;

declare function N_0x841475ac96e794d1(p0: number): number;

declare function N_0x8425c5f057012dab(p0: number): number;

declare function N_0x842ccc9491ffcd9b(p0: number): number;

declare function N_0x8433e1954be323fc(p0: number): number;

declare function N_0x84481018e668e1b8(p0: number, p1: number, p2: number): void;

declare function N_0x844ceee428ea35b0(p0: number, p1: number): number;

declare function N_0x8451e87d3c2b0286(p0: number, p1: number, p2: number): void;

declare function N_0x8459b3e64257b21d(p0: number): void;

declare function N_0x8462be2341a55b6f(p0: number): void;

declare function N_0x8472a1789478f82f(p0: number): void;

declare function N_0x847748ae5d7b1071(p0: number): number;

declare function N_0x84848e1c0fc67dbb(p0: number): number;

declare function N_0x849791ebbdba0362(p0: number): number;

declare function N_0x849bd6c6314793d0(p0: number): number;

declare function N_0x84bd27ddf9575816(p0: number, p1: number): void;

declare function N_0x84ccf9a12942c83d(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
): number;

declare function N_0x84d0bf2b21862059(p0: number): number;

declare function N_0x84eedb2c6e650000(p0: number): void;

declare function N_0x84f0ba7462ff8d58(
  p1: number,
  p2: number,
  p3: number,
): [boolean, number];

declare function N_0x8505e05fc8822843(p0: number): void;

declare function N_0x850c940ee3e7b8b5(entity: number, toggle: boolean): void;

declare function N_0x850ce59dec2028f3(p0: number, p1: number): void;

declare function N_0x851966e1e35af491(p0: number, p1: number): void;

declare function N_0x8521c2e235558278(p0: number): number;

declare function N_0x853b0fa4d8732c57(p0: number): number;

declare function N_0x854bc9b1a1ccd034(p0: number, p1: number): number;

declare function N_0x8569c38d2fb80650(p0: number, p1: number): number;

declare function N_0x856ce8fde2416602(p0: number): number;

declare function N_0x857acb0ab4bd0d55(p0: number): number;

declare function N_0x8591ee69cc3ed257(p0: number, p1: number): void;

declare function N_0x8593a8cb0ed2c3b4(p0: number): number;

declare function N_0x85b8f04555ab49b8(p0: number): number;

declare function N_0x85d39f5e3b6d7eb0(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0x85e4d7b225a30ed1(p0: number, p1: number): number;

declare function N_0x85ea0bec7b1f7622(): number;

declare function N_0x85f500f4e24ca43e(p0: number, p1: number): void;

declare function N_0x860ddfe97cc94df0(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0x862c5040f4888741(p0: number, p1: number): number;

declare function N_0x864a842b86993851(p0: number): void;

declare function N_0x865732725536ee39(p0: number): number[];

declare function N_0x865f36299079fb75(p0: number): number;

declare function N_0x865fec2fa899f29c(p0: number): number;

declare function N_0x8674d138391ffb1b(p0: number, p1: number): void;

declare function N_0x869a7015bd4606e9(p0: number): void;

declare function N_0x86a68e84e5884951(p0: number): void;

declare function N_0x86afc343cf7f0b34(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): number;

declare function N_0x86bb5ff45f193a02(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
): number;

declare function N_0x86f0b6730c32ac14(p0: number, p1: number): void;

declare function N_0x86fa6d8b48667d75(p0: number): number;

declare function N_0x86fafc18e3d4380c(p0: number, p1: number): void;

declare function N_0x86fd10251a7118a4(p0: number, p1: number): number;

declare function N_0x8702d9150d9fbb3d(p0: number, p1: number): number;

declare function N_0x870634493cb4372c(p0: number, p1: number): void;

declare function N_0x870708a6e147a9ad(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
): number;

declare function N_0x870e9981ed27c815(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
): number;

declare function N_0x87247bc60b60bed8(p0: number): void;

declare function N_0x87344305778e5415(p0: number, p1: number): void;

declare function N_0x873aaf600cc36dac(p0: number): void;

declare function N_0x873c792e07a32c8b(p0: number, p1: number): void;

declare function N_0x8750f69a720c2e41(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0x877ea24eb1614495(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0x8785e6e40c7a8819(p0: number): number;

declare function N_0x878b68960c1c2a35(p0: number, p1: number): number;

declare function N_0x878e8104fa27cdae(p0: number, p1: number): void;

declare function N_0x8798cf6815b8fe0f(p0: number, p1: number): void;

declare function N_0x87b66d77d545db66(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function N_0x87b974e54c71ba7b(p0: number, p1: number): void;

declare function N_0x87c2724a56f66020(p0: number): void;

declare function N_0x87e6302fc61208cc(p0: number): void;

declare function N_0x87f005c969ef1563(): number;

declare function N_0x8800776e410eb669(p0: number): number;

declare function N_0x8822f124788b8d0a(p0: number, p1: number): void;

declare function N_0x8822f139408b8d0a(p0: number): number;

declare function N_0x88544c0e3291dcae(p0: number): void;

declare function N_0x885d19ac2b6fbff4(p0: number, p1: number): void;

declare function N_0x886171a12f400b89(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0x886dfd3e185c8a89(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): number;

declare function N_0x8878ff3eee2868a9(p0: number, p1: number): void;

declare function N_0x8886d83a430537fd(p0: number, p1: number): void;

declare function N_0x88a5564b19c15391(p0: number): number;

declare function N_0x88a95bb640fc186f(p0: number): void;

declare function N_0x88ad6cc10d8d35b2(p0: number): number;

declare function N_0x88b2026a3b0be33d(p0: number, p1: number): void;

declare function N_0x88b58b83a43a8cab(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0x88bc5f4aef77fc4e(p0: number, p1: number): void;

declare function N_0x88d9d76d78065487(p0: number): number;

declare function N_0x88e32db8c1a4aa4b(ped: number, p1: number): void;

declare function N_0x88effed5fe8b0b4a(p0: number): number;

declare function N_0x88fd60d846d9cd63(p0: number): void;

declare function N_0x8910c24b7e0046ec(): void;

declare function N_0x893128cdb4b81fbb(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0x89314fb3463e28de(p0: number): void;

declare function N_0x894b5ecab45d2342(p0: number, p1: number): void;

declare function N_0x8952e857696b8a79(p0: number): void;

declare function N_0x89783fddf079c88d(p0: number): void;

declare function N_0x897934e868eddd6c(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): void;

declare function N_0x89816b58c3466262(p0: number): number;

declare function N_0x898586729db5221d(p0: number): void;

declare function N_0x8996fa6ad9fe4e90(p0: number): void;

declare function N_0x899a04afcc725d04(p0: number, p1: number): void;

declare function N_0x899c97a1cce7d483(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
): number;

declare function N_0x899dfa0009ac93de(p0: number, p1: number): void;

declare function N_0x89bfdf6d53145545(p0: number): number;

declare function N_0x89cf5ff3d363311e(p0: number): number;

declare function N_0x89d803cd48622150(p0: number): void;

declare function N_0x89d9bde7334b110f(): number;

declare function N_0x89e005b1662f6e48(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0x89e59dbd15e21177(p0: number, p1: number): void;

declare function N_0x89ec2fc89ecb1005(): number;

declare function N_0x89f5e7adecccb49c(p0: number, p1: number): void;

declare function N_0x8a0643b0b4ca276b(p0: number, p1: number): number;

declare function N_0x8a3945405b31048f(): number;

declare function N_0x8a59d44189af2bc5(p0: number, p1: number): void;

declare function N_0x8a67120dbc299525(): number;

declare function N_0x8a779706da5ca3dd(p0: number, p1: number, p2: number): void;

declare function N_0x8a8208ae92bf87a5(p0: number): void;

declare function N_0x8ac1d721b2097b6e(p0: number, p1: number, p2: number): void;

declare function N_0x8acc0506743a8a5c(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function N_0x8ae059f47158417e(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function N_0x8ae4efa464dae42d(p0: number, p1: number): void;

declare function N_0x8af46e5159a5b620(p0: number, p1: number): void;

declare function N_0x8af8e647d6b2a649(p0: number, p1: number): number;

declare function N_0x8afccc0f18d70018(p0: number, p1: number): void;

declare function N_0x8b1e8e35a6e814ea(p0: number, p1: number, p2: number): void;

declare function N_0x8b1fdf63c3193eda(p0: number, p1: number): void;

declare function N_0x8b25a18e390f75bf(p0: number): number;

declare function N_0x8b3296278328b5eb(p0: number): void;

declare function N_0x8b3b71c80a29a4bb(p0: number, p1: number, p2: number): void;

declare function N_0x8b3cb08158e98481(p0: number, p1: number): void;

declare function N_0x8b44273a92cd406c(p0: number): void;

declare function N_0x8b61c950a148ffa2(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function N_0x8b6f0f59b1b99801(p0: number, p1: number): void;

declare function N_0x8b74032ddd2156fe(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): void;

declare function N_0x8ba0c65ac15a7d33(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function N_0x8ba3d7b1e83ef803(p0: number): number;

declare function N_0x8ba83cc4288cd56d(p0: number, p1: number): void;

declare function N_0x8bb283a7888ad1ad(p0: number, p1: number, p2: number): void;

declare function N_0x8bb99b85444544d9(p0: number, p1: number): number;

declare function N_0x8bc555034a5a5e8c(p0: number, p1: number): void;

declare function N_0x8bc7c1f929d07bf3(p0: number): void;

declare function N_0x8be24d74d74c6e9b(p0: number): number;

declare function N_0x8bf907833be275de(p0: number, p1: number): void;

declare function N_0x8c03cd6b5e0e85e8(p0: number, p1: number): number;

declare function N_0x8c0f6a3d7236deeb(p0: number, p1: number): void;

declare function N_0x8c109958c9bb559d(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
): number;

declare function N_0x8c598a930f471938(name: string, p1: number): void;

declare function N_0x8c6d9a399126c194(p0: number, p1: number): void;

declare function N_0x8c8371edfaf014a0(p0: number, p1: number): void;

declare function N_0x8c889e4cbb4b2356(p0: number, p1: number): void;

declare function N_0x8cb2553c559102c1(p0: number, p1: number, p2: number): void;

declare function N_0x8cbe916cfc64ad5c(p0: number): number;

declare function N_0x8d029948ca29409b(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0x8d1249bd28791878(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0x8d3230a0ed7de39f(vehicle: number, p1: boolean): void;

declare function N_0x8d56bda343d9519f(p0: number): number;

declare function N_0x8d59079c37c21d78(p0: number, p1: number): void;

declare function N_0x8d81e7824b7753f7(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0x8d913e493bafe0a3(p0: number): number;

declare function N_0x8d9bfce3352de47f(p0: number): number;

declare function N_0x8d9db115fba8e23d(p0: number): void;

declare function N_0x8db104ccebcd58c5(p0: number, p1: number): number;

declare function N_0x8dc9aa3b508b1a85(): number;

declare function N_0x8dccc98dc0dbf9e4(p0: number): void;

declare function N_0x8de104bec243a73b(p0: number): void;

declare function N_0x8de41e9902e85756(p0: number): number;

declare function N_0x8de82bc774f3b862(p0: number): void;

declare function N_0x8decd262602548b9(p0: number, p1: number): void;

declare function N_0x8df5f6a19f99f0d5(p0: number, p1: number): number;

declare function N_0x8e036b41c37d0e5f(p0: number): void;

declare function N_0x8e10df0ffa63fb65(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): number;

declare function N_0x8e1dde26d270cc5e(p0: number, p1: number): void;

declare function N_0x8e2143144b8e188d(p0: number): number;

declare function N_0x8e462db1eaa9c47c(p0: number): number;

declare function N_0x8e46e18aa828334f(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0x8e587fcd30e05592(): number;

declare function N_0x8e5da070bad3279e(p0: number, p1: number): void;

declare function N_0x8e6aff353c09652e(p0: number): void;

declare function N_0x8e7ce19219669aeb(p0: number): number;

declare function N_0x8e84119a23c16623(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0x8e8ffb9e4ad051d2(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function N_0x8e901b65206c2d3e(p0: number): void;

declare function N_0x8ec44ae8decff841(p0: number): number;

declare function N_0x8ec47dd4300bf063(p0: number, p1: number): void;

declare function N_0x8ec7890d446bd9c1(p0: number, p1: number, p2: number): void;

declare function N_0x8ec7cd701f872f87(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
): void;

declare function N_0x8eedfd8921389928(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
): void;

declare function N_0x8f2a81c09da9124a(p0: number): void;

declare function N_0x8f3333f0a6900b3c(p0: number, p1: number): number;

declare function N_0x8f44ebb3ba8f6d44(p0: number, p1: number): void;

declare function N_0x8f4f050054005c27(p0: number, p1: number): number;

declare function N_0x8f75941c86eebfca(vehicle: number, p1: boolean): void;

declare function N_0x8f8c84363810691a(p0: number, p1: number): void;

declare function N_0x8faf4d262faba99c(p0: number): number;

declare function N_0x8fb7c254cfcbf78e(p0: number): number;

declare function N_0x8fb98b719aa0075a(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): void;

declare function N_0x8fbf9edb378ccb8c(p0: number, p1: number): void;

declare function N_0x8ff6059da26e688a(): number;

declare function N_0x900ca00ce703e1e2(p0: number): number;

declare function N_0x901e0dc25080c8b9(p0: number): number;

declare function N_0x90403e8107b60e81(p0: number): number;

declare function N_0x904103d5d2333977(p0: number): number;

declare function N_0x9044835be9d9dbfe(p0: number, p1: number): void;

declare function N_0x9050df2c53801208(p0: number, p1: number): void;

declare function N_0x90703a8f75ee4abd(p0: number, p1: number): number;

declare function N_0x9073ec5456651a90(p0: number, p1: number): void;

declare function N_0x9078fb0557364099(p0: number): void;

declare function N_0x907b16b3834c69e2(p0: number, p1: number): void;

declare function N_0x908bb14bce85c80e(p0: number): number;

declare function N_0x908d4b72854c8f62(p0: number): void;

declare function N_0x909ad9e9a92a10df(p0: number): number;

declare function N_0x909e3c7fae539fb1(p0: number): void;

declare function N_0x90da5ba5c2635416(): number;

declare function N_0x90eb1cb189923587(p0: number): number;

declare function N_0x910b088e51a511ac(): number;

declare function N_0x910e260aead855de(): void;

declare function N_0x913d04a5176f84c9(p0: number): number;

declare function N_0x914071ff93af2692(p0: number, p1: number): void;

declare function N_0x916b8e075abc8b4e(p0: number, p1: number): number;

declare function N_0x917760cfe7a0e0f1(p0: number): number;

declare function N_0x9184788bff1edad7(p0: number, p1: number): void;

declare function N_0x918990bd9ce08582(p0: number): number;

declare function N_0x919af2d93e9aa89d(p0: number): number;

declare function N_0x91a4f58e01ed5e4c(p0: number, p1: number): void;

declare function N_0x91a5f9cbebb9d936(p0: number): number;

declare function N_0x91bab9e064f036cd(p0: number, p1: number): void;

declare function N_0x91c9e2a0f9dd6dd4(): number;

declare function N_0x91cb5e431f579ba1(p0: number): number[];

declare function N_0x91d657230bc208d2(p0: string, p1: string): void;

declare function N_0x91ded5dd64bb2691(p0: number): void;

declare function N_0x91fe941f9fcfb702(p0: number, p1: number): number;

declare function N_0x922a79cd4a033b8b(p0: number): number;

declare function N_0x923346025512dfb7(p0: number): number;

declare function N_0x923583741dc87bce(p0: number, p1: number): void;

declare function N_0x9238a3d970bbb0a9(p0: number, p1: number): void;

declare function N_0x925a160133003ac6(p0: number, p1: number): void;

declare function N_0x92690b0822493ce0(): void;

declare function N_0x927861b2c08dbea5(p0: number): number;

declare function N_0x927b810e43e99932(p0: number): number;

declare function N_0x92a1b55a59720395(p0: number, p1: number): void;

declare function N_0x92a32ba29622763f(
  id: number,
  index: number,
  p2?: number,
): [boolean, number];

declare function N_0x92a78d0bedb332a3(p0: number): number;

declare function N_0x92aefb5f6e294023(
  object: number,
  p1: boolean,
  p2: boolean,
): void;

declare function N_0x92c8eaca29f6bed6(p0: number): number;

declare function N_0x92daaba2c1c10b0e(p0: number): void;

declare function N_0x93171dddab274eb8(p0: number, p1: number): void;

declare function N_0x931b241409216c1f(p0: number, p1: number, p2: number): void;

declare function N_0x932786ce3c76477c(p0: number, p1: number): void;

declare function N_0x932db3c05a7465d1(): void;

declare function N_0x9337183fda2e9035(p0: number, p1: number): number;

declare function N_0x935a30aa88fb1014(p0: number): number[];

declare function N_0x935cf6e42baf7f4d(p0: number): void;

declare function N_0x935dbd96d4a3da1f(p0: number, p1: number): number;

declare function N_0x93624b36e8851b42(p0: number): void;

declare function N_0x936e7cad0ae2ee14(p0: number): number;

declare function N_0x93759a83d0d844e7(p0: boolean): void;

declare function N_0x93a91a351a07360e(p0: number): number;

declare function N_0x93f2e7b5db85657b(p0: number, p1: number): number;

declare function N_0x93f499cae53fcd05(p0: number, p1: number, p2: number): void;

declare function N_0x93ffd92f05ec32fd(p0: number): number;

declare function N_0x9409c62504a8f9e9(p0: number, p1: number): void;

declare function N_0x94132d7c8d3575c4(p0: number): number;

declare function N_0x9420fb11b8d77948(p0: number): number;

declare function N_0x9422743a5ba50e10(p0: number): number;

declare function N_0x9427c94d2e4094a4(p0: number, p1: number): number;

declare function N_0x9428447ded71fc7e(p0: number): void;

declare function N_0x9461a8fab0378e5b(p0: number, p1: number): void;

declare function N_0x946d46cd6dfb9742(p0: number, p1: number, p2: number): void;

declare function N_0x947e43f544b6ab34(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): number;

declare function N_0x94995829ed15a598(p0: number): number[];

declare function N_0x949b2f9ed2917f5d(p0: number, p1: number): void;

declare function N_0x94a3c1b804d291ec(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): void;

declare function N_0x94b261f1f35293e1(p0: number): void;

declare function N_0x94b745ce41db58a1(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
): number;

declare function N_0x94e8ca3dee952789(p0: number, p1: number): number;

declare function N_0x94f3d956bfaeae18(p0: number, p1: number, p2: number): void;

declare function N_0x94fcadcf9f0c368e(p0: number): void;

declare function N_0x951847cef3d829ff(p0: number, p1: number, p2: number): void;

declare function N_0x9520175b35e2268d(p0: number, p1: number): void;

declare function N_0x95384c6ce1526eff(p0: number, p1: number): void;

declare function N_0x95423627a9ca598e(p0: number): void;

declare function N_0x954451ea2d2120fb(p0: number, p1: number): void;

declare function N_0x95531a4a20cce7bc(p0: number, p1: number): number;

declare function N_0x956510f8c36b5c64(): void;

declare function N_0x957d7e750216d74b(p0: number): number;

declare function N_0x9585ff23c4b8ede0(p0: number, p1: number): void;

declare function N_0x95878b13e272ef1f(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
): number;

declare function N_0x9587913b9e772d29(p0: number, p1: number): number;

declare function N_0x958debd9353c0935(p0: number, p1: number, p2: number): void;

declare function N_0x959383dcd42040da(p0: number): number;

declare function N_0x95b8e397b8f4360f(p0: number): number;

declare function N_0x95ca12e2c68043e5(p0: number, p1: number): number;

declare function N_0x95cbc65780de7eb1(p0: number, p1: number): number;

declare function N_0x95ee1dee1dcd9070(p0: number, p1: number): void;

declare function N_0x9609dbdde18fad8c(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
): number;

declare function N_0x9617b6e5f6537b63(p0: number): void;

declare function N_0x9629faf6460d35cb(p0: number, p1: number): void;

declare function N_0x964000d355219fc0(p0: number): number;

declare function N_0x9641a9a20310f6b8(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
): number;

declare function N_0x96498d922d8d0d0a(): void;

declare function N_0x96595b36d6a2279b(p0: number, p1: number): void;

declare function N_0x9667cce29bfa0780(p0: number): void;

declare function N_0x966dd84fb6a46017(): void;

declare function N_0x966de09688a1de39(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): void;

declare function N_0x96722257e5381e00(player: number): void;

declare function N_0x967ff5bc0cfe6d26(p0: number, p1: number): void;

declare function N_0x9682f850056c9ade(p0: number): number;

declare function N_0x96c349de04c49011(p0: number, p1: number): void;

declare function N_0x96c638784db4c815(p0: number): number;

declare function N_0x96c6ed22fb742c3e(p0: number, p1: number): number;

declare function N_0x96c7b659854de629(p0: number, p1: number): void;

declare function N_0x96fd694fe5be55dc(p0: number): number;

declare function N_0x9700e8efc4ab9089(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): number;

declare function N_0x970339efa4fde518(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0x974da3408dec4e79(p0: number): number;

declare function N_0x975bd6351648935f(p0: number): number;

declare function N_0x975f6ebb62632fe3(): number;

declare function N_0x9772395cc73e8d1f(p0: number, p1: number): void;

declare function N_0x97764e8ac6487a9a(p0: number, p1: number): number;

declare function N_0x978aa2323ed32209(p0: number, p1: number): void;

declare function N_0x979765465a6f25fc(): number;

declare function N_0x97a38b65ebda3d50(p0: number, p1: number): void;

declare function N_0x97b06669ac569003(p0: number, p1: number): void;

declare function N_0x97bce4c4b3191228(): void;

declare function N_0x97c475212b327666(p0: number, p1: number): void;

declare function N_0x97f6f158cc5b5ca2(p0: number, p1: number): void;

declare function N_0x98082246107a6acf(p0: number, p1: number): number;

declare function N_0x981146e5c9ce9250(p0: number): number;

declare function N_0x981c7d863980fa51(): void;

declare function N_0x9821b68cd3e05f2b(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function N_0x9851de7aec10b4e1(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
): void;

declare function N_0x98539fc453aea639(p0: number, p1: number): number;

declare function N_0x985767f5fa45bc44(p0: number): void;

declare function N_0x9868c0d0134855f7(p0: number): void;

declare function N_0x986f7a51ee3e1f92(p0: number, p1: number): void;

declare function N_0x987be590fb9d41e5(p0: number): void;

declare function N_0x9888652b8ba77f73(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
): number;

declare function N_0x98a7598c579ee871(p0: number, p1: number, p2: number): void;

declare function N_0x98a7cd5ea379a854(): void;

declare function N_0x98cd760de43b612e(p0: number, p1: number): void;

declare function N_0x98d2d9c053a1f449(p0: number, p1: number): void;

declare function N_0x98f4154989b81ec6(): number;

declare function N_0x9911f4a24485f653(p0: boolean): void;

declare function N_0x991e3346d788f20f(p0: number, p1: number): void;

declare function N_0x99230691875fc218(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): void;

declare function N_0x9935f76407c32539(p0: string): void;

declare function N_0x9937facbbf267244(p0: number): void;

declare function N_0x9945a3e2528a02e8(p0: number): number;

declare function N_0x9963681a8bc69bf3(p0: number, p1: number, p2: number): void;

declare function N_0x997060bc223adff9(): number;

declare function N_0x9970ae8c3d706139(): number;

declare function N_0x998202b206872672(p0: number): void;

declare function N_0x9993f1e11944a3dd(p0: number, p1: number): number;

declare function N_0x99a6e246c315bf60(p0: number, p1: number): number;

declare function N_0x99abe9bf9dada162(p0: number): number;

declare function N_0x99b2a2e3655deaf1(p0: number, p1: number): void;

declare function N_0x99c6ea66dfe73757(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0x99f92061efe908ba(): number;

declare function N_0x9a03f22ad446eeac(p0: number): number;

declare function N_0x9a100f1cf4546629(p0: number): number;

declare function N_0x9a113c660aea3832(p0: number, p1: number, p2: number): void;

declare function N_0x9a252aa23d7098f2(): void;

declare function N_0x9a4ac116cc1eee14(p0: number): void;

declare function N_0x9a74a9cadfa8a598(p0: number): void;

declare function N_0x9a77dfd295e29b09(p0: number, p1: boolean): void;

declare function N_0x9a92c06acbaf9731(): void;

declare function N_0x9a957912ce2eabd1(p0: number, p1: number, p2: number): void;

declare function N_0x9aae3c1148a09bca(p0: number): number;

declare function N_0x9ab192a9ef980eed(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): number;

declare function N_0x9ab33cb5834885b3(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): void;

declare function N_0x9ac53cb6907b4428(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0x9ac65a36d3c0c189(p0: number): void;

declare function N_0x9adac065d9f6706f(p0: number): void;

declare function N_0x9addbb9242179d56(p0: number, p1: number): void;

declare function N_0x9adee485726025d4(p0: number): number;

declare function N_0x9afcf9fe1884bf62(p0: number, p1: number): void;

declare function N_0x9b0c7fa063e67629(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function N_0x9b1fc259187c97c0(p0: number): void;

declare function N_0x9b39b0555cc692b5(): void;

declare function N_0x9b47971234169990(p0: number, p1: number): void;

declare function N_0x9b4c564bfa7cff37(p0: number): void;

declare function N_0x9b4e793b1cb6550a(): void;

declare function N_0x9b4f7e3e4f9c77b3(p0: number, p1: number): number;

declare function N_0x9b5db6ceafaa10bb(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): number;

declare function N_0x9b65444c07b782bf(p0: number, p1: number): void;

declare function N_0x9b6808ec46be849b(p0: number, p1: number): void;

declare function N_0x9b6a58fdb0024f12(p0: number, p1: number): void;

declare function N_0x9b8d5d4cb8af58b3(p0: number): void;

declare function N_0x9b90842304c938a7(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0x9b9b9fa0ea283e3d(p0: number, p1: number): void;

declare function N_0x9bb83c4dd7be0802(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): void;

declare function N_0x9bbdcb8df789ebc1(p0: number, p1: number): void;

declare function N_0x9bbeaf8b0c007f1e(p0: number, p1: number): void;

declare function N_0x9bcf28fb5d65a9be(): number;

declare function N_0x9bd8a9d0a774a6f8(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): void;

declare function N_0x9be7dcb22d32ccbe(p0: number, p1: number): number;

declare function N_0x9bee018a63fffad9(p0: number): void;

declare function N_0x9bf2c0c568c61641(p0: number): void;

declare function N_0x9c113883487fd53c(p0: number, p1: number): void;

declare function N_0x9c24846d0a4a2776(p0: number): void;

declare function N_0x9c25e8ec4c535fbd(p0: number): void;

declare function N_0x9c409bbc492cb5b1(): number;

declare function N_0x9c4352134b2835fb(p0: number, p1: number): void;

declare function N_0x9c54041bb66bcf9e(p0: number, p1: number): number;

declare function N_0x9c5bd8c562565ce6(p0: number): void;

declare function N_0x9c725d149622bfde(p0: number): number;

declare function N_0x9c77964b0e07b633(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0x9c7f95946e304778(p0: number, p1: number): number;

declare function N_0x9c81338b2e62ce0a(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0x9c8a2bf37e966464(p0: number, p1: number): void;

declare function N_0x9c8f42a5d1859dc1(p0: number): void;

declare function N_0x9c902084f48d2e6c(p0: number): void;

declare function N_0x9cb1a1623062f402(p0: number, p1: number): void;

declare function N_0x9cc94a948eaf5372(p0: number, p1: number): number;

declare function N_0x9cca3131e6b53c68(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0x9cf1836c03fb67a2(p0: number, p1: number): void;

declare function N_0x9d096a5bd02f953e(p0: number, p1: number): void;

declare function N_0x9d0f5d2e1951cd84(): number;

declare function N_0x9d12796ef4bf9ea9(p0: number): void;

declare function N_0x9d16896f0dbe78a2(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function N_0x9d1b0b5066205692(): void;

declare function N_0x9d1eca9337be9fc3(p0: number, p1: number): number;

declare function N_0x9d21b185abc2dbc4(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): number;

declare function N_0x9d21b185abc2dbc5(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): number;

declare function N_0x9d37eb5003e0f2cf(p0: number, p1: number): void;

declare function N_0x9d5c9a5a3321b128(p0: number): number;

declare function N_0x9d6dec9791a4e501(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): number;

declare function N_0x9d746964e0cf2c5f(p0: number, p1: number): void;

declare function N_0x9d8dfe2de9cb4dfc(p0: number): void;

declare function N_0x9d9473cb82d83a30(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0x9dae1380cc5c6451(p0: number, p1: number): void;

declare function N_0x9dd95b405ab4983e(p0: number, p1: number): number;

declare function N_0x9ddc222d85d5af2a(p0: number, p1: number): void;

declare function N_0x9de63896b176ea94(p0: number, p1: number): void;

declare function N_0x9e036d5204ffbbc8(p0: number, p1: number): number;

declare function N_0x9e13acc38ba8f9c3(p0: number, p1: number): number;

declare function N_0x9e2d5d6bc97a5f1e(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0x9e3842e5dad69f80(p0: number): void;

declare function N_0x9e4ef615e307fbbe(): number;

declare function N_0x9e58207b194488ac(p0: number, p1: number): void;

declare function N_0x9e66708b2b41f14a(p0: number, p1: number): void;

declare function N_0x9e762a595cf88e4a(p0: number): number;

declare function N_0x9e7738b291706746(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0x9e8711c81aa17876(p0: number, p1: number): void;

declare function N_0x9eb779765e68c52e(p0: number, p1: number): void;

declare function N_0x9ebd34958ab6f824(p0: number): void;

declare function N_0x9ed3108d6847760a(p0: number, p1: number): void;

declare function N_0x9eeb007317fa3b9c(): number;

declare function N_0x9eefd670f10656d7(p0: number, p1: number): number;

declare function N_0x9ef07cfbb19a9733(): number;

declare function N_0x9f0e1892c7f228a8(p0: number): number;

declare function N_0x9f130129ebc31b34(p0: number, p1: number, p2: number): void;

declare function N_0x9f158a49b0d84c3c(p0: number): void;

declare function N_0x9f24a34863fd35da(p0: number): void;

declare function N_0x9f29999dfdf2aeb8(p0: number, p1: number): void;

declare function N_0x9f2cc2439a04e7ba(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0x9f348de670423460(p0: number): void;

declare function N_0x9f52ad67d1a91bad(p0: number, p1: number): number;

declare function N_0x9f67929d98e7c6e8(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): number;

declare function N_0x9f6dcd0c939c71e9(): number;

declare function N_0x9f933e0985e12c51(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function N_0x9f97e85ec142255e(p0: number, p1: number): void;

declare function N_0x9f9a829c6751f3c7(p0: number, p1: number, p2: number): void;

declare function N_0x9fa00e2fc134a9d0(p0: number): number;

declare function N_0x9fc5a003fb76edbd(p0: number, p1: number): void;

declare function N_0x9ff5f9b24e870748(p0: number): number;

declare function N_0xa00df706c60173d1(p0: number): number;

declare function N_0xa021095c983f20d8(): number;

declare function N_0xa033d7e4bbf9844d(p0: number): number;

declare function N_0xa03a6812529ad9c8(): void;

declare function N_0xa04ef43030593abc(p0: number, p1: number): void;

declare function N_0xa052608a12559bbb(p0: number, p1: number): void;

declare function N_0xa05f3f20889d7a5b(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
): void;

declare function N_0xa064bbabb064446f(p0: number): void;

declare function N_0xa0774e388ce4a679(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): number;

declare function N_0xa079300af757fb1a(p0: number): number;

declare function N_0xa079ff7cfb9ac8bd(p0: number, p1: number): void;

declare function N_0xa07cf1b21b56f041(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): number;

declare function N_0xa08111b053d84b4d(p0: number): void;

declare function N_0xa0ae7653e8181725(p0: number): number;

declare function N_0xa0b7094629724974(p0: number, p1: number): number;

declare function N_0xa0bc8faed8cfeb3c(p0: number): number;

declare function N_0xa0c683284df027c7(p0: number, p1: number, p2: number): void;

declare function N_0xa0cefcea390aab9b(p0: number): void;

declare function N_0xa0f4d12d6042f6d5(p0: number, p1: number): void;

declare function N_0xa1300de03e5d1973(p0: number): number;

declare function N_0xa13028e22564a1bd(p0: number, p1: number): void;

declare function N_0xa14d5fe82bcb1d9e(): number;

declare function N_0xa15bffc0a01b34e1(): number;

declare function N_0xa15ccab8ad038291(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): number;

declare function N_0xa16b4fba7887d7ba(): number;

declare function N_0xa180fbd502a03125(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0xa19447d83294e29f(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0xa197c35f73ac0f12(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function N_0xa1a86055792fb249(p0: number): void;

declare function N_0xa1b0e6301e2e02a6(name: string, p1: number): void;

declare function N_0xa1b4052c2a3dcc1e(): void;

declare function N_0xa1cfb35069d23c23(p0: number): void;

declare function N_0xa1eb5d029e0191d3(p0: number, p1: number, p2: number): void;

declare function N_0xa1fbac56d38563e2(p0: number): number;

declare function N_0xa201a3d0ac087c37(p0: number): void;

declare function N_0xa20398536b7f1134(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
): void;

declare function N_0xa2058154357726bb(p0: number, p1: number): void;

declare function N_0xa2091482ed42ef85(p0: number, p1: number): number;

declare function N_0xa2116c1e4ed85c24(p0: number, p1: number): void;

declare function N_0xa218d2bbcaa7388c(p0: number, p1: number): number;

declare function N_0xa21aa2f0c2180125(p0: number, p1: number): void;

declare function N_0xa21af60c9f99ccc5(): void;

declare function N_0xa21e3bad0a42d199(): number;

declare function N_0xa22712e8471aa08e(p0: number, p1: number, p2: number): void;

declare function N_0xa22c46f16359471c(): number;

declare function N_0xa230a5dde12ed374(p0: number): void;

declare function N_0xa2323a2eae32a290(p0: number, p1: number, p2: number): void;

declare function N_0xa24c1d341c6e0d53(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0xa263adbbc8056214(p0: number, p1: number): void;

declare function N_0xa274f51ef7e34b95(p0: number, p1: number): number;

declare function N_0xa2837a5e21fb5a58(p0: number): number;

declare function N_0xa29fd00d45311eb7(p0: number, p1: number): number;

declare function N_0xa2a51869bded733b(p0: number, p1: number): number;

declare function N_0xa2b18ff8d39f6d87(p0: number): void;

declare function N_0xa2b1c7ef759a63ce(): number;

declare function N_0xa2b851605748ad0e(): void;

declare function N_0xa2b8e47442c76cec(p0: number, p1: number): void;

declare function N_0xa2cac9def0195e6f(p0: number): number;

declare function N_0xa2d5a26208421426(p0: number): number;

declare function N_0xa2db3c6270c122e3(p0: number, p1: number): number;

declare function N_0xa2e2bea4e83f6270(p0: number): number;

declare function N_0xa2f8b3b5fedfc100(p0: number, p1: number): void;

declare function N_0xa31013798fadcadc(p0: number, p1: number, p2: number): void;

declare function N_0xa31d350d66fa1855(p0: number): number;

declare function N_0xa31dafcdc33775e9(): number;

declare function N_0xa32b0b05eff75730(): void;

declare function N_0xa33914b00ca55756(p0: number, p1: number): number;

declare function N_0xa33f5069b0cb89b8(): void;

declare function N_0xa342495f93b7b838(p0: number, p1: number): void;

declare function N_0xa35e7bf20fa269e0(p0: number): void;

declare function N_0xa3716a77dcf17424(p0: number, p1: number, p2: number): void;

declare function N_0xa3791b915b8b84c6(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
): void;

declare function N_0xa381de86ee170c4a(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0xa3a8926951471c82(): void;

declare function N_0xa3a9299c4f2adb98(p0: number): void;

declare function N_0xa3bd6ff95e713ee5(p0: number, p1: number, p2: number): void;

declare function N_0xa3c53cde922bc78b(p0: number, p1: number): void;

declare function N_0xa3db37edf9a74635(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): void;

declare function N_0xa3eec0a5aff3fc5b(p0: number): number;

declare function N_0xa3f2149aa24f3d8e(p0: number, p1: number, p2: number): void;

declare function N_0xa405bf9f01960c16(p0: number): void;

declare function N_0xa42dc7919159cccf(p0: number): void;

declare function N_0xa42edf1e88734a7e(): number;

declare function N_0xa4454592dcf7c992(p0: number): number;

declare function N_0xa4484173759749b1(): void;

declare function N_0xa44d65e6c624526f(p0: number): number;

declare function N_0xa454d234e45bb6e5(p0: number, p1: number): number;

declare function N_0xa4550fe9c512e3dd(p0: number): number;

declare function N_0xa45884db10ec7ee3(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function N_0xa46e98bdc407e23d(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): number;

declare function N_0xa46fd001d1be896c(): string;

declare function N_0xa47d48d06aa5a188(): number;

declare function N_0xa486008892065fb9(p0: number, p1: number): number;

declare function N_0xa48e4801debdf7e4(p0: number, p1: number): void;

declare function N_0xa49d6d503e3ea847(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): void;

declare function N_0xa4a4359320345b34(p0: number): number;

declare function N_0xa4ac05b1a364ebc5(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0xa4d3a1c008f250df(p0: number): void;

declare function N_0xa4dcb3f0dd7488bd(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): void;

declare function N_0xa520c7b05fa4eb2a(p0: number, p1: number): void;

declare function N_0xa53c8d7d0f8c74d0(p0: number): void;

declare function N_0xa54000d4bfd90bde(p0: number): number;

declare function N_0xa54d643d0773eb65(p0: number, p1: number, p2: number): void;

declare function N_0xa565fac215cbc77d(): void;

declare function N_0xa586fbeb32a53dbb(): number;

declare function N_0xa5950e16b8f31052(p0: number, p1: number, p2: number): void;

declare function N_0xa59590050f80ff2e(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function N_0xa59d1997ecd99f0a(): void;

declare function N_0xa5bae410b03e7371(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function N_0xa5bd585005efcad4(p0: number): number;

declare function N_0xa622e66eee92a08d(p0: number): number;

declare function N_0xa62bbaae67a05bb0(p0: number): number;

declare function N_0xa635c11b8c44afc2(): number;

declare function N_0xa63cd20f19b961ab(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0xa63e4f050f20021f(): void;

declare function N_0xa63fcad3a6fec6d2(p0: number, p1: number): void;

declare function N_0xa657ec9dbc6cc900(p0: number): void;

declare function N_0xa67f0b039d9cd513(): number;

declare function N_0xa6847bba4fcdd13f(p0: number, p1: number): void;

declare function N_0xa691c10054275290(p0: number, p1: number, p2: number): void;

declare function N_0xa69899995997a63b(p0: number, p1: number): void;

declare function N_0xa6a3a3f96b8b030e(): number;

declare function N_0xa6a76d666a281f2d(p0: number, p1: number): void;

declare function N_0xa6a9712955f53d9c(p0: number): number;

declare function N_0xa6aa9f56bc6cff58(p0: number, p1: number): void;

declare function N_0xa6ac35db4a7957a8(p0: number): void;

declare function N_0xa6bf569956c60a60(p0: number, p1: number): number;

declare function N_0xa6c0787443c9583e(p0: number): number;

declare function N_0xa6c6a4adb3bac409(p0: number): number;

declare function N_0xa6d6f03095c88f59(p0: number): void;

declare function N_0xa6e210fb4283b767(p0: number, p1: number, p2: number): void;

declare function N_0xa6e6a66fc4ca4224(p0: number): void;

declare function N_0xa6ef0c54a3443e70(p0: number, p1: number): number;

declare function N_0xa6f1baabff6ad7b9(p0: number): void;

declare function N_0xa6f4216ab10eb08e(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): number;

declare function N_0xa6f67bec53379a32(p0: number, p1: number): void;

declare function N_0xa710dc5d25f8b942(p0: number, p1: number): number;

declare function N_0xa72773c3134f9a57(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
): void;

declare function N_0xa72b1bf3857b94d7(p0: number, p1: number): void;

declare function N_0xa7309ac0dcf6d950(p0: number, p1: number): number;

declare function N_0xa73f50e8796150d5(p0: number, p1: number): void;

declare function N_0xa7479fb665361edb(p0: number, p1: number): void;

declare function N_0xa762c9d6cf165e0d(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function N_0xa769d753922b031b(p0: number, p1: number, p2: number): void;

declare function N_0xa77fa7be9312f8c0(p0: number): void;

declare function N_0xa7966807953a18ee(p0: number, p1: number): void;

declare function N_0xa7a57e89e965d839(p0: number, p1: number): void;

declare function N_0xa7a806677f8de138(p0: number): void;

declare function N_0xa7dc9266ed6a4e51(p0: number): void;

declare function N_0xa7e51b53309eac97(p0: number): number;

declare function N_0xa80ff73f772acf6a(p0: number, p1: number): void;

declare function N_0xa8120ebeaf290c7a(p0: number): number;

declare function N_0xa81d24ae0af99a5e(p0: number): number;

declare function N_0xa82964b9d8d6a983(): number;

declare function N_0xa8432a14d4dc2101(p0: number, p1: number, p2: number): void;

declare function N_0xa844feb5c22c2c74(): void;

declare function N_0xa8452dd321607029(p0: number, p1: number): number[];

declare function N_0xa86b0ee9b39d15d6(p0: number): void;

declare function N_0xa881f5c77a560906(p0: number): void;

declare function N_0xa88e1d7fa1e20080(p0: number): number;

declare function N_0xa88e215ceb0435c0(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
): number;

declare function N_0xa8a74aa79fb67159(name: string, p1: number): void;

declare function N_0xa8a95cecb1906ea2(p0: number, p1: number): void;

declare function N_0xa8ba0bae0173457b(p0: number, p1: number): number;

declare function N_0xa8c406c2a56edc16(p0: number): void;

/**
 * nullsub, doesn't do anything
 */
declare function N_0xa8d970d8a72640a6(): number;

declare function N_0xa9016536015de29d(p0: number, p1: number): number;

declare function N_0xa90684ed185ccb4b(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function N_0xa911ee21edf69daf(p0: number): number;

declare function N_0xa91e6cf94404e8c9(p0: number): void;

declare function N_0xa92450b5ae687aaf(p0: number): number;

/**
 * nullsub, doesn't do anything
 * @param p0 :
 */
declare function N_0xa9342743b634a462(p0: number): void;

declare function N_0xa93f925f1942e434(p0: number, p1: number): void;

declare function N_0xa94ece191d90637a(): number;

declare function N_0xa95470da137587f5(p0: number): void;

declare function N_0xa96619fe85159ed2(p0: number): number;

declare function N_0xa967d6a8ed2d713b(p0: number, p1: number): void;

declare function N_0xa97ee5e4589fcf5a(p0: number, p1: number): number;

declare function N_0xa9c28516a6dc9d56(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
): number;

declare function N_0xa9c3b0f746375162(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0xa9cc7856d52dbd25(p0: number): number;

declare function N_0xa9ceae8d6637fbad(p0: number): void;

declare function N_0xa9e185d498b9ac67(p0: number, p1: number): number;

declare function N_0xa9e6d8f2ddfc4db9(p0: number, p1: number): void;

declare function N_0xa9e7672f8c6c6f74(p0: number): number;

declare function N_0xa9eb4d606076615d(p0: number): number;

declare function N_0xa9ef4ad10bdddb57(p0: number, p1: number, p2: number): void;

declare function N_0xaa03f130a637d923(p0: number): void;

declare function N_0xaa0af6025160243a(p0: number, p1: number): void;

declare function N_0xaa235e2f2c09e952(p0: number): number;

declare function N_0xaa35fd9abab490a3(p0: number): number;

declare function N_0xaa5a52204e077883(p0: number, p1: number): void;

declare function N_0xaa6c49ae90a32299(p0: number, p1: number): void;

declare function N_0xaa9ee2aafc717623(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
): number;

declare function N_0xaa9f048dcf69b6dc(p0: number): number;

declare function N_0xaaa92b631b13f614(p0: number): number;

declare function N_0xaaacb74442c1bed3(p0: number): number;

declare function N_0xaaacf33cbf9b990a(p0: number, p1: number): void;

declare function N_0xaab050da48b57978(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): void;

declare function N_0xaab0fe202e9fc9f0(p0: number, p1: number): number;

declare function N_0xaab86462966168ce(p0: number, p1: number): number;

declare function N_0xaac0ee3b4999abb5(p0: number, p1: number): void;

declare function N_0xaaded99a6b268a27(): number;

declare function N_0xaaed694ce814817f(p0: number): number;

declare function N_0xab0d553fe20a6e25(p0: number): void;

declare function N_0xab26deee120fd3fd(p0: number, p1: number): void;

declare function N_0xab3773e7aa1e9dcc(p0: number): number;

declare function N_0xab3d3f45436db1d8(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
): number;

declare function N_0xab43d1c80b5e9500(p0: number): void;

declare function N_0xab591ae6b48b913e(p0: number, p1: number): void;

declare function N_0xab5f12746a099a0e(p0: number, p1: number): number;

declare function N_0xab643407d0b26f07(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): number;

declare function N_0xab6a04cec428258b(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
  p10: number,
  p11: number,
  p12?: number,
): [boolean, number];

declare function N_0xab72c67163dc4db4(p0: number, p1: number): void;

declare function N_0xabc18a28bad4b46f(p0: number, p1: number): number;

declare function N_0xabdb4863d3d72021(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): void;

declare function N_0xac22aa6df4d1c1de(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
): void;

declare function N_0xac355980681a7f89(p0: number): void;

declare function N_0xac37644a538f7524(p0: number): void;

declare function N_0xac5045ab7f1a34fd(p0: number): number;

declare function N_0xac6153a0722f524c(): number;

declare function N_0xac67098a1e54abb0(p0: number, p1: number, p2: number): void;

declare function N_0xac77757c05de9e5a(p0: number): void;

declare function N_0xac84686c06184b0d(p0: number, p1: number): number;

declare function N_0xac8fab22a914ae34(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): number;

declare function N_0xac959ab99aaf3d9f(): number;

declare function N_0xac9ae68f0a463752(p0: number): void;

declare function N_0xaca45ddcef6071c4(p0: number, p1: number): void;

declare function N_0xaca7fb30269096d4(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
): number;

declare function N_0xacb7e1418a8b6e32(p0: number): number;

declare function N_0xacc44768af229042(): void;

declare function N_0xacd4f9831dfad7f5(p0: number): number;

/**
 * nullsub, doesn't do anything
 */
declare function N_0xacf9cb705befa8cb(): number;

declare function N_0xad03b03737ce6810(p0: number): number;

declare function N_0xad17a18215dd23d6(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0xad22ab64fa428df3(p0: number): void;

declare function N_0xad3330e3c3e98007(p0: number, p1: number): void;

declare function N_0xad3e07c37a7c1adc(name: string, p1: number): void;

declare function N_0xad401c63158acbaa(p0: number): number;

declare function N_0xad44856a1cd29635(p0: number, p1: number, p2: number): void;

declare function N_0xad74c22a541ab987(p0: number): void;

declare function N_0xad8f2424c6e1e3a8(p0: number): void;

declare function N_0xadb56322eedfbdc9(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0xadc45010bc17af0e(p0: number, p1: number): void;

declare function N_0xadd31a5c7a5faa73(p0: number, p1: number): void;

declare function N_0xaddd1e7c0ecf7d95(p0: number, p1: number): number;

declare function N_0xadf1d53f3b1fe0a7(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function N_0xae00387e53b1e9fc(): void;

declare function N_0xae4bcc79c587ebbf(p0: number, p1: number, p2: number): void;

declare function N_0xae5ada4fe3e21adc(p0: number): number;

declare function N_0xae6004120c18df97(p0: number, p1: number, p2: number): void;

declare function N_0xae637bb8ef017875(p0: number, p1: number): void;

declare function N_0xae693ec3a178f6c2(p0: number): void;

declare function N_0xae6ada8fe7e84acc(p0: number, p1: number): number;

declare function N_0xae6b68a83abbe7c0(p0: number): void;

declare function N_0xae6de22de0ed4554(p0: number, p1: number): void;

declare function N_0xae7bf7ca9e4ba48d(p0: number): void;

declare function N_0xae7e66a61e7c17a5(p0: number, p1: number): void;

declare function N_0xaeb97d84cdf3c00b(p0: number, p1: number): void;

declare function N_0xaec5f0119867e457(p0: number, p1: number): number;

declare function N_0xaedf1bc1c133d6e3(): number;

declare function N_0xaee6c800e124cfe1(p0: number, p1: number): void;

declare function N_0xaf041c10756c30fb(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function N_0xaf2ef28ce3084505(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function N_0xaf341032e97fb061(p0: number, p1: number): void;

declare function N_0xaf3a84c7de6a1dc5(p0: number, p1: number): void;

declare function N_0xaf4d239b8903fcbe(): void;

declare function N_0xaf530e56505d1bd6(p0: number): number;

declare function N_0xaf61b3cd8c3b82c3(p0: number): number;

declare function N_0xaf6e67d073d2dce2(): number;

declare function N_0xaf787e081ac4a8ee(p0: number): number;

/**
 * SET_ENTITY_LO*
 * @param entity :
 * @param p1 :
 * @param p2 :
 * @param p3 :
 */
declare function N_0xaf7f3099b9feb535(
  entity: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function N_0xaf9d167a5656d6a6(p0: number, p1: number): number;

declare function N_0xafa14f98327791ce(p0: number): number;

declare function N_0xafa87a7d41ee346a(p0: number): void;

declare function N_0xafd3599a3cc5637d(): number;

declare function N_0xafe2ae66f6251c66(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
): void;

declare function N_0xaff2fd8add927585(): void;

declare function N_0xaff5be9ba496ce40(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): number;

declare function N_0xaffd0ccf31f469b8(p0: number): number;

declare function N_0xb00ce33465b5406d(p0: number, p1: number): number;

declare function N_0xb03140014aca6c40(p0: number, p1: number): void;

declare function N_0xb032c085d9a03907(): void;

declare function N_0xb03944057fd735ba(p0: number, p1: number, p2: number): void;

declare function N_0xb04b69cf277d15c0(p0: number): number;

declare function N_0xb059d7bd3d78c16f(p0: number, p1: number): number;

declare function N_0xb05cc690cde8a4a9(p0: number, p1: number): number;

declare function N_0xb06f5f1def417216(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function N_0xb07d3185e11657a5(entity: number): boolean;

declare function N_0xb086c8c0f5701d14(p0: number): number;

declare function N_0xb08c4fa25bc29db9(p0: number): void;

declare function N_0xb096547d61868254(p0: number): number;

declare function N_0xb0b2c6d170b0e8e5(p0: number): number;

declare function N_0xb0e8599243b3f568(p0: number): number;

declare function N_0xb0fb9b196a3d13f0(p0: number, p1: number, p2: number): void;

declare function N_0xb112b9262ec29c20(p0: number, p1: number): number;

declare function N_0xb131e686bd97b3f8(): void;

declare function N_0xb138ca787f3dd858(p0: number, p1: number, p2: number): void;

declare function N_0xb15cd2f9932c9ab5(p0: number): number;

declare function N_0xb16223cb7da965f0(p0: number): number;

declare function N_0xb16c780c51e51e2b(p0: number): number;

declare function N_0xb16fc7b364d86585(): void;

declare function N_0xb173599d61faeb31(): void;

declare function N_0xb18fec133c7c6c69(p0: number): number;

declare function N_0xb190bca3f4042f95(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function N_0xb1964a83b345b4ab(p0: number): number;

declare function N_0xb1a196bafe650402(p0: number, p1: number): void;

declare function N_0xb1f6665aa54dcd5c(p0: number): number;

declare function N_0xb204bf9f30298d77(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
): void;

declare function N_0xb213d2a560b2e48b(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0xb219612b5568e9ec(p0: number): number;

declare function N_0xb223249b7798eeed(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): number;

declare function N_0xb22b1d9f74095382(p0: number): void;

declare function N_0xb22f05732f72f70c(p0: number): void;

declare function N_0xb249ebcb30dd88e0(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0xb25b5a375be5be26(p0: number, p1: number): void;

declare function N_0xb25e57fc8e37114d(p0: number): number;

declare function N_0xb285ad0ec870b2df(p0: number, p1: number): void;

declare function N_0xb28894cd7408bd0c(): number;

declare function N_0xb2920b9760f0f36b(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0xb292203008ebbaac(p0: number): number;

declare function N_0xb29c553ba582d09e(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): number;

declare function N_0xb2a38826e5886e83(p0: number, p1: number): void;

declare function N_0xb2aff10216defa2f(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
  p10: number,
): void;

declare function N_0xb2b42607f7867576(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0xb2cea5105aac8dde(p0: number): number;

declare function N_0xb2de3aebe31150e2(p0: number, p1: number): number;

declare function N_0xb2f47a1afdfcc595(p0: number, p1: number): void;

declare function N_0xb331d8a73f9d2bdf(p0: number, p1: number): number;

declare function N_0xb33a604345f58202(p0: number): number;

declare function N_0xb346c85d49cc998e(p0: number, p1: number): number;

declare function N_0xb34a6009a0db80b8(p0: number): void;

declare function N_0xb35370d5353995cb(p0: number, p1: number, p2: number): void;

declare function N_0xb36d3ec70963be60(p0: number, p1: number): number;

declare function N_0xb389289f031f059a(): number;

declare function N_0xb38a29ccd5447783(p0: number, p1: number, p2: number): void;

declare function N_0xb38c256498748413(): void;

declare function N_0xb395a44a0c7ca615(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0xb3b1546d23df8de1(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): void;

declare function N_0xb3e8841f6bdaf83e(): void;

declare function N_0xb3f2829907403c13(): number;

declare function N_0xb3fb80a32bae3065(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
): number;

declare function N_0xb40ea9e0d2e2f7f3(p0: number, p1: number): void;

declare function N_0xb4158c8c9a3b5dce(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): number;

declare function N_0xb4241ad8f5aee9ed(p0: number): number;

declare function N_0xb427911ea6dffef3(p0: number, p1: number): void;

declare function N_0xb429f58803d285b1(p0: number, p1: number): number;

declare function N_0xb42c87521d1bdd2f(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function N_0xb440f4e35393fc39(p0: number, p1: number): void;

declare function N_0xb4411d4d6b81438e(): number;

declare function N_0xb462d69d406a2602(p0: number): number;

declare function N_0xb469cfd9e065eb99(p0: number, p1: number): void;

declare function N_0xb48050d326e9a2f3(p0: number): number;

declare function N_0xb4a25351d79b444c(p0: number): number;

declare function N_0xb4b7c92fce7347b7(p0: number): void;

declare function N_0xb4c71ba9cab097bd(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): void;

declare function N_0xb520dbda7fcf573f(p0: number): number;

declare function N_0xb527099d1e1eed49(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0xb56d41a694e42e86(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
): void;

declare function N_0xb5c4b18b12a2af23(p0: number, p1: number): number;

declare function N_0xb5ded7b65c604fdf(p0: number): number;

declare function N_0xb5e2eda2135e0fa1(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0xb5ef6fef2dc9ebed(interior: number): number;

declare function N_0xb60c9f9ed47abb76(p0: number): number;

declare function N_0xb63b9178d0f58d82(p0: number): void;

declare function N_0xb655db7582aec805(p0: number): number;

declare function N_0xb65927f861e7ae39(p0: number, p1: number): number;

declare function N_0xb65a4dab460a19bd(p0: number): number;

declare function N_0xb65e7f733956cf25(p0: number): void;

declare function N_0xb676efda03dada52(p0: number, p1: number): number;

declare function N_0xb6857100f8fd433c(p0: number, p1: number): number;

declare function N_0xb6cbd40f8ea69e8a(p0: number): number;

declare function N_0xb6cfec32e3742779(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function N_0xb6e1a185c2b9319a(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0xb6e79850b759a30e(p0: number, p1: number): void;

declare function N_0xb6f4557060ef0fb4(p0: number, p1: number): number;

declare function N_0xb6f4825153920582(): void;

declare function N_0xb6fd96420c0126a1(p0: number, p1: number): void;

declare function N_0xb7017da4d498269f(p0: number, p1: number): void;

declare function N_0xb7079f4c72896756(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): void;

declare function N_0xb711eb4bc8d06013(): void;

declare function N_0xb71b91b398f8f067(p0: number, p1: number): number;

declare function N_0xb7223b91cd6b7e07(p0: number): number;

declare function N_0xb727a847862cb00a(p0: number): number;

declare function N_0xb729679356a889ae(p0: number): number;

declare function N_0xb72999d3120599df(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0xb7469cb9ac3c0fd4(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
): void;

declare function N_0xb779f4fa19269aec(p0: number): void;

declare function N_0xb782f8238512bad5(p0: number, p1?: number): number;

declare function N_0xb783f75940b23014(p0: number, p1: number): void;

declare function N_0xb79817db31ff72b9(p0: number, p1: number): void;

declare function N_0xb7c7bdc375aea9a4(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
): void;

declare function N_0xb7dbb2986b87e230(p0: number, p1: number): number;

declare function N_0xb7df150605eedc9b(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
): void;

declare function N_0xb7e0590c86e1711f(p0: number): number;

declare function N_0xb832f1a686b9b810(p0: number, p1: number, p2: number): void;

declare function N_0xb85c13e0bf1f2a1c(p0: number): void;

declare function N_0xb881ca836cc4b6d4(p0: number): number;

declare function N_0xb89fcff19dafff28(p0: number, p1: number): number;

declare function N_0xb8ab265426cfe6dd(p0: number, p1: number): void;

declare function N_0xb8b207c34285e978(p0: number): void;

declare function N_0xb8b6430ead2d2437(p0: number, p1: number): void;

declare function N_0xb8c984c0d47f4f07(p0: number, p1: number, p2: number): void;

declare function N_0xb8de69d9473b7593(p0: number, p1: number): void;

declare function N_0xb8e213d02f37947d(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
): void;

declare function N_0xb8e2d655e1d5bd39(p0: number): number;

declare function N_0xb8e3486d107f4194(p0: number, p1: number): void;

declare function N_0xb8f52a3f84a7cc59(p0: number): number;

declare function N_0xb9020ec89c07df04(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0xb9050a97594c8832(p0: number): number;

declare function N_0xb909149f2bb5f6da(p0: number, p1: number): void;

declare function N_0xb91ab3be7f655d49(p0: number): number;

declare function N_0xb93a769b8b726950(p0: number, p1: number): void;

declare function N_0xb93ea7184baa85c3(p0: number, p1: number): number;

declare function N_0xb9467e41dab1cf2c(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): number;

declare function N_0xb952a3ac41d58f2f(p0: number): number;

declare function N_0xb958d97a0dfaa0c2(p0: number): number;

declare function N_0xb961dd799a837bd7(): void;

declare function N_0xb981dd2dfaf9b1c9(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): void;

declare function N_0xb991fe166faf84fd(
  p0: number,
  p1: number,
  p2: number,
): number;

/**
 * Sorts some unknown data.
 * Likely SORT_*
 */
declare function N_0xb9b9e47edb9d63db(): void;

declare function N_0xb9bdfae609dfb7c5(p0: number, p1: number, p2: number): void;

declare function N_0xb9c92616929cc25d(p0: number, p1: number): void;

declare function N_0xb9d5bdda88e1bb66(p0: number): number;

declare function N_0xba0163b277c2d2d0(p0: number): number;

declare function N_0xba0980b5c0a11924(p0: number): void;

declare function N_0xba208a8d6399a3ac(p0: number, p1: number): number;

declare function N_0xba24095ea96dfe17(p0: number): number;

declare function N_0xba2a089e60ed1163(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): number;

declare function N_0xba2c49ea6a8d24ff(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
): number;

declare function N_0xba5ca1feb5de0df6(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
): void;

declare function N_0xba62b4d80fa66bd6(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function N_0xba8818212633500a(p0: number, p1: number, p2: number): void;

declare function N_0xba958f68031ddbfc(p0: number, p1: number): number[];

declare function N_0xbaab791aa72c2821(p0: number, p1: number): void;

declare function N_0xbad2a311667a50d7(p0: number, p1: number): void;

declare function N_0xbae08f00021bffb2(p0: number, p1: number): void;

declare function N_0xbae0eedf93f05eaa(p0: number, p1: number): void;

declare function N_0xbaffde5f953720d9(): number;

declare function N_0xbb1e41dd3d3c6250(p0: number, p1: number, p2: number): void;

declare function N_0xbb1ec8c2eef33baa(p0: number): void;

declare function N_0xbb282cf5d2333fb8(p0: number, p1: number): void;

declare function N_0xbb3e5370ebb6be28(p0: number, p1: number): number;

declare function N_0xbb3e9b073e66c3c9(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): void;

declare function N_0xbb51299166b844f3(): void;

declare function N_0xbb68908cd11aebdc(p0: number): void;

declare function N_0xbb68d4d3ca3de402(p0: number, p1: number): void;

declare function N_0xbb697756309d77ee(p0: number): number;

declare function N_0xbb6c707f20d955d4(p0: number): void;

declare function N_0xbb6ea5d59e926095(p0: number, p1: number): void;

declare function N_0xbb765b8fd49a796c(p0: number): number;

declare function N_0xbb7f4273c186bc4b(p0: number, p1: number): void;

declare function N_0xbba140062b15a8ac(p0: number): void;

declare function N_0xbbadfb5e5e5766fb(p0: number, p1: number): void;

declare function N_0xbbc67a6f965c688a(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0xbbe5b63effb08e68(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
): number;

declare function N_0xbbe768e3ae76e07c(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
  p10: number,
  p11: number,
  p12: number,
  p13: number,
  p14: number,
): number;

declare function N_0xbbf6d1d07c02d00a(p0: number, p1: number): void;

declare function N_0xbc016635d6a73b31(p0: number, p1: number, p2: number): void;

declare function N_0xbc02b3d151d3859f(p0: number, p1: number): void;

declare function N_0xbc0884bc590951c7(p0: number, p1: number): number;

declare function N_0xbc0df006a4952c68(p0: number, p1: number, p2: number): void;

declare function N_0xbc1dc48270468444(p0: number): void;

declare function N_0xbc2c927f5c264243(p0: number): void;

declare function N_0xbc3f847ae2c3dc65(p0: number, p1: number): void;

declare function N_0xbc4735f48cd983ef(p0: number, p1: number): void;

declare function N_0xbc6df00d7a4a6819(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
): void;

declare function N_0xbc6f454e310124da(p0: number, p1: number, p2: number): void;

declare function N_0xbc781d24aa11f179(p0: number): void;

declare function N_0xbc7d36946d19e60e(p0: number): void;

declare function N_0xbc864a70ad55e0c1(p0: number, p1: number): number;

declare function N_0xbc8a281ff125c655(): number;

declare function N_0xbc90bdf4e5228ea1(): void;

declare function N_0xbcc6dc59e32a2bdc(p0: number): void;

declare function N_0xbcc76708e5677e1d(p0: number, p1: number): void;

declare function N_0xbcda0ba8762facb9(p0: number): void;

declare function N_0xbce668aaf83608be(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
): void;

declare function N_0xbd090f5b1db82189(p0: number, p1: number): void;

declare function N_0xbd0e4f52f6d95242(p0: number): number;

declare function N_0xbd1c3c0f271c39d3(p0: number, p1: number): void;

declare function N_0xbd3324281e8b9933(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): number;

declare function N_0xbd3c4a2ed509205e(p0: number): number;

declare function N_0xbd629c1c4f501c80(p0: number): number;

declare function N_0xbd62d98799a3daf0(p0: number, p1: number): number;

declare function N_0xbd6b242b8bd5543a(p0: number): number;

declare function N_0xbd70108d01875299(p0: number): number;

declare function N_0xbd75500141e4725c(p0: number, p1: number): void;

declare function N_0xbd861ae8a5181ed7(p0: number, p1: number): void;

declare function N_0xbd944a3d36e992de(): void;

declare function N_0xbd94cecfb2d65119(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
): void;

declare function N_0xbd96185264ddaaea(p0: number, p1: number): void;

declare function N_0xbdc6e364c9c78178(p0: number): number;

declare function N_0xbdcc671b911040f9(p0: number): void;

declare function N_0xbdd9c235d8d1052e(p0: number): number;

declare function N_0xbdda0c290c228159(p0: number, p1: number, p2: number): void;

declare function N_0xbdda142759307528(p0: number): void;

declare function N_0xbded916a9f9b0604(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
): number;

declare function N_0xbdfeeb7600bcd938(p0: number): void;

declare function N_0xbe012571b25f5aca(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): number;

declare function N_0xbe0c524970892d41(p0: number, p1: number): void;

declare function N_0xbe1067cd1c9570f6(p0: number): number;

declare function N_0xbe28db99556ff8d9(p0: number): number;

declare function N_0xbe551c2cc421185d(p0: number, p1: number): void;

declare function N_0xbe711b14a159e84f(p0: number, p1: number): void;

declare function N_0xbe72591d1509ffe4(p0: number): number;

declare function N_0xbe7d814cfa181b56(): void;

declare function N_0xbe83cae8ed77a94f(p0: number): void;

declare function N_0xbe8daa9d8d01da6a(p0: number, p1: number, p2: number): void;

declare function N_0xbea3a6e5f5f79a6f(p0: number, p1: number): number;

declare function N_0xbea7d3cb47e1479c(): number;

declare function N_0xbec65c6049b3219d(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
): number;

declare function N_0xbed386157f65942c(p0: number, p1: number): void;

declare function N_0xbedbe39b5fd98fd6(p0: number): number;

declare function N_0xbeefbb608d2aa68a(p0: number): void;

declare function N_0xbefed69ce8317f91(p0: number): number;

declare function N_0xbf2dd155b2adcd0a(p0: number): number;

declare function N_0xbf4dc1784be94dfa(
  ped: number,
  p1: boolean,
  hash: string | number,
): void;

declare function N_0xbf4f34a85ca2970d(): void;

declare function N_0xbf567df2bef211a6(p0: number, p1: number): void;

declare function N_0xbf5987e1cde63501(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): number;

declare function N_0xbf5e791bbbf90a3c(p0: number, p1: number): number;

declare function N_0xbf6583e926d13890(p0: number, p1: number): void;

declare function N_0xbf8276e51761f9da(): number;

declare function N_0xbfa6b7731c3baf02(): void;

declare function N_0xbfc83da249befcc9(p0: number, p1: number, p2: number): void;

declare function N_0xbfca7afabf9d7967(p0: number, p1: number): number;

declare function N_0xbfcb17895bb99e4e(p0: number, p1: number): void;

declare function N_0xbfff81e12a745a5f(): void;

declare function N_0xc0258742b034dfaf(p0: number): void;

declare function N_0xc028b3f52c707c49(p0: number): number;

declare function N_0xc0474c8bcf6787ad(p0: number): number;

declare function N_0xc04f47d488ef9eba(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function N_0xc061e50f8d299f95(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): number;

declare function N_0xc06cff658b2e51da(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0xc07b91b996c1de89(p0: number, p1: number): void;

declare function N_0xc07cff658b2e51da(p0: number, p1: number): number;

declare function N_0xc080ff658b2e51da(p0: number): number;

declare function N_0xc084ff658b2e52da(p0: number): number;

declare function N_0xc084ff658b2e53da(): number;

declare function N_0xc084ff658b2e54da(p0: number): number;

declare function N_0xc084ff658b2e55da(p0: number, p1: number): number;

declare function N_0xc084ff658b2e61da(p0: number): number;

declare function N_0xc084ff658b2e71da(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0xc084ff658b2e81da(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0xc086ff658b2e51da(p0: number): number;

declare function N_0xc086ff658b2e51db(): number;

declare function N_0xc087ff658b2e51da(p0: number, p1: number): number;

declare function N_0xc088ff658b2e51da(): number;

declare function N_0xc089ff658b2e51da(p0: number, p1: number): number;

declare function N_0xc08aff658b2e51da(p0: number): void;

declare function N_0xc08aff658b2e51db(p0: number): void;

declare function N_0xc08bff658b2e51da(p0: number): number;

declare function N_0xc08cff658b2e51da(p0: number, p1: number): number;

declare function N_0xc08def658b2e51da(p0: number): number;

declare function N_0xc08dff658b2e51da(): number;

declare function N_0xc08dff658b2e51db(p0: number): number;

declare function N_0xc08e804c91f47c80(p0: number, p1: number): number;

declare function N_0xc08eff658b2e51db(p0: number, p1: number): number;

declare function N_0xc08fff658b2e51da(): number;

declare function N_0xc08fff658b2e51db(p0: number): number;

declare function N_0xc0940ac858c1e126(p0: number): number;

declare function N_0xc09cff658b2e51da(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0xc0abf784590798a9(p0: number): void;

declare function N_0xc0b1c05b313693d1(p0: number, p1: number): void;

declare function N_0xc0b21f235c02139c(p0: number): void;

declare function N_0xc0cffda87c2c163d(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0xc0df161950fb101e(p0: number): number;

declare function N_0xc0e880b7a441164d(p0: number, p1: number): number;

declare function N_0xc0edef16d90661ee(p0: number, p1: number): void;

declare function N_0xc0f0417a90402742(p0: number, p1: number): void;

declare function N_0xc1193521e3b9fadd(p0: number, p1: number): void;

declare function N_0xc163dac52ac975d3(p0: number, p1: number): void;

declare function N_0xc177c827cefc0aa4(p0: number, p1: number): void;

declare function N_0xc1799fafd2fdf52b(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function N_0xc17a94cc8fc3c61a(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): void;

declare function N_0xc17f69e1418cd11f(p0: number): number;

declare function N_0xc1842f40fd501da2(p0: number, p1: boolean): void;

declare function N_0xc184ff658b2e55da(p0: number, p1: number): number;

declare function N_0xc1ab7eefd3e6ee49(p0: number, p1: number): void;

declare function N_0xc1e1a3d5ed7617b8(p0: number, p1: number): void;

declare function N_0xc1f04fb37e3f0e57(p0: number, p1: number): number;

declare function N_0xc205b3c54c6a4e37(p0: number): void;

declare function N_0xc212f1d05a8232bb(p0: number): number;

declare function N_0xc223d299c670413d(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): number;

declare function N_0xc2266aa617668ad3(p0: number, p1: number): void;

declare function N_0xc22aa08a8adb87d4(p0: number): number;

declare function N_0xc239dbd9a57d2a71(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
): number;

declare function N_0xc252c0cc969af79a(p0: number): void;

declare function N_0xc2745d9261664901(p0: number, p1: number): void;

declare function N_0xc276fe69dda22bad(p0: number): number;

declare function N_0xc284ff658b2e55da(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0xc285fd21294a1c49(p0: number): number;

declare function N_0xc28f62ac9774fc1b(): number;

declare function N_0xc29996a337bdd099(p0: number): number;

declare function N_0xc2b8164c3be871a4(): void;

declare function N_0xc2c05defe85a0b64(): boolean;

declare function N_0xc2e62678d602853c(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
): void;

declare function N_0xc2e71d7e0a7b4c89(p0: number): number;

declare function N_0xc2ef407645beecdc(p0: number): number;

declare function N_0xc310239acccf5579(): void;

declare function N_0xc31c44c43b48fde3(p0: number, p1: number): void;

declare function N_0xc325a6baa62cf8a2(p0: number, p1: number): void;

declare function N_0xc332c91388f5580b(p0: number): void;

declare function N_0xc346a546612c49a9(p0: number): number;

declare function N_0xc349ee1e6efa494b(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function N_0xc351394b932a6a50(p0: number): void;

declare function N_0xc3544ad0522e69b4(p0: number, p1: number): void;

declare function N_0xc369e2234e34a0ca(p0: number, p1: number): number;

declare function N_0xc372b6a88f6e4ad8(p0: number, p1: number, p2: number): void;

declare function N_0xc37792a3f9c90771(): number;

declare function N_0xc3896d03e2852236(p0: number): void;

declare function N_0xc38b4952b728397a(p0: number, p1: number): void;

declare function N_0xc394ff658b2e55da(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): number;

declare function N_0xc395355843be134b(p0: number): number;

declare function N_0xc3995d396f1d97b6(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0xc399cc89fba05da0(p0: number, p1: number): void;

declare function N_0xc3abcfbc7d74afa5(p0: number, p1: number, p2: number): void;

declare function N_0xc3adf4880784fa9c(p0: number): void;

declare function N_0xc3d4b754c0e86b9e(p0: number, p1: number): number;

declare function N_0xc3d581a34bc0a1f0(p0: number, p1: number): void;

declare function N_0xc3e9e5d4f413b773(p0: number, p1: number): void;

declare function N_0xc4019cf9ae8e931a(p0: number): number[];

declare function N_0xc412aa1c73111fe0(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): void;

declare function N_0xc43cd2668b204419(): number;

declare function N_0xc4533e3e87125c9e(p0: number): void;

declare function N_0xc47d9080a9a8856a(p0: number, p1: number): void;

declare function N_0xc48152bc6b3e821c(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0xc484ff658b2e55da(p0: number): void;

declare function N_0xc4873b053054c04b(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
): void;

declare function N_0xc488b8c0e52560d8(p0: number): number;

declare function N_0xc489fe31ac726512(p0: number, p1: number): void;

declare function N_0xc48a9eb0d499b3e5(p0: number): number;

declare function N_0xc48af420371c7407(p0: number, p1: number): number;

declare function N_0xc494c76a34266e82(p0: number, p1: number): void;

declare function N_0xc4a2c11fc0d41916(p0: number, p1: number): void;

declare function N_0xc4b67ef3fd65622d(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
): void;

declare function N_0xc4cfce4c656ef480(p0: number): void;

declare function N_0xc4dec3ca8c365a5d(p0: number): number;

declare function N_0xc505036a35afd01b(toggle: boolean): void;

declare function N_0xc5196c42de19f646(): number;

declare function N_0xc5303f460a40d21d(p0: number, p1: number): number;

declare function N_0xc570b881754df609(p0: number, p1: number): number;

declare function N_0xc584ff658b2e55da(p0: number): void;

declare function N_0xc5899c4cd2e2495d(p0: number): void;

declare function N_0xc58ce6824e604dec(p0: number): void;

declare function N_0xc59ab6a04333c502(): number;

declare function N_0xc5b78e41dcf8227c(p0: number, p1: number): void;

declare function N_0xc5bf29f4035277c2(p0: number): number;

declare function N_0xc5c395c60b542a3c(p0: number): number;

declare function N_0xc5c7a2f6567fccbc(): void;

declare function N_0xc5cb91d65852ed7e(p0: number): void;

declare function N_0xc5e7204f322e49eb(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0xc5eb2755fa25f1e9(p0: number): void;

declare function N_0xc6136b40fffb778b(p0: number): void;

declare function N_0xc6170856e54557b2(p0: number, p1: number, p2: number): void;

declare function N_0xc61edebf16cd9668(p0: number, p1: number, p2: number): void;

declare function N_0xc6258f41d86676e0(p0: number, p1: number, p2: number): void;

declare function N_0xc63540aef8384732(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
): void;

declare function N_0xc63540aef8384769(): void;

declare function N_0xc6366a585659d15c(p0: number, p1: number): void;

declare function N_0xc64abc0676af262b(): void;

declare function N_0xc64e597783be9a1d(entity: number, toggle: boolean): void;

declare function N_0xc64e7a62632ad2fe(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
): void;

declare function N_0xc67a4910425f11f1(p0: number, p1: number): void;

declare function N_0xc684ff658b2e55da(p0: number): void;

declare function N_0xc685b014ce3d988b(p0: number): number;

declare function N_0xc687a23e166dcf68(p0: number): number;

declare function N_0xc695870b8a149b96(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
  p10: number,
  p11: number,
  p12: number,
): number;

declare function N_0xc6981aff6d2a71c2(p0: number): void;

declare function N_0xc6a6789bb405d11c(p0: number, p1: number): number;

declare function N_0xc6a7dc546e94fed5(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): number;

declare function N_0xc6c4e15cf7d52fea(p0: number, p1: number): void;

declare function N_0xc6d7ddc843176701(p0: number): number;

declare function N_0xc6dcc2a3a8825c85(p0: number): void;

declare function N_0xc6f81fcd15350323(p0: number, p1: number): void;

declare function N_0xc70041408e16be2d(p0: number, p1: number, p2: number): void;

declare function N_0xc70041408e16be2e(p0: number, p1: number, p2: number): void;

declare function N_0xc71b50ae58d07369(p0: number): [number, number];

declare function N_0xc71d07c96946e263(p0: number, p1: number): void;

declare function N_0xc71fe230a513c30f(p0: number, p1: number): number;

declare function N_0xc72ce37081dae625(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function N_0xc75386174ece95d5(p0: number): number;

declare function N_0xc76e94a78127412b(p0: number, p1: number, p2: number): void;

declare function N_0xc76f252371150d9a(p0: number): void;

declare function N_0xc76fc4c2fc5f4405(p0: number): void;

declare function N_0xc7dc5a0a7df608cb(p0: number): number;

declare function N_0xc805eb785824f712(p0: number): void;

declare function N_0xc81a9e2c8efd28d5(p0: number): void;

declare function N_0xc84e138448507567(vehicle: number, p1: boolean): void;

declare function N_0xc853230e76a152df(p0: number): number;

declare function N_0xc886cd666add42e1(p0: number, p1: number): void;

declare function N_0xc89e7410a93ac19a(p0: number, p1: number): void;

declare function N_0xc8b29d18022ea2b7(p0: number): number;

declare function N_0xc8b6d18e22484643(): void;

declare function N_0xc8ccdb712fbcba92(p0: number): number;

declare function N_0xc8d0611d9a0cf5d3(p0: number): void;

declare function N_0xc8d523bf5bbd3808(p0: number, p1: number): number;

declare function N_0xc8e21c1677dc5e6f(p0: number, p1: number): void;

declare function N_0xc8fc3b2432e8229d(): number;

declare function N_0xc900a465364a85d6(p0: number): void;

declare function N_0xc900cec8a172375b(p0: number, p1: number, p2: number): void;

declare function N_0xc9151483cc06a414(p0: number): void;

declare function N_0xc927890aa64e9661(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): number;

declare function N_0xc93a9a45430d484e(p0: number): number;

declare function N_0xc95611869e14f8af(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function N_0xc964fcd3d1720697(): number;

declare function N_0xc97e0d2302382211(p0: number, p1: number): number;

declare function N_0xc991ef46fe323867(p0: number, p1: number): void;

declare function N_0xc99f104bdf8c7f5a(p0: number, p1: number): void;

declare function N_0xc9b4b3a36f81fd75(p0: number): number;

declare function N_0xc9caeaeec1256e54(p0: number): void;

declare function N_0xc9ea26893c9e4024(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): void;

declare function N_0xca0bac376c541978(): number;

declare function N_0xca1315c33b9a2847(p0: number): number;

declare function N_0xca1f0b5103936891(p0: number): number;

declare function N_0xca27a86caa4e98ed(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
): number;

declare function N_0xca41e86545413b5b(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
): void;

declare function N_0xca56dd6ab7a39f64(p0: number): number;

declare function N_0xca58d4fd20d70f24(p0: number): number;

declare function N_0xca59808e51fd67c4(p0: number, p1: number): void;

declare function N_0xca5c90d40665d5ce(p0: number, p1: number): number;

declare function N_0xca95924c893a0c91(p0: number, p1: number): number;

declare function N_0xca95c156c14b2054(p0: number, p1: number): void;

declare function N_0xcaae29cb5591b2a5(p0: number, p1: number): number;

declare function N_0xcaaf2bccfef37f77(p0: number, p1: number): void;

declare function N_0xcab4dd2d5b2b7246(p0: number, p1: number): void;

declare function N_0xcac43d060099ea72(p0: number): void;

declare function N_0xcacab2b123bbdbd6(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0xcacc2f9d994504b7(p0: number): number;

declare function N_0xcad4fe9398820d24(p0: number, p1: number): number;

declare function N_0xcaf4ca2f87779f8f(p0: number, p1: number): number;

declare function N_0xcaf50048c8d0fba0(p0: number, p1: number): number;

declare function N_0xcaff2c9747103c02(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0xcb0360efefb2580d(padIndex: number): void;

declare function N_0xcb0b9506bc91e441(p0: number, p1: number): void;

declare function N_0xcb1a3864c524f784(p0: number, p1: number): void;

declare function N_0xcb2ca620c48bc875(p0: number, p1: number): number;

declare function N_0xcb42afe2b613ee55(p0: number): number;

declare function N_0xcb4ef7edae2e16f1(): number;

declare function N_0xcb5d11f9508a928d(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
): number;

declare function N_0xcb61a63aa53d7d22(p0: number, p1: number): void;

declare function N_0xcb690f680a3ea971(p0: number, p1: number): number;

declare function N_0xcb86d3e3e3708901(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): number;

declare function N_0xcb8f4c9343ebe240(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0xcb9401f918cb0f75(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function N_0xcbac13f065c47596(): number;

declare function N_0xcbb54cc7ffffab86(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function N_0xcbb7b6edfa933ade(p0: number): number;

declare function N_0xcbc7b6f9a56b79f6(p0: number, p1: number): void;

declare function N_0xcbccf73ffa69cc6b(player: number): void;

declare function N_0xcbd9ec60495c728c(p0: number): void;

declare function N_0xcbde59c48f2b06f5(p0: number, p1: number, p2: number): void;

declare function N_0xcbf2bebb468a34f3(p0: number): void;

declare function N_0xcbf743c984695cf3(): number;

declare function N_0xcbf88256e44d5d39(p0: number, p1: number): void;

declare function N_0xcbfb4951f2e3934c(p0: number, p1: number): void;

declare function N_0xcbfbd38f2e0a263b(p0: number, p1: number): void;

declare function N_0xcbfc7725de6ce2e0(p0: number, p1: number): number;

declare function N_0xcc1baf72d571db8d(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0xcc24cb07f60b496e(p0: number, p1: number): number;

declare function N_0xcc2b20596e29e4e3(p0: number, p1: number): number;

declare function N_0xcc3b787e73e64160(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): void;

declare function N_0xcc3edc5614b03f61(p0: number): void;

declare function N_0xcc4e72c339461ed1(): number;

declare function N_0xcc61d8d6c19d9f14(p0: number): void;

declare function N_0xcc644bc1dd655269(p0: number, p1: number): number;

declare function N_0xcc6b5aafc87bfc7b(p0: number, p1: number, p2: number): void;

declare function N_0xcc7fc854b956a128(p0: string, p1: string): void;

declare function N_0xcc8ca3e88256e58f(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
): void;

declare function N_0xcc9c4393523833e2(p0: number, p1: number, p2: number): void;

declare function N_0xccb4635a071fb62d(): void;

declare function N_0xccb97b51893c662f(p0: number, p1: number): number;

declare function N_0xccd9b77f70d31c9d(p0: number): number;

declare function N_0xcce219c922737bfa(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
): void;

declare function N_0xcce7c695c164c35f(p0: number): number;

declare function N_0xccf71fcfa0070b1a(): number;

declare function N_0xccf878d50f8ab10d(p0: number): number;

declare function N_0xcd072523791ddc1b(p0: number): number;

declare function N_0xcd284e2f6ac27ee9(p0: number): void;

declare function N_0xcd53e6cbf609c012(p0: number): number;

declare function N_0xcd66fea29400a0b5(p0: number): number;

declare function N_0xcd6f8a0335d821f9(p0: number): void;

declare function N_0xcd954f330693f5f2(): number;

declare function N_0xcd9a485f2b383b44(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): number;

declare function N_0xcd9e2d9bc52fd80f(p0: number, p1: number): void;

declare function N_0xcd9e5f94a2f38683(p0: number, p1: number): void;

declare function N_0xcdb682bb47c02f0a(p0: number, p1: number): void;

declare function N_0xcdc25355c0d65963(p0: number): number;

declare function N_0xcdc5512a407cf08d(p0: number): number;

declare function N_0xcdcd7b2d49aee73a(p0: number): void;

declare function N_0xcddd4b74660e2335(p0: number, p1: number, p2: number): void;

declare function N_0xcdfb8c04d4c95d9b(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function N_0xce0d2f5586627cce(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): void;

declare function N_0xce1531927ad6c9f8(p0: number, p1: number): void;

declare function N_0xce27824b5968b79a(p0: number, p1: number): void;

declare function N_0xce285a4413b00b7f(p0: number, p1: number): void;

declare function N_0xce2acd6f602803e5(p0: number): number;

declare function N_0xce4e669400e5f8aa(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function N_0xce54c9abe6fbc6db(p0: number): number;

declare function N_0xce5d0ffe83939af1(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function N_0xce6b874286d640bb(p0: number, p1: number): void;

declare function N_0xce71c2f9baa3f975(p0: number, p1: number): void;

declare function N_0xce7690c0a0d1c36d(p0: number): void;

declare function N_0xce7a6c1d5cde1f9d(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function N_0xce88a261dcbba0d9(p0: number, p1: number): number;

declare function N_0xceab54f4632c6ef6(p0: number, p1: number): void;

declare function N_0xceb1f1eed484a5b4(p0: number, p1: number): void;

declare function N_0xceb40b678e403759(p0: number): number;

declare function N_0xcec4ca2cab8fa98c(vehicle: number, p1: boolean): void;

declare function N_0xcedbf17efcc0e4a4(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0xcedc16930526f728(p0: number): void;

declare function N_0xceec64bd27a59312(p0: number): number;

declare function N_0xcef4c65de502d367(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): number;

declare function N_0xcf0b19806473d324(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function N_0xcf213a5fc3abfc08(p0: number, p1: number, p2: number): void;

declare function N_0xcf23ab5bd47b384d(p0: number): void;

declare function N_0xcf342503ca4c8df1(p0: number, p1: number): void;

declare function N_0xcf45df50c7775f2a(): number;

declare function N_0xcf63ef77b0df0397(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function N_0xcf69ea05cd9c33c9(): void;

declare function N_0xcf9da72002fc16bf(p0: number, p1: number, p2: number): void;

declare function N_0xcfad2c8cd1054523(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function N_0xcfb2eed4fcb7bd77(p0: number, p1: number, p2: number): void;

declare function N_0xcfc0bd09bb1b73ff(p0: number): number;

declare function N_0xcfda2518f322d836(p0: number): number;

declare function N_0xcfe122ec635cc2b2(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function N_0xcffc3eccd7a5cceb(p0: number, p1: number, p2: number): void;

declare function N_0xd0116df21e6c7b36(p0: number, p1: number): number;

declare function N_0xd041a32992a55f84(p0: number, p1: number): void;

declare function N_0xd04241bbf6d03a5e(p0: number): number;

declare function N_0xd0498ad30e16b6bd(): number;

declare function N_0xd049920cd29f6cc8(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): void;

declare function N_0xd049fdaf089fddb0(p0: number, p1: number, p2: number): void;

declare function N_0xd04ad186ce8bb129(p0: number, p1: number, p2: number): void;

declare function N_0xd0541ef28e9c4783(): number;

declare function N_0xd05590c1ab38f068(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): number;

declare function N_0xd05ad61f242c626b(p0: number, p1: number): void;

declare function N_0xd0730c1fa40348d9(p0: number): number;

declare function N_0xd08066e00d26c448(p0: number): number;

declare function N_0xd08685ba892dbfab(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): number;

declare function N_0xd090abef4d6a7d96(p0: number): number;

declare function N_0xd0976cc34002db57(p0: number): number;

declare function N_0xd0aabe5b9f8fa589(p0: number, p1: number): void;

declare function N_0xd0b0b044112bf424(player: number): void;

declare function N_0xd0b7aeb56229d317(p0: number): number;

declare function N_0xd0ba1853d76683c8(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): void;

declare function N_0xd0e02aa618020d17(p0: number, p1: number): void;

declare function N_0xd1031b83ac093bc7(p0: number): void;

declare function N_0xd103f6dbb5442be8(p0: number, p1: number): void;

declare function N_0xd1555fbc96c88444(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): number;

declare function N_0xd17672447692478e(p0: number, p1: number): void;

declare function N_0xd1a226f2e05e58fc(p0: number, p1: number): void;

declare function N_0xd1a70c1e8d1031fe(p0: number, p1: number): void;

declare function N_0xd1ba66940e94c547(): number;

declare function N_0xd1bf325c8252a982(p0: number, p1: number): number;

declare function N_0xd1df5e54f4acbe1a(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
): number;

declare function N_0xd1efa8d68bf5d63d(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function N_0xd1f6b912785bfd35(p0: number): number;

declare function N_0xd1ffb246f4e088ac(p0: number): number;

declare function N_0xd21a3d421e7f09f7(p0: number, p1: number): void;

declare function N_0xd21c7418c590bb40(p0: number): number;

declare function N_0xd2209866b0cb72ea(p0: number, p1: number): number;

declare function N_0xd2b9c78537ed5759(p0: number): void;

declare function N_0xd2ba051b94ca9bcc(p0: number): number;

declare function N_0xd2c9126410dfa1b2(p0: number): number;

declare function N_0xd2cb0fb0fdcb473d(p0: number, p1: number): void;

declare function N_0xd2d74f89df844a50(p0: number): void;

declare function N_0xd2dfc9cca5596a11(p0: number): void;

declare function N_0xd2f0fe8805d91647(p0: number, p1: number): void;

declare function N_0xd346248c1dce0d76(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function N_0xd355e2f1bb41087e(p0: number, p1: number): number;

declare function N_0xd3750ccc00635fc2(p0: number): number;

declare function N_0xd389a2549c4efb30(p0: number): number;

declare function N_0xd39a72ae5ebd57e5(): void;

declare function N_0xd39d32eb3b52dd83(p0: number): number;

declare function N_0xd3a0da8f91612c6e(p0: number, p1: number, p2: number): void;

declare function N_0xd3a3c8b9f3bdef81(): number;

declare function N_0xd3a7b003ed343fd9(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): void;

declare function N_0xd3f58e9316b7fc2a(p0: number): void;

declare function N_0xd3f7445cea2e5035(p0: number): number;

declare function N_0xd3f943b88f55376a(p0: number): void;

declare function N_0xd4022c7286b0dfa2(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0xd4071efc83794b2f(p0: number, p1: number): void;

declare function N_0xd414be129bb81b32(): number;

declare function N_0xd42514c182121c23(p0: number): number;

declare function N_0xd426e2e3288469d6(p0: number, p1: number): void;

declare function N_0xd428c3f92fc3f6f8(p0: number, p1: number): void;

declare function N_0xd453bb601d4a606e(p0: number): number;

declare function N_0xd45547d8396f002a(): void;

declare function N_0xd45bb89b53fc0cfd(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
): void;

declare function N_0xd460135c98940274(p0: number, p1: number): void;

declare function N_0xd4636c2edb0dea8a(p0: number): number;

declare function N_0xd46bf94c4c66fab0(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): number;

declare function N_0xd470725e0703d22f(p0: number): number;

declare function N_0xd47d47efbf103fb8(p0: number, p1: number): void;

declare function N_0xd48993a61938c64d(p0: number, p1: number): number;

declare function N_0xd4907ef4334c7602(p0: number, p1: number): void;

declare function N_0xd4958e8cf0de0dd0(p0: number): void;

declare function N_0xd4b614179bcd0654(p0: number): void;

declare function N_0xd4d403ea031f351c(p0: number): number;

declare function N_0xd4e5c1e93c466127(p0: number, p1: number): number;

declare function N_0xd4ee21b7cc7fd350(p0: number): void;

declare function N_0xd4f5efb55769d272(p0: number, p1: number): number;

declare function N_0xd4fa73fe628fec63(p0: number, p1: number): void;

declare function N_0xd503d6f0986d58bc(p0: number, p1: number): void;

declare function N_0xd508fa229f1c4900(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
): number;

declare function N_0xd52d20b0c76bb26d(p0: number, p1: number): number;

declare function N_0xd52df30355ea7c8e(p0: number, p1: number, p2: number): void;

declare function N_0xd53846b9c931c181(p0: number, p1: number, p2: number): void;

declare function N_0xd543487a1f12828f(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function N_0xd543d3a8fde4f185(p0: number, p1: number): number;

declare function N_0xd55a871e1ce3481b(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function N_0xd55db4466d00a258(p0: number): number;

declare function N_0xd56e5f336c675efa(p0: number): number;

declare function N_0xd56ff170710fc826(p0: number, p1: number): number;

declare function N_0xd5910ecf81a2278c(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function N_0xd5bd1b5318a81994(p0: number, p1: number): void;

declare function N_0xd5d72f1624f3ba7c(p0: number): void;

declare function N_0xd5fe956c70ff370b(p0: number): number;

declare function N_0xd61fcf9fcfd515b7(p0: number, p1: number, p2: number): void;

declare function N_0xd635df6baa5a6017(): number;

declare function N_0xd637d327080cd86e(p0: number): void;

declare function N_0xd63b4ba3a02a99e0(p0: number, p1: number): void;

declare function N_0xd64dbc8b0424135f(p0: number, p1: number): void;

declare function N_0xd65fdc686a031c83(p0: number, p1: number, p2: number): void;

declare function N_0xd6663ec374092383(): number;

declare function N_0xd66c9e72b3cc4982(p1: number): [number, number];

declare function N_0xd6740e14e4cefc0b(p0: number): number;

declare function N_0xd67b6f3bcf81ba47(p0: number, p1: number): void;

declare function N_0xd699e688b49c0fd2(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): void;

declare function N_0xd6bd313cfa41e57a(p0: number): number;

declare function N_0xd6c0a8c7c0b2f82c(p0: number, p1: number): void;

declare function N_0xd6cb05ddaee43afd(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
): void;

declare function N_0xd6e39dc5d46df4ab(p0: number): number;

declare function N_0xd6f6acf4392187fb(p0: number): number;

declare function N_0xd70c7a30412f8fa0(p0: number): number;

declare function N_0xd710a5007c2ac539(p0: number, p1: number, p2: number): void;

declare function N_0xd730281e496621fb(p0: number, p1: number): void;

declare function N_0xd733528b6c35647a(p0: number, p1: number): void;

declare function N_0xd740f11fbc8aef43(p0: number, p1: number, p2: number): void;

declare function N_0xd743c4293f47afad(p0: number): number;

declare function N_0xd747979c053efa7a(p0: number): void;

declare function N_0xd7494ded50c6ef52(p0: number, p1: number, p2: number): void;

declare function N_0xd74acdf7db8114af(p0: number): void;

declare function N_0xd77ae48611b7b10a(p0: number, p1: number): void;

declare function N_0xd785864798258032(): number;

declare function N_0xd78a26024bb13e08(p0: number): void;

declare function N_0xd798df5db67b1659(p0: number): number;

declare function N_0xd7ad3c7ebaf88c92(p0: number): number;

declare function N_0xd7bad4062074b9c1(p0: number): number;

declare function N_0xd7d22f5592aed8ba(p0: number): number;

declare function N_0xd7d2f45c56a4f4df(p0: number, p1: number, p2: number): void;

declare function N_0xd7db94ab78e8ebe4(p0: number, p1: number): number;

declare function N_0xd7f6781a0abaf6fb(p0: number): number;

declare function N_0xd806cd2a4f2c2996(p0: number): number;

declare function N_0xd80a8854db5cfba5(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): number;

declare function N_0xd80faf919a2e56ea(p0: number, p1: number): void;

declare function N_0xd8254cb2c586412b(p0: number, p1: number): number;

declare function N_0xd826690b5cf3beff(p0: number, p1: number): void;

declare function N_0xd8402b858f4ddd88(p0: number, p1: number): number;

declare function N_0xd840c130d7aacfa5(p0: number, p1: number, p2: number): void;

declare function N_0xd8736efda38edc5c(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): void;

declare function N_0xd882c5b3991575b7(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): number[];

declare function N_0xd894437e12c17aec(p0: number, p1: number): void;

declare function N_0xd89504d9d7d5057d(p0: number): number;

declare function N_0xd8c7162ab2e2af45(p0: number): void;

declare function N_0xd8ceeed54c672b5d(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
): void;

declare function N_0xd8e3d22aa4f0e0a5(): number;

declare function N_0xd904f75dbd7ab865(entity: number): void;

declare function N_0xd9130842d7226045(p0: number, p1: number): number;

declare function N_0xd91e55b6c005eb09(p0: number, p1: number): number;

declare function N_0xd9267375834c5eab(p0: number): number;

declare function N_0xd92fa81b64920e85(p0: number, p1: number, p2: number): void;

declare function N_0xd9459157eb22c895(): number;

declare function N_0xd955fee4b87afa07(p0: number): number;

declare function N_0xd95d777f828b2bbb(p0: number): void;

declare function N_0xd95f04a4e73be85e(p0: number, p1: number): number;

declare function N_0xd962f8579d702db5(): void;

declare function N_0xd97d8d905f1562f2(p0: number): number;

declare function N_0xd99229fe93b46286(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
): void;

declare function N_0xd999e379265a4501(p0: number, p1: number, p2: number): void;

declare function N_0xd9bc98b55bcfaa9b(p0: number): void;

declare function N_0xd9bf3ed8efb67ea3(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): number;

declare function N_0xd9c24f53631f2372(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0xd9edb2e4512d563e(
  p0: number,
  p1: boolean,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: boolean,
  p7: number,
): void;

declare function N_0xd9f2ff4af394d926(): void;

declare function N_0xda0a30153fcc0ffd(): void;

declare function N_0xda1a9adc4e3d4b16(p0: number, p1: number, p2: number): void;

declare function N_0xda1bfed8582f61f0(): number;

declare function N_0xda26263c07cce9c2(p0: number): void;

declare function N_0xda26263c87cce9c1(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function N_0xda37a053c1522f5d(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): number;

declare function N_0xda4b1a479c414fb2(): number;

declare function N_0xda4d8eb04e8e2928(p0: number): void;

declare function N_0xda5d3f2c6dd5b5d4(p0: number): void;

declare function N_0xda7fdeff4de86839(): number;

declare function N_0xda801f7f6a5278d3(p0: number): number;

declare function N_0xda8b2eaf29e872e2(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0xda98246c7a3c2189(p0: number): void;

declare function N_0xda9d7be231fe865f(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0xdab6a2fc56b7de65(p0: number): number;

declare function N_0xdabfe48ba0d457aa(): number;

declare function N_0xdace03c65c6666db(p0: number, p1: number): void;

declare function N_0xdad6cd07caa4f382(): void;

declare function N_0xdad7fb8402651654(): void;

declare function N_0xdaefdfdb2aeece37(p0: number, p1: number): number;

declare function N_0xdb1bd07fb464584d(p0: number, p1: number): void;

declare function N_0xdb382fe20c2da222(p0: number): void;

declare function N_0xdb438cc9bc6f4022(): number;

declare function N_0xdb48e99f8e064e56(p0: number): void;

declare function N_0xdb622ecd3dcbe078(): number;

declare function N_0xdb7abdd203fa3704(): number;

declare function N_0xdbbf12ea7c1029b2(p0: number, p1: number): void;

declare function N_0xdbc4b552b2ae9a83(p0: number, p1: number): number;

declare function N_0xdc0556d0f484ecaa(p0: number): void;

declare function N_0xdc057b86fc157031(): number;

declare function N_0xdc0a1f0ecec9f0c0(p0: number, p1: number): void;

declare function N_0xdc2f83a0612ca34d(p0: number): number;

declare function N_0xdc3914a99b4a5fdf(p0: number): number;

declare function N_0xdc416ca762bc4f43(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
): number;

declare function N_0xdc44f405a6b98d03(p0: number, p1: number): number;

declare function N_0xdc5e09d012d759c4(p0: number, p1: number, p2: number): void;

declare function N_0xdc62cd70658e7a02(): number;

declare function N_0xdc68829bb3f37023(p0: number, p1: number): void;

declare function N_0xdc69f6913cca0b99(p0: number, p1: number): void;

declare function N_0xdc6ad5c046f33ab4(p0: number, p1: number): void;

declare function N_0xdc88d06719070c39(p0: number): number;

declare function N_0xdc91f22f09bc6c2f(p0: number, p1: number): void;

declare function N_0xdc9273d95976ba22(p0: number): number;

declare function N_0xdc93f0948f2c28f4(p0: number): void;

declare function N_0xdc9655d47dec0353(p0: number): number;

declare function N_0xdc9b361cb7776673(p0: number): void;

declare function N_0xdca4a74135e1dea5(p0: number): number;

declare function N_0xdca6abdb9288fbe4(p0: number, p1: number): void;

declare function N_0xdcc4b7f7112e8ab7(p0: number): number;

declare function N_0xdccaa7c3bfd88862(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
): number;

declare function N_0xdcec875a02991ad0(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): number;

declare function N_0xdcf06d0cdff68424(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0xdcf12b89624aac96(p0: number): void;

declare function N_0xdcf5ba95bbf0faba(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
): void;

declare function N_0xdd03fc2089ad093c(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function N_0xdd0660c997de94fd(p0: number, p1: number): void;

declare function N_0xdd0b7c5ae58f721d(p0: number): number;

declare function N_0xdd0bc0edcb2162f6(p0: number): void;

declare function N_0xdd100ce1ebbf37e3(p0: number, p1: number): void;

declare function N_0xdd1232b332cbb9e7(p0: number, p1: number, p2: number): void;

declare function N_0xdd1e1393d966d39a(p0: number, p1: number): number;

declare function N_0xdd33a82352c4652f(p0: number, p1: number, p2: number): void;

declare function N_0xdd560abef5d3784c(p0: number, p1: number): void;

declare function N_0xdd5fd601481f648b(p0: number): number;

declare function N_0xdd73c9838ce7181d(): number;

declare function N_0xdd7806fd0543bc3d(): number;

declare function N_0xdd9540e7b1c9714f(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): void;

declare function N_0xdd9dc1ab63d513ce(p0: number, p1: number, p2: number): void;

declare function N_0xddaeb478e58f8dea(p0: number, p1: number): number;

declare function N_0xddb2578e95ef7138(p0: number): number;

declare function N_0xddbd560745b1ee98(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0xddbea5506c848227(p0: number): number;

declare function N_0xddc64f5e31eedab6(p0: number): number;

declare function N_0xddce8e960d1de240(p0: number): void;

declare function N_0xddceb0f26c89c00f(p0: number): number;

declare function N_0xddcf6fea5d7acc17(p0: number, p1: number): void;

declare function N_0xddfad4deaa7fa362(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): void;

declare function N_0xde0c8b145ea466ff(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
): void;

declare function N_0xde0ea444735c1368(p0: number): number;

declare function N_0xde116ecffdd4b997(p0: number, p1: number): void;

declare function N_0xde1b1907a83a1550(p0: number, p1: number): void;

declare function N_0xde2c3b74d2b3705c(p0: number, p1: number): void;

declare function N_0xde3904b22695d9f9(p0: number, p1: number): number;

declare function N_0xde544b7ec0c187cc(p0: number): void;

declare function N_0xde5faa741a781f73(p0: number, p1: number): void;

declare function N_0xde6c85975f9d4894(p0: number): number;

declare function N_0xde7b2b4144906cdf(p0: number, p1: number): void;

declare function N_0xde8c5b9f65017fa1(p0: number): number;

declare function N_0xde9bad3292aa6d5e(p0: number): number;

declare function N_0xdea083c16bb91345(): void;

declare function N_0xdeb2b99a1af1a2a6(p0: number): number;

declare function N_0xdeb369f6ad168c58(p0: number, p1: number): void;

declare function N_0xdedbed3020da49dc(p0: number): void;

declare function N_0xdede679ed29dd4e7(p0: number, p1: number): void;

declare function N_0xdee80fedfdd43c9b(p0: number, p1: number): void;

declare function N_0xdee8d30aa5c2e28d(p0: number, p1: number, p2: number): void;

declare function N_0xdeede7c41742e011(p0: number): void;

declare function N_0xdf4a3404d022adde(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0xdf516e598d966d06(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
): void;

declare function N_0xdf56a2b50c04dea4(p0: number, p1: number): number;

declare function N_0xdf631e4bce1b1fc4(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function N_0xdf66a37936d5f3d9(p0: number): number;

declare function N_0xdf728c5ae137fc14(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0xdf7993356f52359a(p0: number, p1: number): number;

declare function N_0xdf7b5144e25cd3fe(p0: number, p1: number): number;

declare function N_0xdf7f5be9150e47e4(p0: number): void;

declare function N_0xdf8a5855b9f9a97b(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
  p10: number,
  p11: number,
  p12: number,
  p13: number,
  p14: number,
  p15: number,
  p16: number,
  p17: number,
): void;

declare function N_0xdf8e49ea89a01db1(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0xdf93973251fb2ca5(p0: number, p1: number): void;

declare function N_0xdf947fe0d551684e(p0: number, p1: number): number;

declare function N_0xdf94844d474f31e5(p0: number): void;

declare function N_0xdf95df488a645ce7(): void;

declare function N_0xdfa1237f5228263f(p0: number, p1: number): void;

declare function N_0xdfc2b226d56d85f6(p0: number, p1: number): number;

declare function N_0xdfc85c5199045026(p0: number, p1: number): void;

declare function N_0xdfce8ce9f3ebe93f(p0: number): void;

declare function N_0xdfe332a5da6fe7c9(p0: number): number;

declare function N_0xdfea23ec90113657(p0: number): void;

declare function N_0xdffc15aa63d04aab(): number;

declare function N_0xe015cf1f2c0959d8(p0: number): number;

declare function N_0xe01c8dc8edd28d31(p0: number, p1: number): void;

declare function N_0xe01f55b2896f6b37(p0: number, p1: number): void;

declare function N_0xe022cc1b545f1d9f(p0: number): number;

declare function N_0xe057fea9a22eb3ee(p0: number): void;

declare function N_0xe05a5d39be6e93af(p0: number): void;

declare function N_0xe083beda81709891(p0: number): number;

declare function N_0xe0884c184728c75b(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function N_0xe0961aed72642b80(p0: number): void;

declare function N_0xe0b45e983bfc0768(): void;

declare function N_0xe0b61ed8bb37712f(p0: number): void;

declare function N_0xe0cb4ab15cb32710(p0: number, p1: number, p2: number): void;

declare function N_0xe0d6c2a146a5c993(p0: number, p1: number): void;

declare function N_0xe0d73cddea79ddcd(p0: number): number;

declare function N_0xe0e65e0d261f7507(p0: number): void;

declare function N_0xe0fa74aa3cce650b(p0: number, p1: number): void;

declare function N_0xe0fe107ab174d64a(p0: number, p1: number): void;

declare function N_0xe10f2d7715ababec(p0: number): number;

declare function N_0xe1103300f3456de7(p0: number, p1: number, p2: number): void;

declare function N_0xe116f6f2da2d777e(p0: number): number[];

declare function N_0xe124889ae0521fcf(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function N_0xe12d7b4b959644cd(): void;

declare function N_0xe12f56cb25d9ce23(p0: number): number;

declare function N_0xe12f5ed49f44d40d(p0: number): void;

declare function N_0xe133c1ec5300f740(p0: number, p1: number, p2: number): void;

declare function N_0xe13634bb6baf0734(p0: number, p1: number): number;

declare function N_0xe141f6b40b1e3683(p0: number, p1: number): void;

declare function N_0xe157a8a336c7f04a(p0: number, p1: number): void;

declare function N_0xe19035eb65ab2932(p0: number, p1: number): void;

declare function N_0xe195c5a82156321d(p0: number, p1: number): number;

declare function N_0xe1a83d4a3b5d7938(p0: number): number;

declare function N_0xe1aadd0055d76603(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
  p10: number,
): void;

declare function N_0xe1b3be07d3aadded(p0: number, p1: number, p2: number): void;

declare function N_0xe1bc73d6815ba361(p0: number, p1: number, p2: number): void;

declare function N_0xe1c0f8781bf130c2(p0: number, p1: number): number;

declare function N_0xe1c105e6bba48270(): number;

declare function N_0xe1c708ba4885796b(p0: number, p1: number): void;

declare function N_0xe1f365c4c8f259d8(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0xe1f45a67a9f0dcbc(p0: number): void;

declare function N_0xe20027b414bfe6c7(p0: number, p1: number): void;

declare function N_0xe22060121602493b(p0: number, p1: number, p2: number): void;

declare function N_0xe225cef1901f6108(p0: number, p1: number): void;

declare function N_0xe24822a4cfc9107a(p0: number, p1: number): number;

declare function N_0xe2487779957fe897(p0: number, p1: number): void;

declare function N_0xe24c64d9aded2ef5(p0: number, p1: number): number;

declare function N_0xe258570e0c116a66(): number;

declare function N_0xe26970a7ae0f28e9(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function N_0xe28f73212a813e82(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function N_0xe296208c273bd7f0(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
): void;

declare function N_0xe29d8cd66553dbaa(p0: number): void;

declare function N_0xe2b3b852b537c398(p0: number): void;

declare function N_0xe2bb2d6a9fe2ecde(p0: number): void;

declare function N_0xe2be6ffa4a13cbb0(p0: number, p1: number, p2: number): void;

declare function N_0xe2c2fbb7825ffc66(): void;

declare function N_0xe2c3cec3c0903a00(p0: number): number;

declare function N_0xe2cf104add49d4bf(p0: number): void;

declare function N_0xe3144b932dfdff65(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): void;

declare function N_0xe31a04513237dc89(): number;

declare function N_0xe31c0cb1c3186d40(p0: number): void;

declare function N_0xe31fc20319874cb3(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0xe33f98bd76490abc(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0xe348d1404bd80146(p0: number): number;

declare function N_0xe3639db78b3b5400(p0: number): void;

declare function N_0xe368e8422c860ba7(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0xe36d2cb540597ef7(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
): void;

declare function N_0xe36d4a38d28d9cfb(p0: number): void;

declare function N_0xe37acee15ac50c7e(p0: number, p1: number): void;

declare function N_0xe38450dbcbc70e3d(p0: number, p1: number): number;

declare function N_0xe39600e50d608693(p0: number, p1: number): number;

declare function N_0xe3a46370f70f3607(p0: number, p1: number): void;

declare function N_0xe3ab5eefcb6671a2(p0: number): void;

declare function N_0xe404bff0aba23cdc(p0: number): number;

declare function N_0xe47001b7cb8b98ae(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
): number;

declare function N_0xe4770da1b8ff4fd1(p0: number): number;

declare function N_0xe47dd64b9f02677d(p0: number): number;

declare function N_0xe483bb6be686f632(p0: number): number;

declare function N_0xe4abe20dce7c7cfe(p0: number, p1: number, p2: number): void;

declare function N_0xe4b7945ef4f1bfb2(p0: number, p1: number): void;

declare function N_0xe4c11f104620ddce(p0: number, p1: number): number;

declare function N_0xe4c51a8a3bd1664c(p0: number): number;

declare function N_0xe4c64cd37cb176aa(p0: number): number;

declare function N_0xe4c95e0ae31c6512(p0: number, p1: number): void;

declare function N_0xe4d6e45f491a66cb(p0: number, p1: number): number;

declare function N_0xe4e2c581f127a11c(p0: number, p1: number): void;

declare function N_0xe4ef4382e22c780c(p0: number): void;

declare function N_0xe4efb315bcd2a838(p0: number, p1: number): void;

declare function N_0xe50a67c33514a390(p0: number, p1: number): number;

declare function N_0xe525878a35b9eebd(p0: number, p1: number): number;

declare function N_0xe532d6811b3a4d2a(p0: number): boolean;

declare function N_0xe53a308ac35877a8(): number;

declare function N_0xe546bda1b3e288ee(p0: number): number;

declare function N_0xe54bf2ce6c7d23a9(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): void;

declare function N_0xe54dc27571d5edc4(p0: number): number;

declare function N_0xe54dc27571d5edc5(p0: number): number;

declare function N_0xe55478c5edf70ac2(p0: number): number;

declare function N_0xe5634491a58c2703(p0: number): void;

declare function N_0xe57529d23541d2dd(p0: number, p1: number, p2: number): void;

declare function N_0xe578c8ae173719b3(p0: number): number;

declare function N_0xe5822422197bbba3(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0xe5831aa1e2fd147c(p0: number): void;

declare function N_0xe588b5a8a005cb5e(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function N_0xe59f4924bd3a718d(p0: number): number;

declare function N_0xe5a680a5d8b1f687(p0: number): void;

declare function N_0xe5a7f70b7c0f3271(p0: number, p1: number): void;

declare function N_0xe5b76e5b56cd77dd(): number;

declare function N_0xe5d3eb37abc1eb03(p0: number): void;

declare function N_0xe5ef9de716ff737e(p0: number, p1: number, p2: number): void;

declare function N_0xe5ff65cff5160752(): void;

declare function N_0xe600f61f54a444a6(): number;

declare function N_0xe62754d09354f6cf(p0: number): number;

declare function N_0xe631eaf35828fa67(p0: number): number;

declare function N_0xe63d68f455ca0b47(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
): number;

declare function N_0xe65c5cba95f0e510(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
): number;

declare function N_0xe67af24c5a3b6058(p0: number, p1: number, p2: number): void;

declare function N_0xe682002db1f30669(p0: number): void;

declare function N_0xe69fda40aac3efc0(p0: number, p1: number): void;

declare function N_0xe6a151364c600b24(p0: number): number;

declare function N_0xe6aab897120492d6(p0: number, p1: number): number;

declare function N_0xe6aab897120492d7(p0: number, p1: number, p2: number): void;

declare function N_0xe6b763c7f4902201(p0: number, p1: number): void;

declare function N_0xe6bd7dd3fd474415(p0: number, p1: number): void;

declare function N_0xe6c5e2125eb210c1(p0: number, p1: number, p2: number): void;

declare function N_0xe6cb36f43a95d75f(p0: number): void;

declare function N_0xe6d4e435b56d5bd0(p0: number, p1: number): void;

declare function N_0xe6dc9b21ac7a8729(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function N_0xe6f364de6c2fdefe(): void;

declare function N_0xe7282390542f570d(p0: number): number;

declare function N_0xe72e234b30da7b7a(): number;

declare function N_0xe72e5c1289bd1f40(p0: number): number;

declare function N_0xe72f591958f3acab(p0: number): number;

declare function N_0xe735a7da22e88359(p0: number): void;

declare function N_0xe737d5f14304a2ec(p0: number, p1: number, p2: number): void;

declare function N_0xe75cddebf618c8ff(p0: number): number;

declare function N_0xe75eea8db59a9f39(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
): void;

declare function N_0xe76687023d8c8505(p0: number, p1: number): number;

declare function N_0xe7687eb2f634abf0(p0: number): number;

declare function N_0xe777ddf3e78397e8(p0: number): number;

declare function N_0xe787f05dfc977bde(p0: number, p1: number): number;

declare function N_0xe78993ff9022c064(p0: number): void;

declare function N_0xe7998fec53a33bbe(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
): number;

declare function N_0xe79ba3bc265895da(p0: number): number;

declare function N_0xe79c70e77e0973c7(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): number;

declare function N_0xe7bbc4e56b989449(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0xe7dda8bd3bcf751c(p0: number): void;

declare function N_0xe7e4c198b0185900(
  p0: number,
  p1: number,
  p2: boolean,
): void;

declare function N_0xe7e6cb8b713ed190(): void;

declare function N_0xe7f8707269544b29(p0: number, p1: number): number;

declare function N_0xe7fa07624574b79a(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
): void;

declare function N_0xe80e50bee276a54a(p0: number, p1: number): number;

declare function N_0xe8126623008372aa(): void;

declare function N_0xe824ce7d13fcb300(p0: number, p1: number): void;

declare function N_0xe824ce7d13fcb35e(p0: number): number;

declare function N_0xe8346e62fd7fb962(): void;

declare function N_0xe843d21a8e2498aa(p0: number, p1: number): number;

declare function N_0xe84aac1b22a73e99(p0: number, p1: number): void;

declare function N_0xe8770ee02aee45c2(p0: number): void;

declare function N_0xe887bd31d97793f6(p0: number): number;

declare function N_0xe891504b2f0e2dba(p0: number, p1: number): void;

declare function N_0xe8a8378bf651079c(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): number;

declare function N_0xe8abe3b73fc7fe17(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function N_0xe8c296b75eacc357(p0: number, p1: number): void;

declare function N_0xe8d1ccb9375c101b(p0: number, p1: number): number;

declare function N_0xe8e633215471bb5d(p0: number): number;

declare function N_0xe8eaff7b41edd291(p0: number, p1: number, p2: number): void;

declare function N_0xe8f1a5b4ced3725a(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): void;

declare function N_0xe910932f4b30be23(p0: number): void;

declare function N_0xe92012611461a42a(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): void;

declare function N_0xe9225354fb7437a7(p0: number, p1: number): void;

declare function N_0xe92261bd28c0878f(p0: number): number;

declare function N_0xe931354fea710038(p0: number): void;

declare function N_0xe93415b3307208e5(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
): number;

declare function N_0xe94b5e938619712e(): void;

declare function N_0xe956c2340a76272e(p0: number): number;

declare function N_0xe961bf23eab76b12(p0: number, p1: number): number;

declare function N_0xe97240065406cb80(p0: number, p1: number): void;

declare function N_0xe979bb5602ad3402(p0: number, p1: number): number;

declare function N_0xe98204d3c25ae14c(p0: number): void;

declare function N_0xe98d55c5983f2509(p0: number): number;

declare function N_0xe9a6400d1a0e7a55(p0: number): number;

declare function N_0xe9ac8466abe484bb(p0: number, p1: number): void;

declare function N_0xe9b168527b337bf0(p0: number, p1: number): number;

declare function N_0xe9b3fec825668291(p0: number, p1: number, p2: number): void;

declare function N_0xe9bd19f8121ade3e(p0: number, p1: number): void;

declare function N_0xe9c59f6809373a99(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
  p10: number,
): number;

declare function N_0xe9cd9a67834985a7(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
  p10: number,
): void;

declare function N_0xe9e06ea514a69061(p0: number, p1: number): void;

declare function N_0xe9e7a0bac7f57746(p0: number, p1: number): void;

declare function N_0xe9eb79cbf9c0f58a(p0: number): number;

declare function N_0xe9f24081d84931b8(): void;

declare function N_0xe9f676788f8d5e1e(p0: number): number;

declare function N_0xea113bf9b0c0c5d7(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0xea31f199a73801d3(p0: number): number;

declare function N_0xea323f5e1a4da2f1(p0: number, p1: number): void;

declare function N_0xea41d44a8d42057b(): number;

declare function N_0xea44e97849e9f3dd(p0: number): number;

declare function N_0xea522f991e120d45(p0: number): number;

declare function N_0xea546c31fd45f8cd(p0: number): void;

declare function N_0xea6de0cd15aecbe2(p0: number): void;

declare function N_0xea8763e505afd49a(p0: number, p1: number, p2: number): void;

declare function N_0xea8f168a76a0b9bc(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): number;

declare function N_0xeaa8242c8479c27d(p0: number, p1: number): void;

declare function N_0xeaa885ba3cea4e4a(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function N_0xeab3d91d30a344f1(p0: number): void;

declare function N_0xeacebaae0a33fb3f(p0: number): void;

declare function N_0xeae3b5b019c8d23f(p0: number, p1: number): void;

declare function N_0xeaf529446488eb18(p0: number): void;

declare function N_0xeaf682a14f8e5f53(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
): number;

declare function N_0xeaf87da2be78a15b(p0: number, p1: number): void;

declare function N_0xeb1a4dd8352ec828(p0: number): number;

declare function N_0xeb2ed1dc3aec0654(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): void;

declare function N_0xeb3cb3386c775d72(p0: number): void;

declare function N_0xeb48ce48eec41fd4(p0: number): void;

declare function N_0xeb4d592620b8c209(p0: number): void;

declare function N_0xeb6027fd1b4600d5(p0: number, p1: number, p2: number): void;

declare function N_0xeb67d4e056c85a81(p0: number): number;

declare function N_0xeb6f1a9b5510a5d2(p0: number, p1: boolean): void;

declare function N_0xeb8886e1065654cd(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function N_0xeb946b9e579729ad(p0: number, p1: number): void;

declare function N_0xeb98b38ca60742d7(p0: number): number;

declare function N_0xeba2081e0a5f4d17(p0: number): void;

declare function N_0xeba314768fb35d58(p0: number): number;

declare function N_0xeba51a294c73292e(p0: number): void;

declare function N_0xeba87b9273835cf3(p0: number, p1: number): void;

declare function N_0xebaac9a750e7563b(p0: number): number;

declare function N_0xebb208d6ae712c03(p0: number): number;

declare function N_0xebb6e27ac2ff32da(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): void;

declare function N_0xebd49472bccf7642(p0: number, p1: number): void;

declare function N_0xebdc12861d079aba(p0: number, p1: number): void;

declare function N_0xebe46b501bc3fbcf(p0: number, p1: number, p2: number): void;

declare function N_0xebe89623eb861271(p0: number, p1: number): number;

declare function N_0xebfa8d50addc54c4(p0: number): boolean;

declare function N_0xebff94328ff7a18a(p0: number, p1: number): void;

declare function N_0xec089f84a9c16c62(): number;

declare function N_0xec0bd8736dcaf841(p0: number): void;

declare function N_0xec116edb683ad479(p0: number): void;

declare function N_0xec174adbcb611ecc(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
): number;

declare function N_0xec254c2c9b0f08f1(p0: number, p1: number): number;

declare function N_0xec3959e9950bf56b(p0: number): number;

declare function N_0xec3d8c228fe553d7(p0: number): number;

declare function N_0xec3f7f24eeeb3ba3(): void;

declare function N_0xec43c2ffb70e3f30(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function N_0xec516fe805d2cb2d(p0: number): void;

declare function N_0xec60d1d225bc50aa(p0: number, p1: number): void;

declare function N_0xec6935ebe0847b90(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): number;

declare function N_0xec6b59be445fec51(p0: number): number;

declare function N_0xec7e480ff8bd0bed(p0: number): number;

declare function N_0xec819d612038ef4b(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
): number;

declare function N_0xec8703e4536a9952(): void;

declare function N_0xec97101a8f311282(p0: number): number;

declare function N_0xec9a1261bf0ce510(p0: number): number;

declare function N_0xecbb26529a737ef6(p0: number): void;

declare function N_0xecd67e9fa677cccf(p0: number): void;

declare function N_0xece3c34b270428d5(): number;

declare function N_0xece6a0c1b59cd8be(p0: number): number;

declare function N_0xed00d72f81cf7278(p0: number, p1: number, p2: number): void;

declare function N_0xed1c764997a86d5a(p0: number, p1: number): void;

declare function N_0xed1f514af4732258(p0: number): number;

declare function N_0xed22be4c5a399e63(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function N_0xed27560703f37258(p0: number): void;

declare function N_0xed4413cee1bf142c(p0: number): number;

declare function N_0xed4b0c1057892b2e(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function N_0xed591cb17c8ba216(p0: number, p1: number, p2: number): void;

declare function N_0xed9582b3da8f02b4(p0: number): void;

declare function N_0xeda5cbecf56e1386(p0: number): void;

declare function N_0xedd964b7984ac291(p0: number, p1: number): number;

declare function N_0xedfc6c1fd1c964f5(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
): void;

declare function N_0xee04c0afd4efaf0e(p0: number): number;

declare function N_0xee1d6ff54caf7714(p0: number, p1: number): number;

declare function N_0xee4f20004d0288b7(): void;

declare function N_0xee5ae9956743ba20(p0: number, p1: number): void;

/**
 * SET_PED_CAN_*
 * @param ped :
 * @param toggle :
 */
declare function N_0xee9df765990e8d1d(ped: number, toggle: boolean): void;

declare function N_0xeeb7818b1d307212(p0: number): void;

declare function N_0xeed08a3a98b847e2(p0: number, p1: number, p2: number): void;

declare function N_0xeedc9b29314b2733(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
): void;

declare function N_0xeee4829304f93eee(p0: number, p1: number): void;

declare function N_0xeeed8fafec331a70(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): number;

declare function N_0xeef83a759ae06a27(p0: number): number;

declare function N_0xef1a8a484118735e(): void;

declare function N_0xef254f1a4c08b7e6(p0: number): number;

declare function N_0xef259aa1e097e0ad(p0: number, p1: number): void;

declare function N_0xef28a614b4b264b8(p0: number, p1: number): void;

declare function N_0xef2d9ed7ce684f08(p0: number): number;

declare function N_0xef2e6f870783369b(p0: number, p1: number): number;

declare function N_0xef324e9550a394d5(p0: number): number;

declare function N_0xef371232bc6053e1(p0: number): void;

declare function N_0xef3a8772f085b4aa(p0: number): number;

declare function N_0xef3c68f56bad7b69(p0: number, p1: number): void;

declare function N_0xef42f56f69877125(): void;

declare function N_0xef50e344a8f93784(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): number;

declare function N_0xef51242e35242b47(p0: number): void;

declare function N_0xef5a3d2285d8924b(p0: number, p1: number): void;

declare function N_0xef6f2a35faaf2ed7(p0: number): number;

declare function N_0xef7ab1a0e8c86170(p0: number, p1: number): void;

declare function N_0xef9a3132a0aa6b19(): number;

declare function N_0xefb5f34cc0953b27(p0: number): void;

declare function N_0xefc4303ddc6e60d3(p0: number): number;

declare function N_0xefc535c9faf563b3(p0: number): number;

declare function N_0xefc5c6670e0b99ba(): void;

declare function N_0xefd875c2791ebefd(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): number;

declare function N_0xf008e0ba1fe1d644(p0: number): void;

declare function N_0xf01c570e0a0a1e67(p0: number): number;

declare function N_0xf01d21df39554115(p0: number): void;

declare function N_0xf02a9c330bbfc5c7(p0: number): void;

declare function N_0xf0460c7bf80011ea(p0: number): number;

declare function N_0xf05dfaf1adfef2cd(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
): number;

declare function N_0xf06c5b66de20b2b8(p0: number): void;

declare function N_0xf06cbb8ccca823c0(p0: number, p1: number): void;

declare function N_0xf08d8feb455f2c8c(p0: number, p1: number): void;

declare function N_0xf08e42bfa46bdff8(p0: number, p1: number): number;

declare function N_0xf092b6030d6fd49c(p0: number, p1: number): void;

declare function N_0xf0b4f759f35cc7f5(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): void;

declare function N_0xf0b67bad53c35bd9(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
): number;

declare function N_0xf0c0c94b404206fa(): number;

declare function N_0xf0d545c1eead614a(): number;

declare function N_0xf0d54e0651dd7e07(): void;

declare function N_0xf0d728eea3c99775(p0: number, p1: number, p2: number): void;

declare function N_0xf0ee69f500952fa5(p0: number): number;

declare function N_0xf0fbf193f1f5c0ea(p0: number): void;

declare function N_0xf0fbfb9ab15f7734(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0xf0fe8e790bfeb5bb(p0: number, p1: number): void;

declare function N_0xf103823ffe72bb49(p0: number): number;

declare function N_0xf1142e5d64b47802(p0: boolean, p1: boolean): void;

declare function N_0xf11d7cb962fcd747(p0: number): void;

declare function N_0xf14bcef290f869e1(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
): number;

declare function N_0xf1622ce88a1946fb(): void;

declare function N_0xf184b3ece36219cf(p0: number, p1: number): number;

declare function N_0xf18af483df70bbde(p0: number): number;

declare function N_0xf19706b1f8ffa88f(p0: number, p1: number): void;

declare function N_0xf1a6feedf3776ef9(): void;

declare function N_0xf1ad3dd218e6558a(p0: number, p1: number): number;

declare function N_0xf1b84178f8674195(p0: number): void;

declare function N_0xf1c03a5352243a30(p0: number): void;

declare function N_0xf1c5310feaa36b48(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
): void;

declare function N_0xf1e6979c0b779985(p0: number): void;

declare function N_0xf1ea2a881eb7f2cd(p0: number, p1: number): void;

declare function N_0xf20b18a330e6db5c(p0: number): number;

declare function N_0xf216f74101968db0(p0: number): number;

declare function N_0xf21a5d66874fcedd(p0: number, p1: number, p2: number): void;

declare function N_0xf21c7a3f3ffba629(p0: number): void;

declare function N_0xf232c2c546ac16d0(p0: number): void;

declare function N_0xf236c84c6adfcb2f(): number;

declare function N_0xf239400e16c23e08(p0: number, p1: number): void;

declare function N_0xf23a6d6c11d8ec15(p0: number): number;

declare function N_0xf23d6475640d29eb(p0: number): number;

declare function N_0xf252a85b8f3f8c58(p0: number, p1: number): number;

declare function N_0xf256a75210c5c0eb(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): number;

declare function N_0xf260af6f43953316(p0: number): number;

declare function N_0xf2753d691bcda314(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0xf27f1a8de4f50a1b(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
): void;

declare function N_0xf29a186ed428b552(p0: number, p1: number): number;

declare function N_0xf2a2177ac848b3a8(p0: number, p1: number, p2: number): void;

declare function N_0xf2cbc969c4f090c7(): number;

declare function N_0xf2cca7b68cfab2b9(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
  p10: number,
  p11: number,
  p12: number,
  p13: number,
): void;

declare function N_0xf2ea041f1146d75b(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): void;

declare function N_0xf2f543d48f319a3a(): void;

declare function N_0xf2f585411e748b9c(p0: number, p1: number): number;

declare function N_0xf2fddcc8c6bae1b3(p0: number): number;

declare function N_0xf302ab9d978352ee(): number;

declare function N_0xf330a5c062b29bed(p0: number): number;

declare function N_0xf3354d6ca46f419d(p0: number, p1: number): void;

declare function N_0xf336e9f989b3518f(p0: number): number;

declare function N_0xf342f6bd0a8287d5(p0: number): void;

declare function N_0xf3735acd11acd500(p0: number, p1: number): number;

declare function N_0xf3735acd11acd501(p0: number, p1: number): number;

declare function N_0xf37a2149bc9a8a27(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): void;

declare function N_0xf382c92ccc1ccdbc(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0xf383e96c4904df0c(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): number;

declare function N_0xf3a2fba5985c8cd5(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function N_0xf3c873ed0c595109(p0: number): number;

declare function N_0xf3de57a46d5585e9(p0: number): number;

declare function N_0xf3e039322bfbd4d8(p0: number): void;

declare function N_0xf3fda9a617a15145(p0: number, p1: number, p2: number): void;

declare function N_0xf40a109b4b79a848(p0: number, p1: number, p2: number): void;

declare function N_0xf40ab58d83c35027(p0: number): void;

declare function N_0xf40ef49b3099e98e(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
): number;

declare function N_0xf41e2979d5bc5370(p0: number): void;

declare function N_0xf42db680a8b2a4d9(p0: number): number;

declare function N_0xf4452ce83118c738(p0: number, p1: number): number;

declare function N_0xf445de8da80a1792(): number;

declare function N_0xf45e46deecf7df6e(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): void;

declare function N_0xf4601c1203b1a78d(p0: number, p1: number): number;

declare function N_0xf46108c50a22b029(): number;

declare function N_0xf47a1eb2a538a3a3(): number;

declare function N_0xf47e33f8d2523825(p0: number, p1: number): number;

declare function N_0xf4823c813cb8277d(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function N_0xf4860514ad354226(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
): number;

declare function N_0xf48664e9c83825e3(p0: number, p1: number): void;

declare function N_0xf489f94bfee12bb0(p0: number, p1: number): void;

declare function N_0xf49574e2332a8f06(p0: number, p1: number): void;

declare function N_0xf49f14462f0ae27c(p0: number): number;

declare function N_0xf4a5c4509bf923b1(p0: number, p1: number): void;

declare function N_0xf4ac4fa844fd559a(p0: number): number;

declare function N_0xf4cb347d7b5eb0fd(): number;

declare function N_0xf52bd94b47ccf736(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function N_0xf533d68ff970d190(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
): number;

declare function N_0xf5622fa6acfca7db(p0: number, p1: number): void;

declare function N_0xf569e33fb72ed28e(): void;

declare function N_0xf5793bb386e1ff9c(p0: number): void;

declare function N_0xf57db8e83dcd8349(p0: number): number;

declare function N_0xf59fde7b4d31a630(p0: number): number;

declare function N_0xf5e45cb1cf965d2d(p0: number, p1: number, p2: number): void;

declare function N_0xf5ea41c1408695fb(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): number;

declare function N_0xf5ead898ef387e73(p0: number): void;

declare function N_0xf5ffb08976911b50(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function N_0xf60165e1d2c5370b(ped: number): [boolean, number, number];

declare function N_0xf60386770878a98f(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): void;

declare function N_0xf611de44aeb36a1d(p0: number, p1: number): void;

declare function N_0xf61cfedeab627bfa(p0: number): number;

declare function N_0xf620f47b4f4a78c4(p0: number, p1: number): void;

declare function N_0xf6262491c7704a63(p0: number, p1: number): void;

declare function N_0xf634e2892220ef34(p0: number, p1: number): void;

declare function N_0xf63fa29d4a9aca86(p0: number, p1: number): void;

declare function N_0xf64034d533ce8aac(p0: number, p1: number, p2: number): void;

declare function N_0xf65ede5d02a7a760(p0: number, p1: number): void;

declare function N_0xf66090013de648d5(p0: number): number;

declare function N_0xf666ef30f4f0ac4e(p0: number): void;

declare function N_0xf6a7c08df2e28b28(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function N_0xf6a8a652a6b186cd(p0: number): number;

declare function N_0xf6a8c4b4a11ae89c(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
): number;

declare function N_0xf6b82fce03b43a37(p0: number, p1: number): void;

declare function N_0xf6bee7e80ec5ca40(p0: number): void;

declare function N_0xf6ce6f9c3897804e(p0: number): number;

declare function N_0xf6d9e1f3560cbf8e(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): number;

declare function N_0xf6de98516fd3ac9b(): void;

declare function N_0xf6e3d38869d0f7ad(p0: number): void;

declare function N_0xf6e88489b4e6ebe5(p0: number, p1: number): void;

declare function N_0xf6f5447d418daa82(p0: number): number;

declare function N_0xf708298675abdc6a(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
): void;

declare function N_0xf70f00013a62f866(p0: number): number[];

declare function N_0xf718931a82eeb898(): void;

declare function N_0xf7327acc7a89aef1(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0xf7424890e4a094c0(p0: number, p1: number): number;

declare function N_0xf74e134f40192884(p0: number, p1: number): void;

declare function N_0xf78e669fdc202e73(): void;

declare function N_0xf794765390a6dca5(p0: number, p1: number): number;

declare function N_0xf7c180f57f85d0b8(p0: number): number;

declare function N_0xf7ea250b9a919e03(p0: number, p1: number): void;

declare function N_0xf7f51a57349739f2(): number;

declare function N_0xf8096df9b87246e3(p0: number): void;

declare function N_0xf8181b5ef156862c(p0: number): void;

declare function N_0xf81c53561d15f330(): number;

declare function N_0xf8204ef17410bf43(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): number;

declare function N_0xf824530b612fe0ce(): number;

declare function N_0xf83d3dda4d3c8169(p0: number): number;

declare function N_0xf8806ec3ff840fdc(): number;

declare function N_0xf8938cf3984092a5(p0: number): void;

declare function N_0xf89d82a0582e46ed(p0: number, p1: number): void;

declare function N_0xf8b48a361dc388ae(p0: number): number;

declare function N_0xf8bcc5eca33ac9c1(): number;

declare function N_0xf8c20282b237e3f7(p0: number): void;

declare function N_0xf8ca39d5c0d1d9a1(p0: number, p1: number): void;

declare function N_0xf8d09ef8ce61d7bf(p0: number, p1: number): number;

declare function N_0xf8d1d2dab6007eef(p0: number, p1: number): number;

declare function N_0xf8de7154f7d1458f(p0: number): number;

declare function N_0xf8f0705e77a0e705(p0: number): number;

declare function N_0xf8f7da13cfbd4532(p0: number, p1: number): void;

declare function N_0xf917f92bf22ecbab(p0: number): void;

declare function N_0xf92099527db8e2a7(p0: number, p1: number): void;

declare function N_0xf92fa8890dececf6(p0: number, p1: number): void;

declare function N_0xf9331b3a314eb49d(p0: number): number;

declare function N_0xf94692eb9dc15d74(p0: number, p1: number): number;

declare function N_0xf948f4356f010f11(p0: number, p1: number, p2: number): void;

declare function N_0xf94a0d5b254375df(p0: number): void;

declare function N_0xf972f0ab16dc5260(p0: number, p1: number, p2: number): void;

declare function N_0xf97c34c33487d569(p0: number, p1: number): number;

declare function N_0xf97f462779b31786(p0: number): number;

declare function N_0xf98dde0a8ed09323(p0: boolean): void;

declare function N_0xf9933164965533b7(p0: number, p1: number): number;

declare function N_0xf993373285053d77(p0: number, p1: number, p2: number): void;

declare function N_0xf9acf4a08098ea25(ped: number, p1: boolean): void;

declare function N_0xf9b83b77929d8863(): number;

declare function N_0xf9b91c5129eabc08(p0: number, p1: number): number;

declare function N_0xf9c1681347c8bd15(object: number): void;

declare function N_0xf9cbd46433e36713(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
): void;

declare function N_0xf9cff5bb70e8a2cb(p0: number, p1: number): void;

declare function N_0xf9e7dbb39080640b(): number;

declare function N_0xf9e951a1e5517c06(): void;

declare function N_0xf9f0b3028431967b(p0: number, p1: number): number;

declare function N_0xf9f14080d80937bd(p0: number): void;

declare function N_0xfa0d206b489a6846(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): void;

declare function N_0xfa15c9a320e707b0(): void;

declare function N_0xfa1d5e8d1c3ccd67(p0: number, p1: number): void;

declare function N_0xfa2ecc78a6014d4f(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function N_0xfa30e2254461adeb(p0: number, p1: number): void;

declare function N_0xfa38b52f91b59075(): number;

declare function N_0xfa3b61ec249b4674(p0: number): number;

declare function N_0xfa437fa0738c370c(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): void;

declare function N_0xfa50f79257745e74(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
): number;

declare function N_0xfa742b82d093d848(p0: number, p1: number, p2: number): void;

declare function N_0xfa7c5b7e087a4ceb(): number;

declare function N_0xfa7daae3959e6c7b(p0: number, p1: number): void;

declare function N_0xfa821997794f48e7(p0: number, p1: number, p2: number): void;

declare function N_0xfa8c10dce0706d43(p0: number): number;

declare function N_0xfa91736933ab3d93(p0: number): void;

declare function N_0xfaad23de7a54fc14(): void;

declare function N_0xfaed234c7f53abeb(): number;

declare function N_0xfb0e622b401884d3(p0: number): void;

declare function N_0xfb16f08f47b83b4c(p0: number): void;

declare function N_0xfb1e7998b8595825(p0: number, p1: number): number;

declare function N_0xfb4891bd7578cdc1(p0: number, p1: number): number;

declare function N_0xfb5674687a1b2814(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0xfb680a9b33d0edbe(p0: number): void;

declare function N_0xfb6e111908502871(p0: number): void;

declare function N_0xfb6eb8785f808551(
  player: number,
  p1: number,
  p2: boolean,
): boolean;

declare function N_0xfb7cf1de938a3e22(p0: number): number;

declare function N_0xfb9153a54ac713e8(p0: number, p1: number): void;

declare function N_0xfb9eced5b68f3b78(p0: number): number;

declare function N_0xfbc30b70b3cdb87e(): number;

declare function N_0xfbd137bf0ec50fc9(p0: number, p1: number): number;

declare function N_0xfbdfe1c1356e12e8(p0: number, p1: number): number;

declare function N_0xfbe782b3165ac8ec(p0: number): number;

declare function N_0xfbf161fcfec8589e(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): number;

declare function N_0xfc23348f0f4e245f(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function N_0xfc3b580c4380b5b7(p0: number): number;

declare function N_0xfc3bab1801a8255a(p0: number, p1: number): void;

declare function N_0xfc3db99c8144cd81(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): void;

declare function N_0xfc3f638be2b6bb02(): void;

declare function N_0xfc4165c9165c166f(): number;

declare function N_0xfc464598f6ee97b0(): number;

declare function N_0xfc4f15a7dddc47b1(p0: number, p1: number): void;

declare function N_0xfc6ecb9170145ece(): void;

declare function N_0xfc6fcf4c03f1bbf6(): void;

declare function N_0xfc7563f482781a3d(): number;

declare function N_0xfc77c5b44d5ff7c0(p0: number): void;

declare function N_0xfc79dcc94d0a5897(p0: number, p1: number, p2: number): void;

declare function N_0xfc7f71cf49f70b6b(p0: number): void;

declare function N_0xfc81d7c7a151cfaa(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0xfc832b06127d8e99(p0: number, p1: number): number;

declare function N_0xfc9806da9a460093(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
): void;

declare function N_0xfc9b53c072f418e0(): number;

declare function N_0xfca8fb9e15fa80d3(p0: number, p1: number): void;

declare function N_0xfcc6db8dbe709bc8(p0: number): void;

declare function N_0xfccc886ede3c63ec(p0: number, p1: number, p2: number): void;

declare function N_0xfcdec42b1c78b7f8(p0: number, p1: number): void;

declare function N_0xfcf96ccbd81b24c8(p0: number): number;

declare function N_0xfd010a2154b40676(p0: number, p1: number): void;

declare function N_0xfd05b1dde83749fa(p0: number): number;

declare function N_0xfd0759658268fd8e(p0: number): number;

declare function N_0xfd0e389cd44434b6(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
  p10: number,
  p11: number,
  p12: number,
): number;

declare function N_0xfd1ac0b3858f224c(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function N_0xfd1ba1eef7985bb8(p0: number, p1: number): number;

declare function N_0xfd3c31a2e45671e7(p0: number, p1: number): void;

declare function N_0xfd41d1d4350f6413(p0: number): void;

declare function N_0xfd4272a137703449(): void;

declare function N_0xfd461d0aba5559b1(p0: number, p1: number): void;

declare function N_0xfd5bb35aab83fd48(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
): number;

/**
 * SET_PED_CAN_*
 * @param ped :
 * @param toggle :
 */
declare function N_0xfd6943b6df77e449(ped: number, toggle: boolean): void;

declare function N_0xfd8e853f0bc2e942(p0: number, p1: number): void;

declare function N_0xfdb008b3bcf5992f(p0: number, p1: number, p2: number): void;

declare function N_0xfdcedfb0577a390d(p0: number, p1: number): number;

declare function N_0xfdecca06e8b81346(p0: number): number;

declare function N_0xfdf38e2b711bf78e(p0: number, p1: number): number;

declare function N_0xfdfc14799373283f(p0: number): number;

declare function N_0xfdfecc6ee4491e11(p0: number): void;

declare function N_0xfe0304050261442c(p0: number, p1: number): number;

declare function N_0xfe2b3d5500b1b2e4(p0: number, p1: number): void;

declare function N_0xfe53b1f8d43f19bf(p0: number, p1: number): number;

declare function N_0xfe5c6177064bd390(p0: number): number;

declare function N_0xfe5d28b9b7837cc1(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): number;

declare function N_0xfe691e89c08937b6(p0: number, p1: number): number;

declare function N_0xfe7966df01452f32(p0: number, p1: number, p2: number): void;

declare function N_0xfe7c9cf376d23342(p0: number, p1: number): void;

declare function N_0xfea6126c34df2532(p0: number, p1: number): void;

declare function N_0xfeab3db4edb236eb(p0: number): number;

declare function N_0xfeb8646818294c75(p0: number, p1: number): void;

declare function N_0xfec1d4b5c82c176f(p0: number): number;

declare function N_0xfec85339aaca2a35(p0: number, p1: number): void;

declare function N_0xfeca17cf3343694b(p0: number, p1: number): void;

declare function N_0xfeca2081f61ed2cd(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function N_0xfee4a5459472a9f8(): void;

declare function N_0xfefcc345ce357453(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): number;

declare function N_0xfefddc6e8fdf8a75(p0: number, p1: number): void;

declare function N_0xfeff01b5725bcd22(p0: number): number;

declare function N_0xff07cf465f48b830(p0: number): number;

declare function N_0xff1e339ce40eaaaf(p0: number, p1: number): void;

declare function N_0xff252e2bafb7330f(p0: number): void;

declare function N_0xff2b1f59fb892f14(p0: number): void;

declare function N_0xff36f36b07e69059(p0: number): void;

declare function N_0xff5791b7639c2a46(p0: number, p1: number): number;

declare function N_0xff584f097c17fa8f(): number;

declare function N_0xff745b0346e19e2c(p0: number): void;

declare function N_0xff8018c778349234(p0: number): void;

declare function N_0xff83af534156b399(p0: number, p1: number): void;

declare function N_0xff8afca532b500d4(p0: number, p1: number): void;

declare function N_0xff9052bc7a3b7d33(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function N_0xff975bc4435a0fa3(p0: number): number;

/**
 * SET_ENTITY_LO*
 * @param entity :
 * @param toggle :
 */
declare function N_0xff9965c47fa404da(entity: number, toggle: boolean): void;

declare function N_0xffa13742e43507e3(p0: number, p1: number): number;

declare function N_0xffa1594703ed27ca(p0: number, p1: number): void;

declare function N_0xffb520a3e16f7b7b(p0: number, p1: number): void;

declare function N_0xffb99ffd17f65889(p0: number, p1: number): void;

declare function N_0xffcc2db2d9953401(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0xffd54d9fe71b966a(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
): void;

declare function N_0xffddf802279be128(p0: number, p1: number, p2: number): void;

declare function N_0xffde295662405b25(p0: number): number;

declare function N_0xffe9c53deea3db0b(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
): number;

declare function N_0xffebe5aa96bc2e4e(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function N_0xffec4b0a1a3ed515(p0: number, p1: number): number;

declare function N_0xfff6579cf0139fce(p0: number): void;

declare function N_0xfffe15b433300b8c(p0: number, p1: number, p2: number): void;

declare function NetToEnt(netHandle: number): number;

declare function NetToObj(netHandle: number): number;

declare function NetToPed(netHandle: number): number;

declare function NetToVeh(netHandle: number): number;

declare function NetworkAccessTunableBool(
  tunableContext: string | number,
  tunableName: string | number,
): boolean;

declare function NetworkAccessTunableInt(
  tunableContext: string | number,
  tunableName: string | number,
  value?: number,
): [boolean, number];

declare function NetworkAddFriend(message: string): [boolean, number];

declare function NetworkAreHandlesTheSame(): [boolean, number, number];

/**
 * Returns value of fwuiCachedSetting "general.onlineNotificationsInStoryMode"
 */
declare function NetworkAreOnlineNotificationsShownInStoryMode(): boolean;

declare function NetworkCanAccessMultiplayer(
  loadingState: number,
): [boolean, number];

declare function NetworkCanSessionEnd(): boolean;

declare function NetworkClanGetLocalMembershipsCount(): number;

declare function NetworkClanGetMembershipDesc(p1: number): [boolean, number];

declare function NetworkClanIsEmblemReady(
  p0: number,
  p1?: number,
): [boolean, number];

declare function NetworkClanPlayerGetDesc(
  bufferSize: number,
): [boolean, number, number];

declare function NetworkClanPlayerIsActive(
  networkHandle: number,
): [boolean, number];

declare function NetworkClanReleaseEmblem(p0: number): void;

declare function NetworkClanRequestEmblem(p0: number): boolean;

declare function NetworkClanServiceIsValid(): boolean;

declare function NetworkClearClockTimeOverride(): void;

declare function NetworkClearFoundGamers(): void;

declare function NetworkClearGetGamerStatus(): void;

declare function NetworkClockTimeOverride(
  hour: number,
  minute: number,
  second: number,
  p3: number,
  p4: boolean,
): void;

declare function NetworkClockTimeOverride_2(
  hour: number,
  minute: number,
  second: number,
  p3: number,
  p4: boolean,
  p5: boolean,
): void;

declare function NetworkConcealPlayer(player: number, toggle: boolean): void;

declare function NetworkDisableProximityMigration(netID: number): void;

declare function NetworkDoesNetworkIdExist(netID: number): boolean;

declare function NetworkDoesTunableExist(
  tunableContext: string | number,
  tunableName: string | number,
): boolean;

declare function NetworkEndTutorialSession(): void;

declare function NetworkGetClockTimeOverride(): [
  boolean,
  number,
  number,
  number,
];

declare function NetworkGetDestroyerOfEntity(
  p0: number,
  p1: number,
  weaponHash?: number,
): [boolean, number];

declare function NetworkGetDestroyerOfNetworkId(
  netId: number,
  weaponHash?: number,
): [number, number];

declare function NetworkGetEntityFromNetworkId(netId: number): number;

declare function NetworkGetEntityIsNetworked(entity: number): boolean;

declare function NetworkGetEntityKillerOfPlayer(
  player: number,
  weaponHash?: number,
): [number, number];

/**
 * Returns the owner ID of the specified entity.
 * @param entity The entity to get the owner for.
 * @return On the server, the server ID of the entity owner. On the client, returns the player/slot ID of the entity owner.
 */
declare function NetworkGetEntityOwner(entity: number): number;

/**
 * Returns the owner ID of the specified entity.
 * @param entity The entity to get the owner for.
 * @return On the server, the server ID of the entity owner. On the client, returns the player/slot ID of the entity owner.
 */
declare function NetworkGetEntityOwner(entity: number): number;

declare function NetworkGetGamertagFromHandle(): string;

declare function NetworkGetGlobalMultiplayerClock(): [number, number, number];

declare function NetworkGetLocalHandle(p0: number): void;

declare function NetworkGetMaxNumParticipants(): number;

declare function NetworkGetNetworkIdFromEntity(entity: number): number;

declare function NetworkGetNumConnectedPlayers(): number;

declare function NetworkGetNumParticipants(): number;

declare function NetworkGetNumScriptParticipants(
  p1: number,
  p2: number,
): [number, number];

declare function NetworkGetNumUnackedForPlayer(): number;

declare function NetworkGetOldestResendCountForPlayer(): number;

declare function NetworkGetParticipantIndex(index: number): number;

declare function NetworkGetPlayerFromGamerHandle(
  networkHandle: number,
): [number, number];

declare function NetworkGetPlayerIndex(player: number): number;

declare function NetworkGetPlayerIndexFromPed(ped: number): number;

declare function NetworkGetPlayerTutorialSessionInstance(
  player: number,
): number;

declare function NetworkGetPrimaryClanDataClear(): number;

declare function NetworkGetPrimaryClanDataNew(): [boolean, number, number];

declare function NetworkGetPrimaryClanDataPending(): number;

declare function NetworkGetPrimaryClanDataStart(p1: number): [boolean, number];

declare function NetworkGetPrimaryClanDataSuccess(): number;

declare function NetworkGetRandomIntRanged(
  rangeStart: number,
  rangeEnd: number,
): number;

declare function NetworkGetScriptStatus(): number;

declare function NetworkGetThisScriptIsNetworkScript(): boolean;

declare function NetworkGetTimeoutTime(): number;

declare function NetworkGetTotalNumPlayers(): number;

declare function NetworkHandleFromFriend(p0: number, p1: number): void;

declare function NetworkHandleFromPlayer(p0: number, p1: number): void;

declare function NetworkHasControlOfEntity(entity: number): boolean;

declare function NetworkHasControlOfNetworkId(netId: number): boolean;

declare function NetworkHasControlOfPickup(pickup: number): boolean;

declare function NetworkHasPlayerBeenBanned(): boolean;

declare function NetworkHasRosPrivilege(index: number): boolean;

declare function NetworkHasSocialClubAccount(): boolean;

declare function NetworkHashFromPlayerHandle(player: number): number;

declare function NetworkHaveJustUploadLater(): boolean;

declare function NetworkHaveOnlinePrivileges(): boolean;

declare function NetworkIsClockTimeOverridden(): boolean;

declare function NetworkIsCloudAvailable(): boolean;

declare function NetworkIsFindingGamers(): boolean;

declare function NetworkIsFriend(networkHandle: number): [boolean, number];

declare function NetworkIsGameInProgress(): boolean;

declare function NetworkIsGamerInMySession(
  networkHandle: number,
): [boolean, number];

declare function NetworkIsHandleValid(p0: number): boolean;

declare function NetworkIsHost(): boolean;

declare function NetworkIsHostOfThisScript(): boolean;

declare function NetworkIsInMpCutscene(): boolean;

declare function NetworkIsInPlatformParty(): boolean;

declare function NetworkIsInPlatformPartyChat(): boolean;

declare function NetworkIsInSession(): boolean;

declare function NetworkIsInSpectatorMode(): boolean;

declare function NetworkIsInTutorialSession(): boolean;

declare function NetworkIsParticipantActive(p0: number): boolean;

declare function NetworkIsPendingFriend(p0: number): number;

declare function NetworkIsPlayerAParticipant(player: number): boolean;

declare function NetworkIsPlayerAParticipantOnScript(
  p0: number,
  p2: number,
): [boolean, number];

declare function NetworkIsPlayerActive(player: number): boolean;

declare function NetworkIsPlayerConcealed(player: number): boolean;

declare function NetworkIsPlayerConnected(player: number): boolean;

declare function NetworkIsPlayerEqualToIndex(
  player: number,
  index: number,
): boolean;

declare function NetworkIsPlayerInMpCutscene(player: number): boolean;

declare function NetworkIsPlayerInSpectatorMode(player: number): boolean;

declare function NetworkIsScriptActive(
  scriptName: string,
  player: number,
  p2: boolean,
  p3: number,
): boolean;

declare function NetworkIsSessionActive(): boolean;

declare function NetworkIsSessionStarted(): boolean;

declare function NetworkIsSignedOnline(): boolean;

declare function NetworkIsTunableCloudRequestPending(): boolean;

declare function NetworkIsTutorialSessionChangePending(): boolean;

declare function NetworkPlayerIdToInt(): number;

declare function NetworkRegisterEntityAsNetworked(entity: number): void;

declare function NetworkRegisterHostBroadcastVariables(
  p0: number,
  p1: number,
  p2: number,
): void;

declare function NetworkRegisterPlayerBroadcastVariables(
  p0: number,
  p1: number,
  p2: number,
): void;

declare function NetworkRequestControlOfEntity(entity: number): boolean;

declare function NetworkRequestControlOfNetworkId(netId: number): boolean;

declare function NetworkResurrectLocalPlayer(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
): void;

declare function NetworkSessionIsPrivate(): boolean;

declare function NetworkSessionLeave(): boolean;

declare function NetworkSetEntityInvisibleToNetwork(
  entity: number,
  toggle: boolean,
): void;

declare function NetworkSetFriendlyFireOption(toggle: boolean): void;

declare function NetworkSetInMpCutscene(
  p0: boolean,
  p1: boolean,
  p2: number,
  p3: boolean,
): void;

declare function NetworkSetInSpectatorMode(
  toggle: boolean,
  playerPed: number,
): void;

declare function NetworkSetInStaticSpectatorMode(
  toggle: boolean,
  x: number,
  y: number,
  z: number,
): void;

declare function NetworkSetLocalPlayerInvincibleTime(time: number): void;

declare function NetworkSetLocalPlayerSyncLookAt(toggle: boolean): void;

declare function NetworkSetMissionFinished(): void;

declare function NetworkSetRichPresence(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function NetworkSetScriptIsSafeForNetworkGame(): void;

declare function NetworkSetThisScriptIsNetworkScript(
  lobbySize: number,
  p1: boolean,
  playerId: number,
): void;

declare function NetworkSetVehicleWheelsDestructible(
  p0: number,
  p1: number,
): void;

declare function NetworkShowProfileUi(networkHandle: number): void;

declare function NetworkStartSoloTutorialSession(): void;

declare function NetworkTryAccessTunableBool(
  tunableContext: string | number,
  tunableName: string | number,
  defaultValue: boolean,
): boolean;

declare function NetworkTryAccessTunableFloat(
  tunableContext: string | number,
  tunableName: string | number,
  defaultValue: number,
): number;

declare function NetworkTryAccessTunableInt(
  tunableContext: string | number,
  tunableName: string | number,
  defaultValue: number,
): number;

declare function ObjToNet(object: number): number;

declare function ObjectValueAddInteger(key: string, value: number): number;

declare function ObjectValueGetArray(key: string): [number, number];

declare function ObjectValueGetBoolean(key: string): [boolean, number];

declare function ObjectValueGetFloat(key: string): [number, number];

declare function ObjectValueGetInteger(key: string): [number, number];

declare function ObjectValueGetObject(key: string): [number, number];

declare function ObjectValueGetString(key: string): [string, number];

declare function ObjectValueGetType(key: string): [number, number];

declare function ObjectValueGetVector3(key: string): [number[], number];

declare function OpenPatrolRoute(patrolRoute: string): void;

declare function OpenSequenceTask(taskSequenceId: number): void;

declare function OverrideSaveHouse(
  p0: boolean,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: boolean,
  p6: number,
  p7: number,
): boolean;

declare function ParticipantId(): number;

declare function ParticipantIdToInt(): number;

declare function PauseClock(toggle: boolean, unused: number): void;

declare function PauseClockThisFrame(toggle: boolean): void;

declare function PauseDeathArrestRestart(toggle: boolean): void;

declare function PauseScriptedConversation(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): void;

declare function PedCowerInPlace(ped: number, ped2: number): void;

declare function PedCowerMoveToPoint(
  ped: number,
  p1: number,
  p2: number,
  p3: number,
  ped2: number,
  p5: number,
): void;

declare function PedHasUseScenarioTask(ped: number): boolean;

declare function PedToNet(ped: number): number;

declare function PinInteriorInMemory(interior: number): void;

declare function PlaceObjectOnGroundProperly(p0: number, p1?: number): boolean;

declare function PlayAmbientSpeech1(p0: number, p1: number): number;

declare function PlayAmbientSpeechAtCoords(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): number;

declare function PlayAnimOnRunningScenario(
  ped: number,
  animDict: string,
  animName: string,
): void;

declare function PlayAnimalVocalization(
  pedHandle: number,
  p1: number,
  p2?: number,
): number;

declare function PlayCamAnim(
  cam: number,
  animName: string,
  animDictionary: string,
  x: number,
  y: number,
  z: number,
  xRot: number,
  yRot: number,
  zRot: number,
  p9: boolean,
  p10: number,
): boolean;

declare function PlayEndCreditsMusic(play: boolean): void;

declare function PlayEntityAnim(
  entity: number,
  animName: string,
  animDict: string,
  p3: number,
  loop: boolean,
  stayInAnim: boolean,
  p6: boolean,
  delta: number,
  bitset: number,
): boolean;

declare function PlayEntityScriptedAnim(p0: number, p1: number): void;

declare function PlayPain(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): void;

declare function PlaySound(
  audioName: string,
  audioRef: string,
  p2: boolean,
  p3: number,
  p4: boolean,
  p5: number,
): void;

declare function PlaySoundFrontend(
  audioName: string,
  audioRef: string,
  p2: boolean,
  p3: number,
): void;

declare function PlayStreamFromPed(p0: number, p1: number): void;

declare function PlayStreamFromPosition(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function PlayStreamFrontend(p0: number): void;

declare function PlayerId(): number;

declare function PlayerPedId(): number;

declare function PointCamAtCoord(
  cam: number,
  x: number,
  y: number,
  z: number,
): void;

declare function PointCamAtEntity(
  cam: number,
  entity: number,
  p2: number,
  p3: number,
  p4: number,
  p5: boolean,
): void;

declare function PokerBuyIn(p0: number, p1: number): number;

declare function PokerCall(p0: number, p1: number): number;

declare function PokerCheck(p0: number, p1: number): number;

declare function PokerFold(p0: number): number;

declare function PokerGetGameSettingsForId(p0: number): number;

declare function PokerRaise(p0: number, p1: number): number;

declare function PokerReveal(p0: number): number;

declare function PopulateNow(): void;

declare function Pow(base: number, exponent: number): number;

declare function PrefetchSrl(srl: string): void;

declare function PreloadScriptConversation(
  p0: boolean,
  p1: boolean,
  p2: boolean,
  p3: boolean,
): void;

declare function PrepareMusicEvent(eventName: string): boolean;

/**
 * Scope entry for profiler.
 * @param scopeName Scope name.
 */
declare function ProfilerEnterScope(scopeName: string): void;

/**
 * Scope entry for profiler.
 * @param scopeName Scope name.
 */
declare function ProfilerEnterScope(scopeName: string): void;

/**
 * Scope exit for profiler.
 */
declare function ProfilerExitScope(): void;

/**
 * Scope exit for profiler.
 */
declare function ProfilerExitScope(): void;

/**
 * Returns true if the profiler is active.
 * @return True or false.
 */
declare function ProfilerIsRecording(): boolean;

/**
 * Returns true if the profiler is active.
 * @return True or false.
 */
declare function ProfilerIsRecording(): boolean;

declare function PromptAddGroupLink(
  p0: number,
  prompt: number,
  p2: number,
): void;

declare function PromptAddGroupReturnLink(p0: number, prompt: number): void;

declare function PromptClearFavouredPedForConflictResolution(): void;

declare function PromptCreate(
  inputHash: string | number,
  labelName: string,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
): number;

declare function PromptDelete(prompt: number): void;

declare function PromptDisablePromptTypeThisFrame(p0: number): void;

declare function PromptDoesAmbientGroupExist(hash: string | number): boolean;

declare function PromptEnablePromptTypeThisFrame(p0: number): void;

declare function PromptFilterClear(): void;

declare function PromptGetGroupActivePage(hash: string | number): number;

declare function PromptGetGroupIdForScenarioPoint(
  p0: number,
  p1: number,
): number;

declare function PromptGetGroupIdForTargetEntity(entity: number): number;

declare function PromptGetMashModeProgress(prompt: number): number;

declare function PromptGetUrgentPulsingEnabled(prompt: number): boolean;

declare function PromptHasHoldAutoFillMode(prompt: number): boolean;

declare function PromptHasHoldModeCompleted(prompt: number): boolean;

declare function PromptHasMashModeCompleted(prompt: number): boolean;

declare function PromptHasMashModeFailed(prompt: number): boolean;

declare function PromptHasPressedTimedModeCompleted(prompt: number): number;

declare function PromptHasPressedTimedModeFailed(prompt: number): number;

declare function PromptHasStandardModeCompleted(
  prompt: number,
  p1: number,
): boolean;

declare function PromptIsActive(prompt: number): boolean;

declare function PromptIsEnabled(prompt: number): number;

declare function PromptIsHoldModeRunning(prompt: number): boolean;

declare function PromptIsJustPressed(prompt: number): boolean;

declare function PromptIsJustReleased(prompt: number): boolean;

declare function PromptIsPressed(prompt: number): boolean;

declare function PromptIsReleased(prompt: number): boolean;

declare function PromptIsValid(prompt: number): boolean;

declare function PromptRegisterBegin(): number;

declare function PromptRegisterEnd(prompt: number): void;

declare function PromptRemoveGroup(prompt: number, p1: number): void;

declare function PromptRestartModes(prompt: number): void;

declare function PromptSetActiveGroupThisFrame(
  hash: string | number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  prompt: number,
): number;

declare function PromptSetAllowedAction(prompt: number, p1: number): void;

declare function PromptSetAmbientGroupThisFrame(
  entity: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
): number;

declare function PromptSetAttribute(
  prompt: number,
  p1: number,
  p2: number,
): void;

declare function PromptSetBeatMode(prompt: number, p1: number): void;

declare function PromptSetBeatModeGrayedOut(prompt: number, p1: number): void;

declare function PromptSetControlAction(prompt: number, p1: number): number;

declare function PromptSetEnabled(prompt: number, p1: number): void;

declare function PromptSetFavouredPedForConflictResolution(ped: number): void;

declare function PromptSetGroup(prompt: number, p1: number, p2: number): void;

declare function PromptSetHoldAutoFillMode(
  prompt: number,
  p1: number,
  p2: number,
): void;

declare function PromptSetHoldIndefinitelyMode(prompt: number): void;

declare function PromptSetHoldMode(prompt: number, p1: number): void;

declare function PromptSetMashAutoFillMode(
  prompt: number,
  p1: number,
  p2: number,
): void;

declare function PromptSetMashIndefinitelyMode(prompt: number): void;

declare function PromptSetMashManualCanFailMode(
  prompt: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): void;

declare function PromptSetMashManualMode(
  prompt: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): void;

declare function PromptSetMashManualModeDecaySpeed(
  prompt: number,
  p1: number,
): void;

declare function PromptSetMashManualModeIncreasePerPress(
  prompt: number,
  p1: number,
): void;

declare function PromptSetMashManualModePressedGrowthSpeed(
  prompt: number,
  p1: number,
): void;

declare function PromptSetMashMode(prompt: number, p1: number): void;

declare function PromptSetMashWithResistanceCanFailMode(
  prompt: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function PromptSetMashWithResistanceMode(
  prompt: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function PromptSetOrderingAsInputType(prompt: number, p1: number): void;

declare function PromptSetPosition(
  prompt: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function PromptSetPressedTimedMode(prompt: number, p1: number): void;

declare function PromptSetPriority(prompt: number, p1: number): void;

declare function PromptSetRotateMode(
  prompt: number,
  p1: number,
  p2: number,
): void;

declare function PromptSetSpinnerPosition(prompt: number, p1: number): void;

declare function PromptSetSpinnerSpeed(prompt: number, p1: number): void;

declare function PromptSetStandardMode(prompt: number, p1: number): void;

declare function PromptSetStandardizedHoldMode(
  prompt: number,
  p1: number,
): void;

declare function PromptSetTag(prompt: number, p1: number): void;

declare function PromptSetTargetMode(
  prompt: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function PromptSetTargetModeProgress(prompt: number, p1: number): void;

declare function PromptSetTargetModeTarget(
  prompt: number,
  p1: number,
  p2: number,
): void;

declare function PromptSetText(prompt: number, p1: number): void;

declare function PromptSetTransportMode(prompt: number, p1: number): void;

declare function PromptSetUrgentPulsingEnabled(
  prompt: number,
  p1: number,
): void;

declare function PromptSetVisible(prompt: number, p1: number): void;

declare function PromptWasBeatModePressedInTimeWindow(prompt: number): boolean;

/**
 * **Experimental**: This native may be altered or removed in future versions of CitizenFX without warning.
 * Registers a set of archetypes with the game engine. These should match `CBaseArchetypeDef` class information from the game.
 * @param factory A function returning a list of archetypes.
 */
declare function RegisterArchetypes(factory: Function): void;

/**
 * **Experimental**: This native may be altered or removed in future versions of CitizenFX without warning.
 * Registers a set of archetypes with the game engine. These should match `CBaseArchetypeDef` class information from the game.
 * @param factory A function returning a list of archetypes.
 */
declare function RegisterArchetypes(factory: Function): void;

/**
 * Registered commands can be executed by entering them in the client console (this works for client side and server side registered commands). Or by entering them in the server console/through an RCON client (only works for server side registered commands). Or if you use a supported chat resource, like the default one provided in the cfx-server-data repository, then you can enter the command in chat by prefixing it with a `/`.
 * Commands registered using this function can also be executed by resources, using the [`ExecuteCommand` native](#_0x561C060B).
 * The restricted bool is not used on the client side. Permissions can only be checked on the server side, so if you want to limit your command with an ace permission automatically, make it a server command (by registering it in a server script).
 * **Example result**:
 * ![](https://i.imgur.com/TaCnG09.png)
 * @param commandName The command you want to register.
 * @param handler A handler function that gets called whenever the command is executed.
 * @param restricted If this is a server command and you set this to true, then players will need the command.yourCommandName ace permission to execute this command.
 */
declare function RegisterCommand(
  commandName: string,
  handler: Function,
  restricted: boolean,
): void;

/**
 * Registered commands can be executed by entering them in the client console (this works for client side and server side registered commands). Or by entering them in the server console/through an RCON client (only works for server side registered commands). Or if you use a supported chat resource, like the default one provided in the cfx-server-data repository, then you can enter the command in chat by prefixing it with a `/`.
 * Commands registered using this function can also be executed by resources, using the [`ExecuteCommand` native](#\_0x561C060B).
 * The restricted bool is not used on the client side. Permissions can only be checked on the server side, so if you want to limit your command with an ace permission automatically, make it a server command (by registering it in a server script).
 * **Example result**:
 * ![](https://i.imgur.com/TaCnG09.png)
 * @param commandName The command you want to register.
 * @param handler A handler function that gets called whenever the command is executed.
 * @param restricted If this is a server command and you set this to true, then players will need the command.yourCommandName ace permission to execute this command.
 */
declare function RegisterCommand(
  commandName: string,
  handler: Function,
  restricted: boolean,
): void;

/**
 * **Experimental**: This native may be altered or removed in future versions of CitizenFX without warning.
 * Registers a set of entities with the game engine. These should match `CEntityDef` class information from the game.
 * At this time, this function **should not be used in a live environment**.
 * @param factory A function returning a list of entities.
 */
declare function RegisterEntities(factory: Function): void;

/**
 * **Experimental**: This native may be altered or removed in future versions of CitizenFX without warning.
 * Registers a set of entities with the game engine. These should match `CEntityDef` class information from the game.
 * At this time, this function **should not be used in a live environment**.
 * @param factory A function returning a list of entities.
 */
declare function RegisterEntities(factory: Function): void;

/**
 * Registers a specified .gfx file as GFx font library.
 * The .gfx file has to be registered with the streamer already.
 * @param fileName The name of the .gfx file, without extension.
 */
declare function RegisterFontFile(fileName: string): void;

/**
 * Registers a specified .gfx file as GFx font library.
 * The .gfx file has to be registered with the streamer already.
 * @param fileName The name of the .gfx file, without extension.
 */
declare function RegisterFontFile(fileName: string): void;

/**
 * Registers a specified font name for use with text draw commands.
 * @param fontName The name of the font in the GFx font library.
 * @return An index to use with [SET_TEXT_FONT](#_0x66E0276CC5F6B9DA) and similar natives.
 */
declare function RegisterFontId(fontName: string): number;

/**
 * Registers a specified font name for use with text draw commands.
 * @param fontName The name of the font in the GFx font library.
 * @return An index to use with [SET_TEXT_FONT](#\_0x66E0276CC5F6B9DA) and similar natives.
 */
declare function RegisterFontId(fontName: string): number;

declare function RegisterHatedTargetsAroundPed(
  ped: number,
  radius: number,
): void;

/**
 * Registers a key mapping for the current resource.
 * See the related [cookbook post](https://cookbook.fivem.net/2020/01/06/using-the-new-console-key-bindings/) for more information.
 * @param commandString The command to execute, and the identifier of the binding.
 * @param description A description for in the settings menu.
 * @param defaultMapper The [mapper ID](https://docs.fivem.net/docs/game-references/input-mapper-parameter-ids/) to use for the default binding, e.g. `keyboard`.
 * @param defaultParameter The [IO parameter ID](https://docs.fivem.net/docs/game-references/input-mapper-parameter-ids/) to use for the default binding, e.g. `f3`.
 */
declare function RegisterKeyMapping(
  commandString: string,
  description: string,
  defaultMapper: string,
  defaultParameter: string,
): void;

declare function RegisterNamedRendertarget(name: string, p1: boolean): boolean;

declare function RegisterNuiCallbackType(callbackType: string): void;

declare function RegisterNuiCallbackType(callbackType: string): void;

declare function RegisterObjectScriptBrain(
  scriptName: string,
  modelHash: string | number,
  p2: number,
  activationRange: number,
  p4: number,
  p5: number,
): void;

declare function RegisterRawNuiCallback(
  callbackType: string,
  callback: Function,
): void;

/**
 * An internal function which allows the current resource's HLL script runtimes to receive state for the specified event.
 * @param eventName An event name, or "\*" to disable HLL event filtering for this resource.
 */
declare function RegisterResourceAsEventHandler(eventName: string): void;

/**
 * An internal function which allows the current resource's HLL script runtimes to receive state for the specified event.
 * @param eventName An event name, or "\*" to disable HLL event filtering for this resource.
 */
declare function RegisterResourceAsEventHandler(eventName: string): void;

declare function RegisterScriptWithAudio(p0: number): void;

/**
 * **Experimental**: This native may be altered or removed in future versions of CitizenFX without warning.
 * Registers a dynamic streaming asset from the server with the GTA streaming module system.
 * @param resourceName The resource to add the asset to.
 * @param fileName A file name in the resource.
 * @param cacheString The string returned from `REGISTER_RESOURCE_ASSET` on the server.
 */
declare function RegisterStreamingFileFromCache(
  resourceName: string,
  fileName: string,
  cacheString: string,
): void;

/**
 * **Experimental**: This native may be altered or removed in future versions of CitizenFX without warning.
 * Registers a dynamic streaming asset from the server with the GTA streaming module system.
 * @param resourceName The resource to add the asset to.
 * @param fileName A file name in the resource.
 * @param cacheString The string returned from `REGISTER_RESOURCE_ASSET` on the server.
 */
declare function RegisterStreamingFileFromCache(
  resourceName: string,
  fileName: string,
  cacheString: string,
): void;

/**
 * **Experimental**: This native may be altered or removed in future versions of CitizenFX without warning.
 * Registers a KVP value as an asset with the GTA streaming module system. This function currently won't work.
 * @param kvsKey The KVP key in the current resource to register as an asset.
 */
declare function RegisterStreamingFileFromKvs(kvsKey: string): void;

/**
 * **Experimental**: This native may be altered or removed in future versions of CitizenFX without warning.
 * Registers a KVP value as an asset with the GTA streaming module system. This function currently won't work.
 * @param kvsKey The KVP key in the current resource to register as an asset.
 */
declare function RegisterStreamingFileFromKvs(kvsKey: string): void;

/**
 * **Experimental**: This native may be altered or removed in future versions of CitizenFX without warning.
 * Registers a file from an URL as a streaming asset in the GTA streaming subsystem. This will asynchronously register the asset, and caching is done based on the URL itself - cache headers are ignored.
 * Use `IS_STREAMING_FILE_READY` to check if the asset has been registered successfully.
 * @param registerAs The file name to register as, for example `asset.ydr`.
 * @param url The URL to fetch the asset from.
 */
declare function RegisterStreamingFileFromUrl(
  registerAs: string,
  url: string,
): void;

/**
 * **Experimental**: This native may be altered or removed in future versions of CitizenFX without warning.
 * Registers a file from an URL as a streaming asset in the GTA streaming subsystem. This will asynchronously register the asset, and caching is done based on the URL itself - cache headers are ignored.
 * Use `IS_STREAMING_FILE_READY` to check if the asset has been registered successfully.
 * @param registerAs The file name to register as, for example `asset.ydr`.
 * @param url The URL to fetch the asset from.
 */
declare function RegisterStreamingFileFromUrl(
  registerAs: string,
  url: string,
): void;

declare function RegisterTarget(p0: number, p1: number, p2: number): void;

declare function ReleaseFlowBlock(p0: number): void;

declare function ReleaseNamedRendertarget(name: string): boolean;

declare function ReleaseNamedScriptAudioBank(audioBank: string): void;

declare function ReleaseScriptAudioBank(): void;

declare function ReleaseSoundId(soundId: number): void;

declare function RemoveAllCoverBlockingAreas(): void;

declare function RemoveAllPedWeapons(
  ped: number,
  p1: boolean,
  p2: boolean,
): void;

declare function RemoveAllPickupsOfType(pickupHash: string | number): void;

declare function RemoveAllShockingEvents(p0: boolean): void;

declare function RemoveAnimDict(animDict: string): void;

declare function RemoveAnimSceneEntity(
  animScene: number,
  p1: number,
  p2: number,
): void;

declare function RemoveBlip(blip: number): void;

declare function RemoveClipSet(clipSet: string): void;

declare function RemoveCoverPoint(coverpoint: number): void;

declare function RemoveCurrentRise(p0: number): void;

declare function RemoveDecal(decal: number): void;

declare function RemoveDecalsFromObject(obj: number): void;

declare function RemoveDecalsInRange(
  x: number,
  y: number,
  z: number,
  range: number,
): void;

declare function RemoveDispatchSpawnBlockingArea(p0: number): void;

declare function RemoveDoorFromSystem(doorHash: string | number): void;

declare function RemoveEntityFromAudioMixGroup(
  entity: number,
  p1: number,
): void;

declare function RemoveForcedObject(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): void;

declare function RemoveFromItemset(itemset: number, p1: number): void;

declare function RemoveGroup(groupId: number): void;

declare function RemoveGuardZone(name: string): void;

declare function RemoveImap(imapHash: string | number): void;

declare function RemoveImap_2(imapHash: string | number): void;

declare function RemoveModelHide(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
): void;

declare function RemoveModelSwap(
  x: number,
  y: number,
  z: number,
  radius: number,
  originalModel: string | number,
  newModel: string | number,
  p6: boolean,
): void;

declare function RemoveMpGamerTag(gamerTagId: number): void;

declare function RemoveNamedPtfxAsset(fxNameHash: string | number): void;

declare function RemoveNavmeshBlockingObject(p0: number): void;

declare function RemoveParticleFx(ptfxHandle: number, p1: boolean): void;

declare function RemoveParticleFxFromEntity(entity: number): void;

declare function RemoveParticleFxInRange(
  X: number,
  Y: number,
  Z: number,
  radius: number,
): void;

declare function RemovePedDefensiveArea(ped: number, toggle: boolean): void;

declare function RemovePedFromGroup(ped: number): void;

declare function RemovePickup(pickup: number): void;

declare function RemovePopMultiplierArea(id: number, p1: boolean): void;

declare function RemovePortalSettingsOverride(p0: string): void;

declare function RemovePtfxAsset(): void;

declare function RemoveRelationshipGroup(groupHash: string | number): void;

/**
 * Experimental natives, please do not use in a live environment.
 * @param origTxd
 * @param origTxn
 */
declare function RemoveReplaceTexture(origTxd: string, origTxn: string): void;

/**
 * Experimental natives, please do not use in a live environment.
 */
declare function RemoveReplaceTexture(origTxd: string, origTxn: string): void;

declare function RemoveScenarioBlockingArea(p0: number, p1: boolean): void;

declare function RemoveScenarioBlockingAreas(): void;

declare function RemoveScriptFire(fireHandle: number): void;

declare function RemoveShockingEvent(event: number): boolean;

declare function RemoveShockingEventSpawnBlockingAreas(): void;

declare function RemoveSpeedZone(speedzone: number): boolean;

/**
 * **Experimental**: This native may be altered or removed in future versions of CitizenFX without warning.
 * Removes a handler for changes to a state bag.
 * @param cookie The cookie.
 */
declare function RemoveStateBagChangeHandler(cookie: number): void;

declare function RemoveStealthKill(hash: string | number, p1: boolean): void;

declare function RemoveVehicleAsset(vehicleAsset: number): void;

declare function RemoveVehicleRecording(p0: number, p1?: number): number;

declare function RemoveVehicleWindow(
  vehicle: number,
  windowIndex: number,
): void;

declare function RemoveVehiclesFromGeneratorsInArea(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
): void;

declare function RemoveWaypointRecording(name: string): void;

declare function RemoveWeaponComponentFromWeaponObject(
  p0: number,
  p1: number,
): void;

declare function RemoveWeaponFromPed(
  ped: number,
  weaponHash: string | number,
  p2: boolean,
  p3: string | number,
): void;

declare function RenderFirstPersonCam(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
): void;

declare function RenderScriptCams(
  render: boolean,
  ease: boolean,
  easeTime: number,
  p3: boolean,
  p4: boolean,
  p5: number,
): void;

declare function RequestAnimDict(animDict: string): void;

declare function RequestClipSet(clipSet: string): void;

declare function RequestCollisionAtCoord(x: number, y: number, z: number): void;

declare function RequestCollisionForModel(model: string | number): void;

declare function RequestFlowBlock(p0: number): number;

declare function RequestImap(imapHash: string | number): void;

declare function RequestImap_2(imapHash: string | number): void;

declare function RequestModel(model: string | number, p1: boolean): void;

declare function RequestNamedPtfxAsset(fxNameHash: string | number): void;

declare function RequestPedVehicleVisibilityTracking(
  ped: number,
  p1: boolean,
): void;

declare function RequestPedVisibilityTracking(ped: number): void;

declare function RequestPtfxAsset(): void;

declare function RequestScript(scriptName: string): void;

declare function RequestScriptAudioBank(p0: number): boolean;

declare function RequestScriptWithNameHash(scriptHash: string | number): void;

declare function RequestStreamedTextureDict(
  textureDict: string,
  p1: boolean,
): void;

declare function RequestTaskMoveNetworkStateTransition(
  ped: number,
  name: string,
): void;

declare function RequestVehicleAsset(
  vehicleHash: string | number,
  vehicleAsset: number,
): void;

declare function RequestVehicleHighDetailModel(vehicle: number): void;

declare function RequestVehicleRecording(i: number, name: string): void;

declare function RequestWaypointRecording(name: string): void;

declare function ReserveNetworkMissionObjects(amount: number): void;

declare function ReserveNetworkMissionPeds(amount: number): void;

declare function ReserveNetworkMissionVehicles(amount: number): void;

declare function ResetAiWeaponDamageModifier(): void;

declare function ResetAnimScene(animScene: number, p1: string): void;

declare function ResetBenchmarkRecording(): void;

declare function ResetDispatchIdealSpawnDistance(): void;

declare function ResetEntityAlpha(entity: number): void;

/**
 * Resets parameters which is used by the game for checking is ped needs to fly through windscreen after a crash to default values.
 */
declare function ResetFlyThroughWindscreenParams(): void;

declare function ResetGroupFormationDefaultSpacing(groupHandle: number): void;

/**
 * Resets values from the zoom level data by index to defaults from mapzoomdata.meta.
 * @param index Zoom level index.
 */
declare function ResetMapZoomDataLevel(index: number): void;

/**
 * Resets values from the zoom level data by index to defaults from mapzoomdata.meta.
 * @param index Zoom level index.
 */
declare function ResetMapZoomDataLevel(index: number): void;

declare function ResetParticleFxOverride(name: string): void;

declare function ResetPausedRenderphases(): void;

declare function ResetPedInVehicleContext(ped: number): void;

declare function ResetPedLastVehicle(ped: number): void;

declare function ResetPedRagdollTimer(ped: number): void;

declare function ResetPedWeaponMovementClipset(ped: number): void;

declare function ResetPlayerArrestState(player: number): void;

declare function ResetPlayerInputGait(player: number): void;

declare function ResetScenarioGroupsEnabled(): void;

declare function ResetScenarioTypesEnabled(): void;

declare function ResetScriptTimeWithinFrame(): void;

declare function ResetVehicleStuckTimer(
  vehicle: number,
  nullAttributes: number,
): void;

declare function ResetWantedLevelDifficulty(player: number): void;

declare function RestartScriptedConversation(p0: number): void;

declare function RestorePlayerStamina(player: number, p1: number): void;

declare function ResumeAnimSceneFromLastCheckpoint(animScene: number): void;

declare function ResurrectPed(ped: number): void;

declare function ReviveInjuredPed(ped: number): void;

declare function RopeDrawShadowEnabled(toggle: boolean): number;

declare function RopeForceLength(ropeId: number, length: number): void;

declare function RopeSetUpdateOrder(ropeId: number, p1: number): void;

declare function Round(value: number): number;

declare function SaveBenchmarkRecording(): void;

declare function ScFeedSubmitPresetMessage(
  _type: number,
  subType: number,
): number;

declare function ScInboxMessageGetDataInt(
  p0: number,
  context: string,
  out?: number,
): [boolean, number];

declare function ScInboxMessageGetDataString(
  p0: number,
  context: string,
  out: string,
): boolean;

declare function ScInboxMessageGetString(): string;

declare function ScInboxMessageInit(p0: number): number;

declare function ScInboxMessagePop(p0: number): boolean;

declare function ScProfanityCheckString(
  _string: string,
  token?: number,
): [boolean, number];

declare function ScProfanityGetCheckIsPending(token: number): boolean;

declare function ScProfanityGetCheckIsValid(token: number): boolean;

declare function ScProfanityGetStringPassed(token: number): boolean;

declare function ScProfanityGetStringStatus(token: number): number;

declare function ScriptThreadIteratorGetNextThreadId(): number;

declare function ScriptThreadIteratorReset(): void;

/**
 * Sends a message to the specific DUI root page. This is similar to SEND_NUI_MESSAGE.
 * @param duiObject The DUI browser handle.
 * @param jsonString The message, encoded as JSON.
 */
declare function SendDuiMessage(duiObject: number, jsonString: string): void;

/**
 * Sends a message to the specific DUI root page. This is similar to SEND_NUI_MESSAGE.
 * @param duiObject The DUI browser handle.
 * @param jsonString The message, encoded as JSON.
 */
declare function SendDuiMessage(duiObject: number, jsonString: string): void;

/**
 * Injects a 'mouse down' event for a DUI object. Coordinates are expected to be set using SEND_DUI_MOUSE_MOVE.
 * @param duiObject The DUI browser handle.
 * @param button Either `'left'`, `'middle'` or `'right'`.
 */
declare function SendDuiMouseDown(duiObject: number, button: string): void;

/**
 * Injects a 'mouse down' event for a DUI object. Coordinates are expected to be set using SEND_DUI_MOUSE_MOVE.
 * @param duiObject The DUI browser handle.
 * @param button Either `'left'`, `'middle'` or `'right'`.
 */
declare function SendDuiMouseDown(duiObject: number, button: string): void;

/**
 * Injects a 'mouse move' event for a DUI object. Coordinates are in browser space.
 * @param duiObject The DUI browser handle.
 * @param x The mouse X position.
 * @param y The mouse Y position.
 */
declare function SendDuiMouseMove(
  duiObject: number,
  x: number,
  y: number,
): void;

/**
 * Injects a 'mouse move' event for a DUI object. Coordinates are in browser space.
 * @param duiObject The DUI browser handle.
 * @param x The mouse X position.
 * @param y The mouse Y position.
 */
declare function SendDuiMouseMove(
  duiObject: number,
  x: number,
  y: number,
): void;

/**
 * Injects a 'mouse up' event for a DUI object. Coordinates are expected to be set using SEND_DUI_MOUSE_MOVE.
 * @param duiObject The DUI browser handle.
 * @param button Either `'left'`, `'middle'` or `'right'`.
 */
declare function SendDuiMouseUp(duiObject: number, button: string): void;

/**
 * Injects a 'mouse up' event for a DUI object. Coordinates are expected to be set using SEND_DUI_MOUSE_MOVE.
 * @param duiObject The DUI browser handle.
 * @param button Either `'left'`, `'middle'` or `'right'`.
 */
declare function SendDuiMouseUp(duiObject: number, button: string): void;

/**
 * Injects a 'mouse wheel' event for a DUI object.
 * @param duiObject The DUI browser handle.
 * @param deltaY The wheel Y delta.
 * @param deltaX The wheel X delta.
 */
declare function SendDuiMouseWheel(
  duiObject: number,
  deltaY: number,
  deltaX: number,
): void;

/**
 * Injects a 'mouse wheel' event for a DUI object.
 * @param duiObject The DUI browser handle.
 * @param deltaY The wheel Y delta.
 * @param deltaX The wheel X delta.
 */
declare function SendDuiMouseWheel(
  duiObject: number,
  deltaY: number,
  deltaX: number,
): void;

/**
 * Sends a message to the `loadingScreen` NUI frame, which contains the HTML page referenced in `loadscreen` resources.
 * @param jsonString The JSON-encoded message.
 * @return A success value.
 */
declare function SendLoadingScreenMessage(jsonString: string): boolean;

/**
 * Sends a message to the `loadingScreen` NUI frame, which contains the HTML page referenced in `loadscreen` resources.
 * @param jsonString The JSON-encoded message.
 * @return A success value.
 */
declare function SendLoadingScreenMessage(jsonString: string): boolean;

declare function SendNuiMessage(jsonString: string): boolean;

declare function SendNuiMessage(jsonString: string): boolean;

declare function SetActivateObjectPhysicsAsSoonAsItIsUnfrozen(
  object: number,
  toggle: boolean,
): void;

declare function SetAiMeleeWeaponDamageModifier(modifier: number): void;

declare function SetAiWeaponDamageModifier(value: number): void;

/**
 * Adds a cooldown between instances of moving and then aiming.
 * Can be optionally used to hinder 'speedboosting'
 * To turn off, set value to 0
 * @param value Number of milliseconds between allowed aiming
 */
declare function SetAimCooldown(value: number): void;

declare function SetAirDragMultiplierForPlayersVehicle(
  player: number,
  multiplier: number,
): void;

declare function SetAllRandomPedsFlee(player: number, toggle: boolean): void;

declare function SetAllRandomPedsFleeThisFrame(player: number): void;

declare function SetAllVehicleGeneratorsActive(): void;

declare function SetAllVehicleGeneratorsActiveInArea(
  x1: number,
  y1: number,
  z1: number,
  x2: number,
  y2: number,
  z2: number,
  p6: boolean,
  p7: boolean,
): void;

declare function SetAmbientPedRangeMultiplierThisFrame(
  multiplier: number,
): void;

declare function SetAmbientVoiceName(ped: number, name: string): void;

declare function SetAmbientZoneListState(p1: boolean, p2: boolean): number;

declare function SetAmbientZoneListStatePersistent(
  ambientZone: string,
  p1: boolean,
  p2: boolean,
): void;

declare function SetAmbientZoneState(
  zoneName: string,
  p1: boolean,
  p2: boolean,
): void;

declare function SetAmbientZoneStatePersistent(
  ambientZone: string,
  p1: boolean,
  p2: boolean,
): void;

declare function SetAmmoInClip(
  ped: number,
  weaponHash: string | number,
  ammo: number,
): boolean;

declare function SetAnimRate(
  p0: number,
  p1: number,
  p2: number,
  p3: boolean,
): void;

declare function SetAnimSceneBool(
  animScene: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function SetAnimSceneEntity(
  animScene: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function SetAnimSceneFloat(
  animScene: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): void;

declare function SetAnimSceneInt(
  animScene: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function SetAnimSceneOrigin(
  animScene: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
): void;

declare function SetAnimScenePaused(animScene: number, p1: number): void;

declare function SetAnimScenePlaybackList(animScene: number, p1: number): void;

declare function SetAnimSceneRate(animScene: number, p1: number): void;

declare function SetAnimalMood(animal: number, mood: number): void;

declare function SetAnimalTuningBoolParam(
  animal: number,
  p1: number,
  p2: boolean,
): void;

declare function SetAnimalTuningFloatParam(
  animal: number,
  p1: number,
  p2: number,
): void;

declare function SetArtificialLightsState(state: boolean): void;

declare function SetAttributeBaseRank(p0: number, p1: number, p2: number): void;

declare function SetAttributeBonusRank(
  p0: number,
  p1: number,
  p2: number,
): void;

declare function SetAttributePoints(p0: number, p1: number, p2: number): void;

declare function SetAudioFlag(flagName: string, toggle: boolean): void;

declare function SetAudioSceneVariable(
  scene: string,
  variable: string,
  value: number,
): void;

declare function SetAudioVehiclePriority(vehicle: number, p1: number): void;

declare function SetBit(offset: number): number;

declare function SetBitsInRange(
  rangeStart: number,
  rangeEnd: number,
  p3: number,
): number;

declare function SetBlipCoords(
  blip: number,
  posX: number,
  posY: number,
  posZ: number,
): void;

declare function SetBlipFlashTimer(p0: number, p1: number, p2: number): void;

declare function SetBlipFlashes(p0: number, p1: number, p2: number): number;

declare function SetBlipNameFromTextFile(blip: number, gxtEntry: string): void;

declare function SetBlipNameToPlayerName(blip: number, player: number): void;

declare function SetBlipRotation(blip: number, rotation: number): void;

declare function SetBlipScale(blip: number, scale: number): void;

declare function SetBlipSprite(p0: number, p1: number, p2: number): void;

declare function SetBlockOfPlayerBits(p0: number, p1: number, p2: number): void;

declare function SetBlockingOfNonTemporaryEvents(
  ped: number,
  toggle: boolean,
): void;

declare function SetBoatAnchor(vehicle: number, toggle: boolean): void;

declare function SetBoatAnchorBuoyancyCoefficient(
  vehicle: number,
  value: number,
): void;

declare function SetBoatFrozenWhenAnchored(
  p0: number,
  p1: number,
  p2: number,
): void;

declare function SetBoatSinksWhenWrecked(
  vehicle: number,
  toggle: boolean,
): void;

declare function SetCamActive(cam: number, active: boolean): void;

declare function SetCamActiveWithInterp(
  camTo: number,
  camFrom: number,
  duration: number,
  easeLocation: number,
  easeRotation: number,
): void;

declare function SetCamAffectsAiming(cam: number, toggle: boolean): void;

declare function SetCamCoord(
  cam: number,
  posX: number,
  posY: number,
  posZ: number,
): void;

declare function SetCamFarClip(cam: number, farClip: number): void;

declare function SetCamFov(cam: number, fieldOfView: number): void;

declare function SetCamMotionBlurStrength(cam: number, strength: number): void;

declare function SetCamNearClip(cam: number, nearClip: number): void;

declare function SetCamParams(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
  p10: number,
  p11: number,
  p12: number,
  p13: number,
): void;

declare function SetCamRot(
  cam: number,
  rotX: number,
  rotY: number,
  rotZ: number,
  rotationOrder: number,
): void;

declare function SetCamSplineDuration(cam: number, timeDuration: number): void;

declare function SetCamSplinePhase(cam: number, p1: number): void;

declare function SetCamSplineSmoothingStyle(
  cam: number,
  smoothingStyle: number,
): void;

declare function SetCanAutoVaultOnEntity(entity: number, toggle: boolean): void;

declare function SetCanClimbOnEntity(entity: number, toggle: boolean): void;

declare function SetCheckpointIconRgba(
  checkpoint: number,
  red: number,
  green: number,
  blue: number,
  alpha: number,
): void;

declare function SetCheckpointRgba(
  checkpoint: number,
  red: number,
  green: number,
  blue: number,
  alpha: number,
): void;

declare function SetCinematicButtonActive(p0: boolean): void;

declare function SetCinematicModeActive(p0: boolean): void;

declare function SetClockDate(day: number, month: number, year: number): void;

declare function SetClockTime(
  hour: number,
  minute: number,
  second: number,
): void;

declare function SetCombatFloat(
  ped: number,
  combatType: number,
  p2: number,
): void;

declare function SetControlGroupColor(
  padIndex: number,
  red: number,
  green: number,
  blue: number,
): void;

declare function SetControlNormal(
  padIndex: number,
  control: string | number,
  amount: number,
): boolean;

declare function SetCreateRandomCops(toggle: boolean): void;

declare function SetCreditsActive(toggle: boolean): void;

declare function SetCurrentPedVehicleWeapon(
  ped: number,
  weaponHash: string | number,
): boolean;

declare function SetCurrentPedWeapon(
  ped: number,
  weaponHash: string | number,
  equipNow: boolean,
  p3: number,
  p4: boolean,
  p5: boolean,
): void;

declare function SetCursorLocation(x: number, y: number): boolean;

declare function SetDamping(
  entity: number,
  vertex: number,
  value: number,
): void;

declare function SetDecisionMaker(ped: number, name: string | number): void;

declare function SetDisableBreaking(object: number, toggle: boolean): void;

declare function SetDisableFragDamage(object: number, toggle: boolean): void;

declare function SetDisableRandomTrainsThisFrame(toggle: boolean): void;

declare function SetDisableVehicleEngineFires(
  vehicle: number,
  p1: boolean,
): void;

declare function SetDisableVehiclePetrolTankDamage(
  vehicle: number,
  toggle: boolean,
): void;

declare function SetDisableVehiclePetrolTankFires(
  vehicle: number,
  toggle: boolean,
): void;

/**
 * This native sets the app id for the discord rich presence implementation.
 * @param appId A valid Discord API App Id, can be generated at https://discordapp.com/developers/applications/
 */
declare function SetDiscordAppId(appId: string): void;

/**
 * This native sets the app id for the discord rich presence implementation.
 */
declare function SetDiscordAppId(appId: string): void;

/**
 * Sets a clickable button to be displayed in a player's Discord rich presence.
 * @param index The button index, either 0 or 1.
 * @param label The text to display on the button.
 * @param url The URL to open when clicking the button. This has to start with `fivem://connect/` or `https://`.
 */
declare function SetDiscordRichPresenceAction(
  index: number,
  label: string,
  url: string,
): void;

/**
 * This native sets the image asset for the discord rich presence implementation.
 * @param assetName The name of a valid asset registered on Discordapp's developer dashboard. note that the asset has to be registered under the same discord API application set using the SET_DISCORD_APP_ID native.
 */
declare function SetDiscordRichPresenceAsset(assetName: string): void;

/**
 * This native sets the image asset for the discord rich presence implementation.
 * @param assetName The name of a valid asset registered on Discordapp's developer dashboard. note that the asset has to be registered under the same discord API application set using the SET_DISCORD_APP_ID native.
 */
declare function SetDiscordRichPresenceAsset(assetName: string): void;

/**
 * This native sets the small image asset for the discord rich presence implementation.
 * @param assetName The name of a valid asset registered on Discordapp's developer dashboard. Note that the asset has to be registered under the same discord API application set using the SET_DISCORD_APP_ID native.
 */
declare function SetDiscordRichPresenceAssetSmall(assetName: string): void;

/**
 * This native sets the small image asset for the discord rich presence implementation.
 * @param assetName The name of a valid asset registered on Discordapp's developer dashboard. Note that the asset has to be registered under the same discord API application set using the SET_DISCORD_APP_ID native.
 */
declare function SetDiscordRichPresenceAssetSmall(assetName: string): void;

/**
 * This native sets the hover text of the small image asset for the discord rich presence implementation.
 * @param text Text to be displayed when hovering over small image asset. Note that you must also set a valid small image asset using the SET_DISCORD_RICH_PRESENCE_ASSET_SMALL native.
 */
declare function SetDiscordRichPresenceAssetSmallText(text: string): void;

/**
 * This native sets the hover text of the small image asset for the discord rich presence implementation.
 * @param text Text to be displayed when hovering over small image asset. Note that you must also set a valid small image asset using the SET_DISCORD_RICH_PRESENCE_ASSET_SMALL native.
 */
declare function SetDiscordRichPresenceAssetSmallText(text: string): void;

/**
 * This native sets the hover text of the image asset for the discord rich presence implementation.
 * @param text Text to be displayed when hovering over image asset. Note that you must also set a valid image asset using the SET_DISCORD_RICH_PRESENCE_ASSET native.
 */
declare function SetDiscordRichPresenceAssetText(text: string): void;

/**
 * This native sets the hover text of the image asset for the discord rich presence implementation.
 * @param text Text to be displayed when hovering over image asset. Note that you must also set a valid image asset using the SET_DISCORD_RICH_PRESENCE_ASSET native.
 */
declare function SetDiscordRichPresenceAssetText(text: string): void;

declare function SetDispatchIdealSpawnDistance(p0: number): void;

declare function SetDriveTaskCruiseSpeed(
  driver: number,
  cruiseSpeed: number,
): void;

declare function SetDriveTaskMaxCruiseSpeed(p0: number, p1: number): void;

declare function SetDrivebyTaskTarget(
  shootingPed: number,
  targetPed: number,
  targetVehicle: number,
  x: number,
  y: number,
  z: number,
): void;

/**
 * Navigates the specified DUI browser to a different URL.
 * @param duiObject The DUI browser handle.
 * @param url The new URL.
 */
declare function SetDuiUrl(duiObject: number, url: string): void;

/**
 * Navigates the specified DUI browser to a different URL.
 * @param duiObject The DUI browser handle.
 * @param url The new URL.
 */
declare function SetDuiUrl(duiObject: number, url: string): void;

declare function SetEnableBoundAnkles(ped: number, toggle: boolean): void;

declare function SetEnableHandcuffs(
  ped: number,
  p1: boolean,
  p2: boolean,
): void;

declare function SetEnableSpeedRestrainForWaypointRecordingLeader(
  p0: number,
  p1: number,
): void;

declare function SetEntityAlpha(
  entity: number,
  alphaLevel: number,
  skin: boolean,
): void;

declare function SetEntityAlwaysPrerender(
  entity: number,
  toggle: boolean,
): void;

declare function SetEntityAsMissionEntity(
  entity: number,
  p1: boolean,
  p2: boolean,
): void;

declare function SetEntityAsNoLongerNeeded(entity: number): void;

declare function SetEntityCanBeDamaged(entity: number, toggle: boolean): void;

declare function SetEntityCanBeDamagedByRelationshipGroup(
  entity: number,
  bCanBeDamaged: boolean,
  relGroup: number,
): void;

declare function SetEntityCanBeTargetedWithoutLos(
  entity: number,
  toggle: boolean,
): void;

declare function SetEntityCollision(
  entity: number,
  toggle: boolean,
  keepPhysics: boolean,
): void;

declare function SetEntityCompletelyDisableCollision(
  entity: number,
  p1: boolean,
  p2: boolean,
): void;

declare function SetEntityCoords(
  entity: number,
  xPos: number,
  yPos: number,
  zPos: number,
  xAxis: boolean,
  yAxis: boolean,
  zAxis: boolean,
  clearArea: boolean,
): void;

declare function SetEntityCoordsNoOffset(
  entity: number,
  xPos: number,
  yPos: number,
  zPos: number,
  xAxis: boolean,
  yAxis: boolean,
  zAxis: boolean,
): void;

declare function SetEntityDynamic(entity: number, toggle: boolean): void;

declare function SetEntityHasGravity(entity: number, toggle: boolean): void;

declare function SetEntityHeading(entity: number, heading: number): void;

/**
 * Sets the entity's health. healthAmount sets the health value to that, and sets the maximum health core value. Setting healthAmount to 0 will kill the entity. Unclear what role p2 serves, but it's either 0 or an entity handle.
 * @param entity :
 * @param healthAmount :
 * @param p2 :
 */
declare function SetEntityHealth(
  entity: number,
  healthAmount: number,
  p2?: number,
): void;

declare function SetEntityInvincible(entity: number, toggle: boolean): void;

declare function SetEntityIsTargetPriority(
  entity: number,
  p1: boolean,
  p2: number,
): void;

declare function SetEntityLoadCollisionFlag(p0: number, p1: number): void;

declare function SetEntityLodDist(entity: number, value: number): void;

declare function SetEntityMaxHealth(entity: number, value: number): void;

declare function SetEntityMotionBlur(entity: number, toggle: boolean): void;

declare function SetEntityNoCollisionEntity(
  entity1: number,
  entity2: number,
  thisFrameOnly: boolean,
): void;

declare function SetEntityOnlyDamagedByPlayer(
  entity: number,
  toggle: boolean,
): void;

declare function SetEntityOnlyDamagedByRelationshipGroup(
  entity: number,
  p1: boolean,
  p2: number,
): void;

declare function SetEntityProofs(
  entity: number,
  proofsBitset: number,
  p2: boolean,
): void;

declare function SetEntityQuaternion(
  entity: number,
  x: number,
  y: number,
  z: number,
  w: number,
): void;

declare function SetEntityRenderScorched(entity: number, toggle: boolean): void;

declare function SetEntityRotation(
  entity: number,
  pitch: number,
  roll: number,
  yaw: number,
  rotationOrder: number,
  p5: boolean,
): void;

declare function SetEntitySomething(entity: number, toggle: boolean): void;

declare function SetEntityVelocity(
  entity: number,
  x: number,
  y: number,
  z: number,
): void;

declare function SetEntityVisible(entity: number, toggle: boolean): void;

declare function SetEntityVisibleInCutscene(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function SetEventFlagForDeletion(
  p0: number,
  p1: number,
  p2: number,
): void;

declare function SetEveryoneIgnorePlayer(player: number, toggle: boolean): void;

declare function SetExtraTimecycleModifierStrength(strength: number): void;

declare function SetFacialIdleAnimOverride(
  ped: number,
  animName: string,
  animDict: string,
): void;

declare function SetFadeInAfterDeathArrest(toggle: boolean): void;

declare function SetFadeInAfterLoad(toggle: boolean): void;

declare function SetFarShadowsSuppressed(toggle: boolean): void;

declare function SetFirstPersonCamPitchRange(p0: number, p1: number): void;

/**
 * Allows Weapon-Flashlight beams to stay visible while moving. Normally it only stays on while aiming.
 * @param state On/Off
 */
declare function SetFlashLightKeepOnWhileMoving(state: boolean): void;

/**
 * Sets some in-game parameters which is used for checks is ped needs to fly through windscreen after a crash.
 * @param vehMinSpeed Vehicle minimum speed (default 35.0).
 * @param unkMinSpeed Unknown minimum speed (default 40.0).
 * @param unkModifier Unknown modifier (default 17.0).
 * @param minDamage Minimum damage (default 2000.0).
 * @return A bool indicating if parameters was set successfully.
 */
declare function SetFlyThroughWindscreenParams(
  vehMinSpeed: number,
  unkMinSpeed: number,
  unkModifier: number,
  minDamage: number,
): boolean;

declare function SetFocusEntity(entity: number): void;

declare function SetFocusPosAndVel(
  x: number,
  y: number,
  z: number,
  offsetX: number,
  offsetY: number,
  offsetZ: number,
): void;

declare function SetForceHdVehicle(vehicle: number, toggle: boolean): void;

declare function SetForceObjectThisFrame(
  x: number,
  y: number,
  z: number,
  p3: number,
): void;

declare function SetFormationPositionsTargetRadius(
  p0: number,
  p1: number,
): number;

declare function SetFrontendActive(active: boolean): void;

declare function SetGamePaused(toggle: boolean): void;

declare function SetGamePausesForStreaming(toggle: boolean): void;

declare function SetGameplayCamRelativeHeading(p0: number, p1: number): void;

declare function SetGameplayCamRelativePitch(x: number, Value2: number): void;

declare function SetGameplayCamShakeAmplitude(amplitude: number): void;

declare function SetGameplayCoordHint(
  x: number,
  y: number,
  z: number,
  duration: number,
  blendOutDuration: number,
  blendInDuration: number,
  unk: number,
): void;

declare function SetGameplayEntityHint(
  entity: number,
  xOffset: number,
  yOffset: number,
  zOffset: number,
  p4: boolean,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
): void;

declare function SetGameplayHintAngle(p0: number): void;

declare function SetGameplayHintAnimOffsetx(p0: number): void;

declare function SetGameplayHintAnimOffsety(p0: number): void;

declare function SetGameplayHintAnimOffsetz(p0: number): void;

declare function SetGameplayHintFov(FOV: number): void;

declare function SetGameplayObjectHint(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: boolean,
  p5: number,
  p6: number,
  p7: number,
): void;

declare function SetGameplayPedHint(
  p0: number,
  x1: number,
  y1: number,
  z1: number,
  p4: boolean,
  p5: number,
  p6: number,
  p7: number,
): void;

declare function SetGameplayVehicleHint(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: boolean,
  p5: number,
  p6: number,
  p7: number,
): void;

declare function SetGlobalBlockCanBeAccessed(
  index: number,
  toggle: boolean,
): void;

declare function SetGpsActive(active: boolean): void;

declare function SetGpsCustomRouteRender(
  p0: boolean,
  p1: number,
  p2: number,
): void;

declare function SetGpsFlags(p0: number, p1: number): void;

declare function SetGpsMultiRouteRender(toggle: boolean): void;

declare function SetGroupFormation(
  groupId: number,
  formationType: number,
): void;

declare function SetGroupFormationSpacing(
  groupId: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function SetGroupSeparationRange(
  groupHandle: number,
  separationRange: number,
): void;

declare function SetGuardZonePosition(
  name: string,
  x: number,
  y: number,
  z: number,
): void;

declare function SetGuardZonePosition_2(
  name: string,
  x: number,
  y: number,
  z: number,
): void;

/**
 * Sets a global handling override for a specific vehicle class. The name is supposed to match the `handlingName` field from handling.meta.
 * Example: `SetHandlingField('AIRTUG', 'CHandlingData', 'fSteeringLock', 360.0)`
 * @param vehicle The vehicle class to set data for.
 * @param class_ The handling class to set. Only "CHandlingData" is supported at this time.
 * @param fieldName The field name to set. These match the keys in `handling.meta`.
 * @param value The value to set.
 */
declare function SetHandlingField(
  vehicle: string,
  class_: string,
  fieldName: string,
  value: number,
): void;

/**
 * Sets a global handling override for a specific vehicle class. The name is supposed to match the `handlingName` field from handling.meta.
 * Example: `SetHandlingField('AIRTUG', 'CHandlingData', 'fSteeringLock', 360.0)`
 * @param vehicle The vehicle class to set data for.
 * @param class_ The handling class to set. Only "CHandlingData" is supported at this time.
 * @param fieldName The field name to set. These match the keys in `handling.meta`.
 * @param value The value to set.
 */
declare function SetHandlingField(
  vehicle: string,
  class_: string,
  fieldName: string,
  value: number,
): void;

/**
 * Sets a global handling override for a specific vehicle class. The name is supposed to match the `handlingName` field from handling.meta.
 * Example: `SetHandlingFloat('AIRTUG', 'CHandlingData', 'fSteeringLock', 360.0)`
 * @param vehicle The vehicle class to set data for.
 * @param class_ The handling class to set. Only "CHandlingData" is supported at this time.
 * @param fieldName The field name to set. These match the keys in `handling.meta`.
 * @param value The floating-point value to set.
 */
declare function SetHandlingFloat(
  vehicle: string,
  class_: string,
  fieldName: string,
  value: number,
): void;

/**
 * Sets a global handling override for a specific vehicle class. The name is supposed to match the `handlingName` field from handling.meta.
 * Example: `SetHandlingFloat('AIRTUG', 'CHandlingData', 'fSteeringLock', 360.0)`
 * @param vehicle The vehicle class to set data for.
 * @param class_ The handling class to set. Only "CHandlingData" is supported at this time.
 * @param fieldName The field name to set. These match the keys in `handling.meta`.
 * @param value The floating-point value to set.
 */
declare function SetHandlingFloat(
  vehicle: string,
  class_: string,
  fieldName: string,
  value: number,
): void;

/**
 * Sets a global handling override for a specific vehicle class. The name is supposed to match the `handlingName` field from handling.meta.
 * @param vehicle The vehicle class to set data for.
 * @param class_ The handling class to set. Only "CHandlingData" is supported at this time.
 * @param fieldName The field name to set. These match the keys in `handling.meta`.
 * @param value The integer value to set.
 */
declare function SetHandlingInt(
  vehicle: string,
  class_: string,
  fieldName: string,
  value: number,
): void;

/**
 * Sets a global handling override for a specific vehicle class. The name is supposed to match the `handlingName` field from handling.meta.
 * @param vehicle The vehicle class to set data for.
 * @param class_ The handling class to set. Only "CHandlingData" is supported at this time.
 * @param fieldName The field name to set. These match the keys in `handling.meta`.
 * @param value The integer value to set.
 */
declare function SetHandlingInt(
  vehicle: string,
  class_: string,
  fieldName: string,
  value: number,
): void;

/**
 * Sets a global handling override for a specific vehicle class. The name is supposed to match the `handlingName` field from handling.meta.
 * Example: `SetHandlingVector('AIRTUG', 'CHandlingData', 'vecCentreOfMassOffset', vector3(0.0, 0.0, -5.0))`
 * @param vehicle The vehicle class to set data for.
 * @param class_ The handling class to set. Only "CHandlingData" is supported at this time.
 * @param fieldName The field name to set. These match the keys in `handling.meta`.
 * @param value The Vector3 value to set.
 */
declare function SetHandlingVector(
  vehicle: string,
  class_: string,
  fieldName: string,
): void;

/**
 * Sets a global handling override for a specific vehicle class. The name is supposed to match the `handlingName` field from handling.meta.
 * Example: `SetHandlingVector('AIRTUG', 'CHandlingData', 'vecCentreOfMassOffset', vector3(0.0, 0.0, -5.0))`
 * @param vehicle The vehicle class to set data for.
 * @param class_ The handling class to set. Only "CHandlingData" is supported at this time.
 * @param fieldName The field name to set. These match the keys in `handling.meta`.
 * @param value The Vector3 value to set.
 */
declare function SetHandlingVector(
  vehicle: string,
  class_: string,
  fieldName: string,
): void;

declare function SetHdArea(
  x: number,
  y: number,
  z: number,
  radius: number,
): void;

declare function SetHidofEnvBlurParams(
  p0: boolean,
  p1: boolean,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
): void;

declare function SetHighFallTask(
  ped: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function SetHornEnabled(vehicle: number, toggle: boolean): void;

declare function SetIgnoreNoGpsFlag(toggle: boolean): void;

declare function SetIkTarget(
  ped: number,
  ikIndex: number,
  entityLookAt: number,
  boneLookAt: number,
  offsetX: number,
  offsetY: number,
  offsetZ: number,
  p7: number,
  blendInDuration: number,
  blendOutDuration: number,
): void;

declare function SetInputExclusive(
  padIndex: number,
  control: string | number,
): void;

declare function SetInteriorPortalCornerPosition(
  interiorId: number,
  portalIndex: number,
  cornerIndex: number,
  posX: number,
  posY: number,
  posZ: number,
): void;

declare function SetInteriorPortalCornerPosition(
  interiorId: number,
  portalIndex: number,
  cornerIndex: number,
  posX: number,
  posY: number,
  posZ: number,
): void;

declare function SetInteriorPortalEntityFlag(
  interiorId: number,
  portalIndex: number,
  entityIndex: number,
  flag: number,
): void;

declare function SetInteriorPortalFlag(
  interiorId: number,
  portalIndex: number,
  flag: number,
): void;

declare function SetInteriorPortalFlag(
  interiorId: number,
  portalIndex: number,
  flag: number,
): void;

declare function SetInteriorPortalRoomFrom(
  interiorId: number,
  portalIndex: number,
  roomFrom: number,
): void;

declare function SetInteriorPortalRoomFrom(
  interiorId: number,
  portalIndex: number,
  roomFrom: number,
): void;

declare function SetInteriorPortalRoomTo(
  interiorId: number,
  portalIndex: number,
  roomTo: number,
): void;

declare function SetInteriorPortalRoomTo(
  interiorId: number,
  portalIndex: number,
  roomTo: number,
): void;

declare function SetInteriorRoomExtents(
  interiorId: number,
  roomIndex: number,
  bbMinX: number,
  bbMinY: number,
  bbMinZ: number,
  bbMaxX: number,
  bbMaxY: number,
  bbMaxZ: number,
): void;

declare function SetInteriorRoomExtents(
  interiorId: number,
  roomIndex: number,
  bbMinX: number,
  bbMinY: number,
  bbMinZ: number,
  bbMaxX: number,
  bbMaxY: number,
  bbMaxZ: number,
): void;

declare function SetInteriorRoomFlag(
  interiorId: number,
  roomIndex: number,
  flag: number,
): void;

declare function SetInteriorRoomFlag(
  interiorId: number,
  roomIndex: number,
  flag: number,
): void;

declare function SetInteriorRoomTimecycle(
  interiorId: number,
  roomIndex: number,
  timecycleHash: number,
): void;

declare function SetInteriorRoomTimecycle(
  interiorId: number,
  roomIndex: number,
  timecycleHash: number,
): void;

declare function SetLocalPlayerCanUsePickupsWithThisModel(
  modelHash: string | number,
  toggle: boolean,
): void;

declare function SetLocalPlayerInvisibleLocally(p0: boolean): void;

declare function SetLocalPlayerVisibleInCutscene(
  p0: number,
  p1: number,
  p2: number,
): void;

/**
 * Sets whether or not `SHUTDOWN_LOADING_SCREEN` automatically shuts down the NUI frame for the loading screen. If this is enabled,
 * you will have to manually invoke `SHUTDOWN_LOADING_SCREEN_NUI` whenever you want to hide the NUI loading screen.
 * @param manualShutdown TRUE to manually shut down the loading screen NUI.
 */
declare function SetManualShutdownLoadingScreenNui(
  manualShutdown: boolean,
): void;

/**
 * Sets whether or not `SHUTDOWN_LOADING_SCREEN` automatically shuts down the NUI frame for the loading screen. If this is enabled,
 * you will have to manually invoke `SHUTDOWN_LOADING_SCREEN_NUI` whenever you want to hide the NUI loading screen.
 * @param manualShutdown TRUE to manually shut down the loading screen NUI.
 */
declare function SetManualShutdownLoadingScreenNui(
  manualShutdown: boolean,
): void;

/**
 * Sets values to the zoom level data by index.
 * @param index Zoom level index.
 * @param zoomScale fZoomScale value.
 * @param zoomSpeed fZoomSpeed value.
 * @param scrollSpeed fScrollSpeed value.
 * @param tilesX vTiles X.
 * @param tilesY vTiles Y.
 */
declare function SetMapZoomDataLevel(
  index: number,
  zoomScale: number,
  zoomSpeed: number,
  scrollSpeed: number,
  tilesX: number,
  tilesY: number,
): void;

/**
 * Sets values to the zoom level data by index.
 * @param index Zoom level index.
 * @param zoomScale fZoomScale value.
 * @param zoomSpeed fZoomSpeed value.
 * @param scrollSpeed fScrollSpeed value.
 * @param tilesX vTiles X.
 * @param tilesY vTiles Y.
 */
declare function SetMapZoomDataLevel(
  index: number,
  zoomScale: number,
  zoomSpeed: number,
  scrollSpeed: number,
  tilesX: number,
  tilesY: number,
): void;

declare function SetMapdatacullboxEnabled(name: string, toggle: boolean): void;

declare function SetMaxWantedLevel(maxWantedLevel: number): void;

declare function SetMillisecondsPerGameMinute(ms: number): void;

/**
 * Overrides how many real ms are equal to one game minute.
 * A setter for [`GetMillisecondsPerGameMinute`](#\_0x2F8B4D1C595B11DB).
 * @param value Milliseconds.
 */
declare function SetMillisecondsPerGameMinute(value: number): void;

/**
 * Overrides how many real ms are equal to one game minute.
 * A setter for [`GetMillisecondsPerGameMinute`](#_0x2F8B4D1C595B11DB).
 * @param value Milliseconds.
 */
declare function SetMillisecondsPerGameMinute(value: number): void;

/**
 * Reveals the entire minimap (FOW = Fog of War)
 * @param toggle :
 */
declare function SetMinimapHideFow(toggle: boolean): void;

/**
 * Sets the display info for a minimap overlay.
 * @param miniMap The minimap overlay ID.
 * @param x The X position for the overlay. This is equivalent to a game coordinate X.
 * @param y The Y position for the overlay. This is equivalent to a game coordinate Y, except that it's inverted (gfxY = -gameY).
 * @param xScale The X scale for the overlay. This is equivalent to the Flash \_xscale property, therefore 100 = 100%.
 * @param yScale The Y scale for the overlay. This is equivalent to the Flash \_yscale property.
 * @param alpha The alpha value for the overlay. This is equivalent to the Flash \_alpha property, therefore 100 = 100%.
 */
declare function SetMinimapOverlayDisplay(
  miniMap: number,
  x: number,
  y: number,
  xScale: number,
  yScale: number,
  alpha: number,
): void;

/**
 * Sets the display info for a minimap overlay.
 * @param miniMap The minimap overlay ID.
 * @param x The X position for the overlay. This is equivalent to a game coordinate X.
 * @param y The Y position for the overlay. This is equivalent to a game coordinate Y, except that it's inverted (gfxY = -gameY).
 * @param xScale The X scale for the overlay. This is equivalent to the Flash \_xscale property, therefore 100 = 100%.
 * @param yScale The Y scale for the overlay. This is equivalent to the Flash \_yscale property.
 * @param alpha The alpha value for the overlay. This is equivalent to the Flash \_alpha property, therefore 100 = 100%.
 */
declare function SetMinimapOverlayDisplay(
  miniMap: number,
  x: number,
  y: number,
  xScale: number,
  yScale: number,
  alpha: number,
): void;

/**
 * Possible Types:
 * ```
 * 0 = Off,
 * 1 = Regular,
 * 2 = Expanded,
 * 3 = Simple,
 * ```
 * @param type Type to set the minimap to.
 */
declare function SetMinimapType(_type: number): void;

declare function SetMissionFlag(toggle: boolean): void;

declare function SetMissionName(p0: boolean, name: string): void;

declare function SetMissionName_2(p0: boolean, name: string): void;

declare function SetMissionTrainAsNoLongerNeeded(p1: boolean): number;

declare function SetMissionTrainCoords(
  train: number,
  x: number,
  y: number,
  z: number,
): void;

declare function SetModelAsNoLongerNeeded(model: string | number): void;

declare function SetModelHeadlightConfiguration(
  modelHash: string | number,
  ratePerSecond: number,
  headlightRotation: number,
  invertRotation: boolean,
): void;

declare function SetModelHeadlightConfiguration(
  modelHash: string | number,
  ratePerSecond: number,
  headlightRotation: number,
  invertRotation: boolean,
): void;

declare function SetMouseCursorActiveThisFrame(): void;

declare function SetMouseCursorSprite(spriteId: number): void;

declare function SetMpGamerTagBigText(
  gamerTagId: number,
  _string: string,
): void;

declare function SetMpGamerTagName(gamerTagId: number, _string: string): void;

/**
 * Sets whether all tags should group (normal game behavior) or should remain independent and above each ped's respective head when in a vehicle.
 * @param enabled Whether tags should use normal game behavior. Default is true.
 */
declare function SetMpGamerTagsUseVehicleBehavior(enabled: boolean): void;

/**
 * Sets the maximum distance at which all tags will be visible and which beyond will not be displayed. Distance is measured from the camera position.
 * @param distance The visible distance. Default is 100.0f.
 */
declare function SetMpGamerTagsVisibleDistance(distance: number): void;

declare function SetNetworkIdExistsOnAllMachines(
  netId: number,
  toggle: boolean,
): void;

declare function SetNetworkIdSyncToPlayer(
  netId: number,
  player: number,
  toggle: boolean,
): void;

declare function SetNetworkIdVisibleInCutscene(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function SetNoLoadingScreen(toggle: boolean): void;

declare function SetNuiFocus(hasFocus: boolean, hasCursor: boolean): void;

declare function SetNuiFocus(hasFocus: boolean, hasCursor: boolean): void;

declare function SetNuiFocusKeepInput(keepInput: boolean): void;

declare function SetObjectAsNoLongerNeeded(object: number): void;

declare function SetObjectCanClimbOn(object: number, toggle: boolean): void;

declare function SetObjectPhysicsParams(
  object: number,
  weight: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  gravity: number,
  p7: number,
  p8: number,
  p9: number,
  p10: number,
  buoyancy: number,
): void;

declare function SetObjectTargettable(
  object: number,
  targettable: boolean,
): void;

declare function SetObjectTextureVariation(
  object: number,
  textureVariation: number,
): void;

declare function SetPadShake(
  padIndex: number,
  duration: number,
  frequency: number,
): void;

declare function SetParkedVehicleDensityMultiplierThisFrame(
  multiplier: number,
): void;

declare function SetParticleFxLoopedAlpha(
  ptfxHandle: number,
  alpha: number,
): void;

declare function SetParticleFxLoopedColour(
  ptfxHandle: number,
  r: number,
  g: number,
  b: number,
  p4: boolean,
): void;

declare function SetParticleFxLoopedEvolution(
  ptfxHandle: number,
  propertyName: string,
  amount: number,
  noNetwork: boolean,
): void;

declare function SetParticleFxLoopedFarClipDist(
  ptfxHandle: number,
  range: number,
): void;

declare function SetParticleFxLoopedOffsets(
  ptfxHandle: number,
  x: number,
  y: number,
  z: number,
  rotX: number,
  rotY: number,
  rotZ: number,
): void;

declare function SetParticleFxLoopedScale(
  ptfxHandle: number,
  scale: number,
): void;

declare function SetParticleFxNonLoopedColour(
  r: number,
  g: number,
  b: number,
): void;

declare function SetParticleFxOverride(
  oldAsset: string,
  newAsset: string,
): void;

declare function SetPedAccuracy(ped: number, accuracy: number): void;

declare function SetPedAmmo(
  ped: number,
  weaponHash: string | number,
  ammo: number,
): void;

declare function SetPedAmmoByType(
  ped: number,
  ammoType: number,
  ammo: number,
): void;

declare function SetPedAmmoToDrop(p0: number, p1: number, p2: number): void;

declare function SetPedAsCop(ped: number, toggle: boolean): void;

declare function SetPedAsGroupLeader(p0: number, p1: number, p2: number): void;

declare function SetPedAsGroupMember(ped: number, groupId: number): void;

declare function SetPedAsNoLongerNeeded(ped: number): void;

declare function SetPedCanArmIk(ped: number, toggle: boolean): void;

declare function SetPedCanBeKnockedOffVehicle(ped: number, state: number): void;

declare function SetPedCanBeTargetted(ped: number, toggle: boolean): void;

declare function SetPedCanBeTargettedByPlayer(
  ped: number,
  player: number,
  toggle: boolean,
): void;

declare function SetPedCanBeTargettedByTeam(
  ped: number,
  team: number,
  toggle: boolean,
): void;

declare function SetPedCanHeadIk(ped: number, toggle: boolean): void;

declare function SetPedCanLegIk(ped: number, toggle: boolean): void;

declare function SetPedCanPlayAmbientAnims(ped: number, toggle: boolean): void;

declare function SetPedCanPlayAmbientBaseAnims(
  ped: number,
  toggle: boolean,
): void;

declare function SetPedCanPlayGestureAnims(
  p0: number,
  p1: number,
  p2: number,
): void;

declare function SetPedCanRagdoll(ped: number, toggle: boolean): void;

declare function SetPedCanRagdollFromPlayerImpact(
  ped: number,
  toggle: boolean,
): void;

declare function SetPedCanTeleportToGroupLeader(
  pedHandle: number,
  groupHandle: number,
  toggle: boolean,
): void;

declare function SetPedCanTorsoIk(ped: number, toggle: boolean): void;

declare function SetPedCanTorsoReactIk(ped: number, p1: boolean): void;

declare function SetPedCanUseAutoConversationLookat(
  ped: number,
  toggle: boolean,
): void;

declare function SetPedCapsule(ped: number, value: number): void;

declare function SetPedClothPackageIndex(p0: number, p1: number): void;

declare function SetPedCombatAbility(ped: number, p1: number): void;

declare function SetPedCombatAttributes(
  ped: number,
  attributeIndex: number,
  enabled: boolean,
): void;

declare function SetPedCombatMovement(
  ped: number,
  combatMovement: number,
): void;

declare function SetPedCombatRange(ped: number, p1: number): void;

declare function SetPedConfigFlag(
  ped: number,
  flagId: number,
  value: boolean,
): void;

declare function SetPedCurrentWeaponVisible(
  ped: number,
  visible: boolean,
  deselectWeapon: boolean,
  p3: boolean,
  p4: boolean,
): void;

declare function SetPedDefensiveAreaDirection(
  ped: number,
  p1: number,
  p2: number,
  p3: number,
  p4: boolean,
): void;

declare function SetPedDesiredHeading(ped: number, heading: number): void;

declare function SetPedDesiredMoveBlendRatio(ped: number, p1: number): void;

declare function SetPedDropsInventoryWeapon(
  ped: number,
  weaponHash: string | number,
  xOffset: number,
  yOffset: number,
  zOffset: number,
  ammoCount: number,
): void;

declare function SetPedDropsWeaponsWhenDead(ped: number, toggle: boolean): void;

declare function SetPedFiringPattern(
  ped: number,
  patternHash: string | number,
): void;

declare function SetPedFleeAttributes(
  ped: number,
  attributeFlags: number,
  enable: boolean,
): void;

declare function SetPedGestureGroup(p0: number, p1: number, p2: number): void;

declare function SetPedGravity(ped: number, toggle: boolean): void;

declare function SetPedGroupMemberPassengerIndex(
  ped: number,
  index: number,
): void;

declare function SetPedHearingRange(ped: number, value: number): void;

declare function SetPedHighlyPerceptive(ped: number, toggle: boolean): void;

declare function SetPedIdRange(ped: number, value: number): void;

declare function SetPedInfiniteAmmo(
  ped: number,
  toggle: boolean,
  weaponHash: string | number,
): void;

declare function SetPedInfiniteAmmoClip(ped: number, toggle: boolean): void;

declare function SetPedIntoVehicle(
  ped: number,
  vehicle: number,
  seatIndex: number,
): void;

declare function SetPedIsDrunk(ped: number, toggle: boolean): void;

declare function SetPedKeepTask(ped: number, toggle: boolean): void;

declare function SetPedLegIkMode(ped: number, mode: number): void;

declare function SetPedLodMultiplier(ped: number, multiplier: number): void;

declare function SetPedMaxHealth(ped: number, value: number): void;

declare function SetPedMaxMoveBlendRatio(ped: number, value: number): void;

declare function SetPedMaxTimeInWater(ped: number, value: number): void;

declare function SetPedMaxTimeUnderwater(ped: number, value: number): void;

declare function SetPedMinMoveBlendRatio(ped: number, value: number): void;

declare function SetPedModelIsSuppressed(ped: number, toggle: boolean): void;

declare function SetPedMoney(ped: number, amount: number): void;

declare function SetPedMoveAnimsBlendOut(ped: number): void;

declare function SetPedMoveRateOverride(ped: number, value: number): void;

declare function SetPedNameDebug(ped: number, name: string): void;

declare function SetPedNonCreationArea(
  x1: number,
  y1: number,
  z1: number,
  x2: number,
  y2: number,
  z2: number,
): void;

/**
 * Sets the outfit preset for the ped. The presetId is an index which determines it's preset outfit. p2 is always 0.
 * @param ped :
 * @param presetId :
 * @param p2 :
 */
declare function SetPedOutfitPreset(
  ped: number,
  presetId: number,
  p2: number,
): void;

declare function SetPedPanicExitScenario(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): number;

declare function SetPedPathAvoidFire(ped: number, avoidFire: boolean): void;

declare function SetPedPathCanDropFromHeight(
  ped: number,
  Toggle: boolean,
): void;

declare function SetPedPathCanUseClimbovers(ped: number, Toggle: boolean): void;

declare function SetPedPathCanUseLadders(ped: number, Toggle: boolean): void;

declare function SetPedPathMayEnterWater(
  ped: number,
  mayEnterWater: boolean,
): void;

declare function SetPedPathPreferToAvoidWater(
  p0: number,
  p1: number,
  p2: number,
): void;

declare function SetPedPathsBackToOriginal(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
): void;

declare function SetPedPathsInArea(
  x1: number,
  y1: number,
  z1: number,
  x2: number,
  y2: number,
  z2: number,
  unknown: boolean,
  p7: number,
): void;

declare function SetPedPromptName(ped: number, name: string): void;

declare function SetPedRagdollForceFall(ped: number): void;

declare function SetPedRagdollOnCollision(
  p0: number,
  p1: number,
  p2: number,
): void;

declare function SetPedRandomComponentVariation(ped: number, p1: number): void;

declare function SetPedRelationshipGroupDefaultHash(
  ped: number,
  hash: string | number,
): void;

declare function SetPedRelationshipGroupHash(
  ped: number,
  hash: string | number,
): void;

declare function SetPedResetFlag(
  ped: number,
  flagId: number,
  doReset: boolean,
): void;

declare function SetPedScale(ped: number, scale: number): void;

declare function SetPedSeeingRange(ped: number, value: number): void;

declare function SetPedShootRate(ped: number, shootRate: number): void;

declare function SetPedSphereDefensiveArea(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
): void;

declare function SetPedStealthMovement(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function SetPedSweat(ped: number, sweat: number): void;

declare function SetPedTargetLossResponse(
  ped: number,
  responseType: number,
): void;

declare function SetPedToInformRespectedFriends(
  ped: number,
  radius: number,
  maxFriends: number,
): void;

declare function SetPedToRagdoll(
  ped: number,
  time1: number,
  time2: number,
  ragdollType: number,
  p4: boolean,
  p5: boolean,
  p6: boolean,
): boolean;

declare function SetPedToRagdollWithFall(
  ped: number,
  time: number,
  p2: number,
  ragdollType: number,
  x: number,
  y: number,
  z: number,
  p7: number,
  p8: number,
  p9: number,
  p10: number,
  p11: number,
  p12: number,
  p13: number,
): boolean;

declare function SetPedUsingActionMode(
  ped: number,
  p1: boolean,
  p2: number,
  action: string,
): void;

declare function SetPedVisualFieldCenterAngle(ped: number, angle: number): void;

declare function SetPedVisualFieldMaxAngle(ped: number, value: number): void;

declare function SetPedVisualFieldMinAngle(ped: number, value: number): void;

declare function SetPedVisualFieldPeripheralRange(
  ped: number,
  range: number,
): void;

declare function SetPedWaypointRouteOffset(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): number;

declare function SetPedWetnessEnabledThisFrame(ped: number): void;

declare function SetPedWetnessHeight(ped: number, height: number): void;

declare function SetPickupGenerationRangeMultiplier(multiplier: number): void;

declare function SetPickupHiddenWhenUncollectable(p0: number, p1: number): void;

declare function SetPickupNotLootable(p0: number, p1: number): void;

declare function SetPickupParticleFxHighlight(p0: number, p1: number): void;

declare function SetPickupParticleFxSpawn(p0: number, p1: number): void;

declare function SetPickupRegenerationTime(
  pickup: number,
  duration: number,
): void;

declare function SetPickupUncollectable(p0: number, p1: number): void;

declare function SetPlaybackSpeed(vehicle: number, speed: number): void;

declare function SetPlayerCanBeHassledByGangs(
  player: number,
  toggle: boolean,
): void;

declare function SetPlayerCanUseCover(player: number, toggle: boolean): void;

declare function SetPlayerClothPinFrames(player: number, toggle: boolean): void;

declare function SetPlayerControl(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function SetPlayerForcedAim(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): void;

declare function SetPlayerHealthRechargeMultiplier(
  player: number,
  regenRate: number,
): void;

declare function SetPlayerInvincible(player: number, toggle: boolean): void;

declare function SetPlayerInvisibleLocally(
  player: number,
  toggle: boolean,
): void;

declare function SetPlayerLockon(player: number, toggle: boolean): void;

declare function SetPlayerLockonRangeOverride(
  player: number,
  range: number,
): void;

declare function SetPlayerMayNotEnterAnyVehicle(player: number): void;

declare function SetPlayerMayOnlyEnterThisVehicle(
  player: number,
  vehicle: number,
): void;

declare function SetPlayerMeleeWeaponDamageModifier(
  p0: number,
  p1: number,
): void;

declare function SetPlayerModel(p0: number, p1: number, p2: number): void;

declare function SetPlayerNoiseMultiplier(
  player: number,
  multiplier: number,
): void;

declare function SetPlayerSimulateAiming(player: number, toggle: boolean): void;

declare function SetPlayerSneakingNoiseMultiplier(
  player: number,
  multiplier: number,
): void;

/**
 * the status of default voip system. It affects on `NETWORK_IS_PLAYER_TALKING` and `mp_facial` animation.
 * This function doesn't need to be called every frame, it works like a switcher.
 * @param player The target player.
 * @param state Overriding state.
 */
declare function SetPlayerTalkingOverride(player: number, state: boolean): void;

/**
 * the status of default voip system. It affects on `NETWORK_IS_PLAYER_TALKING` and `mp_facial` animation.
 * This function doesn't need to be called every frame, it works like a switcher.
 * @param player The target player.
 * @param state Overriding state.
 */
declare function SetPlayerTalkingOverride(player: number, state: boolean): void;

declare function SetPlayerTargetingMode(targetMode: number): void;

declare function SetPlayerTeam(p0: number, p1: number, p2: number): void;

declare function SetPlayerVisibleLocally(player: number, toggle: boolean): void;

declare function SetPlayerWantedLevel(
  player: number,
  wantedLevel: number,
  disableNoMission: boolean,
): void;

declare function SetPlayerWeaponDamageModifier(
  player: number,
  modifier: number,
): void;

declare function SetPlayerWeaponDefenseModifier(
  player: number,
  modifier: number,
): void;

declare function SetPoliceRadarBlips(toggle: boolean): void;

declare function SetPopControlSphereThisFrame(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): void;

declare function SetPopzonePopulationSet(
  popZone: number,
  populationSetHash: string | number,
): void;

declare function SetPortalSettingsOverride(p0: string, p1: string): void;

declare function SetRadarAsExteriorThisFrame(): void;

declare function SetRadarZoom(zoomLevel: number): void;

declare function SetRagdollBlockingFlags(ped: number, flags: number): void;

declare function SetRainFxIntensity(intensity: number): void;

declare function SetRandomBoats(toggle: boolean): void;

declare function SetRandomEventFlag(toggle: boolean): void;

declare function SetRandomSeed(seed: number): void;

declare function SetRandomTrains(toggle: boolean): void;

declare function SetRandomVehicleDensityMultiplierThisFrame(
  multiplier: number,
): void;

declare function SetRandomWeatherType(p0: boolean, p1: boolean): void;

declare function SetRelationshipBetweenGroups(
  relationship: number,
  group1: string | number,
  group2: string | number,
): void;

declare function SetResourceKvp(key: string, value: string): void;

/**
 * A setter for [GET_RESOURCE_KVP_STRING](#\_0x5240DA5A).
 * @param key The key to set
 * @param value The value to write
 */
declare function SetResourceKvp(key: string, value: string): void;

/**
 * A setter for [GET_RESOURCE_KVP_FLOAT](#\_0x35BDCEEA).
 * @param key The key to set
 * @param value The value to write
 */
declare function SetResourceKvpFloat(key: string, value: number): void;

declare function SetResourceKvpFloat(key: string, value: number): void;

declare function SetResourceKvpInt(key: string, value: number): void;

/**
 * A setter for [GET_RESOURCE_KVP_INT](#\_0x557B586A).
 * @param key The key to set
 * @param value The value to write
 */
declare function SetResourceKvpInt(key: string, value: number): void;

/**
 * Sets the player's rich presence detail state for social platform providers to a specified string.
 * @param presenceState The rich presence string to set.
 */
declare function SetRichPresence(presenceState: string): void;

/**
 * Sets the player's rich presence detail state for social platform providers to a specified string.
 * @param presenceState The rich presence string to set.
 */
declare function SetRichPresence(presenceState: string): void;

declare function SetRoadsBackToOriginal(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
): void;

declare function SetRoadsBackToOriginalInAngledArea(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
): void;

declare function SetRoadsInAngledArea(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
  p10: number,
): void;

declare function SetRoadsInArea(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
): void;

/**
 * Set's the ropes length change rate, which is the speed that rope should wind if started.
 * @param rope The rope to set the length change rate for.
 * @param lengthChangeRate The rope's new length change rate.
 */
declare function SetRopeLengthChangeRate(
  rope: number,
  lengthChangeRate: number,
): void;

/**
 * Toggles whether the usage of [ADD_ROPE](#\_0xE832D760399EB220) should create an underlying CNetworkRopeWorldStateData. By default this is set to false.
 * @param shouldCreate Whether to create an underlying network world state
 */
declare function SetRopesCreateNetworkWorldState(shouldCreate: boolean): void;

declare function SetRpgIconVisibility(p0: number, p1: number): void;

declare function SetRuntimeTextureArgbData(
  tex: number,
  buffer: string,
  length: number,
): boolean;

declare function SetRuntimeTextureArgbData(
  tex: number,
  buffer: string,
  length: number,
): boolean;

/**
 * Sets a pixel in the specified runtime texture. This will have to be committed using `COMMIT_RUNTIME_TEXTURE` to have any effect.
 * @param tex A handle to the runtime texture.
 * @param x The X position of the pixel to change.
 * @param y The Y position of the pixel to change.
 * @param r The new R value (0-255).
 * @param g The new G value (0-255).
 * @param b The new B value (0-255).
 * @param a The new A value (0-255).
 */
declare function SetRuntimeTexturePixel(
  tex: number,
  x: number,
  y: number,
  r: number,
  g: number,
  b: number,
  a: number,
): void;

/**
 * Sets a pixel in the specified runtime texture. This will have to be committed using `COMMIT_RUNTIME_TEXTURE` to have any effect.
 * @param tex A handle to the runtime texture.
 * @param x The X position of the pixel to change.
 * @param y The Y position of the pixel to change.
 * @param r The new R value (0-255).
 * @param g The new G value (0-255).
 * @param b The new B value (0-255).
 * @param a The new A value (0-255).
 */
declare function SetRuntimeTexturePixel(
  tex: number,
  x: number,
  y: number,
  r: number,
  g: number,
  b: number,
  a: number,
): void;

declare function SetScenarioGroupEnabled(
  scenarioGroup: string,
  toggle: boolean,
): void;

declare function SetScenarioGroupEnabledHash(
  scenarioGroup: string | number,
  toggle: boolean,
): void;

declare function SetScenarioPedDensityMultiplierThisFrame(p0: number): void;

declare function SetScenarioTypeEnabled(
  scenarioType: string,
  toggle: boolean,
): void;

declare function SetScenarioTypeEnabledHash(
  scenarioType: string | number,
  toggle: boolean,
): void;

declare function SetScriptAsNoLongerNeeded(scriptName: string): void;

declare function SetScriptGfxDrawBehindPausemenu(toggle: boolean): void;

declare function SetScriptGfxDrawOrder(drawOrder: number): void;

declare function SetScriptWithNameHashAsNoLongerNeeded(
  scriptHash: string | number,
): void;

declare function SetSequenceToRepeat(
  taskSequenceId: number,
  repeat: boolean,
): void;

declare function SetSnakeoilForEntry(
  name: string,
  path: string,
  data: string,
): void;

declare function SetSnakeoilForEntry(
  name: string,
  path: string,
  data: string,
): void;

declare function SetSpawnerInfoPriority(
  p0: string | number,
  p1: string | number,
  priority: number,
): void;

declare function SetSpeciesTuningBoolParam(
  p0: string | number,
  p1: number,
  p2: number,
  p3: boolean,
): void;

declare function SetSpeciesTuningFloatParam(
  p0: string | number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function SetSrlTime(p0: number): void;

/**
 * Internal function for setting a state bag value.
 */
declare function SetStateBagValue(
  bagName: string,
  keyName: string,
  valueData: string,
  valueLength: number,
  replicated: boolean,
): void;

declare function SetStateOfRayfireMapObject(
  object: number,
  state: number,
): void;

declare function SetStaticEmitterEnabled(
  emitterName: string,
  toggle: boolean,
): void;

declare function SetStreamedTextureDictAsNoLongerNeeded(
  textureDict: string,
): void;

declare function SetSuperJumpThisFrame(player: number): void;

declare function SetSwimMultiplierForPlayer(
  player: number,
  multiplier: number,
): void;

declare function SetTaskMoveNetworkSignalBool(
  ped: number,
  signalName: string,
  value: boolean,
): void;

declare function SetTaskMoveNetworkSignalFloat(
  ped: number,
  signalName: string,
  value: number,
): void;

declare function SetTeamPickupObject(
  object: number,
  p1: number,
  p2: boolean,
): void;

declare function SetTextCentre(align: boolean): void;

declare function SetTextChatEnabled(enabled: boolean): boolean;

declare function SetTextChatEnabled(enabled: boolean): boolean;

declare function SetTextColor(r: number, g: number, b: number, a: number): void;

declare function SetTextDropshadow(
  distance: number,
  r: number,
  g: number,
  b: number,
  a: number,
): void;

declare function SetTextFontForCurrentCommand(fontId: number): void;

declare function SetTextRenderId(renderId: number): void;

declare function SetTextScale(scale: number, size: number): void;

declare function SetThisScriptCanBePaused(toggle: boolean): void;

declare function SetThisScriptCanRemoveBlipsCreatedByAnyScript(
  toggle: boolean,
): void;

/**
 * 0 = high
 * 1 = normal
 * 2 = low
 * @param priority :
 */
declare function SetThreadPriority(priority: number): void;

declare function SetTimeScale(timeScale: number): void;

declare function SetTimecycleModifier(modifierName: string): void;

declare function SetTimecycleModifierStrength(strength: number): void;

declare function SetTrackedPointInfo(
  point: number,
  x: number,
  y: number,
  z: number,
  radius: number,
): void;

declare function SetTrainCruiseSpeed(train: number, speed: number): void;

/**
 * Sets the ratio that a door is open for on a train.
 * @param train The train to set the door ratio for.
 * @param doorIndex Zero-based door index.
 * @param ratio A value between 0.0 (fully closed) and 1.0 (fully open).
 */
declare function SetTrainDoorOpenRatio(
  train: number,
  doorIndex: number,
  ratio: number,
): void;

declare function SetTrainSpeed(train: number, speed: number): void;

/**
 * Enables or disables whether train doors should be forced open whilst a player is inside the train. This is enabled by default in multiplayer.
 * @param forceOpen Should force open.
 */
declare function SetTrainsForceDoorsOpen(forceOpen: boolean): void;

declare function SetTransitionTimecycleModifier(
  modifierName: string,
  transition: number,
): void;

declare function SetTvAudioFrontend(toggle: boolean): void;

declare function SetTvChannel(channel: number): void;

declare function SetTvChannelPlaylist(
  tvChannel: number,
  playlistName: string,
  restart: boolean,
): void;

declare function SetTvVolume(volume: number): void;

declare function SetUpSpeedRestrainInformationForPlayerFollower(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
): void;

declare function SetVehicleAlarmTimeLeft(vehicle: number, time: number): void;

declare function SetVehicleAlarmTimeLeft(vehicle: number, time: number): void;

declare function SetVehicleAllowNoPassengersLockon(
  veh: number,
  toggle: boolean,
): void;

declare function SetVehicleAsNoLongerNeeded(vehicle: number): void;

/**
 * Disables the vehicle from being repaired when a vehicle extra is enabled.
 * @param vehicle The vehicle to set disable auto vehicle repair.
 * @param value Setting the value to  true prevents the vehicle from being repaired when a extra is enabled. Setting the value to false allows the vehicle from being repaired when a extra is enabled.
 */
declare function SetVehicleAutoRepairDisabled(
  vehicle: number,
  value: boolean,
): void;

/**
 * Disables the vehicle from being repaired when a vehicle extra is enabled.
 * @param vehicle The vehicle to set disable auto vehicle repair.
 * @param value Setting the value to  true prevents the vehicle from being repaired when a extra is enabled. Setting the value to false allows the vehicle from being repaired when a extra is enabled.
 */
declare function SetVehicleAutoRepairDisabled(
  vehicle: number,
  value: boolean,
): void;

declare function SetVehicleAutomaticallyAttaches(
  vehicle: number,
  p1: boolean,
  p2: number,
): number;

declare function SetVehicleBodyHealth(vehicle: number, value: number): void;

declare function SetVehicleCanBeTargetted(
  vehicle: number,
  state: boolean,
): void;

declare function SetVehicleCanBeUsedByFleeingPeds(
  vehicle: number,
  toggle: boolean,
): void;

declare function SetVehicleCanBeVisiblyDamaged(
  vehicle: number,
  state: boolean,
): void;

declare function SetVehicleCanBreak(vehicle: number, toggle: boolean): void;

declare function SetVehicleClutch(vehicle: number, clutch: number): void;

declare function SetVehicleClutch(vehicle: number, clutch: number): void;

declare function SetVehicleCurrentRpm(vehicle: number, rpm: number): void;

declare function SetVehicleCurrentRpm(vehicle: number, rpm: number): void;

declare function SetVehicleDamage(
  vehicle: number,
  xOffset: number,
  yOffset: number,
  zOffset: number,
  damage: number,
  radius: number,
  p6: boolean,
): void;

declare function SetVehicleDensityMultiplierThisFrame(multiplier: number): void;

declare function SetVehicleDirtLevel(vehicle: number, dirtLevel: number): void;

declare function SetVehicleDoorBroken(
  vehicle: number,
  doorIndex: number,
  deleteDoor: boolean,
): void;

declare function SetVehicleDoorCanBreak(
  vehicle: number,
  doorIndex: number,
  isBreakable: boolean,
): void;

declare function SetVehicleDoorControl(
  vehicle: number,
  doorIndex: number,
  speed: number,
  angle: number,
): void;

declare function SetVehicleDoorDestroyType(
  vehicle: number,
  doorIndex: number,
  destroyType: number,
): void;

declare function SetVehicleDoorLatched(
  vehicle: number,
  doorIndex: number,
  p2: boolean,
  p3: boolean,
  p4: boolean,
): void;

declare function SetVehicleDoorOpen(
  vehicle: number,
  doorIndex: number,
  loose: boolean,
  openInstantly: boolean,
): void;

declare function SetVehicleDoorShut(
  vehicle: number,
  doorIndex: number,
  closeInstantly: boolean,
): void;

declare function SetVehicleDoorsLocked(
  vehicle: number,
  doorLockStatus: number,
): void;

declare function SetVehicleDoorsLockedForAllPlayers(
  vehicle: number,
  toggle: boolean,
): void;

declare function SetVehicleDoorsLockedForPlayer(
  vehicle: number,
  player: number,
  toggle: boolean,
): void;

declare function SetVehicleDoorsLockedForTeam(
  vehicle: number,
  team: number,
  toggle: boolean,
): void;

declare function SetVehicleDoorsShut(
  vehicle: number,
  closeInstantly: boolean,
): void;

declare function SetVehicleEngineCanDegrade(
  vehicle: number,
  toggle: boolean,
): void;

declare function SetVehicleEngineHealth(vehicle: number, health: number): void;

declare function SetVehicleEngineOn(p0: number, p1: number, p2: number): void;

declare function SetVehicleEngineTemperature(
  vehicle: number,
  temperature: number,
): void;

declare function SetVehicleEngineTemperature(
  vehicle: number,
  temperature: number,
): void;

declare function SetVehicleExclusiveDriver(
  vehicle: number,
  toggle: boolean,
): void;

declare function SetVehicleExclusiveDriver_2(
  vehicle: number,
  ped: number,
  index: number,
): void;

declare function SetVehicleExplodesOnHighExplosionDamage(
  vehicle: number,
  toggle: boolean,
): void;

declare function SetVehicleExtra(
  vehicle: number,
  extraId: number,
  disable: boolean,
): void;

declare function SetVehicleFixed(vehicle: number): void;

declare function SetVehicleForwardSpeed(vehicle: number, speed: number): void;

declare function SetVehicleFuelLevel(vehicle: number, level: number): void;

declare function SetVehicleFuelLevel(vehicle: number, level: number): void;

declare function SetVehicleGravityAmount(
  vehicle: number,
  gravity: number,
): void;

declare function SetVehicleGravityAmount(
  vehicle: number,
  gravity: number,
): void;

declare function SetVehicleHandbrake(vehicle: number, toggle: boolean): void;

/**
 * Sets a handling override for a specific vehicle. Certain handling flags can only be set globally using `SET_HANDLING_FIELD`, this might require some experimentation.
 * Example: `SetVehicleHandlingField(vehicle, 'CHandlingData', 'fSteeringLock', 360.0)`
 * @param vehicle The vehicle to set data for.
 * @param class_ The handling class to set. Only "CHandlingData" is supported at this time.
 * @param fieldName The field name to set. These match the keys in `handling.meta`.
 * @param value The value to set.
 */
declare function SetVehicleHandlingField(
  vehicle: number,
  class_: string,
  fieldName: string,
  value: number,
): void;

/**
 * Sets a handling override for a specific vehicle. Certain handling flags can only be set globally using `SET_HANDLING_FIELD`, this might require some experimentation.
 * Example: `SetVehicleHandlingField(vehicle, 'CHandlingData', 'fSteeringLock', 360.0)`
 * @param vehicle The vehicle to set data for.
 * @param class_ The handling class to set. Only "CHandlingData" is supported at this time.
 * @param fieldName The field name to set. These match the keys in `handling.meta`.
 * @param value The value to set.
 */
declare function SetVehicleHandlingField(
  vehicle: number,
  class_: string,
  fieldName: string,
  value: number,
): void;

/**
 * Sets a handling override for a specific vehicle. Certain handling flags can only be set globally using `SET_HANDLING_FLOAT`, this might require some experimentation.
 * Example: `SetVehicleHandlingFloat(vehicle, 'CHandlingData', 'fSteeringLock', 360.0)`
 * @param vehicle The vehicle to set data for.
 * @param class_ The handling class to set. Only "CHandlingData" is supported at this time.
 * @param fieldName The field name to set. These match the keys in `handling.meta`.
 * @param value The floating-point value to set.
 */
declare function SetVehicleHandlingFloat(
  vehicle: number,
  class_: string,
  fieldName: string,
  value: number,
): void;

/**
 * Sets a handling override for a specific vehicle. Certain handling flags can only be set globally using `SET_HANDLING_FLOAT`, this might require some experimentation.
 * Example: `SetVehicleHandlingFloat(vehicle, 'CHandlingData', 'fSteeringLock', 360.0)`
 * @param vehicle The vehicle to set data for.
 * @param class_ The handling class to set. Only "CHandlingData" is supported at this time.
 * @param fieldName The field name to set. These match the keys in `handling.meta`.
 * @param value The floating-point value to set.
 */
declare function SetVehicleHandlingFloat(
  vehicle: number,
  class_: string,
  fieldName: string,
  value: number,
): void;

/**
 * Sets a handling override for a specific vehicle. Certain handling flags can only be set globally using `SET_HANDLING_INT`, this might require some experimentation.
 * @param vehicle The vehicle to set data for.
 * @param class_ The handling class to set. Only "CHandlingData" is supported at this time.
 * @param fieldName The field name to set. These match the keys in `handling.meta`.
 * @param value The integer value to set.
 */
declare function SetVehicleHandlingInt(
  vehicle: number,
  class_: string,
  fieldName: string,
  value: number,
): void;

/**
 * Sets a handling override for a specific vehicle. Certain handling flags can only be set globally using `SET_HANDLING_INT`, this might require some experimentation.
 * @param vehicle The vehicle to set data for.
 * @param class_ The handling class to set. Only "CHandlingData" is supported at this time.
 * @param fieldName The field name to set. These match the keys in `handling.meta`.
 * @param value The integer value to set.
 */
declare function SetVehicleHandlingInt(
  vehicle: number,
  class_: string,
  fieldName: string,
  value: number,
): void;

/**
 * Sets a handling override for a specific vehicle. Certain handling flags can only be set globally using `SET_HANDLING_VECTOR`, this might require some experimentation.
 * @param vehicle The vehicle to set data for.
 * @param class_ The handling class to set. Only "CHandlingData" is supported at this time.
 * @param fieldName The field name to set. These match the keys in `handling.meta`.
 * @param value The Vector3 value to set.
 */
declare function SetVehicleHandlingVector(
  vehicle: number,
  class_: string,
  fieldName: string,
): void;

/**
 * Sets a handling override for a specific vehicle. Certain handling flags can only be set globally using `SET_HANDLING_VECTOR`, this might require some experimentation.
 * @param vehicle The vehicle to set data for.
 * @param class_ The handling class to set. Only "CHandlingData" is supported at this time.
 * @param fieldName The field name to set. These match the keys in `handling.meta`.
 * @param value The Vector3 value to set.
 */
declare function SetVehicleHandlingVector(
  vehicle: number,
  class_: string,
  fieldName: string,
): void;

declare function SetVehicleHasBeenOwnedByPlayer(
  vehicle: number,
  owned: boolean,
): void;

declare function SetVehicleHasStrongAxles(
  vehicle: number,
  toggle: boolean,
): void;

declare function SetVehicleHighGear(vehicle: number, gear: number): void;

declare function SetVehicleHighGear(vehicle: number, gear: number): void;

declare function SetVehicleInactiveDuringPlayback(
  vehicle: number,
  toggle: boolean,
): void;

declare function SetVehicleIsConsideredByPlayer(
  vehicle: number,
  toggle: boolean,
): void;

declare function SetVehicleIsStolen(vehicle: number, isStolen: boolean): void;

declare function SetVehicleJetEngineOn(vehicle: number, toggle: boolean): void;

declare function SetVehicleLights(vehicle: number, state: number): void;

declare function SetVehicleLightsCanBeVisiblyDamaged(
  vehicle: number,
  p1: boolean,
): void;

declare function SetVehicleLodMultiplier(
  vehicle: number,
  multiplier: number,
): void;

declare function SetVehicleOilLevel(vehicle: number, level: number): void;

declare function SetVehicleOilLevel(vehicle: number, level: number): void;

declare function SetVehicleOnGroundProperly(
  vehicle: number,
  p1: number,
): boolean;

declare function SetVehiclePetrolTankHealth(
  vehicle: number,
  health: number,
): void;

declare function SetVehicleProvidesCover(
  vehicle: number,
  toggle: boolean,
): void;

declare function SetVehicleShootAtTarget(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
): void;

declare function SetVehicleSteerBias(vehicle: number, value: number): void;

declare function SetVehicleSteeringAngle(vehicle: number, angle: number): void;

declare function SetVehicleSteeringAngle(vehicle: number, angle: number): void;

declare function SetVehicleSteeringScale(vehicle: number, scale: number): void;

declare function SetVehicleSteeringScale(vehicle: number, scale: number): void;

declare function SetVehicleStrong(vehicle: number, toggle: boolean): void;

/**
 * Sets the height of the vehicle's suspension.
 * This changes the same value set by Suspension in the mod shop.
 * Negatives values raise the car. Positive values lower the car.
 * This is change is visual only. The collision of the vehicle will not move.
 */
declare function SetVehicleSuspensionHeight(
  vehicle: number,
  newHeight: number,
): void;

declare function SetVehicleTurboPressure(
  vehicle: number,
  pressure: number,
): void;

declare function SetVehicleTurboPressure(
  vehicle: number,
  pressure: number,
): void;

declare function SetVehicleTyresCanBurst(
  vehicle: number,
  toggle: boolean,
): void;

declare function SetVehicleUndriveable(vehicle: number, toggle: boolean): void;

/**
 * Sets brake pressure of a wheel.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 * Normal values around 1.0f
 */
declare function SetVehicleWheelBrakePressure(
  vehicle: number,
  wheelIndex: number,
  pressure: number,
): void;

/**
 * Sets the flags of a wheel.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 * @param flags bit flags
 */
declare function SetVehicleWheelFlags(
  vehicle: number,
  wheelIndex: number,
  flags: number,
): void;

declare function SetVehicleWheelHealth(
  vehicle: number,
  wheelIndex: number,
  health: number,
): void;

declare function SetVehicleWheelHealth(
  vehicle: number,
  wheelIndex: number,
  health: number,
): void;

/**
 * Sets whether the wheel is powered.
 * On all wheel drive cars this works to change which wheels receive power, but if a car's fDriveBiasFront doesn't send power to that wheel, it won't get power anyway. This can be fixed by changing the fDriveBiasFront with SET_VEHICLE_HANDLING_FLOAT.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 * This is a shortcut to a flag in SET_VEHICLE_WHEEL_FLAGS.
 */
declare function SetVehicleWheelIsPowered(
  vehicle: number,
  wheelIndex: number,
  powered: boolean,
): void;

/**
 * Sets power being sent to a wheel.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 */
declare function SetVehicleWheelPower(
  vehicle: number,
  wheelIndex: number,
  power: number,
): void;

/**
 * Not sure what this changes, probably determines physical rim size in case the tire is blown.
 * @param vehicle The vehicle to obtain data for.
 * @param wheelIndex Index of wheel, 0-3.
 * @param value Size of rim collider.
 */
declare function SetVehicleWheelRimColliderSize(
  vehicle: number,
  wheelIndex: number,
  value: number,
): void;

/**
 * Sets the rotation speed of a wheel.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 */
declare function SetVehicleWheelRotationSpeed(
  vehicle: number,
  wheelIndex: number,
  speed: number,
): void;

/**
 * Sets vehicle's wheels' size (size is the same for all the wheels, cannot get/set specific wheel of vehicle).
 * Only works on non-default wheels.
 * Returns whether change was successful (can be false if trying to set size for non-default wheels).
 * @param vehicle The vehicle to set data for.
 * @param size Size of the wheels (usually between 0.5 and 1.5 is reasonable).
 * @return Bool - whether change was successful or not
 */
declare function SetVehicleWheelSize(vehicle: number, size: number): boolean;

/**
 * Use along with SetVehicleWheelSize to resize the wheels (this native sets the collider size affecting physics while SetVehicleWheelSize will change visual size).
 * @param vehicle The vehicle to obtain data for.
 * @param wheelIndex Index of wheel, 0-3.
 * @param value Radius of tire collider.
 */
declare function SetVehicleWheelTireColliderSize(
  vehicle: number,
  wheelIndex: number,
  value: number,
): void;

/**
 * Use along with SetVehicleWheelWidth to resize the wheels (this native sets the collider width affecting physics while SetVehicleWheelWidth will change visual width).
 * @param vehicle The vehicle to obtain data for.
 * @param wheelIndex Index of wheel, 0-3.
 * @param value Width of tire collider.
 */
declare function SetVehicleWheelTireColliderWidth(
  vehicle: number,
  wheelIndex: number,
  value: number,
): void;

/**
 * Sets the traction vector length of a wheel.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 */
declare function SetVehicleWheelTractionVectorLength(
  vehicle: number,
  wheelIndex: number,
  length: number,
): void;

/**
 * Sets vehicle's wheels' width (width is the same for all the wheels, cannot get/set specific wheel of vehicle).
 * Only works on non-default wheels.
 * Returns whether change was successful (can be false if trying to set width for non-default wheels).
 * @param vehicle The vehicle to set data for.
 * @param width Width of the wheels (usually between 0.1 and 1.5 is reasonable).
 * @return Bool - whether change was successful or not
 */
declare function SetVehicleWheelWidth(vehicle: number, width: number): boolean;

/**
 * Adjusts the offset of the specified wheel relative to the wheel's axle center.
 * Needs to be called every frame in order to function properly, as GTA will reset the offset otherwise.
 * This function can be especially useful to set the track width of a vehicle, for example:
 * ```
 * function SetVehicleFrontTrackWidth(vehicle, width)
 * SetVehicleWheelXOffset(vehicle, 0, -width/2)
 * SetVehicleWheelXOffset(vehicle, 1, width/2)
 * end
 * ```
 */
declare function SetVehicleWheelXOffset(
  vehicle: number,
  wheelIndex: number,
  offset: number,
): void;

/**
 * Adjusts the offset of the specified wheel relative to the wheel's axle center.
 * Needs to be called every frame in order to function properly, as GTA will reset the offset otherwise.
 * This function can be especially useful to set the track width of a vehicle, for example:
 * ```
 * function SetVehicleFrontTrackWidth(vehicle, width)
 * SetVehicleWheelXOffset(vehicle, 0, -width/2)
 * SetVehicleWheelXOffset(vehicle, 1, width/2)
 * end
 * ```
 * @param vehicle
 * @param wheelIndex
 * @param offset
 */
declare function SetVehicleWheelXOffset(
  vehicle: number,
  wheelIndex: number,
  offset: number,
): void;

declare function SetVehicleWheelYRotation(
  vehicle: number,
  wheelIndex: number,
  value: number,
): void;
declare function SetVehicleWheelXrot(
  vehicle: number,
  wheelIndex: number,
  value: number,
): void;

declare function SetVehicleWheelYRotation(
  vehicle: number,
  wheelIndex: number,
  value: number,
): void;
declare function SetVehicleWheelXrot(
  vehicle: number,
  wheelIndex: number,
  value: number,
): void;

/**
 * Example script: https://pastebin.com/J6XGbkCW
 * List of known states:
 * ```
 * 1: Not wheeling.
 * 65: Vehicle is ready to do wheelie (burnouting).
 * 129: Vehicle is doing wheelie.
 * ```
 * @param vehicle Vehicle
 * @param state Wheelie state
 */
declare function SetVehicleWheelieState(vehicle: number, state: number): void;

/**
 * Example script: <https://pastebin.com/J6XGbkCW>
 * List of known states:
 * ```
 * 1: Not wheeling.
 * 65: Vehicle is ready to do wheelie (burnouting).
 * 129: Vehicle is doing wheelie.
 * ```
 * @param vehicle Vehicle
 * @param state Wheelie state
 */
declare function SetVehicleWheelieState(vehicle: number, state: number): void;

declare function SetVehicleWheelsCanBreak(
  vehicle: number,
  enabled: boolean,
): void;

declare function SetVehicleWheelsCanBreakOffWhenBlowUp(
  vehicle: number,
  toggle: boolean,
): void;

/**
 * Overrides a floating point value from `visualsettings.dat` temporarily.
 * @param name The name of the value to set, such as `pedLight.color.red`.
 * @param value The value to write.
 */
declare function SetVisualSettingFloat(name: string, value: number): void;

/**
 * Overrides a floating point value from `visualsettings.dat` temporarily.
 * @param name The name of the value to set, such as `pedLight.color.red`.
 * @param value The value to write.
 */
declare function SetVisualSettingFloat(name: string, value: number): void;

declare function SetWantedLevelMultiplier(multiplier: number): void;

declare function SetWaypointOff(): void;

/**
 * Disables the game's built-in auto-reloading.
 * @param state On/Off
 */
declare function SetWeaponsNoAutoreload(state: boolean): void;

/**
 * Disables autoswapping to another weapon when the current weapon runs out of ammo.
 * @param state On/Off
 */
declare function SetWeaponsNoAutoswap(state: boolean): void;

declare function SetWeatherTypeTransition(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function SetWidescreenBorders(p0: boolean, p1: number): void;

declare function SetWindDirection(direction: number): void;

declare function SetWindSpeed(speed: number): void;

declare function Settimera(value: number): void;

declare function Settimerb(value: number): void;

declare function ShakeCam(cam: number, _type: string, amplitude: number): void;

declare function ShakeGameplayCam(shakeName: string, intensity: number): void;

declare function ShiftLeft(value: number, bitShift: number): number;

declare function ShiftRight(value: number, bitShift: number): number;

declare function ShootSingleBulletBetweenCoords(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
  p10: number,
  p11: number,
  p12: number,
  p13: number,
): void;

declare function ShootSingleBulletBetweenCoordsIgnoreEntityNew(
  p0: number,
): void;

declare function ShouldUseMetricMeasurements(): boolean;

/**
 * Same as SHOULD_USE_METRIC_MEASUREMENTS
 */
declare function ShouldUseMetricMeasurements_2(): boolean;

declare function ShouldUseMetricTemperature(): boolean;

declare function ShouldUseMetricWeight(): boolean;

declare function ShouldUse_24HourClock(): boolean;

declare function ShutdownLoadingScreen(): void;

/**
 * Shuts down the `loadingScreen` NUI frame, similarly to `SHUTDOWN_LOADING_SCREEN`.
 */
declare function ShutdownLoadingScreenNui(): void;

/**
 * Shuts down the `loadingScreen` NUI frame, similarly to `SHUTDOWN_LOADING_SCREEN`.
 */
declare function ShutdownLoadingScreenNui(): void;

declare function SimulatePlayerInputGait(
  player: number,
  amount: number,
  gaitType: number,
  speed: number,
  p4: boolean,
  p5: boolean,
): void;

declare function SimulatedRouteGetEta(p0: number): number;

declare function SimulatedRouteIsLoaded(p0: number): number;

declare function SimulatedRouteTravelToPoint(
  p0: number,
  p1: number,
  p2: number,
): void;

declare function Sin(value: number): number;

declare function SkipTimeInPlaybackRecordedVehicle(
  p0: number,
  p1: number,
): void;

declare function SkipToNextScriptedConversationLine(p0: number): void;

declare function SlideObject(
  object: number,
  toX: number,
  toY: number,
  toZ: number,
  speedX: number,
  speedY: number,
  speedZ: number,
  collision: boolean,
): boolean;

declare function SpactionproxyGetNextPendingBuyAction(
  data: number,
): [boolean, number];

declare function SpactionproxyGetNextPendingCraftingAction(
  data: number,
): [boolean, number];

declare function SpactionproxyManagerIsFailed(): boolean;

declare function SpactionproxyManagerIsReady(): boolean;

declare function SpactionproxyProcessAction(p0: number, p1: boolean): boolean;

declare function SpactionproxyStartManager(): boolean;

declare function Sqrt(value: number): number;

declare function StartAnimScene(animScene: number): void;

declare function StartAudioScene(scene: string): boolean;

declare function StartBenchmarkRecording(): void;

declare function StartEntityFire(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

/**
 * Equivalent of [START_FIND_KVP](#\_0xDD379006), but for another resource than the current one.
 * @param resourceName The resource to try finding the key/values for
 * @param prefix A prefix match
 * @return A KVP find handle to use with [FIND_KVP](#\_0xBD7BEBC5) and close with [END_FIND_KVP](#\_0xB3210203)
 */
declare function StartFindExternalKvp(
  resourceName: string,
  prefix: string,
): number;

declare function StartFindKvp(prefix: string): number;

declare function StartFindKvp(prefix: string): number;

declare function StartGpsMultiRoute(
  hudColor: number,
  p1: boolean,
  p2: boolean,
): void;

declare function StartNetworkedParticleFxLoopedOnEntity(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
  p10: number,
  p11: number,
): number;

declare function StartNetworkedParticleFxLoopedOnEntityBone(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
  p10: number,
  p11: number,
  p12: number,
): number;

declare function StartNetworkedParticleFxNonLoopedAtCoord(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
  p10: number,
): boolean;

declare function StartNetworkedParticleFxNonLoopedOnEntity(
  effectName: string,
  entity: number,
  offsetX: number,
  offsetY: number,
  offsetZ: number,
  rotX: number,
  rotY: number,
  rotZ: number,
  scale: number,
  axisX: boolean,
  axisY: boolean,
  axisZ: boolean,
): boolean;

declare function StartNewScript(scriptName: string, stackSize: number): number;

declare function StartNewScriptWithArgs(
  scriptName: string,
  argCount: number,
  stackSize: number,
): [number, number];

declare function StartNewScriptWithNameHash(
  scriptHash: string | number,
  stackSize: number,
): number;

declare function StartNewScriptWithNameHashAndArgs(
  scriptHash: string | number,
  argCount: number,
  stackSize: number,
): [number, number];

declare function StartParticleFxLoopedAtCoord(
  effectName: string,
  x: number,
  y: number,
  z: number,
  xRot: number,
  yRot: number,
  zRot: number,
  scale: number,
  xAxis: boolean,
  yAxis: boolean,
  zAxis: boolean,
  p11: boolean,
): number;

declare function StartParticleFxLoopedOnEntity(
  effectName: string,
  entity: number,
  xOffset: number,
  yOffset: number,
  zOffset: number,
  xRot: number,
  yRot: number,
  zRot: number,
  scale: number,
  xAxis: boolean,
  yAxis: boolean,
  zAxis: boolean,
): number;

declare function StartParticleFxLoopedOnEntityBone(
  effectName: string,
  entity: number,
  xOffset: number,
  yOffset: number,
  zOffset: number,
  xRot: number,
  yRot: number,
  zRot: number,
  boneIndex: number,
  scale: number,
  xAxis: boolean,
  yAxis: boolean,
  zAxis: boolean,
): number;

declare function StartParticleFxLoopedOnPedBone(
  effectName: string,
  ped: number,
  xOffset: number,
  yOffset: number,
  zOffset: number,
  xRot: number,
  yRot: number,
  zRot: number,
  boneIndex: number,
  scale: number,
  xAxis: boolean,
  yAxis: boolean,
  zAxis: boolean,
): number;

declare function StartParticleFxNonLoopedAtCoord(
  effectName: string,
  xPos: number,
  yPos: number,
  zPos: number,
  xRot: number,
  yRot: number,
  zRot: number,
  scale: number,
  xAxis: boolean,
  yAxis: boolean,
  zAxis: boolean,
): number;

declare function StartParticleFxNonLoopedOnEntity(
  effectName: string,
  entity: number,
  offsetX: number,
  offsetY: number,
  offsetZ: number,
  rotX: number,
  rotY: number,
  rotZ: number,
  scale: number,
  axisX: boolean,
  axisY: boolean,
  axisZ: boolean,
): boolean;

declare function StartParticleFxNonLoopedOnPedBone(
  effectName: string,
  ped: number,
  offsetX: number,
  offsetY: number,
  offsetZ: number,
  rotX: number,
  rotY: number,
  rotZ: number,
  boneIndex: number,
  scale: number,
  axisX: boolean,
  axisY: boolean,
  axisZ: boolean,
): boolean;

declare function StartPetrolTrailDecals(p0: number, p1: number): void;

declare function StartPlaybackRecordedVehicle(
  vehicle: number,
  p1: number,
  playback: string,
  p3: boolean,
): void;

declare function StartPlayerTeleport(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
): void;

declare function StartPreloadedConversation(p0: number): void;

declare function StartRopeUnwindingFront(ropeId: number): void;

declare function StartRopeWinding(ropeId: number): void;

declare function StartScriptConversation(
  p0: boolean,
  p1: boolean,
  p2: boolean,
  p3: boolean,
): void;

declare function StartScriptFire(
  x: number,
  y: number,
  z: number,
  p3: number,
  p4: number,
  p5: boolean,
  soundsetName: string,
  p7: number,
  p8: number,
): number;

declare function StartShapeTestBox(
  x: number,
  y: number,
  z: number,
  x1: number,
  y2: number,
  z2: number,
  rotX: number,
  rotY: number,
  rotZ: number,
  p9: number,
  p10: number,
  entity: number,
  p12: number,
): number;

declare function StartShapeTestCapsule(
  x1: number,
  y1: number,
  z1: number,
  x2: number,
  y2: number,
  z2: number,
  radius: number,
  flags: number,
  entity: number,
  p9: number,
): number;

declare function StartShapeTestLosProbe(
  x1: number,
  y1: number,
  z1: number,
  x2: number,
  y2: number,
  z2: number,
  flags: number,
  entity: number,
  p8: number,
): number;

declare function StartShapeTestRay(
  x1: number,
  y1: number,
  z1: number,
  x2: number,
  y2: number,
  z2: number,
  flags: number,
  entity: number,
  p8: number,
): number;

declare function StartShapeTestSurroundingCoords(
  flag: number,
  entity: number,
  flag2: number,
): [number, number[], number[]];

declare function StartShapeTestSweptSphere(
  x1: number,
  y1: number,
  z1: number,
  x2: number,
  y2: number,
  z2: number,
  radius: number,
  flags: number,
  entity: number,
  p9: number,
): number;

declare function StartVehicleHorn(
  vehicle: number,
  duration: number,
  mode: string | number,
  forever: boolean,
): void;

/**
 * statId: see 0xC48FE1971C9743FF
 * @param statId :
 * @param value :
 */
declare function StatIdGetBool(): [boolean, number, any /* actually bool */];

/**
 * statId: see 0xC48FE1971C9743FF
 * @param statId :
 * @param date :
 */
declare function StatIdGetDate(): [boolean, number, number];

/**
 * statId: see 0xC48FE1971C9743FF
 * @param statId :
 * @param value :
 */
declare function StatIdGetFloat(): [boolean, number, number];

/**
 * statId: see 0xC48FE1971C9743FF
 * @param statId :
 * @param p1 :
 */
declare function StatIdGetInt(): [boolean, number, number];

/**
 * struct StatId
 * {
 * alignas(8) Hash BaseId;
 * alignas(8) Hash PermutationId;
 * }
 * @param statId :
 */
declare function StatIdIsValid(statId: number): [boolean, number];

/**
 * statId: see 0xC48FE1971C9743FF
 * @param statId :
 * @param value :
 * @param p2 :
 */
declare function StatIdSetBool(value: boolean, p2: boolean): [boolean, number];

/**
 * statId: see 0xC48FE1971C9743FF
 * @param statId :
 * @param date :
 * @param p2 :
 */
declare function StatIdSetDate(p2: boolean): [boolean, number, number];

/**
 * statId: see 0xC48FE1971C9743FF
 * @param statId :
 * @param value :
 * @param p2 :
 */
declare function StatIdSetFloat(value: number, p2: boolean): [boolean, number];

/**
 * statId: see 0xC48FE1971C9743FF
 * @param statId :
 * @param label :
 * @param p2 :
 */
declare function StatIdSetGxtLabel(
  label: string,
  p2: boolean,
): [boolean, number];

/**
 * statId: see 0xC48FE1971C9743FF
 * @param statId :
 * @param value :
 * @param p2 :
 */
declare function StatIdSetInt(value: number, p2: boolean): [boolean, number];

/**
 * statId: see 0xC48FE1971C9743FF
 * @param statId :
 */
declare function StatIdSetToPosseId(statId: number): void;

declare function StateMachineCreate(p0: number, p1: number): number;

declare function StateMachineDestroy(p0: number): void;

declare function StateMachineRequestTransition(p0: number, p1: number): number;

declare function StopAnimPlayback(ped: number, p1: number, p2: boolean): void;

declare function StopAnimTask(
  ped: number,
  animDictionary: string,
  animationName: string,
  p3: number,
): void;

declare function StopAudioScene(scene: string): void;

declare function StopAudioScenes(): void;

declare function StopBenchmarkRecording(): void;

declare function StopCamPointing(cam: number): void;

declare function StopCamShaking(cam: number, p1: boolean): void;

declare function StopCurrentPlayingAmbientSpeech(p0: number, p1: number): void;

declare function StopCurrentPlayingSpeech(p0: number, p1: number): void;

declare function StopEntityAnim(
  entity: number,
  animation: string,
  animGroup: string,
  p3: number,
): number;

declare function StopEntityFire(p0: number, p1: number): void;

declare function StopFireInRange(
  x: number,
  y: number,
  z: number,
  radius: number,
): void;

declare function StopGameplayCamShaking(p0: boolean): void;

declare function StopGameplayHint(p0: boolean): void;

declare function StopPadShake(padIndex: number): void;

declare function StopParticleFxLooped(ptfxHandle: number, p1: boolean): void;

declare function StopPedSpeaking(ped: number, shaking: boolean): void;

declare function StopPlaybackRecordedVehicle(vehicle: number): void;

declare function StopPlayerTeleport(): void;

declare function StopRecordingThisFrame(): void;

declare function StopRopeUnwindingFront(ropeId: number): void;

declare function StopRopeWinding(ropeId: number): void;

declare function StopScriptedConversation(
  p0: number,
  p1: number,
  p2: number,
): number;

declare function StopStream(p0: number): void;

declare function StringToInt(
  _string: string,
  outInteger?: number,
): [boolean, number];

declare function SuppressShockingEventsNextFrame(): void;

declare function TakeOwnershipOfAnimScene(animScene: number): void;

declare function Tan(p0: number): number;

declare function TaskAchieveHeading(
  ped: number,
  heading: number,
  timeout: number,
): void;

declare function TaskAimAtCoord(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
): void;

declare function TaskAimAtEntity(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): void;

declare function TaskAimGunAtCoord(
  ped: number,
  x: number,
  y: number,
  z: number,
  time: number,
  p5: boolean,
  p6: boolean,
): void;

declare function TaskAimGunAtEntity(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): void;

declare function TaskAmbientAnimalHunt(
  p0: number,
  p1: number,
  p2: number,
): void;

declare function TaskAmbientAnimalStalk(
  p0: number,
  p1: number,
  p2: number,
): void;

declare function TaskAnimalAlerted(p0: number, p1: number, p2: number): void;

declare function TaskAnimalFlee(p0: number, p1: number, p2: number): void;

declare function TaskAnimalInteraction(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): void;

declare function TaskAnimalUnalerted(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): void;

declare function TaskAnimalWrithe(p0: number, p1: number, p2: number): void;

declare function TaskArrestPed(ped: number, target: number): void;

declare function TaskBark(p0: number, p1: number, p2: number): void;

declare function TaskBoardVehicle(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
): void;

declare function TaskBoardVehicle_2(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): void;

declare function TaskBoatMission(
  pedDriver: number,
  boat: number,
  p2: number,
  p3: number,
  x: number,
  y: number,
  z: number,
  p7: number,
  maxSpeed: number,
  drivingStyle: number,
  p10: number,
  p11: number,
): void;

declare function TaskBreakVehicleDoorLock(p0: number, p1: number): void;

declare function TaskClearDefensiveArea(p0: number): void;

declare function TaskClearLookAt(ped: number): void;

declare function TaskClimb(ped: number, unused: boolean): void;

declare function TaskClimbLadder(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function TaskClimb_2(p0: number, p1: number): void;

declare function TaskCombatAnimalCharge(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function TaskCombatAnimalWarn(p0: number, p1: number, p2: number): void;

declare function TaskCombatHatedTargets(p0: number, p1: number): void;

declare function TaskCombatHatedTargetsAroundPed(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function TaskCombatHatedTargetsAroundPedTimed(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function TaskCombatHatedTargetsInArea(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
): void;

declare function TaskCombatHatedTargetsNoLosTest(p0: number, p1: number): void;

declare function TaskCombatPed(
  ped: number,
  targetPed: number,
  p2: number,
  p3: number,
): void;

declare function TaskCombatPedTimed(
  p0: number,
  ped: number,
  p2: number,
  p3: number,
): void;

declare function TaskCombatPed_3(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
): void;

declare function TaskCompanionAmbient(p0: number, p1: number): void;

declare function TaskConfront(p0: number, p1: number, p2: number): number;

declare function TaskCower(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function TaskCutFreeHogtiedTargetPed(p0: number, p1: number): void;

declare function TaskCutFreeHogtiedTargetPed_2(
  p0: number,
  p1: number,
  p2: number,
): void;

declare function TaskDisembarkVehicle(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
): void;

declare function TaskDisembarkVehicle_2(
  p0: number,
  p1: number,
  p2: number,
): void;

/**
 * Dismounts the ped from the animal it's mounted on. taskFlag affects what side the rider gets off. 1 << 18 will get off on the left side, where any other value will get off on the right side. The only other known value are 1 << 17 and 1 << 24, which has the behavior of any other value (getting off the animal from the right side). p2-p5 are almost always 0.
 * @param rider :
 * @param taskFlag :
 * @param p2 :
 * @param p3 :
 * @param p4 :
 * @param p5 :
 */
declare function TaskDismountAnimal(
  rider: number,
  taskFlag: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
): void;

declare function TaskDriveBy(
  driverPed: number,
  targetPed: number,
  targetVehicle: number,
  targetX: number,
  targetY: number,
  targetZ: number,
  distanceToShoot: number,
  pedAccuracy: number,
  p8: boolean,
  firingPattern: string | number,
): void;

declare function TaskDuck(p0: number, p1: number): void;

declare function TaskDuel(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
  p10: number,
): void;

declare function TaskDumpCarriableFromParent(
  p0: number,
  p1: number,
  p2: number,
): void;

declare function TaskEat(p0: number, p1: number, p2: number): void;

declare function TaskEmote(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
): void;

declare function TaskEmote_2(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
): void;

declare function TaskEnterAnimScene(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
): void;

declare function TaskEnterCover(p0: number): void;

declare function TaskEnterTransport(p0: number): void;

declare function TaskEnterVehicle(
  ped: number,
  vehicle: number,
  timeout: number,
  seat: number,
  speed: number,
  flag: number,
  p6: number,
): void;

declare function TaskEvasiveAnim(p0: number, p1: number, p2: number): void;

declare function TaskEveryoneLeaveVehicle(p0: number, p1: number): void;

declare function TaskEveryoneLeaveVehicleInOrder(p0: number, p1: number): void;

declare function TaskExitCover(p0: number): void;

declare function TaskExitTransport(p0: number): void;

declare function TaskExtendRoute(x: number, y: number, z: number): void;

declare function TaskFleeFromCoord(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
  p10: number,
  p11: number,
): void;

declare function TaskFleeFromPed(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
): void;

declare function TaskFlushRoute(): void;

declare function TaskFlyAway(p0: number, p1: number): void;

declare function TaskFlyToCoord(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
): void;

declare function TaskFlyingCircle(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
): void;

declare function TaskFollowAndConverseWithPed(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
  p10: number,
): void;

declare function TaskFollowEntityAlongWaypointRecordingAtOffset(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
): void;

declare function TaskFollowEntityWhileAimingAtEntity(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
): void;

declare function TaskFollowNavMeshToCoord(
  ped: number,
  x: number,
  y: number,
  z: number,
  speed: number,
  timeout: number,
  stoppingRange: number,
  persistFollowing: boolean,
  unk: number,
): void;

declare function TaskFollowNavMeshToCoordAdvanced(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
  p10: number,
  p11: number,
  p12: number,
): void;

declare function TaskFollowPavementToCoord(p0: number, p1: number): void;

declare function TaskFollowPointRoute(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
): void;

declare function TaskFollowToOffsetOfCoord(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
  p10: number,
  p11: number,
  p12: number,
  p13: number,
  p14: number,
): void;

declare function TaskFollowToOffsetOfEntity(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
  p10: number,
  p11: number,
  p12: number,
): void;

declare function TaskFollowWaypointRecording(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
): void;

declare function TaskFollowWaypointRecordingAdvanced(
  p0: number,
  p1: number,
): void;

declare function TaskFollowWaypointRecordingAtOffset(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
): void;

declare function TaskForceMotionState(
  ped: number,
  state: string | number,
  p2: boolean,
): void;

declare function TaskGoStraightToCoord(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
): void;

declare function TaskGoStraightToCoordRelativeToEntity(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
): void;

declare function TaskGoToCoordAndAimAtHatedEntitiesNearCoord(
  pedHandle: number,
  goToLocationX: number,
  goToLocationY: number,
  goToLocationZ: number,
  focusLocationX: number,
  focusLocationY: number,
  focusLocationZ: number,
  speed: number,
  shootAtEnemies: boolean,
  distanceToStopAt: number,
  noRoadsDistance: number,
  unkTrue: boolean,
  unkFlag: number,
  aimingFlag: number,
  firingPattern: string | number,
): void;

declare function TaskGoToCoordAndAimAtHatedEntitiesNearCoordUsingCombatStyle(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
  p10: number,
  p11: number,
  p12: number,
  p13: number,
  p14: number,
): void;

declare function TaskGoToCoordAnyMeans(
  ped: number,
  x: number,
  y: number,
  z: number,
  speed: number,
  p5: number,
  p6: boolean,
  walkingStyle: number,
  p8: number,
): void;

declare function TaskGoToCoordAnyMeansExtraParams(
  ped: number,
  x: number,
  y: number,
  z: number,
  speed: number,
  p5: number,
  p6: boolean,
  walkingStyle: number,
  p8: number,
  p9: number,
  p10: number,
  p11: number,
  p12: number,
): void;

declare function TaskGoToCoordAnyMeansExtraParamsWithCruiseSpeed(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
  p10: number,
  p11: number,
  p12: number,
  p13: number,
  p14: number,
): void;

declare function TaskGoToCoordWhileAimingAtCoord(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
  p10: number,
  p11: number,
  p12: number,
  p13: number,
  p14: number,
  p15: number,
): void;

declare function TaskGoToCoordWhileAimingAtCoordUsingCombatStyle(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
  p10: number,
  p11: number,
  p12: number,
  p13: number,
  p14: number,
  p15: number,
): void;

declare function TaskGoToCoordWhileAimingAtEntity(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
  p10: number,
  p11: number,
  p12: number,
  p13: number,
  p14: number,
): void;

declare function TaskGoToCoordWhileAimingAtEntityUsingCombatStyle(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
  p10: number,
  p11: number,
  p12: number,
  p13: number,
  p14: number,
): void;

declare function TaskGoToEntity(
  entity: number,
  target: number,
  duration: number,
  distance: number,
  speed: number,
  p5: number,
  p6: number,
): void;

declare function TaskGoToEntityWhileAimingAtEntity(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
  p10: number,
): void;

declare function TaskGoToEntityWhileAimingAtEntityUsingCombatStyle(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
  p10: number,
): void;

declare function TaskGoToWhistle(p0: number, p1: number, p2: number): void;

declare function TaskGotoEntityAiming(
  ped: number,
  target: number,
  distanceToStopAt: number,
  StartAimingDist: number,
): void;

declare function TaskGotoEntityOffset(
  ped: number,
  p1: number,
  p2: number,
  x: number,
  y: number,
  z: number,
  duration: number,
): void;

declare function TaskGotoEntityOffsetXy(
  p0: number,
  oed: number,
  duration: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: boolean,
): void;

declare function TaskGotoEntityOffsetXyAiming(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
): void;

declare function TaskGotoEntityOffsetXyzAiming(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
): void;

declare function TaskGrapple(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
): number;

declare function TaskGuard(p0: number, p1: number, p2: number): void;

declare function TaskGuardAssignedDefensiveArea(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
): void;

declare function TaskGuardAssignedDefensiveArea_2(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
): void;

declare function TaskGuardCurrentPosition(
  p0: number,
  p1: number,
  p2: number,
  p3: boolean,
): void;

declare function TaskHandsUp(
  ped: number,
  duration: number,
  facingPed: number,
  p3: number,
  p4: boolean,
): void;

declare function TaskHitchAnimal(p0: number, p1: number, p2: number): void;

declare function TaskHogtieTargetPed(p0: number, p1: number): void;

declare function TaskHogtieable(p0: number): void;

declare function TaskHorseAction(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function TaskIntimidated(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): number;

declare function TaskIntimidated_2(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
): number;

declare function TaskInvestigate(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
): void;

declare function TaskItemInteraction(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
): void;

declare function TaskItemInteraction_2(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
): void;

declare function TaskItemInteraction_3(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
): void;

declare function TaskJump(ped: number, unused: boolean): void;

declare function TaskJump_2(
  ped: number,
  x: number,
  y: number,
  z: number,
  entity: number,
): void;

declare function TaskKnockedOut(p0: number, p1: number, p2: number): void;

declare function TaskKnockedOutAndHogtied(
  p0: number,
  p1: number,
  p2: number,
): void;

declare function TaskLassoPed(p0: number, p1: number): void;

declare function TaskLeadAndConverse(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
): void;

declare function TaskLeadHorse(p0: number, p1: number): void;

declare function TaskLeaveAnyVehicle(ped: number, p1: number, p2: number): void;

declare function TaskLeaveVehicle(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function TaskLookAtCoord(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
): void;

declare function TaskLookAtEntity(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
): void;

declare function TaskLootEntity(p0: number, p1: number): void;

declare function TaskLootNearestEntity(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
): void;

declare function TaskMelee(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
): number;

declare function TaskMountAnimal(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
): void;

declare function TaskMoveBeInFormation(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
): void;

declare function TaskMoveInTraffic(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function TaskMoveInTraffic_2(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
): void;

declare function TaskMoveInTraffic_3(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): void;

declare function TaskMoveInTraffic_4(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
): void;

declare function TaskMoveNetworkAdvancedByNameWithInitParamsAttached(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
  p10: number,
  p11: number,
  p12: number,
  p13: number,
  p14: number,
  p15: number,
  p16: number,
  p17: number,
): void;

declare function TaskMoveNetworkByName(
  ped: number,
  task: string,
  multiplier: number,
  p3: boolean,
  animDict: string,
  flags: number,
): void;

declare function TaskPatrol(
  ped: number,
  p1: string,
  p2: number,
  p3: boolean,
  p4: boolean,
): void;

declare function TaskPatrol_2(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
): void;

declare function TaskPause(ped: number, ms: number): void;

declare function TaskPedSlideToCoord(
  ped: number,
  x: number,
  y: number,
  z: number,
  heading: number,
  p5: number,
): void;

declare function TaskPerformSequence(ped: number, taskSequenceId: number): void;

declare function TaskPerformSequenceFromProgress(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function TaskPerformSequence_2(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function TaskPersistentCharacter(p0: number): void;

declare function TaskPickUpWeapon(p0: number, p1: number): void;

declare function TaskPickupCarriableEntity(p0: number, p1: number): void;

declare function TaskPlaceCarriedEntityAtCoord(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
): void;

declare function TaskPlaceCarriedEntityOnMount(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function TaskPlantBomb(
  ped: number,
  x: number,
  y: number,
  z: number,
  heading: number,
): void;

declare function TaskPlayAnim(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
  p10: number,
  p11: number,
  p12: number,
): void;

declare function TaskPlayAnimAdvanced(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
  p10: number,
  p11: number,
  p12: number,
  p13: number,
  p14: number,
  p15: number,
  p16: number,
): void;

declare function TaskPlayUpperAnimFacingEntity(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
  p10: number,
  p11: number,
  p12: number,
  p13: number,
  p14: number,
): void;

declare function TaskPolice(p0: number, p1: number): number;

declare function TaskPutPedDirectlyIntoCover(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
  p10: number,
  p11: number,
  p12: number,
): void;

declare function TaskPutPedDirectlyIntoMelee(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
): void;

/**
 * Has the ped react to another entity. The reactionType determines how the ped reacts. p3 is 7.5f in the scripts. p4 is 0f. unkFlag is always 4. The rest of the parameters are unknown, but 0 is acceptable input. Here is a list of the different reaction type values by Mooshe: https://pastebin.com/Ju7BbmMt
 * @param ped :
 * @param reactingTo :
 * @param reactionType :
 * @param p3 :
 * @param p4 :
 * @param unkFlag :
 * @param p6 :
 * @param p7 :
 * @param p8 :
 */
declare function TaskReact(
  ped: number,
  reactingTo: number,
  reactionType: number,
  p3: number,
  p4: number,
  unkFlag: number,
  p6: number,
  p7: number,
  p8: number,
): void;

declare function TaskReloadWeapon(ped: number, unused: boolean): void;

declare function TaskReviveTarget(p0: number, p1: number, p2: number): void;

declare function TaskRideTrain(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function TaskRobPed(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): void;

declare function TaskScriptedAnimation(p0: number, p1: number): void;

declare function TaskSeekClearLosToEntity(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): void;

declare function TaskSeekCoverFromPed(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
): void;

declare function TaskSeekCoverFromPos(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
): void;

declare function TaskSeekCoverToCoords(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
  p10: number,
): void;

declare function TaskSeekCoverToCoverPoint(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
): void;

declare function TaskSetBlockingOfNonTemporaryEvents(
  ped: number,
  toggle: boolean,
): void;

declare function TaskSetCrouchMovement(
  ped: number,
  p1: boolean,
  p2: number,
  p3: boolean,
): void;

declare function TaskSetSphereDefensiveArea(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): void;

declare function TaskSetStealthMovement(
  ped: number,
  p1: boolean,
  p2: number,
  p3: boolean,
): void;

declare function TaskShockingEventReact(
  p0: number,
  p1: number,
  p2: number,
): void;

declare function TaskShootAtCoord(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
): void;

declare function TaskShootAtEntity(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): void;

declare function TaskShootWithWeapon(p0: number, p1: number): void;

declare function TaskShuffleToNextVehicleSeat(p0: number, p1: number): void;

declare function TaskSmartFleeCoord(
  ped: number,
  x: number,
  y: number,
  z: number,
  distance: number,
  time: number,
  p6: boolean,
  p7: boolean,
): void;

declare function TaskSmartFleePed(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
): void;

declare function TaskSmartFleeStyleCoord(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
): void;

declare function TaskSmartFleeStyleCoordVia(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
  p10: number,
  p11: number,
): void;

declare function TaskSmartFleeStylePed(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
): void;

declare function TaskSmartFleeStylePedVia(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
): void;

declare function TaskStandGuard(
  ped: number,
  x: number,
  y: number,
  z: number,
  heading: number,
  scenarioName: string,
): void;

declare function TaskStandStill(ped: number, time: number): void;

declare function TaskStartScenarioAtPosition(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
  p10: number,
  p11: number,
): void;

declare function TaskStartScenarioInPlace(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
): void;

declare function TaskStartScenarioInPlace_2(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
): void;

declare function TaskStayInCover(ped: number): void;

declare function TaskSwapFishingBait(p0: number, p1: number, p2: number): void;

declare function TaskSwapWeapon(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): void;

declare function TaskThrowProjectile(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function TaskThrowProjectile_2(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function TaskTurnPedToFaceCoord(
  ped: number,
  x: number,
  y: number,
  z: number,
  duration: number,
): void;

declare function TaskTurnPedToFaceEntity(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
): void;

declare function TaskTurnToFaceClosestPed(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function TaskUseNearestScenarioChainToCoord(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
): void;

declare function TaskUseNearestScenarioChainToCoordWarp(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
): void;

declare function TaskUseNearestScenarioToCoord(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
): void;

declare function TaskUseNearestScenarioToCoordWarp(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
): void;

declare function TaskUseNearestTrainScenarioToCoordWarp(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): void;

declare function TaskUseRandomScenarioInGroup(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): void;

declare function TaskUseScenarioPoint(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
): void;

declare function TaskUseScenarioPoint_2(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
): void;

declare function TaskVehicleAimAtCoord(
  ped: number,
  x: number,
  y: number,
  z: number,
): void;

declare function TaskVehicleAimAtPed(ped: number, target: number): void;

declare function TaskVehicleDriveToCoord(
  ped: number,
  vehicle: number,
  x: number,
  y: number,
  z: number,
  speed: number,
  p6: number,
  vehicleModel: string | number,
  drivingMode: number,
  stopRange: number,
  p10: number,
): void;

declare function TaskVehicleDriveToCoord_2(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
): void;

declare function TaskVehicleDriveToDestination(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
  p10: number,
): void;

declare function TaskVehicleDriveToDestination_2(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
): void;

declare function TaskVehicleDriveToPoint(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
): void;

declare function TaskVehicleDriveToPoint_2(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
): void;

declare function TaskVehicleDriveWander(
  ped: number,
  vehicle: number,
  speed: number,
  drivingStyle: number,
): void;

declare function TaskVehicleEscort(
  ped: number,
  vehicle: number,
  targetVehicle: number,
  mode: number,
  speed: number,
  drivingStyle: number,
  minDistance: number,
  p7: number,
  noRoadsDistance: number,
): void;

declare function TaskVehicleFollowWaypointRecording(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: number,
  p9: number,
  p10: number,
): void;

declare function TaskVehicleGotoNavmesh(
  ped: number,
  vehicle: number,
  x: number,
  y: number,
  z: number,
  speed: number,
  behaviorFlag: number,
  stoppingRange: number,
): void;

declare function TaskVehicleMission(
  p0: number,
  p1: number,
  veh: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
  p8: boolean,
): void;

declare function TaskVehicleMissionPedTarget(
  ped: number,
  vehicle: number,
  pedTarget: number,
  mode: number,
  maxSpeed: number,
  drivingStyle: number,
  minDistance: number,
  p7: number,
  p8: boolean,
): void;

declare function TaskVehicleShootAtCoord(
  ped: number,
  x: number,
  y: number,
  z: number,
  p4: number,
): void;

declare function TaskVehicleShootAtPed(
  ped: number,
  target: number,
  p2: number,
): void;

declare function TaskVehicleTempAction(
  driver: number,
  vehicle: number,
  action: number,
  time: number,
): void;

declare function TaskWalkAway(p0: number, p1: number): void;

declare function TaskWanderAndConverseWithPed(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function TaskWanderInArea(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
): void;

declare function TaskWanderInVolume(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): void;

declare function TaskWanderStandard(ped: number, p1: number, p2: number): void;

declare function TaskWanderSwim(p0: number, p1: number): void;

declare function TaskWarpPedIntoVehicle(
  ped: number,
  vehicle: number,
  seat: number,
): void;

declare function TaskWeapon(ped: number): void;

declare function TaskWhistleAnim(p0: number, p1: number, p2: number): void;

/**
 * Works in MP only.
 * @param uuid :
 */
declare function TelemetryCreateUuid(uuid: number): [boolean, number];

declare function TelemetryPlayerSpawned(ped: number): void;

declare function TerminateThisThread(): void;

declare function TerminateThread(threadId: number): void;

declare function TestProbeAgainstAllWater(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
  p7: number,
): boolean;

declare function TestVerticalProbeAgainstAllWater(
  x: number,
  y: number,
  z: number,
  p3: number,
  height?: number,
): [boolean, number];

declare function TextureDownloadGetName(p0: number): string;

declare function TextureDownloadRelease(p0: number): void;

declare function TextureDownloadRequest(
  FilePath: string,
  Name: string,
  p3: boolean,
): [number, number];

declare function Timera(): number;

declare function Timerb(): number;

declare function Timestep(): number;

declare function ToFloat(value: number): number;

declare function TogglePausedRenderphases(toggle: boolean): void;

declare function TrackObjectVisibility(object: number): void;

declare function TrackVehicleVisibility(vehicle: number): void;

/**
 * The backing function for TriggerEvent.
 * @param eventName
 * @param eventPayload
 * @param payloadLength
 */
declare function TriggerEventInternal(
  eventName: string,
  eventPayload: string,
  payloadLength: number,
): void;

/**
 * The backing function for TriggerEvent.
 */
declare function TriggerEventInternal(
  eventName: string,
  eventPayload: string,
  payloadLength: number,
): void;

/**
 * The backing function for TriggerLatentServerEvent.
 * @param eventName
 * @param eventPayload
 * @param payloadLength
 * @param bps
 */
declare function TriggerLatentServerEventInternal(
  eventName: string,
  eventPayload: string,
  payloadLength: number,
  bps: number,
): void;

/**
 * The backing function for TriggerLatentServerEvent.
 */
declare function TriggerLatentServerEventInternal(
  eventName: string,
  eventPayload: string,
  payloadLength: number,
  bps: number,
): void;

declare function TriggerMusicEvent(eventName: string): boolean;

declare function TriggerScriptEvent(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): void;

/**
 * The backing function for TriggerServerEvent.
 * @param eventName
 * @param eventPayload
 * @param payloadLength
 */
declare function TriggerServerEventInternal(
  eventName: string,
  eventPayload: string,
  payloadLength: number,
): void;

/**
 * The backing function for TriggerServerEvent.
 */
declare function TriggerServerEventInternal(
  eventName: string,
  eventPayload: string,
  payloadLength: number,
): void;

declare function TriggerSonarBlip(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function UgcGetCachedDescription(p0: number, length: number): string;

declare function UgcIsLanguageSupported(languageId: number): boolean;

declare function UgcQueryByContentId(
  contentId: string,
  latestVersion: boolean,
  contentTypeName: string,
): boolean;

declare function UgcRequestCachedDescription(p0: number): number;

declare function UgcRequestContentDataFromParams(
  contentTypeName: string,
  contentId: string,
  p2: number,
  p3: number,
  p4: number,
): number;

declare function UgcTextureDownloadRequest(
  p1: number,
  p2: number,
  p3: number,
  p5: boolean,
): [number, number, number];

declare function UiIsSingleplayerPauseMenuActive(): boolean;

declare function UiappRequestTransitionByHash(p0: number, p1: number): number;

declare function UncuffPed(ped: number): void;

declare function UnlockIsLootable(unlockHash: string | number): boolean;

declare function UnlockIsNew(unlockHash: string | number): boolean;

declare function UnlockIsUnlockFlagSet(
  unlockHash: string | number,
  flag: number,
): boolean;

declare function UnlockIsUnlocked(unlockHash: string | number): boolean;

declare function UnlockIsVisible(unlockHash: string | number): boolean;

declare function UnlockMinimapAngle(): void;

declare function UnlockSetNew(
  unlockHash: string | number,
  toggle: boolean,
): void;

declare function UnlockSetUnlocked(
  unlockHash: string | number,
  toggle: boolean,
): void;

declare function UnlockSetVisible(
  unlockHash: string | number,
  toggle: boolean,
): void;

declare function UnpinInterior(interior: number): void;

/**
 * Will unregister and cleanup a registered NUI callback handler.
 * Use along side the REGISTER_RAW_NUI_CALLBACK native.
 * @param callbackType The callback type to target
 */
declare function UnregisterRawNuiCallback(callbackType: string): void;

declare function UnregisterScriptWithAudio(): void;

declare function UpdateLightsOnEntity(entity: number): void;

declare function UpdateOnscreenKeyboard(): number;

declare function UpdateTaskHandsUpDuration(ped: number, duration: number): void;

declare function UseParticleFxAsset(name: string): void;

declare function UsePlayerColourInsteadOfTeamColour(toggle: boolean): void;

declare function UseWaypointRecordingAsAssistedMovementRoute(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): void;

declare function Vdist(
  x1: number,
  y1: number,
  z1: number,
  x2: number,
  y2: number,
  z2: number,
): number;

declare function Vdist2(
  x1: number,
  y1: number,
  z1: number,
  x2: number,
  y2: number,
  z2: number,
): number;

declare function VehToNet(vehicle: number): number;

declare function VehicleWaypointPlaybackGetIsPaused(p0: number): number;

declare function VehicleWaypointPlaybackOverrideSpeed(
  vehicle: number,
  speed: number,
): void;

declare function VehicleWaypointPlaybackPause(vehicle: number): void;

declare function VehicleWaypointPlaybackResume(vehicle: number): void;

declare function VehicleWaypointPlaybackUseDefaultSpeed(vehicle: number): void;

declare function VirtualCollectionExists(p0: number): number;

declare function VirtualCollectionItemAdd(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function VirtualCollectionReset(p0: number): void;

declare function VirtualCollectionSetInterestIndex(
  p0: number,
  p1: number,
): void;

declare function VirtualCollectionSetSize(p0: number, p1: number): void;

declare function Vmag(x: number, y: number, z: number): number;

declare function Vmag2(x: number, y: number, z: number): number;

declare function Wait(ms: number): void;

/**
 * Returns whether or not the currently executing event was canceled.
 * @return A boolean.
 */
declare function WasEventCanceled(): boolean;

/**
 * Returns whether or not the currently executing event was canceled.
 * @return A boolean.
 */
declare function WasEventCanceled(): boolean;

declare function WasPedSkeletonUpdated(ped: number): boolean;

declare function WaypointPlaybackGetIsAiming(p0: number): number;

declare function WaypointPlaybackGetIsPaused(p0: number): boolean;

declare function WaypointPlaybackGetIsShooting(p0: number): number;

declare function WaypointPlaybackOverrideSpeed(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): void;

declare function WaypointPlaybackPause(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function WaypointPlaybackResume(
  p0: number,
  p1: boolean,
  p2: number,
  p3: number,
): void;

declare function WaypointPlaybackStartAimingAtCoord(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
): void;

declare function WaypointPlaybackStartAimingAtEntity(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function WaypointPlaybackStartAimingAtPed(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): void;

declare function WaypointPlaybackStartShootingAtCoord(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
  p5: number,
  p6: number,
): void;

declare function WaypointPlaybackStartShootingAtEntity(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): void;

declare function WaypointPlaybackStartShootingAtPed(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): void;

declare function WaypointPlaybackStopAimingOrShooting(p0: number): void;

declare function WaypointPlaybackUseDefaultSpeed(p0: number): void;

declare function WaypointRecordingGetClosestWaypoint(
  name: string,
  x: number,
  y: number,
  z: number,
  point?: number,
): [boolean, number];

declare function WaypointRecordingGetCoord(
  name: string,
  point: number,
): [boolean, number[]];

declare function WaypointRecordingGetNumPoints(
  name: string,
  points?: number,
): [boolean, number];

declare function WaypointRecordingGetSpeedAtPoint(
  name: string,
  point: number,
): number;

declare function WeeklyCollectibleGetItemInSet(
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  p4: number,
): number;

declare function WeeklyCollectibleGetItemSetBuyAward(
  p0: number,
  p1: number,
): number;

declare function WeeklyCollectibleGetItemSetLabel(
  p0: number,
  p1: number,
): number;

declare function WeeklyCollectibleGetNumItemsInSet(
  p0: number,
  p1: number,
): number;

declare function WeeklyCollectibleGetNumSets(p0: number): number;

declare function WouldEntityBeOccluded(
  entityModelHash: string | number,
  x: number,
  y: number,
  z: number,
  p4: boolean,
)
