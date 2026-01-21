type EventCallback = (...args: any[]) => void;
type RawEventCallback = (data: Uint8Array, source: `internal-net:${number}` | `net:${number}`) => void;

declare function RegisterNetEvent(eventName: string): void;

export class Net {
  static emit(eventName: string, ...args: any[]) {
    emit(eventName, ...args);
  }

  static on(eventName: string, cb: EventCallback) {
    on(eventName, cb);
  }

  static onNet(eventName: string, cb: EventCallback) {
    onNet(eventName, cb);
  }

  static onRaw(eventName: string, cb: RawEventCallback) {
    RegisterResourceAsEventHandler(eventName);
    addRawEventListener(eventName, cb);
  }

  static onRawNet(eventName: string, cb: RawEventCallback) {
    RegisterNetEvent(eventName);
    Net.onRaw(eventName, cb);
  }
}

export class NetServer extends Net {
  static emitNet(eventName: string, source: number, ...args: any[]) {
    emitNet(eventName, source, ...args);
  }
  static emitRawNet(eventName: string, source: number, data: Uint8Array) {
    // @ts-expect-error: Uint8Array is handled properly for TriggerClientEventInternal, so this is safe.
    TriggerClientEventInternal(eventName, source, data, data.byteLength);
  }
}

export class NetClient extends Net {
  static emitNet(eventName: string, source: number, ...args: any[]) {
    emitNet(eventName, source, ...args);
  }
  static emitRawNet(eventName: string, source: number, data: Uint8Array) {
    // @ts-expect-error: Uint8Array is handled properly for TriggerClientEventInternal, so this is safe.
    TriggerClientEventInternal(eventName, source, data, data.byteLength);
  }
}
