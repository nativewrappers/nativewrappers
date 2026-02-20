/**
 * Adds a rectangular blip for the specified coordinates/area.
 * It is recommended to use [SET_BLIP_ROTATION](#\_0xF87683CDF73C3F6E) and [SET_BLIP_COLOUR](#\_0x03D7FB09E75D6B7E) to make the blip not rotate along with the camera.
 * By default, the blip will show as a *regular* blip with the specified color/sprite if it is outside of the minimap view.
 * Example image:
 * ![minimap](https://i.imgur.com/qLbXWcQ.png)
 * ![big map](https://i.imgur.com/0j7O7Rh.png)
 * (Native name is *likely* to actually be ADD_BLIP_FOR_AREA, but due to the usual reasons this can't be confirmed)
 * @param x The X coordinate of the center of the blip.
 * @param y The Y coordinate of the center of the blip.
 * @param z The Z coordinate of the center of the blip.
 * @param width The width of the blip.
 * @param height The height of the blip.
 * @return A handle to the blip.
 */
declare function AddBlipForArea(x: number, y: number, z: number, width: number, height: number): number;
/**
 * Adds a rectangular blip for the specified coordinates/area.
 * It is recommended to use [SET_BLIP_ROTATION](#\_0xF87683CDF73C3F6E) and [SET_BLIP_COLOUR](#\_0x03D7FB09E75D6B7E) to make the blip not rotate along with the camera.
 * By default, the blip will show as a *regular* blip with the specified color/sprite if it is outside of the minimap view.
 * Example image:
 * ![minimap](https://i.imgur.com/qLbXWcQ.png)
 * ![big map](https://i.imgur.com/0j7O7Rh.png)
 * (Native name is *likely* to actually be ADD_BLIP_FOR_AREA, but due to the usual reasons this can't be confirmed)
 * @param x The X coordinate of the center of the blip.
 * @param y The Y coordinate of the center of the blip.
 * @param z The Z coordinate of the center of the blip.
 * @param width The width of the blip.
 * @param height The height of the blip.
 * @return A handle to the blip.
 */
declare function N_0xce5d0e5e315db238(x: number, y: number, z: number, width: number, height: number): number;

/**
 * Creates a blip for the specified coordinates. You can use `SET_BLIP_` natives to change the blip.
 * @param x The X coordinate to create the blip on.
 * @param y The Y coordinate.
 * @param z The Z coordinate.
 * @return A blip handle.
 */
declare function AddBlipForCoord(x: number, y: number, z: number): number;

/**
 * Create a blip that by default is red (enemy), you can use [SET_BLIP_AS_FRIENDLY](#\_0xC6F43D0E) to make it blue (friend).\
 * Can be used for objects, vehicles and peds.
 * Example of enemy:
 * ![enemy](https://i.imgur.com/fl78svv.png)
 * Example of friend:
 * ![friend](https://i.imgur.com/Q16ho5d.png)
 * @param entity The entity handle to create the blip.
 * @return A blip handle.
 */
declare function AddBlipForEntity(entity: number): number;

/**
 * Create a blip with a radius for the specified coordinates (it doesnt create the blip sprite, so you need to use [AddBlipCoords](#\_0xC6F43D0E))
 * Example image:
 * ![example](https://i.imgur.com/9hQl3DB.png)
 * @param posX The x position of the blip (you can also send a vector3 instead of the bulk coordinates)
 * @param posY The y position of the blip (you can also send a vector3 instead of the bulk coordinates)
 * @param posZ The z position of the blip (you can also send a vector3 instead of the bulk coordinates)
 * @param radius The number that defines the radius of the blip circle
 * @return The blip handle that can be manipulated with every `SetBlip` natives
 */
declare function AddBlipForRadius(posX: number, posY: number, posZ: number, radius: number): number;

/**
 * Adds a listener for Console Variable changes.
 * The function called expects to match the following signature:
 * ```ts
 * function ConVarChangeListener(conVarName: string, reserved: any);
 * ```
 * *   **conVarName**: The ConVar that changed.
 * *   **reserved**: Currently unused.
 * @param conVarFilter The Console Variable to listen for, this can be a pattern like "test:\*", or null for any
 * @param handler The handler function.
 * @return A cookie to remove the change handler.
 */
declare function AddConvarChangeListener(conVarFilter: string, handler: Function): number;

/**
 * Applies an Item from a PedDecorationCollection to a ped. These include tattoos and shirt decals.
 * collection - PedDecorationCollection filename hash
 * overlay - Item name hash
 * Example:
 * Entry inside "mpbeach_overlays.xml" -
 * <Item>
 * <uvPos x="0.500000" y="0.500000" />
 * <scale x="0.600000" y="0.500000" />
 * <rotation value="0.000000" />
 * <nameHash>FM_Hair_Fuzz</nameHash>
 * <txdHash>mp_hair_fuzz</txdHash>
 * <txtHash>mp_hair_fuzz</txtHash>
 * <zone>ZONE_HEAD</zone>
 * <type>TYPE_TATTOO</type>
 * <faction>FM</faction>
 * <garment>All</garment>
 * <gender>GENDER_DONTCARE</gender>
 * <award />
 * <awardLevel />
 * </Item>
 * Code:
 * PED::_0x5F5D1665E352A839(PLAYER::PLAYER_PED_ID(), MISC::GET_HASH_KEY("mpbeach_overlays"), MISC::GET_HASH_KEY("fm_hair_fuzz"))
 */
declare function AddPedDecorationFromHashes(ped: number, collection: string | number, overlay: string | number): void;
/**
 * Applies an Item from a PedDecorationCollection to a ped. These include tattoos and shirt decals.
 * collection - PedDecorationCollection filename hash
 * overlay - Item name hash
 * Example:
 * Entry inside "mpbeach_overlays.xml" -
 * <Item>
 * <uvPos x="0.500000" y="0.500000" />
 * <scale x="0.600000" y="0.500000" />
 * <rotation value="0.000000" />
 * <nameHash>FM_Hair_Fuzz</nameHash>
 * <txdHash>mp_hair_fuzz</txdHash>
 * <txtHash>mp_hair_fuzz</txtHash>
 * <zone>ZONE_HEAD</zone>
 * <type>TYPE_TATTOO</type>
 * <faction>FM</faction>
 * <garment>All</garment>
 * <gender>GENDER_DONTCARE</gender>
 * <award />
 * <awardLevel />
 * </Item>
 * Code:
 * PED::_0x5F5D1665E352A839(PLAYER::PLAYER_PED_ID(), MISC::GET_HASH_KEY("mpbeach_overlays"), MISC::GET_HASH_KEY("fm_hair_fuzz"))
 */
declare function ApplyPedOverlay(ped: number, collection: string | number, overlay: string | number): void;
/**
 * Applies an Item from a PedDecorationCollection to a ped. These include tattoos and shirt decals.
 * collection - PedDecorationCollection filename hash
 * overlay - Item name hash
 * Example:
 * Entry inside "mpbeach_overlays.xml" -
 * <Item>
 * <uvPos x="0.500000" y="0.500000" />
 * <scale x="0.600000" y="0.500000" />
 * <rotation value="0.000000" />
 * <nameHash>FM_Hair_Fuzz</nameHash>
 * <txdHash>mp_hair_fuzz</txdHash>
 * <txtHash>mp_hair_fuzz</txtHash>
 * <zone>ZONE_HEAD</zone>
 * <type>TYPE_TATTOO</type>
 * <faction>FM</faction>
 * <garment>All</garment>
 * <gender>GENDER_DONTCARE</gender>
 * <award />
 * <awardLevel />
 * </Item>
 * Code:
 * PED::_0x5F5D1665E352A839(PLAYER::PLAYER_PED_ID(), MISC::GET_HASH_KEY("mpbeach_overlays"), MISC::GET_HASH_KEY("fm_hair_fuzz"))
 */
declare function SetPedDecoration(ped: number, collection: string | number, overlay: string | number): void;

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
 * If bagName refers to an entity, use [GET_ENTITY_FROM_STATE_BAG_NAME](?\_0x4BDF1868) to get the entity handle
 * If bagName refers to a player, use [GET_PLAYER_FROM_STATE_BAG_NAME](?\_0xA56135E0) to get the player handle
 * @param keyFilter The key to check for, or null for no filter.
 * @param bagFilter The bag ID to check for such as `entity:65535`, or null for no filter.
 * @param handler The handler function.
 * @return A cookie to remove the change handler.
 */
declare function AddStateBagChangeHandler(keyFilter: string, bagFilter: string, handler: Function): number;

/**
 * Applies a force to the specified entity.
 * ```cpp
 * enum eForceType
 * {
 * MinForce = 0,
 * MaxForceRot = 1,
 * MinForce2 = 2,
 * MaxForceRot2 = 3,
 * ForceNoRot = 4,
 * ForceRotPlusForce = 5
 * }
 * ```
 * Research/documentation on the gtaforums can be found [here](https://gtaforums.com/topic/885669-precisely-define-object-physics/) and [here](https://gtaforums.com/topic/887362-apply-forces-and-momentums-to-entityobject/).
 * @param entity The entity you want to apply a force on
 * @param forceType Refer to `eForceType`
 * @param x Force amount (X)
 * @param y Force amount (Y)
 * @param z Force amount (Z)
 * @param offX Rotation/offset force (X)
 * @param offY Rotation/offset force (Y)
 * @param offZ Rotation/offset force (Z)
 * @param boneIndex (Often 0) Entity bone index
 * @param isDirectionRel (Usually false) Vector defined in local (body-fixed) coordinate frame
 * @param ignoreUpVec (Usually true)
 * @param isForceRel (Usually true) When true, force gets multiplied with the objects mass and different objects will have the same acceleration
 * @param p12 (Usually false)
 * @param p13 (Usually true)
 */
declare function ApplyForceToEntity(entity: number, forceType: number, x: number, y: number, z: number, offX: number, offY: number, offZ: number, boneIndex: number, isDirectionRel: boolean, ignoreUpVec: boolean, isForceRel: boolean, p12: boolean, p13: boolean): void;

/**
 * Returns whether or not the specified player has enough information to start a commerce session for.
 * @param playerSrc The player handle
 * @return True or false.
 */
declare function CanPlayerStartCommerceSession(playerSrc: string): boolean;

/**
 * Cancels the currently executing event.
 */
declare function CancelEvent(): void;

/**
 * CLEAR_PED_PROP
 * @param ped The ped handle.
 * @param propId The prop id you want to clear from the ped. Refer to [SET_PED_PROP_INDEX](#\_0x93376B65A266EB5F).
 */
declare function ClearPedProp(ped: number, propId: number): void;

/**
 * CLEAR_PED_SECONDARY_TASK
 */
declare function ClearPedSecondaryTask(ped: number): void;

/**
 * Clear a ped's tasks. Stop animations and other tasks created by scripts.
 * @param ped Ped id. Use PlayerPedId() for your own character.
 */
declare function ClearPedTasks(ped: number): void;

/**
 * Immediately stops the pedestrian from whatever it's doing. The difference between this and [CLEAR_PED_TASKS](#\_0xE1EF3C1216AFF2CD) is that this one teleports the ped but does not change the position of the ped.
 * @param ped Ped id.
 */
declare function ClearPedTasksImmediately(ped: number): void;

/**
 * This executes at the same as speed as PLAYER::SET_PLAYER_WANTED_LEVEL(player, 0, false);
 * PLAYER::GET_PLAYER_WANTED_LEVEL(player); executes in less than half the time. Which means that it's worth first checking if the wanted level needs to be cleared before clearing. However, this is mostly about good code practice and can important in other situations. The difference in time in this example is negligible.
 */
declare function ClearPlayerWantedLevel(player: string): void;

/**
 * Creates an object (prop) with the specified model at the specified position, offset on the Z axis by the radius of the object's model.
 * This object will initially be owned by the creating script as a mission entity, and the model should be loaded already (e.g. using REQUEST_MODEL).
 * @param modelHash The model to spawn.
 * @param x Spawn coordinate X component.
 * @param y Spawn coordinate Y component.
 * @param z Spawn coordinate Z component, 'ground level'.
 * @param isNetwork Whether to create a network object for the object. If false, the object exists only locally.
 * @param netMissionEntity Whether to register the object as pinned to the script host in the R\* network model.
 * @param doorFlag False to create a door archetype (archetype flag bit 26 set) as a door. Required to be set to true to create door models in network mode.
 * @return A script handle (fwScriptGuid index) for the object, or `0` if the object failed to be created.
 */
declare function CreateObject(modelHash: string | number, x: number, y: number, z: number, isNetwork: boolean, netMissionEntity: boolean, doorFlag: boolean): number;

/**
 * Creates an object (prop) with the specified model centered at the specified position.
 * This object will initially be owned by the creating script as a mission entity, and the model should be loaded already (e.g. using REQUEST_MODEL).
 * @param modelHash The model to spawn.
 * @param x Spawn coordinate X component.
 * @param y Spawn coordinate Y component.
 * @param z Spawn coordinate Z component.
 * @param isNetwork Whether to create a network object for the object. If false, the object exists only locally.
 * @param netMissionEntity Whether to register the object as pinned to the script host in the R\* network model.
 * @param doorFlag False to create a door archetype (archetype flag bit 26 set) as a door. Required to be set to true to create door models in network mode.
 * @return A script handle (fwScriptGuid index) for the object, or `0` if the object failed to be created.
 */
declare function CreateObjectNoOffset(modelHash: string | number, x: number, y: number, z: number, isNetwork: boolean, netMissionEntity: boolean, doorFlag: boolean): number;

/**
 * Creates a ped (biped character, pedestrian, actor) with the specified model at the specified position and heading.
 * This ped will initially be owned by the creating script as a mission entity, and the model should be loaded already
 * (e.g. using REQUEST_MODEL).
 * @param pedType Unused. Peds get set to CIVMALE/CIVFEMALE/etc. no matter the value specified.
 * @param modelHash The model of ped to spawn.
 * @param x Spawn coordinate X component.
 * @param y Spawn coordinate Y component.
 * @param z Spawn coordinate Z component.
 * @param heading Heading to face towards, in degrees.
 * @param isNetwork Whether to create a network object for the ped. If false, the ped exists only locally.
 * @param bScriptHostPed Whether to register the ped as pinned to the script host in the R\* network model.
 * @return A script handle (fwScriptGuid index) for the ped, or `0` if the ped failed to be created.
 */
declare function CreatePed(pedType: number, modelHash: string | number, x: number, y: number, z: number, heading: number, isNetwork: boolean, bScriptHostPed: boolean): number;

/**
 * CREATE_PED_INSIDE_VEHICLE
 * @param pedType See [`CREATE_PED`](#\_0xD49F9B0955C367DE)
 */
declare function CreatePedInsideVehicle(vehicle: number, pedType: number, modelHash: string | number, seat: number, isNetwork: boolean, bScriptHostPed: boolean): number;

/**
 * Creates a vehicle with the specified model at the specified position. This vehicle will initially be owned by the creating
 * script as a mission entity, and the model should be loaded already (e.g. using REQUEST_MODEL).
 * ```
 * NativeDB Added Parameter 8: BOOL p7
 * ```
 * @param modelHash The model of vehicle to spawn.
 * @param x Spawn coordinate X component.
 * @param y Spawn coordinate Y component.
 * @param z Spawn coordinate Z component.
 * @param heading Heading to face towards, in degrees.
 * @param isNetwork Whether to create a network object for the vehicle. If false, the vehicle exists only locally.
 * @param netMissionEntity Whether to register the vehicle as pinned to the script host in the R\* network model.
 * @return A script handle (fwScriptGuid index) for the vehicle, or `0` if the vehicle failed to be created.
 */
declare function CreateVehicle(modelHash: string | number, x: number, y: number, z: number, heading: number, isNetwork: boolean, netMissionEntity: boolean): number;

/**
 * Equivalent to CREATE_VEHICLE, but it uses 'server setter' logic (like the former CREATE_AUTOMOBILE) as a workaround for
 * reliability concerns regarding entity creation RPC.
 * Unlike CREATE_AUTOMOBILE, this supports other vehicle types as well.
 * @param modelHash The model of vehicle to spawn.
 * @param type The appropriate vehicle type for the model info. Can be one of `automobile`, `bike`, `boat`, `heli`, `plane`, `submarine`, `trailer`, and (potentially), `train`. This should be the same type as the `type` field in `vehicles.meta`.
 * @param x Spawn coordinate X component.
 * @param y Spawn coordinate Y component.
 * @param z Spawn coordinate Z component.
 * @param heading Heading to face towards, in degrees.
 * @return A script handle for the vehicle, or 0 if the vehicle failed to be created.
 */
declare function CreateVehicleServerSetter(modelHash: string | number, _type: string, x: number, y: number, z: number, heading: number): number;

/**
 * Deletes the specified entity.
 * **NOTE**: For trains this will only work if called on the train engine, it will not work on its carriages.
 * @param entity The entity to delete.
 */
declare function DeleteEntity(entity: number): void;

/**
 * DELETE_FUNCTION_REFERENCE
 */
declare function DeleteFunctionReference(referenceIdentity: string): void;

/**
 * DELETE_RESOURCE_KVP
 * @param key The key to delete
 */
declare function DeleteResourceKvp(key: string): void;

/**
 * Nonsynchronous [DELETE_RESOURCE_KVP](#\_0x7389B5DF) operation; see [FLUSH_RESOURCE_KVP](#\_0x5240DA5A).
 * @param key The key to delete
 */
declare function DeleteResourceKvpNoSync(key: string): void;

/**
 * Deletes the specified `entity` and any carriage its attached to, or that is attached to it.
 * @param entity The carriage to delete.
 */
declare function DeleteTrain(entity: number): void;

/**
 * DOES_BOAT_SINK_WHEN_WRECKED
 * @param vehicle The target vehicle.
 * @return Returns whether or not the boat sinks when wrecked.
 */
declare function DoesBoatSinkWhenWrecked(vehicle: number): boolean;

/**
 * DOES_ENTITY_EXIST
 */
declare function DoesEntityExist(entity: number): boolean;

/**
 * Returns whether or not the player exists
 * @return True if the player exists, false otherwise
 */
declare function DoesPlayerExist(playerSrc: string): boolean;

/**
 * Requests whether or not the player owns the specified SKU.
 * @param playerSrc The player handle
 * @param skuId The ID of the SKU.
 * @return A boolean.
 */
declare function DoesPlayerOwnSku(playerSrc: string, skuId: number): boolean;

/**
 * Requests whether or not the player owns the specified package.
 * @param playerSrc The player handle
 * @param skuId The package ID on Tebex.
 * @return A boolean.
 */
declare function DoesPlayerOwnSkuExt(playerSrc: string, skuId: number): boolean;

/**
 * DROP_PLAYER
 */
declare function DropPlayer(playerSrc: string, reason: string): void;

/**
 * DUPLICATE_FUNCTION_REFERENCE
 */
declare function DuplicateFunctionReference(referenceIdentity: string): string;

/**
 * ENABLE_ENHANCED_HOST_SUPPORT
 */
declare function EnableEnhancedHostSupport(enabled: boolean): void;

/**
 * END_FIND_KVP
 * @param handle The KVP find handle returned from [START_FIND_KVP](#\_0xDD379006)
 * @return None.
 */
declare function EndFindKvp(handle: number): void;

/**
 * Internal function for ensuring an entity has a state bag.
 */
declare function EnsureEntityStateBag(entity: number): void;

/**
 * EXECUTE_COMMAND
 */
declare function ExecuteCommand(commandString: string): void;

/**
 * FIND_KVP
 * @param handle The KVP find handle returned from [START_FIND_KVP](#\_0xDD379006)
 * @return None.
 */
declare function FindKvp(handle: number): string;

/**
 * FLAG_SERVER_AS_PRIVATE
 */
declare function FlagServerAsPrivate(private_: boolean): void;

/**
 * Nonsynchronous operations will not wait for a disk/filesystem flush before returning from a write or delete call. They will be much faster than their synchronous counterparts (e.g., bulk operations), however, a system crash may lose the data to some recent operations.
 * This native ensures all `_NO_SYNC` operations are synchronized with the disk/filesystem.
 */
declare function FlushResourceKvp(): void;

/**
 * Freezes or unfreezes an entity preventing its coordinates to change by the player if set to `true`. You can still change the entity position using [`SET_ENTITY_COORDS`](#\_0x06843DA7060A026B).
 * @param entity The entity to freeze/unfreeze.
 * @param toggle Freeze or unfreeze entity.
 */
