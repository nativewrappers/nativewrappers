[@nativewrappers/fivem](../../../README.md) / [fivem/World](../README.md) / World

# Abstract Class: World

Defined in: lib/fivem/World.d.ts:30

Class with common world manipulations.

This class includes methods for creating entities and common world rendering.

You can create blips, entities, cameras and more.

## Constructors

### Constructor

```ts
new World(): World;
```

#### Returns

`World`

## Accessors

### Blackout

#### Set Signature

```ts
set static Blackout(value): void;
```

Defined in: lib/fivem/World.d.ts:72

Disables all emissive textures, street/building/vehicle lights. "EMP" effect.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `boolean` | On or off. |

##### Returns

`void`

***

### CloudHat

#### Get Signature

```ts
get static CloudHat(): CloudHat;
```

Defined in: lib/fivem/World.d.ts:78

Get the current cloud hat.

##### Returns

[`CloudHat`](../../enums/CloudHat/enumerations/CloudHat.md)

The current cloud hat type.

#### Set Signature

```ts
set static CloudHat(value): void;
```

Defined in: lib/fivem/World.d.ts:84

Set the current cloud hat.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | [`CloudHat`](../../enums/CloudHat/enumerations/CloudHat.md) | The type of cloud hat. |

##### Returns

`void`

***

### CloudHatOpacity

#### Get Signature

```ts
get static CloudHatOpacity(): number;
```

Defined in: lib/fivem/World.d.ts:90

Get the opacity of current cloud hat. Value is between 0-1.

##### Returns

`number`

The current cloud opacity between 0.0 and 1.0

#### Set Signature

```ts
set static CloudHatOpacity(value): void;
```

Defined in: lib/fivem/World.d.ts:96

Set opacity of current cloud hat between 0-1.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `number` | Opacity between 0.0 and 1.0 |

##### Returns

`void`

***

### CurrentDate

#### Get Signature

```ts
get static CurrentDate(): Date;
```

Defined in: lib/fivem/World.d.ts:62

Get the current date in the world.

##### Returns

`Date`

The current date.

#### Set Signature

```ts
set static CurrentDate(date): void;
```

Defined in: lib/fivem/World.d.ts:66

Set the current date of the world.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `date` | `Date` |

##### Returns

`void`

***

### NextWeather

#### Get Signature

```ts
get static NextWeather(): Weather;
```

Defined in: lib/fivem/World.d.ts:114

Get the next weather type.

##### Returns

[`Weather`](../../enums/Weather/enumerations/Weather.md)

The Weather type

#### Set Signature

```ts
set static NextWeather(value): void;
```

Defined in: lib/fivem/World.d.ts:118

Set weather type instantly. Similar to World.transitionToWeather with duration 0.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | [`Weather`](../../enums/Weather/enumerations/Weather.md) |

##### Returns

`void`

***

### RenderingCamera

#### Get Signature

```ts
get static RenderingCamera(): Camera;
```

Defined in: lib/fivem/World.d.ts:36

Get the current camera that's rendering.

##### Returns

[`Camera`](../../Camera/classes/Camera.md)

The camera that's currently used.

#### Set Signature

```ts
set static RenderingCamera(value): void;
```

Defined in: lib/fivem/World.d.ts:51

Set the rendering camera. World.RenderingCamera = null to reset.

```typescript
const position = new Vector3(-802.311, 175.056, 72.8446);
const myCamera = World.createCamera(position, new Vector3(0,0,0), 180);
World.RenderingCamera = myCamera;

// Reset to default cam
World.RenderingCamera = null;
```

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `null` \| [`Camera`](../../Camera/classes/Camera.md) | The camera to render. |

##### Returns

`void`

***

### RopesCreateNetworkWorldState

#### Set Signature

```ts
set static RopesCreateNetworkWorldState(value): void;
```

Defined in: lib/fivem/World.d.ts:56

Whether to create a network world state for Ropes
This currently does nothing

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

##### Returns

`void`

***

### Weather

#### Get Signature

```ts
get static Weather(): Weather;
```

