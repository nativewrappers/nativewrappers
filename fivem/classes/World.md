[@nativewrappers/fivem](../../README.md) / [fivem](../README.md) / World

# Class: `abstract` World

Defined in: fivem/World.d.ts:20

Class with common world manipulations.

This class includes methods for creating entities and common world rendering.

You can create blips, entities, cameras and more.

## Constructors

### new World()

```ts
new World(): World
```

#### Returns

[`World`](World.md)

## Accessors

### Blackout

#### Set Signature

```ts
set static Blackout(value): void
```

Defined in: fivem/World.d.ts:62

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
get static CloudHat(): CloudHat
```

Defined in: fivem/World.d.ts:68

Get the current cloud hat.

##### Returns

[`CloudHat`](../enumerations/CloudHat.md)

The current cloud hat type.

#### Set Signature

```ts
set static CloudHat(value): void
```

Defined in: fivem/World.d.ts:74

Set the current cloud hat.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | [`CloudHat`](../enumerations/CloudHat.md) | The type of cloud hat. |

##### Returns

`void`

***

### CloudHatOpacity

#### Get Signature

```ts
get static CloudHatOpacity(): number
```

Defined in: fivem/World.d.ts:80

Get the opacity of current cloud hat. Value is between 0-1.

##### Returns

`number`

The current cloud opacity between 0.0 and 1.0

#### Set Signature

```ts
set static CloudHatOpacity(value): void
```

Defined in: fivem/World.d.ts:86

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
get static CurrentDate(): Date
```

Defined in: fivem/World.d.ts:52

Get the current date in the world.

##### Returns

`Date`

The current date.

#### Set Signature

```ts
set static CurrentDate(date): void
```

Defined in: fivem/World.d.ts:56

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
get static NextWeather(): Weather
```

Defined in: fivem/World.d.ts:104

Get the next weather type.

##### Returns

[`Weather`](../enumerations/Weather.md)

The Weather type

#### Set Signature

```ts
set static NextWeather(value): void
```

Defined in: fivem/World.d.ts:108

Set weather type instantly. Similar to World.transitionToWeather with duration 0.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | [`Weather`](../enumerations/Weather.md) |

##### Returns

`void`

***

### RenderingCamera

#### Get Signature

```ts
get static RenderingCamera(): Camera
```

Defined in: fivem/World.d.ts:26

Get the current camera that's rendering.

##### Returns

[`Camera`](Camera.md)

The camera that's currently used.

#### Set Signature

```ts
set static RenderingCamera(value): void
```

Defined in: fivem/World.d.ts:41

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
| `value` | `null` \| [`Camera`](Camera.md) | The camera to render. |

##### Returns

`void`

***

### RopesCreateNetworkWorldState

#### Set Signature

```ts
set static RopesCreateNetworkWorldState(value): void
```

Defined in: fivem/World.d.ts:46

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
get static Weather(): Weather
```

Defined in: fivem/World.d.ts:92

Get the current weather type.

##### Returns

[`Weather`](../enumerations/Weather.md)

The current type of weather.

#### Set Signature

```ts
set static Weather(value): void
```

Defined in: fivem/World.d.ts:98

Set the current weather.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | [`Weather`](../enumerations/Weather.md) | Type of weather to set. |

##### Returns

`void`

***

### WeatherTransition

#### Get Signature

```ts
get static WeatherTransition(): [string | Weather, string | Weather, number]
```

Defined in: fivem/World.d.ts:112

Doesn't work

##### Returns

\[`string` \| [`Weather`](../enumerations/Weather.md), `string` \| [`Weather`](../enumerations/Weather.md), `number`\]

#### Set Signature

```ts
set static WeatherTransition(transition): void
```

Defined in: fivem/World.d.ts:116

Doesn't work

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `transition` | \[`string` \| [`Weather`](../enumerations/Weather.md), `string` \| [`Weather`](../enumerations/Weather.md), `number`\] |

##### Returns

`void`

## Methods

### createAmbientPickup()

```ts
static createAmbientPickup(
   type, 
   position, 
   model, 
value): Promise<null | Prop>
```

Defined in: fivem/World.d.ts:263

Creates an ambient pickup.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `type` | [`PickupType`](../enumerations/PickupType.md) | The [[`PickupType`]] of the pickup. |
| `position` | `Vector3` | The position where it should be spawned. |
| `model` | [`Model`](Model.md) | The model. |
| `value` | `number` | The value tied to the pickup. |

#### Returns

`Promise`\<`null` \| [`Prop`](Prop.md)\>

The pickup in form of a Prop.

***

### createBlip()

```ts
static createBlip(position, radius?): Blip
```