declare function FreezeEntityPosition(entity: number, toggle: boolean): void;

/**
 * GET_AIR_DRAG_MULTIPLIER_FOR_PLAYERS_VEHICLE
 * @param playerSrc The player handle
 */
declare function GetAirDragMultiplierForPlayersVehicle(playerSrc: string): number;

/**
 * Returns all object handles known to the server.
 * The data returned adheres to the following layout:
 * ```
 * [127, 42, 13, 37]
 * ```
 * @return An object containing a list of object handles.
 */
declare function GetAllObjects(): any;

/**
 * Returns all peds handles known to the server.
 * The data returned adheres to the following layout:
 * ```
 * [127, 42, 13, 37]
 * ```
 * @return An object containing a list of peds handles.
 */
declare function GetAllPeds(): any;

/**
 * Returns all vehicle handles known to the server.
 * The data returned adheres to the following layout:
 * ```
 * [127, 42, 13, 37]
 * ```
 * @return An object containing a list of vehicle handles.
 */
declare function GetAllVehicles(): any;

declare function GetBlipSprite(self: number): number;

/**
 * Returns the current console output buffer.
 * @return The most recent game console output, as a string.
 */
declare function GetConsoleBuffer(): string;

/**
 * Can be used to get a console variable of type `char*`, for example a string.
 * @param varName The console variable to look up.
 * @param default_ The default value to set if none is found.
 * @return Returns the convar value if it can be found, otherwise it returns the assigned `default`.
 */
declare function GetConvar(varName: string, default_: string): string;

/**
 * Can be used to get a console variable casted back to `bool`.
 * @param varName The console variable to look up.
 * @param defaultValue The default value to set if none is found.
 * @return Returns the convar value if it can be found, otherwise it returns the assigned `default`.
 */
declare function GetConvarBool(varName: string, defaultValue: boolean): boolean;

/**
 * This will have floating point inaccuracy.
 * @param varName The console variable to get
 * @param defaultValue The default value to set, if none are found.
 * @return Returns the value set in varName, or `default` if none are specified
 */
declare function GetConvarFloat(varName: string, defaultValue: number): number;

/**
 * Can be used to get a console variable casted back to `int` (an integer value).
 * @param varName The console variable to look up.
 * @param default_ The default value to set if none is found (variable not set using [SET_CONVAR](#\_0x341B16D2), or not accessible).
 * @return Returns the convar value if it can be found, otherwise it returns the assigned `default`.
 */
declare function GetConvarInt(varName: string, default_: number): number;

/**
 * Returns the hash of weapon the Ped is currently using.
 * @param ped The target ped.
 * @return The weapon hash.
 */
declare function GetCurrentPedWeapon(ped: number): number;

/**
 * Returns the name of the currently executing resource.
 * @return The name of the resource.
 */
declare function GetCurrentResourceName(): string;

/**
 * Gets the entity that this entity is attached to.
 * @param entity The entity to check.
 * @return The attached entity handle. 0 returned if the entity is not attached.
 */
declare function GetEntityAttachedTo(entity: number): number;

/**
 * GET_ENTITY_COLLISION_DISABLED
 * @param entity The target entity.
 * @return Returns whether or not entity collisions are disabled.
 */
declare function GetEntityCollisionDisabled(entity: number): boolean;

/**
 * Gets the current coordinates for a specified entity. This native is used server side when using OneSync.
 * See [GET_ENTITY_COORDS](#\_0x3FEF770D40960D5A) for client side.
 * @param entity The entity to get the coordinates from.
 * @return The current entity coordinates.
 */
declare function GetEntityCoords(entity: number): number[];

/**
 * Returns the entity handle for the specified state bag name. For use with [ADD_STATE_BAG_CHANGE_HANDLER](?\_0x5BA35AAF).
 * @param bagName An internal state bag ID from the argument to a state bag change handler.
 * @return The entity handle or 0 if the state bag name did not refer to an entity, or the entity does not exist.
 */
declare function GetEntityFromStateBagName(bagName: string): number;

/**
 * GET_ENTITY_HEADING
 */
declare function GetEntityHeading(entity: number): number;

/**
 * Only works for vehicle and peds
 * @param entity The entity to check the health of
 * @return If the entity is a vehicle it will return 0-1000
If the entity is a ped it will return 0-200
If the entity is an object it will return 0
 */
declare function GetEntityHealth(entity: number): number;

/**
 * Currently it only works with peds.
 */
declare function GetEntityMaxHealth(entity: number): number;

/**
 * GET_ENTITY_MODEL
 */
declare function GetEntityModel(entity: number): number;

/**
 * GET_ENTITY_ORPHAN_MODE
 * @param entity The entity to get the orphan mode of
 * @return Returns the entities current orphan mode, refer to enum in [SET_ENTITY_ORPHAN_MODE](#\_0x489E9162)
 */
declare function GetEntityOrphanMode(entity: number): number;

/**
 * This native gets an entity's population type.
 * @param entity the entity to obtain the population type from
 * @return Returns the population type ID, defined by the below enumeration:```cpp
enum ePopulationType
{
	POPTYPE_UNKNOWN = 0,
	POPTYPE_RANDOM_PERMANENT,
	POPTYPE_RANDOM_PARKED,
	POPTYPE_RANDOM_PATROL,
	POPTYPE_RANDOM_SCENARIO,
	POPTYPE_RANDOM_AMBIENT,
	POPTYPE_PERMANENT,
	POPTYPE_MISSION,
	POPTYPE_REPLAY,
	POPTYPE_CACHE,
	POPTYPE_TOOL
};
```
 */
declare function GetEntityPopulationType(entity: number): number;

/**
 * GET_ENTITY_ROTATION
 */
declare function GetEntityRotation(entity: number): number[];

/**
 * GET_ENTITY_ROTATION_VELOCITY
 */
declare function GetEntityRotationVelocity(entity: number): number[];

/**
 * Gets the routing bucket for the specified entity.
 * Routing buckets are also known as 'dimensions' or 'virtual worlds' in past echoes, however they are population-aware.
 * @param entity The entity to get the routing bucket for.
 * @return The routing bucket ID.
 */
declare function GetEntityRoutingBucket(entity: number): number;

/**
 * GET_ENTITY_SCRIPT
 */
declare function GetEntityScript(entity: number): string;

/**
 * Gets the current speed of the entity in meters per second.
 * ```
 * To convert to MPH: speed * 2.236936
 * To convert to KPH: speed * 3.6
 * ```
 * @param entity The entity to get the speed of
 * @return The speed of the entity in meters per second
 */
declare function GetEntitySpeed(entity: number): number;

/**
 * Gets the entity type (as an integer), which can be one of the following defined down below:
 * **The following entities will return type `1`:**
 * *   Ped
 * *   Player
 * *   Animal (Red Dead Redemption 2)
 * *   Horse (Red Dead Redemption 2)
 * **The following entities will return type `2`:**
 * *   Automobile
 * *   Bike
 * *   Boat
 * *   Heli
 * *   Plane
 * *   Submarine
 * *   Trailer
 * *   Train
 * *   DraftVeh (Red Dead Redemption 2)
 * **The following entities will return type `3`:**
 * *   Object
 * *   Door
 * *   Pickup
 * Otherwise, a value of `0` will be returned.
 * @param entity The entity to get the type of.
 * @return The entity type returned as an integer value.
 */
declare function GetEntityType(entity: number): number;

/**
 * GET_ENTITY_VELOCITY
 */
declare function GetEntityVelocity(entity: number): number[];

/**
 * Returns the internal build number of the current game being executed.
 * Possible values:
 * *   FiveM
 * *   1604
 * *   2060
 * *   2189
 * *   2372
 * *   2545
 * *   2612
 * *   2699
 * *   2802
 * *   2944
 * *   3095
 * *   3258
 * *   3323
 * *   3407
 * *   RedM
 * *   1311
 * *   1355
 * *   1436
 * *   1491
 * *   LibertyM
 * *   43
 * *   FXServer
 * *   0
 * @return The build number, or **0** if no build number is known.
 */
declare function GetGameBuildNumber(): number;

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
 * Returns a list of entity handles (script GUID) for all entities in the specified pool - the data returned is an array as
 * follows:
 * ```json
 * [ 770, 1026, 1282, 1538, 1794, 2050, 2306, 2562, 2818, 3074, 3330, 3586, 3842, 4098, 4354, 4610, ...]
 * ```
 * ### Supported pools
 * *   `CPed`: Peds (including animals) and players.
 * *   `CObject`: Objects (props), doors, and projectiles.
 * *   `CNetObject`: Networked objects
 * *   `CVehicle`: Vehicles.
 * *   `CPickup`: Pickups.
 * @param poolName The pool name to get a list of entities from.
 * @return An array containing entity handles for each entity in the named pool.
 */
declare function GetGamePool(poolName: string): any;

/**
 * Gets the current game timer in milliseconds.
 * @return The game time.
 */
declare function GetGameTimer(): number;

/**
 * This native converts the passed string to a hash.
 */
declare function GetHashKey(model: string): number;

/**
 * **Note** This native will always return `1000.0` unless [SET_VEHICLE_BODY_HEALTH](#\_0xB77D05AC8C78AADB), [SET_VEHICLE_ENGINE_HEALTH](#\_0x45F6D8EEF34ABEF1), or [SET_VEHICLE_PETROL_TANK_HEALTH](#\_0x70DB57649FA8D0D8) have been called with a value greater than `1000.0`.
 * @param heli The helicopter to check
 * @return Returns the current health of the helicopter's body.
 */
declare function GetHeliBodyHealth(heli: number): number;

/**
 * This is a getter for [SET_DISABLE_HELI_EXPLODE_FROM_BODY_DAMAGE](#\_0xEDBC8405B3895CC9)
 * @param heli The helicopter to check
 * @return Returns `true` if the helicopter is set to be protected from exploding due to minor body damage, `false` otherwise.
 */
declare function GetHeliDisableExplodeFromBodyDamage(heli: number): boolean;

/**
 * **Note** This native will always return `1000.0` unless [SET_VEHICLE_BODY_HEALTH](#\_0xB77D05AC8C78AADB), [SET_VEHICLE_ENGINE_HEALTH](#\_0x45F6D8EEF34ABEF1), or [SET_VEHICLE_PETROL_TANK_HEALTH](#\_0x70DB57649FA8D0D8) have been called with a value greater than `1000.0`.
 * @param heli The helicopter to check
 * @return Returns the current health of the helicopter's engine.
 */
declare function GetHeliEngineHealth(heli: number): number;

/**
 * **Note** This native will always return `1000.0` unless [SET_VEHICLE_BODY_HEALTH](#\_0xB77D05AC8C78AADB), [SET_VEHICLE_ENGINE_HEALTH](#\_0x45F6D8EEF34ABEF1), or [SET_VEHICLE_PETROL_TANK_HEALTH](#\_0x70DB57649FA8D0D8) have been called with a value greater than `1000.0`.
 * @param heli The helicopter to check
 * @return Returns the current health of the helicopter's gas tank.
 */
declare function GetHeliGasTankHealth(heli: number): number;

/**
 * GET_HELI_MAIN_ROTOR_DAMAGE_SCALE
 * @param heli The helicopter to check
 * @return Returns a value representing the damage scaling factor applied to the helicopter's main rotor. The value ranges from `0.0` (no damage scaling) to`  1.0 ` (full damage scaling).
 */
declare function GetHeliMainRotorDamageScale(heli: number): number;

/**
 * GET_HELI_MAIN_ROTOR_HEALTH
 * @param vehicle The target vehicle.
 * @return See the client-side [GET_HELI_MAIN_ROTOR_HEALTH](https://docs.fivem.net/natives/?\_0xE4CB7541F413D2C5) for the return value.
 */
declare function GetHeliMainRotorHealth(vehicle: number): number;

/**
 * GET_HELI_PITCH_CONTROL
 * @param heli The helicopter to check.
 * @return Returns a value representing the pitch control of the helicopter. The values range from `-1.0` (nose down) to `1.0` (nose up), with `0.0` indicating no pitch input.
 */
declare function GetHeliPitchControl(heli: number): number;

/**
 * GET_HELI_REAR_ROTOR_DAMAGE_SCALE
 * @param heli The helicopter to check
 * @return Returns a value representing the damage scaling factor applied to the helicopter's rear rotor. The value ranges from `0.0` (no damage scaling) to`  1.0 ` (full damage scaling).
 */
declare function GetHeliRearRotorDamageScale(heli: number): number;

/**
 * This native is a getter for [SET_HELI_TAIL_ROTOR_HEALTH](#\_0xFE205F38AAA58E5B)
 * @param vehicle The target vehicle.
 * @return Returns the health of the helicopter's rear rotor. The maximum health value is `1000`.
 */
declare function GetHeliRearRotorHealth(vehicle: number): number;

/**
 * GET_HELI_ROLL_CONTROL
 * @param heli The helicopter to check.
 * @return Returns a value representing the roll control of the helicopter. The values range from `-1.0` (roll left) to `1.0` (roll right), with `0.0` indicating no roll input.
 */
declare function GetHeliRollControl(heli: number): number;

/**
 * GET_HELI_TAIL_ROTOR_DAMAGE_SCALE
 * @param heli The helicopter to check
 * @return Returns a value representing the damage scaling factor applied to the helicopter's tail rotor. The value ranges from `0.0` (no damage scaling) to`  1.0 ` (full damage scaling).
 */
declare function GetHeliTailRotorDamageScale(heli: number): number;

/**
 * **Note**: This native is deprecated, please use [`GET_HELI_REAR_ROTOR_HEALTH`](#\_0x33EE6E2B) instead.
 * @param vehicle The target vehicle.
 * @return Return the health of the rear rotor of the helicopter, not the tail rotor.
 */
declare function GetHeliTailRotorHealth(vehicle: number): number;

/**
 * GET_HELI_THROTTLE_CONTROL
 * @param heli The helicopter to check.
 * @return Returns a value representing the throttle control of the helicopter. The value ranges from `0.0` (no throttle) to `2.0` (full throttle).
 */
declare function GetHeliThrottleControl(heli: number): number;

/**
 * GET_HELI_YAW_CONTROL
 * @param heli The helicopter to check.
 * @return Returns a value the yaw control of the helicopter. The value ranges from `-1.0` (yaw left) to `1.0` (yaw right), with `0.0` meaning no yaw input.
 */
declare function GetHeliYawControl(heli: number): number;

/**
 * GET_HOST_ID
 */
declare function GetHostId(): string;

/**
 * GET_INSTANCE_ID
 */
declare function GetInstanceId(): number;

/**
 * GET_INVOKING_RESOURCE
 */
declare function GetInvokingResource(): string;

/**
 * GET_IS_HELI_ENGINE_RUNNING
 * @param heli The helicopter to check
 * @return Returns `true` if the helicopter's engine is running, `false` if it is not.
 */
declare function GetIsHeliEngineRunning(heli: number): boolean;

/**
 * GET_IS_VEHICLE_ENGINE_RUNNING
 */
declare function GetIsVehicleEngineRunning(vehicle: number): boolean;

/**
 * GET_IS_VEHICLE_PRIMARY_COLOUR_CUSTOM
 */
declare function GetIsVehiclePrimaryColourCustom(vehicle: number): boolean;

/**
 * GET_IS_VEHICLE_SECONDARY_COLOUR_CUSTOM
 */
declare function GetIsVehicleSecondaryColourCustom(vehicle: number): boolean;

/**
 * See the client-side [GET_LANDING_GEAR_STATE](#\_0x9B0F3DCA3DB0F4CD) native for a description of landing gear states.
 * @param vehicle The vehicle to check.
 * @return The current state of the vehicles landing gear.
 */
declare function GetLandingGearState(vehicle: number): number;

/**
 * GET_LAST_PED_IN_VEHICLE_SEAT
 * @param vehicle The target vehicle.
 * @param seatIndex See eSeatPosition declared in [`IS_VEHICLE_SEAT_FREE`](#\_0x22AC59A870E6A669).
 * @return The last ped in the specified seat of the passed vehicle. Returns 0 if the specified seat was never occupied or the last ped does not exist anymore.
 */
declare function GetLastPedInVehicleSeat(vehicle: number, seatIndex: number): number;

/**
 * GET_NUM_PLAYER_IDENTIFIERS
 */
declare function GetNumPlayerIdentifiers(playerSrc: string): number;

/**
 * GET_NUM_PLAYER_INDICES
 */
declare function GetNumPlayerIndices(): number;

/**
 * GET_NUM_PLAYER_TOKENS
 */
declare function GetNumPlayerTokens(playerSrc: string): number;

/**
 * Gets the amount of metadata values with the specified key existing in the specified resource's manifest.
 * See also: [Resource manifest](https://docs.fivem.net/resources/manifest/)
 * @param resourceName The resource name.
 * @param metadataKey The key to look up in the resource manifest.
 */
declare function GetNumResourceMetadata(resourceName: string, metadataKey: string): number;

/**
 * GET_NUM_RESOURCES
 */
declare function GetNumResources(): number;

/**
 * GET_PASSWORD_HASH
 */
declare function GetPasswordHash(password: string): string;

/**
 * GET_PED_ARMOUR
 */
declare function GetPedArmour(ped: number): number;

/**
 * GET_PED_CAUSE_OF_DEATH
 */
declare function GetPedCauseOfDeath(ped: number): number;

/**
 * GET_PED_DESIRED_HEADING
 * @param ped The target ped
 * @return Returns ped's desired heading.
 */
declare function GetPedDesiredHeading(ped: number): number;

/**
 * GET_PED_IN_VEHICLE_SEAT
 * @param vehicle The target vehicle.
 * @param seatIndex See eSeatPosition declared in [`IS_VEHICLE_SEAT_FREE`](#\_0x22AC59A870E6A669).
 * @return The ped in the specified seat of the passed vehicle. Returns 0 if the specified seat is not occupied.
 */
declare function GetPedInVehicleSeat(vehicle: number, seatIndex: number): number;

/**
 * GET_PED_MAX_HEALTH
 */
declare function GetPedMaxHealth(ped: number): number;

/**
 * Gets the current relationship group hash of a ped.
 * @param ped The target ped
 * @return The relationship group hash.
 */
declare function GetPedRelationshipGroupHash(ped: number): number;

/**
 * Gets the script task command currently assigned to the ped.
 * @param ped The target ped.
 * @return The script task command currently assigned to the ped. A value of 0x811E343C denotes no script task is assigned.
 */
declare function GetPedScriptTaskCommand(ped: number): number;

/**
 * Gets the stage of the peds scripted task.
 * @param ped The target ped.
 * @return The stage of the ped's scripted task. A value of 3 denotes no script task is assigned.
 */
declare function GetPedScriptTaskStage(ped: number): number;

/**
 * Get the last entity that damaged the ped. This native is used server side when using OneSync.
 * @param ped The target ped
 * @return The entity id. Returns 0 if the ped has not been damaged recently.
 */
declare function GetPedSourceOfDamage(ped: number): number;

/**
 * Get the entity that killed the ped. This native is used server side when using OneSync.
 * @param ped The target ped
 * @return The entity id. Returns 0 if the ped has no killer.
 */
declare function GetPedSourceOfDeath(ped: number): number;

/**
 * Gets the type of a ped's specific task given an index of the CPedTaskSpecificDataNode nodes.
 * A ped will typically have a task at index 0, if a ped has multiple tasks at once they will be in the order 0, 1, 2, etc.
 * @param ped The target ped.
 * @param index A zero-based index with a maximum value of 7.
 * @return The type of the specific task.
1604: A value of 530 denotes no script task is assigned or an invalid input was given.
2060+: A value of 531 denotes no script task is assigned or an invalid input was given.
 */
declare function GetPedSpecificTaskType(ped: number, index: number): number;

/**
 * GET_PED_STEALTH_MOVEMENT
 * @param ped The target ped.
 * @return Whether or not the ped is stealthy.
 */
declare function GetPedStealthMovement(ped: number): boolean;

/**
 * Gets the current camera rotation for a specified player. This native is used server side when using OneSync.
 * @param playerSrc The player handle.
 * @return The player's camera rotation. Values are in radians.
 */
declare function GetPlayerCameraRotation(playerSrc: string): number[];

/**
 * GET_PLAYER_ENDPOINT
 */
declare function GetPlayerEndpoint(playerSrc: string): string;

/**
 * Gets the current fake wanted level for a specified player. This native is used server side when using OneSync.
 * @param playerSrc The target player
 * @return The fake wanted level
 */
