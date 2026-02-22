import type { MessageTypeEncoder } from "@common/decors/Proto";

type EventCallback = (...args: any[]) => void;
type RawEventCallback = (data: Uint8Array, source: `internal-net:${number}` | `net:${number}`) => void;

declare function RegisterNetEvent(eventName: string): void;
declare function msgpack_pack(...args : any[]): any; // actuall yreturns a "buffer line" Uint8Array.

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
    Net.onRaw(eventName, cb);
    RegisterNetEvent(eventName);
  }
}

export class NetServer extends Net {
  static emitNet(eventName: string, source: number, ...args: any[]) {
    emitNet(eventName, source, ...args);
  }

  static emitProto<T>(source: number, message: MessageTypeEncoder<T>) {
    const encoded = message.encode(message as T);
    NetServer.emitRawNet(message.name, source, encoded);
  }

  static broadcastProto<T>(sources: Iterable<number>, message: MessageTypeEncoder<T>) {
    const encoded = message.encode(message as T);
    NetServer.broadcastRaw(sources, message.name, encoded);
  }

  static broadcast(sources: Iterable<number>, eventName: string, ...args: any[]) {
    const packed = msgpack_pack(...args);

    for (const source of sources) {
      TriggerClientEventInternal(eventName, source as any, packed, packed.length);
    }
  }

  static broadcastRaw(sources: Iterable<number>, eventName: string, data: Uint8Array) {
    for (const source of sources) {
      NetServer.emitRawNet(eventName, source, data);
    }
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
  static emitProto<T>(message: MessageTypeEncoder<T>) {
    const encoded = message.encode(message as T);
    NetClient.emitRawNet(message.name, encoded);
  }
  static emitRawNet(eventName: string, data: Uint8Array) {
    // @ts-expect-error: Uint8Array is handled properly for TriggerClientEventInternal, so this is safe.
    TriggerServerEventInternal(eventName, data, data.byteLength);
  }
}
