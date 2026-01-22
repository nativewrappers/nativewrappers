import { Net } from "@common/net/Net";

function parseSource(source: string): number {
  const id = source.replace(/^(internal-)?net:/, "");
  return parseInt(id, 10);
}

export type MessageTypeDecoder<T> = {
  decode: (input: Uint8Array) => T;
  name: string;
};

export type MessageTypeEncoder<T> = {
  encode: (message: T) => any;
  name: string;
};

type ProtoCallback<Message> = (message: Message) => Promise<void> | void;
type NetProtoCallback<Message> = (source: number, message: Message) => Promise<void> | void;

/**
 * PMA uses ts-proto to define our types, you can see that here: https://github.com/stephenh/ts-proto
 * You will have to modify the generator to add `name` or just use {@param eventName}
 *
 * We use this:
 * content = content.replace(/export const (\w+)[^=]*= \{/g, 'export const $1 = {\n  name: "$1" as const,');
 *
 * This makes it very nice to handle events since we only have to give it the Protobuf Object
 *
 */
export function OnProto<T>(messageType: MessageTypeDecoder<T>, eventName?: string) {
  const event = eventName ?? `${messageType.name}`;

  return function actualDecorator(originalMethod: ProtoCallback<T>, context: ClassMethodDecoratorContext) {
    if (context.private) {
      throw new Error("OnProto does not work on private methods");
    }

    context.addInitializer(function () {
      Net.onRaw(event, async (data: Uint8Array) => {
        try {
          const message = messageType.decode(data);
          return await originalMethod.call(this, message);
        } catch (e) {
          globalThis.printError?.("proto event", e as Error);
        }
      });
    });
  };
}

/**
 * This makes it very nice to handle events since we only have to give it the Protobuf Object
 */
export function OnProtoNet<T>(messageType: MessageTypeDecoder<T>, eventName?: string) {
  const event = eventName ?? `${messageType.name}`;

  return function actualDecorator(originalMethod: NetProtoCallback<T>, context: ClassMethodDecoratorContext) {
    if (context.private) {
      throw new Error("OnProto does not work on private methods");
    }

    context.addInitializer(function () {
      Net.onRawNet(event, async (data: Uint8Array, source) => {
        try {
          const message = messageType.decode(data);
          return await originalMethod.call(this, parseSource(source), message);
        } catch (e) {
          globalThis.printError?.("proto event", e as Error);
        }
      });
    });
  };
}