declare function GetPlayerFakeWantedLevel(playerSrc: string): number;

/**
 * Gets the focus position (i.e. the position of the active camera in the game world) of a player.
 * @param playerSrc The player to get the focus position of
 * @return Returns a `Vector3` containing the focus position of the player.
 */
declare function GetPlayerFocusPos(playerSrc: string): number[];

/**
 * GET_PLAYER_FROM_INDEX
 */
declare function GetPlayerFromIndex(index: number): string;

/**
 * On the server this will return the players source, on the client it will return the player handle.
 * @param bagName An internal state bag ID from the argument to a state bag change handler.
 * @return The player handle or 0 if the state bag name did not refer to a player, or the player does not exist.
 */
declare function GetPlayerFromStateBagName(bagName: string): number;

/**
 * GET_PLAYER_GUID
 */
declare function GetPlayerGuid(playerSrc: string): string;

/**
 * To get the number of identifiers, use [GET_NUM_PLAYER_IDENTIFIERS](?\_0xFF7F66AB)
 * To get a specific type of identifier, use [GET_PLAYER_IDENTIFIER_BY_TYPE](?\_0xA61C8FC6)
 * @return Returns the identifier at the specific index, if out of bounds returns `null`
 */
declare function GetPlayerIdentifier(playerSrc: string, identiferIndex: number): string;

/**
 * Get an identifier from a player by the type of the identifier.
 * Known [Identifiers](https://docs.fivem.net/docs/scripting-reference/runtimes/lua/functions/GetPlayerIdentifiers/#identifier-types)
 * @param playerSrc The player to get the identifier for
 * @param identifierType The string to match in an identifier, this can be `"license"` for example.
 * @return The identifier that matches the string provided
 */
declare function GetPlayerIdentifierByType(playerSrc: string, identifierType: string): string;

/**
 * GET_PLAYER_INVINCIBLE
 * @param playerSrc The player handle
 * @return A boolean to tell if the player is invincible.
 */
declare function GetPlayerInvincible(playerSrc: string): boolean;

/**
 * GET_PLAYER_LAST_MSG
 */
declare function GetPlayerLastMsg(playerSrc: string): number;

/**
 * GET_PLAYER_MAX_ARMOUR
 * @param playerSrc The player handle
 */
declare function GetPlayerMaxArmour(playerSrc: string): number;

/**
 * GET_PLAYER_MAX_HEALTH
 * @param playerSrc The player handle
 */
declare function GetPlayerMaxHealth(playerSrc: string): number;

/**
 * A getter for [SET_PLAYER_MELEE_WEAPON_DAMAGE_MODIFIER](#\_0x4A3DC7ECCC321032).
 * @param playerId The player index.
 * @return Returns player melee weapon damage modifier value.
 */
declare function GetPlayerMeleeWeaponDamageModifier(playerId: string): number;

/**
 * GET_PLAYER_NAME
 */
declare function GetPlayerName(playerSrc: string): string;

/**
 * Used to get the player's Ped Entity ID when a valid `playerSrc` is passed.
 * @param playerSrc The player source, passed as a string.
 * @return Returns a valid Ped Entity ID if the passed `playerSrc` is valid, `0` if not.
 */
declare function GetPlayerPed(playerSrc: string): number;

/**
 * GET_PLAYER_PING
 */
declare function GetPlayerPing(playerSrc: string): number;

/**
 * Gets the routing bucket for the specified player.
 * Routing buckets are also known as 'dimensions' or 'virtual worlds' in past echoes, however they are population-aware.
 * @param playerSrc The player to get the routing bucket for.
 * @return The routing bucket ID.
 */
declare function GetPlayerRoutingBucket(playerSrc: string): number;

/**
 * GET_PLAYER_TEAM
 * @param playerSrc The player handle
 */
declare function GetPlayerTeam(playerSrc: string): number;

/**
 * Gets the amount of time player has spent evading the cops.
 * Counter starts and increments only when cops are chasing the player.
 * If the player is evading, the timer will pause.
 * @param playerSrc The target player
 * @param lastPursuit False = CurrentPursuit, True = LastPursuit
 * @return Returns -1, if the player is not wanted or wasn't in pursuit before, depending on the lastPursuit parameter
Returns 0, if lastPursuit == False and the player has a wanted level, but the pursuit has not started yet
Otherwise, will return the milliseconds of the pursuit.
 */
declare function GetPlayerTimeInPursuit(playerSrc: string, lastPursuit: boolean): number;

/**
 * Gets the current time online for a specified player.
 * @param playerSrc A player.
 * @return The current time online in seconds.
 */
declare function GetPlayerTimeOnline(playerSrc: string): number;

/**
 * Gets a player's token. Tokens can be used to enhance banning logic, however are specific to a server.
 * @param playerSrc A player.
 * @param index Index between 0 and GET_NUM_PLAYER_TOKENS.
 * @return A token value.
 */
declare function GetPlayerToken(playerSrc: string, index: number): string;

/**
 * Gets the current known coordinates for the specified player from cops perspective. This native is used server side when using OneSync.
 * @param playerSrc The target player
 * @return The player's position known by police. Vector zero if the player has no wanted level.
 */
declare function GetPlayerWantedCentrePosition(playerSrc: string): number[];

/**
 * Returns given players wanted level server-side.
 * @param playerSrc The target player
 * @return The wanted level
 */
declare function GetPlayerWantedLevel(playerSrc: string): number;

/**
 * A getter for [SET_PLAYER_WEAPON_DAMAGE_MODIFIER](#\_0xCE07B9F7817AADA3).
 * @param playerId The player index.
 * @return The value of player weapon damage modifier.
 */
declare function GetPlayerWeaponDamageModifier(playerId: string): number;

/**
 * A getter for [SET_PLAYER_WEAPON_DEFENSE_MODIFIER](#\_0x2D83BC011CA14A3C).
 * @param playerId The player index.
 * @return The value of player weapon defense modifier.
 */
declare function GetPlayerWeaponDefenseModifier(playerId: string): number;

/**
 * A getter for [\_SET_PLAYER_WEAPON_DEFENSE_MODIFIER\_2](#\_0xBCFDE9EDE4CF27DC).
 * @param playerId The player index.
 * @return The value of player weapon defense modifier 2.
 */
declare function GetPlayerWeaponDefenseModifier_2(playerId: string): number;

/**
 * Returns all commands that are registered in the command system.
 * The data returned adheres to the following layout:
 * ```
 * [
 * {
 * "name": "cmdlist",
 * "resource": "resource",
 * "arity" = -1,
 * },
 * {
 * "name": "command1"
 * "resource": "resource_2",
 * "arity" = -1,
 * }
 * ]
 * ```
 * @return An object containing registered commands.
 */
declare function GetRegisteredCommands(): any;

/**
 * GET_RESOURCE_BY_FIND_INDEX
 * @param findIndex The index of the resource (starting at 0)
 * @return The resource name as a `string`
 */
declare function GetResourceByFindIndex(findIndex: number): string;

/**
 * Returns all commands registered by the specified resource.
 * The data returned adheres to the following layout:
 * ```
 * [
 * {
 * "name": "cmdlist",
 * "resource": "example_resource",
 * "arity" = -1,
 * },
 * {
 * "name": "command1"
 * "resource": "example_resource2",
 * "arity" = -1,
 * }
 * ]
 * ```
 * @return An object containing registered commands.
 */
declare function GetResourceCommands(resource: string): any;

/**
 * A getter for [SET_RESOURCE_KVP_FLOAT](#\_0x9ADD2938).
 * @param key The key to fetch
 * @return The floating-point value stored under the specified key, or 0.0 if not found.
 */
declare function GetResourceKvpFloat(key: string): number;

/**
 * A getter for [SET_RESOURCE_KVP_INT](#\_0x6A2B1E8).
 * @param key The key to fetch
 * @return The integer value stored under the specified key, or 0 if not found.
 */
declare function GetResourceKvpInt(key: string): number;

/**
 * A getter for [SET_RESOURCE_KVP](#\_0x21C7A35B).
 * @param key The key to fetch
 * @return The string value stored under the specified key, or nil/null if not found.
 */
declare function GetResourceKvpString(key: string): string;

/**
 * Gets the metadata value at a specified key/index from a resource's manifest.
 * See also: [Resource manifest](https://docs.fivem.net/resources/manifest/)
 * @param resourceName The resource name.
 * @param metadataKey The key in the resource manifest.
 * @param index The value index, in a range from \[0..GET_NUM_RESOURCE_METDATA-1].
 */
declare function GetResourceMetadata(resourceName: string, metadataKey: string, index: number): string;

/**
 * Returns the physical on-disk path of the specified resource.
 * @param resourceName The name of the resource.
 * @return The resource directory name, possibly without trailing slash.
 */
declare function GetResourcePath(resourceName: string): string;

/**
 * Returns the current state of the specified resource.
 * @param resourceName The name of the resource.
 * @return The resource state. One of `"missing", "started", "starting", "stopped", "stopping", "uninitialized" or "unknown"`.
 */
declare function GetResourceState(resourceName: string): string;

/**
 * An alias of [GET_CURRENT_PED_WEAPON](#\_0xB0237302).
 * Note, the client-side [GET_SELECTED_PED_WEAPON](#\_0x0A6DB4965674D243) native returns the weapon selected via the HUD (weapon wheel). This data is not available to FXServer.
 * @param ped The target ped.
 * @return The weapon hash.
 */
declare function GetSelectedPedWeapon(ped: number): number;

/**
 * GET_STATE_BAG_KEYS
 * @param bagName The name of the bag.
 * @return Returns an array containing all keys for which the state bag has associated values.
 */
declare function GetStateBagKeys(bagName: string): any;

/**
 * Returns the value of a state bag key.
 * @return Value.
 */
declare function GetStateBagValue(bagName: string, key: string): any;

/**
 * GET_THRUSTER_SIDE_RCS_THROTTLE
 * @param jetpack The jetpack to check.
 * @return Returns a value representing the side RCS (Reaction Control System) throttle of the jetpack. The values range from `0.0` (no throttle) to `1.0` (full throttle).
 */
declare function GetThrusterSideRcsThrottle(jetpack: number): number;

/**
 * GET_THRUSTER_THROTTLE
 * @param jetpack The jetpack to check.
 * @return Returns a value representing the main throttle of the jetpack. The values range from `0.0` (no throttle) to `1.0` (full throttle)
 */
declare function GetThrusterThrottle(jetpack: number): number;

/**
 * GET_TRAIN_CARRIAGE_ENGINE
 * @param train The entity handle.
 * @return The train engine carriage.
 */
declare function GetTrainCarriageEngine(train: number): number;

/**
 * GET_TRAIN_CARRIAGE_INDEX
 * @param train The entity handle.
 * @return The carriage index. -1 returned if invalid result.
 */
declare function GetTrainCarriageIndex(train: number): number;

/**
 * GET_VEHICLE_BODY_HEALTH
 */
declare function GetVehicleBodyHealth(vehicle: number): number;

/**
 * GET_VEHICLE_COLOURS
 */
declare function GetVehicleColours(vehicle: number): [number, number];

/**
 * GET_VEHICLE_CUSTOM_PRIMARY_COLOUR
 */
declare function GetVehicleCustomPrimaryColour(vehicle: number): [number, number, number];

/**
 * GET_VEHICLE_CUSTOM_SECONDARY_COLOUR
 */
declare function GetVehicleCustomSecondaryColour(vehicle: number): [number, number, number];

/**
 * GET_VEHICLE_DASHBOARD_COLOUR
 */
declare function GetVehicleDashboardColour(vehicle: number, color?: number): number;

/**
 * GET_VEHICLE_DIRT_LEVEL
 */
declare function GetVehicleDirtLevel(vehicle: number): number;

/**
 * ```lua
 * enum_VehicleLockStatus = {
 * None = 0,
 * Locked = 2,
 * LockedForPlayer = 3,
 * StickPlayerInside = 4, -- Doesn't allow players to exit the vehicle with the exit vehicle key.
 * CanBeBrokenInto = 7, -- Can be broken into the car. If the glass is broken, the value will be set to 1
 * CanBeBrokenIntoPersist = 8, -- Can be broken into persist
 * CannotBeTriedToEnter = 10, -- Cannot be tried to enter (Nothing happens when you press the vehicle enter key).
 * }
 * ```
 * It should be [noted](https://forum.cfx.re/t/4863241) that while the [client-side command](#\_0x25BC98A59C2EA962) and its
 * setter distinguish between states 0 (unset) and 1 (unlocked), the game will synchronize both as state 0, so the server-side
 * command will return only '0' if unlocked.
 * @param vehicle A vehicle handle.
 * @return The door lock status for the specified vehicle.
 */
declare function GetVehicleDoorLockStatus(vehicle: number): number;

/**
 * Returns the open position of the specified door on the target vehicle.
 * @param vehicle The target vehicle.
 * @param doorIndex Index of door to check (0-6).
 * @return A number from 0 to 7.
 */
declare function GetVehicleDoorStatus(vehicle: number, doorIndex: number): number;

/**
 * Currently it only works when set to "all players".
 */
declare function GetVehicleDoorsLockedForPlayer(vehicle: number): number;

/**
 * GET_VEHICLE_ENGINE_HEALTH
 */
declare function GetVehicleEngineHealth(vehicle: number): number;

/**
 * GET_VEHICLE_EXTRA_COLOURS
 */
declare function GetVehicleExtraColours(vehicle: number): [number, number];

/**
 * Gets the flight nozzel position for the specified vehicle. See the client-side [\_GET_VEHICLE_FLIGHT_NOZZLE_POSITION](#\_0xDA62027C8BDB326E) native for usage examples.
 * @param vehicle The vehicle to check.
 * @return The flight nozzel position between 0.0 (flying normally) and 1.0 (VTOL mode)
 */
declare function GetVehicleFlightNozzlePosition(vehicle: number): number;

/**
 * GET_VEHICLE_HANDBRAKE
 */
declare function GetVehicleHandbrake(vehicle: number): boolean;

/**
 * GET_VEHICLE_HEADLIGHTS_COLOUR
 */
declare function GetVehicleHeadlightsColour(vehicle: number): number;

/**
 * Gets the lock on state for the specified vehicle. See the client-side [GET_VEHICLE_HOMING_LOCKON_STATE](#\_0xE6B0E8CFC3633BF0) native for a description of lock on states.
 * @param vehicle The vehicle to check.
 * @return The lock on state.
 */
declare function GetVehicleHomingLockonState(vehicle: number): number;

/**
 * This is a getter for the client-side native [`START_VEHICLE_HORN`](https://docs.fivem.net/natives/?\_0x9C8C6504B5B63D2C), which allows you to return the horn type of the vehicle.
 * **Note**: This native only gets the hash value set with `START_VEHICLE_HORN`. If a wrong hash is passed into `START_VEHICLE_HORN`, it will return this wrong hash.
 * ```cpp
 * enum eHornTypes
 * {
 * NORMAL = 1330140148,
 * HELDDOWN = -2087385909,
 * AGGRESSIVE = -92810745
 * }
 * ```
 * @param vehicle The vehicle to check the horn type.
 * @return Returns the vehicle horn type hash, or `0` if one is not set.
 */
declare function GetVehicleHornType(vehicle: number): number;

/**
 * GET_VEHICLE_INTERIOR_COLOUR
 */
declare function GetVehicleInteriorColour(vehicle: number, color?: number): number;

/**
 * GET_VEHICLE_LIGHTS_STATE
 */
declare function GetVehicleLightsState(vehicle: number): [boolean, any /* actually bool */, any /* actually bool */];

/**
 * GET_VEHICLE_LIVERY
 */
declare function GetVehicleLivery(vehicle: number): number;

/**
 * Gets the vehicle that is locked on to for the specified vehicle.
 * @param vehicle The vehicle to check.
 * @return The vehicle that is locked on. 0 returned if no vehicle is locked on.
 */
declare function GetVehicleLockOnTarget(vehicle: number): number;

/**
 * Getter to check the neon colour of a vehicle. This native is the server side getter of [GET_VEHICLE_NEON_LIGHTS_COLOUR](#\_0x7619EEE8C886757F).
 * @param vehicle The vehicle to check.
 * @param red Pointer to an integer where the red component of the neon color will be stored.
 * @param green Pointer to an integer where the green component of the neon color will be stored.
 * @param blue Pointer to an integer where the blue component of the neon color will be stored.
 * @return None. The neon color values are retrieved and stored in the `red`, `green`, and `blue` pointers. Make sure to store the returned values in variables for further use.
 */
declare function GetVehicleNeonColour(vehicle: number): [number, number, number];

/**
 * Getter to check if one of the neon lights of a vehicle is enabled. This native is the server side getter of [IS_VEHICLE_NEON_LIGHT_ENABLED](#\_0x8C4B92553E4766A5).
 * ```cpp
 * enum neonIndex
 * {
 * NEON_BACK = 0,   // Back neon
 * NEON_RIGHT = 1,  // Right neon
 * NEON_LEFT = 2,   // Left neon
 * NEON_FRONT = 3   // Front neon
 * };
 * ```
 * @param vehicle The vehicle to check.
 * @param neonIndex A value from the neonIndex enum representing the neon light to check.
 * @return Returns `true` if the specified neon light is enabled, `false` otherwise.
 */
declare function GetVehicleNeonEnabled(vehicle: number, neonIndex: number): boolean;

/**
 * GET_VEHICLE_NUMBER_PLATE_TEXT
 */
declare function GetVehicleNumberPlateText(vehicle: number): string;

/**
 * GET_VEHICLE_NUMBER_PLATE_TEXT_INDEX
 */
declare function GetVehicleNumberPlateTextIndex(vehicle: number): number;

/**
 * Gets the vehicle the specified Ped is/was in depending on bool value. This native is used server side when using OneSync.
 * @param ped The target ped
 * @param lastVehicle False = CurrentVehicle, True = LastVehicle
 * @return The vehicle id. Returns 0 if the ped is/was not in a vehicle.
 */
declare function GetVehiclePedIsIn(ped: number, lastVehicle: boolean): number;

/**
 * GET_VEHICLE_PETROL_TANK_HEALTH
 */
declare function GetVehiclePetrolTankHealth(vehicle: number): number;

/**
 * GET_VEHICLE_RADIO_STATION_INDEX
 */
declare function GetVehicleRadioStationIndex(vehicle: number): number;

/**
 * GET_VEHICLE_ROOF_LIVERY
 */
declare function GetVehicleRoofLivery(vehicle: number): number;

/**
 * GET_VEHICLE_STEERING_ANGLE
 */
declare function GetVehicleSteeringAngle(vehicle: number): number;

/**
 * GET_VEHICLE_TOTAL_REPAIRS
 * @return Returns the total amount of repairs. Each repair will increase the count to make it possible to detect client repairs.
The value has a range from 0 to 15. Next value after 15 is 0.
 */
declare function GetVehicleTotalRepairs(vehicle: number): number;

/**
 * Returns the type of the passed vehicle.
 * For client scripts, reference the more detailed [GET_VEHICLE_TYPE_RAW](#\_0xDE73BC10) native.
 * ### Vehicle types
 * *   automobile
 * *   bike
 * *   boat
 * *   heli
 * *   plane
 * *   submarine
 * *   trailer
 * *   train
 * @param vehicle The vehicle's entity handle.
 * @return If the entity is a vehicle, the vehicle type. If it is not a vehicle, the return value will be null.
 */
declare function GetVehicleType(vehicle: number): string;

/**
 * GET_VEHICLE_TYRE_SMOKE_COLOR
 */
declare function GetVehicleTyreSmokeColor(vehicle: number): [number, number, number];

/**
 * GET_VEHICLE_WHEEL_TYPE
 */
declare function GetVehicleWheelType(vehicle: number): number;

/**
 * GET_VEHICLE_WINDOW_TINT
 */
declare function GetVehicleWindowTint(vehicle: number): number;

/**
 * GIVE_WEAPON_COMPONENT_TO_PED
 */
declare function GiveWeaponComponentToPed(ped: number, weaponHash: string | number, componentHash: string | number): void;

/**
 * GIVE_WEAPON_TO_PED
 */
declare function GiveWeaponToPed(ped: number, weaponHash: string | number, ammoCount: number, isHidden: boolean, bForceInHand: boolean): void;

/**
 * HAS_ENTITY_BEEN_MARKED_AS_NO_LONGER_NEEDED
 */
declare function HasEntityBeenMarkedAsNoLongerNeeded(vehicle: number): boolean;

