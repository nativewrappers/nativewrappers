var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { GlobalData } from "./GlobalData";
class Convar {
  static {
    __name(this, "Convar");
  }
  /**
   * @returns the current console buffer
   */
  buffer() {
    $CLIENT: {
      if (GlobalData.IS_CLIENT) {
        throw new Error("This function isn't available on the client");
      }
    }
    return GetConsoleBuffer();
  }
  get(variable, defaultVar) {
    return GetConvar(variable, defaultVar);
  }
  getInt(variable, defaultVar) {
    return GetConvarInt(variable, defaultVar);
  }
  getFloat(varName, defaultVar) {
    return GetConvarFloat(varName, defaultVar);
  }
  getBool(varName, defaultVar) {
    return GetConvarBool(varName, defaultVar);
  }
  set(variable, value) {
    $CLIENT: {
      if (GlobalData.IS_CLIENT) {
        throw new Error("This function isn't available on the client");
      }
    }
    SetConvar(variable, value);
  }
  setReplicated(variable, value) {
    $CLIENT: {
      if (GlobalData.IS_CLIENT) {
        throw new Error("This function isn't available on the client");
      }
    }
    SetConvarReplicated(variable, value);
  }
  setServerInfo(variable, value) {
    $CLIENT: {
      if (GlobalData.IS_CLIENT) {
        throw new Error("This function isn't available on the client");
      }
    }
    SetConvarServerInfo(variable, value);
  }
}
export {
  Convar
};
