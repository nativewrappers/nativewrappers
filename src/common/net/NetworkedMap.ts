import { GlobalData } from "@common/GlobalData";
import type { Buffer } from "buffer";

enum MapChangeType {
  // whenever a value inside of the object changed
  SubValueChanged,
  // whenever a new key was added, or overwrote
  Add,
  // whenever a key was removed from the map
  Remove,
  // whenever reset() was called on the map
  Reset,
  // Whenever they're subscribed initially and get the initial load of data
  Init,
}

type MapChanges<K, V> = [MapChangeType, K?, V?] | [MapChangeType.SubValueChanged, K, string, any];

declare function msgpack_pack(data: any): Buffer;
declare function msgpack_unpack(data: Buffer): any;

type ChangeListener<V> = (value: V) => void;

// Used to not make a bunch of on/raw events, we just reuse the same one and look up the data in the map
class NetworkedMapEventManager {
  #syncedCalls = new Map<string, NetworkedMap<any, any>>();

  constructor() {
    $SERVER: if (GlobalData.IS_SERVER) {
      on("playerDropped", () => {
        const src = source;
        // call the player dropped for each call
        for (const [_k, map] of this.#syncedCalls) {
          map.removeSubscriber(src);
        }
      });
      return;
    }
    $CLIENT: {
      RegisterResourceAsEventHandler(`${GlobalData.CurrentResource}:syncChanges`);
      addRawEventListener(`${GlobalData.CurrentResource}:syncChanges`, (msgpack_data: any) => {
        const data = msgpack_unpack(msgpack_data);
        const syncName = data[0];
        const syncData = data[1];

        const map = this.#syncedCalls.get(syncName);

        if (!map) {
          throw new Error(`Tried to sync changes for a networked map but ${syncName} does't exist.`);
        }

        // @ts-ignore
        map.handleSync(syncData);
      });
    }
  }

  addNetworkedMap<K, V>(map: NetworkedMap<K, V>) {
    // abuse typescript, we don't want the end user to use these calls but we still want it to be accessible internally.
    // @ts-ignore
    this.#syncedCalls.set(map.SyncName, map);
  }

  removeNetworkedMap(syncName: string) {
    this.#syncedCalls.delete(syncName);
  }
}

// esbuild will remove this if NetworkedMap isn't used
const netManager /* @__PURE__ */ = new NetworkedMapEventManager();

/**
 * not ready to be used just thoughts right now
 */
export class NetworkedMap<K, V> extends Map<K, V> {
  #syncName: string;
  #queuedChanges: MapChanges<K, V>[] = [];
  #changeListeners: Map<K, ChangeListener<V>[]> = new Map();
  #subscribers: Set<number> = new Set();

  constructor(syncName: string, initialValue?: [K, V][]) {
    super(initialValue);
    this.#syncName = syncName;

    GlobalData.NetworkedTicks.push(this);

    netManager.addNetworkedMap(this);

    // if we don't have a network tick then we want to register it.
    $SERVER: {
      if (!GlobalData.NetworkTick && GlobalData.IS_SERVER) {
        GlobalData.NetworkTick = setTick(() => {
          for (const networkedThis of GlobalData.NetworkedTicks) {
            networkedThis.networkTick();
          }
        });
      }
    }
  }

  get SyncName() {
    return this.#syncName;
  }

  // handles removing the player from the map whenever they're dropped
  private onPlayerDropped() {
    this.removeSubscriber(source);
  }