/**
 * HAS_VEHICLE_BEEN_DAMAGED_BY_BULLETS
 * @param vehicle The target vehicle.
 * @return Returns whether or not the target vehicle has been damaged by bullets.
 */
declare function HasVehicleBeenDamagedByBullets(vehicle: number): boolean;

/**
 * HAS_VEHICLE_BEEN_OWNED_BY_PLAYER
 */
declare function HasVehicleBeenOwnedByPlayer(vehicle: number): boolean;

/**
 * IS_ACE_ALLOWED
 */
declare function IsAceAllowed(object: string): boolean;

/**
 * IS_BOAT_ANCHORED_AND_FROZEN
 * @param vehicle The target vehicle.
 * @return Returns whether or not the boat is anchored and frozen.
 */
declare function IsBoatAnchoredAndFrozen(vehicle: number): boolean;

/**
 * IS_BOAT_WRECKED
 * @param vehicle The target vehicle.
 * @return Returns whether or not the boat is wrecked.
 */
declare function IsBoatWrecked(vehicle: number): boolean;

/**
 * Gets whether or not this is the CitizenFX server.
 * @return A boolean value.
 */
declare function IsDuplicityVersion(): boolean;

/**
 * A getter for [FREEZE_ENTITY_POSITION](#\_0x428CA6DBD1094446).
 * @param entity The entity to check for
 * @return Boolean stating if it is frozen or not.
 */
declare function IsEntityPositionFrozen(entity: number): boolean;

/**
 * This native checks if the given entity is visible.
 * @return Returns `true` if the entity is visible, `false` otherwise.
 */
declare function IsEntityVisible(entity: number): boolean;

/**
 * IS_FLASH_LIGHT_ON
 * @param ped The target ped.
 * @return Whether or not the ped's flash light is on.
 */
declare function IsFlashLightOn(ped: number): boolean;

/**
 * This is a getter for [SET_HELI_TAIL_EXPLODE_THROW_DASHBOARD](#\_0x3EC8BF18AA453FE9)
 * @param heli The helicopter to check
 * @return Returns `true` if the helicopter's tail boom can break, `false` if it cannot.
 */
declare function IsHeliTailBoomBreakable(heli: number): boolean;

/**
 * IS_HELI_TAIL_BOOM_BROKEN
 * @param heli The helicopter to check
 * @return Returns `true` if the helicopter's tail boom is broken, `false` if it is intact.
 */
declare function IsHeliTailBoomBroken(heli: number): boolean;

/**
 * This native checks if the given ped is a player.
 * @return Returns `true` if the ped is a player, `false` otherwise.
 */
declare function IsPedAPlayer(ped: number): boolean;

/**
 * IS_PED_HANDCUFFED
 * @param ped The target ped.
 * @return Whether or not the ped is handcuffed.
 */
declare function IsPedHandcuffed(ped: number): boolean;

/**
 * IS_PED_RAGDOLL
 * @param ped The target ped.
 * @return Whether or not the ped is ragdolling.
 */
declare function IsPedRagdoll(ped: number): boolean;

/**
 * IS_PED_STRAFING
 * @param ped The target ped.
 * @return Whether or not the ped is strafing.
 */
declare function IsPedStrafing(ped: number): boolean;

/**
 * IS_PED_USING_ACTION_MODE
 * @param ped The target ped.
 * @return Whether or not the ped is using action mode.
 */
declare function IsPedUsingActionMode(ped: number): boolean;

/**
 * IS_PLAYER_ACE_ALLOWED
 */
declare function IsPlayerAceAllowed(playerSrc: string, object: string): boolean;

/**
 * Requests whether or not the commerce data for the specified player has loaded.
 * @param playerSrc The player handle
 * @return A boolean.
 */
declare function IsPlayerCommerceInfoLoaded(playerSrc: string): boolean;

/**
 * Requests whether or not the commerce data for the specified player has loaded from Tebex.
 * @param playerSrc The player handle
 * @return A boolean.
 */
declare function IsPlayerCommerceInfoLoadedExt(playerSrc: string): boolean;

/**
 * This will return true if the player is evading wanted level, meaning that the wanted level stars are blink.
 * Otherwise will return false.
 * If the player is not wanted, it simply returns false.
 * @param playerSrc The target player
 * @return boolean value, depending if the player is evading his wanted level or not.
 */
declare function IsPlayerEvadingWantedLevel(playerSrc: string): boolean;

/**
 * IS_PLAYER_IN_FREE_CAM_MODE
 * @param playerSrc The player to get the free camera mode status of
 * @return Returns if the player is in free camera mode.
 */
declare function IsPlayerInFreeCamMode(playerSrc: string): boolean;

/**
 * IS_PLAYER_USING_SUPER_JUMP
 * @param playerSrc The player handle
 * @return A boolean.
 */
declare function IsPlayerUsingSuperJump(playerSrc: string): boolean;

/**
 * IS_PRINCIPAL_ACE_ALLOWED
 */
declare function IsPrincipalAceAllowed(principal: string, object: string): boolean;

/**
 * IS_VEHICLE_ENGINE_STARTING
 */
declare function IsVehicleEngineStarting(vehicle: number): boolean;

/**
 * IS_VEHICLE_EXTRA_TURNED_ON
 */
declare function IsVehicleExtraTurnedOn(vehicle: number, extraId: number): boolean;

/**
 * IS_VEHICLE_SIREN_ON
 */
declare function IsVehicleSirenOn(vehicle: number): boolean;

/**
 * IS_VEHICLE_TYRE_BURST
 */
declare function IsVehicleTyreBurst(vehicle: number, wheelID: number, completely: boolean): boolean;

/**
 * See the client-side [IS_VEHICLE_WINDOW_INTACT](https://docs.fivem.net/natives/?\_0x46E571A0E20D01F1) for a window indexes list.
 * @param vehicle The target vehicle.
 * @param windowIndex The window index.
 */
declare function IsVehicleWindowIntact(vehicle: number, windowIndex: number): boolean;

/**
 * Requests the commerce data for the specified player, including the owned SKUs. Use `IS_PLAYER_COMMERCE_INFO_LOADED` to check if it has loaded.
 * @param playerSrc The player handle
 */
declare function LoadPlayerCommerceData(playerSrc: string): void;

/**
 * Requests the commerce data from Tebex for the specified player, including the owned SKUs.
 * Use [`IS_PLAYER_COMMERCE_INFO_LOADED_EXT`](#\_0x1D14F4FE) to check if it has loaded.
 * This will not automatically update whenever a client purchases a package, if you want to fetch new purchases you will need to call this native again.
 * This native will temporarily cache the players commerce data for 10 seconds, a call to this native after 10 seconds will re-fetch the players commerce data.
 * @param playerSrc The player handle
 */
declare function LoadPlayerCommerceDataExt(playerSrc: string): void;

/**
 * Reads the contents of a text file in a specified resource.
 * If executed on the client, this file has to be included in `files` in the resource manifest.
 * Example: `local data = LoadResourceFile("devtools", "data.json")`
 * @param resourceName The resource name.
 * @param fileName The file in the resource.
 * @return The file contents
 */
declare function LoadResourceFile(resourceName: string, fileName: string): string;

/**
 * Create a permanent voice channel.
 * @param id ID of the channel.
 */
declare function MumbleCreateChannel(id: number): void;

/**
 * Checks if the player is currently muted
 * @param playerSrc The player to get the mute state for
 * @return Whether or not the player is muted
 */
declare function MumbleIsPlayerMuted(playerSrc: number): boolean;

/**
 * Mutes or unmutes the specified player
 * @param playerSrc The player to set the mute state of
 * @param toggle Whether to mute or unmute the player
 */
declare function MumbleSetPlayerMuted(playerSrc: number, toggle: boolean): void;

/**
 * NETWORK_GET_ENTITY_FROM_NETWORK_ID
 */
declare function NetworkGetEntityFromNetworkId(netId: number): number;

/**
 * Returns the owner ID of the specified entity.
 * @param entity The entity to get the owner for.
 * @return On the server, the server ID of the entity owner. On the client, returns the player/slot ID of the entity owner.
 */
declare function NetworkGetEntityOwner(entity: number): number;

/**
 * Returns the first owner ID of the specified entity.
 * @param entity The entity to get the first owner for.
 * @return The server ID of the first entity owner.
 */
declare function NetworkGetFirstEntityOwner(entity: number): number;

/**
 * NETWORK_GET_NETWORK_ID_FROM_ENTITY
 */
declare function NetworkGetNetworkIdFromEntity(entity: number): number;

/**
 * NETWORK_GET_VOICE_PROXIMITY_OVERRIDE_FOR_PLAYER
 * @param playerSrc The player handle
 */
declare function NetworkGetVoiceProximityOverrideForPlayer(playerSrc: string): number[];

/**
 * PERFORM_HTTP_REQUEST_INTERNAL
 */
declare function PerformHttpRequestInternal(requestData: string, requestDataLength: number): number;

/**
 * PERFORM_HTTP_REQUEST_INTERNAL_EX
 */
declare function PerformHttpRequestInternalEx(requestData: any): number;

/**
 * Prints 'structured trace' data to the server `file descriptor 3` channel. This is not generally useful outside of
 * server monitoring utilities.
 * @param jsonString JSON data to submit as `payload` in the `script_structured_trace` event.
 */
declare function PrintStructuredTrace(jsonString: string): void;

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
 * Returns true if the profiler is active.
 * @return True or false.
 */
declare function ProfilerIsRecording(): boolean;

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
declare function RegisterCommand(commandName: string, handler: Function, restricted: boolean): void;

/**
 * Registers a listener for console output messages.
 * @param listener A function of `(channel: string, message: string) => void`. The message might contain `\n`.
 */
declare function RegisterConsoleListener(listener: Function): void;

/**
 * An internal function which allows the current resource's HLL script runtimes to receive state for the specified event.
 * @param eventName An event name, or "\*" to disable HLL event filtering for this resource.
 */
declare function RegisterResourceAsEventHandler(eventName: string): void;

/**
 * **Experimental**: This native may be altered or removed in future versions of CitizenFX without warning.
 * Registers a cached resource asset with the resource system, similar to the automatic scanning of the `stream/` folder.
 * @param resourceName The resource to add the asset to.
 * @param fileName A file name in the resource.
 * @return A cache string to pass to `REGISTER_STREAMING_FILE_FROM_CACHE` on the client.
 */
declare function RegisterResourceAsset(resourceName: string, fileName: string): string;

/**
 * Registers a build task factory for resources.
 * The function should return an object (msgpack map) with the following fields:
 * ```
 * {
 * // returns whether the specific resource should be built
 * shouldBuild = func(resourceName: string): bool,
 * // asynchronously start building the specific resource.
 * // call cb when completed
 * build = func(resourceName: string, cb: func(success: bool, status: string): void): void
 * }
 * ```
 * @param factoryId The identifier for the build task.
 * @param factoryFn The factory function.
 */
declare function RegisterResourceBuildTaskFactory(factoryId: string, factoryFn: Function): void;

/**
 * Parameter `p1` does not seem to be used or referenced in game binaries.\
 * **Note:** When called for networked entities, a `CRemoveAllWeaponsEvent` will be created per request.
 * @param ped The ped entity
 */
declare function RemoveAllPedWeapons(ped: number, p1: boolean): void;

/**
 * Removes the blip from your map.
 * **Note:** This function only works on the script that created the blip, if you wish to remove blips created by other scripts, see [`SET_THIS_SCRIPT_CAN_REMOVE_BLIPS_CREATED_BY_ANY_SCRIPT`](#\_0x86A652570E5F25DD).
 * @param blip Blip handle to remove.
 */
declare function RemoveBlip(blip: number): void;

/**
 * REMOVE_CONVAR_CHANGE_LISTENER
 * @param cookie The cookie returned from [ADD_CONVAR_CHANGE_LISTENER](#\_0xAB7F7241)
 */
declare function RemoveConvarChangeListener(cookie: number): void;

/**
 * **Experimental**: This native may be altered or removed in future versions of CitizenFX without warning.
 * Removes a handler for changes to a state bag.
 * @param cookie The cookie.
 */
declare function RemoveStateBagChangeHandler(cookie: number): void;

/**
 * REMOVE_WEAPON_COMPONENT_FROM_PED
 */
declare function RemoveWeaponComponentFromPed(ped: number, weaponHash: string | number, componentHash: string | number): void;

/**
 * This native removes a specified weapon from your selected ped.
 * Weapon Hashes: pastebin.com/0wwDZgkF
 * Example:
 * C#:
 * Function.Call(Hash.REMOVE_WEAPON_FROM_PED, Game.Player.Character, 0x99B507EA);
 * C++:
 * WEAPON::REMOVE_WEAPON_FROM_PED(PLAYER::PLAYER_PED_ID(), 0x99B507EA);
 * The code above removes the knife from the player.
 */
declare function RemoveWeaponFromPed(ped: number, weaponHash: string | number): void;

/**
 * Requests the specified player to buy the passed SKU. This'll pop up a prompt on the client, which upon acceptance
 * will open the browser prompting further purchase details.
 * @param playerSrc The player handle
 * @param skuId The ID of the SKU.
 */
declare function RequestPlayerCommerceSession(playerSrc: string, skuId: number): void;

/**
 * Writes the specified data to a file in the specified resource.
 * Using a length of `-1` will automatically detect the length assuming the data is a C string.
 * @param resourceName The name of the resource.
 * @param fileName The name of the file.
 * @param data The data to write to the file.
 * @param dataLength The length of the written data.
 * @return A value indicating if the write succeeded.
 */
declare function SaveResourceFile(resourceName: string, fileName: string, data: string, dataLength: number): boolean;

/**
 * Scans the resources in the specified resource root. This function is only available in the 'monitor mode' process and is
 * not available for user resources.
 * @param rootPath The resource directory to scan.
 * @param callback A callback that will receive an object with results.
 */
declare function ScanResourceRoot(rootPath: string, callback: Function): void;

/**
 * Schedules the specified resource to run a tick as soon as possible, bypassing the server's fixed tick rate.
 * @param resourceName The resource to tick.
 */
declare function ScheduleResourceTick(resourceName: string): void;

/**
 * Sets the displayed sprite for a specific blip.
 * There's a [list of sprites](https://docs.fivem.net/game-references/blips/) on the FiveM documentation site.
 * @param blip The blip to change.
 * @param spriteId The sprite ID to set.
 */
declare function SetBlipSprite(blip: number, spriteId: number): void;

/**
 * SET_CONVAR
 */
declare function SetConvar(varName: string, value: string): void;

/**
 * Used to replicate a server variable onto clients.
 * @param varName The console variable name.
 * @param value The value to set for the given console variable.
 */
declare function SetConvarReplicated(varName: string, value: string): void;

/**
 * SET_CONVAR_SERVER_INFO
 */
declare function SetConvarServerInfo(varName: string, value: string): void;

/**
 * SET_CURRENT_PED_WEAPON
 */
declare function SetCurrentPedWeapon(ped: number, weaponHash: string | number, bForceInHand: boolean): void;

/**
 * Sets the coordinates (world position) for a specified entity, offset by the radius of the entity on the Z axis.
 * @param entity The entity to change coordinates for.
 * @param xPos The X coordinate.
 * @param yPos The Y coordinate.
 * @param zPos The Z coordinate, ground level.
 * @param alive Unused by the game, potentially used by debug builds of GTA in order to assert whether or not an entity was alive.
 * @param deadFlag Whether to disable physics for dead peds, too, and not just living peds.
 * @param ragdollFlag A special flag used for ragdolling peds.
 * @param clearArea Whether to clear any entities in the target area.
 */
declare function SetEntityCoords(entity: number, xPos: number, yPos: number, zPos: number, alive: boolean, deadFlag: boolean, ragdollFlag: boolean, clearArea: boolean): void;

/**
 * It overrides the default distance culling radius of an entity. Set to `0.0` to reset.
 * If you want to interact with an entity outside of your players' scopes set the radius to a huge number.
 * **WARNING**: Culling natives are deprecated and have known, [unfixable issues](https://forum.cfx.re/t/issue-with-culling-radius-and-server-side-entities/4900677/4)
 * @param entity The entity handle to override the distance culling radius.
 * @param radius The new distance culling radius.
 */
declare function SetEntityDistanceCullingRadius(entity: number, radius: number): void;

/**
 * Set the heading of an entity in degrees also known as "Yaw".
 * @param entity The entity to set the heading for.
 * @param heading The heading in degrees.
 */
declare function SetEntityHeading(entity: number, heading: number): void;

/**
 * It allows to flag an entity to ignore the request control filter policy.
 * @param entity The entity handle to ignore the request control filter.
 * @param ignore Define if the entity ignores the request control filter policy.
 */
declare function SetEntityIgnoreRequestControlFilter(entity: number, ignore: boolean): void;

/**
 * ```cpp
 * enum EntityOrphanMode {
 * // Default, this will delete the entity when it isn't relevant to any players
 * // NOTE: this *doesn't* mean when they're no longer in scope
 * DeleteWhenNotRelevant = 0,
 * // The entity will be deleted whenever its original owner disconnects
 * // NOTE: if this is set when the entities original owner has already left it will be
 * // marked for deletion (similar to just calling DELETE_ENTITY)
 * DeleteOnOwnerDisconnect = 1,
 * // The entity will never be deleted by the server when it does relevancy checks
 * // you should only use this on entities that need to be relatively persistent
 * KeepEntity = 2
 * }
 * ```
 * Sets what happens when the entity is orphaned and no longer has its original owner.
 * **NOTE**: This native doesn't guarantee the persistence of the entity.
 * @param entity The entity to set the orphan mode of
 * @param orphanMode The mode that the server should use for determining if an entity should be removed.
 */
declare function SetEntityOrphanMode(entity: number, orphanMode: number): void;

/**
 * Sets the rotation of a specified entity in the game world.
 * ```
 * NativeDB Introduced: v323
 * ```
 * @param entity The entity to rotate.
 * @param pitch The pitch (X-axis) rotation in degrees.
 * @param roll The roll (Y-axis) rotation in degrees.
 * @param yaw The yaw (Z-axis) rotation in degrees.
 * @param rotationOrder Specifies the order in which yaw, pitch, and roll are applied, see [`GET_ENTITY_ROTATION`](#\_0xAFBD61CC738D9EB9) for the available rotation orders.
 * @param bDeadCheck Usually set to `true`. Determines whether to check if the entity is dead before applying the rotation.
 */
declare function SetEntityRotation(entity: number, pitch: number, roll: number, yaw: number, rotationOrder: number, bDeadCheck: boolean): void;

/**
 * Sets the routing bucket for the specified entity.
 * Routing buckets are also known as 'dimensions' or 'virtual worlds' in past echoes, however they are population-aware.
 * @param entity The entity to set the routing bucket for.
 * @param bucket The bucket ID.
 */
declare function SetEntityRoutingBucket(entity: number, bucket: number): void;

/**
 * Note that the third parameter(denoted as z) is "up and down" with positive numbers encouraging upwards movement.
 */
declare function SetEntityVelocity(entity: number, x: number, y: number, z: number): void;

/**
 * SET_GAME_TYPE
 */
declare function SetGameType(gametypeName: string): void;

/**
 * Sets the handler for HTTP requests made to the executing resource.
 * Example request URL: `http://localhost:30120/http-test/ping` - this request will be sent to the `http-test` resource with the `/ping` path.
 * The handler function assumes the following signature:
 * ```ts
 * function HttpHandler(
 * request: {
 * address: string;
 * headers: Record<string, string>;
 * method: string;
 * path: string;
 * setDataHandler(handler: (data: string) => void): void;
 * setDataHandler(handler: (data: ArrayBuffer) => void, binary: 'binary'): void;
 * setCancelHandler(handler: () => void): void;
 * },
 * response: {
 * writeHead(code: number, headers?: Record<string, string | string[]>): void;
 * write(data: string): void;
 * send(data?: string): void;
 * }
 * ): void;
 * ```
 * *   **request**: The request object.
 * *   **address**: The IP address of the request sender.
 * *   **path**: The path to where the request was sent.
 * *   **headers**: The headers sent with the request.
 * *   **method**: The request method.
 * *   **setDataHandler**: Sets the handler for when a data body is passed with the request. Additionally you can pass the `'binary'` argument to receive a `BufferArray` in JavaScript or `System.Byte[]` in C# (has no effect in Lua).
 * *   **setCancelHandler**: Sets the handler for when the request is cancelled.
 * *   **response**: An object to control the response.
 * *   **writeHead**: Sets the status code & headers of the response. Can be only called once and won't work if called after running other response functions.
 * *   **write**: Writes to the response body without sending it. Can be called multiple times.
 * *   **send**: Writes to the response body and then sends it along with the status code & headers, finishing the request.
 * @param handler The handler function.
 */