Defined in: fivem/World.d.ts:141

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
| `radius`? | `number` | (Optional) Radius of where blip should be shown. |

#### Returns

[`Blip`](Blip.md)

Blip object.

***

### createCamera()

```ts
static createCamera(cameraType?, active?): Camera
```

Defined in: fivem/World.d.ts:152

Creates a cam that defaults to [CameraTypes.Scripted](../enumerations/CameraTypes.md#scripted)

```ts
const cam = World.createCamera(CameraTypes.Spline, true);
```

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `cameraType`? | [`CameraTypes`](../enumerations/CameraTypes.md) | the camera type to create |
| `active`? | `boolean` | unknown |

#### Returns

[`Camera`](Camera.md)

***

### createCameraWithParams()

```ts
static createCameraWithParams(
   cameraType?, 
   position?, 
   rotation?, 
   fieldOfView?): Camera
```

Defined in: fivem/World.d.ts:166

Creates a camera using 'DEFAULT_SCRIPTED_CAMERA'.

```typescript
const position = new Vector3(-802.311, 175.056, 72.8446);
const myCamera = World.createCameraWithParams(position, new Vector3(0,0,0), 180);
```

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `cameraType`? | [`CameraTypes`](../enumerations/CameraTypes.md) | - |
| `position`? | `any` | World coordinate where the camera should render. |
| `rotation`? | `any` | Rotation of camera relative to world. |
| `fieldOfView`? | `number` | Field of view angle of camera. |

#### Returns

[`Camera`](Camera.md)

Camera object.

***

### createPed()

```ts
static createPed(
   model, 
   position, 
   heading?, 
   isNetwork?, 
pinToScript?): Promise<null | Ped>
```

Defined in: fivem/World.d.ts:182

Create a ped at a desired location.

```typescript
const position = new Vector3(-802.311, 175.056, 72.8446);
const model = new Model("a_f_m_beach_01");
const myPed = await World.createPed(model, position);
```

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `model` | [`Model`](Model.md) | Ped model to be spawned. |
| `position` | `Vector3` | World position (coordinates) of Ped spawn. |
| `heading`? | `number` | Heading of Ped when spawning. |
| `isNetwork`? | `boolean` |  |
| `pinToScript`? | `boolean` | - |

#### Returns

`Promise`\<`null` \| [`Ped`](Ped.md)\>

Ped object.

***

### createPickup()

```ts
static createPickup(
   type, 
   position, 
   model, 
   value, 
rotation?): Promise<null | Pickup>
```

Defined in: fivem/World.d.ts:253

Create a pickup in a specific position in the world with a specified type and value.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `type` | [`PickupType`](../enumerations/PickupType.md) | The [[`PickupType`]] of pickup. |
| `position` | `Vector3` | The position in the world it should be spawned. |
| `model` | [`Model`](Model.md) | The model of the spawned pickup. |
| `value` | `number` | Give a value for the pickup when picked up. |
| `rotation`? | `any` | If set, create a rotating pickup with this rotation. |

#### Returns

`Promise`\<`null` \| [`Pickup`](Pickup.md)\>

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
forceToBeObject?): Promise<null | Prop>
```

Defined in: fivem/World.d.ts:242

Spawns a [[`Prop`]] at the given position.

```typescript
const position = new Vector3(-802.311, 175.056, 72.8446);
const model = new Model("prop_barrel_02a");
const myBarrelProp = await World.createProp(model, position, false, true);
```

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `model` | [`Model`](Model.md) | The [[`Model`]] to spawn (must be a Prop) |
| `position` | `Vector3` | Location of Prop |
| `placeOnGround` | `boolean` | If set to true, sets the Prop on the ground nearest to position. |
| `isNetwork`? | `boolean` |  |
| `pinToScript`? | `boolean` | - |
| `forceToBeObject`? | `boolean` | - |

#### Returns

`Promise`\<`null` \| [`Prop`](Prop.md)\>

Prop object.

***

### createRandomPed()

```ts
static createRandomPed(position): Ped
```

Defined in: fivem/World.d.ts:194

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

[`Ped`](Ped.md)

Ped object.

***

### createRandomVehicle()

```ts
static createRandomVehicle(
   position, 
   heading?, 
isNetwork?): Promise<null | Vehicle>
```

Defined in: fivem/World.d.ts:224

Create a random vehicle at a desired location.

```typescript
const position = new Vector3(-802.311, 175.056, 72.8446);
const randomVehicle = await World.createRandomVehicle(position);
```

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `position` | `Vector3` | World position (coordinates) of Vehicle spawn. |
| `heading`? | `number` | Heading of Vehicle when spawning. |
| `isNetwork`? | `boolean` |  |

#### Returns

`Promise`\<`null` \| [`Vehicle`](Vehicle.md)\>

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
shouldLoadTextures?): Promise<Rope>
```

