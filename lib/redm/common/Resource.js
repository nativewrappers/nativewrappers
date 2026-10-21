var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { GlobalData } from "./GlobalData";
class Resource {
  constructor(name) {
    this.name = name;
  }
  static {
    __name(this, "Resource");
  }
  getMetadata(metadataKey, index) {
    return GetResourceMetadata(this.name, metadataKey, index);
  }
  getPath() {
    return GetResourcePath(this.name);
  }
  loadFile(fileName) {
    return LoadResourceFile(this.name, fileName);
  }
  saveFile(fileName, data, length) {
    $CLIENT: {
      if (GlobalData.IS_CLIENT) {
        throw new Error("This function isn't available on the client");
      }
    }
    return SaveResourceFile(this.name, fileName, data, length);
  }
  scheduleTick() {
    $CLIENT: {
      if (GlobalData.IS_CLIENT) {
        throw new Error("This function isn't available on the client");
      }
    }
    return ScheduleResourceTick(this.name);
  }
  start() {
    StartResource(this.name);
  }
  stop() {
    StopResource(this.name);
  }
  static startResource(name) {
    StartResource(name);
  }
  static stopResource(name) {
    StopResource(name);
  }
  static resourceCount() {
    return GetNumResources();
  }
}
export {
  Resource
};