declare function SetHttpHandler(handler: Function): void;

/**
 * SET_MAP_NAME
 */
declare function SetMapName(mapName: string): void;

/**
 * NativeDB Added Parameter 4: BOOL p3
 */
declare function SetPedAmmo(ped: number, weaponHash: string | number, ammo: number): void;

/**
 * Sets the armor of the specified ped.
 * ped: The Ped to set the armor of.
 * amount: A value between 0 and 100 indicating the value to set the Ped's armor to.
 */
declare function SetPedArmour(ped: number, amount: number): void;

/**
 * SET_PED_CAN_RAGDOLL
 */
declare function SetPedCanRagdoll(ped: number, toggle: boolean): void;

/**
 * This native is used to set component variation on a ped. Components, drawables and textures IDs are related to the ped model.
 * ### MP Freemode list of components
 * **0**: Face
 * **1**: Mask
 * **2**: Hair
 * **3**: Torso
 * **4**: Leg
 * **5**: Parachute / bag
 * **6**: Shoes
 * **7**: Accessory
 * **8**: Undershirt
 * **9**: Kevlar
 * **10**: Badge
 * **11**: Torso 2
 * List of Component IDs
 * ```cpp
 * // Components
 * enum ePedVarComp
 * {
 * PV_COMP_INVALID = 0xFFFFFFFF,
 * PV_COMP_HEAD = 0, // "HEAD"
 * PV_COMP_BERD = 1, // "BEARD"
 * PV_COMP_HAIR = 2, // "HAIR"
 * PV_COMP_UPPR = 3, // "UPPER"
 * PV_COMP_LOWR = 4, // "LOWER"
 * PV_COMP_HAND = 5, // "HAND"
 * PV_COMP_FEET = 6, // "FEET"
 * PV_COMP_TEEF = 7, // "TEETH"
 * PV_COMP_ACCS = 8, // "ACCESSORIES"
 * PV_COMP_TASK = 9, // "TASK"
 * PV_COMP_DECL = 10, // "DECL"
 * PV_COMP_JBIB = 11, // "JBIB"
 * PV_COMP_MAX = 12,
 * };
 * ```
 * @param ped The ped handle.
 * @param componentId The component that you want to set.
 * @param drawableId The drawable id that is going to be set. Refer to [GET_NUMBER_OF_PED_DRAWABLE_VARIATIONS](#\_0x27561561732A7842).
 * @param textureId The texture id of the drawable. Refer to [GET_NUMBER_OF_PED_TEXTURE_VARIATIONS](#\_0x8F7156A3142A6BAD).
 * @param paletteId 0 to 3.
 */
declare function SetPedComponentVariation(ped: number, componentId: number, drawableId: number, textureId: number, paletteId: number): void;

