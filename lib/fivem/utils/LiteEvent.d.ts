export declare class LiteEvent implements LiteEvent {
    private handlers;
    on(handler: (...args: unknown[]) => any): void;
    off(handler: (...args: unknown[]) => any): void;
    emit(...args: unknown[]): void;
    expose(): LiteEvent;
}
