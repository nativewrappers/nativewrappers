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
    NetServer.emitRawNet(message.name, source, encoded);
  }
  static emitProtoToPlayers(sources, message) {
    const encoded = message.encode(message);
    for (const source of sources) {
      NetServer.emitRawNet(message.name, source, encoded);
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
    NetClient.emitRawNet(message.name, encoded);
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
