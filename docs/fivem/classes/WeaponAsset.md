[@nativewrappers/fivem](../../README.md) / [fivem](../README.md) / WeaponAsset

# Class: WeaponAsset

weapon asset

## Constructors

### new WeaponAsset()

```ts
new WeaponAsset(hash): WeaponAsset
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `hash` | [`WeaponHash`](../enumerations/WeaponHash.md) |

#### Returns

[`WeaponAsset`](WeaponAsset.md)

#### Defined in

[src/fivem/weapon/WeaponAsset.ts:13](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/weapon/WeaponAsset.ts#L13)

## Accessors

### DisplayName

```ts
get DisplayName(): string
```

get weapon display name / label

#### Returns

`string`

#### Defined in

[src/fivem/weapon/WeaponAsset.ts:87](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/weapon/WeaponAsset.ts#L87)

***

### Hash

```ts
get Hash(): WeaponHash
```

get weapon hash

#### Returns

[`WeaponHash`](../enumerations/WeaponHash.md)

#### Defined in

[src/fivem/weapon/WeaponAsset.ts:22](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/weapon/WeaponAsset.ts#L22)

***

### IsLoaded

```ts
get IsLoaded(): boolean
```

check weapon assets is loaded

#### Returns

`boolean`

#### Defined in

[src/fivem/weapon/WeaponAsset.ts:40](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/weapon/WeaponAsset.ts#L40)

***

### IsValid

```ts
get IsValid(): boolean
```

check weapon is valid

#### Returns

`boolean`

#### Defined in

[src/fivem/weapon/WeaponAsset.ts:31](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/weapon/WeaponAsset.ts#L31)

***

### LocalizedName

```ts
get LocalizedName(): string
```

get weapon localized name

#### Returns

`string`

#### Defined in

[src/fivem/weapon/WeaponAsset.ts:96](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/weapon/WeaponAsset.ts#L96)

## Methods

### dismiss()

```ts
dismiss(): void
```

unload weapon asset

#### Returns

`void`

#### Defined in

[src/fivem/weapon/WeaponAsset.ts:78](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/weapon/WeaponAsset.ts#L78)

***

### request()

```ts
request(): void
```

request weapon asset

#### Returns

`void`

#### Defined in

[src/fivem/weapon/WeaponAsset.ts:48](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/weapon/WeaponAsset.ts#L48)

***

### requestAsync()

```ts
requestAsync(timeout): Promise<boolean>
```

request weapon asset async

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `timeout` | `number` |  |

#### Returns

`Promise`\<`boolean`\>

#### Defined in

[src/fivem/weapon/WeaponAsset.ts:57](https://github.com/nativewrappers/fivem/blob/2d4fa96d0a81695a673fe4c595d3abfefbf554a5/src/fivem/weapon/WeaponAsset.ts#L57)
