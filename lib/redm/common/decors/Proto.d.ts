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
export declare function OnProto<T>(messageType: MessageTypeDecoder<T>, eventName?: string): (originalMethod: ProtoCallback<T>, context: ClassMethodDecoratorContext) => void;
/**
 * This makes it very nice to handle events since we only have to give it the Protobuf Object
 */
export declare function OnProtoNet<T>(messageType: MessageTypeDecoder<T>, eventName?: string): (originalMethod: NetProtoCallback<T>, context: ClassMethodDecoratorContext) => void;
export {};
