[@nativewrappers/fivem](../../../../README.md) / [fivem/weapon/WeaponAsset](../README.md) / WeaponAsset

# Class: WeaponAsset

Defined in: lib/fivem/weapon/WeaponAsset.d.ts:6

weapon asset

## Constructors

### Constructor

```ts
new WeaponAsset(hash): WeaponAsset;
```

Defined in: lib/fivem/weapon/WeaponAsset.d.ts:8

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `hash` | [`WeaponHash`](../../../hashes/WeaponHash/enumerations/WeaponHash.md) |

#### Returns

`WeaponAsset`

## Accessors

### DisplayName

#### Get Signature

```ts
get DisplayName(): string;
```

Defined in: lib/fivem/weapon/WeaponAsset.d.ts:48

get weapon display name / label

##### Returns

`string`

***

### Hash

#### Get Signature

```ts
get Hash(): WeaponHash;
```

Defined in: lib/fivem/weapon/WeaponAsset.d.ts:14

get weapon hash

##### Returns

[`WeaponHash`](../../../hashes/WeaponHash/enumerations/WeaponHash.md)

***

### IsLoaded

#### Get Signature

```ts
get IsLoaded(): boolean;
```

Defined in: lib/fivem/weapon/WeaponAsset.d.ts:26

check weapon assets is loaded

##### Returns

`boolean`

***

### IsValid

#### Get Signature

```ts
get IsValid(): boolean;
```

Defined in: lib/fivem/weapon/WeaponAsset.d.ts:20

check weapon is valid

##### Returns

`boolean`

***

### LocalizedName

#### Get Signature

```ts
get LocalizedName(): string;
```

Defined in: lib/fivem/weapon/WeaponAsset.d.ts:54

get weapon localized name

##### Returns

`string`

## Methods

### dismiss()

```ts
dismiss(): void;
```

Defined in: lib/fivem/weapon/WeaponAsset.d.ts:42

unload weapon asset

#### Returns

`void`

***

### request()

```ts
request(): void;
```

Defined in: lib/fivem/weapon/WeaponAsset.d.ts:31

request weapon asset

#### Returns

`void`

***

### requestAsync()

```ts
requestAsync(timeout): Promise<boolean>;
```

Defined in: lib/fivem/weapon/WeaponAsset.d.ts:37

request weapon asset async

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `timeout` | `number` |  |

#### Returns

`Promise`\<`boolean`\>
