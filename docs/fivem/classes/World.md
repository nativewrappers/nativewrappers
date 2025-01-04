[@nativewrappers/fivem](../../README.md) / [fivem](../README.md) / World

# Class: `abstract` World

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

```ts
set static Blackout(value): void
```

Disables all emissive textures, street/building/vehicle lights. "EMP" effect.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `boolean` | On or off. |

#### Defined in

[src/fivem/World.ts:106](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/World.ts#L106)

***

### CloudHat

```ts
get static CloudHat(): CloudHat
```

Get the current cloud hat.

```ts
set static CloudHat(value): void
```

Set the current cloud hat.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | [`CloudHat`](../enumerations/CloudHat.md) | The type of cloud hat. |

#### Returns

[`CloudHat`](../enumerations/CloudHat.md)

The current cloud hat type.

#### Defined in

[src/fivem/World.ts:115](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/World.ts#L115)

***

### CloudHatOpacity

```ts
get static CloudHatOpacity(): number
```

Get the opacity of current cloud hat. Value is between 0-1.

```ts
set static CloudHatOpacity(value): void
```

Set opacity of current cloud hat between 0-1.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `number` | Opacity between 0.0 and 1.0 |

#### Returns

`number`

The current cloud opacity between 0.0 and 1.0

#### Defined in

[src/fivem/World.ts:140](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/World.ts#L140)

***

### CurrentDate

```ts
get static CurrentDate(): Date
```

Get the current date in the world.

```ts
set static CurrentDate(date): void
```

Set the current date of the world.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `date` | `Date` |

#### Returns

`Date`

The current date.

#### Defined in

[src/fivem/World.ts:78](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/World.ts#L78)

***

### NextWeather

```ts
get static NextWeather(): Weather
```

Get the next weather type.

```ts
set static NextWeather(value): void
```

Set weather type instantly. Similar to World.transitionToWeather with duration 0.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | [`Weather`](../enumerations/Weather.md) |

#### Returns

[`Weather`](../enumerations/Weather.md)

The Weather type

#### Defined in

[src/fivem/World.ts:215](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/World.ts#L215)

***

### RenderingCamera

```ts
get static RenderingCamera(): Camera
```

Get the current camera that's rendering.

```ts
set static RenderingCamera(value): void
```

Set the rendering camera. World.RenderingCamera = null to reset.

```typescript
const position = new Vector3(-802.311, 175.056, 72.8446);
const myCamera = World.createCamera(position, new Vector3(0,0,0), 180);
World.RenderingCamera = myCamera;

// Reset to default cam
World.RenderingCamera = null;
```

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `null` \| [`Camera`](Camera.md) | The camera to render. |

#### Returns

[`Camera`](Camera.md)

The camera that's currently used.

#### Defined in

[src/fivem/World.ts:38](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/World.ts#L38)

***

### RopesCreateNetworkWorldState

```ts
set static RopesCreateNetworkWorldState(value): void
```

Whether to create a network world state for Ropes
This currently does nothing

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

#### Defined in

[src/fivem/World.ts:69](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/World.ts#L69)

***

### Weather

```ts
get static Weather(): Weather
```

Get the current weather type.

```ts
set static Weather(value): void
```

Set the current weather.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | [`Weather`](../enumerations/Weather.md) | Type of weather to set. |

#### Returns

[`Weather`](../enumerations/Weather.md)

The current type of weather.

#### Defined in

[src/fivem/World.ts:158](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/World.ts#L158)

***

### WeatherTransition

```ts
get static WeatherTransition(): [string | Weather, string | Weather, number]
```

Doesn't work

```ts
set static WeatherTransition(transition): void
```

Doesn't work

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `transition` | [`string` \| [`Weather`](../enumerations/Weather.md), `string` \| [`Weather`](../enumerations/Weather.md), `number`] |

#### Returns

[`string` \| [`Weather`](../enumerations/Weather.md), `string` \| [`Weather`](../enumerations/Weather.md), `number`]

#### Defined in

[src/fivem/World.ts:265](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/World.ts#L265)

## Methods

### createAmbientPickup()

```ts
static createAmbientPickup(
   type, 
   position, 
   model, 
value): Promise<null | Prop>
```

Creates an ambient pickup.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `type` | [`PickupType`](../enumerations/PickupType.md) | The [[`PickupType`]] of the pickup. |
| `position` | [`Vector3`](Vector3.md) | The position where it should be spawned. |
| `model` | [`Model`](Model.md) | The model. |
| `value` | `number` | The value tied to the pickup. |

#### Returns

`Promise`\<`null` \| [`Prop`](Prop.md)\>

The pickup in form of a Prop.

#### Defined in

[src/fivem/World.ts:693](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/World.ts#L693)

***

### createBlip()

```ts
static createBlip(position, radius?): Blip
```

Creates a blip at a given position and optionally radius.

```typescript
const position = new Vector3(-802.311, 175.056, 72.8446);
const myStoreBlip = World.createBlip(position, 5.0);
myStoreBlip.Sprite = BlipSprite.Store;
```

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `position` | [`Vector3`](Vector3.md) | World coordinate of blip. |
| `radius`? | `number` | (Optional) Radius of where blip should be shown. |

#### Returns

[`Blip`](Blip.md)

Blip object.

#### Defined in

[src/fivem/World.ts:321](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/World.ts#L321)

***

### createCamera()

```ts
static createCamera(cameraType, active): Camera
```

Creates a cam that defaults to [CameraTypes.Scripted](../enumerations/CameraTypes.md)

```ts
const cam = World.createCamera(CameraTypes.Spline, true);
```

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `cameraType` | [`CameraTypes`](../enumerations/CameraTypes.md) | `CameraTypes.Scripted` | the camera type to create |
| `active` | `boolean` | `true` | unknown |

#### Returns

[`Camera`](Camera.md)

#### Defined in

[src/fivem/World.ts:340](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/World.ts#L340)

***

### createCameraWithParams()

```ts
static createCameraWithParams(
   cameraType, 
   position, 
   rotation, 
   fieldOfView): Camera
```

Creates a camera using 'DEFAULT_SCRIPTED_CAMERA'.

```typescript
const position = new Vector3(-802.311, 175.056, 72.8446);
const myCamera = World.createCameraWithParams(position, new Vector3(0,0,0), 180);
```

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `cameraType` | [`CameraTypes`](../enumerations/CameraTypes.md) | `CameraTypes.Scripted` | - |
| `position` | [`Vector3`](Vector3.md) | `undefined` | World coordinate where the camera should render. |
| `rotation` | [`Vector3`](Vector3.md) | `undefined` | Rotation of camera relative to world. |
| `fieldOfView` | `number` | `undefined` | Field of view angle of camera. |

#### Returns

[`Camera`](Camera.md)

Camera object.

#### Defined in

[src/fivem/World.ts:360](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/World.ts#L360)

***

### createPed()

```ts
static createPed(
   model, 
   position, 
   heading, 
   isNetwork, 
pinToScript): Promise<null | Ped>
```

Create a ped at a desired location.

```typescript
const position = new Vector3(-802.311, 175.056, 72.8446);
const model = new Model("a_f_m_beach_01");
const myPed = await World.createPed(model, position);
```

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `model` | [`Model`](Model.md) | `undefined` | Ped model to be spawned. |
| `position` | [`Vector3`](Vector3.md) | `undefined` | World position (coordinates) of Ped spawn. |
| `heading` | `number` | `0` | Heading of Ped when spawning. |
| `isNetwork` | `boolean` | `true` |  |
| `pinToScript` | `boolean` | `true` | - |

#### Returns

`Promise`\<`null` \| [`Ped`](Ped.md)\>

Ped object.

#### Defined in

[src/fivem/World.ts:397](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/World.ts#L397)

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

Create a pickup in a specific position in the world with a specified type and value.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `type` | [`PickupType`](../enumerations/PickupType.md) | The [[`PickupType`]] of pickup. |
| `position` | [`Vector3`](Vector3.md) | The position in the world it should be spawned. |
| `model` | [`Model`](Model.md) | The model of the spawned pickup. |
| `value` | `number` | Give a value for the pickup when picked up. |
| `rotation`? | [`Vector3`](Vector3.md) | If set, create a rotating pickup with this rotation. |

#### Returns

`Promise`\<`null` \| [`Pickup`](Pickup.md)\>

Pickup object.

#### Defined in

[src/fivem/World.ts:635](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/World.ts#L635)

***

### createProp()

```ts
static createProp(
   model, 
   position, 
   placeOnGround, 
   isNetwork, 
   pinToScript, 
forceToBeObject): Promise<null | Prop>
```

Spawns a [[`Prop`]] at the given position.

```typescript
const position = new Vector3(-802.311, 175.056, 72.8446);
const model = new Model("prop_barrel_02a");
const myBarrelProp = await World.createProp(model, position, false, true);
```

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `model` | [`Model`](Model.md) | `undefined` | The [[`Model`]] to spawn (must be a Prop) |
| `position` | [`Vector3`](Vector3.md) | `undefined` | Location of Prop |
| `placeOnGround` | `boolean` | `undefined` | If set to true, sets the Prop on the ground nearest to position. |
| `isNetwork` | `boolean` | `true` |  |
| `pinToScript` | `boolean` | `true` | - |
| `forceToBeObject` | `boolean` | `false` | - |

#### Returns

`Promise`\<`null` \| [`Prop`](Prop.md)\>

Prop object.

#### Defined in

[src/fivem/World.ts:588](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/World.ts#L588)

***

### createRandomPed()

```ts
static createRandomPed(position): Ped
```

Creates a [[`Ped`]] with a random model.

```typescript
const position = new Vector3(-802.311, 175.056, 72.8446);
const randomPed = World.createRandomPed(position);
```

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `position` | [`Vector3`](Vector3.md) | World coordinate of Ped spawn. |

#### Returns

[`Ped`](Ped.md)

Ped object.

#### Defined in

[src/fivem/World.ts:439](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/World.ts#L439)

***

### createRandomVehicle()

```ts
static createRandomVehicle(
   position, 
   heading, 
isNetwork): Promise<null | Vehicle>
```

Create a random vehicle at a desired location.

```typescript
const position = new Vector3(-802.311, 175.056, 72.8446);
const randomVehicle = await World.createRandomVehicle(position);
```

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `position` | [`Vector3`](Vector3.md) | `undefined` | World position (coordinates) of Vehicle spawn. |
| `heading` | `number` | `0.0` | Heading of Vehicle when spawning. |
| `isNetwork` | `boolean` | `true` |  |

#### Returns

`Promise`\<`null` \| [`Vehicle`](Vehicle.md)\>

Vehicle object.

#### Defined in

[src/fivem/World.ts:499](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/World.ts#L499)

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
   lengthChangeRate, 
   onlyPPU, 
   collisionOn, 
   lockFromFront, 
   timeMultiplier, 
   breakable, 
shouldLoadTextures): Promise<Rope>
```

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `position` | [`Vector3`](Vector3.md) | `undefined` |
| `rotation` | [`Vector3`](Vector3.md) | `undefined` |
| `maxLength` | `number` | `undefined` |
| `ropeType` | [`RopeType`](../enumerations/RopeType.md) | `undefined` |
| `initLength` | `number` | `undefined` |
| `minLength` | `number` | `undefined` |
| `lengthChangeRate` | `number` | `1.0` |
| `onlyPPU` | `boolean` | `false` |
| `collisionOn` | `boolean` | `false` |
| `lockFromFront` | `boolean` | `false` |
| `timeMultiplier` | `number` | `1.0` |
| `breakable` | `boolean` | `false` |
| `shouldLoadTextures` | `boolean` | `true` |

#### Returns

`Promise`\<[`Rope`](Rope.md)\>

#### Defined in

[src/fivem/World.ts:525](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/World.ts#L525)

***

### createVehicle()

```ts
static createVehicle(
   model, 
   position, 
   heading, 
   isNetwork, 
pinToScript): Promise<null | Vehicle>
```

Create a vehicle at a desired location.

```typescript
const position = new Vector3(-802.311, 175.056, 72.8446);
const model = new Model("adder");
const myVehicle = await World.createVehicle(model, position);
```

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `model` | [`Model`](Model.md) | `undefined` | Vehicle model to be spawned. |
| `position` | [`Vector3`](Vector3.md) | `undefined` | World position (coordinates) of Vehicle spawn. |
| `heading` | `number` | `0.0` | Heading of Vehicle when spawning. |
| `isNetwork` | `boolean` | `true` |  |
| `pinToScript` | `boolean` | `true` | - |

#### Returns

`Promise`\<`null` \| [`Vehicle`](Vehicle.md)\>

Vehicle object.

#### Defined in

[src/fivem/World.ts:458](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/World.ts#L458)

***

### destroyAllCameras()

```ts
static destroyAllCameras(): void
```

Destroys all existing cameras and sets your rendering camera back to GameplayCam.

#### Returns

`void`

#### Defined in

[src/fivem/World.ts:304](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/World.ts#L304)

***

### drawLightWithRange()

```ts
static drawLightWithRange(
   pos, 
   color, 
   range, 
   intensity): void
```

Creates a light in the world with a certain length (range).

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `pos` | [`Vector3`](Vector3.md) | World coordinate where to draw the light. |
| `color` | [`Color`](Color.md) | RGB colors of the light. |
| `range` | `number` | How far to draw the light. |
| `intensity` | `number` | Intensity of the light ("alpha"). |

#### Returns

`void`

#### Defined in

[src/fivem/World.ts:799](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/World.ts#L799)

***

### drawLine()

```ts
static drawLine(
   start, 
   end, 
   color): void
```

Draws a line in the world. It's not possible to change thickness.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `start` | [`Vector3`](Vector3.md) | World coordinate of start position of line. |
| `end` | [`Vector3`](Vector3.md) | World coordinate of end position of line. |
| `color` | [`Color`](Color.md) | RGB color of line. |

#### Returns

`void`

#### Defined in

[src/fivem/World.ts:905](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/World.ts#L905)

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
   bobUpAndDown, 
   faceCamera, 
   rotateY, 
   textureDict, 
   textureName, 
   drawOnEntity): void
```

Draw a marker at a desired location. Careful! Must be drawn every tick.

```typescript
const position = new Vector3(-802.311, 175.056, 72.8446);
const zeroVector = new Vector3(0,0,0);

setTick(() => {
 World.drawMarker(MarkerType.ThickChevronUp, position, zeroVector, zeroVector, 1.0, new Color(255,0,0));
})
```

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `type` | [`MarkerType`](../enumerations/MarkerType.md) | `undefined` | Type of marker. |
| `position` | [`Vector3`](Vector3.md) | `undefined` | Location of marker. |
| `direction` | [`Vector3`](Vector3.md) | `undefined` | Direction facing. |
| `rotation` | [`Vector3`](Vector3.md) | `undefined` | World rotation. |
| `scale` | [`Vector3`](Vector3.md) | `undefined` | Size of marker. |
| `color` | [`Color`](Color.md) | `undefined` | Color of marker. |
| `bobUpAndDown` | `boolean` | `false` | Animated movement along marker's own X axis. |
| `faceCamera` | `boolean` | `false` | Rendering marker facing rendering camera. |
| `rotateY` | `boolean` | `false` | Rotate along Y axis. |
| `textureDict` | `null` \| `string` | `null` | Custom texture dictionary for custom marker. |
| `textureName` | `null` \| `string` | `null` | Custom texture name for custom marker. |
| `drawOnEntity` | `boolean` | `false` | Render the marker on an entity. |

#### Returns

`void`

#### Defined in

[src/fivem/World.ts:749](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/World.ts#L749)

***

### drawPoly()

```ts
static drawPoly(
   vertexA, 
   vertexB, 
   vertexC, 
   color): void
```

Draw polygon in the world.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `vertexA` | [`Vector3`](Vector3.md) | World coordinate of first point. |
| `vertexB` | [`Vector3`](Vector3.md) | World coordinate of second point. |
| `vertexC` | [`Vector3`](Vector3.md) | World coordinate of third point. |
| `color` | [`Color`](Color.md) | RGB color of polygon. |

#### Returns

`void`

#### Defined in

[src/fivem/World.ts:928](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/World.ts#L928)

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

Creates a light in the world. More configurable than World.drawLightWithRange.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `pos` | [`Vector3`](Vector3.md) | World coordinate of spotlight. |
| `dir` | [`Vector3`](Vector3.md) | Direction to face spotlight. |
| `color` | [`Color`](Color.md) | RGB colors of spotlight. |
| `distance` | `number` | The maximum distance the spotlight can reach. |
| `brightness` | `number` | Brightness of the spotlight. |
| `roundness` | `number` | "Smoothness" of the edge of the spotlight. |
| `radius` | `number` | Radius size of spotlight. |
| `fadeOut` | `number` | Falloff size of the spotlight's edge. |

#### Returns

`void`

#### Defined in

[src/fivem/World.ts:829](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/World.ts#L829)

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

Creates a light in the world. Same as World.drawSpotlight, but also draws shadows.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `pos` | [`Vector3`](Vector3.md) | World coordinate of spotlight. |
| `dir` | [`Vector3`](Vector3.md) | Direction to face spotlight. |
| `color` | [`Color`](Color.md) | RGB colors of spotlight. |
| `distance` | `number` | The maximum distance the spotlight can reach. |
| `brightness` | `number` | Brightness of the spotlight. |
| `roundness` | `number` | "Smoothness" of the edge of the spotlight. |
| `radius` | `number` | Radius size of spotlight. |
| `fadeOut` | `number` | Falloff size of the spotlight's edge. |

#### Returns

`void`

#### Defined in

[src/fivem/World.ts:869](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/World.ts#L869)

***

### expensiveRaycast()

```ts
static expensiveRaycast(
   start, 
   end, 
   losFlags, 
   shapeTestOptions, 
   ignoreEntity?): SynchronousRaycastResult
```

Cast a ray from {@param start} to {@param end}.

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `start` | [`Vector3`](Vector3.md) | `undefined` | Starting position of raycast. |
| `end` | [`Vector3`](Vector3.md) | `undefined` | Direction to cast a ray to. |
| `losFlags` | [`IntersectFlags`](../enumerations/IntersectFlags.md) | `IntersectFlags.All` | The entity type(s) that the raycast should intersect with defaults to {@enum IntersectFlags.All} |
| `shapeTestOptions` | `number` | `SHAPE_TEST_DEFAULT` | - |
| `ignoreEntity`? | [`BaseEntity`](BaseEntity.md) | `undefined` | An entity to ignore (usually player's Ped). |

#### Returns

[`SynchronousRaycastResult`](SynchronousRaycastResult.md)

{@see SynchronousRaycastResult} object.

#### Defined in

[src/fivem/World.ts:963](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/World.ts#L963)

***

### getAllPeds()

```ts
static getAllPeds(): Ped[]
```

Get all [[`Ped`]] entities in your own scope.

#### Returns

[`Ped`](Ped.md)[]

Array of Peds.

#### Defined in

[src/fivem/World.ts:1172](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/World.ts#L1172)

***

### getAllPickups()

```ts
static getAllPickups(): Pickup[]
```

Get all [[`Pickup`]] entities using the GetGamePool.

#### Returns

[`Pickup`](Pickup.md)[]

Array of Pickups.

#### Defined in

[src/fivem/World.ts:1223](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/World.ts#L1223)

***

### getAllProps()

```ts
static getAllProps(): Prop[]
```

Get all [[`Prop`]] entities in your own scope.

#### Returns

[`Prop`](Prop.md)[]

Array of Props.

#### Defined in

[src/fivem/World.ts:1144](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/World.ts#L1144)

***

### getAllRopes()

```ts
static getAllRopes(): Rope[]
```

Get all [[`Rope`]] entities in your own scope.

#### Returns

[`Rope`](Rope.md)[]

Array of Ropes.

#### Defined in

[src/fivem/World.ts:1158](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/World.ts#L1158)

***

### getAllVehicles()

```ts
static getAllVehicles(): Vehicle[]
```

Get all [[`Vehicle`]] entities in your own scope.

#### Returns

[`Vehicle`](Vehicle.md)[]

Array of Vehicles.

#### Defined in

[src/fivem/World.ts:1186](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/World.ts#L1186)

***

### getClosestObject()

```ts
static getClosestObject(
   model, 
   coords, 
   radius, 
   isMission): null | Prop
```

Gets the closest object of this model

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `model` | [`Model`](Model.md) | `undefined` |
| `coords` | [`Vector3`](Vector3.md) | `undefined` |
| `radius` | `number` | `25.0` |
| `isMission` | `boolean` | `false` |

#### Returns

`null` \| [`Prop`](Prop.md)

#### Defined in

[src/fivem/World.ts:1117](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/World.ts#L1117)

***

### getClosestVehicle()

```ts
static getClosestVehicle(coords): null | Vehicle
```

Gets the cloest [[`Vehicle`]] to the current coords, or null if none are found

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `coords` | [`Vector3`](Vector3.md) |

#### Returns

`null` \| [`Vehicle`](Vehicle.md)

the closest vehicle or null

#### Defined in

[src/fivem/World.ts:1199](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/World.ts#L1199)

***

### raycast()

```ts
static raycast(
   start, 
   end, 
   losFlags, 
   shapeTestOptions, 
   ignoreEntity?): AsynchronousRaycastResult
```

Cast a ray from {@param start} to {@param end} and returns the first hit
entity or coordinate .

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `start` | [`Vector3`](Vector3.md) | `undefined` | starting position of raycast. |
| `end` | [`Vector3`](Vector3.md) | `undefined` | the ending position to raycast to. |
| `losFlags` | [`IntersectFlags`](../enumerations/IntersectFlags.md) | `IntersectFlags.All` | The entity type(s) that the raycast should intersect with defaults to {@enum IntersectFlags.All} |
| `shapeTestOptions` | `number` | `SHAPE_TEST_DEFAULT` | shape test collision modifiers defaults to ignoring glass, see through, and no collided entities |
| `ignoreEntity`? | [`BaseEntity`](BaseEntity.md) | `undefined` | An entity to ignore (usually player's Ped). |

#### Returns

[`AsynchronousRaycastResult`](AsynchronousRaycastResult.md)

{@see AsynchronousRaycastResult} object that must be awaited to get its results.

#### Defined in

[src/fivem/World.ts:996](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/World.ts#L996)

***

### raycastDirection()

#### raycastDirection(useExpensiveRaycast, source, direction, maxDistance, losFlags, shapeTestOptions, ignoreEntity)

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

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `useExpensiveRaycast` | `true` |
| `source` | [`Vector3`](Vector3.md) |
| `direction` | [`Vector3`](Vector3.md) |
| `maxDistance` | `number` |
| `losFlags`? | [`IntersectFlags`](../enumerations/IntersectFlags.md) |
| `shapeTestOptions`? | `number` |
| `ignoreEntity`? | [`BaseEntity`](BaseEntity.md) |

##### Returns

[`SynchronousRaycastResult`](SynchronousRaycastResult.md)

##### Defined in

[src/fivem/World.ts:1018](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/World.ts#L1018)

#### raycastDirection(useExpensiveRaycast, source, direction, maxDistance, losFlags, shapeTestOptions, ignoreEntity)

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

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `useExpensiveRaycast` | `false` |
| `source` | [`Vector3`](Vector3.md) |
| `direction` | [`Vector3`](Vector3.md) |
| `maxDistance` | `number` |
| `losFlags`? | [`IntersectFlags`](../enumerations/IntersectFlags.md) |
| `shapeTestOptions`? | `number` |
| `ignoreEntity`? | [`BaseEntity`](BaseEntity.md) |

##### Returns

[`AsynchronousRaycastResult`](AsynchronousRaycastResult.md)

##### Defined in

[src/fivem/World.ts:1028](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/World.ts#L1028)

***

### raycastPlayerCamera()

```ts
static raycastPlayerCamera(maxDistance, flags): SynchronousRaycastResult
```

Cast a ray from the local players camera until it hits an entity

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `maxDistance` | `number` | Max distance to cast the ray. |
| `flags` | [`IntersectFlags`](../enumerations/IntersectFlags.md) | Possible entity types to detect. |

#### Returns

[`SynchronousRaycastResult`](SynchronousRaycastResult.md)

SynchronousRaycast object.

#### Defined in

[src/fivem/World.ts:1090](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/World.ts#L1090)

***

### transitionToWeather()

```ts
static transitionToWeather(weather, duration): void
```

Transition to different weather type within a certain time.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `weather` | [`Weather`](../enumerations/Weather.md) | Weather type to change to. |
| `duration` | `number` | Time for full weather change (in milliseconds); |

#### Returns

`void`

#### Defined in

[src/fivem/World.ts:295](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/World.ts#L295)
