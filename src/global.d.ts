
declare global {
  /** Setting this to `false` will disable pretty printing arguments to JSON */
 var ShouldParseErrorArgs: boolean;

  function printError(errorName: string, err: Error): void;
  
  var OnError: (type: ErrorType, err: Error, errorData: ErrorData) => void;
  
  var FormatError: (errorType: ErrorType, err: Error, errorData: ErrorData) => any;

}

export {};
