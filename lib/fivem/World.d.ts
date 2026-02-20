import type { Color } from "./common/utils/Color";
import { Vector3, Vector4 } from "./common/utils/Vector";
import { Blip } from "./Blip";
import { Camera } from "./Camera";
import { Model } from "./Model";
import { Pickup } from "./Pickup";
import { AsynchronousRaycastResult, SynchronousRaycastResult } from "./Raycast";
import { Rope } from "./Rope";
import { CameraTypes } from "./enums/CameraTypes";
import { CloudHat } from "./enums/CloudHat";
import type { MarkerType } from "./enums/MarkerType";
import type { PickupType } from "./enums/PickupType";
import { IntersectFlags } from "./enums/RaycastEnums";
import type { RopeType } from "./enums/RopeType";
import type { VehicleSeat } from "./enums/Vehicle";
import { Weather } from "./enums/Weather";
import type { BaseEntity } from "./models/BaseEntity";
import { Ped } from "./models/Ped";
import { Prop } from "./models/Prop";
import { Vehicle } from "./models/Vehicle";
/**
 * Class with common world manipulations.
 *
 * This class includes methods for creating entities and common world rendering.
 *
 * You can create blips, entities, cameras and more.
 *
 * @abstract
 */
export declare abstract class World {
    /**
     * Get the current camera that's rendering.
     *
     * @returns The camera that's currently used.
     */
    static get RenderingCamera(): Camera;
    /**
     * Set the rendering camera. World.RenderingCamera = null to reset.
     *
     * ```typescript
     * const position = new Vector3(-802.311, 175.056, 72.8446);
     * const myCamera = World.createCamera(position, new Vector3(0,0,0), 180);
     * World.RenderingCamera = myCamera;
     *
     * // Reset to default cam
     * World.RenderingCamera = null;
     * ```
     *
     * @param value The camera to render.
     */
    static set RenderingCamera(value: Camera | null);
    /**
     * Whether to create a network world state for Ropes
     * This currently does nothing
     */
    static set RopesCreateNetworkWorldState(value: boolean);
    /**
     * Get the current date in the world.
     *
     * @returns The current date.
     */
    static get CurrentDate(): Date;
    /**
     * Set the current date of the world.
     */
    static set CurrentDate(date: Date);
    /**
     * Disables all emissive textures, street/building/vehicle lights. "EMP" effect.
     *
     * @param value On or off.
     */
    static set Blackout(value: boolean);
    /**
     * Get the current cloud hat.
     *
     * @returns The current cloud hat type.
     */
    static get CloudHat(): CloudHat;
    /**
     * Set the current cloud hat.
     *
     * @param value The type of cloud hat.
     */
    static set CloudHat(value: CloudHat);
    /**
     * Get the opacity of current cloud hat. Value is between 0-1.
     *
     * @returns The current cloud opacity between 0.0 and 1.0
     */
    static get CloudHatOpacity(): number;
    /**
     * Set opacity of current cloud hat between 0-1.
     *
     * @param value Opacity between 0.0 and 1.0
     */
    static set CloudHatOpacity(value: number);
    /**
     * Get the current weather type.
     *
     * @returns The current type of weather.
     */
    static get Weather(): Weather;
    /**
     * Set the current weather.
     *
     * @param value Type of weather to set.
     */
    static set Weather(value: Weather);
    /**
     * Get the next weather type.
     *
     * @returns The Weather type
     */
    static get NextWeather(): Weather;
    /**
     * Set weather type instantly. Similar to World.transitionToWeather with duration 0.
     */
    static set NextWeather(value: Weather);
    /**
     * Doesn't work
     */
    static get WeatherTransition(): [string | Weather, string | Weather, number];
    /**
     * Doesn't work
     */
    static set WeatherTransition(transition: [string | Weather, string | Weather, number]);
    /**
     * Transition to different weather type within a certain time.
     *
     * @param weather Weather type to change to.
     * @param duration Time for full weather change (in milliseconds);
     */
    static transitionToWeather(weather: Weather, duration: number): void;
    /**
     * Destroys all existing cameras and sets your rendering camera back to GameplayCam.
     */
    static destroyAllCameras(): void;
    /**
     * Creates a blip at a given position and optionally radius.
     *
     * ```typescript
     * const position = new Vector3(-802.311, 175.056, 72.8446);
     * const myStoreBlip = World.createBlip(position, 5.0);
     * myStoreBlip.Sprite = BlipSprite.Store;
     * ```
     *
     * @param position World coordinate of blip.
     * @param radius (Optional) Radius of where blip should be shown.
     * @returns Blip object.
     */
    static createBlip(position: Vector3, radius?: number): Blip;
    /**
     * Creates a cam that defaults to {@link CameraTypes.Scripted}
     *
     * ```ts
     * const cam = World.createCamera(CameraTypes.Spline, true);
     * ```
     * @param cameraType the camera type to create
     * @param active unknown
     * @returns
     */
    static createCamera(cameraType?: CameraTypes, active?: boolean): Camera;
    /**
     * Creates a camera using 'DEFAULT_SCRIPTED_CAMERA'.
     *
     * ```typescript
     * const position = new Vector3(-802.311, 175.056, 72.8446);
     * const myCamera = World.createCameraWithParams(position, new Vector3(0,0,0), 180);
     * ```
     *
     * @param position World coordinate where the camera should render.
     * @param rotation Rotation of camera relative to world.
     * @param fieldOfView Field of view angle of camera.
     * @returns Camera object.
     */
    static createCameraWithParams(cameraType?: CameraTypes, position?: Vector3, rotation?: Vector3, fieldOfView?: number): Camera;
    /**
     * Create a ped at a desired location.
     *
     * ```typescript
     * const position = new Vector3(-802.31, 175.06, 72.84);
     * const model = new Model("a_f_m_beach_01");
     * const myPed = await World.createPed(model, position);
     * ```
     *
     * @param model Ped model to be spawned.
     * @param position World position (coordinates) of Ped spawn.
     * @param [heading=0] Heading of Ped when spawning.
     * @param [shouldNetwork=false] if the created ped should be networked to other clients
     * @param [pinToScript=true] if the ped should be pinned to the script.
     * @returns Ped object.
     */
    static createPed(model: Model, position: Vector3, heading?: number, shouldNetwork?: boolean, pinToScript?: boolean): Promise<Ped | null>;
    /**
     * Create a ped at a desired location.
     *
     * ```typescript
     * const position = new Vector4(-802.31, 175.05, 72.84, 122.75);
     * const model = new Model("a_f_m_beach_01");
     * const myPed = await World.createPed(model, position);
     * ```
     *
     * @param model Ped model to be spawned.
     * @param position World position (coordinates) of Ped spawn, note that the `w` section of Vector4 is used for heading.
     * @param [shouldNetwork=false] if the created ped should be networked to other clients
     * @param [pinToScript=true] if the ped should be pinned to the script.
     * @returns Ped object.
     */
    static createPed(model: Model, position: Vector4, shouldNetwork?: boolean, pinToScript?: boolean): Promise<Ped | null>;
    /**
     * Created a ped in the specified vehicle
     *
     * @param vehicle the vehicle to create the ped in
     * @param model Ped model to be spawned.
     * @param seat the seat to spawn the ped into
     * @param heading Heading of Ped when spawning.
     * @param shouldNetwork if the created ped should be networked
     * @returns the ped that was created, or null if it doesn't exist.
     */
    static createPedInsideVehicle(vehicle: Vehicle, model: Model, seat: VehicleSeat, shouldNetwork?: boolean, pinToScript?: boolean): Promise<Ped | null>;
    /**
     * Creates a [[`Ped`]] with a random model.
     *
     * ```typescript
     * const position = new Vector3(-802.311, 175.056, 72.8446);
     * const randomPed = World.createRandomPed(position);
     * ```
     *
     * @param position World coordinate of Ped spawn.
     * @returns Ped object.
     */
    static createRandomPed(position: Vector3): Ped;
    /**
     * Create a vehicle at a desired location.
     *
     * ```typescript
     * const position = new Vector3(-802.311, 175.056, 72.8446);
     * const model = new Model("adder");
     * const myVehicle = await World.createVehicle(model, position);
     * ```
     *
     * @param model Vehicle model to be spawned.
     * @param position World position (coordinates) of Vehicle spawn.
     * @param heading Heading of Vehicle when spawning.
     * @param isNetwork
     * @returns Vehicle object.
     */
    static createVehicle(model: Model, position: Vector3, heading?: number, isNetwork?: boolean, pinToScript?: boolean): Promise<Vehicle | null>;
    /**
     * Create a random vehicle at a desired location.
     *
     * ```typescript
     * const position = new Vector3(-802.311, 175.056, 72.8446);
     * const randomVehicle = await World.createRandomVehicle(position);
     * ```
     *
     * @param position World position (coordinates) of Vehicle spawn.
     * @param heading Heading of Vehicle when spawning.
     * @param isNetwork
     * @returns Vehicle object.
     */
    static createRandomVehicle(position: Vector3, heading?: number, isNetwork?: boolean): Promise<Vehicle | null>;
    static createRope(position: Vector3, rotation: Vector3, maxLength: number, ropeType: RopeType, initLength: number, minLength: number, lengthChangeRate?: number, onlyPPU?: boolean, collisionOn?: boolean, lockFromFront?: boolean, timeMultiplier?: number, breakable?: boolean, shouldLoadTextures?: boolean): Promise<Rope>;
    /**
     * Spawns a [[`Prop`]] at the given position.
     *
     * ```typescript
     * const position = new Vector3(-802.311, 175.056, 72.8446);
     * const model = new Model("prop_barrel_02a");
     * const myBarrelProp = await World.createProp(model, position, false, true);
     * ```
     *
     * @param model The [[`Model`]] to spawn (must be a Prop)
     * @param position Location of Prop
     * @param doorFlag If set to true, the Prop will have physics otherwise it's static.
     * @param placeOnGround If set to true, sets the Prop on the ground nearest to position.
     * @param isNetwork
     * @returns Prop object.
     */
    static createProp(model: Model, position: Vector3, placeOnGround: boolean, isNetwork?: boolean, pinToScript?: boolean, forceToBeObject?: boolean): Promise<Prop | null>;
    /**
     * Create a pickup in a specific position in the world with a specified type and value.
     *
     * @param type The [[`PickupType`]] of pickup.
     * @param position The position in the world it should be spawned.
     * @param model The model of the spawned pickup.
     * @param value Give a value for the pickup when picked up.
     * @param rotation If set, create a rotating pickup with this rotation.
     * @returns Pickup object.
     */
    static createPickup(type: PickupType, position: Vector3, model: Model, value: number, rotation?: Vector3): Promise<Pickup | null>;
    /**
     * Creates an ambient pickup.
     *
     * @param type The [[`PickupType`]] of the pickup.
     * @param position The position where it should be spawned.
     * @param model The model.
     * @param value The value tied to the pickup.
     * @returns The pickup in form of a Prop.
     */
    static createAmbientPickup(type: PickupType, position: Vector3, model: Model, value: number): Promise<Prop | null>;
    /**
     * Draw a marker at a desired location. Careful! Must be drawn every tick.
     *
     * ```typescript
     * const position = new Vector3(-802.311, 175.056, 72.8446);
     * const zeroVector = new Vector3(0,0,0);
     *
     * setTick(() => {
     *  World.drawMarker(MarkerType.ThickChevronUp, position, zeroVector, zeroVector, 1.0, new Color(255,0,0));
     * })
     * ```
     *
     * @param type Type of marker.
     * @param position Location of marker.
     * @param direction Direction facing.
     * @param rotation World rotation.
     * @param scale Size of marker.
     * @param color Color of marker.
     * @param bobUpAndDown Animated movement along marker's own X axis.
     * @param faceCamera Rendering marker facing rendering camera.
     * @param rotateY Rotate along Y axis.
     * @param textureDict Custom texture dictionary for custom marker.
     * @param textureName Custom texture name for custom marker.
     * @param drawOnEntity Render the marker on an entity.
     */
    static drawMarker(type: MarkerType, position: Vector3, direction: Vector3, rotation: Vector3, scale: Vector3, color: Color, bobUpAndDown?: boolean, faceCamera?: boolean, rotateY?: boolean, textureDict?: string | null, textureName?: string | null, drawOnEntity?: boolean): void;
    /**
     * Creates a light in the world with a certain length (range).
     *
     * @param pos World coordinate where to draw the light.
     * @param color RGB colors of the light.
     * @param range How far to draw the light.
     * @param intensity Intensity of the light ("alpha").
     */
    static drawLightWithRange(pos: Vector3, color: Color, range: number, intensity: number): void;
    /**
     * Creates a light in the world. More configurable than World.drawLightWithRange.
     *
     * @param pos World coordinate of spotlight.
     * @param dir Direction to face spotlight.
     * @param color RGB colors of spotlight.
     * @param distance The maximum distance the spotlight can reach.
     * @param brightness Brightness of the spotlight.
     * @param roundness "Smoothness" of the edge of the spotlight.
     * @param radius Radius size of spotlight.
     * @param fadeOut Falloff size of the spotlight's edge.
     */
    static drawSpotLight(pos: Vector3, dir: Vector3, color: Color, distance: number, brightness: number, roundness: number, radius: number, fadeOut: number): void;
    /**
     * Creates a light in the world. Same as World.drawSpotlight, but also draws shadows.
     *
     * @param pos World coordinate of spotlight.
     * @param dir Direction to face spotlight.
     * @param color RGB colors of spotlight.
     * @param distance The maximum distance the spotlight can reach.
     * @param brightness Brightness of the spotlight.
     * @param roundness "Smoothness" of the edge of the spotlight.
     * @param radius Radius size of spotlight.
     * @param fadeOut Falloff size of the spotlight's edge.
     */
    static drawSpotLightWithShadow(pos: Vector3, dir: Vector3, color: Color, distance: number, brightness: number, roundness: number, radius: number, fadeOut: number): void;
    /**
     * Draws a line in the world. It's not possible to change thickness.
     *
     * @param start World coordinate of start position of line.
     * @param end World coordinate of end position of line.
     * @param color RGB color of line.
     */
    static drawLine(start: Vector3, end: Vector3, color: Color): void;
    /**
     * Draw polygon in the world.
     *
     * @param vertexA World coordinate of first point.
     * @param vertexB World coordinate of second point.
     * @param vertexC World coordinate of third point.
     * @param color RGB color of polygon.
     */
    static drawPoly(vertexA: Vector3, vertexB: Vector3, vertexC: Vector3, color: Color): void;
    /**
     * Cast a ray from {@param start} to {@param end}.
     *
     * @param start Starting position of raycast.
     * @param end Direction to cast a ray to.
     * @param losFlags The entity type(s) that the raycast should intersect with
     * defaults to {@enum IntersectFlags.All}
     * @param options Possible entity types to detect.
     * @param ignoreEntity An entity to ignore (usually player's Ped).
     * @returns {@see SynchronousRaycastResult} object.
     */
    static expensiveRaycast(start: Vector3, end: Vector3, losFlags?: IntersectFlags, shapeTestOptions?: number, ignoreEntity?: BaseEntity): SynchronousRaycastResult;
    /**
     * Cast a ray from {@param start} to {@param end} and returns the first hit
     * entity or coordinate .
     *
     * @param start starting position of raycast.
     * @param end the ending position to raycast to.
     * @param losFlags The entity type(s) that the raycast should intersect with defaults to {@enum IntersectFlags.All}
     * @param shapeTestOptions shape test collision modifiers defaults to ignoring glass, see through, and no collided entities
     * @param ignoreEntity An entity to ignore (usually player's Ped).
     * @returns {@see AsynchronousRaycastResult} object that must be awaited to get its results.
     */
    static raycast(start: Vector3, end: Vector3, losFlags?: IntersectFlags, shapeTestOptions?: number, ignoreEntity?: BaseEntity): AsynchronousRaycastResult;
    static raycastDirection(useExpensiveRaycast: true, source: Vector3, direction: Vector3, maxDistance: number, losFlags?: IntersectFlags, shapeTestOptions?: number, ignoreEntity?: BaseEntity): SynchronousRaycastResult;
    static raycastDirection(useExpensiveRaycast: false, source: Vector3, direction: Vector3, maxDistance: number, losFlags?: IntersectFlags, shapeTestOptions?: number, ignoreEntity?: BaseEntity): AsynchronousRaycastResult;
    /**
     * Cast a ray from the local players camera until it hits an entity
     *
     * @param maxDistance Max distance to cast the ray.
     * @param flags Possible entity types to detect.
     * @returns SynchronousRaycast object.
     */
    static raycastPlayerCamera(maxDistance: number, flags: IntersectFlags): SynchronousRaycastResult;
    /**
     * Gets the closest object of this model
     */
    static getClosestObject(model: Model, coords: Vector3, radius?: number, isMission?: boolean): Prop | null;
    /**
     * Get all [[`Prop`]] entities in your own scope.
     *
     * @returns Array of Props.
     */
    static getAllProps(): Prop[];
    /**
     * Get all [[`Rope`]] entities in your own scope.
     *
     * @returns Array of Ropes.
     */
    static getAllRopes(): Rope[];
    /**
     * Get all [[`Ped`]] entities in your own scope.
     *
     * @returns Array of Peds.
     */
    static getAllPeds(): Ped[];
    /**
     * Get all [[`Vehicle`]] entities in your own scope.
     *
     * @returns Array of Vehicles.
     */
    static getAllVehicles(): Vehicle[];
    /**
     * Gets the cloest [[`Vehicle`]] to the current coords, or null if none are found
     * @returns the closest vehicle or null
     */
    static getClosestVehicle(coords: Vector3, startingDistance?: number): Vehicle | null;
    /**
     * Get all [[`Pickup`]] entities using the GetGamePool.
     * @returns Array of Pickups.
     */
    static getAllPickups(): Pickup[];
    private static currentCloudHat;
    private static cloudHatDict;
    private static weatherDict;
}