Defined in: lib/fivem/World.d.ts:102

Get the current weather type.

##### Returns

[`Weather`](../../enums/Weather/enumerations/Weather.md)

The current type of weather.

#### Set Signature

```ts
set static Weather(value): void;
```

Defined in: lib/fivem/World.d.ts:108

Set the current weather.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | [`Weather`](../../enums/Weather/enumerations/Weather.md) | Type of weather to set. |

##### Returns

`void`

***

### WeatherTransition

#### Get Signature

```ts
get static WeatherTransition(): [string | Weather, string | Weather, number];
```

Defined in: lib/fivem/World.d.ts:122

Doesn't work

##### Returns

\[`string` \| [`Weather`](../../enums/Weather/enumerations/Weather.md), `string` \| [`Weather`](../../enums/Weather/enumerations/Weather.md), `number`\]

#### Set Signature

```ts
set static WeatherTransition(transition): void;
```

Defined in: lib/fivem/World.d.ts:126

Doesn't work

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `transition` | \[`string` \| [`Weather`](../../enums/Weather/enumerations/Weather.md), `string` \| [`Weather`](../../enums/Weather/enumerations/Weather.md), `number`\] |

##### Returns

`void`

## Methods

### createAmbientPickup()

```ts
static createAmbientPickup(
   type, 
   position, 
   model, 
value): Promise<null | Prop>;
```

Defined in: lib/fivem/World.d.ts:301

Creates an ambient pickup.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `type` | [`PickupType`](../../enums/PickupType/enumerations/PickupType.md) | The [[`PickupType`]] of the pickup. |
| `position` | `Vector3` | The position where it should be spawned. |
| `model` | [`Model`](../../Model/classes/Model.md) | The model. |
| `value` | `number` | The value tied to the pickup. |

#### Returns

`Promise`\<`null` \| [`Prop`](../../models/Prop/classes/Prop.md)\>

The pickup in form of a Prop.

***

### createBlip()

```ts
static createBlip(position, radius?): Blip;
```

Defined in: lib/fivem/World.d.ts:151

Creates a blip at a given position and optionally radius.

```typescript
const position = new Vector3(-802.311, 175.056, 72.8446);
const myStoreBlip = World.createBlip(position, 5.0);
myStoreBlip.Sprite = BlipSprite.Store;
```

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `position` | `Vector3` | World coordinate of blip. |
| `radius?` | `number` | (Optional) Radius of where blip should be shown. |

#### Returns

[`Blip`](../../Blip/classes/Blip.md)

Blip object.

***

### createCamera()

```ts
static createCamera(cameraType?, active?): Camera;
```

Defined in: lib/fivem/World.d.ts:162

