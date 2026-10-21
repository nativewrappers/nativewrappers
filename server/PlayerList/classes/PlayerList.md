[@nativewrappers/fivem](../../../README.md) / [server/PlayerList](../README.md) / PlayerList

# Class: PlayerList

Defined in: lib/server/PlayerList.d.ts:10

A static helper class that will automatically handle adding/removing players from
a shared player map.

This should be preferred over using constant calls to `getPlayers` since it will
have marginally less overhead

## Constructors

### Constructor

```ts
new PlayerList(): PlayerList;
```

#### Returns

`PlayerList`

## Accessors

### AllPlayers

#### Get Signature

```ts
get static AllPlayers(): Readonly<PlayerMap>;
```

Defined in: lib/server/PlayerList.d.ts:12

##### Returns

`Readonly`\<[`PlayerMap`](../type-aliases/PlayerMap.md)\>