  /*
   * Resyncs the entire map to the client, useful for if there's a mismatch in the clients map (when multiple players change things, in cases like inventories)
   *
   * NOTE: This doesn't check that the player is already subscribed to the map, you should do your own due-diligence to only call this for players already subscribed
   */
  resync(source: number) {
    const packed_data = msgpack_pack([this.#syncName, [[MapChangeType.Init, this.size === 0 ? [] : Array.from(this)]]]);
    TriggerClientEventInternal(
      `${GlobalData.CurrentResource}:syncChanges`,
      source as any,
      packed_data as any,
      packed_data.length,
    );
  }

  /*
   * Adds a new subscriber to the map
   */
  addSubscriber(source: number) {
    this.#subscribers.add(source);
    this.resync(source);
  }

  removeSubscriber(sub: number): boolean {
    return this.#subscribers.delete(sub);
  }

  hasSubscriber(sub: number): boolean {
    return this.#subscribers.has(sub);
  }

  subscriberCount() {
    return this.#subscribers.size;
  }

  private handleSync(data: MapChanges<K, V>[]) {
    for (const [change_type, key, value, possibly_undefined_subvalue] of data) {
      switch (change_type) {
        case MapChangeType.Add: {
          this.set(key!, value!);
          continue;
        }
        case MapChangeType.Remove: {
          super.delete(key!);
          continue;
        }
        case MapChangeType.Reset: {
          super.clear();
          continue;
        }
        case MapChangeType.Init: {
          // We also use this for whenever we want to resync a table
          super.clear();
          const key_value = key as [K, V][];
          for (const [k, v] of key_value) {
            this.set(k, v);
          }
          continue;
        }
        case MapChangeType.SubValueChanged: {
          const data = this.get(key!)!;
          // @ts-ignore
          data[value] = possibly_undefined_subvalue;
          continue;
        }
      }
    }
  }

  /*
   * Listens for the change on the specified key, it will get the resulting
   * value on the change
   */
  listenForChange(key: K, fn: ChangeListener<V>) {
    const listener = this.#changeListeners.get(key);
    listener ? listener.push(fn) : this.#changeListeners.set(key, [fn]);
  }

  #triggerEventForSubscribers(data: any) {
    const packed_data = msgpack_pack([this.#syncName, data]);
    for (const sub of this.#subscribers) {
      TriggerClientEventInternal(
        `${GlobalData.CurrentResource}:syncChanges`,
        sub as any,
        packed_data as any,
        packed_data.length,
      );
    }
  }

  #pushChangeForListener(key: K, value: V) {
    const listener = this.#changeListeners.get(key);
    if (!listener) return;
    for (const ln of listener) {
      ln(value);
    }
  }

  set(key: K, value: V): this {
    let v = value;

    // if we're an object
    if (value instanceof Object) {
      // define `this` so we can use it in the internal scope without breaking
      // any rules
      const curMap = this;

      // apply a proxy around any changes so if the fields
      const objectChangeHandler: ProxyHandler<any> = {
        get(target, prop, reciever) {
          return Reflect.get(target, prop, reciever);
        },
        set(target, p, newValue, receiver) {
          const success = Reflect.set(target, p, newValue, receiver);
          if (success) {
            curMap.#pushChangeForListener(key, target);

            $SERVER: {
              curMap.#queuedChanges.push([MapChangeType.SubValueChanged, key, p as string, newValue]);
            }
          }
          return success;
        },
      };
      v = new Proxy(v, objectChangeHandler);
    }

    super.set(key, v);

    this.#pushChangeForListener(key, v);
    $SERVER: {
      this.#queuedChanges.push([MapChangeType.Add, key, v]);
    }
    return this;
  }

  /*
   * Resets the map to its default state
   */
  clear(): void {
    $CLIENT: if (GlobalData.IS_CLIENT) throw new Error(`Cannot call 'clear' on client`);
    // if we're clearing our map then we want to remove all queued changes and
    // just push a reset
    this.#queuedChanges = [];
    this.#queuedChanges.push([MapChangeType.Reset]);
    super.clear();
  }

  delete(key: K): boolean {
    $CLIENT: if (GlobalData.IS_CLIENT) throw new Error(`Cannot call 'delete' on client`);
    this.#queuedChanges.push([MapChangeType.Remove, key]);
    return super.delete(key);
  }

  networkTick() {
    if (this.#queuedChanges.length !== 0) {
      this.#triggerEventForSubscribers(this.#queuedChanges);
      this.#queuedChanges = [];
    }
  }

  [Symbol.dispose]() {
    this.#subscribers.clear();
    this.#changeListeners.clear();
    this.#queuedChanges = [];

    netManager.removeNetworkedMap(this.#syncName);

    GlobalData.NetworkedTicks.filter((v) => v !== this);
  }

  /**
   * Unregisters from the tick handler and removes the event listener
   */
  dispose() {
    this[Symbol.dispose]();
  }

  get [Symbol.toStringTag](): string {
    return "NetworkedMap";
  }
}
