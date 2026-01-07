export enum ErrorType {
  Event,
  NetEvent,
  Export,
  Nui,
  Tick,
  Immediate,
  ConVar,
}

function convertErrorTypeToName(errorType: ErrorType) {
  switch (errorType) {
    case ErrorType.Event:
      return "Event";
    case ErrorType.NetEvent:
      return "Net Event";
    case ErrorType.Export:
      return "Export";
    case ErrorType.Nui:
      return "Nui";
    case ErrorType.Tick:
      return "Tick";
    case ErrorType.Immediate:
      return "Immediate";
  }
}

export type NativeWrapperErrorType = (type: ErrorType, err: Error) => void;

export interface ErrorData {
  // This will be the name of the event/net event/etc.
  name?: string;
  // The source that caused the error, or undefined if there isn't one
  source?: number;
  // The arguments passed to the error, or undefined if there wasn't any.
  args?: any | any[];
}

globalThis.ShouldParseErrorArgs = true;

globalThis.FormatError = (errorType: ErrorType, err: Error, errorData: ErrorData) => {
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
    let jsonData: string;
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

globalThis.OnError = (type: ErrorType, err: Error, errorData: ErrorData) => {
  globalThis.FormatError(type, err, errorData);
};

/**
 * A static class containing useful
 */
export class GlobalData {
  static CurrentResource = GetCurrentResourceName();
  static GameName = GetGameName();
  static GameBuild = GetGameBuildNumber();
  static IS_SERVER = IsDuplicityVersion();
  static IS_REDM = GetGameName() === "redm";
  static IS_FIVEM = GetGameName() === "fivem";
  static IS_CLIENT = !GlobalData.IS_SERVER;
  static NetworkTick: number | null = null;
  static NetworkedTicks: any[] = [];
  /*
   * Called when one of the decors errors
   */
  static OnError = (type: ErrorType, err: Error, errorData: ErrorData) => {
    globalThis.OnError(type, err, errorData);
  };
}
