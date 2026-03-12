var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
class Net {
  static {
    __name(this, "Net");
  }
  static emit(eventName, ...args) {
    emit(eventName, ...args);
  }
  static on(eventName, cb) {
    on(eventName, cb);
  }
  static onNet(eventName, cb) {
    onNet(eventName, cb);
  }
  static onRaw(eventName, cb) {
    RegisterResourceAsEventHandler(eventName);
    addRawEventListener(eventName, cb);
  }
  static onRawNet(eventName, cb) {
    Net.onRaw(eventName, cb);
    RegisterNetEvent(eventName);
  }
}
class NetServer extends Net {
  static {
    __name(this, "NetServer");
  }
  static emitNet(eventName, source, ...args) {
    emitNet(eventName, source, ...args);
  }
  static emitProto(source, message) {
    const encoded = message.encode(message);
    NetServer.emitRawNet(message.__proto_name__, source, encoded);
  }
  static broadcastProto(sources, message) {
    const encoded = message.encode(message);
    NetServer.broadcastRaw(sources, message.__proto_name__, encoded);
  }
  static broadcast(sources, eventName, ...args) {
    const packed = msgpack_pack(...args);
    for (const source of sources) {
      TriggerClientEventInternal(eventName, source, packed, packed.length);
    }
  }
  static broadcastRaw(sources, eventName, data) {
    for (const source of sources) {
      NetServer.emitRawNet(eventName, source, data);
    }
  }
  static emitRawNet(eventName, source, data) {
    TriggerClientEventInternal(eventName, source, data, data.byteLength);
  }
}
class NetClient extends Net {
  static {
    __name(this, "NetClient");
  }
  static emitNet(eventName, source, ...args) {
    emitNet(eventName, source, ...args);
  }
  static emitProto(message) {
    const encoded = message.encode(message);
    NetClient.emitRawNet(message.__proto_name__, encoded);
  }
  static emitRawNet(eventName, data) {
    TriggerServerEventInternal(eventName, data, data.byteLength);
  }
}
export {
  Net,
  NetClient,
  NetServer
};
