import { ErrorType, GlobalData } from "@common/GlobalData";

const AsyncFunction: any = (async () => {}).constructor;

/**
 * Registers the export call for {@link exportName} to this method
 */
export function Exports(exportName: string) {
  return function actualDecorator(originalMethod: any, context: ClassMethodDecoratorContext) {
    if (context.private) {
      throw new Error("Exports does not work on private methods, please mark the method as public");
    }

    context.addInitializer(function () {
      // biome-ignore lint: we don't know the function signature here this is just a generic function.
      let exportCb: Function;

      // we want to make sure we only make this an async function if the original constructor was async
      // otherwise we'll be implicitly converting their function from sync -> async which could cause
      // the caller unintentionally getting a promise they have to await.
      if (originalMethod instanceof AsyncFunction) {
        exportCb = async (...args: any[]) => {
          try {
            return await originalMethod.call(this, ...args);
          } catch (err) {
            GlobalData.OnError(ErrorType.Export, err as any, { name: exportName });
            throw err;
          }
        };
      } else {
        exportCb = (...args: any[]) => {
          try {
            return originalMethod.call(this, ...args);
          } catch (err) {
            GlobalData.OnError(ErrorType.Export, err as any, { name: exportName });
            throw err;
          }
        };
      }
      exports(exportName, exportCb);
    });
  };
}
