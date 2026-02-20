[@nativewrappers/fivem](../../../README.md) / [redm/Game](../README.md) / Game

# Class: Game

Defined in: lib/redm/Game.d.ts:3

## Constructors

### Constructor

```ts
new Game(): Game;
```

#### Returns

`Game`

## Accessors

### Player

#### Get Signature

```ts
get static Player(): Player;
```

Defined in: lib/redm/Game.d.ts:5

##### Returns

[`Player`](../../entities/Player/classes/Player.md)

***

### PlayerPed

#### Get Signature

```ts
get static PlayerPed(): Ped;
```

Defined in: lib/redm/Game.d.ts:4

##### Returns

[`Ped`](../../entities/Ped/classes/Ped.md)

## Methods

### isLoadSceneActive()

```ts
static isLoadSceneActive(): boolean;
```

Defined in: lib/redm/Game.d.ts:9

#### Returns

`boolean`

***

### isLoadSceneLoaded()

```ts
static isLoadSceneLoaded(): boolean;
```

Defined in: lib/redm/Game.d.ts:8

#### Returns

`boolean`

***

### loadScene()

```ts
static loadScene(
   pos, 
   offset?, 
   radius?, 
   controlFlags?): boolean;
```

Defined in: lib/redm/Game.d.ts:6

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `pos` | `Vector3` |
| `offset?` | `any` |
| `radius?` | `number` |
| `controlFlags?` | `number` |

#### Returns

`boolean`

***

### stopLoadScene()

```ts
static stopLoadScene(): void;
```

Defined in: lib/redm/Game.d.ts:7

#### Returns

`void`
