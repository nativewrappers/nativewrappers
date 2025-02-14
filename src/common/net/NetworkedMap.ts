import { Event } from "@common/decors/Events";
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

type MapChanges<K, V> =
  | [MapChangeType, K?, V?]
  | [MapChangeType.SubValueChanged, K, string, any];

declare function msgpack_pack(data: any): Buffer;
declare function msgpack_unpack(data: Buffer): any;

type ChangeListener<V> = (value: V) => void;

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

    on("playerDropped", () => this.onPlayerDropped());

    // if we don't have a network tick then we want to register it.
    SERVER: {
      if (!GlobalData.NetworkTick && GlobalData.IS_SERVER) {
        GlobalData.NetworkTick = setTick(() => {
          for (const networkedThis of GlobalData.NetworkedTicks) {
            networkedThis.networkTick();
          }
        });
      }
    }

    SERVER: if (GlobalData.IS_SERVER) return;
    CLIENT: {
      RegisterResourceAsEventHandler(`${this.#syncName}:syncChanges`);
      addRawEventListener(`${this.#syncName}:syncChanges`, (data: any) =>
        this.#handleSync(data),
      );
    }
  }

  // handles removing the player from the map whenever they're dropped
  private onPlayerDropped() {
    this.removeSubscriber(source);
  }

  /*
   * Adds a new subscriber to the map, if the
   */
  addSubscriber(sub: number) {
    this.#subscribers.add(sub);
    const packed_data = msgpack_pack([[MapChangeType.Init, this.size === 0 ? [] : Array.from(this)]]);
    TriggerClientEventInternal(
      `${this.#syncName}:syncChanges`,
      sub as any,
      packed_data as any,
      packed_data.length,
    );
  }

  removeSubscriber(sub: number): boolean {
    return this.#subscribers.delete(sub);
  }

  hasSubscriber(sub: number): boolean {
    return this.#subscribers.has(sub);
  }

  #handleSync(msgpack_data: Buffer) {
    const data = msgpack_unpack(msgpack_data);
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
    const packed_data = msgpack_pack(data);
    for (const sub of this.#subscribers) {
      TriggerClientEventInternal(
        `${this.#syncName}:syncChanges`,
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

            SERVER: {
              curMap.#queuedChanges.push([
                MapChangeType.SubValueChanged,
                key,
                p as string,
                newValue,
              ]);
            }
          }
          return success;
        },
      };
      v = new Proxy(v, objectChangeHandler);
    }

    super.set(key, v);

    this.#pushChangeForListener(key, v);
    SERVER: {
      this.#queuedChanges.push([MapChangeType.Add, key, v]);
    }
    return this;
  }

  clear(): void {
    CLIENT: throw new Error(`Cannot call 'clear' on client`);
    // if we're clearing our map then we want to remove all queued changes and
    // just push a reset
    this.#queuedChanges = [];
    this.#queuedChanges.push([MapChangeType.Reset]);
    super.clear();
  }

  delete(key: K): boolean {
    CLIENT: throw new Error(`Cannot call 'delete' on client`);
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
    removeEventListener("playerDropped", this.onPlayerDropped);

    this.#subscribers.clear();
    this.#changeListeners.clear();
    this.#queuedChanges = [];

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
