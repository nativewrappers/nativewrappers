var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var ErrorType = /* @__PURE__ */ ((ErrorType2) => {
  ErrorType2[ErrorType2["Event"] = 0] = "Event";
  ErrorType2[ErrorType2["NetEvent"] = 1] = "NetEvent";
  ErrorType2[ErrorType2["Export"] = 2] = "Export";
  ErrorType2[ErrorType2["Nui"] = 3] = "Nui";
  ErrorType2[ErrorType2["Tick"] = 4] = "Tick";
  ErrorType2[ErrorType2["Immediate"] = 5] = "Immediate";
  return ErrorType2;
})(ErrorType || {});
globalThis.OnError = (type, err) => {
};
class GlobalData {
  static {
    __name(this, "GlobalData");
  }
  static CurrentResource = GetCurrentResourceName();
  static GameName = GetGameName();
  static GameBuild = GetGameBuildNumber();
  static IS_SERVER = IsDuplicityVersion();
  static IS_REDM = GetGameName() === "redm";
  static IS_FIVEM = GetGameName() === "fivem";
  static IS_CLIENT = !GlobalData.IS_SERVER;
  static NetworkTick = null;
  static NetworkedTicks = [];
  static EnablePrettyPrint = true;
  /*
   * Called when one of the decors errors
   */
  static OnError = /* @__PURE__ */ __name((type, err) => {
    globalThis.OnError(type, err);
  }, "OnError");
}
export {
  ErrorType,
  GlobalData
};