Defined in: fivem/World.d.ts:225

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `position` | `Vector3` |
| `rotation` | `Vector3` |
| `maxLength` | `number` |
| `ropeType` | [`RopeType`](../enumerations/RopeType.md) |
| `initLength` | `number` |
| `minLength` | `number` |
| `lengthChangeRate`? | `number` |
| `onlyPPU`? | `boolean` |
| `collisionOn`? | `boolean` |
| `lockFromFront`? | `boolean` |
| `timeMultiplier`? | `number` |
| `breakable`? | `boolean` |
| `shouldLoadTextures`? | `boolean` |

#### Returns

`Promise`\<[`Rope`](Rope.md)\>

***

### createVehicle()

```ts
static createVehicle(
   model, 
   position, 
   heading?, 
   isNetwork?, 
pinToScript?): Promise<null | Vehicle>
```

Defined in: fivem/World.d.ts:210

Create a vehicle at a desired location.

```typescript
const position = new Vector3(-802.311, 175.056, 72.8446);
const model = new Model("adder");
const myVehicle = await World.createVehicle(model, position);
```

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `model` | [`Model`](Model.md) | Vehicle model to be spawned. |
| `position` | `Vector3` | World position (coordinates) of Vehicle spawn. |
| `heading`? | `number` | Heading of Vehicle when spawning. |
| `isNetwork`? | `boolean` |  |
| `pinToScript`? | `boolean` | - |

#### Returns

`Promise`\<`null` \| [`Vehicle`](Vehicle.md)\>

Vehicle object.

***

### destroyAllCameras()

```ts
static destroyAllCameras(): void
```

Defined in: fivem/World.d.ts:127

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
   intensity): void
```

Defined in: fivem/World.d.ts:298

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
   color): void
```

Defined in: fivem/World.d.ts:332

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
   drawOnEntity?): void
```

Defined in: fivem/World.d.ts:289

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
| `type` | [`MarkerType`](../enumerations/MarkerType.md) | Type of marker. |
| `position` | `Vector3` | Location of marker. |
| `direction` | `Vector3` | Direction facing. |
| `rotation` | `Vector3` | World rotation. |
| `scale` | `Vector3` | Size of marker. |
| `color` | `Color` | Color of marker. |
| `bobUpAndDown`? | `boolean` | Animated movement along marker's own X axis. |
| `faceCamera`? | `boolean` | Rendering marker facing rendering camera. |
| `rotateY`? | `boolean` | Rotate along Y axis. |
| `textureDict`? | `null` \| `string` | Custom texture dictionary for custom marker. |
| `textureName`? | `null` \| `string` | Custom texture name for custom marker. |
| `drawOnEntity`? | `boolean` | Render the marker on an entity. |

#### Returns

`void`

***

### drawPoly()

```ts
static drawPoly(
   vertexA, 
   vertexB, 
   vertexC, 
   color): void
```

Defined in: fivem/World.d.ts:341

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
   fadeOut): void
```

Defined in: fivem/World.d.ts:311

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
   fadeOut): void
```

Defined in: fivem/World.d.ts:324

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
   ignoreEntity?): SynchronousRaycastResult
```

Defined in: fivem/World.d.ts:353

