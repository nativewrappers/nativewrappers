[@nativewrappers/fivem](../../README.md) / [fivem](../README.md) / WeaponAsset

# Class: WeaponAsset

Defined in: [src/fivem/weapon/WeaponAsset.ts:10](https://github.com/nativewrappers/nativewrappers/blob/3a5a8937f4f56e42414bc65083bf196262ee500c/src/fivem/weapon/WeaponAsset.ts#L10)

weapon asset

## Constructors

### new WeaponAsset()

```ts
new WeaponAsset(hash): WeaponAsset
```

Defined in: [src/fivem/weapon/WeaponAsset.ts:13](https://github.com/nativewrappers/nativewrappers/blob/3a5a8937f4f56e42414bc65083bf196262ee500c/src/fivem/weapon/WeaponAsset.ts#L13)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `hash` | [`WeaponHash`](../enumerations/WeaponHash.md) |

#### Returns

[`WeaponAsset`](WeaponAsset.md)

## Accessors

### DisplayName

#### Get Signature

```ts
get DisplayName(): string
```

Defined in: [src/fivem/weapon/WeaponAsset.ts:87](https://github.com/nativewrappers/nativewrappers/blob/3a5a8937f4f56e42414bc65083bf196262ee500c/src/fivem/weapon/WeaponAsset.ts#L87)

get weapon display name / label

##### Returns

`string`

***

### Hash

#### Get Signature

```ts
get Hash(): WeaponHash
```

Defined in: [src/fivem/weapon/WeaponAsset.ts:22](https://github.com/nativewrappers/nativewrappers/blob/3a5a8937f4f56e42414bc65083bf196262ee500c/src/fivem/weapon/WeaponAsset.ts#L22)

get weapon hash

##### Returns

[`WeaponHash`](../enumerations/WeaponHash.md)

***

### IsLoaded

#### Get Signature

```ts
get IsLoaded(): boolean
```

Defined in: [src/fivem/weapon/WeaponAsset.ts:40](https://github.com/nativewrappers/nativewrappers/blob/3a5a8937f4f56e42414bc65083bf196262ee500c/src/fivem/weapon/WeaponAsset.ts#L40)

check weapon assets is loaded

##### Returns

`boolean`

***

### IsValid

#### Get Signature

```ts
get IsValid(): boolean
```

Defined in: [src/fivem/weapon/WeaponAsset.ts:31](https://github.com/nativewrappers/nativewrappers/blob/3a5a8937f4f56e42414bc65083bf196262ee500c/src/fivem/weapon/WeaponAsset.ts#L31)

check weapon is valid

##### Returns

`boolean`

***

### LocalizedName

#### Get Signature

```ts
get LocalizedName(): string
```

Defined in: [src/fivem/weapon/WeaponAsset.ts:96](https://github.com/nativewrappers/nativewrappers/blob/3a5a8937f4f56e42414bc65083bf196262ee500c/src/fivem/weapon/WeaponAsset.ts#L96)

get weapon localized name

##### Returns

`string`

## Methods

### dismiss()

```ts
dismiss(): void
```

Defined in: [src/fivem/weapon/WeaponAsset.ts:78](https://github.com/nativewrappers/nativewrappers/blob/3a5a8937f4f56e42414bc65083bf196262ee500c/src/fivem/weapon/WeaponAsset.ts#L78)

unload weapon asset

#### Returns

`void`

***

### request()

```ts
request(): void
```

Defined in: [src/fivem/weapon/WeaponAsset.ts:48](https://github.com/nativewrappers/nativewrappers/blob/3a5a8937f4f56e42414bc65083bf196262ee500c/src/fivem/weapon/WeaponAsset.ts#L48)

request weapon asset

#### Returns

`void`

***

### requestAsync()

```ts
requestAsync(timeout): Promise<boolean>
```

Defined in: [src/fivem/weapon/WeaponAsset.ts:57](https://github.com/nativewrappers/nativewrappers/blob/3a5a8937f4f56e42414bc65083bf196262ee500c/src/fivem/weapon/WeaponAsset.ts#L57)

request weapon asset async

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `timeout` | `number` |  |

#### Returns

`Promise`\<`boolean`\>
