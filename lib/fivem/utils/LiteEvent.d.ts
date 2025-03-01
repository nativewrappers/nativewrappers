export interface LiteEvent {
    on(handler: (...args: unknown[]) => any): void;
    off(handler: (...args: unknown[]) => any): void;
}
export declare class LiteEvent implements LiteEvent {
    private handlers;
    emit(...args: unknown[]): void;
    expose(): LiteEvent;
}