/**
 * cpp
 * // Potential names and hash collisions included as comments
 * enum ePedConfigFlags {
 * CPED_CONFIG_FLAG_CreatedByFactory = 0,
 * CPED_CONFIG_FLAG_CanBeShotInVehicle = 1,
 * CPED_CONFIG_FLAG_NoCriticalHits = 2,
 * CPED_CONFIG_FLAG_DrownsInWater = 3,
 * CPED_CONFIG_FLAG_DrownsInSinkingVehicle = 4,
 * CPED_CONFIG_FLAG_DiesInstantlyWhenSwimming = 5,
 * CPED_CONFIG_FLAG_HasBulletProofVest = 6,
 * CPED_CONFIG_FLAG_UpperBodyDamageAnimsOnly = 7,
 * CPED_CONFIG_FLAG_NeverFallOffSkis = 8,
 * CPED_CONFIG_FLAG_NeverEverTargetThisPed = 9,
 * CPED_CONFIG_FLAG_ThisPedIsATargetPriority = 10,
 * CPED_CONFIG_FLAG_TargettableWithNoLos = 11,
 * CPED_CONFIG_FLAG_DoesntListenToPlayerGroupCommands = 12,
 * CPED_CONFIG_FLAG_NeverLeavesGroup = 13,
 * CPED_CONFIG_FLAG_DoesntDropWeaponsWhenDead = 14,
 * CPED_CONFIG_FLAG_SetDelayedWeaponAsCurrent = 15,
 * CPED_CONFIG_FLAG_KeepTasksAfterCleanUp = 16,
 * CPED_CONFIG_FLAG_BlockNonTemporaryEvents = 17,
 * CPED_CONFIG_FLAG_HasAScriptBrain = 18,
 * CPED_CONFIG_FLAG_WaitingForScriptBrainToLoad = 19,
 * CPED_CONFIG_FLAG_AllowMedicsToReviveMe = 20,
 * CPED_CONFIG_FLAG_MoneyHasBeenGivenByScript = 21,
 * CPED_CONFIG_FLAG_NotAllowedToCrouch = 22,
 * CPED_CONFIG_FLAG_DeathPickupsPersist = 23,
 * CPED_CONFIG_FLAG_IgnoreSeenMelee = 24,
 * CPED_CONFIG_FLAG_ForceDieIfInjured = 25,
 * CPED_CONFIG_FLAG_DontDragMeOutCar = 26,
 * CPED_CONFIG_FLAG_StayInCarOnJack = 27,
 * CPED_CONFIG_FLAG_ForceDieInCar = 28,
 * CPED_CONFIG_FLAG_GetOutUndriveableVehicle = 29,
 * CPED_CONFIG_FLAG_WillRemainOnBoatAfterMissionEnds = 30,
 * CPED_CONFIG_FLAG_DontStoreAsPersistent = 31,
 * CPED_CONFIG_FLAG_WillFlyThroughWindscreen = 32,
 * CPED_CONFIG_FLAG_DieWhenRagdoll = 33,
 * CPED_CONFIG_FLAG_HasHelmet = 34,
 * CPED_CONFIG_FLAG_UseHelmet = 35,
 * CPED_CONFIG_FLAG_DontTakeOffHelmet = 36,
 * CPED_CONFIG_FLAG_HideInCutscene = 37,
 * CPED_CONFIG_FLAG_PedIsEnemyToPlayer = 38,
 * CPED_CONFIG_FLAG_DisableEvasiveDives = 39,
 * CPED_CONFIG_FLAG_PedGeneratesDeadBodyEvents = 40,
 * CPED_CONFIG_FLAG_DontAttackPlayerWithoutWantedLevel = 41,
 * CPED_CONFIG_FLAG_DontInfluenceWantedLevel = 42,
 * CPED_CONFIG_FLAG_DisablePlayerLockon = 43,
 * CPED_CONFIG_FLAG_DisableLockonToRandomPeds = 44,
 * CPED_CONFIG_FLAG_AllowLockonToFriendlyPlayers = 45,
 * _0xDB115BFA = 46,
 * CPED_CONFIG_FLAG_PedBeingDeleted = 47,
 * CPED_CONFIG_FLAG_BlockWeaponSwitching = 48,
 * CPED_CONFIG_FLAG_BlockGroupPedAimedAtResponse = 49,
 * CPED_CONFIG_FLAG_WillFollowLeaderAnyMeans = 50,
 * CPED_CONFIG_FLAG_BlippedByScript = 51,
 * CPED_CONFIG_FLAG_DrawRadarVisualField = 52,
 * CPED_CONFIG_FLAG_StopWeaponFiringOnImpact = 53,
 * CPED_CONFIG_FLAG_DissableAutoFallOffTests = 54,
 * CPED_CONFIG_FLAG_SteerAroundDeadBodies = 55,
 * CPED_CONFIG_FLAG_ConstrainToNavMesh = 56,
 * CPED_CONFIG_FLAG_SyncingAnimatedProps = 57,
 * CPED_CONFIG_FLAG_IsFiring = 58,
 * CPED_CONFIG_FLAG_WasFiring = 59,
 * CPED_CONFIG_FLAG_IsStanding = 60,
 * CPED_CONFIG_FLAG_WasStanding = 61,
 * CPED_CONFIG_FLAG_InVehicle = 62,
 * CPED_CONFIG_FLAG_OnMount = 63,
 * CPED_CONFIG_FLAG_AttachedToVehicle = 64,
 * CPED_CONFIG_FLAG_IsSwimming = 65,
 * CPED_CONFIG_FLAG_WasSwimming = 66,
 * CPED_CONFIG_FLAG_IsSkiing = 67,
 * CPED_CONFIG_FLAG_IsSitting = 68,
 * CPED_CONFIG_FLAG_KilledByStealth = 69,
 * CPED_CONFIG_FLAG_KilledByTakedown = 70,
 * CPED_CONFIG_FLAG_Knockedout = 71,
 * CPED_CONFIG_FLAG_ClearRadarBlipOnDeath = 72,
 * CPED_CONFIG_FLAG_JustGotOffTrain = 73,
 * CPED_CONFIG_FLAG_JustGotOnTrain = 74,
 * CPED_CONFIG_FLAG_UsingCoverPoint = 75,
 * CPED_CONFIG_FLAG_IsInTheAir = 76,
 * CPED_CONFIG_FLAG_KnockedUpIntoAir = 77,
 * CPED_CONFIG_FLAG_IsAimingGun = 78,
 * CPED_CONFIG_FLAG_HasJustLeftCar = 79,
 * CPED_CONFIG_FLAG_TargetWhenInjuredAllowed = 80,
 * CPED_CONFIG_FLAG_CurrLeftFootCollNM = 81,
 * CPED_CONFIG_FLAG_PrevLeftFootCollNM = 82,
 * CPED_CONFIG_FLAG_CurrRightFootCollNM = 83,
 * CPED_CONFIG_FLAG_PrevRightFootCollNM = 84,
 * CPED_CONFIG_FLAG_HasBeenBumpedInCar = 85,
 * CPED_CONFIG_FLAG_InWaterTaskQuitToClimbLadder = 86,
 * CPED_CONFIG_FLAG_NMTwoHandedWeaponBothHandsConstrained = 87,
 * CPED_CONFIG_FLAG_CreatedBloodPoolTimer = 88,
 * CPED_CONFIG_FLAG_DontActivateRagdollFromAnyPedImpact = 89,
 * CPED_CONFIG_FLAG_GroupPedFailedToEnterCover = 90,
 * CPED_CONFIG_FLAG_AlreadyChattedOnPhone = 91,
 * CPED_CONFIG_FLAG_AlreadyReactedToPedOnRoof = 92,
 * CPED_CONFIG_FLAG_ForcePedLoadCover = 93,
 * CPED_CONFIG_FLAG_BlockCoweringInCover = 94,
 * CPED_CONFIG_FLAG_BlockPeekingInCover = 95,
 * CPED_CONFIG_FLAG_JustLeftCarNotCheckedForDoors = 96,
 * CPED_CONFIG_FLAG_VaultFromCover = 97,
 * CPED_CONFIG_FLAG_AutoConversationLookAts = 98,
 * CPED_CONFIG_FLAG_UsingCrouchedPedCapsule = 99,
 * CPED_CONFIG_FLAG_HasDeadPedBeenReported = 100,
 * CPED_CONFIG_FLAG_ForcedAim = 101,
 * CPED_CONFIG_FLAG_SteersAroundPeds = 102,
 * CPED_CONFIG_FLAG_SteersAroundObjects = 103,
 * CPED_CONFIG_FLAG_OpenDoorArmIK = 104,
 * CPED_CONFIG_FLAG_ForceReload = 105,
 * CPED_CONFIG_FLAG_DontActivateRagdollFromVehicleImpact = 106,
 * CPED_CONFIG_FLAG_DontActivateRagdollFromBulletImpact = 107,
 * CPED_CONFIG_FLAG_DontActivateRagdollFromExplosions = 108,
 * CPED_CONFIG_FLAG_DontActivateRagdollFromFire = 109,
 * CPED_CONFIG_FLAG_DontActivateRagdollFromElectrocution = 110,
 * CPED_CONFIG_FLAG_IsBeingDraggedToSafety = 111,
 * CPED_CONFIG_FLAG_HasBeenDraggedToSafety = 112,
 * CPED_CONFIG_FLAG_KeepWeaponHolsteredUnlessFired = 113,
 * CPED_CONFIG_FLAG_ForceScriptControlledKnockout = 114,
 * CPED_CONFIG_FLAG_FallOutOfVehicleWhenKilled = 115,
 * CPED_CONFIG_FLAG_GetOutBurningVehicle = 116,
 * CPED_CONFIG_FLAG_BumpedByPlayer = 117,
 * CPED_CONFIG_FLAG_RunFromFiresAndExplosions = 118,
 * CPED_CONFIG_FLAG_TreatAsPlayerDuringTargeting = 119,
 * CPED_CONFIG_FLAG_IsHandCuffed = 120,
 * CPED_CONFIG_FLAG_IsAnkleCuffed = 121,
 * CPED_CONFIG_FLAG_DisableMelee = 122,
 * CPED_CONFIG_FLAG_DisableUnarmedDrivebys = 123,
 * CPED_CONFIG_FLAG_JustGetsPulledOutWhenElectrocuted = 124,
 * CPED_CONFIG_FLAG_UNUSED_REPLACE_ME = 125,
 * CPED_CONFIG_FLAG_WillNotHotwireLawEnforcementVehicle = 126,
 * CPED_CONFIG_FLAG_WillCommandeerRatherThanJack = 127,
 * CPED_CONFIG_FLAG_CanBeAgitated = 128,
 * CPED_CONFIG_FLAG_ForcePedToFaceLeftInCover = 129,
 * CPED_CONFIG_FLAG_ForcePedToFaceRightInCover = 130,
 * CPED_CONFIG_FLAG_BlockPedFromTurningInCover = 131,
 * CPED_CONFIG_FLAG_KeepRelationshipGroupAfterCleanUp = 132,
 * CPED_CONFIG_FLAG_ForcePedToBeDragged = 133,
 * CPED_CONFIG_FLAG_PreventPedFromReactingToBeingJacked = 134,
 * CPED_CONFIG_FLAG_IsScuba = 135,
 * CPED_CONFIG_FLAG_WillArrestRatherThanJack = 136,
 * CPED_CONFIG_FLAG_RemoveDeadExtraFarAway = 137,
 * CPED_CONFIG_FLAG_RidingTrain = 138,
 * CPED_CONFIG_FLAG_ArrestResult = 139,
 * CPED_CONFIG_FLAG_CanAttackFriendly = 140,
 * CPED_CONFIG_FLAG_WillJackAnyPlayer = 141,
 * CPED_CONFIG_FLAG_BumpedByPlayerVehicle = 142,
 * CPED_CONFIG_FLAG_DodgedPlayerVehicle = 143,
 * CPED_CONFIG_FLAG_WillJackWantedPlayersRatherThanStealCar = 144,
 * CPED_CONFIG_FLAG_NoCopWantedAggro = 145,
 * CPED_CONFIG_FLAG_DisableLadderClimbing = 146,
 * CPED_CONFIG_FLAG_StairsDetected = 147,
 * CPED_CONFIG_FLAG_SlopeDetected = 148,
 * CPED_CONFIG_FLAG_HelmetHasBeenShot = 149,
 * CPED_CONFIG_FLAG_CowerInsteadOfFlee = 150,
 * CPED_CONFIG_FLAG_CanActivateRagdollWhenVehicleUpsideDown = 151,
 * CPED_CONFIG_FLAG_AlwaysRespondToCriesForHelp = 152,
 * CPED_CONFIG_FLAG_DisableBloodPoolCreation = 153,
 * CPED_CONFIG_FLAG_ShouldFixIfNoCollision = 154,
 * CPED_CONFIG_FLAG_CanPerformArrest = 155,
 * CPED_CONFIG_FLAG_CanPerformUncuff = 156,
 * CPED_CONFIG_FLAG_CanBeArrested = 157,
 * CPED_CONFIG_FLAG_MoverConstrictedByOpposingCollisions = 158,
 * CPED_CONFIG_FLAG_PlayerPreferFrontSeatMP = 159,
 * CPED_CONFIG_FLAG_DontActivateRagdollFromImpactObject = 160,
 * CPED_CONFIG_FLAG_DontActivateRagdollFromMelee = 161,
 * CPED_CONFIG_FLAG_DontActivateRagdollFromWaterJet = 162,
 * CPED_CONFIG_FLAG_DontActivateRagdollFromDrowning = 163,
 * CPED_CONFIG_FLAG_DontActivateRagdollFromFalling = 164,
 * CPED_CONFIG_FLAG_DontActivateRagdollFromRubberBullet = 165,
 * CPED_CONFIG_FLAG_IsInjured = 166,
 * CPED_CONFIG_FLAG_DontEnterVehiclesInPlayersGroup = 167,
 * CPED_CONFIG_FLAG_SwimmingTasksRunning = 168,
 * CPED_CONFIG_FLAG_PreventAllMeleeTaunts = 169,
 * CPED_CONFIG_FLAG_ForceDirectEntry = 170,
 * CPED_CONFIG_FLAG_AlwaysSeeApproachingVehicles = 171,
 * CPED_CONFIG_FLAG_CanDiveAwayFromApproachingVehicles = 172,
 * CPED_CONFIG_FLAG_AllowPlayerToInterruptVehicleEntryExit = 173,
 * CPED_CONFIG_FLAG_OnlyAttackLawIfPlayerIsWanted = 174,
 * CPED_CONFIG_FLAG_PlayerInContactWithKinematicPed = 175,
 * CPED_CONFIG_FLAG_PlayerInContactWithSomethingOtherThanKinematicPed = 176,
 * CPED_CONFIG_FLAG_PedsJackingMeDontGetIn = 177,
 * CPED_CONFIG_FLAG_AdditionalRappellingPed = 178,
 * CPED_CONFIG_FLAG_PedIgnoresAnimInterruptEvents = 179,
 * CPED_CONFIG_FLAG_IsInCustody = 180,
 * CPED_CONFIG_FLAG_ForceStandardBumpReactionThresholds = 181,
 * CPED_CONFIG_FLAG_LawWillOnlyAttackIfPlayerIsWanted = 182,
 * CPED_CONFIG_FLAG_IsAgitated = 183,
 * CPED_CONFIG_FLAG_PreventAutoShuffleToDriversSeat = 184,
 * CPED_CONFIG_FLAG_UseKinematicModeWhenStationary = 185,
 * CPED_CONFIG_FLAG_EnableWeaponBlocking = 186,
 * CPED_CONFIG_FLAG_HasHurtStarted = 187,
 * CPED_CONFIG_FLAG_DisableHurt = 188,
 * CPED_CONFIG_FLAG_PlayerIsWeird = 189,
 * CPED_CONFIG_FLAG_PedHadPhoneConversation = 190,
 * CPED_CONFIG_FLAG_BeganCrossingRoad = 191,
 * CPED_CONFIG_FLAG_WarpIntoLeadersVehicle = 192,
 * CPED_CONFIG_FLAG_DoNothingWhenOnFootByDefault = 193,
 * CPED_CONFIG_FLAG_UsingScenario = 194,
 * CPED_CONFIG_FLAG_VisibleOnScreen = 195,
 * CPED_CONFIG_FLAG_DontCollideWithKinematic = 196,
 * CPED_CONFIG_FLAG_ActivateOnSwitchFromLowPhysicsLod = 197,
 * CPED_CONFIG_FLAG_DontActivateRagdollOnPedCollisionWhenDead = 198,
 * CPED_CONFIG_FLAG_DontActivateRagdollOnVehicleCollisionWhenDead = 199,
 * CPED_CONFIG_FLAG_HasBeenInArmedCombat = 200,
 * CPED_CONFIG_FLAG_UseDiminishingAmmoRate = 201,
 * CPED_CONFIG_FLAG_Avoidance_Ignore_All = 202,
 * CPED_CONFIG_FLAG_Avoidance_Ignored_by_All = 203,
 * CPED_CONFIG_FLAG_Avoidance_Ignore_Group1 = 204,
 * CPED_CONFIG_FLAG_Avoidance_Member_of_Group1 = 205,
 * CPED_CONFIG_FLAG_ForcedToUseSpecificGroupSeatIndex = 206,
 * CPED_CONFIG_FLAG_LowPhysicsLodMayPlaceOnNavMesh = 207,
 * CPED_CONFIG_FLAG_DisableExplosionReactions = 208,
 * CPED_CONFIG_FLAG_DodgedPlayer = 209,
 * CPED_CONFIG_FLAG_WaitingForPlayerControlInterrupt = 210,
 * CPED_CONFIG_FLAG_ForcedToStayInCover = 211,
 * CPED_CONFIG_FLAG_GeneratesSoundEvents = 212,
 * CPED_CONFIG_FLAG_ListensToSoundEvents = 213,
 * CPED_CONFIG_FLAG_AllowToBeTargetedInAVehicle = 214,
 * CPED_CONFIG_FLAG_WaitForDirectEntryPointToBeFreeWhenExiting = 215,
 * CPED_CONFIG_FLAG_OnlyRequireOnePressToExitVehicle = 216,
 * CPED_CONFIG_FLAG_ForceExitToSkyDive = 217,
 * CPED_CONFIG_FLAG_SteersAroundVehicles = 218,
 * CPED_CONFIG_FLAG_AllowPedInVehiclesOverrideTaskFlags = 219,
 * CPED_CONFIG_FLAG_DontEnterLeadersVehicle = 220,
 * CPED_CONFIG_FLAG_DisableExitToSkyDive = 221,
 * CPED_CONFIG_FLAG_ScriptHasDisabledCollision = 222,
 * CPED_CONFIG_FLAG_UseAmbientModelScaling = 223,
 * CPED_CONFIG_FLAG_DontWatchFirstOnNextHurryAway = 224,
 * CPED_CONFIG_FLAG_DisablePotentialToBeWalkedIntoResponse = 225,
 * CPED_CONFIG_FLAG_DisablePedAvoidance = 226,
 * CPED_CONFIG_FLAG_ForceRagdollUponDeath = 227,
 * CPED_CONFIG_FLAG_CanLosePropsOnDamage = 228,
 * CPED_CONFIG_FLAG_DisablePanicInVehicle = 229,
 * CPED_CONFIG_FLAG_AllowedToDetachTrailer = 230,
 * CPED_CONFIG_FLAG_HasShotBeenReactedToFromFront = 231,
 * CPED_CONFIG_FLAG_HasShotBeenReactedToFromBack = 232,
 * CPED_CONFIG_FLAG_HasShotBeenReactedToFromLeft = 233,
 * CPED_CONFIG_FLAG_HasShotBeenReactedToFromRight = 234,
 * CPED_CONFIG_FLAG_AllowBlockDeadPedRagdollActivation = 235,
 * CPED_CONFIG_FLAG_IsHoldingProp = 236,
 * CPED_CONFIG_FLAG_BlocksPathingWhenDead = 237,
 * CPED_CONFIG_FLAG_ForcePlayNormalScenarioExitOnNextScriptCommand = 238,
 * CPED_CONFIG_FLAG_ForcePlayImmediateScenarioExitOnNextScriptCommand = 239,
 * CPED_CONFIG_FLAG_ForceSkinCharacterCloth = 240,
 * CPED_CONFIG_FLAG_LeaveEngineOnWhenExitingVehicles = 241,
 * CPED_CONFIG_FLAG_PhoneDisableTextingAnimations = 242,
 * CPED_CONFIG_FLAG_PhoneDisableTalkingAnimations = 243,
 * CPED_CONFIG_FLAG_PhoneDisableCameraAnimations = 244,
 * CPED_CONFIG_FLAG_DisableBlindFiringInShotReactions = 245,
 * CPED_CONFIG_FLAG_AllowNearbyCoverUsage = 246,
 * CPED_CONFIG_FLAG_InStrafeTransition = 247,
 * CPED_CONFIG_FLAG_CanPlayInCarIdles = 248,
 * CPED_CONFIG_FLAG_CanAttackNonWantedPlayerAsLaw = 249,
 * CPED_CONFIG_FLAG_WillTakeDamageWhenVehicleCrashes = 250,
 * CPED_CONFIG_FLAG_AICanDrivePlayerAsRearPassenger = 251,
 * CPED_CONFIG_FLAG_PlayerCanJackFriendlyPlayers = 252,
 * CPED_CONFIG_FLAG_OnStairs = 253,
 * CPED_CONFIG_FLAG_SimulatingAiming = 254,
 * CPED_CONFIG_FLAG_AIDriverAllowFriendlyPassengerSeatEntry = 255,
 * CPED_CONFIG_FLAG_ParentCarIsBeingRemoved = 256,
 * CPED_CONFIG_FLAG_AllowMissionPedToUseInjuredMovement = 257,
 * CPED_CONFIG_FLAG_CanLoseHelmetOnDamage = 258,
 * CPED_CONFIG_FLAG_NeverDoScenarioExitProbeChecks = 259,
 * CPED_CONFIG_FLAG_SuppressLowLODRagdollSwitchWhenCorpseSettles = 260,
 * CPED_CONFIG_FLAG_PreventUsingLowerPrioritySeats = 261,
 * CPED_CONFIG_FLAG_JustLeftVehicleNeedsReset = 262,
 * CPED_CONFIG_FLAG_TeleportIfCantReachPlayer = 263,
 * CPED_CONFIG_FLAG_PedsInVehiclePositionNeedsReset = 264,
 * CPED_CONFIG_FLAG_PedsFullyInSeat = 265,
 * CPED_CONFIG_FLAG_AllowPlayerLockOnIfFriendly = 266,
 * CPED_CONFIG_FLAG_UseCameraHeadingForDesiredDirectionLockOnTest = 267,
 * CPED_CONFIG_FLAG_TeleportToLeaderVehicle = 268,
 * CPED_CONFIG_FLAG_Avoidance_Ignore_WeirdPedBuffer = 269,
 * CPED_CONFIG_FLAG_OnStairSlope = 270,
 * CPED_CONFIG_FLAG_HasPlayedNMGetup = 271,
 * CPED_CONFIG_FLAG_DontBlipCop = 272,
 * CPED_CONFIG_FLAG_SpawnedAtExtendedRangeScenario = 273,
 * CPED_CONFIG_FLAG_WalkAlongsideLeaderWhenClose = 274,
 * CPED_CONFIG_FLAG_KillWhenTrapped = 275,
 * CPED_CONFIG_FLAG_EdgeDetected = 276,
 * CPED_CONFIG_FLAG_AlwaysWakeUpPhysicsOfIntersectedPeds = 277,
 * CPED_CONFIG_FLAG_EquippedAmbientLoadOutWeapon = 278,
 * CPED_CONFIG_FLAG_AvoidTearGas = 279,
 * CPED_CONFIG_FLAG_StoppedSpeechUponFreezing = 280,
 * CPED_CONFIG_FLAG_DisableGoToWritheWhenInjured = 281,
 * CPED_CONFIG_FLAG_OnlyUseForcedSeatWhenEnteringHeliInGroup = 282,
 * CPED_CONFIG_FLAG_ThrownFromVehicleDueToExhaustion = 283,
 * CPED_CONFIG_FLAG_UpdateEnclosedSearchRegion = 284,
 * CPED_CONFIG_FLAG_DisableWeirdPedEvents = 285,
 * CPED_CONFIG_FLAG_ShouldChargeNow = 286,
 * CPED_CONFIG_FLAG_RagdollingOnBoat = 287,
 * CPED_CONFIG_FLAG_HasBrandishedWeapon = 288,
 * CPED_CONFIG_FLAG_AllowMinorReactionsAsMissionPed = 289,
 * CPED_CONFIG_FLAG_BlockDeadBodyShockingEventsWhenDead = 290,
 * CPED_CONFIG_FLAG_PedHasBeenSeen = 291,
 * CPED_CONFIG_FLAG_PedIsInReusePool = 292,
 * CPED_CONFIG_FLAG_PedWasReused = 293,
 * CPED_CONFIG_FLAG_DisableShockingEvents = 294,
 * CPED_CONFIG_FLAG_MovedUsingLowLodPhysicsSinceLastActive = 295,
 * CPED_CONFIG_FLAG_NeverReactToPedOnRoof = 296,
 * CPED_CONFIG_FLAG_ForcePlayFleeScenarioExitOnNextScriptCommand = 297,
 * CPED_CONFIG_FLAG_JustBumpedIntoVehicle = 298,
 * CPED_CONFIG_FLAG_DisableShockingDrivingOnPavementEvents = 299,
 * CPED_CONFIG_FLAG_ShouldThrowSmokeNow = 300,
 * CPED_CONFIG_FLAG_DisablePedConstraints = 301,
 * CPED_CONFIG_FLAG_ForceInitialPeekInCover = 302,
 * CPED_CONFIG_FLAG_CreatedByDispatch = 303,
 * CPED_CONFIG_FLAG_PointGunLeftHandSupporting = 304,
 * CPED_CONFIG_FLAG_DisableJumpingFromVehiclesAfterLeader = 305,
 * CPED_CONFIG_FLAG_DontActivateRagdollFromPlayerPedImpact = 306,
 * CPED_CONFIG_FLAG_DontActivateRagdollFromAiRagdollImpact = 307,
 * CPED_CONFIG_FLAG_DontActivateRagdollFromPlayerRagdollImpact = 308,
 * CPED_CONFIG_FLAG_DisableQuadrupedSpring = 309,
 * CPED_CONFIG_FLAG_IsInCluster = 310,
 * CPED_CONFIG_FLAG_ShoutToGroupOnPlayerMelee = 311,
 * CPED_CONFIG_FLAG_IgnoredByAutoOpenDoors = 312,
 * CPED_CONFIG_FLAG_PreferInjuredGetup = 313,
 * CPED_CONFIG_FLAG_ForceIgnoreMeleeActiveCombatant = 314,
 * CPED_CONFIG_FLAG_CheckLoSForSoundEvents = 315,
 * CPED_CONFIG_FLAG_JackedAbandonedCar = 316,
 * CPED_CONFIG_FLAG_CanSayFollowedByPlayerAudio = 317,
 * CPED_CONFIG_FLAG_ActivateRagdollFromMinorPlayerContact = 318,
 * CPED_CONFIG_FLAG_HasPortablePickupAttached = 319,
 * CPED_CONFIG_FLAG_ForcePoseCharacterCloth = 320,
 * CPED_CONFIG_FLAG_HasClothCollisionBounds = 321,
 * CPED_CONFIG_FLAG_HasHighHeels = 322,
 * CPED_CONFIG_FLAG_TreatAsAmbientPedForDriverLockOn = 323,
 * CPED_CONFIG_FLAG_DontBehaveLikeLaw = 324,
 * CPED_CONFIG_FLAG_SpawnedAtScenario = 325,
 * CPED_CONFIG_FLAG_DisablePoliceInvestigatingBody = 326,
 * CPED_CONFIG_FLAG_DisableWritheShootFromGround = 327,
 * CPED_CONFIG_FLAG_LowerPriorityOfWarpSeats = 328,
 * CPED_CONFIG_FLAG_DisableTalkTo = 329,
 * CPED_CONFIG_FLAG_DontBlip = 330,
 * CPED_CONFIG_FLAG_IsSwitchingWeapon = 331,
 * CPED_CONFIG_FLAG_IgnoreLegIkRestrictions = 332,
 * CPED_CONFIG_FLAG_ScriptForceNoTimesliceIntelligenceUpdate = 333,
 * CPED_CONFIG_FLAG_JackedOutOfMyVehicle = 334,
 * CPED_CONFIG_FLAG_WentIntoCombatAfterBeingJacked = 335,
 * CPED_CONFIG_FLAG_DontActivateRagdollForVehicleGrab = 336,
 * CPED_CONFIG_FLAG_ForcePackageCharacterCloth = 337,
 * CPED_CONFIG_FLAG_DontRemoveWithValidOrder = 338,
 * CPED_CONFIG_FLAG_AllowTaskDoNothingTimeslicing = 339,
 * CPED_CONFIG_FLAG_ForcedToStayInCoverDueToPlayerSwitch = 340,
 * CPED_CONFIG_FLAG_ForceProneCharacterCloth = 341,
 * CPED_CONFIG_FLAG_NotAllowedToJackAnyPlayers = 342,
 * CPED_CONFIG_FLAG_InToStrafeTransition = 343,
 * CPED_CONFIG_FLAG_KilledByStandardMelee = 344,
 * CPED_CONFIG_FLAG_AlwaysLeaveTrainUponArrival = 345,
 * CPED_CONFIG_FLAG_ForcePlayDirectedNormalScenarioExitOnNextScriptCommand = 346,
 * CPED_CONFIG_FLAG_OnlyWritheFromWeaponDamage = 347,
 * CPED_CONFIG_FLAG_UseSloMoBloodVfx = 348,
 * CPED_CONFIG_FLAG_EquipJetpack = 349,
 * CPED_CONFIG_FLAG_PreventDraggedOutOfCarThreatResponse = 350,
 * CPED_CONFIG_FLAG_ScriptHasCompletelyDisabledCollision = 351,
 * CPED_CONFIG_FLAG_NeverDoScenarioNavChecks = 352,
 * CPED_CONFIG_FLAG_ForceSynchronousScenarioExitChecking = 353,
 * CPED_CONFIG_FLAG_ThrowingGrenadeWhileAiming = 354,
 * CPED_CONFIG_FLAG_HeadbobToRadioEnabled = 355,
 * CPED_CONFIG_FLAG_ForceDeepSurfaceCheck = 356,
 * CPED_CONFIG_FLAG_DisableDeepSurfaceAnims = 357,
 * CPED_CONFIG_FLAG_DontBlipNotSynced = 358,
 * CPED_CONFIG_FLAG_IsDuckingInVehicle = 359,
 * CPED_CONFIG_FLAG_PreventAutoShuffleToTurretSeat = 360,
 * CPED_CONFIG_FLAG_DisableEventInteriorStatusCheck = 361,
 * CPED_CONFIG_FLAG_HasReserveParachute = 362,
 * CPED_CONFIG_FLAG_UseReserveParachute = 363,
 * CPED_CONFIG_FLAG_TreatDislikeAsHateWhenInCombat = 364,
 * CPED_CONFIG_FLAG_OnlyUpdateTargetWantedIfSeen = 365,
 * CPED_CONFIG_FLAG_AllowAutoShuffleToDriversSeat = 366,
 * CPED_CONFIG_FLAG_DontActivateRagdollFromSmokeGrenade = 367,
 * CPED_CONFIG_FLAG_LinkMBRToOwnerOnChain = 368,
 * CPED_CONFIG_FLAG_AmbientFriendBumpedByPlayer = 369,
 * CPED_CONFIG_FLAG_AmbientFriendBumpedByPlayerVehicle = 370,
 * CPED_CONFIG_FLAG_InFPSUnholsterTransition = 371,
 * CPED_CONFIG_FLAG_PreventReactingToSilencedCloneBullets = 372,
 * CPED_CONFIG_FLAG_DisableInjuredCryForHelpEvents = 373,
 * CPED_CONFIG_FLAG_NeverLeaveTrain = 374,
 * CPED_CONFIG_FLAG_DontDropJetpackOnDeath = 375,
 * CPED_CONFIG_FLAG_UseFPSUnholsterTransitionDuringCombatRoll = 376,
 * CPED_CONFIG_FLAG_ExitingFPSCombatRoll = 377,
 * CPED_CONFIG_FLAG_ScriptHasControlOfPlayer = 378,
 * CPED_CONFIG_FLAG_PlayFPSIdleFidgetsForProjectile = 379,
 * CPED_CONFIG_FLAG_DisableAutoEquipHelmetsInBikes = 380,
 * CPED_CONFIG_FLAG_DisableAutoEquipHelmetsInAircraft = 381,
 * CPED_CONFIG_FLAG_WasPlayingFPSGetup = 382,
 * CPED_CONFIG_FLAG_WasPlayingFPSMeleeActionResult = 383,
 * CPED_CONFIG_FLAG_PreferNoPriorityRemoval = 384,
 * CPED_CONFIG_FLAG_FPSFidgetsAbortedOnFire = 385,
 * CPED_CONFIG_FLAG_ForceFPSIKWithUpperBodyAnim = 386,
 * CPED_CONFIG_FLAG_SwitchingCharactersInFirstPerson = 387,
 * CPED_CONFIG_FLAG_IsClimbingLadder = 388,
 * CPED_CONFIG_FLAG_HasBareFeet = 389,
 * CPED_CONFIG_FLAG_UNUSED_REPLACE_ME_2 = 390,
 * CPED_CONFIG_FLAG_GoOnWithoutVehicleIfItIsUnableToGetBackToRoad = 391,
 * CPED_CONFIG_FLAG_BlockDroppingHealthSnacksOnDeath = 392,
 * CPED_CONFIG_FLAG_ResetLastVehicleOnVehicleExit = 393,
 * CPED_CONFIG_FLAG_ForceThreatResponseToNonFriendToFriendMeleeActions = 394,
 * CPED_CONFIG_FLAG_DontRespondToRandomPedsDamage = 395,
 * CPED_CONFIG_FLAG_AllowContinuousThreatResponseWantedLevelUpdates = 396,
 * CPED_CONFIG_FLAG_KeepTargetLossResponseOnCleanup = 397,
 * CPED_CONFIG_FLAG_PlayersDontDragMeOutOfCar = 398,
 * CPED_CONFIG_FLAG_BroadcastRepondedToThreatWhenGoingToPointShooting = 399,
 * CPED_CONFIG_FLAG_IgnorePedTypeForIsFriendlyWith = 400,
 * CPED_CONFIG_FLAG_TreatNonFriendlyAsHateWhenInCombat = 401,
 * CPED_CONFIG_FLAG_DontLeaveVehicleIfLeaderNotInVehicle = 402,
 * CPED_CONFIG_FLAG_ChangeFromPermanentToAmbientPopTypeOnMigration = 403,
 * CPED_CONFIG_FLAG_AllowMeleeReactionIfMeleeProofIsOn = 404,
 * CPED_CONFIG_FLAG_UsingLowriderLeans = 405,
 * CPED_CONFIG_FLAG_UsingAlternateLowriderLeans = 406,
 * CPED_CONFIG_FLAG_UseNormalExplosionDamageWhenBlownUpInVehicle = 407,
 * CPED_CONFIG_FLAG_DisableHomingMissileLockForVehiclePedInside = 408,
 * CPED_CONFIG_FLAG_DisableTakeOffScubaGear = 409,
 * CPED_CONFIG_FLAG_IgnoreMeleeFistWeaponDamageMult = 410,
 * CPED_CONFIG_FLAG_LawPedsCanFleeFromNonWantedPlayer = 411,
 * CPED_CONFIG_FLAG_ForceBlipSecurityPedsIfPlayerIsWanted = 412,
 * CPED_CONFIG_FLAG_IsHolsteringWeapon = 413,
 * CPED_CONFIG_FLAG_UseGoToPointForScenarioNavigation = 414,
 * CPED_CONFIG_FLAG_DontClearLocalPassengersWantedLevel = 415,
 * CPED_CONFIG_FLAG_BlockAutoSwapOnWeaponPickups = 416,
 * CPED_CONFIG_FLAG_ThisPedIsATargetPriorityForAI = 417,
 * CPED_CONFIG_FLAG_IsSwitchingHelmetVisor = 418,
 * CPED_CONFIG_FLAG_ForceHelmetVisorSwitch = 419,
 * CPED_CONFIG_FLAG_IsPerformingVehicleMelee = 420,
 * CPED_CONFIG_FLAG_UseOverrideFootstepPtFx = 421,
 * CPED_CONFIG_FLAG_DisableVehicleCombat = 422,
 * CPED_CONFIG_FLAG_TreatAsFriendlyForTargetingAndDamage = 423,
 * CPED_CONFIG_FLAG_AllowBikeAlternateAnimations = 424,
 * CPED_CONFIG_FLAG_TreatAsFriendlyForTargetingAndDamageNonSynced = 425,
 * CPED_CONFIG_FLAG_UseLockpickVehicleEntryAnimations = 426,
 * CPED_CONFIG_FLAG_IgnoreInteriorCheckForSprinting = 427,
 * CPED_CONFIG_FLAG_SwatHeliSpawnWithinLastSpottedLocation = 428,
 * CPED_CONFIG_FLAG_DisableStartEngine = 429,
 * CPED_CONFIG_FLAG_IgnoreBeingOnFire = 430,
 * CPED_CONFIG_FLAG_DisableTurretOrRearSeatPreference = 431,
 * CPED_CONFIG_FLAG_DisableWantedHelicopterSpawning = 432,
 * CPED_CONFIG_FLAG_UseTargetPerceptionForCreatingAimedAtEvents = 433,
 * CPED_CONFIG_FLAG_DisableHomingMissileLockon = 434,
 * CPED_CONFIG_FLAG_ForceIgnoreMaxMeleeActiveSupportCombatants = 435,
 * CPED_CONFIG_FLAG_StayInDefensiveAreaWhenInVehicle = 436,
 * CPED_CONFIG_FLAG_DontShoutTargetPosition = 437,
 * CPED_CONFIG_FLAG_DisableHelmetArmor = 438,
 * CPED_CONFIG_FLAG_CreatedByConcealedPlayer = 439,
 * CPED_CONFIG_FLAG_PermanentlyDisablePotentialToBeWalkedIntoResponse = 440,
 * CPED_CONFIG_FLAG_PreventVehExitDueToInvalidWeapon = 441,
 * CPED_CONFIG_FLAG_IgnoreNetSessionFriendlyFireCheckForAllowDamage = 442,
 * CPED_CONFIG_FLAG_DontLeaveCombatIfTargetPlayerIsAttackedByPolice = 443,
 * CPED_CONFIG_FLAG_CheckLockedBeforeWarp = 444,
 * CPED_CONFIG_FLAG_DontShuffleInVehicleToMakeRoom = 445,
 * CPED_CONFIG_FLAG_GiveWeaponOnGetup = 446,
 * CPED_CONFIG_FLAG_DontHitVehicleWithProjectiles = 447,
 * CPED_CONFIG_FLAG_DisableForcedEntryForOpenVehiclesFromTryLockedDoor = 448,
 * CPED_CONFIG_FLAG_FiresDummyRockets = 449,
 * CPED_CONFIG_FLAG_PedIsArresting = 450,
 * CPED_CONFIG_FLAG_IsDecoyPed = 451,
 * CPED_CONFIG_FLAG_HasEstablishedDecoy = 452,
 * CPED_CONFIG_FLAG_BlockDispatchedHelicoptersFromLanding = 453,
 * CPED_CONFIG_FLAG_DontCryForHelpOnStun = 454,
 * CPED_CONFIG_FLAG_HitByTranqWeapon = 455,
 * CPED_CONFIG_FLAG_CanBeIncapacitated = 456,
 * CPED_CONFIG_FLAG_ForcedAimFromArrest = 457,
 * CPED_CONFIG_FLAG_DontChangeTargetFromMelee = 458,
 * _0x4376ABF2 = 459,
 * CPED_CONFIG_FLAG_RagdollFloatsIndefinitely = 460,
 * CPED_CONFIG_FLAG_BlockElectricWeaponDamage = 461,
 * _0x262A3B8E = 462,
 * _0x1AA79A25 = 463,
 * }
 */