Cast a ray from {@param start} to {@param end}.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `start` | `Vector3` | Starting position of raycast. |
| `end` | `Vector3` | Direction to cast a ray to. |
| `losFlags`? | [`IntersectFlags`](../enumerations/IntersectFlags.md) | The entity type(s) that the raycast should intersect with defaults to {@enum IntersectFlags.All} |
| `shapeTestOptions`? | `number` | - |
| `ignoreEntity`? | [`BaseEntity`](BaseEntity.md) | An entity to ignore (usually player's Ped). |

#### Returns

[`SynchronousRaycastResult`](SynchronousRaycastResult.md)

{@see SynchronousRaycastResult} object.

***

### getAllPeds()

```ts
static getAllPeds(): Ped[]
```

Defined in: fivem/World.d.ts:397

Get all [[`Ped`]] entities in your own scope.

#### Returns

[`Ped`](Ped.md)[]

Array of Peds.

***

### getAllPickups()

```ts
static getAllPickups(): Pickup[]
```

Defined in: fivem/World.d.ts:413

Get all [[`Pickup`]] entities using the GetGamePool.

#### Returns

[`Pickup`](Pickup.md)[]

Array of Pickups.

***

### getAllProps()

```ts
static getAllProps(): Prop[]
```

Defined in: fivem/World.d.ts:385

Get all [[`Prop`]] entities in your own scope.

#### Returns

[`Prop`](Prop.md)[]

Array of Props.

***

### getAllRopes()

```ts
static getAllRopes(): Rope[]
```

Defined in: fivem/World.d.ts:391

Get all [[`Rope`]] entities in your own scope.

#### Returns

[`Rope`](Rope.md)[]

Array of Ropes.

***

### getAllVehicles()

```ts
static getAllVehicles(): Vehicle[]
```

Defined in: fivem/World.d.ts:403

Get all [[`Vehicle`]] entities in your own scope.

#### Returns

[`Vehicle`](Vehicle.md)[]

Array of Vehicles.

***

### getClosestObject()

```ts
static getClosestObject(
   model, 
   coords, 
   radius?, 
   isMission?): null | Prop
```

Defined in: fivem/World.d.ts:379

Gets the closest object of this model

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `model` | [`Model`](Model.md) |
| `coords` | `Vector3` |
| `radius`? | `number` |
| `isMission`? | `boolean` |

#### Returns

`null` \| [`Prop`](Prop.md)

***

### getClosestVehicle()

```ts
static getClosestVehicle(coords): null | Vehicle
```

Defined in: fivem/World.d.ts:408

Gets the cloest [[`Vehicle`]] to the current coords, or null if none are found

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `coords` | `Vector3` |

#### Returns

`null` \| [`Vehicle`](Vehicle.md)

the closest vehicle or null

***

### raycast()

```ts
static raycast(
   start, 
   end, 
   losFlags?, 
   shapeTestOptions?, 
   ignoreEntity?): AsynchronousRaycastResult
```

Defined in: fivem/World.d.ts:365

Cast a ray from {@param start} to {@param end} and returns the first hit
entity or coordinate .

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `start` | `Vector3` | starting position of raycast. |
| `end` | `Vector3` | the ending position to raycast to. |
| `losFlags`? | [`IntersectFlags`](../enumerations/IntersectFlags.md) | The entity type(s) that the raycast should intersect with defaults to {@enum IntersectFlags.All} |
| `shapeTestOptions`? | `number` | shape test collision modifiers defaults to ignoring glass, see through, and no collided entities |
| `ignoreEntity`? | [`BaseEntity`](BaseEntity.md) | An entity to ignore (usually player's Ped). |

#### Returns

[`AsynchronousRaycastResult`](AsynchronousRaycastResult.md)

{@see AsynchronousRaycastResult} object that must be awaited to get its results.

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
   ignoreEntity?): SynchronousRaycastResult
```

Defined in: fivem/World.d.ts:366

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `useExpensiveRaycast` | `true` |
| `source` | `Vector3` |
| `direction` | `Vector3` |
| `maxDistance` | `number` |
| `losFlags`? | [`IntersectFlags`](../enumerations/IntersectFlags.md) |
| `shapeTestOptions`? | `number` |
| `ignoreEntity`? | [`BaseEntity`](BaseEntity.md) |

##### Returns

[`SynchronousRaycastResult`](SynchronousRaycastResult.md)

#### Call Signature

```ts
static raycastDirection(
   useExpensiveRaycast, 
   source, 
   direction, 
   maxDistance, 
   losFlags?, 
   shapeTestOptions?, 
   ignoreEntity?): AsynchronousRaycastResult
```

Defined in: fivem/World.d.ts:367

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `useExpensiveRaycast` | `false` |
| `source` | `Vector3` |
| `direction` | `Vector3` |
| `maxDistance` | `number` |
| `losFlags`? | [`IntersectFlags`](../enumerations/IntersectFlags.md) |
| `shapeTestOptions`? | `number` |
| `ignoreEntity`? | [`BaseEntity`](BaseEntity.md) |

##### Returns

[`AsynchronousRaycastResult`](AsynchronousRaycastResult.md)

***

### raycastPlayerCamera()

```ts
static raycastPlayerCamera(maxDistance, flags): SynchronousRaycastResult
```

Defined in: fivem/World.d.ts:375

Cast a ray from the local players camera until it hits an entity

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `maxDistance` | `number` | Max distance to cast the ray. |
| `flags` | [`IntersectFlags`](../enumerations/IntersectFlags.md) | Possible entity types to detect. |

#### Returns

[`SynchronousRaycastResult`](SynchronousRaycastResult.md)

SynchronousRaycast object.

***

### transitionToWeather()

```ts
static transitionToWeather(weather, duration): void
```

Defined in: fivem/World.d.ts:123

Transition to different weather type within a certain time.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `weather` | [`Weather`](../enumerations/Weather.md) | Weather type to change to. |
| `duration` | `number` | Time for full weather change (in milliseconds); |

#### Returns

`void`
