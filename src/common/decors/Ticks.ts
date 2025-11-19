import { ErrorType, GlobalData } from "@common/GlobalData";

/**
 * Gets called per server/client tick, this is asyncronous though, if you await
 * in it, it will not be called until whatever was being awaited resolves.
 */
export function SetTick() {
  return function actualDecorator(originalMethod: any, context: ClassMethodDecoratorContext) {
    if (context.private) {
      throw new Error("SetTick does not work on private types, please mark the field as public");
    }
    context.addInitializer(function () {
      setTick(async () => {
        try {
          await originalMethod.call(this);
        } catch (e) {
          GlobalData.OnError(ErrorType.Tick, e as Error);
        }
      });
    });
  };
}

/**
 * Gets called on the frame after the class is initialized.
 */
export function SetImmediate() {
  return function actualDecorator(originalMethod: any, context: ClassMethodDecoratorContext) {
    if (context.private) {
      throw new Error("SetTick does not work on private types, please mark the field as public");
    }
    context.addInitializer(function () {
      setImmediate(async () => {
        try {
          await originalMethod.call(this);
        } catch (e) {
          GlobalData.OnError(ErrorType.Immediate, e as Error);
        }
      });
    });
  };
}