declare function SetPedConfigFlag(ped: number, flagId: number, value: boolean): void;

/**
 * Sets Ped Default Clothes
 */
declare function SetPedDefaultComponentVariation(ped: number): void;

/**
 * Used for freemode (online) characters.
 * Indices:
 * 1.  black
 * 2.  very light blue/green
 * 3.  dark blue
 * 4.  brown
 * 5.  darker brown
 * 6.  light brown
 * 7.  blue
 * 8.  light blue
 * 9.  pink
 * 10. yellow
 * 11. purple
 * 12. black
 * 13. dark green
 * 14. light brown
 * 15. yellow/black pattern
 * 16. light colored spiral pattern
 * 17. shiny red
 * 18. shiny half blue/half red
 * 19. half black/half light blue
 * 20. white/red perimter
 * 21. green snake
 * 22. red snake
 * 23. dark blue snake
 * 24. dark yellow
 * 25. bright yellow
 * 26. all black
 * 27. red small pupil
 * 28. devil blue/black
 * 29. white small pupil
 * 30. glossed over
 */
declare function SetPedEyeColor(ped: number, index: number): void;

/**
 * Sets the various freemode face features, e.g. nose length, chin shape.
 * **Indexes (From 0 to 19):**
 * Parentheses indicate morph scale/direction as in (-1.0 to 1.0)
 * *   **0**: Nose Width (Thin/Wide)
 * *   **1**: Nose Peak (Up/Down)
 * *   **2**: Nose Length (Long/Short)
 * *   **3**: Nose Bone Curveness (Crooked/Curved)
 * *   **4**: Nose Tip (Up/Down)
 * *   **5**: Nose Bone Twist (Left/Right)
 * *   **6**: Eyebrow (Up/Down)
 * *   **7**: Eyebrow (In/Out)
 * *   **8**: Cheek Bones (Up/Down)
 * *   **9**: Cheek Sideways Bone Size (In/Out)
 * *   **10**: Cheek Bones Width (Puffed/Gaunt)
 * *   **11**: Eye Opening (Both) (Wide/Squinted)
 * *   **12**: Lip Thickness (Both) (Fat/Thin)
 * *   **13**: Jaw Bone Width (Narrow/Wide)
 * *   **14**: Jaw Bone Shape (Round/Square)
 * *   **15**: Chin Bone (Up/Down)
 * *   **16**: Chin Bone Length (In/Out or Backward/Forward)
 * *   **17**: Chin Bone Shape (Pointed/Square)
 * *   **18**: Chin Hole (Chin Bum)
 * *   **19**: Neck Thickness (Thin/Thick)
 * **Note:**
 * You may need to call [`SetPedHeadBlendData`](#\_0x9414E18B9434C2FE) prior to calling this native in order for it to work.
 * @param ped The ped entity
 * @param index An integer ranging from 0 to 19
 * @param scale A float ranging from -1.0 to 1.0
 */
declare function SetPedFaceFeature(ped: number, index: number, scale: number): void;

/**
 * Sets the tint index for the hair on the specified ped.
 * ```
 * NativeDB Introduced: v323
 * ```
 * @param ped The Ped whose hair tint is to be set.
 * @param colorID The tint index for the primary hair color.
 * @param highlightColorID The tint index for the hair highlight color.
 */
declare function SetPedHairTint(ped: number, colorID: number, highlightColorID: number): void;
/**
 * Sets the tint index for the hair on the specified ped.
 * ```
 * NativeDB Introduced: v323
 * ```
 * @param ped The Ped whose hair tint is to be set.
 * @param colorID The tint index for the primary hair color.
 * @param highlightColorID The tint index for the hair highlight color.
 */
declare function SetPedHairColor(ped: number, colorID: number, highlightColorID: number): void;

/**
 * For more info please refer to [this](https://gtaforums.com/topic/858970-all-gtao-face-ids-pedset-ped-head-blend-data-explained) topic.
 * **Other information:**
 * IDs start at zero and go Male Non-DLC, Female Non-DLC, Male DLC, and Female DLC.</br>
 * This native function is often called prior to calling natives such as:
 * *   [`SetPedHairColor`](#\_0xBB43F090)
 * *   [`SetPedHeadOverlayColor`](#\_0x78935A27)
 * *   [`SetPedHeadOverlay`](#\_0xD28DBA90)
 * *   [`SetPedFaceFeature`](#\_0x6C8D4458)
 * @param ped The ped entity
 * @param shapeFirstID Controls the shape of the first ped's face
 * @param shapeSecondID Controls the shape of the second ped's face
 * @param shapeThirdID Controls the shape of the third ped's face
 * @param skinFirstID Controls the first id's skin tone
 * @param skinSecondID Controls the second id's skin tone
 * @param skinThirdID Controls the third id's skin tone
 * @param shapeMix 0.0 - 1.0 Of whose characteristics to take Mother -> Father (shapeFirstID and shapeSecondID)
 * @param skinMix 0.0 - 1.0 Of whose characteristics to take Mother -> Father (skinFirstID and skinSecondID)
 * @param thirdMix Overrides the others in favor of the third IDs.
 * @param isParent IsParent is set for "children" of the player character's grandparents during old-gen character creation. It has unknown effect otherwise.
 */
declare function SetPedHeadBlendData(ped: number, shapeFirstID: number, shapeSecondID: number, shapeThirdID: number, skinFirstID: number, skinSecondID: number, skinThirdID: number, shapeMix: number, skinMix: number, thirdMix: number, isParent: boolean): void;

/**
 * ```
 * OverlayID ranges from 0 to 12, index from 0 to _GET_NUM_OVERLAY_VALUES(overlayID)-1, and opacity from 0.0 to 1.0.
 * overlayID       Part                  Index, to disable
 * 0               Blemishes             0 - 23, 255
 * 1               Facial Hair           0 - 28, 255
 * 2               Eyebrows              0 - 33, 255
 * 3               Ageing                0 - 14, 255
 * 4               Makeup                0 - 74, 255
 * 5               Blush                 0 - 6, 255
 * 6               Complexion            0 - 11, 255
 * 7               Sun Damage            0 - 10, 255
 * 8               Lipstick              0 - 9, 255
 * 9               Moles/Freckles        0 - 17, 255
 * 10              Chest Hair            0 - 16, 255
 * 11              Body Blemishes        0 - 11, 255
 * 12              Add Body Blemishes    0 - 1, 255
 * ```
 * **Note:**
 * You may need to call [`SetPedHeadBlendData`](#\_0x9414E18B9434C2FE) prior to calling this native in order for it to work.
 * @param ped The ped entity
 * @param overlayID The overlay id displayed up above.
 * @param index An integer representing the index (from 0 to `_GET_NUM_OVERLAY_VALUES(overlayID)-1`)
 * @param opacity A float ranging from 0.0 to 1.0
 */
declare function SetPedHeadOverlay(ped: number, overlayID: number, index: number, opacity: number): void;

/**
 * ```
 * Used for freemode (online) characters.
 * Called after SET_PED_HEAD_OVERLAY().
 * ```
 * **Note:**
 * You may need to call [`SetPedHeadBlendData`](#\_0x9414E18B9434C2FE) prior to calling this native in order for it to work.
 * @param ped The ped entity
 * @param overlayID An integer representing the overlay id
 * @param colorType 1 for eyebrows, beards, makeup, and chest hair; 2 for blush and lipstick; and 0 otherwise, though not called in those cases.
 * @param colorID An integer representing the primary color id
 * @param secondColorID An integer representing the secondary color id
 */
declare function SetPedHeadOverlayColor(ped: number, overlayID: number, colorType: number, colorID: number, secondColorID: number): void;

/**
 * SET_PED_INTO_VEHICLE
 * @param seatIndex See eSeatPosition declared in [`IS_VEHICLE_SEAT_FREE`](#\_0x22AC59A870E6A669). -2 for the first available seat.
 */
declare function SetPedIntoVehicle(ped: number, vehicle: number, seatIndex: number): void;

/**
 * This native is used to set prop variation on a ped. Components, drawables and textures IDs are related to the ped model.
 * ### MP Freemode list of props
 * **0**: Hats
 * **1**: Glasses
 * **2**: Ears
 * **6**: Watches
 * **7**: Bracelets
 * List of Prop IDs
 * ```cpp
 * enum eAnchorPoints
 * {
 * ANCHOR_HEAD = 0, // "p_head"
 * ANCHOR_EYES = 1, // "p_eyes"
 * ANCHOR_EARS = 2, // "p_ears"
 * ANCHOR_MOUTH = 3, // "p_mouth"
 * ANCHOR_LEFT_HAND = 4, // "p_lhand"
 * ANCHOR_RIGHT_HAND = 5, // "p_rhand"
 * ANCHOR_LEFT_WRIST = 6, // "p_lwrist"
 * ANCHOR_RIGHT_WRIST = 7, // "p_rwrist"
 * ANCHOR_HIP = 8, // "p_lhip"
 * ANCHOR_LEFT_FOOT = 9, // "p_lfoot"
 * ANCHOR_RIGHT_FOOT = 10, // "p_rfoot"
 * ANCHOR_PH_L_HAND = 11, // "ph_lhand"
 * ANCHOR_PH_R_HAND = 12, // "ph_rhand"
 * NUM_ANCHORS = 13,
 * };
 * ```
 * @param ped The ped handle.
 * @param componentId The component that you want to set. Refer to [SET_PED_COMPONENT_VARIATION](#\_0x262B14F48D29DE80).
 * @param drawableId The drawable id that is going to be set. Refer to [GET_NUMBER_OF_PED_PROP_DRAWABLE_VARIATIONS](#\_0x5FAF9754E789FB47).
 * @param textureId The texture id of the drawable. Refer to [GET_NUMBER_OF_PED_PROP_TEXTURE_VARIATIONS](#\_0xA6E7F1CEB523E171).
 * @param attach Attached or not.
 */
declare function SetPedPropIndex(ped: number, componentId: number, drawableId: number, textureId: number, attach: boolean): void;

/**
 * p1 is always 0 in R* scripts; and a quick disassembly seems to indicate that p1 is unused.
 */
declare function SetPedRandomComponentVariation(ped: number, p1: number): void;

/**
 * SET_PED_RANDOM_PROPS
 * @param ped The ped handle.
 */
declare function SetPedRandomProps(ped: number): void;

/**
 * PED::SET_PED_RESET_FLAG(PLAYER::PLAYER_PED_ID(), 240, 1);
 * Known values:
 */
declare function SetPedResetFlag(ped: number, flagId: number, doReset: boolean): void;

/**
 * p4/p5: Unusued in TU27
 * ### Ragdoll Types
 * **0**: CTaskNMRelax
 * **1**: CTaskNMScriptControl: Hardcoded not to work in networked environments.
 * **Else**: CTaskNMBalance
 * @param time1 Time(ms) Ped is in ragdoll mode; only applies to ragdoll types 0 and not 1.
 */
declare function SetPedToRagdoll(ped: number, time1: number, time2: number, ragdollType: number, p4: boolean, p5: boolean, p6: boolean): void;

/**
 * Return variable is never used in R*'s scripts.
 * Not sure what p2 does. It seems like it would be a time judging by it's usage in R*'s scripts, but didn't seem to affect anything in my testings.
 * x, y, and z are coordinates, most likely to where the ped will fall.
 * p7 is probably the force of the fall, but untested, so I left the variable name the same.
 * p8 to p13 are always 0f in R*'s scripts.
 * (Simplified) Example of the usage of the function from R*'s scripts:
 * ped::set_ped_to_ragdoll_with_fall(ped, 1500, 2000, 1, -entity::get_entity_forward_vector(ped), 1f, 0f, 0f, 0f, 0f, 0f, 0f);
 */
declare function SetPedToRagdollWithFall(ped: number, time: number, p2: number, ragdollType: number, x: number, y: number, z: number, p7: number, p8: number, p9: number, p10: number, p11: number, p12: number, p13: number): void;

/**
 * Flags:
 * SPC_AMBIENT_SCRIPT = (1 << 1),
 * SPC_CLEAR_TASKS = (1 << 2),
 * SPC_REMOVE_FIRES = (1 << 3),
 * SPC_REMOVE_EXPLOSIONS = (1 << 4),
 * SPC_REMOVE_PROJECTILES = (1 << 5),
 * SPC_DEACTIVATE_GADGETS = (1 << 6),
 * SPC_REENABLE_CONTROL_ON_DEATH = (1 << 7),
 * SPC_LEAVE_CAMERA_CONTROL_ON = (1 << 8),
 * SPC_ALLOW_PLAYER_DAMAGE = (1 << 9),
 * SPC_DONT_STOP_OTHER_CARS_AROUND_PLAYER = (1 << 10),
 * SPC_PREVENT_EVERYBODY_BACKOFF = (1 << 11),
 * SPC_ALLOW_PAD_SHAKE = (1 << 12)
 * See: https://alloc8or.re/gta5/doc/enums/eSetPlayerControlFlag.txt
 */
declare function SetPlayerControl(player: string, bHasControl: boolean, flags: number): void;

/**
 * Sets the culling radius for the specified player.
 * Set to `0.0` to reset.
 * **WARNING**: Culling natives are deprecated and have known, [unfixable issues](https://forum.cfx.re/t/issue-with-culling-radius-and-server-side-entities/4900677/4)
 * @param playerSrc The player to set the culling radius for.
 * @param radius The radius.
 */
declare function SetPlayerCullingRadius(playerSrc: string, radius: number): void;

/**
 * Make the player impervious to all forms of damage.
 * @param player The player index.
 */
declare function SetPlayerInvincible(player: string, bInvincible: boolean): void;

/**
 * Set the model for a specific Player. Note that this will destroy the current Ped for the Player and create a new one, any reference to the old ped will be invalid after calling this.
 * As per usual, make sure to request the model first and wait until it has loaded.
 * @param player The player to set the model for
 * @param model The model to use
 */
declare function SetPlayerModel(player: string, model: string | number): void;

/**
 * Sets the routing bucket for the specified player.
 * Routing buckets are also known as 'dimensions' or 'virtual worlds' in past echoes, however they are population-aware.
 * @param playerSrc The player to set the routing bucket for.
 * @param bucket The bucket ID.
 */
declare function SetPlayerRoutingBucket(playerSrc: string, bucket: number): void;

/**
 * SET_PLAYER_WANTED_LEVEL
 * @param player the target player
 * @param wantedLevel the wanted level 1-5
 * @param delayedResponse false = 0-10sec police spawn response time, true = 10-20sec police spawn response time
 */
declare function SetPlayerWantedLevel(player: string, wantedLevel: number, delayedResponse: boolean): void;

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

/**
 * Nonsynchronous [SET_RESOURCE_KVP_FLOAT](#\_0x9ADD2938) operation; see [FLUSH_RESOURCE_KVP](#\_0x5240DA5A).
 * @param key The key to set
 * @param value The value to write
 */
declare function SetResourceKvpFloatNoSync(key: string, value: number): void;

/**
 * A setter for [GET_RESOURCE_KVP_INT](#\_0x557B586A).
 * @param key The key to set
 * @param value The value to write
 */
declare function SetResourceKvpInt(key: string, value: number): void;

/**
 * Nonsynchronous [SET_RESOURCE_KVP_INT](#\_0x6A2B1E8) operation; see [FLUSH_RESOURCE_KVP](#\_0x5240DA5A).
 * @param key The key to set
 * @param value The value to write
 */
declare function SetResourceKvpIntNoSync(key: string, value: number): void;

/**
 * Nonsynchronous [SET_RESOURCE_KVP](#\_0x21C7A35B) operation; see [FLUSH_RESOURCE_KVP](#\_0x5240DA5A).
 * @param key The key to set
 * @param value The value to write
 */
declare function SetResourceKvpNoSync(key: string, value: string): void;

/**
 * Sets the entity lockdown mode for a specific routing bucket.
 * Lockdown modes are:
 * | Mode       | Meaning                                                    |
 * | ---------- | ---------------------------------------------------------- |
 * | `strict`   | No entities can be created by clients at all.              |
 * | `relaxed`  | Only script-owned entities created by clients are blocked. |
 * | `inactive` | Clients can create any entity they want.                   |
 * @param bucketId The routing bucket ID to adjust.
 * @param mode One of aforementioned modes.
 */
declare function SetRoutingBucketEntityLockdownMode(bucketId: number, mode: string): void;

/**
 * Sets whether or not the specified routing bucket has automatically-created population enabled.
 * @param bucketId The routing bucket ID to adjust.
 * @param mode `true` to enable population, `false` to disable population.
 */
declare function SetRoutingBucketPopulationEnabled(bucketId: number, mode: boolean): void;

/**
 * Internal function for setting a state bag value.
 */
declare function SetStateBagValue(bagName: string, keyName: string, valueData: string, valueLength: number, replicated: boolean): void;

/**
 * SET_VEHICLE_ALARM
 */
declare function SetVehicleAlarm(vehicle: number, state: boolean): void;

/**
 * p2 often set to 1000.0 in the decompiled scripts.
 */
declare function SetVehicleBodyHealth(vehicle: number, value: number): void;

/**
 * Sets the selected vehicle's colors to their default value (specific variant specified using the colorCombination parameter).
 * Range of possible values for colorCombination is currently unknown, I couldn't find where these values are stored either (Disquse's guess was vehicles.meta but I haven't seen it in there.)
 * @param vehicle The vehicle to modify.
 * @param colorCombination One of the default color values of the vehicle.
 */
declare function SetVehicleColourCombination(vehicle: number, colorCombination: number): void;

/**
 * colorPrimary & colorSecondary are the paint indexes for the vehicle.
 * For a list of valid paint indexes, view: pastebin.com/pwHci0xK
 */
declare function SetVehicleColours(vehicle: number, colorPrimary: number, colorSecondary: number): void;

/**
 * p1, p2, p3 are RGB values for color (255,0,0 for Red, ect)
 */
declare function SetVehicleCustomPrimaryColour(vehicle: number, r: number, g: number, b: number): void;

/**
 * p1, p2, p3 are RGB values for color (255,0,0 for Red, ect)
 */
