var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var ErrorType = /* @__PURE__ */ ((ErrorType2) => {
  ErrorType2[ErrorType2["Event"] = 0] = "Event";
  ErrorType2[ErrorType2["NetEvent"] = 1] = "NetEvent";
  ErrorType2[ErrorType2["Export"] = 2] = "Export";
  ErrorType2[ErrorType2["Nui"] = 3] = "Nui";
  ErrorType2[ErrorType2["Tick"] = 4] = "Tick";
  ErrorType2[ErrorType2["Immediate"] = 5] = "Immediate";
  ErrorType2[ErrorType2["ConVar"] = 6] = "ConVar";
  return ErrorType2;
})(ErrorType || {});
function convertErrorTypeToName(errorType) {
  switch (errorType) {
    case 0 /* Event */:
      return "Event";
    case 1 /* NetEvent */:
      return "Net Event";
    case 2 /* Export */:
      return "Export";
    case 3 /* Nui */:
      return "Nui";
    case 4 /* Tick */:
      return "Tick";
    case 5 /* Immediate */:
      return "Immediate";
    case 6 /* ConVar */:
      return "ConVar";
  }
}
__name(convertErrorTypeToName, "convertErrorTypeToName");
globalThis.ShouldParseErrorArgs = true;
globalThis.FormatError = (errorType, err, errorData) => {
  const errorName = convertErrorTypeToName(errorType);
  console.error(`------- ${errorName} EVENT ERROR --------`);
  const { name, source, args } = errorData;
  if (name) {
    console.error(`Call to ${name} errored`);
  }
  if (source) {
    console.error(`Caller: ${source}`);
  }
  if (args && globalThis.ShouldParseErrorArgs) {
    let jsonData;
    try {
      jsonData = JSON.stringify(args);
    } catch {
      jsonData = "Failed to convert args to JSON";
    }
    console.error(`Data: ${jsonData}`);
  }
  globalThis.printError(errorName, err);
  console.error(`------- END ${errorName} EVENT ERROR --------`);
};
globalThis.OnError = (type, err, errorData) => {
  globalThis.FormatError(type, err, errorData);
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
  /*
   * Called when one of the decors errors
   */
  static OnError = /* @__PURE__ */ __name((type, err, errorData) => {
    globalThis.OnError(type, err, errorData);
  }, "OnError");
}
export {
  ErrorType,
  GlobalData
};
