import { GlobalData } from "@common/GlobalData";

const addAcePermission = (aceName: string, context: ClassMethodDecoratorContext) => {
  context.addInitializer(function () {
    // function name, and the permission map for that function
    const _t = this as { __permissionMap: Map<string | symbol, Set<string>> };

    _t.__permissionMap = _t.__permissionMap ?? new Map();

    const ace_list = _t.__permissionMap.get(context.name);

    if (ace_list) {
      ace_list.add(aceName);
    } else {
      _t.__permissionMap.set(context.name, new Set([aceName]));
    }
  });
};

/*
 * Restricts the call to the specified function to the specified group, this should jsut be the group name, 'group.' will be automatically suffixed.
 *
 * If multiple aces are required on an event this will only need one to be valid to succeed, there is currently no way to require all aces to be valid.
 *
 * NOTE: This currently only works on the `@NetEvent` decor.
 *
 * If a user doesn't have permissions it will trigger a `@nativewrappers:no_permission` event, which will return { eventName: string, method: string }
 */
export function RestrictToGroupAce(groupAceName: string) {
  return function actualDecorator(originalMethod: any, context: ClassMethodDecoratorContext) {
    if (context.private) {
      throw new Error("Exports does not work on private methods, please mark the method as public");
    }
    const groupAce = `group.${groupAceName}`;
    addAcePermission(groupAce, context);
  };
}

/*
 * Restricts the call to the specified function to the specified group, this should jsut be the group name, 'job.' will be automatically suffixed.
 *
 * If multiple aces are required on an event this will only need one to succeed, there is currently no way to require all aces to be valid.
 *
 * NOTE: This currently only works on the `@NetEvent` decor.
 *
 * If a user doesn't have permissions it will trigger a `@nativewrappers:no_permission` event, which will return { eventName: string, method: string }
 */
export function RestrictToJobAce(jobAce: string) {
  return function actualDecorator(originalMethod: any, context: ClassMethodDecoratorContext) {
    if (context.private) {
      throw new Error("Exports does not work on private methods, please mark the method as public");
    }
    const groupAce = `job.${jobAce}`;
    addAcePermission(groupAce, context);
  };
}

/*
 * Restricts the call to the specific ace name.
 *
 * If multiple aces are required on an event this will only need one to succeed, there is currently no way to require all aces to be valid.
 *
 * NOTE: This currently only works on the `@NetEvent` decor
 */
export function RestrictToAce(aceName: string) {
  return function actualDecorator(originalMethod: any, context: ClassMethodDecoratorContext) {
    if (context.private) {
      throw new Error("Exports does not work on private methods, please mark the method as public");
    }
    addAcePermission(aceName, context);
  };
}
