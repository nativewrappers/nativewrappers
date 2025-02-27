[@nativewrappers/fivem](../../README.md) / [fivem](../README.md) / Vehicle

# Class: Vehicle

Defined in: [src/fivem/models/Vehicle.ts:22](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L22)

## Extends

- [`BaseEntity`](BaseEntity.md)

## Constructors

### new Vehicle()

```ts
new Vehicle(handle): Vehicle
```

Defined in: [src/fivem/models/Vehicle.ts:57](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L57)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `handle` | `number` |

#### Returns

[`Vehicle`](Vehicle.md)

#### Overrides

[`BaseEntity`](BaseEntity.md).[`constructor`](BaseEntity.md#constructors)

## Properties

| Property | Modifier | Type | Default value | Overrides | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ | ------ | ------ |
| <a id="bones"></a> `bones` | `protected` | `undefined` \| [`EntityBoneCollection`](EntityBoneCollection.md) | `undefined` | - | [`BaseEntity`](BaseEntity.md).[`bones`](BaseEntity.md#bones) | [src/fivem/models/BaseEntity.ts:23](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/BaseEntity.ts#L23) |
| <a id="handle-1"></a> `handle` | `protected` | `number` | `undefined` | - | [`BaseEntity`](BaseEntity.md).[`handle`](BaseEntity.md#handle-1) | [src/fivem/models/BaseEntity.ts:22](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/BaseEntity.ts#L22) |
| <a id="netid"></a> `netId` | `protected` | `null` \| `number` | `null` | - | [`BaseEntity`](BaseEntity.md).[`netId`](BaseEntity.md#netid) | [src/fivem/models/BaseEntity.ts:25](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/BaseEntity.ts#L25) |
| <a id="statebagcookies"></a> `stateBagCookies` | `protected` | `number`[] | `[]` | - | [`BaseEntity`](BaseEntity.md).[`stateBagCookies`](BaseEntity.md#statebagcookies) | [src/fivem/models/BaseEntity.ts:24](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/BaseEntity.ts#L24) |
| <a id="type"></a> `type` | `protected` | `ClassTypes` | `ClassTypes.Vehicle` | [`BaseEntity`](BaseEntity.md).[`type`](BaseEntity.md#type) | - | [src/fivem/models/Vehicle.ts:55](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L55) |

## Accessors

### Acceleration

#### Get Signature

```ts
get Acceleration(): number
```

Defined in: [src/fivem/models/Vehicle.ts:185](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L185)

##### Returns

`number`

***

### AlarmTimeLeft

#### Get Signature

```ts
get AlarmTimeLeft(): number
```

Defined in: [src/fivem/models/Vehicle.ts:237](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L237)

##### Returns

`number`

#### Set Signature

```ts
set AlarmTimeLeft(value): void
```

Defined in: [src/fivem/models/Vehicle.ts:241](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L241)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

##### Returns

`void`

***

### AreBrakeLightsOn

#### Set Signature

```ts
set AreBrakeLightsOn(value): void
```

Defined in: [src/fivem/models/Vehicle.ts:365](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L365)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

##### Returns

`void`

***

### AreHighBeamsOn

#### Get Signature

```ts
get AreHighBeamsOn(): boolean
```

Defined in: [src/fivem/models/Vehicle.ts:308](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L308)

##### Returns

`boolean`

#### Set Signature

```ts
set AreHighBeamsOn(value): void
```

Defined in: [src/fivem/models/Vehicle.ts:312](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L312)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

##### Returns

`void`

***

### AreLightsOn

#### Get Signature

```ts
get AreLightsOn(): boolean
```

Defined in: [src/fivem/models/Vehicle.ts:300](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L300)

##### Returns

`boolean`

#### Set Signature

```ts
set AreLightsOn(value): void
```

Defined in: [src/fivem/models/Vehicle.ts:304](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L304)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

##### Returns

`void`

***

### AttachedBlip

#### Get Signature

```ts
get AttachedBlip(): null | Blip
```

Defined in: [src/fivem/models/BaseEntity.ts:438](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/BaseEntity.ts#L438)

##### Returns

`null` \| [`Blip`](Blip.md)

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`AttachedBlip`](BaseEntity.md#attachedblip)

***

### BodyHealth

#### Get Signature

```ts
get BodyHealth(): number
```

Defined in: [src/fivem/models/Vehicle.ts:85](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L85)

##### Returns

`number`

#### Set Signature

```ts
set BodyHealth(value): void
```

Defined in: [src/fivem/models/Vehicle.ts:89](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L89)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

##### Returns

`void`

***

### Bones

#### Get Signature

```ts
get Bones(): EntityBoneCollection
```

Defined in: [src/fivem/models/BaseEntity.ts:431](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/BaseEntity.ts#L431)

##### Returns

[`EntityBoneCollection`](EntityBoneCollection.md)

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`Bones`](BaseEntity.md#bones-1)

***

### CanBeVisiblyDamaged

#### Set Signature

```ts
set CanBeVisiblyDamaged(value): void
```

Defined in: [src/fivem/models/Vehicle.ts:373](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L373)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

##### Returns

`void`

***

### CanBreak

#### Set Signature

```ts
set CanBreak(toggle): void
```

Defined in: [src/fivem/models/Vehicle.ts:381](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L381)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `toggle` | `boolean` |

##### Returns

`void`

***

### CanDeformWheels

#### Set Signature

```ts
set CanDeformWheels(value): void
```

Defined in: [src/fivem/models/Vehicle.ts:671](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L671)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

##### Returns

`void`

***

### CanEngineDegrade

#### Set Signature

```ts
set CanEngineDegrade(value): void
```

Defined in: [src/fivem/models/Vehicle.ts:425](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L425)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

##### Returns

`void`

***

### CanTiresBurst

#### Get Signature

```ts
get CanTiresBurst(): boolean
```

Defined in: [src/fivem/models/Vehicle.ts:659](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L659)

##### Returns

`boolean`

#### Set Signature

```ts
set CanTiresBurst(value): void
```

Defined in: [src/fivem/models/Vehicle.ts:663](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L663)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

##### Returns

`void`

***

### CanWheelsBreak

#### Set Signature

```ts
set CanWheelsBreak(value): void
```

Defined in: [src/fivem/models/Vehicle.ts:667](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L667)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

##### Returns

`void`

***

### ClassDisplayName

#### Get Signature

```ts
get ClassDisplayName(): string
```

Defined in: [src/fivem/models/Vehicle.ts:69](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L69)

##### Returns

`string`

***

### ClassType

#### Get Signature

```ts
get ClassType(): VehicleClass
```

Defined in: [src/fivem/models/Vehicle.ts:81](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L81)

##### Returns

[`VehicleClass`](../enumerations/VehicleClass.md)

***

### CurrentGear

#### Get Signature

```ts
get CurrentGear(): number
```

Defined in: [src/fivem/models/Vehicle.ts:205](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L205)

##### Returns

`number`

***

### CurrentRPM

#### Get Signature

```ts
get CurrentRPM(): number
```

Defined in: [src/fivem/models/Vehicle.ts:189](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L189)

##### Returns

`number`

#### Set Signature

```ts
set CurrentRPM(value): void
```

Defined in: [src/fivem/models/Vehicle.ts:193](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L193)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

##### Returns

`void`

***

### DirtLevel

#### Get Signature

```ts
get DirtLevel(): number
```

Defined in: [src/fivem/models/Vehicle.ts:635](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L635)

##### Returns

`number`

#### Set Signature

```ts
set DirtLevel(value): void
```

Defined in: [src/fivem/models/Vehicle.ts:639](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L639)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

##### Returns

`void`

***

### DisplayName

#### Get Signature

```ts
get DisplayName(): string
```

Defined in: [src/fivem/models/Vehicle.ts:65](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L65)

##### Returns

`string`

***

### Doors

#### Get Signature

```ts
get Doors(): VehicleDoorCollection
```

Defined in: [src/fivem/models/Vehicle.ts:579](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L579)

##### Returns

[`VehicleDoorCollection`](VehicleDoorCollection.md)

***

### Driver

#### Get Signature

```ts
get Driver(): Ped
```

Defined in: [src/fivem/models/Vehicle.ts:516](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L516)

##### Returns

[`Ped`](Ped.md)

***

### DropsMoneyOnExplosion

#### Set Signature

```ts
set DropsMoneyOnExplosion(value): void
```

Defined in: [src/fivem/models/Vehicle.ts:280](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L280)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

##### Returns

`void`

***

### EngineHealth

#### Get Signature

```ts
get EngineHealth(): number
```

Defined in: [src/fivem/models/Vehicle.ts:93](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L93)

##### Returns

`number`

#### Set Signature

```ts
set EngineHealth(value): void
```

Defined in: [src/fivem/models/Vehicle.ts:97](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L97)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

##### Returns

`void`

***

### EnginePowerMultiplier

#### Set Signature

```ts
set EnginePowerMultiplier(value): void
```

Defined in: [src/fivem/models/Vehicle.ts:429](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L429)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

##### Returns

`void`

***

### EngineTorqueMultiplier

#### Set Signature

```ts
set EngineTorqueMultiplier(value): void
```

Defined in: [src/fivem/models/Vehicle.ts:433](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L433)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

##### Returns

`void`

***

### EstimatedMaxSpeed

#### Get Signature

```ts
get EstimatedMaxSpeed(): number
```

Defined in: [src/fivem/models/Vehicle.ts:181](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L181)

##### Returns

`number`

***

### ForwardVector

#### Get Signature

```ts
get ForwardVector(): Vector3
```

Defined in: [src/fivem/models/BaseEntity.ts:128](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/BaseEntity.ts#L128)

##### Returns

[`Vector3`](Vector3.md)

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`ForwardVector`](BaseEntity.md#forwardvector)

***

### FuelLevel

#### Get Signature

```ts
get FuelLevel(): number
```

Defined in: [src/fivem/models/Vehicle.ts:109](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L109)

##### Returns

`number`

#### Set Signature

```ts
set FuelLevel(value): void
```

Defined in: [src/fivem/models/Vehicle.ts:113](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L113)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

##### Returns

`void`

***

### Ghosted

#### Get Signature

```ts
get Ghosted(): boolean
```

Defined in: [src/fivem/models/Vehicle.ts:522](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L522)

##### Returns

`boolean`

#### Set Signature

```ts
set Ghosted(isGhosted): void
```

Defined in: [src/fivem/models/Vehicle.ts:532](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L532)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `isGhosted` | `boolean` |

##### Returns

`void`

***

### GhostedForGhostPlayers

#### Set Signature

```ts
set GhostedForGhostPlayers(isGhostedForGhostPlayers): void
```

Defined in: [src/fivem/models/Vehicle.ts:527](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L527)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `isGhostedForGhostPlayers` | `boolean` |

##### Returns

`void`

***

### Gravity

#### Get Signature

```ts
get Gravity(): number
```

Defined in: [src/fivem/models/Vehicle.ts:125](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L125)

##### Returns

`number`

#### Set Signature

```ts
set Gravity(value): void
```

Defined in: [src/fivem/models/Vehicle.ts:129](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L129)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

##### Returns

`void`

***

### Handle

#### Get Signature

```ts
get Handle(): number
```

Defined in: [src/fivem/models/BaseEntity.ts:35](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/BaseEntity.ts#L35)

##### Returns

`number`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`Handle`](BaseEntity.md#handle-2)

***

### HasBombBay

#### Get Signature

```ts
get HasBombBay(): boolean
```

Defined in: [src/fivem/models/Vehicle.ts:675](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L675)

##### Returns

`boolean`

***

### HasCollided

#### Get Signature

```ts
get HasCollided(): boolean
```

Defined in: [src/fivem/models/BaseEntity.ts:411](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/BaseEntity.ts#L411)

##### Returns

`boolean`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`HasCollided`](BaseEntity.md#hascollided)

***

### HasGravity

#### Set Signature

```ts
set HasGravity(value): void
```

Defined in: [src/fivem/models/BaseEntity.ts:314](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/BaseEntity.ts#L314)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

##### Returns

`void`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`HasGravity`](BaseEntity.md#hasgravity)

***

### HasMutedSirens

#### Set Signature

```ts
set HasMutedSirens(value): void
```

Defined in: [src/fivem/models/Vehicle.ts:257](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L257)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

##### Returns

`void`

***

### HasRoof

#### Get Signature

```ts
get HasRoof(): boolean
```

Defined in: [src/fivem/models/Vehicle.ts:401](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L401)

##### Returns

`boolean`

***

### Heading

#### Get Signature

```ts
get Heading(): number
```

Defined in: [src/fivem/models/BaseEntity.ts:282](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/BaseEntity.ts#L282)

##### Returns

`number`

#### Set Signature

```ts
set Heading(heading): void
```

Defined in: [src/fivem/models/BaseEntity.ts:286](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/BaseEntity.ts#L286)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `heading` | `number` |

##### Returns

`void`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`Heading`](BaseEntity.md#heading)

***

### Health

#### Get Signature

```ts
get Health(): number
```

Defined in: [src/fivem/models/BaseEntity.ts:157](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/BaseEntity.ts#L157)

##### Returns

`number`

#### Set Signature

```ts
set Health(amount): void
```

Defined in: [src/fivem/models/BaseEntity.ts:161](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/BaseEntity.ts#L161)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `amount` | `number` |

##### Returns

`void`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`Health`](BaseEntity.md#health)

***

### HeightAboveGround

#### Get Signature

```ts
get HeightAboveGround(): number
```

Defined in: [src/fivem/models/BaseEntity.ts:318](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/BaseEntity.ts#L318)

##### Returns

`number`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`HeightAboveGround`](BaseEntity.md#heightaboveground)

***

### HighGear

#### Get Signature

```ts
get HighGear(): number
```

Defined in: [src/fivem/models/Vehicle.ts:197](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L197)

##### Returns

`number`

#### Set Signature

```ts
set HighGear(value): void
```

Defined in: [src/fivem/models/Vehicle.ts:201](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L201)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

##### Returns

`void`

***

### IsAlarmSet

#### Get Signature

```ts
get IsAlarmSet(): boolean
```

Defined in: [src/fivem/models/Vehicle.ts:225](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L225)

##### Returns

`boolean`

#### Set Signature

```ts
set IsAlarmSet(value): void
```

Defined in: [src/fivem/models/Vehicle.ts:229](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L229)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

##### Returns

`void`

***

### IsAlarmSounding

#### Get Signature

```ts
get IsAlarmSounding(): boolean
```

Defined in: [src/fivem/models/Vehicle.ts:233](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L233)

##### Returns

`boolean`

***

### IsAlive

#### Get Signature

```ts
get IsAlive(): boolean
```

Defined in: [src/fivem/models/BaseEntity.ts:185](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/BaseEntity.ts#L185)

##### Returns

`boolean`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`IsAlive`](BaseEntity.md#isalive)

***

### IsAxlesStrong

#### Set Signature

```ts
set IsAxlesStrong(value): void
```

Defined in: [src/fivem/models/Vehicle.ts:421](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L421)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

##### Returns

`void`

***

### IsBurnoutForced

#### Set Signature

```ts
set IsBurnoutForced(value): void
```

Defined in: [src/fivem/models/Vehicle.ts:508](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L508)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

##### Returns

`void`

***

### IsCollisionEnabled

#### Get Signature

```ts
get IsCollisionEnabled(): boolean
```

Defined in: [src/fivem/models/BaseEntity.ts:419](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/BaseEntity.ts#L419)

##### Returns

`boolean`

#### Set Signature

```ts
set IsCollisionEnabled(value): void
```

Defined in: [src/fivem/models/BaseEntity.ts:423](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/BaseEntity.ts#L423)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

##### Returns

`void`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`IsCollisionEnabled`](BaseEntity.md#iscollisionenabled)

***

### IsConvertible

#### Get Signature

```ts
get IsConvertible(): boolean
```

Defined in: [src/fivem/models/Vehicle.ts:504](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L504)

##### Returns

`boolean`

***

### IsDamaged

#### Get Signature

```ts
get IsDamaged(): boolean
```

Defined in: [src/fivem/models/Vehicle.ts:385](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L385)

##### Returns

`boolean`

***

### IsDead

#### Get Signature

```ts
get IsDead(): boolean
```

Defined in: [src/fivem/models/BaseEntity.ts:181](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/BaseEntity.ts#L181)

##### Returns

`boolean`

#### Set Signature

```ts
set IsDead(value): void
```

Defined in: [src/fivem/models/BaseEntity.ts:173](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/BaseEntity.ts#L173)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

##### Returns

`void`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`IsDead`](BaseEntity.md#isdead)

***

### IsDriveable

#### Get Signature

```ts
get IsDriveable(): boolean
```

Defined in: [src/fivem/models/Vehicle.ts:389](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L389)

##### Returns

`boolean`

#### Set Signature

```ts
set IsDriveable(value): void
```

Defined in: [src/fivem/models/Vehicle.ts:393](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L393)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

##### Returns

`void`

***

### IsEngineOnFire

#### Get Signature

```ts
get IsEngineOnFire(): boolean
```

Defined in: [src/fivem/models/Vehicle.ts:397](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L397)

##### Returns

`boolean`

***

### IsEngineRunning

#### Get Signature

```ts
get IsEngineRunning(): boolean
```

Defined in: [src/fivem/models/Vehicle.ts:133](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L133)

##### Returns

`boolean`

#### Set Signature

```ts
set IsEngineRunning(value): void
```

Defined in: [src/fivem/models/Vehicle.ts:137](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L137)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

##### Returns

`void`

***

### IsEngineStarting

#### Get Signature

```ts
get IsEngineStarting(): boolean
```

Defined in: [src/fivem/models/Vehicle.ts:141](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L141)

##### Returns

`boolean`

#### Set Signature

```ts
set IsEngineStarting(value): void
```

Defined in: [src/fivem/models/Vehicle.ts:145](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L145)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

##### Returns

`void`

***

### IsFrontBumperBrokenOff

#### Get Signature

```ts
get IsFrontBumperBrokenOff(): boolean
```

Defined in: [src/fivem/models/Vehicle.ts:417](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L417)

##### Returns

`boolean`

***

### IsHandbrakeForcedOn

#### Get Signature

```ts
get IsHandbrakeForcedOn(): boolean
```

Defined in: [src/fivem/models/Vehicle.ts:357](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L357)

##### Returns

`boolean`

#### Set Signature

```ts
set IsHandbrakeForcedOn(value): void
```

Defined in: [src/fivem/models/Vehicle.ts:361](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L361)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

##### Returns

`void`

***

### IsInAir

#### Get Signature

```ts
get IsInAir(): boolean
```

Defined in: [src/fivem/models/BaseEntity.ts:358](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/BaseEntity.ts#L358)

##### Returns

`boolean`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`IsInAir`](BaseEntity.md#isinair)

***

### IsInBurnout

#### Get Signature

```ts
get IsInBurnout(): boolean
```

Defined in: [src/fivem/models/Vehicle.ts:512](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L512)

##### Returns

`boolean`

***

### IsInGhostCollision

#### Get Signature

```ts
get IsInGhostCollision(): boolean
```

Defined in: [src/fivem/models/Vehicle.ts:540](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L540)

##### Returns

`boolean`

***

### IsInteriorLightOn

#### Get Signature

```ts
get IsInteriorLightOn(): boolean
```

Defined in: [src/fivem/models/Vehicle.ts:316](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L316)

##### Returns

`boolean`

#### Set Signature

```ts
set IsInteriorLightOn(value): void
```

Defined in: [src/fivem/models/Vehicle.ts:320](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L320)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

##### Returns

`void`

***

### IsInvincible

#### Set Signature

```ts
set IsInvincible(value): void
```

Defined in: [src/fivem/models/BaseEntity.ts:388](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/BaseEntity.ts#L388)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

##### Returns

`void`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`IsInvincible`](BaseEntity.md#isinvincible)

***

### IsInWater

#### Get Signature

```ts
get IsInWater(): boolean
```

Defined in: [src/fivem/models/BaseEntity.ts:362](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/BaseEntity.ts#L362)

##### Returns

`boolean`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`IsInWater`](BaseEntity.md#isinwater)

***

### IsLeftHeadLightBroken

#### Get Signature

```ts
get IsLeftHeadLightBroken(): boolean
```

Defined in: [src/fivem/models/Vehicle.ts:405](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L405)

##### Returns

`boolean`

***

### IsLeftIndicatorLightOn

#### Get Signature

```ts
get IsLeftIndicatorLightOn(): boolean
```

Defined in: [src/fivem/models/Vehicle.ts:340](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L340)

##### Returns

`boolean`

#### Set Signature

```ts
set IsLeftIndicatorLightOn(value): void
```

Defined in: [src/fivem/models/Vehicle.ts:345](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L345)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

##### Returns

`void`

***

### IsMissionEntity

#### Get Signature

```ts
get IsMissionEntity(): boolean
```

Defined in: [src/fivem/models/BaseEntity.ts:210](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/BaseEntity.ts#L210)

Returns if the entity is set as a mission entity and will not be cleaned up by the engine

##### Returns

`boolean`

#### Set Signature

```ts
set IsMissionEntity(value): void
```

Defined in: [src/fivem/models/BaseEntity.ts:217](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/BaseEntity.ts#L217)

Sets if the entity is a mission entity and will not be cleaned up by the engine

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

##### Returns

`void`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`IsMissionEntity`](BaseEntity.md#ismissionentity)

***

### IsNetworkConcealed

#### Get Signature

```ts
get IsNetworkConcealed(): boolean
```

Defined in: [src/fivem/models/BaseEntity.ts:61](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/BaseEntity.ts#L61)

##### Returns

`boolean`

#### Set Signature

```ts
set IsNetworkConcealed(concealed): void
```

Defined in: [src/fivem/models/BaseEntity.ts:65](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/BaseEntity.ts#L65)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `concealed` | `boolean` |

##### Returns

`void`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`IsNetworkConcealed`](BaseEntity.md#isnetworkconcealed)

***

### IsNetworked

#### Get Signature

```ts
get IsNetworked(): boolean
```

Defined in: [src/fivem/models/BaseEntity.ts:42](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/BaseEntity.ts#L42)

##### Returns

`boolean`

if the entity is a networked entity or local entity

#### Set Signature

```ts
set IsNetworked(networked): void
```

Defined in: [src/fivem/models/BaseEntity.ts:46](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/BaseEntity.ts#L46)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `networked` | `boolean` |

##### Returns

`void`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`IsNetworked`](BaseEntity.md#isnetworked)

***

### IsOccluded

#### Get Signature

```ts
get IsOccluded(): boolean
```

Defined in: [src/fivem/models/BaseEntity.ts:342](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/BaseEntity.ts#L342)

##### Returns

`boolean`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`IsOccluded`](BaseEntity.md#isoccluded)

***

### IsOnAllWheels

#### Get Signature

```ts
get IsOnAllWheels(): boolean
```

Defined in: [src/fivem/models/Vehicle.ts:484](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L484)

##### Returns

`boolean`

***

### IsOnFire

#### Get Signature

```ts
get IsOnFire(): boolean
```

Defined in: [src/fivem/models/BaseEntity.ts:384](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/BaseEntity.ts#L384)

##### Returns

`boolean`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`IsOnFire`](BaseEntity.md#isonfire)

***

### IsOnlyDamagedByPlayer

#### Set Signature

```ts
set IsOnlyDamagedByPlayer(value): void
```

Defined in: [src/fivem/models/BaseEntity.ts:392](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/BaseEntity.ts#L392)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

##### Returns

`void`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`IsOnlyDamagedByPlayer`](BaseEntity.md#isonlydamagedbyplayer)

***

### IsOnScreen

#### Get Signature

```ts
get IsOnScreen(): boolean
```

Defined in: [src/fivem/models/BaseEntity.ts:346](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/BaseEntity.ts#L346)

##### Returns

`boolean`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`IsOnScreen`](BaseEntity.md#isonscreen)

***

### IsPersistent

#### Get Signature

```ts
get IsPersistent(): boolean
```

Defined in: [src/fivem/models/BaseEntity.ts:369](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/BaseEntity.ts#L369)

##### Deprecated

use [[IsMissionEntity]] instead as its more obvious as what it does

##### Returns

`boolean`

#### Set Signature

```ts
set IsPersistent(value): void
```

Defined in: [src/fivem/models/BaseEntity.ts:376](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/BaseEntity.ts#L376)

##### Deprecated

use [[IsMissionEntity]] instead as its more obvious as what it does

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

##### Returns

`void`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`IsPersistent`](BaseEntity.md#ispersistent)

***

### IsPositionFrozen

#### Get Signature

```ts
get IsPositionFrozen(): boolean
```

Defined in: [src/fivem/models/BaseEntity.ts:290](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/BaseEntity.ts#L290)

##### Returns

`boolean`

#### Set Signature

```ts
set IsPositionFrozen(value): void
```

Defined in: [src/fivem/models/BaseEntity.ts:294](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/BaseEntity.ts#L294)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

##### Returns

`void`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`IsPositionFrozen`](BaseEntity.md#ispositionfrozen)

***

### IsRadioEnabled

#### Get Signature

```ts
get IsRadioEnabled(): boolean
```

Defined in: [src/fivem/models/Vehicle.ts:152](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L152)

##### Returns

`boolean`

#### Set Signature

```ts
set IsRadioEnabled(value): void
```

Defined in: [src/fivem/models/Vehicle.ts:159](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L159)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

##### Returns

`void`

***

### IsRearBumperBrokenOff

#### Get Signature

```ts
get IsRearBumperBrokenOff(): boolean
```

Defined in: [src/fivem/models/Vehicle.ts:413](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L413)

##### Returns

`boolean`

***

### IsRecordingCollisions

#### Set Signature

```ts
set IsRecordingCollisions(value): void
```

Defined in: [src/fivem/models/BaseEntity.ts:427](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/BaseEntity.ts#L427)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

##### Returns

`void`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`IsRecordingCollisions`](BaseEntity.md#isrecordingcollisions)

***

### IsRightHeadLightBroken

#### Get Signature

```ts
get IsRightHeadLightBroken(): boolean
```

Defined in: [src/fivem/models/Vehicle.ts:409](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L409)

##### Returns

`boolean`

***

### IsRightIndicatorLightOn

#### Get Signature

```ts
get IsRightIndicatorLightOn(): boolean
```

Defined in: [src/fivem/models/Vehicle.ts:349](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L349)

##### Returns

`boolean`

#### Set Signature

```ts
set IsRightIndicatorLightOn(value): void
```

Defined in: [src/fivem/models/Vehicle.ts:353](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L353)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

##### Returns

`void`

***

### IsSearchLightOn

#### Get Signature

```ts
get IsSearchLightOn(): boolean
```

Defined in: [src/fivem/models/Vehicle.ts:324](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L324)

##### Returns

`boolean`

#### Set Signature

```ts
set IsSearchLightOn(value): void
```

Defined in: [src/fivem/models/Vehicle.ts:328](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L328)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

##### Returns

`void`

***

### IsSirenActive

#### Get Signature

```ts
get IsSirenActive(): boolean
```

Defined in: [src/fivem/models/Vehicle.ts:249](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L249)

##### Returns

`boolean`

#### Set Signature

```ts
set IsSirenActive(value): void
```

Defined in: [src/fivem/models/Vehicle.ts:253](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L253)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

##### Returns

`void`

***

### IsStolen

#### Get Signature

```ts
get IsStolen(): boolean
```

Defined in: [src/fivem/models/Vehicle.ts:496](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L496)

##### Returns

`boolean`

#### Set Signature

```ts
set IsStolen(value): void
```

Defined in: [src/fivem/models/Vehicle.ts:500](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L500)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

##### Returns

`void`

***

### IsStopped

#### Get Signature

```ts
get IsStopped(): boolean
```

Defined in: [src/fivem/models/Vehicle.ts:488](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L488)

##### Returns

`boolean`

***

### IsStoppedAtTrafficLights

#### Get Signature

```ts
get IsStoppedAtTrafficLights(): boolean
```

Defined in: [src/fivem/models/Vehicle.ts:492](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L492)

##### Returns

`boolean`

***

### IsTaxiLightOn

#### Get Signature

```ts
get IsTaxiLightOn(): boolean
```

Defined in: [src/fivem/models/Vehicle.ts:332](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L332)

##### Returns

`boolean`

#### Set Signature

```ts
set IsTaxiLightOn(value): void
```

Defined in: [src/fivem/models/Vehicle.ts:336](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L336)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

##### Returns

`void`

***

### IsUpright

#### Get Signature

```ts
get IsUpright(): boolean
```

Defined in: [src/fivem/models/BaseEntity.ts:350](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/BaseEntity.ts#L350)

##### Returns

`boolean`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`IsUpright`](BaseEntity.md#isupright)

***

### IsUpsideDown

#### Get Signature

```ts
get IsUpsideDown(): boolean
```

Defined in: [src/fivem/models/BaseEntity.ts:354](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/BaseEntity.ts#L354)

##### Returns

`boolean`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`IsUpsideDown`](BaseEntity.md#isupsidedown)

***

### IsVisible

#### Get Signature

```ts
get IsVisible(): boolean
```

Defined in: [src/fivem/models/BaseEntity.ts:334](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/BaseEntity.ts#L334)

##### Returns

`boolean`

#### Set Signature

```ts
set IsVisible(value): void
```

Defined in: [src/fivem/models/BaseEntity.ts:338](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/BaseEntity.ts#L338)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

##### Returns

`void`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`IsVisible`](BaseEntity.md#isvisible)

***

### IsWanted

#### Get Signature

```ts
get IsWanted(): boolean
```

Defined in: [src/fivem/models/Vehicle.ts:268](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L268)

##### Returns

`boolean`

#### Set Signature

```ts
set IsWanted(value): void
```

Defined in: [src/fivem/models/Vehicle.ts:272](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L272)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

##### Returns

`void`

***

### LandingGearState

#### Get Signature

```ts
get LandingGearState(): VehicleLandingGearState
```

Defined in: [src/fivem/models/Vehicle.ts:437](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L437)

##### Returns

[`VehicleLandingGearState`](../enumerations/VehicleLandingGearState.md)

#### Set Signature

```ts
set LandingGearState(value): void
```

Defined in: [src/fivem/models/Vehicle.ts:441](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L441)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | [`VehicleLandingGearState`](../enumerations/VehicleLandingGearState.md) |

##### Returns

`void`

***

### LightsMultiplier

#### Set Signature

```ts
set LightsMultiplier(value): void
```

Defined in: [src/fivem/models/Vehicle.ts:369](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L369)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

##### Returns

`void`

***

### LockStatus

#### Get Signature

```ts
get LockStatus(): VehicleLockStatus
```

Defined in: [src/fivem/models/Vehicle.ts:468](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L468)

##### Returns

[`VehicleLockStatus`](../enumerations/VehicleLockStatus.md)

#### Set Signature

```ts
set LockStatus(value): void
```

Defined in: [src/fivem/models/Vehicle.ts:472](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L472)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | [`VehicleLockStatus`](../enumerations/VehicleLockStatus.md) |

##### Returns

`void`

***

### LodDistance

#### Get Signature

```ts
get LodDistance(): number
```

Defined in: [src/fivem/models/BaseEntity.ts:326](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/BaseEntity.ts#L326)

##### Returns

`number`

#### Set Signature

```ts
set LodDistance(value): void
```

Defined in: [src/fivem/models/BaseEntity.ts:330](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/BaseEntity.ts#L330)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

##### Returns

`void`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`LodDistance`](BaseEntity.md#loddistance)

***

### MaterialCollidingWith

#### Get Signature

```ts
get MaterialCollidingWith(): MaterialHash
```

Defined in: [src/fivem/models/BaseEntity.ts:415](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/BaseEntity.ts#L415)

##### Returns

[`MaterialHash`](../enumerations/MaterialHash.md)

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`MaterialCollidingWith`](BaseEntity.md#materialcollidingwith)

***

### Matrix

#### Get Signature

```ts
get Matrix(): Vector3[]
```

Defined in: [src/fivem/models/BaseEntity.ts:132](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/BaseEntity.ts#L132)

##### Returns

[`Vector3`](Vector3.md)[]

#### Set Signature

```ts
set Matrix(vectors): void
```

Defined in: [src/fivem/models/BaseEntity.ts:136](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/BaseEntity.ts#L136)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `vectors` | [`Vector3`](Vector3.md)[] |

##### Returns

`void`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`Matrix`](BaseEntity.md#matrix)

***

### MaxBraking

#### Get Signature

```ts
get MaxBraking(): number
```

Defined in: [src/fivem/models/Vehicle.ts:476](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L476)

##### Returns

`number`

***

### MaxHealth

#### Get Signature

```ts
get MaxHealth(): number
```

Defined in: [src/fivem/models/BaseEntity.ts:165](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/BaseEntity.ts#L165)

##### Returns

`number`

#### Set Signature

```ts
set MaxHealth(amount): void
```

Defined in: [src/fivem/models/BaseEntity.ts:169](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/BaseEntity.ts#L169)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `amount` | `number` |

##### Returns

`void`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`MaxHealth`](BaseEntity.md#maxhealth)

***

### MaxSpeed

#### Set Signature

```ts
set MaxSpeed(value): void
```

Defined in: [src/fivem/models/BaseEntity.ts:310](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/BaseEntity.ts#L310)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

##### Returns

`void`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`MaxSpeed`](BaseEntity.md#maxspeed)

***

### MaxTraction

#### Get Signature

```ts
get MaxTraction(): number
```

Defined in: [src/fivem/models/Vehicle.ts:480](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L480)

##### Returns

`number`

***

### Model

#### Get Signature

```ts
get Model(): Model
```

Defined in: [src/fivem/models/BaseEntity.ts:203](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/BaseEntity.ts#L203)

##### Returns

[`Model`](Model.md)

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`Model`](BaseEntity.md#model)

***

### Mods

#### Get Signature

```ts
get Mods(): VehicleModCollection
```

Defined in: [src/fivem/models/Vehicle.ts:586](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L586)

##### Returns

[`VehicleModCollection`](VehicleModCollection.md)

***

### NeedsToBeHotwired

#### Get Signature

```ts
get NeedsToBeHotwired(): boolean
```

Defined in: [src/fivem/models/Vehicle.ts:292](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L292)

##### Returns

`boolean`

#### Set Signature

```ts
set NeedsToBeHotwired(value): void
```

Defined in: [src/fivem/models/Vehicle.ts:296](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L296)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

##### Returns

`void`

***

### NetworkId

#### Get Signature

```ts
get NetworkId(): number
```

Defined in: [src/fivem/models/BaseEntity.ts:54](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/BaseEntity.ts#L54)

##### Returns

`number`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`NetworkId`](BaseEntity.md#networkid)

***

### NumberPlate

#### Get Signature

```ts
get NumberPlate(): string
```

Defined in: [src/fivem/models/Vehicle.ts:73](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L73)

##### Returns

`string`

#### Set Signature

```ts
set NumberPlate(value): void
```

Defined in: [src/fivem/models/Vehicle.ts:77](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L77)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `string` |

##### Returns

`void`

***

### Occupants

#### Get Signature

```ts
get Occupants(): Ped[]
```

Defined in: [src/fivem/models/Vehicle.ts:549](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L549)

##### Returns

[`Ped`](Ped.md)[]

***

### OilLevel

#### Get Signature

```ts
get OilLevel(): number
```

Defined in: [src/fivem/models/Vehicle.ts:117](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L117)

##### Returns

`number`

#### Set Signature

```ts
set OilLevel(value): void
```

Defined in: [src/fivem/models/Vehicle.ts:121](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L121)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

##### Returns

`void`

***

### Opacity

#### Get Signature

```ts
get Opacity(): number
```

Defined in: [src/fivem/models/BaseEntity.ts:396](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/BaseEntity.ts#L396)

##### Returns

`number`

#### Set Signature

```ts
set Opacity(value): void
```

Defined in: [src/fivem/models/BaseEntity.ts:403](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/BaseEntity.ts#L403)

Sets how transparent an entity is, if you want to reset the alpha level use [[resetOpacity]] instead;

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

##### Returns

`void`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`Opacity`](BaseEntity.md#opacity)

***

### Owner

#### Get Signature

```ts
get Owner(): number
```

Defined in: [src/fivem/models/BaseEntity.ts:112](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/BaseEntity.ts#L112)

##### Returns

`number`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`Owner`](BaseEntity.md#owner)

***

### PassengerCapacity

#### Get Signature

```ts
get PassengerCapacity(): number
```

Defined in: [src/fivem/models/Vehicle.ts:734](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L734)

##### Returns

`number`

***

### PassengerCount

#### Get Signature

```ts
get PassengerCount(): number
```

Defined in: [src/fivem/models/Vehicle.ts:738](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L738)

##### Returns

`number`

***

### Passengers

#### Get Signature

```ts
get Passengers(): Ped[]
```

Defined in: [src/fivem/models/Vehicle.ts:559](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L559)

##### Returns

[`Ped`](Ped.md)[]

***

### PetrolTankHealth

#### Get Signature

```ts
get PetrolTankHealth(): number
```

Defined in: [src/fivem/models/Vehicle.ts:101](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L101)

##### Returns

`number`

#### Set Signature

```ts
set PetrolTankHealth(value): void
```

Defined in: [src/fivem/models/Vehicle.ts:105](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L105)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

##### Returns

`void`

***

### Position

#### Get Signature

```ts
get Position(): Vector3
```

Defined in: [src/fivem/models/BaseEntity.ts:225](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/BaseEntity.ts#L225)

##### Returns

[`Vector3`](Vector3.md)

#### Set Signature

```ts
set Position(position): void
```

Defined in: [src/fivem/models/BaseEntity.ts:229](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/BaseEntity.ts#L229)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `position` | [`Vector3`](Vector3.md) |

##### Returns

`void`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`Position`](BaseEntity.md#position)

***

### PositionNoOffset

#### Set Signature

```ts
set PositionNoOffset(position): void
```

Defined in: [src/fivem/models/BaseEntity.ts:242](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/BaseEntity.ts#L242)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `position` | [`Vector3`](Vector3.md) |

##### Returns

`void`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`PositionNoOffset`](BaseEntity.md#positionnooffset)

***

### PreviouslyOwnedByPlayer

#### Get Signature

```ts
get PreviouslyOwnedByPlayer(): boolean
```

Defined in: [src/fivem/models/Vehicle.ts:284](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L284)

##### Returns

`boolean`

#### Set Signature

```ts
set PreviouslyOwnedByPlayer(value): void
```

Defined in: [src/fivem/models/Vehicle.ts:288](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L288)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

##### Returns

`void`

***

### ProvidesCover

#### Set Signature

```ts
set ProvidesCover(value): void
```

Defined in: [src/fivem/models/Vehicle.ts:276](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L276)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

##### Returns

`void`

***

### Quaternion

#### Get Signature

```ts
get Quaternion(): Quaternion
```

Defined in: [src/fivem/models/BaseEntity.ts:262](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/BaseEntity.ts#L262)

##### Returns

[`Quaternion`](Quaternion.md)

#### Set Signature

```ts
set Quaternion(quaternion): void
```

Defined in: [src/fivem/models/BaseEntity.ts:272](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/BaseEntity.ts#L272)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `quaternion` | [`Quaternion`](Quaternion.md) |

##### Returns

`void`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`Quaternion`](BaseEntity.md#quaternion)

***

### RadioStation

#### Set Signature

```ts
set RadioStation(value): void
```

Defined in: [src/fivem/models/Vehicle.ts:163](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L163)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | [`RadioStation`](../enumerations/RadioStation.md) |

##### Returns

`void`

***

### RespotTimer

#### Set Signature

```ts
set RespotTimer(time): void
```

Defined in: [src/fivem/models/Vehicle.ts:742](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L742)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `time` | `number` |

##### Returns

`void`

***

### RoofState

#### Get Signature

```ts
get RoofState(): VehicleRoofState
```

Defined in: [src/fivem/models/Vehicle.ts:445](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L445)

##### Returns

[`VehicleRoofState`](../enumerations/VehicleRoofState.md)

#### Set Signature

```ts
set RoofState(value): void
```

Defined in: [src/fivem/models/Vehicle.ts:449](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L449)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | [`VehicleRoofState`](../enumerations/VehicleRoofState.md) |

##### Returns

`void`

***

### Rotation

#### Get Signature

```ts
get Rotation(): Vector3
```

Defined in: [src/fivem/models/BaseEntity.ts:254](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/BaseEntity.ts#L254)

##### Returns

[`Vector3`](Vector3.md)

#### Set Signature

```ts
set Rotation(rotation): void
```

Defined in: [src/fivem/models/BaseEntity.ts:258](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/BaseEntity.ts#L258)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `rotation` | [`Vector3`](Vector3.md) |

##### Returns

`void`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`Rotation`](BaseEntity.md#rotation)

***

### RotationVelocity

#### Get Signature

```ts
get RotationVelocity(): Vector3
```

Defined in: [src/fivem/models/BaseEntity.ts:306](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/BaseEntity.ts#L306)

##### Returns

[`Vector3`](Vector3.md)

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`RotationVelocity`](BaseEntity.md#rotationvelocity)

***

### Speed

#### Set Signature

```ts
set Speed(value): void
```

Defined in: [src/fivem/models/Vehicle.ts:168](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L168)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

##### Returns

`void`

#### Overrides

[`BaseEntity`](BaseEntity.md).[`Speed`](BaseEntity.md#speed)

***

### State

#### Get Signature

```ts
get State(): StateBagInterface
```

Defined in: [src/fivem/models/BaseEntity.ts:69](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/BaseEntity.ts#L69)

##### Returns

`StateBagInterface`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`State`](BaseEntity.md#state)

***

### SteeringAngle

#### Get Signature

```ts
get SteeringAngle(): number
```

Defined in: [src/fivem/models/Vehicle.ts:209](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L209)

##### Returns

`number`

#### Set Signature

```ts
set SteeringAngle(value): void
```

Defined in: [src/fivem/models/Vehicle.ts:213](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L213)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

##### Returns

`void`

***

### SteeringScale

#### Get Signature

```ts
get SteeringScale(): number
```

Defined in: [src/fivem/models/Vehicle.ts:217](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L217)

##### Returns

`number`

#### Set Signature

```ts
set SteeringScale(value): void
```

Defined in: [src/fivem/models/Vehicle.ts:221](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L221)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

##### Returns

`void`

***

### Strong

#### Set Signature

```ts
set Strong(toggle): void
```

Defined in: [src/fivem/models/Vehicle.ts:377](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L377)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `toggle` | `boolean` |

##### Returns

`void`

***

### SubmersionLevel

#### Get Signature

```ts
get SubmersionLevel(): number
```

Defined in: [src/fivem/models/BaseEntity.ts:322](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/BaseEntity.ts#L322)

##### Returns

`number`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`SubmersionLevel`](BaseEntity.md#submersionlevel)

***

### TowedVehicle

#### Get Signature

```ts
get TowedVehicle(): Vehicle
```

Defined in: [src/fivem/models/Vehicle.ts:703](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L703)

##### Returns

[`Vehicle`](Vehicle.md)

***

### TowingCraneRaisedAmount

#### Set Signature

```ts
set TowingCraneRaisedAmount(value): void
```

Defined in: [src/fivem/models/Vehicle.ts:699](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L699)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

##### Returns

`void`

***

### Velocity

#### Get Signature

```ts
get Velocity(): Vector3
```

Defined in: [src/fivem/models/BaseEntity.ts:298](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/BaseEntity.ts#L298)

##### Returns

[`Vector3`](Vector3.md)

#### Set Signature

```ts
set Velocity(velocity): void
```

Defined in: [src/fivem/models/BaseEntity.ts:302](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/BaseEntity.ts#L302)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `velocity` | [`Vector3`](Vector3.md) |

##### Returns

`void`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`Velocity`](BaseEntity.md#velocity)

***

### Wheels

#### Get Signature

```ts
get Wheels(): VehicleWheelCollection
```

Defined in: [src/fivem/models/Vehicle.ts:593](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L593)

##### Returns

[`VehicleWheelCollection`](VehicleWheelCollection.md)

***

### WheelSpeed

#### Get Signature

```ts
get WheelSpeed(): number
```

Defined in: [src/fivem/models/Vehicle.ts:177](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L177)

##### Returns

`number`

***

### Windows

#### Get Signature

```ts
get Windows(): VehicleWindowCollection
```

Defined in: [src/fivem/models/Vehicle.ts:600](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L600)

##### Returns

[`VehicleWindowCollection`](VehicleWindowCollection.md)

***

### GhostAlpha

#### Set Signature

```ts
set static GhostAlpha(alpha): void
```

Defined in: [src/fivem/models/Vehicle.ts:536](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L536)

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `alpha` | `number` |

##### Returns

`void`

## Methods

### AddStateBagChangeHandler()

```ts
AddStateBagChangeHandler(keyFilter, handler): number
```

Defined in: [src/fivem/models/BaseEntity.ts:73](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/BaseEntity.ts#L73)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `keyFilter` | `null` \| `string` |
| `handler` | `StateBagChangeHandler` |

#### Returns

`number`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`AddStateBagChangeHandler`](BaseEntity.md#addstatebagchangehandler)

***

### applyForce()

```ts
applyForce(
   direction, 
   rotation, 
   forceType): void
```

Defined in: [src/fivem/models/BaseEntity.ts:698](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/BaseEntity.ts#L698)

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `direction` | [`Vector3`](Vector3.md) | `undefined` |
| `rotation` | [`Vector3`](Vector3.md) | `undefined` |
| `forceType` | [`ForceType`](../enumerations/ForceType.md) | `ForceType.MaxForceRot2` |

#### Returns

`void`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`applyForce`](BaseEntity.md#applyforce)

***

### applyForceRelative()

```ts
applyForceRelative(
   direction, 
   rotation, 
   forceType): void
```

Defined in: [src/fivem/models/BaseEntity.ts:721](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/BaseEntity.ts#L721)

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `direction` | [`Vector3`](Vector3.md) | `undefined` |
| `rotation` | [`Vector3`](Vector3.md) | `undefined` |
| `forceType` | [`ForceType`](../enumerations/ForceType.md) | `ForceType.MaxForceRot2` |

#### Returns

`void`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`applyForceRelative`](BaseEntity.md#applyforcerelative)

***

### attachBlip()

```ts
attachBlip(): Blip
```

Defined in: [src/fivem/models/BaseEntity.ts:448](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/BaseEntity.ts#L448)

#### Returns

[`Blip`](Blip.md)

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`attachBlip`](BaseEntity.md#attachblip)

***

### attachTo()

```ts
attachTo(
   entity, 
   position, 
   rotation, 
   collisions, 
   unk9, 
   useSoftPinning, 
   rotationOrder): void
```

Defined in: [src/fivem/models/BaseEntity.ts:603](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/BaseEntity.ts#L603)

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `entity` | [`BaseEntity`](BaseEntity.md) | `undefined` |
| `position` | [`Vector3`](Vector3.md) | `undefined` |
| `rotation` | [`Vector3`](Vector3.md) | `undefined` |
| `collisions` | `boolean` | `false` |
| `unk9` | `boolean` | `true` |
| `useSoftPinning` | `boolean` | `true` |
| `rotationOrder` | `number` | `1` |

#### Returns

`void`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`attachTo`](BaseEntity.md#attachto)

***

### attachToBone()

```ts
attachToBone(
   entityBone, 
   position, 
   rotation, 
   collisions, 
   unk9, 
   useSoftPinning, 
   rotationOrder): void
```

Defined in: [src/fivem/models/BaseEntity.ts:649](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/BaseEntity.ts#L649)

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `entityBone` | [`EntityBone`](EntityBone.md) | `undefined` |
| `position` | [`Vector3`](Vector3.md) | `undefined` |
| `rotation` | [`Vector3`](Vector3.md) | `undefined` |
| `collisions` | `boolean` | `false` |
| `unk9` | `boolean` | `true` |
| `useSoftPinning` | `boolean` | `true` |
| `rotationOrder` | `number` | `1` |

#### Returns

`void`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`attachToBone`](BaseEntity.md#attachtobone)

***

### clearLastWeaponDamage()

```ts
clearLastWeaponDamage(): void
```

Defined in: [src/fivem/models/BaseEntity.ts:480](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/BaseEntity.ts#L480)

#### Returns

`void`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`clearLastWeaponDamage`](BaseEntity.md#clearlastweapondamage)

***

### closeBombBay()

```ts
closeBombBay(): void
```

Defined in: [src/fivem/models/Vehicle.ts:687](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L687)

#### Returns

`void`

***

### deform()

```ts
deform(
   position, 
   damageAmount, 
   radius): void
```

Defined in: [src/fivem/models/Vehicle.ts:722](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L722)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `position` | [`Vector3`](Vector3.md) |
| `damageAmount` | `number` |
| `radius` | `number` |

#### Returns

`void`

***

### delete()

```ts
delete(): void
```

Defined in: [src/fivem/models/BaseEntity.ts:762](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/BaseEntity.ts#L762)

#### Returns

`void`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`delete`](BaseEntity.md#delete)

***

### detach()

```ts
detach(): void
```

Defined in: [src/fivem/models/BaseEntity.ts:682](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/BaseEntity.ts#L682)

#### Returns

`void`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`detach`](BaseEntity.md#detach)

***

### detachFromTowTruck()

```ts
detachFromTowTruck(): void
```

Defined in: [src/fivem/models/Vehicle.ts:711](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L711)

#### Returns

`void`

***

### detachTowedVehicle()

```ts
detachTowedVehicle(): void
```

Defined in: [src/fivem/models/Vehicle.ts:715](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L715)

#### Returns

`void`

***

### exists()

```ts
exists(): boolean
```

Defined in: [src/fivem/models/Vehicle.ts:61](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L61)

#### Returns

`boolean`

#### Overrides

[`BaseEntity`](BaseEntity.md).[`exists`](BaseEntity.md#exists)

***

### explode()

```ts
explode(): void
```

Defined in: [src/fivem/models/Vehicle.ts:651](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L651)

#### Returns

`void`

***

### explodeNetworked()

```ts
explodeNetworked(): void
```

Defined in: [src/fivem/models/Vehicle.ts:655](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L655)

#### Returns

`void`

***

### extraExists()

```ts
extraExists(extra): boolean
```

Defined in: [src/fivem/models/Vehicle.ts:607](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L607)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `extra` | `number` |

#### Returns

`boolean`

***

### getEntityAttachedTo()

```ts
getEntityAttachedTo(): BaseEntity
```

Defined in: [src/fivem/models/BaseEntity.ts:694](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/BaseEntity.ts#L694)

#### Returns

[`BaseEntity`](BaseEntity.md)

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`getEntityAttachedTo`](BaseEntity.md#getentityattachedto)

***

### getHandlingFloat()

```ts
getHandlingFloat(fieldName): number
```

Defined in: [src/fivem/models/Vehicle.ts:746](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L746)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `fieldName` | `string` |

#### Returns

`number`

***

### getHandlingInt()

```ts
getHandlingInt(fieldName): number
```

Defined in: [src/fivem/models/Vehicle.ts:754](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L754)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `fieldName` | `string` |

#### Returns

`number`

***

### getHandlingVector()

```ts
getHandlingVector(fieldName): Vector3
```

Defined in: [src/fivem/models/Vehicle.ts:767](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L767)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `fieldName` | `string` |

#### Returns

[`Vector3`](Vector3.md)

***

### getOffsetInRelativeCoords()

```ts
getOffsetInRelativeCoords(worldCoords): Vector3
```

Defined in: [src/fivem/models/BaseEntity.ts:550](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/BaseEntity.ts#L550)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `worldCoords` | [`Vector3`](Vector3.md) |

#### Returns

[`Vector3`](Vector3.md)

the offset position from the entity in world coords

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`getOffsetInRelativeCoords`](BaseEntity.md#getoffsetinrelativecoords)

***

### getOffsetInWorldCoords()

```ts
getOffsetInWorldCoords(offset): Vector3
```

Defined in: [src/fivem/models/BaseEntity.ts:578](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/BaseEntity.ts#L578)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `offset` | [`Vector3`](Vector3.md) |

#### Returns

[`Vector3`](Vector3.md)

the offset position from the entity in relative coords

#### Example

```typescript
const ply = Game.PlayerPed;
const plyPos = ply.Position;
const bag = await World.createProp(new Model('ba_prop_battle_bag_01b'), plyPos, true, true, true);
bag.attachToBone(
    ply.Bones.getBone(64113),
    new Vector3(0.12, -0.25, 0.0),
    new Vector3(105.0, 50.0, 190.0)
)
const offset = bag.getRelativePositionOffset(plyPos);
```

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`getOffsetInWorldCoords`](BaseEntity.md#getoffsetinworldcoords)

***

### ~~getOffsetPosition()~~

```ts
getOffsetPosition(offset): Vector3
```

Defined in: [src/fivem/models/BaseEntity.ts:599](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/BaseEntity.ts#L599)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `offset` | [`Vector3`](Vector3.md) |

#### Returns

[`Vector3`](Vector3.md)

#### Deprecated

use [[getOffsetInWorldCoords]]

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`getOffsetPosition`](BaseEntity.md#getoffsetposition)

***

### getPedOnSeat()

```ts
getPedOnSeat(seat): Ped
```

Defined in: [src/fivem/models/Vehicle.ts:623](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L623)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `seat` | [`VehicleSeat`](../enumerations/VehicleSeat.md) |

#### Returns

[`Ped`](Ped.md)

***

### ~~getPositionOffset()~~

```ts
getPositionOffset(worldCoords): Vector3
```

Defined in: [src/fivem/models/BaseEntity.ts:592](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/BaseEntity.ts#L592)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `worldCoords` | [`Vector3`](Vector3.md) |

#### Returns

[`Vector3`](Vector3.md)

#### Deprecated

use [[getOffsetInRelativeCoords]] instead

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`getPositionOffset`](BaseEntity.md#getpositionoffset)

***

### getSpeedVector()

```ts
getSpeedVector(isRelative): Vector3
```

Defined in: [src/fivem/models/BaseEntity.ts:124](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/BaseEntity.ts#L124)

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `isRelative` | `boolean` | `false` |

#### Returns

[`Vector3`](Vector3.md)

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`getSpeedVector`](BaseEntity.md#getspeedvector)

***

### hasBeenDamagedBy()

```ts
hasBeenDamagedBy(entity): boolean
```

Defined in: [src/fivem/models/BaseEntity.ts:464](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/BaseEntity.ts#L464)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `entity` | [`BaseEntity`](BaseEntity.md) |

#### Returns

`boolean`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`hasBeenDamagedBy`](BaseEntity.md#hasbeendamagedby)

***

### hasBeenDamagedByAnyMeleeWeapon()

```ts
hasBeenDamagedByAnyMeleeWeapon(): boolean
```

Defined in: [src/fivem/models/BaseEntity.ts:476](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/BaseEntity.ts#L476)

#### Returns

`boolean`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`hasBeenDamagedByAnyMeleeWeapon`](BaseEntity.md#hasbeendamagedbyanymeleeweapon)

***

### hasBeenDamagedByAnyWeapon()

```ts
hasBeenDamagedByAnyWeapon(): boolean
```

Defined in: [src/fivem/models/BaseEntity.ts:472](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/BaseEntity.ts#L472)

#### Returns

`boolean`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`hasBeenDamagedByAnyWeapon`](BaseEntity.md#hasbeendamagedbyanyweapon)

***

### hasBeenDamagedByWeapon()

```ts
hasBeenDamagedByWeapon(weapon): boolean
```

Defined in: [src/fivem/models/BaseEntity.ts:468](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/BaseEntity.ts#L468)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `weapon` | [`WeaponHash`](../enumerations/WeaponHash.md) |

#### Returns

`boolean`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`hasBeenDamagedByWeapon`](BaseEntity.md#hasbeendamagedbyweapon)

***

### hasClearLosToEntity()

```ts
hasClearLosToEntity(entity, traceType): boolean
```

Defined in: [src/fivem/models/BaseEntity.ts:456](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/BaseEntity.ts#L456)

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `entity` | [`BaseEntity`](BaseEntity.md) | `undefined` |
| `traceType` | `number` | `17` |

#### Returns

`boolean`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`hasClearLosToEntity`](BaseEntity.md#hasclearlostoentity)

***

### hasClearLosToEntityInFront()

```ts
hasClearLosToEntityInFront(entity): boolean
```

Defined in: [src/fivem/models/BaseEntity.ts:460](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/BaseEntity.ts#L460)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `entity` | [`BaseEntity`](BaseEntity.md) |

#### Returns

`boolean`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`hasClearLosToEntityInFront`](BaseEntity.md#hasclearlostoentityinfront)

***

### ~~isAlive()~~

```ts
isAlive(): boolean
```

Defined in: [src/fivem/models/BaseEntity.ts:199](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/BaseEntity.ts#L199)

#### Returns

`boolean`

#### Deprecated

use [[IsAlive]] instead

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`isAlive`](BaseEntity.md#isalive-2)

***

### isAttached()

```ts
isAttached(): boolean
```

Defined in: [src/fivem/models/BaseEntity.ts:686](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/BaseEntity.ts#L686)

#### Returns

`boolean`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`isAttached`](BaseEntity.md#isattached)

***

### isAttachedTo()

```ts
isAttachedTo(entity): boolean
```

Defined in: [src/fivem/models/BaseEntity.ts:690](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/BaseEntity.ts#L690)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `entity` | [`BaseEntity`](BaseEntity.md) |

#### Returns

`boolean`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`isAttachedTo`](BaseEntity.md#isattachedto)

***

### ~~isDead()~~

```ts
isDead(): boolean
```

Defined in: [src/fivem/models/BaseEntity.ts:192](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/BaseEntity.ts#L192)

#### Returns

`boolean`

#### Deprecated

use [[IsDead]] instead

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`isDead`](BaseEntity.md#isdead-3)

***

### isExtraOn()

```ts
isExtraOn(extra): boolean
```

Defined in: [src/fivem/models/Vehicle.ts:611](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L611)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `extra` | `number` |

#### Returns

`boolean`

***

### isInAngledArea()

```ts
isInAngledArea(
   origin, 
   edge, 
   angle): boolean
```

Defined in: [src/fivem/models/BaseEntity.ts:499](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/BaseEntity.ts#L499)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `origin` | [`Vector3`](Vector3.md) |
| `edge` | [`Vector3`](Vector3.md) |
| `angle` | `number` |

#### Returns

`boolean`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`isInAngledArea`](BaseEntity.md#isinangledarea)

***

### isInArea()

```ts
isInArea(minBounds, maxBounds): boolean
```

Defined in: [src/fivem/models/BaseEntity.ts:484](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/BaseEntity.ts#L484)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `minBounds` | [`Vector3`](Vector3.md) |
| `maxBounds` | [`Vector3`](Vector3.md) |

#### Returns

`boolean`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`isInArea`](BaseEntity.md#isinarea)

***

### isInRangeOf()

```ts
isInRangeOf(position, range): boolean
```

Defined in: [src/fivem/models/BaseEntity.ts:519](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/BaseEntity.ts#L519)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `position` | [`Vector3`](Vector3.md) |
| `range` | `number` |

#### Returns

`boolean`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`isInRangeOf`](BaseEntity.md#isinrangeof)

***

### isNearEntity()

```ts
isNearEntity(entity, bounds): boolean
```

Defined in: [src/fivem/models/BaseEntity.ts:525](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/BaseEntity.ts#L525)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `entity` | [`BaseEntity`](BaseEntity.md) |
| `bounds` | [`Vector3`](Vector3.md) |

#### Returns

`boolean`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`isNearEntity`](BaseEntity.md#isnearentity)

***

### isSeatFree()

```ts
isSeatFree(seat): boolean
```

Defined in: [src/fivem/models/Vehicle.ts:627](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L627)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `seat` | [`VehicleSeat`](../enumerations/VehicleSeat.md) |

#### Returns

`boolean`

***

### isTouching()

```ts
isTouching(entity): boolean
```

Defined in: [src/fivem/models/BaseEntity.ts:538](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/BaseEntity.ts#L538)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `entity` | [`BaseEntity`](BaseEntity.md) |

#### Returns

`boolean`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`isTouching`](BaseEntity.md#istouching)

***

### isTouchingModel()

```ts
isTouchingModel(model): boolean
```

Defined in: [src/fivem/models/BaseEntity.ts:542](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/BaseEntity.ts#L542)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `model` | [`Model`](Model.md) |

#### Returns

`boolean`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`isTouchingModel`](BaseEntity.md#istouchingmodel)

***

### listenForStateChange()

```ts
listenForStateChange(keyFilter, handler): number
```

Defined in: [src/fivem/models/BaseEntity.ts:97](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/BaseEntity.ts#L97)

A short hand function for AddStateBagChangeHandler, this gets automatically cleaned up on entity deletion.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `keyFilter` | `null` \| `string` | the key to filter for or null |
| `handler` | `StateBagChangeHandler` | the function to handle the change |

#### Returns

`number`

a cookie to be used in RemoveStateBagChangeHandler

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`listenForStateChange`](BaseEntity.md#listenforstatechange)

***

### ~~markAsNoLongerNeeded()~~

```ts
markAsNoLongerNeeded(): void
```

Defined in: [src/fivem/models/BaseEntity.ts:773](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/BaseEntity.ts#L773)

#### Returns

`void`

#### Deprecated

use [[IsMissionEntity]] setter as false instead.

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`markAsNoLongerNeeded`](BaseEntity.md#markasnolongerneeded)

***

### openBombBay()

```ts
openBombBay(): void
```

Defined in: [src/fivem/models/Vehicle.ts:681](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L681)

#### Returns

`void`

***

### placeOnGround()

```ts
placeOnGround(): void
```

Defined in: [src/fivem/models/Vehicle.ts:643](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L643)

#### Returns

`void`

***

### ~~removeAllParticleEffects()~~

```ts
removeAllParticleEffects(): void
```

Defined in: [src/fivem/models/BaseEntity.ts:754](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/BaseEntity.ts#L754)

#### Returns

`void`

#### Deprecated

use [[removePtfxEffects]]

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`removeAllParticleEffects`](BaseEntity.md#removeallparticleeffects)

***

### removePtfxEffects()

```ts
removePtfxEffects(): void
```

Defined in: [src/fivem/models/BaseEntity.ts:747](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/BaseEntity.ts#L747)

Removes all particle effects from the entity

#### Returns

`void`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`removePtfxEffects`](BaseEntity.md#removeptfxeffects)

***

### removeStateListener()

```ts
removeStateListener(tgtCookie): void
```

Defined in: [src/fivem/models/BaseEntity.ts:104](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/BaseEntity.ts#L104)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `tgtCookie` | `number` |

#### Returns

`void`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`removeStateListener`](BaseEntity.md#removestatelistener)

***

### repair()

```ts
repair(): void
```

Defined in: [src/fivem/models/Vehicle.ts:647](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L647)

#### Returns

`void`

***

### resetOpacity()

```ts
resetOpacity(): void
```

Defined in: [src/fivem/models/BaseEntity.ts:407](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/BaseEntity.ts#L407)

#### Returns

`void`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`resetOpacity`](BaseEntity.md#resetopacity)

***

### setHandlingFloat()

```ts
setHandlingFloat(fieldName, value): void
```

Defined in: [src/fivem/models/Vehicle.ts:750](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L750)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `fieldName` | `string` |
| `value` | `number` |

#### Returns

`void`

***

### setHandlingInt()

```ts
setHandlingInt(fieldName, value): void
```

Defined in: [src/fivem/models/Vehicle.ts:758](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L758)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `fieldName` | `string` |
| `value` | `number` |

#### Returns

`void`

***

### setHeliYawPitchRollMult()

```ts
setHeliYawPitchRollMult(mult): void
```

Defined in: [src/fivem/models/Vehicle.ts:693](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L693)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `mult` | `number` |

#### Returns

`void`

***

### setNoCollision()

```ts
setNoCollision(entity, toggle): void
```

Defined in: [src/fivem/models/BaseEntity.ts:452](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/BaseEntity.ts#L452)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `entity` | [`BaseEntity`](BaseEntity.md) |
| `toggle` | `boolean` |

#### Returns

`void`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`setNoCollision`](BaseEntity.md#setnocollision)

***

### soundHorn()

```ts
soundHorn(duration, mode): void
```

Defined in: [src/fivem/models/Vehicle.ts:261](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L261)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `duration` | `number` |
| `mode` | `number` |

#### Returns

`void`

***

### startAlarm()

```ts
startAlarm(): void
```

Defined in: [src/fivem/models/Vehicle.ts:245](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L245)

#### Returns

`void`

***

### toggleExtra()

```ts
toggleExtra(extra, toggle): void
```

Defined in: [src/fivem/models/Vehicle.ts:617](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L617)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `extra` | `number` |
| `toggle` | `boolean` |

#### Returns

`void`

***

### towVehicle()

```ts
towVehicle(vehicle, rear): void
```

Defined in: [src/fivem/models/Vehicle.ts:707](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L707)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `vehicle` | [`Vehicle`](Vehicle.md) |
| `rear` | `boolean` |

#### Returns

`void`

***

### wash()

```ts
wash(): void
```

Defined in: [src/fivem/models/Vehicle.ts:631](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L631)

#### Returns

`void`

***

### exists()

```ts
static exists(vehicle): boolean
```

Defined in: [src/fivem/models/Vehicle.ts:35](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L35)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `vehicle` | [`Vehicle`](Vehicle.md) |

#### Returns

`boolean`

***

### fromHandle()

```ts
static fromHandle(handle): null | Vehicle
```

Defined in: [src/fivem/models/Vehicle.ts:39](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L39)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `handle` | `number` |

#### Returns

`null` \| [`Vehicle`](Vehicle.md)

***

### fromNetworkId()

```ts
static fromNetworkId(networkId): null | Vehicle
```

Defined in: [src/fivem/models/Vehicle.ts:44](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L44)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `networkId` | `number` |

#### Returns

`null` \| [`Vehicle`](Vehicle.md)

#### Overrides

[`BaseEntity`](BaseEntity.md).[`fromNetworkId`](BaseEntity.md#fromnetworkid)

***

### fromStateBagName()

```ts
static fromStateBagName(stateBagName): null | BaseEntity
```

Defined in: [src/fivem/models/BaseEntity.ts:16](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/BaseEntity.ts#L16)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `stateBagName` | `string` |

#### Returns

`null` \| [`BaseEntity`](BaseEntity.md)

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`fromStateBagName`](BaseEntity.md#fromstatebagname)

***

### getClassDisplayName()

```ts
static getClassDisplayName(vehicleClass): string
```

Defined in: [src/fivem/models/Vehicle.ts:31](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L31)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `vehicleClass` | [`VehicleClass`](../enumerations/VehicleClass.md) |

#### Returns

`string`

***

### getModelClass()

```ts
static getModelClass(vehicleModel): VehicleClass
```

Defined in: [src/fivem/models/Vehicle.ts:27](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L27)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `vehicleModel` | [`Model`](Model.md) |

#### Returns

[`VehicleClass`](../enumerations/VehicleClass.md)

***

### getModelDisplayName()

```ts
static getModelDisplayName(vehicleModel): string
```

Defined in: [src/fivem/models/Vehicle.ts:23](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L23)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `vehicleModel` | [`Model`](Model.md) |

#### Returns

`string`

***

### resetGhostAlpha()

```ts
static resetGhostAlpha(): void
```

Defined in: [src/fivem/models/Vehicle.ts:545](https://github.com/nativewrappers/nativewrappers/blob/b77be96b90a0116f980e0511bdd4877df779df2d/src/fivem/models/Vehicle.ts#L545)

#### Returns

`void`