Creates a cam that defaults to [CameraTypes.Scripted](../../enums/CameraTypes/enumerations/CameraTypes.md#scripted)

```ts
const cam = World.createCamera(CameraTypes.Spline, true);
```

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `cameraType?` | [`CameraTypes`](../../enums/CameraTypes/enumerations/CameraTypes.md) | the camera type to create |
| `active?` | `boolean` | unknown |

#### Returns

[`Camera`](../../Camera/classes/Camera.md)

***

### createCameraWithParams()

```ts
static createCameraWithParams(
   cameraType?, 
   position?, 
   rotation?, 
   fieldOfView?): Camera;
```

Defined in: lib/fivem/World.d.ts:176

Creates a camera using 'DEFAULT_SCRIPTED_CAMERA'.

```typescript
const position = new Vector3(-802.311, 175.056, 72.8446);
const myCamera = World.createCameraWithParams(position, new Vector3(0,0,0), 180);
```

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `cameraType?` | [`CameraTypes`](../../enums/CameraTypes/enumerations/CameraTypes.md) | - |
| `position?` | `any` | World coordinate where the camera should render. |
| `rotation?` | `any` | Rotation of camera relative to world. |
| `fieldOfView?` | `number` | Field of view angle of camera. |

#### Returns

[`Camera`](../../Camera/classes/Camera.md)

Camera object.

***

### createPed()

#### Call Signature

```ts
static createPed(
   model, 
   position, 
   heading?, 
   shouldNetwork?, 
pinToScript?): Promise<null | Ped>;
```

Defined in: lib/fivem/World.d.ts:193

Create a ped at a desired location.

```typescript
const position = new Vector3(-802.31, 175.06, 72.84);
const model = new Model("a_f_m_beach_01");
const myPed = await World.createPed(model, position);
```

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `model` | [`Model`](../../Model/classes/Model.md) | Ped model to be spawned. |
| `position` | `Vector3` | World position (coordinates) of Ped spawn. |
| `heading?` | `number` | Heading of Ped when spawning. |
| `shouldNetwork?` | `boolean` | if the created ped should be networked to other clients |
| `pinToScript?` | `boolean` | if the ped should be pinned to the script. |

##### Returns

`Promise`\<`null` \| [`Ped`](../../models/Ped/classes/Ped.md)\>

Ped object.

#### Call Signature

```ts
static createPed(
   model, 
   position, 
   shouldNetwork?, 
pinToScript?): Promise<null | Ped>;
```

Defined in: lib/fivem/World.d.ts:209

Create a ped at a desired location.

```typescript
const position = new Vector4(-802.31, 175.05, 72.84, 122.75);
const model = new Model("a_f_m_beach_01");
const myPed = await World.createPed(model, position);
```

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `model` | [`Model`](../../Model/classes/Model.md) | Ped model to be spawned. |
| `position` | `Vector4` | World position (coordinates) of Ped spawn, note that the `w` section of Vector4 is used for heading. |
| `shouldNetwork?` | `boolean` | if the created ped should be networked to other clients |
| `pinToScript?` | `boolean` | if the ped should be pinned to the script. |

##### Returns

`Promise`\<`null` \| [`Ped`](../../models/Ped/classes/Ped.md)\>

Ped object.

***

### createPedInsideVehicle()

```ts
static createPedInsideVehicle(
   vehicle, 
   model, 
   seat, 
   shouldNetwork?, 
pinToScript?): Promise<null | Ped>;
```

Defined in: lib/fivem/World.d.ts:220

Created a ped in the specified vehicle

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `vehicle` | [`Vehicle`](../../models/Vehicle/classes/Vehicle.md) | the vehicle to create the ped in |
| `model` | [`Model`](../../Model/classes/Model.md) | Ped model to be spawned. |
| `seat` | [`VehicleSeat`](../../enums/Vehicle/enumerations/VehicleSeat.md) | the seat to spawn the ped into |
| `shouldNetwork?` | `boolean` | if the created ped should be networked |
| `pinToScript?` | `boolean` | - |

#### Returns

`Promise`\<`null` \| [`Ped`](../../models/Ped/classes/Ped.md)\>

the ped that was created, or null if it doesn't exist.

***

### createPickup()

```ts
static createPickup(
   type, 
   position, 
   model, 
   value, 
rotation?): Promise<null | Pickup>;
```

Defined in: lib/fivem/World.d.ts:291

Create a pickup in a specific position in the world with a specified type and value.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `type` | [`PickupType`](../../enums/PickupType/enumerations/PickupType.md) | The [[`PickupType`]] of pickup. |
| `position` | `Vector3` | The position in the world it should be spawned. |
| `model` | [`Model`](../../Model/classes/Model.md) | The model of the spawned pickup. |
| `value` | `number` | Give a value for the pickup when picked up. |
| `rotation?` | `any` | If set, create a rotating pickup with this rotation. |

#### Returns

`Promise`\<`null` \| [`Pickup`](../../Pickup/classes/Pickup.md)\>

Pickup object.

***

### createProp()

```ts
static createProp(
   model, 
   position, 
   placeOnGround, 
   isNetwork?, 
   pinToScript?, 
forceToBeObject?): Promise<null | Prop>;
```

Defined in: lib/fivem/World.d.ts:280

Spawns a [[`Prop`]] at the given position.

```typescript
const position = new Vector3(-802.311, 175.056, 72.8446);
const model = new Model("prop_barrel_02a");
const myBarrelProp = await World.createProp(model, position, false, true);
```

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `model` | [`Model`](../../Model/classes/Model.md) | The [[`Model`]] to spawn (must be a Prop) |
| `position` | `Vector3` | Location of Prop |
| `placeOnGround` | `boolean` | If set to true, sets the Prop on the ground nearest to position. |
| `isNetwork?` | `boolean` |  |
| `pinToScript?` | `boolean` | - |
| `forceToBeObject?` | `boolean` | - |

#### Returns

`Promise`\<`null` \| [`Prop`](../../models/Prop/classes/Prop.md)\>

Prop object.

***

### createRandomPed()

```ts
static createRandomPed(position): Ped;
```

Defined in: lib/fivem/World.d.ts:232

Creates a [[`Ped`]] with a random model.

```typescript
const position = new Vector3(-802.311, 175.056, 72.8446);
const randomPed = World.createRandomPed(position);
```

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `position` | `Vector3` | World coordinate of Ped spawn. |

#### Returns

[`Ped`](../../models/Ped/classes/Ped.md)

Ped object.

***

### createRandomVehicle()

```ts
static createRandomVehicle(
   position, 
   heading?, 
isNetwork?): Promise<null | Vehicle>;
```

Defined in: lib/fivem/World.d.ts:262

Create a random vehicle at a desired location.

```typescript
const position = new Vector3(-802.311, 175.056, 72.8446);
const randomVehicle = await World.createRandomVehicle(position);
```

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `position` | `Vector3` | World position (coordinates) of Vehicle spawn. |
| `heading?` | `number` | Heading of Vehicle when spawning. |
| `isNetwork?` | `boolean` |  |

#### Returns

`Promise`\<`null` \| [`Vehicle`](../../models/Vehicle/classes/Vehicle.md)\>

Vehicle object.

***

### createRope()

```ts
static createRope(
   position, 
   rotation, 
   maxLength, 
   ropeType, 
   initLength, 
   minLength, 
   lengthChangeRate?, 
   onlyPPU?, 
   collisionOn?, 
   lockFromFront?, 
   timeMultiplier?, 
   breakable?, 
shouldLoadTextures?): Promise<Rope>;
```

Defined in: lib/fivem/World.d.ts:263

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `position` | `Vector3` |
| `rotation` | `Vector3` |
| `maxLength` | `number` |
| `ropeType` | [`RopeType`](../../enums/RopeType/enumerations/RopeType.md) |
| `initLength` | `number` |
| `minLength` | `number` |
| `lengthChangeRate?` | `number` |
| `onlyPPU?` | `boolean` |
| `collisionOn?` | `boolean` |
| `lockFromFront?` | `boolean` |
| `timeMultiplier?` | `number` |
| `breakable?` | `boolean` |
| `shouldLoadTextures?` | `boolean` |

#### Returns

`Promise`\<[`Rope`](../../Rope/classes/Rope.md)\>

***

### createVehicle()

```ts
static createVehicle(
   model, 
   position, 
   heading?, 
   isNetwork?, 
pinToScript?): Promise<null | Vehicle>;
```

Defined in: lib/fivem/World.d.ts:248

Create a vehicle at a desired location.

```typescript
const position = new Vector3(-802.311, 175.056, 72.8446);
const model = new Model("adder");
const myVehicle = await World.createVehicle(model, position);
```

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `model` | [`Model`](../../Model/classes/Model.md) | Vehicle model to be spawned. |
| `position` | `Vector3` | World position (coordinates) of Vehicle spawn. |
| `heading?` | `number` | Heading of Vehicle when spawning. |
| `isNetwork?` | `boolean` |  |
| `pinToScript?` | `boolean` | - |

#### Returns

`Promise`\<`null` \| [`Vehicle`](../../models/Vehicle/classes/Vehicle.md)\>

Vehicle object.

***

### destroyAllCameras()

```ts
static destroyAllCameras(): void;
```

Defined in: lib/fivem/World.d.ts:137

Destroys all existing cameras and sets your rendering camera back to GameplayCam.

#### Returns

`void`

***

### drawLightWithRange()

```ts
static drawLightWithRange(
   pos, 
   color, 
   range, 
   intensity): void;
```

Defined in: lib/fivem/World.d.ts:336

Creates a light in the world with a certain length (range).

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `pos` | `Vector3` | World coordinate where to draw the light. |
| `color` | `Color` | RGB colors of the light. |
| `range` | `number` | How far to draw the light. |
| `intensity` | `number` | Intensity of the light ("alpha"). |

#### Returns

`void`

***

### drawLine()

```ts
static drawLine(
   start, 
   end, 
   color): void;
```

Defined in: lib/fivem/World.d.ts:370

Draws a line in the world. It's not possible to change thickness.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `start` | `Vector3` | World coordinate of start position of line. |
| `end` | `Vector3` | World coordinate of end position of line. |
| `color` | `Color` | RGB color of line. |

#### Returns

`void`

***

### drawMarker()

```ts
static drawMarker(
   type, 
   position, 
   direction, 
   rotation, 
   scale, 
   color, 
   bobUpAndDown?, 
   faceCamera?, 
   rotateY?, 
   textureDict?, 
   textureName?, 
   drawOnEntity?): void;
```

Defined in: lib/fivem/World.d.ts:327

Draw a marker at a desired location. Careful! Must be drawn every tick.

```typescript
const position = new Vector3(-802.311, 175.056, 72.8446);
const zeroVector = new Vector3(0,0,0);

setTick(() => {
 World.drawMarker(MarkerType.ThickChevronUp, position, zeroVector, zeroVector, 1.0, new Color(255,0,0));
})
```

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `type` | [`MarkerType`](../../enums/MarkerType/enumerations/MarkerType.md) | Type of marker. |
| `position` | `Vector3` | Location of marker. |
| `direction` | `Vector3` | Direction facing. |
| `rotation` | `Vector3` | World rotation. |
| `scale` | `Vector3` | Size of marker. |
| `color` | `Color` | Color of marker. |
| `bobUpAndDown?` | `boolean` | Animated movement along marker's own X axis. |
| `faceCamera?` | `boolean` | Rendering marker facing rendering camera. |
| `rotateY?` | `boolean` | Rotate along Y axis. |
| `textureDict?` | `null` \| `string` | Custom texture dictionary for custom marker. |
| `textureName?` | `null` \| `string` | Custom texture name for custom marker. |
| `drawOnEntity?` | `boolean` | Render the marker on an entity. |

#### Returns

`void`

***

### drawPoly()

```ts
static drawPoly(
   vertexA, 
   vertexB, 
   vertexC, 
   color): void;
```

Defined in: lib/fivem/World.d.ts:379

Draw polygon in the world.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `vertexA` | `Vector3` | World coordinate of first point. |
| `vertexB` | `Vector3` | World coordinate of second point. |
| `vertexC` | `Vector3` | World coordinate of third point. |
| `color` | `Color` | RGB color of polygon. |

#### Returns

`void`

***

### drawSpotLight()

```ts
static drawSpotLight(
   pos, 
   dir, 
   color, 
   distance, 
   brightness, 
   roundness, 
   radius, 
   fadeOut): void;
```

Defined in: lib/fivem/World.d.ts:349

Creates a light in the world. More configurable than World.drawLightWithRange.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `pos` | `Vector3` | World coordinate of spotlight. |
| `dir` | `Vector3` | Direction to face spotlight. |
| `color` | `Color` | RGB colors of spotlight. |
| `distance` | `number` | The maximum distance the spotlight can reach. |
| `brightness` | `number` | Brightness of the spotlight. |
| `roundness` | `number` | "Smoothness" of the edge of the spotlight. |
| `radius` | `number` | Radius size of spotlight. |
| `fadeOut` | `number` | Falloff size of the spotlight's edge. |

#### Returns

`void`

***

### drawSpotLightWithShadow()

```ts
static drawSpotLightWithShadow(
   pos, 
   dir, 
   color, 
   distance, 
   brightness, 
   roundness, 
   radius, 
   fadeOut): void;
```

Defined in: lib/fivem/World.d.ts:362

Creates a light in the world. Same as World.drawSpotlight, but also draws shadows.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `pos` | `Vector3` | World coordinate of spotlight. |
| `dir` | `Vector3` | Direction to face spotlight. |
| `color` | `Color` | RGB colors of spotlight. |
| `distance` | `number` | The maximum distance the spotlight can reach. |
| `brightness` | `number` | Brightness of the spotlight. |
| `roundness` | `number` | "Smoothness" of the edge of the spotlight. |
| `radius` | `number` | Radius size of spotlight. |
| `fadeOut` | `number` | Falloff size of the spotlight's edge. |

#### Returns

`void`

***

### expensiveRaycast()

```ts
static expensiveRaycast(
   start, 
   end, 
   losFlags?, 
   shapeTestOptions?, 
   ignoreEntity?): SynchronousRaycastResult;
```

Defined in: lib/fivem/World.d.ts:391

Cast a ray from start to end.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `start` | `Vector3` | Starting position of raycast. |
| `end` | `Vector3` | Direction to cast a ray to. |
| `losFlags?` | [`IntersectFlags`](../../enums/RaycastEnums/enumerations/IntersectFlags.md) | The entity type(s) that the raycast should intersect with defaults to IntersectFlags.All |
| `shapeTestOptions?` | `number` | - |
| `ignoreEntity?` | [`BaseEntity`](../../models/BaseEntity/classes/BaseEntity.md) | An entity to ignore (usually player's Ped). |

#### Returns

[`SynchronousRaycastResult`](../../Raycast/classes/SynchronousRaycastResult.md)

SynchronousRaycastResult object.

***

### getAllPeds()

```ts
static getAllPeds(): Ped[];
```

Defined in: lib/fivem/World.d.ts:435

Get all [[`Ped`]] entities in your own scope.

#### Returns

[`Ped`](../../models/Ped/classes/Ped.md)[]

Array of Peds.

***

### getAllPickups()

```ts
static getAllPickups(): Pickup[];
```

Defined in: lib/fivem/World.d.ts:451

Get all [[`Pickup`]] entities using the GetGamePool.

#### Returns

[`Pickup`](../../Pickup/classes/Pickup.md)[]

Array of Pickups.

***

### getAllProps()

```ts
static getAllProps(): Prop[];
```

Defined in: lib/fivem/World.d.ts:423

Get all [[`Prop`]] entities in your own scope.

#### Returns

[`Prop`](../../models/Prop/classes/Prop.md)[]

Array of Props.

***

### getAllRopes()

```ts
static getAllRopes(): Rope[];
```

Defined in: lib/fivem/World.d.ts:429

Get all [[`Rope`]] entities in your own scope.

#### Returns

[`Rope`](../../Rope/classes/Rope.md)[]

Array of Ropes.

***

### getAllVehicles()

```ts
static getAllVehicles(): Vehicle[];
```

Defined in: lib/fivem/World.d.ts:441

Get all [[`Vehicle`]] entities in your own scope.

#### Returns

[`Vehicle`](../../models/Vehicle/classes/Vehicle.md)[]

Array of Vehicles.

***

### getClosestObject()

```ts
static getClosestObject(
   model, 
   coords, 
   radius?, 
   isMission?): null | Prop;
```

Defined in: lib/fivem/World.d.ts:417

Gets the closest object of this model

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `model` | [`Model`](../../Model/classes/Model.md) |
| `coords` | `Vector3` |
| `radius?` | `number` |
| `isMission?` | `boolean` |

#### Returns

`null` \| [`Prop`](../../models/Prop/classes/Prop.md)

***

### getClosestVehicle()

```ts
static getClosestVehicle(coords, startingDistance?): null | Vehicle;
```

Defined in: lib/fivem/World.d.ts:446

Gets the cloest [[`Vehicle`]] to the current coords, or null if none are found

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `coords` | `Vector3` |
| `startingDistance?` | `number` |

#### Returns

`null` \| [`Vehicle`](../../models/Vehicle/classes/Vehicle.md)

the closest vehicle or null

***

### raycast()

```ts
static raycast(
   start, 
   end, 
   losFlags?, 
   shapeTestOptions?, 
   ignoreEntity?): AsynchronousRaycastResult;
```

Defined in: lib/fivem/World.d.ts:403

Cast a ray from start to end and returns the first hit
entity or coordinate .

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `start` | `Vector3` | starting position of raycast. |
| `end` | `Vector3` | the ending position to raycast to. |
| `losFlags?` | [`IntersectFlags`](../../enums/RaycastEnums/enumerations/IntersectFlags.md) | The entity type(s) that the raycast should intersect with defaults to IntersectFlags.All |
| `shapeTestOptions?` | `number` | shape test collision modifiers defaults to ignoring glass, see through, and no collided entities |
| `ignoreEntity?` | [`BaseEntity`](../../models/BaseEntity/classes/BaseEntity.md) | An entity to ignore (usually player's Ped). |

#### Returns

[`AsynchronousRaycastResult`](../../Raycast/classes/AsynchronousRaycastResult.md)

AsynchronousRaycastResult object that must be awaited to get its results.

***

### raycastDirection()

#### Call Signature

```ts
static raycastDirection(
   useExpensiveRaycast, 
   source, 
   direction, 
   maxDistance, 
   losFlags?, 
   shapeTestOptions?, 
   ignoreEntity?): SynchronousRaycastResult;
```

Defined in: lib/fivem/World.d.ts:404

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `useExpensiveRaycast` | `true` |
| `source` | `Vector3` |
| `direction` | `Vector3` |
| `maxDistance` | `number` |
| `losFlags?` | [`IntersectFlags`](../../enums/RaycastEnums/enumerations/IntersectFlags.md) |
| `shapeTestOptions?` | `number` |
| `ignoreEntity?` | [`BaseEntity`](../../models/BaseEntity/classes/BaseEntity.md) |

##### Returns

[`SynchronousRaycastResult`](../../Raycast/classes/SynchronousRaycastResult.md)

#### Call Signature

```ts
static raycastDirection(
   useExpensiveRaycast, 
   source, 
   direction, 
   maxDistance, 
   losFlags?, 
   shapeTestOptions?, 
   ignoreEntity?): AsynchronousRaycastResult;
```

Defined in: lib/fivem/World.d.ts:405

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `useExpensiveRaycast` | `false` |
| `source` | `Vector3` |
| `direction` | `Vector3` |
| `maxDistance` | `number` |
| `losFlags?` | [`IntersectFlags`](../../enums/RaycastEnums/enumerations/IntersectFlags.md) |
| `shapeTestOptions?` | `number` |
| `ignoreEntity?` | [`BaseEntity`](../../models/BaseEntity/classes/BaseEntity.md) |

##### Returns

[`AsynchronousRaycastResult`](../../Raycast/classes/AsynchronousRaycastResult.md)

***

### raycastPlayerCamera()

```ts
static raycastPlayerCamera(maxDistance, flags): SynchronousRaycastResult;
```

Defined in: lib/fivem/World.d.ts:413

Cast a ray from the local players camera until it hits an entity

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `maxDistance` | `number` | Max distance to cast the ray. |
| `flags` | [`IntersectFlags`](../../enums/RaycastEnums/enumerations/IntersectFlags.md) | Possible entity types to detect. |

#### Returns

[`SynchronousRaycastResult`](../../Raycast/classes/SynchronousRaycastResult.md)

SynchronousRaycast object.

***

### transitionToWeather()

```ts
static transitionToWeather(weather, duration): void;
```

Defined in: lib/fivem/World.d.ts:133

Transition to different weather type within a certain time.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `weather` | [`Weather`](../../enums/Weather/enumerations/Weather.md) | Weather type to change to. |
| `duration` | `number` | Time for full weather change (in milliseconds); |

#### Returns

`void`