declare function SetVehicleCustomSecondaryColour(vehicle: number, r: number, g: number, b: number): void;

/**
 * Sets the dirt level of the passed vehicle.
 * @param vehicle The vehicle to set.
 * @param dirtLevel A number between 0.0 and 15.0 representing the vehicles dirt level.
 */
declare function SetVehicleDirtLevel(vehicle: number, dirtLevel: number): void;

/**
 * See eDoorId declared in [`SET_VEHICLE_DOOR_SHUT`](#\_0x93D9BD300D7789E5)
 */
declare function SetVehicleDoorBroken(vehicle: number, doorIndex: number, deleteDoor: boolean): void;

/**
 * Locks the doors of a specified vehicle to a defined lock state, affecting how players and NPCs can interact with the vehicle.
 * ```
 * NativeDB Introduced: v323
 * ```
 * ```cpp
 * enum eVehicleLockState {
 * // No specific lock state, vehicle behaves according to the game's default settings.
 * VEHICLELOCK_NONE = 0,
 * // Vehicle is fully unlocked, allowing free entry by players and NPCs.
 * VEHICLELOCK_UNLOCKED = 1,
 * // Vehicle is locked, preventing entry by players and NPCs.
 * VEHICLELOCK_LOCKED = 2,
 * // Vehicle locks out only players, allowing NPCs to enter.
 * VEHICLELOCK_LOCKOUT_PLAYER_ONLY = 3,
 * // Vehicle is locked once a player enters, preventing others from entering.
 * VEHICLELOCK_LOCKED_PLAYER_INSIDE = 4,
 * // Vehicle starts in a locked state, but may be unlocked through game events.
 * VEHICLELOCK_LOCKED_INITIALLY = 5,
 * // Forces the vehicle's doors to shut and lock.
 * VEHICLELOCK_FORCE_SHUT_DOORS = 6,
 * // Vehicle is locked but can still be damaged.
 * VEHICLELOCK_LOCKED_BUT_CAN_BE_DAMAGED = 7,
 * // Vehicle is locked, but its trunk/boot remains unlocked.
 * VEHICLELOCK_LOCKED_BUT_BOOT_UNLOCKED = 8,
 * // Vehicle is locked and does not allow passengers, except for the driver.
 * VEHICLELOCK_LOCKED_NO_PASSENGERS = 9,
 * // Vehicle is completely locked, preventing entry entirely, even if previously inside.
 * VEHICLELOCK_CANNOT_ENTER = 10
 * };
 * ```
 * @param vehicle The vehicle whose doors are to be locked.
 * @param doorLockStatus The lock state to apply to the vehicle's doors, see `eVehicleLockState`.
 */
declare function SetVehicleDoorsLocked(vehicle: number, doorLockStatus: number): void;

/**
 * SET_VEHICLE_NUMBER_PLATE_TEXT
 * @param vehicle The vehicle to set the plate for
 * @param plateText The text to set the plate to, 8 chars maximum
 */
declare function SetVehicleNumberPlateText(vehicle: number, plateText: string): void;

/**
 * START_FIND_KVP
 * @param prefix A prefix match
 * @return A KVP find handle to use with [FIND_KVP](#\_0xBD7BEBC5) and close with [END_FIND_KVP](#\_0xB3210203)
 */
declare function StartFindKvp(prefix: string): number;

/**
 * START_RESOURCE
 */
declare function StartResource(resourceName: string): boolean;

/**
 * STATE_BAG_HAS_KEY
 * @param bagName The name of the bag.
 * @param key The key used to check data existence.
 * @return Returns true if the data associated with the specified key exists; otherwise, returns false.
 */
declare function StateBagHasKey(bagName: string, key: string): boolean;

/**
 * STOP_RESOURCE
 */
declare function StopResource(resourceName: string): boolean;

/**
 * Makes the specified ped attack the target ped.
 * p2 should be 0
 * p3 should be 16
 */
declare function TaskCombatPed(ped: number, targetPed: number, p2: number, p3: number): void;

/**
 * Example:
 * TASK::TASK_DRIVE_BY(l_467[1 -- [[22]] ], PLAYER::PLAYER_PED_ID(), 0, 0.0, 0.0, 2.0, 300.0, 100, 0, ${firing_pattern_burst_fire_driveby});
 * Needs working example. Doesn't seem to do anything.
 * I marked p2 as targetVehicle as all these shooting related tasks seem to have that in common.
 * I marked p6 as distanceToShoot as if you think of GTA's Logic with the native SET_VEHICLE_SHOOT natives, it won't shoot till it gets within a certain distance of the target.
 * I marked p7 as pedAccuracy as it seems it's mostly 100 (Completely Accurate), 75, 90, etc. Although this could be the ammo count within the gun, but I highly doubt it. I will change this comment once I find out if it's ammo count or not.
 */
declare function TaskDriveBy(driverPed: number, targetPed: number, targetVehicle: number, targetX: number, targetY: number, targetZ: number, distanceToShoot: number, pedAccuracy: number, p8: boolean, firingPattern: string | number): void;

/**
 * speed 1.0 = walk, 2.0 = run
 * p5 1 = normal, 3 = teleport to vehicle, 8 = normal/carjack ped from seat, 16 = teleport directly into vehicle
 * p6 is always 0
 * @param seatIndex See eSeatPosition declared in [`IS_VEHICLE_SEAT_FREE`](#\_0x22AC59A870E6A669).
 */
declare function TaskEnterVehicle(ped: number, vehicle: number, timeout: number, seatIndex: number, speed: number, flag: number, p6: number): void;

/**
 * TASK_EVERYONE_LEAVE_VEHICLE
 */
declare function TaskEveryoneLeaveVehicle(vehicle: number): void;

/**
 * TASK_GO_STRAIGHT_TO_COORD
 * @param ped The ped handle.
 * @param x The x coordinate.
 * @param y The y coordinate.
 * @param z The z coordinate.
 * @param speed The ped movement speed.
 * @param timeout \-1 , other values appear to break the ped movement.
 * @param targetHeading The heading you want the ped to be on x,y,z coord.
 * @param distanceToSlide The distance from x,y,z where the ped will start sliding.
 */
declare function TaskGoStraightToCoord(ped: number, x: number, y: number, z: number, speed: number, timeout: number, targetHeading: number, distanceToSlide: number): void;

/**
 * Tells a ped to go to a coord by any means.
 * ```cpp
 * enum eDrivingMode {
 * DF_StopForCars = 1,
 * DF_StopForPeds = 2,
 * DF_SwerveAroundAllCars = 4,
 * DF_SteerAroundStationaryCars = 8,
 * DF_SteerAroundPeds = 16,
 * DF_SteerAroundObjects = 32,
 * DF_DontSteerAroundPlayerPed = 64,
 * DF_StopAtLights = 128,
 * DF_GoOffRoadWhenAvoiding = 256,
 * DF_DriveIntoOncomingTraffic = 512,
 * DF_DriveInReverse = 1024,
 * // If pathfinding fails, cruise randomly instead of going on a straight line
 * DF_UseWanderFallbackInsteadOfStraightLine = 2048,
 * DF_AvoidRestrictedAreas = 4096,
 * // These only work on MISSION_CRUISE
 * DF_PreventBackgroundPathfinding = 8192,
 * DF_AdjustCruiseSpeedBasedOnRoadSpeed = 16384,
 * DF_UseShortCutLinks =  262144,
 * DF_ChangeLanesAroundObstructions = 524288,
 * // cruise tasks ignore this anyway--only used for goto's
 * DF_UseSwitchedOffNodes =  2097152,
 * // if you're going to be primarily driving off road
 * DF_PreferNavmeshRoute =  4194304,
 * // Only works for planes using MISSION_GOTO, will cause them to drive along the ground instead of fly
 * DF_PlaneTaxiMode =  8388608,
 * DF_ForceStraightLine = 16777216,
 * DF_UseStringPullingAtJunctions = 33554432,
 * DF_AvoidHighways = 536870912,
 * DF_ForceJoinInRoadDirection = 1073741824,
 * // Standard driving mode. stops for cars, peds, and lights, goes around stationary obstructions
 * DRIVINGMODE_STOPFORCARS = 786603, // DF_StopForCars|DF_StopForPeds|DF_SteerAroundObjects|DF_SteerAroundStationaryCars|DF_StopAtLights|DF_UseShortCutLinks|DF_ChangeLanesAroundObstructions,		// Obey lights too
 * // Like the above, but doesn't steer around anything in its way - will only wait instead.
 * DRIVINGMODE_STOPFORCARS_STRICT = 262275, // DF_StopForCars|DF_StopForPeds|DF_StopAtLights|DF_UseShortCutLinks, // Doesn't deviate an inch.
 * // Default "alerted" driving mode. drives around everything, doesn't obey lights
 * DRIVINGMODE_AVOIDCARS = 786469, // DF_SwerveAroundAllCars|DF_SteerAroundObjects|DF_UseShortCutLinks|DF_ChangeLanesAroundObstructions|DF_StopForCars,
 * // Very erratic driving. difference between this and AvoidCars is that it doesn't use the brakes at ALL to help with steering
 * DRIVINGMODE_AVOIDCARS_RECKLESS = 786468, // DF_SwerveAroundAllCars|DF_SteerAroundObjects|DF_UseShortCutLinks|DF_ChangeLanesAroundObstructions,
 * // Smashes through everything
 * DRIVINGMODE_PLOUGHTHROUGH = 262144, // DF_UseShortCutLinks
 * // Drives normally except for the fact that it ignores lights
 * DRIVINGMODE_STOPFORCARS_IGNORELIGHTS = 786475, // DF_StopForCars|DF_SteerAroundStationaryCars|DF_StopForPeds|DF_SteerAroundObjects|DF_UseShortCutLinks|DF_ChangeLanesAroundObstructions
 * // Try to swerve around everything, but stop for lights if necessary
 * DRIVINGMODE_AVOIDCARS_OBEYLIGHTS = 786597, // DF_SwerveAroundAllCars|DF_StopAtLights|DF_SteerAroundObjects|DF_UseShortCutLinks|DF_ChangeLanesAroundObstructions|DF_StopForCars
 * // Swerve around cars, be careful around peds, and stop for lights
 * DRIVINGMODE_AVOIDCARS_STOPFORPEDS_OBEYLIGHTS = 786599 // DF_SwerveAroundAllCars|DF_StopAtLights|DF_StopForPeds|DF_SteerAroundObjects|DF_UseShortCutLinks|DF_ChangeLanesAroundObstructions|DF_StopForCars
 * };
 * ```
 * @param ped The `Ped` Handle.
 * @param x The goto target coordinate.
 * @param y The goto target coordinate.
 * @param z The goto target coordinate.
 * @param fMoveBlendRatio 0.0 = still, 1.0 = walk, 2.0 = run, 3.0 = sprint.
 * @param vehicle If defined, the pedestrian will only move if said vehicle exists. If you don't want any sort of association, just set it to `0`.
 * @param bUseLongRangeVehiclePathing Setting to `true` tells the vehicle to use longrange vehicle pathing.
 * @param drivingFlags See `eDrivingMode` enum.
 * @param fMaxRangeToShootTargets Determines the maximum distance at which the `Ped` will engage in combat with threatening targets.
 */
declare function TaskGoToCoordAnyMeans(ped: number, x: number, y: number, z: number, fMoveBlendRatio: number, vehicle: number, bUseLongRangeVehiclePathing: boolean, drivingFlags: number, fMaxRangeToShootTargets: number): void;

/**
 * The entity will move towards the target until time is over (duration) or get in target's range (distance). p5 and p6 are unknown, but you could leave p5 = 1073741824 or 100 or even 0 (didn't see any difference but on the decompiled scripts, they use 1073741824 mostly) and p6 = 0
 * Note: I've only tested it on entity -> ped and target -> vehicle. It could work differently on other entities, didn't try it yet.
 * Example: TASK::TASK_GO_TO_ENTITY(pedHandle, vehicleHandle, 5000, 4.0, 100, 1073741824, 0)
 * Ped will run towards the vehicle for 5 seconds and stop when time is over or when he gets 4 meters(?) around the vehicle (with duration = -1, the task duration will be ignored).
 */
declare function TaskGoToEntity(entity: number, target: number, duration: number, distance: number, speed: number, p5: number, p6: number): void;

/**
 * In the scripts, p3 was always -1.
 * p3 seems to be duration or timeout of turn animation.
 * Also facingPed can be 0 or -1 so ped will just raise hands up.
 */
declare function TaskHandsUp(ped: number, duration: number, facingPed: number, p3: number, p4: boolean): void;

/**
 * Flags are the same flags used in [`TASK_LEAVE_VEHICLE`](#\_0xD3DBCE61A490BE02)
 */
declare function TaskLeaveAnyVehicle(ped: number, p1: number, flags: number): void;

/**
 * Flags from decompiled scripts:
 * 0 = normal exit and closes door.
 * 1 = normal exit and closes door.
 * 16 = teleports outside, door kept closed.  (This flag does not seem to work for the front seats in buses, NPCs continue to exit normally)
 * 64 = normal exit and closes door, maybe a bit slower animation than 0.
 * 256 = normal exit but does not close the door.
 * 4160 = ped is throwing himself out, even when the vehicle is still.
 * 262144 = ped moves to passenger seat first, then exits normally
 * Others to be tried out: 320, 512, 131072.
 */
declare function TaskLeaveVehicle(ped: number, vehicle: number, flags: number): void;

/**
 * [Animations list](https://alexguirre.github.io/animations-list/)
 * ```cpp
 * enum eScriptedAnimFlags
 * {
 * AF_LOOPING = 1,
 * AF_HOLD_LAST_FRAME = 2,
 * AF_REPOSITION_WHEN_FINISHED = 4,
 * AF_NOT_INTERRUPTABLE = 8,
 * AF_UPPERBODY = 16,
 * AF_SECONDARY = 32,
 * AF_REORIENT_WHEN_FINISHED = 64,
 * AF_ABORT_ON_PED_MOVEMENT = 128,
 * AF_ADDITIVE = 256,
 * AF_TURN_OFF_COLLISION = 512,
 * AF_OVERRIDE_PHYSICS = 1024,
 * AF_IGNORE_GRAVITY = 2048,
 * AF_EXTRACT_INITIAL_OFFSET = 4096,
 * AF_EXIT_AFTER_INTERRUPTED = 8192,
 * AF_TAG_SYNC_IN = 16384,
 * AF_TAG_SYNC_OUT = 32768,
 * AF_TAG_SYNC_CONTINUOUS = 65536,
 * AF_FORCE_START = 131072,
 * AF_USE_KINEMATIC_PHYSICS = 262144,
 * AF_USE_MOVER_EXTRACTION = 524288,
 * AF_HIDE_WEAPON = 1048576,
 * AF_ENDS_IN_DEAD_POSE = 2097152,
 * AF_ACTIVATE_RAGDOLL_ON_COLLISION = 4194304,
 * AF_DONT_EXIT_ON_DEATH = 8388608,
 * AF_ABORT_ON_WEAPON_DAMAGE = 16777216,
 * AF_DISABLE_FORCED_PHYSICS_UPDATE = 33554432,
 * AF_PROCESS_ATTACHMENTS_ON_START = 67108864,
 * AF_EXPAND_PED_CAPSULE_FROM_SKELETON = 134217728,
 * AF_USE_ALTERNATIVE_FP_ANIM = 268435456,
 * AF_BLENDOUT_WRT_LAST_FRAME = 536870912,
 * AF_USE_FULL_BLENDING = 1073741824
 * }
 * ```
 * @param ped The ped you want to play the animation
 * @param animDictionary The animation dictionary
 * @param animationName The animation name
 * @param blendInSpeed The speed at which the animation blends in. Lower is slower and higher is faster, 1.0 is normal, 8.0 is basically instant
 * @param blendOutSpeed The speed at which the animation blends out. Lower is slower and higher is faster, 1.0 is normal, 8.0 is basically instant
 * @param duration The duration of the animation in milliseconds. -1 will play the animation until canceled
 * @param flag The animation flags (see enum)
 * @param playbackRate The playback rate (between 0.0 and 1.0)
 */
declare function TaskPlayAnim(ped: number, animDictionary: string, animationName: string, blendInSpeed: number, blendOutSpeed: number, duration: number, flag: number, playbackRate: number, lockX: boolean, lockY: boolean, lockZ: boolean): void;

/**
 * Similar in functionality to [`TASK_PLAY_ANIM`](#\_0xEA47FE3719165B94), except the position and rotation parameters let you specify the initial position and rotation of the task. The ped is teleported to the position specified.
 * [Animations list](https://alexguirre.github.io/animations-list/)
 * @param ped The ped you want to play the animation
 * @param animDictionary The animation dictionary
 * @param animationName The animation name
 * @param posX Initial X position of the task
 * @param posY Initial Y position of the task
 * @param posZ Initial Z position of the task
 * @param rotX Initial X rotation of the task
 * @param rotY Initial Y rotation of the task
 * @param rotZ Initial Z rotation of the task
 * @param blendInSpeed The speed at which the animation blends in. Lower is slower and higher is faster, 1.0 is normal, 8.0 is basically instant
 * @param blendOutSpeed The speed at which the animation blends out. Lower is slower and higher is faster, 1.0 is normal, 8.0 is basically instant
 * @param duration The duration of the animation in milliseconds. -1 will play the animation until canceled
 * @param flag See [`TASK_PLAY_ANIM`](#\_0xEA47FE3719165B94)
 * @param animTime Value between 0.0 and 1.0, lets you start an animation from the given point
 */
declare function TaskPlayAnimAdvanced(ped: number, animDictionary: string, animationName: string, posX: number, posY: number, posZ: number, rotX: number, rotY: number, rotZ: number, blendInSpeed: number, blendOutSpeed: number, duration: number, flag: number, animTime: number, p14: number, p15: number): void;

/**
 * TASK_REACT_AND_FLEE_PED
 */
declare function TaskReactAndFleePed(ped: number, fleeTarget: number): void;

/**
 * Firing Pattern Hash Information: https://pastebin.com/Px036isB
 */
declare function TaskShootAtCoord(ped: number, x: number, y: number, z: number, duration: number, firingPattern: string | number): void;

/**
 * //this part of the code is to determine at which entity the player is aiming, for example if you want to create a mod where you give orders to peds
 * Entity aimedentity;
 * Player player = PLAYER::PLAYER_ID();
 * PLAYER::_GET_AIMED_ENTITY(player, &aimedentity);
 * //bg is an array of peds
 * TASK::TASK_SHOOT_AT_ENTITY(bg[i], aimedentity, 5000, MISC::GET_HASH_KEY("FIRING_PATTERN_FULL_AUTO"));
 * in practical usage, getting the entity the player is aiming at and then task the peds to shoot at the entity, at a button press event would be better.
 * Firing Pattern Hash Information: https://pastebin.com/Px036isB
 */
declare function TaskShootAtEntity(entity: number, target: number, duration: number, firingPattern: string | number): void;

/**
 * ```
 * NativeDB Introduced: v323
 * ```
 * Warp a ped into a vehicle.
 * **Note**: It's better to use [`TASK_ENTER_VEHICLE`](#\_0xC20E50AA46D09CA8) with the flag "warp" flag instead of this native.
 * @param ped The Ped to be warped into the vehicle.
 * @param vehicle The target vehicle into which the ped will be warped.
 * @param seatIndex See eSeatPosition declared in [`IS_VEHICLE_SEAT_FREE`](#\_0x22AC59A870E6A669).
 */
declare function TaskWarpPedIntoVehicle(ped: number, vehicle: number, seatIndex: number): void;

/**
 * TEMP_BAN_PLAYER
 */
declare function TempBanPlayer(playerSrc: string, reason: string): void;

/**
 * The backing function for TriggerClientEvent.
 */
declare function TriggerClientEventInternal(eventName: string, eventTarget: string, eventPayload: string, payloadLength: number): void;

/**
 * The backing function for TriggerEvent.
 */
declare function TriggerEventInternal(eventName: string, eventPayload: string, payloadLength: number): void;

/**
 * The backing function for TriggerLatentClientEvent.
 */
declare function TriggerLatentClientEventInternal(eventName: string, eventTarget: string, eventPayload: string, payloadLength: number, bps: number): void;

/**
 * VERIFY_PASSWORD_HASH
 */
declare function VerifyPasswordHash(password: string, hash: string): boolean;

/**
 * Returns whether or not the currently executing event was canceled.
 * @return A boolean.
 */
declare function WasEventCanceled(): boolean;

