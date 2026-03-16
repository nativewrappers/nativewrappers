var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { GlobalData } from "../GlobalData";
import { Net } from "../net/Net";
class NetworkedMapEventManager {
  static {
    __name(this, "NetworkedMapEventManager");
  }
  #syncedCalls = /* @__PURE__ */ new Map();
  constructor() {
    $SERVER: if (GlobalData.IS_SERVER) {
      on("playerDropped", () => {
        const src = source;
        for (const [_k, map] of this.#syncedCalls) {
          map.removeSubscriber(src);
        }
      });
      return;
    }
    $CLIENT: {
      if (GlobalState.IS_SERVER) return;
      Net.onRaw(`${GlobalData.CurrentResource}:syncChanges`, (msgpack_data) => {
        const data = msgpack_unpack(msgpack_data);
        const syncName = data[0];
        const syncData = data[1];
        const map = this.#syncedCalls.get(syncName);
        if (!map) {
          throw new Error(`Tried to sync changes for a networked map but ${syncName} does't exist.`);
        }
        map.handleSync(syncData);
      });
    }
  }
  addNetworkedMap(map) {
    this.#syncedCalls.set(map.SyncName, map);
  }
  removeNetworkedMap(syncName) {
    this.#syncedCalls.delete(syncName);
  }
}
const netManager = new NetworkedMapEventManager();
class NetworkedMap extends Map {
  static {
    __name(this, "NetworkedMap");
  }
  #syncName;
  #queuedChanges = [];
  #changeListeners = /* @__PURE__ */ new Map();
  #subscribers = /* @__PURE__ */ new Set();
  constructor(syncName) {
    super();
    this.#syncName = syncName;
    GlobalData.NetworkedTicks.push(this);
    netManager.addNetworkedMap(this);
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
  initialize(initialValue) {
    for (const [k, v] of initialValue) {
      this.set(k, v);
    }
  }
  get SyncName() {
    return this.#syncName;
  }
  // handles removing the player from the map whenever they're dropped
  onPlayerDropped() {
    this.removeSubscriber(source);
  }
  /*
   * Resyncs the entire map to the client, useful for if there's a mismatch in the clients map (when multiple players change things, in cases like inventories)
   */
  resync(source2) {
    if (!this.#subscribers.has(source2)) {
      console.error(`[NetworkedMap:resync] Tried to call resync on a source that wasn't already subscribed`);
      return;
    }
    const packed_data = msgpack_pack([
      this.#syncName,
      [[5 /* Resync */, this.size === 0 ? [] : Array.from(this)]]
    ]);
    TriggerClientEventInternal(
      `${GlobalData.CurrentResource}:syncChanges`,
      source2,
      packed_data,
      packed_data.length
    );
  }
  /*
   * Adds a new subscriber to the map, this will automatically call resync on the client.
   */
  addSubscriber(source2) {
    this.#subscribers.add(source2);
    this.resync(source2);
  }
  removeSubscriber(sub) {
    return this.#subscribers.delete(sub);
  }
  hasSubscriber(sub) {
    return this.#subscribers.has(sub);
  }
  subscriberCount() {
    return this.#subscribers.size;
  }
  handleSync(data) {
    for (const [change_type, key, value, possibly_undefined_subvalue] of data) {
      switch (change_type) {
        case 1 /* Add */: {
          this.set(key, value);
          continue;
        }
        case 2 /* Remove */: {
          super.delete(key);
          continue;
        }
        case 3 /* Reset */: {
          super.clear();
          continue;
        }
        case 5 /* Resync */: {
          for (const [, v] of this.#changeListeners) {
            for (const fn of v) {
              fn(void 0);
            }
          }
        }
        case 4 /* Init */: {
          super.clear();
          const key_value = key;
          for (const [k, v] of key_value) {
            this.set(k, v);
          }
          continue;
        }
        case 0 /* SubValueChanged */: {
          const data2 = this.get(key);
          data2[value] = possibly_undefined_subvalue;
          continue;
        }
      }
    }
  }
  /*
   * Listens for the change on the specified key, it will get the resulting
   * value on the change
   * NOTE: When the server calls `resync` this will get ran with `undefined` for
   * every change listener.
   */
  listenForChange(key, fn) {
    const listener = this.#changeListeners.get(key);
    listener ? listener.push(fn) : this.#changeListeners.set(key, [fn]);
  }
  #triggerEventForSubscribers(data) {
    const packed_data = msgpack_pack([this.#syncName, data]);
    for (const sub of this.#subscribers) {
      TriggerClientEventInternal(
        `${GlobalData.CurrentResource}:syncChanges`,
        sub,
        packed_data,
        packed_data.length
      );
    }
  }
  #pushChangeForListener(key, value) {
    const listener = this.#changeListeners.get(key);
    if (!listener) return;
    for (const ln of listener) {
      ln(value);
    }
  }
  /*
   * Adds {@param value} to the map under {@param key}, {@param value} will automatically be turned into a proxy
   * object and the NetworkedMap will automatically send events on SubValue changes.
   * ```ts
   *
   *  const map = new NetworkedMap<number, { name:string , quantity: number, obj: { nested_obj_description: string }}>("someUniqueName");
   *
   *  const item = {
   *    name: "magic_item",
   *    quantity: 1,
   *    obj: {
   *      something_description: "Will never be updated after init"
   *    }
   *  }
   *
   *  // automatically converts `item` into a proxy object
   *  map.set(1, item)
   *
   *  // if you immediately change the value this will not be recognized, you have to get the object again from the map
   *  item.quantity = 2;
   *
   *  // reactive object
   *  const proxy_object = map.get(1)!;
   *
   *  // sub value change will be sent to the client on the next network tick.
   *  proxy_object.quantity = 2;
   *
   *  // NOTE: this doesn't work on deeply nested objects, it will only work on anything assigned to the first object
   *  // This update will never be sent to the client, similar to how state bags work.
   *  proxy_object.obj.nested_obj_description = "Some new value"
   * ```
   * i.e. if you have { name: "magic_item", quantity: 1}
   * if you change the item.quantity field this will automatically be sync'd to the client, is only one depth deep
   * so if you have { obj: { some_quantity: 1 } } setting item.obj.some_quantity will not update the client.
   */
  set(key, value) {
    let v = value;
    if (value instanceof Object) {
      const curThis = this;
      const objectChangeHandler = {
        get(target, prop, reciever) {
          return Reflect.get(target, prop, reciever);
        },
        set(target, p, newValue, receiver) {
          const success = Reflect.set(target, p, newValue, receiver);
          if (success) {
            curThis.#pushChangeForListener(key, target);
            $SERVER: {
              curThis.#queuedChanges.push([0 /* SubValueChanged */, key, p, newValue]);
            }
          }
          return success;
        }
      };
      v = new Proxy(v, objectChangeHandler);
    }
    super.set(key, v);
    this.#pushChangeForListener(key, v);
    $SERVER: {
      this.#queuedChanges.push([1 /* Add */, key, v]);
    }
    return this;
  }
  /*
   * Resets the map to its default state
   */
  clear() {
    $CLIENT: if (GlobalData.IS_CLIENT) throw new Error(`Cannot call 'clear' on client`);
    this.#queuedChanges = [];
    this.#queuedChanges.push([3 /* Reset */]);
    super.clear();
  }
  delete(key) {
    $CLIENT: if (GlobalData.IS_CLIENT) throw new Error(`Cannot call 'delete' on client`);
    this.#queuedChanges.push([2 /* Remove */, key]);
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
  get [Symbol.toStringTag]() {
    return "NetworkedMap";
  }
}
export {
  NetworkedMap
};
